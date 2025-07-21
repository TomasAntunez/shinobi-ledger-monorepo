import { execSync, ExecSyncOptions } from 'child_process';
import path from 'path';
import fs from 'fs';

const appName = process.argv[2];

if (!appName) {
  console.error('❌ You must provide an app name. Example: npm run create:app:nest auth');
  process.exit(1);
}

const command = `npx nest new ${appName} --skip-git --skip-install --strict --package-manager npm`;

const rootDir = path.resolve(__dirname, '../../');
const processBaseOptions: ExecSyncOptions = { stdio: 'inherit', cwd: rootDir };

execSync(command, processBaseOptions);

const appPath = path.join(rootDir, appName);
const packageJsonPath = path.join(appPath, 'package.json');

if (!fs.existsSync(packageJsonPath)) {
  console.warn(`⚠️ package.json not found at ${packageJsonPath}`);
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.name = `@shinobi-ledger/${appName}`;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`📦 Updated package name to "@shinobi-ledger/${appName}"`);

console.log('📦 Installing dependencies...');
execSync('npm install', processBaseOptions);
