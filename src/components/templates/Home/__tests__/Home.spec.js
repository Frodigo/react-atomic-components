import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home page should be rendered', () => {
    test('Home page renders correctly', () => {
        const { container } = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});
