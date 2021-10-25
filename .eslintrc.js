module.exports = {
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'class-property',
    'prettier',
  ],
  ignorePatterns: ['./.eslintrc.js', '*.config.js', 'src/reportWebVitals.ts'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    quotes: [2, 'single'],
    semi: ['error', 'always'],
    'class-property/class-property-semicolon': ['error', 'always'],
    curly: [2, 'all'],
    camelcase: [
      2,
      {
        properties: 'always',
      },
    ],
    eqeqeq: [2, 'smart'],
    'one-var-declaration-per-line': [2, 'always'],
    'new-cap': 2,
    'no-case-declarations': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    arguments: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
