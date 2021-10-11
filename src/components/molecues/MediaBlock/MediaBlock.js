import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Text/Heading';
import Paragraph from '../../atoms/Text/Paragraph';

import classes from './MediaBlock.module.css';

const MediaBlock = (props) => {
    const {
        imageUrl,
        linkUrl,
        title,
        text,
        imageWidth,
        imageHeight,
        ...rest
    } = props;

    const mediaBlockImage = imageUrl ? (
        <img
            src={imageUrl}
            alt={title}
            width={imageWidth}
            height={imageHeight}
        />
    ) : null;

    return (
        <div className={classes.mediaBlock} {...rest}>
            <div className={classes.mediaBlockInner}>
                <figure className={classes.image}>{mediaBlockImage}</figure>
                <section className={classes.content}>
                    <Heading type="h5">{title}</Heading>
                    <Paragraph>{text}</Paragraph>
                </section>
            </div>
        </div>
    );
};

MediaBlock.propTypes = {
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default MediaBlock;
