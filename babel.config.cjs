module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current', esmodules: true } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // defaults to classic
      },
    ],
    '@babel/preset-typescript',
  ],
};
