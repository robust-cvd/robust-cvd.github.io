(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function pa(){this.u=!1;this.j=null;this.m=void 0;this.h=1;this.l=this.o=0;this.B=this.i=null}
function qa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
pa.prototype.C=function(a){this.m=a};
function ra(a,b){a.i={za:b,Aa:!0};a.h=a.o||a.l}
pa.prototype["return"]=function(a){this.i={"return":a};this.h=this.l};
function w(a,b,c){a.h=c;return{value:b}}
pa.prototype.O=function(a){this.h=a};
function sa(a,b,c){a.o=b;void 0!=c&&(a.l=c)}
function ta(a){a.o=0;var b=a.i.za;a.i=null;return b}
function ua(a){this.h=new pa;this.i=a}
function wa(a,b){qa(a.h);var c=a.h.j;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.j=null,ra(a.h,g),ya(a)}a.h.j=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.u=!1;if(a.h.i){b=a.h.i;a.h.i=null;if(b.Aa)throw b.za;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.j?b=xa(a,a.h.j.next,b,a.h.C):(a.h.C(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.j?b=xa(a,a.h.j["throw"],b,a.h.C):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)y(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.J),reject:g(this.m)}};
b.prototype.J=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.U(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.V(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.K();this.B()};
b.prototype.K=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.U=function(g){var h=this.l();g.ja(h.resolve,h.reject)};
b.prototype.V=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(x){try{l(q(x))}catch(A){m(A)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.ja(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ja=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ja(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(A){q[x]=A;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ja(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!y(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!y(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&y(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&y(k,g)&&y(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&y(k,g)&&y(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.i[l];if(m&&y(h.i,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,D:q}}return{id:l,list:m,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push(b[d]);return c}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ea(a){if(a&&a!=z)return Fa(a.document);null===Ga&&(Ga=Fa(z.document));return Ga}
var Ha=/^[\w+/_-]+[=]{0,2}$/,Ga=null;function Fa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ha.test(a)?a:""}
function D(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.sa=void 0;a.getInstance=function(){return a.sa?a.sa:a.sa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function E(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?F=Pa:F=Qa;return F.apply(null,arguments)}
function Ra(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function G(){return Date.now()}
function Sa(a,b){B(a,b,void 0)}
function H(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.nk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
H(Ua,Error);Ua.prototype.name="CustomError";function Va(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Xa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ya=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Za=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},$a=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ab(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function bb(a,b){var c=Xa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a,b){var c=La(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){if(void 0===pb){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(c){z.console&&z.console.error(c.message)}pb=a}else pb=a}return pb}
;function rb(a,b){this.h=b===sb?a:""}
rb.prototype.X=!0;rb.prototype.W=function(){return this.h.toString()};
rb.prototype.ma=!0;rb.prototype.la=function(){return 1};
function tb(a){if(a instanceof rb&&a.constructor===rb)return a.h;Ka(a);return"type_error:TrustedResourceUrl"}
var sb={};var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function vb(a,b){if(b)a=a.replace(wb,"&amp;").replace(xb,"&lt;").replace(yb,"&gt;").replace(zb,"&quot;").replace(Ab,"&#39;").replace(Bb,"&#0;");else{if(!Cb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Bb,"&#0;"))}return a}
var wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Ab=/'/g,Bb=/\x00/g,Cb=/[\x00&<>"']/;function Db(a,b){return a<b?-1:a>b?1:0}
;function J(a,b){this.h=b===Eb?a:""}
J.prototype.X=!0;J.prototype.W=function(){return this.h.toString()};
J.prototype.ma=!0;J.prototype.la=function(){return 1};
function Fb(a){if(a instanceof J&&a.constructor===J)return a.h;Ka(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof J)return a;a="object"==typeof a&&a.X?a.W():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new J(a,Eb)}
var Eb={},Kb=new J("about:invalid#zClosurez",Eb);var Lb;a:{var Mb=z.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function K(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.h=c===Pb?a:"";this.i=b}
Ob.prototype.ma=!0;Ob.prototype.la=function(){return this.i};
Ob.prototype.X=!0;Ob.prototype.W=function(){return this.h.toString()};
var Pb={};function Qb(a,b){var c=qb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof J?b:Jb(b);a.href=Fb(c)}
function Sb(a,b){a.src=tb(b);var c=Ea(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=vb(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ia;var dc=K("Opera"),ec=K("Trident")||K("MSIE"),fc=K("Edge"),gc=K("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),hc=-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge");function ic(){var a=z.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Lb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc={},qc;if(z.document&&ec){var rc=ic();qc=rc?rc:parseInt(nc,10)||void 0}else qc=void 0;var sc=qc;var tc=K("Firefox")||K("FxiOS"),uc=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),vc=K("iPad");var wc={},xc=null;
function yc(a){var b=3;La(a);void 0===b&&(b=0);if(!xc){xc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));wc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===xc[h]&&(xc[h]=g)}}}b=wc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var L=window;function zc(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Bc[c])c=Bc[c];else{c=String(c);if(!Bc[c]){var f=/function\s+([^\(]+)/m.exec(c);Bc[c]=f?f[1]:"[Anonymous]"}c=Bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Ac(a,b){b||(b={});b[Cc(a)]=!0;var c=a.stack||"",d=a.pk;d&&!b[Cc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Ac(d,b));return c}
function Cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Bc={};function Dc(a){this.h=a||{cookie:""}}
n=Dc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.yk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);var Fc=!ec||9<=Number(sc);function Gc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Gc.prototype;n.clone=function(){return new Gc(this.x,this.y)};
n.equals=function(a){return a instanceof Gc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hc(a,b){this.width=a;this.height=b}
n=Hc.prototype;n.clone=function(){return new Hc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ic(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Jc(a,b){eb(b,function(c,d){c&&"object"==typeof c&&c.X&&(c=c.W());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kc.hasOwnProperty(d)?a.setAttribute(Kc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Fc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Mc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Jc(f,g));2<d.length&&Nc(e,f,d);return f}
function Nc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||E(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(E(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}I(g?cb(f):f,d)}}}
function Mc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pc(a){var b=Qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Rc(){var a=[];Pc(function(b){a.push(b)});
return a}
var Qc={Hb:"allow-forms",Ib:"allow-modals",Jb:"allow-orientation-lock",Kb:"allow-pointer-lock",Lb:"allow-popups",Mb:"allow-popups-to-escape-sandbox",Nb:"allow-presentation",Ob:"allow-same-origin",Pb:"allow-scripts",Qb:"allow-top-navigation",Rb:"allow-top-navigation-by-user-activation"},Sc=Wa(function(){return Rc()});
function Tc(){var a=Mc(document,"IFRAME"),b={};I(Sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.i=this.i;this.C=this.C}
M.prototype.i=!1;M.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Uc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
M.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function Vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Wc.apply(null,d):Vc(d)}}
;var Xc={};function Yc(a){if(a!==Xc)throw Error("Bad secret");}
;function Zc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var $c;function ad(){}
function bd(a,b){Yc(b);this.h=a}
v(bd,ad);bd.prototype.toString=function(){return this.h.toString()};
var cd=null===($c=Zc())||void 0===$c?void 0:$c.emptyHTML;new bd(null!==cd&&void 0!==cd?cd:"",Xc);var dd;function ed(){}
function fd(a,b){Yc(b);this.h=a}
v(fd,ed);fd.prototype.toString=function(){return this.h.toString()};
var gd=null===(dd=Zc())||void 0===dd?void 0:dd.emptyScript;new fd(null!==gd&&void 0!==gd?gd:"",Xc);function hd(){}
function id(a,b){Yc(b);this.h=a}
v(id,hd);id.prototype.toString=function(){return this.h};new id("about:blank",Xc);new id("about:invalid#zTSz",Xc);function jd(a){kd();var b=qb();a=b?b.createScriptURL(a):a;return new rb(a,sb)}
var kd=Ia;function ld(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var md=(new Date).getTime();function nd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function od(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],A=e[2],C=e[3],ca=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var va=C^x&(A^C);var pc=1518500249}else va=x^A^C,pc=1859775393;else 60>r?(va=x&A|C&(x|A),pc=2400959708):(va=x^A^C,pc=3395469782);va=((p<<5|p>>>27)&4294967295)+va+ca+pc+q[r]&4294967295;ca=C;C=A;A=(x<<30|x>>>2)&4294967295;x=p;p=va}e[0]=e[0]+p&4294967295;e[1]=e[1]+
x&4294967295;e[2]=e[2]+A&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+ca&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,A=p.length;x<A;++x)r.push(p.charCodeAt(x));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var x=24;0<=x;x-=8)p[q++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Na:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function pd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),qd(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=qd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qd(a){var b=od();b.update(a);return b.Na().toLowerCase()}
;function rd(a){var b=nd(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new Dc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,c||(c=new Dc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,pd(nd(d),
c,a||null)].join(" "):null}return null}
;function sd(){this.i=[];this.h=-1}
sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
sd.prototype.get=function(a){return!!this.i[a]};
function td(a){-1==a.h&&(a.h=$a(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ud(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ud.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function vd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function wd(a){z.setTimeout(function(){throw a;},0)}
var xd;
function yd(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Mc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.wa;c.wa=null;e()}};
return function(e){d.next={wa:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function zd(){this.i=this.h=null}
var Bd=new ud(function(){return new Ad},function(a){a.reset()});
zd.prototype.add=function(a,b){var c=Bd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
zd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
function Ad(){this.next=this.scope=this.h=null}
Ad.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ad.prototype.reset=function(){this.next=this.scope=this.h=null};function Cd(a,b){Dd||Ed();Fd||(Dd(),Fd=!0);Gd.add(a,b)}
var Dd;function Ed(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);Dd=function(){a.then(Hd)}}else Dd=function(){var b=Hd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!K("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(xd||(xd=yd()),xd(b)):z.setImmediate(b)}}
var Fd=!1,Gd=new zd;function Hd(){for(var a;a=Gd.remove();){try{a.h.call(a.scope)}catch(b){wd(b)}vd(Bd,a)}Fd=!1}
;function Id(){this.i=-1}
;function Jd(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
H(Jd,Id);Jd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Kd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Jd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Kd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Kd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Kd(this,e);f=0;break}}this.j=f;this.m+=b}};
Jd.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Kd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Ld="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Md(){}
Md.prototype.next=function(){throw Ld;};
Md.prototype.M=function(){return this};
function Nd(a){if(a instanceof Md)return a;if("function"==typeof a.M)return a.M(!1);if(La(a)){var b=0,c=new Md;c.next=function(){for(;;){if(b>=a.length)throw Ld;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Od(a,b){if(La(a))try{I(a,b,void 0)}catch(c){if(c!==Ld)throw c;}else{a=Nd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ld)throw c;}}}
function Pd(a){if(La(a))return cb(a);a=Nd(a);var b=[];Od(a,function(c){b.push(c)});
return b}
;function Qd(a,b){this.j={};this.h=[];this.R=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Qd)for(c=Rd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Rd(a){Sd(a);return a.h.concat()}
n=Qd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||Td;Sd(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Td(a,b){return a===b}
n.isEmpty=function(){return 0==this.i};
n.clear=function(){this.j={};this.R=this.i=this.h.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.R++,this.h.length>2*this.i&&Sd(this),!0):!1};
function Sd(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.R++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Rd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Qd(this)};
n.M=function(a){Sd(this);var b=0,c=this.R,d=this,e=new Md;e.next=function(){if(c!=d.R)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Ld;var f=d.h[b++];return a?f:d.j[f]};
return e};function Ud(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Ud(a).match(/\S+/g)||[],c=0<=Xa(c,b);return c}
function Xd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wd(a,"inverted-hdpi")&&Vd(a,Ya(a.classList?a.classList:Ud(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Yd=!ec||9<=Number(sc),Zd;
if(Zd=ec){var $d;if(Object.prototype.hasOwnProperty.call(oc,"9"))$d=oc["9"];else{for(var ae=0,be=ub(String(nc)).split("."),ce=ub("9").split("."),de=Math.max(be.length,ce.length),ee=0;0==ae&&ee<de;ee++){var fe=be[ee]||"",ge=ce[ee]||"";do{var he=/(\d*)(\D*)(.*)/.exec(fe)||["","","",""],ie=/(\d*)(\D*)(.*)/.exec(ge)||["","","",""];if(0==he[0].length&&0==ie[0].length)break;ae=Db(0==he[1].length?0:parseInt(he[1],10),0==ie[1].length?0:parseInt(ie[1],10))||Db(0==he[2].length,0==ie[2].length)||Db(he[2],ie[2]);
fe=he[3];ge=ie[3]}while(0==ae)}$d=oc["9"]=0<=ae}Zd=!$d}var je=Zd,ke=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ia,b),z.removeEventListener("test",Ia,b)}catch(c){}return a}();function le(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
le.prototype.stopPropagation=function(){this.i=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};function me(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
H(me,le);var ne={2:"touch",3:"pen",4:"mouse"};
me.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(gc){a:{try{cc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ne[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&this.preventDefault()};
me.prototype.stopPropagation=function(){me.L.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
me.prototype.preventDefault=function(){me.L.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,je)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var oe="closure_listenable_"+(1E6*Math.random()|0),pe=0;function qe(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++pe;this.Y=this.ia=!1}
function re(a){a.Y=!0;a.listener=null;a.h=null;a.src=null;a.ka=null}
;function se(a){this.src=a;this.listeners={};this.h=0}
se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=te(a,b,d,e);-1<g?(b=a[g],c||(b.ia=!1)):(b=new qe(b,this.src,f,!!d,e),b.ia=c,a.push(b));return b};
se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=te(e,b,c,d);return-1<b?(re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ue(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Y&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1}
;var ve="closure_lm_"+(1E6*Math.random()|0),we={},xe=0;function ye(a,b,c,d,e){if(d&&d.once)ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.h.add(String(b),c,!1,E(d)?!!d.capture:!!d,e):Be(a,b,c,!1,d,e)}
function Be(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=E(e)?!!e.capture:!!e,h=Ce(a);h||(a[ve]=h=new se(a));c=h.add(b,c,d,g,f);if(!c.h){d=De();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)ke||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");xe++}}
function De(){var a=Fe,b=Yd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else c=Ae(c),a&&a[oe]?a.h.add(String(b),c,!0,E(d)?!!d.capture:!!d,e):Be(a,b,c,!0,d,e)}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else(d=E(d)?!!d.capture:!!d,c=Ae(c),a&&a[oe])?a.h.remove(String(b),c,d,e):a&&(a=Ce(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=te(b,c,d,e)),(c=-1<a?b[a]:null)&&He(c))}
function He(a){if("number"!==typeof a&&a&&!a.Y){var b=a.src;if(b&&b[oe])ue(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);xe--;(c=Ce(b))?(ue(c,a),0==c.h&&(c.src=null,b[ve]=null)):re(a)}}}
function Ee(a){return a in we?we[a]:we[a]="on"+a}
function Ie(a,b,c,d){var e=!0;if(a=Ce(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Y&&(f=Je(f,d),e=e&&!1!==f)}return e}
function Je(a,b){var c=a.listener,d=a.ka||a.src;a.ia&&He(a);return c.call(d,b)}
function Fe(a,b){if(a.Y)return!0;if(!Yd){var c=b||D("window.event"),d=new me(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Ie(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Ie(c[g],f,!1,d),e=e&&h}return e}return Je(a,new me(b,this))}
function Ce(a){a=a[ve];return a instanceof se?a:null}
var Ke="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ae(a){if("function"===typeof a)return a;a[Ke]||(a[Ke]=function(b){return a.handleEvent(b)});
return a[Ke]}
;function Le(){M.call(this);this.h=new se(this);this.o=this;this.l=null}
H(Le,M);Le.prototype[oe]=!0;Le.prototype.addEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
Le.prototype.removeEventListener=function(a,b,c,d){Ge(this,a,b,c,d)};
Le.prototype.dispatchEvent=function(a){var b=this.l;if(b){var c=[];for(var d=1;b;b=b.l)c.push(b),++d}b=this.o;d=a.type||a;if("string"===typeof a)a=new le(a,b);else if(a instanceof le)a.target=a.target||b;else{var e=a;a=new le(d,b);ob(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.h=c[f];e=Me(g,d,!0,a)&&e}a.i||(g=a.h=b,e=Me(g,d,!0,a)&&e,a.i||(e=Me(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.h=c[f],e=Me(g,d,!1,a)&&e;return e};
Le.prototype.A=function(){Le.L.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,re(d[e]);delete a.listeners[c];a.h--}}this.l=null};
function Me(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Y&&g.capture==c){var h=g.listener,k=g.ka||g.src;g.ia&&ue(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ne(a){var b=[];Oe(new Pe,a,b);return b.join("")}
function Pe(){}
function Oe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Oe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Qe(d,c),c.push(":"),Oe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Qe(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Re={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Se=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qe(a,b){b.push('"',a.replace(Se,function(c){var d=Re[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Re[c]=d);return d}),'"')}
;function Te(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ue(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Ve(b,2,c)},function(c){Ve(b,3,c)})}catch(c){Ve(this,3,c)}}
function We(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
We.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Xe=new ud(function(){return new We},function(a){a.reset()});
function Ye(a,b,c){var d=Xe.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Ze(a){return new Ue(function(b,c){c(a)})}
Ue.prototype.then=function(a,b,c){return $e(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ue.prototype.$goog_Thenable=!0;function af(a,b){return $e(a,null,b,void 0)}
Ue.prototype.cancel=function(a){if(0==this.h){var b=new bf(a);Cd(function(){cf(this,b)},this)}};
function cf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?cf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):df(c),ef(c,e,3,b)))}a.j=null}else Ve(a,3,b)}
function ff(a,b){a.i||2!=a.h&&3!=a.h||gf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $e(a,b,c,d){var e=Ye(null,null,null);e.h=new Ue(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ff(a,e);return e.h}
Ue.prototype.B=function(a){this.h=0;Ve(this,2,a)};
Ue.prototype.F=function(a){this.h=0;Ve(this,3,a)};
function Ve(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof Ue){ff(d,Ye(e||Ia,f||null,a));var g=!0}else if(Te(d))d.then(e,f,a),g=!0;else{if(E(d))try{var h=d.then;if("function"===typeof h){hf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,gf(a),3!=b||c instanceof bf||jf(a,c))}}
function hf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function gf(a){a.o||(a.o=!0,Cd(a.C,a))}
function df(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ue.prototype.C=function(){for(var a;a=df(this);)ef(this,a,this.h,this.u);this.o=!1};
function ef(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,kf(b,c,d);else try{b.j?b.i.call(b.context):kf(b,c,d)}catch(e){lf.call(null,e)}vd(Xe,b)}
function kf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function jf(a,b){a.m=!0;Cd(function(){a.m&&lf.call(null,b)})}
var lf=wd;function bf(a){Ua.call(this,a)}
H(bf,Ua);bf.prototype.name="cancel";function N(a){M.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
H(N,M);n=N.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function mf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=ab(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Z(b)}}
n.Z=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ia):(c&&bb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.S=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];nf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Z(c)}}return 0!=e}return!1};
function nf(a,b,c){Cd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(I(b,this.Z,this),delete this.j[a])}else this.h.length=0,this.j={}};
n.A=function(){N.L.A.call(this);this.clear();this.l.length=0};function of(a){this.h=a}
of.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Ne(b))};
of.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
of.prototype.remove=function(a){this.h.remove(a)};function pf(a){this.h=a}
H(pf,of);function qf(a){this.data=a}
function rf(a){return void 0===a||a instanceof qf?a:new qf(a)}
pf.prototype.set=function(a,b){pf.L.set.call(this,a,rf(b))};
pf.prototype.i=function(a){a=pf.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sf(a){this.h=a}
H(sf,pf);sf.prototype.set=function(a,b,c){if(b=rf(b)){if(c){if(c<G()){sf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}sf.L.set.call(this,a,b)};
sf.prototype.i=function(a){var b=sf.L.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())sf.prototype.remove.call(this,a);else return b}};function tf(){}
;function uf(){}
H(uf,tf);uf.prototype.clear=function(){var a=Pd(this.M(!0)),b=this;I(a,function(c){b.remove(c)})};function vf(a){this.h=a}
H(vf,uf);n=vf.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.M=function(a){var b=0,c=this.h,d=new Md;d.next=function(){if(b>=c.length)throw Ld;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function wf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
H(wf,vf);function xf(a,b){this.i=a;this.h=null;if(ec&&!(9<=Number(sc))){yf||(yf=new Qd);this.h=yf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),yf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
H(xf,uf);var zf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yf=null;function Af(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zf[b]})}
n=xf.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(Af(a),b);Bf(this)};
n.get=function(a){a=this.h.getAttribute(Af(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(Af(a));Bf(this)};
n.M=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Md;d.next=function(){if(b>=c.length)throw Ld;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bf(this)};
function Bf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Cf(a,b){this.i=a;this.h=b+"::"}
H(Cf,uf);Cf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Cf.prototype.get=function(a){return this.i.get(this.h+a)};
Cf.prototype.remove=function(a){this.i.remove(this.h+a)};
Cf.prototype.M=function(a){var b=this.i.M(!0),c=this,d=new Md;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Df(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ef=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};B("yt.config_",Ef,void 0);function O(a){Df(Ef,arguments)}
function P(a,b){return a in Ef?Ef[a]:b}
function Ff(){return P("PLAYER_CONFIG",{})}
;var Gf=[];function Hf(a){Gf.forEach(function(b){return b(a)})}
function If(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jf(b),Hf(b)}}:a}
function Jf(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b))}
function Kf(a){var b=D("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;var Lf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",Lf,void 0);function Mf(a){Df(Lf,arguments)}
;function Nf(a,b,c,d){Ec.set(""+a,b,{Ba:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Q(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pf(a,b){var c=Of(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Of(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Qf(a){a&&(a.dataset?a.dataset[Rf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Sf(a,b){return a?a.dataset?a.dataset[Rf(b)]:a.getAttribute("data-"+b):null}
var Tf={};function Rf(a){return Tf[a]||(Tf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function R(a,b){"function"===typeof a&&(a=If(a));return window.setTimeout(a,b)}
function Uf(a){window.clearTimeout(a)}
;var Vf=z.ytPubsubPubsubInstance||new N,Wf=z.ytPubsubPubsubSubscribedKeys||{},Xf=z.ytPubsubPubsubTopicToKeys||{},Yf=z.ytPubsubPubsubIsSynchronous||{};function Zf(a,b){var c=$f();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Wf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Yf[a]?f():R(f,0)}catch(g){Jf(g)}},void 0);
Wf[d]=!0;Xf[a]||(Xf[a]=[]);Xf[a].push(d);return d}return 0}
function ag(a){var b=$f();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),I(a,function(c){b.unsubscribeByKey(c);delete Wf[c]}))}
function bg(a,b){var c=$f();c&&c.publish.apply(c,arguments)}
function cg(a){var b=$f();if(b)if(b.clear(a),a)dg(a);else for(var c in Xf)dg(c)}
function $f(){return z.ytPubsubPubsubInstance}
function dg(a){Xf[a]&&(a=Xf[a],I(a,function(b){Wf[b]&&delete Wf[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Z;N.prototype.publish=N.prototype.S;N.prototype.clear=N.prototype.clear;B("ytPubsubPubsubInstance",Vf,void 0);B("ytPubsubPubsubTopicToKeys",Xf,void 0);B("ytPubsubPubsubIsSynchronous",Yf,void 0);B("ytPubsubPubsubSubscribedKeys",Wf,void 0);var eg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(eg,""),c=c.replace(fg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hg(a,b,c)}
function hg(a,b,c){c=void 0===c?null:c;var d=ig(a),e=document.getElementById(d),f=e&&Sf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Zf(d,b),b=""+Ma(b),jg[b]=f),g||(e=kg(a,d,function(){Sf(e,"loaded")||(Qf(e),bg(d),R(Ra(cg,d),0))},c)))}
function kg(a,b,c,d){d=void 0===d?null:d;var e=Mc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,jd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function lg(a){a=ig(a);var b=document.getElementById(a);b&&(cg(a),b.parentNode.removeChild(b))}
function mg(a,b){if(a&&b){var c=""+Ma(b);(c=jg[c])&&ag(c)}}
function ig(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var jg={};function ng(){}
function og(a,b){return pg(a,1,b)}
;function qg(){}
v(qg,ng);function pg(a,b,c){isNaN(c)&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
qg.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
qg.prototype.pause=function(){var a=D("yt.scheduler.instance.pause");a&&a()};
Ja(qg);qg.getInstance();var rg=[],sg=!1;function tg(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Ec.get("CONSENT","").startsWith("YES+"))&&"1"!=fb(Ff(),"args","privembed")){var a=function(){sg=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
try{gg("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}rg.push(og(function(){sg||"google_ad_status"in window||(mg("//static.doubleclick.net/instream/ad_status.js",a),sg=!0,O("DCLKSTAT",3))},5E3))}}
function ug(){return parseInt(P("DCLKSTAT",0),10)}
;var vg=0;B("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++vg},void 0);var wg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function yg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
xg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",hb,void 0);var zg=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",zg,void 0);
function Ag(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=E(e[4])&&E(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bg=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ag(a,b,c,d);if(e)return e;e=++zg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xg(h);if(!Oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xg(h);
h.currentTarget=a;return c.call(a,h)};
g=If(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function Dg(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var Eg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Fg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.I=Cg(window,"mousemove",F(this.J,this));a=F(this.F,this);"function"===typeof a&&(a=If(a));this.K=window.setInterval(a,25)}
H(Fg,M);Fg.prototype.J=function(a){void 0===a.h&&yg(a);var b=a.h;void 0===a.i&&yg(a);this.h=new Gc(b,a.i)};
Fg.prototype.F=function(){if(this.h){var a=Eg();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
Fg.prototype.A=function(){window.clearInterval(this.K);Dg(this.I)};var Gg={};
function Hg(a){var b=void 0===a?{}:a;a=void 0===b.Ta?!0:b.Ta;b=void 0===b.ib?!1:b.ib;if(null==D("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?G()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Ig();Cg(document,"keydown",Ig);Cg(document,"keyup",Ig);Cg(document,"mousedown",Ig);Cg(document,"mouseup",Ig);a&&(b?Cg(window,"touchmove",function(){Jg("touchmove",200)},{passive:!0}):(Cg(window,"resize",function(){Jg("resize",200)}),Cg(window,"scroll",function(){Jg("scroll",200)})));
new Fg(function(){Jg("mouse",100)});
Cg(document,"touchstart",Ig,{passive:!0});Cg(document,"touchend",Ig,{passive:!0})}}
function Jg(a,b){Gg[a]||(Gg[a]=!0,og(function(){Ig();Gg[a]=!1},b))}
function Ig(){null==D("_lact",window)&&Hg();var a=G();B("_lact",a,window);-1==D("_fact",window)&&B("_fact",a,window);(a=D("ytglobal.ytUtilActivityCallback_"))&&a()}
function Kg(){var a=D("_lact",window),b;null==a?b=-1:b=Math.max(G()-a,0);return b}
;var Lg=window,S=Lg.ytcsi&&Lg.ytcsi.now?Lg.ytcsi.now:Lg.performance&&Lg.performance.timing&&Lg.performance.now&&Lg.performance.timing.navigationStart?function(){return Lg.performance.timing.navigationStart+Lg.performance.now()}:function(){return(new Date).getTime()};var Mg=Pf("initial_gel_batch_timeout",1E3),Ng=Math.pow(2,16)-1,Og=null,Pg=0,Qg=void 0,Rg=0,Sg=0,Tg=0,Ug=!0,Vg=z.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Vg,void 0);var Wg=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Wg,void 0);function Xg(a){a=void 0===a?!1:a;return new Ue(function(b){Uf(Rg);Uf(Sg);Sg=0;Qg&&Qg.isReady()?(Yg(b,a),Vg.clear()):(Zg(),b())})}
function Zg(){Q("web_gel_timeout_cap")&&!Sg&&(Sg=R(Xg,6E4));Uf(Rg);var a=P("LOGGING_BATCH_TIMEOUT",Pf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Ug&&(a=Mg);Rg=R(Xg,a)}
function Yg(a,b){var c=Qg;b=void 0===b?!1:b;for(var d=Math.round(S()),e=Vg.size,f=u(Vg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=mb({context:$g(c.H||ah())});h.events=k;(k=Wg[g])&&bh(h,g,k);delete Wg[g];ch(h,d);dh(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Pg=Math.round(S()-d)},
onError:function(){e--;e||a()},
vb:b});Ug=!1}}
function ch(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&Q("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Ng/2));d++;d>Ng&&(d=1);O("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Og&&Pg&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Og,roundtripMs:String(Pg)});Og=c;Pg=0}}
function bh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var eh=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",eh,void 0);
function fh(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||S());e[a]=b;a=Kg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,eh[b]=b in eh?eh[b]+1:0,a.sequence={index:eh[b],groupKey:b},d.Oa&&delete eh[d.P]);d=d.N;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Wg[d.token]=a,a=d.token);d=Vg.get(a)||[];Vg.set(a,d);d.push(e);c&&(Qg=new c);c=Pf("web_logging_max_batch")||
100;e=S();d.length>=c?Xg(!0):10<=e-Tg&&(Zg(),Tg=e)}
;function gh(){var a=hh;D("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function ih(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var jh={q:!0,search_query:!0};function kh(a){for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?db(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],jh.hasOwnProperty(f[0])||("ReferenceError"===k.name?Kf(k):Jf(k))}}return c}
function lh(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function mh(a){"?"==a.charAt(0)&&(a=a.substr(1));return kh(a)}
function nh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=mh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
;function oh(a){var b=ph;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=md;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ca){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?L:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;e.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(e.u_h=L.screen.height,e.u_w=L.screen.width,
e.u_ah=L.screen.availHeight,e.u_aw=L.screen.availWidth,e.u_cd=L.screen.colorDepth);L.navigator&&L.navigator.plugins&&(e.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(e.u_nmime=L.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(ca){}try{var m=h.outerWidth;var p=h.outerHeight}catch(ca){}try{var q=h.innerWidth;var r=h.innerHeight}catch(ca){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,p,q,
r];l=b.h.top;try{var x=(l||window).document,A="CSS1Compat"==x.compatMode?x.documentElement:x.body;var C=(new Hc(A.clientWidth,A.clientHeight)).round()}catch(ca){C=new Hc(-12245933,-12245933)}x=C;C={};A=new sd;z.SVGElement&&z.document.createElementNS&&A.set(0);l=Tc();l["allow-top-navigation-by-user-activation"]&&A.set(1);l["allow-popups-to-escape-sandbox"]&&A.set(2);z.crypto&&z.crypto.subtle&&A.set(3);z.TextDecoder&&z.TextEncoder&&A.set(4);A=td(A);C.bc=A;C.bih=x.height;C.biw=x.width;C.brdim=k.join();
b=b.i;b=(C.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,C.wgl=!!L.WebGLRenderingContext,C);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ph=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return lh(oh(a))},void 0);var qh="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function rh(){if(!qh)return null;var a=qh();return"open"in a?a:null}
function sh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var th={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},uh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
vh=!1;
function wh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in th)e=P(th[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=lh(oh(void 0));return b}
function xh(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=mh(b),f={};I(uh,function(g){e[g]&&(f[g]=e[g])});
return nh(a,f||{},!1)}
function yh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=zh(a,b);var d=Ah(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Uf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||z;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ta&&b.ta.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Fa&&0<b.timeout&&(f=R(function(){e||(e=!0,Uf(f),b.Fa.call(b.context||z))},b.timeout))}else Bh(a,b)}
function Bh(a,b){var c=b.format||"JSON";a=zh(a,b);var d=Ah(a,b),e=!1,f=Ch(a,function(k){if(!e){e=!0;h&&Uf(h);var l=sh(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=Dh(a,c,k,b.qk);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ta&&b.ta.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.aa&&0<b.timeout){var g=b.aa;var h=R(function(){e||(e=!0,f.abort(),Uf(h),g.call(b.context||z,f))},b.timeout)}return f}
function zh(a,b){b.tk&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.ub;d&&(d[c]&&delete d[c],a=nh(a,d||{},!0));return a}
function Ah(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.sk||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=mh(e),ob(e,f),e=b.Ga&&"JSON"==b.Ga?JSON.stringify(e):Zb(e));f=e||f&&!ib(f);!vh&&f&&"POST"!=b.method&&(vh=!0,Jf(Error("AJAX request with postData should use POST")));
return e}
function Dh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Kf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Eh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=Fh(g)})}d&&Gh(e);
return e}
function Gh(a){if(E(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Gh(a[b])}}
function Eh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ch(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&If(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=rh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=xh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Hh(){return"INNERTUBE_API_KEY"in Ef&&"INNERTUBE_API_VERSION"in Ef}
function ah(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ua:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Va:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Xa:P("INNERTUBE_CONTEXT_HL",void 0),Wa:P("INNERTUBE_CONTEXT_GL",void 0),Ya:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",ab:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Za:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function $g(a){var b={client:{hl:a.Xa,gl:a.Wa,clientName:a.Va,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ua}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&Q("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(mh(P("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Ih(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mk||P("AUTHORIZATION"))||(a?b="Bearer "+D("gapi.auth.getToken")().lk:b=rd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Jh(a){a=Object.assign({},a);delete a.Authorization;var b=rd();if(b){var c=new Jd;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=yc(c.digest())}return a}
;function Kh(){var a=new wf;(a=a.isAvailable()?new Cf(a,"yt.innertube"):null)||(a=new xf("yt.innertube"),a=a.isAvailable()?a:null);this.h=a?new sf(a):null;this.i=document.domain||window.location.hostname}
Kh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,G()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ne(b))}catch(f){return}else e=escape(b);Nf(a,e,c,this.i)};
Kh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Kh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Lh;function Mh(){Lh||(Lh=new Kh);return Lh}
function Nh(a,b,c,d){if(d)return null;d=Mh().get("nextId",!0)||1;var e=Mh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Jh(c),requestTime:Math.round(S())};Mh().set("nextId",d+1,86400,!0);Mh().set("requests",e,86400,!0);return d}
function Oh(a){var b=Mh().get("requests",!0)||{};delete b[a];Mh().set("requests",b,86400,!0)}
function Ph(a){var b=Mh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=Jh(Ih(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),dh(a,d.method,e,{}));delete b[c]}}Mh().set("requests",b,86400,!0)}}
;function Qh(a,b){this.version=a;this.args=b}
;function Rh(a,b){this.topic=a;this.h=b}
Rh.prototype.toString=function(){return this.topic};var Sh=D("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Z;N.prototype.publish=N.prototype.S;N.prototype.clear=N.prototype.clear;B("ytPubsub2Pubsub2Instance",Sh,void 0);var Th=D("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",Th,void 0);var Uh=D("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",Uh,void 0);var Vh=D("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",Vh,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Wh(a,b){var c=Xh();c&&c.publish.call(c,a.toString(),a,b)}
function Yh(a){var b=Zh,c=Xh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=D("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Th[d])try{if(f&&b instanceof Rh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.R){var l=new h;h.R=l.version}var m=h.R}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
cb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Jf(p)}},Vh[b.toString()]?D("yt.scheduler.instance")?og(g):R(g,0):g())});
Th[d]=!0;Uh[b.toString()]||(Uh[b.toString()]=[]);Uh[b.toString()].push(d);return d}
function $h(){var a=ai,b=Yh(function(c){a.apply(void 0,arguments);bi(b)});
return b}
function bi(a){var b=Xh();b&&("number"===typeof a&&(a=[a]),I(a,function(c){b.unsubscribeByKey(c);delete Th[c]}))}
function Xh(){return D("ytPubsub2Pubsub2Instance")}
;var ci=[],di=!1;function ei(a,b){di||(ci.push({type:"EVENT",eventType:a,payload:b}),10<ci.length&&ci.shift())}
;function fi(a){if(!a)throw Error();throw a;}
function gi(a){return a}
function T(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={T:0};f.T<a.length;f={T:f.T},++f.T)hi(T.resolve(a[f.T]).then(function(g){return function(h){d[g.T]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:gi,e=null!==b&&void 0!==b?b:fi;return new T(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ii(c,c,d,f,g)}),c.onRejected.push(function(){ji(c,c,e,f,g)})):"FULFILLED"===c.state.status?ii(c,c,d,f,g):"REJECTED"===c.state.status&&ji(c,c,e,f,g)})};
function hi(a,b){a.then(void 0,b)}
function ii(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?ki(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ji(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?ki(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ki(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?ki(a,b,f,d,e):d(f)},function(f){e(f)})}
;function li(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function mi(a){return new Promise(function(b,c){li(a,b,c)})}
function U(a){return new T(function(b,c){li(a,b,c)})}
;function ni(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function V(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(V,Error);var oi={},pi=(oi.AUTH_INVALID="No user identifier specified.",oi.EXPLICIT_ABORT="Transaction was explicitly aborted.",oi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",oi.MISSING_OBJECT_STORE="Object store not created.",oi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",oi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",oi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",oi);
function qi(a,b,c){b=void 0===b?{}:b;c=void 0===c?pi[a]:c;V.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,qi.prototype);di||(ci.push({type:"ERROR",payload:this}),10<ci.length&&ci.shift())}
v(qi,V);function ri(a,b,c){qi.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,ri.prototype)}
v(ri,qi);function si(a){qi.call(this,"MISSING_OBJECT_STORE",{uk:a},pi.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,si.prototype)}
v(si,qi);function ti(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
n=ti.prototype;n.add=function(a,b,c){return ui(this,[a],"readwrite",function(d){return vi(d,a).add(b,c)})};
n.clear=function(a){return ui(this,[a],"readwrite",function(b){return vi(b,a).clear()})};
n.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ui(this,[a],"readonly",function(c){return vi(c,a).count(b)})};
n["delete"]=function(a,b){return ui(this,[a],"readwrite",function(c){return vi(c,a)["delete"](b)})};
n.get=function(a,b){return ui(this,[a],"readwrite",function(c){return vi(c,a).get(b)})};
function ui(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.h.transaction(b,c);e=new wi(e);d=xi(e,d);yi(a,d,b.join(),c);return d}
function yi(a,b,c,d){bc(a,function f(){var g,h,k=this,l,m,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(S()),sa(q,2),w(q,b,4);if(2!=q.h)h=Math.round(S()),zi(k,!0,c,h-g),q.h=0,q.o=0;else{l=ta(q);m=Math.round(S());var r=l,x=k.h.name,A=k.transactionCount,C;"QuotaExceededError"===r.name?C=new qi("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:x,mode:d}):"UnknownError"===r.name&&(C=new qi("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:x,mode:d}));C&&ei("QUOTA_EXCEEDED",{dbName:x,objectStoreNames:c,
transactionCount:A,transactionMode:d});p=m-g;l instanceof ri&&(ei("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.j}),k.i=!0);zi(k,!1,c,p);q.h=0}})})}
function zi(a,b,c,d){ei("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function Ai(a){this.h=a}
n=Ai.prototype;n.add=function(a,b){return U(this.h.add(a,b))};
n.clear=function(){return U(this.h.clear()).then(function(){})};
n.count=function(a){return U(this.h.count(a))};
function Bi(a,b){return Ci(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Bi(this,a):U(this.h["delete"](a))};
n.get=function(a){return U(this.h.get(a))};
n.index=function(a){return new Di(this.h.index(a))};
n.getName=function(){return this.h.name};
function Ci(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ei(a).then(function(d){return ni(d,c)})}
function wi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=ri;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.h.db.name,b.h.mode);d(e)}})})}
function xi(a,b){var c=new Promise(function(d,e){hi(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
wi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new qi("EXPLICIT_ABORT");};
wi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function vi(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new Ai(c),a.i.set(c,d));return d}
function Di(a){this.h=a}
Di.prototype.count=function(a){return U(this.h.count(a))};
Di.prototype["delete"]=function(a){return Fi(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Di.prototype.get=function(a){return U(this.h.get(a))};
Di.prototype.getKey=function(a){return U(this.h.getKey(a))};
function Fi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ei(a).then(function(d){return ni(d,c)})}
function Gi(a,b){this.request=a;this.cursor=b}
function Ei(a){return U(a).then(function(b){return null===b?null:new Gi(a,b)})}
n=Gi.prototype;n.advance=function(a){this.cursor.advance(a);return Ei(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return Ei(this.request)};
n["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.getValue=function(){return this.cursor.value};
n.update=function(a){return U(this.cursor.update(a))};function Hi(a,b,c){return bc(this,function e(){var f,g,h,k,l,m,p,q,r,x;return Aa(e,function(A){if(1==A.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.tb,m=g.upgrade,p=g.closed,r=function(){q||(q=new ti(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(C){if(null===C.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");C.dataLoss&&"none"!==C.dataLoss&&ei("IDB_DATA_CORRUPTED",{reason:C.dataLossMessage||"unknown reason",dbName:a});var ca=r(),va=new wi(f.transaction);m&&m(ca,C.oldVersion,C.newVersion,va)}),h&&f.addEventListener("blocked",function(){h()}),w(A,mi(f),2);
x=A.m;k&&x.addEventListener("versionchange",function(){k(r())});
x.addEventListener("close",function(){ei("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:x.version});l&&l()});
return A["return"](r())})})}
function Ii(a,b,c){c=void 0===c?{}:c;return Hi(a,b,c)}
function Ji(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return w(h,mi(e),0)})})}
;var Ki=uc||vc;function Li(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Mi(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Ni(a,b,c){c=void 0===c?{}:c;return Ii(a,b,c)}
Mi.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ji(this.name,a)};
Mi.prototype.open=function(){var a=this;if(!this.h){var b,c=function(){a.h===b&&(a.h=void 0)},d={blocking:function(f){f.close()},
closed:c,tb:c,upgrade:this.options.upgrade},e=function(){return bc(a,function g(){var h=this,k,l,m;return Aa(g,function(p){switch(p.h){case 1:return sa(p,2),w(p,Ni(h.name,h.options.version,d),4);case 4:k=p.m;if(!tc){p.O(5);break}a:{var q=u(Object.keys(h.options.cb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.O(5);break}if(!tc||h.i){p.O(7);break}h.i=!0;return w(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new si(l);
case 5:return p["return"](k);case 2:m=ta(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](Ni(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.h=b=e()}return this.h};var Oi=new Mi({cb:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Pi(a){return bc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return w(e,Oi.open(),2);d=e.m;return e["return"](ui(d,["databases"],"readwrite",function(f){var g=vi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.h.put(a,void 0)).then(function(){})})}))})})}
function Qi(){return bc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return w(d,Oi.open(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new Le;var Ri;
function Si(){return bc(this,function b(){var c,d,e;return Aa(b,function(f){switch(f.h){case 1:var g;if(g=Ki)g=/WebKit\/([0-9]+)/.exec(Lb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Lb),g=!(g&&602<=parseInt(g[1],10)));if(g&&!Q("ytidb_allow_on_ios_safari_v8_and_v9")||fc)return f["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return f["return"](!1)}catch(h){return f["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f["return"](!1);if(!Q("ytidb_new_supported_check_with_delete")){f.O(2);
break}sa(f,3);return w(f,Qi(),5);case 5:return f["return"](!0);case 3:return ta(f),f["return"](!1);case 2:if(!Q("ytidb_new_supported_check_with_add_and_delete")){f.O(6);break}sa(f,7);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return w(f,Pi(d),9);case 9:return w(f,Qi(),10);case 10:return f["return"](!0);case 7:return ta(f),f["return"](!1);case 6:return sa(f,11,12),w(f,Ii("yt-idb-test-do-not-use"),14);case 14:if(e=f.m,!e)return f["return"](!1);
case 12:f.B=[f.i];f.o=0;f.l=0;if(e)try{e.close()}catch(h){}g=f.B.splice(0)[0];(g=f.i=f.i||g)?g.Aa?f.h=f.o||f.l:void 0!=g.O&&f.l<g.O?(f.h=g.O,f.i=null):f.h=f.l:f.h=13;break;case 11:return ta(f),f["return"](!1);case 13:return f["return"](!0)}})})}
function Ti(){if(void 0!==Ri)return Ri;var a=S();di=!0;return Ri=Si().then(function(b){di=!1;ei("IS_SUPPORTED_COMPLETED",{duration:Math.round(S()-a),isSupported:b});return b})}
;function Ui(){Le.call(this);this.m=!1;this.j=Vi();Wi(this);Xi(this)}
v(Ui,Le);function Vi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Xi(a){window.addEventListener("online",function(){a.j=!0;Yi(a)})}
function Wi(a){window.addEventListener("offline",function(){a.j=!1;Yi(a)})}
function Yi(a){a.m&&(Kf(new V("NetworkStatusManager state did not match poll",S()-0)),a.m=!1)}
;function Zi(a,b){b=void 0===b?{}:b;Ti().then(function(){Ui.h||(Ui.h=new Ui);Ui.h.j!==Vi()&&Kf(new V("NetworkStatusManager isOnline does not match window status"));Bh(a,b)})}
function $i(a,b){b=void 0===b?{}:b;Ti().then(function(){Bh(a,b)})}
;function aj(a){var b=this;this.H=null;a?this.H=a:Hh()&&(this.H=ah());pg(function(){Ph(b)},0,5E3)}
aj.prototype.isReady=function(){!this.H&&Hh()&&(this.H=ah());return!!this.H};
function dh(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kf(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new V("innertube xhrclient not ready",b,c,d);Jf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,Ga:"JSON",aa:function(){d.aa()},
Fa:d.aa,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
Ea:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
vk:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.H.Ya)&&(g=e);var h=a.H.ab||!1,k=Ih(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.H.innertubeApiVersion+"/"+b;var l={alt:"json"};a.H.Za&&f.headers.Authorization||(l.key=a.H.innertubeApiKey);var m=nh(""+g+e,l||{},!0);Ti().then(function(p){if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(Q("networkless_gel")&&!p||!Q("networkless_gel"))var q=Nh(b,
c,k,h);if(q){var r=f.onSuccess,x=f.Ea;f.onSuccess=function(A,C){Oh(q);r(A,C)};
c.Ea=function(A,C){Oh(q);x(A,C)}}}try{Q("use_fetch_for_op_xhr")?yh(m,f):Q("networkless_gel")&&d.retry?(f.method="POST",!d.vb&&Q("nwl_send_fast_on_unload")?$i(m,f):Zi(m,f)):(f.method="POST",f.G||(f.G={}),Bh(m,f))}catch(A){if("InvalidAccessError"==A.name)q&&(Oh(q),q=0),Kf(Error("An extension is blocking network request."));
else throw A;}q&&pg(function(){Ph(a)},0,5E3)})}
;function bj(a,b,c){c=void 0===c?{}:c;var d=aj;P("ytLoggingEventsDefaultDisabled",!1)&&aj==aj&&(d=null);fh(a,b,d,c)}
;var cj=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
ua:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
ua:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function dj(){this.h=[];this.i=[]}
var ej;var fj=new N;function gj(a,b,c,d){c+="."+a;a=hj(b);d[c]=a;return c.length+a.length}
function hj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ij=new Set,jj=0,kj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function lj(a){mj(a,"WARNING")}
function mj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(!Q("web_yterr_killswitch")||window&&window.yterr||g)&&!(5<=jj)&&0!==a.sampleWeight)){f=zc(a);g=f.message||"Unknown Error";d=f.name||"UnknownError";var h=f.stack||a.h||"Not available";Q("kevlar_js_fixes")&&h.startsWith(d+": "+g)&&(e=h.split("\n"),e.shift(),h=e.join("\n"));e=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,
r=0;r<m.length&&!(m[r]&&(k+=gj(r,m[r],p,q),500<k));r++);else if("object"===typeof m)for(q in q=void 0,r=c,m){if(m[q]&&(k+=gj(q,m[q],p,r),500<k))break}else c[p]=hj(m),k+=c[p].length;else c[p]=hj(m),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=hj(m[l]),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=hj(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);
c={message:g,name:d,lineNumber:e,fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(cj);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.ua[c.name])for(e=u(g.ua[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.Ca(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(ij.has(c.message)||
0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?fj.S("handleError",c):"WARNING"===b&&fj.S("handleWarning",c);if(Q("kevlar_gel_error_routing")){a=b;a:{g=u(kj);for(d=g.next();!d.done;d=g.next())if(Li(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);g=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==g.length&&(1!==g.length||isNaN(Number(g[0]))?2!==g.length||isNaN(Number(g[0]))||isNaN(Number(g[1]))||
(d.lineNumber=Number(g[0]),d.columnNumber=Number(g[1])):d.lineNumber=Number(g[0]));ej||(ej=new dj);g=ej;e=c.message;f=c.name;a:{h=u(g.i);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.h)){h=l.weight;break a}h=u(g.h);for(l=h.next();!l.done;l=h.next())if(l=l.value,l.Ma(c)){h=l.weight;break a}h=1}e={level:"ERROR_LEVEL_UNKNOWN",message:e,errorClassName:f,sampleWeight:h};"ERROR"===a?e.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(e.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,
browserStackInfo:d};d={pageUrl:window.location.href};P("FEXP_EXPERIMENTS")&&(d.experimentIds=P("FEXP_EXPERIMENTS"));d.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+g.i.length+"&cb="+g.h.length},{key:"client.params.serviceWorker",value:"false"}];if(g=c.params)for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.kvPairs.push({key:"client."+h,value:String(g[h])});g=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);g&&f&&(d.kvPairs.push({key:"server.name",value:g}),
d.kvPairs.push({key:"server.version",value:f}));bj("clientError",{errorMetadata:d,stackTrace:a,logMessage:e});Xg()}}if(!Q("suppress_error_204_logging")){a=c.params||{};b={ub:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},G:{url:P("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.G){c.stack&&(b.G.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,
b.G["client."+d]=a[d];if(a=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.G[d]=a[d];a=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);a&&g&&(b.G["server.name"]=a,b.G["server.version"]=g)}Bh(P("ECATCHER_REPORT_HOST","")+"/error_204",b)}ij.add(c.message);jj++}}}
function nj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function oj(){this.i=!1;this.h=null}
oj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,gg(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?pj(g,c,d,f,h):(lg(b),lj(new V("Unable to load Botguard","from "+b)))},e)):a&&(e=Mc(document,"SCRIPT"),e.textContent=a,e.nonce=Ea(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?pj(this,c,d,f,a):lj(Error("Unable to load Botguard from JS")))};
function pj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ia)}catch(f){lj(f)}else{try{a.h=new e(b)}catch(f){lj(f)}c&&c(b)}}
oj.prototype.dispose=function(){this.h=null};var qj=new oj;function rj(){return!!qj.h}
function sj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return qj.h?qj.h.hot?qj.h.hot(void 0,void 0,a):qj.h.invoke(void 0,void 0,a):null}
;var tj=G().toString();
function uj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=G();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(tj)for(a=1,b=0;b<tj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^tj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vj=z.ytLoggingDocDocumentNonce_||uj();B("ytLoggingDocDocumentNonce_",vj,void 0);var wj={Td:0,fc:1,oc:2,Vg:3,Ud:4,Sj:5,Hh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var xj=1;function yj(a){this.h=a}
function zj(a){return new yj({trackingParams:a})}
yj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
yj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
yj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Aj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Bj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Cj(a){return P(Bj(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",Cj,void 0);function Dj(a){return(a=Cj(void 0===a?0:a))?new yj({veType:a,youtubeData:void 0}):null}
function Ej(){var a=P("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=P(Aj(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Q("kevlar_client_side_screens")||Q("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
B("yt_logging_screen.getCurrentCsn",W,void 0);function Fj(a,b,c){var d=Ej();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function Gj(a){return Ej()[a]}
B("yt_logging_screen.getCttAuthInfo",Gj,void 0);function Hj(a,b,c,d){c=void 0===c?0:c;if(a!==P(Aj(c))||b!==P(Bj(c)))if(Fj(a,d,c),O(Aj(c),a),O(Bj(c),b),0==c||Q("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&fh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vj,clientScreenNonce:a},aj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",Hj,void 0);function Ij(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Xa(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",Nf(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",Nf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+m;a=a instanceof J?a:Jb(a);c.href=Fb(a)}return!0}
;function Jj(a){Qh.call(this,1,arguments);this.csn=a}
v(Jj,Qh);var Zh=new Rh("screen-created",Jj),Kj=[],Mj=Lj,Nj=0;function Oj(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Za(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(ib(e)||!e.trackingParams&&!e.veType)&&lj(Error("Child VE logged with no data"));d={N:Gj(b),P:b};"UNDEFINED_CSN"==b?Pj("visualElementAttached",c,d):a?fh("visualElementAttached",c,a,d):bj("visualElementAttached",c,d)}
function Qj(a,b){var c=Q("use_default_events_client")?void 0:aj,d={csn:a,ve:b.getAsJson(),eventType:1},e={N:Gj(a),P:a};"UNDEFINED_CSN"==a?Pj("visualElementShown",d,e):c?fh("visualElementShown",d,c,e):bj("visualElementShown",d,e)}
function Rj(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={N:Gj(b),P:b};"UNDEFINED_CSN"==b?Pj("visualElementGestured",c,d):a?fh("visualElementGestured",c,a,d):bj("visualElementGestured",c,d)}
function Lj(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return yc(b)}
function Pj(a,b,c){Kj.push({payloadName:a,payload:b,options:c});Nj||(Nj=$h())}
function ai(a){if(Kj){for(var b=u(Kj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,fh(c.payloadName,c.payload,null,c.options));Kj.length=0}Nj=0}
;function Sj(a,b,c){Oj(Q("use_default_events_client")?void 0:aj,a,b,[c])}
;var Tj={cc:29434,ec:3611,Fe:3854,Vf:42993,Ci:4724,ij:96370,wb:27686,xb:85013,yb:23462,Ab:42016,Bb:62407,Cb:26926,zb:43781,Db:51236,Eb:79148,Fb:50160,Gb:77504,Sb:87907,Tb:18630,Ub:54445,Vb:80935,Wb:105675,Xb:37521,Yb:47786,Zb:98349,ac:6827,dc:7282,ic:32276,hc:76278,jc:93911,kc:106531,lc:27259,mc:27262,nc:27263,pc:21759,qc:27107,sc:62936,tc:49568,uc:38408,wc:80637,xc:68727,yc:68728,zc:80353,Ac:80356,Bc:74610,Cc:45707,Dc:83962,Ec:83970,Fc:46713,Gc:89711,Hc:74612,Ic:93265,Jc:74611,Lc:113533,Mc:93252,
Nc:99357,Pc:94521,Qc:114252,Rc:113532,Sc:94522,Oc:94583,Tc:88E3,Uc:93253,Vc:93254,Wc:94387,Xc:94388,Yc:93255,Zc:97424,Kc:72502,bd:110111,cd:76019,dd:89431,ed:110466,fd:77240,gd:60508,hd:105350,jd:73393,kd:113534,ld:92098,md:84517,nd:83759,od:80357,pd:86113,qd:72598,rd:72733,sd:107349,td:97615,ud:31402,vd:84774,wd:95117,xd:98930,yd:98931,zd:98932,Ad:43347,Bd:45474,Cd:100352,Dd:84758,Ed:98443,Fd:74613,Gd:74614,Hd:64502,Id:74615,Jd:74616,Kd:74617,Ld:77820,Md:74618,Nd:93278,Od:93274,Pd:93275,Qd:93276,
Rd:22110,Sd:29433,Vd:82047,Wd:113550,Xd:75836,Yd:75837,Zd:42352,ae:84512,be:76065,ce:75989,de:16623,ee:32594,ge:27240,he:32633,ie:74858,ke:3945,je:16989,le:45520,me:25488,ne:25492,oe:25494,pe:55760,qe:14057,re:18451,se:57204,te:57203,ue:17897,we:57205,xe:18198,ye:17898,ze:17909,Ae:43980,Be:46220,Ce:11721,De:49954,Ee:96369,Ge:56251,He:25624,Ie:16906,Je:99999,Ke:68172,Le:27068,Me:47973,Ne:72773,Oe:26970,Pe:26971,Qe:96805,Re:17752,Se:73233,Te:109512,Ue:22256,Ve:14115,We:22696,Xe:89278,Ye:89277,Ze:109513,
af:43278,bf:43459,cf:43464,df:89279,ef:43717,ff:55764,gf:22255,hf:89281,jf:40963,kf:43277,lf:43442,mf:91824,nf:96367,pf:36850,qf:72694,rf:37414,sf:36851,tf:73491,uf:54473,vf:43375,wf:46674,xf:32473,yf:72901,zf:72906,Af:50947,Bf:50612,Cf:50613,Df:50942,Ef:84938,Ff:84943,Gf:84939,Hf:84941,If:84944,Jf:84940,Kf:84942,Lf:35585,Mf:51926,Nf:79983,Of:63238,Pf:18921,Qf:63241,Rf:57893,Sf:41182,Tf:33424,Uf:22207,Wf:36229,Xf:22206,Yf:22205,Zf:18993,ag:19001,cg:18990,dg:18991,eg:18997,fg:18725,gg:19003,hg:36874,
jg:44763,kg:33427,lg:67793,mg:22182,ng:37091,og:34650,pg:50617,qg:47261,rg:22287,sg:25144,tg:97917,ug:62397,vg:36961,wg:108035,xg:27426,yg:27857,zg:27846,Ag:27854,Bg:69692,Cg:61411,Dg:39299,Eg:38696,Fg:62520,Gg:36382,Hg:108701,Ig:50663,Jg:36387,Kg:14908,Lg:37533,Mg:105443,Ng:61635,Og:62274,Pg:65702,Qg:65703,Rg:65701,Sg:76256,Tg:37671,Ug:49953,Wg:36216,Xg:28237,Yg:39553,Zg:29222,ah:26107,bh:38050,dh:26108,eh:26109,fh:26110,gh:66881,hh:28236,ih:14586,jh:57929,kh:74723,lh:44098,mh:44099,nh:23528,oh:61699,
ph:59149,qh:101951,rh:97346,sh:95102,uh:64882,vh:63595,wh:63349,xh:95101,yh:75240,zh:27039,Ah:68823,Bh:21537,Ch:83464,Dh:75707,Eh:83113,Fh:101952,Gh:101953,Ih:79610,Jh:24402,Kh:24400,Lh:32925,Mh:57173,Nh:64423,Oh:64424,Ph:33986,Qh:100828,Rh:21409,Sh:11070,Th:11074,Uh:17880,Vh:14001,Xh:30709,Yh:30707,Zh:30711,ai:30710,bi:30708,Wh:26984,ci:63648,di:63649,fi:51879,gi:111059,hi:5754,ii:20445,ji:110386,ki:113746,li:66557,mi:17310,ni:28631,oi:21589,ri:68012,si:60480,ti:31571,vi:76980,wi:41577,xi:45469,
yi:38669,zi:13768,Ai:13777,Bi:62985,Di:59369,Ei:43927,Fi:43928,Gi:12924,Hi:100355,Ji:56219,Ki:27669,Li:10337,Ii:47896,Mi:107598,Ni:96639,Oi:107536,Pi:96661,Qi:96658,Ri:96660,Si:104443,Ti:96659,Ui:106442,Vi:63667,Wi:63668,Xi:63669,Yi:78314,Zi:55761,aj:96368,bj:67374,cj:48992,dj:49956,ej:31961,fj:26388,gj:23811,hj:5E4,jj:47355,kj:47356,lj:37935,mj:45521,nj:21760,oj:83769,pj:49977,qj:49974,rj:93497,sj:93498,tj:34325,uj:115803,vj:100081,wj:35309,xj:68314,yj:25602,zj:100339,Aj:59018,Bj:18248,Cj:50625,
Dj:9729,Ej:37168,Fj:37169,Gj:21667,Hj:16749,Ij:18635,Jj:39305,Kj:18046,Lj:53969,Mj:8213,Nj:93926,Oj:102852,Pj:110099,Qj:22678,Rj:69076,Tj:100856,Uj:17736,Vj:3832,Wj:55759,Xj:64031,Yj:93044,Zj:93045,ak:34388,bk:17657,ck:17655,dk:39579,ek:39578,fk:77448,gk:8196,hk:11357,ik:69877,jk:8197,kk:82039};function Uj(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lb(b);this.assets=a.assets||{};this.attrs=a.attrs||lb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Uj.prototype.clone=function(){var a=new Uj,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=lb(c):a[b]=c}return a};function Vj(){M.call(this);this.h=[]}
v(Vj,M);Vj.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Ma)}M.prototype.A.call(this)};var Wj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Xj(a){a=a||"";if(window.spf){var b=a.match(Wj);spf.style.load(a,b?b[1]:"",void 0)}else Yj(a)}
function Yj(a){var b=Zj(a),c=document.getElementById(b),d=c&&Sf(c,"loaded");d||c&&!d||(c=ak(a,b,function(){Sf(c,"loaded")||(Qf(c),bg(b),R(Ra(cg,b),0))}))}
function ak(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=jd(a);d.rel="stylesheet";d.href=tb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zj(a){var b=Mc(document,"A");Rb(b,new J(a,Eb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function bk(a,b,c,d){M.call(this);var e=this;this.u=this.fa=a;this.J=b;this.B=!1;this.api={};this.da=this.I=null;this.K=new N;Uc(this,Ra(Vc,this.K));this.m={};this.V=this.ea=this.l=this.oa=this.h=null;this.U=!1;this.o=this.F=null;this.ga={};this.Ja=["onReady"];this.na=null;this.va=NaN;this.ba={};this.j=d;ck(this);this.ha("WATCH_LATER_VIDEO_ADDED",this.eb.bind(this));this.ha("WATCH_LATER_VIDEO_REMOVED",this.fb.bind(this));this.ha("onAdAnnounce",this.La.bind(this));this.Ka=new Vj(this);Uc(this,Ra(Vc,
this.Ka));this.ca=0;c?this.ca=R(function(){e.loadNewVideoConfig(c)},0):d&&(dk(this),ek(this))}
v(bk,M);n=bk.prototype;n.getId=function(){return this.J};
n.loadNewVideoConfig=function(a){if(!this.i){this.ca&&(Uf(this.ca),this.ca=0);a instanceof Uj||(a=new Uj(a));this.oa=a;this.h=a.clone();dk(this);this.ea||(this.ea=fk(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=ld(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=ld(Number(a)||String(a));ek(this);this.B&&gk(this)}};
function dk(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.J,a.j?a.j.rootElementId=a.J:a.h.attrs.id=a.J);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
n.Qa=function(){return this.oa};
function gk(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function hk(a){var b=!0,c=ik(a);c&&a.h&&(a=jk(a),b=Sf(c,"version")===a);return b&&!!D("yt.player.Application.create")}
function ek(a){if(!a.i&&!a.U){var b=hk(a);if(b&&"html5"==(ik(a)?"html5":null))a.V="html5",a.B||kk(a);else if(lk(a),a.V="html5",b&&a.o)a.fa.appendChild(a.o),kk(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=mk(a,"player_bootstrap_method")?D("yt.player.Application.createAlternate")||D("yt.player.Application.create"):D("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.fa,e,a.j);kk(a)};
a.U=!0;b?a.F():(gg(jk(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&Xj(b),nk(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function ik(a){var b=Ic(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function kk(a){if(!a.i){var b=ik(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.U=!1,!mk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||ok(a)):a.va=R(function(){kk(a)},50)}}
function ok(a){ck(a);a.B=!0;var b=ik(a);b.addEventListener&&(a.I=pk(a,b,"addEventListener"));b.removeEventListener&&(a.da=pk(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=pk(a,b,e))}for(var f in a.m)a.I(f,a.m[f]);gk(a);a.ea&&a.ea(a.api);a.K.S("onReady",a.api)}
function pk(a,b,c){var d=b[c];return function(){try{return a.na=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.na=e,Kf(e))}}}
function ck(a){a.B=!1;if(a.da)for(var b in a.m)a.da(b,a.m[b]);for(var c in a.ba)Uf(parseInt(c,10));a.ba={};a.I=null;a.da=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ha.bind(a);a.api.removeEventListener=a.kb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ra.bind(a);a.api.getPlayerType=a.Sa.bind(a);a.api.getCurrentVideoConfig=a.Qa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.bb.bind(a)}
n.bb=function(){return this.B};
n.ha=function(a,b){var c=this,d=fk(this,b);if(d){if(!(0<=Xa(this.Ja,a)||this.m[a])){var e=qk(this,a);this.I&&this.I(a,e)}this.K.subscribe(a,d);"onReady"==a&&this.B&&R(function(){d(c.api)},0)}};
n.kb=function(a,b){if(!this.i){var c=fk(this,b);c&&mf(this.K,a,c)}};
function fk(a,b){var c=b;if("string"==typeof b){if(a.ga[b])return a.ga[b];c=function(){var d=D(b);d&&d.apply(z,arguments)};
a.ga[b]=c}return c?c:null}
function qk(a,b){var c="ytPlayer"+b+a.J;a.m[b]=c;z[c]=function(d){var e=R(function(){if(!a.i){a.K.S(b,d);var f=a.ba,g=String(e);g in f&&delete f[g]}},0);
jb(a.ba,String(e))};
return c}
n.La=function(a){bg("a11y-announce",a)};
n.eb=function(a){bg("WATCH_LATER_VIDEO_ADDED",a)};
n.fb=function(a){bg("WATCH_LATER_VIDEO_REMOVED",a)};
n.Sa=function(){return this.V||(ik(this)?"html5":null)};
n.Ra=function(){return this.na};
function lk(a){a.cancel();ck(a);a.V=null;a.h&&(a.h.loaded=!1);var b=ik(a);b&&(hk(a)||!nk(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.fa;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.F){var a=jk(this);mg(a,this.F)}Uf(this.va);this.U=!1};
n.A=function(){lk(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Jf(b)}this.ga=null;for(var a in this.m)z[this.m[a]]=null;this.oa=this.h=this.api=null;delete this.fa;delete this.u;M.prototype.A.call(this)};
function nk(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function jk(a){return a.j?a.j.jsUrl:a.h.assets.js}
function mk(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==kh(c||"")[b]}
;var rk={},sk="player_uid_"+(1E9*Math.random()>>>0);
function tk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Ic(d):e=d;d=e;e=sk+"_"+Ma(d);var f=rk[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new bk(d,e,a,b);rk[e]=f;bg("player-added",f.api);Uc(f,Ra(uk,f));return f.api}
function uk(a){delete rk[a.getId()]}
;function vk(a){a=void 0===a?!1:a;M.call(this);this.h=new N(a);Uc(this,Ra(Vc,this.h))}
H(vk,M);vk.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
vk.prototype.m=function(a,b){this.i||this.h.S.apply(this.h,arguments)};function wk(a,b,c){vk.call(this);this.j=a;this.l=b;this.o=c}
v(wk,vk);function xk(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(Ne(a),d.l))}}
wk.prototype.A=function(){this.l=this.j=null;vk.prototype.A.call(this)};function yk(a){M.call(this);this.h=a;this.h.subscribe("command",this.Ha,this);this.j={};this.m=!1}
v(yk,M);n=yk.prototype;n.start=function(){this.m||this.i||(this.m=!0,xk(this.h,"RECEIVING"))};
n.Ha=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=F(this.mb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&zk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=Ak(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=Bk(a,c))&&this.m&&!this.i&&xk(this.h,a,c))}}};
n.mb=function(a,b){this.m&&!this.i&&xk(this.h,a,this.qa(a,b))};
n.qa=function(a,b){if(null!=b)return{value:b}};
function zk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
n.A=function(){var a=this.h;a.i||mf(a.h,"command",this.Ha,this);this.h=null;for(var b in this.j)zk(this,b);M.prototype.A.call(this)};function Ck(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Dk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Ek(a)}
function Ek(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Fk(a,b,c,d){if(E(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Gk(a,b){yk.call(this,b);this.l=a;this.start()}
v(Gk,yk);Gk.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Gk.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function Ak(a,b){switch(a){case "loadVideoById":return b=Ek(b),[b];case "cueVideoById":return b=Ek(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Fk(b),[b];case "cuePlaylist":return b=Fk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Bk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Gk.prototype.qa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return yk.prototype.qa.call(this,a,b)};
Gk.prototype.A=function(){yk.prototype.A.call(this);delete this.l};function Hk(a,b,c){M.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Xa(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Hk,M);Hk.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Kf(e)}}};
Hk.prototype.A=function(){window.removeEventListener("message",this.u);M.prototype.A.call(this)};function Ik(){var a=this.i=new Hk(!!P("WIDGET_ID_ENFORCE")),b=F(this.jb,this);a.m=b;a.o=null;this.i.channel="widget";if(a=P("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
n=Ik.prototype;n.jb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,Jk(this,a)),this.m[a]=!0)):this.Da(a,b,c)};
n.Da=function(){};
function Jk(a,b){return F(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Pa=function(){this.o=!0;this.sendMessage("initialDelivery",this.ra());this.sendMessage("onReady");I(this.l,this.Ia,this);this.l=[]};
n.ra=function(){return null};
function Kk(a,b){a.sendMessage("infoDelivery",b)}
n.Ia=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
n.sendMessage=function(a,b){this.Ia({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.i=null};function Lk(a){Ik.call(this);this.h=a;this.j=[];this.addEventListener("onReady",F(this.gb,this));this.addEventListener("onVideoProgress",F(this.qb,this));this.addEventListener("onVolumeChange",F(this.rb,this));this.addEventListener("onApiChange",F(this.lb,this));this.addEventListener("onPlaybackQualityChange",F(this.nb,this));this.addEventListener("onPlaybackRateChange",F(this.ob,this));this.addEventListener("onStateChange",F(this.pb,this));this.addEventListener("onWebglSettingsChanged",F(this.sb,
this))}
v(Lk,Ik);n=Lk.prototype;n.Da=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Ck(a)){var d=b;if(E(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Ek.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Dk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Fk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);Ck(a)&&Kk(this,this.ra())}};
n.gb=function(){var a=F(this.Pa,this);this.i.h=a};
n.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
n.ra=function(){if(!this.h)return null;var a=this.h.getApiInterface();bb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=G()/1E3;return b};
n.pb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Kk(this,a)};
n.nb=function(a){Kk(this,{playbackQuality:a})};
n.ob=function(a){Kk(this,{playbackRate:a})};
n.lb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.rb=function(){Kk(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
n.qb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Kk(this,a)};
n.sb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Kk(this,a)};
n.dispose=function(){Ik.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Mk(a,b,c){M.call(this);this.h=a;this.l=c;this.m=Cg(window,"message",F(this.o,this));this.j=new wk(this,a,b);Uc(this,Ra(Vc,this.j))}
v(Mk,M);Mk.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
Mk.prototype.A=function(){Dg(this.m);this.h=null;M.prototype.A.call(this)};function Nk(){var a=lb(Ok),b;return af(new Ue(function(c,d){a.onSuccess=function(e){sh(e)?c(e):d(new Pk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Pk("Unknown request error","net.unknown",e))};
a.aa=function(e){d(new Pk("Request timed out","net.timeout",e))};
b=Bh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof bf&&b.abort();
return Ze(c)})}
function Pk(a,b,c){Ua.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Pk,Ua);function Qk(){this.i=0;this.h=null}
Qk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Te(a)?a:Rk(a)):2===this.i&&b?(a=b.call(c,this.h),Te(a)?a:Sk(a)):this};
Qk.prototype.getValue=function(){return this.h};
Qk.prototype.$goog_Thenable=!0;function Sk(a){var b=new Qk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Rk(a){var b=new Qk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Tk(a){Ua.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Uk;this.isTimeout=a instanceof Pk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof bf}
v(Tk,Ua);Tk.prototype.name="BiscottiError";function Uk(){Ua.call(this,"Biscotti ID is missing from server")}
v(Uk,Ua);Uk.prototype.name="BiscottiMissingError";var Ok={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Vk=null;
function hh(){if(Q("disable_biscotti_fetch_on_html5_clients"))return Ze(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Ec.get("CONSENT","").startsWith("YES+"))return Ze(Error("User has not consented - not fetching biscotti id."));if("1"===fb(Ff(),"args","privembed"))return Ze(Error("Biscotti ID is not available in private embed mode"));Vk||(Vk=af(Nk().then(Wk),function(a){return Xk(2,a)}));
return Vk}
function Wk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Uk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Uk;a=a.id;ih(a);Vk=Rk(a);Yk(18E5,2);return a}
function Xk(a,b){var c=new Tk(b);ih("");Vk=Sk(c);0<a&&Yk(12E4,a-1);throw c;}
function Yk(a,b){R(function(){af(Nk().then(Wk,function(c){return Xk(b,c)}),Ia)},a)}
function Zk(){try{var a=D("yt.ads.biscotti.getId_");return a?a():hh()}catch(b){return Ze(b)}}
;function $k(a){if("1"!==fb(Ff(),"args","privembed")){a&&gh();try{Zk().then(function(){},function(){}),R($k,18E5)}catch(b){Jf(b)}}}
;var X=D("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",X,void 0);function al(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");var a=Ec.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
n=al.prototype;n.get=function(a,b){bl(a);cl(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){bl(a);cl(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
n.remove=function(a){bl(a);cl(a);delete X[a]};
n.save=function(){Nf(this.h,this.dump(),63072E3)};
n.clear=function(){for(var a in X)delete X[a]};
n.dump=function(){var a=[],b;for(b in X)a.push(b+"="+encodeURIComponent(String(X[b])));return a.join("&")};
function cl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function bl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dl(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(al);function el(){this.i=new Set;this.h=new Set;this.j=new Map}
el.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ja(el);function fl(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!gl(a)||c.some(function(e){return!gl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())hl(a,d.value);return a}
function hl(a,b){for(var c in b)if(gl(b[c])){if(c in a&&!gl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});hl(a[c],b[c])}else if(il(b[c])){if(c in a&&!il(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);jl(a[c],b[c])}else a[c]=b[c];return a}
function jl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,gl(d)?a.push(hl({},d)):il(d)?a.push(jl([],d)):a.push(d);return a}
function gl(a){return"object"===typeof a&&!Array.isArray(a)}
function il(a){return"object"===typeof a&&Array.isArray(a)}
;var kl={},ll=0;
function ml(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Li("cobalt")){if(a){a instanceof J||(a="object"==typeof a&&a.X?a.W():String(a),Ib.test(a)?a=new J(a,Eb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new J(a,Eb):null));a=Fb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.ma&&(f=a.la());a=Qb(vb(b&&a.X?a.W():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.h:(Ka(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(Ne(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Lc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Ch(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ch(a,b,"GET","",d);else{b:{try{var g=new Va({url:a});if(g.j&&g.i||g.l){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var x=a.indexOf("&",q);if(0>x||x>l)x=l;q+=3;r=decodeURIComponent(a.substr(q,x-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(A){}f=!1}f?nl(a)?(b&&b(),f=!0):f=!1:f=!1;f||ol(a,b)}}
function nl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function ol(a,b){var c=new Image,d=""+ll++;kl[d]=c;c.onload=c.onerror=function(){b&&kl[d]&&b();delete kl[d]};
c.src=a}
;function pl(a,b){Qh.call(this,1,arguments)}
v(pl,Qh);function ql(a,b){Qh.call(this,1,arguments)}
v(ql,Qh);var rl=new Rh("aft-recorded",pl),sl=new Rh("timing-sent",ql);var tl=window;function ul(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var vl=tl.performance||tl.mozPerformance||tl.msPerformance||tl.webkitPerformance||new ul;var wl=!1;F(vl.clearResourceTimings||vl.webkitClearResourceTimings||vl.mozClearResourceTimings||vl.msClearResourceTimings||vl.oClearResourceTimings||Ia,vl);function xl(a){var b=yl(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function zl(a){var b;(b=D("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Sa("ytcsi."+(a||"")+"data_",b));return b}
function Al(a){a=zl(a);a.info||(a.info={});return a.info}
function yl(a){a=zl(a);a.tick||(a.tick={});return a.tick}
function Bl(a){var b=zl(a).nonce;b||(b=uj(),zl(a).nonce=b);return b}
function Cl(a){var b=yl(a||""),c=xl(a);c&&!wl&&(Wh(rl,new pl(Math.round(c-b._start),a)),wl=!0)}
;function Dl(){var a=D("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function El(a){a=a||"";var b=D("ytcsi.reference");b||(Dl(),b=D("ytcsi.reference"));if(b[a])return b[a];var c=Dl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Fl=z.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",Fl,void 0);function Gl(){this.h=0}
function Hl(){Gl.h||(Gl.h=new Gl);return Gl.h}
Gl.prototype.tick=function(a,b,c){Il(this,"tick_"+a+"_"+b)||bj("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Gl.prototype.info=function(a,b){var c=Object.keys(a).join("");Il(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,bj("latencyActionInfo",c))};
Gl.prototype.span=function(a,b){var c=Object.keys(a).join("");Il(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,bj("latencyActionSpan",a))};
function Il(a,b){Fl[b]=Fl[b]||{count:0};var c=Fl[b];c.count++;c.time=S();a.h||(a.h=pg(function(){var d=S(),e;for(e in Fl)Fl[e]&&6E4<d-Fl[e].time&&delete Fl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||lj(c)),!0):!1}
;var Y={},Jl=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid=
"requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",
Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Kl="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ll={},Ml=(Ll.ccs="CANARY_STATE_",
Ll.mver="MEASUREMENT_VERSION_",Ll.pis="PLAYER_INITIALIZED_STATE_",Ll.yt_pt="LATENCY_PLAYER_",Ll.pa="LATENCY_ACTION_",Ll.yt_vst="VIDEO_STREAM_TYPE_",Ll),Nl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Ol(a){return!!P("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!zl(a).useGel}
function Pl(a){a=zl(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Ql(a,b,c){if(null!==b)if(Al(c)[a]=b,Ol(c)){var d=b;b=Pl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Jl){b=Jl[a];0<=Xa(Kl,b)&&(d=!!d);a in Ml&&"string"===typeof d&&(d=Ml[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=fl({},e)}else 0<=Xa(Nl,a)||lj(new V("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Ol(c)&&(b=El(c||""),fl(b.info,f),b=Pl(c),"gelInfos"in b||(b.gelInfos={}),fl(b.gelInfos,f),c=Bl(c),Hl().info(f,c))}else El(c||"").info[a]=b}
function Rl(a,b,c){var d=yl(c);if(Q("use_first_tick")&&Sl(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;vl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),vl.mark(e))}e=b||S();d[a]=e;e=Pl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||S();if(Ol(c)){El(c||"").tick[a]=b||S();e=Bl(c);if("_start"===a){var f=Hl();Il(f,"baseline_"+e)||bj("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Hl().tick(a,e,b);Cl(c);e=!0}else e=!1;if(!e){if(!D("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=yl(c),D("ytglobal.timing"+(c||"")+"ready_")&&f&&Sl("_start")&&xl(c)))if(Cl(c),c)Tl(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Tl(c)}El(c||"").tick[a]=b||S()}return d[a]}
function Sl(a,b){var c=yl(b);return a in c}
function Tl(a){if(!Ol(a)){var b=yl(a),c=Al(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=xl(a);var h=yl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Al(a).yt_pvis&&"youtube"===e&&(Ql("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=S();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;Q("debug_csi_data")&&(c=D("yt.timing.csiData"),c||(c=[],Sa("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;nl(f,r)||ml(f,void 0,void 0,void 0,r)}else ml(f);B("yt.timing."+(a||"")+"pingSent_",!0,void 0);Wh(sl,new ql(m.aft+(Number(g)||0),a))}}
var Ul=window;Ul.ytcsi&&(Ul.ytcsi.info=Ql,Ul.ytcsi.tick=Rl);function Vl(){this.l=[];this.m=[];this.h=[];this.i=!1;this.o=new Map}
function Wl(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i&&a.j&&a.j();var g=W(c),h=Dj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Oj(a.client,g,h,[zj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Oj(a.client,g,h,[zj(d.playerResponse.trackingParams)]))})}
function Xl(a,b,c,d){if(a.i&&!d)a.l.push([b,c]);else{var e=W(d);c=c||Dj(d);e&&c&&Oj(a.client,e,c,[b])}}
Vl.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;Rj(this.client,b,zj(a.clickTrackingParams));return!0};
function Yl(a,b,c){c=void 0===c?{}:c;a.i=!0;a.j=function(){Zl(a,b,c);var f=Dj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Xl(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.i)a.m.push([g,k]);else{var l=zj(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={N:Gj(h),P:h},"UNDEFINED_CSN"==h?Pj("visualElementStateChanged",k,l):g?fh("visualElementStateChanged",k,g,l):bj("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.j();if(c.ya)for(var d=u(c.ya),e=d.next();!e.done;e=d.next())Wl(a,e.value,c.layer);else mj(Error("Delayed screen needs a data promise."))}
function Zl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.hb?c.hb:c.layer;var e=W(d);d=Dj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.xa,l=c.N,m=Mj(),p={csn:m,pageVe:(new yj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&lj(new V("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={N:l,P:m};g?fh("screenCreated",p,g,k):bj("screenCreated",p,k);Wh(Zh,new Jj(m));var q=m}catch(r){nj(r,{xk:b,rootVe:d,parentVisualElement:void 0,rk:e,wk:f,xa:c.xa});mj(r);return}Hj(q,b,c.layer,c.N);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=Q("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(wj));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={N:Gj(e),P:e,
Oa:f},"UNDEFINED_CSN"==e?Pj("visualElementHidden",d,f):b?fh("visualElementHidden",d,b,f):bj("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Ql("csn",q);el.getInstance().clear();d=Dj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&Qj(q,d);a.i=!1;a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&Xl(a,b,d,c.layer)}
;var Z=null,$l=null,am=null,bm={};function cm(a){var b=a.id;a=a.ve_type;var c=xj++;a=new yj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});bm[b]=a;b=W();c=Dj();b&&c&&Sj(b,c,a)}
function dm(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function em(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Hj(b,a),a=Dj()))for(var c in bm){var d=bm[c];d&&Sj(b,a,d)}}
function fm(a){bm[a.id]=zj(a.tracking_params)}
function gm(a){var b=W();a=bm[a.id];b&&a&&Rj(Q("use_default_events_client")?void 0:aj,b,a)}
function hm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=bm[a[c]];d&&Qj(b,d)}}
;B("yt.setConfig",O,void 0);B("yt.config.set",O,void 0);B("yt.setMsg",Mf,void 0);B("yt.msgs.set",Mf,void 0);B("yt.logging.errors.log",mj,void 0);
B("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);if(!a){var b=P("PLAYER_VARS",void 0);b&&(a={args:b})}$k(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=P("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=mh(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=tk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=tk(a);Z.addEventListener("onScreenChanged",em);Z.addEventListener("onLogClientVeCreated",cm);Z.addEventListener("onLogServerVeCreated",fm);Z.addEventListener("onLogVeClicked",gm);Z.addEventListener("onLogVesShown",hm);Z.addEventListener("onVideoDataChange",
dm);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?am=new Lk(Z):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&($l=new Mk(window.parent,a,b),am=new Gk(Z,$l.j));tg()},void 0);
var im=If(function(){Rl("ol");var a=al.getInstance(),b=!!((dl("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Wd(document.body,"exp-invert-logo"))if(c&&!Wd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Wd(d,"inverted-hdpi")){var e=Ud(d);Vd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Wd(document.body,"inverted-hdpi")&&Xd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=dl(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());Vl.h||(Vl.h=new Vl);a=Vl.h;c=16623;var f=void 0===f?{}:f;Object.values(Tj).includes(c)||(lj(new V("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.ya?Yl(a,c,f):Zl(a,c,f)}),jm=If(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
P("PL_ATT")&&qj.dispose();for(var a=0,b=rg.length;a<b;a++){var c=rg[a];if(!isNaN(c)){var d=D("yt.scheduler.instance.cancelJob");d?d(c):Uf(c)}}rg.length=0;lg("//static.doubleclick.net/instream/ad_status.js");sg=!1;O("DCLKSTAT",0);Wc(am,$l);Z&&(Z.removeEventListener("onScreenChanged",em),Z.removeEventListener("onLogClientVeCreated",cm),Z.removeEventListener("onLogServerVeCreated",fm),Z.removeEventListener("onLogVeClicked",gm),Z.removeEventListener("onLogVesShown",hm),Z.removeEventListener("onVideoDataChange",
dm),Z.destroy());bm={}});
window.addEventListener?(window.addEventListener("load",im),window.addEventListener("unload",jm)):window.attachEvent&&(window.attachEvent("onload",im),window.attachEvent("onunload",jm));Sa("yt.abuse.player.botguardInitialized",D("yt.abuse.player.botguardInitialized")||rj);Sa("yt.abuse.player.invokeBotguard",D("yt.abuse.player.invokeBotguard")||sj);Sa("yt.abuse.dclkstatus.checkDclkStatus",D("yt.abuse.dclkstatus.checkDclkStatus")||ug);
Sa("yt.player.exports.navigate",D("yt.player.exports.navigate")||Ij);Sa("yt.util.activity.init",D("yt.util.activity.init")||Hg);Sa("yt.util.activity.getTimeSinceActive",D("yt.util.activity.getTimeSinceActive")||Kg);Sa("yt.util.activity.setTimestamp",D("yt.util.activity.setTimestamp")||Ig);}).call(this);
