import React from 'react';
import { Footer } from '../app/components/navigation/Footer';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [StoryRouter()]
};

const Template = (args) => <Footer {...args} />;
export const Default = Template.bind({});
Default.args = {
};
