"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var E=t(function(B,u){
var a={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};u.exports=a
});var i=t(function(L,_){
var n=require('@stdlib/ndarray-base-bytes-per-element/dist'),s=E();function S(e){var r=n(e);return r===null?s.BLOCK_SIZE_IN_ELEMENTS:s.BLOCK_SIZE_IN_BYTES/r|0}_.exports=S
});var l=i();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
