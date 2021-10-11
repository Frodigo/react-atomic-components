import React from 'react';
import PropTypes from 'prop-types';
import { default as SlickSlider } from 'react-slick';

import classes from './Slider.module.css';

const Slider = (props) => {
    const { items } = props;

    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className={classes.slider}>
            <SlickSlider {...settings}>{items}</SlickSlider>
        </div>
    );
};

Slider.propTypes = {
    items: PropTypes.array.isRequired
};

export default Slider;
