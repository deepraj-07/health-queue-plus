import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const projectName = "HealthQueue+";
const lcovPath = path.join(projectRoot, "coverage", "lcov.info");
const srcDir = path.join(projectRoot, "src");
const reportDir = path.join(projectRoot, "reports");
const reportFile = path.join(reportDir, "quality-report.txt");

function walkFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }
    files.push(fullPath);
  }

  return files;
}

function parseLcov(content) {
  let covered = 0;
  let total = 0;

  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    if (!line.startsWith("DA:")) {
      continue;
    }

    const payload = line.slice(3);
    const [, hitCountRaw] = payload.split(",");
    const hitCount = Number.parseInt(hitCountRaw ?? "0", 10);

    total += 1;
    if (Number.isFinite(hitCount) && hitCount > 0) {
      covered += 1;
    }
  }

  return { covered, total };
}

function main() {
  if (!fs.existsSync(lcovPath)) {
    throw new Error(`Coverage file not found: ${lcovPath}. Run npm run test:coverage first.`);
  }

  const lcovContent = fs.readFileSync(lcovPath, "utf8");
  const { covered, total } = parseLcov(lcovContent);
  const coveragePct = total === 0 ? 0 : (covered / total) * 100;

  const srcFiles = fs.existsSync(srcDir) ? walkFiles(srcDir) : [];

  const output = [
    `Project: ${projectName}`,
    `Date: ${new Date().toISOString()}`,
    `Coverage: ${coveragePct.toFixed(2)}% (${covered}/${total})`,
    `Total files in src/: ${srcFiles.length}`,
  ].join("\n");

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(reportFile, `${output}\n`, "utf8");

  console.log(output);
  console.log(`Report saved to ${reportFile}`);
}

main();
