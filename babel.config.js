module.exports = {
  presets: [
    [
      '@babel/react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread', 
    '@babel/plugin-proposal-class-properties'
  ]
};