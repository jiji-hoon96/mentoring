const PROMISES_STATE = Object.freeze({
  pending: 'PENDING',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
});
class MyPromise {
  #value = null;

  #state = PROMISES_STATE.PENDING;

  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #resolve(value) {
    this.#state = PROMISES_STATE.fulfilled;
    this.#value = value;
  }

  #reject(error) {
    this.#state = PROMISES_STATE.rejected;
    this.#value = error;
  }

  then(callback) {
    if (this.#state === PROMISES_STATE.fulfilled) {
      callback(this.#value);
    }

    return this;
  }

  catch(callback) {
    if (this.#state === PROMISES_STATE.rejected) {
      callback(this.#value);
    }

    return this;
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

myPromiseFn2(1)
  .then((v) => {
    console.log(v);
    return '체이닝 확인??';
  })
  .then((v) => console.log(v))
  .catch((v) => console.log(v));
