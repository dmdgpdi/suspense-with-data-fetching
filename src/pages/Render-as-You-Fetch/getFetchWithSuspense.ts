const cache: any = {};

type WrappedPromise<T> = {
  read: () => T;
};

const wrapPromise = <T>(promise: Promise<T>): WrappedPromise<T> => {
  let status = 'pending';
  let response: T;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      response = res;
    },
    (err) => {
      status = 'error';
      response = err;
    },
  );

  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

const getFetchWithSuspense = <T>(url: string): WrappedPromise<T> => {
  if (!cache[url]) {
    cache[url] = wrapPromise<T>(
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
    );
  }

  return cache[url];
};

export { getFetchWithSuspense };
