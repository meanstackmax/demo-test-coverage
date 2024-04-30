const { getJestConfig } = require('@storybook/test-runner');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   */
  testTimeout: 10 * 1000 * 60 // 10 minutes
};
