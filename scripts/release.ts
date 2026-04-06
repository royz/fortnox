import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const run = (cmd: string) => execSync(cmd, { stdio: "inherit" });

// 1. Generate latest API routes from OpenAPI spec
run("pnpm run generate");

// 2. Create a changeset interactively
run("pnpm changeset");

// 3. Bump versions + generate CHANGELOG
run("pnpm changeset version");

// 4. Read the new version
const pkg = JSON.parse(
	readFileSync(path.join(import.meta.dirname, "../package.json"), "utf-8"),
);
const version = `v${pkg.version}`;

// 5. Commit + tag
run("git add .");
run(`git commit -m "chore: release ${version}"`);
run(`git tag ${version}`);
run("git push");
run("git push --tags");

// 6. Build + publish
run("pnpm build");
run("pnpm exec changeset publish");

console.log(`\nPublished ${version}`);
