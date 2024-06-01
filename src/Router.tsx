import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Target } from './pages/Target.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/target',
    element: <Target/ >
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
