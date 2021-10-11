import React from 'react';
import Newsletter from "../../organisms/Newsletter";
import PageFooter from "../../organisms/PageFooter";
import MobileNav from "../../organisms/MobileNav";
import {items as mobileNavItems} from "../../organisms/MobileNav/MobileNav.config";

export const FooterMock = () => {


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

    return <>

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
    </>
}

export default FooterMock;