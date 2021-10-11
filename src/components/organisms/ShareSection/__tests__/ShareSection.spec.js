import React from 'react';
import { render } from '@testing-library/react';

import ShareSection from '../ShareSection';

describe('ShareSection should be rendered', () => {
    test('ShareSection renders correctly', () => {
        const { container } = render(<ShareSection />);

        expect(container).toMatchSnapshot();
    });
});
