import React from 'react';

import PageHeader from '../../organisms/PageHeader';
import Hero from '../../molecues/Hero'
import Tile from '../../molecues/Tile';
import MediaBlock from '../../molecues/MediaBlock';
import ContentBlock from '../../molecues/ContentBlock';
import Heading from '../../atoms/Text/Heading';
import Link from '../../atoms/Link';
import Tout from '../../molecues/Tout';

import classes from './Home.module.css';
import FooterMock from "../partials/FooterMock";
import AboutTheAuthor from "../../organisms/AboutTheAuthor";

const Home = (props) => {
    const { ...rest } = props;

    const aboutTheAuthorProps = {
        heading: 'About me',
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
        <div className={classes.Home} {...rest}>
            <PageHeader navItems={pageHeaderNavItems} logoUrl="https://via.placeholder.com/100x30" logoAlt="lorem ipsum" />
            <Hero heading="Lorem ipsum" image={{alt: 'figure', filename: 'https://via.placeholder.com/400x400'}} paragraph="Lorem ipsum dolor sit amet"/>
            <Tile heading="What I do?" />
            <div className={classes.mediaBlockList}>
                <MediaBlock
                    imageUrl="https://via.placeholder.com/290x240"
                    linkUrl="#"
                    text="Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. "
                    title="Lorem Ipsum"
                    imageWidth="290"
                    imageHeight="240"
                />
                <MediaBlock
                    imageUrl="https://via.placeholder.com/290x240"
                    linkUrl="#"
                    text="Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. "
                    title="Lorem Ipsum"
                    imageWidth="290"
                    imageHeight="240"
                />
            </div>
            <div className={classes.callToActionSection}>
                <ContentBlock
                    heading="Heading level 1"
                    paragraph="Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie"
                    cta={[{
                        href: '#',
                        children: 'Call to action',
                        variant: 'primary'
                    }]}
                />
            </div>
            <div className={classes.articles}>
                <header className={classes.articlesHeader}>
                    <Heading type="h4">Recent articles</Heading>
                </header>
                <div className={classes.articlesInner}>
                    <Tout
                        imageUrl="https://via.placeholder.com/290x240"
                        linkUrl="#"
                        title="Lorem ipsum"
                        imageWidth="290"
                        imageHeight="240"
                    />
                    <Tout
                        imageUrl="https://via.placeholder.com/290x240"
                        linkUrl="#"
                        title="Lorem ipsum"
                        imageWidth="290"
                        imageHeight="240"
                    />
                </div>
                <footer className={classes.articlesFooter}>
                    <Link href="#" variant="secondary">
                        Show all
                    </Link>
                </footer>
            </div>
            <AboutTheAuthor {...aboutTheAuthorProps} />
            <FooterMock/>
        </div>
    );
};

export default Home;
