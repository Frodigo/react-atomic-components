import React from 'react';
import { render } from '@testing-library/react';

import Tile from '../Tile';

describe('Tile should be rendered', () => {
    const headingMock = 'This is tile';

    test('Tile renders correctly', () => {
        const { container } = render(<Tile heading={headingMock} />);

        expect(container).toMatchSnapshot();
    });
});
