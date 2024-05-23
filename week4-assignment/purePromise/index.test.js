import MyPromise from '.';

describe('MyPromise', () => {
  test('should resolve with the correct value', (done) => {
    const promise = new MyPromise((resolve) => {
      resolve('my resolve');
    });

    promise.then((value) => {
      try {
        expect(value).toBe('my resolve');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test('should support chaining', (done) => {
    const promise = new MyPromise((resolve) => {
      resolve('first resolve');
    });

    promise
      .then((value) => {
        expect(value).toBe('first resolve');
        return 'second resolve';
      })
      .then((value) => {
        expect(value).toBe('first resolve');
        done();
      });
  });
});
