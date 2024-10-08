import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  languageOptions: {
    globals: {
      browser: true,
      es2023: true,
      node: true,
    },
  },
  rules: {
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['log', 'error'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: 'reject|context',
      },
    ],
    'max-lines': ['error', { max: 1200 }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
  },
  // --- Ignores ---
  ignores: [
    'dist/',
    'node_modules/',
    '.eslintrc.js',
    'src/templates/AppLogo.vue',
    'src/components/AppLogo.vue',
    'static/sw.js',
  ],
});
