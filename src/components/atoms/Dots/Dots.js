import React from 'react';
import PropTypes from 'prop-types';

import classes from './Dots.module.css';

/**
 * This are the dots.
 * @param {*} props
 */
const Dots = (props) => {
    const { activeItemId, items, onClick, ...rest } = props;

    const children = items.map((dot) => {
        const isActive = dot.id === activeItemId;

        return (
            <button
                type="button"
                onClick={onClick(dot)}
                key={dot.id}
                className={isActive ? classes.dotActive : classes.dot}
            >
                {dot.label}
            </button>
        );
    });

    return (
        <nav className={classes.dots} {...rest}>
            {children}
        </nav>
    );
};

Dots.propTypes = {
    activeItemId: PropTypes.number,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
};

export default Dots;
