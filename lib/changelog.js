"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keep_a_changelog_1 = require("keep-a-changelog");
const semver_1 = require("semver");
const fs_1 = __importDefault(require("fs"));
const contents = fs_1.default.readFileSync('CHANGELOG.md', { encoding: 'utf-8' });
const changelog = (0, keep_a_changelog_1.parser)(contents);
const latestRelease = changelog.releases.length > 1 ? changelog.releases[1] : null;
const latestVersion = (latestRelease === null || latestRelease === void 0 ? void 0 : latestRelease.version) ? new semver_1.SemVer(latestRelease === null || latestRelease === void 0 ? void 0 : latestRelease.version.format()) : undefined;
console.log(JSON.stringify(latestVersion));
//const unreleased = changelog.releases.find((r) => !r.version);
const unreleased = changelog.findRelease();
if (!unreleased) {
    throw new Error('No unreleased information found in the changelog');
}
unreleased.date = new Date();
unreleased.setVersion(incrementVersion(latestVersion, 'major', 'beta'));
changelog.addRelease(new keep_a_changelog_1.Release());
console.log(changelog.toString());
function incrementVersion(version, releaseType, preid) {
    const baseVersion = version !== null && version !== void 0 ? version : new semver_1.SemVer('0.0.0');
    return baseVersion.inc(releaseType, preid).version;
}
