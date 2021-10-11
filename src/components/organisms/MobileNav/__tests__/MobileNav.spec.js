import React from 'react';
import { render } from '@testing-library/react';

import { items } from '../MobileNav.config';
import MobileNav from '../MobileNav';

describe('Mobile nav should be rendered', () => {
    test('Mobile nav renders correctly', () => {
        const { container } = render(<MobileNav items={items} />);

        expect(container).toMatchSnapshot();
    });

    test('Mobile nav  with submenu shouldrenders correctly', () => {
        const mockedSubmenu = [
            {
                label: 'Blog',
                image: {
                    alt: 'figure',
                    url: 'url_of_image'
                },
                url: '/blog',
                id: 2,
                submenu: [
                    {
                        label: 'PWA Studio',
                        image: {
                            alt: 'figure',
                            url: 'url_of_image'
                        },
                        url: '/pwastudio',
                        id: 3
                    }
                ]
            }
        ];
        const { container } = render(<MobileNav items={mockedSubmenu} />);

        expect(container).toMatchSnapshot();
        expect(container.firstChild.getAttribute('href')).toBeNull();
    });
});
