/* eslint-disable @typescript-eslint/no-explicit-any */
type AdvancedPromise<T> = Promise<T> & {
  status?: 'fulfilled' | 'rejected' | 'pending';
  value?: T;
  reason?: any;
};

export function use<T>(promise: AdvancedPromise<T> | T): T {
  if (!(promise instanceof Promise)) {
    return promise;
  }

  console.log('promise start', promise);

  if (promise.status === 'fulfilled') {
    console.log('return fulfilled', promise.value!);

    return promise.value!;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    console.log('throw pending');

    throw promise;
  } else {
    console.log('set pending');

    promise.status = 'pending';

    throw promise.then(
      (result: T) => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      (reason: any) => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
  }
}
