import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from '@/components/shared';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Admin',
};


