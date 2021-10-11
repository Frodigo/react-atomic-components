import React from 'react';

import { default as AboutMeTemplate } from './AboutMe';

export default {
    title: 'Templates/AboutMe',
    component: AboutMeTemplate
};

const Template = (args) => <AboutMeTemplate {...args} />;

export const AboutMe = Template.bind({});
