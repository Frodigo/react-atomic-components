import React from 'react';

import { default as ToutComponent } from './Tout';

export default {
    title: 'Molecues/Tout',
    component: ToutComponent
};

const Template = (args) => <ToutComponent {...args} />;

export const Tout = Template.bind({});
Tout.args = {
    imageUrl: 'https://via.placeholder.com/600x400',
    linkUrl: '#',
    title: 'Lorem ipsum dolor sit',
    imageWidth: 600,
    imageHeight: 400
};
