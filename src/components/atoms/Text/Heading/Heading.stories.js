import React from 'react';

import Heading from './Heading';

export default {
    title: 'Atoms/Headings',
    component: Heading,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
            }
        },
        textAlign: {
            control: {
                type: 'select',
                options: ['left', 'center', 'right']
            }
        }
    }
};

const Template = (args) => <Heading {...args} />;

export const HeadingDefault = Template.bind({});
HeadingDefault.args = {
    type: 'h1',
    children: 'Heading'
};

const InverseTemplate = (args) => (
    <div
        style={{
            backgroundColor: 'black',
            padding: `${30}px`
        }}
    >
        <Heading {...args} />
    </div>
);

export const HeadingInverse = InverseTemplate.bind({});
HeadingInverse.args = {
    type: 'h1',
    children: 'Heading',
    classes: 'inverse'
};
