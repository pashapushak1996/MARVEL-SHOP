import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '../index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  height: 197,
  width: 197,
  avatarAlt: 'profileAvatar',
  avatarSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaphotoportrait.fr%2F917-thickbox_default%2Fphoto-reussie-de-profil-linkedin.jpg&f=1&nofb=1&ipt=bb0a799635f4615995e062d22bbad27cc279d29e9ab56bd5d378ec406bc88868&ipo=images',
};

export const WithBorder = Template.bind({});

WithBorder.args = {
  ...Primary.args,
  modifiers: ['with-border'],
};
