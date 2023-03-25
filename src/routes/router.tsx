import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { DetailPage, HomePage } from '../pages';
import { ComicsListPage } from '../pages/comics-list';

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
