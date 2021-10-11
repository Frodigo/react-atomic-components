import React from 'react';
import { render } from '@testing-library/react';

import BlogPost from '../BlogPost';

describe('Blog post should be rendered', () => {
    test('Blog post renders correctly', () => {
        const { container } = render(<BlogPost />);

        expect(container).toMatchSnapshot();
    });
});
