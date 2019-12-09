module.exports = {
  "extends": "airbnb-base",
  "rules": {
    // windows linebreaks when not in production environment
    'linebreak-style': 'off',
    'class-methods-use-this': 0,
    'global-require': 0,
    "no-await-in-loop": 0,
    "no-unused-consts": 0,
    "no-restricted-syntax": 0,
    "prefer-promise-reject-errors": 0,
    "radix": 0,
    "array-callback-return": 0,
    "consistent-return": 0,
    "no-console": 0,
    "no-underscore-dangle": [2, { "allow": ["_logStats"] }],
    "no-buffer-constructor": 0,
    "max-len": [
      "error",
      {
        "code": 200
      }
    ]

  },
  "env": {
    "mocha": true
  },
};
