import React from 'react';
import PropTypes from 'prop-types';

import QuoteIconDefault from '../../../../assets/icons/quote.inline.svg';
import QuoteIconInverse from '../../../../assets/icons/quote.inverse.svg';
import Paragraph from '../Paragraph';

import defaultClasses from './Blockquote.module.css';
import inverseClasses from './Blockquote.inverse.module.css';

const BlockQuote = (props) => {
    const { type, quote, author } = props;

    const classes = type !== 'inverse' ? defaultClasses : inverseClasses;
    const QuoteIcon = type !== 'inverse' ? QuoteIconDefault : QuoteIconInverse;

    return (
        <figure className={classes.figure}>
            <div className={classes.inner}>
                <blockquote className={classes.quote}>
                    <QuoteIcon style={{ marginBottom: '15px' }} />
                    <Paragraph textAlign="center">{quote}</Paragraph>
                </blockquote>
                <figcaption className={classes.caption}>{author}</figcaption>
            </div>
        </figure>
    );
};

BlockQuote.propTypes = {
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'inverse'])
};

BlockQuote.defaultProps = {
    type: 'default'
};

export default BlockQuote;
