/* eslint-disable consistent-return */
const PROMISES_STATE = Object.freeze({
  pending: 'PENDING',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
});

class MyPromise {
  #state = PROMISES_STATE.pending;

  #value = null;

  #lastCallbacks = [];

  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #update(state, value) {
    queueMicrotask(() => {
      this.#state = state;
      this.#value = value;
      this.#lastCallbacks.forEach((lastCallback) => lastCallback());
    });
  }

  #resolve(value) {
    this.#update(PROMISES_STATE.fulfilled, value);
  }

  #reject(error) {
    this.#update(PROMISES_STATE.rejected, error);
  }

  #asyncResolve(callback) {
    if (this.#state === PROMISES_STATE.pending) {
      return new MyPromise((resolve) =>
        this.#lastCallbacks.push(() => resolve(callback(this.#value)))
      );
    }

    return null;
  }

  #syncResolve(callback) {
    if (this.#state === PROMISES_STATE.fulfilled) {
      return new MyPromise((resolve) => resolve(callback(this.#value)));
    }

    return null;
  }

  then(callback) {
    return this.#asyncResolve(callback) || this.#syncResolve(callback);
  }

  catch(callback) {
    if (this.state === PROMISES_STATE.rejected) {
      callback(this.#value);
    }

    return this;
  }
}

function myPromiseFn2() {
  return new MyPromise((resolve, reject) => {
    resolve('Promise 실행');
  });
}

const test = () => {
  console.log('첫 번째 콜스택 실행');
  setTimeout(() => console.log('태스크 큐 실행'), 0);

  myPromiseFn2().then((result) => console.log(result));

  console.log('두 번째 콜스택 실행');
};

test();
