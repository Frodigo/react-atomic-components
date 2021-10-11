import React from 'react';
import ThemeProvider from '../src/components/utils/ThemeProvider';
import '@storybook/addon-console';

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false
  },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
        a[1].kind === b[1].kind
            ? 0
            : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
};

export const decorators = [
  (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
  )
];
