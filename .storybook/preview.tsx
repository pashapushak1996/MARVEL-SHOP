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
import '../src/theme/reset.css';

import '../src/index.scss';

export const decorators = [
  (Story: any) => {
    return (
      <>
        <Story />
      </>
    );
  },
];
