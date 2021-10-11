import React from 'react';

import PageHeader from '../../organisms/PageHeader';
import Tile from '../../molecues/Tile';
import Newsletter from '../../organisms/Newsletter';
import PageFooter from '../../organisms/PageFooter/PageFooter';
import ShareSection from '../../organisms/ShareSection';
import MobileNav from '../../organisms/MobileNav/MobileNav';
import { items as mobileNavItems } from '../../organisms/MobileNav/MobileNav.config';

import classes from './GetInTouch.module.css';

const Home = (props) => {
    const { ...rest } = props;

    const newsletterProps = {
        title: 'Subscribe to the newsletter',
        subtitle: 'I will send you unique content every Friday.',
        submitUrl: 'https://app.getresponse.com/add_subscriber.html',
        token: 'WMdq9',
        thankYouPageUrl: 'https://marcin-kwiatkowski.com/thank-you',
        footer:
            'Also i will send you send you PDF with 112 pages about PWA Studio Rich Content renderers',
        onSubmit: (data, e) => e.target.submit()
    };

    const pageHeaderNavItems = [
        {
            url: '#',
            label: 'Home'
        },
        {
            url: '#',
            label: 'About me'
        },
        {
            url: '#',
            label: 'Blog'
        },
        {
            url: '#',
            label: 'Get in touch',
            isActive: true

        }
    ];

    return (
        <div className={classes.Home} {...rest}>
            <PageHeader navItems={pageHeaderNavItems} />
            <Tile heading="Let's talk" />
            <div className={classes.content}>
                <p className={classes.paragraph}>
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio.
                </p>
                <figure className={classes.figure}>
                    <img
                        src="https://via.placeholder.com/290x125"
                        alt="figure"
                    />
                </figure>
                <ShareSection heading="Follow me" />
            </div>
            <Newsletter {...newsletterProps} />
            <PageFooter footerColumns={[
                {
                    header: 'Column 1',
                    links: [{
                        url: '#',
                        label: 'lorem ipsum'
                    },{
                        url: '#',
                        label: 'dolor sit amet'
                    }]
                },
                {
                    header: 'Column 2',
                    links: [{
                        url: '#',
                        label: 'lorem ipsum'
                    },{
                        url: '#',
                        label: 'dolor sit amet'
                    }]
                },
                {
                    header: 'Column 3',
                    links: [{
                        url: '#',
                        label: 'lorem ipsum'
                    },{
                        url: '#',
                        label: 'dolor sit amet'
                    }]
                },
                {
                    header: 'Column 4',
                    links: [{
                        url: '#',
                        label: 'lorem ipsum'
                    },{
                        url: '#',
                        label: 'dolor sit amet'
                    }]
                }
            ]} footerBottomLinks={[
                {
                    href: '#',
                    label: 'Link 1'
                },
                {
                    href: '#',
                    label: 'Link 2'
                },
                {
                    href: '#',
                    label: 'Link 3'
                }
            ]} copyright="&copy; 2021 Lorem ipsum" />
            <MobileNav items={mobileNavItems} />
        </div>
    );
};

export default Home;
