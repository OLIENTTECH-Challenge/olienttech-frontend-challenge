import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import SamplePage from './pages/sample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sample',
    element: <SamplePage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
