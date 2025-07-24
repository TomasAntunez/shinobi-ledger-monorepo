const path = require("path");
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      '@babel/runtime': path.resolve(__dirname, '../../node_modules/@babel/runtime'),
    }
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
  ]
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
