import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import SamplePage from './pages/sample';
import LoginPage from './pages/manufacturer/login';
import ProductListPage from './pages/manufacturer/products';
import { manufacturerAuthLoader } from './loader';
import ManufacturerHomePage from './pages/manufacturer';

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
    path: '/manufacturer',
    loader: manufacturerAuthLoader,
    element: <ManufacturerHomePage />,
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
