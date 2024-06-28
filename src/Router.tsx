import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Targets } from './pages/Targets.page';
import { TargetEdit } from './pages/TargetEdit.page';
import { TargetAdd } from './pages/TargetAdd.page';
import { SubscriptionPage } from './pages/Subscription.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/targets',
    element: <Targets />,
  },
  {
    path: '/edit',
    element: <TargetEdit />,
  },
  {
    path: '/add',
    element: <TargetAdd />,
  },
  {
    path: '/subscription',
    element: <SubscriptionPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
