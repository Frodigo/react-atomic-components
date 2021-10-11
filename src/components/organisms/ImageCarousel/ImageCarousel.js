import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import classes from './ImageCarousel.module.css';

const ImageCarousel = (props) => {
    const { items, title } = props;

    const carouselItems = items.map((item) => (
        <img
            key={`carousel-item-${item.alt}`}
            src={item.url}
            alt={item.alt}
            width="auto"
            height="auto"
        />
    ));

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    const shouldDisplayTitle = title ? (
        <h2 className={classes.title}>{title}</h2>
    ) : null;

    return (
        <div className={classes.carousel}>
            {shouldDisplayTitle}
            <Slider {...settings}>{carouselItems}</Slider>
        </div>
    );
};

ImageCarousel.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string,
            url: PropTypes.string
        })
    ).isRequired,
    title: PropTypes.string
};

export default ImageCarousel;
