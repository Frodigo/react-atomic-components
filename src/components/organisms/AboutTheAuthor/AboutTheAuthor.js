import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Text/Heading';
import Link from '../../atoms/Link';

import classes from './AboutTheAuthor.module.css';

const AboutTheAuthor = (props) => {
    const {
        heading,
        name,
        image,
        description,
        ctaUrl,
        ctaLabel,
        ...rest
    } = props;

    const shouldDisplayCta = ctaUrl ? (
        <Link variant="secondary" href={ctaUrl}>
            {ctaLabel}
        </Link>
    ) : null;

    const shouldDisplayImage = image ? (
        <figure
            className={classes.figureDesktop}
            style={{
                backgroundImage: `url("${
                    image
                }")`
            }}
        />
    ) : null;

    return (
        <div className={classes.aboutTheAuthor} {...rest}>
            <div className={classes.inner}>
                {shouldDisplayImage}
                <article className={classes.content}>
                    <Heading type="h6">{heading}</Heading>
                    <p className={classes.authorName}>{name}</p>
                    <figure
                        className={classes.figure}
                        style={{
                            backgroundImage: `url("${image}")`
                        }}
                    />
                    <p className={classes.description}>{description}</p>
                    {shouldDisplayCta}
                </article>
            </div>
        </div>
    );
};

AboutTheAuthor.propTypes = {
    ctaLabel: PropTypes.string,
    ctaUrl: PropTypes.string,
    description: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string.isRequired
};

AboutTheAuthor.defaultProps = {
    heading: 'About the author'
};

export default AboutTheAuthor;
