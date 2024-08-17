import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

let cache = null; // 간단한 캐싱을 위한 변수

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

function Page() {
  const asyncData = useGetAsyncFunc();

  return <h1>Page {asyncData}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading App.tsx</h1>}>
      <Page />
    </Suspense>
  </React.StrictMode>,
);
