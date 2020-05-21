module.exports = function (api) {
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
