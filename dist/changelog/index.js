require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 82:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const keep_a_changelog_1 = __nccwpck_require__(772);
const fs_1 = __importDefault(__nccwpck_require__(147));
const contents = fs_1.default.readFileSync('CHANGELOG.md', { encoding: 'utf-8' });
const changelog = (0, keep_a_changelog_1.parser)(contents);
const latestRelease = changelog.releases.length > 1 ? changelog.releases[1] : null;
const x = latestRelease === null || latestRelease === void 0 ? void 0 : latestRelease.version;
console.log(x);
//const unreleased = changelog.releases.find((r) => !r.version);
const unreleased = changelog.findRelease();
if (!unreleased) {
    throw new Error('No unreleased information found in the changelog');
}
unreleased.date = new Date();
unreleased.setVersion('3.0.0');
changelog.addRelease(new keep_a_changelog_1.Release());
console.log(changelog.toString());


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./src/parser.js", "./src/Change.js", "./src/Changelog.js", "./src/Release.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Release = exports.parser = exports.Changelog = exports.Change = void 0;
    const parser_js_1 = __importDefault(require("./src/parser.js"));
    exports.parser = parser_js_1.default;
    const Change_js_1 = __importDefault(require("./src/Change.js"));
    exports.Change = Change_js_1.default;
    const Changelog_js_1 = __importDefault(require("./src/Changelog.js"));
    exports.Changelog = Changelog_js_1.default;
    const Release_js_1 = __importDefault(require("./src/Release.js"));
    exports.Release = Release_js_1.default;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(82);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map