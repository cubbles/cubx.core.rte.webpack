/* eslint-disable */
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return d}function c(a){if(J)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!h(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=k(document,
"link[rel=import]:not([import-dependency])"),d=b.length;d?r(b,function(b){return m(b,function(){0===--d&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function m(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();
else{var d=function(c){a.removeEventListener(c.type,d);a.__loaded=!0;b&&b()};a.addEventListener("load",d);K&&"style"===a.localName||a.addEventListener("error",d)}}function h(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function g(){var a=this;this.a={};this.b=0;this.c=new MutationObserver(function(b){return a.K(b)});this.c.observe(document.head,{childList:!0,subtree:!0});this.loadImports(document)}function l(a){r(k(a,"template"),function(a){r(k(a.content,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'),
function(a){var b=document.createElement("script");r(a.attributes,function(a){return b.setAttribute(a.name,a.value)});b.textContent=a.textContent;a.parentNode.replaceChild(b,a)});l(a.content)})}function k(a,b){return a.childNodes.length?a.querySelectorAll(b):wa}function r(a,b,d){var c=a?a.length:0,e=d?-1:1;for(d=d?c-1:0;d<c&&0<=d;d+=e)b(a[d],d)}var A=document.createElement("link"),J="import"in A,wa=A.querySelectorAll("*"),L=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",
{get:function(){return L||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var xa=/(url\()([^)]*)(\))/g,ya=/(@import[\s]+(?!url\())([^;]*)(;)/g,za=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,t={I:function(a,b){a.href&&a.setAttribute("href",t.j(a.getAttribute("href"),b));a.src&&a.setAttribute("src",t.j(a.getAttribute("src"),b));if("style"===a.localName){var d=t.C(a.textContent,b,xa);a.textContent=t.C(d,b,ya)}},C:function(a,b,d){return a.replace(d,
function(a,d,c,e){a=c.replace(/["']/g,"");b&&(a=t.j(a,b));return d+"'"+a+"'"+e})},j:function(a,b){if(void 0===t.l){t.l=!1;try{var d=new URL("b","http://a");d.pathname="c%20d";t.l="http://a/c%20d"===d.href}catch(Ta){}}if(t.l)return(new URL(a,b)).href;d=t.F;d||(d=document.implementation.createHTMLDocument("temp"),t.F=d,d.w=d.createElement("base"),d.head.appendChild(d.w),d.v=d.createElement("a"));d.w.href=b;d.v.href=a;return d.v.href||a}},Z={async:!0,load:function(a,b,d){if(a)if(a.match(/^data:/)){a=
a.split(",");var c=a[1];c=-1<a[0].indexOf(";base64")?atob(c):decodeURIComponent(c);b(c)}else{var e=new XMLHttpRequest;e.open("GET",a,Z.async);e.onload=function(){var a=e.responseURL||e.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var c=e.response||e.responseText;304===e.status||0===e.status||200<=e.status&&300>e.status?b(c,a):d(c)};e.send()}else d("error: href must be specified")}},K=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);
g.prototype.loadImports=function(a){var b=this;r(k(a,"link[rel=import]"),function(a){return b.A(a)})};g.prototype.A=function(a){var b=this,d=a.href;if(void 0!==this.a[d]){var c=this.a[d];c&&c.__loaded&&(a.__import=c,this.g(a))}else this.b++,this.a[d]="pending",Z.load(d,function(a,c){a=b.L(a,c||d);b.a[d]=a;b.b--;b.loadImports(a);b.B()},function(){b.a[d]=null;b.b--;b.B()})};g.prototype.L=function(a,b){if(!a)return document.createDocumentFragment();K&&(a=a.replace(za,function(a,b,d){return-1===a.indexOf("type=")?
b+" type=import-disable "+d:a}));var d=document.createElement("template");d.innerHTML=a;if(d.content)a=d.content,l(a);else for(a=document.createDocumentFragment();d.firstChild;)a.appendChild(d.firstChild);if(d=a.querySelector("base"))b=t.j(d.getAttribute("href"),b),d.removeAttribute("href");var c=0;r(k(a,'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'),
function(a){m(a);t.I(a,b);a.setAttribute("import-dependency","");"script"===a.localName&&!a.src&&a.textContent&&(a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(c?"-"+c:"")+".js\n"))),a.textContent="",c++)});return a};g.prototype.B=function(){var a=this;if(!this.b){this.c.disconnect();this.flatten(document);var b=!1,d=!1,c=function(){d&&b&&(a.loadImports(document),a.b||(a.c.observe(document.head,{childList:!0,subtree:!0}),a.J()))};
this.N(function(){d=!0;c()});this.M(function(){b=!0;c()})}};g.prototype.flatten=function(a){var b=this;r(k(a,"link[rel=import]"),function(a){var d=b.a[a.href];(a.__import=d)&&d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.__import=a,b.flatten(d),a.appendChild(d))})};g.prototype.M=function(a){function b(e){if(e<c){var f=d[e],h=document.createElement("script");f.removeAttribute("import-dependency");r(f.attributes,function(a){return h.setAttribute(a.name,a.value)});
L=h;f.parentNode.replaceChild(h,f);m(h,function(){L=null;b(e+1)})}else a()}var d=k(document,"script[import-dependency]"),c=d.length;b(0)};g.prototype.N=function(a){var b=k(document,"style[import-dependency],link[rel=stylesheet][import-dependency]"),d=b.length;if(d){var e=K&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");r(b,function(b){m(b,function(){b.removeAttribute("import-dependency");0===--d&&a()});if(e&&b.parentNode!==document.head){var f=document.createElement(b.localName);
f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};g.prototype.J=function(){var a=this;r(k(document,"link[rel=import]"),function(b){return a.g(b)},!0)};g.prototype.g=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState="complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,
detail:void 0})))};g.prototype.K=function(a){var b=this;r(a,function(a){return r(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(h(a)?b.A(a):b.loadImports(a))})})};var M=null;if(J)r(k(document,"link[rel=import]"),function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)}),A=function(a){a=a.target;h(a)&&(a.__loaded=!0)},document.addEventListener("load",A,!0),document.addEventListener("error",A,!0);else{var B=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!B||
B.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=h(this)?this:c(this);return a?a.href:B&&B.get?B.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});Object.defineProperty(HTMLLinkElement.prototype,"import",{get:function(){return this.__import||null},configurable:!0,enumerable:!0});e(function(){M=new g})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=J;
a.whenReady=f;a.importForElement=c;a.loadImports=function(a){M&&M.loadImports(a)}})(window.HTMLImports=window.HTMLImports||{});var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function ba(a){var b=aa.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function n(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function p(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function q(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)q(d,b,c);d=p(a,e);continue}else if("template"===f){d=p(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)q(e,b,c)}d=d.firstChild?d.firstChild:p(a,d)}}function u(a,b,c){a[b]=c};function v(){this.a=new Map;this.g=new Map;this.c=[];this.b=!1}function ca(a,b,c){a.a.set(b,c);a.g.set(c.constructor,c)}function da(a,b){a.b=!0;a.c.push(b)}function w(a,b){a.b&&q(b,function(b){return x(a,b)})}function x(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.c.length;c++)a.c[c](b)}}function y(a,b){var c=[];q(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):z(a,d)}}
function C(a,b){var c=[];q(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function D(a,b,c){c=void 0===c?{}:c;var d=c.O||new Set,e=c.D||function(b){return z(a,b)},f=[];q(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);D(a,c,{O:f,D:e})}})}else f.push(b)},d);if(a.b)for(b=
0;b<f.length;b++)x(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
function z(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(m){throw b.__CE_state=2,m;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}n(b)&&a.connectedCallback(b)}}}v.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};v.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
v.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function E(a){var b=document;this.f=a;this.a=b;this.b=void 0;D(this.f,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.c.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}E.prototype.disconnect=function(){this.b&&this.b.disconnect()};E.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||this.disconnect();for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)D(this.f,c[d])};function ea(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function fa(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function F(a){this.m=!1;this.f=a;this.u=new Map;this.o=function(a){return a()};this.h=!1;this.s=[];this.G=new E(a)}
F.prototype.a=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!ba(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.f.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.m)throw Error("A custom element is already being defined.");this.m=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var m=d("disconnectedCallback");var h=d("adoptedCallback");var g=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(k){return}finally{this.m=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:m,adoptedCallback:h,attributeChangedCallback:g,observedAttributes:l,constructionStack:[]};ca(this.f,a,b);this.s.push(b);
this.h||(this.h=!0,this.o(function(){return ha(c)}))};function ha(a){if(!1!==a.h){a.h=!1;for(var b=a.s,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);D(a.f,document,{D:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.f.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)z(a.f,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var m=0;m<f.length;m++)z(a.f,f[m]);(e=a.u.get(e))&&fa(e)}}}F.prototype.get=function(a){if(a=this.f.a.get(a))return a.constructor};
F.prototype.b=function(a){if(!ba(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.u.get(a);if(b)return b.c;b=new ea;this.u.set(a,b);this.f.a.get(a)&&!this.s.some(function(b){return b.localName===a})&&fa(b);return b.c};F.prototype.c=function(a){this.G.disconnect();var b=this.o;this.o=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=F;F.prototype.define=F.prototype.a;F.prototype.get=F.prototype.get;
F.prototype.whenDefined=F.prototype.b;F.prototype.polyfillWrapFlushCallback=F.prototype.c;var G=window.Document.prototype.createElement,ia=window.Document.prototype.createElementNS,ja=window.Document.prototype.importNode,ka=window.Document.prototype.prepend,la=window.Document.prototype.append,ma=window.DocumentFragment.prototype.prepend,na=window.DocumentFragment.prototype.append,oa=window.Node.prototype.cloneNode,H=window.Node.prototype.appendChild,pa=window.Node.prototype.insertBefore,I=window.Node.prototype.removeChild,qa=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),ra=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,sa=window.Element.prototype.setAttribute,ta=window.Element.prototype.removeAttribute,Q=window.Element.prototype.getAttributeNS,ua=window.Element.prototype.setAttributeNS,va=window.Element.prototype.removeAttributeNS,Aa=window.Element.prototype.insertAdjacentElement,Ba=window.Element.prototype.prepend,Ca=window.Element.prototype.append,
R=window.Element.prototype.before,Da=window.Element.prototype.after,Ea=window.Element.prototype.replaceWith,Fa=window.Element.prototype.remove,Ga=window.HTMLElement,S=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Ha=window.HTMLElement.prototype.insertAdjacentElement;var Ia=new function(){};function Ja(){var a=T;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.g.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=G.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,x(a,e),e;d=e.length-1;var f=e[d];if(f===Ia)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=Ia;Object.setPrototypeOf(f,b.prototype);x(a,f);return f}b.prototype=Ga.prototype;return b}()};function U(a,b,c){function d(b){return function(d){for(var c=[],e=0;e<arguments.length;++e)c[e-0]=arguments[e];e=[];for(var f=[],l=0;l<c.length;l++){var k=c[l];k instanceof Element&&n(k)&&f.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}b.apply(this,c);for(c=0;c<f.length;c++)C(a,f[c]);if(n(this))for(c=0;c<e.length;c++)f=e[c],f instanceof Element&&y(a,f)}}void 0!==c.i&&(b.prepend=d(c.i));void 0!==c.append&&(b.append=d(c.append))};function Ka(){var a=T;u(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=G.call(this,b);x(a,b);return b});u(Document.prototype,"importNode",function(b,c){b=ja.call(this,b,c);this.__CE_hasRegistry?D(a,b):w(a,b);return b});u(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=ia.call(this,b,c);x(a,b);return b});
U(a,Document.prototype,{i:ka,append:la})};function La(){var a=T;function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&n(this)){c=Array(h);for(var g=0;g<h;g++)c[g]=e[g]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)C(a,c[b])}}})}u(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);
b=pa.call(this,b,d);if(n(this))for(d=0;d<c.length;d++)y(a,c[d]);return b}c=n(b);d=pa.call(this,b,d);c&&C(a,b);n(this)&&y(a,b);return d});u(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var d=Array.prototype.slice.apply(b.childNodes);b=H.call(this,b);if(n(this))for(var c=0;c<d.length;c++)y(a,d[c]);return b}d=n(b);c=H.call(this,b);d&&C(a,b);n(this)&&y(a,b);return c});u(Node.prototype,"cloneNode",function(b){b=oa.call(this,b);this.ownerDocument.__CE_hasRegistry?D(a,b):w(a,
b);return b});u(Node.prototype,"removeChild",function(b){var d=n(b),c=I.call(this,b);d&&C(a,b);return c});u(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=qa.call(this,b,d);if(n(this))for(C(a,d),d=0;d<c.length;d++)y(a,c[d]);return b}c=n(b);var f=qa.call(this,b,d),m=n(this);m&&C(a,d);c&&C(a,b);m&&y(a,b);return f});N&&N.get?b(Node.prototype,N):da(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)I.call(this,this.firstChild);H.call(this,document.createTextNode(a))}})})};function Ma(a){var b=Element.prototype;function c(b){return function(d){for(var c=[],e=0;e<arguments.length;++e)c[e-0]=arguments[e];e=[];for(var h=[],g=0;g<c.length;g++){var l=c[g];l instanceof Element&&n(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,c);for(c=0;c<h.length;c++)C(a,h[c]);if(n(this))for(c=0;c<e.length;c++)h=e[c],h instanceof Element&&y(a,h)}}void 0!==R&&(b.before=c(R));void 0!==R&&(b.after=c(Da));void 0!==Ea&&
u(b,"replaceWith",function(b){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=[];for(var m=[],h=0;h<d.length;h++){var g=d[h];g instanceof Element&&n(g)&&m.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}h=n(this);Ea.apply(this,d);for(d=0;d<m.length;d++)C(a,m[d]);if(h)for(C(a,this),d=0;d<c.length;d++)m=c[d],m instanceof Element&&y(a,m)});void 0!==Fa&&u(b,"remove",function(){var b=n(this);Fa.call(this);b&&C(a,this)})};function Na(){var a=T;function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var d=this,e=void 0;n(this)&&(e=[],q(this,function(a){a!==d&&e.push(a)}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var l=e[f];1===l.__CE_state&&a.disconnectedCallback(l)}this.ownerDocument.__CE_hasRegistry?D(a,this):w(a,this);return b}})}function c(b,c){u(b,"insertAdjacentElement",function(b,d){var e=n(d);b=c.call(this,b,d);e&&C(a,d);n(b)&&y(a,d);
return b})}ra&&u(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=ra.call(this,a)});O&&O.get?b(Element.prototype,O):S&&S.get?b(HTMLElement.prototype,S):da(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return oa.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,d=b?this.content:this,c=G.call(document,this.localName);for(c.innerHTML=a;0<d.childNodes.length;)I.call(d,d.childNodes[0]);for(a=b?c.content:c;0<a.childNodes.length;)H.call(d,
a.childNodes[0])}})});u(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return sa.call(this,b,c);var d=P.call(this,b);sa.call(this,b,c);c=P.call(this,b);a.attributeChangedCallback(this,b,d,c,null)});u(Element.prototype,"setAttributeNS",function(b,c,f){if(1!==this.__CE_state)return ua.call(this,b,c,f);var d=Q.call(this,b,c);ua.call(this,b,c,f);f=Q.call(this,b,c);a.attributeChangedCallback(this,c,d,f,b)});u(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return ta.call(this,
b);var d=P.call(this,b);ta.call(this,b);null!==d&&a.attributeChangedCallback(this,b,d,null,null)});u(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return va.call(this,b,c);var d=Q.call(this,b,c);va.call(this,b,c);var e=Q.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b)});Ha?c(HTMLElement.prototype,Ha):Aa?c(Element.prototype,Aa):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");U(a,Element.prototype,{i:Ba,append:Ca});Ma(a)}
;var V=window.customElements;if(!V||V.forcePolyfill||"function"!=typeof V.define||"function"!=typeof V.get){var T=new v;Ja();Ka();U(T,DocumentFragment.prototype,{i:ma,append:na});La();Na();document.__CE_hasRegistry=!0;var customElements=new F(T);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var W=window.customElements,X=window.HTMLImports,Oa=window.HTMLTemplateElement;window.WebComponents=window.WebComponents||{};if(W&&W.polyfillWrapFlushCallback){var Y,Pa=function(){if(Y){Oa.H&&Oa.H(window.document);var a=Y;Y=null;a();return!0}},Qa=X.whenReady;W.polyfillWrapFlushCallback(function(a){Y=a;Qa(Pa)});X.whenReady=function(a){Qa(function(){Pa()?X.whenReady(a):a()})}}
X.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});var Ra=document.createElement("style");Ra.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Sa=document.querySelector("head");Sa.insertBefore(Ra,Sa.firstChild);/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
}).call(this);

//# sourceMappingURL=webcomponents-hi-ce.js.map
