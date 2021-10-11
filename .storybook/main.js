const path = require('path');

const isCSSRule = (rule) => rule.test.toString() === '/\\.css$/';

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  webpackFinal: (config) => {
    config.module.rules = config.module.rules.filter(
        (rule) => !isCSSRule(rule)
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
            modules: true
          }
        }
      ],
      include: /\.module\.css$/
    });

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      exclude: /\.module\.css$/
    });

    let rule = config.module.rules.find(
        (r) =>
            // it can be another rule with file loader
            // we should get only svg related
            r.test &&
            r.test.toString().includes('svg') &&
            // file-loader might be resolved to js file path so "endsWith" is not reliable enough
            r.loader &&
            r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
