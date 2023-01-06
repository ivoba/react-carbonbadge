import React from 'react';

import { Carbonbadge } from './Carbonbadge';

export default {
  title: 'Carbonbadge',
  component: Carbonbadge,
  argTypes: {
    darkMode: { darkMode: false },
  },
};

const Template = (args) => <Carbonbadge {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true,
};