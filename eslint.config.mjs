import globals from "globals";


export default [
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  },
  {
    overrides: [
      {
        "files": ["tests/**/*"],
        "env": {
          "jest": true
        }
      }
    ]
  }
];