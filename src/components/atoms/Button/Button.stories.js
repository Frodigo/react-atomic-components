import React from 'react';

import Button from './Button';

export default {
    title: 'Atoms/Buttons/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary']
            }
        }
    }
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'primary',
    children: 'Primary button',
    disabled: false,
    active: false
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    variant: 'secondary',
    children: 'Secondary button',
    disabled: false,
    active: false
};
