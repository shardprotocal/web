(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],f=0,s=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={2:0},a={2:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{1:"5bea1790",3:"aee642bf",4:"91e93f4e",5:"f858c419",6:"04803d7a",7:"86290a7a",8:"ae659cf7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={3:1,4:1,5:1,6:1,7:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"882f5933",4:"cf4dec78",5:"2000230e",6:"cd283c4a",7:"23873bb8",8:"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===a))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){l=s[c],f=l.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=f;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("c973"),o=n.n(r),a=(n("96cf"),n("ac1f"),n("5319"),n("5c7d"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("2b0e")),u=n("1f91"),c=n("42d2"),i=n("b178");a["default"].use(i["b"],{config:{},lang:u["a"],iconSet:c["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],s=n("60a3"),p=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(e,t,n,r){var o,a=arguments.length,u=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(u=(a<3?o(u):a>3?o(t,n,u):o(t,n))||u);return a>3&&u&&Object.defineProperty(t,n,u),u},h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t=d([s["a"]],t),t}(s["b"]),b=h,v=b,m=n("2877"),y=Object(m["a"])(v,l,f,!1,null,null,null),g=y.exports,w=n("4bde"),x=n("2f62"),O=Object(w["store"])((function(e){var t=e.Vue;t.use(x["a"]);var n=new x["a"].Store({modules:{},strict:!1});return n})),j=n("8c4f"),P=[{path:"/",component:function(){return n.e(1).then(n.bind(null,"6fea"))},children:[{path:"",component:function(){return n.e(7).then(n.bind(null,"8b24"))}}]},{path:"/newhome",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b"))},children:[{name:"newhome",path:"",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"bc13"))}}]},{path:"/waitlist",component:function(){return n.e(1).then(n.bind(null,"6fea"))},children:[{name:"waitlist",path:"",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"27a6"))}}]},{path:"/bsc/:e/:b",component:function(){return n.e(1).then(n.bind(null,"6fea"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"25b5"))}}]},{path:"*",component:function(){return n.e(8).then(n.bind(null,"e51e"))}}],k=P,_=Object(w["route"])((function(e){var t=e.Vue;t.use(j["a"]);var n=new j["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:k,mode:"hash",base:""});return n})),S=function(){return E.apply(this,arguments)};function E(){return E=o()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof O){e.next=6;break}return e.next=3,O({Vue:a["default"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=O;case 7:if(t=e.t0,"function"!==typeof _){e.next=14;break}return e.next=11,_({Vue:a["default"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=_;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(g)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}var A={failed:"Action failed",success:"Action was successful"},C={"en-us":A},T=n("a925");a["default"].use(T["a"]);var R=new T["a"]({locale:"en-us",fallbackLocale:"en-us",messages:C}),L=Object(w["boot"])((function(e){var t=e.app;t.i18n=R})),V=n("a748"),N="";function q(){return B.apply(this,arguments)}function B(){return B=o()(regeneratorRuntime.mark((function e(){var t,n,r,o,u,c,i,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,u=!1,c=function(e){u=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[L,V["b"]],f=0;case 11:if(!(!1===u&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:o,store:r,Vue:a["default"],ssrContext:null,redirect:c,urlPath:i,publicPath:N});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!0!==u){e.next=31;break}return e.abrupt("return");case 31:new a["default"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),B.apply(this,arguments)}q()},"7e6d":function(e,t,n){},a748:function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),a=n("4bde");t["b"]=Object(a["boot"])((function(e){var t=e.Vue;t.prototype.$axios=o.a}))}});