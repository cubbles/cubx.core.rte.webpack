/* globals cubx, location */
import './webcomponents/main';
import CrcLoader from './crc-loader/modules/crcLoader/CRCLoader';
import './cubxcomponent/CubxComponent';

(function () {
  'use strict';
  // define global namespace cubx
  window.cubx = {
    // preserve externally defined CRCInit
    CRCInit: window.cubx && window.cubx.CRCInit ? window.cubx.CRCInit : {},
    utils: {
      /**
       * Utility function to get nested property (usage: get(window, 'cubx.CRCInit.loadCif')
       * @param {object} obj
       * @param {string} key nested property
       * @returns {*} undefined, if property does not exist
       */
      get: function (obj, key) {
        return key.split('.').reduce(function (o, x) {
          return (typeof o === 'undefined' || o === null) ? o : o[x];
        }, obj);
      }
    }
  };
  // Fake CubxComponent
  window.CubxComponent = function () {};
})();

/*eslint-disable */
// @formatter:off
// --------------------------------------------------------------------------------------- ES6 Promises polyfill include ---------------------------------------------- //
if (window.Promise !== 'function') {
  /*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
   * @version   3.2.2+35df15ea
   */
  (function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),I(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);
}
// --------------------------------------------------------------------------------------- End of ES6 Promises polyfill include ---------------------------------------------- //


// @formatter:on
/* eslint-enable */

(function () {
  'use strict';

  // get configs from the documents script-tag
  var crcLoaderElement;
  var crcLoaderUrl;
  Array.prototype.forEach.call(document.querySelectorAll('script[src]'), function (scriptElement) {
    // get the loader url itself
    var src = scriptElement.getAttribute('src');
    if (src.match(/rte-core/)) {
      crcLoaderElement = scriptElement;
      crcLoaderUrl = src;
    }
  });
  // check for a alternative baseUrl to load WebPackages from and append / to end of base url if there is no
  var baseUrl = crcLoaderElement.getAttribute('data-crc-baseUrl');
  if (baseUrl && baseUrl.lastIndexOf('/') !== baseUrl.length - 1) {
    baseUrl = baseUrl + '/';
  }
  var crcLoaderBaseUrl = crcLoaderUrl.replace(/\/main.bundle.js$/, '');
  var crcBaseUrl = crcLoaderBaseUrl.replace(/\/rte-core$/, '/crc');
  var reg = /\/[a-zA-Z0-9-.@]*\/rte-core$/;
  var webpackageBaseUrl = baseUrl || crcLoaderBaseUrl.replace(reg, '/');
  window.cubx.CRCInit.webpackageBaseUrl = webpackageBaseUrl;
  var rteWebpackageId = crcLoaderBaseUrl.substring(0, crcLoaderBaseUrl.lastIndexOf('/'));
  window.cubx.CRCInit.rteWebpackageId = rteWebpackageId.substring(rteWebpackageId.lastIndexOf('/') + 1);

  /*
   * Set option 'loadCIF' (default == 'true')
   */
  (function () {
    // fow backwards compatibility also test for attribute "data-CRCInit.loadCIF"
    var attributeName = 'data-CRCInit.loadCIF';
    var loadCIFAttr = crcLoaderElement.getAttribute(attributeName);
    attributeName = 'data-crcinit-loadcif';
    loadCIFAttr = loadCIFAttr || crcLoaderElement.getAttribute(attributeName);
    var defaultValue = 'true';
    var loadCIF = loadCIFAttr || defaultValue;
    cubx.CRCInit.loadCIF = loadCIF;
    if (['true', 'false'].indexOf(loadCIFAttr) === -1) {
      console.warn(
        'Expected CRCLoader attribute "' + attributeName + '" to be "true" or "false". ' +
        'Got "' + loadCIFAttr + '". ' +
        'Going to use default value "' + defaultValue + '".');
    }
  })();

  /*
   *
   */
  (function () {
    var attributeName = 'data-cubx-startevent';
    var startEventName = crcLoaderElement.getAttribute(attributeName);
    var defaultValue = 'DOMContentLoaded';
    cubx.CRCInit.startEvent = startEventName || cubx.CRCInit.startEvent || defaultValue;
    document.addEventListener(cubx.CRCInit.startEvent, function () {
      cubx.CRCInit.startEventArrived = true;
    });
  })();

  /*
   *
   */
  (function () {
    if (cubx.CRCInit.allowAbsoluteResourceUrls) {
      return;
    }
    // fow backwards compatibility also test for attribute "allow-absolute-resource-urls"
    var attributeName = 'allow-absolute-resource-urls';
    var allowAbsoluteResourceUrls = crcLoaderElement.getAttribute(attributeName);
    attributeName = 'data-cubx-allow-absolute-resource-urls';
    allowAbsoluteResourceUrls = allowAbsoluteResourceUrls || crcLoaderElement.getAttribute(attributeName);
    var defaultValue = false;
    cubx.CRCInit.allowAbsoluteResourceUrls = allowAbsoluteResourceUrls || defaultValue;
  })();

  /*
   * Set option 'runtimeMode' (default == 'prod')
   */
  function getURLParameter (name) {
    // jshint elision: true
    /* eslint-disable no-sparse-arrays */
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) ||
      [, ''])[1].replace(/\+/g, '%20')) || null;
    /* eslint-enable no-sparse-arrays */
  }

  (function () {
    var parameterName = 'runtimeMode';
    var parameterValue = getURLParameter(parameterName);
    var defaultValue = 'prod';
    parameterValue = parameterValue || defaultValue;
    var allowedValues = ['dev', 'prod'];
    if (allowedValues.indexOf(parameterValue) > -1) {
      window.cubx.CRCInit.runtimeMode = parameterValue;
    } else {
      console.warn(
        'Expected URLParameter "' + parameterName + '" to be one of ' +
        JSON.stringify(allowedValues) + '. Got "' + parameterValue + '".' +
        'Going to use "' + defaultValue + '".');
    }
  })();

  // set CRCLoader to cubx namespace
  const crcLoader = new CrcLoader();

  crcLoader.setCRCLoaderResourcesBaseUrl(crcLoaderBaseUrl);
  crcLoader.setWebpackageBaseUrl(webpackageBaseUrl);
  crcLoader.setCRCBaseUrl(crcBaseUrl);
  crcLoader.run();
})();
