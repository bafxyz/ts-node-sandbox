module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
    settings: {
        react: {
            version: 'detect'
        }
    }
}
