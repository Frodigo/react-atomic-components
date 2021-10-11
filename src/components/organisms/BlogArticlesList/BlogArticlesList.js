import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from '../../molecues/BlogPost';

import classes from './BlogArticlesList.module.css';

const BlogArticlesList = (props) => {
    const { items } = props;

    return (
        <div className={classes.list}>
            {items.map((post) => (
                <BlogPost
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    url={post.url}
                    image={post.image}
                    shortDescription={post.shortDescription}
                    key={post.id}
                />
            ))}
        </div>
    );
};

BlogArticlesList.propTypes = {
    items: PropTypes.array.isRequired
};

export default BlogArticlesList;
