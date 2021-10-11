import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Text/Heading';

import classes from './MediaBlockSmaller.module.css';

const MediaBlockSmaller = (props) => {
    const {
        imageWidth,
        imageHeight,
        imageUrl,
        subtitle,
        title,
        text,
        roundedImage,
        ...rest
    } = props;
    const mayDisplaySubtitle = subtitle ? (
        <span className={classes.subtitle}>{subtitle}</span>
    ) : null;

    const mediaBlockImage =
        imageUrl && imageUrl ? (
            <figure
                className={
                    roundedImage ? classes.roundedFigure : classes.figure
                }
            >
                <img
                    src={imageUrl}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                />
            </figure>
        ) : null;

    return (
        <div className={classes.mediaBlockSmaller} {...rest}>
            {mediaBlockImage}
            <section className={classes.content}>
                {mayDisplaySubtitle}
                <Heading type="h3">{title}</Heading>
                {text}
            </section>
        </div>
    );
};

MediaBlockSmaller.propTypes = {
    imageHeight: PropTypes.number,
    imageUrl: PropTypes.string,
    imageWidth: PropTypes.number,
    roundedImage: PropTypes.bool,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default MediaBlockSmaller;
