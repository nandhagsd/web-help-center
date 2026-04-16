const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const sourceAssetsDir = path.join(projectRoot, 'src', 'assets');
const outputFile = path.join(projectRoot, 'src', 'app', 'core', 'generated', 'assets.ts');

function toCamelCase(value) {
  return value
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}

function toSafeKey(fileName, ext) {
  const name = toCamelCase(fileName);
  const extension = toCamelCase(ext);
  return `${name}${extension.charAt(0).toUpperCase() + extension.slice(1)}`;
}

function buildTree(currentDiskPath, currentWebPath) {
  const entries = fs
    .readdirSync(currentDiskPath, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  const result = {};

  for (const entry of entries) {
    const diskPath = path.join(currentDiskPath, entry.name);
    const webPath = `${currentWebPath}/${entry.name}`;

    if (entry.isDirectory()) {
      const key = toCamelCase(entry.name);
      result[key] = buildTree(diskPath, webPath);
      continue;
    }

    const parsed = path.parse(entry.name);

    const fileKey = toSafeKey(parsed.name, parsed.ext.replace('.', ''));

    result[fileKey] = webPath;
  }

  return result;
}

function toTsObject(value, indent = 2) {
  const pad = ' '.repeat(indent);

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  const entries = Object.entries(value);

  if (entries.length === 0) {
    return '{}';
  }

  const lines = entries.map(([key, val]) => {
    const safeKeyPattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    const finalKey = safeKeyPattern.test(key) ? key : `'${key}'`;
    return `${pad}${finalKey}: ${toTsObject(val, indent + 2)}`;
  });

  return `{\n${lines.join(',\n')}\n${' '.repeat(indent - 2)}}`;
}

function generate() {
  if (!fs.existsSync(sourceAssetsDir)) {
    throw new Error(`Assets directory not found: ${sourceAssetsDir}`);
  }

  const tree = buildTree(sourceAssetsDir, 'assets');

  const fileContent = `/* eslint-disable */
/* auto-generated file. do not edit manually. */

export const Assets = ${toTsObject(tree)} as const;

export type AssetsType = typeof Assets;
`;

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, fileContent, 'utf8');

  console.log(`Assets file generated at: ${outputFile}`);
}

generate();
