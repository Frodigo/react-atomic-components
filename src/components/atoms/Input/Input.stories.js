import React from 'react';

import { default as InputComponent } from './Input';

export default {
    title: 'Atoms/Form/Inputs',
    component: InputComponent
};
const Template = (args) => <InputComponent {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    placeholder: 'Type here...'
};

export const FocusedInput = Template.bind({});
FocusedInput.args = {
    value: 'John',
    state: 'focus'
};

export const ErroredInput = Template.bind({});
ErroredInput.args = {
    value: 'John',
    state: 'error',
    errorMessage: 'This is a required field.'
};

export const Textarea = Template.bind({});
Textarea.args = {
    value: 'Lorem ipsum dolor sit amet',
    isTextarea: true
};
