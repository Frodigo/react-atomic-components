import React from 'react';
import { render } from '@testing-library/react';

import BlogPost from '../BlogPost';

describe('Blog post should be rendered', () => {
    const titleMock = 'This is a heading';
    const authorMock = 'Lorem ipsum';
    const dateMock = 'October 10, 2020';
    const urlMock = '#';
    const imageMock = 'https://via.placeholder.com/396x222';
    const shortDescriptionMock = 'Lorem ipsum';

    test('Blog post renders correctly', () => {
        const { container } = render(
            <BlogPost
                title={titleMock}
                author={authorMock}
                date={dateMock}
                url={urlMock}
                image={imageMock}
                shortDescription={shortDescriptionMock}
            />
        );

        expect(container).toMatchSnapshot();
    });
});
