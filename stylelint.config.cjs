module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules', 'stylelint-config-recess-order'],
  plugins: ['stylelint-declaration-strict-value'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // lowerCamelCase
    'selector-id-pattern': '^[a-z][a-zA-Z0-9]+$', // lowerCamelCase
    'scale-unlimited/declaration-strict-value': [['/color$/', 'z-index', '/gap$/']],
  },
};
