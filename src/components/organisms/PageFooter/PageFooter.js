import React from 'react';
import PropTypes from 'prop-types';

import FooterColumn from '../../molecues/FooterColumn';
import { Link } from '../../atoms';

import classes from './PageFooter.module.css';

const PageFooter = (props) => {
    const { footerColumns, footerBottomLinks, copyright, ...rest } = props;

    const shouldDisplayFooterColumns = footerColumns.map((col) => {
        return (
            <FooterColumn
                heading={col.header}
                subheadings={col.links}
                key={col.header}
            />
        );
    });

    const shouldDisplayFooterBottomLinks = footerBottomLinks.map((link) => {
        return (
            <li key={link.label}>
                <Link href={link.href} >{link.label}</Link>
            </li>
        );
    });

    return (
        <footer className={classes.pageFooter} {...rest}>
            <div className={classes.columns}>{shouldDisplayFooterColumns}</div>

            <div>
                <ul className={classes.bottomNav}>
                    {shouldDisplayFooterBottomLinks}
                </ul>
                <p className={classes.copyright}>
                    {copyright}
                </p>
            </div>
        </footer>
    );
};

PageFooter.propTypes = {
    footerColumns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            links: PropTypes.array
        })
    )
};

export default PageFooter;
