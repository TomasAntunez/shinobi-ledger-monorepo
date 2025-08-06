const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const symlinkResolver = require('@rnx-kit/metro-resolver-symlinks');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: symlinkResolver(),
    extraNodeModules: {
      '@babel/runtime': path.resolve(__dirname, '../../node_modules/@babel/runtime'),
    },
  },
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../libs'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
