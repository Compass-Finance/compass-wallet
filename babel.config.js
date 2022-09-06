module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            crypto: 'react-native-quick-crypto',
            stream: 'stream-browserify',
            stream: 'stream-browserify',
          },
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  };
};
