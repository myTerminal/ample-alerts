!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ampleAlerts",[],t):"object"==typeof exports?exports.ampleAlerts=t():e.ampleAlerts=t()}(window,function(){return function(e){var t={};function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=3)}({0:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.alert=function(e,t){var l=u(arguments.length<=2?void 0:arguments[2]),n=(arguments.length<=3?void 0:arguments[3])||{},r=document.createElement("div");r.className="ample-alert alert",r.innerHTML=a(l[0],!0)+i(l[1])+'<div class="clear-fix"></div>',o.container.appendChild(r),r.querySelector(".ample-alert-close").onclick=function(){t&&t(),d(r)},n.autoClose&&setTimeout(function(){t&&t(),d(r)},n.autoClose),setTimeout(function(){r.className+=" visible"},50)},t.confirm=function(e,t){var l=u(arguments.length<=2?void 0:arguments[2]),n=(arguments.length<=3?void 0:arguments[3])||{},d=n.onAction,m=n.labels,p=document.createElement("div");p.className="ample-alert confirm"+(n.isModal?" ample-alert-modal":""),p.innerHTML=a(l[0],!0)+i(l[1])+c(m||["Yes","No"])+'<div class="clear-fix"></div>',o.container.appendChild(p);var f=p.querySelectorAll(".ample-alert-control");p.querySelector(".ample-alert-close").onclick=s(t,d,{value:!1},p),f[0].onclick=s(e,d,{value:!0},p),f[1].onclick=s(t,d,{value:!1},p),n.isModal&&(r+=1,document.body.className+=" ample-alerts-modal-mode"),setTimeout(function(){p.className+=" visible"},50)},t.prompt=function(e,t){var l=u(arguments.length<=2?void 0:arguments[2]),n=(arguments.length<=3?void 0:arguments[3])||{},d=n.defaultResponse,m=n.onAction,p=n.labels,f=document.createElement("div");f.className="ample-alert prompt"+(n.isModal?" ample-alert-modal":""),f.innerHTML=a(l[0],!0)+i(l[1])+('\n<div class="ample-alert-input">\n    <input class="ample-alert-input-value" value="'+(d||"")+'" />\n</div>\n')+c(p||["Ok","Cancel"])+'<div class="clear-fix"></div>',o.container.appendChild(f);var v=f.querySelectorAll(".ample-alert-control");f.querySelector(".ample-alert-input-value").onkeydown=function(t){return 13!==t.keyCode||(s(e,m,f.querySelector(".ample-alert-input-value"),f)(),!1)},f.querySelector(".ample-alert-close").onclick=s(t,m,{value:null},f),v[0].onclick=s(e,m,f.querySelector(".ample-alert-input-value"),f),v[1].onclick=s(t,m,{value:null},f),n.isModal&&(r+=1,document.body.className+=" ample-alerts-modal-mode"),setTimeout(function(){f.className+=" visible"},50),setTimeout(function(){return f.querySelector(".ample-alert-input-value").focus()},1e3)},l(8),document.body.innerHTML+='<div id="ample-alerts-backdrop"></div><div id="ample-alerts-container"></div>';var o={container:document.querySelector("#ample-alerts-container")},r=0;function a(e,t){return'\n<div class="ample-alert-header">\n    '+(e?'<div class="ample-alert-header-text">'+e+"</div>":"")+"\n    "+(t?'<div class="ample-alert-close">&#10006;</div>':"")+"\n</div>\n"}function i(e){return'\n<div class="ample-alert-body">\n    '+e+"\n</div>\n"}function c(e){return'\n<div class="ample-alert-controls">\n    <div class="ample-alert-control">'+e[0]+'</div>\n    <div class="ample-alert-control">'+e[1]+"</div>\n</div>\n"}function u(e){return"object"===(void 0===e?"undefined":n(e))?e:["",e]}function d(e){e.className+=" leaving",-1<e.className.indexOf("ample-alert-modal")&&((r-=1)||(document.body.className=document.body.className.replace(/\sample-alerts-modal-mode/g,""))),setTimeout(function(){e.remove()},1e3)}function s(e,t,l,n){return function(){e&&e(l.value),t&&t(l.value),d(n)}}},3:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prompt=t.confirm=t.alert=void 0;var n=l(0),o=t.alert=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];n.alert.apply(void 0,[null,null].concat(t))},r=t.confirm=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];n.confirm.apply(void 0,[null,null].concat(t))},a=t.prompt=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];n.prompt.apply(void 0,[null,null].concat(t))};t.default={alert:o,confirm:r,prompt:a}},8:function(e,t){}})});