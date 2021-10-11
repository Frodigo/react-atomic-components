import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Text/Heading';

import classes from './Tout.module.css';

const Tout = (props) => {
    const {
        imageUrl,
        imageWidth,
        imageHeight,
        linkUrl,
        title,
        displayTape,
        ...rest
    } = props;

    const shouldDisplayTape = displayTape ? (
        <header className={classes.tape}>
            <Heading type="h5" classes="inverse">
                {title}
            </Heading>
        </header>
    ) : null;

    return (
        <div className={classes.tout} {...rest}>
            <a href={linkUrl}>
                <figure className={classes.figure}>
                    <img
                        src={imageUrl}
                        width={imageWidth}
                        height={imageHeight}
                        layout="responsive"
                        alt="figure"
                    />
                </figure>
                {shouldDisplayTape}
            </a>
        </div>
    );
};

Tout.propTypes = {
    displayTape: PropTypes.bool,
    imageUrl: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

Tout.defaultProps = {
    displayTape: true
};

export default Tout;
