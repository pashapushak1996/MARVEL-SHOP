import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from '../../../../components/ui';


export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Base: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

