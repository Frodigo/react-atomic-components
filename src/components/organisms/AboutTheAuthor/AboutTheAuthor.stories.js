import React from 'react';

import { default as AboutTheAuthorComponent } from './AboutTheAuthor';

export default {
    title: 'Organisms',
    component: AboutTheAuthorComponent
};

const Template = (args) => <AboutTheAuthorComponent {...args} />;

export const AboutTheAuthor = Template.bind({});
AboutTheAuthor.args = {
    name: 'John Kowalski',
    image: 'https://via.placeholder.com/270x270',
    description:
        'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie.',
    ctaUrl: '#',
    ctaLabel: 'Read more'
};
