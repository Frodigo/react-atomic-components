import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import Link from '../../atoms/Link';

import classes from './BlogPost.module.css';

const BlogPost = (props) => {
    const {
        title,
        author,
        date,
        url,
        image,
        shortDescription,
        ...rest
    } = props;

    return (
        <div className={classes.block} {...rest}>
            <div className={classes.blockInner}>
                <section className={classes.text}>
                    <h2 className={classes.heading}>
                        <a href={url}>{title}</a>
                    </h2>

                    <div className={classes.meta}>
                        <span className={classes.author}>{author}</span>
                        <span className={classes.metaItem}>
                            <Moment
                                format="D MMMM YYYY"
                                date={new Date(date)}
                            />
                        </span>
                    </div>

                    <Link variant="primary" href={url}>
                        Read more
                    </Link>
                </section>
                <div className={classes.shortDescription}>
                    <p>
                        {shortDescription}{' '}
                        <a href={url}>Read more</a>
                    </p>
                </div>
                <figure className={classes.figure}>
                    <a href={url}>
                        <img src={image} alt={title} width={500} />
                    </a>
                </figure>
            </div>
        </div>
    );
};

BlogPost.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default BlogPost;
