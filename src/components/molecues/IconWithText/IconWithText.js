import React from 'react';
import PropTypes from 'prop-types';

import classes from './IconWithText.module.css';

const IconWithText = (props) => {
    const { image, label, isActive, ...rest } = props;

    if (!image) return null;

    const containerClass = isActive
        ? classes.iconContainerActive
        : classes.iconContainer;
    const imageElement = isActive ? (
        <img
            className={classes.activeIcon}
            src={image}
            alt={label}
        />
    ) : (
        <img
            src={image}
            alt={label}
        />
    );

    return (
        <span className={containerClass} {...rest}>
            {imageElement}
            <span className={classes.label}>{label}</span>
        </span>
    );
};

IconWithText.propTypes = {
    image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string
    }).isRequired,
    isActive: PropTypes.bool,
    label: PropTypes.string.isRequired
};

IconWithText.defaultProps = {
    isActive: false
};

export default IconWithText;
