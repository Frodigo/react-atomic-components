import React from 'react';
import { render } from '@testing-library/react';

import Tout from '../Tout';

describe('Tout should be rendered', () => {
    const props = {
        imageUrl: 'https://via.placeholder.com/290x240',
        linkUrl: '#',
        title: 'Lorem ipsum dolor sit'
    };

    test('Tout renders correctly', () => {
        const { container } = render(<Tout {...props} />);

        expect(container).toMatchSnapshot();
    });
});
