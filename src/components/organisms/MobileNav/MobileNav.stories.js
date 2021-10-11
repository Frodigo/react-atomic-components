import React from 'react';

import { default as MobileNavComponent } from './MobileNav';
import { items } from './MobileNav.config';

export default {
    title: 'Organisms/MobileNav',
    component: MobileNavComponent
};

const Template = (args) => <MobileNavComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    items
};
