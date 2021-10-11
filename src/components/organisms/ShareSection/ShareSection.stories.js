import React from 'react';

import { default as ShareSectionComponent } from './ShareSection';

export default {
    title: 'Organisms',
    component: ShareSectionComponent
};

const Template = (args) => <ShareSectionComponent {...args} />;

export const ShareSection = Template.bind({});
