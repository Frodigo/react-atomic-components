import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FooterColumn from '../FooterColumn';

describe('FooterColumn should be rendered', () => {
    const columnMock = {
        heading: 'Heading',
        subheadings: [
            {
                label: 'Subheading 1',
                url: '#'
            },
            {
                label: 'Subheading 2',
                url: '#'
            },
            {
                label: 'Subheading 3',
                url: '#'
            }
        ]
    };

    test('FooterColumn renders correctly', () => {
        const { container } = render(
            <FooterColumn
                heading={columnMock.heading}
                subheadings={columnMock.subheadings}
            />
        );

        expect(container).toMatchSnapshot();
    });

    test('FooterColumn should be toggled', () => {
        const { getByText, queryByText } = render(
            <FooterColumn
                heading={columnMock.heading}
                subheadings={columnMock.subheadings}
            />
        );

        userEvent.click(screen.getByText('Heading'));
        getByText('Subheading 2')

        userEvent.click(screen.getByText('Heading'));
        expect(queryByText('Subheading 2')).toBeNull();
    });
});
