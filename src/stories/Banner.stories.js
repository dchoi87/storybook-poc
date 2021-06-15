import React from 'react';
import { Banner } from '../components/banners/Banner';

export default {
  title: 'Components/Banners',
  component: Banner,
  argTypes: {
    backgroundColor: {
      name: 'Background Color',
      options: ['gradient-gray-blue', 'gradient-zodiac-blue', 'gradient-alice-gray'],
      control: { type: 'select' }
    },
    color: {
      name: 'Name',
      control: { type: 'color' }
    },
    primaryText: {
      name: 'Primary Text',
      control: { type: 'color' }
    },
    secondaryText: {
      name: 'Secondary Text',
      control: { type: 'color' }
    }
  },
  parameters: {
    componentSubtitle: 'This is a subtitle',
  }
};

const Template = (args) => <Banner {...args} />;

export const SiteWide = Template.bind({});

SiteWide.args = {
  primaryText: 'COVID-19 Information',
  secondaryText : 'Read the latest vaccine information and schedule your appointment.'
};
