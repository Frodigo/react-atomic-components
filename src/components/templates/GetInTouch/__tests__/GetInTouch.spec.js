import React from 'react';
import { render } from '@testing-library/react';

import GetInTouch from '../GetInTouch';

describe('GetInTouch should be rendered', () => {
    test('GetInTouch renders correctly', () => {
        const { container } = render(<GetInTouch />);

        expect(container).toMatchSnapshot();
    });
});
