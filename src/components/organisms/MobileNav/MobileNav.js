import React from 'react';
import PropTypes from 'prop-types';

import IconWithText from '../../molecues/IconWithText';

import Submenu from './Submenu';
import classes from './MobileNav.module.css';

const MobileNav = (props) => {
    const { items, ...rest } = props;
    const navItems = items.map((item) => {
        if (!item.submenu) {
            return (
                <a href={item.url} key={item.label}>
                    <IconWithText label={item.label} image={item.image} />
                </a>
            );
        }

        return <Submenu item={item} key={item.label} />;
    });

    return (
        <nav className={classes.mobileNav} {...rest}>
            {navItems}
        </nav>
    );
};

MobileNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.shape({
                alt: PropTypes.string,
                url: PropTypes.string
            }).isRequired,
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default MobileNav;
