import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const run = (cmd: string) => execSync(cmd, { stdio: "inherit" });

// 1. Create a changeset interactively
run("pnpm changeset");

// 2. Bump versions + generate CHANGELOG
run("pnpm changeset version");

// 2. Read the new version
const pkg = JSON.parse(
	readFileSync(path.join(import.meta.dirname, "../package.json"), "utf-8"),
);
const version = `v${pkg.version}`;

// 3. Commit + tag
run("git add .");
run(`git commit -m "chore: release ${version}"`);
run(`git tag ${version}`);
run("git push");
run("git push --tags");

// 4. Build + publish
run("pnpm build");
run("pnpm exec changeset publish");

console.log(`\nPublished ${version}`);
