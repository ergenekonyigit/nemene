(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nemene", [], factory);
	else if(typeof exports === 'object')
		exports["nemene"] = factory();
	else
		root["nemene"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.ss={})}(this,function(t){"use strict";function r(t){if(0===t.length)return 0;for(var r,n=t[0],e=0,o=1;o<t.length;o++)r=n+t[o],Math.abs(n)>=Math.abs(t[o])?e+=n-r+t[o]:e+=t[o]-r+n,n=r;return n+e}function n(t){if(0===t.length)throw new Error("mean requires at least one data point");return r(t)/t.length}function e(t,r){var e,o,a=n(t),i=0;if(2===r)for(o=0;o<t.length;o++)i+=(e=t[o]-a)*e;else for(o=0;o<t.length;o++)i+=Math.pow(t[o]-a,r);return i}function o(t){if(0===t.length)throw new Error("variance requires at least one data point");return e(t,2)/t.length}function a(t){if(1===t.length)return 0;var r=o(t);return Math.sqrt(r)}function i(t){if(0===t.length)throw new Error("mode requires at least one data point");if(1===t.length)return t[0];for(var r=t[0],n=NaN,e=0,o=1,a=1;a<t.length+1;a++)t[a]!==r?(o>e&&(e=o,n=r),o=1,r=t[a]):o++;return n}function u(t){return t.slice().sort(function(t,r){return t-r})}function h(t){if(0===t.length)throw new Error("min requires at least one data point");for(var r=t[0],n=1;n<t.length;n++)t[n]<r&&(r=t[n]);return r}function f(t){if(0===t.length)throw new Error("max requires at least one data point");for(var r=t[0],n=1;n<t.length;n++)t[n]>r&&(r=t[n]);return r}function s(t,r){var n=t.length*r;if(0===t.length)throw new Error("quantile requires at least one data point.");if(r<0||r>1)throw new Error("quantiles must be between 0 and 1");return 1===r?t[t.length-1]:0===r?t[0]:n%1!=0?t[Math.ceil(n)-1]:t.length%2==0?(t[n-1]+t[n])/2:t[n]}function l(t,r,n,e){for(n=n||0,e=e||t.length-1;e>n;){if(e-n>600){var o=e-n+1,a=r-n+1,i=Math.log(o),u=.5*Math.exp(2*i/3),h=.5*Math.sqrt(i*u*(o-u)/o);a-o/2<0&&(h*=-1);l(t,r,Math.max(n,Math.floor(r-a*u/o+h)),Math.min(e,Math.floor(r+(o-a)*u/o+h)))}var f=t[r],s=n,p=e;for(c(t,n,r),t[e]>f&&c(t,n,e);s<p;){for(c(t,s,p),s++,p--;t[s]<f;)s++;for(;t[p]>f;)p--}t[n]===f?c(t,n,p):c(t,++p,e),p<=r&&(n=p+1),r<=p&&(e=p-1)}}function c(t,r,n){var e=t[r];t[r]=t[n],t[n]=e}function p(t,r){var n=t.slice();if(Array.isArray(r)){!function(t,r){for(var n=[0],e=0;e<r.length;e++)n.push(w(t.length,r[e]));n.push(t.length-1),n.sort(v);var o=[0,n.length-1];for(;o.length;){var a=Math.ceil(o.pop()),i=Math.floor(o.pop());if(!(a-i<=1)){var u=Math.floor((i+a)/2);g(t,n[u],n[i],n[a]),o.push(i,u,u,a)}}}(n,r);for(var e=[],o=0;o<r.length;o++)e[o]=s(n,r[o]);return e}return g(n,w(n.length,r),0,n.length-1),s(n,r)}function g(t,r,n,e){r%1==0?l(t,r,n,e):(l(t,r=Math.floor(r),n,e),l(t,r+1,r+1,e))}function v(t,r){return t-r}function w(t,r){var n=t*r;return 1===r?t-1:0===r?0:n%1!=0?Math.ceil(n)-1:t%2==0?n-.5:n}function M(t){var r=p(t,.75),n=p(t,.25);if("number"==typeof r&&"number"==typeof n)return r-n}function m(t){return+p(t,.5)}function d(t){for(var r=m(t),n=[],e=0;e<t.length;e++)n.push(Math.abs(t[e]-r));return m(n)}function b(t,r){r=r||Math.random;for(var n,e,o=t.length;o>0;)e=Math.floor(r()*o--),n=t[o],t[o]=t[e],t[e]=n;return t}function q(t,r){return b(t.slice().slice(),r)}function y(t){for(var r,n=0,e=0;e<t.length;e++)0!==e&&t[e]===r||(r=t[e],n++);return n}function E(t,r){for(var n=[],e=0;e<t;e++){for(var o=[],a=0;a<r;a++)o.push(0);n.push(o)}return n}function S(t,r,n,e){var o;if(t>0){var a=(n[r]-n[t-1])/(r-t+1);o=e[r]-e[t-1]-(r-t+1)*a*a}else o=e[r]-n[r]*n[r]/(r+1);return o<0?0:o}function x(t,r,n,e,o,a,i){if(!(t>r)){var u=Math.floor((t+r)/2);e[n][u]=e[n-1][u-1],o[n][u]=u;var h=n;t>n&&(h=Math.max(h,o[n][t-1]||0)),h=Math.max(h,o[n-1][u]||0);var f=u-1;r<e.length-1&&(f=Math.min(f,o[n][r+1]||0));for(var s,l,c,p=f;p>=h&&!((s=S(p,u,a,i))+e[n-1][h-1]>=e[n][u]);--p)(l=S(h,u,a,i)+e[n-1][h-1])<e[n][u]&&(e[n][u]=l,o[n][u]=h),h++,(c=s+e[n-1][p-1])<e[n][u]&&(e[n][u]=c,o[n][u]=p);x(t,u-1,n,e,o,a,i),x(u+1,r,n,e,o,a,i)}}function k(t,r){if(t.length!==r.length)throw new Error("sampleCovariance requires samples with equal lengths");if(t.length<2)throw new Error("sampleCovariance requires at least two data points in each sample");for(var e=n(t),o=n(r),a=0,i=0;i<t.length;i++)a+=(t[i]-e)*(r[i]-o);return a/(t.length-1)}function P(t){if(t.length<2)throw new Error("sampleVariance requires at least two data points");return e(t,2)/(t.length-1)}function D(t){var r=P(t);return Math.sqrt(r)}function C(t,r){var n,e,o,a,i=[];for(n=0;n<t.length;n++)if(1===r)i.push([t[n]]);else for(o=C(t.slice(n+1,t.length),r-1),e=0;e<o.length;e++)(a=o[e]).unshift(t[n]),i.push(a);return i}function I(t,r){for(var n=[],e=0;e<t.length;e++)if(1===r)n.push([t[e]]);else for(var o=I(t.slice(e,t.length),r-1),a=0;a<o.length;a++)n.push([t[e]].concat(o[a]));return n}function T(t,r,n,e){return(t*r+n*e)/(r+e)}function F(t){if(0===t.length)throw new Error("rootMeanSquare requires at least one data point");for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n],2);return Math.sqrt(r/t.length)}function N(){this.totalCount=0,this.data={}}function R(){this.weights=[],this.bias=0}function A(t,r,n){var e;if(void 0===r)e=U.gaussian;else if("string"==typeof r){if(!U[r])throw new Error('Unknown kernel "'+r+'"');e=U[r]}else e=r;var o;if(void 0===n)o=G.nrd(t);else if("string"==typeof n){if(!G[n])throw new Error('Unknown bandwidth method "'+n+'"');o=G[n](t)}else o=n;return function(r){var n=0,a=0;for(n=0;n<t.length;n++)a+=e((r-t[n])/o);return a/o/t.length}}function _(t){for(var r=t,n=t,e=1;e<15;e++)r+=n*=t*t/(2*e+1);return Math.round(1e4*(.5+r/H*Math.exp(-t*t/2)))/1e4}function z(t){var r=1/(1+.5*Math.abs(t)),n=r*Math.exp(-Math.pow(t,2)-1.26551223+1.00002368*r+.37409196*Math.pow(r,2)+.09678418*Math.pow(r,3)-.18628806*Math.pow(r,4)+.27886807*Math.pow(r,5)-1.13520398*Math.pow(r,6)+1.48851587*Math.pow(r,7)-.82215223*Math.pow(r,8)+.17087277*Math.pow(r,9));return t>=0?1-n:n-1}function V(t){var r=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),n=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*r)+Math.log(1-t*t)/2,2)-Math.log(1-t*t)/r)-(2/(Math.PI*r)+Math.log(1-t*t)/2));return t>=0?n:-n}function j(t){if("number"==typeof t)return t<0?-1:0===t?0:1;throw new TypeError("not a number")}N.prototype.train=function(t,r){this.data[r]||(this.data[r]={});for(var n in t){var e=t[n];void 0===this.data[r][n]&&(this.data[r][n]={}),void 0===this.data[r][n][e]&&(this.data[r][n][e]=0),this.data[r][n][e]++}this.totalCount++},N.prototype.score=function(t){var r,n={};for(var e in t){var o=t[e];for(r in this.data)n[r]={},this.data[r][e]?n[r][e+"_"+o]=(this.data[r][e][o]||0)/this.totalCount:n[r][e+"_"+o]=0}var a={};for(r in n){a[r]=0;for(var i in n[r])a[r]+=n[r][i]}return a},R.prototype.predict=function(t){if(t.length!==this.weights.length)return null;for(var r=0,n=0;n<this.weights.length;n++)r+=this.weights[n]*t[n];return(r+=this.bias)>0?1:0},R.prototype.train=function(t,r){if(0!==r&&1!==r)return null;t.length!==this.weights.length&&(this.weights=t,this.bias=1);var n=this.predict(t);if(n!==r){for(var e=r-n,o=0;o<this.weights.length;o++)this.weights[o]+=e*t[o];this.bias+=e}return this};for(var B=1e-4,K={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}},O=Math.sqrt(2*Math.PI),U={gaussian:function(t){return Math.exp(-.5*t*t)/O}},G={nrd:function(t){var r=D(t),n=M(t);return"number"==typeof n&&(r=Math.min(r,n/1.34)),1.06*r*Math.pow(t.length,-.2)}},H=Math.sqrt(2*Math.PI),L=[],W=0;W<=3.09;W+=.01)L.push(_(W));t.linearRegression=function(t){var r,n,e=t.length;if(1===e)r=0,n=t[0][1];else{for(var o,a,i,u=0,h=0,f=0,s=0,l=0;l<e;l++)u+=a=(o=t[l])[0],h+=i=o[1],f+=a*a,s+=a*i;n=h/e-(r=(e*s-u*h)/(e*f-u*u))*u/e}return{m:r,b:n}},t.linearRegressionLine=function(t){return function(r){return t.b+t.m*r}},t.standardDeviation=a,t.rSquared=function(t,r){if(t.length<2)return 1;for(var n,e=0,o=0;o<t.length;o++)e+=t[o][1];n=e/t.length;for(var a=0,i=0;i<t.length;i++)a+=Math.pow(n-t[i][1],2);for(var u=0,h=0;h<t.length;h++)u+=Math.pow(t[h][1]-r(t[h][0]),2);return 1-u/a},t.mode=function(t){return i(u(t))},t.modeFast=function(t){for(var r,n=new Map,e=0,o=0;o<t.length;o++){var a=n.get(t[o]);void 0===a?a=1:a++,a>e&&(r=t[o],e=a),n.set(t[o],a)}if(0===e)throw new Error("mode requires at last one data point");return r},t.modeSorted=i,t.min=h,t.max=f,t.minSorted=function(t){return t[0]},t.maxSorted=function(t){return t[t.length-1]},t.sum=r,t.sumSimple=function(t){for(var r=0,n=0;n<t.length;n++)r+=t[n];return r},t.product=function(t){for(var r=1,n=0;n<t.length;n++)r*=t[n];return r},t.quantile=p,t.quantileSorted=s,t.interquartileRange=M,t.iqr=M,t.medianAbsoluteDeviation=d,t.mad=d,t.chunk=function(t,r){var n=[];if(r<1)throw new Error("chunk size must be a positive number");if(Math.floor(r)!==r)throw new Error("chunk size must be an integer");for(var e=0;e<t.length;e+=r)n.push(t.slice(e,e+r));return n},t.sampleWithReplacement=function(t,r,n){if(0===t.length)return[];n=n||Math.random;for(var e=t.length,o=[],a=0;a<r;a++){var i=Math.floor(n()*e);o.push(t[i])}return o},t.shuffle=q,t.shuffleInPlace=b,t.sample=function(t,r,n){return q(t,n).slice(0,r)},t.ckmeans=function(t,r){if(r>t.length)throw new Error("cannot generate more classes than there are data values");var n=u(t);if(1===y(n))return[n];var e=E(r,n.length),o=E(r,n.length);!function(t,r,n){for(var e,o=r[0].length,a=t[Math.floor(o/2)],i=[],u=[],h=0;h<o;++h)e=t[h]-a,0===h?(i.push(e),u.push(e*e)):(i.push(i[h-1]+e),u.push(u[h-1]+e*e)),r[0][h]=S(0,h,i,u),n[0][h]=0;for(var f=1;f<r.length;++f)x(f<r.length-1?f:o-1,o-1,f,r,n,i,u)}(n,e,o);for(var a=[],i=o[0].length-1,h=o.length-1;h>=0;h--){var f=o[h][i];a[h]=n.slice(f,i+1),h>0&&(i=f-1)}return a},t.uniqueCountSorted=y,t.sumNthPowerDeviations=e,t.equalIntervalBreaks=function(t,r){if(t.length<2)return t;for(var n=h(t),e=f(t),o=[n],a=(e-n)/r,i=1;i<r;i++)o.push(o[0]+a*i);return o.push(e),o},t.sampleCovariance=k,t.sampleCorrelation=function(t,r){return k(t,r)/D(t)/D(r)},t.sampleVariance=P,t.sampleStandardDeviation=D,t.sampleSkewness=function(t){if(t.length<3)throw new Error("sampleSkewness requires at least three data points");for(var r,e=n(t),o=0,a=0,i=0;i<t.length;i++)o+=(r=t[i]-e)*r,a+=r*r*r;var u=t.length-1,h=Math.sqrt(o/u),f=t.length;return f*a/((f-1)*(f-2)*Math.pow(h,3))},t.sampleKurtosis=function(t){var r=t.length;if(r<4)throw new Error("sampleKurtosis requires at least four data points");for(var e,o=n(t),a=0,i=0,u=0;u<r;u++)a+=(e=t[u]-o)*e,i+=e*e*e*e;return(r-1)/((r-2)*(r-3))*(r*(r+1)*i/(a*a)-3*(r-1))},t.permutationsHeap=function(t){for(var r=new Array(t.length),n=[t.slice()],e=0;e<t.length;e++)r[e]=0;for(e=0;e<t.length;)if(r[e]<e){var o=0;e%2!=0&&(o=r[e]);var a=t[o];t[o]=t[e],t[e]=a,n.push(t.slice()),r[e]++,e=0}else r[e]=0,e++;return n},t.combinations=C,t.combinationsReplacement=I,t.addToMean=function(t,r,n){return t+(n-t)/(r+1)},t.combineMeans=T,t.combineVariances=function(t,r,n,e,o,a){var i=T(r,n,o,a);return(n*(t+Math.pow(r-i,2))+a*(e+Math.pow(o-i,2)))/(n+a)},t.geometricMean=function(t){if(0===t.length)throw new Error("geometricMean requires at least one data point");for(var r=1,n=0;n<t.length;n++){if(t[n]<=0)throw new Error("geometricMean requires only positive numbers as input");r*=t[n]}return Math.pow(r,1/t.length)},t.harmonicMean=function(t){if(0===t.length)throw new Error("harmonicMean requires at least one data point");for(var r=0,n=0;n<t.length;n++){if(t[n]<=0)throw new Error("harmonicMean requires only positive numbers as input");r+=1/t[n]}return t.length/r},t.average=n,t.mean=n,t.median=m,t.medianSorted=function(t){return s(t,.5)},t.subtractFromMean=function(t,r,n){return(t*r-n)/(r-1)},t.rootMeanSquare=F,t.rms=F,t.variance=o,t.tTest=function(t,r){return(n(t)-r)/(a(t)/Math.sqrt(t.length))},t.tTestTwoSample=function(t,r,e){var o=t.length,a=r.length;if(!o||!a)return null;e||(e=0);var i=n(t),u=n(r),h=P(t),f=P(r);if("number"==typeof i&&"number"==typeof u&&"number"==typeof h&&"number"==typeof f){var s=((o-1)*h+(a-1)*f)/(o+a-2);return(i-u-e)/Math.sqrt(s*(1/o+1/a))}},t.BayesianClassifier=N,t.bayesian=N,t.PerceptronModel=R,t.perceptron=R,t.epsilon=B,t.factorial=function(t){if(t<0)throw new Error("factorial requires a non-negative value");if(Math.floor(t)!==t)throw new Error("factorial requires an integer input");for(var r=1,n=2;n<=t;n++)r*=n;return r},t.bernoulliDistribution=function(t){if(t<0||t>1)throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");return[1-t,t]},t.binomialDistribution=function(t,r){if(!(r<0||r>1||t<=0||t%1!=0)){var n=0,e=0,o=[],a=1;do{o[n]=a*Math.pow(r,n)*Math.pow(1-r,t-n),e+=o[n],a=a*(t-++n+1)/n}while(e<1-B);return o}},t.poissonDistribution=function(t){if(!(t<=0)){var r=0,n=0,e=[],o=1;do{e[r]=Math.exp(-t)*Math.pow(t,r)/o,n+=e[r],o*=++r}while(n<1-B);return e}},t.chiSquaredDistributionTable=K,t.chiSquaredGoodnessOfFit=function(t,r,e){for(var o,a,i=0,u=r(n(t)),h=[],f=[],s=0;s<t.length;s++)void 0===h[t[s]]&&(h[t[s]]=0),h[t[s]]++;for(s=0;s<h.length;s++)void 0===h[s]&&(h[s]=0);for(a in u)a in h&&(f[+a]=u[a]*t.length);for(a=f.length-1;a>=0;a--)f[a]<3&&(f[a-1]+=f[a],f.pop(),h[a-1]+=h[a],h.pop());for(a=0;a<h.length;a++)i+=Math.pow(h[a]-f[a],2)/f[a];return o=h.length-1-1,K[o][e]<i},t.kernelDensityEstimation=A,t.kde=A,t.zScore=function(t,r,n){return(t-r)/n},t.cumulativeStdNormalProbability=function(t){var r=Math.abs(t),n=Math.min(Math.round(100*r),L.length-1);return t>=0?L[n]:+(1-L[n]).toFixed(4)},t.standardNormalTable=L,t.errorFunction=z,t.erf=z,t.inverseErrorFunction=V,t.probit=function(t){return 0===t?t=B:t>=1&&(t=1-B),Math.sqrt(2)*V(2*t-1)},t.bisect=function(t,r,n,e,o){if("function"!=typeof t)throw new TypeError("func must be a function");for(var a=0;a<e;a++){var i=(r+n)/2;if(0===t(i)||Math.abs((n-r)/2)<o)return i;j(t(i))===j(t(r))?r=i:n=i}throw new Error("maximum number of iterations exceeded")},t.quickselect=l,t.sign=j,t.numericSort=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=simple-statistics.min.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(5);
var ctx = __webpack_require__(11);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = exports.reduceDigit = exports.frequency = undefined;

var _typeof2 = __webpack_require__(78);

var _typeof3 = _interopRequireDefault(_typeof2);

var _map = __webpack_require__(22);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var frequency = exports.frequency = function frequency(arr) {
  return arr.reduce(function (acc, val) {
    return acc.set(val, 1 + (acc.get(val) || 0));
  }, new _map2.default());
};

var reduceDigit = exports.reduceDigit = function reduceDigit(arr, digit) {
  return (typeof arr === 'undefined' ? 'undefined' : (0, _typeof3.default)(arr)) === 'object' ? arr.map(function (_) {
    return parseFloat(_.toFixed(digit));
  }) : parseFloat(arr.toFixed(digit));
};

var flatten = exports.flatten = function flatten(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return depth !== 1 ? arr.reduce(function (a, v) {
    return a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v);
  }, []) : arr.reduce(function (a, v) {
    return a.concat(v);
  }, []);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(44);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(68)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(27)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(19);
var getIterFn = __webpack_require__(52);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(17);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(7);
var has = __webpack_require__(10);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(69);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(74);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(70);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(73).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
var global = __webpack_require__(2);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(10);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(5);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(13);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(3).f;
var create = __webpack_require__(30);
var redefineAll = __webpack_require__(59);
var ctx = __webpack_require__(11);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(23);
var $iterDefine = __webpack_require__(27);
var step = __webpack_require__(54);
var setSpecies = __webpack_require__(93);
var DESCRIPTORS = __webpack_require__(6);
var fastKey = __webpack_require__(39).fastKey;
var validate = __webpack_require__(43);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(4);
var meta = __webpack_require__(39);
var fails = __webpack_require__(14);
var hide = __webpack_require__(7);
var redefineAll = __webpack_require__(59);
var forOf = __webpack_require__(23);
var anInstance = __webpack_require__(60);
var isObject = __webpack_require__(8);
var setToStringTag = __webpack_require__(21);
var dP = __webpack_require__(3).f;
var each = __webpack_require__(94)(0);
var DESCRIPTORS = __webpack_require__(6);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(53);
var from = __webpack_require__(98);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(4);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(4);
var aFunction = __webpack_require__(44);
var ctx = __webpack_require__(11);
var forOf = __webpack_require__(23);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kendall = exports.SpearmanRankCorrelation = exports.CochransQ = exports.FriedmansS = exports.KruskalWallis = exports.Median = exports.ChiSquareForIndependence = exports.ChiSquareForHomogeneity = exports.McNemar = exports.WilcoxonRankSum = exports.Sign = exports.SiegelTukey = exports.Mood = exports.FishersExact = exports.KolmogorovSmirnov = exports.WaldWolfowitz = exports.MannWhitney = exports.LocationMedian = exports.Runs = exports.WilcoxonSignedRanks = exports.OneSampleSign = exports.Binomial = exports.LayardChiSquare = exports.BrownForsythe = exports.Levene = exports.ShapiroWilk = exports.Lilliefors = exports.KolmogorovSmirnovGoodnessOfFit = exports.ChiSquareGoodnessOfFit = undefined;

var _ChiSquareGoodnessOfFit = __webpack_require__(66);

var _ChiSquareGoodnessOfFit2 = _interopRequireDefault(_ChiSquareGoodnessOfFit);

var _KolmogorovSmirnovGoodnessOfFit = __webpack_require__(101);

var _KolmogorovSmirnovGoodnessOfFit2 = _interopRequireDefault(_KolmogorovSmirnovGoodnessOfFit);

var _Lilliefors = __webpack_require__(102);

var _Lilliefors2 = _interopRequireDefault(_Lilliefors);

var _ShapiroWilk = __webpack_require__(103);

var _ShapiroWilk2 = _interopRequireDefault(_ShapiroWilk);

var _Levene = __webpack_require__(104);

var _Levene2 = _interopRequireDefault(_Levene);

var _BrownForsythe = __webpack_require__(105);

var _BrownForsythe2 = _interopRequireDefault(_BrownForsythe);

var _LayardChiSquare = __webpack_require__(106);

var _LayardChiSquare2 = _interopRequireDefault(_LayardChiSquare);

var _Binomial = __webpack_require__(110);

var _Binomial2 = _interopRequireDefault(_Binomial);

var _OneSampleSign = __webpack_require__(111);

var _OneSampleSign2 = _interopRequireDefault(_OneSampleSign);

var _WilcoxonSignedRanks = __webpack_require__(112);

var _WilcoxonSignedRanks2 = _interopRequireDefault(_WilcoxonSignedRanks);

var _Runs = __webpack_require__(119);

var _Runs2 = _interopRequireDefault(_Runs);

var _LocationMedian = __webpack_require__(120);

var _LocationMedian2 = _interopRequireDefault(_LocationMedian);

var _MannWhitney = __webpack_require__(121);

var _MannWhitney2 = _interopRequireDefault(_MannWhitney);

var _WaldWolfowitz = __webpack_require__(122);

var _WaldWolfowitz2 = _interopRequireDefault(_WaldWolfowitz);

var _KolmogorovSmirnov = __webpack_require__(123);

var _KolmogorovSmirnov2 = _interopRequireDefault(_KolmogorovSmirnov);

var _FishersExact = __webpack_require__(124);

var _FishersExact2 = _interopRequireDefault(_FishersExact);

var _Mood = __webpack_require__(125);

var _Mood2 = _interopRequireDefault(_Mood);

var _SiegelTukey = __webpack_require__(126);

var _SiegelTukey2 = _interopRequireDefault(_SiegelTukey);

var _Sign = __webpack_require__(127);

var _Sign2 = _interopRequireDefault(_Sign);

var _WilcoxonRankSum = __webpack_require__(128);

var _WilcoxonRankSum2 = _interopRequireDefault(_WilcoxonRankSum);

var _McNemar = __webpack_require__(129);

var _McNemar2 = _interopRequireDefault(_McNemar);

var _ChiSquareForHomogeneity = __webpack_require__(130);

var _ChiSquareForHomogeneity2 = _interopRequireDefault(_ChiSquareForHomogeneity);

var _ChiSquareForIndependence = __webpack_require__(131);

var _ChiSquareForIndependence2 = _interopRequireDefault(_ChiSquareForIndependence);

var _Median = __webpack_require__(132);

var _Median2 = _interopRequireDefault(_Median);

var _KruskalWallis = __webpack_require__(133);

var _KruskalWallis2 = _interopRequireDefault(_KruskalWallis);

var _FriedmansS = __webpack_require__(134);

var _FriedmansS2 = _interopRequireDefault(_FriedmansS);

var _CochransQ = __webpack_require__(135);

var _CochransQ2 = _interopRequireDefault(_CochransQ);

var _SpearmanRankCorrelation = __webpack_require__(136);

var _SpearmanRankCorrelation2 = _interopRequireDefault(_SpearmanRankCorrelation);

var _Kendall = __webpack_require__(137);

var _Kendall2 = _interopRequireDefault(_Kendall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Correlation


// Tests for n Paired Samples


// Tests for n Independent Samples


// Chi Square Tests for Homogeneity and Independence


// Tests for Two Independent Samples
// - Location Problem


// Tests for One Sample
exports.ChiSquareGoodnessOfFit = _ChiSquareGoodnessOfFit2.default;
exports.KolmogorovSmirnovGoodnessOfFit = _KolmogorovSmirnovGoodnessOfFit2.default;
exports.Lilliefors = _Lilliefors2.default;
exports.ShapiroWilk = _ShapiroWilk2.default;
exports.Levene = _Levene2.default;
exports.BrownForsythe = _BrownForsythe2.default;
exports.LayardChiSquare = _LayardChiSquare2.default;
exports.Binomial = _Binomial2.default;
exports.OneSampleSign = _OneSampleSign2.default;
exports.WilcoxonSignedRanks = _WilcoxonSignedRanks2.default;
exports.Runs = _Runs2.default;
exports.LocationMedian = _LocationMedian2.default;
exports.MannWhitney = _MannWhitney2.default;
exports.WaldWolfowitz = _WaldWolfowitz2.default;
exports.KolmogorovSmirnov = _KolmogorovSmirnov2.default;
exports.FishersExact = _FishersExact2.default;
exports.Mood = _Mood2.default;
exports.SiegelTukey = _SiegelTukey2.default;
exports.Sign = _Sign2.default;
exports.WilcoxonRankSum = _WilcoxonRankSum2.default;
exports.McNemar = _McNemar2.default;
exports.ChiSquareForHomogeneity = _ChiSquareForHomogeneity2.default;
exports.ChiSquareForIndependence = _ChiSquareForIndependence2.default;
exports.Median = _Median2.default;
exports.KruskalWallis = _KruskalWallis2.default;
exports.FriedmansS = _FriedmansS2.default;
exports.CochransQ = _CochransQ2.default;
exports.SpearmanRankCorrelation = _SpearmanRankCorrelation2.default;
exports.Kendall = _Kendall2.default;

// Tests for Two Paired Samples

// - Scale Problem


// Tests for Homogeneity of Variance
// Tests of Goodness of Fit

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(17);

var _from2 = _interopRequireDefault(_from);

exports.default = ChiSquareGoodnessOfFit;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChiSquareGoodnessOfFit(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var pj = 1 / c;
  var df = c - 1;
  var avg = (0, _simpleStatistics.mean)(observed);
  var sumObserved = (0, _simpleStatistics.sum)(observed);
  var expected = (0, _from2.default)({ length: c }, function () {
    return sumObserved * pj;
  });
  var chiSqrCalc = (0, _simpleStatistics.sum)(expected.map(function (v, i) {
    return Math.pow(observed[i] - v, 2) / v;
  }));
  var chiSqrTable = function chiSqrTable(df, alpha) {
    return _simpleStatistics.chiSquaredDistributionTable[df][alpha];
  };
  var pValue = 0;
  var H0 = null;

  if (way.includes('two-way')) {
    pValue < alpha / 2 || 2 * pValue < alpha ? H0 = false : H0 = true;
  } else {
    pValue < alpha ? H0 = true : H0 = false;
  }

  return {
    c: c,
    observed: observed,
    expected: expected,
    avg: avg,
    sumObserved: sumObserved,
    pj: pj,
    df: df,
    chiSqrCalc: (0, _util.reduceDigit)(chiSqrCalc, digit),
    chiSqrTable: chiSqrTable(df, alpha),
    H0: H0,
    pValue: pValue
  };
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(75);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13);
var toLength = __webpack_require__(19);
var toAbsoluteIndex = __webpack_require__(72);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(11);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(36);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var toLength = __webpack_require__(19);
var createProperty = __webpack_require__(76);
var getIterFn = __webpack_require__(52);

$export($export.S + $export.F * !__webpack_require__(77)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(15);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(79);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(83);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
__webpack_require__(37);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(82);
var step = __webpack_require__(54);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(42);
__webpack_require__(89);
__webpack_require__(90);
module.exports = __webpack_require__(5).Symbol;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(47);
var META = __webpack_require__(39).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(21);
var uid = __webpack_require__(20);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(40);
var enumKeys = __webpack_require__(86);
var isArray = __webpack_require__(56);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(87);
var $GOPD = __webpack_require__(88);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f = $propertyIsEnumerable;
  __webpack_require__(55).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(41);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13);
var gOPN = __webpack_require__(57).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(41);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(45);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('asyncIterator');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('observable');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(18);
__webpack_require__(37);
__webpack_require__(92);
__webpack_require__(97);
__webpack_require__(99);
__webpack_require__(100);
module.exports = __webpack_require__(5).Map;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(58);
var validate = __webpack_require__(43);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(61)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(5);
var dP = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(11);
var IObject = __webpack_require__(49);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(19);
var asc = __webpack_require__(95);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(96);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(56);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(4);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(62)('Map') });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(23);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(63)('Map');


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(64)('Map');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(24);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(22);

var _map2 = _interopRequireDefault(_map);

exports.default = KolmogorovSmirnovGoodnessFit;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KolmogorovSmirnovGoodnessFit(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _util.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = (0, _simpleStatistics.sum)(Xf) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = (0, _simpleStatistics.sum)(XSubMeanXFrequencyX) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _util.reduceDigit)(Sx, digit),
    Xf: (0, _util.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _util.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _util.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _util.reduceDigit)(mean, digit),
    standardDeviation: (0, _util.reduceDigit)(standardDeviation, digit),
    variance: (0, _util.reduceDigit)(variance, digit),
    Z: (0, _util.reduceDigit)(Z, digit)
  };
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(24);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(22);

var _map2 = _interopRequireDefault(_map);

exports.default = Lilliefors;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lilliefors(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _util.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = (0, _simpleStatistics.sum)(Xf) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = (0, _simpleStatistics.sum)(XSubMeanXFrequencyX) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _util.reduceDigit)(Sx, digit),
    Xf: (0, _util.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _util.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _util.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _util.reduceDigit)(mean, digit),
    standardDeviation: (0, _util.reduceDigit)(standardDeviation, digit),
    variance: (0, _util.reduceDigit)(variance, digit),
    Z: (0, _util.reduceDigit)(Z, digit)
  };
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(24);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(22);

var _map2 = _interopRequireDefault(_map);

exports.default = ShapiroWilk;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapiroWilk(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _util.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = (0, _simpleStatistics.sum)(Xf) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = (0, _simpleStatistics.sum)(XSubMeanXFrequencyX) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _util.reduceDigit)(Sx, digit),
    Xf: (0, _util.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _util.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _util.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _util.reduceDigit)(mean, digit),
    standardDeviation: (0, _util.reduceDigit)(standardDeviation, digit),
    variance: (0, _util.reduceDigit)(variance, digit),
    Z: (0, _util.reduceDigit)(Z, digit)
  };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Levene;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function Levene(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var flatObserved = (0, _util.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var meanObserved = observed.map(function (v) {
    return (0, _simpleStatistics.mean)(v);
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return Math.abs(val - meanObserved[i]);
    });
  });
  var sumZi = Z.map(function (_, i) {
    return (0, _simpleStatistics.sum)(Z[i]);
  });
  var meanZi = sumZi.map(function (v, i) {
    return v / ni[i];
  });
  var meanZ = (0, _simpleStatistics.sum)(sumZi) / n;
  var SSB = (0, _simpleStatistics.sum)(ni.map(function (v, i) {
    return v * Math.pow(meanZi[i] - meanZ, 2);
  }));
  var SSW = (0, _simpleStatistics.sum)(Z.map(function (v, i) {
    return (0, _simpleStatistics.sum)(v.map(function (val) {
      return Math.pow(val - meanZi[i], 2);
    }));
  }));
  var MSB = SSB / (c - 1);
  var MSW = SSW / (n - c);
  var fCalc = MSB / MSW;
  // const fTable = F(k - 1, n - k, alpha);

  return {
    c: c,
    n: n,
    ni: ni,
    observed: observed,
    flatObserved: flatObserved,
    meanObserved: meanObserved,
    Z: Z,
    sumZi: sumZi,
    meanZi: meanZi,
    meanZ: meanZ,
    SSB: (0, _util.reduceDigit)(SSB, digit),
    SSW: (0, _util.reduceDigit)(SSW, digit),
    MSB: (0, _util.reduceDigit)(MSB, digit),
    MSW: (0, _util.reduceDigit)(MSW, digit),
    fCalc: (0, _util.reduceDigit)(fCalc, digit)
    // fTable
  };
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BrownForsythe;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function BrownForsythe(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var flatObserved = (0, _util.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var medianObserved = observed.map(function (v) {
    return (0, _simpleStatistics.median)(v);
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return Math.abs(val - medianObserved[i]);
    });
  });
  var sumZi = Z.map(function (_, i) {
    return (0, _simpleStatistics.sum)(Z[i]);
  });
  var meanZi = sumZi.map(function (v, i) {
    return v / ni[i];
  });
  var meanZ = (0, _simpleStatistics.sum)(sumZi) / n;
  var SSB = (0, _simpleStatistics.sum)(ni.map(function (v, i) {
    return v * Math.pow(meanZi[i] - meanZ, 2);
  }));
  var SSW = (0, _simpleStatistics.sum)(Z.map(function (v, i) {
    return (0, _simpleStatistics.sum)(v.map(function (val) {
      return Math.pow(val - meanZi[i], 2);
    }));
  }));
  var MSB = SSB / (c - 1);
  var MSW = SSW / (n - c);
  var fCalc = MSB / MSW;
  // const fTable = F(k - 1, n - k, alpha);

  return {
    c: c,
    n: n,
    ni: ni,
    observed: observed,
    flatObserved: flatObserved,
    medianObserved: medianObserved,
    Z: Z,
    sumZi: sumZi,
    meanZi: meanZi,
    meanZ: meanZ,
    SSB: (0, _util.reduceDigit)(SSB, digit),
    SSW: (0, _util.reduceDigit)(SSW, digit),
    MSB: (0, _util.reduceDigit)(MSB, digit),
    MSW: (0, _util.reduceDigit)(MSW, digit),
    fCalc: (0, _util.reduceDigit)(fCalc, digit)
    // fTable
  };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(107);

var _log2 = _interopRequireDefault(_log);

exports.default = LayardChiSquare;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LayardChiSquare(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var df = c - 1;
  var flatObserved = (0, _util.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var meanObserved = observed.map(function (v) {
    return (0, _simpleStatistics.mean)(v);
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return val - meanObserved[i];
    });
  });
  var SSW = Z.map(function (v, i) {
    return (0, _simpleStatistics.sum)(v.map(function (val) {
      return Math.pow(val, 2);
    }));
  });
  var SSSW = Z.map(function (v, i) {
    return (0, _simpleStatistics.sum)(v.map(function (val) {
      return Math.pow(val, 4);
    }));
  });
  var gamma = n * (0, _simpleStatistics.sum)(SSSW) / Math.pow((0, _simpleStatistics.sum)(SSW), 2) - 3;
  var T = 2 + (1 - c / n) * gamma;
  var sSqr = SSW.map(function (v) {
    return v / c;
  });
  var logsSqr = SSW.map(function (v) {
    return (0, _log2.default)(v / c);
  });
  var calc1 = (0, _simpleStatistics.sum)(ni.map(function (v, i) {
    return (v - 1) * logsSqr[i];
  })) / (0, _simpleStatistics.sum)(ni.map(function (v) {
    return v - 1;
  }));
  var calc2 = ni.map(function (v, i) {
    return (v - 1) * Math.pow(logsSqr[i] - calc1, 2);
  });
  var L = (0, _simpleStatistics.sum)(calc2) / T;
  var chiSqrTable = function chiSqrTable(df, alpha) {
    return _simpleStatistics.chiSquaredDistributionTable[df][alpha];
  };

  return {
    c: c,
    df: df,
    n: n,
    ni: ni,
    observed: observed,
    meanObserved: meanObserved,
    Z: Z,
    SSW: SSW,
    SSSW: SSSW,
    gamma: (0, _util.reduceDigit)(gamma, digit),
    T: (0, _util.reduceDigit)(T, digit),
    sSqr: (0, _util.reduceDigit)(sSqr, digit),
    logsSqr: (0, _util.reduceDigit)(logsSqr, digit),
    calc1: (0, _util.reduceDigit)(calc1, digit),
    calc2: (0, _util.reduceDigit)(calc2, digit),
    L: (0, _util.reduceDigit)(L, digit),
    chiSqrTable: chiSqrTable(df, alpha)
  };
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
module.exports = __webpack_require__(5).Math.log10;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(4);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(17);

var _from2 = _interopRequireDefault(_from);

exports.default = Binomial;

var _simpleStatistics = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Binomial(_ref) {
  var observed = _ref.observed,
      piZero = _ref.piZero,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var bCalc = (0, _simpleStatistics.sum)(observed);
  var w = way === 'one-way' ? 1 : 2;
  var Pb = (0, _from2.default)({ length: n + 1 }, function (_, i) {
    return (0, _simpleStatistics.combinations)(observed, i).length * Math.pow(piZero, i) * Math.pow(1 - piZero, n - i);
  });
  // TODO two-way
  var Pbi = Pb.reduce(function (acc, cur, i) {
    return acc.value > alpha / w ? { value: acc.value, index: acc.index } : { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    n: n,
    w: w,
    observed: observed,
    bCalc: bCalc,
    way: way,
    Pb: Pb,
    Pbi: Pbi
  };
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(17);

var _from2 = _interopRequireDefault(_from);

exports.default = OneSampleSign;

var _simpleStatistics = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OneSampleSign(_ref) {
  var observed = _ref.observed,
      M0 = _ref.M0,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var Di = observed.map(function (v) {
    return v - M0;
  });
  var delta = Di.map(function (v) {
    return v > 0 ? 1 : 0;
  });
  var k = (0, _simpleStatistics.sum)(delta);
  var Pk = (0, _from2.default)({ length: n + 1 }, function (_, i) {
    return (0, _simpleStatistics.combinations)(observed, i).length * Math.pow(1 / 2, i) * Math.pow(1 / 2, n - i);
  });

  return {
    n: n,
    observed: observed,
    Di: Di,
    delta: delta,
    k: k,
    Pk: Pk
  };
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(113);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(24);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = WilcoxonSignedRanks;

var _simpleStatistics = __webpack_require__(1);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: 0 no-return-assign: 0 */
function WilcoxonSignedRanks(_ref) {
  var observed = _ref.observed,
      M0 = _ref.M0,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var Di = observed.map(function (v) {
    return v - M0;
  });
  var delta = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v, i) {
    return v > 0 ? 1 : 0;
  });
  var absDi = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v) {
    return Math.abs(v);
  });
  var indexedAbsDi = absDi.map(function (v, i) {
    return { value: v, index: i };
  });
  var sort = function sort(f) {
    return function (x) {
      return [].concat((0, _toConsumableArray3.default)(x)).sort(f);
    };
  };
  var indexSortedAbsDi = [].concat((0, _toConsumableArray3.default)(indexedAbsDi)).sort(function (x, y) {
    return x.value > y.value ? 1 : x.value === y.value ? 0 : -1;
  });
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedAbsDi.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedAbsDi.map(function (item, i) {
      item['index'] = i;
      return item;
    }).filter(function (a) {
      return a.value === item;
    }).map(function (a) {
      return a.index + 1;
    });

    meanIndice[i] = indexes.map(function (x) {
      return (0, _simpleStatistics.mean)(indexes);
    });
  });
  var flatMeanIndice = (0, _util.flatten)(meanIndice);

  indexSortedAbsDi.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rAbsDi = indexedAbsDi.map(function (x) {
    return x.index;
  });
  var TPlus = (0, _simpleStatistics.sum)(rAbsDi.map(function (x, i) {
    return x * delta[i];
  }));

  return {
    n: n,
    observed: observed,
    Di: Di,
    delta: delta,
    absDi: absDi,
    rAbsDi: rAbsDi,
    TPlus: TPlus
  };
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(18);
__webpack_require__(37);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
module.exports = __webpack_require__(5).Set;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(58);
var validate = __webpack_require__(43);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(61)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(4);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(62)('Set') });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(63)('Set');


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(64)('Set');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Runs;

var _simpleStatistics = __webpack_require__(1);

function Runs(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = void 0,
      n1 = void 0,
      n2 = void 0,
      ind = void 0,
      meanX = void 0;
  var upDown = void 0;

  if (observed[0][0]) {
    meanX = (0, _simpleStatistics.mean)(observed[1]);
    upDown = observed[1].map(function (x) {
      return x > meanX ? 'U' : 'D';
    });
    n1 = observed[0].filter(function (x) {
      return x === 'M';
    }).length;
    n2 = observed[0].filter(function (x) {
      return x === 'W';
    }).length;
    n = n1 + n2;
  } else {
    n = observed.length;
    meanX = (0, _simpleStatistics.mean)(observed);
    upDown = observed.map(function (x) {
      return x > meanX ? 'U' : 'D';
    });
    ind = upDown.reduce(function (acc, cur) {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }

  return {
    n: n,
    observed: observed,
    meanX: meanX,
    upDown: upDown,
    ind: ind
  };
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LocationMedian;
function LocationMedian() {}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MannWhitney;
function MannWhitney() {}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WaldWolfowitz;
function WaldWolfowitz() {}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KolmogorovSmirnov;
function KolmogorovSmirnov() {}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FishersExact;
function FishersExact() {}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mood;
function Mood() {}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SiegelTukey;
function SiegelTukey() {}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sign;
function Sign() {}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WilcoxonRankSum;
function WilcoxonRankSum() {}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = McNemar;
function McNemar() {}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChiSquareForHomogeneity;
function ChiSquareForHomogeneity() {}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChiSquareForIndependence;
function ChiSquareForIndependence() {}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Median;
function Median() {}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = KruskalWallis;
function KruskalWallis() {}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FriedmansS;
function FriedmansS() {}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CochransQ;
function CochransQ() {}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpearmanRankCorrelation;
function SpearmanRankCorrelation() {}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Kendall;
function Kendall() {}

/***/ })
/******/ ]);
});
//# sourceMappingURL=nemene.js.map