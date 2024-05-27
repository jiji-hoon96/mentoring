import MyPromise from '.';

describe('MyPromise', () => {
  test('resolve 정상적으로 작동되는지 테스트', (done) => {
    new MyPromise((resolve) => {
      setTimeout(() => resolve('resolved value'), 100);
    }).then((value) => {
      expect(value).toBe('resolved value');
      done();
    });
  });

  test('rejects 정상적으로 작동되는지 테스트', (done) => {
    new MyPromise((resolve, reject) => {
      setTimeout(() => reject('rejected value'), 100);
    }).catch((value) => {
      expect(value).toBe('rejected value');
      done();
    });
  });

  test('Method Chain을 이용해 then 구문이 정확히 동작하는지 테스트', (done) => {
    new MyPromise((resolve) => {
      setTimeout(() => resolve('first value'), 100);
    })
      .then((value) => {
        expect(value).toBe('first value');
        return 'second value';
      })
      .then((value) => {
        expect(value).toBe('second value');
        done();
      });
  });

  test('Method Chain을 이용해 catch 구문이 정확히 동작하는지 테스트', (done) => {
    new MyPromise((resolve, reject) => {
      setTimeout(() => reject('first error'), 100);
    })
      .catch((value) => {
        expect(value).toBe('first error');
        throw 'second error';
      })
      .catch((value) => {
        expect(value).toBe('second error');
        done();
      });
  });

  test('finally가 then 뒤에 정상적으로 작동되는지 테스트', (done) => {
    let finallyCalled = false;
    new MyPromise((resolve) => {
      setTimeout(() => resolve('resolved value'), 100);
    })
      .then((value) => {
        expect(value).toBe('resolved value');
      })
      .finally(() => {
        finallyCalled = true;
      });

    setTimeout(() => {
      expect(finallyCalled).toBe(true);
      done();
    }, 200);
  });

  test('finally가 catch 뒤에 정상적으로 작동되는지 테스트', (done) => {
    let finallyCalled = false;
    new MyPromise((resolve, reject) => {
      setTimeout(() => reject('rejected value'), 100);
    })
      .catch((value) => {
        expect(value).toBe('rejected value');
      })
      .finally(() => {
        finallyCalled = true;
      });

    setTimeout(() => {
      expect(finallyCalled).toBe(true);
      done();
    }, 200);
  });
});
