import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import { CharactersListPage, ComicsListPage, DetailPage, HomePage } from '../pages';
import { AppLayout } from '../components/app-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
