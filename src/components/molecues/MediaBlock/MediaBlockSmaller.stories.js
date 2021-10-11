import React from 'react';

import { default as MediaBlockSmallerComponent } from './MediaBlockSmaller';

export default {
    title: 'Molecues/MediaBlock/smaller',
    component: MediaBlockSmallerComponent
};

const Template = (args) => <MediaBlockSmallerComponent {...args} />;

export const MediaBlockSmaller = Template.bind({});
MediaBlockSmaller.args = {
    imageUrl: 'https://via.placeholder.com/290x240',
    imageWidth: 290,
    imageHeight: 240,
    subtitle: '05/2016 - 04/2020',
    text: 'dolorm sit amet',
    title: 'Lorem ipsum'
};
