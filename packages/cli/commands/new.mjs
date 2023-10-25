#!/usr/bin/env node

import { execSync as exec } from "node:child_process";
import { consola } from "consola";
import { defineCommand } from "citty";
import { commonArgs } from "../common.mjs";

export default defineCommand({
  meta: {
    name: "prepare",
    description: "Creates a new McFly project.",
  },
  args: {
    ...commonArgs,
  },
  async run({ args }) {
    const [directory] = args._;
    try {
      exec(`npm create mcfly@latest ${directory ?? ""}`, { stdio: "inherit" });
    } catch (e) {
      consola.error(e);
    }
  },
});
