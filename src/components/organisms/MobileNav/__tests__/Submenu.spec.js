import React from 'react';
import { render } from '@testing-library/react';

import Submenu from '../Submenu';
import Home from '../../../../public/assets/icons/home.svg';

describe('Submenu should be rendered', () => {
    const mockedSubmenu = {
        label: 'Blog',
        image: {
            alt: 'figure',
            url: "image_url"
        },
        url: '/blog',
        id: 2,
        submenu: [
            {
                label: 'PWA Studio',
                image: {
                    alt: 'figure',
                    url: "image_url"
                },
                url: '/pwastudio',
                id: 3
            }
        ]
    };

    test('Submenu renders correctly', () => {
        const { container } = render(<Submenu item={mockedSubmenu} />);

        expect(container).toMatchSnapshot();
    });
});
