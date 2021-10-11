import React from 'react';
import PropTypes from 'prop-types';

import FormTitle from '../FormTitle';

import classes from './FormChoice.module.css';

/**
 * This is the FormTitle.
 * Component that display form label/legend
 * @param {*} props
 */
const FormChoice = (props) => {
    const { type, isChecked, id, name, label, ...rest } = props;

    return (
        <div className={classes.formChoiceField}>
            <input
                type={type}
                name={name}
                id={id}
                checked={isChecked}
                className={`${classes.choice} ${classes[type]}`}
                {...rest}
            />
            <FormTitle htmlFor={id}>{label}</FormTitle>
        </div>
    );
};

FormChoice.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio'])
};

FormChoice.defaultProps = {
    type: 'checkbox'
};

export default FormChoice;
