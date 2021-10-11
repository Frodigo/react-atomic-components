import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

/**
 * This is the button.
 * @param {*} props
 */
const Button = (props) => {
    const { variant = 'primary', children, onClick, ...rest } = props;

    let buttonClass = null;

    switch (variant) {
        case 'primary': {
            buttonClass = classes.primary;

            break;
        }

        case 'secondary': {
            buttonClass = classes.secondary;

            break;
        }

        case 'tiertary': {
            buttonClass = classes.tiertary;

            break;
        }

        default: {
            buttonClass = '';
        }
    }

    return (
        <button
            type="button"
            className={buttonClass}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    active: PropTypes.oneOf(['true', 'false']),
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
    variant: 'primary'
};

export default Button;
