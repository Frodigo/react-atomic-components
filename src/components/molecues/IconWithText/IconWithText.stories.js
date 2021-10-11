import React from 'react';

//import Icon from '../../../public/assets/icons/home.svg';

import { default as IconWithTextComponent } from './IconWithText';

export default {
    title: 'Molecues/IconsWithText',
    component: IconWithTextComponent
};

const Template = (args) => (
    <div style={{ backgroundColor: '#000' }}>
        <IconWithTextComponent {...args} />
    </div>
);

export const Home = Template.bind({});
Home.args = {
    image: 'https://via.placeholder.com/20x20',
    label: 'Home'
};
