import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

/**
 *
 * @param {object} props
 * @param {string} props.code
 * @param {string} props.lang
 * @returns
 */
const Code = (props) => {
    const { code, lang } = props;

    return (
        <SyntaxHighlighter language={lang} style={a11yDark} showLineNumbers>
            {code}
        </SyntaxHighlighter>
    );
};

Code.propTypes = {
    code: PropTypes.array.isRequired,
    lang: PropTypes.string
};

Code.defaultProps = {
    lang: 'javascript'
};

export default Code;
