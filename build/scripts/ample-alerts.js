!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ampleAlerts",[],t):"object"==typeof exports?exports.ampleAlerts=t():e.ampleAlerts=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.alert=function(){var e,t=c(arguments.length<=0?void 0:arguments[0]),n=t[0],o=t[1],u=(arguments.length<=1?void 0:arguments[1])||{};(e=document.createElement("div")).className="ample-alert alert",e.innerHTML=l(n,!0)+i(o)+'<div class="clear-fix"></div>',r.container.appendChild(e),e.querySelector(".ample-alert-close").onclick=function(){a(e)},u.autoClose&&setTimeout(function(){a(e)},u.autoClose),setTimeout(function(){e.className+=" visible"},50)},t.confirm=function(){var e,t,n,o,u=c(arguments.length<=0?void 0:arguments[0]),s=u[0],d=u[1],f=arguments.length<=1?void 0:arguments[1],p=arguments.length<=2?void 0:arguments[2];(o=document.createElement("div")).className="ample-alert confirm",o.innerHTML=l(s,!0)+i(d)+function(e){return'<div class="ample-alert-controls">\n        <div class="ample-alert-control">'+(e&&e[0]||"Yes")+'</div>\n        <div class="ample-alert-control">'+(e&&e[1]||"No")+"</div>\n    </div>"}(p)+'<div class="clear-fix"></div>',r.container.appendChild(o),t=function(){f&&f(!0),a(o)},n=function(){f&&f(!1),a(o)},e=o.querySelectorAll(".ample-alert-control"),o.querySelector(".ample-alert-close").onclick=n,e[0].onclick=t,e[1].onclick=n,setTimeout(function(){o.className+=" visible"},50)},t.prompt=function(){console.error("Not yet implemented")},n(8),document.body.innerHTML+='<div id="ample-alerts-container"></div>';var r={container:document.querySelector("#ample-alerts-container")};function l(e,t){return'<div class="ample-alert-header">'+(e?'<div class="ample-alert-header-text">'+e+"</div>":"")+(t?'<div class="ample-alert-close">&#10006;</div>':"")+"</div>"}function i(e){return'<div class="ample-alert-body">\n        '+e+"\n    </div>"}function c(e){return"object"===(void 0===e?"undefined":o(e))?e:["",e]}function a(e){e.className+=" leaving",setTimeout(function(){e.remove()},1e3)}},8:function(e,t){}}).default});