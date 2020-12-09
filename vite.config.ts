import { resolve } from "path";
import type { UserConfig, DepOptimizationOptions } from "vite";
const pkg = require("./package.json");

function pathResolve(dir: string): string {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  "/@/": pathResolve("src")
}

const optimizeDeps: DepOptimizationOptions = {
  // exclude: ["vue-router"]
}

export default {
  alias,
  optimizeDeps
} as UserConfig