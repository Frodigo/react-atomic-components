import React from 'react';

import { default as BlockQuoteComponent } from './Blockquote';

export default {
    title: 'Atoms/Blockquote',
    component: BlockQuoteComponent,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['default', 'inverse']
            }
        }
    }
};

const Template = (args) => <BlockQuoteComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: 'Muhammad Waseem'
};

export const Inverse = Template.bind({});
Inverse.args = {
    ...Default.args,
    type: 'inverse'
};
