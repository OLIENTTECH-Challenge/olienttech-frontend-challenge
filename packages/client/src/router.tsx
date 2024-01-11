import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import LoginPage from './pages/manufacturer/login';
import ProductListPage from './pages/manufacturer/products';
import { manufacturerAuthLoader } from './loader';
import ManufacturerHomePage from './pages/manufacturer';
import ManufacturerLayout from './pages/manufacturer/layout';
import OrderListPage from './pages/manufacturer/orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <ManufacturerLayout />,
    children: [
      { path: '/manufacturer', element: <ManufacturerHomePage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/products', element: <ProductListPage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/orders', element: <OrderListPage />, loader: manufacturerAuthLoader },
    ],
  },
  { path: '/manufacturer/login', element: <LoginPage /> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
