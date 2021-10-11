import React from 'react';

import { default as DotsComponent } from './Dots';

export default {
    title: 'Atoms/Controls/Dots',
    component: DotsComponent,
    argTypes: {
        onClick: { action: 'clicked' }
    }
};

const Template = (args) => <DotsComponent {...args} />;

export const Dots = Template.bind({});
Dots.args = {
    items: [
        {
            id: 1,
            label: '1'
        },
        {
            id: 2,
            label: '2'
        },
        {
            id: 3,
            label: '3'
        },
        {
            id: 4,
            label: '4'
        }
    ],
    activeItemId: 2
};
