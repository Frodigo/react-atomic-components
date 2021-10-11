import React from 'react';
import { render } from '@testing-library/react';

import Paragraph from '../Paragraph';

describe('Paragraph should be rendered', () => {
    test('Paragraph renders correctly', () => {
        const { container } = render(<Paragraph>Paragraph</Paragraph>);

        expect(container).toMatchSnapshot();
    });

    test('Paragraph large renders correctly', () => {
        const { container } = render(
            <Paragraph type={'large'}>Paragraph</Paragraph>
        );

        expect(container).toMatchSnapshot();
    });

    test('Paragraph smaller renders correctly', () => {
        const { container } = render(
            <Paragraph type={'smaller'}>Paragraph</Paragraph>
        );

        expect(container).toMatchSnapshot();
    });

    test('Paragraph inverse should render correctly', () => {
        const { container } = render(
            <Paragraph classes="inverse">Paragraph inverse</Paragraph>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.classList.contains('inverse')).toBe(true);
    });

    test('Paragraph with specific text align should render correctly', () => {
        const { container } = render(
            <Paragraph textAlign="center">Paragraph centered</Paragraph>
        );

        expect(container).toMatchSnapshot();
        expect(container.firstChild.style.textAlign).toBe('center');
    });
});
