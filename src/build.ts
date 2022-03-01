import { parser } from 'keep-a-changelog';
import fs from 'fs';

const changelog = parser(fs.readFileSync('CHANGELOG.md', { encoding: 'utf-8' }));

const found = changelog.releases.find((r) => !r.version);

console.log(changelog.toString());
