import React from 'react';

import PageHeader from '../../organisms/PageHeader/PageHeader';
import Tile from '../../molecues/Tile';
import Breadcrumbs from '../../molecues/Breadcrumbs';
import ContentBlock from '../../molecues/ContentBlock';
import BlogArticlesList from '../../organisms/BlogArticlesList';
import Newsletter from '../../organisms/Newsletter';
import PageFooter from '../../organisms/PageFooter/PageFooter';
import MobileNav from '../../organisms/MobileNav/MobileNav';
import { items as mobileNavItems } from '../../organisms/MobileNav/MobileNav.config';
import FooterMock from "../partials/FooterMock";

const BlogList = () => {
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

    const articles = [
        {
            id: 1,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '6 November 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        },
        {
            id: 2,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '9 October 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        },
        {
            id: 3,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '25 September 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        },
        {
            id: 4,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '31 August 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        },
        {
            id: 5,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '24 August 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        },
        {
            id: 6,
            title: 'Lorem ipsum',
            author: 'Andrew',
            date: '15 August 2020',
            url: '#',
            image: 'https://via.placeholder.com/396x222',
            shortDescription:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum justo et arcu auctor, nec semper tellus dignissim. Integer iaculis arcu dui, vel maximus ante faucibus sed. Fusce tempor tincidunt neque, euismod lacinia mauris pharetra a. Proin fermentum orci ex, eget laoreet nunc luctus eget. Curabitur ut leo ac justo tincidunt ornare nec eu lacus. Donec eleifend dapibus neque in ornare. '
        }
    ];

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
            <Tile heading="PWA Studio" />
            <Breadcrumbs items={breadcrumbsItems} />
            <ContentBlock
                heading="Lorem ipsum"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit tortor risus, nec finibus velit eleifend sit amet. Morbi ullamcorper pellentesque ante quis aliquet. Vestibulum convallis dolor et neque congue fermentum. "
                cta={[{
                    href: '#',
                    children: 'Read more',
                    variant: 'primary'
                }]}
            />
            <BlogArticlesList items={articles} />
            <FooterMock/>
        </>
    );
};

export default BlogList;
