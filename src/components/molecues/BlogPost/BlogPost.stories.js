import React from 'react';

import { default as BlogPostComponent } from './BlogPost';

export default {
    title: 'Molecues',
    component: BlogPostComponent
};

const Template = (args) => <BlogPostComponent {...args} />;

export const BlogPost = Template.bind({});
BlogPost.args = {
    title: 'Lorem ipsum dolor sit amet, vel maximus ante faucibus sed.',
    author: 'Jan Kowalski',
    date: 'October 10, 2020',
    url: '#',
    image: 'https://via.placeholder.com/396x222',
    shortDescription: 'Quisque rutrum ac lectus ullamcorper placerat. Morbi condimentum malesuada dui, id consectetur lectus dictum vel. Integer bibendum mauris id nisl dignissim, ut lacinia dolor commodo. Sed eros nisl, interdum hendrerit felis ut, pellentesque mattis eros. '
};
