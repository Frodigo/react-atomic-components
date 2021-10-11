import React from 'react';
import { render } from '@testing-library/react';

import AboutTheAuthor from '../AboutTheAuthor';

const AboutTheAuthorProps = {
    name: 'Marcin Kwiatkowski',
    image: 'https://via.placeholder.com/270x270',
    description:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie.',
    ctaUrl: '#',
    ctaLabel: 'Read more'
};

describe('AboutThAuthor should be rendered', () => {
    test('AboutThAuthor renders correctly', () => {
        const { container } = render(
            <AboutTheAuthor {...AboutTheAuthorProps} />
        );

        expect(container).toMatchSnapshot();
    });
});
