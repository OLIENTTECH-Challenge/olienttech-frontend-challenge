import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import SamplePage from './pages/sample';
import LoginPage from './pages/manufacturer/login';
import ProductListPage from './pages/manufacturer/products';
import { manufacturerAuthLoader } from './loader';

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
    loader: manufacturerAuthLoader,
    element: <ProductListPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
