import React from 'react';

import { default as BreadcrumbsComponent } from './Breadcrumbs';

export default {
    title: 'Molecues/Breadcrumbs',
    component: BreadcrumbsComponent
};

const Template = (args) => <BreadcrumbsComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            label: 'Home',
            url: '#'
        },
        {
            label: 'Blog',
            url: '#'
        },
        {
            label: 'Lorem ipsum',
            url: '#'
        }
    ]
};
