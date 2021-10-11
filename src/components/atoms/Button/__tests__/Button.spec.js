import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button should be rendered', () => {
    const text = 'Call to action';
    const onCLickHandler = jest.fn();

    test('Button renders correctly', () => {
        const { container } = render(
            <Button variant={'primary'} onClick={onCLickHandler}>
                {text}
            </Button>
        );

        expect(container).toMatchSnapshot();
    });

    test('Disabled button renders correctly', () => {
        const { container } = render(
            <Button variant={'secondary'} onClick={onCLickHandler} disabled>
                {text}
            </Button>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.disabled).toBe(true);
    });
});
