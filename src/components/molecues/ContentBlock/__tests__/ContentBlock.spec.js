import React from 'react';
import { render } from '@testing-library/react';

import ContentBlock from '../ContentBlock';

describe('Content block should be rendered', () => {
    const headingMock = 'This is a heading';
    const contentMock = 'Lorem ipsum';
    const ctaMock = [
        {
            href: '#',
            children: 'call to action'
        }
    ];

    test('Content renders correctly', () => {
        const { container } = render(
            <ContentBlock
                heading={headingMock}
                paragraph={contentMock}
                cta={ctaMock}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
