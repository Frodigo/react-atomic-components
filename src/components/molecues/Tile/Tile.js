import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tile.module.css';

const Tile = (props) => {
    const { heading, ...rest } = props;

    return (
        <section className={classes.tile} {...rest}>
            <h2 className={classes.heading}>{heading}</h2>
        </section>
    );
};

Tile.propTypes = {
    heading: PropTypes.string.isRequired
};

export default Tile;
