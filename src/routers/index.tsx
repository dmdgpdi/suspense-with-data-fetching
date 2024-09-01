import { createBrowserRouter } from 'react-router-dom';
import RouterPage from '../pages/RouterPage';
import { CatProfile } from '../pages/Fetch-on-Render/UseEffectForDataFetch';
import { CatProfile as CatProfileTanstackQuery } from '../pages/Fetch-on-Render/UseTanstackQuery';
import { CatProfileWithBasicSuspense } from '../pages/Render-as-You-Fetch/SuspenseDataFetching';

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
]);
