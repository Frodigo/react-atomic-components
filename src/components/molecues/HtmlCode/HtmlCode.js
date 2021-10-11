import React from 'react';

export const HtmlCode = (props) => {
    const { code } = props;

    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: code }} />;
};

export default HtmlCode;
