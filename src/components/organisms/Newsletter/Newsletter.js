import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Text/Heading';
import Paragraph from '../../atoms/Text/Paragraph';

import classes from './Newsletter.module.css';

const Newsletter = (props) => {
    const {
        title,
        subtitle,
        submitUrl,
        footer,
        onSubmit,
        token,
        thankYouPageUrl
    } = props;
    const { register, errors, handleSubmit } = useForm();

    return (
        <form
            className={classes.newsletter}
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            action={submitUrl}
            id="newsletter"
        >
            <div className={classes.newsletterContent}>
                <Heading type="h3" classes={classes.title}>
                    {title}
                </Heading>
                <Paragraph>{subtitle}</Paragraph>
                <div className={classes.fieldset}>
                    <Input
                        placeholder="Your name"
                        name="first_name"
                        errorMessage={errors ? errors.name : {}}
                        register={register('first_name', {
                            required:true
                        })}
                    />
                    <Input
                        placeholder="Your email"
                        name="email"
                        errorMessage={errors ? errors.email : {}}
                        type="email"
                        register={register({
                            required: 'Please enter your email.'
                        })}
                    />
                </div>

                <input type="hidden" name="campaign_token" value={token} />
                <input
                    type="hidden"
                    name="thankyou_url"
                    value={thankYouPageUrl}
                />
                <input type="hidden" name="start_day" value="0" />

                <footer className={classes.footer}>
                    {/* eslint-disable-next-line react/no-danger */}
                    <p dangerouslySetInnerHTML={{ __html: footer }} />
                    <Button type="submit">Subscribe</Button>
                </footer>
            </div>
        </form>
    );
};

Newsletter.propTypes = {
    footer: PropTypes.string,
    onSubmit: PropTypes.func,
    submitUrl: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    thankYouPageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
};

export default Newsletter;
