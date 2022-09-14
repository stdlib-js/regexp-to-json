// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function t(){return e&&"symbol"==typeof Symbol.toStringTag}var r,o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol.toStringTag:"";r=t()?function(e){var t,r,i,a,u;if(null==e)return o.call(e);r=e[l],u=l,t=null!=(a=e)&&n.call(a,u);try{e[l]=void 0}catch(t){return o.call(e)}return i=o.call(e),t?e[l]=r:delete e[l],i}:function(e){return o.call(e)};var i=r,a=RegExp.prototype.exec,u=t();function c(e){return"object"==typeof e&&(e instanceof RegExp||(u?function(e){try{return a.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===i(e)))}var p,f="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty,b=Object.prototype,s=b.toString,d=b.__defineGetter__,g=b.__defineSetter__,_=b.__lookupGetter__,m=b.__lookupSetter__;function v(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}return p=function(){try{return f({},"x",{}),!0}catch(e){return!1}}()?y:function(e,t,r){var o,n,l,i;if("object"!=typeof e||null===e||"[object Array]"===s.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===s.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((n="value"in r)&&(_.call(e,t)||m.call(e,t)?(o=e.__proto__,e.__proto__=b,delete e[t],e[t]=r.value,e.__proto__=o):e[t]=r.value),l="get"in r,i="set"in r,n&&(l||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&d&&d.call(e,t,r.get),i&&g&&g.call(e,t,r.set),e},p(v,"REGEXP",{configurable:!1,enumerable:!1,writable:!1,value:/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}),function(e){var t;if(!c(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("invalid argument. Must provide a regular expression. Value: `%s`.",e));return{type:"RegExp",pattern:(t=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(e.toString()))[1],flags:t[2]}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).toJSON=t();
//# sourceMappingURL=browser.js.map
