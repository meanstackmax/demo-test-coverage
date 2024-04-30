import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  addons: [
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          exclude: [
            '**/animations/**',
            '**/DefaultDropdown/**',
            '**/Divider/**',
            '**/GroupWrapper/**',
            '**/ListFooter/**',
            '**/Panel/**',
            '**/*.spec.js'
          ]
        }
      }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  docs: {
    autodocs: true
  },
  framework: '@storybook/react-vite',
  stories: [
    {
      directory: '../src',
      files: '**/*.stories.@(js|jsx|ts|tsx|mdx)',
      titlePrefix: 'Component Library'
    }
  ]
};

export default config;
