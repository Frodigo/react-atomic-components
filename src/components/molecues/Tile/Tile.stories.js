import React from 'react';

import { default as TileComponent } from './Tile';

export default {
    title: 'Molecues/Tile',
    component: TileComponent
};

const Template = (args) => <TileComponent {...args} />;

export const Tile = Template.bind({});
Tile.args = {
    heading: 'This is Tile!'
};
