import React from 'react';
import { render } from '@testing-library/react';

import PageFooter from '../PageFooter';

describe('Page footer should be rendered', () => {
    test('Page footer renders correctly', () => {
        const { container } = render(<PageFooter footerColumns={[
            {
                header: 'Column 1',
                links: [{
                    url: '#',
                    label: 'lorem ipsum'
                },{
                    url: '#',
                    label: 'dolor sit amet'
                }]
            },
            {
                header: 'Column 2',
                links: [{
                    url: '#',
                    label: 'lorem ipsum'
                },{
                    url: '#',
                    label: 'dolor sit amet'
                }]
            },
            {
                header: 'Column 3',
                links: [{
                    url: '#',
                    label: 'lorem ipsum'
                },{
                    url: '#',
                    label: 'dolor sit amet'
                }]
            },
            {
                header: 'Column 4',
                links: [{
                    url: '#',
                    label: 'lorem ipsum'
                },{
                    url: '#',
                    label: 'dolor sit amet'
                }]
            }
        ]} footerBottomLinks={[
            {
                href: '#',
                label: 'Link 1'
            },
            {
                href: '#',
                label: 'Link 2'
            },
            {
                href: '#',
                label: 'Link 3'
            }
        ]} copyright="&copy; 2021 Lorem ipsum" />);

        expect(container).toMatchSnapshot();
    });
});
