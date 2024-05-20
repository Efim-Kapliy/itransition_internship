import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import path from 'path';
import { electron } from 'webpack';
import MainPage from './pages/MainPage/MainPage';
import SecondaryPage from './pages/SecondaryPage/SecondaryPage';

import './index.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Sorry, an unexpected error has occurred.</div>,
    children: [
      {
        errorElement: <div>Page not found...</div>,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: '/main',
            element: <MainPage />,
          },
          {
            path: '/second',
            element: <SecondaryPage />,
          },
        ],
      },
    ],
  },
]);

const container = createRoot(root);
container.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
