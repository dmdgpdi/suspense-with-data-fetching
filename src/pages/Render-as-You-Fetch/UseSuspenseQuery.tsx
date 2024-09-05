import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getCatDataQuery, getCatInfoQuery } from '../../apis';

export function CatProfileWithUseSuspenseQuery() {
  console.time('로딩 시간');
  console.log('CatProfileWithUseSuspenseQuery start');

  return (
    <Suspense fallback={<h1>Cat profile loading</h1>}>
      <CatProfile />
      <Suspense fallback={<h1>Cat info loading</h1>}>
        <CatInfo id={1} />
      </Suspense>
    </Suspense>
  );
}

export function CatProfile() {
  console.time('로딩 시간');
  console.log('CatProfile fetch start');

  const { data: catData } = useSuspenseQuery({
    queryKey: ['catData'],
    queryFn: getCatDataQuery,
  });

  console.log('CatProfile fetch end');

  return (
    <div>
      <h1>CAT Profile </h1>
      <p>{catData.id}</p>
      <img src={catData.url} alt='' width={200} height={200} />
    </div>
  );
}

function CatInfo({ id }: { id: number }) {
  console.log('CatInfo fetch start');
  const { data: catInfo } = useSuspenseQuery({
    queryKey: ['catInfo', id],
    queryFn: () => getCatInfoQuery(id),
  });

  console.log('CatInfo fetch end');

  console.timeEnd('로딩 시간');

  return (
    <div>
      <h1>CAT Image</h1>
      <p>{catInfo}</p>
    </div>
  );
}
