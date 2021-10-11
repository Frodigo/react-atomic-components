import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

export const Gist = (props) => {
    const { gistId } = props;

    return <ReactEmbedGist gist={gistId} titleClass="gist__title" />;
};

export default Gist;
