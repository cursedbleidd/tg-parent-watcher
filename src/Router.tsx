import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { RandomPerson } from './pages/RandomPerson.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RandomPerson />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
