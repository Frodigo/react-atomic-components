import React from 'react';
import { render, getByLabelText } from '@testing-library/react';

import FormChoice from '../FormChoice';

test('Checkbox renders correctly', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(container).toMatchSnapshot();
    expect(input.getAttribute('id')).toStrictEqual('inputId');
});

test('Checkbox is disabled', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        disabled: true,
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(input.getAttribute('disabled')).toBeDefined();
});

test('Checkbox is checked', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        isChecked: true,
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(input.getAttribute('checked')).toBeDefined();
});

test('Radio button renders correctly', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        type: 'radio',
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(container).toMatchSnapshot();
    expect(input.getAttribute('id')).toStrictEqual('inputId');
});

test('Radio button is disabled', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        disabled: true,
        type: 'radio',
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(input.getAttribute('disabled')).toBeDefined();
});

test('Radio button is selected', () => {
    const props = {
        id: 'inputId',
        label: 'label',
        isChecked: true,
        type: 'radio',
        name: 'input'
    };

    const { container } = render(<FormChoice {...props} />);

    const input = getByLabelText(container, 'label');

    expect(input.getAttribute('checked')).toBeDefined();
});
