import del from "rollup-plugin-delete";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [del({ targets: "dist/*" }), typescript(), terser()],
};
