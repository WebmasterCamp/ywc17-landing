module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "@nuxtjs"
  ],
  // required to lint *.vue files
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "no-trailing-spaces": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off"
  }
}