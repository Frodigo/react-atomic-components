import React from 'react';

import Paragraph from './Paragraph';

export default {
    title: 'Atoms/Paragraphs',
    component: Paragraph,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['normal', 'large', 'smaller']
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

const Template = (args) => <Paragraph {...args} />;

export const ParagraphDefault = Template.bind({});
ParagraphDefault.args = {
    children:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. '
};

const InverseTemplate = (args) => (
    <div
        style={{
            backgroundColor: 'black',
            padding: `${30}px`
        }}
    >
        <Paragraph {...args} />
    </div>
);

export const ParagraphInverse = InverseTemplate.bind({});
ParagraphInverse.args = {
    children:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. ',
    classes: 'inverse'
};
