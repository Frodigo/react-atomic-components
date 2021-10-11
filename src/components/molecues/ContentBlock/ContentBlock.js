import React from 'react';
import PropTypes from 'prop-types';

import classes from './ContentBlock.module.css';
import {Link} from "../../atoms";

const ContentBlock = (props) => {
    const {
        heading,
        paragraph,
        cta,
        backgroundColor = 'transparent',
        ...rest
    } = props;
    const header = heading ? (
        <h3 className={classes.heading}>{heading}</h3>
    ) : null;
    const content = paragraph ? (
        <p className={classes.paragraph}>{paragraph}</p>
    ) : null;

    const links = props.cta
        ? props.cta.map((block) => (
            <Link key={block.children} href={block.href} variant={block.variant}>{block.children}</Link>
          ))
        : null;

    return (
        <section
            className={classes.block}
            {...rest}
            style={{ backgroundColor }}
        >
            <div className={classes.container}>
                {header}
                {content}

                <div className={classes.links}>{links}</div>
            </div>
        </section>
    );
};

ContentBlock.propTypes = {
    backgroundColor: PropTypes.string,
    cta: PropTypes.arrayOf(
        PropTypes.shape({
            children: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
            href: PropTypes.string.isRequired,
            variant: PropTypes.string
        })
    ),
    heading: PropTypes.string,
    paragraph: PropTypes.string
};

export default ContentBlock;
