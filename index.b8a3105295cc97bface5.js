!function(e){function t(t){for(var n,c,l=t[0],u=t[1],i=t[2],p=0,s=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(t);s.length;)s.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={0:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=u;o.push([182,1]),r()}({182:function(e,t,r){r(183),e.exports=r(381)},369:function(e,t,r){},381:function(e,t,r){"use strict";r.r(t);r(369),r(370);var n=r(0),a=r.n(n),o=r(14),c=(r(375),r(47)),l=r(65);function u(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={data:[],currentData:[]},y=Object(l.b)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return p(p({},e),{},{data:[].concat(u(e.data),u(t.payload.data)),currentData:[].concat(u(e.currentData),u(t.payload.data))});case"SEARCH_WITH_DATA":return p(p({},e),{},{currentData:u(t.payload)});case"RESET":return p(p({},e),{},{currentData:e.data});default:return e}}}),d=Object(l.d)(y,Object(l.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),b=r(413),E=r(415),O=r(416),h=r(417),v=r(418),g=r(383),j=r(419),w=r(423),S=r(428),A=r(420),_=r(421),T=r(422),D=r(411),P=Object(D.a)((function(e){return{head:{backgroundColor:e.palette.primary.main},headText:{color:e.palette.primary.contrastText}}})),R=Object(c.b)((function(e){return{currentData:e.main.currentData}}))((function(e){var t=P();return a.a.createElement(A.a,null,a.a.createElement(_.a,null,a.a.createElement(T.a,{md:{size:8,offset:2}},a.a.createElement(w.a,{elevation:2},a.a.createElement(S.a,{p:2},a.a.createElement(b.a,null,a.a.createElement(E.a,null,a.a.createElement(O.a,{className:t.head},a.a.createElement(h.a,null,a.a.createElement(v.a,null,a.a.createElement(g.a,{className:t.headText},"Index")),a.a.createElement(v.a,null,a.a.createElement(g.a,{className:t.headText},"String")))),a.a.createElement(j.a,null,e.currentData.map((function(e,t){return a.a.createElement(h.a,{key:t},a.a.createElement(v.a,null,a.a.createElement(g.a,null,t+1)),a.a.createElement(v.a,null,a.a.createElement(g.a,null,e)))}))))))))))})),x=r(427),I=r(424),k=r(429),N=r(425),C=r(384);function H(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=Object(c.b)((function(e){return{data:e.main.data}}))((function(e){var t=Object(n.useRef)(),r=Object(n.useRef)();return a.a.createElement(A.a,null,a.a.createElement(_.a,null,a.a.createElement(T.a,{md:{size:8,offset:2},className:"mb-2"},a.a.createElement(w.a,{elevation:2},a.a.createElement(S.a,{p:2},a.a.createElement(x.a,{margin:"normal",label:"Request",variant:"outlined",fullWidth:!0,onInput:function(){""===t.current.value&&e.dispatch({type:"RESET"})},inputRef:t,type:"text"}),a.a.createElement(I.a,{control:a.a.createElement(k.a,{color:"primary"}),label:"Register",inputRef:r}),a.a.createElement(N.a,{variant:"contained",color:"primary"},a.a.createElement(C.a,{onClick:function(){console.log(t.current.value),e.dispatch({type:"SEARCH_WITH_DATA",payload:H(e.data.filter((function(e){return e.length>=t.current.value})))})}},"By lenght"),a.a.createElement(C.a,{onClick:function(){var n=new RegExp("".concat(t.current.value),"g".concat(r.current.checked?"i":""));e.dispatch({type:"SEARCH_WITH_DATA",payload:H(e.data.filter((function(e){return!!n.test(e)})))})}},"By subString")))))))})),W=function(e){var t=Object(c.c)();return Object(n.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/data.json").then((function(e){return e.json()})).then((function(e){t({type:"GET_DATA",payload:e})}))}),[]),a.a.createElement("main",{className:"main"},a.a.createElement(U,null),a.a.createElement(R,null))},X=r(426),q=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(X.a,null),a.a.createElement(W,null))};Object(o.render)(a.a.createElement(c.a,{store:d},a.a.createElement(q,null)),document.querySelector(".app"))}});