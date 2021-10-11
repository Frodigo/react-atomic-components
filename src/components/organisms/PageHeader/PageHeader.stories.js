import React from 'react';

import { default as PageHeaderComponent } from './PageHeader';

export default {
    title: 'Organisms',
    component: PageHeaderComponent
};

const Template = (args) => <PageHeaderComponent {...args} />;

export const PageHeader = Template.bind({});
PageHeader.args = {
    navItems: [
        {
            url: '#',
            label: 'Home',
            isActive: true
        },
        {
            url: '#',
            label: 'About me'
        },
        {
            url: '#',
            label: 'Blog'
        },
        {
            url: '#',
            label: 'Get in touch'
        }
    ]
};
