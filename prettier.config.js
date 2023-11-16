const config = {
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^data/(.*)$',
    '^routes/(.*)$',
    '^utils/(.*)$',
    '^ui/(.*)$',
    '^(champion|match|player|player_pair|score)/(.*)$',
    '^[./]',
    '.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
