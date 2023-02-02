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

/* It will add bootstrap classes to storybook */
import 'bootstrap/dist/css/bootstrap.css';

/* It will reset storybook components styles  */
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
