import React from 'react';
import { render } from '@testing-library/react';

import IconWithText from '../IconWithText';

describe('IconWithText should be rendered', () => {
    const headingMock = 'Home';

    test('IconWithText renders correctly', () => {
        const { container } = render(
            <IconWithText label={headingMock} image={{alt: 'figure', url: 'https://via.placeholder.com/400x600'}} />
        );

        expect(container).toMatchSnapshot();
    });
});
