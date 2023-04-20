module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '~/*': './src/*',
            '~/api': './src/api',
            '~/components': './src/components',
            '~/assets': './src/assets',
            '~/screens': './src/screens',
            '~/services': './src/services',
            '~/navigation': './src/navigation',
            '~/utils': './src/utils',
            '~/theme': './src/theme',
            '~/images': './src/assets/images',
            '~/stores': './src/stores',
            '~/modules': './src/modules',
          },
        },
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ]
  };
};
