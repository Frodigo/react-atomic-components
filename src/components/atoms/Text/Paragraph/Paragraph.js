import React from 'react';
import PropTypes from 'prop-types';

/**
 * Paragraph wrapper.
 * Please add `inverse` class if you want to show heading with white color.
 */
const Paragraph = (props) => {
    const { children, type, classes, textAlign } = props;

    let parahraph = null;

    const styles = {
        textAlign
    };

    const customClasses = classes ? classes : '';

    switch (type) {
        case 'normal': {
            if (customClasses) {
                parahraph = (
                    <p className={classes} style={styles}>
                        {children}
                    </p>
                );

                break;
            }

            parahraph = (
                <p className="paraghaph" style={styles}>
                    {children}
                </p>
            );

            break;
        }

        case 'smaller': {
            parahraph = (
                <p
                    className={`paraghaph paragraphSmaller ${classes}`}
                    style={styles}
                >
                    {children}
                </p>
            );

            break;
        }

        case 'large': {
            parahraph = (
                <p
                    className={`paraghaph paragraphLarge ${classes}`}
                    style={styles}
                >
                    {children}
                </p>
            );

            break;
        }

        default: {
            parahraph = <p>{children}</p>;

            break;
        }
    }

    return <>{parahraph}</>;
};

Paragraph.propTypes = {
    children: PropTypes.string,
    classes: PropTypes.string,
    textAlign: PropTypes.string,
    type: PropTypes.string.isRequired
};

Paragraph.defaultProps = {
    type: 'normal',
    classes: ''
};

export default Paragraph;
