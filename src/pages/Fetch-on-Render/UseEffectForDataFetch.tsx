import { useEffect, useState } from 'react';

type CatDataType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type CatInfoType = string;

const getCatDateUrl = 'https://api.thecatapi.com/v1/images/search';
const getCatInfoUrl = (id: number) =>
  `https://meowfacts.herokuapp.com/?id=${id}&lang=kor-ko`;

export function CatProfile() {
  console.time('로딩 시간');
  const [cat, setCat] = useState<CatDataType>();

  useEffect(() => {
    const getCatData = async () => {
      const response = await fetch(getCatDateUrl);
      const data: CatDataType[] = await response.json();
      setCat(data[0]);
    };

    getCatData();
  }, []);

  if (!cat) {
    return <h1>Cat profile loading</h1>;
  }

  return (
    <div>
      <h1>CAT Profile</h1>
      <p>{cat.id}</p>
      <img src={cat.url} alt="" width={200} height={200} />
      <CatInfo id={1} />
    </div>
  );
}

function CatInfo({ id }: { id: number }) {
  const [catInfo, setCatInfo] = useState<CatInfoType>();

  useEffect(() => {
    const getCatInfo = async () => {
      const response = await fetch(getCatInfoUrl(id));
      const data = await response.json();
      setCatInfo(data.data[0]);
    };

    getCatInfo();
  }, []);

  if (!catInfo) {
    return <h1>Cat info loading</h1>;
  }

  console.timeEnd('로딩 시간');

  return (
    <div>
      <h1>CAT Info</h1>
      <p>{catInfo}</p>
    </div>
  );
}

export default function UseEffectForDataFetch() {
  return <CatProfile></CatProfile>;
}
