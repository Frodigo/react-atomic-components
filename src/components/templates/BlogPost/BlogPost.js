import React from 'react';

import PageHeader from '../../organisms/PageHeader/PageHeader';
import Breadcrumbs from '../../molecues/Breadcrumbs';
import Newsletter from '../../organisms/Newsletter';
import PageFooter from '../../organisms/PageFooter/PageFooter';
import MobileNav from '../../organisms/MobileNav/MobileNav';
import { items as mobileNavItems } from '../../organisms/MobileNav/MobileNav.config';
import Heading from '../../atoms/Text/Heading';
import BlockQuote from '../../atoms/Text/Blockquote/Blockquote';
import AboutTheAuthor from '../../organisms/AboutTheAuthor';
import ShareSection from '../../organisms/ShareSection';
import Tout from '../../molecues/Tout';

import classes from './BlogPost.module.css';

const BlogPost = () => {
    const breadcrumbsItems = [
        {
            label: 'Home',
            url: '#'
        },
        {
            label: 'Blog',
            url: '#'
        },
        {
            label: 'PWA Studio',
            url: '#'
        }
    ];

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

    const post = {
        author: 'John',
        date: 'November 27, 2020',
        heroImage: 'https://via.placeholder.com/320x180',
        title: 'Heading level 1'
    };

    const aboutTheAuthorProps = {
        name: 'John',
        image: 'https://via.placeholder.com/270x270',
        description:
            'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie.',
        ctaUrl: '#',
        ctaLabel: 'Read more'
    };

    const pageHeaderNavItems = [
        {
            url: '#',
            label: 'Home',
            isActive: true
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
            label: 'Get in touch'
        }
    ];

    return (
        <>
            <PageHeader navItems={pageHeaderNavItems} />
            <div className={classes.postHeader}>
                <Heading type="h1">{post.title}</Heading>
                <div className={classes.postMetadata}>
                    {post.author} / {post.date}
                </div>
                <Breadcrumbs items={breadcrumbsItems} />
            </div>

            <figure className={classes.postHeroImage}>
                <img src={post.heroImage} alt={post.title} />
            </figure>

            <div className={classes.content}>
                <p>
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio. Vestibulum interdum vestibulum felis
                    ac molestie.
                </p>
                <h2>Heading Level 2</h2>

                <p>
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio. Vestibulum interdum vestibulum felis
                    ac molestie.
                </p>
                <h3>Heading Level 3</h3>

                <figure>
                    <img
                        src="https://via.placeholder.com/320x180"
                        alt="figure"
                    />
                </figure>

                <h4>Heading level 4</h4>
                <p className="paragraphSmaller">
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio. Vestibulum interdum vestibulum felis
                    ac molestie.
                </p>

                <BlockQuote
                    author="Marcin Kwiatkowski"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus ullamcorper ante, 
                    eu mattis est auctor id. Nunc libero nisl, efficitur at aliquet vel, venenatis eget felis. Suspendisse at diam nec 
                    risus scelerisque tempus. Mauris id eros diam. Mauris ac risus id libero laoreet eleifend in ac elit."
                />

                <p className="paragraphLarge">
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio. Vestibulum interdum vestibulum felis
                    ac molestie.
                </p>

                <h5>Heading level 5</h5>

                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>

                <h6>Heading level 6</h6>

                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>

            <AboutTheAuthor {...aboutTheAuthorProps} />
            <Newsletter {...newsletterProps} />
            <ShareSection />
            <div className={classes.relatedProducts}>
                <Heading type="h4">You may also like</Heading>
                <div className={classes.items}>
                    <Tout
                        imageUrl="https://via.placeholder.com/290x240"
                        linkUrl="#"
                        title="Lorem ipsum"
                    />
                    <Tout
                        imageUrl="https://via.placeholder.com/290x240"
                        linkUrl="#"
                        title="Lorem ipsum"
                    />
                </div>
            </div>
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
        </>
    );
};

export default BlogPost;
