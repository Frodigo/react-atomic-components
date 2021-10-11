import React from 'react';
import { render } from '@testing-library/react';

import MediaBlock from '../MediaBlock';

describe('MediaBlock should be rendered', () => {
    const props = {
        imageUrl: 'https://via.placeholder.com/290x240',
        linkUrl: '#',
        text:
            'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. ',
        title: 'Lorem ipsum dolor sit'
    };

    test('MediaBlock renders correctly', () => {
        const { container } = render(<MediaBlock {...props} />);

        expect(container).toMatchSnapshot();
    });
});
