import React from 'react';
import { render } from '@testing-library/react';

import Link from '../Link';

describe('Link should be rendered', () => {
    const text = 'text link';

    test('Link renders correctly', () => {
        const { container } = render(<Link href="#">{text}</Link>);

        expect(container).toMatchSnapshot();
    });
});
