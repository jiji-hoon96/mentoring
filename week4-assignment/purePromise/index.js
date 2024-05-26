/* eslint-disable consistent-return */
const PROMISES_STATE = Object.freeze({
  pending: 'PENDING',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
});

class MyPromise {
  #state = PROMISES_STATE.pending;

  #value = null;

  #catchCallbacks = [];

  #thenCallbacks = [];

  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #runCallbacks() {
    if (this.#state === PROMISES_STATE.fulfilled) {
      this.#thenCallbacks.forEach((callback) => callback(this.#value));
      this.#thenCallbacks = [];
    }

    if (this.#state === PROMISES_STATE.rejected) {
      this.#catchCallbacks.forEach((callback) => callback(this.#value));
      this.#catchCallbacks = [];
    }
  }

  #update(state, value) {
    queueMicrotask(() => {
      this.#state = state;
      this.#value = value;
      this.#runCallbacks();
    });
  }

  #resolve(value) {
    this.#update(PROMISES_STATE.fulfilled, value);
  }

  #reject(error) {
    this.#update(PROMISES_STATE.rejected, error);
  }

  then(thenCallback, catchCallback) {
    return new MyPromise((resolve, reject) => {
      this.#thenCallbacks.push((value) => {
        if (!thenCallback) {
          resolve(value);
          return;
        }

        try {
          resolve(thenCallback(value));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCallbacks.push((value) => {
        if (!catchCallback) {
          reject(value);
          return;
        }

        try {
          resolve(catchCallback(value));
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  catch(catchCallback) {
    return this.then(undefined, catchCallback);
  }
}

function myPromiseFn2(input) {
  return new MyPromise((resolve, reject) => {
    if (input === 1) {
      resolve('성공');
    } else {
      reject('실패');
    }
  });
}

myPromiseFn2(2)
  .then((v) => {
    console.log(v);
    return v;
  })
  .catch((v) => {
    console.log(v);
    return '오류 발생!!!';
  })
  .then((v) => console.log(v));
