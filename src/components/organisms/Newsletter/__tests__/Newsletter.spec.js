import React from 'react';
import { render } from '@testing-library/react';

import Newsletter from '../Newsletter';

describe('Newsletter organism', () => {
    const args = {
        title: 'Subscribe to the newsletter',
        subtitle: 'I will keep you informed about each new blog entry',
        submitUrl: '#',
        token: 'abc',
        footer:
            'Also i will send you send you PDF with 112 pages about PWA Studio Rich Content renderers'
    };

    test('Newsletter renders correctly', () => {
        const { container } = render(<Newsletter {...args} />);

        expect(container).toMatchSnapshot();
    });
});
