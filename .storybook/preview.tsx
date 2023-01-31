export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/*It will reset storybook components styles*/

import React from 'react';

import '../src/theme/reset.css';

export const decorators = [
  (Story: any) => {
    return (
      <>
        <Story />
      </>
    );
  },
];
