import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../components/ui';
import { SignUp } from '../components/ui/modal/sign-up';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;


export const Base: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

Base.args = {
  isOpen: true,
  children: <h1>I am modal</h1>,
  imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F2000%2F20160701113917-Marvel.jpeg&f=1&nofb=1&ipt=47461cc48fcb6b05c7ebc9e4b4ccb9bd90f5b1f7f68b48400751384c4d3e824c&ipo=images',
};

export const SignUpModal = Base.bind({});

SignUpModal.args = {
  isOpen: true,
  children: <SignUp />,
  imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.entrepreneur.com%2Fcontent%2F3x2%2F1300%2F20160809061411-Avengers.jpeg&f=1&nofb=1&ipt=bedc4c68e9b6a69d3ae894a086a548faa8b40a7e7c77b05f97836134055ea3bd&ipo=images',
};
