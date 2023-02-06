import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from '../components/layout';

export default {
  title: 'Components/Grid',
  component: Grid
} as ComponentMeta<typeof Grid>;

const BoxStyles = { height: '100px', width: '100%', background: 'purple' };

export const Base: ComponentStory<typeof Grid> = (args) =>
  <Grid container spacing={'md'}>
    <Grid item xs={12} md={3} sm={6} lg={4}>
      <div style={BoxStyles}></div>
    </Grid>
    <Grid item xs={12} md={3} sm={6} lg={4}>
      <div style={BoxStyles}></div>
    </Grid>
    <Grid item xs={12} md={3} sm={6} lg={4}>
      <div style={BoxStyles}></div>
    </Grid>
    <Grid item xs={12} md={3} sm={6} lg={4}>
      <div style={BoxStyles}></div>
    </Grid>
  </Grid>;
