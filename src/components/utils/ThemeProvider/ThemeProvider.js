import React from 'react';

import '../../../styles/variables.css';
import '../../../styles/globals.css';

const ThemeProvider = (props) => {
    const { children } = props;

    return <div className="body storybook-body" style={{padding: '15px'}}>{children}</div>;
};

export default ThemeProvider;
