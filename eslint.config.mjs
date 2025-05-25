import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig( [
  {
    files:
      [ "src/**/*.{js,mjs,cjs,ts,mts,cts}" ],
    plugins: { js },
    extends: [ "js/recommended" ]
  },
  {
    files:
      [ "src/**/*.{js,mjs,cjs,ts,mts,cts}" ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  tseslint.configs.recommended,
  {
    files:
      [ "src/css/*.css" ],
    plugins: { css },
    language: "css/css",
    extends: [ "css/recommended" ]
  },
  globalIgnores( [
    "**/node_modules",
    "**/dist",
    "**/.gitignore",
  ] ),
  {
    rules: {
      "no-console": "error",
      "curly": [ "error", "all" ],
      "max-len": [ "error", { "code": 200, "tabWidth": 4 } ],
      "indent": [ "error", 2 ],
      "no-unused-vars": "error",
      "max-depth": [ "error", 2 ],
      "max-params": [ "error", 3 ],
      "complexity": [ "error", 6 ],
      "object-curly-spacing": [ "error", "always" ],
    }
  }
] );
