import React from 'react';
import PropTypes from 'prop-types';

import classes from './Hero.module.css';

const Hero = (props) => {
    const { image, mobileImage, heading, subheading, paragraph } = props;

    const desktopFigure =
        image && image.filename ? (
            <img
                src={image.filename}
                alt={image.alt}
                title={image.title}
                className={classes.image}
            />
        ) : null;

    const mobileFigure =
        mobileImage && mobileImage.filename ? (
            <figure className={classes.figure}>
                <img
                    src={mobileImage.filename}
                    alt={mobileImage.alt}
                    title={image.title}
                    className={classes.image}
                />
            </figure>
        ) : (
            <figure className={classes.figure}>{desktopFigure}</figure>
        );

    const shouldDisplaySubheading = subheading ? <h4>{subheading}</h4> : null;
    const shouldDisplayParagraph = paragraph ? (
        <p style={{ textTransform: 'uppercase' }}>{paragraph}</p>
    ) : null;

    return (
        <div className={classes.hero}>
            {mobileFigure}

            <figure className={classes.figureDesktop}>{desktopFigure}</figure>
            <section className={classes.section}>
                <h1>{heading}</h1>
                {shouldDisplaySubheading}
                {shouldDisplayParagraph}
            </section>
        </div>
    );
};

export default Hero;

Hero.propTypes = {
    heading: PropTypes.string.isRequired,
    image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        filename: PropTypes.string.isRequired,
        title: PropTypes.string
    }).isRequired,
    mobileImage: PropTypes.shape({
        alt: PropTypes.string,
        filename: PropTypes.string,
        title: PropTypes.string
    }),
    paragraph: PropTypes.string,
    subheading: PropTypes.string
};
