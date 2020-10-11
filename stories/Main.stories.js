import React from 'react';
import Main from '../app/components/Main';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Main',
  component: Main,
  decorators: [StoryRouter()]
};

const Template = (args) => <Main {...args} />;
export const Default = Template.bind({});
Default.args = {
};
