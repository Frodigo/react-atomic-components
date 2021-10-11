import React from 'react';

import { default as BlogPostComponent } from './BlogPost';

export default {
    title: 'Templates',
    component: BlogPostComponent
};

const Template = (args) => <BlogPostComponent {...args} />;

export const BlogPost = Template.bind({});
