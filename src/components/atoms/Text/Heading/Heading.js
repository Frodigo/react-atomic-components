import React from 'react';
import PropTypes from 'prop-types';

/**
 * Heading wrapper.
 * Please add `inverse` class if you want to show heading with white color.
 */
const Heading = (props) => {
    const { children, type, classes, textAlign } = props;

    let heading;

    const styles = {
        textAlign
    };

    switch (type) {
        case 'h1': {
            heading = (
                <h1 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h1>
            );

            break;
        }

        case 'h2': {
            heading = (
                <h2 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h2>
            );

            break;
        }

        case 'h3': {
            heading = (
                <h3 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h3>
            );

            break;
        }

        case 'h4': {
            heading = (
                <h4 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h4>
            );

            break;
        }

        case 'h5': {
            heading = (
                <h5 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h5>
            );

            break;
        }

        case 'h6': {
            heading = (
                <h6 className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </h6>
            );

            break;
        }

        default: {
            heading = (
                <div className={`${classes ? classes : ''}`} style={styles}>
                    {children}
                </div>
            );

            break;
        }
    }

    return <>{heading}</>;
};

Heading.propTypes = {
    children: PropTypes.string,
    classes: PropTypes.string,
    textAlign: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Heading;
