// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-regexp@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var e="/".charCodeAt(0);function s(s){var o;if(!r(s))throw new TypeError(t("1f9EP",s));for(o=(s=s.toString()).length-1;o>=0&&s.charCodeAt(o)!==e;o--);return{type:"RegExp",pattern:s.substring(1,o),flags:s.substring(o+1)}}export{s as default};
//# sourceMappingURL=index.mjs.map
