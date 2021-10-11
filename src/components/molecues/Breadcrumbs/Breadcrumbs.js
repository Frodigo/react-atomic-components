import React from 'react';
import PropTypes from 'prop-types';

import classes from './Breadcrumbs.module.css';

const Breadcrumbs = (props) => {
    const { items } = props;
    const { ...rest } = props;

    const breadcrumbsItems = [...items];

    const activeItem = breadcrumbsItems.pop();

    const shouldDisplayBreadcrumbsItems = breadcrumbsItems
        ? breadcrumbsItems.map((item) => {
              return (
                  <a
                      href={item.url}
                      className={classes.breadcrumbsItem}
                      key={item.label}
                  >
                      <span className={classes.label}>{item.label}</span>
                  </a>
              );
          })
        : null;

    const shouldDisplayActiveItem = activeItem ? (
        <span className={classes.activeItem}>{activeItem.label}</span>
    ) : null;

    return (
        <nav className={classes.breadcrumbs} {...rest}>
            <div className={classes.container}>
                {shouldDisplayBreadcrumbsItems}
                {shouldDisplayActiveItem}
            </div>
        </nav>
    );
};

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Breadcrumbs;
