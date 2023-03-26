import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { CharactersListPage, ComicsListPage, DetailPage, HomePage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
]);
