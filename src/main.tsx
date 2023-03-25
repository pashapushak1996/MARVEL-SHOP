import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './app';
import { router } from './routes';

import './index.scss';
import './theme/reset.css';


ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );
