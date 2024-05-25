class MyPromise {
  #value = null;

  constructor(executor) {
    this.#value = null;

    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #resolve(value) {
    this.#value = value;
  }

  #reject(error) {
    this.#value = error;
  }

  then(callback) {
    callback(this.#value);

    return this;
  }

  catch(callback) {
    callback(this.#value);

    return this;
  }
}

function testMyPromise(input) {
  return new MyPromise((resolve, reject) => {
    if (input === 1) {
      resolve('정상적입니다');
    }
    reject('입력값이 1이 아닙니다');
  });
}

testMyPromise(1)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

export default MyPromise;
