import React from 'react';
import PropTypes from 'prop-types';

import ArrowIcon from '../../../assets/icons/arrow.svg';

import classes from './Arrow.module.css';

/**
 * This is the arrow.
 * @param {*} props
 */
const Arrow = (props) => {
    const { variant, onClick, ...rest } = props;

    let arrowClass = null;

    switch (variant) {
        case 'right': {
            arrowClass = classes.arrowRight;

            break;
        }

        case 'left': {
            arrowClass = classes.arrowLeft;

            break;
        }

        default: {
            arrowClass = classes.arrowLeft;
        }
    }

    return (
        <button
            type="button"
            className={arrowClass}
            onClick={onClick}
            {...rest}
        >
            <ArrowIcon />
        </button>
    );
};

Arrow.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['right', 'left'])
};

export default Arrow;
