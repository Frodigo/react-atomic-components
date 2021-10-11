import React from 'react';

import List from './List';

export default {
    title: 'Atoms/List',
    component: List,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['unordered', 'ordered']
            }
        }
    }
};

const items = ['Item 1', 'Item 2', 'Item 3'];
const Template = (args) => <List {...args} />;

export const UnorderedList = Template.bind({});
UnorderedList.args = {
    items
};

export const OrderedList = Template.bind({});
OrderedList.args = {
    items,
    type: 'ordered'
};
