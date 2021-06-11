import React from 'react';
import { Banner } from '../components/banners/Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: {
      options: ['gradient-gray-blue', 'gradient-zodiac-blue', 'gradient-alice-gray'],
      control: { type: 'select' }
    },
    color: {
      control: { type: 'color' }
    }
  },
};

const Template = (args) => <Banner {...args} />;

export const Sitewide = Template.bind({});

Sitewide.args = {
  primaryText: 'COVID-19 Information',
  secondaryText : 'Read the latest vaccine information and schedule your appointment.'
};
