import { useQuery } from '@tanstack/react-query';

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

const getCatData = async () => {
  const response = await fetch(getCatDateUrl);
  const data: CatDataType[] = await response.json();
  return data[0];
};
const getCatInfo = async (id: number): Promise<CatInfoType> => {
  const response = await fetch(getCatInfoUrl(id));
  const data = await response.json();
  return data.data[0];
};

export function CatProfile() {
  console.time('로딩 시간');
  const { data: catData } = useQuery<CatDataType>({
    queryKey: ['catData'],
    queryFn: getCatData,
  });

  if (!catData) {
    return <h1>Cat profile loading</h1>;
  }

  return (
    <div>
      <h1>CAT Profile </h1>
      <p>{catData.id}</p>
      <img src={catData.url} alt="" width={200} height={200} />
      <CatInfo id={1} />
    </div>
  );
}

function CatInfo({ id }: { id: number }) {
  const { data: catInfo } = useQuery({
    queryKey: ['catInfo', id],
    queryFn: () => getCatInfo(id),
  });

  if (!catInfo) {
    return <h1>Cat info loading</h1>;
  }

  console.timeEnd('로딩 시간');

  return (
    <div>
      <h1>CAT Image</h1>
      <p>{catInfo}</p>
    </div>
  );
}

export default function UseEffectForDataFetch() {
  return <CatProfile></CatProfile>;
}
