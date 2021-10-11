import React from 'react';
import { render } from '@testing-library/react';

import BlogList from '../BlogList';

describe('Blog list should be rendered', () => {
    test('Blog list renders correctly', () => {
        const { container } = render(<BlogList />);

        expect(container).toMatchSnapshot();
    });
});
