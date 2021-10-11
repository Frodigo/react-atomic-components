import React from 'react';

import { default as MediaBlockComponent } from './MediaBlock';

export default {
    title: 'Molecues/MediaBlock/default',
    component: MediaBlockComponent
};

const Template = (args) => <MediaBlockComponent {...args} />;

export const MediaBlock = Template.bind({});
MediaBlock.args = {
    imageUrl:
        'https://via.placeholder.com/400x240',
    imageWidth: 400,
    imageHeight: 240,
    linkUrl: '#',
    text:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. ',
    title: 'Lorem ipsum dolor sit'
};
