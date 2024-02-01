// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"",o=r()?function(e){var r,n,o,s,c;if(null==e)return i.call(e);n=e[a],c=a,r=null!=(s=e)&&t.call(s,c);try{e[a]=void 0}catch(r){return i.call(e)}return o=i.call(e),r?e[a]=n:delete e[a],o}:function(e){return i.call(e)},s=RegExp.prototype.exec,c=r();function p(e){return"object"==typeof e&&(e instanceof RegExp||(c?function(e){try{return s.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===o(e)))}function l(e){return"number"==typeof e}function f(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function u(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+f(n):f(n)+e,t&&(e="-"+e)),e}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function h(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!l(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=u(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=u(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===d.call(e.specifier)?d.call(i):g.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function w(e){return"string"==typeof e}var y=Math.abs,b=String.prototype.toLowerCase,v=String.prototype.toUpperCase,m=String.prototype.replace,x=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,k=/^(\d+)e/,T=/\.0$/,R=/\.0*e/,V=/(\..*[^0])0*e/;function $(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!l(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":y(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=m.call(i,V,"$1e"),i=m.call(i,R,"e"),i=m.call(i,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=m.call(i,x,"e+0$1"),i=m.call(i,E,"e-0$1"),e.alternate&&(i=m.call(i,S,"$1."),i=m.call(i,k,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===v.call(e.specifier)?v.call(i):b.call(i)}function A(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function C(e,r,i){var t=r-e.length;return t<0?e:e=i?e+A(t):A(t)+e}var F=String.fromCharCode,I=isNaN,j=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,i,t,n,a,o,s,c,p;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(w(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Z(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,I(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,I(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=h(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!I(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=I(a)?String(t.arg):F(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=$(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=u(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=C(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function G(e){var r,i,t,n;for(i=[],n=0,t=W.exec(e);t;)(r=e.slice(n,W.lastIndex-t[0].length)).length&&i.push(r),i.push(L(t)),n=W.lastIndex,t=W.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function M(e){return"string"==typeof e}function N(e){var r,i,t;if(!M(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=G(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return O.apply(null,i)}var P="/".charCodeAt(0);return function(e){var r;if(!p(e))throw new TypeError(N("invalid argument. Must provide a regular expression. Value: `%s`.",e));for(r=(e=e.toString()).length-1;r>=0&&e.charCodeAt(r)!==P;r--);return{type:"RegExp",pattern:e.substring(1,r),flags:e.substring(r+1)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).regexp2json=r();
//# sourceMappingURL=browser.js.map
