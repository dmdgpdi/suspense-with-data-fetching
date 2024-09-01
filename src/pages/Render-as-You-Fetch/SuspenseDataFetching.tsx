import { Suspense } from 'react';
import { getFetchWithSuspense } from './getFetchWithSuspense';
import { getCatDateUrl, getCatInfoUrl } from '../../apis';
import type { CatDataType, CatInfoType } from '../../types';

export function CatProfileWithBasicSuspense() {
  console.time('로딩 시간');
  return (
    <Suspense fallback={<h1>Cat profile loading</h1>}>
      <CatProfile />
      <Suspense fallback={<h1>Cat info loading</h1>}>
        <CatInfo id={1} />
      </Suspense>
    </Suspense>
  );
}

function CatProfile() {
  const cat = getFetchWithSuspense<CatDataType[]>(getCatDateUrl).read()[0];

  return (
    <div>
      <h1>CAT Profile</h1>
      <p>{cat.id}</p>
      <img src={cat.url} alt="" width={200} height={200} />
    </div>
  );
}

function CatInfo({ id }: { id: number }) {
  const catInfo = getFetchWithSuspense<{ data: CatInfoType[] }>(
    getCatInfoUrl(id),
  ).read().data[0];

  console.timeEnd('로딩 시간');

  return (
    <div>
      <h1>CatInfo</h1>
      <p>{catInfo}</p>
    </div>
  );
}
