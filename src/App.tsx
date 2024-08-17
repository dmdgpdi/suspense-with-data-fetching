import './App.css';

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise over!');
    resolve(3);
  }, 300);
}).then((value = '') => {
  console.log(`Promise then ${value}`);
  return 3;
});

const wrapPromise = (promise) => {
  let status = 'pending';
  let response;

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

const resource = wrapPromise(p);

function App() {
  const res = resource.read();

  return <h1>App.tsx {res}</h1>;
}

export default App;
