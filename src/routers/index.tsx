import { createBrowserRouter } from 'react-router-dom';
import RouterPage from '../pages/RouterPage';
import { CatProfile } from '../pages/Fetch-on-Render/UseEffectForDataFetch';
import { CatProfile as CatProfileTanstackQuery } from '../pages/Fetch-on-Render/UseTanstackQuery';
import { CatProfileWithBasicSuspense } from '../pages/Render-as-You-Fetch/SuspenseDataFetching';
import {
  CatProfileWithLoaderAndUseHook,
  getCatProfile,
} from '../pages/Render-as-You-Fetch/DataFetchingWithLoaderAndUse';
import { CatProfileWithUseSuspenseQuery } from '../pages/Render-as-You-Fetch/UseSuspenseQuery';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterPage />,
  },
  {
    path: '/useEffect',
    element: <CatProfile />,
  },
  {
    path: '/useQuery',
    element: <CatProfileTanstackQuery />,
  },
  {
    path: '/basicSuspense',
    element: <CatProfileWithBasicSuspense />,
  },
  {
    path: '/reactRouterDomLoaderAndUseHook',
    loader: getCatProfile,
    element: <CatProfileWithLoaderAndUseHook />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/useSuspenseQuery',
    element: <CatProfileWithUseSuspenseQuery />,
  },
]);
