import React from 'react';

import { default as ContentBlockComponent } from './ContentBlock';

export default {
    title: 'Molecues/ContentBlocks',
    component: ContentBlockComponent
};

const Template = (args) => <ContentBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    heading: 'This is heading!',
    paragraph:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie',
    cta: [
        {
            active: true,
            children: 'Get in touch',
            component: 'Link',
            disabled: false,
            href: '/get-in-touch',
            variant: 'primary'
        }
    ]
};
