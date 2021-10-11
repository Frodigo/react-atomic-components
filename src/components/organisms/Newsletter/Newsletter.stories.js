import React from 'react';

import { default as NewsletterComponent } from './Newsletter';

export default {
    title: 'Organisms',
    component: NewsletterComponent
};

const Template = (args) => <NewsletterComponent {...args} />;

export const Newsletter = Template.bind({});

Newsletter.args = {
    title: 'Subscribe to the newsletter',
    subtitle: 'I will keep you informed about each new blog entry',
    footer:
        'Also i will send you send you PDF with 112 pages about PWA Studio Rich Content renderers',
    // eslint-disable-next-line no-console
    onSubmit: (data) => console.log(data)
};
