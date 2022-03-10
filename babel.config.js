module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.jsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@api': './src/api',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@constants': './src/constants',
          '@theme': './src/theme/theme',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
