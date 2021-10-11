import React from 'react';

import { default as PageFooterComponent } from './PageFooter';

export default {
    title: 'Organisms',
    component: PageFooterComponent
};

const Template = (args) => <PageFooterComponent {...args} />;

export const PageFooter = Template.bind({});
