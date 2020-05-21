/**
 * Configures Babel with all relevant settings for:
 *  - Transpiling React components
 * @param {any} api
 * @returns {{presets: Array.<JSON>, plugins: Array.<string>}}
 */
const configureBabel = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10'
        }
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-transform-arrow-functions'
  ];

  return {
    presets,
    plugins
  };
};
export default configureBabel;
