import React from 'react';
import { render, getByTestId, getByText } from '@testing-library/react';

import Input from '../Input';

describe('Input should be rendered', () => {
    test('Input renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            onChange: jest.fn()
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(
            getByTestId(container, 'input').getAttribute('type')
        ).toStrictEqual('text');
        expect(
            getByTestId(container, 'input').getAttribute('placeholder')
        ).toStrictEqual('Type here...');
    });

    test('Input error renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            type: 'email',
            onChange: jest.fn(),
            state: 'error'
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(
            getByTestId(container, 'input').classList.contains('inputError')
        ).toBe(true);
    });

    test('Input focus renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            type: 'email',
            onChange: jest.fn(),
            state: 'focus'
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(
            getByTestId(container, 'input').classList.contains('inputFocus')
        ).toBe(true);
    });

    test('Input disabled renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            type: 'email',
            onChange: jest.fn(),
            state: 'disabled'
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(
            getByTestId(container, 'input').classList.contains('inputDisabled')
        ).toBe(true);
        expect(
            getByTestId(container, 'input').getAttribute('disabled')
        ).toBeDefined();
    });

    test('textarea renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            isTextarea: true,
            onChange: jest.fn()
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(
            getByTestId(container, 'input').classList.contains('textarea')
        ).toBe(true);
    });

    test('error message renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            isTextarea: true,
            errorMessage: {
                message: 'error'
            },
            onChange: jest.fn()
        };
        const { container } = render(<Input {...props} />);

        expect(container).toMatchSnapshot();
        expect(getByText(container, 'error')).toBeDefined();
    });

    test('error class renders correctly', () => {
        const props = {
            placeholder: 'Type here...',
            isTextarea: false,
            errorMessage: {
                message: 'error'
            },
            onChange: jest.fn()
        };
        const { container } = render(<Input {...props} />);

        expect(
            getByTestId(container, 'input').classList.contains('hasError')
        ).toBe(true);
    });
});
