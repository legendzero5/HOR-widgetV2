(()=>{var S,E,N={56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var c=[];function u(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],l=r[i]||0,s="".concat(i," ").concat(l),i=(r[i]=l+1,u(s)),l={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};-1!==i?(c[i].references++,c[i].updater(l)):(o=((t,e)=>{var r=e.domAPI(e);return r.update(t),function(e){e?e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer||r.update(t=e):r.remove()}})(l,t),t.byIndex=a,c.splice(a,0,{identifier:s,updater:o,references:1})),n.push(s)}return n}e.exports=function(e,o){var i=l(e=e||[],o=o||{});return function(e){e=e||[];for(var t=0;t<i.length;t++){var r=u(i[t]);c[r].references--}for(var e=l(e,o),n=0;n<i.length;n++){var a=u(i[n]);0===c[a].references&&(c[a].updater(),c.splice(a,1))}i=e}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},221:(e,t,r)=>{
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
r=r(540);function n(e,t){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(t);for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function s(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(n(299));return function(e,t,r,n){return{$$typeof:o,key:null==(n=3<arguments.length&&void 0!==n?n:null)?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=l.T,r=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=r,i.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,i.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&i.d.D(e)},t.preinit=function(e,t){var r,n,a,o;"string"==typeof e&&t&&"string"==typeof t.as&&(n=s(r=t.as,t.crossOrigin),a="string"==typeof t.integrity?t.integrity:void 0,o="string"==typeof t.fetchPriority?t.fetchPriority:void 0,"style"===r?i.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:a,fetchPriority:o}):"script"===r&&i.d.X(e,{crossOrigin:n,integrity:a,fetchPriority:o,nonce:"string"==typeof t.nonce?t.nonce:void 0}))},t.preinitModule=function(e,t){var r;"string"==typeof e&&("object"==typeof t&&null!==t?null!=t.as&&"script"!==t.as||(r=s(t.as,t.crossOrigin),i.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})):null==t&&i.d.M(e))},t.preload=function(e,t){var r,n;"string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as&&(n=s(r=t.as,t.crossOrigin),i.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0}))},t.preloadModule=function(e,t){var r;"string"==typeof e&&(t?(r=s(t.as,t.crossOrigin),i.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})):i.d.m(e))},t.requestFormReset=function(e){i.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return l.H.useFormState(e,t,r)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.1"},247:(a,o,e)=>{var r=e(982),O=e(540),e=e(961);
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function A(e,t){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(t);for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P(e){return e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType)}function z(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else for(e=t;0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;);return 3===t.tag?r:null}function M(e){if(13===e.tag){var t=e.memoizedState;if(null!==(t=null===t&&null!==(e=e.alternate)?e.memoizedState:t))return t.dehydrated}return null}function _(e){if(z(e)!==e)throw Error(A(188))}var v=Object.assign,j=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),X=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ne=(Symbol.for("react.scope"),Symbol.for("react.activity")),ae=(Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker"),Symbol.for("react.memo_cache_sentinel")),oe=(Symbol.for("react.view_transition"),Symbol.iterator);function ie(e){return null!==e&&"object"==typeof e&&"function"==typeof(e=oe&&e[oe]||e["@@iterator"])?e:null}var le=Symbol.for("react.client.reference");var se=Array.isArray,R=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function i(e){de<0||(e.current=ue[de],ue[de]=null,de--)}function f(e,t){ue[++de]=e.current,e.current=t}var pe=fe(null),he=fe(null),me=fe(null),ge=fe(null);function ve(e,t){switch(f(me,t),f(he,e),f(pe,null),t.nodeType){case 9:case 11:e=(e=(e=t.documentElement)&&e.namespaceURI)?Nu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=Cu(t=Nu(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}i(pe),f(pe,e)}function be(){i(pe),i(he),i(me)}function we(e){null!==e.memoizedState&&f(ge,e);var t=pe.current,r=Cu(t,e.type);t!==r&&(f(he,e),f(pe,r))}function ye(e){he.current===e&&(i(pe),i(he)),ge.current===e&&(i(ge),md._currentValue=ce)}var xe=Object.prototype.hasOwnProperty,ke=r.unstable_scheduleCallback,Se=r.unstable_cancelCallback,Ee=r.unstable_shouldYield,Ne=r.unstable_requestPaint,Ce=r.unstable_now,Oe=r.unstable_getCurrentPriorityLevel,Pe=r.unstable_ImmediatePriority,ze=r.unstable_UserBlockingPriority,Me=r.unstable_NormalPriority,_e=r.unstable_LowPriority,je=r.unstable_IdlePriority,De=r.log,Te=r.unstable_setDisableYieldValue,Le=null,Re=null;function Ae(e){if("function"==typeof De&&Te(e),Re&&"function"==typeof Re.setStrictMode)try{Re.setStrictMode(Le,e)}catch(e){}}var Fe=Math.clz32||function(e){return 0==(e>>>=0)?32:31-(We(e)/Ie|0)|0},We=Math.log,Ie=Math.LN2;var Be=256,He=4194304;function Ue(e){var t=42&e;if(0!=t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,r){var n,a,o,i,l=e.pendingLanes;return 0===l||(a=e.suspendedLanes,o=e.pingedLanes,e=e.warmLanes,(n=0)!=(i=134217727&l)?0!==(l=i&~a)?n=Ue(l):0!==(o&=i)?n=Ue(o):r||0!==(r=i&~e)&&(n=Ue(r)):0!=(i=l&~a)?n=Ue(i):0!==o?n=Ue(o):r||0!==(r=l&~e)&&(n=Ue(r)),0===n)?0:0!==t&&t!==n&&0==(t&a)&&((r=t&-t)<=(a=n&-n)||32==a&&0!=(4194048&r))?t:n}function $e(e,t){return 0==(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function qe(){var e=Be;return 0==(4194048&(Be<<=1))&&(Be=256),e}function Ve(){var e=He;return 0==(62914560&(He<<=1))&&(He=4194304),e}function Qe(e){for(var t=[],r=0;r<31;r++)t.push(e);return t}function Ge(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ke(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Fe(t);e.entangledLanes|=t,e.entanglements[n]=1073741824|e.entanglements[n]|4194090&r}function Xe(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Fe(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}function Ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Je(e){return 2<(e&=-e)?8<e?0!=(134217727&e)?32:268435456:8:2}function et(){var e=F.p;return 0!==e?e:void 0===(e=window.event)?32:Md(e.type)}var e=Math.random().toString(36).slice(2),p="__reactFiber$"+e,tt="__reactProps$"+e,rt="__reactContainer$"+e,nt="__reactEvents$"+e,at="__reactListeners$"+e,ot="__reactHandles$"+e,it="__reactResources$"+e,lt="__reactMarker$"+e;function st(e){delete e[p],delete e[tt],delete e[nt],delete e[at],delete e[ot]}function ct(e){var t=e[p];if(t)return t;for(var r=e.parentNode;r;){if(t=r[rt]||r[p]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=Iu(e);null!==e;){if(r=e[p])return r;e=Iu(e)}return t}r=(e=r).parentNode}return null}function ut(e){if(e=e[p]||e[rt]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function dt(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(A(33))}function ft(e){return e[it]||(e[it]={hoistableStyles:new Map,hoistableScripts:new Map})}function h(e){e[lt]=!0}var pt=new Set,ht={};function mt(e,t){gt(e,t),gt(e+"Capture",t)}function gt(e,t){for(ht[e]=t,e=0;e<t.length;e++)pt.add(t[e])}var vt,bt,wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yt={},xt={};function kt(e,t,r){if(a=t,xe.call(xt,a)||!xe.call(yt,a)&&(wt.test(a)?xt[a]=!0:void(yt[a]=!0)))if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var n=t.toLowerCase().slice(0,5);if("data-"!==n&&"aria-"!==n)return void e.removeAttribute(t)}e.setAttribute(t,""+r)}var a}function St(e,t,r){if(null===r)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+r)}}function Et(e,t,r,n){if(null===n)e.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(r)}e.setAttributeNS(t,r,""+n)}}function Nt(e){if(void 0===vt)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);vt=t&&t[1]||"",bt=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+vt+e+bt}var Ct=!1;function Ot(r,n){if(!r||Ct)return"";Ct=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(n){var e=function(){throw Error()};if(Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(e,[])}catch(e){var t=e}Reflect.construct(r,[],e)}else{try{e.call()}catch(e){t=e}r.call(e.prototype)}}else{try{throw Error()}catch(e){t=e}(e=r())&&"function"==typeof e.catch&&e.catch(function(){})}}catch(e){if(e&&t&&"string"==typeof e.stack)return[e.stack,t.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";(u=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name"))&&u.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=t.DetermineComponentFrameRoot(),o=a[0],i=a[1];if(o&&i){for(var l,s=o.split("\n"),c=i.split("\n"),u=t=0;t<s.length&&!s[t].includes("DetermineComponentFrameRoot");)t++;for(;u<c.length&&!c[u].includes("DetermineComponentFrameRoot");)u++;if(t===s.length||u===c.length)for(t=s.length-1,u=c.length-1;1<=t&&0<=u&&s[t]!==c[u];)u--;for(;1<=t&&0<=u;t--,u--)if(s[t]!==c[u]){if(1!==t||1!==u)do{if(t--,--u<0||s[t]!==c[u])return l="\n"+s[t].replace(" at new "," at "),l=r.displayName&&l.includes("<anonymous>")?l.replace("<anonymous>",r.displayName):l}while(1<=t&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=e}return(e=r?r.displayName||r.name:"")?Nt(e):""}function Pt(e){try{for(var t="";t+=(e=>{switch(e.tag){case 26:case 27:case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return Nt("Activity");default:return""}})(e),e=e.return;);return t}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Mt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function _t(e){e._valueTracker||(e._valueTracker=(e=>{var t,r,n=Mt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&void 0!==a&&"function"==typeof a.get&&"function"==typeof a.set)return t=a.get,r=a.set,Object.defineProperty(e,n,{configurable:!0,get:function(){return t.call(this)},set:function(e){o=""+e,r.call(this,e)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[n]}}})(e))}function jt(e){var t,r,n;if(e)return(t=e._valueTracker)?(r=t.getValue(),n="",(e=n=e?Mt(e)?e.checked?"true":"false":e.value:n)!==r&&(t.setValue(e),1)):1}function Dt(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(e){return t.body}}var Tt=/[\n"\\]/g;function Lt(e){return e.replace(Tt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Rt(e,t,r,n,a,o,i,l){e.name="",null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.type=i:e.removeAttribute("type"),null!=t?"number"===i?(0===t&&""===e.value||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):"submit"!==i&&"reset"!==i||e.removeAttribute("value"),null!=t?Ft(e,i,zt(t)):null!=r?Ft(e,i,zt(r)):null!=n&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l?e.name=""+zt(l):e.removeAttribute("name")}function At(e,t,r,n,a,o,i,l){if(null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.type=o),null!=t||null!=r){if(("submit"===o||"reset"===o)&&null==t)return;r=null!=r?""+zt(r):"",t=null!=t?""+zt(t):r,l||t===e.value||(e.value=t),e.defaultValue=t}n="function"!=typeof(n=null!=n?n:a)&&"symbol"!=typeof n&&!!n,e.checked=l?e.checked:!!n,e.defaultChecked=!!n,null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i&&(e.name=i)}function Ft(e,t,r){"number"===t&&Dt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Wt(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r)return e[a].selected=!0,void(n&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function It(e,t,r){null!=t&&((t=""+zt(t))!==e.value&&(e.value=t),null==r)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=null!=r?""+zt(r):""}function Bt(e,t,r,n){if(null==t){if(null!=n){if(null!=r)throw Error(A(92));if(se(n)){if(1<n.length)throw Error(A(93));n=n[0]}r=n}t=r=null==r?"":r}r=zt(t),e.defaultValue=r,(n=e.textContent)===r&&""!==n&&null!==n&&(e.value=n)}function Ht(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType)return void(r.nodeValue=t)}e.textContent=t}var Ut=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yt(e,t,r){var n=0===t.indexOf("--");null==r||"boolean"==typeof r||""===r?n?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":n?e.setProperty(t,r):"number"!=typeof r||0===r||Ut.has(t)?"float"===t?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function $t(e,t,r){if(null!=t&&"object"!=typeof t)throw Error(A(62));if(e=e.style,null!=r){for(var n in r)!r.hasOwnProperty(n)||null!=t&&t.hasOwnProperty(n)||(0===n.indexOf("--")?e.setProperty(n,""):"float"===n?e.cssFloat="":e[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&r[a]!==n&&Yt(e,a,n)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function qt(e){if(-1!==e.indexOf("-"))switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return;default:return 1}}var Vt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gt(e){return Qt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Kt=null;function Xt(e){return 3===(e=(e=e.target||e.srcElement||window).correspondingUseElement?e.correspondingUseElement:e).nodeType?e.parentNode:e}var Zt=null,Jt=null;function er(e){var t=ut(e);if(t&&(e=t.stateNode)){var r=e[tt]||null;switch(e=t.stateNode,t.type){case"input":if(Rt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=n[tt]||null;if(!a)throw Error(A(90));Rt(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<r.length;t++)(n=r[t]).form===e.form&&jt(n)}break;case"textarea":It(e,r.value,r.defaultValue);break;case"select":null!=(t=r.value)&&Wt(e,!!r.multiple,t,!1)}}}var tr=!1;function rr(e,t,r){if(tr)return e(t,r);tr=!0;try{e(t)}finally{if(tr=!1,(null!==Zt||null!==Jt)&&(vc(),Zt)&&(t=Zt,e=Jt,Jt=Zt=null,er(t),e))for(t=0;t<e.length;t++)er(e[t])}}function nr(e,t){var r=e.stateNode;if(null===r)return null;var n=r[tt]||null;if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":e=!(n=(n=!n.disabled)?n:!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e));break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(A(231,t,typeof r));return r}var e=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ar=!1;if(e)try{var t={};Object.defineProperty(t,"passive",{get:function(){ar=!0}}),window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(e){ar=!1}var or=null,ir=null,lr=null;function sr(){if(lr)return lr;for(var e=ir,t=e.length,r=("value"in or?or.value:or.textContent),n=r.length,a=0;a<t&&e[a]===r[a];a++);for(var o=t-a,i=1;i<=o&&e[t-i]===r[n-i];i++);return lr=r.slice(a,1<i?1-i:void 0)}function cr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,32<=(e=10===e?13:e)||13===e?e:0}function ur(){return!0}function dr(){return!1}function fr(i){function e(e,t,r,n,a){for(var o in this._reactName=e,this._targetInst=r,this.type=t,this.nativeEvent=n,this.target=a,this.currentTarget=null,i)i.hasOwnProperty(o)&&(e=i[o],this[o]=e?e(n):n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ur:dr,this.isPropagationStopped=dr,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),e}var pr,hr,mr,t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gr=fr(t),vr=v({},t,{view:0,detail:0}),br=fr(vr),wr=v({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(hr=mr&&"mousemove"===e.type?(pr=e.screenX-mr.screenX,e.screenY-mr.screenY):pr=0,mr=e),pr)},movementY:function(e){return"movementY"in e?e.movementY:hr}}),yr=fr(wr),xr=fr(v({},wr,{dataTransfer:0})),kr=fr(v({},vr,{relatedTarget:0})),Sr=fr(v({},t,{animationName:0,elapsedTime:0,pseudoElement:0})),Er=fr(v({},t,{clipboardData:function(e){return("clipboardData"in e?e:window).clipboardData}})),Nr=fr(v({},t,{data:0})),Cr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Or={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Pr[e])&&!!t[e]}function Mr(){return zr}var _r=fr(v({},vr,{key:function(e){if(e.key){var t=Cr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Or[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mr,charCode:function(e){return"keypress"===e.type?cr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),jr=fr(v({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Dr=fr(v({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mr})),Tr=fr(v({},t,{propertyName:0,elapsedTime:0,pseudoElement:0})),Lr=fr(v({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Rr=fr(v({},t,{newState:0,oldState:0})),Ar=[9,13,27,32],Fr=e&&"CompositionEvent"in window,vr=null,Wr=(e&&"documentMode"in document&&(vr=document.documentMode),e&&"TextEvent"in window&&!vr),Ir=e&&(!Fr||vr&&8<vr&&vr<=11),Br=String.fromCharCode(32),Hr=!1;function Ur(e,t){switch(e){case"keyup":return-1!==Ar.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return 1;default:return}}function Yr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $r=!1;var qr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?qr[e.type]:"textarea"===t}function Qr(e,t,r,n){Zt?Jt?Jt.push(n):Jt=[n]:Zt=n,0<(t=pu(t,"onChange")).length&&(r=new gr("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Gr=null,Kr=null;function Xr(e){iu(e,0)}function Zr(e){if(jt(dt(e)))return e}function Jr(e,t){if("change"===e)return t}var en=!1;function tn(){Gr&&(Gr.detachEvent("onpropertychange",rn),Kr=Gr=null)}function rn(e){var t;"value"===e.propertyName&&Zr(Kr)&&(Qr(t=[],Kr,e,Xt(e)),rr(Xr,t))}function nn(e,t,r){"focusin"===e?(tn(),Kr=r,(Gr=t).attachEvent("onpropertychange",rn)):"focusout"===e&&tn()}function an(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Zr(Kr)}function on(e,t){if("click"===e)return Zr(t)}function ln(e,t){if("input"===e||"change"===e)return Zr(t)}e&&(vr=e&&((wr="oninput"in document)||((t=document.createElement("div")).setAttribute("oninput","return;"),wr="function"==typeof t.oninput),wr),en=vr&&(!document.documentMode||9<document.documentMode));var sn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function cn(e,t){if(!sn(e,t)){if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!xe.call(t,a)||!sn(e[a],t[a]))return!1}}return!0}function un(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var r,n=un(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&t<=r)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=un(n)}}function fn(e){for(var t=Dt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(!r)break;t=Dt((e=t.contentWindow).document)}return t}function pn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var hn=e&&"documentMode"in document&&document.documentMode<=11,mn=null,gn=null,vn=null,bn=!1;function wn(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;bn||null==mn||mn!==Dt(n)||(n="selectionStart"in(n=mn)&&pn(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},vn&&cn(vn,n))||(vn=n,0<(n=pu(gn,"onSelect")).length&&(t=new gr("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=mn))}function yn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xn={animationend:yn("Animation","AnimationEnd"),animationiteration:yn("Animation","AnimationIteration"),animationstart:yn("Animation","AnimationStart"),transitionrun:yn("Transition","TransitionRun"),transitionstart:yn("Transition","TransitionStart"),transitioncancel:yn("Transition","TransitionCancel"),transitionend:yn("Transition","TransitionEnd")},kn={},Sn={};function En(e){if(kn[e])return kn[e];if(xn[e]){var t,r=xn[e];for(t in r)if(r.hasOwnProperty(t)&&t in Sn)return kn[e]=r[t]}return e}e&&(Sn=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);var Nn=En("animationend"),Cn=En("animationiteration"),On=En("animationstart"),t=En("transitionrun"),wr=En("transitionstart"),vr=En("transitioncancel"),Pn=En("transitionend"),zn=new Map,Mn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,t){zn.set(e,t),mt(t,[e])}Mn.push("scrollEnd");var jn=new WeakMap;function Dn(e,t){var r;return"object"==typeof e&&null!==e?void 0!==(r=jn.get(e))?r:(t={value:e,source:t,stack:Pt(t)},jn.set(e,t),t):{value:e,source:t,stack:Pt(t)}}var Tn=[],Ln=0,Rn=0;function An(){for(var e=Ln,t=Rn=Ln=0;t<e;){var r,n=Tn[t],a=(Tn[t++]=null,Tn[t]),o=(Tn[t++]=null,Tn[t]),i=(Tn[t++]=null,Tn[t]);(Tn[t++]=null)!==a&&null!==o&&(null===(r=a.pending)?o.next=o:(o.next=r.next,r.next=o),a.pending=o),0!==i&&Bn(n,o,i)}}function Fn(e,t,r,n){Tn[Ln++]=e,Tn[Ln++]=t,Tn[Ln++]=r,Tn[Ln++]=n,Rn|=n,e.lanes|=n,null!==(e=e.alternate)&&(e.lanes|=n)}function Wn(e,t,r,n){return Fn(e,t,r,n),Hn(e)}function In(e,t){return Fn(e,null,null,t),Hn(e)}function Bn(e,t,r){e.lanes|=r;var n=e.alternate;null!==n&&(n.lanes|=r);for(var a=!1,o=e.return;null!==o;)o.childLanes|=r,null!==(n=o.alternate)&&(n.childLanes|=r),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),o=(e=o).return;3===e.tag&&(o=e.stateNode,a)&&null!==t&&(a=31-Fe(r),null===(n=(e=o.hiddenUpdates)[a])?e[a]=[t]:n.push(t),t.lane=536870912|r)}function Hn(e){if(50<cc)throw cc=0,uc=null,Error(A(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Un={};function Yn(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,t,r,n){return new Yn(e,t,r,n)}function qn(e){return(e=e.prototype)&&e.isReactComponent}function Vn(e,t){var r=e.alternate;return null===r?((r=$n(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,(r.alternate=e).alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=65011712&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.dependencies=null===(t=e.dependencies)?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Qn(e,t){e.flags&=65011714;var r=e.alternate;return null===r?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,r,n,a,o){var i=0;if("function"==typeof(n=e))qn(e)&&(i=1);else if("string"==typeof e)i=((e,t,r)=>{if(1!==r&&null==t.itemProp)switch(e){case"meta":case"title":return 1;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return 1;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return 1}})(e,r,pe.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case ne:return(e=$n(31,r,t,a)).elementType=ne,e.lanes=o,e;case G:return Kn(r.children,a,o,t);case D:i=8,a|=24;break;case T:return(e=$n(12,r,t,2|a)).elementType=T,e.lanes=o,e;case J:return(e=$n(13,r,t,a)).elementType=J,e.lanes=o,e;case ee:return(e=$n(19,r,t,a)).elementType=ee,e.lanes=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case L:case X:i=10;break e;case K:i=9;break e;case Z:i=11;break e;case te:i=14;break e;case re:i=16,n=null;break e}i=29,r=Error(A(130,null===e?"null":typeof e,"")),n=null}return(t=$n(i,r,t,a)).elementType=e,t.type=n,t.lanes=o,t}function Kn(e,t,r,n){return(e=$n(7,e,n,t)).lanes=r,e}function Xn(e,t,r){return(e=$n(6,e,null,t)).lanes=r,e}function Zn(e,t,r){return(t=$n(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jn=[],ea=0,ta=null,ra=0,na=[],aa=0,oa=null,ia=1,la="";function sa(e,t){Jn[ea++]=ra,Jn[ea++]=ta,ta=e,ra=t}function ca(e,t,r){na[aa++]=ia,na[aa++]=la,na[aa++]=oa,oa=e;var n,a=ia,o=(e=la,32-Fe(a)-1),i=(a&=~(1<<o),r+=1,32-Fe(t)+o);la=30<i?(i=(a&(1<<(n=o-o%5))-1).toString(32),a>>=n,o-=n,ia=1<<32-Fe(t)+o|r<<o|a,i+e):(ia=1<<i|r<<o|a,e)}function ua(e){null!==e.return&&(sa(e,1),ca(e,1,0))}function da(e){for(;e===ta;)ta=Jn[--ea],Jn[ea]=null,ra=Jn[--ea],Jn[ea]=null;for(;e===oa;)oa=na[--aa],na[aa]=null,la=na[--aa],na[aa]=null,ia=na[--aa],na[aa]=null}var fa=null,m=null,W=!1,pa=null,ha=!1,ma=Error(A(519));function ga(e){throw ka(Dn(Error(A(418,"")),e)),ma}function va(e){var t=e.stateNode,r=e.type,n=e.memoizedProps;switch(t[p]=e,t[tt]=n,r){case"dialog":E("cancel",t),E("close",t);break;case"iframe":case"object":case"embed":E("load",t);break;case"video":case"audio":for(r=0;r<au.length;r++)E(au[r],t);break;case"source":E("error",t);break;case"img":case"image":case"link":E("error",t),E("load",t);break;case"details":E("toggle",t);break;case"input":E("invalid",t),At(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),_t(t);break;case"select":E("invalid",t);break;case"textarea":E("invalid",t),Bt(t,n.value,n.defaultValue,n.children),_t(t)}(t=!!("string"!=typeof(r=n.children)&&"number"!=typeof r&&"bigint"!=typeof r||t.textContent===""+r||!0===n.suppressHydrationWarning||wu(t.textContent,r))&&(null!=n.popover&&(E("beforetoggle",t),E("toggle",t)),null!=n.onScroll&&E("scroll",t),null!=n.onScrollEnd&&E("scrollend",t),null!=n.onClick&&(t.onclick=yu),!0))||ga(e)}function ba(e){for(fa=e.return;fa;)switch(fa.tag){case 5:case 13:return void(ha=!1);case 27:case 3:return void(ha=!0);default:fa=fa.return}}function wa(e){if(e!==fa)return!1;if(!W)return ba(e),!(W=!0);var t=e.tag,r=(r=3!==t&&27!==t)&&!(r=(r=5===t)?!("form"!==(r=e.type)&&"button"!==r)||Ou(e.type,e.memoizedProps):r);if(r&&m&&ga(e),ba(e),13===t){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType)if("/$"===(r=e.data)){if(0===t){m=Fu(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++;e=e.nextSibling}m=null}}else m=27===t?(t=m,Tu(e.type)?(e=Wu,Wu=null,e):t):fa?Fu(e.stateNode.nextSibling):null;return!0}function ya(){m=fa=null,W=!1}function xa(){var e=pa;return null!==e&&(null===Xs?Xs=e:Xs.push.apply(Xs,e),pa=null),e}function ka(e){null===pa?pa=[e]:pa.push(e)}var Sa=fe(null),Ea=null,Na=null;function Ca(e,t,r){f(Sa,t._currentValue),t._currentValue=r}function Oa(e){e._currentValue=Sa.current,i(Sa)}function Pa(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function za(e,t,r,n){var a=e.child;for(null!==a&&(a.return=e);null!==a;){if(null!==(l=a.dependencies)){var o=a.child;l=l.firstContext;e:for(;null!==l;){for(var i=l,l=a,s=0;s<t.length;s++)if(i.context===t[s]){l.lanes|=r,null!==(i=l.alternate)&&(i.lanes|=r),Pa(l.return,r,e),n||(o=null);break e}l=i.next}}else if(18===a.tag){if(null===(o=a.return))throw Error(A(341));o.lanes|=r,null!==(l=o.alternate)&&(l.lanes|=r),Pa(o,r,e),o=null}else o=a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===e){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}}function Ma(e,t,r,n){e=null;for(var a=t,o=!1;null!==a;){if(!o)if(0!=(524288&a.flags))o=!0;else if(0!=(262144&a.flags))break;if(10===a.tag){var i,l=a.alternate;if(null===l)throw Error(A(387));null!==(l=l.memoizedProps)&&(i=a.type,sn(a.pendingProps.value,l.value)||(null!==e?e.push(i):e=[i]))}else if(a===ge.current){if(null===(l=a.alternate))throw Error(A(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(md):e=[md])}a=a.return}null!==e&&za(t,e,r,n),t.flags|=262144}function _a(e){for(e=e.firstContext;null!==e;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ja(e){(Na=null)!==(e=(Ea=e).dependencies)&&(e.firstContext=null)}function Da(e){return La(Ea,e)}function Ta(e,t){return null===Ea&&ja(e),La(e,t)}function La(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},null===Na){if(null===e)throw Error(A(308));Na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Na=Na.next=t;return r}var Ra="undefined"!=typeof AbortController?AbortController:function(){var r=[],e=this.signal={aborted:!1,addEventListener:function(e,t){r.push(t)}};this.abort=function(){e.aborted=!0,r.forEach(function(e){return e()})}},Aa=r.unstable_scheduleCallback,Fa=r.unstable_NormalPriority,g={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wa(){return{controller:new Ra,data:new Map,refCount:0}}function Ia(e){e.refCount--,0===e.refCount&&Aa(Fa,function(){e.controller.abort()})}var Ba=null,Ha=0,Ua=0,Ya=null;function $a(){if(0==--Ha&&null!==Ba){null!==Ya&&(Ya.status="fulfilled");var e=Ba;Ya=Ba=null;for(var t=Ua=0;t<e.length;t++)(0,e[t])()}}var qa=R.S,Va=(R.S=function(e,t){var r;"object"==typeof t&&null!==t&&"function"==typeof t.then&&(null===Ba&&(r=Ba=[],Ua=Jc(),Ya={status:"pending",value:void(Ha=0),then:function(e){r.push(e)}}),Ha++,t.then($a,$a)),null!==qa&&qa(e,t)},fe(null));function Qa(){var e=Va.current;return null!==e?e:H.pooledCache}function Ga(e,t){f(Va,null===t?Va.current:t.pool)}function Ka(){var e=Qa();return null===e?null:{parent:g._currentValue,pool:e}}var Xa=Error(A(460)),Za=Error(A(474)),Ja=Error(A(542)),eo={then:function(){}};function to(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(){}function no(e,r,t){switch(void 0===(t=e[t])?e.push(r):t!==r&&(r.then(ro,ro),r=t),r.status){case"fulfilled":return r.value;case"rejected":throw io(e=r.reason),e;default:if("string"==typeof r.status)r.then(ro,ro);else{if(null!==(e=H)&&100<e.shellSuspendCounter)throw Error(A(482));(e=r).status="pending",e.then(function(e){var t;"pending"===r.status&&((t=r).status="fulfilled",t.value=e)},function(e){var t;"pending"===r.status&&((t=r).status="rejected",t.reason=e)})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw io(e=r.reason),e}throw ao=r,Xa}}var ao=null;function oo(){if(null===ao)throw Error(A(459));var e=ao;return ao=null,e}function io(e){if(e===Xa||e===Ja)throw Error(A(483))}var lo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,r){var n,a=e.updateQueue;return null===a?null:(a=a.shared,0!=(2&B)?(null===(n=a.pending)?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Hn(e),Bn(e,null,r),t):(Fn(e,a,t,r),Hn(e)))}function po(e,t,r){var n;null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194048&r))&&(n=t.lanes,n&=e.pendingLanes,Xe(e,t.lanes=r|=n))}function ho(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var a=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null}}while(null===o?a=o=i:o=o.next=i,null!==(r=r.next));null===o?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=r}else null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var mo=!1;function go(){if(mo&&null!==Ya)throw Ya}function vo(e,t,r,n){mo=!1;var a,o,i=e.updateQueue,l=(lo=!1,i.firstBaseUpdate),s=i.lastBaseUpdate;if(null!==(d=i.shared.pending)&&(i.shared.pending=null,o=(a=d).next,(a.next=null)===s?l=o:s.next=o,s=a,null!==(u=e.alternate))&&(d=(u=u.updateQueue).lastBaseUpdate)!==s&&(null===d?u.firstBaseUpdate=o:d.next=o,u.lastBaseUpdate=a),null!==l){for(var c=i.baseState,s=0,u=o=a=null,d=l;;){var f=(m=-536870913&d.lane)!==d.lane;if(f?(Y&m)===m:(n&m)===m){0!==m&&m===Ua&&(mo=!0),null!==u&&(u=u.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var p=e,h=d,m=t,g=r;switch(h.tag){case 1:if("function"==typeof(p=h.payload)){c=p.call(g,c,m);break e}c=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(m="function"==typeof(p=h.payload)?p.call(g,c,m):p))break e;c=v({},c,m);break e;case 2:lo=!0}}null!==(m=d.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[m]:f.push(m))}else f={lane:m,tag:d.tag,payload:d.payload,callback:d.callback,next:null},null===u?(o=u=f,a=c):u=u.next=f,s|=m;if(null===(d=d.next)){if(null===(d=i.shared.pending))break;d=(f=d).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===u&&(a=c),i.baseState=a,i.firstBaseUpdate=o,i.lastBaseUpdate=u,null===l&&(i.shared.lanes=0),$s|=s,e.lanes=s,e.memoizedState=c}}function bo(e,t){if("function"!=typeof e)throw Error(A(191,e));e.call(t)}function wo(e,t){var r=e.callbacks;if(null!==r)for(e.callbacks=null,e=0;e<r.length;e++)bo(r[e],t)}var yo=fe(null),xo=fe(0);function ko(e,t){f(xo,e=Ys),f(yo,t),Ys=e|t.baseLanes}function So(){f(xo,Ys),f(yo,yo.current)}function Eo(){Ys=xo.current,i(yo),i(xo)}var No=0,b=null,l=null,s=null,Co=!1,Oo=!1,Po=!1,zo=0,Mo=0,_o=null,jo=0;function n(){throw Error(A(321))}function Do(e,t){if(null!==t){for(var r=0;r<t.length&&r<e.length;r++)if(!sn(e[r],t[r]))return;return 1}}function To(e,t,r,n,a,o){return No=o,(b=t).memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?$i:qi,Po=!1,o=r(n,a),Po=!1,Oo&&(o=Ro(t,r,n,a)),Lo(e),o}function Lo(e){R.H=Yi;var t=null!==l&&null!==l.next;if(s=l=b=null,Co=!1,Mo=No=0,_o=null,t)throw Error(A(300));null===e||y||null!==(e=e.dependencies)&&_a(e)&&(y=!0)}function Ro(e,t,r,n){b=e;var a,o=0;do{if(Oo&&(_o=null),Mo=0,Oo=!1,25<=o)throw Error(A(301))}while(o+=1,(s=l=null)!=e.updateQueue&&((a=e.updateQueue).lastEffect=null,a.events=null,(a.stores=null)!=a.memoCache)&&(a.memoCache.index=0),R.H=Vi,a=t(r,n),Oo);return a}function Ao(){var e="function"==typeof(e=(t=R.H).useState()[0]).then?Uo(e):e,t=t.useState()[0];return(null!==l?l.memoizedState:null)!==t&&(b.flags|=1024),e}function Fo(){var e=0!==zo;return zo=0,e}function Wo(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Io(e){if(Co){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Co=!1}s=l=b=null,Oo=!1,Mo=zo=No=0,_o=null}function Bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===s?b.memoizedState=s=e:s=s.next=e,s}function c(){e=null===l?null!==(e=b.alternate)?e.memoizedState:null:l.next;var e,t=null===s?b.memoizedState:s.next;if(null!==t)s=t,l=e;else{if(null===e){if(null===b.alternate)throw Error(A(467));throw Error(A(310))}e={memoizedState:(l=e).memoizedState,baseState:l.baseState,baseQueue:l.baseQueue,queue:l.queue,next:null},null===s?b.memoizedState=s=e:s=s.next=e}return s}function Ho(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var t=Mo;return Mo+=1,e=no(_o=null===_o?[]:_o,e,t),t=b,null===(null===s?t.memoizedState:s.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?$i:qi),e}function Yo(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return Uo(e);if(e.$$typeof===X)return Da(e)}throw Error(A(438,String(e)))}function $o(e){var t,r=null,n=b.updateQueue;if(null==(r=null==(r=null!==n?n.memoCache:r)&&null!==(t=b.alternate)&&null!==(t=t.updateQueue)&&null!=(t=t.memoCache)?{data:t.data.map(function(e){return e.slice()}),index:0}:r)&&(r={data:[],index:0}),null===n&&(b.updateQueue=n=Ho()),n.memoCache=r,void 0===(n=r.data[r.index]))for(n=r.data[r.index]=Array(e),t=0;t<e;t++)n[t]=ae;return r.index++,n}function qo(e,t){return"function"==typeof t?t(e):t}function Vo(e){return Qo(c(),l,e)}function Qo(e,t,r){var n=e.queue;if(null===n)throw Error(A(311));n.lastRenderedReducer=r;var a,o=e.baseQueue,i=n.pending;if(null!==i&&(null!==o&&(a=o.next,o.next=i.next,i.next=a),t.baseQueue=o=i,n.pending=null),i=e.baseState,null===o)e.memoizedState=i;else{var l=a=null,s=null,c=t=o.next,u=!1;do{var d=-536870913&c.lane;if(d!==c.lane?(Y&d)===d:(No&d)===d){var f=c.revertLane;if(0===f)null!==s&&(s=s.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ua&&(u=!0);else{if((No&f)===f){c=c.next,f===Ua&&(u=!0);continue}d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(l=s=d,a=i):s=s.next=d,b.lanes|=f,$s|=f}d=c.action,Po&&r(i,d),i=c.hasEagerState?c.eagerState:r(i,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===s?(l=s=f,a=i):s=s.next=f,b.lanes|=d,$s|=d;c=c.next}while(null!==c&&c!==t);if(null===s?a=i:s.next=l,!sn(i,e.memoizedState)&&(y=!0,u)&&null!==(r=Ya))throw r;e.memoizedState=i,e.baseState=a,e.baseQueue=s,n.lastRenderedState=i}return null===o&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Go(e){var t=c(),r=t.queue;if(null===r)throw Error(A(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(null!==a){r.pending=null;for(var i=a=a.next;o=e(o,i.action),(i=i.next)!==a;);sn(o,t.memoizedState)||(y=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Ko(e,t,r){var n=b,a=c(),o=W;if(o){if(void 0===r)throw Error(A(407));r=r()}else r=t();var i=!sn((l||a).memoizedState,r);if(i&&(a.memoizedState=r,y=!0),a=a.queue,bi(2048,8,Jo.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||null!==s&&1&s.memoizedState.tag){if(n.flags|=2048,hi(9,mi(),Zo.bind(null,n,a,r,t),null),null===H)throw Error(A(349));o||0!=(124&No)||Xo(n,t,r)}return r}function Xo(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=b.updateQueue)?(b.updateQueue=t=Ho()).stores=[e]:null===(r=t.stores)?t.stores=[e]:r.push(e)}function Zo(e,t,r,n){t.value=r,t.getSnapshot=n,ei(t)&&ti(e)}function Jo(e,t,r){return r(function(){ei(t)&&ti(e)})}function ei(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sn(e,r)}catch(e){return 1}}function ti(e){var t=In(e,2);null!==t&&pc(t,0,2)}function ri(e){var t=Bo();if("function"==typeof e){var r=e;if(e=r(),Po){Ae(!0);try{r()}finally{Ae(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t}function ni(e,t,r,n){return e.baseState=r,Qo(e,l,"function"==typeof n?n:qo)}function ai(t,r){var e=r.action,n=r.payload,a=t.state;if(r.isTransition){var o=R.T,i={};R.T=i;try{var l=e(a,n),s=R.S;null!==s&&s(i,l),oi(t,r,l)}catch(e){li(t,r,e)}finally{R.T=o}}else try{oi(t,r,o=e(a,n))}catch(e){li(t,r,e)}}function oi(t,r,e){null!==e&&"object"==typeof e&&"function"==typeof e.then?e.then(function(e){ii(t,r,e)},function(e){return li(t,r,e)}):ii(t,r,e)}function ii(e,t,r){t.status="fulfilled",t.value=r,si(t),e.state=r,null!==(t=e.pending)&&((r=t.next)===t?e.pending=null:(r=r.next,ai(e,t.next=r)))}function li(e,t,r){var n=e.pending;if((e.pending=null)!==n)for(n=n.next;t.status="rejected",t.reason=r,si(t),(t=t.next)!==n;);e.action=null}function si(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ci(e,t){return t}function ui(e,t){if(W){var r=H.formState;if(null!==r){e:{var n=b;if(W){if(m){t:{for(var a=m,o=ha;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Fu(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){m=Fu(a.nextSibling),n="F!"===a.data;break e}}ga(n)}n=!1}n&&(t=r[0])}}return(r=Bo()).memoizedState=r.baseState=t,r.queue=n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},r=Fi.bind(null,b,n),n.dispatch=r,n=ri(!1),o=Ii.bind(null,b,!1,n.queue),(n=Bo()).queue=a={state:t,dispatch:null,action:e,pending:null},r=function(e,t,r,n,a){if(Bi(e))throw Error(A(485));var o;null!==(e=t.action)&&(o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}},null!==R.T?r(!0):o.isTransition=!1,n(o),null===(r=t.pending)?(o.next=t.pending=o,ai(t,o)):(o.next=r.next,t.pending=r.next=o))}.bind(null,b,a,o,r),a.dispatch=r,n.memoizedState=e,[t,r,!1]}function di(e){return fi(c(),l,e)}function fi(e,t,r){if(t=Qo(e,t,ci)[0],e=Vo(qo)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var n=Uo(t)}catch(e){if(e===Xa)throw Ja;throw e}else n=t;var a=(t=c()).queue,o=a.dispatch;return r!==t.memoizedState&&(b.flags|=2048,hi(9,mi(),function(e,t){e.action=t}.bind(null,a,r),null)),[n,o,e]}function pi(e){var t=c(),r=l;if(null!==r)return fi(t,r,e);c();var t=t.memoizedState,n=(r=c()).queue.dispatch;return r.memoizedState=e,[t,n,!1]}function hi(e,t,r,n){return e={tag:e,create:r,deps:n,inst:t,next:null},null===(t=b.updateQueue)&&(b.updateQueue=t=Ho()),null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,(r.next=e).next=n,t.lastEffect=e),e}function mi(){return{destroy:void 0,resource:void 0}}function gi(){return c().memoizedState}function vi(e,t,r,n){var a=Bo();n=void 0===n?null:n,b.flags|=e,a.memoizedState=hi(1|t,mi(),r,n)}function bi(e,t,r,n){var a=c(),o=(n=void 0===n?null:n,a.memoizedState.inst);null!==l&&null!==n&&Do(n,l.memoizedState.deps)?a.memoizedState=hi(t,o,r,n):(b.flags|=e,a.memoizedState=hi(1|t,o,r,n))}function wi(e,t){vi(8390656,8,e,t)}function yi(e,t){bi(2048,8,e,t)}function xi(e,t){return bi(4,2,e,t)}function ki(e,t){return bi(4,4,e,t)}function Si(e,t){var r;return"function"==typeof t?(e=e(),r=t(e),function(){"function"==typeof r?r():t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ei(e,t,r){r=null!=r?r.concat([e]):null,bi(4,4,Si.bind(null,t,e),r)}function Ni(){}function Ci(e,t){var r=c(),n=r.memoizedState;return null!==(t=void 0===t?null:t)&&Do(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Oi(e,t){var r=c(),n=r.memoizedState;if(null!==(t=void 0===t?null:t)&&Do(t,n[1]))return n[0];if(n=e(),Po){Ae(!0);try{e()}finally{Ae(!1)}}return r.memoizedState=[n,t],n}function Pi(e,t,r){return void 0===r||0!=(1073741824&No)?e.memoizedState=t:(e.memoizedState=r,e=fc(),b.lanes|=e,$s|=e,r)}function zi(e,t,r,n){return sn(r,t)?r:null!==yo.current?(e=Pi(e,r,n),sn(e,t)||(y=!0),e):0==(42&No)?(y=!0,e.memoizedState=r):(e=fc(),b.lanes|=e,$s|=e,t)}function Mi(t,r,e,n,a){var o,i,l,s=F.p,c=(F.p=0!==s&&s<8?s:8,R.T),u={};R.T=u,Ii(t,!1,r,e);try{var d=a(),f=R.S;null!==f&&f(u,d),null!==d&&"object"==typeof d&&"function"==typeof d.then?(o=n,i=[],l={status:"pending",value:null,reason:null,then:function(e){i.push(e)}},d.then(function(){l.status="fulfilled",l.value=o;for(var e=0;e<i.length;e++)(0,i[e])(o)},function(e){for(l.status="rejected",l.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),Wi(t,r,l,dc())):Wi(t,r,n,dc())}catch(e){Wi(t,r,{then:function(){},status:"rejected",reason:e},dc())}finally{F.p=s,R.T=c}}function _i(){}function ji(e,t,r,n){if(5!==e.tag)throw Error(A(476));var a=Di(e).queue;Mi(e,a,t,ce,null===r?_i:function(){return Ti(e),r(n)})}function Di(e){var t,r=e.memoizedState;return null===r&&((r={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:ce},next:null}).next={memoizedState:t={},baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},next:null},e.memoizedState=r,null!==(e=e.alternate))&&(e.memoizedState=r),r}function Ti(e){Wi(e,Di(e).next.queue,{},dc())}function Li(){return Da(md)}function Ri(){return c().memoizedState}function Ai(){return c().memoizedState}function Fi(e,t,r){Wi(e,t,r,dc())}function Wi(e,t,r,n){var a={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bi(e))Hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,sn(l,i))return Fn(e,t,a,0),null===H&&An()}catch(e){}if(null!==(r=Wn(e,t,a,n)))return pc(r,0,n),Ui(r,t,n)}}function Ii(e,t,r,n){if(n={lane:2,revertLane:Jc(),action:n,hasEagerState:!1,eagerState:null,next:null},Bi(e)){if(t)throw Error(A(479))}else null!==(t=Wn(e,r,n,2))&&pc(t,0,2)}function Bi(e){var t=e.alternate;return e===b||null!==t&&t===b}function Hi(e,t){Oo=Co=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ui(e,t,r){var n;0!=(4194048&r)&&(n=t.lanes,n&=e.pendingLanes,Xe(e,t.lanes=r|=n))}var Yi={readContext:Da,use:Yo,useCallback:n,useContext:n,useEffect:n,useImperativeHandle:n,useLayoutEffect:n,useInsertionEffect:n,useMemo:n,useReducer:n,useRef:n,useState:n,useDebugValue:n,useDeferredValue:n,useTransition:n,useSyncExternalStore:n,useId:n,useHostTransitionStatus:n,useFormState:n,useActionState:n,useOptimistic:n,useMemoCache:n,useCacheRefresh:n},$i={readContext:Da,use:Yo,useCallback:function(e,t){return Bo().memoizedState=[e,void 0===t?null:t],e},useContext:Da,useEffect:wi,useImperativeHandle:function(e,t,r){r=null!=r?r.concat([e]):null,vi(4194308,4,Si.bind(null,t,e),r)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){vi(4,2,e,t)},useMemo:function(e,t){var r=Bo(),n=(t=void 0===t?null:t,e());if(Po){Ae(!0);try{e()}finally{Ae(!1)}}return r.memoizedState=[n,t],n},useReducer:function(e,t,r){var n=Bo();if(void 0!==r){var a=r(t);if(Po){Ae(!0);try{r(t)}finally{Ae(!1)}}}else a=t;return n.memoizedState=n.baseState=a,e=(n.queue=e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a}).dispatch=function(e,t,r){var n=dc();r={lane:n,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Bi(e)?Hi(t,r):null!==(r=Wn(e,t,r,n))&&(pc(r,0,n),Ui(r,t,n))}.bind(null,b,e),[n.memoizedState,e]},useRef:function(e){return Bo().memoizedState=e={current:e}},useState:function(e){var t=(e=ri(e)).queue,r=Fi.bind(null,b,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Ni,useDeferredValue:function(e,t){return Pi(Bo(),e,t)},useTransition:function(){var e=ri(!1),e=Mi.bind(null,b,e.queue,!0,!1);return[!1,Bo().memoizedState=e]},useSyncExternalStore:function(e,t,r){var n=b,a=Bo();if(W){if(void 0===r)throw Error(A(407));r=r()}else{if(r=t(),null===H)throw Error(A(349));0==(124&Y)&&Xo(n,t,r)}var o={value:a.memoizedState=r,getSnapshot:t};return wi(Jo.bind(null,n,a.queue=o,e),[e]),n.flags|=2048,hi(9,mi(),Zo.bind(null,n,o,r,t),null),r},useId:function(){var e,t=Bo(),r=H.identifierPrefix;return W?(e=la,r="«"+r+"R"+(e=(ia&~(1<<32-Fe(ia)-1)).toString(32)+e),0<(e=zo++)&&(r+="H"+e.toString(32)),r+="»"):r="«"+r+"r"+(e=jo++).toString(32)+"»",t.memoizedState=r},useHostTransitionStatus:Li,useFormState:ui,useActionState:ui,useOptimistic:function(e){var t=Bo(),r=(t.memoizedState=t.baseState=e,{pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null});return t.queue=r,t=Ii.bind(null,b,!0,r),[e,r.dispatch=t]},useMemoCache:$o,useCacheRefresh:function(){return Bo().memoizedState=function(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var r=dc(),n=fo(t,e=uo(r),r);return null!==n&&(pc(n,0,r),po(n,t,r)),t={cache:Wa()},void(e.payload=t)}t=t.return}}.bind(null,b)}},qi={readContext:Da,use:Yo,useCallback:Ci,useContext:Da,useEffect:yi,useImperativeHandle:Ei,useInsertionEffect:xi,useLayoutEffect:ki,useMemo:Oi,useReducer:Vo,useRef:gi,useState:function(){return Vo(qo)},useDebugValue:Ni,useDeferredValue:function(e,t){return zi(c(),l.memoizedState,e,t)},useTransition:function(){var e=Vo(qo)[0],t=c().memoizedState;return["boolean"==typeof e?e:Uo(e),t]},useSyncExternalStore:Ko,useId:Ri,useHostTransitionStatus:Li,useFormState:di,useActionState:di,useOptimistic:function(e,t){return ni(c(),0,e,t)},useMemoCache:$o,useCacheRefresh:Ai},Vi={readContext:Da,use:Yo,useCallback:Ci,useContext:Da,useEffect:yi,useImperativeHandle:Ei,useInsertionEffect:xi,useLayoutEffect:ki,useMemo:Oi,useReducer:Go,useRef:gi,useState:function(){return Go(qo)},useDebugValue:Ni,useDeferredValue:function(e,t){var r=c();return null===l?Pi(r,e,t):zi(r,l.memoizedState,e,t)},useTransition:function(){var e=Go(qo)[0],t=c().memoizedState;return["boolean"==typeof e?e:Uo(e),t]},useSyncExternalStore:Ko,useId:Ri,useHostTransitionStatus:Li,useFormState:pi,useActionState:pi,useOptimistic:function(e,t){var r=c();return null!==l?ni(r,0,e,t):[r.baseState=e,r.queue.dispatch]},useMemoCache:$o,useCacheRefresh:Ai},Qi=null,Gi=0;function Ki(e){var t=Gi;return Gi+=1,no(Qi=null===Qi?[]:Qi,e,t)}function Xi(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zi(e,t){if(t.$$typeof===j)throw Error(A(525));throw e=Object.prototype.toString.call(t),Error(A(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ji(e){return(0,e._init)(e._payload)}function el(C){function O(e,t){var r;C&&(null===(r=e.deletions)?(e.deletions=[t],e.flags|=16):r.push(t))}function P(e,t){if(C)for(;null!==t;)O(e,t),t=t.sibling;return null}function z(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function M(e,t){return(e=Vn(e,t)).index=0,e.sibling=null,e}function _(e,t,r){if(e.index=r,C){if(null!==(r=e.alternate))return(r=r.index)<t?(e.flags|=67108866,t):r;e.flags|=67108866}else e.flags|=1048576;return t}function j(e){return C&&null===e.alternate&&(e.flags|=67108866),e}function o(e,t,r,n){return null===t||6!==t.tag?(t=Xn(r,e.mode,n)).return=e:(t=M(t,r)).return=e,t}function i(e,t,r,n){var a=r.type;return a===G?s(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===re&&Ji(a)===t.type)?Xi(t=M(t,r.props),r):Xi(t=Gn(r.type,r.key,r.props,null,e.mode,n),r),t.return=e,t)}function l(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=Zn(r,e.mode,n)).return=e:(t=M(t,r.children||[])).return=e,t}function s(e,t,r,n,a){return null===t||7!==t.tag?(t=Kn(r,e.mode,n,a)).return=e:(t=M(t,r)).return=e,t}function D(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Xn(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case V:return Xi(r=Gn(t.type,t.key,t.props,null,e.mode,r),t),r.return=e,r;case Q:return(t=Zn(t,e.mode,r)).return=e,t;case re:return D(e,t=(0,t._init)(t._payload),r)}if(se(t)||ie(t))return(t=Kn(t,e.mode,r,null)).return=e,t;if("function"==typeof t.then)return D(e,Ki(t),r);if(t.$$typeof===X)return D(e,Ta(e,t),r);Zi(0,t)}return null}function T(e,t,r,n){var a=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return null!==a?null:o(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case V:return r.key===a?i(e,t,r,n):null;case Q:return r.key===a?l(e,t,r,n):null;case re:return T(e,t,r=(a=r._init)(r._payload),n)}if(se(r)||ie(r))return null!==a?null:s(e,t,r,n,null);if("function"==typeof r.then)return T(e,t,Ki(r),n);if(r.$$typeof===X)return T(e,t,Ta(e,r),n);Zi(0,r)}return null}function L(e,t,r,n,a){if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return o(t,e=e.get(r)||null,""+n,a);if("object"==typeof n&&null!==n){switch(n.$$typeof){case V:return i(t,e=e.get(null===n.key?r:n.key)||null,n,a);case Q:return l(t,e=e.get(null===n.key?r:n.key)||null,n,a);case re:return L(e,t,r,n=(0,n._init)(n._payload),a)}if(se(n)||ie(n))return s(t,e=e.get(r)||null,n,a,null);if("function"==typeof n.then)return L(e,t,r,Ki(n),a);if(n.$$typeof===X)return L(e,t,r,Ta(t,n),a);Zi(0,n)}return null}function R(e,t,r,n){if("object"==typeof(r="object"==typeof r&&null!==r&&r.type===G&&null===r.key?r.props.children:r)&&null!==r){switch(r.$$typeof){case V:e:{for(var a=r.key;null!==t;){if(t.key===a){if((a=r.type)===G){if(7===t.tag){P(e,t.sibling),(n=M(t,r.props.children)).return=e,e=n;break e}}else if(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===re&&Ji(a)===t.type){P(e,t.sibling),Xi(n=M(t,r.props),r),n.return=e,e=n;break e}P(e,t);break}O(e,t),t=t.sibling}e=(r.type===G?n=Kn(r.props.children,e.mode,n,r.key):Xi(n=Gn(r.type,r.key,r.props,null,e.mode,n),r),n.return=e,n)}return j(e);case Q:e:{for(a=r.key;null!==t;){if(t.key===a){if(4===t.tag&&t.stateNode.containerInfo===r.containerInfo&&t.stateNode.implementation===r.implementation){P(e,t.sibling),(n=M(t,r.children||[])).return=e,e=n;break e}P(e,t);break}O(e,t),t=t.sibling}(n=Zn(r,e.mode,n)).return=e,e=n}return j(e);case re:return R(e,t,r=(a=r._init)(r._payload),n)}if(se(r)){var o=e;var i=t;var l=r;var s=n;for(var c=null,u=null,d=i,f=i=0,p=null;null!==d&&f<l.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var h=T(o,d,l[f],s);if(null===h){null===d&&(d=p);break}C&&d&&null===h.alternate&&O(o,d),i=_(h,i,f),null===u?c=h:u.sibling=h,u=h,d=p}if(f===l.length)P(o,d);else if(null===d)for(;f<l.length;f++)null!==(d=D(o,l[f],s))&&(i=_(d,i,f),null===u?c=d:u.sibling=d,u=d);else{for(d=z(d);f<l.length;f++)null!==(p=L(d,o,f,l[f],s))&&(C&&null!==p.alternate&&d.delete(null===p.key?f:p.key),i=_(p,i,f),null===u?c=p:u.sibling=p,u=p);C&&d.forEach(function(e){return O(o,e)})}return W&&sa(o,f),c;return}if(ie(r)){if("function"!=typeof(a=ie(r)))throw Error(A(150));r=a.call(r);var m=e,g=t,v=r,b=n;if(null==v)throw Error(A(151));for(var w=null,y=null,x=g,k=g=0,S=null,E=v.next();null!==x&&!E.done;k++,E=v.next()){x.index>k?(S=x,x=null):S=x.sibling;var N=T(m,x,E.value,b);if(null===N){null===x&&(x=S);break}C&&x&&null===N.alternate&&O(m,x),g=_(N,g,k),null===y?w=N:y.sibling=N,y=N,x=S}if(E.done)P(m,x);else if(null===x)for(;!E.done;k++,E=v.next())null!==(E=D(m,E.value,b))&&(g=_(E,g,k),null===y?w=E:y.sibling=E,y=E);else{for(x=z(x);!E.done;k++,E=v.next())null!==(E=L(x,m,k,E.value,b))&&(C&&null!==E.alternate&&x.delete(null===E.key?k:E.key),g=_(E,g,k),null===y?w=E:y.sibling=E,y=E);C&&x.forEach(function(e){return O(m,e)})}return W&&sa(m,k),w}if("function"==typeof r.then)return R(e,t,Ki(r),n);if(r.$$typeof===X)return R(e,t,Ta(e,r),n);Zi(0,r)}return"string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r?(r=""+r,(n=null!==t&&6===t.tag?(P(e,t.sibling),M(t,r)):(P(e,t),Xn(r,e.mode,n))).return=e,j(e=n)):P(e,t)}return function(t,r,e,n){try{Gi=0;var a=R(t,r,e,n);return Qi=null,a}catch(e){if(e===Xa||e===Ja)throw e;r=$n(29,e,null,t.mode);return r.lanes=n,r.return=t,r}}}var tl=el(!0),rl=el(!1),nl=fe(null),al=null;function ol(e){var t=e.alternate;f(w,1&w.current),f(nl,e),null!==al||null!==t&&null===yo.current&&null===t.memoizedState||(al=e)}function il(e){var t;22===e.tag?(f(w,w.current),f(nl,e),null===al&&null!==(t=e.alternate)&&null!==t.memoizedState&&(al=e)):ll()}function ll(){f(w,w.current),f(nl,nl.current)}function sl(e){i(nl),al===e&&(al=null),i(w)}var w=fe(0);function cl(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||Au(r)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t=(t.child.return=t).child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ul(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:v({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var dl={enqueueSetState:function(e,t,r){e=e._reactInternals;var n=dc(),a=uo(n);a.payload=t,null!=r&&(a.callback=r),null!==(t=fo(e,a,n))&&(pc(t,0,n),po(t,e,n))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=dc(),a=uo(n);a.tag=1,a.payload=t,null!=r&&(a.callback=r),null!==(t=fo(e,a,n))&&(pc(t,0,n),po(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=dc(),n=uo(r);n.tag=2,null!=t&&(n.callback=t),null!==(t=fo(e,n,r))&&(pc(t,0,r),po(t,e,r))}};function fl(e,t,r,n,a,o,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,i):!(t.prototype&&t.prototype.isPureReactComponent&&cn(r,n)&&cn(a,o))}function pl(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function hl(e,t){var r=t;if("ref"in t)for(var n in r={},t)"ref"!==n&&(r[n]=t[n]);if(e=e.defaultProps)for(var a in r===t&&(r=v({},r)),e)void 0===r[a]&&(r[a]=e[a]);return r}var ml="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function gl(e){ml(e)}function vl(e){console.error(e)}function bl(e){ml(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function yl(e,t,r){try{(0,e.onCaughtError)(r.value,{componentStack:r.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xl(e,t,r){return(r=uo(r)).tag=3,r.payload={element:null},r.callback=function(){wl(e,t)},r}function kl(e){return(e=uo(e)).tag=3,e}function Sl(e,t,r,n){var a,o=r.type.getDerivedStateFromError,i=("function"==typeof o&&(a=n.value,e.payload=function(){return o(a)},e.callback=function(){yl(t,r,n)}),r.stateNode);null!==i&&"function"==typeof i.componentDidCatch&&(e.callback=function(){yl(t,r,n),"function"!=typeof o&&(null===rc?rc=new Set([this]):rc.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})})}var El=Error(A(461)),y=!1;function Nl(e,t,r,n){t.child=null===e?rl(t,null,r,n):tl(t,e.child,r,n)}function Cl(e,t,r,n,a){r=r.render;var o=t.ref;if("ref"in n){var i,l={};for(i in n)"ref"!==i&&(l[i]=n[i])}else l=n;return ja(t),n=To(e,t,r,l,o,a),i=Fo(),null===e||y?(W&&i&&ua(t),t.flags|=1,Nl(e,t,n,a),t.child):(Wo(e,t,a),ql(e,t,a))}function Ol(e,t,r,n,a){var o;if(null===e)return"function"!=typeof(o=r.type)||qn(o)||void 0!==o.defaultProps||null!==r.compare?((e=Gn(r.type,null,n,t,t.mode,a)).ref=t.ref,(e.return=t).child=e):(t.tag=15,t.type=o,Pl(e,t,o,n,a));if(o=e.child,!Vl(e,a)){var i=o.memoizedProps;if((r=null!==(r=r.compare)?r:cn)(i,n)&&e.ref===t.ref)return ql(e,t,a)}return t.flags|=1,(e=Vn(o,n)).ref=t.ref,(e.return=t).child=e}function Pl(e,t,r,n,a){if(null!==e){var o=e.memoizedProps;if(cn(o,n)&&e.ref===t.ref){if(y=!1,t.pendingProps=n=o,!Vl(e,a))return t.lanes=e.lanes,ql(e,t,a);0!=(131072&e.flags)&&(y=!0)}}return jl(e,t,r,n,a)}function zl(e,t,r){var n=t.pendingProps,a=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0!=(128&t.flags)){if(n=null!==o?o.baseLanes|r:r,null!==e){for(a=t.child=e.child,o=0;null!==a;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Ml(e,t,n,r)}if(0==(536870912&r))return t.lanes=t.childLanes=536870912,Ml(e,t,null!==o?o.baseLanes|r:r,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ga(0,null!==o?o.cachePool:null),null!==o?ko(0,o):So(),il(t)}else null!==o?(Ga(0,o.cachePool),ko(0,o),ll(),t.memoizedState=null):(null!==e&&Ga(0,null),So(),ll());return Nl(e,t,a,r),t.child}function Ml(e,t,r,n){var a=null===(a=Qa())?null:{parent:g._currentValue,pool:a};return t.memoizedState={baseLanes:r,cachePool:a},null!==e&&Ga(0,null),So(),il(t),null!==e&&Ma(e,t,n,!0),null}function _l(e,t){var r=t.ref;if(null===r)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!=typeof r&&"object"!=typeof r)throw Error(A(284));null!==e&&e.ref===r||(t.flags|=4194816)}}function jl(e,t,r,n,a){return ja(t),r=To(e,t,r,n,void 0,a),n=Fo(),null===e||y?(W&&n&&ua(t),t.flags|=1,Nl(e,t,r,a),t.child):(Wo(e,t,a),ql(e,t,a))}function Dl(e,t,r,n,a,o){return ja(t),t.updateQueue=null,r=Ro(t,n,r,a),Lo(e),n=Fo(),null===e||y?(W&&n&&ua(t),t.flags|=1,Nl(e,t,r,o),t.child):(Wo(e,t,o),ql(e,t,o))}function Tl(e,t,r,n,a){var o,i,l,s,c,u,d,f,p;return ja(t),o=n=null===t.stateNode?(o=Un,o=new r(n,o="object"==typeof(s=r.contextType)&&null!==s?Da(s):o),t.memoizedState=null!=o.state?o.state:null,o.updater=dl,(t.stateNode=o)._reactInternals=t,(o=t.stateNode).props=n,o.state=t.memoizedState,o.refs={},so(t),s=r.contextType,o.context="object"==typeof s&&null!==s?Da(s):Un,o.state=t.memoizedState,"function"==typeof(s=r.getDerivedStateFromProps)&&(ul(t,0,s,n),o.state=t.memoizedState),"function"==typeof r.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(s=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),s!==o.state&&dl.enqueueReplaceState(o,o.state,null),vo(t,n,o,a),go(),o.state=t.memoizedState),"function"==typeof o.componentDidMount&&(t.flags|=4194308),!0):null===e?(o=t.stateNode,i=hl(r,d=t.memoizedProps),o.props=i,l=o.context,u=r.contextType,s=Un,"object"==typeof u&&null!==u&&(s=Da(u)),u="function"==typeof(c=r.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate,d=t.pendingProps!==d,u||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||!d&&l===s||pl(0,o,n,s),lo=!1,o.state=f=t.memoizedState,vo(t,n,o,a),go(),l=t.memoizedState,d||f!==l||lo?("function"==typeof c&&(ul(t,0,c,n),l=t.memoizedState),(i=lo||fl(t,r,i,n,f,l,s))?(u||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=s,i):("function"==typeof o.componentDidMount&&(t.flags|=4194308),!1)):(o=t.stateNode,co(e,t),u=hl(r,s=t.memoizedProps),o.props=u,c=t.pendingProps,f=o.context,l=r.contextType,i=Un,"object"==typeof l&&null!==l&&(i=Da(l)),(l="function"==typeof(d=r.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||s===c&&f===i||pl(0,o,n,i),lo=!1,o.state=f=t.memoizedState,vo(t,n,o,a),go(),p=t.memoizedState,s!==c||f!==p||lo||null!==e&&null!==e.dependencies&&_a(e.dependencies)?("function"==typeof d&&(ul(t,0,d,n),p=t.memoizedState),(u=lo||fl(t,r,u,n,f,p,i)||null!==e&&null!==e.dependencies&&_a(e.dependencies))?(l||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(n,p,i),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(n,p,i)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=p),o.props=n,o.state=p,o.context=i,u):("function"!=typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),!1)),_l(e,t),n=0!=(128&t.flags),e=o||n?(o=t.stateNode,r=n&&"function"!=typeof r.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&n?(t.child=tl(t,e.child,null,a),t.child=tl(t,null,r,a)):Nl(e,t,r,a),t.memoizedState=o.state,t.child):ql(e,t,a)}function Ll(e,t,r,n){return ya(),t.flags|=256,Nl(e,t,r,n),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Al(e){return{baseLanes:e,cachePool:Ka()}}function Fl(e,t,r){return e=null!==e?e.childLanes&~r:0,t&&(e|=Qs),e}function Wl(e,t,r){var n,a,o=t.pendingProps,i=!1,l=0!=(128&t.flags);if((a=(a=l)||(null===e||null!==e.memoizedState)&&0!=(2&w.current))&&(i=!0,t.flags&=-129),a=0!=(32&t.flags),t.flags&=-33,null===e){if(W){if(i?ol(t):ll(),W){var s,c=m;if(s=c){e:{for(s=c,c=ha;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=Fu(s.nextSibling))){c=null;break e}}c=s}s=null!==c&&(t.memoizedState={dehydrated:c,treeContext:null!==oa?{id:ia,overflow:la}:null,retryLane:536870912,hydrationErrors:null},(s=$n(18,null,null,0)).stateNode=c,(s.return=t).child=s,fa=t,!(m=null))}s||ga(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return Au(c)?t.lanes=32:t.lanes=536870912,null;sl(t)}return(c=o.children,o=o.fallback,i)?(ll(),c=Bl({mode:"hidden",children:c},i=t.mode),o=Kn(o,i,r,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=Al(r),i.childLanes=Fl(e,a,r),t.memoizedState=Rl,o):(ol(t),Il(t,c))}if(null===(s=e.memoizedState)||null===(c=s.dehydrated))return i?(ll(),i=o.fallback,c=t.mode,n=(s=e.child).sibling,(o=Vn(s,{mode:"hidden",children:o.children})).subtreeFlags=65011712&s.subtreeFlags,null!==n?i=Vn(n,i):(i=Kn(i,c,r,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,c=null===(c=e.child.memoizedState)?Al(r):(s=null!==(s=c.cachePool)?(n=g._currentValue,s.parent!==n?{parent:n,pool:n}:s):Ka(),{baseLanes:c.baseLanes|r,cachePool:s}),i.memoizedState=c,i.childLanes=Fl(e,a,r),t.memoizedState=Rl,o):(ol(t),e=(r=e.child).sibling,(r=Vn(r,{mode:"visible",children:o.children})).return=t,(r.sibling=null)!==e&&(null===(a=t.deletions)?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r);if(l)t=256&t.flags?(ol(t),t.flags&=-257,Hl(e,t,r)):null!==t.memoizedState?(ll(),t.child=e.child,t.flags|=128,null):(ll(),i=o.fallback,c=t.mode,o=Bl({mode:"visible",children:o.children},c),(i=Kn(i,c,r,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,tl(t,e.child,null,r),(o=t.child).memoizedState=Al(r),o.childLanes=Fl(e,a,r),t.memoizedState=Rl,i);else if(ol(t),Au(c))a=n=(a=c.nextSibling&&c.nextSibling.dataset)?a.dgst:n,(o=Error(A(419))).stack="",o.digest=a,ka({value:o,source:null,stack:null}),t=Hl(e,t,r);else if(y||Ma(e,t,r,!1),a=0!=(r&e.childLanes),y||a){if(null!==(a=H)&&0!==(o=0!=((o=0!=(42&(o=r&-r))?1:Ze(o))&(a.suspendedLanes|r))?0:o)&&o!==s.retryLane)throw In(e,s.retryLane=o),pc(a,0,o),El;"$?"!==c.data&&Sc(),t=Hl(e,t,r)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,m=Fu(c.nextSibling),fa=t,ha=!(W=!0),(pa=null)!==e&&(na[aa++]=ia,na[aa++]=la,na[aa++]=oa,ia=e.id,la=e.overflow,oa=t),(t=Il(t,o.children)).flags|=4096);return t}function Il(e,t){return((t=Bl({mode:"visible",children:t},e.mode)).return=e).child=t}function Bl(e,t){return(e=$n(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hl(e,t,r){return tl(t,e.child,null,r),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ul(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Pa(e.return,t,r)}function Yl(e,t,r,n,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function $l(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(Nl(e,t,n.children,r),0!=(2&(n=w.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ul(e,r,t);else if(19===e.tag)Ul(e,r,t);else if(null!==e.child){e=(e.child.return=e).child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(f(w,n),a){case"forwards":for(r=t.child,a=null;null!==r;)null!==(e=r.alternate)&&null===cl(e)&&(a=r),r=r.sibling;null===(r=a)?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Yl(t,!1,a,r,o);break;case"backwards":for(a=t.child,t.child=r=null;null!==a;){if(null!==(e=a.alternate)&&null===cl(e)){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Yl(t,!0,r,null,o);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ql(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),$s|=t.lanes,0==(r&t.childLanes)){if(null===e)return null;if(Ma(e,t,r,!1),0==(r&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(A(153));if(null!==t.child){for(r=Vn(e=t.child,e.pendingProps),(t.child=r).return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=Vn(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function Vl(e,t){return 0!=(e.lanes&t)||!(null===(e=e.dependencies)||!_a(e))}function Ql(e,t,r){if(null!==e)if(e.memoizedProps!==t.pendingProps)y=!0;else{if(!Vl(e,r)&&0==(128&t.flags)){y=!1;{var n=e;var a=t;var o=r;switch(a.tag){case 3:ve(a,a.stateNode.containerInfo),Ca(0,g,n.memoizedState.cache),ya();break;case 27:case 5:we(a);break;case 4:ve(a,a.stateNode.containerInfo);break;case 10:Ca(0,a.type,a.memoizedProps.value);break;case 13:var i=a.memoizedState;if(null!==i)return null!==i.dehydrated?(ol(a),a.flags|=128,null):0!=(o&a.child.childLanes)?Wl(n,a,o):(ol(a),null!==(n=ql(n,a,o))?n.sibling:null);ol(a);break;case 19:var l=0!=(128&n.flags);if((i=0!=(o&a.childLanes))||(Ma(n,a,o,!1),i=0!=(o&a.childLanes)),l){if(i)return $l(n,a,o);a.flags|=128}if(null!==(l=a.memoizedState)&&(l.rendering=null,l.tail=null,l.lastEffect=null),f(w,w.current),i)break;return null;case 22:case 23:return a.lanes=0,zl(n,a,o);case 24:Ca(0,g,n.memoizedState.cache)}return ql(n,a,o);return}}y=0!=(131072&e.flags)}else y=!1,W&&0!=(1048576&t.flags)&&ca(t,ra,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=(c=t.elementType)._init,c=s(c._payload);if("function"!=typeof(t.type=c)){if(null!=c){if((s=c.$$typeof)===Z){t.tag=11,t=Cl(null,t,c,e,r);break e}if(s===te){t.tag=14,t=Ol(null,t,c,e,r);break e}}throw t=function e(t){if(null!=t){if("function"==typeof t)return t.$$typeof!==le&&(t.displayName||t.name)||null;if("string"==typeof t)return t;switch(t){case G:return"Fragment";case T:return"Profiler";case D:return"StrictMode";case J:return"Suspense";case ee:return"SuspenseList";case ne:return"Activity"}if("object"==typeof t)switch(t.$$typeof){case Q:return"Portal";case X:return(t.displayName||"Context")+".Provider";case K:return(t._context.displayName||"Context")+".Consumer";case Z:var r=t.render;return t=(t=t.displayName)||(""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef");case te:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case re:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}}return null}(c)||c,Error(A(306,t,""))}t=(qn(c)?(e=hl(c,e),t.tag=1,Tl):(t.tag=0,jl))(null,t,c,e,r)}return t;case 0:return jl(e,t,t.type,t.pendingProps,r);case 1:return Tl(e,t,c=t.type,s=hl(c,t.pendingProps),r);case 3:e:{if(ve(t,t.stateNode.containerInfo),null===e)throw Error(A(387));c=t.pendingProps;var u=t.memoizedState,s=u.element,d=(co(e,t),vo(t,c,null,r),t.memoizedState);if(c=d.cache,Ca(0,g,c),c!==u.cache&&za(t,[g],r,!0),go(),c=d.element,u.isDehydrated){if(u={element:c,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,256&t.flags){t=Ll(e,t,c,r);break e}if(c!==s){ka(s=Dn(Error(A(424)),t)),t=Ll(e,t,c,r);break e}for(e=9===(e=t.stateNode.containerInfo).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,m=Fu(e.firstChild),W=!0,ha=!(pa=null),r=rl(fa=t,null,c,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ya(),c===s){t=ql(e,t,r);break e}Nl(e,t,c,r)}t=t.child}return t;case 26:return _l(e,t),null===e?(r=Gu(t.type,null,t.pendingProps,null))?t.memoizedState=r:W||(r=t.type,e=t.pendingProps,(c=Eu(me.current).createElement(r))[p]=t,c[tt]=e,C(c,r,e),h(c),t.stateNode=c):t.memoizedState=Gu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),null===e&&W&&(c=t.stateNode=Bu(t.type,t.pendingProps,me.current),ha=!0,s=m,m=Tu((fa=t).type)?(Wu=s,Fu(c.firstChild)):s),Nl(e,t,t.pendingProps.children,r),_l(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&W&&!(s=(s=c=m)&&null!==(c=((e,t,r,n)=>{for(;1===e.nodeType;){var a=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(n){if(!e[lt])switch(t){case"meta":if(e.hasAttribute("itemprop"))return e;break;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if((o=e.getAttribute("src"))===(null==a.src?null:a.src)&&e.getAttribute("type")===(null==a.type?null:a.type)&&e.getAttribute("crossorigin")===(null==a.crossOrigin?null:a.crossOrigin)||!o||!e.hasAttribute("async")||e.hasAttribute("itemprop"))return e;break;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Fu(e.nextSibling)))break}return null})(c,t.type,t.pendingProps,ha))&&(t.stateNode=c,fa=t,m=Fu(c.firstChild),!(ha=!1)))&&ga(t),we(t),s=t.type,u=t.pendingProps,d=null!==e?e.memoizedProps:null,c=u.children,Ou(s,u)?c=null:null!==d&&Ou(s,d)&&(t.flags|=32),null!==t.memoizedState&&(s=To(e,t,Ao,null,null,r),md._currentValue=s),_l(e,t),Nl(e,t,c,r),t.child;case 6:return null===e&&W&&!(e=(e=r=m)&&null!==(r=((e,t,r)=>{if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!r)return null;if(null===(e=Fu(e.nextSibling)))return null}return e})(r,t.pendingProps,ha))&&(t.stateNode=r,fa=t,!(m=null)))&&ga(t),null;case 13:return Wl(e,t,r);case 4:return ve(t,t.stateNode.containerInfo),c=t.pendingProps,null===e?t.child=tl(t,null,c,r):Nl(e,t,c,r),t.child;case 11:return Cl(e,t,t.type,t.pendingProps,r);case 7:return Nl(e,t,t.pendingProps,r),t.child;case 8:case 12:return Nl(e,t,t.pendingProps.children,r),t.child;case 10:return c=t.pendingProps,Ca(0,t.type,c.value),Nl(e,t,c.children,r),t.child;case 9:return s=t.type._context,c=t.pendingProps.children,ja(t),c=c(s=Da(s)),t.flags|=1,Nl(e,t,c,r),t.child;case 14:return Ol(e,t,t.type,t.pendingProps,r);case 15:return Pl(e,t,t.type,t.pendingProps,r);case 19:return $l(e,t,r);case 31:return c=t.pendingProps,r=t.mode,c={mode:c.mode,children:c.children},(r=null===e?Bl(c,r):Vn(e.child,c)).ref=t.ref,(t.child=r).return=t,t=r;case 22:return zl(e,t,r);case 24:return ja(t),c=Da(g),null===e?(null===(s=Qa())&&(s=H,u=Wa(),(s.pooledCache=u).refCount++,null!==u&&(s.pooledCacheLanes|=r),s=u),t.memoizedState={parent:c,cache:s},so(t),Ca(0,g,s)):(0!=(e.lanes&r)&&(co(e,t),vo(t,null,null,r),go()),s=e.memoizedState,u=t.memoizedState,s.parent!==c?(t.memoizedState=s={parent:c,cache:c},0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=s),Ca(0,g,c)):(c=u.cache,Ca(0,g,c),c!==s.cache&&za(t,[g],r,!0))),Nl(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(A(156,t.tag))}function Gl(e){e.flags|=4}function Kl(e,t){if("stylesheet"!==t.type||0!=(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!sd(t)){if(null!==(t=nl.current)&&((4194048&Y)===Y?null!==al:(62914560&Y)!==Y&&0==(536870912&Y)||t!==al))throw ao=eo,Za;e.flags|=8192}}function Xl(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ve():536870912,e.lanes|=t,Gs|=t)}function Zl(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":for(var r=e.tail,n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function u(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;null!==a;)r|=a.lanes|a.childLanes,n=(n|=65011712&a.subtreeFlags)|65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)r|=a.lanes|a.childLanes,n=(n|=a.subtreeFlags)|a.flags,a.return=e,a=a.sibling;e.subtreeFlags|=n,e.childLanes=r}function Jl(e,t){switch(da(t),t.tag){case 3:Oa(g),be();break;case 26:case 27:case 5:ye(t);break;case 4:be();break;case 13:sl(t);break;case 19:i(w);break;case 10:Oa(t.type);break;case 22:case 23:sl(t),Eo(),null!==e&&i(Va);break;case 24:Oa(g)}}function es(e,t){try{if(null!==(r=null!==(i=t.updateQueue)?i.lastEffect:null)){var r,n,a,o=r.next,i=o;do{}while((i.tag&e)===e&&(r=void 0,n=i.create,a=i.inst,r=n(),a.destroy=r),(i=i.next)!==o)}}catch(e){q(t,t.return,e)}}function ts(e,t,r){try{if(null!==(l=null!==(a=t.updateQueue)?a.lastEffect:null)){var n=l.next,a=n;do{if((a.tag&e)===e){var o=a.inst,i=o.destroy;if(void 0!==i){o.destroy=void 0;var l=t,s=r,c=i;try{c()}catch(e){q(l,s,e)}}}}while((a=a.next)!==n)}}catch(e){q(t,t.return,e)}}function rs(t){var e=t.updateQueue;if(null!==e){var r=t.stateNode;try{wo(e,r)}catch(e){q(t,t.return,e)}}}function ns(t,r,e){e.props=hl(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(e){q(t,r,e)}}function as(t,r){try{var e=t.ref;if(null!==e){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;default:n=t.stateNode}"function"==typeof e?t.refCleanup=e(n):e.current=n}}catch(e){q(t,r,e)}}function os(t,r){var e=t.ref,n=t.refCleanup;if(null!==e)if("function"==typeof n)try{n()}catch(e){q(t,r,e)}finally{(t.refCleanup=null)!=(t=t.alternate)&&(t.refCleanup=null)}else if("function"==typeof e)try{e(null)}catch(e){q(t,r,e)}else e.current=null}function is(t){var e=t.type,r=t.memoizedProps,n=t.stateNode;try{switch(e){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break;case"img":r.src?n.src=r.src:r.srcSet&&(n.srcset=r.srcSet)}}catch(e){q(t,t.return,e)}}function ls(t,e,r){try{var n=t.stateNode;((e,t,r,n)=>{switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a,o=null,i=null,l=null,s=null,c=null,u=null,d=null;for(p in r){var f=r[p];if(r.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":c=f;default:n.hasOwnProperty(p)||N(e,t,p,null,n,f)}}for(a in n){var p=n[a];if(f=r[a],n.hasOwnProperty(a)&&(null!=p||null!=f))switch(a){case"type":i=p;break;case"name":o=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":l=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(A(137,t));break;default:p!==f&&N(e,t,a,p,n,f)}}return Rt(e,l,s,c,u,d,i,o);case"select":for(i in p=l=s=a=null,r)if(c=r[i],r.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":p=c;default:n.hasOwnProperty(i)||N(e,t,i,null,n,c)}for(o in n)if(i=n[o],c=r[o],n.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":a=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&N(e,t,o,i,n,c)}return t=s,r=l,n=p,null!=a?Wt(e,!!r,a,!1):!!n!=!!r&&(null!=t?Wt(e,!!r,t,!0):Wt(e,!!r,r?[]:"",!1));case"textarea":for(s in p=a=null,r)if(o=r[s],r.hasOwnProperty(s)&&null!=o&&!n.hasOwnProperty(s))switch(s){case"value":case"children":break;default:N(e,t,s,null,n,o)}for(l in n)if(o=n[l],i=r[l],n.hasOwnProperty(l)&&(null!=o||null!=i))switch(l){case"value":a=o;break;case"defaultValue":p=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(A(91));break;default:o!==i&&N(e,t,l,o,n,i)}return It(e,a,p);case"option":for(var h in r)a=r[h],r.hasOwnProperty(h)&&null!=a&&!n.hasOwnProperty(h)&&("selected"===h?e.selected=!1:N(e,t,h,null,n,a));for(c in n)a=n[c],p=r[c],!n.hasOwnProperty(c)||a===p||null==a&&null==p||("selected"===c?e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:N(e,t,c,a,n,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in r)a=r[m],r.hasOwnProperty(m)&&null!=a&&!n.hasOwnProperty(m)&&N(e,t,m,null,n,a);for(u in n)if(a=n[u],p=r[u],n.hasOwnProperty(u)&&a!==p&&(null!=a||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=a)throw Error(A(137,t));break;default:N(e,t,u,a,n,p)}return;default:if(qt(t)){for(var g in r)a=r[g],r.hasOwnProperty(g)&&void 0!==a&&!n.hasOwnProperty(g)&&xu(e,t,g,void 0,n,a);for(d in n)a=n[d],p=r[d],!n.hasOwnProperty(d)||a===p||void 0===a&&void 0===p||xu(e,t,d,a,n,p);return}}for(var v in r)a=r[v],r.hasOwnProperty(v)&&null!=a&&!n.hasOwnProperty(v)&&N(e,t,v,null,n,a);for(f in n)a=n[f],p=r[f],!n.hasOwnProperty(f)||a===p||null==a&&null==p||N(e,t,f,a,n,p)})(n,t.type,r,e),n[tt]=e}catch(e){q(t,t.return,e)}}function ss(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Tu(e.type)||4===e.tag}function cs(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ss(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Tu(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e=(e.child.return=e).child}if(!(2&e.flags))return e.stateNode}}function us(e,t,r){var n=e.tag;if(5===n||6===n)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(4!==n&&(27===n&&Tu(e.type)&&(r=e.stateNode),null!==(e=e.child)))for(us(e,t,r),e=e.sibling;null!==e;)us(e,t,r),e=e.sibling}function ds(t){var e=t.stateNode,r=t.memoizedProps;try{for(var n=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);C(e,n,r),e[p]=t,e[tt]=r}catch(e){q(t,t.return,e)}}var fs=!1,x=!1,ps=!1,hs="function"==typeof WeakSet?WeakSet:Set,I=null;function ms(e,t,r){var n=r.flags;switch(r.tag){case 0:case 11:case 15:Ns(e,r),4&n&&es(5,r);break;case 1:if(Ns(e,r),4&n)if(e=r.stateNode,null===t)try{e.componentDidMount()}catch(e){q(r,r.return,e)}else{var a=hl(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){q(r,r.return,e)}}64&n&&rs(r),512&n&&as(r,r.return);break;case 3:if(Ns(e,r),64&n&&null!==(e=r.updateQueue)){if((t=null)!==r.child)switch(r.child.tag){case 27:case 5:case 1:t=r.child.stateNode}try{wo(e,t)}catch(e){q(r,r.return,e)}}break;case 27:null===t&&4&n&&ds(r);case 26:case 5:Ns(e,r),null===t&&4&n&&is(r),512&n&&as(r,r.return);break;case 12:Ns(e,r);break;case 13:if(Ns(e,r),4&n&&ws(e,r),64&n&&null!==(e=r.memoizedState)&&null!==(e=e.dehydrated)){r=function(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),Wc(e,r)}.bind(null,r);{var o=e;var i=r;var l,s=o.ownerDocument;"$?"!==o.data||"complete"===s.readyState?i():(l=function(){i(),s.removeEventListener("DOMContentLoaded",l)},s.addEventListener("DOMContentLoaded",l),o._reactRetry=l)}}break;case 22:(n=null!==r.memoizedState||fs)||(t=null!==t&&null!==t.memoizedState||x,a=fs,o=x,fs=n,(x=t)&&!o?function e(t,r,n){n=n&&0!=(8772&r.subtreeFlags);for(r=r.child;null!==r;){var a=r.alternate,o=t,i=r,l=i.flags;switch(i.tag){case 0:case 11:case 15:e(o,i,n),es(4,i);break;case 1:if(e(o,i,n),"function"==typeof(o=(a=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(e){q(a,a.return,e)}if(null!==(o=(a=i).updateQueue)){var s=a.stateNode;try{var c=o.shared.hiddenCallbacks;if(null!==c)for(o.shared.hiddenCallbacks=null,o=0;o<c.length;o++)bo(c[o],s)}catch(e){q(a,a.return,e)}}n&&64&l&&rs(i),as(i,i.return);break;case 27:ds(i);case 26:case 5:e(o,i,n),n&&null===a&&4&l&&is(i),as(i,i.return);break;case 12:e(o,i,n);break;case 13:e(o,i,n),n&&4&l&&ws(o,i);break;case 22:null===i.memoizedState&&e(o,i,n),as(i,i.return);break;case 30:break;default:e(o,i,n)}r=r.sibling}}(e,r,0!=(8772&r.subtreeFlags)):Ns(e,r),fs=a,x=o);break;case 30:break;default:Ns(e,r)}}var d=null,gs=!1;function vs(e,t,r){for(r=r.child;null!==r;)bs(e,t,r),r=r.sibling}function bs(e,t,r){if(Re&&"function"==typeof Re.onCommitFiberUnmount)try{Re.onCommitFiberUnmount(Le,r)}catch(e){}switch(r.tag){case 26:x||os(r,t),vs(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode).parentNode.removeChild(r);break;case 27:x||os(r,t);var n=d,a=gs;Tu(r.type)&&(d=r.stateNode,gs=!1),vs(e,t,r),Hu(r.stateNode),d=n,gs=a;break;case 5:x||os(r,t);case 6:if(n=d,a=gs,d=null,vs(e,t,r),gs=a,null!==(d=n))if(gs)try{(9===d.nodeType?d.body:"HTML"===d.nodeName?d.ownerDocument.body:d).removeChild(r.stateNode)}catch(e){q(r,t,e)}else try{d.removeChild(r.stateNode)}catch(e){q(r,t,e)}break;case 18:null!==d&&(gs?(Lu(9===(e=d).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,r.stateNode),Qd(e)):Lu(d,r.stateNode));break;case 4:n=d,a=gs,d=r.stateNode.containerInfo,gs=!0,vs(e,t,r),d=n,gs=a;break;case 0:case 11:case 14:case 15:x||ts(2,r,t),x||ts(4,r,t),vs(e,t,r);break;case 1:x||(os(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount&&ns(r,t,n)),vs(e,t,r);break;case 21:vs(e,t,r);break;case 22:x=(n=x)||null!==r.memoizedState,vs(e,t,r),x=n;break;default:vs(e,t,r)}}function ws(e,t){if(null===t.memoizedState&&null!==(e=t.alternate)&&null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))try{Qd(e)}catch(e){q(t,t.return,e)}}function ys(r,e){var n=(e=>{switch(e.tag){case 13:case 19:var t=e.stateNode;return t=null===t?e.stateNode=new hs:t;case 22:return t=null===(t=(e=e.stateNode)._retryCache)?e._retryCache=new hs:t;default:throw Error(A(435,e.tag))}})(r);e.forEach(function(e){var t=function(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(A(314))}null!==n&&n.delete(t),Wc(e,r)}.bind(null,r,e);n.has(e)||(n.add(e),e.then(t,t))})}function xs(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var a=r[n],o=e,i=t,l=i;e:for(;null!==l;){switch(l.tag){case 27:if(Tu(l.type)){d=l.stateNode,gs=!1;break e}break;case 5:d=l.stateNode,gs=!1;break e;case 3:case 4:d=l.stateNode.containerInfo,gs=!0;break e}l=l.return}if(null===d)throw Error(A(160));bs(o,i,a),gs=!1,(d=null)!==(o=a.alternate)&&(o.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ss(t,e),t=t.sibling}var ks=null;function Ss(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xs(e,t),Es(t),4&n&&(ts(3,t,t.return),es(3,t),ts(5,t,t.return));break;case 1:xs(e,t),Es(t),512&n&&(x||null===r||os(r,r.return)),64&n&&fs&&null!==(t=t.updateQueue)&&null!==(n=t.callbacks)&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=null===r?n:r.concat(n));break;case 26:var a=ks;if(xs(e,t),Es(t),512&n&&(x||null===r||os(r,r.return)),4&n){var o=null!==r?r.memoizedState:null,n=t.memoizedState;if(null===r)if(null===n)if(null===t.stateNode){e:{n=t.type,r=t.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":(!(o=a.getElementsByTagName("title")[0])||o[lt]||o[p]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=a.createElement(n),a.head.insertBefore(o,a.querySelector("head > title"))),C(o,n,r),o[p]=t,h(o),n=o;break e;case"link":var i=id("link","href",a).get(n+(r.href||""));if(i)for(var l=0;l<i.length;l++)if((o=i[l]).getAttribute("href")===(null==r.href||""===r.href?null:r.href)&&o.getAttribute("rel")===(null==r.rel?null:r.rel)&&o.getAttribute("title")===(null==r.title?null:r.title)&&o.getAttribute("crossorigin")===(null==r.crossOrigin?null:r.crossOrigin)){i.splice(l,1);break t}C(o=a.createElement(n),n,r),a.head.appendChild(o);break;case"meta":if(i=id("meta","content",a).get(n+(r.content||"")))for(l=0;l<i.length;l++)if((o=i[l]).getAttribute("content")===(null==r.content?null:""+r.content)&&o.getAttribute("name")===(null==r.name?null:r.name)&&o.getAttribute("property")===(null==r.property?null:r.property)&&o.getAttribute("http-equiv")===(null==r.httpEquiv?null:r.httpEquiv)&&o.getAttribute("charset")===(null==r.charSet?null:r.charSet)){i.splice(l,1);break t}C(o=a.createElement(n),n,r),a.head.appendChild(o);break;default:throw Error(A(468,n))}o[p]=t,h(o),n=o}t.stateNode=n}else ld(a,t.type,t.stateNode);else t.stateNode=td(a,n,t.memoizedProps);else o!==n?(null===o?null!==r.stateNode&&(r=r.stateNode).parentNode.removeChild(r):o.count--,null===n?ld(a,t.type,t.stateNode):td(a,n,t.memoizedProps)):null===n&&null!==t.stateNode&&ls(t,t.memoizedProps,r.memoizedProps)}break;case 27:xs(e,t),Es(t),512&n&&(x||null===r||os(r,r.return)),null!==r&&4&n&&ls(t,t.memoizedProps,r.memoizedProps);break;case 5:if(xs(e,t),Es(t),512&n&&(x||null===r||os(r,r.return)),32&t.flags){a=t.stateNode;try{Ht(a,"")}catch(e){q(t,t.return,e)}}4&n&&null!=t.stateNode&&ls(t,a=t.memoizedProps,null!==r?r.memoizedProps:a),1024&n&&(ps=!0);break;case 6:if(xs(e,t),Es(t),4&n){if(null===t.stateNode)throw Error(A(162));n=t.memoizedProps,r=t.stateNode;try{r.nodeValue=n}catch(e){q(t,t.return,e)}}break;case 3:if(od=null,a=ks,ks=$u(e.containerInfo),xs(e,t),ks=a,Es(t),4&n&&null!==r&&r.memoizedState.isDehydrated)try{Qd(e.containerInfo)}catch(e){q(t,t.return,e)}ps&&(ps=!1,function e(t){if(1024&t.subtreeFlags)for(t=t.child;null!==t;){var r=t;e(r),5===r.tag&&1024&r.flags&&r.stateNode.reset(),t=t.sibling}}(t));break;case 4:n=ks,ks=$u(t.stateNode.containerInfo),xs(e,t),Es(t),ks=n;break;case 12:xs(e,t),Es(t);break;case 13:xs(e,t),Es(t),8192&t.child.flags&&null!==t.memoizedState!=(null!==r&&null!==r.memoizedState)&&(Js=Ce()),4&n&&null!==(n=t.updateQueue)&&(t.updateQueue=null,ys(t,n));break;case 22:var a=null!==t.memoizedState,s=null!==r&&null!==r.memoizedState,c=fs,u=x;if(fs=c||a,x=u||s,xs(e,t),x=u,fs=c,Es(t),8192&n)e:for(e=t.stateNode,e._visibility=a?-2&e._visibility:1|e._visibility,!a||null===r||s||fs||x||function e(t){for(t=t.child;null!==t;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:ts(4,r,r.return),e(r);break;case 1:os(r,r.return);var n=r.stateNode;"function"==typeof n.componentWillUnmount&&ns(r,r.return,n),e(r);break;case 27:Hu(r.stateNode);case 26:case 5:os(r,r.return),e(r);break;case 22:null===r.memoizedState&&e(r);break;default:e(r)}t=t.sibling}}(t),r=null,e=t;;){if(5===e.tag||26===e.tag){if(null===r){s=r=e;try{var d,f,o=s.stateNode;a?"function"==typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none":(l=s.stateNode,f=null!=(d=s.memoizedProps.style)&&d.hasOwnProperty("display")?d.display:null,l.style.display=null==f||"boolean"==typeof f?"":(""+f).trim())}catch(e){q(s,s.return,e)}}}else if(6===e.tag){if(null===r){s=e;try{s.stateNode.nodeValue=a?"":s.memoizedProps}catch(e){q(s,s.return,e)}}}else if((22!==e.tag&&23!==e.tag||null===e.memoizedState||e===t)&&null!==e.child){e=(e.child.return=e).child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;r===e&&(r=null),e=e.return}r===e&&(r=null),e.sibling.return=e.return,e=e.sibling}4&n&&null!==(n=t.updateQueue)&&null!==(r=n.retryQueue)&&(n.retryQueue=null,ys(t,r));break;case 19:xs(e,t),Es(t),4&n&&null!==(n=t.updateQueue)&&(t.updateQueue=null,ys(t,n));break;case 30:case 21:break;default:xs(e,t),Es(t)}}function Es(t){var e=t.flags;if(2&e){try{for(var r,n=t.return;null!==n;){if(ss(n)){r=n;break}n=n.return}if(null==r)throw Error(A(160));switch(r.tag){case 27:var a=r.stateNode;us(t,cs(t),a);break;case 5:var o=r.stateNode;32&r.flags&&(Ht(o,""),r.flags&=-33),us(t,cs(t),o);break;case 3:case 4:var i=r.stateNode.containerInfo;!function e(t,r,n){var a=t.tag;if(5===a||6===a)t=t.stateNode,r?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(t,r):((r=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(t),null==(n=n._reactRootContainer)&&null===r.onclick&&(r.onclick=yu));else if(4!==a&&(27===a&&Tu(t.type)&&(n=t.stateNode,r=null),null!==(t=t.child)))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(t,cs(t),i);break;default:throw Error(A(161))}}catch(e){q(t,t.return,e)}t.flags&=-3}4096&e&&(t.flags&=-4097)}function Ns(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)ms(e,t.alternate,t),t=t.sibling}function Cs(e,t){var r=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),(e=(e=null)!==t.memoizedState&&null!==t.memoizedState.cachePool?t.memoizedState.cachePool.pool:e)!==r&&(null!=e&&e.refCount++,null!=r)&&Ia(r)}function Os(e,t){(e=null)!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e)&&Ia(e)}function Ps(e,t,r,n){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)zs(e,t,r,n),t=t.sibling}function zs(e,t,r,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ps(e,t,r,n),2048&a&&es(9,t);break;case 1:Ps(e,t,r,n);break;case 3:Ps(e,t,r,n),2048&a&&((e=null)!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e)&&(t.refCount++,null!=e)&&Ia(e);break;case 12:if(2048&a){Ps(e,t,r,n),e=t.stateNode;try{var o=t.memoizedProps,i=o.id,l=o.onPostCommit;"function"==typeof l&&l(i,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(e){q(t,t.return,e)}}else Ps(e,t,r,n);break;case 13:Ps(e,t,r,n);break;case 23:break;case 22:o=t.stateNode,i=t.alternate,null!==t.memoizedState?2&o._visibility?Ps(e,t,r,n):Ms(e,t):2&o._visibility?Ps(e,t,r,n):(o._visibility|=2,function e(t,r,n,a,o){o=o&&0!=(10256&r.subtreeFlags);for(r=r.child;null!==r;){var i=t,l=r,s=n,c=a,u=l.flags;switch(l.tag){case 0:case 11:case 15:e(i,l,s,c,o),es(8,l);break;case 23:break;case 22:var d=l.stateNode;null!==l.memoizedState?2&d._visibility?e(i,l,s,c,o):Ms(i,l):(d._visibility|=2,e(i,l,s,c,o)),o&&2048&u&&Cs(l.alternate,l);break;case 24:e(i,l,s,c,o),o&&2048&u&&Os(l.alternate,l);break;default:e(i,l,s,c,o)}r=r.sibling}}(e,t,r,n,0!=(10256&t.subtreeFlags))),2048&a&&Cs(i,t);break;case 24:Ps(e,t,r,n),2048&a&&Os(t.alternate,t);break;default:Ps(e,t,r,n)}}function Ms(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var r=e,n=t,a=n.flags;switch(n.tag){case 22:Ms(r,n),2048&a&&Cs(n.alternate,n);break;case 24:Ms(r,n),2048&a&&Os(n.alternate,n);break;default:Ms(r,n)}t=t.sibling}}var _s=8192;function js(e){if(e.subtreeFlags&_s)for(e=e.child;null!==e;)Ds(e),e=e.sibling}function Ds(e){switch(e.tag){case 26:js(e),e.flags&_s&&null!==e.memoizedState&&((e,t,r)=>{if(null===cd)throw Error(A(475));var n=cd;if("stylesheet"===t.type&&("string"!=typeof r.media||!1!==matchMedia(r.media).matches)&&0==(4&t.state.loading)){if(null===t.instance){var a=Ku(r.href),o=e.querySelector(Xu(a));if(o)return null!==(e=o._p)&&"object"==typeof e&&"function"==typeof e.then&&(n.count++,n=dd.bind(n),e.then(n,n)),t.state.loading|=4,h(t.instance=o);o=e.ownerDocument||e,r=Zu(r),(a=Uu.get(a))&&nd(r,a),h(o=o.createElement("link"));var i=o;i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),C(o,"link",r),t.instance=o}null===n.stylesheets&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&0==(3&t.state.loading)&&(n.count++,t=dd.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}})(ks,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var t=ks;ks=$u(e.stateNode.containerInfo),js(e),ks=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=_s,_s=16777216,js(e),_s=t):js(e));break;default:js(e)}}function Ts(e){var t=e.alternate;if(null!==t&&null!==(e=t.child))for(t.child=null;t=e.sibling,(e.sibling=null)!==(e=t););}function Ls(e){var t=e.deletions;if(0!=(16&e.flags)){if(null!==t)for(var r=0;r<t.length;r++){var n=t[r];As(I=n,e)}Ts(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Rs(e),e=e.sibling}function Rs(e){switch(e.tag){case 0:case 11:case 15:Ls(e),2048&e.flags&&ts(9,e,e.return);break;case 3:case 12:Ls(e);break;case 22:var t=e.stateNode;(null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,function e(t){var r=t.deletions;if(0!=(16&t.flags)){if(null!==r)for(var n=0;n<r.length;n++){var a=r[n];As(I=a,t)}Ts(t)}for(t=t.child;null!==t;){switch((r=t).tag){case 0:case 11:case 15:ts(8,r,r.return),e(r);break;case 22:2&(n=r.stateNode)._visibility&&(n._visibility&=-3,e(r));break;default:e(r)}t=t.sibling}}):Ls)(e);break;default:Ls(e)}}function As(e,t){for(;null!==I;){var r=I;switch(r.tag){case 0:case 11:case 15:ts(8,r,t);break;case 23:case 22:null!==r.memoizedState&&null!==r.memoizedState.cachePool&&null!=(n=r.memoizedState.cachePool.pool)&&n.refCount++;break;case 24:Ia(r.memoizedState.cache)}if(null!==(n=r.child))n.return=r,I=n;else for(r=e;null!==I;){var n,a=(n=I).sibling,o=n.return;if(!function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&st(r),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(n),n===r){I=null;break}if(null!==a){a.return=o,I=a;break}I=o}}}var Fs={getCacheForType:function(e){var t=Da(g),r=t.data.get(e);return void 0===r&&(r=e(),t.data.set(e,r)),r}},Ws="function"==typeof WeakMap?WeakMap:Map,B=0,H=null,U=null,Y=0,k=0,Is=null,Bs=!1,Hs=!1,Us=!1,Ys=0,S=0,$s=0,qs=0,Vs=0,Qs=0,Gs=0,Ks=null,Xs=null,Zs=!1,Js=0,ec=1/0,tc=null,rc=null,$=0,nc=null,ac=null,oc=0,ic=0,lc=null,sc=null,cc=0,uc=null;function dc(){return 0!=(2&B)&&0!==Y?Y&-Y:null!==R.T?0!==Ua?Ua:Jc():et()}function fc(){0===Qs&&(Qs=0==(536870912&Y)||W?qe():536870912);var e=nl.current;return null!==e&&(e.flags|=32),Qs}function pc(e,t,r){(e!==H||2!==k&&9!==k)&&null===e.cancelPendingCommit||(wc(e,0),gc(e,Y,Qs,!1)),Ge(e,r),0!=(2&B)&&e===H||(e===H&&(0==(2&B)&&(qs|=r),4===S)&&gc(e,Y,Qs,!1),qc(e))}function hc(e,t,r){if(0!=(6&B))throw Error(A(327));var n=!r&&0==(124&t)&&0==(t&e.expiredLanes)||$e(e,t),a=n?((t,e)=>{var r=B,n=(B|=2,xc()),a=kc();H!==t||Y!==e?(tc=null,ec=Ce()+500,wc(t,e)):Hs=$e(t,e);e:for(;;)try{if(0!==k&&null!==U){e=U;var o=Is;t:switch(k){case 1:k=0,Is=null,Oc(t,e,o,1);break;case 2:case 9:if(to(o)){k=0,Is=null,Cc(e);break}e=function(){2!==k&&9!==k||H!==t||(k=7),qc(t)},o.then(e,e);break e;case 3:k=7;break e;case 4:k=5;break e;case 7:to(o)?(k=0,Is=null,Cc(e)):(k=0,Is=null,Oc(t,e,o,7));break;case 5:var i=null;switch(U.tag){case 26:i=U.memoizedState;case 5:case 27:var l=U;if(!i||sd(i)){k=0,Is=null;var s,c=l.sibling;null!==c?U=c:null!==(s=l.return)?Pc(U=s):U=null;break t}}k=0,Is=null,Oc(t,e,o,5);break;case 6:k=0,Is=null,Oc(t,e,o,6);break;case 8:bc(),S=6;break e;default:throw Error(A(462))}}(()=>{for(;null!==U&&!Ee();)Nc(U)})();break}catch(e){yc(t,e)}return Na=Ea=null,R.H=n,R.A=a,B=r,null!==U?0:(H=null,Y=0,An(),S)})(e,t):Ec(e,t,!0),o=n;do{if(0===a){Hs&&!n&&gc(e,t,0,!1);break}if(r=e.current.alternate,!o||(e=>{for(var t=e;;){var r=t.tag;if((0===r||11===r||15===r)&&16384&t.flags&&null!==(r=t.updateQueue)&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!sn(o(),a))return}catch(e){return}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return 1;t=t.return}t.sibling.return=t.return,t=t.sibling}}return 1})(r)){if(2===a){var o=t,i=e.errorRecoveryDisabledLanes&o?0:0!==(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0;if(0!==i){t=i;e:{var l=e,a=Ks,s=l.current.memoizedState.isDehydrated;if(s&&(wc(l,i).flags|=256),2!==(i=Ec(l,i,!1))){if(Us&&!s){l.errorRecoveryDisabledLanes|=o,qs|=o,a=4;break e}o=Xs,Xs=a,null!==o&&(null===Xs?Xs=o:Xs.push.apply(Xs,o))}a=i}if(o=!1,2!==a)continue}}if(1===a){wc(e,0),gc(e,t,0,!0);break}e:{switch(n=e,o=a){case 0:case 1:throw Error(A(345));case 4:if((4194048&t)!==t)break;case 6:gc(n,t,Qs,!Bs);break e;case 2:Xs=null;break;case 3:case 5:break;default:throw Error(A(329))}(62914560&t)===t&&10<(a=Js+300-Ce())?(gc(n,t,Qs,!Bs),0===Ye(n,0,!0)&&(n.timeoutHandle=zu(mc.bind(null,n,r,Xs,tc,Zs,t,Qs,qs,Gs,Bs,o,2,-0,0),a))):mc(n,r,Xs,tc,Zs,t,Qs,qs,Gs,Bs,o,0,-0,0)}break}a=Ec(e,t,!1),o=!1}while(1);qc(e)}function mc(e,t,r,n,a,o,i,l,s,c,u,d,f,p){e.timeoutHandle=-1,(8192&(d=t.subtreeFlags)||16785408==(16785408&d))&&(cd={stylesheets:null,count:0,unsuspend:ud},Ds(t),null!==(d=(()=>{if(null===cd)throw Error(A(475));var r=cd;return r.stylesheets&&0===r.count&&pd(r,r.stylesheets),0<r.count?function(e){var t=setTimeout(function(){var e;r.stylesheets&&pd(r,r.stylesheets),r.unsuspend&&(e=r.unsuspend,r.unsuspend=null,e())},6e4);return r.unsuspend=e,function(){r.unsuspend=null,clearTimeout(t)}}:null})()))?(e.cancelPendingCommit=d(Mc.bind(null,e,t,o,r,n,a,i,l,s,u,1,f,p)),gc(e,o,i,!c)):Mc(e,t,o,r,n,0,i,l,s)}function gc(e,t,r,n){t=t&~Vs&~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var a=t;0<a;){var o=31-Fe(a),i=1<<o;n[o]=-1,a&=~i}0!==r&&Ke(e,r,t)}function vc(){return 0!=(6&B)||(Vc(0,!1),!1)}function bc(){if(null!==U){for(var e=0===k?U.return:(Na=Ea=null,Io(e=U),Qi=null,Gi=0,U);null!==e;)Jl(e.alternate,e),e=e.return;U=null}}function wc(e,t){var r=e.timeoutHandle,n=(-1!==r&&(e.timeoutHandle=-1,Mu(r)),null!==(r=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,r()),bc(),U=r=Vn((H=e).current,null),k=0,Is=null,Bs=!1,Hs=$e(e,Y=t),Gs=Qs=Vs=qs=$s=S=0,Xs=Ks=null,Zs=Us=!1,0!=(8&t)&&(t|=32&t),e.entangledLanes);if(0!==n)for(e=e.entanglements,n&=t;0<n;){var a=31-Fe(n);t|=e[a],n&=~(1<<a)}return Ys=t,An(),r}function yc(e,t){b=null,R.H=Yi,k=t===Xa||t===Ja?(t=oo(),3):t===Za?(t=oo(),4):t===El?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,Is=t,null===U&&(S=1,wl(e,Dn(t,e.current)))}function xc(){var e=R.H;return R.H=Yi,null===e?Yi:e}function kc(){var e=R.A;return R.A=Fs,e}function Sc(){S=4,Bs||(4194048&Y)!==Y&&null!==nl.current||(Hs=!0),0==(134217727&$s)&&0==(134217727&qs)||null===H||gc(H,Y,Qs,!1)}function Ec(t,e,r){var n=B,a=(B|=2,xc()),o=kc(),i=(H===t&&Y===e||(tc=null,wc(t,e)),e=!1,S);e:for(;;)try{if(0!==k&&null!==U){var l=U,s=Is;switch(k){case 8:bc(),i=6;break e;case 3:case 2:case 9:case 6:null===nl.current&&(e=!0);var c=k;if(k=0,Is=null,Oc(t,l,s,c),r&&Hs){i=0;break e}break;default:c=k,k=0,Is=null,Oc(t,l,s,c)}}for(;null!==U;)Nc(U);i=S;break}catch(e){yc(t,e)}return e&&t.shellSuspendCounter++,Na=Ea=null,B=n,R.H=a,R.A=o,null===U&&(H=null,Y=0,An()),i}function Nc(e){var t=Ql(e.alternate,e,Ys);e.memoizedProps=e.pendingProps,null===t?Pc(e):U=t}function Cc(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Dl(r,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Dl(r,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Io(t);default:Jl(r,t),t=Ql(r,t=U=Qn(t,Ys),Ys)}e.memoizedProps=e.pendingProps,null===t?Pc(e):U=t}function Oc(t,e,r,n){Na=Ea=null,Io(e),Qi=null,Gi=0;var a=e.return;try{if(((e,t,r,n,a)=>{if(r.flags|=32768,null!==n&&"object"==typeof n&&"function"==typeof n.then){if(null!==(t=r.alternate)&&Ma(t,r,a,!0),null===(r=nl.current))return Fc(e,n,a),Sc(),0;switch(r.tag){case 13:return null===al?Sc():null===r.alternate&&0===S&&(S=3),r.flags&=-257,r.flags|=65536,r.lanes=a,n===eo?r.flags|=16384:(null===(t=r.updateQueue)?r.updateQueue=new Set([n]):t.add(n),Fc(e,n,a)),0;case 22:return r.flags|=65536,n===eo?r.flags|=16384:(null===(t=r.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},r.updateQueue=t):null===(r=t.retryQueue)?t.retryQueue=new Set([n]):r.add(n),Fc(e,n,a)),0}throw Error(A(435,r.tag))}if(W)return null!==(t=nl.current)?(0==(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==ma&&ka(Dn(e=Error(A(422),{cause:n}),r))):(n!==ma&&ka(Dn(t=Error(A(423),{cause:n}),r)),(e=e.current.alternate).flags|=65536,e.lanes|=a&=-a,n=Dn(n,r),ho(e,a=xl(e.stateNode,n,a)),4!==S&&(S=2)),0;var o=Dn(o=Error(A(520),{cause:n}),r);if(null===Ks?Ks=[o]:Ks.push(o),4!==S&&(S=2),null===t)return 1;n=Dn(n,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,r.lanes|=e=a&-a,ho(r,e=xl(r.stateNode,n,e)),0;case 1:if(t=r.type,o=r.stateNode,0==(128&r.flags)&&("function"==typeof t.getDerivedStateFromError||null!==o&&"function"==typeof o.componentDidCatch&&(null===rc||!rc.has(o))))return r.flags|=65536,a&=-a,r.lanes|=a,Sl(a=kl(a),e,r,n),ho(r,a),0}}while(null!==(r=r.return))})(t,a,e,r,Y))return S=1,wl(t,Dn(r,t.current)),void(U=null)}catch(e){if(null!==a)throw U=a,e;return S=1,wl(t,Dn(r,t.current)),void(U=null)}32768&e.flags?(W||1===n?t=!0:Hs||0!=(536870912&Y)?t=!1:(Bs=t=!0,2!==n&&9!==n&&3!==n&&6!==n||null!==(n=nl.current)&&13===n.tag&&(n.flags|=16384)),zc(e,t)):Pc(e)}function Pc(e){var t=e;do{if(0!=(32768&t.flags))return void zc(t,Bs);e=t.return;var r=((e,t,r)=>{var n,a=t.pendingProps;switch(da(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return u(t),null;case 3:return r=t.stateNode,(a=null)!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Oa(g),be(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(wa(t)?Gl(t):null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,xa())),u(t),null;case 26:return r=t.memoizedState,null===e?(Gl(t),null!==r?(u(t),Kl(t,r)):(u(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Gl(t),u(t),Kl(t,r)):(u(t),t.flags&=-16777217):(e.memoizedProps!==a&&Gl(t),u(t),t.flags&=-16777217),null;case 27:ye(t),r=me.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==a&&Gl(t);else{if(!a){if(null===t.stateNode)throw Error(A(166));return u(t),null}e=pe.current,(wa(t)?va:(e=Bu(o,0,r),t.stateNode=e,Gl))(t)}return u(t),null;case 5:if(ye(t),r=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&Gl(t);else{if(!a){if(null===t.stateNode)throw Error(A(166));return u(t),null}if(e=pe.current,wa(t))va(t);else{switch(o=Eu(me.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"==typeof a.is?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e="string"==typeof a.is?o.createElement(r,{is:a.is}):o.createElement(r)}}e[p]=t,e[tt]=a;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o=(o.child.return=o).child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}switch(C(t.stateNode=e,r,a),r){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break;case"img":e=!0;break;default:e=!1}e&&Gl(t)}}return u(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==a&&Gl(t);else{if("string"!=typeof a&&null===t.stateNode)throw Error(A(166));if(e=me.current,wa(t)){if(e=t.stateNode,r=t.memoizedProps,(a=null)!==(o=fa))switch(o.tag){case 27:case 5:a=o.memoizedProps}e[p]=t,(e=!!(e.nodeValue===r||null!==a&&!0===a.suppressHydrationWarning||wu(e.nodeValue,r)))||ga(t)}else((e=Eu(e).createTextNode(a))[p]=t).stateNode=e}return u(t),null;case 13:if(a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=wa(t),null!==a&&null!==a.dehydrated){if(null===e){if(!o)throw Error(A(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(A(317));o[p]=t}else ya(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;u(t),o=!1}else o=xa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(sl(t),t):(sl(t),null)}return(sl(t),0!=(128&t.flags))?(t.lanes=r,t):(e=null!==e&&null!==e.memoizedState,(r=null!==a)&&((o=null)!==(a=t.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(o=a.alternate.memoizedState.cachePool.pool),(n=(n=null)!==a.memoizedState&&null!==a.memoizedState.cachePool?a.memoizedState.cachePool.pool:n)!==o)&&(a.flags|=2048),r!==e&&r&&(t.child.flags|=8192),Xl(t,t.updateQueue),u(t),null);case 4:return be(),null===e&&cu(t.stateNode.containerInfo),u(t),null;case 10:return Oa(t.type),u(t),null;case 19:if(i(w),null===(o=t.memoizedState));else{if(a=0!=(128&t.flags),null===(n=o.rendering))if(a)Zl(o,!1);else{if(0!==S||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(n=cl(e))){for(t.flags|=128,Zl(o,!1),e=n.updateQueue,t.updateQueue=e,Xl(t,e),t.subtreeFlags=0,e=r,r=t.child;null!==r;)Qn(r,e),r=r.sibling;return f(w,1&w.current|2),t.child}e=e.sibling}null!==o.tail&&Ce()>ec&&(t.flags|=128,Zl(o,!(a=!0)),t.lanes=4194304)}else{if(!a)if(null!==(e=cl(n))){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Xl(t,e),Zl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!n.alternate&&!W)return u(t),null}else 2*Ce()-o.renderingStartTime>ec&&536870912!==r&&(t.flags|=128,Zl(o,!(a=!0)),t.lanes=4194304);o.isBackwards?(n.sibling=t.child,t.child=n):(null!==(e=o.last)?e.sibling=n:t.child=n,o.last=n)}if(null!==o.tail)return t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,e=w.current,f(w,a?1&e|2:1&e),t}return u(t),null;case 22:case 23:return sl(t),Eo(),a=null!==t.memoizedState,null!==e?null!==e.memoizedState!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?0!=(536870912&r)&&0==(128&t.flags)&&(u(t),6&t.subtreeFlags)&&(t.flags|=8192):u(t),null!==(r=t.updateQueue)&&Xl(t,r.retryQueue),(r=null)!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(r=e.memoizedState.cachePool.pool),(a=(a=null)!==t.memoizedState&&null!==t.memoizedState.cachePool?t.memoizedState.cachePool.pool:a)!==r&&(t.flags|=2048),null!==e&&i(Va),null;case 24:return(r=null)!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Oa(g),u(t),null;case 25:case 30:return null}throw Error(A(156,t.tag))})(t.alternate,t,Ys);if(null!==r)return void(U=r);if(null!==(t=t.sibling))return void(U=t)}while(U=t=e,null!==t);0===S&&(S=5)}function zc(e,t){do{var r=((e,t)=>{switch(da(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Oa(g),be(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ye(t),null;case 13:if(sl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(A(340));ya()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return i(w),null;case 4:return be(),null;case 10:return Oa(t.type),null;case 22:case 23:return sl(t),Eo(),null!==e&&i(Va),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Oa(g),null;default:return null}})(e.alternate,e);if(null!==r)return r.flags&=32767,void(U=r);if(null!==(r=e.return)&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&null!==(e=e.sibling))return void(U=e)}while(U=e=r,null!==e);S=6,U=null}function Mc(e,t,r,n,a,o,i,l,s){for(e.cancelPendingCommit=null;Lc(),0!==$;);if(0!=(6&B))throw Error(A(327));if(null!==t){if(t===e.current)throw Error(A(177));o=t.lanes|t.childLanes;var c=e,u=r,d=o|=Rn,f=i,p=c.pendingLanes,h=(c.pendingLanes=d,c.suspendedLanes=0,c.pingedLanes=0,c.warmLanes=0,c.expiredLanes&=d,c.entangledLanes&=d,c.errorRecoveryDisabledLanes&=d,c.shellSuspendCounter=0,c.entanglements),m=c.expirationTimes,g=c.hiddenUpdates;for(d=p&~d;0<d;){var v=31-Fe(d),b=1<<v,w=(h[v]=0,m[v]=-1,g[v]);if(null!==w)for(g[v]=null,v=0;v<w.length;v++){var y=w[v];null!==y&&(y.lane&=-536870913)}d&=~b}if(0!==f&&Ke(c,f,0),0!==s&&0===l&&0!==c.tag&&(c.suspendedLanes|=s&~(p&~u)),e===H&&(U=H=null,Y=0),nc=e,oc=r,ic=o,lc=a,sc=n,0!=(10256&(ac=t).subtreeFlags)||0!=(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ke(Me,function(){return Rc(),null})):(e.callbackNode=null,e.callbackPriority=0),n=0!=(13878&t.flags),0!=(13878&t.subtreeFlags)||n){n=R.T,R.T=null,a=F.p,F.p=2,i=B,B|=4;try{var x=e,k=t;if(x=x.containerInfo,ku=Sd,pn(x=fn(x))){if("selectionStart"in x)var S={start:x.selectionStart,end:x.selectionEnd};else e:if((C=(S=(S=x.ownerDocument)&&S.defaultView||window).getSelection&&S.getSelection())&&0!==C.rangeCount){var S=C.anchorNode,E=C.anchorOffset,N=C.focusNode,C=C.focusOffset;try{S.nodeType,N.nodeType}catch(e){S=null;break e}var O,P=0,z=-1,M=-1,_=0,j=0,D=x,T=null;t:for(;;){for(;D!==S||0!==E&&3!==D.nodeType||(z=P+E),D!==N||0!==C&&3!==D.nodeType||(M=P+C),3===D.nodeType&&(P+=D.nodeValue.length),null!==(O=D.firstChild);)T=D,D=O;for(;;){if(D===x)break t;if(T===S&&++_===E&&(z=P),T===N&&++j===C&&(M=P),null!==(O=D.nextSibling))break;T=(D=T).parentNode}D=O}S=-1===z||-1===M?null:{start:z,end:M}}else S=null;S=S||{start:0,end:0}}else S=null;for(Sd=!(Su={focusedElem:x,selectionRange:S}),I=k;null!==I;)if(x=(k=I).child,0!=(1024&k.subtreeFlags)&&null!==x)x.return=k,I=x;else for(;null!==I;){switch(N=(k=I).alternate,x=k.flags,k.tag){case 0:break;case 11:case 15:break;case 1:if(0!=(1024&x)&&null!==N){x=void 0,S=k,E=N.memoizedProps,N=N.memoizedState,C=S.stateNode;try{var L=hl(S.type,E);x=C.getSnapshotBeforeUpdate(L,N),C.__reactInternalSnapshotBeforeUpdate=x}catch(e){q(S,S.return,e)}}break;case 3:if(0!=(1024&x))if(9===(S=(x=k.stateNode.containerInfo).nodeType))Ru(x);else if(1===S)switch(x.nodeName){case"HEAD":case"HTML":case"BODY":Ru(x);break;default:x.textContent=""}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(0!=(1024&x))throw Error(A(163))}if(null!==(x=k.sibling)){x.return=k.return,I=x;break}I=k.return}}finally{B=i,F.p=a,R.T=n}}$=1,_c(),jc(),Dc()}}function _c(){if(1===$){var e=nc,t=ac,r=($=0)!=(13878&t.flags);if(0!=(13878&t.subtreeFlags)||r){r=R.T,R.T=null;var n=F.p,a=(F.p=2,B);B|=4;try{Ss(t,e);var o,i,l,s,c,u,d,f,p,h,m,g=Su,v=fn(e.containerInfo),b=g.focusedElem,w=g.selectionRange;if(v!==b&&b&&b.ownerDocument&&function e(t,r){return!(!t||!r)&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(b.ownerDocument.documentElement,b)){null!==w&&pn(b)&&(o=w.start,void 0===(i=w.end)&&(i=o),"selectionStart"in b?(b.selectionStart=o,b.selectionEnd=Math.min(i,b.value.length)):(s=(l=b.ownerDocument||document)&&l.defaultView||window).getSelection&&(c=s.getSelection(),u=b.textContent.length,d=Math.min(w.start,u),f=void 0===w.end?d:Math.min(w.end,u),!c.extend&&f<d&&(v=f,f=d,d=v),p=dn(b,d),h=dn(b,f),p)&&h&&(1!==c.rangeCount||c.anchorNode!==p.node||c.anchorOffset!==p.offset||c.focusNode!==h.node||c.focusOffset!==h.offset)&&((m=l.createRange()).setStart(p.node,p.offset),c.removeAllRanges(),f<d?(c.addRange(m),c.extend(h.node,h.offset)):(m.setEnd(h.node,h.offset),c.addRange(m)))),l=[];for(c=b;c=c.parentNode;)1===c.nodeType&&l.push({element:c,left:c.scrollLeft,top:c.scrollTop});for("function"==typeof b.focus&&b.focus(),b=0;b<l.length;b++){var y=l[b];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Sd=!!ku,Su=ku=null}finally{B=a,F.p=n,R.T=r}}e.current=t,$=2}}function jc(){if(2===$){var e=nc,t=ac,r=($=0)!=(8772&t.flags);if(0!=(8772&t.subtreeFlags)||r){r=R.T,R.T=null;var n=F.p,a=(F.p=2,B);B|=4;try{ms(e,t.alternate,t)}finally{B=a,F.p=n,R.T=r}}$=3}}function Dc(){if(4===$||3===$){$=0,Ne();var e=nc,t=ac,r=oc,n=sc,a=(0!=(10256&t.subtreeFlags)||0!=(10256&t.flags)?$=5:($=0,ac=nc=null,Tc(e,e.pendingLanes)),e.pendingLanes);if(0===a&&(rc=null),Je(r),t=t.stateNode,Re&&"function"==typeof Re.onCommitFiberRoot)try{Re.onCommitFiberRoot(Le,t,void 0,128==(128&t.current.flags))}catch(e){}if(null!==n){t=R.T,a=F.p,F.p=2,R.T=null;try{for(var o=e.onRecoverableError,i=0;i<n.length;i++){var l=n[i];o(l.value,{componentStack:l.stack})}}finally{R.T=t,F.p=a}}0!=(3&oc)&&Lc(),qc(e),a=e.pendingLanes,0!=(4194090&r)&&0!=(42&a)?e===uc?cc++:(cc=0,uc=e):cc=0,Vc(0,!1)}}function Tc(e,t){0==(e.pooledCacheLanes&=t)&&null!=(t=e.pooledCache)&&(e.pooledCache=null,Ia(t))}function Lc(){return _c(),jc(),Dc(),Rc()}function Rc(){if(5!==$)return!1;var e=nc,t=ic,r=(ic=0,Je(oc)),n=R.T,a=F.p;try{F.p=r<32?32:r,R.T=null;var r=lc,o=nc,i=oc;if(ac=nc=lc=null,(oc=$=0)!=(6&B))throw Error(A(331));var l=B;if(B|=4,Rs(o.current),zs(o,o.current,i,r),B=l,Vc(0,!1),Re&&"function"==typeof Re.onPostCommitFiberRoot)try{Re.onPostCommitFiberRoot(Le,o)}catch(e){}return!0}finally{F.p=a,R.T=n,Tc(e,t)}}function Ac(e,t,r){t=Dn(r,t),null!==(e=fo(e,t=xl(e.stateNode,t,2),2))&&(Ge(e,2),qc(e))}function q(e,t,r){if(3===e.tag)Ac(e,e,r);else for(;null!==t;){if(3===t.tag){Ac(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===rc||!rc.has(n))){e=Dn(r,e),null!==(n=fo(t,r=kl(2),2))&&(Sl(r,n,t,e),Ge(n,2),qc(n));break}}t=t.return}}function Fc(e,t,r){var n,a=e.pingCache;null===a?(a=e.pingCache=new Ws,n=new Set,a.set(t,n)):void 0===(n=a.get(t))&&(n=new Set,a.set(t,n)),n.has(r)||(Us=!0,n.add(r),e=function(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,H===e&&(Y&r)===r&&(4===S||3===S&&(62914560&Y)===Y&&Ce()-Js<300?0==(2&B)&&wc(e,0):Vs|=r,Gs===Y)&&(Gs=0),qc(e)}.bind(null,e,t,r),t.then(e,e))}function Wc(e,t){null!==(e=In(e,t=0===t?Ve():t))&&(Ge(e,t),qc(e))}var Ic=null,Bc=null,Hc=!1,Uc=!1,Yc=!1,$c=0;function qc(e){e!==Bc&&null===e.next&&(null===Bc?Ic=Bc=e:Bc=Bc.next=e),Uc=!0,Hc||(Hc=!0,ju(function(){0!=(6&B)?ke(Pe,Qc):Gc()}))}function Vc(e,t){if(!Yc&&Uc){Yc=!0;do{for(var r,n,a,o,i=!1,l=Ic;null!==l;)t||(0!==e?0!==(o=0===(r=l.pendingLanes)?0:(n=l.suspendedLanes,a=l.pingedLanes,o=(1<<31-Fe(42|e)+1)-1,201326741&(o&=r&~(n&~a))?201326741&o|1:o?2|o:0))&&(i=!0,Zc(l,o)):(o=Y,0==(3&(o=Ye(l,l===H?o:0,null!==l.cancelPendingCommit||-1!==l.timeoutHandle)))||$e(l,o)||(i=!0,Zc(l,o)))),l=l.next}while(i);Yc=!1}}function Qc(){Gc()}function Gc(){Uc=Hc=!1;var e=0;0!==$c&&((()=>{var e=window.event;return e&&"popstate"===e.type?e!==Pu&&(Pu=e,1):Pu=null})()&&(e=$c),$c=0);for(var t=Ce(),r=null,n=Ic;null!==n;){var a=n.next,o=Kc(n,t);0===o?((n.next=null)===r?Ic=a:r.next=a,null===a&&(Bc=r)):(r=n,0===e&&0==(3&o)||(Uc=!0)),n=a}Vc(e,!1)}function Kc(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var i=31-Fe(o),l=1<<i,s=a[i];-1===s?0!=(l&r)&&0==(l&n)||(a[i]=((e,t)=>{switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;default:return-1}})(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(r=Y,r=Ye(e,e===(t=H)?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),n=e.callbackNode,0===r||e===t&&(2===k||9===k)||null!==e.cancelPendingCommit)return null!==n&&Se(n),e.callbackNode=null,e.callbackPriority=0;if(0==(3&r)||$e(e,r)){if((t=r&-r)!==e.callbackPriority){switch(null!==n&&Se(n),Je(r)){case 2:case 8:r=ze;break;case 32:r=Me;break;case 268435456:r=je;break;default:r=Me}n=Xc.bind(null,e),r=ke(r,n),e.callbackPriority=t,e.callbackNode=r}return t}return null!==n&&Se(n),e.callbackPriority=2,e.callbackNode=null,2}function Xc(e,t){var r,n;return 0!==$&&5!==$?(e.callbackNode=null,e.callbackPriority=0,null):(r=e.callbackNode,(!Lc()||e.callbackNode===r)&&(n=Y,0!==(n=Ye(e,e===H?Y:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle)))&&(hc(e,n,t),Kc(e,Ce()),null!=e.callbackNode)&&e.callbackNode===r?Xc.bind(null,e):null)}function Zc(e,t){Lc()||hc(e,t,!0)}function Jc(){return $c=0===$c?qe():$c}function eu(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:Gt(""+e)}function tu(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}for(var ru=0;ru<Mn.length;ru++){var nu=Mn[ru];_n(nu.toLowerCase(),"on"+(nu[0].toUpperCase()+nu.slice(1)))}_n(Nn,"onAnimationEnd"),_n(Cn,"onAnimationIteration"),_n(On,"onAnimationStart"),_n("dblclick","onDoubleClick"),_n("focusin","onFocus"),_n("focusout","onBlur"),_n(t,"onTransitionRun"),_n(wr,"onTransitionStart"),_n(vr,"onTransitionCancel"),_n(Pn,"onTransitionEnd"),gt("onMouseEnter",["mouseout","mouseover"]),gt("onMouseLeave",["mouseout","mouseover"]),gt("onPointerEnter",["pointerout","pointerover"]),gt("onPointerLeave",["pointerout","pointerover"]),mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mt("onBeforeInput",["compositionend","keypress","textInput","paste"]),mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ou=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(au));function iu(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=(a=e[r]).event,a=a.listeners;e:{var o=void 0;if(t)for(var i=a.length-1;0<=i;i--){var l=(c=a[i]).instance,s=c.currentTarget,c=c.listener;if(l!==o&&n.isPropagationStopped())break e;o=c,n.currentTarget=s;try{o(n)}catch(e){ml(e)}n.currentTarget=null,o=l}else for(i=0;i<a.length;i++){if(l=(c=a[i]).instance,s=c.currentTarget,c=c.listener,l!==o&&n.isPropagationStopped())break e;o=c,n.currentTarget=s;try{o(n)}catch(e){ml(e)}n.currentTarget=null,o=l}}}}function E(e,t){var r=t[nt],n=e+"__bubble";(r=void 0===r?t[nt]=new Set:r).has(n)||(uu(t,e,2,!1),r.add(n))}function lu(e,t,r){var n=0;t&&(n|=4),uu(r,e,n,t)}var su="_reactListening"+Math.random().toString(36).slice(2);function cu(t){var e;t[su]||(t[su]=!0,pt.forEach(function(e){"selectionchange"!==e&&(ou.has(e)||lu(e,!1,t),lu(e,!0,t))}),null===(e=9===t.nodeType?t:t.ownerDocument))||e[su]||lu("selectionchange",!(e[su]=!0),e)}function uu(e,t,r,n){switch(Md(t)){case 2:var a=Ed;break;case 8:a=Nd;break;default:a=Cd}r=a.bind(null,t,r,e),a=!ar||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t?void 0:!0,n?void 0!==a?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):void 0!==a?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function du(k,S,E,e,t){var N=e;if(0==(1&S)&&0==(2&S)&&null!==e)e:for(;;){if(null===e)return;var r=e.tag;if(3===r||4===r){var n=e.stateNode.containerInfo;if(n===t)break;if(4===r)for(r=e.return;null!==r;){var a=r.tag;if((3===a||4===a)&&r.stateNode.containerInfo===t)return;r=r.return}for(;null!==n;){if(null===(r=ct(n)))return;if(5===(a=r.tag)||6===a||26===a||27===a){e=N=r;continue e}n=n.parentNode}}e=e.return}rr(function(){var e,t,r,n,a,o,i,l,s,c=N,u=Xt(E),d=[];e:{var f=zn.get(k);if(void 0!==f){var p=gr,h=k;switch(k){case"keypress":if(0===cr(E))break e;case"keydown":case"keyup":p=_r;break;case"focusin":h="focus",p=kr;break;case"focusout":h="blur",p=kr;break;case"beforeblur":case"afterblur":p=kr;break;case"click":if(2===E.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Dr;break;case Nn:case Cn:case On:p=Sr;break;case Pn:p=Tr;break;case"scroll":case"scrollend":p=br;break;case"wheel":p=Lr;break;case"copy":case"cut":case"paste":p=Er;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jr;break;case"toggle":case"beforetoggle":p=Rr}for(var m=!(v=0!=(4&S))&&("scroll"===k||"scrollend"===k),g=v?null!==f?f+"Capture":null:f,v=[],b=c;null!==b;){var w=b,y=w.stateNode;if(5!==(w=w.tag)&&26!==w&&27!==w||null===y||null===g||null!=(w=nr(b,g))&&v.push(fu(b,w,y)),m)break;b=b.return}0<v.length&&(f=new p(f,h,null,E,u),d.push({event:f,listeners:v}))}}if(0==(7&S)){if(p="mouseout"===k||"pointerout"===k,(!(f="mouseover"===k||"pointerover"===k)||E===Kt||!(h=E.relatedTarget||E.fromElement)||!ct(h)&&!h[rt])&&(p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(p=c,null!==(h=(h=E.relatedTarget||E.toElement)?ct(h):null)&&(m=z(h),v=h.tag,h!==m||5!==v&&27!==v&&6!==v)&&(h=null)):(p=null,h=c),p!==h)){if(v=yr,w="onMouseLeave",g="onMouseEnter",b="mouse","pointerout"!==k&&"pointerover"!==k||(v=jr,w="onPointerLeave",g="onPointerEnter",b="pointer"),m=null==p?f:dt(p),y=null==h?f:dt(h),(f=new v(w,b+"leave",p,E,u)).target=m,f.relatedTarget=y,w=null,ct(u)===c&&((v=new v(g,b+"enter",h,E,u)).target=y,v.relatedTarget=m,w=v),m=w,p&&h)e:{for(g=h,b=0,y=v=p;y;y=hu(y))b++;for(y=0,w=g;w;w=hu(w))y++;for(;0<b-y;)v=hu(v),b--;for(;0<y-b;)g=hu(g),y--;for(;b--;){if(v===g||null!==g&&v===g.alternate)break e;v=hu(v),g=hu(g)}v=null}else v=null;null!==p&&mu(d,f,p,v,!1),null!==h&&null!==m&&mu(d,m,h,v,!0)}switch("select"===(p=(f=c?dt(c):window).nodeName&&f.nodeName.toLowerCase())||"input"===p&&"file"===f.type?t=Jr:Vr(f)?en?t=ln:(t=an,e=nn):!(p=f.nodeName)||"input"!==p.toLowerCase()||"checkbox"!==f.type&&"radio"!==f.type?c&&qt(c.elementType)&&(t=Jr):t=on,(t=t&&t(k,c))?Qr(d,t,E,u):(e&&e(k,f,c),"focusout"===k&&c&&"number"===f.type&&null!=c.memoizedProps.value&&Ft(f,"number",f.value)),e=c?dt(c):window,k){case"focusin":!Vr(e)&&"true"!==e.contentEditable||(mn=e,gn=c,vn=null);break;case"focusout":vn=gn=mn=null;break;case"mousedown":bn=!0;break;case"contextmenu":case"mouseup":case"dragend":bn=!1,wn(d,E,u);break;case"selectionchange":if(hn)break;case"keydown":case"keyup":wn(d,E,u)}if(Fr)e:{switch(k){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $r?Ur(k,E)&&(x="onCompositionEnd"):"keydown"===k&&229===E.keyCode&&(x="onCompositionStart");x&&(Ir&&"ko"!==E.locale&&($r||"onCompositionStart"!==x?"onCompositionEnd"===x&&$r&&(r=sr()):(ir="value"in(or=u)?or.value:or.textContent,$r=!0)),0<(e=pu(c,x)).length)&&(x=new Nr(x,k,null,E,u),d.push({event:x,listeners:e}),r||null!==(r=Yr(E)))&&(x.data=r),(r=(Wr?(e,t)=>{switch(e){case"compositionend":return Yr(t);case"keypress":return 32!==t.which?null:(Hr=!0,Br);case"textInput":return(e=t.data)===Br&&Hr?null:e;default:return null}}:(e,t)=>{if($r)return"compositionend"===e||!Fr&&Ur(e,t)?(e=sr(),lr=ir=or=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ir&&"ko"!==t.locale?null:t.data;default:return null}})(k,E))&&0<(x=pu(c,"onBeforeInput")).length&&(e=new Nr("onBeforeInput","beforeinput",null,E,u),d.push({event:e,listeners:x}),e.data=r),t=d,n=c,a=E,o=u,"submit"===(r=k)&&n&&n.stateNode===o&&(i=eu((o[tt]||null).action),(l=a.submitter)&&null!==(r=(r=l[tt]||null)?eu(r.formAction):l.getAttribute("formAction"))&&(i=r,l=null),s=new gr("action","action",null,a,o),t.push({event:s,listeners:[{instance:null,listener:function(){var e;a.defaultPrevented?0!==$c&&(e=l?tu(o,l):new FormData(o),ji(n,{pending:!0,data:e,method:o.method,action:i},null,e)):"function"==typeof i&&(s.preventDefault(),e=l?tu(o,l):new FormData(o),ji(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]}))}iu(d,S)})}function fu(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pu(e,t){for(var r=t+"Capture",n=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=nr(e,r))&&n.unshift(fu(e,a,o)),null!=(a=nr(e,t))&&n.push(fu(e,a,o))),3===e.tag)return n;e=e.return}return[]}function hu(e){if(null===e)return null;for(;(e=e.return)&&5!==e.tag&&27!==e.tag;);return e||null}function mu(e,t,r,n,a){for(var o=t._reactName,i=[];null!==r&&r!==n;){var l=(c=r).alternate,s=c.stateNode,c=c.tag;if(null!==l&&l===n)break;5!==c&&26!==c&&27!==c||null===s||(l=s,a?null!=(s=nr(r,o))&&i.unshift(fu(r,s,l)):null!=(s=nr(r,o))&&i.push(fu(r,s,l))),r=r.return}0!==i.length&&e.push({event:t,listeners:i})}var gu=/\r\n?/g,vu=/\u0000|\uFFFD/g;function bu(e){return("string"==typeof e?e:""+e).replace(gu,"\n").replace(vu,"")}function wu(e,t){return t=bu(t),bu(e)===t}function yu(){}function N(e,t,r,n,a,o){switch(r){case"children":"string"==typeof n?"body"===t||"textarea"===t&&""===n||Ht(e,n):"number"!=typeof n&&"bigint"!=typeof n||"body"===t||Ht(e,""+n);break;case"className":St(e,"class",n);break;case"tabIndex":St(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":St(e,r,n);break;case"style":$t(e,n,o);break;case"data":if("object"!==t){St(e,"data",n);break}case"src":case"href":""!==n||"a"===t&&"href"===r?null==n||"function"==typeof n||"symbol"==typeof n||"boolean"==typeof n?e.removeAttribute(r):(n=Gt(""+n),e.setAttribute(r,n)):e.removeAttribute(r);break;case"action":case"formAction":"function"==typeof n?e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"):("function"==typeof o&&("formAction"===r?("input"!==t&&N(e,t,"name",a.name,a,null),N(e,t,"formEncType",a.formEncType,a,null),N(e,t,"formMethod",a.formMethod,a,null),N(e,t,"formTarget",a.formTarget,a,null)):(N(e,t,"encType",a.encType,a,null),N(e,t,"method",a.method,a,null),N(e,t,"target",a.target,a,null))),null==n||"symbol"==typeof n||"boolean"==typeof n?e.removeAttribute(r):(n=Gt(""+n),e.setAttribute(r,n)));break;case"onClick":null!=n&&(e.onclick=yu);break;case"onScroll":null!=n&&E("scroll",e);break;case"onScrollEnd":null!=n&&E("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!=typeof n||!("__html"in n))throw Error(A(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(A(60));e.innerHTML=r}}break;case"multiple":e.multiple=n&&"function"!=typeof n&&"symbol"!=typeof n;break;case"muted":e.muted=n&&"function"!=typeof n&&"symbol"!=typeof n;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":null==n||"function"==typeof n||"boolean"==typeof n||"symbol"==typeof n?e.removeAttribute("xlink:href"):(r=Gt(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r));break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,""+n):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":!0===n?e.setAttribute(r,""):!1!==n&&null!=n&&"function"!=typeof n&&"symbol"!=typeof n?e.setAttribute(r,n):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":null!=n&&"function"!=typeof n&&"symbol"!=typeof n&&!isNaN(n)&&1<=n?e.setAttribute(r,n):e.removeAttribute(r);break;case"rowSpan":case"start":null==n||"function"==typeof n||"symbol"==typeof n||isNaN(n)?e.removeAttribute(r):e.setAttribute(r,n);break;case"popover":E("beforetoggle",e),E("toggle",e),kt(e,"popover",n);break;case"xlinkActuate":Et(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Et(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Et(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Et(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Et(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Et(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Et(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Et(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Et(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":kt(e,"is",n);break;case"innerText":case"textContent":break;default:2<r.length&&("o"===r[0]||"O"===r[0])&&("n"===r[1]||"N"===r[1])||kt(e,r=Vt.get(r)||r,n)}}function xu(e,t,r,n,a,o){switch(r){case"style":$t(e,n,o);break;case"dangerouslySetInnerHTML":if(null!=n){if("object"!=typeof n||!("__html"in n))throw Error(A(61));if(null!=(r=n.__html)){if(null!=a.children)throw Error(A(60));e.innerHTML=r}}break;case"children":"string"==typeof n?Ht(e,n):"number"!=typeof n&&"bigint"!=typeof n||Ht(e,""+n);break;case"onScroll":null!=n&&E("scroll",e);break;case"onScrollEnd":null!=n&&E("scrollend",e);break;case"onClick":null!=n&&(e.onclick=yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:ht.hasOwnProperty(r)||("o"===r[0]&&"n"===r[1]&&(a=r.endsWith("Capture"),t=r.slice(2,a?r.length-7:void 0),"function"==typeof(o=null!=(o=e[tt]||null)?o[r]:null)&&e.removeEventListener(t,o,a),"function"==typeof n)?("function"!=typeof o&&null!==o&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,n,a)):r in e?e[r]=n:!0===n?e.setAttribute(r,""):kt(e,r,n))}}function C(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":E("error",e),E("load",e);var n,a=!1,o=!1;for(n in r)if(r.hasOwnProperty(n)){var i=r[n];if(null!=i)switch(n){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(A(137,t));default:N(e,t,n,i,r,null)}}return o&&N(e,t,"srcSet",r.srcSet,r,null),void(a&&N(e,t,"src",r.src,r,null));case"input":E("invalid",e);var l=n=i=o=null,s=null,c=null;for(a in r)if(r.hasOwnProperty(a)){var u=r[a];if(null!=u)switch(a){case"name":o=u;break;case"type":i=u;break;case"checked":s=u;break;case"defaultChecked":c=u;break;case"value":n=u;break;case"defaultValue":l=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(A(137,t));break;default:N(e,t,a,u,r,null)}}return At(e,n,l,s,c,i,o,!1),void _t(e);case"select":for(o in E("invalid",e),a=i=n=null,r)if(r.hasOwnProperty(o)&&(l=r[o],null!=l))switch(o){case"value":n=l;break;case"defaultValue":i=l;break;case"multiple":a=l;default:N(e,t,o,l,r,null)}return t=n,r=i,e.multiple=!!a,void(null!=t?Wt(e,!!a,t,!1):null!=r&&Wt(e,!!a,r,!0));case"textarea":for(i in E("invalid",e),n=o=a=null,r)if(r.hasOwnProperty(i)&&(l=r[i],null!=l))switch(i){case"value":a=l;break;case"defaultValue":o=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(A(91));break;default:N(e,t,i,l,r,null)}return Bt(e,a,o,n),void _t(e);case"option":for(s in r)r.hasOwnProperty(s)&&null!=(a=r[s])&&("selected"===s?e.selected=a&&"function"!=typeof a&&"symbol"!=typeof a:N(e,t,s,a,r,null));return;case"dialog":E("beforetoggle",e),E("toggle",e),E("cancel",e),E("close",e);break;case"iframe":case"object":E("load",e);break;case"video":case"audio":for(a=0;a<au.length;a++)E(au[a],e);break;case"image":E("error",e),E("load",e);break;case"details":E("toggle",e);break;case"embed":case"source":case"link":E("error",e),E("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in r)if(r.hasOwnProperty(c)&&(a=r[c],null!=a))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(A(137,t));default:N(e,t,c,a,r,null)}return;default:if(qt(t)){for(u in r)r.hasOwnProperty(u)&&(a=r[u],void 0!==a)&&xu(e,t,u,a,r,void 0);return}}for(l in r)r.hasOwnProperty(l)&&(a=r[l],null!=a)&&N(e,t,l,a,r,null)}var ku=null,Su=null;function Eu(e){return 9===e.nodeType?e:e.ownerDocument}function Nu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Ou(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Pu=null;var zu="function"==typeof setTimeout?setTimeout:void 0,Mu="function"==typeof clearTimeout?clearTimeout:void 0,_u="function"==typeof Promise?Promise:void 0,ju="function"==typeof queueMicrotask?queueMicrotask:void 0!==_u?function(e){return _u.resolve(null).then(e).catch(Du)}:zu;function Du(e){setTimeout(function(){throw e})}function Tu(e){return"head"===e}function Lu(e,t){var r=t,n=0,a=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&8===o.nodeType)if("/$"===(r=o.data)){if(0<n&&n<8){var r=n,i=e.ownerDocument;if(1&r&&Hu(i.documentElement),2&r&&Hu(i.body),4&r)for(Hu(r=i.head),i=r.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[lt]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===i.rel.toLowerCase()||r.removeChild(i),i=l}}if(0===a)return e.removeChild(o),void Qd(t);a--}else"$"===r||"$?"===r||"$!"===r?a++:n=r.charCodeAt(0)-48;else n=0}while(r=o);Qd(t)}function Ru(e){for((r=e.firstChild)&&10===r.nodeType&&(r=r.nextSibling);r;){var t=r,r=r.nextSibling;switch(t.nodeName){case"HTML":case"HEAD":case"BODY":Ru(t),st(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===t.rel.toLowerCase())continue}e.removeChild(t)}}function Au(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function Fu(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var Wu=null;function Iu(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}function Bu(e,t,r){switch(t=Eu(r),e){case"html":if(e=t.documentElement)return e;throw Error(A(452));case"head":if(e=t.head)return e;throw Error(A(453));case"body":if(e=t.body)return e;throw Error(A(454));default:throw Error(A(451))}}function Hu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);st(e)}var Uu=new Map,Yu=new Set;function $u(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var qu=F.d;F.d={f:function(){var e=qu.f(),t=vc();return e||t},r:function(e){var t=ut(e);null!==t&&5===t.tag&&"form"===t.type?Ti(t):qu.r(e)},D:function(e){qu.D(e),Qu("dns-prefetch",e,null)},C:function(e,t){qu.C(e,t),Qu("preconnect",e,t)},L:function(e,t,r){qu.L(e,t,r);var n=Vu;if(n&&e&&t){var a='link[rel="preload"][as="'+Lt(t)+'"]',o=("image"===t&&r&&r.imageSrcSet?(a+='[imagesrcset="'+Lt(r.imageSrcSet)+'"]',"string"==typeof r.imageSizes&&(a+='[imagesizes="'+Lt(r.imageSizes)+'"]')):a+='[href="'+Lt(e)+'"]',a);switch(t){case"style":o=Ku(e);break;case"script":o=Ju(e)}Uu.has(o)||(e=v({rel:"preload",href:"image"===t&&r&&r.imageSrcSet?void 0:e,as:t},r),Uu.set(o,e),null!==n.querySelector(a))||"style"===t&&n.querySelector(Xu(o))||"script"===t&&n.querySelector(ed(o))||(C(t=n.createElement("link"),"link",e),h(t),n.head.appendChild(t))}},m:function(e,t){qu.m(e,t);var r=Vu;if(r&&e){var n=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+Lt(n)+'"][href="'+Lt(e)+'"]',o=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Ju(e)}if(!Uu.has(o)&&(e=v({rel:"modulepreload",href:e},t),Uu.set(o,e),null===r.querySelector(a))){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ed(o)))return}C(n=r.createElement("link"),"link",e),h(n),r.head.appendChild(n)}}},X:function(e,t){qu.X(e,t);var r=Vu;{var n,a,o;r&&e&&(n=ft(r).hoistableScripts,a=Ju(e),(o=n.get(a))||((o=r.querySelector(ed(a)))||(e=v({src:e,async:!0},t),(t=Uu.get(a))&&ad(e,t),h(o=r.createElement("script")),C(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o)))}},S:function(e,t,r){qu.S(e,t,r);var n=Vu;{var a,o,i,l,s;n&&e&&(a=ft(n).hoistableStyles,o=Ku(e),t=t||"default",(i=a.get(o))||(l={loading:0,preload:null},(i=n.querySelector(Xu(o)))?l.loading=5:(e=v({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Uu.get(o))&&nd(e,r),h(s=i=n.createElement("link")),C(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,rd(i,t,n)),i={type:"stylesheet",instance:i,count:1,state:l},a.set(o,i)))}},M:function(e,t){qu.M(e,t);var r=Vu;{var n,a,o;r&&e&&(n=ft(r).hoistableScripts,a=Ju(e),(o=n.get(a))||((o=r.querySelector(ed(a)))||(e=v({src:e,async:!0,type:"module"},t),(t=Uu.get(a))&&ad(e,t),h(o=r.createElement("script")),C(o,"link",e),r.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(a,o)))}}};var Vu="undefined"==typeof document?null:document;function Qu(e,t,r){var n,a=Vu;a&&"string"==typeof t&&t&&(n='link[rel="'+e+'"][href="'+(n=Lt(t))+'"]',"string"==typeof r&&(n+='[crossorigin="'+r+'"]'),Yu.has(n)||(Yu.add(n),e={rel:e,crossOrigin:r,href:t},null===a.querySelector(n)&&(C(t=a.createElement("link"),"link",e),h(t),a.head.appendChild(t))))}function Gu(e,t,r,n){var a,o,i,l=(l=me.current)?$u(l):null;if(!l)throw Error(A(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof r.precedence&&"string"==typeof r.href?(t=Ku(r.href),(n=(r=ft(l).hoistableStyles).get(t))||r.set(t,n={type:"style",instance:null,count:0,state:null}),n):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===r.rel&&"string"==typeof r.href&&"string"==typeof r.precedence){e=Ku(r.href);var s=ft(l).hoistableStyles,c=s.get(e);if(c||(l=l.ownerDocument||l,s.set(e,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}}),(s=l.querySelector(Xu(e)))&&!s._p&&(c.instance=s,c.state.loading=5),Uu.has(e))||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Uu.set(e,r),s)||(s=l,a=e,o=r,i=c.state,s.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=s.createElement("link"),(i.preload=a).addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),C(a,"link",o),h(a),s.head.appendChild(a))),t&&null===n)throw Error(A(528,""));return c}if(t&&null!==n)throw Error(A(529,""));return null;case"script":return t=r.async,"string"==typeof(r=r.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=Ju(r),(n=(r=ft(l).hoistableScripts).get(t))||r.set(t,n={type:"script",instance:null,count:0,state:null}),n):{type:"void",instance:null,count:0,state:null};default:throw Error(A(444,e))}}function Ku(e){return'href="'+Lt(e)+'"'}function Xu(e){return'link[rel="stylesheet"]['+e+"]"}function Zu(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Ju(e){return'[src="'+Lt(e)+'"]'}function ed(e){return"script[async]"+e}function td(e,t,r){if(t.count++,null===t.instance)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Lt(r.href)+'"]');return n?(h(t.instance=n),n):(a=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null}),h(n=(e.ownerDocument||e).createElement("style")),C(n,"style",a),rd(n,r.precedence,e),t.instance=n);case"stylesheet":var a=Ku(r.href),o=e.querySelector(Xu(a));if(o)return t.state.loading|=4,h(t.instance=o),o;n=Zu(r),(a=Uu.get(a))&&nd(n,a),h(o=(e.ownerDocument||e).createElement("link"));var i=o;return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),C(o,"link",n),t.state.loading|=4,rd(o,r.precedence,e),t.instance=o;case"script":return(o=Ju(r.src),a=e.querySelector(ed(o)))?(h(t.instance=a),a):(n=r,(a=Uu.get(o))&&ad(n=v({},r),a),h(a=(e=e.ownerDocument||e).createElement("script")),C(a,"link",n),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(A(443,t.type))}else"stylesheet"===t.type&&0==(4&t.state.loading)&&(n=t.instance,t.state.loading|=4,rd(n,r.precedence,e));return t.instance}function rd(e,t,r){for(var n=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,o=a,i=0;i<n.length;i++){var l=n[i];if(l.dataset.precedence===t)o=l;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===r.nodeType?r.head:r).insertBefore(e,t.firstChild)}function nd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function ad(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var od=null;function id(e,t,r){var n,a;if(null===od?(n=new Map,(a=od=new Map).set(r,n)):(n=(a=od).get(r))||(n=new Map,a.set(r,n)),!n.has(e))for(n.set(e,null),r=r.getElementsByTagName(e),a=0;a<r.length;a++){var o,i,l=r[a];l[lt]||l[p]||"link"===e&&"stylesheet"===l.getAttribute("rel")||"http://www.w3.org/2000/svg"===l.namespaceURI||(o=l.getAttribute(t)||"",(i=n.get(o=e+o))?i.push(l):n.set(o,[l]))}return n}function ld(e,t,r){(e=e.ownerDocument||e).head.insertBefore(r,"title"===t?e.querySelector("head > title"):null)}function sd(e){return"stylesheet"!==e.type||0!=(3&e.state.loading)}var cd=null;function ud(){}function dd(){var e;this.count--,0===this.count&&(this.stylesheets?pd(this,this.stylesheets):this.unsuspend&&(e=this.unsuspend,this.unsuspend=null,e()))}var fd=null;function pd(e,t){(e.stylesheets=null)!==e.unsuspend&&(e.count++,fd=new Map,t.forEach(hd,e),fd=null,dd.call(e))}function hd(e,t){if(!(4&t.state.loading)){var r=fd.get(e);if(r)var n=r.get(null);else{r=new Map,fd.set(e,r);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var i=a[o];"LINK"!==i.nodeName&&"not all"===i.getAttribute("media")||(r.set(i.dataset.precedence,i),n=i)}n&&r.set(null,n)}i=(a=t.instance).getAttribute("data-precedence"),(o=r.get(i)||n)===n&&r.set(null,a),r.set(i,a),this.count++,n=dd.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var md={$$typeof:X,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function gd(e,t,r,n,a,o,i,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function vd(e,t,r,n,a,o,i,l,s,c,u,d){return e=new gd(e,0,0,i,l,s,c,d),t=1,!0===o&&(t|=24),o=$n(3,null,null,t),(e.current=o).stateNode=e,(t=Wa()).refCount++,(e.pooledCache=t).refCount++,o.memoizedState={element:n,isDehydrated:r,cache:t},so(o),e}function bd(){return Un}function wd(e,t,r,n,a,o){a=bd(),null===n.context?n.context=a:n.pendingContext=a,(n=uo(t)).payload={element:r},null!==(o=void 0===o?null:o)&&(n.callback=o),null!==(r=fo(e,n,t))&&(pc(r,0,t),po(r,e,t))}function yd(e,t){var r;null!==(e=e.memoizedState)&&null!==e.dehydrated&&(r=e.retryLane,e.retryLane=0!==r&&r<t?r:t)}function xd(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function kd(e){var t;13===e.tag&&(null!==(t=In(e,67108864))&&pc(t,0,67108864),xd(e,67108864))}var Sd=!0;function Ed(e,t,r,n){var a=R.T,o=(R.T=null,F.p);try{F.p=2,Cd(e,t,r,n)}finally{F.p=o,R.T=a}}function Nd(e,t,r,n){var a=R.T,o=(R.T=null,F.p);try{F.p=8,Cd(e,t,r,n)}finally{F.p=o,R.T=a}}function Cd(e,t,r,n){if(Sd){var a=Od(n);if(null===a)du(e,t,n,Pd,r),Wd(e,n);else if(((e,t,r,n,a)=>{switch(t){case"focusin":return jd=Id(jd,e,t,r,n,a),1;case"dragenter":return Dd=Id(Dd,e,t,r,n,a),1;case"mouseover":return Td=Id(Td,e,t,r,n,a),1;case"pointerover":var o=a.pointerId;return Ld.set(o,Id(Ld.get(o)||null,e,t,r,n,a)),1;case"gotpointercapture":return o=a.pointerId,Rd.set(o,Id(Rd.get(o)||null,e,t,r,n,a)),1}})(a,e,t,r,n))n.stopPropagation();else if(Wd(e,n),4&t&&-1<Fd.indexOf(e)){for(;null!==a;){var o=ut(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var i=Ue(o.pendingLanes);if(0!==i){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;i;){var s=1<<31-Fe(i);l.entanglements[1]|=s,i&=~s}qc(o),0==(6&B)&&(ec=Ce()+500,Vc(0,!1))}}break;case 13:null!==(l=In(o,2))&&pc(l,0,2),vc(),xd(o,2)}if(null===(o=Od(n))&&du(e,t,n,Pd,r),o===a)break;a=o}null!==a&&n.stopPropagation()}else du(e,t,n,null,r)}}function Od(e){return zd(e=Xt(e))}var Pd=null;function zd(e){if((Pd=null)!==(e=ct(e))){var t=z(e);if(null===t)e=null;else{var r=t.tag;if(13===r){if(null!==(e=M(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Pd=e,null}function Md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case Pe:return 2;case ze:return 8;case Me:case _e:return 32;case je:return 268435456;default:return 32}default:return 32}}var _d=!1,jd=null,Dd=null,Td=null,Ld=new Map,Rd=new Map,Ad=[],Fd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":jd=null;break;case"dragenter":case"dragleave":Dd=null;break;case"mouseover":case"mouseout":Td=null;break;case"pointerover":case"pointerout":Ld.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rd.delete(t.pointerId)}}function Id(e,t,r,n,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},null!==t&&null!==(t=ut(t))&&kd(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a)),e}function Bd(e){var t=ct(e.target);if(null!==t){var r=z(t);if(null!==r)if(13===(t=r.tag)){if(null!==(t=M(r))){e.blockedOn=t;var n=e.priority,a=function(){var e,t;13===r.tag&&(e=Ze(e=dc()),null!==(t=In(r,e))&&pc(t,0,e),xd(r,e))},o=F.p;try{F.p=n,a()}finally{F.p=o}return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===r.tag?r.stateNode.containerInfo:null)}e.blockedOn=null}function Hd(e){if(null===e.blockedOn){for(var t=e.targetContainers;0<t.length;){var r=Od(e.nativeEvent);if(null!==r)return null!==(t=ut(r))&&kd(t),e.blockedOn=r,0;var n=new(r=e.nativeEvent).constructor(r.type,r);Kt=n,r.target.dispatchEvent(n),Kt=null,t.shift()}return 1}}function Ud(e,t,r){Hd(e)&&r.delete(t)}function Yd(){_d=!1,null!==jd&&Hd(jd)&&(jd=null),null!==Dd&&Hd(Dd)&&(Dd=null),null!==Td&&Hd(Td)&&(Td=null),Ld.forEach(Ud),Rd.forEach(Ud)}function $d(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yd)))}var qd=null;function Vd(o){qd!==o&&(qd=o,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){qd===o&&(qd=null);for(var e=0;e<o.length;e+=3){var t=o[e],r=o[e+1],n=o[e+2];if("function"!=typeof r){if(null===zd(r||t))continue;break}var a=ut(t);null!==a&&(o.splice(e,3),e-=3,ji(a,{pending:!0,data:n,method:t.method,action:r},r,n))}}))}function Qd(t){function e(e){return $d(e,t)}null!==jd&&$d(jd,t),null!==Dd&&$d(Dd,t),null!==Td&&$d(Td,t),Ld.forEach(e),Rd.forEach(e);for(var r=0;r<Ad.length;r++){var n=Ad[r];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Ad.length&&null===(r=Ad[0]).blockedOn;)Bd(r),null===r.blockedOn&&Ad.shift();if(null!=(r=(t.ownerDocument||t).$$reactFormReplay))for(n=0;n<r.length;n+=3){var a=r[n],o=r[n+1],a=a[tt]||null;if("function"==typeof o)a||Vd(r);else if(a){var i=null;if(o&&o.hasAttribute("formAction")){if(a=o[tt]||null)i=a.formAction;else if(null!==zd(o))continue}else i=a.action;"function"==typeof i?r[n+1]=i:(r.splice(n,3),n-=3),Vd(r)}}}function Gd(e){this._internalRoot=e}Gd.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(A(409));wd(t.current,dc(),e,t,null,null)},Gd.prototype.unmount=function(){var e,t=this._internalRoot;null!==t&&(this._internalRoot=null,e=t.containerInfo,wd(t.current,2,null,t,null,null),vc(),e[rt]=null)};e=O.version;if("19.1.1"!==e)throw Error(A(527,e,"19.1.1"));F.findDOMNode=function(e){var t=e._reactInternals;if(void 0!==t)return e=null===(e=null!==(e=(e=>{var t=e.alternate;if(!t){if(null===(t=z(e)))throw Error(A(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(null===a)break;var o=a.alternate;if(null===o){if(null===(n=a.return))break;r=n}else{if(a.child===o.child){for(o=a.child;o;){if(o===r)return _(a),e;if(o===n)return _(a),t;o=o.sibling}throw Error(A(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,n=o;break}if(l===n){i=!0,n=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=a;break}if(l===n){i=!0,n=o,r=a;break}l=l.sibling}if(!i)throw Error(A(189))}}if(r.alternate!==n)throw Error(A(190))}}if(3!==r.tag)throw Error(A(188));return r.stateNode.current===r?e:t})(t))?function e(t){var r=t.tag;if(5===r||26===r||27===r||6===r)return t;for(t=t.child;null!==t;){if(null!==(r=e(t)))return r;t=t.sibling}return null}(e):null)?null:e.stateNode;if("function"==typeof e.render)throw Error(A(188));throw e=Object.keys(e).join(","),Error(A(268,e))};t={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{Le=wr.inject(t),Re=wr}catch(e){}}o.createRoot=function(e,t){var r,n,a,o,i;if(P(e))return r=!1,n="",a=gl,o=vl,i=bl,null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(i=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks)&&t.unstable_transitionCallbacks,t=vd(e,1,!1,null,0,r,n,a,o,i,0,null),e[rt]=t.current,cu(e),new Gd(t);throw Error(A(299))}},314:e=>{e.exports=function(n){var u=[];return u.toString=function(){return this.map(function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(0<e[5].length?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t}).join("")},u.i=function(e,t,r,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(void 0!==a&&(void 0!==c[5]&&(c[1]="@layer".concat(0<c[5].length?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=t),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),u.push(c))}},u}},321:(e,t,r)=>{r.d(t,{A:()=>a});var t=r(601),t=r.n(t),n=r(314),r=r.n(n)()(t());r.push([e.id,`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);
    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);
    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);
    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);
    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);
    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);
    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);
    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);
    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);
    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);
    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);
    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;
    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;
    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;
    --radius-xs: 0.125rem;
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;
    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);
    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);
    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
    --animation-delay-0: 0s;
    --animation-delay-75: 75ms;
    --animation-delay-100: .1s;
    --animation-delay-150: .15s;
    --animation-delay-200: .2s;
    --animation-delay-300: .3s;
    --animation-delay-500: .5s;
    --animation-delay-700: .7s;
    --animation-delay-1000: 1s;
    --animation-repeat-0: 0;
    --animation-repeat-1: 1;
    --animation-repeat-infinite: infinite;
    --animation-direction-normal: normal;
    --animation-direction-reverse: reverse;
    --animation-direction-alternate: alternate;
    --animation-direction-alternate-reverse: alternate-reverse;
    --animation-fill-mode-none: none;
    --animation-fill-mode-forwards: forwards;
    --animation-fill-mode-backwards: backwards;
    --animation-fill-mode-both: both;
    --percentage-0: 0;
    --percentage-5: .05;
    --percentage-10: .1;
    --percentage-15: .15;
    --percentage-20: .2;
    --percentage-25: .25;
    --percentage-30: .3;
    --percentage-35: .35;
    --percentage-40: .4;
    --percentage-45: .45;
    --percentage-50: .5;
    --percentage-55: .55;
    --percentage-60: .6;
    --percentage-65: .65;
    --percentage-70: .7;
    --percentage-75: .75;
    --percentage-80: .8;
    --percentage-85: .85;
    --percentage-90: .9;
    --percentage-95: .95;
    --percentage-100: 1;
    --percentage-translate-full: 1;
    --animate-in: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-out: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-accordion-down: accordion-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-accordion-up: accordion-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-collapsible-down: collapsible-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-collapsible-up: collapsible-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    --animate-caret-blink: caret-blink 1.25s ease-out infinite;
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);
    --color-sidebar: var(--sidebar);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-ring: var(--sidebar-ring);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .\\@container\\/card-header {
    container-type: inline-size;
    container-name: card-header;
  }
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-0 {
    inset-inline: calc(var(--spacing) * 0);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .-top-12 {
    top: calc(var(--spacing) * -12);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1 {
    top: calc(var(--spacing) * 1);
  }
  .top-1\\.5 {
    top: calc(var(--spacing) * 1.5);
  }
  .top-1\\/2 {
    top: calc(1/2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-3 {
    top: calc(var(--spacing) * 3);
  }
  .top-3\\.5 {
    top: calc(var(--spacing) * 3.5);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-\\[1px\\] {
    top: 1px;
  }
  .top-\\[50\\%\\] {
    top: 50%;
  }
  .top-\\[60\\%\\] {
    top: 60%;
  }
  .top-full {
    top: 100%;
  }
  .-right-12 {
    right: calc(var(--spacing) * -12);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1 {
    right: calc(var(--spacing) * 1);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .-bottom-12 {
    bottom: calc(var(--spacing) * -12);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .-left-12 {
    left: calc(var(--spacing) * -12);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1 {
    left: calc(var(--spacing) * 1);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .left-\\[50\\%\\] {
    left: 50%;
  }
  .isolate {
    isolation: isolate;
  }
  .isolation-auto {
    isolation: auto;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-50 {
    z-index: 50;
  }
  .z-\\[1\\] {
    z-index: 1;
  }
  .z-\\[100\\] {
    z-index: 100;
  }
  .col-start-2 {
    grid-column-start: 2;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-start-1 {
    grid-row-start: 1;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .mx-2 {
    margin-inline: calc(var(--spacing) * 2);
  }
  .mx-3 {
    margin-inline: calc(var(--spacing) * 3);
  }
  .mx-3\\.5 {
    margin-inline: calc(var(--spacing) * 3.5);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-3 {
    margin-block: calc(var(--spacing) * 3);
  }
  .-mt-4 {
    margin-top: calc(var(--spacing) * -4);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-1\\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-auto {
    margin-top: auto;
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .-ml-4 {
    margin-left: calc(var(--spacing) * -4);
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-auto {
    margin-left: auto;
  }
  .line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .flow-root {
    display: flow-root;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .inline-table {
    display: inline-table;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-caption {
    display: table-caption;
  }
  .table-cell {
    display: table-cell;
  }
  .table-column {
    display: table-column;
  }
  .table-column-group {
    display: table-column-group;
  }
  .table-footer-group {
    display: table-footer-group;
  }
  .table-header-group {
    display: table-header-group;
  }
  .table-row {
    display: table-row;
  }
  .table-row-group {
    display: table-row-group;
  }
  .field-sizing-content {
    field-sizing: content;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .size-\\(--cell-size\\) {
    width: var(--cell-size);
    height: var(--cell-size);
  }
  .size-2 {
    width: calc(var(--spacing) * 2);
    height: calc(var(--spacing) * 2);
  }
  .size-2\\.5 {
    width: calc(var(--spacing) * 2.5);
    height: calc(var(--spacing) * 2.5);
  }
  .size-3 {
    width: calc(var(--spacing) * 3);
    height: calc(var(--spacing) * 3);
  }
  .size-3\\.5 {
    width: calc(var(--spacing) * 3.5);
    height: calc(var(--spacing) * 3.5);
  }
  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .size-7 {
    width: calc(var(--spacing) * 7);
    height: calc(var(--spacing) * 7);
  }
  .size-8 {
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
  }
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .size-auto {
    width: auto;
    height: auto;
  }
  .size-full {
    width: 100%;
    height: 100%;
  }
  .h-\\(--cell-size\\) {
    height: var(--cell-size);
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-1\\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-48 {
    height: calc(var(--spacing) * 48);
  }
  .h-\\[1\\.15rem\\] {
    height: 1.15rem;
  }
  .h-\\[calc\\(100\\%-1px\\)\\] {
    height: calc(100% - 1px);
  }
  .h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\] {
    height: var(--radix-navigation-menu-viewport-height);
  }
  .h-\\[var\\(--radix-select-trigger-height\\)\\] {
    height: var(--radix-select-trigger-height);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .h-svh {
    height: 100svh;
  }
  .max-h-\\(--radix-context-menu-content-available-height\\) {
    max-height: var(--radix-context-menu-content-available-height);
  }
  .max-h-\\(--radix-dropdown-menu-content-available-height\\) {
    max-height: var(--radix-dropdown-menu-content-available-height);
  }
  .max-h-\\(--radix-select-content-available-height\\) {
    max-height: var(--radix-select-content-available-height);
  }
  .max-h-\\[300px\\] {
    max-height: 300px;
  }
  .max-h-screen {
    max-height: 100vh;
  }
  .min-h-0 {
    min-height: calc(var(--spacing) * 0);
  }
  .min-h-4 {
    min-height: calc(var(--spacing) * 4);
  }
  .min-h-16 {
    min-height: calc(var(--spacing) * 16);
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .min-h-svh {
    min-height: 100svh;
  }
  .w-\\(--cell-size\\) {
    width: var(--cell-size);
  }
  .w-\\(--sidebar-width\\) {
    width: var(--sidebar-width);
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-2\\/3 {
    width: calc(2/3 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\/4 {
    width: calc(3/4 * 100%);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-72 {
    width: calc(var(--spacing) * 72);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[100px\\] {
    width: 100px;
  }
  .w-auto {
    width: auto;
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: -moz-max-content;
    width: max-content;
  }
  .w-px {
    width: 1px;
  }
  .max-w-\\(--skeleton-width\\) {
    max-width: var(--skeleton-width);
  }
  .max-w-7xl {
    max-width: var(--container-7xl);
  }
  .max-w-\\[calc\\(100\\%-2rem\\)\\] {
    max-width: calc(100% - 2rem);
  }
  .max-w-max {
    max-width: -moz-max-content;
    max-width: max-content;
  }
  .min-w-\\(--cell-size\\) {
    min-width: var(--cell-size);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-5 {
    min-width: calc(var(--spacing) * 5);
  }
  .min-w-8 {
    min-width: calc(var(--spacing) * 8);
  }
  .min-w-9 {
    min-width: calc(var(--spacing) * 9);
  }
  .min-w-10 {
    min-width: calc(var(--spacing) * 10);
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[12rem\\] {
    min-width: 12rem;
  }
  .min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
    min-width: var(--radix-select-trigger-width);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .grow {
    flex-grow: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }
  .basis-full {
    flex-basis: 100%;
  }
  .caption-bottom {
    caption-side: bottom;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-\\(--radix-context-menu-content-transform-origin\\) {
    transform-origin: var(--radix-context-menu-content-transform-origin);
  }
  .origin-\\(--radix-dropdown-menu-content-transform-origin\\) {
    transform-origin: var(--radix-dropdown-menu-content-transform-origin);
  }
  .origin-\\(--radix-hover-card-content-transform-origin\\) {
    transform-origin: var(--radix-hover-card-content-transform-origin);
  }
  .origin-\\(--radix-menubar-content-transform-origin\\) {
    transform-origin: var(--radix-menubar-content-transform-origin);
  }
  .origin-\\(--radix-popover-content-transform-origin\\) {
    transform-origin: var(--radix-popover-content-transform-origin);
  }
  .origin-\\(--radix-select-content-transform-origin\\) {
    transform-origin: var(--radix-select-content-transform-origin);
  }
  .origin-\\(--radix-tooltip-content-transform-origin\\) {
    transform-origin: var(--radix-tooltip-content-transform-origin);
  }
  .-translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-px {
    --tw-translate-x: -1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-\\[-50\\%\\] {
    --tw-translate-x: -50%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-px {
    --tw-translate-x: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[-50\\%\\] {
    --tw-translate-y: -50%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[calc\\(-50\\%_-_2px\\)\\] {
    --tw-translate-y: calc(-50% - 2px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-none {
    translate: none;
  }
  .scale-3d {
    scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
  }
  .rotate-45 {
    rotate: 45deg;
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-caret-blink {
    animation: caret-blink 1.25s ease-out infinite;
  }
  .animate-in {
    animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .cursor-default {
    cursor: default;
  }
  .touch-pinch-zoom {
    --tw-pinch-zoom: pinch-zoom;
    touch-action: var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,);
  }
  .touch-none {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .scroll-my-1 {
    scroll-margin-block: calc(var(--spacing) * 1);
  }
  .scroll-py-1 {
    scroll-padding-block: calc(var(--spacing) * 1);
  }
  .list-none {
    list-style-type: none;
  }
  .auto-rows-min {
    grid-auto-rows: min-content;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-\\[0_1fr\\] {
    grid-template-columns: 0 1fr;
  }
  .grid-rows-\\[auto_auto\\] {
    grid-template-rows: auto auto;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-items-start {
    justify-items: start;
  }
  .gap-0 {
    gap: calc(var(--spacing) * 0);
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-reverse {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 1;
    }
  }
  .space-x-4 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-reverse {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 1;
    }
  }
  .gap-y-0 {
    row-gap: calc(var(--spacing) * 0);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .divide-x {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-y-reverse {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 1;
    }
  }
  .self-start {
    align-self: flex-start;
  }
  .justify-self-end {
    justify-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-\\[2px\\] {
    border-radius: 2px;
  }
  .rounded-\\[4px\\] {
    border-radius: 4px;
  }
  .rounded-\\[inherit\\] {
    border-radius: inherit;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius);
  }
  .rounded-md {
    border-radius: calc(var(--radius) - 2px);
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-sm {
    border-radius: calc(var(--radius) - 4px);
  }
  .rounded-xl {
    border-radius: calc(var(--radius) + 4px);
  }
  .rounded-xs {
    border-radius: var(--radius-xs);
  }
  .rounded-s {
    border-start-start-radius: 0.25rem;
    border-end-start-radius: 0.25rem;
  }
  .rounded-ss {
    border-start-start-radius: 0.25rem;
  }
  .rounded-e {
    border-start-end-radius: 0.25rem;
    border-end-end-radius: 0.25rem;
  }
  .rounded-se {
    border-start-end-radius: 0.25rem;
  }
  .rounded-ee {
    border-end-end-radius: 0.25rem;
  }
  .rounded-es {
    border-end-start-radius: 0.25rem;
  }
  .rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .rounded-l {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-l-md {
    border-top-left-radius: calc(var(--radius) - 2px);
    border-bottom-left-radius: calc(var(--radius) - 2px);
  }
  .rounded-tl {
    border-top-left-radius: 0.25rem;
  }
  .rounded-tl-sm {
    border-top-left-radius: calc(var(--radius) - 4px);
  }
  .rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-r-md {
    border-top-right-radius: calc(var(--radius) - 2px);
    border-bottom-right-radius: calc(var(--radius) - 2px);
  }
  .rounded-tr {
    border-top-right-radius: 0.25rem;
  }
  .rounded-b {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .rounded-br {
    border-bottom-right-radius: 0.25rem;
  }
  .rounded-bl {
    border-bottom-left-radius: 0.25rem;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-s {
    border-inline-start-style: var(--tw-border-style);
    border-inline-start-width: 1px;
  }
  .border-e {
    border-inline-end-style: var(--tw-border-style);
    border-inline-end-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-border {
    border-color: var(--border);
  }
  .border-destructive {
    border-color: var(--destructive);
  }
  .border-input {
    border-color: var(--input);
  }
  .border-primary {
    border-color: var(--primary);
  }
  .border-sidebar-border {
    border-color: var(--sidebar-border);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-t-transparent {
    border-top-color: transparent;
  }
  .border-l-transparent {
    border-left-color: transparent;
  }
  .bg-\\[\\#9CAF88\\] {
    background-color: #9CAF88;
  }
  .bg-accent {
    background-color: var(--accent);
  }
  .bg-background {
    background-color: var(--background);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/50 {
    background-color: color-mix(in srgb, #000 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
    }
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-border {
    background-color: var(--border);
  }
  .bg-card {
    background-color: var(--card);
  }
  .bg-destructive {
    background-color: var(--destructive);
  }
  .bg-foreground {
    background-color: var(--foreground);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-green-600 {
    background-color: var(--color-green-600);
  }
  .bg-muted {
    background-color: var(--muted);
  }
  .bg-muted\\/50 {
    background-color: var(--muted);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--muted) 50%, transparent);
    }
  }
  .bg-popover {
    background-color: var(--popover);
  }
  .bg-primary {
    background-color: var(--primary);
  }
  .bg-primary\\/20 {
    background-color: var(--primary);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--primary) 20%, transparent);
    }
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-secondary {
    background-color: var(--secondary);
  }
  .bg-sidebar {
    background-color: var(--sidebar);
  }
  .bg-sidebar-border {
    background-color: var(--sidebar-border);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-repeat {
    background-repeat: repeat;
  }
  .mask-no-clip {
    -webkit-mask-clip: no-clip;
            mask-clip: no-clip;
  }
  .mask-repeat {
    -webkit-mask-repeat: repeat;
            mask-repeat: repeat;
  }
  .fill-current {
    fill: currentcolor;
  }
  .fill-primary {
    fill: var(--primary);
  }
  .fill-yellow-400 {
    fill: var(--color-yellow-400);
  }
  .object-cover {
    -o-object-fit: cover;
       object-fit: cover;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-\\[3px\\] {
    padding: 3px;
  }
  .p-px {
    padding: 1px;
  }
  .px-\\(--cell-size\\) {
    padding-inline: var(--cell-size);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .py-0 {
    padding-block: calc(var(--spacing) * 0);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-10 {
    padding-block: calc(var(--spacing) * 10);
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-16 {
    padding-right: calc(var(--spacing) * 16);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .align-middle {
    vertical-align: middle;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.8rem\\] {
    font-size: 0.8rem;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-balance {
    text-wrap: balance;
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .text-clip {
    text-overflow: clip;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .text-accent-foreground {
    color: var(--accent-foreground);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-card-foreground {
    color: var(--card-foreground);
  }
  .text-current {
    color: currentcolor;
  }
  .text-destructive {
    color: var(--destructive);
  }
  .text-destructive-foreground {
    color: var(--destructive-foreground);
  }
  .text-foreground {
    color: var(--foreground);
  }
  .text-foreground\\/50 {
    color: var(--foreground);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--foreground) 50%, transparent);
    }
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-muted-foreground {
    color: var(--muted-foreground);
  }
  .text-popover-foreground {
    color: var(--popover-foreground);
  }
  .text-primary {
    color: var(--primary);
  }
  .text-primary-foreground {
    color: var(--primary-foreground);
  }
  .text-secondary-foreground {
    color: var(--secondary-foreground);
  }
  .text-sidebar-foreground {
    color: var(--sidebar-foreground);
  }
  .text-sidebar-foreground\\/70 {
    color: var(--sidebar-foreground);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--sidebar-foreground) 70%, transparent);
    }
  }
  .text-white {
    color: var(--color-white);
  }
  .text-yellow-400 {
    color: var(--color-yellow-400);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .normal-case {
    text-transform: none;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .not-italic {
    font-style: normal;
  }
  .diagonal-fractions {
    --tw-numeric-fraction: diagonal-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .lining-nums {
    --tw-numeric-figure: lining-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .oldstyle-nums {
    --tw-numeric-figure: oldstyle-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .ordinal {
    --tw-ordinal: ordinal;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .proportional-nums {
    --tw-numeric-spacing: proportional-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .slashed-zero {
    --tw-slashed-zero: slashed-zero;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .stacked-fractions {
    --tw-numeric-fraction: stacked-fractions;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .normal-nums {
    font-variant-numeric: normal;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .overline {
    text-decoration-line: overline;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-4 {
    text-underline-offset: 4px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .subpixel-antialiased {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-70 {
    opacity: 70%;
  }
  .opacity-90 {
    opacity: 90%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, hsl(var(--sidebar-border)));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-none {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-0 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .inset-ring {
    --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-blue-500 {
    --tw-ring-color: var(--color-blue-500);
  }
  .ring-ring {
    --tw-ring-color: var(--ring);
  }
  .ring-ring\\/50 {
    --tw-ring-color: var(--ring);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
    }
  }
  .ring-sidebar-ring {
    --tw-ring-color: var(--sidebar-ring);
  }
  .ring-offset-background {
    --tw-ring-offset-color: var(--background);
  }
  .outline-hidden {
    --tw-outline-style: none;
    outline-style: none;
    @media (forced-colors: active) {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .drop-shadow {
    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.1))) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.06)));
    --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow( 0 1px 1px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur {
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-grayscale {
    --tw-backdrop-grayscale: grayscale(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-invert {
    --tw-backdrop-invert: invert(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-sepia {
    --tw-backdrop-sepia: sepia(100%);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,box-shadow\\] {
    transition-property: color,box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[left\\,right\\,width\\] {
    transition-property: left,right,width;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[margin\\,opacity\\] {
    transition-property: margin,opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[width\\,height\\,padding\\] {
    transition-property: width,height,padding;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[width\\] {
    transition-property: width;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .duration-1000 {
    --tw-duration: 1000ms;
    transition-duration: 1000ms;
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-linear {
    --tw-ease: linear;
    transition-timing-function: linear;
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .fade-in-0 {
    --tw-enter-opacity: calc(0/100);
    --tw-enter-opacity: 0;
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .slide-in-from-end {
    &:dir(ltr) {
      --tw-enter-translate-x: 100%;
    }
    &:dir(rtl) {
      --tw-enter-translate-x: -100%;
    }
  }
  .slide-in-from-start {
    &:dir(ltr) {
      --tw-enter-translate-x: -100%;
    }
    &:dir(rtl) {
      --tw-enter-translate-x: 100%;
    }
  }
  .slide-out-to-end {
    &:dir(ltr) {
      --tw-exit-translate-x: 100%;
    }
    &:dir(rtl) {
      --tw-exit-translate-x: -100%;
    }
  }
  .slide-out-to-start {
    &:dir(ltr) {
      --tw-exit-translate-x: -100%;
    }
    &:dir(rtl) {
      --tw-exit-translate-x: 100%;
    }
  }
  .zoom-in-95 {
    --tw-enter-scale: calc(95*1%);
    --tw-enter-scale: .95;
  }
  .-spin-in {
    --tw-enter-rotate: -30deg;
  }
  .-spin-out {
    --tw-exit-rotate: -30deg;
  }
  .\\[--cell-size\\:--spacing\\(8\\)\\] {
    --cell-size: calc(var(--spacing) * 8);
  }
  .divide-x-reverse {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 1;
    }
  }
  .fade-in {
    --tw-enter-opacity: 0;
  }
  .fade-out {
    --tw-exit-opacity: 0;
  }
  .paused {
    animation-play-state: paused;
  }
  .ring-inset {
    --tw-ring-inset: inset;
  }
  .running {
    animation-play-state: running;
  }
  .slide-in-from-bottom {
    --tw-enter-translate-y: 100%;
  }
  .slide-in-from-left {
    --tw-enter-translate-x: -100%;
  }
  .slide-in-from-right {
    --tw-enter-translate-x: 100%;
  }
  .slide-in-from-top {
    --tw-enter-translate-y: -100%;
  }
  .slide-out-to-bottom {
    --tw-exit-translate-y: 100%;
  }
  .slide-out-to-left {
    --tw-exit-translate-x: -100%;
  }
  .slide-out-to-right {
    --tw-exit-translate-x: 100%;
  }
  .slide-out-to-top {
    --tw-exit-translate-y: -100%;
  }
  .spin-in {
    --tw-enter-rotate: 30deg;
  }
  .spin-out {
    --tw-exit-rotate: 30deg;
  }
  .zoom-in {
    --tw-enter-scale: 0;
  }
  .zoom-out {
    --tw-exit-scale: 0;
  }
  .group-focus-within\\/menu-item\\:opacity-100 {
    &:is(:where(.group\\/menu-item):focus-within *) {
      opacity: 100%;
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-hover\\/menu-item\\:opacity-100 {
    &:is(:where(.group\\/menu-item):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-has-data-\\[sidebar\\=menu-action\\]\\/menu-item\\:pr-8 {
    &:is(:where(.group\\/menu-item):has(*[data-sidebar="menu-action"]) *) {
      padding-right: calc(var(--spacing) * 8);
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:-mt-8 {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      margin-top: calc(var(--spacing) * -8);
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:hidden {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      display: none;
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:size-8\\! {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      width: calc(var(--spacing) * 8) !important;
      height: calc(var(--spacing) * 8) !important;
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:w-\\(--sidebar-width-icon\\) {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      width: var(--sidebar-width-icon);
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\)\\] {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      width: calc(var(--sidebar-width-icon) + (calc(var(--spacing) * 4)));
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\+2px\\)\\] {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      width: calc(var(--sidebar-width-icon) + (calc(var(--spacing) * 4)) + 2px);
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:overflow-hidden {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      overflow: hidden;
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:p-0\\! {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      padding: calc(var(--spacing) * 0) !important;
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:p-2\\! {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      padding: calc(var(--spacing) * 2) !important;
    }
  }
  .group-data-\\[collapsible\\=icon\\]\\:opacity-0 {
    &:is(:where(.group)[data-collapsible="icon"] *) {
      opacity: 0%;
    }
  }
  .group-data-\\[collapsible\\=offcanvas\\]\\:right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
    &:is(:where(.group)[data-collapsible="offcanvas"] *) {
      right: calc(var(--sidebar-width) * -1);
    }
  }
  .group-data-\\[collapsible\\=offcanvas\\]\\:left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
    &:is(:where(.group)[data-collapsible="offcanvas"] *) {
      left: calc(var(--sidebar-width) * -1);
    }
  }
  .group-data-\\[collapsible\\=offcanvas\\]\\:w-0 {
    &:is(:where(.group)[data-collapsible="offcanvas"] *) {
      width: calc(var(--spacing) * 0);
    }
  }
  .group-data-\\[collapsible\\=offcanvas\\]\\:translate-x-0 {
    &:is(:where(.group)[data-collapsible="offcanvas"] *) {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .group-data-\\[disabled\\=true\\]\\:pointer-events-none {
    &:is(:where(.group)[data-disabled="true"] *) {
      pointer-events: none;
    }
  }
  .group-data-\\[disabled\\=true\\]\\:opacity-50 {
    &:is(:where(.group)[data-disabled="true"] *) {
      opacity: 50%;
    }
  }
  .group-data-\\[focused\\=true\\]\\/day\\:relative {
    &:is(:where(.group\\/day)[data-focused="true"] *) {
      position: relative;
    }
  }
  .group-data-\\[focused\\=true\\]\\/day\\:z-10 {
    &:is(:where(.group\\/day)[data-focused="true"] *) {
      z-index: 10;
    }
  }
  .group-data-\\[focused\\=true\\]\\/day\\:border-ring {
    &:is(:where(.group\\/day)[data-focused="true"] *) {
      border-color: var(--ring);
    }
  }
  .group-data-\\[focused\\=true\\]\\/day\\:ring-\\[3px\\] {
    &:is(:where(.group\\/day)[data-focused="true"] *) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .group-data-\\[focused\\=true\\]\\/day\\:ring-ring\\/50 {
    &:is(:where(.group\\/day)[data-focused="true"] *) {
      --tw-ring-color: var(--ring);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
      }
    }
  }
  .group-data-\\[side\\=left\\]\\:-right-4 {
    &:is(:where(.group)[data-side="left"] *) {
      right: calc(var(--spacing) * -4);
    }
  }
  .group-data-\\[side\\=left\\]\\:border-r {
    &:is(:where(.group)[data-side="left"] *) {
      border-right-style: var(--tw-border-style);
      border-right-width: 1px;
    }
  }
  .group-data-\\[side\\=right\\]\\:left-0 {
    &:is(:where(.group)[data-side="right"] *) {
      left: calc(var(--spacing) * 0);
    }
  }
  .group-data-\\[side\\=right\\]\\:rotate-180 {
    &:is(:where(.group)[data-side="right"] *) {
      rotate: 180deg;
    }
  }
  .group-data-\\[side\\=right\\]\\:border-l {
    &:is(:where(.group)[data-side="right"] *) {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
  }
  .group-data-\\[state\\=open\\]\\:rotate-180 {
    &:is(:where(.group)[data-state="open"] *) {
      rotate: 180deg;
    }
  }
  .group-data-\\[variant\\=floating\\]\\:rounded-lg {
    &:is(:where(.group)[data-variant="floating"] *) {
      border-radius: var(--radius);
    }
  }
  .group-data-\\[variant\\=floating\\]\\:border {
    &:is(:where(.group)[data-variant="floating"] *) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .group-data-\\[variant\\=floating\\]\\:border-sidebar-border {
    &:is(:where(.group)[data-variant="floating"] *) {
      border-color: var(--sidebar-border);
    }
  }
  .group-data-\\[variant\\=floating\\]\\:shadow-sm {
    &:is(:where(.group)[data-variant="floating"] *) {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:block {
    &:is(:where(.group\\/drawer-content)[data-vaul-drawer-direction="bottom"] *) {
      display: block;
    }
  }
  .group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:text-center {
    &:is(:where(.group\\/drawer-content)[data-vaul-drawer-direction="bottom"] *) {
      text-align: center;
    }
  }
  .group-data-\\[vaul-drawer-direction\\=top\\]\\/drawer-content\\:text-center {
    &:is(:where(.group\\/drawer-content)[data-vaul-drawer-direction="top"] *) {
      text-align: center;
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:top-full {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      top: 100%;
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:mt-1\\.5 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      margin-top: calc(var(--spacing) * 1.5);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:overflow-hidden {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      overflow: hidden;
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:rounded-md {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      border-radius: calc(var(--radius) - 2px);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:border {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:bg-popover {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      background-color: var(--popover);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:text-popover-foreground {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      color: var(--popover-foreground);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:shadow {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:duration-200 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      --tw-duration: 200ms;
      transition-duration: 200ms;
    }
  }
  .group-\\[\\.destructive\\]\\:border-muted\\/40 {
    &:is(:where(.group):is(.destructive) *) {
      border-color: var(--muted);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--muted) 40%, transparent);
      }
    }
  }
  .group-\\[\\.destructive\\]\\:text-red-300 {
    &:is(:where(.group):is(.destructive) *) {
      color: var(--color-red-300);
    }
  }
  .peer-hover\\/menu-button\\:text-sidebar-accent-foreground {
    &:is(:where(.peer\\/menu-button):hover ~ *) {
      @media (hover: hover) {
        color: var(--sidebar-accent-foreground);
      }
    }
  }
  .peer-disabled\\:cursor-not-allowed {
    &:is(:where(.peer):disabled ~ *) {
      cursor: not-allowed;
    }
  }
  .peer-disabled\\:opacity-50 {
    &:is(:where(.peer):disabled ~ *) {
      opacity: 50%;
    }
  }
  .peer-data-\\[active\\=true\\]\\/menu-button\\:text-sidebar-accent-foreground {
    &:is(:where(.peer\\/menu-button)[data-active="true"] ~ *) {
      color: var(--sidebar-accent-foreground);
    }
  }
  .peer-data-\\[size\\=default\\]\\/menu-button\\:top-1\\.5 {
    &:is(:where(.peer\\/menu-button)[data-size="default"] ~ *) {
      top: calc(var(--spacing) * 1.5);
    }
  }
  .peer-data-\\[size\\=lg\\]\\/menu-button\\:top-2\\.5 {
    &:is(:where(.peer\\/menu-button)[data-size="lg"] ~ *) {
      top: calc(var(--spacing) * 2.5);
    }
  }
  .peer-data-\\[size\\=sm\\]\\/menu-button\\:top-1 {
    &:is(:where(.peer\\/menu-button)[data-size="sm"] ~ *) {
      top: calc(var(--spacing) * 1);
    }
  }
  .selection\\:bg-primary {
    & *::-moz-selection {
      background-color: var(--primary);
    }
    & *::selection {
      background-color: var(--primary);
    }
    &::-moz-selection {
      background-color: var(--primary);
    }
    &::selection {
      background-color: var(--primary);
    }
  }
  .selection\\:text-primary-foreground {
    & *::-moz-selection {
      color: var(--primary-foreground);
    }
    & *::selection {
      color: var(--primary-foreground);
    }
    &::-moz-selection {
      color: var(--primary-foreground);
    }
    &::selection {
      color: var(--primary-foreground);
    }
  }
  .file\\:inline-flex {
    &::file-selector-button {
      display: inline-flex;
    }
  }
  .file\\:h-7 {
    &::file-selector-button {
      height: calc(var(--spacing) * 7);
    }
  }
  .file\\:border-0 {
    &::file-selector-button {
      border-style: var(--tw-border-style);
      border-width: 0px;
    }
  }
  .file\\:bg-transparent {
    &::file-selector-button {
      background-color: transparent;
    }
  }
  .file\\:text-sm {
    &::file-selector-button {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
  .file\\:font-medium {
    &::file-selector-button {
      --tw-font-weight: var(--font-weight-medium);
      font-weight: var(--font-weight-medium);
    }
  }
  .file\\:text-foreground {
    &::file-selector-button {
      color: var(--foreground);
    }
  }
  .placeholder\\:text-muted-foreground {
    &::-moz-placeholder {
      color: var(--muted-foreground);
    }
    &::placeholder {
      color: var(--muted-foreground);
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:-inset-2 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * -2);
    }
  }
  .after\\:inset-y-0 {
    &::after {
      content: var(--tw-content);
      inset-block: calc(var(--spacing) * 0);
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1/2 * 100%);
    }
  }
  .after\\:w-1 {
    &::after {
      content: var(--tw-content);
      width: calc(var(--spacing) * 1);
    }
  }
  .after\\:w-\\[2px\\] {
    &::after {
      content: var(--tw-content);
      width: 2px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1/2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:left-full {
    &:is(:where(.group)[data-collapsible="offcanvas"] *) {
      &::after {
        content: var(--tw-content);
        left: 100%;
      }
    }
  }
  .first\\:rounded-l-md {
    &:first-child {
      border-top-left-radius: calc(var(--radius) - 2px);
      border-bottom-left-radius: calc(var(--radius) - 2px);
    }
  }
  .first\\:border-l {
    &:first-child {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
  }
  .last\\:rounded-r-md {
    &:last-child {
      border-top-right-radius: calc(var(--radius) - 2px);
      border-bottom-right-radius: calc(var(--radius) - 2px);
    }
  }
  .last\\:border-b-0 {
    &:last-child {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 0px;
    }
  }
  .hover\\:bg-\\[\\#8A9B7A\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #8A9B7A;
      }
    }
  }
  .hover\\:bg-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--accent);
      }
    }
  }
  .hover\\:bg-destructive\\/90 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--destructive) 90%, transparent);
        }
      }
    }
  }
  .hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
  .hover\\:bg-green-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-green-700);
      }
    }
  }
  .hover\\:bg-muted {
    &:hover {
      @media (hover: hover) {
        background-color: var(--muted);
      }
    }
  }
  .hover\\:bg-muted\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--muted);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--muted) 50%, transparent);
        }
      }
    }
  }
  .hover\\:bg-primary\\/90 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--primary);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--primary) 90%, transparent);
        }
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-secondary {
    &:hover {
      @media (hover: hover) {
        background-color: var(--secondary);
      }
    }
  }
  .hover\\:bg-secondary\\/80 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--secondary);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--secondary) 80%, transparent);
        }
      }
    }
  }
  .hover\\:bg-sidebar-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--sidebar-accent);
      }
    }
  }
  .hover\\:text-accent-foreground {
    &:hover {
      @media (hover: hover) {
        color: var(--accent-foreground);
      }
    }
  }
  .hover\\:text-foreground {
    &:hover {
      @media (hover: hover) {
        color: var(--foreground);
      }
    }
  }
  .hover\\:text-muted-foreground {
    &:hover {
      @media (hover: hover) {
        color: var(--muted-foreground);
      }
    }
  }
  .hover\\:text-sidebar-accent-foreground {
    &:hover {
      @media (hover: hover) {
        color: var(--sidebar-accent-foreground);
      }
    }
  }
  .hover\\:underline {
    &:hover {
      @media (hover: hover) {
        text-decoration-line: underline;
      }
    }
  }
  .hover\\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .hover\\:shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\] {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 0 0 1px var(--tw-shadow-color, hsl(var(--sidebar-accent)));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:shadow-lg {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:shadow-md {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:ring-4 {
    &:hover {
      @media (hover: hover) {
        --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:group-data-\\[collapsible\\=offcanvas\\]\\:bg-sidebar {
    &:hover {
      @media (hover: hover) {
        &:is(:where(.group)[data-collapsible="offcanvas"] *) {
          background-color: var(--sidebar);
        }
      }
    }
  }
  .group-\\[\\.destructive\\]\\:hover\\:border-destructive\\/30 {
    &:is(:where(.group):is(.destructive) *) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--destructive);
          @supports (color: color-mix(in lab, red, red)) {
            border-color: color-mix(in oklab, var(--destructive) 30%, transparent);
          }
        }
      }
    }
  }
  .group-\\[\\.destructive\\]\\:hover\\:bg-destructive {
    &:is(:where(.group):is(.destructive) *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--destructive);
        }
      }
    }
  }
  .group-\\[\\.destructive\\]\\:hover\\:text-destructive-foreground {
    &:is(:where(.group):is(.destructive) *) {
      &:hover {
        @media (hover: hover) {
          color: var(--destructive-foreground);
        }
      }
    }
  }
  .group-\\[\\.destructive\\]\\:hover\\:text-red-50 {
    &:is(:where(.group):is(.destructive) *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-red-50);
        }
      }
    }
  }
  .hover\\:after\\:bg-sidebar-border {
    &:hover {
      @media (hover: hover) {
        &::after {
          content: var(--tw-content);
          background-color: var(--sidebar-border);
        }
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:bg-accent {
    &:focus {
      background-color: var(--accent);
    }
  }
  .focus\\:text-accent-foreground {
    &:focus {
      color: var(--accent-foreground);
    }
  }
  .focus\\:opacity-100 {
    &:focus {
      opacity: 100%;
    }
  }
  .focus\\:ring-2 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:ring-ring {
    &:focus {
      --tw-ring-color: var(--ring);
    }
  }
  .focus\\:ring-offset-2 {
    &:focus {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus\\:outline-hidden {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .group-\\[\\.destructive\\]\\:focus\\:ring-destructive {
    &:is(:where(.group):is(.destructive) *) {
      &:focus {
        --tw-ring-color: var(--destructive);
      }
    }
  }
  .group-\\[\\.destructive\\]\\:focus\\:ring-red-400 {
    &:is(:where(.group):is(.destructive) *) {
      &:focus {
        --tw-ring-color: var(--color-red-400);
      }
    }
  }
  .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600 {
    &:is(:where(.group):is(.destructive) *) {
      &:focus {
        --tw-ring-offset-color: var(--color-red-600);
      }
    }
  }
  .focus-visible\\:z-10 {
    &:focus-visible {
      z-index: 10;
    }
  }
  .focus-visible\\:border-ring {
    &:focus-visible {
      border-color: var(--ring);
    }
  }
  .focus-visible\\:ring-1 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-2 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-4 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-\\[3px\\] {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-destructive\\/20 {
    &:focus-visible {
      --tw-ring-color: var(--destructive);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);
      }
    }
  }
  .focus-visible\\:ring-ring {
    &:focus-visible {
      --tw-ring-color: var(--ring);
    }
  }
  .focus-visible\\:ring-ring\\/50 {
    &:focus-visible {
      --tw-ring-color: var(--ring);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
      }
    }
  }
  .focus-visible\\:ring-offset-1 {
    &:focus-visible {
      --tw-ring-offset-width: 1px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus-visible\\:outline-hidden {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .focus-visible\\:outline-1 {
    &:focus-visible {
      outline-style: var(--tw-outline-style);
      outline-width: 1px;
    }
  }
  .focus-visible\\:outline-ring {
    &:focus-visible {
      outline-color: var(--ring);
    }
  }
  .active\\:bg-sidebar-accent {
    &:active {
      background-color: var(--sidebar-accent);
    }
  }
  .active\\:text-sidebar-accent-foreground {
    &:active {
      color: var(--sidebar-accent-foreground);
    }
  }
  .disabled\\:pointer-events-none {
    &:disabled {
      pointer-events: none;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .in-data-\\[side\\=left\\]\\:cursor-w-resize {
    :where(*[data-side="left"]) & {
      cursor: w-resize;
    }
  }
  .in-data-\\[side\\=right\\]\\:cursor-e-resize {
    :where(*[data-side="right"]) & {
      cursor: e-resize;
    }
  }
  .has-focus\\:border-ring {
    &:has(*:focus) {
      border-color: var(--ring);
    }
  }
  .has-focus\\:ring-\\[3px\\] {
    &:has(*:focus) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .has-focus\\:ring-ring\\/50 {
    &:has(*:focus) {
      --tw-ring-color: var(--ring);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
      }
    }
  }
  .has-disabled\\:opacity-50 {
    &:has(*:disabled) {
      opacity: 50%;
    }
  }
  .has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\] {
    &:has(*[data-slot="card-action"]) {
      grid-template-columns: 1fr auto;
    }
  }
  .has-data-\\[variant\\=inset\\]\\:bg-sidebar {
    &:has(*[data-variant="inset"]) {
      background-color: var(--sidebar);
    }
  }
  .has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr\\] {
    &:has(>svg) {
      grid-template-columns: calc(var(--spacing) * 4) 1fr;
    }
  }
  .has-\\[\\>svg\\]\\:gap-x-3 {
    &:has(>svg) {
      -moz-column-gap: calc(var(--spacing) * 3);
           column-gap: calc(var(--spacing) * 3);
    }
  }
  .has-\\[\\>svg\\]\\:px-2\\.5 {
    &:has(>svg) {
      padding-inline: calc(var(--spacing) * 2.5);
    }
  }
  .has-\\[\\>svg\\]\\:px-3 {
    &:has(>svg) {
      padding-inline: calc(var(--spacing) * 3);
    }
  }
  .has-\\[\\>svg\\]\\:px-4 {
    &:has(>svg) {
      padding-inline: calc(var(--spacing) * 4);
    }
  }
  .aria-disabled\\:pointer-events-none {
    &[aria-disabled="true"] {
      pointer-events: none;
    }
  }
  .aria-disabled\\:opacity-50 {
    &[aria-disabled="true"] {
      opacity: 50%;
    }
  }
  .aria-invalid\\:border-destructive {
    &[aria-invalid="true"] {
      border-color: var(--destructive);
    }
  }
  .aria-invalid\\:ring-destructive\\/20 {
    &[aria-invalid="true"] {
      --tw-ring-color: var(--destructive);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);
      }
    }
  }
  .aria-selected\\:text-muted-foreground {
    &[aria-selected="true"] {
      color: var(--muted-foreground);
    }
  }
  .data-\\[active\\=true\\]\\:z-10 {
    &[data-active="true"] {
      z-index: 10;
    }
  }
  .data-\\[active\\=true\\]\\:border-ring {
    &[data-active="true"] {
      border-color: var(--ring);
    }
  }
  .data-\\[active\\=true\\]\\:bg-accent\\/50 {
    &[data-active="true"] {
      background-color: var(--accent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--accent) 50%, transparent);
      }
    }
  }
  .data-\\[active\\=true\\]\\:bg-sidebar-accent {
    &[data-active="true"] {
      background-color: var(--sidebar-accent);
    }
  }
  .data-\\[active\\=true\\]\\:font-medium {
    &[data-active="true"] {
      --tw-font-weight: var(--font-weight-medium);
      font-weight: var(--font-weight-medium);
    }
  }
  .data-\\[active\\=true\\]\\:text-accent-foreground {
    &[data-active="true"] {
      color: var(--accent-foreground);
    }
  }
  .data-\\[active\\=true\\]\\:text-sidebar-accent-foreground {
    &[data-active="true"] {
      color: var(--sidebar-accent-foreground);
    }
  }
  .data-\\[active\\=true\\]\\:ring-\\[3px\\] {
    &[data-active="true"] {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .data-\\[active\\=true\\]\\:ring-ring\\/50 {
    &[data-active="true"] {
      --tw-ring-color: var(--ring);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
      }
    }
  }
  .data-\\[active\\=true\\]\\:hover\\:bg-accent {
    &[data-active="true"] {
      &:hover {
        @media (hover: hover) {
          background-color: var(--accent);
        }
      }
    }
  }
  .data-\\[active\\=true\\]\\:focus\\:bg-accent {
    &[data-active="true"] {
      &:focus {
        background-color: var(--accent);
      }
    }
  }
  .data-\\[active\\=true\\]\\:aria-invalid\\:border-destructive {
    &[data-active="true"] {
      &[aria-invalid="true"] {
        border-color: var(--destructive);
      }
    }
  }
  .data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/20 {
    &[data-active="true"] {
      &[aria-invalid="true"] {
        --tw-ring-color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);
        }
      }
    }
  }
  .data-\\[disabled\\]\\:pointer-events-none {
    &[data-disabled] {
      pointer-events: none;
    }
  }
  .data-\\[disabled\\]\\:opacity-50 {
    &[data-disabled] {
      opacity: 50%;
    }
  }
  .data-\\[disabled\\=true\\]\\:pointer-events-none {
    &[data-disabled="true"] {
      pointer-events: none;
    }
  }
  .data-\\[disabled\\=true\\]\\:opacity-50 {
    &[data-disabled="true"] {
      opacity: 50%;
    }
  }
  .data-\\[error\\=true\\]\\:text-destructive {
    &[data-error="true"] {
      color: var(--destructive);
    }
  }
  .data-\\[inset\\]\\:pl-8 {
    &[data-inset] {
      padding-left: calc(var(--spacing) * 8);
    }
  }
  .data-\\[motion\\=from-end\\]\\:slide-in-from-right-52 {
    &[data-motion="from-end"] {
      --tw-enter-translate-x: calc(52*var(--spacing));
    }
  }
  .data-\\[motion\\=from-start\\]\\:slide-in-from-left-52 {
    &[data-motion="from-start"] {
      --tw-enter-translate-x: calc(52*var(--spacing)*-1);
    }
  }
  .data-\\[motion\\=to-end\\]\\:slide-out-to-right-52 {
    &[data-motion="to-end"] {
      --tw-exit-translate-x: calc(52*var(--spacing));
    }
  }
  .data-\\[motion\\=to-start\\]\\:slide-out-to-left-52 {
    &[data-motion="to-start"] {
      --tw-exit-translate-x: calc(52*var(--spacing)*-1);
    }
  }
  .data-\\[motion\\^\\=from-\\]\\:animate-in {
    &[data-motion^="from-"] {
      animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[motion\\^\\=from-\\]\\:fade-in {
    &[data-motion^="from-"] {
      --tw-enter-opacity: 0;
    }
  }
  .data-\\[motion\\^\\=to-\\]\\:animate-out {
    &[data-motion^="to-"] {
      animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[motion\\^\\=to-\\]\\:fade-out {
    &[data-motion^="to-"] {
      --tw-exit-opacity: 0;
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:h-1\\.5 {
    &[data-orientation="horizontal"] {
      height: calc(var(--spacing) * 1.5);
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:h-full {
    &[data-orientation="horizontal"] {
      height: 100%;
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:h-px {
    &[data-orientation="horizontal"] {
      height: 1px;
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:w-full {
    &[data-orientation="horizontal"] {
      width: 100%;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:h-full {
    &[data-orientation="vertical"] {
      height: 100%;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:min-h-44 {
    &[data-orientation="vertical"] {
      min-height: calc(var(--spacing) * 44);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-1\\.5 {
    &[data-orientation="vertical"] {
      width: calc(var(--spacing) * 1.5);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-auto {
    &[data-orientation="vertical"] {
      width: auto;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-full {
    &[data-orientation="vertical"] {
      width: 100%;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-px {
    &[data-orientation="vertical"] {
      width: 1px;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:flex-col {
    &[data-orientation="vertical"] {
      flex-direction: column;
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:h-px {
    &[data-panel-group-direction="vertical"] {
      height: 1px;
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:w-full {
    &[data-panel-group-direction="vertical"] {
      width: 100%;
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:flex-col {
    &[data-panel-group-direction="vertical"] {
      flex-direction: column;
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0 {
    &[data-panel-group-direction="vertical"] {
      &::after {
        content: var(--tw-content);
        left: calc(var(--spacing) * 0);
      }
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1 {
    &[data-panel-group-direction="vertical"] {
      &::after {
        content: var(--tw-content);
        height: calc(var(--spacing) * 1);
      }
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full {
    &[data-panel-group-direction="vertical"] {
      &::after {
        content: var(--tw-content);
        width: 100%;
      }
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0 {
    &[data-panel-group-direction="vertical"] {
      &::after {
        content: var(--tw-content);
        --tw-translate-x: calc(var(--spacing) * 0);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2 {
    &[data-panel-group-direction="vertical"] {
      &::after {
        content: var(--tw-content);
        --tw-translate-y: calc(calc(1/2 * 100%) * -1);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .data-\\[placeholder\\]\\:text-muted-foreground {
    &[data-placeholder] {
      color: var(--muted-foreground);
    }
  }
  .data-\\[range-end\\=true\\]\\:rounded-md {
    &[data-range-end="true"] {
      border-radius: calc(var(--radius) - 2px);
    }
  }
  .data-\\[range-end\\=true\\]\\:rounded-r-md {
    &[data-range-end="true"] {
      border-top-right-radius: calc(var(--radius) - 2px);
      border-bottom-right-radius: calc(var(--radius) - 2px);
    }
  }
  .data-\\[range-end\\=true\\]\\:bg-\\[\\#9CAF88\\] {
    &[data-range-end="true"] {
      background-color: #9CAF88;
    }
  }
  .data-\\[range-end\\=true\\]\\:text-primary-foreground {
    &[data-range-end="true"] {
      color: var(--primary-foreground);
    }
  }
  .data-\\[range-middle\\=true\\]\\:rounded-none {
    &[data-range-middle="true"] {
      border-radius: 0;
    }
  }
  .data-\\[range-middle\\=true\\]\\:bg-accent {
    &[data-range-middle="true"] {
      background-color: var(--accent);
    }
  }
  .data-\\[range-middle\\=true\\]\\:text-accent-foreground {
    &[data-range-middle="true"] {
      color: var(--accent-foreground);
    }
  }
  .data-\\[range-start\\=true\\]\\:rounded-md {
    &[data-range-start="true"] {
      border-radius: calc(var(--radius) - 2px);
    }
  }
  .data-\\[range-start\\=true\\]\\:rounded-l-md {
    &[data-range-start="true"] {
      border-top-left-radius: calc(var(--radius) - 2px);
      border-bottom-left-radius: calc(var(--radius) - 2px);
    }
  }
  .data-\\[range-start\\=true\\]\\:bg-\\[\\#9CAF88\\] {
    &[data-range-start="true"] {
      background-color: #9CAF88;
    }
  }
  .data-\\[range-start\\=true\\]\\:text-primary-foreground {
    &[data-range-start="true"] {
      color: var(--primary-foreground);
    }
  }
  .data-\\[selected-single\\=true\\]\\:bg-primary {
    &[data-selected-single="true"] {
      background-color: var(--primary);
    }
  }
  .data-\\[selected-single\\=true\\]\\:text-primary-foreground {
    &[data-selected-single="true"] {
      color: var(--primary-foreground);
    }
  }
  .data-\\[selected\\=true\\]\\:rounded-none {
    &[data-selected="true"] {
      border-radius: 0;
    }
  }
  .data-\\[selected\\=true\\]\\:bg-accent {
    &[data-selected="true"] {
      background-color: var(--accent);
    }
  }
  .data-\\[selected\\=true\\]\\:text-accent-foreground {
    &[data-selected="true"] {
      color: var(--accent-foreground);
    }
  }
  .data-\\[side\\=bottom\\]\\:translate-y-1 {
    &[data-side="bottom"] {
      --tw-translate-y: calc(var(--spacing) * 1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[side\\=bottom\\]\\:slide-in-from-top-2 {
    &[data-side="bottom"] {
      --tw-enter-translate-y: calc(2*var(--spacing)*-1);
    }
  }
  .data-\\[side\\=left\\]\\:-translate-x-1 {
    &[data-side="left"] {
      --tw-translate-x: calc(var(--spacing) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[side\\=left\\]\\:slide-in-from-right-2 {
    &[data-side="left"] {
      --tw-enter-translate-x: calc(2*var(--spacing));
    }
  }
  .data-\\[side\\=right\\]\\:translate-x-1 {
    &[data-side="right"] {
      --tw-translate-x: calc(var(--spacing) * 1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[side\\=right\\]\\:slide-in-from-left-2 {
    &[data-side="right"] {
      --tw-enter-translate-x: calc(2*var(--spacing)*-1);
    }
  }
  .data-\\[side\\=top\\]\\:-translate-y-1 {
    &[data-side="top"] {
      --tw-translate-y: calc(var(--spacing) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[side\\=top\\]\\:slide-in-from-bottom-2 {
    &[data-side="top"] {
      --tw-enter-translate-y: calc(2*var(--spacing));
    }
  }
  .data-\\[size\\=default\\]\\:h-9 {
    &[data-size="default"] {
      height: calc(var(--spacing) * 9);
    }
  }
  .data-\\[size\\=sm\\]\\:h-8 {
    &[data-size="sm"] {
      height: calc(var(--spacing) * 8);
    }
  }
  .\\*\\:data-\\[slot\\=alert-description\\]\\:text-destructive\\/90 {
    :is(& > *) {
      &[data-slot="alert-description"] {
        color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          color: color-mix(in oklab, var(--destructive) 90%, transparent);
        }
      }
    }
  }
  .\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 {
    :is(& *) {
      &[data-slot="command-input-wrapper"] {
        height: calc(var(--spacing) * 12);
      }
    }
  }
  .\\*\\*\\:data-\\[slot\\=navigation-menu-link\\]\\:focus\\:ring-0 {
    :is(& *) {
      &[data-slot="navigation-menu-link"] {
        &:focus {
          --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
          box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
        }
      }
    }
  }
  .\\*\\*\\:data-\\[slot\\=navigation-menu-link\\]\\:focus\\:outline-none {
    :is(& *) {
      &[data-slot="navigation-menu-link"] {
        &:focus {
          --tw-outline-style: none;
          outline-style: none;
        }
      }
    }
  }
  .\\*\\:data-\\[slot\\=select-value\\]\\:line-clamp-1 {
    :is(& > *) {
      &[data-slot="select-value"] {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
  .\\*\\:data-\\[slot\\=select-value\\]\\:flex {
    :is(& > *) {
      &[data-slot="select-value"] {
        display: flex;
      }
    }
  }
  .\\*\\:data-\\[slot\\=select-value\\]\\:items-center {
    :is(& > *) {
      &[data-slot="select-value"] {
        align-items: center;
      }
    }
  }
  .\\*\\:data-\\[slot\\=select-value\\]\\:gap-2 {
    :is(& > *) {
      &[data-slot="select-value"] {
        gap: calc(var(--spacing) * 2);
      }
    }
  }
  .data-\\[state\\=active\\]\\:bg-background {
    &[data-state="active"] {
      background-color: var(--background);
    }
  }
  .data-\\[state\\=active\\]\\:shadow-sm {
    &[data-state="active"] {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\] {
    &[data-state="checked"] {
      --tw-translate-x: calc(100% - 2px);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[state\\=checked\\]\\:border-primary {
    &[data-state="checked"] {
      border-color: var(--primary);
    }
  }
  .data-\\[state\\=checked\\]\\:bg-primary {
    &[data-state="checked"] {
      background-color: var(--primary);
    }
  }
  .data-\\[state\\=checked\\]\\:text-primary-foreground {
    &[data-state="checked"] {
      color: var(--primary-foreground);
    }
  }
  .data-\\[state\\=closed\\]\\:animate-accordion-up {
    &[data-state="closed"] {
      animation: accordion-up var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=closed\\]\\:animate-out {
    &[data-state="closed"] {
      animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=closed\\]\\:duration-300 {
    &[data-state="closed"] {
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
  .data-\\[state\\=closed\\]\\:fade-out-0 {
    &[data-state="closed"] {
      --tw-exit-opacity: calc(0/100);
      --tw-exit-opacity: 0;
    }
  }
  .data-\\[state\\=closed\\]\\:fade-out-80 {
    &[data-state="closed"] {
      --tw-exit-opacity: calc(80/100);
      --tw-exit-opacity: .8;
    }
  }
  .data-\\[state\\=closed\\]\\:zoom-out-95 {
    &[data-state="closed"] {
      --tw-exit-scale: calc(95*1%);
      --tw-exit-scale: .95;
    }
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-bottom {
    &[data-state="closed"] {
      --tw-exit-translate-y: 100%;
    }
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-left {
    &[data-state="closed"] {
      --tw-exit-translate-x: -100%;
    }
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-right {
    &[data-state="closed"] {
      --tw-exit-translate-x: 100%;
    }
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-right-full {
    &[data-state="closed"] {
      --tw-exit-translate-x: calc(1*100%);
    }
  }
  .data-\\[state\\=closed\\]\\:slide-out-to-top {
    &[data-state="closed"] {
      --tw-exit-translate-y: -100%;
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:animate-out {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="closed"] {
        animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
      }
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:fade-out-0 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="closed"] {
        --tw-exit-opacity: calc(0/100);
        --tw-exit-opacity: 0;
      }
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=closed\\]\\:zoom-out-95 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="closed"] {
        --tw-exit-scale: calc(95*1%);
        --tw-exit-scale: .95;
      }
    }
  }
  .data-\\[state\\=hidden\\]\\:animate-out {
    &[data-state="hidden"] {
      animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=hidden\\]\\:fade-out {
    &[data-state="hidden"] {
      --tw-exit-opacity: 0;
    }
  }
  .data-\\[state\\=on\\]\\:bg-accent {
    &[data-state="on"] {
      background-color: var(--accent);
    }
  }
  .data-\\[state\\=on\\]\\:text-accent-foreground {
    &[data-state="on"] {
      color: var(--accent-foreground);
    }
  }
  .data-\\[state\\=open\\]\\:animate-accordion-down {
    &[data-state="open"] {
      animation: accordion-down var(--tw-animation-duration,var(--tw-duration,.2s))var(--tw-ease,ease-out)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=open\\]\\:animate-in {
    &[data-state="open"] {
      animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=open\\]\\:bg-accent {
    &[data-state="open"] {
      background-color: var(--accent);
    }
  }
  .data-\\[state\\=open\\]\\:bg-accent\\/50 {
    &[data-state="open"] {
      background-color: var(--accent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--accent) 50%, transparent);
      }
    }
  }
  .data-\\[state\\=open\\]\\:bg-secondary {
    &[data-state="open"] {
      background-color: var(--secondary);
    }
  }
  .data-\\[state\\=open\\]\\:text-accent-foreground {
    &[data-state="open"] {
      color: var(--accent-foreground);
    }
  }
  .data-\\[state\\=open\\]\\:text-muted-foreground {
    &[data-state="open"] {
      color: var(--muted-foreground);
    }
  }
  .data-\\[state\\=open\\]\\:opacity-100 {
    &[data-state="open"] {
      opacity: 100%;
    }
  }
  .data-\\[state\\=open\\]\\:duration-500 {
    &[data-state="open"] {
      --tw-duration: 500ms;
      transition-duration: 500ms;
    }
  }
  .data-\\[state\\=open\\]\\:fade-in-0 {
    &[data-state="open"] {
      --tw-enter-opacity: calc(0/100);
      --tw-enter-opacity: 0;
    }
  }
  .data-\\[state\\=open\\]\\:zoom-in-90 {
    &[data-state="open"] {
      --tw-enter-scale: calc(90*1%);
      --tw-enter-scale: .9;
    }
  }
  .data-\\[state\\=open\\]\\:zoom-in-95 {
    &[data-state="open"] {
      --tw-enter-scale: calc(95*1%);
      --tw-enter-scale: .95;
    }
  }
  .data-\\[state\\=open\\]\\:slide-in-from-bottom {
    &[data-state="open"] {
      --tw-enter-translate-y: 100%;
    }
  }
  .data-\\[state\\=open\\]\\:slide-in-from-left {
    &[data-state="open"] {
      --tw-enter-translate-x: -100%;
    }
  }
  .data-\\[state\\=open\\]\\:slide-in-from-right {
    &[data-state="open"] {
      --tw-enter-translate-x: 100%;
    }
  }
  .data-\\[state\\=open\\]\\:slide-in-from-top {
    &[data-state="open"] {
      --tw-enter-translate-y: -100%;
    }
  }
  .data-\\[state\\=open\\]\\:slide-in-from-top-full {
    &[data-state="open"] {
      --tw-enter-translate-y: calc(1*-100%);
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:animate-in {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="open"] {
        animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
      }
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:fade-in-0 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="open"] {
        --tw-enter-opacity: calc(0/100);
        --tw-enter-opacity: 0;
      }
    }
  }
  .group-data-\\[viewport\\=false\\]\\/navigation-menu\\:data-\\[state\\=open\\]\\:zoom-in-95 {
    &:is(:where(.group\\/navigation-menu)[data-viewport="false"] *) {
      &[data-state="open"] {
        --tw-enter-scale: calc(95*1%);
        --tw-enter-scale: .95;
      }
    }
  }
  .data-\\[state\\=open\\]\\:hover\\:bg-accent {
    &[data-state="open"] {
      &:hover {
        @media (hover: hover) {
          background-color: var(--accent);
        }
      }
    }
  }
  .data-\\[state\\=open\\]\\:hover\\:bg-sidebar-accent {
    &[data-state="open"] {
      &:hover {
        @media (hover: hover) {
          background-color: var(--sidebar-accent);
        }
      }
    }
  }
  .data-\\[state\\=open\\]\\:hover\\:text-sidebar-accent-foreground {
    &[data-state="open"] {
      &:hover {
        @media (hover: hover) {
          color: var(--sidebar-accent-foreground);
        }
      }
    }
  }
  .data-\\[state\\=open\\]\\:focus\\:bg-accent {
    &[data-state="open"] {
      &:focus {
        background-color: var(--accent);
      }
    }
  }
  .data-\\[state\\=selected\\]\\:bg-muted {
    &[data-state="selected"] {
      background-color: var(--muted);
    }
  }
  .data-\\[state\\=unchecked\\]\\:translate-x-0 {
    &[data-state="unchecked"] {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[state\\=unchecked\\]\\:bg-input {
    &[data-state="unchecked"] {
      background-color: var(--input);
    }
  }
  .data-\\[state\\=visible\\]\\:animate-in {
    &[data-state="visible"] {
      animation: enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[state\\=visible\\]\\:fade-in {
    &[data-state="visible"] {
      --tw-enter-opacity: 0;
    }
  }
  .data-\\[swipe\\=cancel\\]\\:translate-x-0 {
    &[data-swipe="cancel"] {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\] {
    &[data-swipe="end"] {
      --tw-translate-x: var(--radix-toast-swipe-end-x);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[swipe\\=end\\]\\:animate-out {
    &[data-swipe="end"] {
      animation: exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none);
    }
  }
  .data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\] {
    &[data-swipe="move"] {
      --tw-translate-x: var(--radix-toast-swipe-move-x);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[swipe\\=move\\]\\:transition-none {
    &[data-swipe="move"] {
      transition-property: none;
    }
  }
  .data-\\[variant\\=destructive\\]\\:text-destructive {
    &[data-variant="destructive"] {
      color: var(--destructive);
    }
  }
  .data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10 {
    &[data-variant="destructive"] {
      &:focus {
        background-color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--destructive) 10%, transparent);
        }
      }
    }
  }
  .data-\\[variant\\=destructive\\]\\:focus\\:text-destructive {
    &[data-variant="destructive"] {
      &:focus {
        color: var(--destructive);
      }
    }
  }
  .data-\\[variant\\=outline\\]\\:border-l-0 {
    &[data-variant="outline"] {
      border-left-style: var(--tw-border-style);
      border-left-width: 0px;
    }
  }
  .data-\\[variant\\=outline\\]\\:shadow-xs {
    &[data-variant="outline"] {
      --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .data-\\[variant\\=outline\\]\\:first\\:border-l {
    &[data-variant="outline"] {
      &:first-child {
        border-left-style: var(--tw-border-style);
        border-left-width: 1px;
      }
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:inset-x-0 {
    &[data-vaul-drawer-direction="bottom"] {
      inset-inline: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:bottom-0 {
    &[data-vaul-drawer-direction="bottom"] {
      bottom: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:mt-24 {
    &[data-vaul-drawer-direction="bottom"] {
      margin-top: calc(var(--spacing) * 24);
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:max-h-\\[80vh\\] {
    &[data-vaul-drawer-direction="bottom"] {
      max-height: 80vh;
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:rounded-t-lg {
    &[data-vaul-drawer-direction="bottom"] {
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
    }
  }
  .data-\\[vaul-drawer-direction\\=bottom\\]\\:border-t {
    &[data-vaul-drawer-direction="bottom"] {
      border-top-style: var(--tw-border-style);
      border-top-width: 1px;
    }
  }
  .data-\\[vaul-drawer-direction\\=left\\]\\:inset-y-0 {
    &[data-vaul-drawer-direction="left"] {
      inset-block: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=left\\]\\:left-0 {
    &[data-vaul-drawer-direction="left"] {
      left: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=left\\]\\:w-3\\/4 {
    &[data-vaul-drawer-direction="left"] {
      width: calc(3/4 * 100%);
    }
  }
  .data-\\[vaul-drawer-direction\\=left\\]\\:border-r {
    &[data-vaul-drawer-direction="left"] {
      border-right-style: var(--tw-border-style);
      border-right-width: 1px;
    }
  }
  .data-\\[vaul-drawer-direction\\=right\\]\\:inset-y-0 {
    &[data-vaul-drawer-direction="right"] {
      inset-block: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=right\\]\\:right-0 {
    &[data-vaul-drawer-direction="right"] {
      right: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=right\\]\\:w-3\\/4 {
    &[data-vaul-drawer-direction="right"] {
      width: calc(3/4 * 100%);
    }
  }
  .data-\\[vaul-drawer-direction\\=right\\]\\:border-l {
    &[data-vaul-drawer-direction="right"] {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:inset-x-0 {
    &[data-vaul-drawer-direction="top"] {
      inset-inline: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:top-0 {
    &[data-vaul-drawer-direction="top"] {
      top: calc(var(--spacing) * 0);
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:mb-24 {
    &[data-vaul-drawer-direction="top"] {
      margin-bottom: calc(var(--spacing) * 24);
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:max-h-\\[80vh\\] {
    &[data-vaul-drawer-direction="top"] {
      max-height: 80vh;
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:rounded-b-lg {
    &[data-vaul-drawer-direction="top"] {
      border-bottom-right-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }
  }
  .data-\\[vaul-drawer-direction\\=top\\]\\:border-b {
    &[data-vaul-drawer-direction="top"] {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 1px;
    }
  }
  .sm\\:top-auto {
    @media (width >= 40rem) {
      top: auto;
    }
  }
  .sm\\:right-0 {
    @media (width >= 40rem) {
      right: calc(var(--spacing) * 0);
    }
  }
  .sm\\:bottom-0 {
    @media (width >= 40rem) {
      bottom: calc(var(--spacing) * 0);
    }
  }
  .sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
  .sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
  .sm\\:max-w-lg {
    @media (width >= 40rem) {
      max-width: var(--container-lg);
    }
  }
  .sm\\:max-w-sm {
    @media (width >= 40rem) {
      max-width: var(--container-sm);
    }
  }
  .sm\\:flex-col {
    @media (width >= 40rem) {
      flex-direction: column;
    }
  }
  .sm\\:flex-row {
    @media (width >= 40rem) {
      flex-direction: row;
    }
  }
  .sm\\:justify-end {
    @media (width >= 40rem) {
      justify-content: flex-end;
    }
  }
  .sm\\:gap-2\\.5 {
    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 2.5);
    }
  }
  .sm\\:border-b-0 {
    @media (width >= 40rem) {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 0px;
    }
  }
  .sm\\:px-6 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
  }
  .sm\\:pr-2\\.5 {
    @media (width >= 40rem) {
      padding-right: calc(var(--spacing) * 2.5);
    }
  }
  .sm\\:pl-2\\.5 {
    @media (width >= 40rem) {
      padding-left: calc(var(--spacing) * 2.5);
    }
  }
  .sm\\:text-left {
    @media (width >= 40rem) {
      text-align: left;
    }
  }
  .data-\\[state\\=open\\]\\:sm\\:slide-in-from-bottom-full {
    &[data-state="open"] {
      @media (width >= 40rem) {
        --tw-enter-translate-y: calc(1*100%);
      }
    }
  }
  .data-\\[vaul-drawer-direction\\=left\\]\\:sm\\:max-w-sm {
    &[data-vaul-drawer-direction="left"] {
      @media (width >= 40rem) {
        max-width: var(--container-sm);
      }
    }
  }
  .data-\\[vaul-drawer-direction\\=right\\]\\:sm\\:max-w-sm {
    &[data-vaul-drawer-direction="right"] {
      @media (width >= 40rem) {
        max-width: var(--container-sm);
      }
    }
  }
  .md\\:absolute {
    @media (width >= 48rem) {
      position: absolute;
    }
  }
  .md\\:col-span-1 {
    @media (width >= 48rem) {
      grid-column: span 1 / span 1;
    }
  }
  .md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
  .md\\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\] {
    @media (width >= 48rem) {
      width: var(--radix-navigation-menu-viewport-width);
    }
  }
  .md\\:w-auto {
    @media (width >= 48rem) {
      width: auto;
    }
  }
  .md\\:max-w-\\[420px\\] {
    @media (width >= 48rem) {
      max-width: 420px;
    }
  }
  .md\\:grid-cols-3 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .md\\:flex-row {
    @media (width >= 48rem) {
      flex-direction: row;
    }
  }
  .md\\:gap-1\\.5 {
    @media (width >= 48rem) {
      gap: calc(var(--spacing) * 1.5);
    }
  }
  .md\\:text-left {
    @media (width >= 48rem) {
      text-align: left;
    }
  }
  .md\\:text-sm {
    @media (width >= 48rem) {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
  .md\\:opacity-0 {
    @media (width >= 48rem) {
      opacity: 0%;
    }
  }
  .md\\:peer-data-\\[variant\\=inset\\]\\:m-2 {
    @media (width >= 48rem) {
      &:is(:where(.peer)[data-variant="inset"] ~ *) {
        margin: calc(var(--spacing) * 2);
      }
    }
  }
  .md\\:peer-data-\\[variant\\=inset\\]\\:ml-0 {
    @media (width >= 48rem) {
      &:is(:where(.peer)[data-variant="inset"] ~ *) {
        margin-left: calc(var(--spacing) * 0);
      }
    }
  }
  .md\\:peer-data-\\[variant\\=inset\\]\\:rounded-xl {
    @media (width >= 48rem) {
      &:is(:where(.peer)[data-variant="inset"] ~ *) {
        border-radius: calc(var(--radius) + 4px);
      }
    }
  }
  .md\\:peer-data-\\[variant\\=inset\\]\\:shadow-sm {
    @media (width >= 48rem) {
      &:is(:where(.peer)[data-variant="inset"] ~ *) {
        --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .md\\:peer-data-\\[variant\\=inset\\]\\:peer-data-\\[state\\=collapsed\\]\\:ml-2 {
    @media (width >= 48rem) {
      &:is(:where(.peer)[data-variant="inset"] ~ *) {
        &:is(:where(.peer)[data-state="collapsed"] ~ *) {
          margin-left: calc(var(--spacing) * 2);
        }
      }
    }
  }
  .md\\:after\\:hidden {
    @media (width >= 48rem) {
      &::after {
        content: var(--tw-content);
        display: none;
      }
    }
  }
  .lg\\:col-span-1 {
    @media (width >= 64rem) {
      grid-column: span 1 / span 1;
    }
  }
  .lg\\:col-span-2 {
    @media (width >= 64rem) {
      grid-column: span 2 / span 2;
    }
  }
  .lg\\:grid-cols-3 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .lg\\:px-8 {
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  .dark\\:border-input {
    &:is(.dark *) {
      border-color: var(--input);
    }
  }
  .dark\\:bg-destructive\\/60 {
    &:is(.dark *) {
      background-color: var(--destructive);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--destructive) 60%, transparent);
      }
    }
  }
  .dark\\:bg-input\\/30 {
    &:is(.dark *) {
      background-color: var(--input);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--input) 30%, transparent);
      }
    }
  }
  .dark\\:text-muted-foreground {
    &:is(.dark *) {
      color: var(--muted-foreground);
    }
  }
  .dark\\:hover\\:bg-accent\\/50 {
    &:is(.dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--accent);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--accent) 50%, transparent);
          }
        }
      }
    }
  }
  .dark\\:hover\\:bg-input\\/50 {
    &:is(.dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--input);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--input) 50%, transparent);
          }
        }
      }
    }
  }
  .dark\\:hover\\:text-accent-foreground {
    &:is(.dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--accent-foreground);
        }
      }
    }
  }
  .dark\\:focus-visible\\:ring-destructive\\/40 {
    &:is(.dark *) {
      &:focus-visible {
        --tw-ring-color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);
        }
      }
    }
  }
  .dark\\:aria-invalid\\:ring-destructive\\/40 {
    &:is(.dark *) {
      &[aria-invalid="true"] {
        --tw-ring-color: var(--destructive);
        @supports (color: color-mix(in lab, red, red)) {
          --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);
        }
      }
    }
  }
  .dark\\:data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/40 {
    &:is(.dark *) {
      &[data-active="true"] {
        &[aria-invalid="true"] {
          --tw-ring-color: var(--destructive);
          @supports (color: color-mix(in lab, red, red)) {
            --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);
          }
        }
      }
    }
  }
  .dark\\:data-\\[state\\=active\\]\\:border-input {
    &:is(.dark *) {
      &[data-state="active"] {
        border-color: var(--input);
      }
    }
  }
  .dark\\:data-\\[state\\=active\\]\\:bg-input\\/30 {
    &:is(.dark *) {
      &[data-state="active"] {
        background-color: var(--input);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--input) 30%, transparent);
        }
      }
    }
  }
  .dark\\:data-\\[state\\=active\\]\\:text-foreground {
    &:is(.dark *) {
      &[data-state="active"] {
        color: var(--foreground);
      }
    }
  }
  .dark\\:data-\\[state\\=checked\\]\\:bg-primary {
    &:is(.dark *) {
      &[data-state="checked"] {
        background-color: var(--primary);
      }
    }
  }
  .dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground {
    &:is(.dark *) {
      &[data-state="checked"] {
        background-color: var(--primary-foreground);
      }
    }
  }
  .dark\\:data-\\[state\\=unchecked\\]\\:bg-foreground {
    &:is(.dark *) {
      &[data-state="unchecked"] {
        background-color: var(--foreground);
      }
    }
  }
  .dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80 {
    &:is(.dark *) {
      &[data-state="unchecked"] {
        background-color: var(--input);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--input) 80%, transparent);
        }
      }
    }
  }
  .dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20 {
    &:is(.dark *) {
      &[data-variant="destructive"] {
        &:focus {
          background-color: var(--destructive);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--destructive) 20%, transparent);
          }
        }
      }
    }
  }
  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 {
    & [cmdk-group-heading] {
      padding-inline: calc(var(--spacing) * 2);
    }
  }
  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 {
    & [cmdk-group-heading] {
      padding-block: calc(var(--spacing) * 1.5);
    }
  }
  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs {
    & [cmdk-group-heading] {
      font-size: var(--text-xs);
      line-height: var(--tw-leading, var(--text-xs--line-height));
    }
  }
  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium {
    & [cmdk-group-heading] {
      --tw-font-weight: var(--font-weight-medium);
      font-weight: var(--font-weight-medium);
    }
  }
  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground {
    & [cmdk-group-heading] {
      color: var(--muted-foreground);
    }
  }
  .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 {
    & [cmdk-group] {
      padding-inline: calc(var(--spacing) * 2);
    }
  }
  .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 {
    & [cmdk-group]:not([hidden]) ~[cmdk-group] {
      padding-top: calc(var(--spacing) * 0);
    }
  }
  .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 {
    & [cmdk-input-wrapper] svg {
      height: calc(var(--spacing) * 5);
    }
  }
  .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 {
    & [cmdk-input-wrapper] svg {
      width: calc(var(--spacing) * 5);
    }
  }
  .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 {
    & [cmdk-input] {
      height: calc(var(--spacing) * 12);
    }
  }
  .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 {
    & [cmdk-item] {
      padding-inline: calc(var(--spacing) * 2);
    }
  }
  .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 {
    & [cmdk-item] {
      padding-block: calc(var(--spacing) * 3);
    }
  }
  .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 {
    & [cmdk-item] svg {
      height: calc(var(--spacing) * 5);
    }
  }
  .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 {
    & [cmdk-item] svg {
      width: calc(var(--spacing) * 5);
    }
  }
  .\\[\\&_p\\]\\:leading-relaxed {
    & p {
      --tw-leading: var(--leading-relaxed);
      line-height: var(--leading-relaxed);
    }
  }
  .\\[\\&_svg\\]\\:pointer-events-none {
    & svg {
      pointer-events: none;
    }
  }
  .\\[\\&_svg\\]\\:shrink-0 {
    & svg {
      flex-shrink: 0;
    }
  }
  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 {
    & svg:not([class*='size-']) {
      width: calc(var(--spacing) * 4);
      height: calc(var(--spacing) * 4);
    }
  }
  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground {
    & svg:not([class*='text-']) {
      color: var(--muted-foreground);
    }
  }
  .\\[\\&_tr\\]\\:border-b {
    & tr {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 1px;
    }
  }
  .\\[\\&_tr\\:last-child\\]\\:border-0 {
    & tr:last-child {
      border-style: var(--tw-border-style);
      border-width: 0px;
    }
  }
  .\\[\\&\\:first-child\\[data-selected\\=true\\]_button\\]\\:rounded-l-md {
    &:first-child[data-selected=true] button {
      border-top-left-radius: calc(var(--radius) - 2px);
      border-bottom-left-radius: calc(var(--radius) - 2px);
    }
  }
  .\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0 {
    &:has([role=checkbox]) {
      padding-right: calc(var(--spacing) * 0);
    }
  }
  .\\[\\.border-b\\]\\:pb-6 {
    &:is(.border-b) {
      padding-bottom: calc(var(--spacing) * 6);
    }
  }
  .\\[\\.border-t\\]\\:pt-6 {
    &:is(.border-t) {
      padding-top: calc(var(--spacing) * 6);
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button_next\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button next>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button_previous\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button previous>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\\\\\_next\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button\\_next>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\\\\\_previous\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button\\_previous>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\_next\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button_next>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\_previous\\>svg\\]\\:rotate-180 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      :is(& *) {
        &:is(.rdp-button_previous>svg) {
          rotate: 180deg;
        }
      }
    }
  }
  .\\*\\:\\[span\\]\\:last\\:flex {
    :is(& > *) {
      &:is(span) {
        &:last-child {
          display: flex;
        }
      }
    }
  }
  .\\*\\:\\[span\\]\\:last\\:items-center {
    :is(& > *) {
      &:is(span) {
        &:last-child {
          align-items: center;
        }
      }
    }
  }
  .\\*\\:\\[span\\]\\:last\\:gap-2 {
    :is(& > *) {
      &:is(span) {
        &:last-child {
          gap: calc(var(--spacing) * 2);
        }
      }
    }
  }
  .data-\\[variant\\=destructive\\]\\:\\*\\:\\[svg\\]\\:\\!text-destructive {
    &[data-variant="destructive"] {
      :is(& > *) {
        &:is(svg) {
          color: var(--destructive) !important;
        }
      }
    }
  }
  .\\[\\&\\:last-child\\[data-selected\\=true\\]_button\\]\\:rounded-r-md {
    &:last-child[data-selected=true] button {
      border-top-right-radius: calc(var(--radius) - 2px);
      border-bottom-right-radius: calc(var(--radius) - 2px);
    }
  }
  .\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] {
    &>[role=checkbox] {
      --tw-translate-y: 2px;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .\\[\\&\\>button\\]\\:hidden {
    &>button {
      display: none;
    }
  }
  .\\[\\&\\>span\\]\\:text-xs {
    &>span {
      font-size: var(--text-xs);
      line-height: var(--tw-leading, var(--text-xs--line-height));
    }
  }
  .\\[\\&\\>span\\]\\:opacity-70 {
    &>span {
      opacity: 70%;
    }
  }
  .\\[\\&\\>span\\:last-child\\]\\:truncate {
    &>span:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .\\[\\&\\>svg\\]\\:pointer-events-none {
    &>svg {
      pointer-events: none;
    }
  }
  .\\[\\&\\>svg\\]\\:size-3 {
    &>svg {
      width: calc(var(--spacing) * 3);
      height: calc(var(--spacing) * 3);
    }
  }
  .\\[\\&\\>svg\\]\\:size-3\\.5 {
    &>svg {
      width: calc(var(--spacing) * 3.5);
      height: calc(var(--spacing) * 3.5);
    }
  }
  .\\[\\&\\>svg\\]\\:size-4 {
    &>svg {
      width: calc(var(--spacing) * 4);
      height: calc(var(--spacing) * 4);
    }
  }
  .\\[\\&\\>svg\\]\\:shrink-0 {
    &>svg {
      flex-shrink: 0;
    }
  }
  .\\[\\&\\>svg\\]\\:translate-y-0\\.5 {
    &>svg {
      --tw-translate-y: calc(var(--spacing) * 0.5);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .\\[\\&\\>svg\\]\\:text-current {
    &>svg {
      color: currentcolor;
    }
  }
  .\\[\\&\\>svg\\]\\:text-muted-foreground {
    &>svg {
      color: var(--muted-foreground);
    }
  }
  .\\[\\&\\>svg\\]\\:text-sidebar-accent-foreground {
    &>svg {
      color: var(--sidebar-accent-foreground);
    }
  }
  .\\[\\&\\>tr\\]\\:last\\:border-b-0 {
    &>tr {
      &:last-child {
        border-bottom-style: var(--tw-border-style);
        border-bottom-width: 0px;
      }
    }
  }
  .\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90 {
    &[data-panel-group-direction=vertical]>div {
      rotate: 90deg;
    }
  }
  .\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180 {
    &[data-state=open]>svg {
      rotate: 180deg;
    }
  }
  .\\[\\[data-side\\=left\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-right-2 {
    [data-side=left][data-collapsible=offcanvas] & {
      right: calc(var(--spacing) * -2);
    }
  }
  .\\[\\[data-side\\=left\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-e-resize {
    [data-side=left][data-state=collapsed] & {
      cursor: e-resize;
    }
  }
  .\\[\\[data-side\\=right\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-left-2 {
    [data-side=right][data-collapsible=offcanvas] & {
      left: calc(var(--spacing) * -2);
    }
  }
  .\\[\\[data-side\\=right\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-w-resize {
    [data-side=right][data-state=collapsed] & {
      cursor: w-resize;
    }
  }
  .\\[\\[data-slot\\=card-content\\]_\\&\\]\\:bg-transparent {
    [data-slot=card-content] & {
      background-color: transparent;
    }
  }
  .\\[\\[data-slot\\=popover-content\\]_\\&\\]\\:bg-transparent {
    [data-slot=popover-content] & {
      background-color: transparent;
    }
  }
  .\\[a\\&\\]\\:hover\\:bg-accent {
    a& {
      &:hover {
        @media (hover: hover) {
          background-color: var(--accent);
        }
      }
    }
  }
  .\\[a\\&\\]\\:hover\\:bg-destructive\\/90 {
    a& {
      &:hover {
        @media (hover: hover) {
          background-color: var(--destructive);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--destructive) 90%, transparent);
          }
        }
      }
    }
  }
  .\\[a\\&\\]\\:hover\\:bg-primary\\/90 {
    a& {
      &:hover {
        @media (hover: hover) {
          background-color: var(--primary);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--primary) 90%, transparent);
          }
        }
      }
    }
  }
  .\\[a\\&\\]\\:hover\\:bg-secondary\\/90 {
    a& {
      &:hover {
        @media (hover: hover) {
          background-color: var(--secondary);
          @supports (color: color-mix(in lab, red, red)) {
            background-color: color-mix(in oklab, var(--secondary) 90%, transparent);
          }
        }
      }
    }
  }
  .\\[a\\&\\]\\:hover\\:text-accent-foreground {
    a& {
      &:hover {
        @media (hover: hover) {
          color: var(--accent-foreground);
        }
      }
    }
  }
}
@property --tw-animation-delay {
  syntax: "*";
  inherits: false;
  initial-value: 0s;
}
@property --tw-animation-direction {
  syntax: "*";
  inherits: false;
  initial-value: normal;
}
@property --tw-animation-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-animation-fill-mode {
  syntax: "*";
  inherits: false;
  initial-value: none;
}
@property --tw-animation-iteration-count {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-opacity {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-rotate {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-enter-scale {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-enter-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-enter-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-opacity {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-exit-rotate {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-scale {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-exit-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-exit-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}
@layer base {
  * {
    border-color: var(--border);
    outline-color: var(--ring);
    @supports (color: color-mix(in lab, red, red)) {
      outline-color: color-mix(in oklab, var(--ring) 50%, transparent);
    }
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-x {
  syntax: "*";
  inherits: false;
}
@property --tw-pan-y {
  syntax: "*";
  inherits: false;
}
@property --tw-pinch-zoom {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
@keyframes enter {
  from {
    opacity: var(--tw-enter-opacity,1);
    transform: translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));
  }
}
@keyframes exit {
  to {
    opacity: var(--tw-exit-opacity,1);
    transform: translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));
  }
}
@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,auto))));
  }
}
@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height,var(--bits-accordion-content-height,var(--reka-accordion-content-height,var(--kb-accordion-content-height,auto))));
  }
  to {
    height: 0;
  }
}
@keyframes collapsible-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto))));
  }
}
@keyframes collapsible-up {
  from {
    height: var(--radix-collapsible-content-height,var(--bits-collapsible-content-height,var(--reka-collapsible-content-height,var(--kb-collapsible-content-height,auto))));
  }
  to {
    height: 0;
  }
}
@keyframes caret-blink {
  0%,70%,100% {
    opacity: 1;
  }
  20%,50% {
    opacity: 0;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-pan-x: initial;
      --tw-pan-y: initial;
      --tw-pinch-zoom: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-animation-delay: 0s;
      --tw-animation-direction: normal;
      --tw-animation-duration: initial;
      --tw-animation-fill-mode: none;
      --tw-animation-iteration-count: 1;
      --tw-enter-opacity: 1;
      --tw-enter-rotate: 0;
      --tw-enter-scale: 1;
      --tw-enter-translate-x: 0;
      --tw-enter-translate-y: 0;
      --tw-exit-opacity: 1;
      --tw-exit-rotate: 0;
      --tw-exit-scale: 1;
      --tw-exit-translate-x: 0;
      --tw-exit-translate-y: 0;
    }
  }
}
`,""]);let a=r},338:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(247)},477:(e,i)=>{
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function o(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,a=e[n];if(!(0<u(a,t)))break;e[n]=t,e[r]=a,r=n}}function l(e){return 0===e.length?null:e[0]}function s(e){if(0!==e.length){var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,a=e.length,o=a>>>1;n<o;){var i=2*(n+1)-1,l=e[i],s=1+i,c=e[s];if(u(l,r)<0)n=s<a&&u(c,l)<0?(e[n]=c,e[s]=r,s):(e[n]=l,e[i]=r,i);else{if(!(s<a&&u(c,r)<0))break;e[n]=c,e[s]=r,n=s}}}}}function u(e,t){var r=e.sortIndex-t.sortIndex;return 0!=r?r:e.id-t.id}i.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now?(t=performance,i.unstable_now=function(){return t.now()}):(r=Date,n=r.now(),i.unstable_now=function(){return r.now()-n});var t,r,n,c=[],d=[],f=1,p=null,h=3,m=!1,g=!1,v=!1,b=!1,a="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var t=l(d);null!==t;){if(null===t.callback)s(d);else{if(!(t.startTime<=e))break;s(d),t.sortIndex=t.expirationTime,o(c,t)}t=l(d)}}function k(e){var t;v=!1,x(e),g||(null!==l(c)?(g=!0,C||(C=!0,S())):null!==(t=l(d))&&j(k,t.startTime-e))}var S,E,N,C=!1,O=-1,P=5,z=-1;function M(){return!(!b&&i.unstable_now()-z<P)}function _(){if(b=!1,C){var e=i.unstable_now(),t=(z=e,!0);try{e:{g=!1,v&&(v=!1,w(O),O=-1),m=!0;var r=h;try{t:{for(x(e),p=l(c);null!==p&&!(p.expirationTime>e&&M());){var n=p.callback;if("function"==typeof n){p.callback=null,h=p.priorityLevel;var a=n(p.expirationTime<=e),e=i.unstable_now();if("function"==typeof a){p.callback=a,x(e),t=!0;break t}p===l(c)&&s(c),x(e)}else s(c);p=l(c)}var o,t=null!==p||(null!==(o=l(d))&&j(k,o.startTime-e),!1)}break e}finally{p=null,h=r,m=!1}t=void 0}}finally{t?S():C=!1}}}function j(e,t){O=a(function(){e(i.unstable_now())},t)}S="function"==typeof y?function(){y(_)}:"undefined"!=typeof MessageChannel?(E=new MessageChannel,N=E.port2,E.port1.onmessage=_,function(){N.postMessage(null)}):function(){a(_,0)},i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(e){e.callback=null},i.unstable_forceFrameRate=function(e){e<0||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},i.unstable_getCurrentPriorityLevel=function(){return h},i.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var r=h;h=t;try{return e()}finally{h=r}},i.unstable_requestPaint=function(){b=!0},i.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=h;h=e;try{return t()}finally{h=r}},i.unstable_scheduleCallback=function(e,t,r){var n=i.unstable_now();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?n+r:n,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return e={id:f++,callback:t,priorityLevel:e,startTime:r,expirationTime:a=r+a,sortIndex:-1},n<r?(e.sortIndex=r,o(d,e),null===l(c)&&e===l(d)&&(v?(w(O),O=-1):v=!0,j(k,r-n))):(e.sortIndex=a,o(c,e),g||m||(g=!0,C)||(C=!0,S())),e},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(t){var r=h;return function(){var e=h;h=r;try{return t.apply(this,arguments)}finally{h=e}}}},540:(e,t,r)=>{e.exports=r(869)},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var r={};e.exports=function(e,t){if(!(e=(e=>{if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]})(e)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},698:(e,t)=>{
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(e,t,r){var n=void 0!==r?""+r:null;if(void 0!==t.key&&(n=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:o,type:e,key:n,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=n,t.jsxs=n},825:e=>{e.exports=function(o){var i;return"undefined"==typeof document?{update:function(){},remove:function(){}}:(i=o.insertStyleElement(o),{update:function(e){var t,r,n,a;t=i,r=o,n="",(e=e).supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {")),(a=void 0!==e.layer)&&(n+="@layer".concat(0<e.layer.length?" ".concat(e.layer):""," {")),n+=e.css,a&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}"),(a=e.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,t,r.options)},remove:function(){var e;null!==(e=i).parentNode&&e.parentNode.removeChild(e)}})}},848:(e,t,r)=>{e.exports=r(698)},869:(e,t)=>{
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||u}function b(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||u}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var y=w.prototype=new b,x=(y.constructor=w,m(y,v.prototype),y.isPureReactComponent=!0,Array.isArray),k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function E(e,t,r,n,a,o){return r=o.ref,{$$typeof:d,type:e,key:t,ref:void 0!==r?r:null,props:o}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===d}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(e=""+e.key,r={"=":"=0",":":"=2"},"$"+e.replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function P(){}function z(e,t,r,n,a){var o,i=typeof e,l=!1;if(null===(e="undefined"!==i&&"boolean"!==i?e:null))l=!0;else switch(i){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case d:case f:l=!0;break;case p:return z((l=e._init)(e._payload),t,r,n,a)}}if(l)return a=a(e),l=""===n?"."+O(e,0):n,x(a)?(r="",z(a,t,r=null!=l?l.replace(C,"$&/")+"/":r,"",function(e){return e})):null!=a&&(N(a)&&(s=r+(null==(o=a).key||e&&e.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+l,a=E(o.type,s,0,0,0,o.props)),t.push(a)),1;var s,l=0,c=""===n?".":n+":";if(x(e))for(var u=0;u<e.length;u++)l+=z(n=e[u],t,r,i=c+O(n,u),a);else if("function"==typeof(u=null!==(s=e)&&"object"==typeof s&&"function"==typeof(s=h&&s[h]||s["@@iterator"])?s:null))for(e=u.call(e),u=0;!(n=e.next()).done;)l+=z(n=n.value,t,r,i=c+O(n,u++),a);else if("object"===i){if("function"==typeof e.then)return z((t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch("string"==typeof t.status?t.then(P,P):(t.status="pending",t.then(function(e){"pending"===t.status&&(t.status="fulfilled",t.value=e)},function(e){"pending"===t.status&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t})(e),t,r,n,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return l}function M(e,t,r){var n;return null==e||(n=0,z(e,e=[],"","",function(e){return t.call(r,e,n++)})),e}function _(t){var e;if(-1===t._status&&((e=(e=t._result)()).then(function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)},function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)}),-1===t._status)&&(t._status=0,t._result=e),1===t._status)return t._result.default;throw t._result}var j="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(){}t.Children={map:M,forEach:function(e,t,r){M(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(N(e))return e;throw Error("React.Children.only expected to receive a single React element child.")}},t.Component=v,t.Fragment=r,t.Profiler=a,t.PureComponent=w,t.StrictMode=n,t.Suspense=s,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=m({},e.props),a=e.key;if(null!=t)for(o in void 0!==t.ref&&0,void 0!==t.key&&(a=""+t.key),t)!S.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(n[o]=t[o]);var o=arguments.length-2;if(1===o)n.children=r;else if(1<o){for(var i=Array(o),l=0;l<o;l++)i[l]=arguments[l+2];n.children=i}return E(e.type,a,0,0,0,n)},t.createContext=function(e){return((e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e).Consumer={$$typeof:o,_context:e},e},t.createElement=function(e,t,r){var n,a={},o=null;if(null!=t)for(n in void 0!==t.key&&(o=""+t.key),t)S.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return E(e,o,0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,r={};k.T=r;try{var n=e(),a=k.S;null!==a&&a(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(D,j)}catch(e){j(e)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,r){return k.H.useActionState(e,t,r)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,r){var n=k.H;if("function"==typeof r)throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,r){return k.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return k.H.useReducer(e,t,r)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return k.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.1"},961:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(221)},982:(e,t,r)=>{e.exports=r(477)}},C={};function o(e){var t=C[e];return void 0!==t||(t=C[e]={id:e,exports:{}},N[e](t,t.exports,o)),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},E=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var r=Object.create(null),n=(o.r(r),{});S=S||[null,E({}),E([]),E(E)];for(var a=2&e&&t;("object"==typeof a||"function"==typeof a)&&!~S.indexOf(a);a=E(a))Object.getOwnPropertyNames(a).forEach(e=>n[e]=()=>t[e]);return n.default=()=>t,o.d(r,n),r},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var Me={},_e=(o.r(Me),o.d(Me,{Button:()=>function(e){return Ee.createElement("button",{...e})},CaptionLabel:()=>function(e){return Ee.createElement("span",{...e})},Chevron:()=>function(e){var{size:e=24,orientation:t="left",className:r}=e;return Ee.createElement("svg",{className:r,width:e,height:e,viewBox:"0 0 24 24"},"up"===t&&Ee.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),"down"===t&&Ee.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),"left"===t&&Ee.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),"right"===t&&Ee.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))},Day:()=>function(e){let{day:t,modifiers:r,...n}=e;return Ee.createElement("td",{...n})},DayButton:()=>function(e){let{day:t,modifiers:r,...n}=e,a=Ee.useRef(null);return Ee.useEffect(()=>{r.focused&&a.current?.focus()},[r.focused]),Ee.createElement("button",{ref:a,...n})},Dropdown:()=>function(e){let{options:t,className:r,components:n,classNames:a,...o}=e,i=[a[Ne.Dropdown],r].join(" "),l=t?.find(({value:e})=>e===o.value);return Ee.createElement("span",{"data-disabled":o.disabled,className:a[Ne.DropdownRoot]},Ee.createElement(n.Select,{className:i,...o},t?.map(({value:e,label:t,disabled:r})=>Ee.createElement(n.Option,{key:e,value:e,disabled:r},t))),Ee.createElement("span",{className:a[Ne.CaptionLabel],"aria-hidden":!0},l?.label,Ee.createElement(n.Chevron,{orientation:"down",size:18,className:a[Ne.Chevron]})))},DropdownNav:()=>function(e){return Ee.createElement("div",{...e})},Footer:()=>function(e){return Ee.createElement("div",{...e})},Month:()=>function(e){let{calendarMonth:t,displayIndex:r,...n}=e;return Ee.createElement("div",{...n},e.children)},MonthCaption:()=>function(e){let{calendarMonth:t,displayIndex:r,...n}=e;return Ee.createElement("div",{...n})},MonthGrid:()=>function(e){return Ee.createElement("table",{...e})},Months:()=>function(e){return Ee.createElement("div",{...e})},MonthsDropdown:()=>function(e){var t=Mn().components;return Ee.createElement(t.Dropdown,{...e})},Nav:()=>function(e){let{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:a,...o}=e,{components:i,classNames:l,labels:{labelPrevious:s,labelNext:c}}=Mn(),u=(0,Ee.useCallback)(e=>{a&&r?.(e)},[a,r]),d=(0,Ee.useCallback)(e=>{n&&t?.(e)},[n,t]);return Ee.createElement("nav",{...o},Ee.createElement(i.PreviousMonthButton,{type:"button",className:l[Ne.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":!n||void 0,"aria-label":s(n),onClick:d},Ee.createElement(i.Chevron,{disabled:!n||void 0,className:l[Ne.Chevron],orientation:"left"})),Ee.createElement(i.NextMonthButton,{type:"button",className:l[Ne.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":!a||void 0,"aria-label":c(a),onClick:u},Ee.createElement(i.Chevron,{disabled:!a||void 0,orientation:"right",className:l[Ne.Chevron]})))},NextMonthButton:()=>function(e){var t=Mn().components;return Ee.createElement(t.Button,{...e})},Option:()=>function(e){return Ee.createElement("option",{...e})},PreviousMonthButton:()=>function(e){var t=Mn().components;return Ee.createElement(t.Button,{...e})},Root:()=>function(e){let{rootRef:t,...r}=e;return Ee.createElement("div",{...r,ref:t})},Select:()=>function(e){return Ee.createElement("select",{...e})},Week:()=>function(e){let{week:t,...r}=e;return Ee.createElement("tr",{...r})},WeekNumber:()=>function(e){let{week:t,...r}=e;return Ee.createElement("th",{...r})},WeekNumberHeader:()=>function(e){return Ee.createElement("th",{...e})},Weekday:()=>function(e){return Ee.createElement("th",{...e})},Weekdays:()=>function(e){return Ee.createElement("thead",{"aria-hidden":!0},Ee.createElement("tr",{...e}))},Weeks:()=>function(e){return Ee.createElement("tbody",{...e})},YearsDropdown:()=>function(e){var t=Mn().components;return Ee.createElement(t.Dropdown,{...e})}}),{}),je=(o.r(_e),o.d(_e,{formatCaption:()=>_n,formatDay:()=>function(e,t,r){return(r??new bn(t)).format(e,"d")},formatMonthCaption:()=>jn,formatMonthDropdown:()=>function(e,t=h){return t.format(e,"LLLL")},formatWeekNumber:()=>function(e,t=h){if(e<10)return t.formatNumber("0"+e.toLocaleString());return t.formatNumber(""+e.toLocaleString())},formatWeekNumberHeader:()=>function(){return""},formatWeekdayName:()=>function(e,t,r){return(r??new bn(t)).format(e,"cccccc")},formatYearCaption:()=>Tn,formatYearDropdown:()=>Dn}),{}),Ee=(o.r(je),o.d(je,{labelCaption:()=>Rn,labelDay:()=>Fn,labelDayButton:()=>An,labelGrid:()=>Ln,labelGridcell:()=>function(e,t,r,n){let a=(n??new bn(r)).format(e,"PPPP");t?.today&&(a="Today, "+a);return a},labelMonthDropdown:()=>function(e){return"Choose the Month"},labelNav:()=>function(){return""},labelNext:()=>function(e){return"Go to the Next Month"},labelPrevious:()=>function(e){return"Go to the Previous Month"},labelWeekNumber:()=>function(e,t){return"Week "+e},labelWeekNumberHeader:()=>function(e){return"Week Number"},labelWeekday:()=>function(e,t,r){return(r??new bn(t)).format(e,"cccc")},labelYearDropdown:()=>function(e){return"Choose the Year"}}),o(540)),O=o.t(Ee,2),P=o(338),e=o(72),e=o.n(e),t=o(825),t=o.n(t),r=o(659),r=o.n(r),z=o(56),z=o.n(z),n=o(159),n=o.n(n),a=o(113),a=o.n(a),i=o(321),l={};l.styleTagTransform=a(),l.setAttributes=z(),l.insert=r().bind(null,"head"),l.domAPI=t(),l.insertStyleElement=n(),e()(i.A,l),i.A&&i.A.locals;
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
let M=(...e)=>e.filter((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
let j=(0,Ee.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:i,...l},s)=>(0,Ee.createElement)("svg",{ref:s,..._,width:t,height:t,stroke:e,strokeWidth:n?24*Number(r)/Number(t):r,className:M("lucide",a),...l},[...i.map(([e,t])=>(0,Ee.createElement)(e,t)),...Array.isArray(o)?o:[o]]));
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
a=(n,a)=>{var e=(0,Ee.forwardRef)(({className:e,...t},r)=>(0,Ee.createElement)(j,{ref:r,iconNode:a,className:M("lucide-"+n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),e),...t}));return e.displayName=""+n,e};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
let D=a("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),T=a("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),L=a("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]),R=a("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function A(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function F(...a){return t=>{let r=!1,n=a.map(e=>{e=A(e,t);return r||"function"!=typeof e||(r=!0),e});if(r)return()=>{for(let e=0;e<n.length;e++){var t=n[e];"function"==typeof t?t():A(a[e],null)}}}}function Y(...e){return Ee.useCallback(F(...e),e)}var H=o(848);function W(e){let o=B(e);var t=Ee.forwardRef((e,r)=>{let{children:t,...n}=e;e=Ee.Children.toArray(t);let a=e.find(q);if(a){let t=a.props.children;e=e.map(e=>e===a?1<Ee.Children.count(t)?Ee.Children.only(null):Ee.isValidElement(t)?t.props.children:null:e);return(0,H.jsx)(o,{...n,ref:r,children:Ee.isValidElement(t)?Ee.cloneElement(t,void 0,e):null})}return(0,H.jsx)(o,{...n,ref:r,children:t})});return t.displayName=e+".Slot",t}var I=W("Slot");function B(e){var t=Ee.forwardRef((e,t)=>{let{children:r,...n}=e;var a;return Ee.isValidElement(r)?(e=(e=>{var t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get;return t&&"isReactWarning"in t&&t.isReactWarning?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?e.props.ref:e.props.ref||e.ref})(r),a=((e,t)=>{var a,o={...t};for(a in t){let r=e[a],n=t[a];/^on[A-Z]/.test(a)?r&&n?o[a]=(...e)=>{var t=n(...e);return r(...e),t}:r&&(o[a]=r):"style"===a?o[a]={...r,...n}:"className"===a&&(o[a]=[r,n].filter(Boolean).join(" "))}return{...e,...o}})(n,r.props),r.type!==Ee.Fragment&&(a.ref=t?F(t,e):e),Ee.cloneElement(r,a)):1<Ee.Children.count(r)?Ee.Children.only(null):null});return t.displayName=e+".SlotClone",t}var $=Symbol("radix.slottable");function q(e){return Ee.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===$}function V(){for(var e,t=0,r="",n=arguments.length;t<n;t++)(e=arguments[t])&&(e=function e(t){var r,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(var a=t.length,o=0;o<a;o++)t[o]&&(r=e(t[o]))&&(n&&(n+=" "),n+=r);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}(e))&&(r&&(r+=" "),r+=e);return r}let Q=e=>"boolean"==typeof e?""+e:0===e?"0":e,ee=V;z=(r,l)=>n=>{if(null==(null==l?void 0:l.variants))return ee(r,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:o}=l;var e=Object.keys(a).map(e=>{var t=null==n?void 0:n[e],r=null==o?void 0:o[e];return null===t?null:(t=Q(t)||Q(r),a[e][t])});let i=n&&Object.entries(n).reduce((e,t)=>{var[t,r]=t;return void 0!==r&&(e[t]=r),e},{});var t=null==l||null==(t=l.compoundVariants)?void 0:t.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{var[e,t]=e;return Array.isArray(t)?t.includes({...o,...i}[e]):{...o,...i}[e]===t})?[...e,r,n]:e},[]);return ee(r,e,t,null==n?void 0:n.class,null==n?void 0:n.className)};let te="-",re=e=>{let r=ie(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:e=>{var t=e.split(te);return""===t[0]&&1!==t.length&&t.shift(),ne(t,r)||oe(e)},getConflictingClassGroupIds:(e,t)=>{var r=n[e]||[];return t&&a[e]?[...r,...a[e]]:r}}},ne=(e,r)=>{if(0===e.length)return r.classGroupId;var t=r.nextPart.get(e[0]),t=t?ne(e.slice(1),t):void 0;if(t)return t;if(0!==r.validators.length){let t=e.join(te);return r.validators.find(({validator:e})=>e(t))?.classGroupId}},ae=/^\[(.+)\]$/,oe=e=>{if(ae.test(e)){e=ae.exec(e)[1],e=e?.substring(0,e.indexOf(":"));if(e)return"arbitrary.."+e}},ie=e=>{var t,{theme:r,classGroups:n}=e,a={nextPart:new Map,validators:[]};for(t in n)le(n[t],a,t,r);return a},le=(e,r,n,a)=>{e.forEach(e=>{if("string"!=typeof e)return"function"==typeof e?ce(e)?void le(e(a),r,n,a):void r.validators.push({validator:e,classGroupId:n}):void Object.entries(e).forEach(([e,t])=>{le(t,se(r,e),n,a)});(""===e?r:se(r,e)).classGroupId=n})},se=(e,t)=>{let r=e;return t.split(te).forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},ce=e=>e.isThemeGetter,ue=r=>{if(r<1)return{get:()=>{},set:()=>{}};let n=0,a=new Map,o=new Map,i=(e,t)=>{a.set(e,t),++n>r&&(n=0,o=a,a=new Map)};return{get(e){var t=a.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(i(e,t),t):void 0},set(e,t){a.has(e)?a.set(e,t):i(e,t)}}},de="!",fe=":",pe=fe.length,he=e=>{let{prefix:n,experimentalParseClassName:r}=e,a=t=>{var r=[];let n=0,a=0,o=0,i;for(let e=0;e<t.length;e++){var l=t[e];if(0===n&&0===a){if(l===fe){r.push(t.slice(o,e)),o=e+pe;continue}if("/"===l){i=e;continue}}"["===l?n++:"]"===l?n--:"("===l?a++:")"===l&&a--}var e=0===r.length?t:t.substring(o),s=me(e);return{modifiers:r,hasImportantModifier:s!==e,baseClassName:s,maybePostfixModifierPosition:i&&i>o?i-o:void 0}};if(n){let t=n+fe,r=a;a=e=>e.startsWith(t)?r(e.substring(t.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:e,maybePostfixModifierPosition:void 0}}if(r){let t=a;a=e=>r({className:e,parseClassName:t})}return a},me=e=>e.endsWith(de)?e.substring(0,e.length-1):e.startsWith(de)?e.substring(1):e,ge=e=>{let n=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]||n[e]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t}},ve=e=>({cache:ue(e.cacheSize),parseClassName:he(e),sortModifiers:ge(e),...re(e)}),be=/\s+/,we=(e,t)=>{var{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:o}=t,i=[],l=e.trim().split(be);let s="";for(let e=l.length-1;0<=e;--e){var c=l[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:h}=r(c);if(u)s=c+(0<s.length?" "+s:s);else{let e=!!h,t=n(e?p.substring(0,h):p);if(!t){if(!e){s=c+(0<s.length?" "+s:s);continue}if(!(t=n(p))){s=c+(0<s.length?" "+s:s);continue}e=!1}var u=o(d).join(":"),m=f?u+de:u,h=m+t;if(!i.includes(h)){i.push(h);var g=a(t,e);for(let e=0;e<g.length;++e){var v=g[e];i.push(m+v)}s=c+(0<s.length?" "+s:s)}}}return s};let ye=t=>{if("string"==typeof t)return t;var r;let n="";for(let e=0;e<t.length;e++)t[e]&&(r=ye(t[e]))&&(n&&(n+=" "),n+=r);return n};function xe(r,...n){let a,o,i,l=function(e){var t=n.reduce((e,t)=>t(e),r());return a=ve(t),o=a.cache.get,i=a.cache.set,(l=s)(e)};function s(e){var t=o(e);return t||(t=we(e,a),i(e,t),t)}return function(){return l(function(){let e=0;var t;let r="";for(;e<arguments.length;)(t=arguments[e++])&&(t=ye(t))&&(r&&(r+=" "),r+=t);return r}.apply(null,arguments))}}let G=t=>{var e=e=>e[t]||[];return e.isThemeGetter=!0,e},ke=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Se=/^\((?:(\w[\w-]*):)?(.+)\)$/i,De=/^\d+\/\d+$/,Te=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Le=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Re=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ae=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,We=e=>De.test(e),K=e=>!!e&&!Number.isNaN(Number(e)),Ie=e=>!!e&&Number.isInteger(Number(e)),Be=e=>e.endsWith("%")&&K(e.slice(0,-1)),X=e=>Te.test(e),He=()=>!0,Ue=e=>Le.test(e)&&!Re.test(e),Ye=()=>!1,$e=e=>Ae.test(e),qe=e=>Fe.test(e),Ve=e=>!Z(e)&&!J(e),Qe=e=>it(e,ut,Ye),Z=e=>ke.test(e),Ge=e=>it(e,dt,Ue),Ke=e=>it(e,ft,K),Xe=e=>it(e,st,Ye),Ze=e=>it(e,ct,qe),Je=e=>it(e,ht,$e),J=e=>Se.test(e),et=e=>lt(e,dt),tt=e=>lt(e,pt),rt=e=>lt(e,st),nt=e=>lt(e,ut),at=e=>lt(e,ct),ot=e=>lt(e,ht,!0),it=(e,t,r)=>{e=ke.exec(e);return!!e&&(e[1]?t(e[1]):r(e[2]))},lt=(e,t,r=!1)=>{e=Se.exec(e);return!!e&&(e[1]?t(e[1]):r)},st=e=>"position"===e||"percentage"===e,ct=e=>"image"===e||"url"===e,ut=e=>"length"===e||"size"===e||"bg-size"===e,dt=e=>"length"===e,ft=e=>"number"===e,pt=e=>"family-name"===e,ht=e=>"shadow"===e;He,Ve,Ze,Ge,Ke,Xe,Je,Qe,Z,J,tt,at,et,rt,ot,nt,We,Ie,K,Be,X,Symbol.toStringTag;let mt=()=>{let e=G("color");var t=G("font"),r=G("text"),n=G("font-weight"),a=G("tracking"),R=G("leading"),A=G("breakpoint"),o=G("container");let F=G("spacing"),W=G("radius");var I=G("shadow"),B=G("inset-shadow"),H=G("text-shadow"),U=G("drop-shadow");let Y=G("blur");var $=G("perspective"),q=G("aspect"),V=G("ease"),Q=G("animate"),i=()=>["auto","avoid","all","avoid-page","page","left","right","column"];let l=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"];var s=()=>[...l(),J,Z],c=()=>["auto","hidden","clip","visible","scroll"],u=()=>["auto","contain","none"];let d=()=>[J,Z,F];var f=()=>[We,"full","auto",...d()],p=()=>[Ie,"none","subgrid",J,Z],h=()=>["auto",{span:["full",Ie,J,Z]},Ie,J,Z],m=()=>[Ie,"auto",J,Z],g=()=>["auto","min","max","fr",J,Z],v=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],b=()=>["start","end","center","stretch","center-safe","end-safe"],w=()=>["auto",...d()],y=()=>[We,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...d()],x=()=>[e,J,Z],k=()=>[...l(),rt,Xe,{position:[J,Z]}],S=()=>["no-repeat",{repeat:["","x","y","space","round"]}],E=()=>["auto","cover","contain",nt,Qe,{size:[J,Z]}],N=()=>[Be,et,Ge],C=()=>["","none","full",W,J,Z],O=()=>["",K,et,Ge],P=()=>["solid","dashed","dotted","double"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],M=()=>[K,Be,rt,Xe],_=()=>["","none",Y,J,Z],j=()=>["none",K,J,Z],D=()=>["none",K,J,Z],T=()=>[K,J,Z],L=()=>[We,"full",...d()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[X],breakpoint:[X],color:[He],container:[X],"drop-shadow":[X],ease:["in","out","in-out"],font:[Ve],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[X],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[X],shadow:[X],spacing:["px",K],text:[X],"text-shadow":[X],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",We,Z,J,q]}],container:["container"],columns:[{columns:[K,Z,J,o]}],"break-after":[{"break-after":i()}],"break-before":[{"break-before":i()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:s()}],overflow:[{overflow:c()}],"overflow-x":[{"overflow-x":c()}],"overflow-y":[{"overflow-y":c()}],overscroll:[{overscroll:u()}],"overscroll-x":[{"overscroll-x":u()}],"overscroll-y":[{"overscroll-y":u()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:f()}],"inset-x":[{"inset-x":f()}],"inset-y":[{"inset-y":f()}],start:[{start:f()}],end:[{end:f()}],top:[{top:f()}],right:[{right:f()}],bottom:[{bottom:f()}],left:[{left:f()}],visibility:["visible","invisible","collapse"],z:[{z:[Ie,"auto",J,Z]}],basis:[{basis:[We,"full","auto",o,...d()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[K,We,"auto","initial","none",Z]}],grow:[{grow:["",K,J,Z]}],shrink:[{shrink:["",K,J,Z]}],order:[{order:[Ie,"first","last","none",J,Z]}],"grid-cols":[{"grid-cols":p()}],"col-start-end":[{col:h()}],"col-start":[{"col-start":m()}],"col-end":[{"col-end":m()}],"grid-rows":[{"grid-rows":p()}],"row-start-end":[{row:h()}],"row-start":[{"row-start":m()}],"row-end":[{"row-end":m()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":g()}],"auto-rows":[{"auto-rows":g()}],gap:[{gap:d()}],"gap-x":[{"gap-x":d()}],"gap-y":[{"gap-y":d()}],"justify-content":[{justify:[...v(),"normal"]}],"justify-items":[{"justify-items":[...b(),"normal"]}],"justify-self":[{"justify-self":["auto",...b()]}],"align-content":[{content:["normal",...v()]}],"align-items":[{items:[...b(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...b(),{baseline:["","last"]}]}],"place-content":[{"place-content":v()}],"place-items":[{"place-items":[...b(),"baseline"]}],"place-self":[{"place-self":["auto",...b()]}],p:[{p:d()}],px:[{px:d()}],py:[{py:d()}],ps:[{ps:d()}],pe:[{pe:d()}],pt:[{pt:d()}],pr:[{pr:d()}],pb:[{pb:d()}],pl:[{pl:d()}],m:[{m:w()}],mx:[{mx:w()}],my:[{my:w()}],ms:[{ms:w()}],me:[{me:w()}],mt:[{mt:w()}],mr:[{mr:w()}],mb:[{mb:w()}],ml:[{ml:w()}],"space-x":[{"space-x":d()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":d()}],"space-y-reverse":["space-y-reverse"],size:[{size:y()}],w:[{w:[o,"screen",...y()]}],"min-w":[{"min-w":[o,"screen","none",...y()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[A]},...y()]}],h:[{h:["screen","lh",...y()]}],"min-h":[{"min-h":["screen","lh","none",...y()]}],"max-h":[{"max-h":["screen","lh",...y()]}],"font-size":[{text:["base",r,et,Ge]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,J,Ke]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Be,Z]}],"font-family":[{font:[tt,Z,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,J,Z]}],"line-clamp":[{"line-clamp":[K,"none",J,Ke]}],leading:[{leading:[R,...d()]}],"list-image":[{"list-image":["none",J,Z]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,Z]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:x()}],"text-color":[{text:x()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...P(),"wavy"]}],"text-decoration-thickness":[{decoration:[K,"from-font","auto",J,Ge]}],"text-decoration-color":[{decoration:x()}],"underline-offset":[{"underline-offset":[K,"auto",J,Z]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:S()}],"bg-size":[{bg:E()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Ie,J,Z],radial:["",J,Z],conic:[Ie,J,Z]},at,Ze]}],"bg-color":[{bg:x()}],"gradient-from-pos":[{from:N()}],"gradient-via-pos":[{via:N()}],"gradient-to-pos":[{to:N()}],"gradient-from":[{from:x()}],"gradient-via":[{via:x()}],"gradient-to":[{to:x()}],rounded:[{rounded:C()}],"rounded-s":[{"rounded-s":C()}],"rounded-e":[{"rounded-e":C()}],"rounded-t":[{"rounded-t":C()}],"rounded-r":[{"rounded-r":C()}],"rounded-b":[{"rounded-b":C()}],"rounded-l":[{"rounded-l":C()}],"rounded-ss":[{"rounded-ss":C()}],"rounded-se":[{"rounded-se":C()}],"rounded-ee":[{"rounded-ee":C()}],"rounded-es":[{"rounded-es":C()}],"rounded-tl":[{"rounded-tl":C()}],"rounded-tr":[{"rounded-tr":C()}],"rounded-br":[{"rounded-br":C()}],"rounded-bl":[{"rounded-bl":C()}],"border-w":[{border:O()}],"border-w-x":[{"border-x":O()}],"border-w-y":[{"border-y":O()}],"border-w-s":[{"border-s":O()}],"border-w-e":[{"border-e":O()}],"border-w-t":[{"border-t":O()}],"border-w-r":[{"border-r":O()}],"border-w-b":[{"border-b":O()}],"border-w-l":[{"border-l":O()}],"divide-x":[{"divide-x":O()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":O()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...P(),"hidden","none"]}],"divide-style":[{divide:[...P(),"hidden","none"]}],"border-color":[{border:x()}],"border-color-x":[{"border-x":x()}],"border-color-y":[{"border-y":x()}],"border-color-s":[{"border-s":x()}],"border-color-e":[{"border-e":x()}],"border-color-t":[{"border-t":x()}],"border-color-r":[{"border-r":x()}],"border-color-b":[{"border-b":x()}],"border-color-l":[{"border-l":x()}],"divide-color":[{divide:x()}],"outline-style":[{outline:[...P(),"none","hidden"]}],"outline-offset":[{"outline-offset":[K,J,Z]}],"outline-w":[{outline:["",K,et,Ge]}],"outline-color":[{outline:x()}],shadow:[{shadow:["","none",I,ot,Je]}],"shadow-color":[{shadow:x()}],"inset-shadow":[{"inset-shadow":["none",B,ot,Je]}],"inset-shadow-color":[{"inset-shadow":x()}],"ring-w":[{ring:O()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:x()}],"ring-offset-w":[{"ring-offset":[K,Ge]}],"ring-offset-color":[{"ring-offset":x()}],"inset-ring-w":[{"inset-ring":O()}],"inset-ring-color":[{"inset-ring":x()}],"text-shadow":[{"text-shadow":["none",H,ot,Je]}],"text-shadow-color":[{"text-shadow":x()}],opacity:[{opacity:[K,J,Z]}],"mix-blend":[{"mix-blend":[...z(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":z()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[K]}],"mask-image-linear-from-pos":[{"mask-linear-from":M()}],"mask-image-linear-to-pos":[{"mask-linear-to":M()}],"mask-image-linear-from-color":[{"mask-linear-from":x()}],"mask-image-linear-to-color":[{"mask-linear-to":x()}],"mask-image-t-from-pos":[{"mask-t-from":M()}],"mask-image-t-to-pos":[{"mask-t-to":M()}],"mask-image-t-from-color":[{"mask-t-from":x()}],"mask-image-t-to-color":[{"mask-t-to":x()}],"mask-image-r-from-pos":[{"mask-r-from":M()}],"mask-image-r-to-pos":[{"mask-r-to":M()}],"mask-image-r-from-color":[{"mask-r-from":x()}],"mask-image-r-to-color":[{"mask-r-to":x()}],"mask-image-b-from-pos":[{"mask-b-from":M()}],"mask-image-b-to-pos":[{"mask-b-to":M()}],"mask-image-b-from-color":[{"mask-b-from":x()}],"mask-image-b-to-color":[{"mask-b-to":x()}],"mask-image-l-from-pos":[{"mask-l-from":M()}],"mask-image-l-to-pos":[{"mask-l-to":M()}],"mask-image-l-from-color":[{"mask-l-from":x()}],"mask-image-l-to-color":[{"mask-l-to":x()}],"mask-image-x-from-pos":[{"mask-x-from":M()}],"mask-image-x-to-pos":[{"mask-x-to":M()}],"mask-image-x-from-color":[{"mask-x-from":x()}],"mask-image-x-to-color":[{"mask-x-to":x()}],"mask-image-y-from-pos":[{"mask-y-from":M()}],"mask-image-y-to-pos":[{"mask-y-to":M()}],"mask-image-y-from-color":[{"mask-y-from":x()}],"mask-image-y-to-color":[{"mask-y-to":x()}],"mask-image-radial":[{"mask-radial":[J,Z]}],"mask-image-radial-from-pos":[{"mask-radial-from":M()}],"mask-image-radial-to-pos":[{"mask-radial-to":M()}],"mask-image-radial-from-color":[{"mask-radial-from":x()}],"mask-image-radial-to-color":[{"mask-radial-to":x()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":l()}],"mask-image-conic-pos":[{"mask-conic":[K]}],"mask-image-conic-from-pos":[{"mask-conic-from":M()}],"mask-image-conic-to-pos":[{"mask-conic-to":M()}],"mask-image-conic-from-color":[{"mask-conic-from":x()}],"mask-image-conic-to-color":[{"mask-conic-to":x()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:S()}],"mask-size":[{mask:E()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,Z]}],filter:[{filter:["","none",J,Z]}],blur:[{blur:_()}],brightness:[{brightness:[K,J,Z]}],contrast:[{contrast:[K,J,Z]}],"drop-shadow":[{"drop-shadow":["","none",U,ot,Je]}],"drop-shadow-color":[{"drop-shadow":x()}],grayscale:[{grayscale:["",K,J,Z]}],"hue-rotate":[{"hue-rotate":[K,J,Z]}],invert:[{invert:["",K,J,Z]}],saturate:[{saturate:[K,J,Z]}],sepia:[{sepia:["",K,J,Z]}],"backdrop-filter":[{"backdrop-filter":["","none",J,Z]}],"backdrop-blur":[{"backdrop-blur":_()}],"backdrop-brightness":[{"backdrop-brightness":[K,J,Z]}],"backdrop-contrast":[{"backdrop-contrast":[K,J,Z]}],"backdrop-grayscale":[{"backdrop-grayscale":["",K,J,Z]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[K,J,Z]}],"backdrop-invert":[{"backdrop-invert":["",K,J,Z]}],"backdrop-opacity":[{"backdrop-opacity":[K,J,Z]}],"backdrop-saturate":[{"backdrop-saturate":[K,J,Z]}],"backdrop-sepia":[{"backdrop-sepia":["",K,J,Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":d()}],"border-spacing-x":[{"border-spacing-x":d()}],"border-spacing-y":[{"border-spacing-y":d()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,Z]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[K,"initial",J,Z]}],ease:[{ease:["linear","initial",V,J,Z]}],delay:[{delay:[K,J,Z]}],animate:[{animate:["none",Q,J,Z]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[$,J,Z]}],"perspective-origin":[{"perspective-origin":s()}],rotate:[{rotate:j()}],"rotate-x":[{"rotate-x":j()}],"rotate-y":[{"rotate-y":j()}],"rotate-z":[{"rotate-z":j()}],scale:[{scale:D()}],"scale-x":[{"scale-x":D()}],"scale-y":[{"scale-y":D()}],"scale-z":[{"scale-z":D()}],"scale-3d":["scale-3d"],skew:[{skew:T()}],"skew-x":[{"skew-x":T()}],"skew-y":[{"skew-y":T()}],transform:[{transform:[J,Z,"","none","gpu","cpu"]}],"transform-origin":[{origin:s()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:L()}],"translate-x":[{"translate-x":L()}],"translate-y":[{"translate-y":L()}],"translate-z":[{"translate-z":L()}],"translate-none":["translate-none"],accent:[{accent:x()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:x()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,Z]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,Z]}],fill:[{fill:["none",...x()]}],"stroke-w":[{stroke:[K,et,Ge,Ke]}],stroke:[{stroke:["none",...x()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}};let gt=xe(mt);function c(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return gt(V(t))}function vt(e){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var bt=["className","variant","size","asChild"];function wt(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function yt(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?wt(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=vt(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=vt(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==vt(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):wt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function xt(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}var kt=z("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function m(e){var t=e.className,r=e.variant,n=e.size,a=e.asChild,a=void 0!==a&&a,e=xt(e,bt);return(0,H.jsx)(a?I:"button",yt({"data-slot":"button",className:c(kt({variant:r,size:n,className:t}))},e))}function St(e){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Et=["className"],Nt=["className"],Ct=["className"],Ot=["className"];function Pt(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function zt(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Pt(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=St(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=St(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==St(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Pt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Mt(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function _t(e){var t=e.className,e=Mt(e,Et);return(0,H.jsx)("div",zt({"data-slot":"card",className:c("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t)},e))}function jt(e){var t=e.className,e=Mt(e,Nt);return(0,H.jsx)("div",zt({"data-slot":"card-header",className:c("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t)},e))}function Dt(e){var t=e.className,e=Mt(e,Ct);return(0,H.jsx)("div",zt({"data-slot":"card-title",className:c("leading-none font-semibold",t)},e))}function Tt(e){var t=e.className,e=Mt(e,Ot);return(0,H.jsx)("div",zt({"data-slot":"card-content",className:c("px-6",t)},e))}function Lt(e){return(Lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Rt=["className","variant","asChild"];function At(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function Ft(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?At(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=Lt(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=Lt(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==Lt(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):At(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Wt(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}var Ne,Ce,Oe,Pe,It=z("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Bt(e){var t=e.className,r=e.variant,n=e.asChild,n=void 0!==n&&n,e=Wt(e,Rt);return(0,H.jsx)(n?I:"span",Ft({"data-slot":"badge",className:c(It({variant:r}),t)},e))}
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
let Ht=a("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Ut=a("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Yt=a("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function $t(){var e,t,r,n,a={};for(e in Ne)a[Ne[e]]="rdp-"+Ne[e];for(t in Ce)a[Ce[t]]="rdp-"+Ce[t];for(r in Oe)a[Oe[r]]="rdp-"+Oe[r];for(n in Pe)a[Pe[n]]="rdp-"+Pe[n];return a}(r=Ne=Ne||{}).Root="root",r.Chevron="chevron",r.Day="day",r.DayButton="day_button",r.CaptionLabel="caption_label",r.Dropdowns="dropdowns",r.Dropdown="dropdown",r.DropdownRoot="dropdown_root",r.Footer="footer",r.MonthGrid="month_grid",r.MonthCaption="month_caption",r.MonthsDropdown="months_dropdown",r.Month="month",r.Months="months",r.Nav="nav",r.NextMonthButton="button_next",r.PreviousMonthButton="button_previous",r.Week="week",r.Weeks="weeks",r.Weekday="weekday",r.Weekdays="weekdays",r.WeekNumber="week_number",r.WeekNumberHeader="week_number_header",r.YearsDropdown="years_dropdown",(t=Ce=Ce||{}).disabled="disabled",t.hidden="hidden",t.outside="outside",t.focused="focused",t.today="today",(n=Oe=Oe||{}).range_end="range_end",n.range_middle="range_middle",n.range_start="range_start",n.selected="selected",(e=Pe=Pe||{}).weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit";Symbol.for("constructDateFrom");let qt={},Vt={};function Qt(e,t){try{var r=(qt[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format)(t).split("GMT")[1];return r in Vt?Vt[r]:Kt(r,r.split(":"))}catch{return e in Vt?Vt[e]:(t=e?.match(Gt))?Kt(e,t.slice(1)):NaN}}let Gt=/([+-]\d\d):?(\d\d)?/;function Kt(e,t){var r=+(t[0]||0),t=+(t[1]||0);return Vt[e]=0<r?60*r+t:60*r-t}class Xt extends Date{constructor(...e){super(),1<e.length&&"string"==typeof e[e.length-1]&&(this.timeZone=e.pop()),this.internal=new Date,isNaN(Qt(this.timeZone,this))?this.setTime(NaN):e.length?"number"==typeof e[0]&&(1===e.length||2===e.length&&"number"!=typeof e[1])?this.setTime(e[0]):"string"==typeof e[0]?this.setTime(+new Date(e[0])):e[0]instanceof Date?this.setTime(+e[0]):(this.setTime(+new Date(...e)),er(this),Jt(this)):this.setTime(Date.now())}static tz(e,...t){return t.length?new Xt(...t,e):new Xt(Date.now(),e)}withTimeZone(e){return new Xt(+this,e)}getTimezoneOffset(){return-Qt(this.timeZone,this)}setTime(e){return Date.prototype.setTime.apply(this,arguments),Jt(this),+this}[Symbol.for("constructDateFrom")](e){return new Xt(+new Date(e),this.timeZone)}}let Zt=/^(get|set)(?!UTC)/;function Jt(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function er(e){var t=Qt(e.timeZone,e),r=new Date(+e),n=(r.setUTCHours(r.getUTCHours()-1),-new Date(+e).getTimezoneOffset()),r=n- -new Date(+r).getTimezoneOffset(),a=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours(),a=(r&&a&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+r),n-t),r=(a&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a),Qt(e.timeZone,e)),n=-new Date(+e).getTimezoneOffset()-r-a;r!==t&&n&&(Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n),a=r-Qt(e.timeZone,e))&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a))}Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(Zt.test(e)){let t=e.replace(Zt,"$1UTC");Xt.prototype[t]&&(e.startsWith("get")?Xt.prototype[e]=function(){return this.internal[t]()}:(Xt.prototype[e]=function(){var e;return Date.prototype[t].apply(this.internal,arguments),e=this,Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),er(e),+this},Xt.prototype[t]=function(){return Date.prototype[t].apply(this,arguments),Jt(this),+this}))}});class ze extends Xt{static tz(e,...t){return t.length?new ze(...t,e):new ze(Date.now(),e)}toISOString(){var[e,t,r]=this.tzComponents(),e=""+e+t+":"+r;return this.internal.toISOString().slice(0,-1)+e}toString(){return this.toDateString()+" "+this.toTimeString()}toDateString(){var[e,t,r,n]=this.internal.toUTCString().split(" ");return e?.slice(0,-1)+` ${r} ${t} `+n}toTimeString(){var e=this.internal.toUTCString().split(" ")[4],[t,r,n]=this.tzComponents();return`${e} GMT${t}${r}${n} (${e=this.timeZone,t=this,r="long",new Intl.DateTimeFormat("en-US",{hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g).slice(2).join(" ")})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){var e=this.getTimezoneOffset();return[0<e?"-":"+",String(Math.floor(Math.abs(e)/60)).padStart(2,"0"),String(Math.abs(e)%60).padStart(2,"0")]}withTimeZone(e){return new ze(+this,e)}[Symbol.for("constructDateFrom")](e){return new ze(+new Date(e),this.timeZone)}}let tr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function rr(t){return(e={})=>{e=e.width?String(e.width):t.defaultWidth;return t.formats[e]||t.formats[t.defaultWidth]}}l={date:rr({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:rr({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:rr({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};let nr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ar(o){return(e,t)=>{var r,n=t?.context?String(t.context):"standalone";let a;a="formatting"===n&&o.formattingValues?(n=o.defaultFormattingWidth||o.defaultWidth,r=t?.width?String(t.width):n,o.formattingValues[r]||o.formattingValues[n]):(r=o.defaultWidth,n=t?.width?String(t.width):o.defaultWidth,o.values[n]||o.values[r]);t=o.argumentCallback?o.argumentCallback(e):e;return a[t]}}function or(o){return(e,t={})=>{var r=t.width,n=r&&o.matchPatterns[r]||o.matchPatterns[o.defaultMatchWidth],n=e.match(n);if(!n)return null;let a=n[0];n=r&&o.parsePatterns[r]||o.parsePatterns[o.defaultParseWidth],r=Array.isArray(n)?((t,r)=>{for(let e=0;e<t.length;e++)if(r(t[e]))return e})(n,e=>e.test(a)):((e,t)=>{for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r})(n,e=>e.test(a)),n=o.valueCallback?o.valueCallback(r):r;return{value:t.valueCallback?t.valueCallback(n):n,rest:e.slice(a.length)}}}var ir;let lr={code:"en-US",formatDistance:(e,t,r)=>{let n;e=tr[e];return n="string"==typeof e?e:1===t?e.one:e.other.replace("{{count}}",t.toString()),r?.addSuffix?r.comparison&&0<r.comparison?"in "+n:n+" ago":n},formatLong:l,formatRelative:(e,t,r,n)=>nr[e],localize:{ordinalNumber:(e,t)=>{var r=Number(e),e=r%100;if(20<e||e<10)switch(e%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:ar({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ar({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:ar({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ar({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ar({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(ir={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{var r,n=e.match(ir.matchPattern);return n&&(n=n[0],r=e.match(ir.parsePattern))?(r=ir.valueCallback?ir.valueCallback(r[0]):r[0],{value:r=t.valueCallback?t.valueCallback(r):r,rest:e.slice(n.length)}):null}),era:or({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:or({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:or({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:or({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:or({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};Math.pow(10,8);let sr=Symbol.for("constructDateFrom");function s(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&sr in e?e[sr](t):new(e instanceof Date?e.constructor:Date)(t)}function p(e,t){return s(t||e,e)}function cr(e,t,r){var n=p(e,r?.in);return isNaN(t)?s(r?.in||e,NaN):(t&&n.setDate(n.getDate()+t),n)}function ur(e,t,r){var n,a=p(e,r?.in);return isNaN(t)?s(r?.in||e,NaN):t?(n=a.getDate(),(r=s(r?.in||e,a.getTime())).setMonth(a.getMonth()+t+1,0),r.getDate()<=n?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)):a}function dr(e,t,r){return cr(e,7*t,r)}function fr(e,t,r){return ur(e,12*t,r)}function pr(e){var t=p(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function hr(e,...t){e=s.bind(null,e||t.find(e=>"object"==typeof e));return t.map(e)}function mr(e,t){e=p(e,t?.in);return e.setHours(0,0,0,0),e}function gr(e,t,r){var[r,e]=hr(r?.in,e,t),t=mr(r),r=mr(e),e=+t-pr(t),t=+r-pr(r);return Math.round((e-t)/864e5)}function vr(e,t,r){var[r,e]=hr(r?.in,e,t);return 12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth())}function br(e,t){var{start:r,end:e}=((e,t)=>{var[e,t]=hr(e,t.start,t.end);return{start:e,end:t}})(t?.in,e);let n=+e<+r;var a=n?+r:+e,o=n?e:r;o.setHours(0,0,0,0),o.setDate(1);let i=t?.step??1;if(!i)return[];i<0&&(i=-i,n=!n);for(var l=[];+o<=a;)l.push(s(r,o)),o.setMonth(o.getMonth()+i);return n?l.reverse():l}let wr={};function yr(e,t){var r=wr,r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,e=p(e,t?.in),t=e.getDay(),t=6+(t<r?-7:0)-(t-r);return e.setDate(e.getDate()+t),e.setHours(23,59,59,999),e}function xr(e,t){return yr(e,{...t,weekStartsOn:1})}function kr(e,t){e=p(e,t?.in),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function Sr(e,t){e=p(e,t?.in),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Er(e,t){e=p(e,t?.in);return e.setFullYear(e.getFullYear(),0,1),e.setHours(0,0,0,0),e}function Nr(e,t){e=p(e,t?.in);return gr(e,Er(e))+1}function Cr(e,t){var r=wr,r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,e=p(e,t?.in),t=e.getDay(),t=(t<r?7:0)+t-r;return e.setDate(e.getDate()-t),e.setHours(0,0,0,0),e}function Or(e,t){return Cr(e,{...t,weekStartsOn:1})}function Pr(e,t){var e=p(e,t?.in),t=e.getFullYear(),r=s(e,0),r=(r.setFullYear(t+1,0,4),r.setHours(0,0,0,0),Or(r)),n=s(e,0),n=(n.setFullYear(t,0,4),n.setHours(0,0,0,0),Or(n));return e.getTime()>=r.getTime()?t+1:e.getTime()>=n.getTime()?t:t-1}function zr(e,t){var r=Pr(e,t),t=s(t?.in||e,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),Or(t)}function Mr(e,t){e=p(e,t?.in),t=+Or(e)-+zr(e);return Math.round(t/6048e5)+1}function _r(e,t){var r=p(e,t?.in),n=r.getFullYear(),a=wr,a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=s(t?.in||e,0),o=(o.setFullYear(n+1,0,a),o.setHours(0,0,0,0),Cr(o,t)),e=s(t?.in||e,0),a=(e.setFullYear(n,0,a),e.setHours(0,0,0,0),Cr(e,t));return+o<=+r?n+1:+a<=+r?n:n-1}function jr(e,t){var r=wr,r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,n=_r(e,t),e=s(t?.in||e,0),n=(e.setFullYear(n,0,r),e.setHours(0,0,0,0),Cr(e,t));return n}function Dr(e,t){e=p(e,t?.in),e=+Cr(e,t)-+jr(e,t);return Math.round(e/6048e5)+1}function u(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}let Tr={y(e,t){e=e.getFullYear(),e=0<e?e:1-e;return u("yy"===t?e%100:e,t.length)},M(e,t){e=e.getMonth();return"M"===t?String(e+1):u(e+1,2)},d(e,t){return u(e.getDate(),t.length)},a(e,t){var r=1<=e.getHours()/12?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];default:return"am"===r?"a.m.":"p.m."}},h(e,t){return u(e.getHours()%12||12,t.length)},H(e,t){return u(e.getHours(),t.length)},m(e,t){return u(e.getMinutes(),t.length)},s(e,t){return u(e.getSeconds(),t.length)},S(e,t){var r=t.length,e=e.getMilliseconds();return u(Math.trunc(e*Math.pow(10,r-3)),t.length)}},Lr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Rr={G:function(e,t,r){var n=0<e.getFullYear()?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});default:return r.era(n,{width:"wide"})}},y:function(e,t,r){var n;return"yo"===t?(n=e.getFullYear(),r.ordinalNumber(0<n?n:1-n,{unit:"year"})):Tr.y(e,t)},Y:function(e,t,r,n){e=_r(e,n),n=0<e?e:1-e;return"YY"===t?u(n%100,2):"Yo"===t?r.ordinalNumber(n,{unit:"year"}):u(n,t.length)},R:function(e,t){return u(Pr(e),t.length)},u:function(e,t){return u(e.getFullYear(),t.length)},Q:function(e,t,r){var n=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return u(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return u(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getMonth();switch(t){case"M":case"MM":return Tr.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getMonth();switch(t){case"L":return String(n+1);case"LL":return u(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){e=Dr(e,n);return"wo"===t?r.ordinalNumber(e,{unit:"week"}):u(e,t.length)},I:function(e,t,r){e=Mr(e);return"Io"===t?r.ordinalNumber(e,{unit:"week"}):u(e,t.length)},d:function(e,t,r){return"do"===t?r.ordinalNumber(e.getDate(),{unit:"date"}):Tr.d(e,t)},D:function(e,t,r){e=Nr(e);return"Do"===t?r.ordinalNumber(e,{unit:"dayOfYear"}):u(e,t.length)},E:function(e,t,r){var n=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return u(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return u(o,t.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getDay(),a=0===n?7:n;switch(t){case"i":return String(a);case"ii":return u(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=1<=e.getHours()/12?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){e=e.getHours();let n;switch(n=12===e?Lr.noon:0===e?Lr.midnight:1<=e/12?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){e=e.getHours();let n;switch(n=17<=e?Lr.evening:12<=e?Lr.afternoon:4<=e?Lr.morning:Lr.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if("ho"!==e)return Tr.h(t,e);{let e=t.getHours()%12;return 0===e&&(e=12),r.ordinalNumber(e,{unit:"hour"})}},H:function(e,t,r){return"Ho"===t?r.ordinalNumber(e.getHours(),{unit:"hour"}):Tr.H(e,t)},K:function(e,t,r){e=e.getHours()%12;return"Ko"===t?r.ordinalNumber(e,{unit:"hour"}):u(e,t.length)},k:function(e,t,r){let n=e.getHours();return 0===n&&(n=24),"ko"===t?r.ordinalNumber(n,{unit:"hour"}):u(n,t.length)},m:function(e,t,r){return"mo"===t?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Tr.m(e,t)},s:function(e,t,r){return"so"===t?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Tr.s(e,t)},S:function(e,t){return Tr.S(e,t)},X:function(e,t,r){var n=e.getTimezoneOffset();if(0===n)return"Z";switch(t){case"X":return Fr(n);case"XXXX":case"XX":return Wr(n);default:return Wr(n,":")}},x:function(e,t,r){var n=e.getTimezoneOffset();switch(t){case"x":return Fr(n);case"xxxx":case"xx":return Wr(n);default:return Wr(n,":")}},O:function(e,t,r){var n=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ar(n,":");default:return"GMT"+Wr(n,":")}},z:function(e,t,r){var n=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ar(n,":");default:return"GMT"+Wr(n,":")}},t:function(e,t,r){return u(Math.trunc(+e/1e3),t.length)},T:function(e,t,r){return u(+e,t.length)}};function Ar(e,t=""){var r=0<e?"-":"+",e=Math.abs(e),n=Math.trunc(e/60),e=e%60;return 0==e?r+String(n):r+String(n)+t+u(e,2)}function Fr(e,t){return e%60==0?(0<e?"-":"+")+u(Math.abs(e)/60,2):Wr(e,t)}function Wr(e,t=""){var r=0<e?"-":"+",e=Math.abs(e);return r+u(Math.trunc(e/60),2)+t+u(e%60,2)}let Ir=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},Br=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};let Hr={p:Br,P:(e,t)=>{var r=e.match(/(P+)(p+)?/)||[],n=r[1],r=r[2];if(!r)return Ir(e,t);let a;switch(n){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",Ir(n,t)).replace("{{time}}",Br(r,t))}},Ur=/^D+$/,Yr=/^Y+$/,$r=["D","DD","YY","YYYY"];function qr(e){return e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function Vr(e){return!(!qr(e)&&"number"!=typeof e||isNaN(+p(e)))}let Qr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Gr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Kr=/^'([^]*?)'?$/,Xr=/''/g,Zr=/[a-zA-Z]/;function Jr(l,s,c){var e=wr;let u=c?.locale??e.locale??lr;var t=c?.firstWeekContainsDate??c?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,e=c?.weekStartsOn??c?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0;let d=p(l,c?.in);if(!Vr(d))throw new RangeError("Invalid time value");let r=s.match(Gr).map(e=>{var t=e[0];return"p"===t||"P"===t?(0,Hr[t])(e,u.formatLong):e}).join("").match(Qr).map(e=>{if("''"===e)return{isToken:!1,value:"'"};var t,r,n=e[0];if("'"===n)return{isToken:!1,value:(r=(t=e).match(Kr))?r[1].replace(Xr,"'"):t};if(Rr[n])return{isToken:!0,value:e};if(n.match(Zr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return{isToken:!1,value:e}}),f=(u.localize.preprocessor&&(r=u.localize.preprocessor(d,r)),{firstWeekContainsDate:t,weekStartsOn:e,locale:u});return r.map(e=>{if(!e.isToken)return e.value;var t,e=e.value;if(!c?.useAdditionalWeekYearTokens&&(t=e,Yr.test(t))||!c?.useAdditionalDayOfYearTokens&&(t=e,Ur.test(t))){var r=e,n=s,a=String(l);n=n,a=a,o="Y"===(i=r)[0]?"years":"days of the month";var o,i=`Use \`${i.toLowerCase()}\` instead of \`${i}\` (in \`${n}\`) for formatting ${o} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;if(console.warn(i),$r.includes(r))throw new RangeError(i)}return(0,Rr[e[0]])(d,e,u.localize,f)}).join("")}function en(e,t){return p(e,t?.in).getMonth()}function tn(e,t){return p(e,t?.in).getFullYear()}function rn(e,t){return+p(e)>+p(t)}function nn(e,t){return+p(e)<+p(t)}function an(e,t,r){var[r,e]=hr(r?.in,e,t);return+mr(r)==+mr(e)}function on(e,t,r){var[r,e]=hr(r?.in,e,t);return r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()}function ln(e,t,r){var[r,e]=hr(r?.in,e,t);return r.getFullYear()===e.getFullYear()}function sn(e,t){let r,n=t?.in;return e.forEach(e=>{e=p(e,n=n||"object"!=typeof e?n:s.bind(null,e));(!r||r<e||isNaN(+e))&&(r=e)}),s(n,r||NaN)}function cn(e,t){let r,n=t?.in;return e.forEach(e=>{e=p(e,n=n||"object"!=typeof e?n:s.bind(null,e));(!r||r>e||isNaN(+e))&&(r=e)}),s(n,r||NaN)}function un(e,t){var e=p(e,t?.in),t=e.getFullYear(),r=e.getMonth(),e=s(e,0);return e.setFullYear(t,r+1,0),e.setHours(0,0,0,0),e.getDate()}function dn(e,t,r){var n=p(e,r?.in),a=n.getFullYear(),o=n.getDate(),r=s(r?.in||e,0),e=(r.setFullYear(a,t,15),r.setHours(0,0,0,0),un(r));return n.setMonth(t,Math.min(o,e)),n}function fn(e,t,r){var n=p(e,r?.in);return isNaN(+n)?s(r?.in||e,NaN):(n.setFullYear(t),n)}function pn(e,t){e=p(e,t?.in);return e.setDate(1),e.setHours(0,0,0,0),e}let hn=5,mn=4;function gn(e,t){var e=t.startOfMonth(e),r=e.getDay();return 1===r?e:0===r?t.addDays(e,-6):t.addDays(e,-1*(r-1))}function vn(e,t){var r,n,a=gn(e,t),e=(e=e,n=0<(n=(r=t).startOfMonth(e)).getDay()?n.getDay():7,n=r.addDays(e,1-n),n=r.addDays(n,7*hn-1),r.getMonth(e)===r.getMonth(n)?hn:mn);return t.addDays(a,7*e-1)}class bn{constructor(e,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?ze.tz(this.options.timeZone):new this.Date,this.newDate=(e,t,r)=>this.overrides?.newDate?this.overrides.newDate(e,t,r):this.options.timeZone?new ze(e,t,r,this.options.timeZone):new Date(e,t,r),this.addDays=(e,t)=>this.overrides?.addDays?this.overrides.addDays(e,t):cr(e,t),this.addMonths=(e,t)=>this.overrides?.addMonths?this.overrides.addMonths(e,t):ur(e,t),this.addWeeks=(e,t)=>this.overrides?.addWeeks?this.overrides.addWeeks(e,t):dr(e,t),this.addYears=(e,t)=>this.overrides?.addYears?this.overrides.addYears(e,t):fr(e,t),this.differenceInCalendarDays=(e,t)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):gr(e,t),this.differenceInCalendarMonths=(e,t)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):vr(e,t),this.eachMonthOfInterval=e=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):br(e),this.endOfBroadcastWeek=e=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):vn(e,this),this.endOfISOWeek=e=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):xr(e),this.endOfMonth=e=>this.overrides?.endOfMonth?this.overrides.endOfMonth(e):kr(e),this.endOfWeek=(e,t)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):yr(e,this.options),this.endOfYear=e=>this.overrides?.endOfYear?this.overrides.endOfYear(e):Sr(e),this.format=(e,t,r)=>{e=this.overrides?.format?this.overrides.format(e,t,this.options):Jr(e,t,this.options);return this.options.numerals&&"latn"!==this.options.numerals?this.replaceDigits(e):e},this.getISOWeek=e=>this.overrides?.getISOWeek?this.overrides.getISOWeek(e):Mr(e),this.getMonth=(e,t)=>this.overrides?.getMonth?this.overrides.getMonth(e,this.options):en(e,this.options),this.getYear=(e,t)=>this.overrides?.getYear?this.overrides.getYear(e,this.options):tn(e,this.options),this.getWeek=(e,t)=>this.overrides?.getWeek?this.overrides.getWeek(e,this.options):Dr(e,this.options),this.isAfter=(e,t)=>this.overrides?.isAfter?this.overrides.isAfter(e,t):rn(e,t),this.isBefore=(e,t)=>this.overrides?.isBefore?this.overrides.isBefore(e,t):nn(e,t),this.isDate=e=>this.overrides?.isDate?this.overrides.isDate(e):qr(e),this.isSameDay=(e,t)=>this.overrides?.isSameDay?this.overrides.isSameDay(e,t):an(e,t),this.isSameMonth=(e,t)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):on(e,t),this.isSameYear=(e,t)=>this.overrides?.isSameYear?this.overrides.isSameYear(e,t):ln(e,t),this.max=e=>this.overrides?.max?this.overrides.max(e):sn(e),this.min=e=>this.overrides?.min?this.overrides.min(e):cn(e),this.setMonth=(e,t)=>this.overrides?.setMonth?this.overrides.setMonth(e,t):dn(e,t),this.setYear=(e,t)=>this.overrides?.setYear?this.overrides.setYear(e,t):fn(e,t),this.startOfBroadcastWeek=(e,t)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):gn(e,this),this.startOfDay=e=>this.overrides?.startOfDay?this.overrides.startOfDay(e):mr(e),this.startOfISOWeek=e=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):Or(e),this.startOfMonth=e=>this.overrides?.startOfMonth?this.overrides.startOfMonth(e):pn(e),this.startOfWeek=(e,t)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):Cr(e,this.options),this.startOfYear=e=>this.overrides?.startOfYear?this.overrides.startOfYear(e):Er(e),this.options={locale:lr,...e},this.overrides=t}getDigitMap(){var{numerals:e="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:e}),r={};for(let e=0;e<10;e++)r[e.toString()]=t.format(e);return r}replaceDigits(e){let t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}formatNumber(e){return this.replaceDigits(e.toString())}}let h=new bn;function wn(e,t,r=!1,n=h){let{from:a,to:o}=e;var{differenceInCalendarDays:e,isSameDay:n}=n;return a&&o?(e(o,a)<0&&([a,o]=[o,a]),e(t,a)>=(r?1:0)&&e(o,t)>=(r?1:0)):!r&&o?n(o,t):!(r||!a)&&n(a,t)}function yn(e){return Boolean(e&&"object"==typeof e&&"before"in e&&"after"in e)}function xn(e){return Boolean(e&&"object"==typeof e&&"from"in e)}function kn(e){return Boolean(e&&"object"==typeof e&&"after"in e)}function Sn(e){return Boolean(e&&"object"==typeof e&&"before"in e)}function En(e){return Boolean(e&&"object"==typeof e&&"dayOfWeek"in e)}function Nn(e,t){return Array.isArray(e)&&e.every(t.isDate)}function Cn(n,e,a=h){e=Array.isArray(e)?e:[e];let{isSameDay:o,differenceInCalendarDays:i,isAfter:l}=a;return e.some(e=>{var t,r;return"boolean"==typeof e?e:a.isDate(e)?o(n,e):Nn(e,a)?e.includes(n):xn(e)?wn(e,n,!1,a):En(e)?Array.isArray(e.dayOfWeek)?e.dayOfWeek.includes(n.getDay()):e.dayOfWeek===n.getDay():yn(e)?(t=0<i(e.before,n),r=i(e.after,n)<0,l(e.before,e.after)?r&&t:t||r):kn(e)?0<i(n,e.after):Sn(e)?0<i(e.before,n):"function"==typeof e&&e(n)})}var d,On,Pn;let zn=(0,Ee.createContext)(void 0);function Mn(){var e=(0,Ee.useContext)(zn);if(void 0===e)throw new Error("useDayPicker() must be used within a custom component.");return e}function _n(e,t,r){return(r??new bn(t)).format(e,"LLLL y")}let jn=_n;function Dn(e,t=h){return t.format(e,"yyyy")}let Tn=Dn;function Ln(e,t,r){return(r??new bn(t)).format(e,"LLLL y")}let Rn=Ln;function An(e,t,r,n){let a=(n??new bn(r)).format(e,"PPPP");return t.today&&(a="Today, "+a),t.selected&&(a+=", selected"),a}let Fn=An;let Wn=e=>e instanceof HTMLElement?e:null,In=e=>[...e.querySelectorAll("[data-animated-month]")??[]],Bn=e=>Wn(e.querySelector("[data-animated-month]")),Hn=e=>Wn(e.querySelector("[data-animated-caption]")),Un=e=>Wn(e.querySelector("[data-animated-weeks]")),Yn=e=>Wn(e.querySelector("[data-animated-nav]")),$n=e=>Wn(e.querySelector("[data-animated-weekdays]"));function qn(e,t,r,n){var{month:e,defaultMonth:a,today:o=n.today(),numberOfMonths:i=1}=e;let l=e||a||o;var{differenceInCalendarMonths:e,addMonths:a,startOfMonth:o}=n;return r&&e(r,l)<i-1&&(l=a(r,-1*(i-1))),o(l=t&&e(l,t)<0?t:l)}class Vn{constructor(e,t,r=h){this.date=e,this.displayMonth=t,this.outside=Boolean(t&&!r.isSameMonth(e,t)),this.dateLib=r}isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}class Qn{constructor(e,t){this.days=t,this.weekNumber=e}}class Gn{constructor(e,t){this.date=e,this.weeks=t}}function Kn(e,t){var[e,r]=(0,Ee.useState)(e);return[void 0===t?e:t,r]}function Xn(t,r){let[n,a]=((e,t)=>{let{startMonth:r,endMonth:n}=e;var{startOfYear:a,startOfDay:o,startOfMonth:i,endOfMonth:l,addYears:s,endOfYear:c,newDate:u,today:d}=t,{fromYear:f,toYear:p,fromMonth:h,toMonth:m}=e,h=(!(r=!r&&h?h:r)&&f&&(r=t.newDate(f,0,1)),!(n=!n&&m?m:n)&&p&&(n=u(p,11,31)),"dropdown"===e.captionLayout||"dropdown-years"===e.captionLayout);return r?r=i(r):f?r=u(f,0,1):!r&&h&&(r=a(s(e.today??d(),-100))),n?n=l(n):p?n=u(p,11,31):!n&&h&&(n=c(e.today??d())),[r&&o(r),n&&o(n)]})(t,r),{startOfMonth:o,endOfMonth:e}=r;var i=qn(t,n,a,r);let[l,s]=Kn(i,t.month?i:void 0);(0,Ee.useEffect)(()=>{var e=qn(t,n,a,r);s(e)},[t.timeZone]);i=((t,r,e,n)=>{var{numberOfMonths:a=1}=e,o=[];for(let e=0;e<a;e++){var i=n.addMonths(t,e);if(r&&r<i)break;o.push(i)}return o})(l,a,t,r),i=((e,l,s,c)=>{let{addDays:u,endOfBroadcastWeek:d,endOfISOWeek:f,endOfMonth:p,endOfWeek:h,getISOWeek:m,getWeek:g,startOfBroadcastWeek:v,startOfISOWeek:b,startOfWeek:w}=c;return e=e.reduce((e,a)=>{let t=s.broadcastCalendar?v(a,c):(s.ISOWeek?b:w)(a),r=s.broadcastCalendar?d(a):(s.ISOWeek?f:h)(p(a)),n=l.filter(e=>e>=t&&e<=r),o=s.broadcastCalendar?35:42;s.fixedWeeks&&n.length<o&&(i=l.filter(e=>{var t=o-n.length;return e>r&&e<=u(r,t)}),n.push(...i));var i=n.reduce((e,t)=>{let r=(s.ISOWeek?m:g)(t);var n=e.find(e=>e.weekNumber===r),t=new Vn(t,a,c);return n?n.days.push(t):e.push(new Qn(r,[t])),e},[]),i=new Gn(a,i);return e.push(i),e},[]),s.reverseMonths?e.reverse():e})(i,((e,t,r,n)=>{var a=e[0],e=e[e.length-1],{ISOWeek:r,fixedWeeks:o,broadcastCalendar:i}=r??{},{addDays:l,differenceInCalendarDays:s,differenceInCalendarMonths:c,endOfBroadcastWeek:u,endOfISOWeek:d,endOfMonth:f,endOfWeek:p,isAfter:h,startOfBroadcastWeek:m,startOfISOWeek:g,startOfWeek:v}=n,b=i?m(a,n):(r?g:v)(a),w=s(i?u(e):(r?d:p)(f(e)),b),m=c(e,a)+1,y=[];for(let e=0;e<=w;e++){var x=l(b,e);if(t&&h(x,t))break;y.push(x)}if(n=(i?35:42)*m,o&&y.length<n){var k=n-y.length;for(let e=0;e<k;e++){var S=l(y[y.length-1],1);y.push(S)}}return y})(i,t.endMonth?e(t.endMonth):void 0,t,r),t,r);let c=i.reduce((e,t)=>[...e,...t.weeks],[]);var u=(e=>{let r=[];return e.reduce((e,t)=>{t=t.weeks.reduce((e,t)=>[...e,...t.days],r);return[...e,...t]},r)})(i),d=((e,t,r,n)=>{var a,o,i;if(!r.disableNavigation)return{pagedNavigation:r,numberOfMonths:i}=r,{startOfMonth:n,addMonths:a,differenceInCalendarMonths:o}=n,r=r?i??1:1,i=n(e),t&&o(i,t)<=0?void 0:a(i,-r)})(l,n,t,r),f=((e,t,r,n)=>{var a,o,i;if(!r.disableNavigation)return{pagedNavigation:r,numberOfMonths:a=1}=r,{startOfMonth:n,addMonths:o,differenceInCalendarMonths:i}=n,r=r?a:1,n=n(e),t&&i(t,e)<a?void 0:o(n,r)})(l,a,t,r);let{disableNavigation:p,onMonthChange:h}=t,m=t=>{if(!p){let e=o(t);n&&e<o(n)&&(e=o(n)),a&&e>o(a)&&(e=o(a)),s(e),h?.(e)}};return{months:i,weeks:c,days:u,navStart:n,navEnd:a,previousMonth:d,nextMonth:f,goToMonth:m,goToDay:e=>{var t;t=e,c.some(e=>e.days.some(e=>e.isEqualTo(t)))||m(e.date)}}}function Zn(e){return!e[Ce.disabled]&&!e[Ce.hidden]&&!e[Ce.outside]}function Jn(e,t,r,n,a,o,i,l=0){var s,c,u;if(!(365<l))return r=((e,t,r,n,a,o,i)=>{let{ISOWeek:l,broadcastCalendar:s}=o,{addDays:c,addMonths:u,addWeeks:d,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:h,endOfWeek:m,max:g,min:v,startOfBroadcastWeek:b,startOfISOWeek:w,startOfWeek:y}=i,x={day:c,week:d,month:u,year:f,startOfWeek:e=>s?b(e,i):(l?w:y)(e),endOfWeek:e=>(s?p:l?h:m)(e)}[e](r,"after"===t?1:-1);return"before"===t&&n?x=g([n,x]):"after"===t&&a&&(x=v([a,x])),x})(e,t,r.date,n,a,o,i),s=Boolean(o.disabled&&Cn(r,o.disabled,i)),c=Boolean(o.hidden&&Cn(r,o.hidden,i)),u=r,r=new Vn(r,u,i),s||c?Jn(e,t,r,n,a,o,i,l+1):r}function ea(r,n,e,t,a){var o=r.autoFocus;let[i,l]=(0,Ee.useState)(),s=((e,t,r,n)=>{let a,o=-1;for(var i of e){var l=t(i);Zn(l)&&(l[Ce.focused]&&o<d.FocusedModifier?(a=i,o=d.FocusedModifier):n?.isEqualTo(i)&&o<d.LastFocused?(a=i,o=d.LastFocused):r(i.date)&&o<d.Selected?(a=i,o=d.Selected):l[Ce.today]&&o<d.Today&&(a=i,o=d.Today))}return a=a||e.find(e=>Zn(t(e)))})(n.days,e,t||(()=>!1),i),[c,u]=(0,Ee.useState)(o?s:void 0);return{isFocusTarget:e=>Boolean(s?.isEqualTo(e)),setFocused:u,focused:c,blur:()=>{l(c),u(void 0)},moveFocus:(e,t)=>{c&&(e=Jn(e,t,c,n.navStart,n.navEnd,r,a))&&(n.goToDay(e),u(e))}}}function ta(e,t,r=h){return wn(e,t.from,!1,r)||wn(e,t.to,!1,r)||wn(t,e.from,!1,r)||wn(t,e.to,!1,r)}function ra(l,e,s=h){e=Array.isArray(e)?e:[e];if(e.filter(e=>"function"!=typeof e).some(e=>{if("boolean"==typeof e)return e;if(s.isDate(e))return wn(l,e,!1,s);if(Nn(e,s))return e.some(e=>wn(l,e,!1,s));if(xn(e))return!(!e.from||!e.to)&&ta(l,{from:e.from,to:e.to},s);if(En(e)){var[r,n,a=h]=[l,e.dayOfWeek,s];var o=Array.isArray(n)?n:[n];let t=r.from;var n=a.differenceInCalendarDays(r.to,r.from),i=Math.min(n,6);for(let e=0;e<=i;e++){if(o.includes(t.getDay()))return!0;t=a.addDays(t,1)}return!1}return yn(e)?s.isAfter(e.before,e.after)?ta(l,{from:s.addDays(e.after,1),to:s.addDays(e.before,-1)},s):Cn(l.from,e,s)||Cn(l.to,e,s):!(!kn(e)&&!Sn(e))&&(Cn(l.from,e,s)||Cn(l.to,e,s))}))return 1;var r=e.filter(e=>"function"==typeof e);if(r.length){let t=l.from;var n=s.differenceInCalendarDays(l.to,l.from);for(let e=0;e<=n;e++){if(r.some(e=>e(t)))return 1;t=s.addDays(t,1)}}}function na(o,i){let{disabled:l,excludeDisabled:s,selected:e,required:c,onSelect:u}=o,[t,d]=Kn(e,u?e:void 0),f=u?e:t;return{selected:f,select:(e,t,r)=>{var{min:n,max:a}=o,n=e?((e,t,r=0,n=0,a=!1,o=h)=>{var{from:t,to:i}=t||{},{isSameDay:l,isAfter:s,isBefore:c}=o;let u;if(t||i){if(t&&!i)u=l(t,e)?a?{from:t,to:void 0}:void 0:c(e,t)?{from:e,to:t}:{from:t,to:e};else if(t&&i)if(l(t,e)&&l(i,e))u=a?{from:t,to:i}:void 0;else if(l(t,e))u={from:t,to:0<r?void 0:e};else if(l(i,e))u={from:e,to:0<r?void 0:e};else if(c(e,t))u={from:e,to:i};else{if(!s(e,t)&&!s(e,i))throw new Error("Invalid range");u={from:t,to:e}}}else u={from:e,to:0<r?void 0:e};return u=u?.from&&u?.to&&(a=o.differenceInCalendarDays(u.to,u.from),0<n&&n<a||1<r&&a<r)?{from:e,to:void 0}:u})(e,f,n,a,c,i):void 0;return s&&l&&n?.from&&n.to&&ra({from:n.from,to:n.to},l,i)&&(n.from=e,n.to=void 0),u||d(n),u?.(n,e,t,r),n},isSelected:e=>f&&wn(f,e,!1,i)}}function aa(e,t){var r=((e,t)=>{let{selected:r,required:a,onSelect:o}=e,[n,i]=Kn(r,o?r:void 0),l=o?r:n,s=t.isSameDay;return{selected:l,select:(e,t,r)=>{let n=e;return!a&&l&&s(e,l)&&(n=void 0),o||i(n),a,o?.(n,e,t,r),n},isSelected:e=>!!l&&s(l,e)}})(e,t),n=((e,t)=>{let{selected:r,required:a,onSelect:o}=e,[n,i]=Kn(r,o?r:void 0),l=o?r:n,s=t.isSameDay,c=t=>l?.some(e=>s(e,t))??!1,{min:u,max:d}=e;return{selected:l,select:(t,e,r)=>{let n=[...l??[]];if(c(t)){if(l?.length===u)return;if(a&&1===l?.length)return;n=l?.filter(e=>!s(e,t))}else n=l?.length===d?[t]:[...n,t];return o||i(n),o?.(n,t,e,r),n},isSelected:c}})(e,t),a=na(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return a;default:return}}function oa(e){let c=e,{components:u,formatters:a,labels:t,dateLib:f,locale:R,classNames:p}=(c.timeZone&&((c={...e}).today&&(c.today=new ze(c.today,c.timeZone)),c.month&&(c.month=new ze(c.month,c.timeZone)),c.defaultMonth&&(c.defaultMonth=new ze(c.defaultMonth,c.timeZone)),c.startMonth&&(c.startMonth=new ze(c.startMonth,c.timeZone)),c.endMonth&&(c.endMonth=new ze(c.endMonth,c.timeZone)),"single"===c.mode&&c.selected?c.selected=new ze(c.selected,c.timeZone):"multiple"===c.mode&&c.selected?c.selected=c.selected?.map(e=>new ze(e,c.timeZone)):"range"===c.mode&&c.selected&&(c.selected={from:c.selected.from?new ze(c.selected.from,c.timeZone):void 0,to:c.selected.to?new ze(c.selected.to,c.timeZone):void 0})),(0,Ee.useMemo)(()=>{var e,t={...lr,...c.locale};return{dateLib:new bn({locale:t,weekStartsOn:c.broadcastCalendar?1:c.weekStartsOn,firstWeekContainsDate:c.firstWeekContainsDate,useAdditionalWeekYearTokens:c.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:c.useAdditionalDayOfYearTokens,timeZone:c.timeZone,numerals:c.numerals},c.dateLib),components:(e=c.components,{...Me,...e}),formatters:((e=c.formatters)?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{..._e,...e}),labels:{...je,...c.labels},locale:t,classNames:{...$t(),...c.classNames}}},[c.locale,c.broadcastCalendar,c.weekStartsOn,c.firstWeekContainsDate,c.useAdditionalWeekYearTokens,c.useAdditionalDayOfYearTokens,c.timeZone,c.numerals,c.dateLib,c.components,c.formatters,c.labels,c.classNames])),{captionLayout:o,mode:i,navLayout:l,numberOfMonths:s=1,onDayBlur:n,onDayClick:d,onDayFocus:h,onDayKeyDown:m,onDayMouseEnter:g,onDayMouseLeave:v,onNextClick:r,onPrevClick:b,showWeekNumber:A,styles:w}=c,{formatCaption:F,formatDay:W,formatMonthDropdown:I,formatWeekNumber:B,formatWeekNumberHeader:H,formatWeekdayName:U,formatYearDropdown:Y}=a;e=Xn(c,f);let{days:$,months:y,navStart:x,navEnd:k,previousMonth:S,nextMonth:E,goToMonth:N}=e,C=((e,t,r,n,a)=>{let{disabled:o,hidden:i,modifiers:l,showOutsideDays:s,broadcastCalendar:c,today:u}=t;var{isSameDay:d,isSameMonth:f,startOfMonth:t,isBefore:p,endOfMonth:h,isAfter:m}=a,g=r&&t(r),v=n&&h(n);let b={[Ce.focused]:[],[Ce.outside]:[],[Ce.disabled]:[],[Ce.hidden]:[],[Ce.today]:[]},w={};for(let n of e){let{date:r,displayMonth:e}=n;var y=Boolean(e&&!f(r,e)),x=Boolean(g&&p(r,g)),k=Boolean(v&&m(r,v)),S=Boolean(o&&Cn(r,o,a)),x=Boolean(i&&Cn(r,i,a))||x||k||!c&&!s&&y||c&&!1===s&&y,k=d(r,u??a.today());y&&b.outside.push(n),S&&b.disabled.push(n),x&&b.hidden.push(n),k&&b.today.push(n),l&&Object.keys(l).forEach(e=>{var t=l?.[e];!!t&&Cn(r,t,a)&&(w[e]?w[e].push(n):w[e]=[n])})}return t=>{var e,r,n={[Ce.focused]:!1,[Ce.disabled]:!1,[Ce.hidden]:!1,[Ce.outside]:!1,[Ce.today]:!1},a={};for(e in b){var o=b[e];n[e]=o.some(e=>e===t)}for(r in w)a[r]=w[r].some(e=>e===t);return{...n,...a}}})($,c,x,k,f),{isSelected:O,select:P,selected:z}=aa(c,f)??{},{blur:q,focused:V,isFocusTarget:Q,moveFocus:G,setFocused:M}=ea(c,e,C,O??(()=>!1),f),{labelDayButton:K,labelGridcell:X,labelGrid:Z,labelMonthDropdown:J,labelNav:ee,labelPrevious:te,labelNext:re,labelWeekday:ne,labelWeekNumber:ae,labelWeekNumberHeader:oe,labelYearDropdown:ie}=t,le=(0,Ee.useMemo)(()=>{var t=f,e=c.ISOWeek,r=void 0,n=t.today(),a=r?t.startOfBroadcastWeek(n,t):e?t.startOfISOWeek(n):t.startOfWeek(n),o=[];for(let e=0;e<7;e++){var i=t.addDays(a,e);o.push(i)}return o},[f,c.ISOWeek]),se=void 0!==i||void 0!==d,_=(0,Ee.useCallback)(()=>{S&&(N(S),b?.(S))},[S,N,b]),j=(0,Ee.useCallback)(()=>{E&&(N(E),r?.(E))},[N,E,r]),ce=(0,Ee.useCallback)((t,r)=>e=>{e.preventDefault(),e.stopPropagation(),M(t),P?.(t.date,r,e),d?.(t.date,r,e)},[P,d,M]),ue=(0,Ee.useCallback)((t,r)=>e=>{M(t),h?.(t.date,r,e)},[h,M]),de=(0,Ee.useCallback)((t,r)=>e=>{q(),n?.(t.date,r,e)},[q,n]),fe=(0,Ee.useCallback)((n,a)=>e=>{var t,r={ArrowLeft:[e.shiftKey?"month":"day","rtl"===c.dir?"after":"before"],ArrowRight:[e.shiftKey?"month":"day","rtl"===c.dir?"before":"after"],ArrowDown:[e.shiftKey?"year":"week","after"],ArrowUp:[e.shiftKey?"year":"week","before"],PageUp:[e.shiftKey?"year":"month","before"],PageDown:[e.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};r[e.key]&&(e.preventDefault(),e.stopPropagation(),[r,t]=r[e.key],G(r,t)),m?.(n.date,a,e)},[G,m,c.dir]),pe=(0,Ee.useCallback)((t,r)=>e=>{g?.(t.date,r,e)},[g]),he=(0,Ee.useCallback)((t,r)=>e=>{v?.(t.date,r,e)},[v]),me=(0,Ee.useCallback)(t=>e=>{e=Number(e.target.value),e=f.setMonth(f.startOfMonth(t),e);N(e)},[f,N]),ge=(0,Ee.useCallback)(t=>e=>{e=Number(e.target.value),e=f.setYear(f.startOfMonth(t),e);N(e)},[f,N]);var{className:e,style:ve}=(0,Ee.useMemo)(()=>({className:[p[Ne.Root],c.className].filter(Boolean).join(" "),style:{...w?.[Ne.Root],...c.style}}),[p,c.className,c.style,w]),be=(e=>{let r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&1<e.numberOfMonths||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([e,t])=>{e.startsWith("data-")&&(r[e]=t)}),r})(c),we=(0,Ee.useRef)(null);{var[D,ye,{classNames:T,months:L,focused:xe,dateLib:ke}]=[we,Boolean(c.animate),{classNames:p,months:y,focused:V,dateLib:f}];let n=(0,Ee.useRef)(null),a=(0,Ee.useRef)(L),d=(0,Ee.useRef)(!1);(0,Ee.useLayoutEffect)(()=>{var t=a.current;if(a.current=L,ye&&D.current&&D.current instanceof HTMLElement&&0!==L.length&&0!==t.length&&L.length===t.length){var e=ke.isSameMonth(L[0].date,t[0].date);let s=ke.isAfter(L[0].date,t[0].date),c=s?T[Pe.caption_after_enter]:T[Pe.caption_before_enter],u=s?T[Pe.weeks_after_enter]:T[Pe.weeks_before_enter];var t=n.current,r=D.current.cloneNode(!0);if(r instanceof HTMLElement?(In(r).forEach(e=>{var t;e instanceof HTMLElement&&((t=Bn(e))&&e.contains(t)&&e.removeChild(t),(t=Hn(e))&&t.classList.remove(c),t=Un(e))&&t.classList.remove(u)}),n.current=r):n.current=null,!(d.current||e||xe)){let e=t instanceof HTMLElement?In(t):[];r=In(D.current);if(r&&r.every(e=>e instanceof HTMLElement)&&e&&e.every(e=>e instanceof HTMLElement)){d.current=!0;let i=[],l=(D.current.style.isolation="isolate",Yn(D.current));l&&(l.style.zIndex="1"),r.forEach((r,n)=>{let a=e[n];if(a){r.style.position="relative",r.style.overflow="hidden";let e=Hn(r),t=(e&&e.classList.add(c),Un(r));t&&t.classList.add(u);var n=()=>{d.current=!1,D.current&&(D.current.style.isolation=""),l&&(l.style.zIndex=""),e&&e.classList.remove(c),t&&t.classList.remove(u),r.style.position="",r.style.overflow="",r.contains(a)&&r.removeChild(a)},o=(i.push(n),a.style.pointerEvents="none",a.style.position="absolute",a.style.overflow="hidden",a.setAttribute("aria-hidden","true"),$n(a)),o=(o&&(o.style.opacity="0"),Hn(a)),o=(o&&(o.classList.add(s?T[Pe.caption_before_exit]:T[Pe.caption_after_exit]),o.addEventListener("animationend",n)),Un(a));o&&o.classList.add(s?T[Pe.weeks_before_exit]:T[Pe.weeks_after_exit]),r.insertBefore(a,r.firstChild)}})}}}})}var Se={dayPickerProps:c,selected:z,select:P,isSelected:O,months:y,nextMonth:E,previousMonth:S,goToMonth:N,getModifiers:C,components:u,classNames:p,styles:w,labels:t,formatters:a};return Ee.createElement(zn.Provider,{value:Se},Ee.createElement(u.Root,{rootRef:c.animate?we:void 0,className:e,style:ve,dir:c.dir,id:c.id,lang:c.lang,nonce:c.nonce,title:c.title,role:c.role,"aria-label":c["aria-label"],...be},Ee.createElement(u.Months,{className:p[Ne.Months],style:w?.[Ne.Months]},!c.hideNavigation&&!l&&Ee.createElement(u.Nav,{"data-animated-nav":c.animate?"true":void 0,className:p[Ne.Nav],style:w?.[Ne.Nav],"aria-label":ee(),onPreviousClick:_,onNextClick:j,previousMonth:S,nextMonth:E}),y.map((e,t)=>{var r=((e,r,n,a,o)=>{let{startOfMonth:i,startOfYear:t,endOfYear:l,eachMonthOfInterval:s,getMonth:c}=o;return s({start:t(e),end:l(e)}).map(e=>{var t=a.formatMonthDropdown(e,o);return{value:c(e),label:t,disabled:r&&e<i(r)||n&&e>i(n)||!1}})})(e.date,x,k,a,f),n=((l,s,c,u)=>{if(l&&s){let{startOfYear:e,endOfYear:t,addYears:r,getYear:n,isBefore:a,isSameYear:o}=u;var l=e(l),d=t(s),f=[];let i=l;for(;a(i,d)||o(i,d);)f.push(i),i=r(i,1);return f.map(e=>{var t=c.formatYearDropdown(e,u);return{value:n(e),label:t,disabled:!1}})}})(x,k,a,f);return Ee.createElement(u.Month,{"data-animated-month":c.animate?"true":void 0,className:p[Ne.Month],style:w?.[Ne.Month],key:t,displayIndex:t,calendarMonth:e},"around"===l&&!c.hideNavigation&&0===t&&Ee.createElement(u.PreviousMonthButton,{type:"button",className:p[Ne.PreviousMonthButton],tabIndex:S?void 0:-1,"aria-disabled":!S||void 0,"aria-label":te(S),onClick:_,"data-animated-button":c.animate?"true":void 0},Ee.createElement(u.Chevron,{disabled:!S||void 0,className:p[Ne.Chevron],orientation:"rtl"===c.dir?"right":"left"})),Ee.createElement(u.MonthCaption,{"data-animated-caption":c.animate?"true":void 0,className:p[Ne.MonthCaption],style:w?.[Ne.MonthCaption],calendarMonth:e,displayIndex:t},o?.startsWith("dropdown")?Ee.createElement(u.DropdownNav,{className:p[Ne.Dropdowns],style:w?.[Ne.Dropdowns]},"dropdown"===o||"dropdown-months"===o?Ee.createElement(u.MonthsDropdown,{className:p[Ne.MonthsDropdown],"aria-label":J(),classNames:p,components:u,disabled:Boolean(c.disableNavigation),onChange:me(e.date),options:r,style:w?.[Ne.Dropdown],value:f.getMonth(e.date)}):Ee.createElement("span",null,I(e.date,f)),"dropdown"===o||"dropdown-years"===o?Ee.createElement(u.YearsDropdown,{className:p[Ne.YearsDropdown],"aria-label":ie(f.options),classNames:p,components:u,disabled:Boolean(c.disableNavigation),onChange:ge(e.date),options:n,style:w?.[Ne.Dropdown],value:f.getYear(e.date)}):Ee.createElement("span",null,Y(e.date,f)),Ee.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},F(e.date,f.options,f))):Ee.createElement(u.CaptionLabel,{className:p[Ne.CaptionLabel],role:"status","aria-live":"polite"},F(e.date,f.options,f))),"around"===l&&!c.hideNavigation&&t===s-1&&Ee.createElement(u.NextMonthButton,{type:"button",className:p[Ne.NextMonthButton],tabIndex:E?void 0:-1,"aria-disabled":!E||void 0,"aria-label":re(E),onClick:j,"data-animated-button":c.animate?"true":void 0},Ee.createElement(u.Chevron,{disabled:!E||void 0,className:p[Ne.Chevron],orientation:"rtl"===c.dir?"left":"right"})),t===s-1&&"after"===l&&!c.hideNavigation&&Ee.createElement(u.Nav,{"data-animated-nav":c.animate?"true":void 0,className:p[Ne.Nav],style:w?.[Ne.Nav],"aria-label":ee(),onPreviousClick:_,onNextClick:j,previousMonth:S,nextMonth:E}),Ee.createElement(u.MonthGrid,{role:"grid","aria-multiselectable":"multiple"===i||"range"===i,"aria-label":Z(e.date,f.options,f)||void 0,className:p[Ne.MonthGrid],style:w?.[Ne.MonthGrid]},!c.hideWeekdays&&Ee.createElement(u.Weekdays,{"data-animated-weekdays":c.animate?"true":void 0,className:p[Ne.Weekdays],style:w?.[Ne.Weekdays]},A&&Ee.createElement(u.WeekNumberHeader,{"aria-label":oe(f.options),className:p[Ne.WeekNumberHeader],style:w?.[Ne.WeekNumberHeader],scope:"col"},H()),le.map((e,t)=>Ee.createElement(u.Weekday,{"aria-label":ne(e,f.options,f),className:p[Ne.Weekday],key:t,style:w?.[Ne.Weekday],scope:"col"},U(e,f.options,f)))),Ee.createElement(u.Weeks,{"data-animated-weeks":c.animate?"true":void 0,className:p[Ne.Weeks],style:w?.[Ne.Weeks]},e.weeks.map((e,t)=>Ee.createElement(u.Week,{className:p[Ne.Week],key:e.weekNumber,style:w?.[Ne.Week],week:e},A&&Ee.createElement(u.WeekNumber,{week:e,style:w?.[Ne.WeekNumber],"aria-label":ae(e.weekNumber,{locale:R}),className:p[Ne.WeekNumber],scope:"row",role:"rowheader"},B(e.weekNumber,f)),e.days.map(e=>{var t,r,n,a=e.date,o=C(e),i=(o[Ce.focused]=!o.hidden&&Boolean(V?.isEqualTo(e)),o[Oe.selected]=O?.(a)||o.selected,xn(z)&&({from:i,to:t}=z,o[Oe.range_start]=Boolean(i&&t&&f.isSameDay(a,i)),o[Oe.range_end]=Boolean(i&&t&&f.isSameDay(a,t)),o[Oe.range_middle]=wn(z,a,!0,f)),((e,t={},r={})=>{let n={...t?.[Ne.Day]};return Object.entries(e).filter(([,e])=>!0===e).forEach(([e])=>{n={...n,...r?.[e]}}),n})(o,w,c.modifiersStyles)),l=([t,r,n={}]=[o,p,c.modifiersClassNames],Object.entries(t).filter(([,e])=>!0===e).reduce((e,[t])=>(n[t]?e.push(n[t]):r[Ce[t]]?e.push(r[Ce[t]]):r[Oe[t]]&&e.push(r[Oe[t]]),e),[r[Ne.Day]])),s=se||o.hidden?void 0:X(a,o,f.options,f);return Ee.createElement(u.Day,{key:f.format(a,"yyyy-MM-dd")+"_"+f.format(e.displayMonth,"yyyy-MM"),day:e,modifiers:o,className:l.join(" "),style:i,role:"gridcell","aria-selected":o.selected||void 0,"aria-label":s,"data-day":f.format(a,"yyyy-MM-dd"),"data-month":e.outside?f.format(a,"yyyy-MM"):void 0,"data-selected":o.selected||void 0,"data-disabled":o.disabled||void 0,"data-hidden":o.hidden||void 0,"data-outside":e.outside||void 0,"data-focused":o.focused||void 0,"data-today":o.today||void 0},!o.hidden&&se?Ee.createElement(u.DayButton,{className:p[Ne.DayButton],style:w?.[Ne.DayButton],type:"button",day:e,modifiers:o,disabled:o.disabled||void 0,tabIndex:Q(e)?0:-1,"aria-label":K(a,o,f.options,f),onClick:ce(e,o),onBlur:de(e,o),onFocus:ue(e,o),onKeyDown:fe(e,o),onMouseEnter:pe(e,o),onMouseLeave:he(e,o)},W(a,f.options,f)):!o.hidden&&W(e.date,f.options,f))}))))))})),c.footer&&Ee.createElement(u.Footer,{className:p[Ne.Footer],style:w?.[Ne.Footer],role:"status","aria-live":"polite"},c.footer)))}function ia(e){return(ia="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(i=d=d||{})[i.Today=0]="Today",i[i.Selected=1]="Selected",i[i.LastFocused=2]="LastFocused",i[i.FocusedModifier=3]="FocusedModifier";var la=["className","classNames","showOutsideDays","captionLayout","buttonVariant","formatters","components"],sa=["className","rootRef"],ca=["className","orientation"],ua=["children"],da=["className","day","modifiers"];function fa(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function f(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?fa(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=ia(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=ia(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==ia(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):fa(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function pa(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function ha(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function ma(e){var t=e.className,r=e.classNames,n=e.showOutsideDays,n=void 0===n||n,a=e.captionLayout,a=void 0===a?"label":a,o=e.buttonVariant,o=void 0===o?"ghost":o,i=e.formatters,l=e.components,e=ha(e,la),s=$t();return(0,H.jsx)(oa,f({showOutsideDays:n,className:c("bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",String.raw(On=On||pa(["rtl:**:[.rdp-button_next>svg]:rotate-180"],["rtl:**:[.rdp-button\\_next>svg]:rotate-180"])),String.raw(Pn=Pn||pa(["rtl:**:[.rdp-button_previous>svg]:rotate-180"],["rtl:**:[.rdp-button\\_previous>svg]:rotate-180"])),t),captionLayout:a,formatters:f({formatMonthDropdown:function(e){return e.toLocaleString("default",{month:"short"})}},i),classNames:f({root:c("w-fit",s.root),months:c("flex gap-4 flex-col md:flex-row relative",s.months),month:c("flex flex-col w-full gap-4",s.month),nav:c("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",s.nav),button_previous:c(kt({variant:o}),"size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",s.button_previous),button_next:c(kt({variant:o}),"size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",s.button_next),month_caption:c("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",s.month_caption),dropdowns:c("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",s.dropdowns),dropdown_root:c("relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",s.dropdown_root),dropdown:c("absolute bg-popover inset-0 opacity-0",s.dropdown),caption_label:c("select-none font-medium","label"===a?"text-sm":"rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",s.caption_label),table:"w-full border-collapse",weekdays:c("flex",s.weekdays),weekday:c("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",s.weekday),week:c("flex w-full mt-2",s.week),week_number_header:c("select-none w-(--cell-size)",s.week_number_header),week_number:c("text-[0.8rem] select-none text-muted-foreground",s.week_number),day:c("relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",s.day),range_start:c("rounded-l-md bg-accent",s.range_start),range_middle:c("rounded-none",s.range_middle),range_end:c("rounded-r-md bg-accent",s.range_end),today:c("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",s.today),outside:c("text-muted-foreground aria-selected:text-muted-foreground",s.outside),disabled:c("text-muted-foreground opacity-50",s.disabled),hidden:c("invisible",s.hidden)},r),components:f({Root:function(e){var t=e.className,r=e.rootRef,e=ha(e,sa);return(0,H.jsx)("div",f({"data-slot":"calendar",ref:r,className:c(t)},e))},Chevron:function(e){var t=e.className,r=e.orientation,e=ha(e,ca);return"left"===r?(0,H.jsx)(Ht,f({className:c("size-4",t)},e)):"right"===r?(0,H.jsx)(Ut,f({className:c("size-4",t)},e)):(0,H.jsx)(Yt,f({className:c("size-4",t)},e))},DayButton:ga,WeekNumber:function(e){var t=e.children,e=ha(e,ua);return(0,H.jsx)("td",f(f({},e),{},{children:(0,H.jsx)("div",{className:"flex size-(--cell-size) items-center justify-center text-center",children:t})}))}},l)},e))}function ga(e){var t=e.className,r=e.day,n=e.modifiers,e=ha(e,da),a=$t(),o=Ee.useRef(null);return Ee.useEffect(function(){var e;n.focused&&null!=(e=o.current)&&e.focus()},[n.focused]),(0,H.jsx)(m,f({ref:o,variant:"ghost",size:"icon","data-day":r.date.toLocaleDateString(),"data-selected-single":n.selected&&!n.range_start&&!n.range_end&&!n.range_middle,"data-range-start":n.range_start,"data-range-end":n.range_end,"data-range-middle":n.range_middle,className:c("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-[#9CAF88] data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-[#9CAF88] data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",a.day,t)},e))}function va(t,r,{checkForDefaultPrevented:n=!0}={}){return function(e){if(t?.(e),!1===n||!e.defaultPrevented)return r?.(e)}}function ba(l,e=[]){let t=[];var r=()=>{let r=t.map(e=>Ee.createContext(e));return function(e){let t=e?.[l]||r;return Ee.useMemo(()=>({["__scope"+l]:{...e,[l]:t}}),[e,t])}};return r.scopeName=l,[function(r,n){let o=Ee.createContext(n),i=t.length;t=[...t,n];var e=e=>{let{scope:t,children:r,...n}=e;var e=t?.[l]?.[i]||o,a=Ee.useMemo(()=>n,Object.values(n));return(0,H.jsx)(e.Provider,{value:a,children:r})};return e.displayName=r+"Provider",[e,function(e,t){if(t=t?.[l]?.[i]||o,t=Ee.useContext(t))return t;if(void 0!==n)return n;throw new Error(`\`${e}\` must be used within \`${r}\``)}]},((...e)=>{let r=e[0];var t;return 1===e.length?r:((t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(n){let e=t.reduce((e,{useScope:t,scopeName:r})=>{t=t(n)["__scope"+r];return{...e,...t}},{});return Ee.useMemo(()=>({["__scope"+r.scopeName]:e}),[e])}}).scopeName=r.scopeName,t)})(r,...e)]}var wa=o(961),U=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,a)=>{let o=W("Primitive."+a);var t=Ee.forwardRef((e,t)=>{let{asChild:r,...n}=e;e=r?o:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,H.jsx)(e,{...n,ref:t})});return t.displayName="Primitive."+a,{...e,[a]:t}},{});function ya(e){let t=Ee.useRef(e);return Ee.useEffect(()=>{t.current=e}),Ee.useMemo(()=>(...e)=>t.current?.(...e),[])}var xa,ka="dismissableLayer.update",Sa=Ee.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ea=Ee.forwardRef((e,t)=>{let{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:n,onPointerDownOutside:a,onFocusOutside:o,onInteractOutside:i,onDismiss:l,...s}=e,c=Ee.useContext(Sa),[u,d]=Ee.useState(null),f=u?.ownerDocument??globalThis?.document,[,p]=Ee.useState({});var t=Y(t,e=>d(e)),h=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),m=h.indexOf(m);let g=u?h.indexOf(u):-1;h=0<c.layersWithOutsidePointerEventsDisabled.size;let v=g>=m;var m=((e,n=globalThis?.document)=>{let a=ya(e),o=Ee.useRef(!1),i=Ee.useRef(()=>{});return Ee.useEffect(()=>{let e=t=>{if(t.target&&!o.current){var r=function(){Ca("dismissableLayer.pointerDownOutside",a,e,{discrete:!0})};let e={originalEvent:t};"touch"===t.pointerType?(n.removeEventListener("click",i.current),i.current=r,n.addEventListener("click",i.current,{once:!0})):r()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,a]),{onPointerDownCapture:()=>o.current=!0}})(e=>{let t=e.target;var r=[...c.branches].some(e=>e.contains(t));!v||r||(a?.(e),i?.(e),e.defaultPrevented)||l?.()},f),b=((e,t=globalThis?.document)=>{let r=ya(e),n=Ee.useRef(!1);return Ee.useEffect(()=>{let e=e=>{e.target&&!n.current&&(e={originalEvent:e},Ca("dismissableLayer.focusOutside",r,e,{discrete:!1}))};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}})(e=>{let t=e.target;[...c.branches].some(e=>e.contains(t))||(o?.(e),i?.(e),e.defaultPrevented)||l?.()},f);{var[w,y=globalThis?.document]=[e=>{g===c.layers.size-1&&(n?.(e),!e.defaultPrevented)&&l&&(e.preventDefault(),l())},f];let t=ya(w);Ee.useEffect(()=>{let e=e=>{"Escape"===e.key&&t(e)};return y.addEventListener("keydown",e,{capture:!0}),()=>y.removeEventListener("keydown",e,{capture:!0})},[t,y])}return Ee.useEffect(()=>{if(u)return r&&(0===c.layersWithOutsidePointerEventsDisabled.size&&(xa=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Na(),()=>{r&&1===c.layersWithOutsidePointerEventsDisabled.size&&(f.body.style.pointerEvents=xa)}},[u,f,r,c]),Ee.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Na())},[u,c]),Ee.useEffect(()=>{let e=()=>p({});return document.addEventListener(ka,e),()=>document.removeEventListener(ka,e)},[]),(0,H.jsx)(U.div,{...s,ref:t,style:{pointerEvents:h?v?"auto":"none":void 0,...e.style},onFocusCapture:va(e.onFocusCapture,b.onFocusCapture),onBlurCapture:va(e.onBlurCapture,b.onBlurCapture),onPointerDownCapture:va(e.onPointerDownCapture,m.onPointerDownCapture)})}),z=(Ea.displayName="DismissableLayer",Ee.forwardRef((e,t)=>{let r=Ee.useContext(Sa),n=Ee.useRef(null);t=Y(t,n);return Ee.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,H.jsx)(U.div,{...e,ref:t})}));function Na(){var e=new CustomEvent(ka);document.dispatchEvent(e)}function Ca(e,t,r,{discrete:n}){var a,o,i=r.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?(o=r,(a=i)&&wa.flushSync(()=>a.dispatchEvent(o))):i.dispatchEvent(r)}z.displayName="DismissableLayerBranch";var Oa=0;function Pa(){Ee.useEffect(()=>{var e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??za()),document.body.insertAdjacentElement("beforeend",e[1]??za()),Oa++,()=>{1===Oa&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Oa--}},[])}function za(){var e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Ma="focusScope.autoFocusOnMount",_a="focusScope.autoFocusOnUnmount",ja={bubbles:!1,cancelable:!0},Da=Ee.forwardRef((e,t)=>{let{loop:i=!1,trapped:l=!1,onMountAutoFocus:r,onUnmountAutoFocus:n,...a}=e,[o,s]=Ee.useState(null),c=ya(r),u=ya(n),d=Ee.useRef(null);e=Y(t,e=>s(e));let f=Ee.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;Ee.useEffect(()=>{if(l){let e=function(e){!f.paused&&o&&(e=e.target,o.contains(e)?d.current=e:Ra(d.current,{select:!0}))},t=function(e){f.paused||!o||null===(e=e.relatedTarget)||o.contains(e)||Ra(d.current,{select:!0})},r=function(e){var t=document.activeElement;if(t===document.body)for(var r of e)0<r.removedNodes.length&&Ra(o)},n=(e,t,document.addEventListener("focusin",e),document.addEventListener("focusout",t),new MutationObserver(r));return o&&n.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[l,o,f.paused]),Ee.useEffect(()=>{if(o){Aa.add(f);let t=document.activeElement;var e;return o.contains(t)||(e=new CustomEvent(Ma,ja),o.addEventListener(Ma,c),o.dispatchEvent(e),e.defaultPrevented)||(((e,{select:t})=>{var r,n=document.activeElement;for(r of e)if(Ra(r,{select:t}),document.activeElement!==n)return})(Ta(o).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===t&&Ra(o)),()=>{o.removeEventListener(Ma,c),setTimeout(()=>{var e=new CustomEvent(_a,ja);o.addEventListener(_a,u),o.dispatchEvent(e),e.defaultPrevented||Ra(t??document.body,{select:!0}),o.removeEventListener(_a,u),Aa.remove(f)},0)}}},[o,c,u,f]);t=Ee.useCallback(e=>{var t,r,n,a,o;!i&&!l||f.paused||(r="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,t=document.activeElement,r&&t&&(r=e.currentTarget,[n,o]=(a=Ta(n=r),o=La(a,n),a=La(a.reverse(),n),[o,a]),n&&o?e.shiftKey||t!==o?e.shiftKey&&t===n&&(e.preventDefault(),i)&&Ra(o,{select:!0}):(e.preventDefault(),i&&Ra(n,{select:!0})):t===r&&e.preventDefault()))},[i,l,f.paused]);return(0,H.jsx)(U.div,{tabIndex:-1,...a,ref:e,onKeyDown:t})});function Ta(e){for(var t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{var t="INPUT"===e.tagName&&"hidden"===e.type;return!(e.disabled||e.hidden||t)&&0<=e.tabIndex?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});r.nextNode();)t.push(r.currentNode);return t}function La(e,t){for(var r of e)if(!((e,{upTo:t})=>{if("hidden"===getComputedStyle(e).visibility)return 1;for(;e;){if(void 0!==t&&e===t)return;if("none"===getComputedStyle(e).display)return 1;e=e.parentElement}})(r,{upTo:t}))return r}function Ra(e,{select:t=!1}={}){var r;e&&e.focus&&(r=document.activeElement,e.focus({preventScroll:!0}),e!==r)&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}Da.displayName="FocusScope";var Aa=(()=>{let r=[];return{add(e){var t=r[0];e!==t&&t?.pause(),(r=Fa(r,e)).unshift(e)},remove(e){(r=Fa(r,e))[0]?.resume()}}})();function Fa(e,t){e=[...e],t=e.indexOf(t);return-1!==t&&e.splice(t,1),e}var Wa=globalThis?.document?Ee.useLayoutEffect:()=>{},Ia=O[" useId ".trim().toString()]||(()=>{}),Ba=0;let Ha=["top","right","bottom","left"];let Ua=Math.min,y=Math.max,Ya=Math.round,$a=Math.floor,g=e=>({x:e,y:e}),qa={left:"right",right:"left",bottom:"top",top:"bottom"},Va={start:"end",end:"start"};function Qa(e,t,r){return y(e,Ua(t,r))}function Ga(e,t){return"function"==typeof e?e(t):e}function Ka(e){return e.split("-")[0]}function Xa(e){return e.split("-")[1]}function Za(e){return"x"===e?"y":"x"}function Ja(e){return"y"===e?"height":"width"}let eo=new Set(["top","bottom"]);function to(e){return eo.has(Ka(e))?"y":"x"}function ro(e){return Za(to(e))}function no(e){return e.replace(/start|end/g,e=>Va[e])}let ao=["left","right"],oo=["right","left"],io=["top","bottom"],lo=["bottom","top"];function so(e,t,r,n){let a=Xa(e),o=((e,t,r)=>{switch(e){case"top":case"bottom":return r?t?oo:ao:t?ao:oo;case"left":case"right":return t?io:lo;default:return[]}})(Ka(e),"start"===r,n);return o=a&&(o=o.map(e=>e+"-"+a),t)?o.concat(o.map(no)):o}function co(e){return e.replace(/left|right|bottom|top/g,e=>qa[e])}function uo(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function fo(e){var{x:e,y:t,width:r,height:n}=e;return{width:r,height:n,top:t,left:e,right:e+r,bottom:t+n,x:e,y:t}}function po(e,t,r){var{reference:n,floating:a}=e,e=to(t),o=ro(t),i=Ja(o),l=Ka(t),s="y"===e,c=n.x+n.width/2-a.width/2,u=n.y+n.height/2-a.height/2,d=n[i]/2-a[i]/2;let f;switch(l){case"top":f={x:c,y:n.y-a.height};break;case"bottom":f={x:c,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:u};break;case"left":f={x:n.x-a.width,y:u};break;default:f={x:n.x,y:n.y}}switch(Xa(t)){case"start":f[o]-=d*(r&&s?-1:1);break;case"end":f[o]+=d*(r&&s?-1:1)}return f}let ho=async(t,r,e)=>{var{placement:n="bottom",strategy:a="absolute",middleware:e=[],platform:o}=e,i=e.filter(Boolean),l=await(null==o.isRTL?void 0:o.isRTL(r));let s=await o.getElementRects({reference:t,floating:r,strategy:a}),{x:c,y:u}=po(s,n,l),d=n,f={},p=0;for(let e=0;e<i.length;e++){var{name:h,fn:m}=i[e],{x:m,y:g,data:v,reset:b}=await m({x:c,y:u,initialPlacement:n,placement:d,strategy:a,middlewareData:f,rects:s,platform:o,elements:{reference:t,floating:r}});c=null!=m?m:c,u=null!=g?g:u,f={...f,[h]:{...f[h],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(d=b.placement),b.rects&&(s=!0===b.rects?await o.getElementRects({reference:t,floating:r,strategy:a}):b.rects),{x:c,y:u}=po(s,d,l)),e=-1)}return{x:c,y:u,placement:d,strategy:a,middlewareData:f}};async function mo(e,t){var{x:r,y:n,platform:a,rects:o,elements:i,strategy:l}=e,{boundary:t="clippingAncestors",rootBoundary:e="viewport",elementContext:s="floating",altBoundary:c=!1,padding:u=0}=Ga(t=void 0===t?{}:t,e),u=uo(u),c=i[c?"floating"===s?"reference":"floating":s],d=fo(await a.getClippingRect({element:null==(d=await(null==a.isElement?void 0:a.isElement(c)))||d?c:c.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(i.floating)),boundary:t,rootBoundary:e,strategy:l})),c="floating"===s?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,t=await(null==a.getOffsetParent?void 0:a.getOffsetParent(i.floating)),e=await(null==a.isElement?void 0:a.isElement(t))&&await(null==a.getScale?void 0:a.getScale(t))||{x:1,y:1},s=fo(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:i,rect:c,offsetParent:t,strategy:l}):c);return{top:(d.top-s.top+u.top)/e.y,bottom:(s.bottom-d.bottom+u.bottom)/e.y,left:(d.left-s.left+u.left)/e.x,right:(s.right-d.right+u.right)/e.x}}function go(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function vo(t){return Ha.some(e=>0<=t[e])}let bo=new Set(["left","top"]);function wo(){return"undefined"!=typeof window}function yo(e){return ko(e)?(e.nodeName||"").toLowerCase():"#document"}function v(e){return(null==e||null==(e=e.ownerDocument)?void 0:e.defaultView)||window}function xo(e){return null==(e=(ko(e)?e.ownerDocument:e.document)||window.document)?void 0:e.documentElement}function ko(e){return wo()&&(e instanceof Node||e instanceof v(e).Node)}function b(e){return!!wo()&&(e instanceof Element||e instanceof v(e).Element)}function So(e){return!!wo()&&(e instanceof HTMLElement||e instanceof v(e).HTMLElement)}function Eo(e){return!(!wo()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof v(e).ShadowRoot)}let No=new Set(["inline","contents"]);function Co(e){var{overflow:e,overflowX:t,overflowY:r,display:n}=w(e);return/auto|scroll|overlay|hidden|clip/.test(e+r+t)&&!No.has(n)}let Oo=new Set(["table","td","th"]);let Po=[":popover-open",":modal"];function zo(t){return Po.some(e=>{try{return t.matches(e)}catch(e){return!1}})}let Mo=["transform","translate","scale","rotate","perspective"],_o=["transform","translate","scale","rotate","perspective","filter"],jo=["paint","layout","strict","content"];function Do(e){var t=To();let r=b(e)?w(e):e;return Mo.some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||_o.some(e=>(r.willChange||"").includes(e))||jo.some(e=>(r.contain||"").includes(e))}function To(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}let Lo=new Set(["html","body","#document"]);function Ro(e){return Lo.has(yo(e))}function w(e){return v(e).getComputedStyle(e)}function Ao(e){return b(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fo(e){return"html"!==yo(e)&&(e=e.assignedSlot||e.parentNode||Eo(e)&&e.host||xo(e),Eo(e))?e.host:e}function Wo(e,t,r){void 0===t&&(t=[]),void 0===r&&(r=!0);var n=function e(t){var r=Fo(t);return Ro(r)?(t.ownerDocument||t).body:So(r)&&Co(r)?r:e(r)}(e),e=n===(null==(e=e.ownerDocument)?void 0:e.body),a=v(n);return e?(e=Io(a),t.concat(a,a.visualViewport||[],Co(n)?n:[],e&&r?Wo(e):[])):t.concat(n,Wo(n,[],r))}function Io(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Bo(e){var t=w(e);let r=parseFloat(t.width)||0,n=parseFloat(t.height)||0;var t=So(e),a=t?e.offsetWidth:r,t=t?e.offsetHeight:n,e=Ya(r)!==a||Ya(n)!==t;return e&&(r=a,n=t),{width:r,height:n,$:e}}function Ho(e){return b(e)?e:e.contextElement}function Uo(e){e=Ho(e);if(!So(e))return g(1);var t=e.getBoundingClientRect(),{width:e,height:r,$:n}=Bo(e);let a=(n?Ya(t.width):t.width)/e,o=(n?Ya(t.height):t.height)/r;return a&&Number.isFinite(a)||(a=1),o&&Number.isFinite(o)||(o=1),{x:a,y:o}}let Yo=g(0);function $o(e){e=v(e);return To()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Yo}function qo(e,r,t,n){void 0===r&&(r=!1),void 0===t&&(t=!1);var a=e.getBoundingClientRect(),o=Ho(e);let i=g(1);r&&(n?b(n)&&(i=Uo(n)):i=Uo(e));r=o,void 0===(e=t)&&(e=!1);t=!(t=n)||e&&t!==v(r)||!e?g(0):$o(o);let l=(a.left+t.x)/i.x,s=(a.top+t.y)/i.y,c=a.width/i.x,u=a.height/i.y;if(o){var r=v(o),d=n&&b(n)?v(n):n;let e=r,t=Io(e);for(;t&&n&&d!==e;){var f=Uo(t),p=t.getBoundingClientRect(),h=w(t),m=p.left+(t.clientLeft+parseFloat(h.paddingLeft))*f.x,p=p.top+(t.clientTop+parseFloat(h.paddingTop))*f.y;l*=f.x,s*=f.y,c*=f.x,u*=f.y,l+=m,s+=p,e=v(t),t=Io(e)}}return fo({width:c,height:u,x:l,y:s})}function Vo(e,t){var r=Ao(e).scrollLeft;return t?t.left+r:qo(xo(e)).left+r}function Qo(e,t,r){void 0===r&&(r=!1);var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-(r?0:Vo(e,n)),y:n.top+t.scrollTop}}let Go=new Set(["absolute","fixed"]);function Ko(e,t,r){let n;var a,o,i;return fo(n="viewport"===t?((e,t)=>{var r=v(e),e=xo(e),r=r.visualViewport;let n=e.clientWidth,a=e.clientHeight,o=0,i=0;return r&&(n=r.width,a=r.height,To()&&"fixed"!==t||(o=r.offsetLeft,i=r.offsetTop)),{width:n,height:a,x:o,y:i}})(e,r):"document"===t?(e=>{var t=xo(e),r=Ao(e),n=e.ownerDocument.body,a=y(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=y(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let i=-r.scrollLeft+Vo(e);return e=-r.scrollTop,"rtl"===w(n).direction&&(i+=y(t.clientWidth,n.clientWidth)-a),{width:a,height:o,x:i,y:e}})(xo(e)):b(t)?(o=(r=qo(a=t,!0,"fixed"===(r=r))).top+a.clientTop,r=r.left+a.clientLeft,i=So(a)?Uo(a):g(1),{width:a.clientWidth*i.x,height:a.clientHeight*i.y,x:r*i.x,y:o*i.y}):(a=$o(e),{x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}))}function Xo(e,t){var r=t.get(e);if(r)return r;let n=Wo(e,[],!1).filter(e=>b(e)&&"body"!==yo(e)),a=null;var o="fixed"===w(e).position;let i=o?Fo(e):e;for(;b(i)&&!Ro(i);){var l=w(i),s=Do(i),s=(s||"fixed"!==l.position||(a=null),o?!s&&!a:!s&&"static"===l.position&&!!a&&Go.has(a.position)||Co(i)&&!s&&function e(t,r){t=Fo(t);return!(t===r||!b(t)||Ro(t))&&("fixed"===w(t).position||e(t,r))}(e,i));s?n=n.filter(e=>e!==i):a=l,i=Fo(i)}return t.set(e,n),n}function Zo(e){return"static"===w(e).position}function Jo(e,t){if(!So(e)||"fixed"===w(e).position)return null;if(t)return t(e);let r=e.offsetParent;return r=xo(e)===r?r.ownerDocument.body:r}function ei(t,e){var r,n=v(t);if(zo(t))return n;if(!So(t)){let e=Fo(t);for(;e&&!Ro(e);){if(b(e)&&!Zo(e))return e;e=Fo(e)}return n}let a=Jo(t,e);for(;a&&(r=a,Oo.has(yo(r)))&&Zo(a);)a=Jo(a,e);return(!(a&&Ro(a)&&Zo(a))||Do(a))&&(a||(e=>{let t=Fo(e);for(;So(t)&&!Ro(t);){if(Do(t))return t;if(zo(t))return null;t=Fo(t)}return null})(t))||n}let ti={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:e,rect:t,offsetParent:r,strategy:n}=e,n="fixed"===n,a=xo(r),e=!!e&&zo(e.floating);if(r===a||e&&n)return t;let o={scrollLeft:0,scrollTop:0},i=g(1);var e=g(0),l=So(r),s=((l||!l&&!n)&&("body"===yo(r)&&!Co(a)||(o=Ao(r)),So(r))&&(s=qo(r),i=Uo(r),e.x=s.x+r.clientLeft,e.y=s.y+r.clientTop),!a||l||n?g(0):Qo(a,o,!0));return{width:t.width*i.x,height:t.height*i.y,x:t.x*i.x-o.scrollLeft*i.x+e.x+s.x,y:t.y*i.y-o.scrollTop*i.y+e.y+s.y}},getDocumentElement:xo,getClippingRect:function(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;var o=(e=[..."clippingAncestors"===t?zo(r)?[]:Xo(r,this._c):[].concat(t),n])[0];return{width:(e=e.reduce((e,t)=>{t=Ko(r,t,a);return e.top=y(t.top,e.top),e.right=Ua(t.right,e.right),e.bottom=Ua(t.bottom,e.bottom),e.left=y(t.left,e.left),e},Ko(r,o,a))).right-e.left,height:e.bottom-e.top,x:e.left,y:e.top}},getOffsetParent:ei,getElementRects:async function(e){var t=this.getOffsetParent||ei,r=await(0,this.getDimensions)(e.floating);return{reference:((e,t,r)=>{var n=So(t);let a=xo(t),o=(e=qo(e,!0,r="fixed"===r,t),{scrollLeft:0,scrollTop:0}),i=g(0);function l(){i.x=Vo(a)}!n&&r||("body"===yo(t)&&!Co(a)||(o=Ao(t)),n?(s=qo(t,!0,r,t),i.x=s.x+t.clientLeft,i.y=s.y+t.clientTop):a&&l()),r&&!n&&a&&l();var s=!a||n||r?g(0):Qo(a,o);return{x:e.left+o.scrollLeft-i.x-s.x,y:e.top+o.scrollTop-i.y-s.y,width:e.width,height:e.height}})(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:e,height:t}=Bo(e);return{width:e,height:t}},getScale:Uo,isElement:b,isRTL:function(e){return"rtl"===w(e).direction}};function ri(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ni(u,t){let d=null,f,p=xo(u);function h(){var e;clearTimeout(f),null!=(e=d)&&e.disconnect(),d=null}return function r(n,a){void 0===n&&(n=!1),void 0===a&&(a=1),h();let o=u.getBoundingClientRect();var{left:e,top:i,width:l,height:s}=o;if(n||t(),l&&s){n={rootMargin:-$a(i)+"px "+-$a(p.clientWidth-(e+l))+"px "+-$a(p.clientHeight-(i+s))+"px "+-$a(e)+"px",threshold:y(0,Ua(1,a))||1};let t=!0;try{d=new IntersectionObserver(c,{...n,root:p.ownerDocument})}catch(e){d=new IntersectionObserver(c,n)}function c(e){if((e=e[0].intersectionRatio)!==a){if(!t)return r();e?r(!1,e):f=setTimeout(()=>{r(!1,1e-7)},1e3)}1!==e||ri(o,u.getBoundingClientRect())||r(),t=!1}d.observe(u)}}(!0),h}function ai(r,t,n,e){void 0===e&&(e={});let{ancestorScroll:a=!0,ancestorResize:o=!0,elementResize:i="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=e,c=Ho(r),u=a||o?[...c?Wo(c):[],...Wo(t)]:[],d=(u.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),o&&e.addEventListener("resize",n)}),c&&l?ni(c,n):null),f=-1,p=null;i&&(p=new ResizeObserver(e=>{var[e]=e;e&&e.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;null!=(e=p)&&e.observe(t)})),n()}),c&&!s&&p.observe(c),p.observe(t));let h,m=s?qo(r):null;return s&&function e(){let t=qo(r);m&&!ri(m,t)&&n();m=t;h=requestAnimationFrame(e)}(),n(),()=>{var e;u.forEach(e=>{a&&e.removeEventListener("scroll",n),o&&e.removeEventListener("resize",n)}),null!=d&&d(),null!=(e=p)&&e.disconnect(),p=null,s&&cancelAnimationFrame(h)}}let oi=function(i){return{name:"offset",options:i=void 0===i?0:i,async fn(e){var t,{x:r,y:n,placement:a,middlewareData:o}=e,e=await(async(e,t)=>{var{placement:r,platform:n,elements:a}=e,n=await(null==n.isRTL?void 0:n.isRTL(a.floating)),a=Ka(r),o=Xa(r),r="y"===to(r),a=bo.has(a)?-1:1,n=n&&r?-1:1;let{mainAxis:i,crossAxis:l,alignmentAxis:s}="number"==typeof(t=Ga(t,e))?{mainAxis:t,crossAxis:0,alignmentAxis:null}:{mainAxis:t.mainAxis||0,crossAxis:t.crossAxis||0,alignmentAxis:t.alignmentAxis};return o&&"number"==typeof s&&(l="end"===o?-1*s:s),r?{x:l*n,y:i*a}:{x:i*a,y:l*n}})(e,i);return a===(null==(t=o.offset)?void 0:t.placement)&&null!=(t=o.arrow)&&t.alignmentOffset?{}:{x:r+e.x,y:n+e.y,data:{...e,placement:a}}}}};let ii=function(h){return{name:"shift",options:h=void 0===h?{}:h,async fn(e){var{x:t,y:r,placement:n}=e;let{mainAxis:a=!0,crossAxis:o=!1,limiter:i={fn:e=>{var{x:e,y:t}=e;return{x:e,y:t}}},...l}=Ga(h,e);var s,c={x:t,y:r},u=await mo(e,l),n=to(Ka(n)),d=Za(n);let f=c[d],p=c[n];a&&(c=f+u["y"===d?"top":"left"],s=f-u["y"===d?"bottom":"right"],f=Qa(c,f,s)),o&&(c=p+u["y"===n?"top":"left"],s=p-u["y"===n?"bottom":"right"],p=Qa(c,p,s));u=i.fn({...e,[d]:f,[n]:p});return{...u,data:{x:u.x-t,y:u.y-r,enabled:{[d]:a,[n]:o}}}}}},li=function(n){return{name:"flip",options:n=void 0===n?{}:n,async fn(e){let t,r,{placement:o,middlewareData:i,rects:l,initialPlacement:s,platform:c,elements:u}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...v}=Ga(n,e);if(null==(t=i.arrow)||!t.alignmentOffset){var b=Ka(o);let n=to(s);var w=Ka(s)===s,y=await(null==c.isRTL?void 0:c.isRTL(u.floating)),w=p||(w||!g?[co(s)]:(x=co(w=s),[no(w),x,no(x)]));let a="none"!==m;!p&&a&&w.push(...so(s,g,m,y));var x=[s,...w],w=await mo(e,v),e=[],k=(null==(r=i.flip)?void 0:r.overflows)||[];if(d&&e.push(w[b]),f&&(b=((e,t,r)=>{void 0===r&&(r=!1);var n=Xa(e),a=Ja(e=ro(e));let o="x"===e?n===(r?"end":"start")?"right":"left":"start"===n?"bottom":"top";return[o=t.reference[a]>t.floating[a]?co(o):o,co(o)]})(o,l,y),e.push(w[b[0]],w[b[1]])),k=[...k,{placement:o,overflows:e}],!e.every(e=>e<=0)){w=((null==(y=i.flip)?void 0:y.index)||0)+1,b=x[w];if(b)if(!("alignment"===f&&n!==to(b))||k.every(e=>to(e.placement)!==n||0<e.overflows[0]))return{data:{index:w,overflows:k},reset:{placement:b}};let r=null==(e=k.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:e.placement;if(!r)switch(h){case"bestFit":{let e,t=null==(e=k.filter(e=>!a||(e=to(e.placement))===n||"y"===e).map(e=>[e.placement,e.overflows.filter(e=>0<e).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:e[0];t&&(r=t);break}case"initialPlacement":r=s}if(o!==r)return{reset:{placement:r}}}}return{}}}},si=function(w){return{name:"size",options:w=void 0===w?{}:w,async fn(e){var{placement:t,rects:r,platform:n,elements:a}=e;let{apply:o=()=>{},...i}=Ga(w,e);var l=await mo(e,i),s=Ka(t),c=Xa(t),t="y"===to(t),{width:r,height:u}=r.floating;let d,f;"top"===s||"bottom"===s?(d=s,f=c===(await(null==n.isRTL?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(f=s,d="end"===c?"top":"bottom");var s=u-l.top-l.bottom,p=r-l.left-l.right,h=Ua(u-l[d],s),m=Ua(r-l[f],p),g=!e.middlewareData.shift;let v=h,b=m;null!=(h=e.middlewareData.shift)&&h.enabled.x&&(b=p),null!=(m=e.middlewareData.shift)&&m.enabled.y&&(v=s),g&&!c&&(h=y(l.left,0),p=y(l.right,0),m=y(l.top,0),s=y(l.bottom,0),t?b=r-2*(0!==h||0!==p?h+p:y(l.left,l.right)):v=u-2*(0!==m||0!==s?m+s:y(l.top,l.bottom))),await o({...e,availableWidth:b,availableHeight:v});g=await n.getDimensions(a.floating);return r!==g.width||u!==g.height?{reset:{rects:!0}}:{}}}},ci=function(o){return{name:"hide",options:o=void 0===o?{}:o,async fn(e){var t=e.rects;let{strategy:r="referenceHidden",...n}=Ga(o,e);switch(r){case"referenceHidden":var a=go(await mo(e,{...n,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:vo(a)}};case"escaped":a=go(await mo(e,{...n,altBoundary:!0}),t.floating);return{data:{escapedOffsets:a,escaped:vo(a)}};default:return{}}}}},ui=v=>({name:"arrow",options:v,async fn(e){var{x:t,y:r,placement:n,rects:a,platform:o,elements:i,middlewareData:l}=e,{element:e,padding:s=0}=Ga(v,e)||{};if(null==e)return{};var s=uo(s),t={x:t,y:r},r=ro(n),c=Ja(r),u=await o.getDimensions(e),d="y"===r,f=d?"top":"left",p=d?"bottom":"right",d=d?"clientHeight":"clientWidth",h=a.reference[c]+a.reference[r]-t[r]-a.floating[c],m=t[r]-a.reference[r],e=await(null==o.getOffsetParent?void 0:o.getOffsetParent(e));let g=e?e[d]:0;h=h/2-m/2,m=(g=g&&await(null==o.isElement?void 0:o.isElement(e))?g:i.floating[d]||a.floating[c])/2-u[c]/2-1,o=Ua(s[f],m),e=Ua(s[p],m),i=o,d=g-u[c]-e,f=g/2-u[c]/2+h,s=Qa(i,f,d),p=!l.arrow&&null!=Xa(n)&&f!==s&&a.reference[c]/2-(f<i?o:e)-u[c]/2<0,m=p?f<i?f-i:f-d:0;return{[r]:t[r]+m,data:{[r]:s,centerOffset:f-s-m,...p&&{alignmentOffset:m}},reset:p}}});let di=function(f){return{options:f=void 0===f?{}:f,fn(e){var{x:t,y:r,placement:n,rects:a,middlewareData:o}=e,{offset:i=0,mainAxis:l=!0,crossAxis:s=!0}=Ga(f,e),t={x:t,y:r},r=to(n),c=Za(r);let u=t[c],d=t[r];var t=Ga(i,e),i="number"==typeof t?{mainAxis:t,crossAxis:0}:{mainAxis:0,crossAxis:0,...t};return l&&(t=a.reference[c]-a.floating[e="y"===c?"height":"width"]+i.mainAxis,l=a.reference[c]+a.reference[e]-i.mainAxis,u<t?u=t:u>l&&(u=l)),s&&(e="y"===c?"width":"height",t=bo.has(Ka(n)),s=a.reference[r]-a.floating[e]+(t&&(null==(l=o.offset)?void 0:l[r])||0)+(t?0:i.crossAxis),l=a.reference[r]+a.reference[e]+(!t&&(null==(n=o.offset)?void 0:n[r])||0)-(t?i.crossAxis:0),d<s?d=s:d>l&&(d=l)),{[c]:u,[r]:d}}}},fi="undefined"!=typeof document;var pi=fi?Ee.useLayoutEffect:function(){};function hi(r,n){if(r===n)return 1;if(typeof r==typeof n){if("function"==typeof r&&r.toString()===n.toString())return 1;let e,t;var a;if(r&&n&&"object"==typeof r){if(Array.isArray(r)){if((e=r.length)!==n.length)return;for(t=e;0!=t--;)if(!hi(r[t],n[t]))return}else{if(a=Object.keys(r),(e=a.length)!==Object.keys(n).length)return;for(t=e;0!=t--;)if(!{}.hasOwnProperty.call(n,a[t]))return;for(t=e;0!=t--;){var o=a[t];if(("_owner"!==o||!r.$$typeof)&&!hi(r[o],n[o]))return}}return 1}return r!=r&&n!=n}}function mi(e){return"undefined"!=typeof window&&(e.ownerDocument.defaultView||window).devicePixelRatio||1}function gi(e,t){e=mi(e);return Math.round(t*e)/e}function vi(e){let t=Ee.useRef(e);return pi(()=>{t.current=e}),t}function bi(e){let{placement:a="bottom",strategy:o="absolute",middleware:t=[],platform:r,elements:{reference:n,floating:i}={},transform:l=!0,whileElementsMounted:s,open:c}=e=void 0===e?{}:e,[u,d]=Ee.useState({x:0,y:0,strategy:o,placement:a,middlewareData:{},isPositioned:!1}),[f,p]=Ee.useState(t),[h,m]=(hi(f,t)||p(t),Ee.useState(null)),[g,v]=Ee.useState(null),b=Ee.useCallback(e=>{e!==k.current&&(k.current=e,m(e))},[]),w=Ee.useCallback(e=>{e!==S.current&&(S.current=e,v(e))},[]),y=n||h,x=i||g,k=Ee.useRef(null),S=Ee.useRef(null),E=Ee.useRef(u);e=null!=s;let N=vi(s),C=vi(r),O=vi(c),P=Ee.useCallback(()=>{var e,t,r,n;k.current&&S.current&&(r={placement:a,strategy:o,middleware:f},C.current&&(r.platform=C.current),e=k.current,t=S.current,r=r,n=new Map,r={platform:ti,...r},n={...r.platform,_c:n},ho(e,t,{...r,platform:n}).then(e=>{let t={...e,isPositioned:!1!==O.current};z.current&&!hi(E.current,t)&&(E.current=t,wa.flushSync(()=>{d(t)}))}))},[f,a,o,C,O]),z=(pi(()=>{!1===c&&E.current.isPositioned&&(E.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]),Ee.useRef(!1)),M=(pi(()=>(z.current=!0,()=>{z.current=!1}),[]),pi(()=>{if(y&&(k.current=y),x&&(S.current=x),y&&x){if(N.current)return N.current(y,x,P);P()}},[y,x,P,N,e]),Ee.useMemo(()=>({reference:k,floating:S,setReference:b,setFloating:w}),[b,w])),_=Ee.useMemo(()=>({reference:y,floating:x}),[y,x]),j=Ee.useMemo(()=>{var e,t,r={position:o,left:0,top:0};return _.floating?(e=gi(_.floating,u.x),t=gi(_.floating,u.y),l?{...r,transform:"translate("+e+"px, "+t+"px)",...1.5<=mi(_.floating)&&{willChange:"transform"}}:{position:o,left:e,top:t}):r},[o,l,_.floating,u.x,u.y]);return Ee.useMemo(()=>({...u,update:P,refs:M,elements:_,floatingStyles:j}),[u,P,M,_,j])}let wi=(e,t)=>{return{...(n=e,{name:"arrow",options:n,fn(e){var{element:t,padding:r}="function"==typeof n?n(e):n;return t&&{}.hasOwnProperty.call(t,"current")?null!=t.current?ui({element:t.current,padding:r}).fn(e):{}:t?ui({element:t,padding:r}).fn(e):{}}}),options:[e,t]};var n},yi=Ee.forwardRef((e,t)=>{let{children:r,width:n=10,height:a=5,...o}=e;return(0,H.jsx)(U.svg,{...o,ref:t,width:n,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:(0,H.jsx)("polygon",{points:"0,0 30,0 15,10"})})});yi.displayName="Arrow";var xi=yi;var a="Popper",[r,t]=ba(a),[ki,Si]=r(a),n=e=>{var{__scopePopper:e,children:t}=e,[r,n]=Ee.useState(null);return(0,H.jsx)(ki,{scope:e,anchor:r,onAnchorChange:n,children:t})},Ei=(n.displayName=a,"PopperAnchor"),e=Ee.forwardRef((e,t)=>{let{__scopePopper:r,virtualRef:n,...a}=e,o=Si(Ei,r),i=Ee.useRef(null);e=Y(t,i);return Ee.useEffect(()=>{o.onAnchorChange(n?.current||i.current)}),n?null:(0,H.jsx)(U.div,{...a,ref:e})}),Ni=(e.displayName=Ei,"PopperContent"),[Ci,Oi]=r(Ni),l=Ee.forwardRef((e,t)=>{let{__scopePopper:r,side:n="bottom",sideOffset:a=0,align:o="center",alignOffset:i=0,arrowPadding:l=0,avoidCollisions:s=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:d="partial",hideWhenDetached:f=!1,updatePositionStrategy:p="optimized",onPlaced:h,...m}=e;var g=Si(Ni,r);let[v,b]=Ee.useState(null);var w,y,x,t=Y(t,e=>b(e)),[k,R]=Ee.useState(null),S=(n=>{let[e,a]=Ee.useState(void 0);return Wa(()=>{if(n){a({width:n.offsetWidth,height:n.offsetHeight});let e=new ResizeObserver(r=>{if(Array.isArray(r)&&r.length){var r=r[0];let e,t;t="borderBoxSize"in r?(r=r.borderBoxSize,r=Array.isArray(r)?r[0]:r,e=r.inlineSize,r.blockSize):(e=n.offsetWidth,n.offsetHeight),a({width:e,height:t})}});return e.observe(n,{box:"border-box"}),()=>e.unobserve(n)}a(void 0)},[n]),e})(k),A=S?.width??0,S=S?.height??0,E=n+("center"!==o?"-"+o:""),N="number"==typeof u?u:{top:0,right:0,bottom:0,left:0,...u},C=Array.isArray(c)?c:[c],O=0<C.length,N={padding:N,boundary:C.filter(Mi),altBoundary:O};let{refs:F,floatingStyles:P,placement:W,isPositioned:z,middlewareData:M}=bi({strategy:"fixed",placement:E,whileElementsMounted:(...e)=>ai(...e,{animationFrame:"always"===p}),elements:{reference:g.anchor},middleware:[(C={mainAxis:a+S,alignmentAxis:i},{...oi(C),options:[C,_]}),s&&(O={mainAxis:!0,crossAxis:!1,limiter:"partial"===d?{...di(j),options:[j,T]}:void 0,...N},{...ii(O),options:[O,L]}),s&&(E={...N},{...li(E),options:[E,x]}),(g={...N,apply:({elements:e,rects:t,availableWidth:r,availableHeight:n})=>{var{width:t,height:a}=t.reference,e=e.floating.style;e.setProperty("--radix-popper-available-width",r+"px"),e.setProperty("--radix-popper-available-height",n+"px"),e.setProperty("--radix-popper-anchor-width",t+"px"),e.setProperty("--radix-popper-anchor-height",a+"px")}},{...si(g),options:[g,y]}),k&&wi({element:k,padding:l}),_i({arrowWidth:A,arrowHeight:S}),f&&(C={strategy:"referenceHidden",...N},{...ci(C),options:[C,w]})]});var[_,j]=ji(W);let D=ya(h);Wa(()=>{z&&D?.()},[z,D]);var T=M.arrow?.x,O=M.arrow?.y,L=0!==M.arrow?.centerOffset;let[I,B]=Ee.useState();return Wa(()=>{v&&B(window.getComputedStyle(v).zIndex)},[v]),(0,H.jsx)("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...P,transform:z?P.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:I,"--radix-popper-transform-origin":[M.transformOrigin?.x,M.transformOrigin?.y].join(" "),...M.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,H.jsx)(Ci,{scope:r,placedSide:_,onArrowChange:R,arrowX:T,arrowY:O,shouldHideArrow:L,children:(0,H.jsx)(U.div,{"data-side":_,"data-align":j,...m,ref:t,style:{...m.style,animation:z?void 0:"none"}})})})}),Pi=(l.displayName=Ni,"PopperArrow"),zi={top:"bottom",right:"left",bottom:"top",left:"right"},i=Ee.forwardRef(function(e,t){let{__scopePopper:r,...n}=e;var e=Oi(Pi,r),a=zi[e.placedSide];return(0,H.jsx)("span",{ref:e.onArrowChange,style:{position:"absolute",left:e.arrowX,top:e.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[e.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[e.placedSide],visibility:e.shouldHideArrow?"hidden":void 0},children:(0,H.jsx)(xi,{...n,ref:t,style:{...n.style,display:"block"}})})});function Mi(e){return null!==e}i.displayName=Pi;var _i=c=>({name:"transformOrigin",options:c,fn(e){var{placement:e,rects:t,middlewareData:r}=e,n=0!==r.arrow?.centerOffset,a=n?0:c.arrowWidth,o=n?0:c.arrowHeight,[e,i]=ji(e),i={start:"0%",center:"50%",end:"100%"}[i],a=(r.arrow?.x??0)+a/2,r=(r.arrow?.y??0)+o/2;let l="",s="";return"bottom"===e?(l=n?i:a+"px",s=-o+"px"):"top"===e?(l=n?i:a+"px",s=t.floating.height+o+"px"):"right"===e?(l=-o+"px",s=n?i:r+"px"):"left"===e&&(l=t.floating.width+o+"px",s=n?i:r+"px"),{data:{x:l,y:s}}}});function ji(e){var[e,t="center"]=e.split("-");return[e,t]}var Di=n,Ti=e,Li=l,Ri=i,Ai=Ee.forwardRef((e,t)=>{let{container:r,...n}=e,[a,o]=Ee.useState(!1);Wa(()=>o(!0),[]);e=r||a&&globalThis?.document?.body;return e?wa.createPortal((0,H.jsx)(U.div,{...n,ref:t}),e):null});Ai.displayName="Portal";var Fi=e=>{var{present:e,children:t}=e,e=(a=>{let[o,t]=Ee.useState(),i=Ee.useRef(null),l=Ee.useRef(a),s=Ee.useRef("none"),e=a?"mounted":"unmounted",[r,c]=((e,r)=>Ee.useReducer((e,t)=>r[e][t]??e,e))(e,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return Ee.useEffect(()=>{var e=Wi(i.current);s.current="mounted"===r?e:"none"},[r]),Wa(()=>{var e,t,r=i.current,n=l.current;n!==a&&(e=s.current,t=Wi(r),a?c("MOUNT"):"none"!==t&&"none"!==r?.display&&n&&e!==t?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=a)},[a,c]),Wa(()=>{if(o){let r,n=o.ownerDocument.defaultView??window,e=e=>{var t=Wi(i.current).includes(e.animationName);if(e.target===o&&t&&(c("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",r=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},t=e=>{e.target===o&&(s.current=Wi(i.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{n.clearTimeout(r),o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(r),ref:Ee.useCallback(e=>{i.current=e?getComputedStyle(e):null,t(e)},[])}})(e),r="function"==typeof t?t({present:e.isPresent}):Ee.Children.only(t),n=Y(e.ref,(e=>{var t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get;return t&&"isReactWarning"in t&&t.isReactWarning?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?e.props.ref:e.props.ref||e.ref})(r));return"function"==typeof t||e.isPresent?Ee.cloneElement(r,{ref:n}):null};function Wi(e){return e?.animationName||"none"}Fi.displayName="Presence";var Ii=O[" useInsertionEffect ".trim().toString()]||Wa;function Bi({prop:n,defaultProp:e,onChange:t=()=>{},caller:a}){let[r,o,i]=(({defaultProp:e,onChange:t})=>{let[r,n]=Ee.useState(e),a=Ee.useRef(r),o=Ee.useRef(t);return Ii(()=>{o.current=t},[t]),Ee.useEffect(()=>{a.current!==r&&(o.current?.(r),a.current=r)},[r,a]),[r,n,o]})({defaultProp:e,onChange:t}),l=void 0!==n;e=l?n:r;{let r=Ee.useRef(void 0!==n);Ee.useEffect(()=>{var e,t=r.current;t!==l&&(t=t?"controlled":"uncontrolled",e=l?"controlled":"uncontrolled",console.warn(a+` is changing from ${t} to ${e}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)),r.current=l},[l,a])}return[e,Ee.useCallback(e=>{var t;l?(t="function"==typeof e?e(n):e)!==n&&i.current?.(t):o(e)},[l,n,o,i])]}Symbol("RADIX:SYNC_STATE");var Hi=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},Ui=new WeakMap,Yi=new WeakMap,$i={},qi=0,Vi=function(e){return e&&(e.host||Vi(e.parentNode))},Qi=function(r,e){return e.map(function(e){var t;return r.contains(e)?e:(t=Vi(e))&&r.contains(t)?t:(console.error("aria-hidden",e,"in not contained inside",r,". Doing nothing"),null)}).filter(function(e){return Boolean(e)})},Gi=function(e,t,o,i){function r(e){e&&!u.has(e)&&(u.add(e),r(e.parentNode))}function l(e){e&&!n.has(e)&&Array.prototype.forEach.call(e.children,function(t){if(u.has(t))l(t);else try{var e=t.getAttribute(i),r=null!==e&&"false"!==e,n=(Ui.get(t)||0)+1,a=(s.get(t)||0)+1;Ui.set(t,n),s.set(t,a),c.push(t),1===n&&r&&Yi.set(t,!0),1===a&&t.setAttribute(o,"true"),r||t.setAttribute(i,"true")}catch(e){console.error("aria-hidden: cannot operate on ",t,e)}})}var e=Qi(t,Array.isArray(e)?e:[e]),s=($i[o]||($i[o]=new WeakMap),$i[o]),c=[],u=new Set,n=new Set(e);e.forEach(r);return l(t),u.clear(),qi++,function(){c.forEach(function(e){var t=Ui.get(e)-1,r=s.get(e)-1;Ui.set(e,t),s.set(e,r),t||(Yi.has(e)||e.removeAttribute(i),Yi.delete(e)),r||e.removeAttribute(o)}),--qi||(Ui=new WeakMap,Ui=new WeakMap,Yi=new WeakMap,$i={})}},Ki=function(e,t,r){void 0===r&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),t=t||Hi(e);return t?(n.push.apply(n,Array.from(t.querySelectorAll("[aria-live], script"))),Gi(n,t,r,"aria-hidden")):function(){return null}};var Xi=function(){return(Xi=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function Zi(e,t){var r={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r}Object.create;function Ji(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}var el="right-scroll-bar-position",tl="width-before-scroll-bar",rl="with-scroll-bars-hidden",nl="--removed-body-scroll-bar-size";function al(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var ol="undefined"!=typeof window?Ee.useLayoutEffect:Ee.useEffect,il=new WeakMap;function ll(a,e){t=e||null,r=function(t){return a.forEach(function(e){return al(e,t)})},(n=(0,Ee.useState)(function(){return{value:t,callback:r,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0]).callback=r;var t,r,n,o=n.facade;return ol(function(){var t,r,n,e=il.get(o);e&&(t=new Set(e),r=new Set(a),n=o.current,t.forEach(function(e){r.has(e)||al(e,null)}),r.forEach(function(e){t.has(e)||al(e,n)})),il.set(o,a)},[a]),o}function sl(e){return e}function cl(e,r){void 0===r&&(r=sl);var o=[],i=!1;return{read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return o.length?o[o.length-1]:e},useMedium:function(e){var t=r(e,i);return o.push(t),function(){o=o.filter(function(e){return e!==t})}},assignSyncMedium:function(t){for(i=!0;o.length;){var e=o;o=[],e.forEach(t)}o={push:function(e){return t(e)},filter:function(){return o}}},assignMedium:function(t){i=!0;function r(){Promise.resolve().then(a)}var e,n=[],a=(o.length&&(e=o,o=[],e.forEach(t),n=o),function(){var e=n;n=[],e.forEach(t)});r(),o={push:function(e){n.push(e),r()},filter:function(e){return n=n.filter(e),o}}}}}function ul(){}function dl(e){var t=e.sideCar,e=Zi(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");if(t=t.read())return Ee.createElement(t,Xi({},e));throw new Error("Sidecar medium not found")}(z=cl(null)).options=Xi({async:!0,ssr:!1},us=void 0===us?{}:us);var fl,pl=z,hl=Ee.forwardRef(function(e,t){var r=Ee.useRef(null),n=Ee.useState({onScrollCapture:ul,onWheelCapture:ul,onTouchMoveCapture:ul}),a=n[0],n=n[1],o=e.forwardProps,i=e.children,l=e.className,s=e.removeScrollBar,c=e.enabled,u=e.shards,d=e.sideCar,f=e.noRelative,p=e.noIsolation,h=e.inert,m=e.allowPinchZoom,g=e.as,g=void 0===g?"div":g,v=e.gapMode,e=Zi(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),t=ll([r,t]),e=Xi(Xi({},e),a);return Ee.createElement(Ee.Fragment,null,c&&Ee.createElement(d,{sideCar:pl,removeScrollBar:s,shards:u,noRelative:f,noIsolation:p,inert:h,setCallbacks:n,allowPinchZoom:!!m,lockRef:r,gapMode:v}),o?Ee.cloneElement(Ee.Children.only(i),Xi(Xi({},e),{ref:t})):Ee.createElement(g,Xi({},e,{className:l,ref:t}),i))});hl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},hl.classNames={fullWidth:tl,zeroRight:el};dl.isSideCarExport=!0;var ml=function(){return fl||o.nc};function gl(){r=bl();var r,n=function(e,t){Ee.useEffect(function(){return r.add(e),function(){r.remove()}},[e&&t])};return function(e){var t=e.styles;return n(t,e.dynamic),null}}function vl(e){var t=e.noRelative,r=e.noImportant,n=void 0===(e=e.gapMode)?"margin":e,e=(Ol(),Ee.useMemo(function(){return kl(n)},[n]));return Ee.createElement(Sl,{styles:Nl(e,!t,n,r?"":"!important")})}var bl=function(){var n=0,a=null;return{add:function(e){var t,r;0==n&&(a=document?((t=document.createElement("style")).type="text/css",(r=ml())&&t.setAttribute("nonce",r),t):null)&&(r=e,(t=a).styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r)),e=a,(document.head||document.getElementsByTagName("head")[0]).appendChild(e)),n++},remove:function(){!--n&&a&&(a.parentNode&&a.parentNode.removeChild(a),a=null)}}},wl={left:0,top:0,right:0,gap:0},yl=function(e){return parseInt(e||"",10)||0},xl=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],n=t["padding"===e?"paddingTop":"marginTop"],t=t["padding"===e?"paddingRight":"marginRight"];return[yl(r),yl(n),yl(t)]},kl=function(e){var t,r;return void 0===e&&(e="margin"),"undefined"==typeof window?wl:(e=xl(e),t=document.documentElement.clientWidth,r=window.innerWidth,{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])})},Sl=gl(),El="data-scroll-locked",Nl=function(e,t,r,n){var a=e.left,o=e.top,i=e.right,e=e.gap;return void 0===r&&(r="margin"),"\n  .".concat(rl," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(e,"px ").concat(n,";\n  }\n  body[").concat(El,"] {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(n,";"),"margin"===r&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(e,"px ").concat(n,";\n    "),"padding"===r&&"padding-right: ".concat(e,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(el," {\n    right: ").concat(e,"px ").concat(n,";\n  }\n  \n  .").concat(tl," {\n    margin-right: ").concat(e,"px ").concat(n,";\n  }\n  \n  .").concat(el," .").concat(el," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(tl," .").concat(tl," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body[").concat(El,"] {\n    ").concat(nl,": ").concat(e,"px;\n  }\n")},Cl=function(){var e=parseInt(document.body.getAttribute(El)||"0",10);return isFinite(e)?e:0},Ol=function(){Ee.useEffect(function(){return document.body.setAttribute(El,(Cl()+1).toString()),function(){var e=Cl()-1;e<=0?document.body.removeAttribute(El):document.body.setAttribute(El,e.toString())}},[])},Pl=!1;if("undefined"!=typeof window)try{var zl=Object.defineProperty({},"passive",{get:function(){return Pl=!0}});window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch(e){Pl=!1}function Ml(e,t){var r=t.ownerDocument,n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),Bl(e,n)){var a=Hl(e,n),o=a[1];if(a[2]<o)return!0}}while((n=n.parentNode)&&n!==r.body);return!1}function _l(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]}function jl(e){return[e.deltaX,e.deltaY]}function Dl(e){return e&&"current"in e?e.current:e}var Tl=!!Pl&&{passive:!1},Ll=function(e){return"TEXTAREA"===e.tagName},Rl=function(e,t){var r;return e instanceof Element&&"hidden"!==(r=window.getComputedStyle(e))[t]&&!(r.overflowY===r.overflowX&&!Ll(e)&&"visible"===r[t])},Al=function(e){return Rl(e,"overflowY")},Fl=function(e){return Rl(e,"overflowX")},Wl=function(e){return[e.scrollTop,e.scrollHeight,e.clientHeight]},Il=function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]},Bl=function(e,t){return("v"===e?Al:Fl)(t)},Hl=function(e,t){return("v"===e?Wl:Il)(t)},Ul=function(e,t){return"h"===e&&"rtl"===t?-1:1},Yl=0,$l=[];a=function(t){var e,o=Ee.useRef([]),v=Ee.useRef([0,0]),b=Ee.useRef(),r=Ee.useState(Yl++)[0],a=Ee.useState(gl)[0],w=Ee.useRef(t),i=(Ee.useEffect(function(){w.current=t},[t]),Ee.useEffect(function(){var e;if(t.inert)return document.body.classList.add("block-interactivity-".concat(r)),(e=Ji([t.lockRef.current],(t.shards||[]).map(Dl),!0).filter(Boolean)).forEach(function(e){return e.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),e.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(r))})}},[t.inert,t.lockRef.current,t.shards]),Ee.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!w.current.allowPinchZoom;var r=_l(e),n=v.current,a="deltaX"in e?e.deltaX:n[0]-r[0],n="deltaY"in e?e.deltaY:n[1]-r[1],r=e.target,o=Math.abs(a)>Math.abs(n)?"h":"v";if("touches"in e&&"h"==o&&"range"===r.type)return!1;var i=Ml(o,r);if(i){if(i?c=o:(c="v"==o?"h":"v",i=Ml(o,r)),!i)return!1;if(!b.current&&"changedTouches"in e&&(a||n)&&(b.current=c),c){var o=b.current||c,l=o,s=t,r=e,i="h"===o?a:n,c=!0,u=Ul(l,window.getComputedStyle(s).direction),i=u*i,d=r.target,f=s.contains(d),r=!1,t=0<i,p=0,h=0;do{if(!d)break;var m=Hl(l,d),g=m[0],m=m[1]-m[2]-u*g,m=((g||m)&&Bl(l,d)&&(p+=m,h+=g),d.parentNode),d=m&&m.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.host:m}while(!f&&d!==document.body||f&&(s.contains(d)||s===d));return r=t&&(c&&Math.abs(p)<1||!c&&p<i)||!t&&(c&&Math.abs(h)<1||!c&&h<-i)?!0:r}}return!0},[])),n=Ee.useCallback(function(e){var r,n=e;$l.length&&$l[$l.length-1]===a&&(r=("deltaY"in n?jl:_l)(n),(e=o.current.filter(function(e){return e.name===n.type&&(e.target===n.target||n.target===e.shadowParent)&&(e=e.delta,t=r,e[0]===t[0])&&e[1]===t[1];var t})[0])&&e.should?n.cancelable&&n.preventDefault():e||(0<(e=(w.current.shards||[]).map(Dl).filter(Boolean).filter(function(e){return e.contains(n.target)})).length?i(n,e[0]):!w.current.noIsolation)&&n.cancelable&&n.preventDefault())},[]),l=Ee.useCallback(function(e,t,r,n){var a={name:e,delta:t,target:r,should:n,shadowParent:(e=>{for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t})(r)};o.current.push(a),setTimeout(function(){o.current=o.current.filter(function(e){return e!==a})},1)},[]),s=Ee.useCallback(function(e){v.current=_l(e),b.current=void 0},[]),c=Ee.useCallback(function(e){l(e.type,jl(e),e.target,i(e,t.lockRef.current))},[]),u=Ee.useCallback(function(e){l(e.type,_l(e),e.target,i(e,t.lockRef.current))},[]),d=(Ee.useEffect(function(){return $l.push(a),t.setCallbacks({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:u}),document.addEventListener("wheel",n,Tl),document.addEventListener("touchmove",n,Tl),document.addEventListener("touchstart",s,Tl),function(){$l=$l.filter(function(e){return e!==a}),document.removeEventListener("wheel",n,Tl),document.removeEventListener("touchmove",n,Tl),document.removeEventListener("touchstart",s,Tl)}},[]),t.removeScrollBar);return Ee.createElement(Ee.Fragment,null,t.inert?Ee.createElement(a,{styles:"\n  .block-interactivity-".concat(e=r," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")}):null,d?Ee.createElement(vl,{noRelative:t.noRelative,gapMode:t.gapMode}):null)},pl.useMedium(a);let ql=dl,Vl=Ee.forwardRef(function(e,t){return Ee.createElement(hl,Xi({},e,{ref:t,sideCar:ql}))}),Ql=(Vl.classNames=hl.classNames,Vl);var Gl="Popover",[r,,]=ba(Gl,[t]),Kl=t(),[Xl,Zl]=r(Gl),n=e=>{var{__scopePopover:e,children:t,open:r,defaultOpen:n,onOpenChange:a,modal:o=!1}=e,i=Kl(e),l=Ee.useRef(null);let[s,c]=Ee.useState(!1),[u,d]=Bi({prop:r,defaultProp:n??!1,onChange:a,caller:Gl});return(0,H.jsx)(Di,{...i,children:(0,H.jsx)(Xl,{scope:e,contentId:(e=>{let[t,r]=Ee.useState(Ia());return Wa(()=>{e||r(e=>e??String(Ba++))},[e]),e||(t?"radix-"+t:"")})(),triggerRef:l,open:u,onOpenChange:d,onOpenToggle:Ee.useCallback(()=>d(e=>!e),[d]),hasCustomAnchor:s,onCustomAnchorAdd:Ee.useCallback(()=>c(!0),[]),onCustomAnchorRemove:Ee.useCallback(()=>c(!1),[]),modal:o,children:t})})},Jl=(n.displayName=Gl,"PopoverAnchor"),e=Ee.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e;var e=Zl(Jl,r),a=Kl(r);let{onCustomAnchorAdd:o,onCustomAnchorRemove:i}=e;return Ee.useEffect(()=>(o(),()=>i()),[o,i]),(0,H.jsx)(Ti,{...a,...n,ref:t})}),es=(e.displayName=Jl,"PopoverTrigger"),l=Ee.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e;var a=Zl(es,r),o=Kl(r),t=Y(t,a.triggerRef),t=(0,H.jsx)(U.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":ds(a.open),...n,ref:t,onClick:va(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?t:(0,H.jsx)(Ti,{asChild:!0,...o,children:t})}),ts=(l.displayName=es,"PopoverPortal"),[rs,ns]=r(ts,{forceMount:void 0}),i=e=>{var{__scopePopover:e,forceMount:t,children:r,container:n}=e,a=Zl(ts,e);return(0,H.jsx)(rs,{scope:e,forceMount:t,children:(0,H.jsx)(Fi,{present:t||a.open,children:(0,H.jsx)(Ai,{asChild:!0,container:n,children:r})})})},as=(i.displayName=ts,"PopoverContent"),O=Ee.forwardRef((e,t)=>{var r=ns(as,e.__scopePopover);let{forceMount:n=r.forceMount,...a}=e;r=Zl(as,e.__scopePopover);return(0,H.jsx)(Fi,{present:n||r.open,children:r.modal?(0,H.jsx)(is,{...a,ref:t}):(0,H.jsx)(ls,{...a,ref:t})})}),os=(O.displayName=as,W("PopoverContent.RemoveScroll")),is=Ee.forwardRef((e,t)=>{let r=Zl(as,e.__scopePopover),n=Ee.useRef(null);t=Y(t,n);let a=Ee.useRef(!1);return Ee.useEffect(()=>{var e=n.current;if(e)return Ki(e)},[]),(0,H.jsx)(Ql,{as:os,allowPinchZoom:!0,children:(0,H.jsx)(ss,{...e,ref:t,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:va(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||r.triggerRef.current?.focus()}),onPointerDownOutside:va(e.onPointerDownOutside,e=>{var e=e.detail.originalEvent,t=0===e.button&&!0===e.ctrlKey,e=2===e.button||t;a.current=e},{checkForDefaultPrevented:!1}),onFocusOutside:va(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),ls=Ee.forwardRef((r,e)=>{let n=Zl(as,r.__scopePopover),a=Ee.useRef(!1),o=Ee.useRef(!1);return(0,H.jsx)(ss,{...r,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:e=>{r.onCloseAutoFocus?.(e),e.defaultPrevented||(a.current||n.triggerRef.current?.focus(),e.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:e=>{r.onInteractOutside?.(e),e.defaultPrevented||(a.current=!0,"pointerdown"===e.detail.originalEvent.type&&(o.current=!0));var t=e.target;n.triggerRef.current?.contains(t)&&e.preventDefault(),"focusin"===e.detail.originalEvent.type&&o.current&&e.preventDefault()}})}),ss=Ee.forwardRef((e,t)=>{let{__scopePopover:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:o,disableOutsidePointerEvents:i,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:u,...d}=e,f=Zl(as,r);e=Kl(r);return Pa(),(0,H.jsx)(Da,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:o,children:(0,H.jsx)(Ea,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:u,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:c,onDismiss:()=>f.onOpenChange(!1),children:(0,H.jsx)(Li,{"data-state":ds(f.open),role:"dialog",id:f.contentId,...e,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),cs="PopoverClose",us=Ee.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e,a=Zl(cs,r);return(0,H.jsx)(U.button,{type:"button",...n,ref:t,onClick:va(e.onClick,()=>a.onOpenChange(!1))})}),z=(us.displayName=cs,Ee.forwardRef((e,t)=>{let{__scopePopover:r,...n}=e;e=Kl(r);return(0,H.jsx)(Ri,{...e,...n,ref:t})}));function ds(e){return e?"open":"closed"}z.displayName="PopoverArrow";var fs=n,ps=l,hs=i,ms=O;function gs(e){return(gs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var vs=["className","align","sideOffset"];function bs(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function ws(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function ys(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ws(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=gs(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=gs(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==gs(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):ws(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function xs(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function ks(){return(ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)!{}.hasOwnProperty.call(n,r)||(e[r]=n[r])}return e}).apply(null,arguments)}function Ss(e){e=ks({},(xs(e),e));return(0,H.jsx)(fs,ys({"data-slot":"popover"},e))}function Es(e){e=ks({},(xs(e),e));return(0,H.jsx)(ps,ys({"data-slot":"popover-trigger"},e))}function Ns(e){var t=e.className,r=e.align,r=void 0===r?"center":r,n=e.sideOffset,n=void 0===n?4:n,e=bs(e,vs);return(0,H.jsx)(hs,{children:(0,H.jsx)(ms,ys({"data-slot":"popover-content",align:r,sideOffset:n,className:c("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",t)},e))})}var Cs="horizontal",Os=["horizontal","vertical"],zl=Ee.forwardRef((e,t)=>{let{decorative:r,orientation:n=Cs,...a}=e;e=Os.includes(n)?n:Cs;return(0,H.jsx)(U.div,{"data-orientation":e,...r?{role:"none"}:{"aria-orientation":"vertical"===e?e:void 0,role:"separator"},...a,ref:t})});zl.displayName="Separator";var Ps=zl;function zs(e){return(zs="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ms=["className","orientation","decorative"];function _s(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function js(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_s(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=zs(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=zs(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==zs(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):_s(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Ds(e,t){if(null==e)return{};var r,n=((e,t)=>{if(null==e)return{};var r,n={};for(r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n})(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),o=0;o<a.length;o++)r=a[o],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n}function Ts(e){var t=e.className,r=e.orientation,r=void 0===r?"horizontal":r,n=e.decorative,n=void 0===n||n,e=Ds(e,Ms);return(0,H.jsx)(Ps,js({"data-slot":"separator",decorative:n,orientation:r,className:c("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t)},e))}function Ls(e,t,r){var[r,e]=hr(r?.in,e,t),t=Rs(r,e),n=Math.abs(gr(r,e)),r=(r.setDate(r.getDate()-t*n),Number(Rs(r,e)===-t)),e=t*(n-r);return 0==e?0:e}function Rs(e,t){e=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return e<0?-1:0<e?1:e}function As(e){return(As="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fs(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var h,e="function"==typeof Symbol?Symbol:{},t=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag";function n(e,t,r,n){var a,o,i,l,s,c,u,d,f,t=t&&t.prototype instanceof g?t:g,t=Object.create(t.prototype);return x(t,"_invoke",(a=e,o=r,u=n||[],d=!1,f={p:c=0,n:0,v:h,a:p,f:p.bind(h,4),d:function(e,t){return i=e,l=0,s=h,f.n=t,m}},function(e,t,r){if(1<c)throw TypeError("Generator is already running");for(d&&1===t&&p(t,r),l=t,s=r;(v=l<2?h:s)||!d;){i||(l?l<3?(1<l&&(f.n=-1),p(l,s)):f.n=s:f.v=s);try{if(c=2,i){if(v=i[e=l?e:"next"]){if(!(v=v.call(i,s)))throw TypeError("iterator result is not an object");if(!v.done)return v;s=v.value,l<2&&(l=0)}else 1===l&&(v=i.return)&&v.call(i),l<2&&(s=TypeError("The iterator does not provide a '"+e+"' method"),l=1);i=h}else if((v=(d=f.n<0)?s:a.call(o,f))!==m)break}catch(e){i=h,l=1,s=e}finally{c=1}}return{value:v,done:d}}),!0),t;function p(e,t){for(l=e,s=t,v=0;!d&&c&&!r&&v<u.length;v++){var r,n=u[v],a=f.p,o=n[2];3<e?(r=o===t)&&(s=n[(l=n[4])?5:l=3],n[4]=n[5]=h):n[0]<=a&&((r=e<2&&a<n[1])?(l=0,f.v=t,f.n=n[1]):a<o&&(r=e<3||n[0]>t||o<t)&&(n[4]=e,n[5]=t,f.n=o,l=0))}if(r||1<e)return m;throw d=!0,t}}var m={};function g(){}function a(){}function o(){}var v=Object.getPrototypeOf,e=[][t]?v(v([][t]())):(x(v={},t,function(){return this}),v),i=o.prototype=g.prototype=Object.create(e);function l(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,o):(e.__proto__=o,x(e,r,"GeneratorFunction")),e.prototype=Object.create(i),e}return x(i,"constructor",a.prototype=o),x(o,"constructor",a),x(o,r,a.displayName="GeneratorFunction"),x(i),x(i,r,"Generator"),x(i,t,function(){return this}),x(i,"toString",function(){return"[object Generator]"}),(Fs=function(){return{w:n,m:l}})()}function x(e,t,r,n){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}(x=function(e,t,r,n){function a(t,r){x(e,t,function(e){return this._invoke(t,r,e)})}t?o?o(e,t,{value:r,enumerable:!n,configurable:!n,writable:!n}):e[t]=r:(a("next",0),a("throw",1),a("return",2))})(e,t,r,n)}function Ws(e,t,r,n,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return r(e)}l.done?t(s):Promise.resolve(s).then(n,a)}function Is(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function k(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Is(Object(a),!0).forEach(function(e){var t,r;t=n,r=a[e=e],(e=(e=>(e=((e,t)=>{if("object"!=As(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);if("object"!=As(r=r.call(e,t||"default")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")})(e,"string"),"symbol"==As(e)?e:e+""))(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Is(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Bs(e,t){return(e=>{if(Array.isArray(e))return e})(e)||((e,t)=>{var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}})(e,t)||((e,t)=>{var r;if(e)return"string"==typeof e?Hs(e,t):"Map"===(r="Object"===(r={}.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Hs(e,t):void 0})(e,t)||(()=>{throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function Hs(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Us(e){function r(e){return"number"!=typeof e?"N/A":new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(e)}var t,o=e.propertyId,e=Bs((0,Ee.useState)({dateRange:void 0,adults:2,children:0,rooms:1,selectedRoom:null}),2),i=e[0],n=e[1],e=Bs((0,Ee.useState)([]),2),a=e[0],s=e[1],e=Bs((0,Ee.useState)(!0),2),l=e[0],c=e[1],e=Bs((0,Ee.useState)(0),2),u=e[0],d=e[1],e=Bs((0,Ee.useState)(0),2),f=e[0],p=e[1],e=i.adults+i.children,h=((0,Ee.useEffect)(function(){var e;o&&(console.log("Booking from : ".concat(null==(e=i.dateRange)?void 0:e.from)),console.log("Booking to : ".concat(null==(e=i.dateRange)?void 0:e.to)),e=new URLSearchParams({propertyId:o}),c(!0),fetch("https://api.houseofreservations.com/v1/rooms/available?".concat(e.toString())).then(function(e){return e.json()}).then(function(e){s(e.data||[]),c(!1)}).catch(function(e){console.error("Error fetching rooms:",e),c(!1)}))},[o]),(0,Ee.useEffect)(function(){var e;null!=(e=i.dateRange)&&e.from&&null!=(e=i.dateRange)&&e.to&&i.selectedRoom?(e=Ls(i.dateRange.to,i.dateRange.from),d(e),p(e*i.selectedRoom.rates*i.rooms)):(d(0),p(0))},[i.dateRange,i.selectedRoom,i.rooms]),(()=>{l=Fs().m(function e(){var t,r,n,a;return Fs().w(function(e){for(;;)switch(e.p=e.n){case 0:if(null!=(t=i.dateRange)&&t.from&&null!=(t=i.dateRange)&&t.to){e.n=1;break}return alert("Please select dates to search"),e.a(2);case 1:return t=Jr(i.dateRange.from,"yyyy-MM-dd"),n=Jr(i.dateRange.to,"yyyy-MM-dd"),r=Ls(i.dateRange.to,i.dateRange.from),console.log("Jumlah malam (nights):",r),console.log("Tanggal check-in:",t),console.log("Tanggal check-out:",n),r=new URLSearchParams({propertyId:null!=o?o:"",arrival:t,departure:n,guests_adult:i.adults.toString(),guests_children:i.children.toString()}),e.p=2,c(!0),e.n=3,fetch("https://api.houseofreservations.com/v1/rooms/available?".concat(r.toString()));case 3:return n=e.v,e.n=4,n.json();case 4:a=e.v,s(a.data||[]),c(!1),a="".concat(window.location.pathname,"?").concat(r.toString()),window.history.pushState({},"",a),console.log("Fetched rooms with:",r.toString()),e.n=6;break;case 5:e.p=5,a=e.v,console.error("Error fetching rooms:",a),c(!1);case 6:return e.a(2)}},e,null,[[2,5]])});var l,e=function(){var e=this,i=arguments;return new Promise(function(t,r){var n=l.apply(e,i);function a(e){Ws(n,t,r,a,o,"next",e)}function o(e){Ws(n,t,r,a,o,"throw",e)}a(void 0)})};return function(){return e.apply(this,arguments)}})());return(0,H.jsx)("div",{className:"min-h-screen bg-gray-50",children:(0,H.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,H.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[(0,H.jsxs)("div",{className:"lg:col-span-2",children:[(0,H.jsxs)("div",{className:"mb-8",children:[(0,H.jsx)("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Choose Your Villa"}),(0,H.jsx)("p",{className:"text-gray-600",children:"Discover our handpicked collection of luxury villas in Canggu"})]}),(0,H.jsx)("div",{className:"my-3",children:(0,H.jsxs)("div",{className:"flex flex-col sm:flex-row border rounded-lg overflow-hidden relative",children:[(0,H.jsxs)(Ss,{children:[(0,H.jsx)(Es,{asChild:!0,children:(0,H.jsx)(m,{variant:"ghost",className:"flex-1 h-auto p-6 rounded-none border-0 border-b sm:border-b-0 justify-start text-left font-normal hover:bg-gray-50",children:(0,H.jsxs)("div",{className:"flex items-center gap-4 w-full",children:[(0,H.jsx)(D,{className:"h-5 w-5 text-gray-400"}),(0,H.jsxs)("div",{className:"flex-1",children:[(0,H.jsx)("div",{className:"text-xs font-medium text-gray-500 uppercase tracking-wide mb-1",children:"Check-in • Check-out"}),(0,H.jsx)("div",{className:"text-sm font-medium text-gray-900",children:null!=(t=i.dateRange)&&t.from&&null!=(t=i.dateRange)&&t.to?"".concat(Jr(i.dateRange.from,"MMM dd")," - ").concat(Jr(i.dateRange.to,"MMM dd")):"Add dates"})]})]})})}),(0,H.jsx)(Ns,{className:"w-auto p-0",align:"start",children:(0,H.jsx)(ma,{mode:"range",selected:i.dateRange,onSelect:function(t){return n(function(e){return k(k({},e),{},{dateRange:t})})},disabled:function(e){return e<new Date},numberOfMonths:"undefined"!=typeof window&&768<=window.innerWidth?2:1,className:"rounded-md border"})})]}),(0,H.jsx)("div",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-px bg-gray-300"}),(0,H.jsxs)(Ss,{children:[(0,H.jsx)(Es,{asChild:!0,children:(0,H.jsx)(m,{variant:"ghost",className:"flex-1 h-auto p-6 rounded-none border-0 justify-start text-left font-normal hover:bg-gray-50 pr-16",children:(0,H.jsxs)("div",{className:"flex items-center gap-4 w-full mx-2",children:[(0,H.jsx)(T,{className:"h-5 w-5 text-gray-400"}),(0,H.jsxs)("div",{className:"flex-1",children:[(0,H.jsx)("div",{className:"text-xs font-medium text-gray-500 uppercase tracking-wide mb-1",children:"Guests"}),(0,H.jsxs)("div",{className:"text-sm font-medium text-gray-900",children:[i.adults+i.children," guests (",i.adults," adults, ",i.children," children)"]})]})]})})}),(0,H.jsx)(Ns,{className:"w-80",align:"start",children:(0,H.jsxs)("div",{className:"p-4 space-y-4",children:[(0,H.jsxs)("div",{className:"flex items-center justify-between",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:"font-medium",children:"Guests"}),(0,H.jsx)("div",{className:"text-sm text-gray-500",children:"Ages 13 or above"})]}),(0,H.jsxs)("div",{className:"flex items-center gap-3",children:[(0,H.jsx)(m,{variant:"outline",size:"sm",className:"h-8 w-8 p-0 bg-transparent",onClick:function(){return n(function(e){return k(k({},e),{},{adults:Math.max(1,e.adults-1)})})},disabled:i.adults<=1,children:"-"}),(0,H.jsx)("span",{className:"w-8 text-center font-medium",children:i.adults}),(0,H.jsx)(m,{variant:"outline",size:"sm",className:"h-8 w-8 p-0 bg-transparent",onClick:function(){return n(function(e){return k(k({},e),{},{adults:Math.min(12,e.adults+1)})})},disabled:12<=i.adults,children:"+"})]})]}),(0,H.jsxs)("div",{className:"flex items-center justify-between",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("div",{className:"font-medium",children:"Guests"}),(0,H.jsx)("div",{className:"text-sm text-gray-500",children:"Children (below 13)"})]}),(0,H.jsxs)("div",{className:"flex items-center gap-3",children:[(0,H.jsx)(m,{variant:"outline",size:"sm",className:"h-8 w-8 p-0 bg-transparent",onClick:function(){return n(function(e){return k(k({},e),{},{children:Math.max(0,e.children-1)})})},disabled:i.children<=0,children:"-"}),(0,H.jsx)("span",{className:"w-8 text-center font-medium",children:i.children}),(0,H.jsx)(m,{variant:"outline",size:"sm",className:"h-8 w-8 p-0 bg-transparent",onClick:function(){return n(function(e){return k(k({},e),{},{children:Math.min(12,e.children+1)})})},disabled:12<=i.children,children:"+"})]})]})]})})]}),(0,H.jsx)(m,{onClick:function(){return h()},className:"absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#9CAF88] hover:bg-[#8A9B7A] text-white rounded-full p-3 h-12 w-12 flex items-center justify-center transition-colors duration-200 shadow-sm",children:(0,H.jsx)("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,H.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})}),l?(0,H.jsx)("div",{className:"space-y-6",children:Array.from({length:3}).map(function(e,t){return(0,H.jsxs)("div",{className:"animate-pulse rounded-lg border p-6 space-y-4 bg-white shadow-sm",children:[(0,H.jsx)("div",{className:"h-48 bg-gray-200 rounded-md"}),(0,H.jsx)("div",{className:"h-4 bg-gray-200 rounded w-1/2"}),(0,H.jsx)("div",{className:"h-4 bg-gray-200 rounded w-full"}),(0,H.jsx)("div",{className:"h-4 bg-gray-200 rounded w-2/3"}),(0,H.jsx)("div",{className:"h-10 bg-gray-200 rounded mt-4"})]},t)})}):0===a.length?(0,H.jsx)("div",{className:"text-center text-gray-500 text-lg font-medium py-10",children:"No Available Rooms"}):(0,H.jsx)("div",{className:"space-y-6",children:a.map(function(e){var t;return(0,H.jsx)(_t,{className:"transition-all duration-200 hover:shadow-lg ".concat((null==(t=i.selectedRoom)?void 0:t.id)===e.id?"ring-2 ring-blue-500":""),children:(0,H.jsx)(Tt,{className:"p-0",children:(0,H.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-6",children:[(0,H.jsxs)("div",{className:"relative",children:[(0,H.jsx)("img",{src:(null==(t=e.images[0])?void 0:t.url)||"/placeholder.svg",alt:e.room_name,className:"w-full h-48 object-cover rounded-lg"}),e.featured&&(0,H.jsx)(Bt,{className:"absolute top-2 left-2 bg-red-500 hover:bg-red-600",children:"Featured"})]}),(0,H.jsxs)("div",{className:"md:col-span-1",children:[(0,H.jsx)("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:e.room_name}),(0,H.jsx)("div",{className:"text-gray-600 text-sm mb-4 line-clamp-3",dangerouslySetInnerHTML:{__html:e.descriptions}}),(0,H.jsxs)("div",{className:"space-y-2 mb-4",children:[(0,H.jsxs)("div",{className:"flex items-center text-sm text-gray-600",children:[(0,H.jsx)(T,{className:"w-4 h-4 mr-2"}),"Up to ",e.num_guests," guests"]}),(0,H.jsxs)("div",{className:"flex items-center text-sm text-gray-600",children:[(0,H.jsx)(L,{className:"w-4 h-4 mr-2"}),e.num_bedrooms," bedrooms, ",e.num_beds," beds"]})]}),(0,H.jsxs)("div",{className:"space-y-2",children:[(0,H.jsx)("h4",{className:"font-medium text-gray-900",children:"Location"}),(0,H.jsxs)("p",{className:"text-sm text-gray-600",children:[null==(t=e.property)?void 0:t.address,", ",null==(t=e.property)?void 0:t.city]})]})]}),(0,H.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,H.jsxs)("div",{className:"text-right mb-4",children:[(0,H.jsx)("div",{className:"flex items-center justify-end gap-2 mb-2",children:(0,H.jsx)("span",{className:"text-2xl font-bold text-gray-900",children:r(e.totalRates)})}),(0,H.jsx)("p",{className:"text-sm text-gray-600",children:"per night"}),0<e.totalNights&&(0,H.jsxs)("p",{className:"text-sm text-gray-500",children:["Total ",e.totalNights," nights:"," ",r(e.totalRates)]})]}),(0,H.jsx)(m,{onClick:function(){var t;t=e,n(function(e){return k(k({},e),{},{selectedRoom:t})})},className:"w-full ".concat((null==(t=i.selectedRoom)?void 0:t.id)===e.id?"bg-green-600 hover:bg-green-700":""),children:(null==(t=i.selectedRoom)?void 0:t.id)===e.id?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R,{className:"w-4 h-4 mr-2"}),"Selected"]}):"Select Villa"})]})]})})},e.id)})})]}),(0,H.jsx)("div",{className:"lg:col-span-1",children:(0,H.jsx)("div",{className:"sticky top-4",children:(0,H.jsxs)(_t,{children:[(0,H.jsx)(jt,{children:(0,H.jsxs)(Dt,{className:"flex items-center gap-2",children:[(0,H.jsx)(D,{className:"w-5 h-5"}),"Booking Summary"]})}),(0,H.jsx)(Tt,{children:i.selectedRoom?(0,H.jsxs)("div",{className:"space-y-4",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("h4",{className:"font-medium text-gray-900 mb-2",children:"Selected Villa"}),(0,H.jsxs)("div",{className:"bg-blue-50 rounded-lg p-3",children:[(0,H.jsx)("p",{className:"font-medium text-blue-900",children:i.selectedRoom.room_name}),(0,H.jsxs)("p",{className:"text-sm text-blue-700",children:["$",i.selectedRoom.rates," per night"]})]})]}),(0,H.jsx)(Ts,{}),(0,H.jsxs)("div",{className:"space-y-3",children:[(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsx)("span",{className:"text-gray-600",children:"Check-in:"}),(0,H.jsx)("span",{className:"font-medium",children:null!=(t=i.dateRange)&&t.from?Jr(i.dateRange.from,"MMM dd, yyyy"):"Not selected"})]}),(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsx)("span",{className:"text-gray-600",children:"Check-out:"}),(0,H.jsx)("span",{className:"font-medium",children:null!=(l=i.dateRange)&&l.to?Jr(i.dateRange.to,"MMM dd, yyyy"):"Not selected"})]}),(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsx)("span",{className:"text-gray-600",children:"Guests:"}),(0,H.jsx)("span",{className:"font-medium",children:e})]}),0<u&&(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsx)("span",{className:"text-gray-600",children:"Nights:"}),(0,H.jsx)("span",{className:"font-medium",children:u})]})]}),(0,H.jsx)(Ts,{}),0<u&&(0,H.jsxs)("div",{className:"space-y-2",children:[(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsxs)("span",{className:"text-gray-600",children:["$",i.selectedRoom.rates," × ",u," nights"]}),(0,H.jsxs)("span",{className:"font-medium",children:["$",f]})]}),(0,H.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,H.jsx)("span",{className:"text-gray-600",children:"Taxes & fees"}),(0,H.jsxs)("span",{className:"font-medium",children:["$",Math.round(.12*f)]})]}),(0,H.jsx)(Ts,{}),(0,H.jsxs)("div",{className:"flex justify-between text-lg font-bold",children:[(0,H.jsx)("span",{children:"Total"}),(0,H.jsxs)("span",{children:["$",f+Math.round(.12*f)]})]})]}),(0,H.jsx)(m,{className:"w-full mt-6",size:"lg",onClick:function(){var e;i.selectedRoom&&null!=(e=i.dateRange)&&e.from&&null!=(e=i.dateRange)&&e.to?alert("Booking confirmed for ".concat(i.selectedRoom.room_name,"!\nCheck-in: ").concat(Jr(i.dateRange.from,"MMM dd, yyyy"),"\nCheck-out: ").concat(Jr(i.dateRange.to,"MMM dd, yyyy"),"\nTotal: $").concat(f)):alert("Please select room and dates")},disabled:!(null!=(a=i.dateRange)&&a.from&&null!=(t=i.dateRange)&&t.to),children:null!=(l=i.dateRange)&&l.from&&null!=(e=i.dateRange)&&e.to?"Book for $".concat(f+Math.round(.12*f)):"Select Dates to Book"}),(0,H.jsxs)("div",{className:"mt-4 space-y-2",children:[(0,H.jsxs)("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[(0,H.jsx)(R,{className:"w-4 h-4 text-green-500"}),"Free cancellation within 24 hours"]}),(0,H.jsxs)("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[(0,H.jsx)(R,{className:"w-4 h-4 text-green-500"}),"No booking fees"]}),(0,H.jsxs)("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[(0,H.jsx)(R,{className:"w-4 h-4 text-green-500"}),"Instant confirmation"]})]})]}):(0,H.jsxs)("div",{className:"text-center py-8",children:[(0,H.jsx)(D,{className:"w-12 h-12 text-gray-300 mx-auto mb-4"}),(0,H.jsx)("p",{className:"text-gray-500 mb-2",children:"Select a villa to see booking details"}),(0,H.jsx)("p",{className:"text-sm text-gray-400",children:"Choose your preferred villa from the options above"})]})})]})})})]})})})}function Ys(e){return e=e.propertyId,(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(Us,{propertyId:e})})}a=document.getElementById("hor-booking-engine"),t=Array.from(document.querySelectorAll('script[src$=".js"]')).find(function(e){return e.hasAttribute("data-property")}),e=(null==t?void 0:t.getAttribute("data-property"))||null;a&&(0,P.createRoot)(a).render((0,H.jsx)(Ee.StrictMode,{children:(0,H.jsx)(Ys,{propertyId:e})}))})();