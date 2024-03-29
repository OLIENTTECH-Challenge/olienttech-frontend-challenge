import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { manufacturerAuthLoader } from './loader';
import HomePage from './pages';
import ManufacturerHomePage from './pages/manufacturer';
import ManufacturerLayout from './pages/manufacturer/layout';
import ManufacturerLoginPage from './pages/manufacturer/login';
import ManufacturerOrderPage from './pages/manufacturer/order';
import ManufacturerOrderListPage from './pages/manufacturer/orders';
import ManufacturerProductListPage from './pages/manufacturer/products';
import ShopHomePage from './pages/shop';
import ShopLayout from './pages/shop/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <ManufacturerLayout />,
    children: [
      { path: '/manufacturer', element: <ManufacturerHomePage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/products', element: <ManufacturerProductListPage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/orders', element: <ManufacturerOrderListPage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/orders/:orderId', element: <ManufacturerOrderPage />, loader: manufacturerAuthLoader },
      { path: '/manufacturer/login', element: <ManufacturerLoginPage /> },
    ],
  },
  {
    element: <ShopLayout />,
    children: [{ path: '/shop', element: <ShopHomePage /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
