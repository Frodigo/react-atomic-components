import React from 'react';

import { default as ImageCarouselComponent } from './ImageCarousel';

export default {
    title: 'Organisms/ImageCarousel',
    component: ImageCarouselComponent
};

const items = [
    {
        url: 'https://via.placeholder.com/208x117',
        alt: 'figure'
    },
    {
        url: 'https://via.placeholder.com/260x117',
        alt: 'figure'
    },
    {
        url: 'https://via.placeholder.com/108x117',
        alt: 'figure'
    },
    {
        url: 'https://via.placeholder.com/58x117',
        alt: 'figure'
    }
];

const Template = (args) => <ImageCarouselComponent {...args} />;

export const ImageCarousel = Template.bind({});
ImageCarousel.args = {
    items,
    title: 'Image carousel'
};
