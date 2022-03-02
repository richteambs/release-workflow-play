import { parser, Release } from 'keep-a-changelog';
import { SemVer as NodeSemVer } from 'semver';
import fs from 'fs';

declare type ReleaseType = 'major' | 'minor' | 'patch' | 'premajor' | 'preminor' | 'prepatch' | 'prerelease';

const contents = fs.readFileSync('CHANGELOG.md', { encoding: 'utf-8' });
const changelog = parser(contents);

const latestRelease = changelog.releases.length > 1 ? changelog.releases[1] : null;

const latestVersion = latestRelease?.version ? new NodeSemVer(latestRelease?.version.format()) : undefined;

console.log(JSON.stringify(latestVersion));

//const unreleased = changelog.releases.find((r) => !r.version);
const unreleased = changelog.findRelease();

if (!unreleased) {
  throw new Error('No unreleased information found in the changelog');
}

const nextVersion = incrementVersion(latestVersion, 'prepatch', 'beta');

unreleased.date = new Date();
unreleased.setVersion(nextVersion);

changelog.addRelease(new Release());

console.log(changelog.toString());

function incrementVersion(version: NodeSemVer | undefined, releaseType: ReleaseType, preid?: string): string {
  const baseVersion = version ?? new NodeSemVer('0.0.0');
  return baseVersion.inc(releaseType, preid).version;
}
