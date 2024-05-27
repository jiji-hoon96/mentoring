import PROMISES_STATE from './utils/state';

type Executor<T> = (
  resolve: (value: T | MyPromise<T>) => void,
  reject: (reason?: unknown) => void
) => void;

class MyPromise<T = unknown> {
  #state: string = PROMISES_STATE.pending;
  #value: T | null = null;

  #catchCallbacks: ((reason?: unknown) => void)[] = [];
  #thenCallbacks: ((value: T) => void)[] = [];

  constructor(executor: Executor<T>) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (error) {
      this.#reject(error);
    }
  }

  #runCallbacks(): void {
    if (this.#state === PROMISES_STATE.fulfilled) {
      this.#thenCallbacks.forEach((callback) => callback(this.#value as T));
      this.#thenCallbacks = [];
    }

    if (this.#state === PROMISES_STATE.rejected) {
      this.#catchCallbacks.forEach((callback) => callback(this.#value));
      this.#catchCallbacks = [];
    }
  }

  #update(state: string, value: T | MyPromise<T> | unknown): void {
    queueMicrotask(() => {
      if (this.#state !== PROMISES_STATE.pending) return;
      if (value instanceof MyPromise) {
        value.then(this.#resolve.bind(this), this.#reject.bind(this));
        return;
      }
      this.#state = state;
      this.#value = value as T;
      this.#runCallbacks();
    });
  }

  #resolve(value: T | MyPromise<T>): void {
    this.#update(PROMISES_STATE.fulfilled, value);
  }

  #reject(error: unknown): void {
    this.#update(PROMISES_STATE.rejected, error);
  }

  then<TResult = T>(
    thenCallback?: (value: T) => TResult | MyPromise<TResult>,
    catchCallback?: (reason?: unknown) => TResult | MyPromise<TResult>
  ): MyPromise<TResult> {
    return new MyPromise<TResult>((resolve, reject) => {
      this.#thenCallbacks.push((value: T) => {
        if (!thenCallback) {
          resolve(value as unknown as TResult); // TypeScript type assertion
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

  catch<TResult = T>(
    catchCallback?: (reason?: unknown) => TResult | MyPromise<TResult>
  ): MyPromise<TResult> {
    return this.then(undefined, catchCallback);
  }

  finally(callback: () => void): MyPromise<T> {
    return this.then(
      (value) => {
        callback();
        return value;
      },
      (value) => {
        callback();
        throw value;
      }
    );
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('첫번째 프라미스');
  }, 1000);
})
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve('두번째 프라미스');
      }, 1000);
    });
  })
  .then((res) => {
    console.log(res);
  });
