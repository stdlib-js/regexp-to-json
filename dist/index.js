"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(v,t){
var s=require('@stdlib/assert-is-regexp/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist'),o=47;function u(e){var r;if(!s(e))throw new TypeError(n('1f9EP',e));for(e=e.toString(),r=e.length-1;r>=0&&e.charCodeAt(r)!==o;r--);return{type:"RegExp",pattern:e.substring(1,r),flags:e.substring(r+1)}}t.exports=u
});var g=i();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
