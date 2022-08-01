module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-idiomatic-order'],
  customSyntax: require('postcss-scss'),
  rules: {
    'string-quotes': 'double', // 双引号
    'no-empty-source': null,
    'number-leading-zero': 'never' // 小数不带0
  }
}
