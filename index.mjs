// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-regexp@v0.0.8-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s){var i;if(!e(s))throw new TypeError(t("invalid argument. Must provide a regular expression. Value: `%s`.",s));return{type:"RegExp",pattern:(i=r().exec(s.toString()))[1],flags:i[2]}}export{s as default};
//# sourceMappingURL=index.mjs.map
