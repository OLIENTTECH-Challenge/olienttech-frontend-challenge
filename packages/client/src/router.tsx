import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import SamplePage from './pages/sample';
import StocksPage from './pages/stocks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sample',
    element: <SamplePage />,
  },
  {
    path: '/stocks',
    element: <StocksPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
