import React from 'react';
import PropTypes from 'prop-types';

import classes from './PageHeader.module.css';

const PageHeader = (props) => {
    const { logoUrl, logoAlt, linkUrl, navItems, ...rest } = props;

    const navLinks = navItems.map((link) => {
        return (
            <a
                key={link.label}
                href={link.url}
                className={`${link.isActive ? classes.navLinkActive : ''} ${
                    classes.navLink
                }`}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.pageHeader} {...rest}>
            <div className={classes.container}>
                <a href={linkUrl} className={classes.link}>
                   <img src={logoUrl} alt={logoAlt} />
                </a>

                <nav className={classes.primaryNav}>{navLinks}</nav>
            </div>
        </header>
    );
};

PageHeader.propTypes = {
    linkUrl: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            isActive: PropTypes.bool
        })
    )
};

PageHeader.defaultProps = {
    linkUrl: '/'
};

export default PageHeader;
