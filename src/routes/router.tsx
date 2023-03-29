import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import { CharactersListPage, ComicsListPage, DetailPage, HomePage } from '../pages';
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
            element: <CharactersListPage />,
          },
          {
            path: '/comics',
            element: <ComicsListPage />,
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
