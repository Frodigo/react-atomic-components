import React from 'react';
import { render } from '@testing-library/react';

import MediaBlockSmaller from '../MediaBlockSmaller';

describe('MediaBlockSmaller should be rendered', () => {
    const props = {
        imageUrl: 'https://via.placeholder.com/290x240',
        subtitle: '05/2020 - 10/2020',
        text: 'Apple',
        title: 'Front end developer'
    };

    test('MediaBlockSmaller renders correctly', () => {
        const { container } = render(<MediaBlockSmaller {...props} />);

        expect(container).toMatchSnapshot();
    });
});
