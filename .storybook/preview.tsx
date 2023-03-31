export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from 'react';

/* It will reset storybook components styles  */
import '../src/reset.css';

import '../src/index.scss';

import './global.css';

export const decorators = [
  (Story: any) => {
    return (
      <>
        <Story />
      </>
    );
  },
];
