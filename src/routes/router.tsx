import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import { CharactersPage, ComicsPage, DetailPage, HomePage } from '../pages';
import { Root } from './Root';
import { DesktopLayout } from '../components/app-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <DesktopLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/characters',
            element: <CharactersPage />,
          },
          {
            path: '/comics',
            element: <ComicsPage />,
          },
          {
            path: '/comics/:comicId',
            element: <DetailPage />,
          },
        ],
      },
    ],
  },
]);
