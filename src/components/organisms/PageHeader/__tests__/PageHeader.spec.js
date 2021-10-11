import React from 'react';
import { render } from '@testing-library/react';

import PageHeader from '../PageHeader';

describe('Page header should be rendered', () => {
    const pageHeaderNavItems = [
        {
            url: '#',
            label: 'Home'
        },
        {
            url: '#',
            label: 'About me',
            isActive: true
        },
        {
            url: '#',
            label: 'Blog'
        },
        {
            url: '#',
            label: 'Get in touch'
        }
    ];

    test('Page header renders correctly', () => {
        const { container } = render(
            <PageHeader navItems={pageHeaderNavItems} />
        );

        expect(container).toMatchSnapshot();
    });
});
