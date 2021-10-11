import React from 'react';

import { default as BlogArticlesListComponent } from './BlogArticlesList';

export default {
    title: 'Organisms/BlogArticlesList',
    component: BlogArticlesListComponent
};

const Template = (args) => <BlogArticlesListComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            id: 1,
            title: 'Title 1',
            author: 'Jan Kowalski',
            date: '23 December, 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription: 'lorem upsum'
        },
        {
            id: 2,
            title: 'Title 2',
            author: 'Jan Kowalski',
            date: '23 December, 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription: 'lorem upsum'
        },
        {
            id: 3,
            title: 'Title 3',
            author: 'Jan Kowalski',
            date: '23 December, 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription: 'lorem upsum'
        },
        {
            id: 4,
            title: 'Title 4',
            author: 'Jan Kowalski',
            date: '23 December, 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription: 'lorem upsum'
        }
    ]
};
