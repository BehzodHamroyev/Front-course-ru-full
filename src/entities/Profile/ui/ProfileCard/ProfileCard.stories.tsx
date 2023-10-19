import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import Avatar from 'shared/assets/test/storybook.jpg';
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'Behzod',
    lastname: 'hamroyev',
    country: Country.Armenia,
    age: 23,
    city: 'firs',
    first: 'sklsd',
    avatar: Avatar
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'Eroror'
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true
};
