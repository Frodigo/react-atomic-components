import React from 'react';

import Blockquote from '../../atoms/Text/Blockquote';

import { default as SliderComponent } from './Slider';

export default {
    title: 'Organisms/Slider',
    component: SliderComponent
};

const items = [
    <Blockquote key="1" author="Author 1" quote="Lorem ipsum" type="inverse" />,
    <Blockquote key="2" author="Author 2" quote="Lorem ipsum" type="inverse" />,
    <Blockquote key="3" author="Author 3" quote="Lorem ipsum" type="inverse" />
];

const Template = (args) => <SliderComponent {...args} />;

export const Slider = Template.bind({});
Slider.args = {
    items
};
