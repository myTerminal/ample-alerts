!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ampleAlerts",[],t):"object"==typeof exports?exports.ampleAlerts=t():e.ampleAlerts=t()}(window,function(){return function(e){var t={};function l(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=e,l.c=t,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}({0:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prompt=t.confirm=t.alert=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};l(8),document.body.innerHTML+='<div id="ample-alerts-backdrop"></div><div id="ample-alerts-container"></div>';var n={container:document.querySelector("#ample-alerts-container")},a=0;function r(e,t){return'<div class="ample-alert-header">'+(e?'<div class="ample-alert-header-text">'+e+"</div>":"")+(t?'<div class="ample-alert-close">&#10006;</div>':"")+"</div>"}function i(e){return'<div class="ample-alert-body">\n        '+e+"\n    </div>"}function c(e){return'<div class="ample-alert-controls">\n        <div class="ample-alert-control">'+e[0]+'</div>\n        <div class="ample-alert-control">'+e[1]+"</div>\n    </div>"}function u(e){return"object"===(void 0===e?"undefined":o(e))?e:["",e]}function s(e,t,l){return function(){e&&e(t.value),d(l)}}function d(e){e.className+=" leaving",e.className.indexOf("ample-alert-modal")>-1&&((a-=1)||(document.body.className=document.body.className.replace(/\sample-alerts-modal-mode/g,""))),setTimeout(function(){e.remove()},1e3)}t.alert=function(){var e=u(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},l=document.createElement("div");l.className="ample-alert alert",l.innerHTML=r(e[0],!0)+i(e[1])+'<div class="clear-fix"></div>',n.container.appendChild(l),l.querySelector(".ample-alert-close").onclick=function(){d(l)},t.autoClose&&setTimeout(function(){d(l)},t.autoClose),setTimeout(function(){l.className+=" visible"},50)},t.confirm=function(){var e=u(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},l=t.onAction,o=t.labels,d=document.createElement("div");d.className="ample-alert confirm"+(t.isModal?" ample-alert-modal":""),d.innerHTML=r(e[0],!0)+i(e[1])+c(o||["Yes","No"])+'<div class="clear-fix"></div>',n.container.appendChild(d);var m=d.querySelectorAll(".ample-alert-control");d.querySelector(".ample-alert-close").onclick=s(l,!1,d),m[0].onclick=s(l,{value:!0},d),m[1].onclick=s(l,{value:!1},d),t.isModal&&(a+=1,document.body.className+=" ample-alerts-modal-mode"),setTimeout(function(){d.className+=" visible"},50)},t.prompt=function(){var e=u(arguments.length<=0?void 0:arguments[0]),t=(arguments.length<=1?void 0:arguments[1])||{},l=t.defaultResponse,o=t.onAction,d=t.labels,m=document.createElement("div");m.className="ample-alert prompt"+(t.isModal?" ample-alert-modal":""),m.innerHTML=r(e[0],!0)+i(e[1])+'<div class="ample-alert-input">\n        <input class="ample-alert-input-value" value="'+(l||"")+'" />\n    </div>'+c(d||["Ok","Cancel"])+'<div class="clear-fix"></div>',n.container.appendChild(m);var p=m.querySelectorAll(".ample-alert-control");m.querySelector(".ample-alert-input-value").onkeydown=function(e){return 13!==e.keyCode||(s(o,m.querySelector(".ample-alert-input-value"),m)(),!1)},m.querySelector(".ample-alert-close").onclick=s(o,m.querySelector(".ample-alert-input-value"),m),p[0].onclick=s(o,m.querySelector(".ample-alert-input-value"),m),p[1].onclick=s(o,{value:null},m),t.isModal&&(a+=1,document.body.className+=" ample-alerts-modal-mode"),setTimeout(function(){m.className+=" visible"},50),setTimeout(function(){return m.querySelector(".ample-alert-input-value").focus()},1e3)}},8:function(e,t){}})});