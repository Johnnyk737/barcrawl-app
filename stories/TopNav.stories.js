import React from 'react';
// import Nav from 'react-bootstrap/Nav'
import { TopNav } from '../app/components/navigation/TopNav';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'TopNav',
  component: TopNav,
  decorators: [StoryRouter()]
};

const Template = (args) => <TopNav {...args} />;
export const Default = Template.bind({});
Default.args = {
  showSearch: false
};
