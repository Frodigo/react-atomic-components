import React from 'react';

import { default as FormTitle } from './FormTitle';

export default {
    title: 'Atoms/Form/FormTitle',
    component: FormTitle,
    argTypes: {}
};

const Template = (args) => <FormTitle {...args} />;

export const Label = Template.bind({});
Label.args = {
    htmlFor: 'inputId',
    children: 'This is the label'
};

export const Legend = Template.bind({});
Legend.args = {
    type: 'legend',
    children: 'This is the legend'
};
