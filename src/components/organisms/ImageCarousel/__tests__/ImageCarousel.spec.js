import React from 'react';
import { render } from '@testing-library/react';

import ImageCarousel from '../ImageCarousel';

describe('Image carousel should be rendered', () => {
    const props = {
        items: [
            {
                url: 'https://via.placeholder.com/208x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/260x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/108x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/58x117',
                alt: 'figure'
            }
        ],
        title: 'Image carousel'
    };

    test('Image carousel renders correctly', () => {
        const { container } = render(<ImageCarousel {...props} />);

        expect(container).toMatchSnapshot();
    });
});
