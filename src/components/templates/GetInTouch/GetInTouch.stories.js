import React from 'react';

import { default as GetInTouchTemplate } from './GetInTouch';

export default {
    title: 'Templates',
    component: GetInTouchTemplate
};

const Template = (args) => <GetInTouchTemplate {...args} />;

export const GetInTouch = Template.bind({});
