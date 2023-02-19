import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from '../components/ui';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;


export const Primary: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;


Primary.args = {
  variant: 'body-md',
  as: 'p',
  children: 'Welcome to Super-Heroes Shop specialized in Marvel Comics. You will find in the shelves of our shop all your favorite super heroes: Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...',
};

export const BodySM = Primary.bind({});

BodySM.args = {
  ...Primary.args,
  variant: 'body-sm',
};

export const HeadingXL = Primary.bind({});

HeadingXL.args = {
  as: 'h1',
  variant: 'heading-xl',
  children: 'Marvel Comics',
};

export const HeadingLG = Primary.bind({});

HeadingLG.args = {
  as: 'h2',
  variant: 'heading-lg',
  children: 'Latest releases',
};

export const HeadingMD = Primary.bind({});

HeadingMD.args = {
  as: 'h3',
  variant: 'heading-md',
  children: 'Avengers Universe',
  weight: 'bold',
};
