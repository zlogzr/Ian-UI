module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    'string-quotes': 'double', // 双引号
    'no-empty-source': null,
    'number-leading-zero': 'never' // 小数不带0
  }
}
