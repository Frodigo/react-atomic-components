import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = (props) => {
    const {
        errorMessage,
        type,
        placeholder,
        state,
        value,
        onChange,
        isTextarea,
        register,
        ...rest
    } = props;

    let inputClass = null;

    switch (state) {
        case 'default': {
            inputClass = classes.input;

            break;
        }

        case 'focus': {
            inputClass = `${classes.input} ${classes.inputFocus}`;

            break;
        }

        case 'error': {
            inputClass = `${classes.input} ${classes.inputError}`;

            break;
        }

        case 'disabled': {
            inputClass = `${classes.input} ${classes.inputDisabled}`;

            break;
        }

        default: {
            inputClass = classes.input;
        }
    }

    const isDisabled = state === 'disabled';
    const shouldDisplayError = errorMessage ? (
        <span className={classes.errorMessage}>{errorMessage.message}</span>
    ) : null;
    const errorClass = errorMessage ? classes.hasError : null;

    if (isTextarea) {
        return (
            <div className={classes.field}>
                <textarea
                    className={`${inputClass} ${classes.textarea} ${errorClass}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={isDisabled}
                    ref={register}
                    {...rest}
                    data-testid="input"
                />
                {shouldDisplayError}
            </div>
        );
    }

    return (
        <div className={classes.field}>
            <input
                className={`${inputClass} ${errorClass}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
                ref={register}
                {...rest}
                data-testid="input"
            />
            {shouldDisplayError}
        </div>
    );
};

export default Input;

Input.propTypes = {
    errorMessage: PropTypes.object,
    isTextarea: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    state: PropTypes.oneOf(['default', 'focus', 'error', 'disabled']),
    type: PropTypes.oneOf([
        'text',
        'email',
        'number',
        'password',
        'search',
        'tel'
    ]).isRequired,
    value: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    state: 'default',
    isTextarea: false
};
