module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: "airbnb-typescript",
    plugins: [
        "react",
        "react-hooks"
    ],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {"jsx": true},
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    settings: { react: { version: '18.2' } },
    rules: {
        "class-methods-use-this": 1,
        "linebreak-style": [1, 'unix'],
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "brace-style": ["error", "1tbs", {allowSingleLine: true}],
        "@typescript-eslint/brace-style": ["error", "1tbs", {allowSingleLine: true}],
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/no-array-index-key": 1,
        "react/jsx-no-bind": 0,
        "react/destructuring-assignment": 1,
        "react/jsx-props-no-spreading": [1, {"custom": "ignore"}],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    }
}
