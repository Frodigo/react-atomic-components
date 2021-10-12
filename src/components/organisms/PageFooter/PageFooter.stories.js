import React from 'react';

import { default as PageFooterComponent } from './PageFooter';

export default {
    title: 'Organisms',
    component: PageFooterComponent
};

const Template = (args) => <PageFooterComponent {...args} />;

export const PageFooter = Template.bind({});
PageFooter.args = {
    footerColumns: [
        {
            header: 'Column 1',
            links: [{
                url: '#',
                label: 'lorem ipsum'
            },{
                url: '#',
                label: 'dolor sit amet'
            }]
        },
        {
            header: 'Column 2',
            links: [{
                url: '#',
                label: 'lorem ipsum'
            },{
                url: '#',
                label: 'dolor sit amet'
            }]
        },
        {
            header: 'Column 3',
            links: [{
                url: '#',
                label: 'lorem ipsum'
            },{
                url: '#',
                label: 'dolor sit amet'
            }]
        },
        {
            header: 'Column 4',
            links: [{
                url: '#',
                label: 'lorem ipsum'
            },{
                url: '#',
                label: 'dolor sit amet'
            }]
        }
    ],
    footerBottomLinks: [
        {
            href: '#',
            label: 'Link 1'
        },
        {
            href: '#',
            label: 'Link 2'
        },
        {
            href: '#',
            label: 'Link 3'
        }
    ]
}
