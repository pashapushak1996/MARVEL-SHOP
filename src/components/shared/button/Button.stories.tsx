import React from 'react';

import { Button } from '../../ui';

import iconSrc from '../../../assets/icons/search-icon.svg';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
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
  icon: iconSrc,
};

export const Stretched = Template.bind({});

Stretched.args = {
  ...Primary.args,
  modifiers: ['stretched'],
};

export const Link = Template.bind({});

Link.args = {
  ...Primary.args,
  modifiers: ['link'],
  to: 'home',
};

export const LinkWithIcon = Template.bind({});

LinkWithIcon.args = {
  ...Link.args,
  icon: iconSrc,
  modifiers: ['link', 'configurable-link-with-icon'],
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Primary.args,
  disabled: true,
};
