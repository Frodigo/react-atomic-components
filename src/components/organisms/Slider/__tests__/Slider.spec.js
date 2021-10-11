import React from 'react';
import { render } from '@testing-library/react';

import Slider from '../Slider';
import Blockquote from '../../../atoms/Text/Blockquote';

describe('Slider should be rendered', () => {
    const items = [
        <Blockquote
            key="1"
            author="Author 1"
            quote="Lorem ipsum"
            type="inverse"
        />,
        <Blockquote
            key="2"
            author="Author 2"
            quote="Lorem ipsum"
            type="inverse"
        />,
        <Blockquote
            key="3"
            author="Author 3"
            quote="Lorem ipsum"
            type="inverse"
        />
    ];

    test('Image carousel renders correctly', () => {
        const { container } = render(<Slider items={items} />);

        expect(container).toMatchSnapshot();
    });
});
