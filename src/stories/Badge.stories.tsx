import React from 'react';

import { Badge } from '../components/ui/badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Admin',
};


