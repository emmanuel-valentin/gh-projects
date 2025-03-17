import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
