import configureBabel from '../../src/babel-config';

describe('Babel Configuration Module', () => {
  const expectedBabelPlugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-arrow-functions'
  ];
  const expectedBabelPresets = [
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

  describe('configureBabel() method behaviour', () => {
    let babelConfig;
    let mockApi;

    beforeAll(() => {
      /* Create the data required for the test */
      mockApi = {
        cache: jest.fn()
      };
      babelConfig = configureBabel(mockApi);
    });

    afterAll(() => {
      mockApi.cache.mockRestore();
    });

    it('verifies that the api.cache functionality is invoked', () => {
      expect(mockApi.cache.mock.calls).toHaveLength(1);
    });

    it('verifies that a true value is provided as a parameter to the api.cache functionality', () => {
      expect(mockApi.cache.mock.calls[0][0]).toBeTruthy();
    });

    it('verifies that the babel presets are set as part of the babel configuration', () => {
      expect(babelConfig.presets).toBeDefined();
    });
    
    it('verifies that the correct number of presets are set in the babel configuration', () => {
      expect(babelConfig.presets.length).toBe(expectedBabelPresets.length);
    });

    it('verifies that the env preset is set to the list of presets in the babel configuration', () => {
      expect(babelConfig.presets[0][0]).toBe(expectedBabelPresets[0][0]);
    });

    it('verifies that the target node is set to the env preset', () => {
      expect(babelConfig.presets[0][1]).toStrictEqual(expectedBabelPresets[0][1]);
    });

    it('verifies that the react preset is set to the list of presets in the babel configuration', () => {
      expect(babelConfig.presets[1]).toBe(expectedBabelPresets[1]);
    });

    it('verifies that the babel plugins are set as part of the babel configuration', () => {
      expect(babelConfig.plugins).toBeDefined();
    });

    it('verifies that the correct number of plugins are set in the babel configuration', () => {
      expect(babelConfig.plugins.length).toBe(expectedBabelPlugins.length);
    });

    it('verifies that the proposal class properties plugin is set to the list of plugins in the babel configuration', () => {
      expect(babelConfig.plugins[0]).toBe(expectedBabelPlugins[0]);
    });

    it('verifies that the dynamic import plugin is set to the list of plugins in the babel configuration', () => {
      expect(babelConfig.plugins[1]).toBe(expectedBabelPlugins[1]);
    });

    it('verifies that the arrow functions transform plugin is set to the list of plugins in the babel configuration', () => {
      expect(babelConfig.plugins[2]).toBe(expectedBabelPlugins[2]);
    });
  });
});
