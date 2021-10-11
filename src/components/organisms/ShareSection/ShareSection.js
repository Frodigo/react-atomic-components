import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Text/Heading';
// import FacebookIcon from '../../../public/assets/icons/social/facebook.svg';
// import TwitterIcon from '../../../public/assets/icons/social/twitter.svg';
// import LinkedinIcon from '../../../public/assets/icons/social/linkedin.svg';
// import GithubIcon from '../../../public/assets/icons/social/github.svg';

import classes from './ShareSection.module.css';

const ShareSection = (props) => {
    const { heading, ...rest } = props;

    return (
        <div className={classes.shareSection} {...rest}>
            <Heading type="h4">{heading}</Heading>

        </div>
    );
};

ShareSection.propTypes = {
    heading: PropTypes.string
};

ShareSection.defaultProps = {
    heading: 'Did you like it? Share!'
};

export default ShareSection;
