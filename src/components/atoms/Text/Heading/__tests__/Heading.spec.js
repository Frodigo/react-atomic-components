import React from 'react';
import { render } from '@testing-library/react';

import Heading from '../Heading';

describe('Heading should be rendered', () => {
    test('Heading 1 renders correctly', () => {
        const { container } = render(<Heading type={'h1'}>Heading 1</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading 2 renders correctly', () => {
        const { container } = render(<Heading type={'h2'}>Heading 2</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading 3 renders correctly', () => {
        const { container } = render(<Heading type={'h3'}>Heading 3</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading 4 renders correctly', () => {
        const { container } = render(<Heading type={'h4'}>Heading 4</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading 5 renders correctly', () => {
        const { container } = render(<Heading type={'h5'}>Heading 5</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading 6 renders correctly', () => {
        const { container } = render(<Heading type={'h6'}>Heading 6</Heading>);

        expect(container).toMatchSnapshot();
    });

    test('Heading inverse should render correctly', () => {
        const { container } = render(
            <Heading type="h1" classes="inverse">
                Heading inverse
            </Heading>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.classList.contains('inverse')).toBe(true);
    });

    test('Heading with specific text align should render correctly', () => {
        const { container } = render(
            <Heading type="h3" textAlign="center">
                Heading centered
            </Heading>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.style.textAlign).toBe('center');
    });
});
