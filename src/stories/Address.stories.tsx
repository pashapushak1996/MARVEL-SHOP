import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Address } from '../components/ui/address';

export default {
  title: 'Components/Address',
  component: Address,
} as ComponentMeta<typeof Address>;

const Template: ComponentStory<typeof Address> = (args) => <Address  {...args} />;


export const Primary = Template.bind({});

Primary.args = {
  userName: 'Yoann TERUEL',
  userLocation: {
    street: 'Bohdana Hmelnyckgogo 267',
    country: 'Ukraine',
    city: 'Lviv',
    zipCode: '79037',
  },
  userPhone: '+33606060606',
};
