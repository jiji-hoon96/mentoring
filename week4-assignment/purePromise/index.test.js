import MyPromise from '.';

describe('MyPromise', () => {
  test('resolve 정상적으로 작동되는지 테스트', async () => {
    const value = await new MyPromise((resolve) => {
      setTimeout(() => resolve('resolved value'), 100);
    });
    expect(value).toBe('resolved value');
  });

  test('rejects 정상적으로 작동되는지 테스트', async () => {
    try {
      await new MyPromise((resolve, reject) => {
        setTimeout(() => reject('rejected value'), 100);
      });
    } catch (error) {
      expect(error).toBe('rejected value');
    }
  });

  test('Method Chain을 이용해 then 구문이 정확히 동작하는지 테스트', async () => {
    const value = await await new MyPromise((resolve) => {
      setTimeout(() => resolve('first value'), 100);
    })
      .then((value) => {
        expect(value).toBe('first value');
        return 'second value';
      })
      .then((value) => {
        expect(value).toBe('second value');
        return value;
      });
    expect(value).toBe('second value');
  });

  test('Method Chain을 이용해 catch 구문이 정확히 동작하는지 테스트', async () => {
    try {
      await new MyPromise((resolve, reject) => {
        setTimeout(() => reject('first error'), 100);
      })
        .catch((value) => {
          expect(value).toBe('first error');
          throw 'second error';
        })
        .catch((error) => {
          expect(error).toBe('second error');
        });
    } catch (error) {
      // Catch any unexpected errors
      expect(error).toBeUndefined();
    }
  });

  test('finally가 then 뒤에 정상적으로 작동되는지 테스트', async () => {
    let finallyCalled = false;
    await new MyPromise((resolve) => {
      setTimeout(() => resolve('resolved value'), 100);
    })
      .then((value) => {
        expect(value).toBe('resolved value');
      })
      .finally(() => {
        finallyCalled = true;
      });
    expect(finallyCalled).toBe(true);
  });

  test('finally가 catch 뒤에 정상적으로 작동되는지 테스트', async () => {
    let finallyCalled = false;
    await new MyPromise((resolve, reject) => {
      setTimeout(() => reject('rejected value'), 100);
    })
      .catch((value) => {
        expect(value).toBe('rejected value');
      })
      .finally(() => {
        finallyCalled = true;
      });
    expect(finallyCalled).toBe(true);
  });
});
