import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery,
                ...globals.node,
            },

            parser: parser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".vue"],
                project: "./tsconfig.json",
            },
        },

        rules: {
            "no-console": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
        },
    },
];
