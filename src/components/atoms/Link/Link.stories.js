import React from 'react';

import Link from './Link';

export default {
  title: 'Atoms/Buttons/Link',
  component: Link,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'text', 'inverse'],
      },
    },
    active: {
      control: {
        type: 'select',
        options: [false, true],
      },
    },
  },
};

const Template = (args) => <Link {...args} />;

const InverseTemplate = (args) => (
  <div
    style={{
      backgroundColor: '#460273',
      padding: `${30}px`,
    }}
  >
    <Link {...args} />
  </div>
);

export const TextLink = Template.bind({});
TextLink.args = {
  variant: 'text',
  children: 'Text link',
  disabled: false,
  active: false,
  href: '#',
};

export const TextLinkInverse = InverseTemplate.bind({});
TextLinkInverse.args = {
  variant: 'inverse',
  children: 'Inverse Text link',
  disabled: false,
  active: false,
  href: '#',
};

export const LinkAsButton = Template.bind({});
LinkAsButton.args = {
  variant: 'secondary',
  children: 'Link as button',
  disabled: false,
  active: false,
  href: '#',
};
