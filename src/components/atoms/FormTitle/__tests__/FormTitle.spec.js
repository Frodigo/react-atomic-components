import React from 'react';
import { render } from '@testing-library/react';

import FormTitle from '../FormTitle';

test('Label renders correctly', () => {
    const text = 'This is the label';
    const { container } = render(<FormTitle>{text}</FormTitle>);

    expect(container).toMatchSnapshot();
});

test('Label has for attribute', () => {
    const text = 'This is the label';
    const { container } = render(
        <FormTitle htmlFor="inputId">{text}</FormTitle>
    );

    expect(container.firstChild.getAttribute('for')).toStrictEqual('inputId');
});

test('Legend renders correctly', () => {
    const text = 'This is the legend';
    const { container } = render(<FormTitle type="legend">{text}</FormTitle>);

    expect(container).toMatchSnapshot();
});
