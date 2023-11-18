import pluginTypeScript from "@typescript-eslint/eslint-plugin";
import pluginTypescriptEslintParser from "@typescript-eslint/parser";
import pluginPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import reactConfigRecommended from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

const tsFiles = ["**/*.{ts,mts,cts,tsx}"];
const jsFiles = ["**/*.{js,mjs,cjs,jsx}"];

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  // for global
  {
    files: [jsFiles, tsFiles],
    ignores: ["**/dist/**"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  // for prettier
  {
    files: [jsFiles, tsFiles],
    rules: {
      ...pluginPrettier.rules,
    },
  },
  // for typescript
  {
    files: [tsFiles],
    languageOptions: {
      parser: pluginTypescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypeScript,
    },
    rules: {
      ...pluginTypeScript.configs["eslint-recommended"].rules,
      ...pluginTypeScript.configs.recommended.rules,
      ...pluginTypeScript.configs["recommended-type-checked"].rules,
      ...pluginTypeScript.configs.strict.rules,
      ...pluginTypeScript.configs["strict-type-checked"].rules,
      ...pluginTypeScript.configs.stylistic.rules,
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
    },
  },
  // for react
  {
    files: [jsFiles, tsFiles],
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      ...reactConfigRecommended.rules,
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
