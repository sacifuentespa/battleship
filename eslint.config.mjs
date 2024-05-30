import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ["**/*.test.js", "*.config.*", "dist/"]
  },
  {
    rules: {
      "semi": "error",
      "no-unused-vars": "error"
    }
  }
];