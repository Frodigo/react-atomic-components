import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlusIcon from '../../../assets/icons/plus.svg';
import MinusIcon from '../../../assets/icons/minus.svg';
import { Link } from '../../atoms';

import classes from './FooterColumn.module.css';

const FooterColumn = (props) => {
    const { heading, subheadings, ...rest } = props;
    console.log(subheadings)
    const [isOpen, setIsOpen] = useState(false);

    const footerColumnClass = isOpen
        ? classes.footerColumnOpened
        : classes.footerColumn;
    const buttonIcon = isOpen ? <MinusIcon /> : <PlusIcon />;
    const linksContent = subheadings.map((item) => (

        <h6 key={item._uid} className={classes.subheading}>
            <Link className={classes.subheadingLink} href={item.url}>
                {item.label}
            </Link>
        </h6>
    ));

    return (
        <div className={footerColumnClass} {...rest}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={classes.header}
            >
                <h5 className={classes.heading}>{heading}</h5>
                <span className={classes.expandButton}>{buttonIcon}</span>
            </button>
            <section className={isOpen ? classes.linksOpen : classes.links}>{linksContent}</section>
        </div>
    );
};

FooterColumn.propTypes = {
    heading: PropTypes.string.isRequired,
    rest: PropTypes.arrayOf(PropTypes.object),
    subheadings: PropTypes.array
};

export default FooterColumn;
