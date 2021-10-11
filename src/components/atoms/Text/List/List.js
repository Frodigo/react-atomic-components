import React from 'react';
import PropTypes from 'prop-types';

/**
 * List wrapper.
 */
const List = (props) => {
    const { type, items } = props;

    const children = items.map((item) => (
        <li key={item}>
            {item}
        </li>
    ));

    let content = null;

    switch (type) {
        case 'ordered': {
            content = <ol>{children}</ol>;

            break;
        }

        default: {
            content = <ul>{children}</ul>;

            break;
        }
    }

    return <>{content}</>;
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string
};

export default List;
