import React from 'react';

import { default as FooterColumnComponent } from './FooterColumn';

export default {
    title: 'Molecues/FooterColumn',
    component: FooterColumnComponent
};

const isOpen = false;
const Template = (args) => <FooterColumnComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    heading: 'Heading',
    subheadings: [
        {
            label: 'Subheading 1',
            url: '#'
        },
        {
            label: 'Subheading 2',
            url: '#'
        },
        {
            label: 'Subheading 3',
            url: '#'
        }
    ],
    isOpen,
    handleToggle: () => !isOpen
};
