import React from 'react';
import { render } from '@testing-library/react';

import AboutMe from '../AboutMe';

describe('AboutMe should be rendered', () => {
    test('AboutMe renders correctly', () => {
        const { container } = render(<AboutMe />);

        expect(container).toMatchSnapshot();
    });
});
