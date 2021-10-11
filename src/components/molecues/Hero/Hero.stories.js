import React from 'react';

import { default as HeroComponent } from './Hero';

export default {
    title: 'Molecues/Hero/default',
    component: HeroComponent
};

const Template = (args) => <HeroComponent {...args} />;

export const Hero = Template.bind({});
Hero.args = {
    heading: 'Hello there!',
    image: {
        alt: 'Figure',
        filename: 'https://via.placeholder.com/400x600'
    },
    subheading: 'lorem ipsum',
    paragraph: 'Dolor sit amet'
};
