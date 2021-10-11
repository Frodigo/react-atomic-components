import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs should be rendered', () => {
    const mockedItems = [
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
    ];

    test('Breadcrumbs renders correctly', () => {
        const { container } = render(<Breadcrumbs items={mockedItems} />);

        expect(container).toMatchSnapshot();
    });
});
