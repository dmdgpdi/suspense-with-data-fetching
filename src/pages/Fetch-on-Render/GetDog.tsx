import { useEffect, useState } from 'react';

type DogDataType = {
  message: string;
  status: string;
};

export default function GetDog() {
  const [dog, setDog] = useState<DogDataType>();

  useEffect(() => {
    const getDog = async () => {
      console.log('dog data loading start');
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data: DogDataType = await response.json();
      setDog(data);
      console.log('dog data loading end');
    };

    getDog();
  }, []);

  if (!dog) {
    return <h1>Dog image loading</h1>;
  }

  return (
    <div>
      <h1>Dog Image</h1>
      <img src={dog.message} alt="" width={200} height={200} />
    </div>
  );
}
