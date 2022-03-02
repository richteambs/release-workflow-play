"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keep_a_changelog_1 = require("keep-a-changelog");
const fs_1 = __importDefault(require("fs"));
const changelog = (0, keep_a_changelog_1.parser)(fs_1.default.readFileSync('CHANGELOG.md', { encoding: 'utf-8' }));
const found = changelog.releases.find((r) => !r.version);
console.log(changelog.toString());
