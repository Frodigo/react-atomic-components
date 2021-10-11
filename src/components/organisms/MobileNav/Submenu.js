import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Link from '../../atoms/Link';
import IconWithText from '../../molecues/IconWithText';
import Heading from '../../atoms/Text/Heading';

import classes from './MobileNav.module.css';

const Submenu = (props) => {
    const { item } = props;
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const handleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const submenuItems = item.submenu.map((submenuItem) => (
        <a
            href={submenuItem.url}
            key={submenuItem.id}
            className={classes.submenuItem}
        >
            <IconWithText label={submenuItem.label} image={submenuItem.image} />
        </a>
    ));

    return (
        <>
            <button
                type="button"
                onClick={handleSubmenu}
                className={classes.submenuTrigger}
            >
                <IconWithText
                    label={item.label}
                    image={item.image}
                    isActive={isSubmenuOpen}
                />
            </button>

            <nav
                className={
                    isSubmenuOpen ? classes.submenuOpened : classes.submenu
                }
            >
                <header className={classes.submenuHeader}>
                    <Heading classes="inverse" type="h2">
                        Read about:
                    </Heading>
                </header>

                <div className={classes.submenuItems}>{submenuItems}</div>

                <Link
                    variant="tiertary"
                    href={item.url}
                    style={{ marginTop: '30px' }}
                >
                    Show all
                </Link>
            </nav>
        </>
    );
};

Submenu.propTypes = {
    item: PropTypes.object.isRequired
};

export default Submenu;
