"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=s(function(f,t){
var n=require('@stdlib/assert-is-regexp/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),u=47;function g(e){var r;if(!n(e))throw new TypeError(o('1f9EP',e));for(e=e.toString(),r=e.length-1;r>=0&&e.charCodeAt(r)!==u;r--);return{type:"RegExp",pattern:e.substring(1,r),flags:e.substring(r+1)}}t.exports=g
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
