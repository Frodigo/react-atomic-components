import React from 'react';
import { render } from '@testing-library/react';

import Arrow from '../Arrow';

describe('Arrow should be rendered', () => {
    const text = 'Call to action';
    const onCLickHandler = jest.fn();

    test('Arrow renders correctly', () => {
        const { container } = render(
            <Arrow variant={'left'} onClick={onCLickHandler}>
                {text}
            </Arrow>
        );

        expect(container).toMatchSnapshot();
    });

    test('Disabled arrow renders correctly', () => {
        const { container } = render(
            <Arrow variant={'right'} onClick={onCLickHandler} disabled>
                {text}
            </Arrow>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.disabled).toBe(true);
    });
});
