import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigNext from "eslint-config-next";

export default defineConfig([
  globalIgnores([
    "**/*.css",
    "**/.changeset",
    "**/dist",
    "**/.next",
    "**/node_modules",
    "**/coverage",
  ]),
  ...eslintConfigNext({
    dirs: ["app", "src"],
  }),
]);
