!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ampleAlerts",[],t):"object"==typeof exports?exports.ampleAlerts=t():e.ampleAlerts=t()}(window,function(){return function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prompt=t.confirm=t.alert=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(8),document.body.innerHTML+='<div id="ample-alerts-container"></div>';var o={container:document.querySelector("#ample-alerts-container")};function r(e,t){return'<div class="ample-alert-header">'+(e?'<div class="ample-alert-header-text">'+e+"</div>":"")+(t?'<div class="ample-alert-close">&#10006;</div>':"")+"</div>"}function a(e){return'<div class="ample-alert-body">\n        '+e+"\n    </div>"}function i(e){return'<div class="ample-alert-controls">\n        <div class="ample-alert-control">'+e[0]+'</div>\n        <div class="ample-alert-control">'+e[1]+"</div>\n    </div>"}function c(e){return"object"===(void 0===e?"undefined":l(e))?e:["",e]}function u(e,t,n){return function(){e&&e(t.value),s(n)}}function s(e){e.className+=" leaving",setTimeout(function(){e.remove()},1e3)}t.alert=function(){var e=c(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},n=document.createElement("div");n.className="ample-alert alert",n.innerHTML=r(e[0],!0)+a(e[1])+'<div class="clear-fix"></div>',o.container.appendChild(n),n.querySelector(".ample-alert-close").onclick=function(){s(n)},t.autoClose&&setTimeout(function(){s(n)},t.autoClose),setTimeout(function(){n.className+=" visible"},50)},t.confirm=function(){var e=c(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},n=t.onAction,l=t.labels,s=document.createElement("div");s.className="ample-alert confirm",s.innerHTML=r(e[0],!0)+a(e[1])+i(l||["Yes","No"])+'<div class="clear-fix"></div>',o.container.appendChild(s);var p=s.querySelectorAll(".ample-alert-control");s.querySelector(".ample-alert-close").onclick=u(n,!1,s),p[0].onclick=u(n,{value:!0},s),p[1].onclick=u(n,{value:!1},s),setTimeout(function(){s.className+=" visible"},50)},t.prompt=function(){var e=c(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},n=t.defaultResponse,l=t.onAction,s=t.labels,p=document.createElement("div");p.className="ample-alert prompt",p.innerHTML=r(e[0],!0)+a(e[1])+'<div class="ample-alert-input">\n        <input class="ample-alert-input-value" value="'+(n||"")+'" />\n    </div>'+i(s||["Ok","Cancel"])+'<div class="clear-fix"></div>',o.container.appendChild(p);var d=p.querySelectorAll(".ample-alert-control");p.querySelector(".ample-alert-input-value").onkeydown=function(e){return 13!==e.keyCode||(u(l,p.querySelector(".ample-alert-input-value"),p)(),!1)},p.querySelector(".ample-alert-close").onclick=u(l,p.querySelector(".ample-alert-input-value"),p),d[0].onclick=u(l,p.querySelector(".ample-alert-input-value"),p),d[1].onclick=u(l,{value:null},p),setTimeout(function(){p.className+=" visible"},50),setTimeout(function(){return p.querySelector(".ample-alert-input-value").focus()},1e3)}},8:function(e,t){}})});