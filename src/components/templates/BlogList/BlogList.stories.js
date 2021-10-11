import React from 'react';

import { default as BlogListComponent } from './BlogList';

export default {
    title: 'Templates',
    component: BlogListComponent
};

const Template = (args) => <BlogListComponent {...args} />;

export const BlogList = Template.bind({});
