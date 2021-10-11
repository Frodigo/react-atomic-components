import React from 'react';
import { render } from '@testing-library/react';

import List from '../List';

describe('List should be rendered', () => {
    const mockItems = ['item 1', 'item 2', 'item 3'];

    test('Unordered list renders correctly', () => {
        const { container } = render(<List items={mockItems} />);

        expect(container).toMatchSnapshot();
    });

    test('Ordered list renders correctly', () => {
        const { container } = render(
            <List type={'ordered'} items={mockItems} />
        );

        expect(container).toMatchSnapshot();
    });
});
