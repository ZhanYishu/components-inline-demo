module.exports = {
  root: true,
  env: {
    'browser': true,
    
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'space-in-parens': [1, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
