class MyPromise {
  #value = null;

  constructor(executor) {
    executor((value) => {
      this.#value = value;
    });
  }

  then(callback) {
    callback(this.#value);

    return this;
  }
}

function testMyPromise() {
  return new MyPromise((resolve) => {
    resolve('my resolve');
  });
}

testMyPromise().then((value) => console.log(value));
