import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import SamplePage from './pages/sample';
import LoginPage from './pages/manufacturer/login';
import StocksPage from './pages/manufacturer/stocks';
import ProductListPage from './pages/manufacturer/products';

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
    path: '/manufacturer/login',
    element: <LoginPage />,
  },
  {
    path: '/manufacturer/products',
    element: <ProductListPage />,
  },
  {
    path: '/manufacturer/stocks',
    element: <StocksPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
