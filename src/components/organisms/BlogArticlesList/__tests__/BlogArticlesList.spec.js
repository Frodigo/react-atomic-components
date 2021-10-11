import React from 'react';
import { render } from '@testing-library/react';

import BlogArticlesList from '../BlogArticlesList';

describe('Blog articles list should be rendered', () => {
    const mockedItems = [
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
    ];

    test('Articles list renders correctly', () => {
        const { container } = render(<BlogArticlesList items={mockedItems} />);

        expect(container).toMatchSnapshot();
    });
});
