const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^data/(.*)$',
    '^(champion|match|player|player_pair)/(.*)$',
    '^[./]',
    '.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
