import React from 'react';
import PropTypes from 'prop-types';

import classes from '../Button/Button.module.css';

/**
 * This is the button.
 * @param {*} props
 */
const Link = (props) => {
  const { variant = 'primary', children, href, ...rest } = props;

  let buttonClass;

  switch (variant) {
    case 'primary': {
      buttonClass = classes.primary;

      break;
    }

    case 'secondary': {
      buttonClass = classes.secondary;

      break;
    }

    case 'tiertary': {
      buttonClass = classes.tiertary;

      break;
    }

    case 'inverse': {
      buttonClass = classes.inverse;

      break;
    }

    default: {
      buttonClass = null;
    }
  }

  return (
    <a href={href} className={buttonClass} {...rest}>
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.string,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'text',
    'primary',
    'secondary',
    'tiertary',
    'inverse',
  ]),
};

Link.defaultProps = {
  variant: 'text',
};

export default Link;
