import React from 'react';

import { Button } from '../components/ui/button';

import icon from '../../src/assets/icons/search-icon.svg';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      options: [icon],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button{...args} />;

export const Primary = Template.bind({});

Primary.args = { children: 'Button' };

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  modifiers: ['white'],
};

export const Rounded = Template.bind({});

Rounded.args = {
  modifiers: ['rounded'],
};

export const ButtonStretched = Template.bind({});

ButtonStretched.args = {
  ...Primary.args,
  modifiers: ['stretched'],
};

