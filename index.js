// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",l=e()?function(t){var e,l,f,c,i;if(null==t)return o.call(t);l=t[r],i=r,e=null!=(c=t)&&n.call(c,i);try{t[r]=void 0}catch(e){return o.call(t)}return f=o.call(t),e?t[r]=l:delete t[r],f}:function(t){return o.call(t)},f=RegExp.prototype.exec,c=e();function i(t){return"object"==typeof t&&(t instanceof RegExp||(c?function(t){try{return f.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===l(t)))}var u="/".charCodeAt(0);return function(t){var e;if(!i(t))throw new TypeError(function(){var t,e=arguments,o="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)o+="&arg[]="+encodeURIComponent(e[t]);return o}("1f9Nz",t));for(e=(t=t.toString()).length-1;e>=0&&t.charCodeAt(e)!==u;e--);return{type:"RegExp",pattern:t.substring(1,e),flags:t.substring(e+1)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).regexp2json=e();
//# sourceMappingURL=index.js.map
