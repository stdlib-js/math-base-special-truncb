"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=c(function(w,f){
var a=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-trunc/dist'),o=require('@stdlib/math-base-special-truncn/dist');function p(r,e,i){var n,t;return a(r)||a(e)||a(i)||i<=0||u(e)||u(i)?NaN:u(r)||r===0?r:i===10?o(r,e):e===0||i===1?s(r):(t=q(i,-e),u(t)||(n=s(r*t)/t,u(n))?r:n)}f.exports=p
});var N=v();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
