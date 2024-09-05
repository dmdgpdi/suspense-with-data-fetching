import { CatDataType, CatInfoType } from '../types';

const getCatDateUrl = 'https://api.thecatapi.com/v1/images/search';
const getCatInfoUrl = (id: number) =>
  `https://meowfacts.herokuapp.com/?id=${id}&lang=kor-ko`;

const getCatDataQuery = async () => {
  const response = await fetch(getCatDateUrl);
  const data: CatDataType[] = await response.json();
  return data[0];
};
const getCatInfoQuery = async (id: number): Promise<CatInfoType> => {
  const response = await fetch(getCatInfoUrl(id));
  const data = await response.json();
  return data.data[0];
};

export { getCatDataQuery, getCatInfoQuery };
export { getCatInfoUrl, getCatDateUrl };
export { use } from './use';
