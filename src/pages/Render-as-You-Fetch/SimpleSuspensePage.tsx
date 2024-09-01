let cache: any = null; // 간단한 캐싱을 위한 변수

function asynchronousFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise over!');
      resolve(3);
    }, 500);
  })
    .then((value = '') => {
      console.log(`Promise then ${value}`);
      return 3;
    })
    .catch((error) => {
      console.warn(`error:`, error);
    });
}

function useGetAsyncFunc() {
  if (cache) {
    return cache;
  }

  throw asynchronousFunction().then((data) => {
    cache = data; // 데이터를 캐싱해두기
  });
}

export default function Page() {
  const asyncData = useGetAsyncFunc();

  return <h1>Page {asyncData}</h1>;
}
