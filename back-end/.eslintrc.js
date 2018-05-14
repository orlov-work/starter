module.exports = {
  'plugins': [],
  'extends': ['airbnb'],
  'rules': {
    'array-bracket-spacing': 'off',
    'class-methods-use-this': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'max-len': ['error', 120],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-inline-comments': ['error'],
    'no-param-reassign': ["error", { "props": false }],
    'no-underscore-dangle': 'off',
    'operator-linebreak': ['error', 'before'],
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': true,
        'ClassDeclaration': true,
        'ArrowFunctionExpression': true
      }
    }],
    'semi': ['error', 'always'],
    'no-shadow': 'off',
    'import/prefer-default-export': 'off'
  },
  'globals': {
    'expectObservable': true,
    'hot': true,
    'cold': true,
    '__DEV__': false,
    'DEVELOPMENT_MODE': true
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'experimentalObjectRestSpread': true
    }
  }
};
