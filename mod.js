// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";var c=r()?function(t){var r,n,c,l,f;if(null==t)return o.call(t);n=t[a],f=a,r=null!=(l=t)&&e.call(l,f);try{t[a]=void 0}catch(r){return o.call(t)}return c=o.call(t),r?t[a]=n:delete t[a],c}:function(t){return o.call(t)},l=RegExp.prototype.exec;var f=r();function u(t){return"object"==typeof t&&(t instanceof RegExp||(f?function(t){try{return l.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===c(t)))}var i="/".charCodeAt(0);function p(t){var r;if(!u(t))throw new TypeError(function(){var t,r=arguments,o="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)o+="&arg[]="+encodeURIComponent(r[t]);return o}("1f9EP",t));for(r=(t=t.toString()).length-1;r>=0&&t.charCodeAt(r)!==i;r--);return{type:"RegExp",pattern:t.substring(1,r),flags:t.substring(r+1)}}export{p as default};
//# sourceMappingURL=mod.js.map
