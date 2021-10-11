import React from 'react';
import { render } from '@testing-library/react';

import Dots from '../Dots';

describe('Dots should be rendered', () => {
    const onCLickHandler = jest.fn();
    const props = {
        items: [
            {
                id: 1,
                label: '1'
            },
            {
                id: 2,
                label: '2'
            },
            {
                id: 3,
                label: '3'
            },
            {
                id: 4,
                label: '4'
            }
        ],
        activeItemId: 2
    };

    test('Dots renders correctly', () => {
        const { container } = render(
            <Dots {...props} onClick={onCLickHandler} />
        );

        expect(container).toMatchSnapshot();
    });

    test('Active item should be marked', () => {
        const { container } = render(
            <Dots {...props} onClick={onCLickHandler} />
        );

        const elements = container.firstChild.children;

        expect(elements.item(1).classList.contains('dotActive')).toBe(true);
    });
});
