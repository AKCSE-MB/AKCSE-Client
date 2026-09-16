import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: [
    '../public',
    // next/font/local in preview.tsx loads from ./src/assets/fonts at runtime
    { from: '../src/assets/fonts', to: 'src/assets/fonts' },
  ],
  webpackFinal: async (config) => {
    // Mirror next.config.js: import SVGs as React components via @svgr/webpack.
    // Exclude .svg from Storybook's default asset rule so the two don't conflict.
    const rules = config.module?.rules ?? [];
    rules.forEach((rule) => {
      if (
        rule &&
        typeof rule === 'object' &&
        rule.test instanceof RegExp &&
        rule.test.test('.svg')
      ) {
        rule.exclude = /\.svg$/;
      }
    });
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default config;
