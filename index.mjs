// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";var e="/".charCodeAt(0);function s(s){var i;if(!r(s))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",s));for(i=(s=s.toString()).length-1;i>=0&&s.charCodeAt(i)!==e;i--);return{type:"RegExp",pattern:s.substring(1,i),flags:s.substring(i+1)}}export{s as default};
//# sourceMappingURL=index.mjs.map
