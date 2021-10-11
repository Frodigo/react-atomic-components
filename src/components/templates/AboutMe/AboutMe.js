import React from 'react';

import PageHeader from '../../organisms/PageHeader';
import Newsletter from '../../organisms/Newsletter';
import PageFooter from '../../organisms/PageFooter/PageFooter';
import ShareSection from '../../organisms/ShareSection';
import MobileNav from '../../organisms/MobileNav/MobileNav';
import { items as mobileNavItems } from '../../organisms/MobileNav/MobileNav.config';
import Heading from '../../atoms/Text/Heading';
import MediaBlockSmaller from '../../molecues/MediaBlock/MediaBlockSmaller';
import ImageCarousel from '../../organisms/ImageCarousel';
import Paragraph from '../../atoms/Text/Paragraph';
import Blockquote from '../../atoms/Text/Blockquote';
import Slider from '../../organisms/Slider';
import ContentBlock from '../../molecues/ContentBlock';

import classes from './AboutMe.module.css';
import FooterMock from "../partials/FooterMock";

const Home = (props) => {
    const { ...rest } = props;

    const image = null;

    const imageCarouselProps = {
        items: [
            {
                url: 'https://via.placeholder.com/208x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/260x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/108x117',
                alt: 'figure'
            },
            {
                url: 'https://via.placeholder.com/58x117',
                alt: 'figure'
            }
        ],
        title: 'Tech skills'
    };

    const testimonialsItems = [
        <Blockquote
            key="1"
            author="Author 1"
            quote="Lorem ipsum"
            type="inverse"
        />,
        <Blockquote
            key="2"
            author="Author 2"
            quote="Lorem ipsum"
            type="inverse"
        />,
        <Blockquote
            key="3"
            author="Author 3"
            quote="Lorem ipsum"
            type="inverse"
        />
    ];

    const pageHeaderNavItems = [
        {
            url: '#',
            label: 'Home'
        },
        {
            url: '#',
            label: 'About me',
            isActive: true
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
        <div className={classes.about} {...rest}>
            <PageHeader navItems={pageHeaderNavItems} />
            <div className={classes.content}>
                <figure
                    className={classes.mainFigureDesktop}
                    style={{
                        backgroundImage: `url("${image}")`
                    }}
                />
                <section className={classes.mainContent}>
                    <Heading type="h1">Hey!</Heading>
                    <figure
                        className={classes.mainFigure}
                        style={{
                            backgroundImage: `url("${image}")`
                        }}
                    />
                    <p>
                        Nam porttitor blandit accumsan. Ut vel dictum sem, a
                        pretium dui. In malesuada enim in dolor euismod, id
                        commodo mi consectetur. Curabitur at vestibulum nisi.
                        Nullam vehicula nisi velit. Mauris turpis nisl, molestie
                        ut ipsum et, suscipit vehicula odio. Vestibulum interdum
                        vestibulum felis ac molestie.
                    </p>
                </section>
            </div>
            <section className={classes.experience}>
                <Heading type="h2">Work experience</Heading>

                <MediaBlockSmaller
                    imageUrl="https://via.placeholder.com/240x240"
                    subtitle="05/2016 - 04/2020"
                    title="Frontend Tech Leader"
                    text="Divante"
                />

                <MediaBlockSmaller
                    imageUrl="https://via.placeholder.com/240x240"
                    subtitle="05/2016 - 04/2020"
                    title="Frontend Tech Leader"
                    text="Divante"
                />
            </section>
            <div className={classes.skills}>
                <ImageCarousel {...imageCarouselProps} />
            </div>
            <div className={classes.certifications}>
                <Heading type="h2">Certifications</Heading>
                <Paragraph type="large">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                    dolor sit amet
                </Paragraph>

                <ul className={classes.certificationList}>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Certification 1</a>
                        (10/2020)
                    </li>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Certification 2</a>
                        (10/2020)
                    </li>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">Certification 3</a>
                        (10/2020)
                    </li>
                </ul>
            </div>
            <div className={classes.testimonials}>
                <Heading type="h2" classes={classes.testimonialsHeading}>
                    Testimonials
                </Heading>
                <Slider items={testimonialsItems} />
            </div>
            <div className={classes.personal}>
                <Heading type="h2">Personal</Heading>
                <Paragraph type="large">
                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium
                    dui. In malesuada enim in dolor euismod, id commodo mi
                    consectetur. Curabitur at vestibulum nisi. Nullam vehicula
                    nisi velit. Mauris turpis nisl, molestie ut ipsum et,
                    suscipit vehicula odio.
                </Paragraph>
                <div className={classes.personalImages}>
                    <div className={classes.personalImagesCol}>
                        <img
                            src="https://via.placeholder.com/319x319"
                            alt="figure"
                        />
                        <img
                            src="https://via.placeholder.com/319x178"
                            alt="figure"
                        />
                    </div>
                    <div className={classes.personalImagesCol}>
                        <img
                            src="https://via.placeholder.com/319x178"
                            alt="figure"
                        />
                        <img
                            src="https://via.placeholder.com/319x319"
                            alt="figure"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.contentBlock}>
                <ContentBlock
                    heading="Heading level 1"
                    paragraph="Lorem ipsum dolor sit amet "
                    cta={[{
                        href: '#',
                        children: 'Read more',
                        variant: 'primary'
                    }]}
                />
            </div>
            <ShareSection heading="Follow me" />
            <FooterMock/>
        </div>
    );
};

export default Home;
