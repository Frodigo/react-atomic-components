import React from 'react';

import { default as HomeComponent } from './Home';

export default {
    title: 'Templates',
    component: HomeComponent
};

const Template = (args) => <HomeComponent {...args} />;

export const Home = Template.bind({});
