import React from 'react';
import { render } from '@testing-library/react';

import BlockQuote from '../Blockquote';

describe('Blockquote should be rendered', () => {
    const quote = 'Lorem ipsum';
    const author = 'Marcin Kwiatkowski';

    test('Blockquote renders correctly', () => {
        const { container } = render(
            <BlockQuote quote={quote} author={author} />
        );

        expect(container).toMatchSnapshot();
    });

    test('Blockquote inverse renders correctly', () => {
        const { container } = render(
            <BlockQuote quote={quote} author={author} type="inverse" />
        );

        expect(container).toMatchSnapshot();
    });
});
