import React from 'react';
// @ts-ignore

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../ui';
import { SignIn, SignUp } from '@/modules/auth/components';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;


export const Base: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

Base.args = {
  isOpen: true,
  children: <h1>I am modal</h1>,
};

export const SignUpModal = Base.bind({});

SignUpModal.args = {
  isOpen: true,
  children: <SignUp />,
};

export const SignInModal = Base.bind({});

SignInModal.args = {
  ...SignUpModal.args,
  children: <SignIn />,
};
