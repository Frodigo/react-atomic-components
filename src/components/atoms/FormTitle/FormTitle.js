import React from 'react';
import PropTypes from 'prop-types';

import classes from './FormTitle.module.css';

/**
 * This is the FormTitle.
 * Component that display form label/legend
 * @param {*} props
 */
const FormTitle = (props) => {
    const { type, children, ...rest } = props;

    if (type === 'legend') {
        return (
            <legend className={classes.legend} {...rest}>
                {children}
            </legend>
        );
    }

    return (
        <label className={classes.label} {...rest}>
            {children}
        </label>
    );
};

FormTitle.propTypes = {
    htmlFor: PropTypes.string,
    type: PropTypes.oneOf(['label', 'legend'])
};

FormTitle.defaultProps = {
    type: 'label'
};

export default FormTitle;
