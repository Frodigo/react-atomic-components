import React from 'react';

import Arrow from './Arrow';

export default {
    title: 'Atoms/Controls/Arrow',
    component: Arrow,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['right', 'left']
            }
        }
    }
};

const Template = (args) => <Arrow {...args} />;

export const LeftArrow = Template.bind({});
LeftArrow.args = {
    variant: 'left',
    disabled: false
};

export const RightArrow = Template.bind({});
RightArrow.args = {
    variant: 'right',
    disabled: false
};

export const DisabledArrow = Template.bind({});
DisabledArrow.args = {
    variant: 'left',
    disabled: true
};
