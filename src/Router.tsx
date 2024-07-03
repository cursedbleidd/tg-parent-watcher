import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Targets } from './pages/Targets.page';
import { TargetEdit } from './pages/TargetEdit.page';
import { TargetAdd } from './pages/TargetAdd.page';
import { SubscriptionPage } from './pages/Subscription.page';

const router = createBrowserRouter([
  {
    path: '/',
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
    element: <Targets />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
