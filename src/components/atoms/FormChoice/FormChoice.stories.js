import React from 'react';

import { default as FormChoice } from './FormChoice';

export default {
    title: 'Atoms/Form/FormChoice',
    component: FormChoice,
    argTypes: {}
};

const Template = (args) => <FormChoice {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
    id: 'inputId',
    label: 'This is the checkbox'
};

export const Radio = Template.bind({});
Radio.args = {
    id: 'inputId',
    type: 'radio',
    name: 'radio1',
    label: 'This is the radio button'
};
