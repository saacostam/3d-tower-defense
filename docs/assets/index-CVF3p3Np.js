var rM=Object.defineProperty;var aM=(o,t,e)=>t in o?rM(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Rt=(o,t,e)=>aM(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function e(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=e(l);fetch(l.href,f)}})();var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var X0={exports:{}},Qd={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function oM(){if(ry)return Qd;ry=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var p in l)p!=="key"&&(f[p]=l[p])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return Qd.Fragment=t,Qd.jsx=e,Qd.jsxs=e,Qd}var ay;function lM(){return ay||(ay=1,X0.exports=oM()),X0.exports}var Fe=lM(),q0={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function uM(){if(sy)return Be;sy=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function E(V){return V===null||typeof V!="object"?null:(V=y&&V[y]||V["@@iterator"],typeof V=="function"?V:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,C={};function b(V,ut,Ft){this.props=V,this.context=ut,this.refs=C,this.updater=Ft||T}b.prototype.isReactComponent={},b.prototype.setState=function(V,ut){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,ut,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function M(){}M.prototype=b.prototype;function H(V,ut,Ft){this.props=V,this.context=ut,this.refs=C,this.updater=Ft||T}var z=H.prototype=new M;z.constructor=H,R(z,b.prototype),z.isPureReactComponent=!0;var N=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function k(V,ut,Ft,Vt,ct,Dt){return Ft=Dt.ref,{$$typeof:o,type:V,key:ut,ref:Ft!==void 0?Ft:null,props:Dt}}function K(V,ut){return k(V.type,ut,void 0,void 0,void 0,V.props)}function F(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function O(V){var ut={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Ft){return ut[Ft]})}var j=/\/+/g;function pt(V,ut){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):ut.toString(36)}function _t(){}function At(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(_t,_t):(V.status="pending",V.then(function(ut){V.status==="pending"&&(V.status="fulfilled",V.value=ut)},function(ut){V.status==="pending"&&(V.status="rejected",V.reason=ut)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function Tt(V,ut,Ft,Vt,ct){var Dt=typeof V;(Dt==="undefined"||Dt==="boolean")&&(V=null);var Bt=!1;if(V===null)Bt=!0;else switch(Dt){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(V.$$typeof){case o:case t:Bt=!0;break;case x:return Bt=V._init,Tt(Bt(V._payload),ut,Ft,Vt,ct)}}if(Bt)return ct=ct(V),Bt=Vt===""?"."+pt(V,0):Vt,N(ct)?(Ft="",Bt!=null&&(Ft=Bt.replace(j,"$&/")+"/"),Tt(ct,ut,Ft,"",function(Le){return Le})):ct!=null&&(F(ct)&&(ct=K(ct,Ft+(ct.key==null||V&&V.key===ct.key?"":(""+ct.key).replace(j,"$&/")+"/")+Bt)),ut.push(ct)),1;Bt=0;var qt=Vt===""?".":Vt+":";if(N(V))for(var Kt=0;Kt<V.length;Kt++)Vt=V[Kt],Dt=qt+pt(Vt,Kt),Bt+=Tt(Vt,ut,Ft,Dt,ct);else if(Kt=E(V),typeof Kt=="function")for(V=Kt.call(V),Kt=0;!(Vt=V.next()).done;)Vt=Vt.value,Dt=qt+pt(Vt,Kt++),Bt+=Tt(Vt,ut,Ft,Dt,ct);else if(Dt==="object"){if(typeof V.then=="function")return Tt(At(V),ut,Ft,Vt,ct);throw ut=String(V),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function Y(V,ut,Ft){if(V==null)return V;var Vt=[],ct=0;return Tt(V,Vt,"","",function(Dt){return ut.call(Ft,Dt,ct++)}),Vt}function ot(V){if(V._status===-1){var ut=V._result;ut=ut(),ut.then(function(Ft){(V._status===0||V._status===-1)&&(V._status=1,V._result=Ft)},function(Ft){(V._status===0||V._status===-1)&&(V._status=2,V._result=Ft)}),V._status===-1&&(V._status=0,V._result=ut)}if(V._status===1)return V._result.default;throw V._result}var it=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Wt(){}return Be.Children={map:Y,forEach:function(V,ut,Ft){Y(V,function(){ut.apply(this,arguments)},Ft)},count:function(V){var ut=0;return Y(V,function(){ut++}),ut},toArray:function(V){return Y(V,function(ut){return ut})||[]},only:function(V){if(!F(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Be.Component=b,Be.Fragment=e,Be.Profiler=l,Be.PureComponent=H,Be.StrictMode=r,Be.Suspense=g,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,Be.__COMPILER_RUNTIME={__proto__:null,c:function(V){return X.H.useMemoCache(V)}},Be.cache=function(V){return function(){return V.apply(null,arguments)}},Be.cloneElement=function(V,ut,Ft){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var Vt=R({},V.props),ct=V.key,Dt=void 0;if(ut!=null)for(Bt in ut.ref!==void 0&&(Dt=void 0),ut.key!==void 0&&(ct=""+ut.key),ut)!W.call(ut,Bt)||Bt==="key"||Bt==="__self"||Bt==="__source"||Bt==="ref"&&ut.ref===void 0||(Vt[Bt]=ut[Bt]);var Bt=arguments.length-2;if(Bt===1)Vt.children=Ft;else if(1<Bt){for(var qt=Array(Bt),Kt=0;Kt<Bt;Kt++)qt[Kt]=arguments[Kt+2];Vt.children=qt}return k(V.type,ct,void 0,void 0,Dt,Vt)},Be.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:f,_context:V},V},Be.createElement=function(V,ut,Ft){var Vt,ct={},Dt=null;if(ut!=null)for(Vt in ut.key!==void 0&&(Dt=""+ut.key),ut)W.call(ut,Vt)&&Vt!=="key"&&Vt!=="__self"&&Vt!=="__source"&&(ct[Vt]=ut[Vt]);var Bt=arguments.length-2;if(Bt===1)ct.children=Ft;else if(1<Bt){for(var qt=Array(Bt),Kt=0;Kt<Bt;Kt++)qt[Kt]=arguments[Kt+2];ct.children=qt}if(V&&V.defaultProps)for(Vt in Bt=V.defaultProps,Bt)ct[Vt]===void 0&&(ct[Vt]=Bt[Vt]);return k(V,Dt,void 0,void 0,null,ct)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(V){return{$$typeof:p,render:V}},Be.isValidElement=F,Be.lazy=function(V){return{$$typeof:x,_payload:{_status:-1,_result:V},_init:ot}},Be.memo=function(V,ut){return{$$typeof:_,type:V,compare:ut===void 0?null:ut}},Be.startTransition=function(V){var ut=X.T,Ft={};X.T=Ft;try{var Vt=V(),ct=X.S;ct!==null&&ct(Ft,Vt),typeof Vt=="object"&&Vt!==null&&typeof Vt.then=="function"&&Vt.then(Wt,it)}catch(Dt){it(Dt)}finally{X.T=ut}},Be.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},Be.use=function(V){return X.H.use(V)},Be.useActionState=function(V,ut,Ft){return X.H.useActionState(V,ut,Ft)},Be.useCallback=function(V,ut){return X.H.useCallback(V,ut)},Be.useContext=function(V){return X.H.useContext(V)},Be.useDebugValue=function(){},Be.useDeferredValue=function(V,ut){return X.H.useDeferredValue(V,ut)},Be.useEffect=function(V,ut,Ft){var Vt=X.H;if(typeof Ft=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Vt.useEffect(V,ut)},Be.useId=function(){return X.H.useId()},Be.useImperativeHandle=function(V,ut,Ft){return X.H.useImperativeHandle(V,ut,Ft)},Be.useInsertionEffect=function(V,ut){return X.H.useInsertionEffect(V,ut)},Be.useLayoutEffect=function(V,ut){return X.H.useLayoutEffect(V,ut)},Be.useMemo=function(V,ut){return X.H.useMemo(V,ut)},Be.useOptimistic=function(V,ut){return X.H.useOptimistic(V,ut)},Be.useReducer=function(V,ut,Ft){return X.H.useReducer(V,ut,Ft)},Be.useRef=function(V){return X.H.useRef(V)},Be.useState=function(V){return X.H.useState(V)},Be.useSyncExternalStore=function(V,ut,Ft){return X.H.useSyncExternalStore(V,ut,Ft)},Be.useTransition=function(){return X.H.useTransition()},Be.version="19.1.0",Be}var oy;function Lx(){return oy||(oy=1,q0.exports=uM()),q0.exports}var hp=Lx(),Y0={exports:{}},jd={},Z0={exports:{}},K0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function cM(){return ly||(ly=1,function(o){function t(Y,ot){var it=Y.length;Y.push(ot);t:for(;0<it;){var Wt=it-1>>>1,V=Y[Wt];if(0<l(V,ot))Y[Wt]=ot,Y[it]=V,it=Wt;else break t}}function e(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ot=Y[0],it=Y.pop();if(it!==ot){Y[0]=it;t:for(var Wt=0,V=Y.length,ut=V>>>1;Wt<ut;){var Ft=2*(Wt+1)-1,Vt=Y[Ft],ct=Ft+1,Dt=Y[ct];if(0>l(Vt,it))ct<V&&0>l(Dt,Vt)?(Y[Wt]=Dt,Y[ct]=it,Wt=ct):(Y[Wt]=Vt,Y[Ft]=it,Wt=Ft);else if(ct<V&&0>l(Dt,it))Y[Wt]=Dt,Y[ct]=it,Wt=ct;else break t}}return ot}function l(Y,ot){var it=Y.sortIndex-ot.sortIndex;return it!==0?it:Y.id-ot.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var g=[],_=[],x=1,y=null,E=3,T=!1,R=!1,C=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(Y){for(var ot=e(_);ot!==null;){if(ot.callback===null)r(_);else if(ot.startTime<=Y)r(_),ot.sortIndex=ot.expirationTime,t(g,ot);else break;ot=e(_)}}function X(Y){if(C=!1,N(Y),!R)if(e(g)!==null)R=!0,W||(W=!0,pt());else{var ot=e(_);ot!==null&&Tt(X,ot.startTime-Y)}}var W=!1,k=-1,K=5,F=-1;function O(){return b?!0:!(o.unstable_now()-F<K)}function j(){if(b=!1,W){var Y=o.unstable_now();F=Y;var ot=!0;try{t:{R=!1,C&&(C=!1,H(k),k=-1),T=!0;var it=E;try{e:{for(N(Y),y=e(g);y!==null&&!(y.expirationTime>Y&&O());){var Wt=y.callback;if(typeof Wt=="function"){y.callback=null,E=y.priorityLevel;var V=Wt(y.expirationTime<=Y);if(Y=o.unstable_now(),typeof V=="function"){y.callback=V,N(Y),ot=!0;break e}y===e(g)&&r(g),N(Y)}else r(g);y=e(g)}if(y!==null)ot=!0;else{var ut=e(_);ut!==null&&Tt(X,ut.startTime-Y),ot=!1}}break t}finally{y=null,E=it,T=!1}ot=void 0}}finally{ot?pt():W=!1}}}var pt;if(typeof z=="function")pt=function(){z(j)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,At=_t.port2;_t.port1.onmessage=j,pt=function(){At.postMessage(null)}}else pt=function(){M(j,0)};function Tt(Y,ot){k=M(function(){Y(o.unstable_now())},ot)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(Y){switch(E){case 1:case 2:case 3:var ot=3;break;default:ot=E}var it=E;E=ot;try{return Y()}finally{E=it}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(Y,ot){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var it=E;E=Y;try{return ot()}finally{E=it}},o.unstable_scheduleCallback=function(Y,ot,it){var Wt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Wt+it:Wt):it=Wt,Y){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=it+V,Y={id:x++,callback:ot,priorityLevel:Y,startTime:it,expirationTime:V,sortIndex:-1},it>Wt?(Y.sortIndex=it,t(_,Y),e(g)===null&&Y===e(_)&&(C?(H(k),k=-1):C=!0,Tt(X,it-Wt))):(Y.sortIndex=V,t(g,Y),R||T||(R=!0,W||(W=!0,pt()))),Y},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(Y){var ot=E;return function(){var it=E;E=ot;try{return Y.apply(this,arguments)}finally{E=it}}}}(K0)),K0}var uy;function fM(){return uy||(uy=1,Z0.exports=cM()),Z0.exports}var Q0={exports:{}},or={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function hM(){if(cy)return or;cy=1;var o=Lx();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)_+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var r={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},l=Symbol.for("react.portal");function f(g,_,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:_,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return or.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,or.createPortal=function(g,_){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return f(g,_,null,x)},or.flushSync=function(g){var _=h.T,x=r.p;try{if(h.T=null,r.p=2,g)return g()}finally{h.T=_,r.p=x,r.d.f()}},or.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(g,_))},or.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},or.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var x=_.as,y=p(x,_.crossOrigin),E=typeof _.integrity=="string"?_.integrity:void 0,T=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;x==="style"?r.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:T}):x==="script"&&r.d.X(g,{crossOrigin:y,integrity:E,fetchPriority:T,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},or.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var x=p(_.as,_.crossOrigin);r.d.M(g,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(g)},or.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var x=_.as,y=p(x,_.crossOrigin);r.d.L(g,x,{crossOrigin:y,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},or.preloadModule=function(g,_){if(typeof g=="string")if(_){var x=p(_.as,_.crossOrigin);r.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(g)},or.requestFormReset=function(g){r.d.r(g)},or.unstable_batchedUpdates=function(g,_){return g(_)},or.useFormState=function(g,_,x){return h.H.useFormState(g,_,x)},or.useFormStatus=function(){return h.H.useHostTransitionStatus()},or.version="19.1.0",or}var fy;function dM(){if(fy)return Q0.exports;fy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Q0.exports=hM(),Q0.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function pM(){if(hy)return jd;hy=1;var o=fM(),t=Lx(),e=dM();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function f(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(f(n)!==n)throw Error(r(188))}function g(n){var i=n.alternate;if(!i){if(i=f(n),i===null)throw Error(r(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var v=d.alternate;if(v===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===v.child){for(v=d.child;v;){if(v===a)return p(d),n;if(v===c)return p(d),i;v=v.sibling}throw Error(r(188))}if(a.return!==c.return)a=d,c=v;else{for(var A=!1,L=d.child;L;){if(L===a){A=!0,a=d,c=v;break}if(L===c){A=!0,c=d,a=v;break}L=L.sibling}if(!A){for(L=v.child;L;){if(L===a){A=!0,a=v,c=d;break}if(L===c){A=!0,c=v,a=d;break}L=L.sibling}if(!A)throw Error(r(189))}}if(a.alternate!==c)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?n:i}function _(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=_(n),i!==null)return i;n=n.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function pt(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Symbol.for("react.client.reference");function At(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===_t?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case b:return"Profiler";case C:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case F:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case T:return"Portal";case z:return(n.displayName||"Context")+".Provider";case H:return(n._context.displayName||"Context")+".Consumer";case N:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case k:return i=n.displayName||null,i!==null?i:At(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return At(n(i))}catch{}}return null}var Tt=Array.isArray,Y=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Wt=[],V=-1;function ut(n){return{current:n}}function Ft(n){0>V||(n.current=Wt[V],Wt[V]=null,V--)}function Vt(n,i){V++,Wt[V]=n.current,n.current=i}var ct=ut(null),Dt=ut(null),Bt=ut(null),qt=ut(null);function Kt(n,i){switch(Vt(Bt,i),Vt(Dt,n),Vt(ct,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?Yn(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=Yn(i),n=Zn(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ft(ct),Vt(ct,n)}function Le(){Ft(ct),Ft(Dt),Ft(Bt)}function Ee(n){n.memoizedState!==null&&Vt(qt,n);var i=ct.current,a=Zn(i,n.type);i!==a&&(Vt(Dt,n),Vt(ct,a))}function xn(n){Dt.current===n&&(Ft(ct),Ft(Dt)),qt.current===n&&(Ft(qt),gl._currentValue=it)}var gn=Object.prototype.hasOwnProperty,Pe=o.unstable_scheduleCallback,Q=o.unstable_cancelCallback,vi=o.unstable_shouldYield,Qe=o.unstable_requestPaint,ve=o.unstable_now,de=o.unstable_getCurrentPriorityLevel,Tn=o.unstable_ImmediatePriority,ce=o.unstable_UserBlockingPriority,G=o.unstable_NormalPriority,U=o.unstable_LowPriority,dt=o.unstable_IdlePriority,zt=o.log,Ht=o.unstable_setDisableYieldValue,Ct=null,te=null;function Yt(n){if(typeof zt=="function"&&Ht(n),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(Ct,n)}catch{}}var Zt=Math.clz32?Math.clz32:le,qe=Math.log,Xt=Math.LN2;function le(n){return n>>>=0,n===0?32:31-(qe(n)/Xt|0)|0}var pe=256,xe=4194304;function ee(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oe(n,i,a){var c=n.pendingLanes;if(c===0)return 0;var d=0,v=n.suspendedLanes,A=n.pingedLanes;n=n.warmLanes;var L=c&134217727;return L!==0?(c=L&~v,c!==0?d=ee(c):(A&=L,A!==0?d=ee(A):a||(a=L&~n,a!==0&&(d=ee(a))))):(L=c&~v,L!==0?d=ee(L):A!==0?d=ee(A):a||(a=c&~n,a!==0&&(d=ee(a)))),d===0?0:i!==0&&i!==d&&!(i&v)&&(v=d&-d,a=i&-i,v>=a||v===32&&(a&4194048)!==0)?i:d}function we(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function bn(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var n=pe;return pe<<=1,!(pe&4194048)&&(pe=256),n}function $t(){var n=xe;return xe<<=1,!(xe&62914560)&&(xe=4194304),n}function Et(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ut(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ae(n,i,a,c,d,v){var A=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var L=n.entanglements,Z=n.expirationTimes,ft=n.hiddenUpdates;for(a=A&~a;0<a;){var bt=31-Zt(a),Ot=1<<bt;L[bt]=0,Z[bt]=-1;var mt=ft[bt];if(mt!==null)for(ft[bt]=null,bt=0;bt<mt.length;bt++){var ht=mt[bt];ht!==null&&(ht.lane&=-536870913)}a&=~Ot}c!==0&&ne(n,c,0),v!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=v&~(A&~i))}function ne(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-Zt(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|a&4194090}function Ue(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Zt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}function On(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ei(n){return n&=-n,2<n?8<n?n&134217727?32:268435456:8:2}function cn(){var n=ot.p;return n!==0?n:(n=window.event,n===void 0?32:Fg(n.type))}function hr(n,i){var a=ot.p;try{return ot.p=n,i()}finally{ot.p=a}}var xi=Math.random().toString(36).slice(2),ni="__reactFiber$"+xi,wi="__reactProps$"+xi,Li="__reactContainer$"+xi,Hs="__reactEvents$"+xi,ic="__reactListeners$"+xi,rc="__reactHandles$"+xi,Gs="__reactResources$"+xi,Ja="__reactMarker$"+xi;function $a(n){delete n[ni],delete n[wi],delete n[Hs],delete n[ic],delete n[rc]}function Ea(n){var i=n[ni];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Li]||a[ni]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=wg(n);n!==null;){if(a=n[ni])return a;n=wg(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){if(n=n[ni]||n[Li]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function ts(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function es(n){var i=n[Gs];return i||(i=n[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ri(n){n[Ja]=!0}var ac=new Set,sc={};function Ta(n,i){P(n,i),P(n+"Capture",i)}function P(n,i){for(sc[n]=i,n=0;n<i.length;n++)ac.add(i[n])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gt={},vt={};function at(n){return gn.call(vt,n)?!0:gn.call(gt,n)?!1:nt.test(n)?vt[n]=!0:(gt[n]=!0,!1)}function kt(n,i,a){if(at(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function Qt(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Jt(n,i,a,c){if(c===null)n.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+c)}}var oe,be;function ye(n){if(oe===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);oe=i&&i[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+n+be}var me=!1;function Ye(n,i){if(!n||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var Ot=function(){throw Error()};if(Object.defineProperty(Ot.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ot,[])}catch(ht){var mt=ht}Reflect.construct(n,[],Ot)}else{try{Ot.call()}catch(ht){mt=ht}n.call(Ot.prototype)}}else{try{throw Error()}catch(ht){mt=ht}(Ot=n())&&typeof Ot.catch=="function"&&Ot.catch(function(){})}}catch(ht){if(ht&&mt&&typeof ht.stack=="string")return[ht.stack,mt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var v=c.DetermineComponentFrameRoot(),A=v[0],L=v[1];if(A&&L){var Z=A.split(`
`),ft=L.split(`
`);for(d=c=0;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;for(;d<ft.length&&!ft[d].includes("DetermineComponentFrameRoot");)d++;if(c===Z.length||d===ft.length)for(c=Z.length-1,d=ft.length-1;1<=c&&0<=d&&Z[c]!==ft[d];)d--;for(;1<=c&&0<=d;c--,d--)if(Z[c]!==ft[d]){if(c!==1||d!==1)do if(c--,d--,0>d||Z[c]!==ft[d]){var bt=`
`+Z[c].replace(" at new "," at ");return n.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",n.displayName)),bt}while(1<=c&&0<=d);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?ye(a):""}function fn(n){switch(n.tag){case 26:case 27:case 5:return ye(n.type);case 16:return ye("Lazy");case 13:return ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return Ye(n.type,!1);case 11:return Ye(n.type.render,!1);case 1:return Ye(n.type,!0);case 31:return ye("Activity");default:return""}}function Vn(n){try{var i="";do i+=fn(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function je(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ge(n){var i=Je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(A){c=""+A,v.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qn(n){n._valueTracker||(n._valueTracker=ge(n))}function rn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function oi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ba=/[\n"\\]/g;function In(n){return n.replace(ba,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function sa(n,i,a,c,d,v,A,L){n.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.type=A:n.removeAttribute("type"),i!=null?A==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+je(i)):n.value!==""+je(i)&&(n.value=""+je(i)):A!=="submit"&&A!=="reset"||n.removeAttribute("value"),i!=null?yi(n,A,je(i)):a!=null?yi(n,A,je(a)):c!=null&&n.removeAttribute("value"),d==null&&v!=null&&(n.defaultChecked=!!v),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?n.name=""+je(L):n.removeAttribute("name")}function An(n,i,a,c,d,v,A,L){if(v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.type=v),i!=null||a!=null){if(!(v!=="submit"&&v!=="reset"||i!=null))return;a=a!=null?""+je(a):"",i=i!=null?""+je(i):a,L||i===n.value||(n.value=i),n.defaultValue=i}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=L?n.checked:!!c,n.defaultChecked=!!c,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(n.name=A)}function yi(n,i,a){i==="number"&&oi(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function li(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+je(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ui(n,i,a){if(i!=null&&(i=""+je(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+je(a):""}function ci(n,i,a,c){if(i==null){if(c!=null){if(a!=null)throw Error(r(92));if(Tt(c)){if(1<c.length)throw Error(r(93));c=c[0]}a=c}a==null&&(a=""),i=a}a=je(i),n.defaultValue=a,c=n.textContent,c===a&&c!==""&&c!==null&&(n.value=c)}function wr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Yi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ph(n,i,a){var c=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,a):typeof a!="number"||a===0||Yi.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function mh(n,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var d in i)c=i[d],i.hasOwnProperty(d)&&a[d]!==c&&ph(n,d,c)}else for(var v in i)i.hasOwnProperty(v)&&ph(n,v,i[v])}function gh(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(n){return Dp.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var oc=null;function _h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Co=null,Do=null;function vh(n){var i=Ma(n);if(i&&(n=i.stateNode)){var a=n[wi]||null;t:switch(n=i.stateNode,i.type){case"input":if(sa(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+In(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=c[wi]||null;if(!d)throw Error(r(90));sa(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<a.length;i++)c=a[i],c.form===n.form&&rn(c)}break t;case"textarea":ui(n,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&li(n,!!a.multiple,i,!1)}}}var xh=!1;function Lp(n,i,a){if(xh)return n(i,a);xh=!0;try{var c=n(i);return c}finally{if(xh=!1,(Co!==null||Do!==null)&&(lf(),Co&&(i=Co,n=Do,Do=Co=null,vh(i),n)))for(i=0;i<n.length;i++)vh(n[i])}}function Ul(n,i){var a=n.stateNode;if(a===null)return null;var c=a[wi]||null;if(c===null)return null;a=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=!1;if(Aa)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{Nl=!1}var ns=null,yh=null,lc=null;function Up(){if(lc)return lc;var n,i=yh,a=i.length,c,d="value"in ns?ns.value:ns.textContent,v=d.length;for(n=0;n<a&&i[n]===d[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===d[v-c];c++);return lc=d.slice(n,1<c?1-c:void 0)}function wn(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function yn(){return!0}function Np(){return!1}function Zi(n){function i(a,c,d,v,A){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(v):v[L]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?yn:Np,this.isPropagationStopped=Np,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),i}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Zi(Vs),Il=x({},Vs,{view:0,detail:0}),V_=Zi(Il),cc,Sh,ii,Lo=x({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ii&&(ii&&n.type==="mousemove"?(cc=n.screenX-ii.screenX,Sh=n.screenY-ii.screenY):Sh=cc=0,ii=n),cc)},movementY:function(n){return"movementY"in n?n.movementY:Sh}}),is=Zi(Lo),Op=x({},Lo,{dataTransfer:0}),Eh=Zi(Op),Rr=x({},Il,{relatedTarget:0}),fc=Zi(Rr),Ip=x({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Pp=Zi(Ip),zp=x({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bp=Zi(zp),Fp=x({},Vs,{data:0}),Ki=Zi(Fp),W_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hp(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=k_[n])?!!i[n]:!1}function oa(){return Hp}var hc=x({},Il,{key:function(n){if(n.key){var i=W_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wn(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Cr[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(n){return n.type==="keypress"?wn(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wn(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Mh=Zi(hc),Wn=x({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=Zi(Wn),Th=x({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),X_=Zi(Th),bh=x({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=Zi(bh),Y_=x({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=Zi(Y_),Gp=x({},Vs,{newState:0,oldState:0}),dc=Zi(Gp),Uo=[9,13,27,32],Ah=Aa&&"CompositionEvent"in window,No=null;Aa&&"documentMode"in document&&(No=document.documentMode);var Vp=Aa&&"TextEvent"in window&&!No,pc=Aa&&(!Ah||No&&8<No&&11>=No),mc=" ",wh=!1;function Wp(n,i){switch(n){case"keyup":return Uo.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var rs=!1;function K_(n,i){switch(n){case"compositionend":return gc(i);case"keypress":return i.which!==32?null:(wh=!0,mc);case"textInput":return n=i.data,n===mc&&wh?null:n;default:return null}}function kp(n,i){if(rs)return n==="compositionend"||!Ah&&Wp(n,i)?(n=Up(),lc=yh=ns=null,rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pc&&i.locale!=="ko"?null:i.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!dr[n.type]:i==="textarea"}function Oo(n,i,a,c){Co?Do?Do.push(c):Do=[c]:Co=c,i=mf(i,"onChange"),0<i.length&&(a=new uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Io=null,Po=null;function Q_(n){xg(n,0)}function vc(n){var i=ts(n);if(rn(i))return n}function Xp(n,i){if(n==="change")return i}var qp=!1;if(Aa){var Rh;if(Aa){var as="oninput"in document;if(!as){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),as=typeof Yp.oninput=="function"}Rh=as}else Rh=!1;qp=Rh&&(!document.documentMode||9<document.documentMode)}function Zp(){Io&&(Io.detachEvent("onpropertychange",xc),Po=Io=null)}function xc(n){if(n.propertyName==="value"&&vc(Po)){var i=[];Oo(i,Po,n,_h(n)),Lp(Q_,i)}}function Kp(n,i,a){n==="focusin"?(Zp(),Io=i,Po=a,Io.attachEvent("onpropertychange",xc)):n==="focusout"&&Zp()}function ss(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vc(Po)}function yc(n,i){if(n==="click")return vc(i)}function j_(n,i){if(n==="input"||n==="change")return vc(i)}function J_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pr=typeof Object.is=="function"?Object.is:J_;function la(n,i){if(pr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gn.call(i,d)||!pr(n[d],i[d]))return!1}return!0}function Dr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,i){var a=Dr(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dr(a)}}function Qp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Qp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=oi(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=oi(n.document)}return i}function Dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var $_=Aa&&"documentMode"in document&&11>=document.documentMode,zo=null,os=null,tt=null,Mt=!1;function xt(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mt||zo==null||zo!==oi(c)||(c=zo,"selectionStart"in c&&Dh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),tt&&la(tt,c)||(tt=c,c=mf(os,"onSelect"),0<c.length&&(i=new uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=zo)))}function ie(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ae={animationend:ie("Animation","AnimationEnd"),animationiteration:ie("Animation","AnimationIteration"),animationstart:ie("Animation","AnimationStart"),transitionrun:ie("Transition","TransitionRun"),transitionstart:ie("Transition","TransitionStart"),transitioncancel:ie("Transition","TransitionCancel"),transitionend:ie("Transition","TransitionEnd")},sn={},ai={};Aa&&(ai=document.createElement("div").style,"AnimationEvent"in window||(delete Ae.animationend.animation,delete Ae.animationiteration.animation,delete Ae.animationstart.animation),"TransitionEvent"in window||delete Ae.transitionend.transition);function on(n){if(sn[n])return sn[n];if(!Ae[n])return n;var i=Ae[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ai)return sn[n]=i[a];return n}var Sc=on("animationend"),Jp=on("animationiteration"),mr=on("animationstart"),Ec=on("transitionrun"),t0=on("transitionstart"),Bo=on("transitioncancel"),Pl=on("transitionend"),zl=new Map,hn="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hn.push("scrollEnd");function Xr(n,i){zl.set(n,i),Ta(i,[n])}var Lh=new WeakMap;function Bi(n,i){if(typeof n=="object"&&n!==null){var a=Lh.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Vn(i)},Lh.set(n,i),i)}return{value:n,source:i,stack:Vn(i)}}var Lr=[],Fo=0,Uh=0;function Ws(){for(var n=Fo,i=Uh=Fo=0;i<n;){var a=Lr[i];Lr[i++]=null;var c=Lr[i];Lr[i++]=null;var d=Lr[i];Lr[i++]=null;var v=Lr[i];if(Lr[i++]=null,c!==null&&d!==null){var A=c.pending;A===null?d.next=d:(d.next=A.next,A.next=d),c.pending=d}v!==0&&Bl(a,d,v)}}function qr(n,i,a,c){Lr[Fo++]=n,Lr[Fo++]=i,Lr[Fo++]=a,Lr[Fo++]=c,Uh|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Ho(n,i,a,c){return qr(n,i,a,c),Fl(n)}function ks(n,i){return qr(n,null,null,i),Fl(n)}function Bl(n,i,a){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a);for(var d=!1,v=n.return;v!==null;)v.childLanes|=a,c=v.alternate,c!==null&&(c.childLanes|=a),v.tag===22&&(n=v.stateNode,n===null||n._visibility&1||(d=!0)),n=v,v=v.return;return n.tag===3?(v=n.stateNode,d&&i!==null&&(d=31-Zt(a),n=v.hiddenUpdates,c=n[d],c===null?n[d]=[i]:c.push(i),i.lane=a|536870912),v):null}function Fl(n){if(50<ll)throw ll=0,Ad=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Xs={};function Mc(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qi(n,i,a,c){return new Mc(n,i,a,c)}function qs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fi(n,i){var a=n.alternate;return a===null?(a=Qi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Hl(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Tc(n,i,a,c,d,v){var A=0;if(c=n,typeof n=="function")qs(n)&&(A=1);else if(typeof n=="string")A=L0(n,a,ct.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case F:return n=Qi(31,a,i,d),n.elementType=F,n.lanes=v,n;case R:return Ys(a.children,d,v,i);case C:A=8,d|=24;break;case b:return n=Qi(12,a,i,d|2),n.elementType=b,n.lanes=v,n;case X:return n=Qi(13,a,i,d),n.elementType=X,n.lanes=v,n;case W:return n=Qi(19,a,i,d),n.elementType=W,n.lanes=v,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:case z:A=10;break t;case H:A=9;break t;case N:A=11;break t;case k:A=14;break t;case K:A=16,c=null;break t}A=29,a=Error(r(130,n===null?"null":typeof n,"")),c=null}return i=Qi(A,a,i,d),i.elementType=n,i.type=c,i.lanes=v,i}function Ys(n,i,a,c){return n=Qi(7,n,c,i),n.lanes=a,n}function Nh(n,i,a){return n=Qi(6,n,null,i),n.lanes=a,n}function Go(n,i,a){return i=Qi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Ra=[],ls=0,bc=null,Gl=0,Ur=[],Nr=0,Fn=null,kn=1,Ca="";function Zs(n,i){Ra[ls++]=Gl,Ra[ls++]=bc,bc=n,Gl=i}function Oh(n,i,a){Ur[Nr++]=kn,Ur[Nr++]=Ca,Ur[Nr++]=Fn,Fn=n;var c=kn;n=Ca;var d=32-Zt(c)-1;c&=~(1<<d),a+=1;var v=32-Zt(i)+d;if(30<v){var A=d-d%5;v=(c&(1<<A)-1).toString(32),c>>=A,d-=A,kn=1<<32-Zt(i)+d|a<<d|c,Ca=v+n}else kn=1<<v|a<<d|c,Ca=n}function Ih(n){n.return!==null&&(Zs(n,1),Oh(n,1,0))}function Vl(n){for(;n===bc;)bc=Ra[--ls],Ra[ls]=null,Gl=Ra[--ls],Ra[ls]=null;for(;n===Fn;)Fn=Ur[--Nr],Ur[Nr]=null,Ca=Ur[--Nr],Ur[Nr]=null,kn=Ur[--Nr],Ur[Nr]=null}var fi=null,Xn=null,$e=!1,Yr=null,ji=!1,Vo=Error(r(519));function Or(n){var i=Error(r(418,""));throw us(Bi(i,n)),Vo}function $p(n){var i=n.stateNode,a=n.type,c=n.memoizedProps;switch(i[ni]=n,i[wi]=c,a){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(a=0;a<Du.length;a++)Ke(Du[a],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":Ke("invalid",i),An(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Qn(i);break;case"select":Ke("invalid",i);break;case"textarea":Ke("invalid",i),ci(i,c.value,c.defaultValue,c.children),Qn(i)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||c.suppressHydrationWarning===!0||Eg(i.textContent,a)?(c.popover!=null&&(Ke("beforetoggle",i),Ke("toggle",i)),c.onScroll!=null&&Ke("scroll",i),c.onScrollEnd!=null&&Ke("scrollend",i),c.onClick!=null&&(i.onclick=gf),i=!0):i=!1,i||Or(n)}function tm(n){for(fi=n.return;fi;)switch(fi.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:fi=fi.return}}function Wl(n){if(n!==fi)return!1;if(!$e)return tm(n),$e=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||vf(n.type,n.memoizedProps)),a=!a),a&&Xn&&Or(n),tm(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){Xn=$r(n.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}Xn=null}}else i===27?(i=Xn,Hr(n.type)?(n=Hd,Hd=null,Xn=n):Xn=i):Xn=fi?$r(n.stateNode.nextSibling):null;return!0}function kl(){Xn=fi=null,$e=!1}function em(){var n=Yr;return n!==null&&(ar===null?ar=n:ar.push.apply(ar,n),Yr=null),n}function us(n){Yr===null?Yr=[n]:Yr.push(n)}var Ks=ut(null),cs=null,D=null;function gr(n,i,a){Vt(Ks,i._currentValue),i._currentValue=a}function Ir(n){n._currentValue=Ks.current,Ft(Ks)}function Ji(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ge(n,i,a,c){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var v=d.dependencies;if(v!==null){var A=d.child;v=v.firstContext;t:for(;v!==null;){var L=v;v=d;for(var Z=0;Z<i.length;Z++)if(L.context===i[Z]){v.lanes|=a,L=v.alternate,L!==null&&(L.lanes|=a),Ji(v.return,a,n),c||(A=null);break t}v=L.next}}else if(d.tag===18){if(A=d.return,A===null)throw Error(r(341));A.lanes|=a,v=A.alternate,v!==null&&(v.lanes|=a),Ji(A,a,n),A=null}else A=d.child;if(A!==null)A.return=d;else for(A=d;A!==null;){if(A===n){A=null;break}if(d=A.sibling,d!==null){d.return=A.return,A=d;break}A=A.return}d=A}}function Xl(n,i,a,c){n=null;for(var d=i,v=!1;d!==null;){if(!v){if(d.flags&524288)v=!0;else if(d.flags&262144)break}if(d.tag===10){var A=d.alternate;if(A===null)throw Error(r(387));if(A=A.memoizedProps,A!==null){var L=d.type;pr(d.pendingProps.value,A.value)||(n!==null?n.push(L):n=[L])}}else if(d===qt.current){if(A=d.alternate,A===null)throw Error(r(387));A.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(gl):n=[gl])}d=d.return}n!==null&&Ge(i,n,a,c),i.flags|=262144}function Ac(n){for(n=n.firstContext;n!==null;){if(!pr(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qs(n){cs=n,D=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function jn(n){return nm(cs,n)}function wc(n,i){return cs===null&&Qs(n),nm(n,i)}function nm(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},D===null){if(n===null)throw Error(r(308));D=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else D=D.next=i;return a}var e0=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},n0=o.unstable_scheduleCallback,i0=o.unstable_NormalPriority,Dn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ph(){return{controller:new e0,data:new Map,refCount:0}}function ql(n){n.refCount--,n.refCount===0&&n0(i0,function(){n.controller.abort()})}var Yl=null,zh=0,Wo=0,$i=null;function r0(n,i){if(Yl===null){var a=Yl=[];zh=0,Wo=pf(),$i={status:"pending",value:void 0,then:function(c){a.push(c)}}}return zh++,i.then(im,im),i}function im(){if(--zh===0&&Yl!==null){$i!==null&&($i.status="fulfilled");var n=Yl;Yl=null,Wo=0,$i=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function a0(n,i){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var d=0;d<a.length;d++)(0,a[d])(i)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var rm=Y.S;Y.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&r0(n,i),rm!==null&&rm(n,i)};var js=ut(null);function Da(){var n=js.current;return n!==null?n:Pn.pooledCache}function Rc(n,i){i===null?Vt(js,js.current):Vt(js,i.pool)}function am(){var n=Da();return n===null?null:{parent:Dn._currentValue,pool:n}}var Hi=Error(r(460)),sm=Error(r(474)),Cc=Error(r(542)),Bh={then:function(){}};function om(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Dc(){}function Fh(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Dc,Dc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,um(n),n;default:if(typeof i.status=="string")i.then(Dc,Dc);else{if(n=Pn,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=c}},function(c){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,um(n),n}throw ko=i,Hi}}var ko=null;function lm(){if(ko===null)throw Error(r(459));var n=ko;return ko=null,n}function um(n){if(n===Hi||n===Cc)throw Error(r(483))}var ua=!1;function Js(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xo(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function fs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function La(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,En&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,i=Fl(n),Bl(n,null,a),i}return qr(n,c,i,a),Fl(n)}function Zl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ue(n,a)}}function Zr(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var A={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};v===null?d=v=A:v=v.next=A,a=a.next}while(a!==null);v===null?d=v=i:v=v.next=i}else d=v=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:v,shared:c.shared,callbacks:c.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Kl=!1;function Kr(){if(Kl){var n=$i;if(n!==null)throw n}}function Ui(n,i,a,c){Kl=!1;var d=n.updateQueue;ua=!1;var v=d.firstBaseUpdate,A=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var Z=L,ft=Z.next;Z.next=null,A===null?v=ft:A.next=ft,A=Z;var bt=n.alternate;bt!==null&&(bt=bt.updateQueue,L=bt.lastBaseUpdate,L!==A&&(L===null?bt.firstBaseUpdate=ft:L.next=ft,bt.lastBaseUpdate=Z))}if(v!==null){var Ot=d.baseState;A=0,bt=ft=Z=null,L=v;do{var mt=L.lane&-536870913,ht=mt!==L.lane;if(ht?(an&mt)===mt:(c&mt)===mt){mt!==0&&mt===Wo&&(Kl=!0),bt!==null&&(bt=bt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var Me=n,Se=L;mt=i;var Cn=a;switch(Se.tag){case 1:if(Me=Se.payload,typeof Me=="function"){Ot=Me.call(Cn,Ot,mt);break t}Ot=Me;break t;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Se.payload,mt=typeof Me=="function"?Me.call(Cn,Ot,mt):Me,mt==null)break t;Ot=x({},Ot,mt);break t;case 2:ua=!0}}mt=L.callback,mt!==null&&(n.flags|=64,ht&&(n.flags|=8192),ht=d.callbacks,ht===null?d.callbacks=[mt]:ht.push(mt))}else ht={lane:mt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},bt===null?(ft=bt=ht,Z=Ot):bt=bt.next=ht,A|=mt;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;ht=L,L=ht.next,ht.next=null,d.lastBaseUpdate=ht,d.shared.pending=null}}while(!0);bt===null&&(Z=Ot),d.baseState=Z,d.firstBaseUpdate=ft,d.lastBaseUpdate=bt,v===null&&(d.shared.lanes=0),ys|=A,n.lanes=A,n.memoizedState=Ot}}function cm(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function Hh(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)cm(a[n],i)}var $s=ut(null),hs=ut(0);function Ua(n,i){n=Ga,Vt(hs,n),Vt($s,i),Ga=n|i.baseLanes}function Lc(){Vt(hs,Ga),Vt($s,$s.current)}function Gh(){Ga=hs.current,Ft($s),Ft(hs)}var Qr=0,ze=null,Sn=null,tn=null,qo=!1,to=!1,Ni=!1,Yo=0,ds=0,Pr=null,fm=0;function en(){throw Error(r(321))}function Ql(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!pr(n[a],i[a]))return!1;return!0}function Vh(n,i,a,c,d,v){return Qr=v,ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=n===null||n.memoizedState===null?Tm:sd,Ni=!1,v=a(c,d),Ni=!1,to&&(v=dm(i,a,c,d)),hm(n),v}function hm(n){Y.H=ou;var i=Sn!==null&&Sn.next!==null;if(Qr=0,tn=Sn=ze=null,qo=!1,ds=0,Pr=null,i)throw Error(r(300));n===null||Si||(n=n.dependencies,n!==null&&Ac(n)&&(Si=!0))}function dm(n,i,a,c){ze=n;var d=0;do{if(to&&(Pr=null),ds=0,to=!1,25<=d)throw Error(r(301));if(d+=1,tn=Sn=null,n.updateQueue!=null){var v=n.updateQueue;v.lastEffect=null,v.events=null,v.stores=null,v.memoCache!=null&&(v.memoCache.index=0)}Y.H=bm,v=i(a,c)}while(to);return v}function Wh(){var n=Y.H,i=n.useState()[0];return i=typeof i.then=="function"?jl(i):i,n=n.useState()[0],(Sn!==null?Sn.memoizedState:null)!==n&&(ze.flags|=1024),i}function kh(){var n=Yo!==0;return Yo=0,n}function eo(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Uc(n){if(qo){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}qo=!1}Qr=0,tn=Sn=ze=null,to=!1,ds=Yo=0,Pr=null}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?ze.memoizedState=tn=n:tn=tn.next=n,tn}function si(){if(Sn===null){var n=ze.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var i=tn===null?ze.memoizedState:tn.next;if(i!==null)tn=i,Sn=n;else{if(n===null)throw ze.alternate===null?Error(r(467)):Error(r(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},tn===null?ze.memoizedState=tn=n:tn=tn.next=n}return tn}function no(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(n){var i=ds;return ds+=1,Pr===null&&(Pr=[]),n=Fh(Pr,n,i),i=ze,(tn===null?i.memoizedState:tn.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?Tm:sd),n}function Nc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return jl(n);if(n.$$typeof===z)return jn(n)}throw Error(r(438,String(n)))}function Jl(n){var i=null,a=ze.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var c=ze.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=no(),ze.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),c=0;c<n;c++)a[c]=O;return i.index++,a}function ca(n,i){return typeof i=="function"?i(n):i}function Oc(n){var i=si();return Xh(i,Sn,n)}function Xh(n,i,a){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=a;var d=n.baseQueue,v=c.pending;if(v!==null){if(d!==null){var A=d.next;d.next=v.next,v.next=A}i.baseQueue=d=v,c.pending=null}if(v=n.baseState,d===null)n.memoizedState=v;else{i=d.next;var L=A=null,Z=null,ft=i,bt=!1;do{var Ot=ft.lane&-536870913;if(Ot!==ft.lane?(an&Ot)===Ot:(Qr&Ot)===Ot){var mt=ft.revertLane;if(mt===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null}),Ot===Wo&&(bt=!0);else if((Qr&mt)===mt){ft=ft.next,mt===Wo&&(bt=!0);continue}else Ot={lane:0,revertLane:ft.revertLane,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},Z===null?(L=Z=Ot,A=v):Z=Z.next=Ot,ze.lanes|=mt,ys|=mt;Ot=ft.action,Ni&&a(v,Ot),v=ft.hasEagerState?ft.eagerState:a(v,Ot)}else mt={lane:Ot,revertLane:ft.revertLane,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},Z===null?(L=Z=mt,A=v):Z=Z.next=mt,ze.lanes|=Ot,ys|=Ot;ft=ft.next}while(ft!==null&&ft!==i);if(Z===null?A=v:Z.next=L,!pr(v,n.memoizedState)&&(Si=!0,bt&&(a=$i,a!==null)))throw a;n.memoizedState=v,n.baseState=A,n.baseQueue=Z,c.lastRenderedState=v}return d===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function qh(n){var i=si(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,v=i.memoizedState;if(d!==null){a.pending=null;var A=d=d.next;do v=n(v,A.action),A=A.next;while(A!==d);pr(v,i.memoizedState)||(Si=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function Yh(n,i,a){var c=ze,d=si(),v=$e;if(v){if(a===void 0)throw Error(r(407));a=a()}else a=i();var A=!pr((Sn||d).memoizedState,a);A&&(d.memoizedState=a,Si=!0),d=d.queue;var L=Pc.bind(null,c,d,n);if(eu(2048,8,L,[n]),d.getSnapshot!==i||A||tn!==null&&tn.memoizedState.tag&1){if(c.flags|=2048,Zo(9,Gc(),pm.bind(null,c,d,a,i),null),Pn===null)throw Error(r(349));v||Qr&124||Ic(c,i,a)}return a}function Ic(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ze.updateQueue,i===null?(i=no(),ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function pm(n,i,a,c){i.value=a,i.getSnapshot=c,Zh(i)&&Kh(n)}function Pc(n,i,a){return a(function(){Zh(i)&&Kh(n)})}function Zh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!pr(n,a)}catch{return!0}}function Kh(n){var i=ks(n,2);i!==null&&Sr(i,n,2)}function zc(n){var i=tr();if(typeof n=="function"){var a=n;if(n=a(),Ni){Yt(!0);try{a()}finally{Yt(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},i}function $l(n,i,a,c){return n.baseState=a,Xh(n,Sn,typeof c=="function"?c:ca)}function s0(n,i,a,c,d){if(Xc(n))throw Error(r(485));if(n=i.action,n!==null){var v={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){v.listeners.push(A)}};Y.T!==null?a(!0):v.isTransition=!1,c(v),a=i.pending,a===null?(v.next=i.pending=v,Qh(i,v)):(v.next=a.next,i.pending=a.next=v)}}function Qh(n,i){var a=i.action,c=i.payload,d=n.state;if(i.isTransition){var v=Y.T,A={};Y.T=A;try{var L=a(d,c),Z=Y.S;Z!==null&&Z(A,L),jh(n,i,L)}catch(ft){Bc(n,i,ft)}finally{Y.T=v}}else try{v=a(d,c),jh(n,i,v)}catch(ft){Bc(n,i,ft)}}function jh(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){mm(n,i,c)},function(c){return Bc(n,i,c)}):mm(n,i,a)}function mm(n,i,a){i.status="fulfilled",i.value=a,gm(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,Qh(n,a)))}function Bc(n,i,a){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=a,gm(i),i=i.next;while(i!==c)}n.action=null}function gm(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Fc(n,i){return i}function Jh(n,i){if($e){var a=Pn.formState;if(a!==null){t:{var c=ze;if($e){if(Xn){e:{for(var d=Xn,v=ji;d.nodeType!==8;){if(!v){d=null;break e}if(d=$r(d.nextSibling),d===null){d=null;break e}}v=d.data,d=v==="F!"||v==="F"?d:null}if(d){Xn=$r(d.nextSibling),c=d.data==="F!";break t}}Or(c)}c=!1}c&&(i=a[0])}}return a=tr(),a.memoizedState=a.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fc,lastRenderedState:i},a.queue=c,a=id.bind(null,ze,c),c.dispatch=a,c=zc(!1),v=rd.bind(null,ze,!1,c.queue),c=tr(),d={state:i,dispatch:null,action:n,pending:null},c.queue=d,a=s0.bind(null,ze,d,v,a),d.dispatch=a,c.memoizedState=n,[i,a,!1]}function Hc(n){var i=si();return _m(i,Sn,n)}function _m(n,i,a){if(i=Xh(n,i,Fc)[0],n=Oc(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=jl(i)}catch(A){throw A===Hi?Cc:A}else c=i;i=si();var d=i.queue,v=d.dispatch;return a!==i.memoizedState&&(ze.flags|=2048,Zo(9,Gc(),$h.bind(null,d,a),null)),[c,v,n]}function $h(n,i){n.action=i}function Ie(n){var i=si(),a=Sn;if(a!==null)return _m(i,a,n);si(),i=i.memoizedState,a=si();var c=a.queue.dispatch;return a.memoizedState=n,[i,c,!1]}function Zo(n,i,a,c){return n={tag:n,create:a,deps:c,inst:i,next:null},i=ze.updateQueue,i===null&&(i=no(),ze.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n),n}function Gc(){return{destroy:void 0,resource:void 0}}function Ko(){return si().memoizedState}function tu(n,i,a,c){var d=tr();c=c===void 0?null:c,ze.flags|=n,d.memoizedState=Zo(1|i,Gc(),a,c)}function eu(n,i,a,c){var d=si();c=c===void 0?null:c;var v=d.memoizedState.inst;Sn!==null&&c!==null&&Ql(c,Sn.memoizedState.deps)?d.memoizedState=Zo(i,v,a,c):(ze.flags|=n,d.memoizedState=Zo(1|i,v,a,c))}function vm(n,i){tu(8390656,8,n,i)}function _r(n,i){eu(2048,8,n,i)}function xm(n,i){return eu(4,2,n,i)}function nu(n,i){return eu(4,4,n,i)}function Vc(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function td(n,i,a){a=a!=null?a.concat([n]):null,eu(4,4,Vc.bind(null,i,n),a)}function Wc(){}function er(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;return i!==null&&Ql(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Na(n,i){var a=si();i=i===void 0?null:i;var c=a.memoizedState;if(i!==null&&Ql(i,c[1]))return c[0];if(c=n(),Ni){Yt(!0);try{n()}finally{Yt(!1)}}return a.memoizedState=[c,i],c}function iu(n,i,a){return a===void 0||Qr&1073741824?n.memoizedState=i:(n.memoizedState=a,n=Jm(),ze.lanes|=n,ys|=n,a)}function ed(n,i,a,c){return pr(a,i)?a:$s.current!==null?(n=iu(n,a,c),pr(n,i)||(Si=!0),n):Qr&42?(n=Jm(),ze.lanes|=n,ys|=n,i):(Si=!0,n.memoizedState=a)}function ru(n,i,a,c,d){var v=ot.p;ot.p=v!==0&&8>v?v:8;var A=Y.T,L={};Y.T=L,rd(n,!1,i,a);try{var Z=d(),ft=Y.S;if(ft!==null&&ft(L,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var bt=a0(Z,c);io(n,i,bt,Ii(n))}else io(n,i,c,Ii(n))}catch(Ot){io(n,i,{then:function(){},status:"rejected",reason:Ot},Ii())}finally{ot.p=v,Y.T=A}}function ym(){}function au(n,i,a,c){if(n.tag!==5)throw Error(r(476));var d=nd(n).queue;ru(n,d,i,it,a===null?ym:function(){return kc(n),a(c)})}function nd(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:it},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function kc(n){var i=nd(n).next.queue;io(n,i,{},Ii())}function su(){return jn(gl)}function Oa(){return si().memoizedState}function Sm(){return si().memoizedState}function ps(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Ii();n=fs(a);var c=La(i,n,a);c!==null&&(Sr(c,i,a),Zl(c,i,a)),i={cache:Ph()},n.payload=i;return}i=i.return}}function Em(n,i,a){var c=Ii();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Xc(n)?Mm(i,a):(a=Ho(n,i,a,c),a!==null&&(Sr(a,n,c),ad(a,i,c)))}function id(n,i,a){var c=Ii();io(n,i,a,c)}function io(n,i,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xc(n))Mm(i,d);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var A=i.lastRenderedState,L=v(A,a);if(d.hasEagerState=!0,d.eagerState=L,pr(L,A))return qr(n,i,d,0),Pn===null&&Ws(),!1}catch{}finally{}if(a=Ho(n,i,d,c),a!==null)return Sr(a,n,c),ad(a,i,c),!0}return!1}function rd(n,i,a,c){if(c={lane:2,revertLane:pf(),action:c,hasEagerState:!1,eagerState:null,next:null},Xc(n)){if(i)throw Error(r(479))}else i=Ho(n,a,c,2),i!==null&&Sr(i,n,2)}function Xc(n){var i=n.alternate;return n===ze||i!==null&&i===ze}function Mm(n,i){to=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ad(n,i,a){if(a&4194048){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ue(n,a)}}var ou={readContext:jn,use:Nc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Tm={readContext:jn,use:Nc,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:jn,useEffect:vm,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,tu(4194308,4,Vc.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tu(4194308,4,n,i)},useInsertionEffect:function(n,i){tu(4,2,n,i)},useMemo:function(n,i){var a=tr();i=i===void 0?null:i;var c=n();if(Ni){Yt(!0);try{n()}finally{Yt(!1)}}return a.memoizedState=[c,i],c},useReducer:function(n,i,a){var c=tr();if(a!==void 0){var d=a(i);if(Ni){Yt(!0);try{a(i)}finally{Yt(!1)}}}else d=i;return c.memoizedState=c.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},c.queue=n,n=n.dispatch=Em.bind(null,ze,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:function(n){n=zc(n);var i=n.queue,a=id.bind(null,ze,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Wc,useDeferredValue:function(n,i){var a=tr();return iu(a,n,i)},useTransition:function(){var n=zc(!1);return n=ru.bind(null,ze,n.queue,!0,!1),tr().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var c=ze,d=tr();if($e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Pn===null)throw Error(r(349));an&124||Ic(c,i,a)}d.memoizedState=a;var v={value:a,getSnapshot:i};return d.queue=v,vm(Pc.bind(null,c,v,n),[n]),c.flags|=2048,Zo(9,Gc(),pm.bind(null,c,v,a,i),null),a},useId:function(){var n=tr(),i=Pn.identifierPrefix;if($e){var a=Ca,c=kn;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,i="«"+i+"R"+a,a=Yo++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=fm++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:su,useFormState:Jh,useActionState:Jh,useOptimistic:function(n){var i=tr();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=rd.bind(null,ze,!0,a),a.dispatch=i,[n,i]},useMemoCache:Jl,useCacheRefresh:function(){return tr().memoizedState=ps.bind(null,ze)}},sd={readContext:jn,use:Nc,useCallback:er,useContext:jn,useEffect:_r,useImperativeHandle:td,useInsertionEffect:xm,useLayoutEffect:nu,useMemo:Na,useReducer:Oc,useRef:Ko,useState:function(){return Oc(ca)},useDebugValue:Wc,useDeferredValue:function(n,i){var a=si();return ed(a,Sn.memoizedState,n,i)},useTransition:function(){var n=Oc(ca)[0],i=si().memoizedState;return[typeof n=="boolean"?n:jl(n),i]},useSyncExternalStore:Yh,useId:Oa,useHostTransitionStatus:su,useFormState:Hc,useActionState:Hc,useOptimistic:function(n,i){var a=si();return $l(a,Sn,n,i)},useMemoCache:Jl,useCacheRefresh:Sm},bm={readContext:jn,use:Nc,useCallback:er,useContext:jn,useEffect:_r,useImperativeHandle:td,useInsertionEffect:xm,useLayoutEffect:nu,useMemo:Na,useReducer:qh,useRef:Ko,useState:function(){return qh(ca)},useDebugValue:Wc,useDeferredValue:function(n,i){var a=si();return Sn===null?iu(a,n,i):ed(a,Sn.memoizedState,n,i)},useTransition:function(){var n=qh(ca)[0],i=si().memoizedState;return[typeof n=="boolean"?n:jl(n),i]},useSyncExternalStore:Yh,useId:Oa,useHostTransitionStatus:su,useFormState:Ie,useActionState:Ie,useOptimistic:function(n,i){var a=si();return Sn!==null?$l(a,Sn,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Jl,useCacheRefresh:Sm},hi=null,nr=0;function qc(n){var i=nr;return nr+=1,hi===null&&(hi=[]),Fh(hi,n,i)}function lu(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function ro(n,i){throw i.$$typeof===y?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function ao(n){var i=n._init;return i(n._payload)}function od(n){function i(rt,$){if(n){var lt=rt.deletions;lt===null?(rt.deletions=[$],rt.flags|=16):lt.push($)}}function a(rt,$){if(!n)return null;for(;$!==null;)i(rt,$),$=$.sibling;return null}function c(rt){for(var $=new Map;rt!==null;)rt.key!==null?$.set(rt.key,rt):$.set(rt.index,rt),rt=rt.sibling;return $}function d(rt,$){return rt=Fi(rt,$),rt.index=0,rt.sibling=null,rt}function v(rt,$,lt){return rt.index=lt,n?(lt=rt.alternate,lt!==null?(lt=lt.index,lt<$?(rt.flags|=67108866,$):lt):(rt.flags|=67108866,$)):(rt.flags|=1048576,$)}function A(rt){return n&&rt.alternate===null&&(rt.flags|=67108866),rt}function L(rt,$,lt,Lt){return $===null||$.tag!==6?($=Nh(lt,rt.mode,Lt),$.return=rt,$):($=d($,lt),$.return=rt,$)}function Z(rt,$,lt,Lt){var ue=lt.type;return ue===R?bt(rt,$,lt.props.children,Lt,lt.key):$!==null&&($.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===K&&ao(ue)===$.type)?($=d($,lt.props),lu($,lt),$.return=rt,$):($=Tc(lt.type,lt.key,lt.props,null,rt.mode,Lt),lu($,lt),$.return=rt,$)}function ft(rt,$,lt,Lt){return $===null||$.tag!==4||$.stateNode.containerInfo!==lt.containerInfo||$.stateNode.implementation!==lt.implementation?($=Go(lt,rt.mode,Lt),$.return=rt,$):($=d($,lt.children||[]),$.return=rt,$)}function bt(rt,$,lt,Lt,ue){return $===null||$.tag!==7?($=Ys(lt,rt.mode,Lt,ue),$.return=rt,$):($=d($,lt),$.return=rt,$)}function Ot(rt,$,lt){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Nh(""+$,rt.mode,lt),$.return=rt,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return lt=Tc($.type,$.key,$.props,null,rt.mode,lt),lu(lt,$),lt.return=rt,lt;case T:return $=Go($,rt.mode,lt),$.return=rt,$;case K:var Lt=$._init;return $=Lt($._payload),Ot(rt,$,lt)}if(Tt($)||pt($))return $=Ys($,rt.mode,lt,null),$.return=rt,$;if(typeof $.then=="function")return Ot(rt,qc($),lt);if($.$$typeof===z)return Ot(rt,wc(rt,$),lt);ro(rt,$)}return null}function mt(rt,$,lt,Lt){var ue=$!==null?$.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return ue!==null?null:L(rt,$,""+lt,Lt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:return lt.key===ue?Z(rt,$,lt,Lt):null;case T:return lt.key===ue?ft(rt,$,lt,Lt):null;case K:return ue=lt._init,lt=ue(lt._payload),mt(rt,$,lt,Lt)}if(Tt(lt)||pt(lt))return ue!==null?null:bt(rt,$,lt,Lt,null);if(typeof lt.then=="function")return mt(rt,$,qc(lt),Lt);if(lt.$$typeof===z)return mt(rt,$,wc(rt,lt),Lt);ro(rt,lt)}return null}function ht(rt,$,lt,Lt,ue){if(typeof Lt=="string"&&Lt!==""||typeof Lt=="number"||typeof Lt=="bigint")return rt=rt.get(lt)||null,L($,rt,""+Lt,ue);if(typeof Lt=="object"&&Lt!==null){switch(Lt.$$typeof){case E:return rt=rt.get(Lt.key===null?lt:Lt.key)||null,Z($,rt,Lt,ue);case T:return rt=rt.get(Lt.key===null?lt:Lt.key)||null,ft($,rt,Lt,ue);case K:var Ve=Lt._init;return Lt=Ve(Lt._payload),ht(rt,$,lt,Lt,ue)}if(Tt(Lt)||pt(Lt))return rt=rt.get(lt)||null,bt($,rt,Lt,ue,null);if(typeof Lt.then=="function")return ht(rt,$,lt,qc(Lt),ue);if(Lt.$$typeof===z)return ht(rt,$,lt,wc($,Lt),ue);ro($,Lt)}return null}function Me(rt,$,lt,Lt){for(var ue=null,Ve=null,he=$,Te=$=0,Ti=null;he!==null&&Te<lt.length;Te++){he.index>Te?(Ti=he,he=null):Ti=he.sibling;var ln=mt(rt,he,lt[Te],Lt);if(ln===null){he===null&&(he=Ti);break}n&&he&&ln.alternate===null&&i(rt,he),$=v(ln,$,Te),Ve===null?ue=ln:Ve.sibling=ln,Ve=ln,he=Ti}if(Te===lt.length)return a(rt,he),$e&&Zs(rt,Te),ue;if(he===null){for(;Te<lt.length;Te++)he=Ot(rt,lt[Te],Lt),he!==null&&($=v(he,$,Te),Ve===null?ue=he:Ve.sibling=he,Ve=he);return $e&&Zs(rt,Te),ue}for(he=c(he);Te<lt.length;Te++)Ti=ht(he,rt,Te,lt[Te],Lt),Ti!==null&&(n&&Ti.alternate!==null&&he.delete(Ti.key===null?Te:Ti.key),$=v(Ti,$,Te),Ve===null?ue=Ti:Ve.sibling=Ti,Ve=Ti);return n&&he.forEach(function(Ds){return i(rt,Ds)}),$e&&Zs(rt,Te),ue}function Se(rt,$,lt,Lt){if(lt==null)throw Error(r(151));for(var ue=null,Ve=null,he=$,Te=$=0,Ti=null,ln=lt.next();he!==null&&!ln.done;Te++,ln=lt.next()){he.index>Te?(Ti=he,he=null):Ti=he.sibling;var Ds=mt(rt,he,ln.value,Lt);if(Ds===null){he===null&&(he=Ti);break}n&&he&&Ds.alternate===null&&i(rt,he),$=v(Ds,$,Te),Ve===null?ue=Ds:Ve.sibling=Ds,Ve=Ds,he=Ti}if(ln.done)return a(rt,he),$e&&Zs(rt,Te),ue;if(he===null){for(;!ln.done;Te++,ln=lt.next())ln=Ot(rt,ln.value,Lt),ln!==null&&($=v(ln,$,Te),Ve===null?ue=ln:Ve.sibling=ln,Ve=ln);return $e&&Zs(rt,Te),ue}for(he=c(he);!ln.done;Te++,ln=lt.next())ln=ht(he,rt,Te,ln.value,Lt),ln!==null&&(n&&ln.alternate!==null&&he.delete(ln.key===null?Te:ln.key),$=v(ln,$,Te),Ve===null?ue=ln:Ve.sibling=ln,Ve=ln);return n&&he.forEach(function(V0){return i(rt,V0)}),$e&&Zs(rt,Te),ue}function Cn(rt,$,lt,Lt){if(typeof lt=="object"&&lt!==null&&lt.type===R&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case E:t:{for(var ue=lt.key;$!==null;){if($.key===ue){if(ue=lt.type,ue===R){if($.tag===7){a(rt,$.sibling),Lt=d($,lt.props.children),Lt.return=rt,rt=Lt;break t}}else if($.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===K&&ao(ue)===$.type){a(rt,$.sibling),Lt=d($,lt.props),lu(Lt,lt),Lt.return=rt,rt=Lt;break t}a(rt,$);break}else i(rt,$);$=$.sibling}lt.type===R?(Lt=Ys(lt.props.children,rt.mode,Lt,lt.key),Lt.return=rt,rt=Lt):(Lt=Tc(lt.type,lt.key,lt.props,null,rt.mode,Lt),lu(Lt,lt),Lt.return=rt,rt=Lt)}return A(rt);case T:t:{for(ue=lt.key;$!==null;){if($.key===ue)if($.tag===4&&$.stateNode.containerInfo===lt.containerInfo&&$.stateNode.implementation===lt.implementation){a(rt,$.sibling),Lt=d($,lt.children||[]),Lt.return=rt,rt=Lt;break t}else{a(rt,$);break}else i(rt,$);$=$.sibling}Lt=Go(lt,rt.mode,Lt),Lt.return=rt,rt=Lt}return A(rt);case K:return ue=lt._init,lt=ue(lt._payload),Cn(rt,$,lt,Lt)}if(Tt(lt))return Me(rt,$,lt,Lt);if(pt(lt)){if(ue=pt(lt),typeof ue!="function")throw Error(r(150));return lt=ue.call(lt),Se(rt,$,lt,Lt)}if(typeof lt.then=="function")return Cn(rt,$,qc(lt),Lt);if(lt.$$typeof===z)return Cn(rt,$,wc(rt,lt),Lt);ro(rt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,$!==null&&$.tag===6?(a(rt,$.sibling),Lt=d($,lt),Lt.return=rt,rt=Lt):(a(rt,$),Lt=Nh(lt,rt.mode,Lt),Lt.return=rt,rt=Lt),A(rt)):a(rt,$)}return function(rt,$,lt,Lt){try{nr=0;var ue=Cn(rt,$,lt,Lt);return hi=null,ue}catch(he){if(he===Hi||he===Cc)throw he;var Ve=Qi(29,he,null,rt.mode);return Ve.lanes=Lt,Ve.return=rt,Ve}finally{}}}var so=od(!0),Am=od(!1),vr=ut(null),Gi=null;function zr(n){var i=n.alternate;Vt(Jn,Jn.current&1),Vt(vr,n),Gi===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Gi=n)}function wm(n){if(n.tag===22){if(Vt(Jn,Jn.current),Vt(vr,n),Gi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Gi=n)}}else Ia()}function Ia(){Vt(Jn,Jn.current),Vt(vr,vr.current)}function fa(n){Ft(vr),Gi===n&&(Gi=null),Ft(Jn)}var Jn=ut(0);function uu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wi(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Qo(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:x({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cu={enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ii(),d=fs(c);d.payload=i,a!=null&&(d.callback=a),i=La(n,d,c),i!==null&&(Sr(i,n,c),Zl(i,n,c))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ii(),d=fs(c);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=La(n,d,c),i!==null&&(Sr(i,n,c),Zl(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ii(),c=fs(a);c.tag=2,i!=null&&(c.callback=i),i=La(n,c,a),i!==null&&(Sr(i,n,a),Zl(i,n,a))}};function fu(n,i,a,c,d,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,A):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(d,v):!0}function Rm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cu.enqueueReplaceState(i,i.state,null)}function ms(n,i){var a=i;if("ref"in i){a={};for(var c in i)c!=="ref"&&(a[c]=i[c])}if(n=n.defaultProps){a===i&&(a=x({},a));for(var d in n)a[d]===void 0&&(a[d]=n[d])}return a}var oo=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ld(n){oo(n)}function Yc(n){console.error(n)}function Cm(n){oo(n)}function hu(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function ha(n,i,a){try{var c=n.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Zc(n,i,a){return a=fs(a),a.tag=3,a.payload={element:null},a.callback=function(){hu(n,i)},a}function ud(n){return n=fs(n),n.tag=3,n}function Dm(n,i,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var v=c.value;n.payload=function(){return d(v)},n.callback=function(){ha(i,a,c)}}var A=a.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(n.callback=function(){ha(i,a,c),typeof d!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var L=c.stack;this.componentDidCatch(c.value,{componentStack:L!==null?L:""})})}function Lm(n,i,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=a.alternate,i!==null&&Xl(i,a,d,!0),a=vr.current,a!==null){switch(a.tag){case 13:return Gi===null?Rd():a.alternate===null&&$n===0&&($n=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Bh?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([c]):i.add(c),Ld(n,c,d)),!1;case 22:return a.flags|=65536,c===Bh?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([c]):a.add(c)),Ld(n,c,d)),!1}throw Error(r(435,a.tag))}return Ld(n,c,d),Rd(),!1}if($e)return i=vr.current,i!==null?(!(i.flags&65536)&&(i.flags|=256),i.flags|=65536,i.lanes=d,c!==Vo&&(n=Error(r(422),{cause:c}),us(Bi(n,a)))):(c!==Vo&&(i=Error(r(423),{cause:c}),us(Bi(i,a))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,c=Bi(c,a),d=Zc(n.stateNode,c,d),Zr(n,d),$n!==4&&($n=2)),!1;var v=Error(r(520),{cause:c});if(v=Bi(v,a),Eu===null?Eu=[v]:Eu.push(v),$n!==4&&($n=2),i===null)return!0;c=Bi(c,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=d&-d,a.lanes|=n,n=Zc(a.stateNode,c,n),Zr(a,n),!1;case 1:if(i=a.type,v=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ss===null||!Ss.has(v))))return a.flags|=65536,d&=-d,a.lanes|=d,d=ud(d),Dm(d,n,a,c),Zr(a,d),!1}a=a.return}while(a!==null);return!1}var Um=Error(r(461)),Si=!1;function Hn(n,i,a,c){i.child=n===null?Am(i,null,a,c):so(i,n.child,a,c)}function Kc(n,i,a,c,d){a=a.render;var v=i.ref;if("ref"in c){var A={};for(var L in c)L!=="ref"&&(A[L]=c[L])}else A=c;return Qs(i),c=Vh(n,i,a,A,v,d),L=kh(),n!==null&&!Si?(eo(n,i,d),Pa(n,i,d)):($e&&L&&Ih(i),i.flags|=1,Hn(n,i,c,d),i.child)}function Qc(n,i,a,c,d){if(n===null){var v=a.type;return typeof v=="function"&&!qs(v)&&v.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=v,jc(n,i,v,c,d)):(n=Tc(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,!jr(n,d)){var A=v.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(A,c)&&n.ref===i.ref)return Pa(n,i,d)}return i.flags|=1,n=Fi(v,c),n.ref=i.ref,n.return=i,i.child=n}function jc(n,i,a,c,d){if(n!==null){var v=n.memoizedProps;if(la(v,c)&&n.ref===i.ref)if(Si=!1,i.pendingProps=c=v,jr(n,d))n.flags&131072&&(Si=!0);else return i.lanes=n.lanes,Pa(n,i,d)}return jo(n,i,a,c,d)}function du(n,i,a){var c=i.pendingProps,d=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if(i.flags&128){if(c=v!==null?v.baseLanes|a:a,n!==null){for(d=i.child=n.child,v=0;d!==null;)v=v|d.lanes|d.childLanes,d=d.sibling;i.childLanes=v&~c}else i.childLanes=0,i.child=null;return lo(n,i,c,a)}if(a&536870912)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Rc(i,v!==null?v.cachePool:null),v!==null?Ua(i,v):Lc(),wm(i);else return i.lanes=i.childLanes=536870912,lo(n,i,v!==null?v.baseLanes|a:a,a)}else v!==null?(Rc(i,v.cachePool),Ua(i,v),Ia(),i.memoizedState=null):(n!==null&&Rc(i,null),Lc(),Ia());return Hn(n,i,d,a),i.child}function lo(n,i,a,c){var d=Da();return d=d===null?null:{parent:Dn._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},n!==null&&Rc(i,null),Lc(),wm(i),n!==null&&Xl(n,i,c,!0),null}function _e(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function jo(n,i,a,c,d){return Qs(i),a=Vh(n,i,a,c,void 0,d),c=kh(),n!==null&&!Si?(eo(n,i,d),Pa(n,i,d)):($e&&c&&Ih(i),i.flags|=1,Hn(n,i,a,d),i.child)}function Jc(n,i,a,c,d,v){return Qs(i),i.updateQueue=null,a=dm(i,c,a,d),hm(n),c=kh(),n!==null&&!Si?(eo(n,i,v),Pa(n,i,v)):($e&&c&&Ih(i),i.flags|=1,Hn(n,i,a,v),i.child)}function gs(n,i,a,c,d){if(Qs(i),i.stateNode===null){var v=Xs,A=a.contextType;typeof A=="object"&&A!==null&&(v=jn(A)),v=new a(c,v),i.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,v.updater=cu,i.stateNode=v,v._reactInternals=i,v=i.stateNode,v.props=c,v.state=i.memoizedState,v.refs={},Js(i),A=a.contextType,v.context=typeof A=="object"&&A!==null?jn(A):Xs,v.state=i.memoizedState,A=a.getDerivedStateFromProps,typeof A=="function"&&(Qo(i,a,A,c),v.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(A=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),A!==v.state&&cu.enqueueReplaceState(v,v.state,null),Ui(i,c,v,d),Kr(),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){v=i.stateNode;var L=i.memoizedProps,Z=ms(a,L);v.props=Z;var ft=v.context,bt=a.contextType;A=Xs,typeof bt=="object"&&bt!==null&&(A=jn(bt));var Ot=a.getDerivedStateFromProps;bt=typeof Ot=="function"||typeof v.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,bt||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(L||ft!==A)&&Rm(i,v,c,A),ua=!1;var mt=i.memoizedState;v.state=mt,Ui(i,c,v,d),Kr(),ft=i.memoizedState,L||mt!==ft||ua?(typeof Ot=="function"&&(Qo(i,a,Ot,c),ft=i.memoizedState),(Z=ua||fu(i,a,Z,c,mt,ft,A))?(bt||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=ft),v.props=c,v.state=ft,v.context=A,c=Z):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Xo(n,i),A=i.memoizedProps,bt=ms(a,A),v.props=bt,Ot=i.pendingProps,mt=v.context,ft=a.contextType,Z=Xs,typeof ft=="object"&&ft!==null&&(Z=jn(ft)),L=a.getDerivedStateFromProps,(ft=typeof L=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Ot||mt!==Z)&&Rm(i,v,c,Z),ua=!1,mt=i.memoizedState,v.state=mt,Ui(i,c,v,d),Kr();var ht=i.memoizedState;A!==Ot||mt!==ht||ua||n!==null&&n.dependencies!==null&&Ac(n.dependencies)?(typeof L=="function"&&(Qo(i,a,L,c),ht=i.memoizedState),(bt=ua||fu(i,a,bt,c,mt,ht,Z)||n!==null&&n.dependencies!==null&&Ac(n.dependencies))?(ft||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ht,Z),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ht,Z)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&mt===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&mt===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ht),v.props=c,v.state=ht,v.context=Z,c=bt):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&mt===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&mt===n.memoizedState||(i.flags|=1024),c=!1)}return v=c,_e(n,i),c=(i.flags&128)!==0,v||c?(v=i.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:v.render(),i.flags|=1,n!==null&&c?(i.child=so(i,n.child,null,d),i.child=so(i,null,a,d)):Hn(n,i,a,d),i.memoizedState=v.state,n=i.child):n=Pa(n,i,d),n}function Nm(n,i,a,c){return kl(),i.flags|=256,Hn(n,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(n){return{baseLanes:n,cachePool:am()}}function Ei(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Fr),n}function Om(n,i,a){var c=i.pendingProps,d=!1,v=(i.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(Jn.current&2)!==0),A&&(d=!0,i.flags&=-129),A=(i.flags&32)!==0,i.flags&=-33,n===null){if($e){if(d?zr(i):Ia(),$e){var L=Xn,Z;if(Z=L){t:{for(Z=L,L=ji;Z.nodeType!==8;){if(!L){L=null;break t}if(Z=$r(Z.nextSibling),Z===null){L=null;break t}}L=Z}L!==null?(i.memoizedState={dehydrated:L,treeContext:Fn!==null?{id:kn,overflow:Ca}:null,retryLane:536870912,hydrationErrors:null},Z=Qi(18,null,null,0),Z.stateNode=L,Z.return=i,i.child=Z,fi=i,Xn=null,Z=!0):Z=!1}Z||Or(i)}if(L=i.memoizedState,L!==null&&(L=L.dehydrated,L!==null))return Wi(L)?i.lanes=32:i.lanes=536870912,null;fa(i)}return L=c.children,c=c.fallback,d?(Ia(),d=i.mode,L=mu({mode:"hidden",children:L},d),c=Ys(c,d,a,null),L.return=i,c.return=i,L.sibling=c,i.child=L,d=i.child,d.memoizedState=$c(a),d.childLanes=Ei(n,A,a),i.memoizedState=pu,c):(zr(i),cd(i,L))}if(Z=n.memoizedState,Z!==null&&(L=Z.dehydrated,L!==null)){if(v)i.flags&256?(zr(i),i.flags&=-257,i=fd(n,i,a)):i.memoizedState!==null?(Ia(),i.child=n.child,i.flags|=128,i=null):(Ia(),d=c.fallback,L=i.mode,c=mu({mode:"visible",children:c.children},L),d=Ys(d,L,a,null),d.flags|=2,c.return=i,d.return=i,c.sibling=d,i.child=c,so(i,n.child,null,a),c=i.child,c.memoizedState=$c(a),c.childLanes=Ei(n,A,a),i.memoizedState=pu,i=d);else if(zr(i),Wi(L)){if(A=L.nextSibling&&L.nextSibling.dataset,A)var ft=A.dgst;A=ft,c=Error(r(419)),c.stack="",c.digest=A,us({value:c,source:null,stack:null}),i=fd(n,i,a)}else if(Si||Xl(n,i,a,!1),A=(a&n.childLanes)!==0,Si||A){if(A=Pn,A!==null&&(c=a&-a,c=c&42?1:On(c),c=c&(A.suspendedLanes|a)?0:c,c!==0&&c!==Z.retryLane))throw Z.retryLane=c,ks(n,c),Sr(A,n,c),Um;L.data==="$?"||Rd(),i=fd(n,i,a)}else L.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=Z.treeContext,Xn=$r(L.nextSibling),fi=i,$e=!0,Yr=null,ji=!1,n!==null&&(Ur[Nr++]=kn,Ur[Nr++]=Ca,Ur[Nr++]=Fn,kn=n.id,Ca=n.overflow,Fn=i),i=cd(i,c.children),i.flags|=4096);return i}return d?(Ia(),d=c.fallback,L=i.mode,Z=n.child,ft=Z.sibling,c=Fi(Z,{mode:"hidden",children:c.children}),c.subtreeFlags=Z.subtreeFlags&65011712,ft!==null?d=Fi(ft,d):(d=Ys(d,L,a,null),d.flags|=2),d.return=i,c.return=i,c.sibling=d,i.child=c,c=d,d=i.child,L=n.child.memoizedState,L===null?L=$c(a):(Z=L.cachePool,Z!==null?(ft=Dn._currentValue,Z=Z.parent!==ft?{parent:ft,pool:ft}:Z):Z=am(),L={baseLanes:L.baseLanes|a,cachePool:Z}),d.memoizedState=L,d.childLanes=Ei(n,A,a),i.memoizedState=pu,c):(zr(i),a=n.child,n=a.sibling,a=Fi(a,{mode:"visible",children:c.children}),a.return=i,a.sibling=null,n!==null&&(A=i.deletions,A===null?(i.deletions=[n],i.flags|=16):A.push(n)),i.child=a,i.memoizedState=null,a)}function cd(n,i){return i=mu({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function mu(n,i){return n=Qi(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function fd(n,i,a){return so(i,n.child,null,a),n=cd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function hd(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ji(n.return,i,a)}function dd(n,i,a,c,d){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=d)}function Im(n,i,a){var c=i.pendingProps,d=c.revealOrder,v=c.tail;if(Hn(n,i,c.children,a),c=Jn.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hd(n,a,i);else if(n.tag===19)hd(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(Vt(Jn,c),d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&uu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),dd(i,!1,d,a,v);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&uu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dd(i,!0,a,null,v);break;case"together":dd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Pa(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ys|=i.lanes,!(a&i.childLanes))if(n!==null){if(Xl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,a=Fi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function jr(n,i){return n.lanes&i?!0:(n=n.dependencies,!!(n!==null&&Ac(n)))}function Vi(n,i,a){switch(i.tag){case 3:Kt(i,i.stateNode.containerInfo),gr(i,Dn,n.memoizedState.cache),kl();break;case 27:case 5:Ee(i);break;case 4:Kt(i,i.stateNode.containerInfo);break;case 10:gr(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(zr(i),i.flags|=128,null):a&i.child.childLanes?Om(n,i,a):(zr(i),n=Pa(n,i,a),n!==null?n.sibling:null);zr(i);break;case 19:var d=(n.flags&128)!==0;if(c=(a&i.childLanes)!==0,c||(Xl(n,i,a,!1),c=(a&i.childLanes)!==0),d){if(c)return Im(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt(Jn,Jn.current),c)break;return null;case 22:case 23:return i.lanes=0,du(n,i,a);case 24:gr(i,Dn,n.memoizedState.cache)}return Pa(n,i,a)}function tf(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)Si=!0;else{if(!jr(n,a)&&!(i.flags&128))return Si=!1,Vi(n,i,a);Si=!!(n.flags&131072)}else Si=!1,$e&&i.flags&1048576&&Oh(i,Gl,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var c=i.elementType,d=c._init;if(c=d(c._payload),i.type=c,typeof c=="function")qs(c)?(n=ms(c,n),i.tag=1,i=gs(null,i,c,n,a)):(i.tag=0,i=jo(null,i,c,n,a));else{if(c!=null){if(d=c.$$typeof,d===N){i.tag=11,i=Kc(null,i,c,n,a);break t}else if(d===k){i.tag=14,i=Qc(null,i,c,n,a);break t}}throw i=At(c)||c,Error(r(306,i,""))}}return i;case 0:return jo(n,i,i.type,i.pendingProps,a);case 1:return c=i.type,d=ms(c,i.pendingProps),gs(n,i,c,d,a);case 3:t:{if(Kt(i,i.stateNode.containerInfo),n===null)throw Error(r(387));c=i.pendingProps;var v=i.memoizedState;d=v.element,Xo(n,i),Ui(i,c,null,a);var A=i.memoizedState;if(c=A.cache,gr(i,Dn,c),c!==v.cache&&Ge(i,[Dn],a,!0),Kr(),c=A.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:A.cache},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){i=Nm(n,i,c,a);break t}else if(c!==d){d=Bi(Error(r(424)),i),us(d),i=Nm(n,i,c,a);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Xn=$r(n.firstChild),fi=i,$e=!0,Yr=null,ji=!0,a=Am(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(kl(),c===d){i=Pa(n,i,a);break t}Hn(n,i,c,a)}i=i.child}return i;case 26:return _e(n,i),n===null?(a=Lg(i.type,null,i.pendingProps,null))?i.memoizedState=a:$e||(a=i.type,n=i.pendingProps,c=fo(Bt.current).createElement(a),c[ni]=i,c[wi]=n,mi(c,a,n),ri(c),i.stateNode=c):i.memoizedState=Lg(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Ee(i),n===null&&$e&&(c=i.stateNode=Rg(i.type,i.pendingProps,Bt.current),fi=i,ji=!0,d=Xn,Hr(i.type)?(Hd=d,Xn=$r(c.firstChild)):Xn=d),Hn(n,i,i.pendingProps.children,a),_e(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&$e&&((d=c=Xn)&&(c=Ag(c,i.type,i.pendingProps,ji),c!==null?(i.stateNode=c,fi=i,Xn=$r(c.firstChild),ji=!1,d=!0):d=!1),d||Or(i)),Ee(i),d=i.type,v=i.pendingProps,A=n!==null?n.memoizedProps:null,c=v.children,vf(d,v)?c=null:A!==null&&vf(d,A)&&(i.flags|=32),i.memoizedState!==null&&(d=Vh(n,i,Wh,null,null,a),gl._currentValue=d),_e(n,i),Hn(n,i,c,a),i.child;case 6:return n===null&&$e&&((n=a=Xn)&&(a=yf(a,i.pendingProps,ji),a!==null?(i.stateNode=a,fi=i,Xn=null,n=!0):n=!1),n||Or(i)),null;case 13:return Om(n,i,a);case 4:return Kt(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=so(i,null,c,a):Hn(n,i,c,a),i.child;case 11:return Kc(n,i,i.type,i.pendingProps,a);case 7:return Hn(n,i,i.pendingProps,a),i.child;case 8:return Hn(n,i,i.pendingProps.children,a),i.child;case 12:return Hn(n,i,i.pendingProps.children,a),i.child;case 10:return c=i.pendingProps,gr(i,i.type,c.value),Hn(n,i,c.children,a),i.child;case 9:return d=i.type._context,c=i.pendingProps.children,Qs(i),d=jn(d),c=c(d),i.flags|=1,Hn(n,i,c,a),i.child;case 14:return Qc(n,i,i.type,i.pendingProps,a);case 15:return jc(n,i,i.type,i.pendingProps,a);case 19:return Im(n,i,a);case 31:return c=i.pendingProps,a=i.mode,c={mode:c.mode,children:c.children},n===null?(a=mu(c,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Fi(n.child,c),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return du(n,i,a);case 24:return Qs(i),c=jn(Dn),n===null?(d=Da(),d===null&&(d=Pn,v=Ph(),d.pooledCache=v,v.refCount++,v!==null&&(d.pooledCacheLanes|=a),d=v),i.memoizedState={parent:c,cache:d},Js(i),gr(i,Dn,d)):(n.lanes&a&&(Xo(n,i),Ui(i,null,null,a),Kr()),d=n.memoizedState,v=i.memoizedState,d.parent!==c?(d={parent:c,cache:c},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),gr(i,Dn,c)):(c=v.cache,gr(i,Dn,c),c!==d.cache&&Ge(i,[Dn],a,!0))),Hn(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function za(n){n.flags|=4}function ef(n,i){if(i.type!=="stylesheet"||i.state.loading&4)n.flags&=-16777217;else if(n.flags|=16777216,!gi(i)){if(i=vr.current,i!==null&&((an&4194048)===an?Gi!==null:(an&62914560)!==an&&!(an&536870912)||i!==Gi))throw ko=Bh,sm;n.flags|=8192}}function nf(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?$t():536870912,n.lanes|=i,rl|=i)}function gu(n,i){if(!$e)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Pm(n,i,a){var c=i.pendingProps;switch(Vl(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(i),null;case 1:return Ln(i),null;case 3:return a=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Ir(Dn),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Wl(i)?za(i):n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,em())),Ln(i),null;case 26:return a=i.memoizedState,n===null?(za(i),a!==null?(Ln(i),ef(i,a)):(Ln(i),i.flags&=-16777217)):a?a!==n.memoizedState?(za(i),Ln(i),ef(i,a)):(Ln(i),i.flags&=-16777217):(n.memoizedProps!==c&&za(i),Ln(i),i.flags&=-16777217),null;case 27:xn(i),a=Bt.current;var d=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return Ln(i),null}n=ct.current,Wl(i)?$p(i):(n=Rg(d,c,a),i.stateNode=n,za(i))}return Ln(i),null;case 5:if(xn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return Ln(i),null}if(n=ct.current,Wl(i))$p(i);else{switch(d=fo(Bt.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}n[ni]=i,n[wi]=c;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=n;t:switch(mi(n,a,c),a){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&za(i)}}return Ln(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&za(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(n=Bt.current,Wl(i)){if(n=i.stateNode,a=i.memoizedProps,c=null,d=fi,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}n[ni]=i,n=!!(n.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||Eg(n.nodeValue,a)),n||Or(i)}else n=fo(n).createTextNode(c),n[ni]=i,i.stateNode=n}return Ln(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Wl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!d)throw Error(r(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[ni]=i}else kl(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ln(i),d=!1}else d=em(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(fa(i),i):(fa(i),null)}if(fa(i),i.flags&128)return i.lanes=a,i;if(a=c!==null,n=n!==null&&n.memoizedState!==null,a){c=i.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var v=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(v=c.memoizedState.cachePool.pool),v!==d&&(c.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),nf(i,i.updateQueue),Ln(i),null;case 4:return Le(),n===null&&Pd(i.stateNode.containerInfo),Ln(i),null;case 10:return Ir(i.type),Ln(i),null;case 19:if(Ft(Jn),d=i.memoizedState,d===null)return Ln(i),null;if(c=(i.flags&128)!==0,v=d.rendering,v===null)if(c)gu(d,!1);else{if($n!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=uu(n),v!==null){for(i.flags|=128,gu(d,!1),n=v.updateQueue,i.updateQueue=n,nf(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Hl(a,n),a=a.sibling;return Vt(Jn,Jn.current&1|2),i.child}n=n.sibling}d.tail!==null&&ve()>al&&(i.flags|=128,c=!0,gu(d,!1),i.lanes=4194304)}else{if(!c)if(n=uu(v),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,nf(i,n),gu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!v.alternate&&!$e)return Ln(i),null}else 2*ve()-d.renderingStartTime>al&&a!==536870912&&(i.flags|=128,c=!0,gu(d,!1),i.lanes=4194304);d.isBackwards?(v.sibling=i.child,i.child=v):(n=d.last,n!==null?n.sibling=v:i.child=v,d.last=v)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=ve(),i.sibling=null,n=Jn.current,Vt(Jn,c?n&1|2:n&1),i):(Ln(i),null);case 22:case 23:return fa(i),Gh(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?a&536870912&&!(i.flags&128)&&(Ln(i),i.subtreeFlags&6&&(i.flags|=8192)):Ln(i),a=i.updateQueue,a!==null&&nf(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==a&&(i.flags|=2048),n!==null&&Ft(js),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ir(Dn),Ln(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function zm(n,i){switch(Vl(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ir(Dn),Le(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return xn(i),null;case 13:if(fa(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));kl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Jn),null;case 4:return Le(),null;case 10:return Ir(i.type),null;case 22:case 23:return fa(i),Gh(),n!==null&&Ft(js),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Ir(Dn),null;case 25:return null;default:return null}}function Bm(n,i){switch(Vl(i),i.tag){case 3:Ir(Dn),Le();break;case 26:case 27:case 5:xn(i);break;case 4:Le();break;case 13:fa(i);break;case 19:Ft(Jn);break;case 10:Ir(i.type);break;case 22:case 23:fa(i),Gh(),n!==null&&Ft(js);break;case 24:Ir(Dn)}}function _u(n,i){try{var a=i.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&n)===n){c=void 0;var v=a.create,A=a.inst;c=v(),A.destroy=c}a=a.next}while(a!==d)}}catch(L){Un(i,i.return,L)}}function _s(n,i,a){try{var c=i.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var v=d.next;c=v;do{if((c.tag&n)===n){var A=c.inst,L=A.destroy;if(L!==void 0){A.destroy=void 0,d=i;var Z=a,ft=L;try{ft()}catch(bt){Un(d,Z,bt)}}}c=c.next}while(c!==v)}}catch(bt){Un(i,i.return,bt)}}function Fm(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Hh(i,a)}catch(c){Un(n,n.return,c)}}}function pd(n,i,a){a.props=ms(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(c){Un(n,i,c)}}function Jo(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof a=="function"?n.refCleanup=a(c):a.current=c}}catch(d){Un(n,i,d)}}function da(n,i){var a=n.ref,c=n.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){Un(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){Un(n,i,d)}else a.current=null}function rf(n){var i=n.type,a=n.memoizedProps,c=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break t;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){Un(n,n.return,d)}}function af(n,i,a){try{var c=n.stateNode;S0(c,n.type,a,i),c[wi]=i}catch(d){Un(n,n.return,d)}}function $o(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Hr(n.type)||n.tag===4}function vu(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||$o(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Hr(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sf(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=gf));else if(c!==4&&(c===27&&Hr(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(sf(n,i,a),n=n.sibling;n!==null;)sf(n,i,a),n=n.sibling}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(c===27&&Hr(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}function yu(n){var i=n.stateNode,a=n.memoizedProps;try{for(var c=n.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);mi(i,c,a),i[ni]=n,i[wi]=a}catch(v){Un(n,n.return,v)}}var pa=!1,_n=!1,Ba=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,di=null;function o0(n,i){if(n=n.containerInfo,Jr=Tf,n=jp(n),Dh(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else t:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break t}var A=0,L=-1,Z=-1,ft=0,bt=0,Ot=n,mt=null;e:for(;;){for(var ht;Ot!==a||d!==0&&Ot.nodeType!==3||(L=A+d),Ot!==v||c!==0&&Ot.nodeType!==3||(Z=A+c),Ot.nodeType===3&&(A+=Ot.nodeValue.length),(ht=Ot.firstChild)!==null;)mt=Ot,Ot=ht;for(;;){if(Ot===n)break e;if(mt===a&&++ft===d&&(L=A),mt===v&&++bt===c&&(Z=A),(ht=Ot.nextSibling)!==null)break;Ot=mt,mt=Ot.parentNode}Ot=ht}a=L===-1||Z===-1?null:{start:L,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:n,selectionRange:a},Tf=!1,di=i;di!==null;)if(i=di,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,di=n;else for(;di!==null;){switch(i=di,v=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if(n&1024&&v!==null){n=void 0,a=i,d=v.memoizedProps,v=v.memoizedState,c=a.stateNode;try{var Me=ms(a.type,d,a.elementType===a.type);n=c.getSnapshotBeforeUpdate(Me,v),c.__reactInternalSnapshotBeforeUpdate=n}catch(Se){Un(a,a.return,Se)}}break;case 3:if(n&1024){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Fd(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Fd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(n&1024)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,di=n;break}di=i.return}}function Gm(n,i,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:vs(n,a),c&4&&_u(5,a);break;case 1:if(vs(n,a),c&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(A){Un(a,a.return,A)}else{var d=ms(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(A){Un(a,a.return,A)}}c&64&&Fm(a),c&512&&Jo(a,a.return);break;case 3:if(vs(n,a),c&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Hh(n,i)}catch(A){Un(a,a.return,A)}}break;case 27:i===null&&c&4&&yu(a);case 26:case 5:vs(n,a),i===null&&c&4&&rf(a),c&512&&Jo(a,a.return);break;case 12:vs(n,a);break;case 13:vs(n,a),c&4&&km(n,a),c&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=ff.bind(null,a),fl(n,a))));break;case 22:if(c=a.memoizedState!==null||pa,!c){i=i!==null&&i.memoizedState!==null||_n,d=pa;var v=_n;pa=c,(_n=i)&&!v?Ha(n,a,(a.subtreeFlags&8772)!==0):vs(n,a),pa=d,_n=v}break;case 30:break;default:vs(n,a)}}function Vm(n){var i=n.alternate;i!==null&&(n.alternate=null,Vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&$a(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var qn=null,ir=!1;function Fa(n,i,a){for(a=a.child;a!==null;)Wm(n,i,a),a=a.sibling}function Wm(n,i,a){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:_n||da(a,i),Fa(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||da(a,i);var c=qn,d=ir;Hr(a.type)&&(qn=a.stateNode,ir=!1),Fa(n,i,a),Lu(a.stateNode),qn=c,ir=d;break;case 5:_n||da(a,i);case 6:if(c=qn,d=ir,qn=null,Fa(n,i,a),qn=c,ir=d,qn!==null)if(ir)try{(qn.nodeType===9?qn.body:qn.nodeName==="HTML"?qn.ownerDocument.body:qn).removeChild(a.stateNode)}catch(v){Un(a,i,v)}else try{qn.removeChild(a.stateNode)}catch(v){Un(a,i,v)}break;case 18:qn!==null&&(ir?(n=qn,xf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Fu(n)):xf(qn,a.stateNode));break;case 4:c=qn,d=ir,qn=a.stateNode.containerInfo,ir=!0,Fa(n,i,a),qn=c,ir=d;break;case 0:case 11:case 14:case 15:_n||_s(2,a,i),_n||_s(4,a,i),Fa(n,i,a);break;case 1:_n||(da(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"&&pd(a,i,c)),Fa(n,i,a);break;case 21:Fa(n,i,a);break;case 22:_n=(c=_n)||a.memoizedState!==null,Fa(n,i,a),_n=c;break;default:Fa(n,i,a)}}function km(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Fu(n)}catch(a){Un(i,i.return,a)}}function l0(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Hm),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Hm),i;default:throw Error(r(435,n.tag))}}function md(n,i){var a=l0(n);i.forEach(function(c){var d=p0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}function xr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],v=n,A=i,L=A;t:for(;L!==null;){switch(L.tag){case 27:if(Hr(L.type)){qn=L.stateNode,ir=!1;break t}break;case 5:qn=L.stateNode,ir=!1;break t;case 3:case 4:qn=L.stateNode.containerInfo,ir=!0;break t}L=L.return}if(qn===null)throw Error(r(160));Wm(v,A,d),qn=null,ir=!1,v=d.alternate,v!==null&&(v.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)gd(i,n),i=i.sibling}var Br=null;function gd(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:xr(i,n),rr(n),c&4&&(_s(3,n,n.return),_u(3,n),_s(5,n,n.return));break;case 1:xr(i,n),rr(n),c&512&&(_n||a===null||da(a,a.return)),c&64&&pa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=Br;if(xr(i,n),rr(n),c&512&&(_n||a===null||da(a,a.return)),c&4){var v=a!==null?a.memoizedState:null;if(c=n.memoizedState,a===null)if(c===null)if(n.stateNode===null){t:{c=n.type,a=n.memoizedProps,d=d.ownerDocument||d;e:switch(c){case"title":v=d.getElementsByTagName("title")[0],(!v||v[Ja]||v[ni]||v.namespaceURI==="http://www.w3.org/2000/svg"||v.hasAttribute("itemprop"))&&(v=d.createElement(c),d.head.insertBefore(v,d.querySelector("head > title"))),mi(v,c,a),v[ni]=n,ri(v),c=v;break t;case"link":var A=Og("link","href",d).get(c+(a.href||""));if(A){for(var L=0;L<A.length;L++)if(v=A[L],v.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&v.getAttribute("rel")===(a.rel==null?null:a.rel)&&v.getAttribute("title")===(a.title==null?null:a.title)&&v.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){A.splice(L,1);break e}}v=d.createElement(c),mi(v,c,a),d.head.appendChild(v);break;case"meta":if(A=Og("meta","content",d).get(c+(a.content||""))){for(L=0;L<A.length;L++)if(v=A[L],v.getAttribute("content")===(a.content==null?null:""+a.content)&&v.getAttribute("name")===(a.name==null?null:a.name)&&v.getAttribute("property")===(a.property==null?null:a.property)&&v.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&v.getAttribute("charset")===(a.charSet==null?null:a.charSet)){A.splice(L,1);break e}}v=d.createElement(c),mi(v,c,a),d.head.appendChild(v);break;default:throw Error(r(468,c))}v[ni]=n,ri(v),c=v}n.stateNode=c}else Ig(d,n.type,n.stateNode);else n.stateNode=Ng(d,c,n.memoizedProps);else v!==c?(v===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):v.count--,c===null?Ig(d,n.type,n.stateNode):Ng(d,c,n.memoizedProps)):c===null&&n.stateNode!==null&&af(n,n.memoizedProps,a.memoizedProps)}break;case 27:xr(i,n),rr(n),c&512&&(_n||a===null||da(a,a.return)),a!==null&&c&4&&af(n,n.memoizedProps,a.memoizedProps);break;case 5:if(xr(i,n),rr(n),c&512&&(_n||a===null||da(a,a.return)),n.flags&32){d=n.stateNode;try{wr(d,"")}catch(ht){Un(n,n.return,ht)}}c&4&&n.stateNode!=null&&(d=n.memoizedProps,af(n,d,a!==null?a.memoizedProps:d)),c&1024&&(Ba=!0);break;case 6:if(xr(i,n),rr(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,a=n.stateNode;try{a.nodeValue=c}catch(ht){Un(n,n.return,ht)}}break;case 3:if(ml=null,d=Br,Br=Ne(i.containerInfo),xr(i,n),Br=d,rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fu(i.containerInfo)}catch(ht){Un(n,n.return,ht)}Ba&&(Ba=!1,Xm(n));break;case 4:c=Br,Br=Ne(n.stateNode.containerInfo),xr(i,n),rr(n),Br=c;break;case 12:xr(i,n),rr(n);break;case 13:xr(i,n),rr(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Md=ve()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,md(n,c)));break;case 22:d=n.memoizedState!==null;var Z=a!==null&&a.memoizedState!==null,ft=pa,bt=_n;if(pa=ft||d,_n=bt||Z,xr(i,n),_n=bt,pa=ft,rr(n),c&8192)t:for(i=n.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(a===null||Z||pa||_n||uo(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){Z=a=i;try{if(v=Z.stateNode,d)A=v.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{L=Z.stateNode;var Ot=Z.memoizedProps.style,mt=Ot!=null&&Ot.hasOwnProperty("display")?Ot.display:null;L.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(ht){Un(Z,Z.return,ht)}}}else if(i.tag===6){if(a===null){Z=i;try{Z.stateNode.nodeValue=d?"":Z.memoizedProps}catch(ht){Un(Z,Z.return,ht)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,md(n,a))));break;case 19:xr(i,n),rr(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,md(n,c)));break;case 30:break;case 21:break;default:xr(i,n),rr(n)}}function rr(n){var i=n.flags;if(i&2){try{for(var a,c=n.return;c!==null;){if($o(c)){a=c;break}c=c.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var d=a.stateNode,v=vu(n);xu(n,v,d);break;case 5:var A=a.stateNode;a.flags&32&&(wr(A,""),a.flags&=-33);var L=vu(n);xu(n,L,A);break;case 3:case 4:var Z=a.stateNode.containerInfo,ft=vu(n);sf(n,ft,Z);break;default:throw Error(r(161))}}catch(bt){Un(n,n.return,bt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xm(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Xm(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function vs(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gm(n,i.alternate,i),i=i.sibling}function uo(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:_s(4,i,i.return),uo(i);break;case 1:da(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&pd(i,i.return,a),uo(i);break;case 27:Lu(i.stateNode);case 26:case 5:da(i,i.return),uo(i);break;case 22:i.memoizedState===null&&uo(i);break;case 30:uo(i);break;default:uo(i)}n=n.sibling}}function Ha(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,d=n,v=i,A=v.flags;switch(v.tag){case 0:case 11:case 15:Ha(d,v,a),_u(4,v);break;case 1:if(Ha(d,v,a),c=v,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ft){Un(c,c.return,ft)}if(c=v,d=c.updateQueue,d!==null){var L=c.stateNode;try{var Z=d.shared.hiddenCallbacks;if(Z!==null)for(d.shared.hiddenCallbacks=null,d=0;d<Z.length;d++)cm(Z[d],L)}catch(ft){Un(c,c.return,ft)}}a&&A&64&&Fm(v),Jo(v,v.return);break;case 27:yu(v);case 26:case 5:Ha(d,v,a),a&&c===null&&A&4&&rf(v),Jo(v,v.return);break;case 12:Ha(d,v,a);break;case 13:Ha(d,v,a),a&&A&4&&km(d,v);break;case 22:v.memoizedState===null&&Ha(d,v,a),Jo(v,v.return);break;case 30:break;default:Ha(d,v,a)}i=i.sibling}}function _d(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&ql(a))}function vd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ql(n))}function ma(n,i,a,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qm(n,i,a,c),i=i.sibling}function qm(n,i,a,c){var d=i.flags;switch(i.tag){case 0:case 11:case 15:ma(n,i,a,c),d&2048&&_u(9,i);break;case 1:ma(n,i,a,c);break;case 3:ma(n,i,a,c),d&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ql(n)));break;case 12:if(d&2048){ma(n,i,a,c),n=i.stateNode;try{var v=i.memoizedProps,A=v.id,L=v.onPostCommit;typeof L=="function"&&L(A,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(Z){Un(i,i.return,Z)}}else ma(n,i,a,c);break;case 13:ma(n,i,a,c);break;case 23:break;case 22:v=i.stateNode,A=i.alternate,i.memoizedState!==null?v._visibility&2?ma(n,i,a,c):Su(n,i):v._visibility&2?ma(n,i,a,c):(v._visibility|=2,tl(n,i,a,c,(i.subtreeFlags&10256)!==0)),d&2048&&_d(A,i);break;case 24:ma(n,i,a,c),d&2048&&vd(i.alternate,i);break;default:ma(n,i,a,c)}}function tl(n,i,a,c,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var v=n,A=i,L=a,Z=c,ft=A.flags;switch(A.tag){case 0:case 11:case 15:tl(v,A,L,Z,d),_u(8,A);break;case 23:break;case 22:var bt=A.stateNode;A.memoizedState!==null?bt._visibility&2?tl(v,A,L,Z,d):Su(v,A):(bt._visibility|=2,tl(v,A,L,Z,d)),d&&ft&2048&&_d(A.alternate,A);break;case 24:tl(v,A,L,Z,d),d&&ft&2048&&vd(A.alternate,A);break;default:tl(v,A,L,Z,d)}i=i.sibling}}function Su(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,c=i,d=c.flags;switch(c.tag){case 22:Su(a,c),d&2048&&_d(c.alternate,c);break;case 24:Su(a,c),d&2048&&vd(c.alternate,c);break;default:Su(a,c)}i=i.sibling}}var Oi=8192;function el(n){if(n.subtreeFlags&Oi)for(n=n.child;n!==null;)Ym(n),n=n.sibling}function Ym(n){switch(n.tag){case 26:el(n),n.flags&Oi&&n.memoizedState!==null&&N0(Br,n.memoizedState,n.memoizedProps);break;case 5:el(n);break;case 3:case 4:var i=Br;Br=Ne(n.stateNode.containerInfo),el(n),Br=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Oi,Oi=16777216,el(n),Oi=i):el(n));break;default:el(n)}}function Zm(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function nl(n){var i=n.deletions;if(n.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];di=c,Qm(c,n)}Zm(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Km(n),n=n.sibling}function Km(n){switch(n.tag){case 0:case 11:case 15:nl(n),n.flags&2048&&_s(9,n,n.return);break;case 3:nl(n);break;case 12:nl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,of(n)):nl(n);break;default:nl(n)}}function of(n){var i=n.deletions;if(n.flags&16){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];di=c,Qm(c,n)}Zm(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:_s(8,i,i.return),of(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,of(i));break;default:of(i)}n=n.sibling}}function Qm(n,i){for(;di!==null;){var a=di;switch(a.tag){case 0:case 11:case 15:_s(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ql(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,di=c;else t:for(a=n;di!==null;){c=di;var d=c.sibling,v=c.return;if(Vm(c),c===a){di=null;break t}if(d!==null){d.return=v,di=d;break t}di=v}}}var u0={getCacheForType:function(n){var i=jn(Dn),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},xd=typeof WeakMap=="function"?WeakMap:Map,En=0,Pn=null,Ze=null,an=0,Mn=0,yr=null,xs=!1,il=!1,yd=!1,Ga=0,$n=0,ys=0,co=0,Sd=0,Fr=0,rl=0,Eu=null,ar=null,Ed=!1,Md=0,al=1/0,Mu=null,Ss=null,Ri=0,Es=null,sl=null,ol=0,Td=0,bd=null,jm=null,ll=0,Ad=null;function Ii(){if(En&2&&an!==0)return an&-an;if(Y.T!==null){var n=Wo;return n!==0?n:pf()}return cn()}function Jm(){Fr===0&&(Fr=!(an&536870912)||$e?et():536870912);var n=vr.current;return n!==null&&(n.flags|=32),Fr}function Sr(n,i,a){(n===Pn&&(Mn===2||Mn===9)||n.cancelPendingCommit!==null)&&(ul(n,0),Ms(n,an,Fr,!1)),Ut(n,a),(!(En&2)||n!==Pn)&&(n===Pn&&(!(En&2)&&(co|=a),$n===4&&Ms(n,an,Fr,!1)),ga(n))}function $m(n,i,a){if(En&6)throw Error(r(327));var c=!a&&(i&124)===0&&(i&n.expiredLanes)===0||we(n,i),d=c?h0(n,i):Cd(n,i,!0),v=c;do{if(d===0){il&&!c&&Ms(n,i,0,!1);break}else{if(a=n.current.alternate,v&&!c0(a)){d=Cd(n,i,!1),v=!1;continue}if(d===2){if(v=i,n.errorRecoveryDisabledLanes&v)var A=0;else A=n.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){i=A;t:{var L=n;d=Eu;var Z=L.current.memoizedState.isDehydrated;if(Z&&(ul(L,A).flags|=256),A=Cd(L,A,!1),A!==2){if(yd&&!Z){L.errorRecoveryDisabledLanes|=v,co|=v,d=4;break t}v=ar,ar=d,v!==null&&(ar===null?ar=v:ar.push.apply(ar,v))}d=A}if(v=!1,d!==2)continue}}if(d===1){ul(n,0),Ms(n,i,0,!0);break}t:{switch(c=n,v=d,v){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ms(c,i,Fr,!xs);break t;case 2:ar=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(d=Md+300-ve(),10<d)){if(Ms(c,i,Fr,!xs),Oe(c,0,!0)!==0)break t;c.timeoutHandle=Mg(tg.bind(null,c,a,ar,Mu,Ed,i,Fr,co,rl,xs,v,2,-0,0),d);break t}tg(c,a,ar,Mu,Ed,i,Fr,co,rl,xs,v,0,-0,0)}}break}while(!0);ga(n)}function tg(n,i,a,c,d,v,A,L,Z,ft,bt,Ot,mt,ht){if(n.timeoutHandle=-1,Ot=i.subtreeFlags,(Ot&8192||(Ot&16785408)===16785408)&&(Mi={stylesheets:null,count:0,unsuspend:U0},Ym(i),Ot=O0(),Ot!==null)){n.cancelPendingCommit=Ot(Tu.bind(null,n,i,v,a,c,d,A,L,Z,bt,1,mt,ht)),Ms(n,v,A,!ft);return}Tu(n,i,v,a,c,d,A,L,Z)}function c0(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],v=d.getSnapshot;d=d.value;try{if(!pr(v(),d))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ms(n,i,a,c){i&=~Sd,i&=~co,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var d=i;0<d;){var v=31-Zt(d),A=1<<v;c[v]=-1,d&=~A}a!==0&&ne(n,a,i)}function lf(){return En&6?!0:(wu(0),!1)}function wd(){if(Ze!==null){if(Mn===0)var n=Ze.return;else n=Ze,D=cs=null,Uc(n),hi=null,nr=0,n=Ze;for(;n!==null;)Bm(n.alternate,n),n=n.return;Ze=null}}function ul(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,M0(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),wd(),Pn=n,Ze=a=Fi(n.current,null),an=i,Mn=0,yr=null,xs=!1,il=we(n,i),yd=!1,rl=Fr=Sd=co=ys=$n=0,ar=Eu=null,Ed=!1,i&8&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var d=31-Zt(c),v=1<<d;i|=n[d],c&=~v}return Ga=i,Ws(),a}function eg(n,i){ze=null,Y.H=ou,i===Hi||i===Cc?(i=lm(),Mn=3):i===sm?(i=lm(),Mn=4):Mn=i===Um?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yr=i,Ze===null&&($n=1,hu(n,Bi(i,n.current)))}function ng(){var n=Y.H;return Y.H=ou,n===null?ou:n}function ig(){var n=Y.A;return Y.A=u0,n}function Rd(){$n=4,xs||(an&4194048)!==an&&vr.current!==null||(il=!0),!(ys&134217727)&&!(co&134217727)||Pn===null||Ms(Pn,an,Fr,!1)}function Cd(n,i,a){var c=En;En|=2;var d=ng(),v=ig();(Pn!==n||an!==i)&&(Mu=null,ul(n,i)),i=!1;var A=$n;t:do try{if(Mn!==0&&Ze!==null){var L=Ze,Z=yr;switch(Mn){case 8:wd(),A=6;break t;case 3:case 2:case 9:case 6:vr.current===null&&(i=!0);var ft=Mn;if(Mn=0,yr=null,cl(n,L,Z,ft),a&&il){A=0;break t}break;default:ft=Mn,Mn=0,yr=null,cl(n,L,Z,ft)}}f0(),A=$n;break}catch(bt){eg(n,bt)}while(!0);return i&&n.shellSuspendCounter++,D=cs=null,En=c,Y.H=d,Y.A=v,Ze===null&&(Pn=null,an=0,Ws()),A}function f0(){for(;Ze!==null;)Dd(Ze)}function h0(n,i){var a=En;En|=2;var c=ng(),d=ig();Pn!==n||an!==i?(Mu=null,al=ve()+500,ul(n,i)):il=we(n,i);t:do try{if(Mn!==0&&Ze!==null){i=Ze;var v=yr;e:switch(Mn){case 1:Mn=0,yr=null,cl(n,i,v,1);break;case 2:case 9:if(om(v)){Mn=0,yr=null,ag(i);break}i=function(){Mn!==2&&Mn!==9||Pn!==n||(Mn=7),ga(n)},v.then(i,i);break t;case 3:Mn=7;break t;case 4:Mn=5;break t;case 7:om(v)?(Mn=0,yr=null,ag(i)):(Mn=0,yr=null,cl(n,i,v,7));break;case 5:var A=null;switch(Ze.tag){case 26:A=Ze.memoizedState;case 5:case 27:var L=Ze;if(!A||gi(A)){Mn=0,yr=null;var Z=L.sibling;if(Z!==null)Ze=Z;else{var ft=L.return;ft!==null?(Ze=ft,uf(ft)):Ze=null}break e}}Mn=0,yr=null,cl(n,i,v,5);break;case 6:Mn=0,yr=null,cl(n,i,v,6);break;case 8:wd(),$n=6;break t;default:throw Error(r(462))}}rg();break}catch(bt){eg(n,bt)}while(!0);return D=cs=null,Y.H=c,Y.A=d,En=a,Ze!==null?0:(Pn=null,an=0,Ws(),$n)}function rg(){for(;Ze!==null&&!vi();)Dd(Ze)}function Dd(n){var i=tf(n.alternate,n,Ga);n.memoizedProps=n.pendingProps,i===null?uf(n):Ze=i}function ag(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=Jc(a,i,i.pendingProps,i.type,void 0,an);break;case 11:i=Jc(a,i,i.pendingProps,i.type.render,i.ref,an);break;case 5:Uc(i);default:Bm(a,i),i=Ze=Hl(i,Ga),i=tf(a,i,Ga)}n.memoizedProps=n.pendingProps,i===null?uf(n):Ze=i}function cl(n,i,a,c){D=cs=null,Uc(i),hi=null,nr=0;var d=i.return;try{if(Lm(n,d,i,a,an)){$n=1,hu(n,Bi(a,n.current)),Ze=null;return}}catch(v){if(d!==null)throw Ze=d,v;$n=1,hu(n,Bi(a,n.current)),Ze=null;return}i.flags&32768?($e||c===1?n=!0:il||an&536870912?n=!1:(xs=n=!0,(c===2||c===9||c===3||c===6)&&(c=vr.current,c!==null&&c.tag===13&&(c.flags|=16384))),sg(i,n)):uf(i)}function uf(n){var i=n;do{if(i.flags&32768){sg(i,xs);return}n=i.return;var a=Pm(i.alternate,i,Ga);if(a!==null){Ze=a;return}if(i=i.sibling,i!==null){Ze=i;return}Ze=i=n}while(i!==null);$n===0&&($n=5)}function sg(n,i){do{var a=zm(n.alternate,n);if(a!==null){a.flags&=32767,Ze=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Ze=n;return}Ze=n=a}while(n!==null);$n=6,Ze=null}function Tu(n,i,a,c,d,v,A,L,Z){n.cancelPendingCommit=null;do cf();while(Ri!==0);if(En&6)throw Error(r(327));if(i!==null){if(i===n.current)throw Error(r(177));if(v=i.lanes|i.childLanes,v|=Uh,ae(n,a,v,A,L,Z),n===Pn&&(Ze=Pn=null,an=0),sl=i,Es=n,ol=a,Td=v,bd=d,jm=c,i.subtreeFlags&10256||i.flags&10256?(n.callbackNode=null,n.callbackPriority=0,pg(G,function(){return fg(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,i.subtreeFlags&13878||c){c=Y.T,Y.T=null,d=ot.p,ot.p=2,A=En,En|=4;try{o0(n,i,a)}finally{En=A,ot.p=d,Y.T=c}}Ri=1,og(),lg(),ug()}}function og(){if(Ri===1){Ri=0;var n=Es,i=sl,a=(i.flags&13878)!==0;if(i.subtreeFlags&13878||a){a=Y.T,Y.T=null;var c=ot.p;ot.p=2;var d=En;En|=4;try{gd(i,n);var v=_f,A=jp(n.containerInfo),L=v.focusedElem,Z=v.selectionRange;if(A!==L&&L&&L.ownerDocument&&Qp(L.ownerDocument.documentElement,L)){if(Z!==null&&Dh(L)){var ft=Z.start,bt=Z.end;if(bt===void 0&&(bt=ft),"selectionStart"in L)L.selectionStart=ft,L.selectionEnd=Math.min(bt,L.value.length);else{var Ot=L.ownerDocument||document,mt=Ot&&Ot.defaultView||window;if(mt.getSelection){var ht=mt.getSelection(),Me=L.textContent.length,Se=Math.min(Z.start,Me),Cn=Z.end===void 0?Se:Math.min(Z.end,Me);!ht.extend&&Se>Cn&&(A=Cn,Cn=Se,Se=A);var rt=Ch(L,Se),$=Ch(L,Cn);if(rt&&$&&(ht.rangeCount!==1||ht.anchorNode!==rt.node||ht.anchorOffset!==rt.offset||ht.focusNode!==$.node||ht.focusOffset!==$.offset)){var lt=Ot.createRange();lt.setStart(rt.node,rt.offset),ht.removeAllRanges(),Se>Cn?(ht.addRange(lt),ht.extend($.node,$.offset)):(lt.setEnd($.node,$.offset),ht.addRange(lt))}}}}for(Ot=[],ht=L;ht=ht.parentNode;)ht.nodeType===1&&Ot.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Ot.length;L++){var Lt=Ot[L];Lt.element.scrollLeft=Lt.left,Lt.element.scrollTop=Lt.top}}Tf=!!Jr,_f=Jr=null}finally{En=d,ot.p=c,Y.T=a}}n.current=i,Ri=2}}function lg(){if(Ri===2){Ri=0;var n=Es,i=sl,a=(i.flags&8772)!==0;if(i.subtreeFlags&8772||a){a=Y.T,Y.T=null;var c=ot.p;ot.p=2;var d=En;En|=4;try{Gm(n,i.alternate,i)}finally{En=d,ot.p=c,Y.T=a}}Ri=3}}function ug(){if(Ri===4||Ri===3){Ri=0,Qe();var n=Es,i=sl,a=ol,c=jm;i.subtreeFlags&10256||i.flags&10256?Ri=5:(Ri=0,sl=Es=null,cg(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(Ss=null),ei(a),i=i.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(Ct,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=Y.T,d=ot.p,ot.p=2,Y.T=null;try{for(var v=n.onRecoverableError,A=0;A<c.length;A++){var L=c[A];v(L.value,{componentStack:L.stack})}}finally{Y.T=i,ot.p=d}}ol&3&&cf(),ga(n),d=n.pendingLanes,a&4194090&&d&42?n===Ad?ll++:(ll=0,Ad=n):ll=0,wu(0)}}function cg(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,ql(i)))}function cf(n){return og(),lg(),ug(),fg()}function fg(){if(Ri!==5)return!1;var n=Es,i=Td;Td=0;var a=ei(ol),c=Y.T,d=ot.p;try{ot.p=32>a?32:a,Y.T=null,a=bd,bd=null;var v=Es,A=ol;if(Ri=0,sl=Es=null,ol=0,En&6)throw Error(r(331));var L=En;if(En|=4,Km(v.current),qm(v,v.current,A,a),En=L,wu(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(Ct,v)}catch{}return!0}finally{ot.p=d,Y.T=c,cg(n,i)}}function hg(n,i,a){i=Bi(a,i),i=Zc(n.stateNode,i,2),n=La(n,i,2),n!==null&&(Ut(n,2),ga(n))}function Un(n,i,a){if(n.tag===3)hg(n,n,a);else for(;i!==null;){if(i.tag===3){hg(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ss===null||!Ss.has(c))){n=Bi(a,n),a=ud(2),c=La(i,a,2),c!==null&&(Dm(a,c,i,n),Ut(c,2),ga(c));break}}i=i.return}}function Ld(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new xd;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(yd=!0,d.add(a),n=d0.bind(null,n,i,a),i.then(n,n))}function d0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Pn===n&&(an&a)===a&&($n===4||$n===3&&(an&62914560)===an&&300>ve()-Md?!(En&2)&&ul(n,0):Sd|=a,rl===an&&(rl=0)),ga(n)}function dg(n,i){i===0&&(i=$t()),n=ks(n,i),n!==null&&(Ut(n,i),ga(n))}function ff(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),dg(n,a)}function p0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(i),dg(n,a)}function pg(n,i){return Pe(n,i)}var bu=null,Ts=null,hf=!1,Au=!1,df=!1,bs=0;function ga(n){n!==Ts&&n.next===null&&(Ts===null?bu=Ts=n:Ts=Ts.next=n),Au=!0,hf||(hf=!0,Ud())}function wu(n,i){if(!df&&Au){df=!0;do for(var a=!1,c=bu;c!==null;){if(n!==0){var d=c.pendingLanes;if(d===0)var v=0;else{var A=c.suspendedLanes,L=c.pingedLanes;v=(1<<31-Zt(42|n)+1)-1,v&=d&~(A&~L),v=v&201326741?v&201326741|1:v?v|2:0}v!==0&&(a=!0,gg(c,v))}else v=an,v=Oe(c,c===Pn?v:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),!(v&3)||we(c,v)||(a=!0,gg(c,v));c=c.next}while(a);df=!1}}function m0(){Ru()}function Ru(){Au=hf=!1;var n=0;bs!==0&&(E0()&&(n=bs),bs=0);for(var i=ve(),a=null,c=bu;c!==null;){var d=c.next,v=Cu(c,i);v===0?(c.next=null,a===null?bu=d:a.next=d,d===null&&(Ts=a)):(a=c,(n!==0||v&3)&&(Au=!0)),c=d}wu(n)}function Cu(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,v=n.pendingLanes&-62914561;0<v;){var A=31-Zt(v),L=1<<A,Z=d[A];Z===-1?(!(L&a)||L&c)&&(d[A]=bn(L,i)):Z<=i&&(n.expiredLanes|=L),v&=~L}if(i=Pn,a=an,a=Oe(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,a===0||n===i&&(Mn===2||Mn===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Q(c),n.callbackNode=null,n.callbackPriority=0;if(!(a&3)||we(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(c!==null&&Q(c),ei(a)){case 2:case 8:a=ce;break;case 32:a=G;break;case 268435456:a=dt;break;default:a=G}return c=mg.bind(null,n),a=Pe(a,c),n.callbackPriority=i,n.callbackNode=a,i}return c!==null&&c!==null&&Q(c),n.callbackPriority=2,n.callbackNode=null,2}function mg(n,i){if(Ri!==0&&Ri!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(cf()&&n.callbackNode!==a)return null;var c=an;return c=Oe(n,n===Pn?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:($m(n,c,i),Cu(n,ve()),n.callbackNode!=null&&n.callbackNode===a?mg.bind(null,n):null)}function gg(n,i){if(cf())return null;$m(n,i,!0)}function Ud(){T0(function(){En&6?Pe(Tn,m0):Ru()})}function pf(){return bs===0&&(bs=et()),bs}function _g(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ll(""+n)}function vg(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function g0(n,i,a,c,d){if(i==="submit"&&a&&a.stateNode===d){var v=_g((d[wi]||null).action),A=c.submitter;A&&(i=(i=A[wi]||null)?_g(i.formAction):A.getAttribute("formAction"),i!==null&&(v=i,A=null));var L=new uc("action","action",null,c,d);n.push({event:L,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(bs!==0){var Z=A?vg(d,A):new FormData(d);au(a,{pending:!0,data:Z,method:d.method,action:v},null,Z)}}else typeof v=="function"&&(L.preventDefault(),Z=A?vg(d,A):new FormData(d),au(a,{pending:!0,data:Z,method:d.method,action:v},v,Z))},currentTarget:d}]})}}for(var Nd=0;Nd<hn.length;Nd++){var Od=hn[Nd],_0=Od.toLowerCase(),v0=Od[0].toUpperCase()+Od.slice(1);Xr(_0,"on"+v0)}Xr(Sc,"onAnimationEnd"),Xr(Jp,"onAnimationIteration"),Xr(mr,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(Ec,"onTransitionRun"),Xr(t0,"onTransitionStart"),Xr(Bo,"onTransitionCancel"),Xr(Pl,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function xg(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;t:{var v=void 0;if(i)for(var A=c.length-1;0<=A;A--){var L=c[A],Z=L.instance,ft=L.currentTarget;if(L=L.listener,Z!==v&&d.isPropagationStopped())break t;v=L,d.currentTarget=ft;try{v(d)}catch(bt){oo(bt)}d.currentTarget=null,v=Z}else for(A=0;A<c.length;A++){if(L=c[A],Z=L.instance,ft=L.currentTarget,L=L.listener,Z!==v&&d.isPropagationStopped())break t;v=L,d.currentTarget=ft;try{v(d)}catch(bt){oo(bt)}d.currentTarget=null,v=Z}}}}function Ke(n,i){var a=i[Hs];a===void 0&&(a=i[Hs]=new Set);var c=n+"__bubble";a.has(c)||(yg(i,n,2,!1),a.add(c))}function Id(n,i,a){var c=0;i&&(c|=4),yg(a,n,c,i)}var sr="_reactListening"+Math.random().toString(36).slice(2);function Pd(n){if(!n[sr]){n[sr]=!0,ac.forEach(function(a){a!=="selectionchange"&&(x0.has(a)||Id(a,!1,n),Id(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[sr]||(i[sr]=!0,Id("selectionchange",!1,i))}}function yg(n,i,a,c){switch(Fg(i)){case 2:var d=z0;break;case 8:d=_l;break;default:d=qd}a=d.bind(null,i,a,n),d=void 0,!Nl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Va(n,i,a,c,d){var v=c;if(!(i&1)&&!(i&2)&&c!==null)t:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var L=c.stateNode.containerInfo;if(L===d)break;if(A===4)for(A=c.return;A!==null;){var Z=A.tag;if((Z===3||Z===4)&&A.stateNode.containerInfo===d)return;A=A.return}for(;L!==null;){if(A=Ea(L),A===null)return;if(Z=A.tag,Z===5||Z===6||Z===26||Z===27){c=v=A;continue t}L=L.parentNode}}c=c.return}Lp(function(){var ft=v,bt=_h(a),Ot=[];t:{var mt=zl.get(n);if(mt!==void 0){var ht=uc,Me=n;switch(n){case"keypress":if(wn(a)===0)break t;case"keydown":case"keyup":ht=Mh;break;case"focusin":Me="focus",ht=fc;break;case"focusout":Me="blur",ht=fc;break;case"beforeblur":case"afterblur":ht=fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=X_;break;case Sc:case Jp:case mr:ht=Pp;break;case Pl:ht=q_;break;case"scroll":case"scrollend":ht=V_;break;case"wheel":ht=Z_;break;case"copy":case"cut":case"paste":ht=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=wa;break;case"toggle":case"beforetoggle":ht=dc}var Se=(i&4)!==0,Cn=!Se&&(n==="scroll"||n==="scrollend"),rt=Se?mt!==null?mt+"Capture":null:mt;Se=[];for(var $=ft,lt;$!==null;){var Lt=$;if(lt=Lt.stateNode,Lt=Lt.tag,Lt!==5&&Lt!==26&&Lt!==27||lt===null||rt===null||(Lt=Ul($,rt),Lt!=null&&Se.push(De($,Lt,lt))),Cn)break;$=$.return}0<Se.length&&(mt=new ht(mt,Me,null,a,bt),Ot.push({event:mt,listeners:Se}))}}if(!(i&7)){t:{if(mt=n==="mouseover"||n==="pointerover",ht=n==="mouseout"||n==="pointerout",mt&&a!==oc&&(Me=a.relatedTarget||a.fromElement)&&(Ea(Me)||Me[Li]))break t;if((ht||mt)&&(mt=bt.window===bt?bt:(mt=bt.ownerDocument)?mt.defaultView||mt.parentWindow:window,ht?(Me=a.relatedTarget||a.toElement,ht=ft,Me=Me?Ea(Me):null,Me!==null&&(Cn=f(Me),Se=Me.tag,Me!==Cn||Se!==5&&Se!==27&&Se!==6)&&(Me=null)):(ht=null,Me=ft),ht!==Me)){if(Se=is,Lt="onMouseLeave",rt="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(Se=wa,Lt="onPointerLeave",rt="onPointerEnter",$="pointer"),Cn=ht==null?mt:ts(ht),lt=Me==null?mt:ts(Me),mt=new Se(Lt,$+"leave",ht,a,bt),mt.target=Cn,mt.relatedTarget=lt,Lt=null,Ea(bt)===ft&&(Se=new Se(rt,$+"enter",Me,a,bt),Se.target=lt,Se.relatedTarget=Cn,Lt=Se),Cn=Lt,ht&&Me)e:{for(Se=ht,rt=Me,$=0,lt=Se;lt;lt=pi(lt))$++;for(lt=0,Lt=rt;Lt;Lt=pi(Lt))lt++;for(;0<$-lt;)Se=pi(Se),$--;for(;0<lt-$;)rt=pi(rt),lt--;for(;$--;){if(Se===rt||rt!==null&&Se===rt.alternate)break e;Se=pi(Se),rt=pi(rt)}Se=null}else Se=null;ht!==null&&ti(Ot,mt,ht,Se,!1),Me!==null&&Cn!==null&&ti(Ot,Cn,Me,Se,!0)}}t:{if(mt=ft?ts(ft):window,ht=mt.nodeName&&mt.nodeName.toLowerCase(),ht==="select"||ht==="input"&&mt.type==="file")var ue=Xp;else if(_c(mt))if(qp)ue=j_;else{ue=ss;var Ve=Kp}else ht=mt.nodeName,!ht||ht.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?ft&&gh(ft.elementType)&&(ue=Xp):ue=yc;if(ue&&(ue=ue(n,ft))){Oo(Ot,ue,a,bt);break t}Ve&&Ve(n,mt,ft),n==="focusout"&&ft&&mt.type==="number"&&ft.memoizedProps.value!=null&&yi(mt,"number",mt.value)}switch(Ve=ft?ts(ft):window,n){case"focusin":(_c(Ve)||Ve.contentEditable==="true")&&(zo=Ve,os=ft,tt=null);break;case"focusout":tt=os=zo=null;break;case"mousedown":Mt=!0;break;case"contextmenu":case"mouseup":case"dragend":Mt=!1,xt(Ot,a,bt);break;case"selectionchange":if($_)break;case"keydown":case"keyup":xt(Ot,a,bt)}var he;if(Ah)t:{switch(n){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else rs?Wp(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(pc&&a.locale!=="ko"&&(rs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&rs&&(he=Up()):(ns=bt,yh="value"in ns?ns.value:ns.textContent,rs=!0)),Ve=mf(ft,Te),0<Ve.length&&(Te=new Ki(Te,n,null,a,bt),Ot.push({event:Te,listeners:Ve}),he?Te.data=he:(he=gc(a),he!==null&&(Te.data=he)))),(he=Vp?K_(n,a):kp(n,a))&&(Te=mf(ft,"onBeforeInput"),0<Te.length&&(Ve=new Ki("onBeforeInput","beforeinput",null,a,bt),Ot.push({event:Ve,listeners:Te}),Ve.data=he)),g0(Ot,n,ft,a,bt)}xg(Ot,i)})}function De(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mf(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,v=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||v===null||(d=Ul(n,a),d!=null&&c.unshift(De(n,d,v)),d=Ul(n,i),d!=null&&c.push(De(n,d,v))),n.tag===3)return c;n=n.return}return[]}function pi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function ti(n,i,a,c,d){for(var v=i._reactName,A=[];a!==null&&a!==c;){var L=a,Z=L.alternate,ft=L.stateNode;if(L=L.tag,Z!==null&&Z===c)break;L!==5&&L!==26&&L!==27||ft===null||(Z=ft,d?(ft=Ul(a,v),ft!=null&&A.unshift(De(a,ft,Z))):d||(ft=Ul(a,v),ft!=null&&A.push(De(a,ft,Z)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var y0=/\r\n?/g,As=/\u0000|\uFFFD/g;function Sg(n){return(typeof n=="string"?n:""+n).replace(y0,`
`).replace(As,"")}function Eg(n,i){return i=Sg(i),Sg(n)===i}function gf(){}function Rn(n,i,a,c,d,v){switch(a){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||wr(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&wr(n,""+c);break;case"className":Qt(n,"class",c);break;case"tabIndex":Qt(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(n,a,c);break;case"style":mh(n,c,v);break;case"data":if(i!=="object"){Qt(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=Ll(""+c),n.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof v=="function"&&(a==="formAction"?(i!=="input"&&Rn(n,i,"name",d.name,d,null),Rn(n,i,"formEncType",d.formEncType,d,null),Rn(n,i,"formMethod",d.formMethod,d,null),Rn(n,i,"formTarget",d.formTarget,d,null)):(Rn(n,i,"encType",d.encType,d,null),Rn(n,i,"method",d.method,d,null),Rn(n,i,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(a);break}c=Ll(""+c),n.setAttribute(a,c);break;case"onClick":c!=null&&(n.onclick=gf);break;case"onScroll":c!=null&&Ke("scroll",n);break;case"onScrollEnd":c!=null&&Ke("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}a=Ll(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""+c):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":c===!0?n.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(a,c):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(a,c):n.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(a):n.setAttribute(a,c);break;case"popover":Ke("beforetoggle",n),Ke("toggle",n),kt(n,"popover",c);break;case"xlinkActuate":Jt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Jt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Jt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Jt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Jt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Jt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":kt(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cp.get(a)||a,kt(n,a,c))}}function zd(n,i,a,c,d,v){switch(a){case"style":mh(n,c,v);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(r(60));n.innerHTML=a}}break;case"children":typeof c=="string"?wr(n,c):(typeof c=="number"||typeof c=="bigint")&&wr(n,""+c);break;case"onScroll":c!=null&&Ke("scroll",n);break;case"onScrollEnd":c!=null&&Ke("scrollend",n);break;case"onClick":c!=null&&(n.onclick=gf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),i=a.slice(2,d?a.length-7:void 0),v=n[wi]||null,v=v!=null?v[a]:null,typeof v=="function"&&n.removeEventListener(i,v,d),typeof c=="function")){typeof v!="function"&&v!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,c,d);break t}a in n?n[a]=c:c===!0?n.setAttribute(a,""):kt(n,a,c)}}}function mi(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",n),Ke("load",n);var c=!1,d=!1,v;for(v in a)if(a.hasOwnProperty(v)){var A=a[v];if(A!=null)switch(v){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Rn(n,i,v,A,a,null)}}d&&Rn(n,i,"srcSet",a.srcSet,a,null),c&&Rn(n,i,"src",a.src,a,null);return;case"input":Ke("invalid",n);var L=v=A=d=null,Z=null,ft=null;for(c in a)if(a.hasOwnProperty(c)){var bt=a[c];if(bt!=null)switch(c){case"name":d=bt;break;case"type":A=bt;break;case"checked":Z=bt;break;case"defaultChecked":ft=bt;break;case"value":v=bt;break;case"defaultValue":L=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(r(137,i));break;default:Rn(n,i,c,bt,a,null)}}An(n,v,L,Z,ft,A,d,!1),Qn(n);return;case"select":Ke("invalid",n),c=A=v=null;for(d in a)if(a.hasOwnProperty(d)&&(L=a[d],L!=null))switch(d){case"value":v=L;break;case"defaultValue":A=L;break;case"multiple":c=L;default:Rn(n,i,d,L,a,null)}i=v,a=A,n.multiple=!!c,i!=null?li(n,!!c,i,!1):a!=null&&li(n,!!c,a,!0);return;case"textarea":Ke("invalid",n),v=d=c=null;for(A in a)if(a.hasOwnProperty(A)&&(L=a[A],L!=null))switch(A){case"value":c=L;break;case"defaultValue":d=L;break;case"children":v=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(91));break;default:Rn(n,i,A,L,a,null)}ci(n,c,d,v),Qn(n);return;case"option":for(Z in a)if(a.hasOwnProperty(Z)&&(c=a[Z],c!=null))switch(Z){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Rn(n,i,Z,c,a,null)}return;case"dialog":Ke("beforetoggle",n),Ke("toggle",n),Ke("cancel",n),Ke("close",n);break;case"iframe":case"object":Ke("load",n);break;case"video":case"audio":for(c=0;c<Du.length;c++)Ke(Du[c],n);break;case"image":Ke("error",n),Ke("load",n);break;case"details":Ke("toggle",n);break;case"embed":case"source":case"link":Ke("error",n),Ke("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ft in a)if(a.hasOwnProperty(ft)&&(c=a[ft],c!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Rn(n,i,ft,c,a,null)}return;default:if(gh(i)){for(bt in a)a.hasOwnProperty(bt)&&(c=a[bt],c!==void 0&&zd(n,i,bt,c,a,void 0));return}}for(L in a)a.hasOwnProperty(L)&&(c=a[L],c!=null&&Rn(n,i,L,c,a,null))}function S0(n,i,a,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,v=null,A=null,L=null,Z=null,ft=null,bt=null;for(ht in a){var Ot=a[ht];if(a.hasOwnProperty(ht)&&Ot!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":Z=Ot;default:c.hasOwnProperty(ht)||Rn(n,i,ht,null,c,Ot)}}for(var mt in c){var ht=c[mt];if(Ot=a[mt],c.hasOwnProperty(mt)&&(ht!=null||Ot!=null))switch(mt){case"type":v=ht;break;case"name":d=ht;break;case"checked":ft=ht;break;case"defaultChecked":bt=ht;break;case"value":A=ht;break;case"defaultValue":L=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:ht!==Ot&&Rn(n,i,mt,ht,c,Ot)}}sa(n,A,L,Z,ft,bt,v,d);return;case"select":ht=A=L=mt=null;for(v in a)if(Z=a[v],a.hasOwnProperty(v)&&Z!=null)switch(v){case"value":break;case"multiple":ht=Z;default:c.hasOwnProperty(v)||Rn(n,i,v,null,c,Z)}for(d in c)if(v=c[d],Z=a[d],c.hasOwnProperty(d)&&(v!=null||Z!=null))switch(d){case"value":mt=v;break;case"defaultValue":L=v;break;case"multiple":A=v;default:v!==Z&&Rn(n,i,d,v,c,Z)}i=L,a=A,c=ht,mt!=null?li(n,!!a,mt,!1):!!c!=!!a&&(i!=null?li(n,!!a,i,!0):li(n,!!a,a?[]:"",!1));return;case"textarea":ht=mt=null;for(L in a)if(d=a[L],a.hasOwnProperty(L)&&d!=null&&!c.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Rn(n,i,L,null,c,d)}for(A in c)if(d=c[A],v=a[A],c.hasOwnProperty(A)&&(d!=null||v!=null))switch(A){case"value":mt=d;break;case"defaultValue":ht=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==v&&Rn(n,i,A,d,c,v)}ui(n,mt,ht);return;case"option":for(var Me in a)if(mt=a[Me],a.hasOwnProperty(Me)&&mt!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":n.selected=!1;break;default:Rn(n,i,Me,null,c,mt)}for(Z in c)if(mt=c[Z],ht=a[Z],c.hasOwnProperty(Z)&&mt!==ht&&(mt!=null||ht!=null))switch(Z){case"selected":n.selected=mt&&typeof mt!="function"&&typeof mt!="symbol";break;default:Rn(n,i,Z,mt,c,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)mt=a[Se],a.hasOwnProperty(Se)&&mt!=null&&!c.hasOwnProperty(Se)&&Rn(n,i,Se,null,c,mt);for(ft in c)if(mt=c[ft],ht=a[ft],c.hasOwnProperty(ft)&&mt!==ht&&(mt!=null||ht!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,i));break;default:Rn(n,i,ft,mt,c,ht)}return;default:if(gh(i)){for(var Cn in a)mt=a[Cn],a.hasOwnProperty(Cn)&&mt!==void 0&&!c.hasOwnProperty(Cn)&&zd(n,i,Cn,void 0,c,mt);for(bt in c)mt=c[bt],ht=a[bt],!c.hasOwnProperty(bt)||mt===ht||mt===void 0&&ht===void 0||zd(n,i,bt,mt,c,ht);return}}for(var rt in a)mt=a[rt],a.hasOwnProperty(rt)&&mt!=null&&!c.hasOwnProperty(rt)&&Rn(n,i,rt,null,c,mt);for(Ot in c)mt=c[Ot],ht=a[Ot],!c.hasOwnProperty(Ot)||mt===ht||mt==null&&ht==null||Rn(n,i,Ot,mt,c,ht)}var Jr=null,_f=null;function fo(n){return n.nodeType===9?n:n.ownerDocument}function Yn(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zn(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function vf(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bd=null;function E0(){var n=window.event;return n&&n.type==="popstate"?n===Bd?!1:(Bd=n,!0):(Bd=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(n){return Tg.resolve(null).then(n).catch(bg)}:Mg;function bg(n){setTimeout(function(){throw n})}function Hr(n){return n==="head"}function xf(n,i){var a=i,c=0,d=0;do{var v=a.nextSibling;if(n.removeChild(a),v&&v.nodeType===8)if(a=v.data,a==="/$"){if(0<c&&8>c){a=c;var A=n.ownerDocument;if(a&1&&Lu(A.documentElement),a&2&&Lu(A.body),a&4)for(a=A.head,Lu(a),A=a.firstChild;A;){var L=A.nextSibling,Z=A.nodeName;A[Ja]||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&A.rel.toLowerCase()==="stylesheet"||a.removeChild(A),A=L}}if(d===0){n.removeChild(v),Fu(i);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=v}while(a);Fu(i)}function Fd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fd(a),$a(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Ag(n,i,a,c){for(;n.nodeType===1;){var d=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ja])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(v=n.getAttribute("rel"),v==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(v!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(v=n.getAttribute("src"),(v!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&v&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var v=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===v)return n}else return n;if(n=$r(n.nextSibling),n===null)break}return null}function yf(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=$r(n.nextSibling),n===null))return null;return n}function Wi(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function fl(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var c=function(){i(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function $r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Hd=null;function wg(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function Rg(n,i,a){switch(i=fo(a),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Lu(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);$a(n)}var Er=new Map,_a=new Set;function Ne(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var va=ot.d;ot.d={f:Gr,r:Cg,D:b0,C:Dg,L:Sf,m:A0,X:R0,S:w0,M:C0};function Gr(){var n=va.f(),i=lf();return n||i}function Cg(n){var i=Ma(n);i!==null&&i.tag===5&&i.type==="form"?kc(i):va.r(n)}var hl=typeof document>"u"?null:document;function dn(n,i,a){var c=hl;if(c&&typeof i=="string"&&i){var d=In(i);d='link[rel="'+n+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),_a.has(d)||(_a.add(d),n={rel:n,crossOrigin:a,href:i},c.querySelector(d)===null&&(i=c.createElement("link"),mi(i,"link",n),ri(i),c.head.appendChild(i)))}}function b0(n){va.D(n),dn("dns-prefetch",n,null)}function Dg(n,i){va.C(n,i),dn("preconnect",n,i)}function Sf(n,i,a){va.L(n,i,a);var c=hl;if(c&&n&&i){var d='link[rel="preload"][as="'+In(i)+'"]';i==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+In(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+In(a.imageSizes)+'"]')):d+='[href="'+In(n)+'"]';var v=d;switch(i){case"style":v=dl(n);break;case"script":v=pl(n)}Er.has(v)||(n=x({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Er.set(v,n),c.querySelector(d)!==null||i==="style"&&c.querySelector(Uu(v))||i==="script"&&c.querySelector(Nu(v))||(i=c.createElement("link"),mi(i,"link",n),ri(i),c.head.appendChild(i)))}}function A0(n,i){va.m(n,i);var a=hl;if(a&&n){var c=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+In(c)+'"][href="'+In(n)+'"]',v=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":v=pl(n)}if(!Er.has(v)&&(n=x({rel:"modulepreload",href:n},i),Er.set(v,n),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nu(v)))return}c=a.createElement("link"),mi(c,"link",n),ri(c),a.head.appendChild(c)}}}function w0(n,i,a){va.S(n,i,a);var c=hl;if(c&&n){var d=es(c).hoistableStyles,v=dl(n);i=i||"default";var A=d.get(v);if(!A){var L={loading:0,preload:null};if(A=c.querySelector(Uu(v)))L.loading=5;else{n=x({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Er.get(v))&&Ou(n,a);var Z=A=c.createElement("link");ri(Z),mi(Z,"link",n),Z._p=new Promise(function(ft,bt){Z.onload=ft,Z.onerror=bt}),Z.addEventListener("load",function(){L.loading|=1}),Z.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Ef(A,i,c)}A={type:"stylesheet",instance:A,count:1,state:L},d.set(v,A)}}}function R0(n,i){va.X(n,i);var a=hl;if(a&&n){var c=es(a).hoistableScripts,d=pl(n),v=c.get(d);v||(v=a.querySelector(Nu(d)),v||(n=x({src:n,async:!0},i),(i=Er.get(d))&&Gd(n,i),v=a.createElement("script"),ri(v),mi(v,"link",n),a.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},c.set(d,v))}}function C0(n,i){va.M(n,i);var a=hl;if(a&&n){var c=es(a).hoistableScripts,d=pl(n),v=c.get(d);v||(v=a.querySelector(Nu(d)),v||(n=x({src:n,async:!0,type:"module"},i),(i=Er.get(d))&&Gd(n,i),v=a.createElement("script"),ri(v),mi(v,"link",n),a.head.appendChild(v)),v={type:"script",instance:v,count:1,state:null},c.set(d,v))}}function Lg(n,i,a,c){var d=(d=Bt.current)?Ne(d):null;if(!d)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=dl(a.href),a=es(d).hoistableStyles,c=a.get(i),c||(c={type:"style",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=dl(a.href);var v=es(d).hoistableStyles,A=v.get(n);if(A||(d=d.ownerDocument||d,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},v.set(n,A),(v=d.querySelector(Uu(n)))&&!v._p&&(A.instance=v,A.state.loading=5),Er.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Er.set(n,a),v||D0(d,n,a,A.state))),i&&c===null)throw Error(r(528,""));return A}if(i&&c!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=pl(a),a=es(d).hoistableScripts,c=a.get(i),c||(c={type:"script",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function dl(n){return'href="'+In(n)+'"'}function Uu(n){return'link[rel="stylesheet"]['+n+"]"}function Ug(n){return x({},n,{"data-precedence":n.precedence,precedence:null})}function D0(n,i,a,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),mi(i,"link",a),ri(i),n.head.appendChild(i))}function pl(n){return'[src="'+In(n)+'"]'}function Nu(n){return"script[async]"+n}function Ng(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+In(a.href)+'"]');if(c)return i.instance=c,ri(c),c;var d=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ri(c),mi(c,"style",d),Ef(c,a.precedence,n),i.instance=c;case"stylesheet":d=dl(a.href);var v=n.querySelector(Uu(d));if(v)return i.state.loading|=4,i.instance=v,ri(v),v;c=Ug(a),(d=Er.get(d))&&Ou(c,d),v=(n.ownerDocument||n).createElement("link"),ri(v);var A=v;return A._p=new Promise(function(L,Z){A.onload=L,A.onerror=Z}),mi(v,"link",c),i.state.loading|=4,Ef(v,a.precedence,n),i.instance=v;case"script":return v=pl(a.src),(d=n.querySelector(Nu(v)))?(i.instance=d,ri(d),d):(c=a,(d=Er.get(v))&&(c=x({},a),Gd(c,d)),n=n.ownerDocument||n,d=n.createElement("script"),ri(d),mi(d,"link",c),n.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&!(i.state.loading&4)&&(c=i.instance,i.state.loading|=4,Ef(c,a.precedence,n));return i.instance}function Ef(n,i,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,v=d,A=0;A<c.length;A++){var L=c[A];if(L.dataset.precedence===i)v=L;else if(v!==d)break}v?v.parentNode.insertBefore(n,v.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function Ou(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Gd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var ml=null;function Og(n,i,a){if(ml===null){var c=new Map,d=ml=new Map;d.set(a,c)}else d=ml,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(n))return c;for(c.set(n,null),a=a.getElementsByTagName(n),d=0;d<a.length;d++){var v=a[d];if(!(v[Ja]||v[ni]||n==="link"&&v.getAttribute("rel")==="stylesheet")&&v.namespaceURI!=="http://www.w3.org/2000/svg"){var A=v.getAttribute(i)||"";A=n+A;var L=c.get(A);L?L.push(v):c.set(A,[v])}}return c}function Ig(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function L0(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function gi(n){return!(n.type==="stylesheet"&&!(n.state.loading&3))}var Mi=null;function U0(){}function N0(n,i,a){if(Mi===null)throw Error(r(475));var c=Mi;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var d=dl(a.href),v=n.querySelector(Uu(d));if(v){n=v._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Iu.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=v,ri(v);return}v=n.ownerDocument||n,a=Ug(a),(d=Er.get(d))&&Ou(a,d),v=v.createElement("link"),ri(v);var A=v;A._p=new Promise(function(L,Z){A.onload=L,A.onerror=Z}),mi(v,"link",a),i.instance=v}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&!(i.state.loading&3)&&(c.count++,i=Iu.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function O0(){if(Mi===null)throw Error(r(475));var n=Mi;return n.stylesheets&&n.count===0&&Vd(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Vd(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Iu(){if(this.count--,this.count===0){if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mf=null;function Vd(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mf=new Map,i.forEach(I0,n),Mf=null,Iu.call(n))}function I0(n,i){if(!(i.state.loading&4)){var a=Mf.get(n);if(a)var c=a.get(null);else{a=new Map,Mf.set(n,a);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),v=0;v<d.length;v++){var A=d[v];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(a.set(A.dataset.precedence,A),c=A)}c&&a.set(null,c)}d=i.instance,A=d.getAttribute("data-precedence"),v=a.get(A)||c,v===c&&a.set(null,d),a.set(A,d),this.count++,c=Iu.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),v?v.parentNode.insertBefore(d,v.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),i.state.loading|=4}}var gl={$$typeof:z,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function P0(n,i,a,c,d,v,A,L){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=v,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.incompleteTransitions=new Map}function Pg(n,i,a,c,d,v,A,L,Z,ft,bt,Ot){return n=new P0(n,i,a,A,L,Z,ft,Ot),i=1,v===!0&&(i|=24),v=Qi(3,null,null,i),n.current=v,v.stateNode=n,i=Ph(),i.refCount++,n.pooledCache=i,i.refCount++,v.memoizedState={element:c,isDehydrated:a,cache:i},Js(v),n}function zg(n){return n?(n=Xs,n):Xs}function Wd(n,i,a,c,d,v){d=zg(d),c.context===null?c.context=d:c.pendingContext=d,c=fs(i),c.payload={element:a},v=v===void 0?null:v,v!==null&&(c.callback=v),a=La(n,c,i),a!==null&&(Sr(a,n,i),Zl(a,n,i))}function kd(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xd(n,i){kd(n,i),(n=n.alternate)&&kd(n,i)}function Bg(n){if(n.tag===13){var i=ks(n,67108864);i!==null&&Sr(i,n,67108864),Xd(n,67108864)}}var Tf=!0;function z0(n,i,a,c){var d=Y.T;Y.T=null;var v=ot.p;try{ot.p=2,qd(n,i,a,c)}finally{ot.p=v,Y.T=d}}function _l(n,i,a,c){var d=Y.T;Y.T=null;var v=ot.p;try{ot.p=8,qd(n,i,a,c)}finally{ot.p=v,Y.T=d}}function qd(n,i,a,c){if(Tf){var d=Yd(c);if(d===null)Va(n,i,c,bf,a),Hg(n,c);else if(F0(d,n,i,a,c))c.stopPropagation();else if(Hg(n,c),i&4&&-1<B0.indexOf(n)){for(;d!==null;){var v=Ma(d);if(v!==null)switch(v.tag){case 3:if(v=v.stateNode,v.current.memoizedState.isDehydrated){var A=ee(v.pendingLanes);if(A!==0){var L=v;for(L.pendingLanes|=2,L.entangledLanes|=2;A;){var Z=1<<31-Zt(A);L.entanglements[1]|=Z,A&=~Z}ga(v),!(En&6)&&(al=ve()+500,wu(0))}}break;case 13:L=ks(v,2),L!==null&&Sr(L,v,2),lf(),Xd(v,2)}if(v=Yd(c),v===null&&Va(n,i,c,bf,a),v===d)break;d=v}d!==null&&c.stopPropagation()}else Va(n,i,c,null,a)}}function Yd(n){return n=_h(n),Zd(n)}var bf=null;function Zd(n){if(bf=null,n=Ea(n),n!==null){var i=f(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return bf=n,null}function Fg(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(de()){case Tn:return 2;case ce:return 8;case G:case U:return 32;case dt:return 268435456;default:return 32}default:return 32}}var Af=!1,Wa=null,ws=null,Rs=null,Pu=new Map,zu=new Map,Cs=[],B0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hg(n,i){switch(n){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":Pu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zu.delete(i.pointerId)}}function Bu(n,i,a,c,d,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[d]},i!==null&&(i=Ma(i),i!==null&&Bg(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function F0(n,i,a,c,d){switch(i){case"focusin":return Wa=Bu(Wa,n,i,a,c,d),!0;case"dragenter":return ws=Bu(ws,n,i,a,c,d),!0;case"mouseover":return Rs=Bu(Rs,n,i,a,c,d),!0;case"pointerover":var v=d.pointerId;return Pu.set(v,Bu(Pu.get(v)||null,n,i,a,c,d)),!0;case"gotpointercapture":return v=d.pointerId,zu.set(v,Bu(zu.get(v)||null,n,i,a,c,d)),!0}return!1}function Gg(n){var i=Ea(n.target);if(i!==null){var a=f(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,hr(n.priority,function(){if(a.tag===13){var c=Ii();c=On(c);var d=ks(a,c);d!==null&&Sr(d,a,c),Xd(a,c)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wf(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Yd(n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);oc=c,a.target.dispatchEvent(c),oc=null}else return i=Ma(a),i!==null&&Bg(i),n.blockedOn=a,!1;i.shift()}return!0}function Vg(n,i,a){wf(n)&&a.delete(i)}function H0(){Af=!1,Wa!==null&&wf(Wa)&&(Wa=null),ws!==null&&wf(ws)&&(ws=null),Rs!==null&&wf(Rs)&&(Rs=null),Pu.forEach(Vg),zu.forEach(Vg)}function Rf(n,i){n.blockedOn===i&&(n.blockedOn=null,Af||(Af=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,H0)))}var Cf=null;function Wg(n){Cf!==n&&(Cf=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Cf===n&&(Cf=null);for(var i=0;i<n.length;i+=3){var a=n[i],c=n[i+1],d=n[i+2];if(typeof c!="function"){if(Zd(c||a)===null)continue;break}var v=Ma(a);v!==null&&(n.splice(i,3),i-=3,au(v,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function Fu(n){function i(Z){return Rf(Z,n)}Wa!==null&&Rf(Wa,n),ws!==null&&Rf(ws,n),Rs!==null&&Rf(Rs,n),Pu.forEach(i),zu.forEach(i);for(var a=0;a<Cs.length;a++){var c=Cs[a];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Cs.length&&(a=Cs[0],a.blockedOn===null);)Gg(a),a.blockedOn===null&&Cs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],v=a[c+1],A=d[wi]||null;if(typeof v=="function")A||Wg(a);else if(A){var L=null;if(v&&v.hasAttribute("formAction")){if(d=v,A=v[wi]||null)L=A.formAction;else if(Zd(d)!==null)continue}else L=A.action;typeof L=="function"?a[c+1]=L:(a.splice(c,3),c-=3),Wg(a)}}}function Kd(n){this._internalRoot=n}Df.prototype.render=Kd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,c=Ii();Wd(a,c,n,i,null,null)},Df.prototype.unmount=Kd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wd(n.current,2,null,n,null,null),lf(),i[Li]=null}};function Df(n){this._internalRoot=n}Df.prototype.unstable_scheduleHydration=function(n){if(n){var i=cn();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Cs.length&&i!==0&&i<Cs[a].priority;a++);Cs.splice(a,0,n),a===0&&Gg(n)}};var kg=t.version;if(kg!=="19.1.0")throw Error(r(527,kg,"19.1.0"));ot.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=g(i),n=n!==null?_(n):null,n=n===null?null:n.stateNode,n};var G0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lf.isDisabled&&Lf.supportsFiber)try{Ct=Lf.inject(G0),te=Lf}catch{}}return jd.createRoot=function(n,i){if(!l(n))throw Error(r(299));var a=!1,c="",d=ld,v=Yc,A=Cm,L=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(v=i.onCaughtError),i.onRecoverableError!==void 0&&(A=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(L=i.unstable_transitionCallbacks)),i=Pg(n,1,!1,null,null,a,c,d,v,A,L,null),n[Li]=i.current,Pd(n),new Kd(i)},jd.hydrateRoot=function(n,i,a){if(!l(n))throw Error(r(299));var c=!1,d="",v=ld,A=Yc,L=Cm,Z=null,ft=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(v=a.onUncaughtError),a.onCaughtError!==void 0&&(A=a.onCaughtError),a.onRecoverableError!==void 0&&(L=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(Z=a.unstable_transitionCallbacks),a.formState!==void 0&&(ft=a.formState)),i=Pg(n,1,!0,i,a??null,c,d,v,A,L,Z,ft),i.context=zg(null),a=i.current,c=Ii(),c=On(c),d=fs(c),d.callback=null,La(a,d,c),a=c,i.current.lanes=a,Ut(i,a),ga(i),n[Li]=i.current,Pd(n),new Df(i)},jd.version="19.1.0",jd}var dy;function mM(){if(dy)return Y0.exports;dy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Y0.exports=pM(),Y0.exports}var gM=mM();const _M=sM(gM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ux="173",vM=0,py=1,xM=2,HS=1,yM=2,xo=3,Rl=0,kr=1,yo=2,Al=0,Jf=1,my=2,gy=3,_y=4,SM=5,Yu=100,EM=101,MM=102,TM=103,bM=104,AM=200,wM=201,RM=202,CM=203,Iv=204,Pv=205,DM=206,LM=207,UM=208,NM=209,OM=210,IM=211,PM=212,zM=213,BM=214,zv=0,Bv=1,Fv=2,nh=3,Hv=4,Gv=5,Vv=6,Wv=7,GS=0,FM=1,HM=2,wl=0,GM=1,VM=2,WM=3,kM=4,XM=5,qM=6,YM=7,VS=300,ih=301,rh=302,kv=303,Xv=304,z_=306,qv=1e3,Ku=1001,Yv=1002,Qa=1003,ZM=1004,qg=1005,Is=1006,j0=1007,Qu=1008,wo=1009,WS=1010,kS=1011,Mp=1012,Nx=1013,$u=1014,Eo=1015,Ap=1016,Ox=1017,Ix=1018,ah=1020,XS=35902,qS=1021,YS=1022,Ka=1023,ZS=1024,KS=1025,$f=1026,sh=1027,QS=1028,Px=1029,jS=1030,zx=1031,Bx=1033,T_=33776,b_=33777,A_=33778,w_=33779,Zv=35840,Kv=35841,Qv=35842,jv=35843,Jv=36196,$v=37492,tx=37496,ex=37808,nx=37809,ix=37810,rx=37811,ax=37812,sx=37813,ox=37814,lx=37815,ux=37816,cx=37817,fx=37818,hx=37819,dx=37820,px=37821,R_=36492,mx=36494,gx=36495,JS=36283,_x=36284,vx=36285,xx=36286,KM=3200,QM=3201,$S=0,jM=1,bl="",ya="srgb",oh="srgb-linear",D_="linear",zn="srgb",Uf=7680,vy=519,JM=512,$M=513,t1=514,tE=515,e1=516,n1=517,i1=518,r1=519,yx=35044,xy="300 es",Mo=2e3,L_=2001;class ch{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const f=l.indexOf(e);f!==-1&&l.splice(f,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,t);t.target=null}}}const lr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yy=1234567;const mp=Math.PI/180,Tp=180/Math.PI;function bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lr[o&255]+lr[o>>8&255]+lr[o>>16&255]+lr[o>>24&255]+"-"+lr[t&255]+lr[t>>8&255]+"-"+lr[t>>16&15|64]+lr[t>>24&255]+"-"+lr[e&63|128]+lr[e>>8&255]+"-"+lr[e>>16&255]+lr[e>>24&255]+lr[r&255]+lr[r>>8&255]+lr[r>>16&255]+lr[r>>24&255]).toLowerCase()}function Xe(o,t,e){return Math.max(t,Math.min(e,o))}function Fx(o,t){return(o%t+t)%t}function a1(o,t,e,r,l){return r+(o-t)*(l-r)/(e-t)}function s1(o,t,e){return o!==t?(e-o)/(t-o):0}function gp(o,t,e){return(1-e)*o+e*t}function o1(o,t,e,r){return gp(o,t,1-Math.exp(-e*r))}function l1(o,t=1){return t-Math.abs(Fx(o,t*2)-t)}function u1(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function c1(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function f1(o,t){return o+Math.floor(Math.random()*(t-o+1))}function h1(o,t){return o+Math.random()*(t-o)}function d1(o){return o*(.5-Math.random())}function p1(o){o!==void 0&&(yy=o);let t=yy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function m1(o){return o*mp}function g1(o){return o*Tp}function _1(o){return(o&o-1)===0&&o!==0}function v1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function x1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function y1(o,t,e,r,l){const f=Math.cos,h=Math.sin,p=f(e/2),g=h(e/2),_=f((t+r)/2),x=h((t+r)/2),y=f((t-r)/2),E=h((t-r)/2),T=f((r-t)/2),R=h((r-t)/2);switch(l){case"XYX":o.set(p*x,g*y,g*E,p*_);break;case"YZY":o.set(g*E,p*x,g*y,p*_);break;case"ZXZ":o.set(g*y,g*E,p*x,p*_);break;case"XZX":o.set(p*x,g*R,g*T,p*_);break;case"YXY":o.set(g*T,p*x,g*R,p*_);break;case"ZYZ":o.set(g*R,g*T,p*x,p*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Za(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const S1={DEG2RAD:mp,RAD2DEG:Tp,generateUUID:bo,clamp:Xe,euclideanModulo:Fx,mapLinear:a1,inverseLerp:s1,lerp:gp,damp:o1,pingpong:l1,smoothstep:u1,smootherstep:c1,randInt:f1,randFloat:h1,randFloatSpread:d1,seededRandom:p1,degToRad:m1,radToDeg:g1,isPowerOfTwo:_1,ceilPowerOfTwo:v1,floorPowerOfTwo:x1,setQuaternionFromProperEuler:y1,normalize:Nn,denormalize:Za};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,l=t.elements;return this.x=l[0]*e+l[3]*r+l[6],this.y=l[1]*e+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xe(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),l=Math.sin(e),f=this.x-t.x,h=this.y-t.y;return this.x=f*r-h*l+t.x,this.y=f*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(t,e,r,l,f,h,p,g,_){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,l,f,h,p,g,_)}set(t,e,r,l,f,h,p,g,_){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=e,x[4]=f,x[5]=g,x[6]=r,x[7]=h,x[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,l=e.elements,f=this.elements,h=r[0],p=r[3],g=r[6],_=r[1],x=r[4],y=r[7],E=r[2],T=r[5],R=r[8],C=l[0],b=l[3],M=l[6],H=l[1],z=l[4],N=l[7],X=l[2],W=l[5],k=l[8];return f[0]=h*C+p*H+g*X,f[3]=h*b+p*z+g*W,f[6]=h*M+p*N+g*k,f[1]=_*C+x*H+y*X,f[4]=_*b+x*z+y*W,f[7]=_*M+x*N+y*k,f[2]=E*C+T*H+R*X,f[5]=E*b+T*z+R*W,f[8]=E*M+T*N+R*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],_=t[7],x=t[8];return e*h*x-e*p*_-r*f*x+r*p*g+l*f*_-l*h*g}invert(){const t=this.elements,e=t[0],r=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],_=t[7],x=t[8],y=x*h-p*_,E=p*g-x*f,T=_*f-h*g,R=e*y+r*E+l*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=y*C,t[1]=(l*_-x*r)*C,t[2]=(p*r-l*h)*C,t[3]=E*C,t[4]=(x*e-l*g)*C,t[5]=(l*f-p*e)*C,t[6]=T*C,t[7]=(r*g-_*e)*C,t[8]=(h*e-r*f)*C,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,l,f,h,p){const g=Math.cos(f),_=Math.sin(f);return this.set(r*g,r*_,-r*(g*h+_*p)+h+t,-l*_,l*g,-l*(-_*h+g*p)+p+e,0,0,1),this}scale(t,e){return this.premultiply(J0.makeScale(t,e)),this}rotate(t){return this.premultiply(J0.makeRotation(-t)),this}translate(t,e){return this.premultiply(J0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let l=0;l<9;l++)if(e[l]!==r[l])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const J0=new He;function eE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bp(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function E1(){const o=bp("canvas");return o.style.display="block",o}const Sy={};function Qf(o){o in Sy||(Sy[o]=!0,console.warn(o))}function M1(o,t,e){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,e);break;default:r()}}setTimeout(f,e)})}function T1(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function b1(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ey=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),My=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A1(){const o={enabled:!0,workingColorSpace:oh,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===zn&&(l.r=Ao(l.r),l.g=Ao(l.g),l.b=Ao(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===zn&&(l.r=th(l.r),l.g=th(l.g),l.b=th(l.b))),l},fromWorkingColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},toWorkingColorSpace:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===bl?D_:this.spaces[l].transfer},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[oh]:{primaries:t,whitePoint:r,transfer:D_,toXYZ:Ey,fromXYZ:My,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ya},outputColorSpaceConfig:{drawingBufferColorSpace:ya}},[ya]:{primaries:t,whitePoint:r,transfer:zn,toXYZ:Ey,fromXYZ:My,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ya}}}),o}const vn=A1();function Ao(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function th(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Nf;class w1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Nf===void 0&&(Nf=bp("canvas")),Nf.width=t.width,Nf.height=t.height;const r=Nf.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=Nf}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bp("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ao(f[h]/255)*255;return r.putImageData(l,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Ao(e[r]/255)*255):e[r]=Ao(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R1=0;class nE{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=bo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?f.push($0(l[h].image)):f.push($0(l[h]))}else f=$0(l);r.url=f}return e||(t.images[this.uuid]=r),r}}function $0(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?w1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C1=0;class Ar extends ch{constructor(t=Ar.DEFAULT_IMAGE,e=Ar.DEFAULT_MAPPING,r=Ku,l=Ku,f=Is,h=Qu,p=Ka,g=wo,_=Ar.DEFAULT_ANISOTROPY,x=bl){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=bo(),this.name="",this.source=new nE(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=p,this.internalFormat=null,this.type=g,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==VS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qv:t.x=t.x-Math.floor(t.x);break;case Ku:t.x=t.x<0?0:1;break;case Yv:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qv:t.y=t.y-Math.floor(t.y);break;case Ku:t.y=t.y<0?0:1;break;case Yv:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ar.DEFAULT_IMAGE=null;Ar.DEFAULT_MAPPING=VS;Ar.DEFAULT_ANISOTROPY=1;class mn{constructor(t=0,e=0,r=0,l=1){mn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,l){return this.x=t,this.y=e,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,l=this.z,f=this.w,h=t.elements;return this.x=h[0]*e+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*e+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*e+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*e+h[7]*r+h[11]*l+h[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,l,f;const g=t.elements,_=g[0],x=g[4],y=g[8],E=g[1],T=g[5],R=g[9],C=g[2],b=g[6],M=g[10];if(Math.abs(x-E)<.01&&Math.abs(y-C)<.01&&Math.abs(R-b)<.01){if(Math.abs(x+E)<.1&&Math.abs(y+C)<.1&&Math.abs(R+b)<.1&&Math.abs(_+T+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const z=(_+1)/2,N=(T+1)/2,X=(M+1)/2,W=(x+E)/4,k=(y+C)/4,K=(R+b)/4;return z>N&&z>X?z<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(z),l=W/r,f=k/r):N>X?N<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(N),r=W/l,f=K/l):X<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(X),r=k/f,l=K/f),this.set(r,l,f,e),this}let H=Math.sqrt((b-R)*(b-R)+(y-C)*(y-C)+(E-x)*(E-x));return Math.abs(H)<.001&&(H=1),this.x=(b-R)/H,this.y=(y-C)/H,this.z=(E-x)/H,this.w=Math.acos((_+T+M-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this.w=Xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this.w=Xe(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xe(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D1 extends ch{constructor(t=1,e=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new mn(0,0,t,e),this.scissorTest=!1,this.viewport=new mn(0,0,t,e);const l={width:t,height:e,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Is,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const f=new Ar(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);f.flipY=!1,f.generateMipmaps=r.generateMipmaps,f.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let p=0;p<h;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=t,this.textures[l].image.height=e,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new nE(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tc extends D1{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class iE extends Ar{constructor(t=null,e=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:l},this.magFilter=Qa,this.minFilter=Qa,this.wrapR=Ku,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L1 extends Ar{constructor(t=null,e=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:l},this.magFilter=Qa,this.minFilter=Qa,this.wrapR=Ku,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wp{constructor(t=0,e=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=l}static slerpFlat(t,e,r,l,f,h,p){let g=r[l+0],_=r[l+1],x=r[l+2],y=r[l+3];const E=f[h+0],T=f[h+1],R=f[h+2],C=f[h+3];if(p===0){t[e+0]=g,t[e+1]=_,t[e+2]=x,t[e+3]=y;return}if(p===1){t[e+0]=E,t[e+1]=T,t[e+2]=R,t[e+3]=C;return}if(y!==C||g!==E||_!==T||x!==R){let b=1-p;const M=g*E+_*T+x*R+y*C,H=M>=0?1:-1,z=1-M*M;if(z>Number.EPSILON){const X=Math.sqrt(z),W=Math.atan2(X,M*H);b=Math.sin(b*W)/X,p=Math.sin(p*W)/X}const N=p*H;if(g=g*b+E*N,_=_*b+T*N,x=x*b+R*N,y=y*b+C*N,b===1-p){const X=1/Math.sqrt(g*g+_*_+x*x+y*y);g*=X,_*=X,x*=X,y*=X}}t[e]=g,t[e+1]=_,t[e+2]=x,t[e+3]=y}static multiplyQuaternionsFlat(t,e,r,l,f,h){const p=r[l],g=r[l+1],_=r[l+2],x=r[l+3],y=f[h],E=f[h+1],T=f[h+2],R=f[h+3];return t[e]=p*R+x*y+g*T-_*E,t[e+1]=g*R+x*E+_*y-p*T,t[e+2]=_*R+x*T+p*E-g*y,t[e+3]=x*R-p*y-g*E-_*T,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,l){return this._x=t,this._y=e,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,l=t._y,f=t._z,h=t._order,p=Math.cos,g=Math.sin,_=p(r/2),x=p(l/2),y=p(f/2),E=g(r/2),T=g(l/2),R=g(f/2);switch(h){case"XYZ":this._x=E*x*y+_*T*R,this._y=_*T*y-E*x*R,this._z=_*x*R+E*T*y,this._w=_*x*y-E*T*R;break;case"YXZ":this._x=E*x*y+_*T*R,this._y=_*T*y-E*x*R,this._z=_*x*R-E*T*y,this._w=_*x*y+E*T*R;break;case"ZXY":this._x=E*x*y-_*T*R,this._y=_*T*y+E*x*R,this._z=_*x*R+E*T*y,this._w=_*x*y-E*T*R;break;case"ZYX":this._x=E*x*y-_*T*R,this._y=_*T*y+E*x*R,this._z=_*x*R-E*T*y,this._w=_*x*y+E*T*R;break;case"YZX":this._x=E*x*y+_*T*R,this._y=_*T*y+E*x*R,this._z=_*x*R-E*T*y,this._w=_*x*y-E*T*R;break;case"XZY":this._x=E*x*y-_*T*R,this._y=_*T*y-E*x*R,this._z=_*x*R+E*T*y,this._w=_*x*y+E*T*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],l=e[4],f=e[8],h=e[1],p=e[5],g=e[9],_=e[2],x=e[6],y=e[10],E=r+p+y;if(E>0){const T=.5/Math.sqrt(E+1);this._w=.25/T,this._x=(x-g)*T,this._y=(f-_)*T,this._z=(h-l)*T}else if(r>p&&r>y){const T=2*Math.sqrt(1+r-p-y);this._w=(x-g)/T,this._x=.25*T,this._y=(l+h)/T,this._z=(f+_)/T}else if(p>y){const T=2*Math.sqrt(1+p-r-y);this._w=(f-_)/T,this._x=(l+h)/T,this._y=.25*T,this._z=(g+x)/T}else{const T=2*Math.sqrt(1+y-r-p);this._w=(h-l)/T,this._x=(f+_)/T,this._y=(g+x)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,e/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,l=t._y,f=t._z,h=t._w,p=e._x,g=e._y,_=e._z,x=e._w;return this._x=r*x+h*p+l*_-f*g,this._y=l*x+h*g+f*p-r*_,this._z=f*x+h*_+r*g-l*p,this._w=h*x-r*p-l*g-f*_,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,l=this._y,f=this._z,h=this._w;let p=h*t._w+r*t._x+l*t._y+f*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const g=1-p*p;if(g<=Number.EPSILON){const T=1-e;return this._w=T*h+e*this._w,this._x=T*r+e*this._x,this._y=T*l+e*this._y,this._z=T*f+e*this._z,this.normalize(),this}const _=Math.sqrt(g),x=Math.atan2(_,p),y=Math.sin((1-e)*x)/_,E=Math.sin(e*x)/_;return this._w=h*y+this._w*E,this._x=r*y+this._x*E,this._y=l*y+this._y*E,this._z=f*y+this._z*E,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),f*Math.sin(e),f*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,r=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ty.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ty.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,l=this.z,f=t.elements;return this.x=f[0]*e+f[3]*r+f[6]*l,this.y=f[1]*e+f[4]*r+f[7]*l,this.z=f[2]*e+f[5]*r+f[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,l=this.z,f=t.elements,h=1/(f[3]*e+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*e+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*e+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*e+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(t){const e=this.x,r=this.y,l=this.z,f=t.x,h=t.y,p=t.z,g=t.w,_=2*(h*l-p*r),x=2*(p*e-f*l),y=2*(f*r-h*e);return this.x=e+g*_+h*y-p*x,this.y=r+g*x+p*_-f*y,this.z=l+g*y+f*x-h*_,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,l=this.z,f=t.elements;return this.x=f[0]*e+f[4]*r+f[8]*l,this.y=f[1]*e+f[5]*r+f[9]*l,this.z=f[2]*e+f[6]*r+f[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xe(this.x,t.x,e.x),this.y=Xe(this.y,t.y,e.y),this.z=Xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xe(this.x,t,e),this.y=Xe(this.y,t,e),this.z=Xe(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Xe(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,l=t.y,f=t.z,h=e.x,p=e.y,g=e.z;return this.x=l*g-f*p,this.y=f*h-r*g,this.z=r*p-l*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return tv.copy(this).projectOnVector(t),this.sub(tv)}reflect(t){return this.sub(tv.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return e*e+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const l=Math.sin(e)*t;return this.x=l*Math.sin(r),this.y=Math.cos(e)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=l,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tv=new I,Ty=new wp;class Dl{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(Xa.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(Xa.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=Xa.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const f=r.getAttribute("position");if(e===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=f.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Xa):Xa.fromBufferAttribute(f,h),Xa.applyMatrix4(t.matrixWorld),this.expandByPoint(Xa);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yg.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yg.copy(r.boundingBox)),Yg.applyMatrix4(t.matrixWorld),this.union(Yg)}const l=t.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xa),Xa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jd),Zg.subVectors(this.max,Jd),Of.subVectors(t.a,Jd),If.subVectors(t.b,Jd),Pf.subVectors(t.c,Jd),vl.subVectors(If,Of),xl.subVectors(Pf,If),Hu.subVectors(Of,Pf);let e=[0,-vl.z,vl.y,0,-xl.z,xl.y,0,-Hu.z,Hu.y,vl.z,0,-vl.x,xl.z,0,-xl.x,Hu.z,0,-Hu.x,-vl.y,vl.x,0,-xl.y,xl.x,0,-Hu.y,Hu.x,0];return!ev(e,Of,If,Pf,Zg)||(e=[1,0,0,0,1,0,0,0,1],!ev(e,Of,If,Pf,Zg))?!1:(Kg.crossVectors(vl,xl),e=[Kg.x,Kg.y,Kg.z],ev(e,Of,If,Pf,Zg))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xa).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xa).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(po[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),po[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),po[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),po[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),po[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),po[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),po[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),po[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(po),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const po=[new I,new I,new I,new I,new I,new I,new I,new I],Xa=new I,Yg=new Dl,Of=new I,If=new I,Pf=new I,vl=new I,xl=new I,Hu=new I,Jd=new I,Zg=new I,Kg=new I,Gu=new I;function ev(o,t,e,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Gu.fromArray(o,f);const p=l.x*Math.abs(Gu.x)+l.y*Math.abs(Gu.y)+l.z*Math.abs(Gu.z),g=t.dot(Gu),_=e.dot(Gu),x=r.dot(Gu);if(Math.max(-Math.max(g,_,x),Math.min(g,_,x))>p)return!1}return!0}const U1=new Dl,$d=new I,nv=new I;class Rp{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):U1.setFromPoints(t).getCenter(r);let l=0;for(let f=0,h=t.length;f<h;f++)l=Math.max(l,r.distanceToSquared(t[f]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$d.subVectors(t,this.center);const e=$d.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),l=(r-this.radius)*.5;this.center.addScaledVector($d,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nv.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($d.copy(t.center).add(nv)),this.expandByPoint($d.copy(t.center).sub(nv))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mo=new I,iv=new I,Qg=new I,yl=new I,rv=new I,jg=new I,av=new I;class rE{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mo)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mo.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mo.copy(this.origin).addScaledVector(this.direction,e),mo.distanceToSquared(t))}distanceSqToSegment(t,e,r,l){iv.copy(t).add(e).multiplyScalar(.5),Qg.copy(e).sub(t).normalize(),yl.copy(this.origin).sub(iv);const f=t.distanceTo(e)*.5,h=-this.direction.dot(Qg),p=yl.dot(this.direction),g=-yl.dot(Qg),_=yl.lengthSq(),x=Math.abs(1-h*h);let y,E,T,R;if(x>0)if(y=h*g-p,E=h*p-g,R=f*x,y>=0)if(E>=-R)if(E<=R){const C=1/x;y*=C,E*=C,T=y*(y+h*E+2*p)+E*(h*y+E+2*g)+_}else E=f,y=Math.max(0,-(h*E+p)),T=-y*y+E*(E+2*g)+_;else E=-f,y=Math.max(0,-(h*E+p)),T=-y*y+E*(E+2*g)+_;else E<=-R?(y=Math.max(0,-(-h*f+p)),E=y>0?-f:Math.min(Math.max(-f,-g),f),T=-y*y+E*(E+2*g)+_):E<=R?(y=0,E=Math.min(Math.max(-f,-g),f),T=E*(E+2*g)+_):(y=Math.max(0,-(h*f+p)),E=y>0?f:Math.min(Math.max(-f,-g),f),T=-y*y+E*(E+2*g)+_);else E=h>0?-f:f,y=Math.max(0,-(h*E+p)),T=-y*y+E*(E+2*g)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(iv).addScaledVector(Qg,E),T}intersectSphere(t,e){mo.subVectors(t.center,this.origin);const r=mo.dot(this.direction),l=mo.dot(mo)-r*r,f=t.radius*t.radius;if(l>f)return null;const h=Math.sqrt(f-l),p=r-h,g=r+h;return g<0?null:p<0?this.at(g,e):this.at(p,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,l,f,h,p,g;const _=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,E=this.origin;return _>=0?(r=(t.min.x-E.x)*_,l=(t.max.x-E.x)*_):(r=(t.max.x-E.x)*_,l=(t.min.x-E.x)*_),x>=0?(f=(t.min.y-E.y)*x,h=(t.max.y-E.y)*x):(f=(t.max.y-E.y)*x,h=(t.min.y-E.y)*x),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),y>=0?(p=(t.min.z-E.z)*y,g=(t.max.z-E.z)*y):(p=(t.max.z-E.z)*y,g=(t.min.z-E.z)*y),r>g||p>l)||((p>r||r!==r)&&(r=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,e)}intersectsBox(t){return this.intersectBox(t,mo)!==null}intersectTriangle(t,e,r,l,f){rv.subVectors(e,t),jg.subVectors(r,t),av.crossVectors(rv,jg);let h=this.direction.dot(av),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;yl.subVectors(this.origin,t);const g=p*this.direction.dot(jg.crossVectors(yl,jg));if(g<0)return null;const _=p*this.direction.dot(rv.cross(yl));if(_<0||g+_>h)return null;const x=-p*yl.dot(av);return x<0?null:this.at(x/h,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn{constructor(t,e,r,l,f,h,p,g,_,x,y,E,T,R,C,b){Gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,l,f,h,p,g,_,x,y,E,T,R,C,b)}set(t,e,r,l,f,h,p,g,_,x,y,E,T,R,C,b){const M=this.elements;return M[0]=t,M[4]=e,M[8]=r,M[12]=l,M[1]=f,M[5]=h,M[9]=p,M[13]=g,M[2]=_,M[6]=x,M[10]=y,M[14]=E,M[3]=T,M[7]=R,M[11]=C,M[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gn().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,l=1/zf.setFromMatrixColumn(t,0).length(),f=1/zf.setFromMatrixColumn(t,1).length(),h=1/zf.setFromMatrixColumn(t,2).length();return e[0]=r[0]*l,e[1]=r[1]*l,e[2]=r[2]*l,e[3]=0,e[4]=r[4]*f,e[5]=r[5]*f,e[6]=r[6]*f,e[7]=0,e[8]=r[8]*h,e[9]=r[9]*h,e[10]=r[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,l=t.y,f=t.z,h=Math.cos(r),p=Math.sin(r),g=Math.cos(l),_=Math.sin(l),x=Math.cos(f),y=Math.sin(f);if(t.order==="XYZ"){const E=h*x,T=h*y,R=p*x,C=p*y;e[0]=g*x,e[4]=-g*y,e[8]=_,e[1]=T+R*_,e[5]=E-C*_,e[9]=-p*g,e[2]=C-E*_,e[6]=R+T*_,e[10]=h*g}else if(t.order==="YXZ"){const E=g*x,T=g*y,R=_*x,C=_*y;e[0]=E+C*p,e[4]=R*p-T,e[8]=h*_,e[1]=h*y,e[5]=h*x,e[9]=-p,e[2]=T*p-R,e[6]=C+E*p,e[10]=h*g}else if(t.order==="ZXY"){const E=g*x,T=g*y,R=_*x,C=_*y;e[0]=E-C*p,e[4]=-h*y,e[8]=R+T*p,e[1]=T+R*p,e[5]=h*x,e[9]=C-E*p,e[2]=-h*_,e[6]=p,e[10]=h*g}else if(t.order==="ZYX"){const E=h*x,T=h*y,R=p*x,C=p*y;e[0]=g*x,e[4]=R*_-T,e[8]=E*_+C,e[1]=g*y,e[5]=C*_+E,e[9]=T*_-R,e[2]=-_,e[6]=p*g,e[10]=h*g}else if(t.order==="YZX"){const E=h*g,T=h*_,R=p*g,C=p*_;e[0]=g*x,e[4]=C-E*y,e[8]=R*y+T,e[1]=y,e[5]=h*x,e[9]=-p*x,e[2]=-_*x,e[6]=T*y+R,e[10]=E-C*y}else if(t.order==="XZY"){const E=h*g,T=h*_,R=p*g,C=p*_;e[0]=g*x,e[4]=-y,e[8]=_*x,e[1]=E*y+C,e[5]=h*x,e[9]=T*y-R,e[2]=R*y-T,e[6]=p*x,e[10]=C*y+E}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N1,t,O1)}lookAt(t,e,r){const l=this.elements;return na.subVectors(t,e),na.lengthSq()===0&&(na.z=1),na.normalize(),Sl.crossVectors(r,na),Sl.lengthSq()===0&&(Math.abs(r.z)===1?na.x+=1e-4:na.z+=1e-4,na.normalize(),Sl.crossVectors(r,na)),Sl.normalize(),Jg.crossVectors(na,Sl),l[0]=Sl.x,l[4]=Jg.x,l[8]=na.x,l[1]=Sl.y,l[5]=Jg.y,l[9]=na.y,l[2]=Sl.z,l[6]=Jg.z,l[10]=na.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,l=e.elements,f=this.elements,h=r[0],p=r[4],g=r[8],_=r[12],x=r[1],y=r[5],E=r[9],T=r[13],R=r[2],C=r[6],b=r[10],M=r[14],H=r[3],z=r[7],N=r[11],X=r[15],W=l[0],k=l[4],K=l[8],F=l[12],O=l[1],j=l[5],pt=l[9],_t=l[13],At=l[2],Tt=l[6],Y=l[10],ot=l[14],it=l[3],Wt=l[7],V=l[11],ut=l[15];return f[0]=h*W+p*O+g*At+_*it,f[4]=h*k+p*j+g*Tt+_*Wt,f[8]=h*K+p*pt+g*Y+_*V,f[12]=h*F+p*_t+g*ot+_*ut,f[1]=x*W+y*O+E*At+T*it,f[5]=x*k+y*j+E*Tt+T*Wt,f[9]=x*K+y*pt+E*Y+T*V,f[13]=x*F+y*_t+E*ot+T*ut,f[2]=R*W+C*O+b*At+M*it,f[6]=R*k+C*j+b*Tt+M*Wt,f[10]=R*K+C*pt+b*Y+M*V,f[14]=R*F+C*_t+b*ot+M*ut,f[3]=H*W+z*O+N*At+X*it,f[7]=H*k+z*j+N*Tt+X*Wt,f[11]=H*K+z*pt+N*Y+X*V,f[15]=H*F+z*_t+N*ot+X*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],l=t[8],f=t[12],h=t[1],p=t[5],g=t[9],_=t[13],x=t[2],y=t[6],E=t[10],T=t[14],R=t[3],C=t[7],b=t[11],M=t[15];return R*(+f*g*y-l*_*y-f*p*E+r*_*E+l*p*T-r*g*T)+C*(+e*g*T-e*_*E+f*h*E-l*h*T+l*_*x-f*g*x)+b*(+e*_*y-e*p*T-f*h*y+r*h*T+f*p*x-r*_*x)+M*(-l*p*x-e*g*y+e*p*E+l*h*y-r*h*E+r*g*x)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=e,l[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],l=t[2],f=t[3],h=t[4],p=t[5],g=t[6],_=t[7],x=t[8],y=t[9],E=t[10],T=t[11],R=t[12],C=t[13],b=t[14],M=t[15],H=y*b*_-C*E*_+C*g*T-p*b*T-y*g*M+p*E*M,z=R*E*_-x*b*_-R*g*T+h*b*T+x*g*M-h*E*M,N=x*C*_-R*y*_+R*p*T-h*C*T-x*p*M+h*y*M,X=R*y*g-x*C*g-R*p*E+h*C*E+x*p*b-h*y*b,W=e*H+r*z+l*N+f*X;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/W;return t[0]=H*k,t[1]=(C*E*f-y*b*f-C*l*T+r*b*T+y*l*M-r*E*M)*k,t[2]=(p*b*f-C*g*f+C*l*_-r*b*_-p*l*M+r*g*M)*k,t[3]=(y*g*f-p*E*f-y*l*_+r*E*_+p*l*T-r*g*T)*k,t[4]=z*k,t[5]=(x*b*f-R*E*f+R*l*T-e*b*T-x*l*M+e*E*M)*k,t[6]=(R*g*f-h*b*f-R*l*_+e*b*_+h*l*M-e*g*M)*k,t[7]=(h*E*f-x*g*f+x*l*_-e*E*_-h*l*T+e*g*T)*k,t[8]=N*k,t[9]=(R*y*f-x*C*f-R*r*T+e*C*T+x*r*M-e*y*M)*k,t[10]=(h*C*f-R*p*f+R*r*_-e*C*_-h*r*M+e*p*M)*k,t[11]=(x*p*f-h*y*f-x*r*_+e*y*_+h*r*T-e*p*T)*k,t[12]=X*k,t[13]=(x*C*l-R*y*l+R*r*E-e*C*E-x*r*b+e*y*b)*k,t[14]=(R*p*l-h*C*l-R*r*g+e*C*g+h*r*b-e*p*b)*k,t[15]=(h*y*l-x*p*l+x*r*g-e*y*g-h*r*E+e*p*E)*k,this}scale(t){const e=this.elements,r=t.x,l=t.y,f=t.z;return e[0]*=r,e[4]*=l,e[8]*=f,e[1]*=r,e[5]*=l,e[9]*=f,e[2]*=r,e[6]*=l,e[10]*=f,e[3]*=r,e[7]*=l,e[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,l))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),l=Math.sin(e),f=1-r,h=t.x,p=t.y,g=t.z,_=f*h,x=f*p;return this.set(_*h+r,_*p-l*g,_*g+l*p,0,_*p+l*g,x*p+r,x*g-l*h,0,_*g-l*p,x*g+l*h,f*g*g+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,l,f,h){return this.set(1,r,f,0,t,1,h,0,e,l,1,0,0,0,0,1),this}compose(t,e,r){const l=this.elements,f=e._x,h=e._y,p=e._z,g=e._w,_=f+f,x=h+h,y=p+p,E=f*_,T=f*x,R=f*y,C=h*x,b=h*y,M=p*y,H=g*_,z=g*x,N=g*y,X=r.x,W=r.y,k=r.z;return l[0]=(1-(C+M))*X,l[1]=(T+N)*X,l[2]=(R-z)*X,l[3]=0,l[4]=(T-N)*W,l[5]=(1-(E+M))*W,l[6]=(b+H)*W,l[7]=0,l[8]=(R+z)*k,l[9]=(b-H)*k,l[10]=(1-(E+C))*k,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,e,r){const l=this.elements;let f=zf.set(l[0],l[1],l[2]).length();const h=zf.set(l[4],l[5],l[6]).length(),p=zf.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),t.x=l[12],t.y=l[13],t.z=l[14],qa.copy(this);const _=1/f,x=1/h,y=1/p;return qa.elements[0]*=_,qa.elements[1]*=_,qa.elements[2]*=_,qa.elements[4]*=x,qa.elements[5]*=x,qa.elements[6]*=x,qa.elements[8]*=y,qa.elements[9]*=y,qa.elements[10]*=y,e.setFromRotationMatrix(qa),r.x=f,r.y=h,r.z=p,this}makePerspective(t,e,r,l,f,h,p=Mo){const g=this.elements,_=2*f/(e-t),x=2*f/(r-l),y=(e+t)/(e-t),E=(r+l)/(r-l);let T,R;if(p===Mo)T=-(h+f)/(h-f),R=-2*h*f/(h-f);else if(p===L_)T=-h/(h-f),R=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=_,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=x,g[9]=E,g[13]=0,g[2]=0,g[6]=0,g[10]=T,g[14]=R,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,e,r,l,f,h,p=Mo){const g=this.elements,_=1/(e-t),x=1/(r-l),y=1/(h-f),E=(e+t)*_,T=(r+l)*x;let R,C;if(p===Mo)R=(h+f)*y,C=-2*y;else if(p===L_)R=f*y,C=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=2*_,g[4]=0,g[8]=0,g[12]=-E,g[1]=0,g[5]=2*x,g[9]=0,g[13]=-T,g[2]=0,g[6]=0,g[10]=C,g[14]=-R,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let l=0;l<16;l++)if(e[l]!==r[l])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const zf=new I,qa=new Gn,N1=new I(0,0,0),O1=new I(1,1,1),Sl=new I,Jg=new I,na=new I,by=new Gn,Ay=new wp;class zs{constructor(t=0,e=0,r=0,l=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,l=this._order){return this._x=t,this._y=e,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const l=t.elements,f=l[0],h=l[4],p=l[8],g=l[1],_=l[5],x=l[9],y=l[2],E=l[6],T=l[10];switch(e){case"XYZ":this._y=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,T),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(E,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,T),this._z=Math.atan2(g,_)):(this._y=Math.atan2(-y,f),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-y,T),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Xe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(E,T),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Xe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,_),this._y=Math.atan2(-y,f)):(this._x=0,this._y=Math.atan2(p,T));break;case"XZY":this._z=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(E,_),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-x,T),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return by.makeRotationFromQuaternion(t),this.setFromRotationMatrix(by,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ay.setFromEuler(this),this.setFromQuaternion(Ay,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class Hx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let I1=0;const wy=new I,Bf=new wp,go=new Gn,$g=new I,tp=new I,P1=new I,z1=new wp,Ry=new I(1,0,0),Cy=new I(0,1,0),Dy=new I(0,0,1),Ly={type:"added"},B1={type:"removed"},Ff={type:"childadded",child:null},sv={type:"childremoved",child:null};class cr extends ch{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cr.DEFAULT_UP.clone();const t=new I,e=new zs,r=new wp,l=new I(1,1,1);function f(){r.setFromEuler(e,!1)}function h(){e.setFromQuaternion(r,void 0,!1)}e._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Gn},normalMatrix:{value:new He}}),this.matrix=new Gn,this.matrixWorld=new Gn,this.matrixAutoUpdate=cr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bf.setFromAxisAngle(t,e),this.quaternion.multiply(Bf),this}rotateOnWorldAxis(t,e){return Bf.setFromAxisAngle(t,e),this.quaternion.premultiply(Bf),this}rotateX(t){return this.rotateOnAxis(Ry,t)}rotateY(t){return this.rotateOnAxis(Cy,t)}rotateZ(t){return this.rotateOnAxis(Dy,t)}translateOnAxis(t,e){return wy.copy(t).applyQuaternion(this.quaternion),this.position.add(wy.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ry,t)}translateY(t){return this.translateOnAxis(Cy,t)}translateZ(t){return this.translateOnAxis(Dy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(go.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?$g.copy(t):$g.set(t,e,r);const l=this.parent;this.updateWorldMatrix(!0,!1),tp.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?go.lookAt(tp,$g,this.up):go.lookAt($g,tp,this.up),this.quaternion.setFromRotationMatrix(go),l&&(go.extractRotation(l.matrixWorld),Bf.setFromRotationMatrix(go),this.quaternion.premultiply(Bf.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ly),Ff.child=t,this.dispatchEvent(Ff),Ff.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B1),sv.child=t,this.dispatchEvent(sv),sv.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),go.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),go.multiply(t.parent.matrixWorld)),t.applyMatrix4(go),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ly),Ff.child=t,this.dispatchEvent(Ff),Ff.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tp,t,P1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tp,z1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,l=e.length;r<l;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,l=e.length;r<l;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,l=e.length;r<l;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let _=0,x=g.length;_<x;_++){const y=g[_];f(t.shapes,y)}else f(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,_=this.material.length;g<_;g++)p.push(f(t.materials,this.material[g]));l.material=p}else l.material=f(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(f(t.animations,g))}}if(e){const p=h(t.geometries),g=h(t.materials),_=h(t.textures),x=h(t.images),y=h(t.shapes),E=h(t.skeletons),T=h(t.animations),R=h(t.nodes);p.length>0&&(r.geometries=p),g.length>0&&(r.materials=g),_.length>0&&(r.textures=_),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),E.length>0&&(r.skeletons=E),T.length>0&&(r.animations=T),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(p){const g=[];for(const _ in p){const x=p[_];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}cr.DEFAULT_UP=new I(0,1,0);cr.DEFAULT_MATRIX_AUTO_UPDATE=!0;cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ya=new I,_o=new I,ov=new I,vo=new I,Hf=new I,Gf=new I,Uy=new I,lv=new I,uv=new I,cv=new I,fv=new mn,hv=new mn,dv=new mn;class Sa{constructor(t=new I,e=new I,r=new I){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,l){l.subVectors(r,e),Ya.subVectors(t,e),l.cross(Ya);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(t,e,r,l,f){Ya.subVectors(l,e),_o.subVectors(r,e),ov.subVectors(t,e);const h=Ya.dot(Ya),p=Ya.dot(_o),g=Ya.dot(ov),_=_o.dot(_o),x=_o.dot(ov),y=h*_-p*p;if(y===0)return f.set(0,0,0),null;const E=1/y,T=(_*g-p*x)*E,R=(h*x-p*g)*E;return f.set(1-T-R,R,T)}static containsPoint(t,e,r,l){return this.getBarycoord(t,e,r,l,vo)===null?!1:vo.x>=0&&vo.y>=0&&vo.x+vo.y<=1}static getInterpolation(t,e,r,l,f,h,p,g){return this.getBarycoord(t,e,r,l,vo)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,vo.x),g.addScaledVector(h,vo.y),g.addScaledVector(p,vo.z),g)}static getInterpolatedAttribute(t,e,r,l,f,h){return fv.setScalar(0),hv.setScalar(0),dv.setScalar(0),fv.fromBufferAttribute(t,e),hv.fromBufferAttribute(t,r),dv.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(fv,f.x),h.addScaledVector(hv,f.y),h.addScaledVector(dv,f.z),h}static isFrontFacing(t,e,r,l){return Ya.subVectors(r,e),_o.subVectors(t,e),Ya.cross(_o).dot(l)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,l){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,e,r,l){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ya.subVectors(this.c,this.b),_o.subVectors(this.a,this.b),Ya.cross(_o).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sa.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,l,f){return Sa.getInterpolation(t,this.a,this.b,this.c,e,r,l,f)}containsPoint(t){return Sa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,l=this.b,f=this.c;let h,p;Hf.subVectors(l,r),Gf.subVectors(f,r),lv.subVectors(t,r);const g=Hf.dot(lv),_=Gf.dot(lv);if(g<=0&&_<=0)return e.copy(r);uv.subVectors(t,l);const x=Hf.dot(uv),y=Gf.dot(uv);if(x>=0&&y<=x)return e.copy(l);const E=g*y-x*_;if(E<=0&&g>=0&&x<=0)return h=g/(g-x),e.copy(r).addScaledVector(Hf,h);cv.subVectors(t,f);const T=Hf.dot(cv),R=Gf.dot(cv);if(R>=0&&T<=R)return e.copy(f);const C=T*_-g*R;if(C<=0&&_>=0&&R<=0)return p=_/(_-R),e.copy(r).addScaledVector(Gf,p);const b=x*R-T*y;if(b<=0&&y-x>=0&&T-R>=0)return Uy.subVectors(f,l),p=(y-x)/(y-x+(T-R)),e.copy(l).addScaledVector(Uy,p);const M=1/(b+C+E);return h=C*M,p=E*M,e.copy(r).addScaledVector(Hf,h).addScaledVector(Gf,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const aE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},El={h:0,s:0,l:0},t_={h:0,s:0,l:0};function pv(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class yt{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ya){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,vn.toWorkingColorSpace(this,e),this}setRGB(t,e,r,l=vn.workingColorSpace){return this.r=t,this.g=e,this.b=r,vn.toWorkingColorSpace(this,l),this}setHSL(t,e,r,l=vn.workingColorSpace){if(t=Fx(t,1),e=Xe(e,0,1),r=Xe(r,0,1),e===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+e):r+e-r*e,h=2*r-f;this.r=pv(h,f,t+1/3),this.g=pv(h,f,t),this.b=pv(h,f,t-1/3)}return vn.toWorkingColorSpace(this,l),this}setStyle(t,e=ya){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,e);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,e);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(f,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ya){const r=aE[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}copyLinearToSRGB(t){return this.r=th(t.r),this.g=th(t.g),this.b=th(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ya){return vn.fromWorkingColorSpace(ur.copy(this),t),Math.round(Xe(ur.r*255,0,255))*65536+Math.round(Xe(ur.g*255,0,255))*256+Math.round(Xe(ur.b*255,0,255))}getHexString(t=ya){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=vn.workingColorSpace){vn.fromWorkingColorSpace(ur.copy(this),e);const r=ur.r,l=ur.g,f=ur.b,h=Math.max(r,l,f),p=Math.min(r,l,f);let g,_;const x=(p+h)/2;if(p===h)g=0,_=0;else{const y=h-p;switch(_=x<=.5?y/(h+p):y/(2-h-p),h){case r:g=(l-f)/y+(l<f?6:0);break;case l:g=(f-r)/y+2;break;case f:g=(r-l)/y+4;break}g/=6}return t.h=g,t.s=_,t.l=x,t}getRGB(t,e=vn.workingColorSpace){return vn.fromWorkingColorSpace(ur.copy(this),e),t.r=ur.r,t.g=ur.g,t.b=ur.b,t}getStyle(t=ya){vn.fromWorkingColorSpace(ur.copy(this),t);const e=ur.r,r=ur.g,l=ur.b;return t!==ya?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,e,r){return this.getHSL(El),this.setHSL(El.h+t,El.s+e,El.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(El),t.getHSL(t_);const r=gp(El.h,t_.h,e),l=gp(El.s,t_.s,e),f=gp(El.l,t_.l,e);return this.setHSL(r,l,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,l=this.b,f=t.elements;return this.r=f[0]*e+f[3]*r+f[6]*l,this.g=f[1]*e+f[4]*r+f[7]*l,this.b=f[2]*e+f[5]*r+f[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ur=new yt;yt.NAMES=aE;let F1=0;class fh extends ch{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Jf,this.side=Rl,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iv,this.blendDst=Pv,this.blendEquation=Yu,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=nh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uf,this.stencilZFail=Uf,this.stencilZPass=Uf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const l=this[e];if(l===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Jf&&(r.blending=this.blending),this.side!==Rl&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Iv&&(r.blendSrc=this.blendSrc),this.blendDst!==Pv&&(r.blendDst=this.blendDst),this.blendEquation!==Yu&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==nh&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vy&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Uf&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Uf&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Uf&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}if(e){const f=l(t.textures),h=l(t.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const l=e.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=e[f].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends fh{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zs,this.combine=GS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bi=new I,e_=new St;let H1=0;class ja{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=yx,this.updateRanges=[],this.gpuType=Eo,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[t+l]=e.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)e_.fromBufferAttribute(this,e),e_.applyMatrix3(t),this.setXY(e,e_.x,e_.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)bi.fromBufferAttribute(this,e),bi.applyMatrix3(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)bi.fromBufferAttribute(this,e),bi.applyMatrix4(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)bi.fromBufferAttribute(this,e),bi.applyNormalMatrix(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)bi.fromBufferAttribute(this,e),bi.transformDirection(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=Za(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Nn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Za(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Za(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Za(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Za(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,l){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,e,r,l,f){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array),l=Nn(l,this.array),f=Nn(f,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yx&&(t.usage=this.usage),t}}class sE extends ja{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class oE extends ja{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class Bn extends ja{constructor(t,e,r){super(new Float32Array(t),e,r)}}let G1=0;const xa=new Gn,mv=new cr,Vf=new I,ia=new Dl,ep=new Dl,Pi=new I;class fr extends ch{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eE(t)?oE:sE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new He().getNormalMatrix(t);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xa.makeRotationFromQuaternion(t),this.applyMatrix4(xa),this}rotateX(t){return xa.makeRotationX(t),this.applyMatrix4(xa),this}rotateY(t){return xa.makeRotationY(t),this.applyMatrix4(xa),this}rotateZ(t){return xa.makeRotationZ(t),this.applyMatrix4(xa),this}translate(t,e,r){return xa.makeTranslation(t,e,r),this.applyMatrix4(xa),this}scale(t,e,r){return xa.makeScale(t,e,r),this.applyMatrix4(xa),this}lookAt(t){return mv.lookAt(t),mv.updateMatrix(),this.applyMatrix4(mv.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vf).negate(),this.translate(Vf.x,Vf.y,Vf.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let l=0,f=t.length;l<f;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Bn(r,3))}else{const r=Math.min(t.length,e.count);for(let l=0;l<r;l++){const f=t[l];e.setXYZ(l,f.x,f.y,f.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,l=e.length;r<l;r++){const f=e[r];ia.setFromBufferAttribute(f),this.morphTargetsRelative?(Pi.addVectors(this.boundingBox.min,ia.min),this.boundingBox.expandByPoint(Pi),Pi.addVectors(this.boundingBox.max,ia.max),this.boundingBox.expandByPoint(Pi)):(this.boundingBox.expandByPoint(ia.min),this.boundingBox.expandByPoint(ia.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rp);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const r=this.boundingSphere.center;if(ia.setFromBufferAttribute(t),e)for(let f=0,h=e.length;f<h;f++){const p=e[f];ep.setFromBufferAttribute(p),this.morphTargetsRelative?(Pi.addVectors(ia.min,ep.min),ia.expandByPoint(Pi),Pi.addVectors(ia.max,ep.max),ia.expandByPoint(Pi)):(ia.expandByPoint(ep.min),ia.expandByPoint(ep.max))}ia.getCenter(r);let l=0;for(let f=0,h=t.count;f<h;f++)Pi.fromBufferAttribute(t,f),l=Math.max(l,r.distanceToSquared(Pi));if(e)for(let f=0,h=e.length;f<h;f++){const p=e[f],g=this.morphTargetsRelative;for(let _=0,x=p.count;_<x;_++)Pi.fromBufferAttribute(p,_),g&&(Vf.fromBufferAttribute(t,_),Pi.add(Vf)),l=Math.max(l,r.distanceToSquared(Pi))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,l=e.normal,f=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ja(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),p=[],g=[];for(let K=0;K<r.count;K++)p[K]=new I,g[K]=new I;const _=new I,x=new I,y=new I,E=new St,T=new St,R=new St,C=new I,b=new I;function M(K,F,O){_.fromBufferAttribute(r,K),x.fromBufferAttribute(r,F),y.fromBufferAttribute(r,O),E.fromBufferAttribute(f,K),T.fromBufferAttribute(f,F),R.fromBufferAttribute(f,O),x.sub(_),y.sub(_),T.sub(E),R.sub(E);const j=1/(T.x*R.y-R.x*T.y);isFinite(j)&&(C.copy(x).multiplyScalar(R.y).addScaledVector(y,-T.y).multiplyScalar(j),b.copy(y).multiplyScalar(T.x).addScaledVector(x,-R.x).multiplyScalar(j),p[K].add(C),p[F].add(C),p[O].add(C),g[K].add(b),g[F].add(b),g[O].add(b))}let H=this.groups;H.length===0&&(H=[{start:0,count:t.count}]);for(let K=0,F=H.length;K<F;++K){const O=H[K],j=O.start,pt=O.count;for(let _t=j,At=j+pt;_t<At;_t+=3)M(t.getX(_t+0),t.getX(_t+1),t.getX(_t+2))}const z=new I,N=new I,X=new I,W=new I;function k(K){X.fromBufferAttribute(l,K),W.copy(X);const F=p[K];z.copy(F),z.sub(X.multiplyScalar(X.dot(F))).normalize(),N.crossVectors(W,F);const j=N.dot(g[K])<0?-1:1;h.setXYZW(K,z.x,z.y,z.z,j)}for(let K=0,F=H.length;K<F;++K){const O=H[K],j=O.start,pt=O.count;for(let _t=j,At=j+pt;_t<At;_t+=3)k(t.getX(_t+0)),k(t.getX(_t+1)),k(t.getX(_t+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ja(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let E=0,T=r.count;E<T;E++)r.setXYZ(E,0,0,0);const l=new I,f=new I,h=new I,p=new I,g=new I,_=new I,x=new I,y=new I;if(t)for(let E=0,T=t.count;E<T;E+=3){const R=t.getX(E+0),C=t.getX(E+1),b=t.getX(E+2);l.fromBufferAttribute(e,R),f.fromBufferAttribute(e,C),h.fromBufferAttribute(e,b),x.subVectors(h,f),y.subVectors(l,f),x.cross(y),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,b),p.add(x),g.add(x),_.add(x),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(b,_.x,_.y,_.z)}else for(let E=0,T=e.count;E<T;E+=3)l.fromBufferAttribute(e,E+0),f.fromBufferAttribute(e,E+1),h.fromBufferAttribute(e,E+2),x.subVectors(h,f),y.subVectors(l,f),x.cross(y),r.setXYZ(E+0,x.x,x.y,x.z),r.setXYZ(E+1,x.x,x.y,x.z),r.setXYZ(E+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)Pi.fromBufferAttribute(t,e),Pi.normalize(),t.setXYZ(e,Pi.x,Pi.y,Pi.z)}toNonIndexed(){function t(p,g){const _=p.array,x=p.itemSize,y=p.normalized,E=new _.constructor(g.length*x);let T=0,R=0;for(let C=0,b=g.length;C<b;C++){p.isInterleavedBufferAttribute?T=g[C]*p.data.stride+p.offset:T=g[C]*x;for(let M=0;M<x;M++)E[R++]=_[T++]}return new ja(E,x,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fr,r=this.index.array,l=this.attributes;for(const p in l){const g=l[p],_=t(g,r);e.setAttribute(p,_)}const f=this.morphAttributes;for(const p in f){const g=[],_=f[p];for(let x=0,y=_.length;x<y;x++){const E=_[x],T=t(E,r);g.push(T)}e.morphAttributes[p]=g}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];e.addGroup(_.start,_.count,_.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const _ in g)g[_]!==void 0&&(t[_]=g[_]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const g in r){const _=r[g];t.data.attributes[g]=_.toJSON(t.data)}const l={};let f=!1;for(const g in this.morphAttributes){const _=this.morphAttributes[g],x=[];for(let y=0,E=_.length;y<E;y++){const T=_[y];x.push(T.toJSON(t.data))}x.length>0&&(l[g]=x,f=!0)}f&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(e));const l=t.attributes;for(const _ in l){const x=l[_];this.setAttribute(_,x.clone(e))}const f=t.morphAttributes;for(const _ in f){const x=[],y=f[_];for(let E=0,T=y.length;E<T;E++)x.push(y[E].clone(e));this.morphAttributes[_]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let _=0,x=h.length;_<x;_++){const y=h[_];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ny=new Gn,Vu=new rE,n_=new Rp,Oy=new I,i_=new I,r_=new I,a_=new I,gv=new I,s_=new I,Iy=new I,o_=new I;class Ai extends cr{constructor(t=new fr,e=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const l=e[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const p=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(t,e){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;e.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(f&&p){s_.set(0,0,0);for(let g=0,_=f.length;g<_;g++){const x=p[g],y=f[g];x!==0&&(gv.fromBufferAttribute(y,t),h?s_.addScaledVector(gv,x):s_.addScaledVector(gv.sub(e),x))}e.add(s_)}return e}raycast(t,e){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),n_.copy(r.boundingSphere),n_.applyMatrix4(f),Vu.copy(t.ray).recast(t.near),!(n_.containsPoint(Vu.origin)===!1&&(Vu.intersectSphere(n_,Oy)===null||Vu.origin.distanceToSquared(Oy)>(t.far-t.near)**2))&&(Ny.copy(f).invert(),Vu.copy(t.ray).applyMatrix4(Ny),!(r.boundingBox!==null&&Vu.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Vu)))}_computeIntersections(t,e,r){let l;const f=this.geometry,h=this.material,p=f.index,g=f.attributes.position,_=f.attributes.uv,x=f.attributes.uv1,y=f.attributes.normal,E=f.groups,T=f.drawRange;if(p!==null)if(Array.isArray(h))for(let R=0,C=E.length;R<C;R++){const b=E[R],M=h[b.materialIndex],H=Math.max(b.start,T.start),z=Math.min(p.count,Math.min(b.start+b.count,T.start+T.count));for(let N=H,X=z;N<X;N+=3){const W=p.getX(N),k=p.getX(N+1),K=p.getX(N+2);l=l_(this,M,t,r,_,x,y,W,k,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,e.push(l))}}else{const R=Math.max(0,T.start),C=Math.min(p.count,T.start+T.count);for(let b=R,M=C;b<M;b+=3){const H=p.getX(b),z=p.getX(b+1),N=p.getX(b+2);l=l_(this,h,t,r,_,x,y,H,z,N),l&&(l.faceIndex=Math.floor(b/3),e.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let R=0,C=E.length;R<C;R++){const b=E[R],M=h[b.materialIndex],H=Math.max(b.start,T.start),z=Math.min(g.count,Math.min(b.start+b.count,T.start+T.count));for(let N=H,X=z;N<X;N+=3){const W=N,k=N+1,K=N+2;l=l_(this,M,t,r,_,x,y,W,k,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=b.materialIndex,e.push(l))}}else{const R=Math.max(0,T.start),C=Math.min(g.count,T.start+T.count);for(let b=R,M=C;b<M;b+=3){const H=b,z=b+1,N=b+2;l=l_(this,h,t,r,_,x,y,H,z,N),l&&(l.faceIndex=Math.floor(b/3),e.push(l))}}}}function V1(o,t,e,r,l,f,h,p){let g;if(t.side===kr?g=r.intersectTriangle(h,f,l,!0,p):g=r.intersectTriangle(l,f,h,t.side===Rl,p),g===null)return null;o_.copy(p),o_.applyMatrix4(o.matrixWorld);const _=e.ray.origin.distanceTo(o_);return _<e.near||_>e.far?null:{distance:_,point:o_.clone(),object:o}}function l_(o,t,e,r,l,f,h,p,g,_){o.getVertexPosition(p,i_),o.getVertexPosition(g,r_),o.getVertexPosition(_,a_);const x=V1(o,t,e,r,i_,r_,a_,Iy);if(x){const y=new I;Sa.getBarycoord(Iy,i_,r_,a_,y),l&&(x.uv=Sa.getInterpolatedAttribute(l,p,g,_,y,new St)),f&&(x.uv1=Sa.getInterpolatedAttribute(f,p,g,_,y,new St)),h&&(x.normal=Sa.getInterpolatedAttribute(h,p,g,_,y,new I),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const E={a:p,b:g,c:_,normal:new I,materialIndex:0};Sa.getNormal(i_,r_,a_,E.normal),x.face=E,x.barycoord=y}return x}class ec extends fr{constructor(t=1,e=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const p=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const g=[],_=[],x=[],y=[];let E=0,T=0;R("z","y","x",-1,-1,r,e,t,h,f,0),R("z","y","x",1,-1,r,e,-t,h,f,1),R("x","z","y",1,1,t,r,e,l,h,2),R("x","z","y",1,-1,t,r,-e,l,h,3),R("x","y","z",1,-1,t,e,r,l,f,4),R("x","y","z",-1,-1,t,e,-r,l,f,5),this.setIndex(g),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(y,2));function R(C,b,M,H,z,N,X,W,k,K,F){const O=N/k,j=X/K,pt=N/2,_t=X/2,At=W/2,Tt=k+1,Y=K+1;let ot=0,it=0;const Wt=new I;for(let V=0;V<Y;V++){const ut=V*j-_t;for(let Ft=0;Ft<Tt;Ft++){const Vt=Ft*O-pt;Wt[C]=Vt*H,Wt[b]=ut*z,Wt[M]=At,_.push(Wt.x,Wt.y,Wt.z),Wt[C]=0,Wt[b]=0,Wt[M]=W>0?1:-1,x.push(Wt.x,Wt.y,Wt.z),y.push(Ft/k),y.push(1-V/K),ot+=1}}for(let V=0;V<K;V++)for(let ut=0;ut<k;ut++){const Ft=E+ut+Tt*V,Vt=E+ut+Tt*(V+1),ct=E+(ut+1)+Tt*(V+1),Dt=E+(ut+1)+Tt*V;g.push(Ft,Vt,Dt),g.push(Vt,ct,Dt),it+=6}p.addGroup(T,it,F),T+=it,E+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lh(o){const t={};for(const e in o){t[e]={};for(const r in o[e]){const l=o[e][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=l.clone():Array.isArray(l)?t[e][r]=l.slice():t[e][r]=l}}return t}function br(o){const t={};for(let e=0;e<o.length;e++){const r=lh(o[e]);for(const l in r)t[l]=r[l]}return t}function W1(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function lE(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:vn.workingColorSpace}const Gx={clone:lh,merge:br};var k1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ro extends fh{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k1,this.fragmentShader=X1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lh(t.uniforms),this.uniformsGroups=W1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?e.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[l]={type:"m4",value:h.toArray()}:e.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class uE extends cr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gn,this.projectionMatrix=new Gn,this.projectionMatrixInverse=new Gn,this.coordinateSystem=Mo}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ml=new I,Py=new St,zy=new St;class ra extends uE{constructor(t=50,e=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tp*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(mp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){Ml.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ml.x,Ml.y).multiplyScalar(-t/Ml.z),Ml.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ml.x,Ml.y).multiplyScalar(-t/Ml.z)}getViewSize(t,e){return this.getViewBounds(t,Py,zy),e.subVectors(zy,Py)}setViewOffset(t,e,r,l,f,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mp*.5*this.fov)/this.zoom,r=2*e,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,_=h.fullHeight;f+=h.offsetX*l/g,e-=h.offsetY*r/_,l*=h.width/g,r*=h.height/_}const p=this.filmOffset;p!==0&&(f+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,e,e-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wf=-90,kf=1;class q1 extends cr{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ra(Wf,kf,t,e);l.layers=this.layers,this.add(l);const f=new ra(Wf,kf,t,e);f.layers=this.layers,this.add(f);const h=new ra(Wf,kf,t,e);h.layers=this.layers,this.add(h);const p=new ra(Wf,kf,t,e);p.layers=this.layers,this.add(p);const g=new ra(Wf,kf,t,e);g.layers=this.layers,this.add(g);const _=new ra(Wf,kf,t,e);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,l,f,h,p,g]=e;for(const _ of e)this.remove(_);if(t===Mo)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===L_)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const _ of e)this.add(_),_.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,h,p,g,_,x]=this.children,y=t.getRenderTarget(),E=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(e,f),t.setRenderTarget(r,1,l),t.render(e,h),t.setRenderTarget(r,2,l),t.render(e,p),t.setRenderTarget(r,3,l),t.render(e,g),t.setRenderTarget(r,4,l),t.render(e,_),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(e,x),t.setRenderTarget(y,E,T),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class cE extends Ar{constructor(t,e,r,l,f,h,p,g,_,x){t=t!==void 0?t:[],e=e!==void 0?e:ih,super(t,e,r,l,f,h,p,g,_,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y1 extends tc{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new cE(l,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Is}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ec(5,5,5),f=new Ro({name:"CubemapFromEquirect",uniforms:lh(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kr,blending:Al});f.uniforms.tEquirect.value=e;const h=new Ai(l,f),p=e.minFilter;return e.minFilter===Qu&&(e.minFilter=Is),new q1(1,10,this).update(t,h),e.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,r,l){const f=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,r,l);t.setRenderTarget(f)}}class u_ extends cr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class _v{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new u_,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new u_,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new u_,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let l=null,f=null,h=null;const p=this._targetRay,g=this._grip,_=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(_&&t.hand){h=!0;for(const C of t.hand.values()){const b=e.getJointPose(C,r),M=this._getHandJoint(_,C);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}const x=_.joints["index-finger-tip"],y=_.joints["thumb-tip"],E=x.position.distanceTo(y.position),T=.02,R=.005;_.inputState.pinching&&E>T+R?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!_.inputState.pinching&&E<=T-R&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(f=e.getPose(t.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(l=e.getPose(t.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new u_;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class K1 extends cr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zs,this.environmentIntensity=1,this.environmentRotation=new zs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=yx,this.updateRanges=[],this.version=0,this.uuid=bo()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,r){t*=this.stride,r*=e.stride;for(let l=0,f=this.stride;l<f;l++)this.array[t+l]=e.array[r+l];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bo()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(e,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bo()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tr=new I;class Ps{constructor(t,e,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,r=this.data.count;e<r;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix4(t),this.setXYZ(e,Tr.x,Tr.y,Tr.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Tr.fromBufferAttribute(this,e),Tr.applyNormalMatrix(t),this.setXYZ(e,Tr.x,Tr.y,Tr.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Tr.fromBufferAttribute(this,e),Tr.transformDirection(t),this.setXYZ(e,Tr.x,Tr.y,Tr.z);return this}getComponent(t,e){let r=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(r=Za(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Nn(r,this.array)),this.data.array[t*this.data.stride+this.offset+e]=r,this}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Za(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Za(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Za(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Za(e,this.array)),e}setXY(t,e,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this}setXYZ(t,e,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,e,r,l,f){return t=t*this.data.stride+this.offset,this.normalized&&(e=Nn(e,this.array),r=Nn(r,this.array),l=Nn(l,this.array),f=Nn(f,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=f,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)e.push(this.data.array[l+f])}return new ja(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ps(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)e.push(this.data.array[l+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sx extends fh{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xf;const np=new I,qf=new I,Yf=new I,Zf=new St,ip=new St,hE=new Gn,c_=new I,rp=new I,f_=new I,By=new St,vv=new St,Fy=new St;class Hy extends cr{constructor(t=new Sx){if(super(),this.isSprite=!0,this.type="Sprite",Xf===void 0){Xf=new fr;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new fE(e,5);Xf.setIndex([0,1,2,0,2,3]),Xf.setAttribute("position",new Ps(r,3,0,!1)),Xf.setAttribute("uv",new Ps(r,2,3,!1))}this.geometry=Xf,this.material=t,this.center=new St(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qf.setFromMatrixScale(this.matrixWorld),hE.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yf.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qf.multiplyScalar(-Yf.z);const r=this.material.rotation;let l,f;r!==0&&(f=Math.cos(r),l=Math.sin(r));const h=this.center;h_(c_.set(-.5,-.5,0),Yf,h,qf,l,f),h_(rp.set(.5,-.5,0),Yf,h,qf,l,f),h_(f_.set(.5,.5,0),Yf,h,qf,l,f),By.set(0,0),vv.set(1,0),Fy.set(1,1);let p=t.ray.intersectTriangle(c_,rp,f_,!1,np);if(p===null&&(h_(rp.set(-.5,.5,0),Yf,h,qf,l,f),vv.set(0,1),p=t.ray.intersectTriangle(c_,f_,rp,!1,np),p===null))return;const g=t.ray.origin.distanceTo(np);g<t.near||g>t.far||e.push({distance:g,point:np.clone(),uv:Sa.getInterpolation(np,c_,rp,f_,By,vv,Fy,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function h_(o,t,e,r,l,f){Zf.subVectors(o,e).addScalar(.5).multiply(r),l!==void 0?(ip.x=f*Zf.x-l*Zf.y,ip.y=l*Zf.x+f*Zf.y):ip.copy(Zf),o.copy(t),o.x+=ip.x,o.y+=ip.y,o.applyMatrix4(hE)}const xv=new I,Q1=new I,j1=new He;class Tl{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,l){return this.normal.set(t,e,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const l=xv.subVectors(r,e).cross(Q1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(xv),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:e.copy(t.start).addScaledVector(r,f)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||j1.getNormalMatrix(t),l=this.coplanarPoint(xv).applyMatrix4(t),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wu=new Rp,d_=new I;class Vx{constructor(t=new Tl,e=new Tl,r=new Tl,l=new Tl,f=new Tl,h=new Tl){this.planes=[t,e,r,l,f,h]}set(t,e,r,l,f,h){const p=this.planes;return p[0].copy(t),p[1].copy(e),p[2].copy(r),p[3].copy(l),p[4].copy(f),p[5].copy(h),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=Mo){const r=this.planes,l=t.elements,f=l[0],h=l[1],p=l[2],g=l[3],_=l[4],x=l[5],y=l[6],E=l[7],T=l[8],R=l[9],C=l[10],b=l[11],M=l[12],H=l[13],z=l[14],N=l[15];if(r[0].setComponents(g-f,E-_,b-T,N-M).normalize(),r[1].setComponents(g+f,E+_,b+T,N+M).normalize(),r[2].setComponents(g+h,E+x,b+R,N+H).normalize(),r[3].setComponents(g-h,E-x,b-R,N-H).normalize(),r[4].setComponents(g-p,E-y,b-C,N-z).normalize(),e===Mo)r[5].setComponents(g+p,E+y,b+C,N+z).normalize();else if(e===L_)r[5].setComponents(p,y,C,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wu.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wu.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wu)}intersectsSprite(t){return Wu.center.set(0,0,0),Wu.radius=.7071067811865476,Wu.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wu)}intersectsSphere(t){const e=this.planes,r=t.center,l=-t.radius;for(let f=0;f<6;f++)if(e[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const l=e[r];if(d_.x=l.normal.x>0?t.max.x:t.min.x,d_.y=l.normal.y>0?t.max.y:t.min.y,d_.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(d_)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dE extends Ar{constructor(t,e,r,l,f,h,p,g,_,x=$f){if(x!==$f&&x!==sh)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===$f&&(r=$u),r===void 0&&x===sh&&(r=ah),super(null,l,f,h,p,g,x,r,_),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=p!==void 0?p:Qa,this.minFilter=g!==void 0?g:Qa,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const r=this.getUtoTmapping(t);return this.getPoint(r,e)}getPoints(t=5){const e=[];for(let r=0;r<=t;r++)e.push(this.getPoint(r/t));return e}getSpacedPoints(t=5){const e=[];for(let r=0;r<=t;r++)e.push(this.getPointAt(r/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let r,l=this.getPoint(0),f=0;e.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),f+=r.distanceTo(l),e.push(f),l=r;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const r=this.getLengths();let l=0;const f=r.length;let h;e?h=e:h=t*r[f-1];let p=0,g=f-1,_;for(;p<=g;)if(l=Math.floor(p+(g-p)/2),_=r[l]-h,_<0)p=l+1;else if(_>0)g=l-1;else{g=l;break}if(l=g,r[l]===h)return l/(f-1);const x=r[l],E=r[l+1]-x,T=(h-x)/E;return(l+T)/(f-1)}getTangent(t,e){let l=t-1e-4,f=t+1e-4;l<0&&(l=0),f>1&&(f=1);const h=this.getPoint(l),p=this.getPoint(f),g=e||(h.isVector2?new St:new I);return g.copy(p).sub(h).normalize(),g}getTangentAt(t,e){const r=this.getUtoTmapping(t);return this.getTangent(r,e)}computeFrenetFrames(t,e){const r=new I,l=[],f=[],h=[],p=new I,g=new Gn;for(let T=0;T<=t;T++){const R=T/t;l[T]=this.getTangentAt(R,new I)}f[0]=new I,h[0]=new I;let _=Number.MAX_VALUE;const x=Math.abs(l[0].x),y=Math.abs(l[0].y),E=Math.abs(l[0].z);x<=_&&(_=x,r.set(1,0,0)),y<=_&&(_=y,r.set(0,1,0)),E<=_&&r.set(0,0,1),p.crossVectors(l[0],r).normalize(),f[0].crossVectors(l[0],p),h[0].crossVectors(l[0],f[0]);for(let T=1;T<=t;T++){if(f[T]=f[T-1].clone(),h[T]=h[T-1].clone(),p.crossVectors(l[T-1],l[T]),p.length()>Number.EPSILON){p.normalize();const R=Math.acos(Xe(l[T-1].dot(l[T]),-1,1));f[T].applyMatrix4(g.makeRotationAxis(p,R))}h[T].crossVectors(l[T],f[T])}if(e===!0){let T=Math.acos(Xe(f[0].dot(f[t]),-1,1));T/=t,l[0].dot(p.crossVectors(f[0],f[t]))>0&&(T=-T);for(let R=1;R<=t;R++)f[R].applyMatrix4(g.makeRotationAxis(l[R],T*R)),h[R].crossVectors(l[R],f[R])}return{tangents:l,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wx extends Bs{constructor(t=0,e=0,r=1,l=1,f=0,h=Math.PI*2,p=!1,g=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=r,this.yRadius=l,this.aStartAngle=f,this.aEndAngle=h,this.aClockwise=p,this.aRotation=g}getPoint(t,e=new St){const r=e,l=Math.PI*2;let f=this.aEndAngle-this.aStartAngle;const h=Math.abs(f)<Number.EPSILON;for(;f<0;)f+=l;for(;f>l;)f-=l;f<Number.EPSILON&&(h?f=0:f=l),this.aClockwise===!0&&!h&&(f===l?f=-l:f=f-l);const p=this.aStartAngle+t*f;let g=this.aX+this.xRadius*Math.cos(p),_=this.aY+this.yRadius*Math.sin(p);if(this.aRotation!==0){const x=Math.cos(this.aRotation),y=Math.sin(this.aRotation),E=g-this.aX,T=_-this.aY;g=E*x-T*y+this.aX,_=E*y+T*x+this.aY}return r.set(g,_)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class J1 extends Wx{constructor(t,e,r,l,f,h){super(t,e,r,r,l,f,h),this.isArcCurve=!0,this.type="ArcCurve"}}function kx(){let o=0,t=0,e=0,r=0;function l(f,h,p,g){o=f,t=p,e=-3*f+3*h-2*p-g,r=2*f-2*h+p+g}return{initCatmullRom:function(f,h,p,g,_){l(h,p,_*(p-f),_*(g-h))},initNonuniformCatmullRom:function(f,h,p,g,_,x,y){let E=(h-f)/_-(p-f)/(_+x)+(p-h)/x,T=(p-h)/x-(g-h)/(x+y)+(g-p)/y;E*=x,T*=x,l(h,p,E,T)},calc:function(f){const h=f*f,p=h*f;return o+t*f+e*h+r*p}}}const p_=new I,yv=new kx,Sv=new kx,Ev=new kx;class $1 extends Bs{constructor(t=[],e=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=r,this.tension=l}getPoint(t,e=new I){const r=e,l=this.points,f=l.length,h=(f-(this.closed?0:1))*t;let p=Math.floor(h),g=h-p;this.closed?p+=p>0?0:(Math.floor(Math.abs(p)/f)+1)*f:g===0&&p===f-1&&(p=f-2,g=1);let _,x;this.closed||p>0?_=l[(p-1)%f]:(p_.subVectors(l[0],l[1]).add(l[0]),_=p_);const y=l[p%f],E=l[(p+1)%f];if(this.closed||p+2<f?x=l[(p+2)%f]:(p_.subVectors(l[f-1],l[f-2]).add(l[f-1]),x=p_),this.curveType==="centripetal"||this.curveType==="chordal"){const T=this.curveType==="chordal"?.5:.25;let R=Math.pow(_.distanceToSquared(y),T),C=Math.pow(y.distanceToSquared(E),T),b=Math.pow(E.distanceToSquared(x),T);C<1e-4&&(C=1),R<1e-4&&(R=C),b<1e-4&&(b=C),yv.initNonuniformCatmullRom(_.x,y.x,E.x,x.x,R,C,b),Sv.initNonuniformCatmullRom(_.y,y.y,E.y,x.y,R,C,b),Ev.initNonuniformCatmullRom(_.z,y.z,E.z,x.z,R,C,b)}else this.curveType==="catmullrom"&&(yv.initCatmullRom(_.x,y.x,E.x,x.x,this.tension),Sv.initCatmullRom(_.y,y.y,E.y,x.y,this.tension),Ev.initCatmullRom(_.z,y.z,E.z,x.z,this.tension));return r.set(yv.calc(g),Sv.calc(g),Ev.calc(g)),r}copy(t){super.copy(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){const l=t.points[e];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,r=this.points.length;e<r;e++){const l=this.points[e];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){const l=t.points[e];this.points.push(new I().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gy(o,t,e,r,l){const f=(r-t)*.5,h=(l-e)*.5,p=o*o,g=o*p;return(2*e-2*r+f+h)*g+(-3*e+3*r-2*f-h)*p+f*o+e}function tT(o,t){const e=1-o;return e*e*t}function eT(o,t){return 2*(1-o)*o*t}function nT(o,t){return o*o*t}function _p(o,t,e,r){return tT(o,t)+eT(o,e)+nT(o,r)}function iT(o,t){const e=1-o;return e*e*e*t}function rT(o,t){const e=1-o;return 3*e*e*o*t}function aT(o,t){return 3*(1-o)*o*o*t}function sT(o,t){return o*o*o*t}function vp(o,t,e,r,l){return iT(o,t)+rT(o,e)+aT(o,r)+sT(o,l)}class pE extends Bs{constructor(t=new St,e=new St,r=new St,l=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=r,this.v3=l}getPoint(t,e=new St){const r=e,l=this.v0,f=this.v1,h=this.v2,p=this.v3;return r.set(vp(t,l.x,f.x,h.x,p.x),vp(t,l.y,f.y,h.y,p.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oT extends Bs{constructor(t=new I,e=new I,r=new I,l=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=r,this.v3=l}getPoint(t,e=new I){const r=e,l=this.v0,f=this.v1,h=this.v2,p=this.v3;return r.set(vp(t,l.x,f.x,h.x,p.x),vp(t,l.y,f.y,h.y,p.y),vp(t,l.z,f.z,h.z,p.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mE extends Bs{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const r=e;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lT extends Bs{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const r=e;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gE extends Bs{constructor(t=new St,e=new St,r=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=r}getPoint(t,e=new St){const r=e,l=this.v0,f=this.v1,h=this.v2;return r.set(_p(t,l.x,f.x,h.x),_p(t,l.y,f.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uT extends Bs{constructor(t=new I,e=new I,r=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=r}getPoint(t,e=new I){const r=e,l=this.v0,f=this.v1,h=this.v2;return r.set(_p(t,l.x,f.x,h.x),_p(t,l.y,f.y,h.y),_p(t,l.z,f.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _E extends Bs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const r=e,l=this.points,f=(l.length-1)*t,h=Math.floor(f),p=f-h,g=l[h===0?h:h-1],_=l[h],x=l[h>l.length-2?l.length-1:h+1],y=l[h>l.length-3?l.length-1:h+2];return r.set(Gy(p,g.x,_.x,x.x,y.x),Gy(p,g.y,_.y,x.y,y.y)),r}copy(t){super.copy(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){const l=t.points[e];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,r=this.points.length;e<r;e++){const l=this.points[e];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,r=t.points.length;e<r;e++){const l=t.points[e];this.points.push(new St().fromArray(l))}return this}}var Vy=Object.freeze({__proto__:null,ArcCurve:J1,CatmullRomCurve3:$1,CubicBezierCurve:pE,CubicBezierCurve3:oT,EllipseCurve:Wx,LineCurve:mE,LineCurve3:lT,QuadraticBezierCurve:gE,QuadraticBezierCurve3:uT,SplineCurve:_E});class cT extends Bs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vy[r](e,t))}return this}getPoint(t,e){const r=t*this.getLength(),l=this.getCurveLengths();let f=0;for(;f<l.length;){if(l[f]>=r){const h=l[f]-r,p=this.curves[f],g=p.getLength(),_=g===0?0:1-h/g;return p.getPointAt(_,e)}f++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let r=0,l=this.curves.length;r<l;r++)e+=this.curves[r].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let r=0;r<=t;r++)e.push(this.getPoint(r/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let r;for(let l=0,f=this.curves;l<f.length;l++){const h=f[l],p=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,g=h.getPoints(p);for(let _=0;_<g.length;_++){const x=g[_];r&&r.equals(x)||(e.push(x),r=x)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,r=t.curves.length;e<r;e++){const l=t.curves[e];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,r=this.curves.length;e<r;e++){const l=this.curves[e];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,r=t.curves.length;e<r;e++){const l=t.curves[e];this.curves.push(new Vy[l.type]().fromJSON(l))}return this}}class fT extends cT{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,r=t.length;e<r;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const r=new mE(this.currentPoint.clone(),new St(t,e));return this.curves.push(r),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,r,l){const f=new gE(this.currentPoint.clone(),new St(t,e),new St(r,l));return this.curves.push(f),this.currentPoint.set(r,l),this}bezierCurveTo(t,e,r,l,f,h){const p=new pE(this.currentPoint.clone(),new St(t,e),new St(r,l),new St(f,h));return this.curves.push(p),this.currentPoint.set(f,h),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),r=new _E(e);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,r,l,f,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absarc(t+p,e+g,r,l,f,h),this}absarc(t,e,r,l,f,h){return this.absellipse(t,e,r,r,l,f,h),this}ellipse(t,e,r,l,f,h,p,g){const _=this.currentPoint.x,x=this.currentPoint.y;return this.absellipse(t+_,e+x,r,l,f,h,p,g),this}absellipse(t,e,r,l,f,h,p,g){const _=new Wx(t,e,r,l,f,h,p,g);if(this.curves.length>0){const y=_.getPoint(0);y.equals(this.currentPoint)||this.lineTo(y.x,y.y)}this.curves.push(_);const x=_.getPoint(1);return this.currentPoint.copy(x),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xx extends fr{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,r=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:r,phiLength:l},e=Math.floor(e),l=Xe(l,0,Math.PI*2);const f=[],h=[],p=[],g=[],_=[],x=1/e,y=new I,E=new St,T=new I,R=new I,C=new I;let b=0,M=0;for(let H=0;H<=t.length-1;H++)switch(H){case 0:b=t[H+1].x-t[H].x,M=t[H+1].y-t[H].y,T.x=M*1,T.y=-b,T.z=M*0,C.copy(T),T.normalize(),g.push(T.x,T.y,T.z);break;case t.length-1:g.push(C.x,C.y,C.z);break;default:b=t[H+1].x-t[H].x,M=t[H+1].y-t[H].y,T.x=M*1,T.y=-b,T.z=M*0,R.copy(T),T.x+=C.x,T.y+=C.y,T.z+=C.z,T.normalize(),g.push(T.x,T.y,T.z),C.copy(R)}for(let H=0;H<=e;H++){const z=r+H*x*l,N=Math.sin(z),X=Math.cos(z);for(let W=0;W<=t.length-1;W++){y.x=t[W].x*N,y.y=t[W].y,y.z=t[W].x*X,h.push(y.x,y.y,y.z),E.x=H/e,E.y=W/(t.length-1),p.push(E.x,E.y);const k=g[3*W+0]*N,K=g[3*W+1],F=g[3*W+0]*X;_.push(k,K,F)}}for(let H=0;H<e;H++)for(let z=0;z<t.length-1;z++){const N=z+H*t.length,X=N,W=N+t.length,k=N+t.length+1,K=N+1;f.push(X,W,K),f.push(k,K,W)}this.setIndex(f),this.setAttribute("position",new Bn(h,3)),this.setAttribute("uv",new Bn(p,2)),this.setAttribute("normal",new Bn(_,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xx(t.points,t.segments,t.phiStart,t.phiLength)}}class qx extends Xx{constructor(t=1,e=1,r=4,l=8){const f=new fT;f.absarc(0,-e/2,t,Math.PI*1.5,0),f.absarc(0,e/2,t,0,Math.PI*.5),super(f.getPoints(r),l),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:r,radialSegments:l}}static fromJSON(t){return new qx(t.radius,t.length,t.capSegments,t.radialSegments)}}class B_ extends fr{constructor(t=1,e=1,r=1,l=32,f=1,h=!1,p=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:r,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:p,thetaLength:g};const _=this;l=Math.floor(l),f=Math.floor(f);const x=[],y=[],E=[],T=[];let R=0;const C=[],b=r/2;let M=0;H(),h===!1&&(t>0&&z(!0),e>0&&z(!1)),this.setIndex(x),this.setAttribute("position",new Bn(y,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(T,2));function H(){const N=new I,X=new I;let W=0;const k=(e-t)/r;for(let K=0;K<=f;K++){const F=[],O=K/f,j=O*(e-t)+t;for(let pt=0;pt<=l;pt++){const _t=pt/l,At=_t*g+p,Tt=Math.sin(At),Y=Math.cos(At);X.x=j*Tt,X.y=-O*r+b,X.z=j*Y,y.push(X.x,X.y,X.z),N.set(Tt,k,Y).normalize(),E.push(N.x,N.y,N.z),T.push(_t,1-O),F.push(R++)}C.push(F)}for(let K=0;K<l;K++)for(let F=0;F<f;F++){const O=C[F][K],j=C[F+1][K],pt=C[F+1][K+1],_t=C[F][K+1];(t>0||F!==0)&&(x.push(O,j,_t),W+=3),(e>0||F!==f-1)&&(x.push(j,pt,_t),W+=3)}_.addGroup(M,W,0),M+=W}function z(N){const X=R,W=new St,k=new I;let K=0;const F=N===!0?t:e,O=N===!0?1:-1;for(let pt=1;pt<=l;pt++)y.push(0,b*O,0),E.push(0,O,0),T.push(.5,.5),R++;const j=R;for(let pt=0;pt<=l;pt++){const At=pt/l*g+p,Tt=Math.cos(At),Y=Math.sin(At);k.x=F*Y,k.y=b*O,k.z=F*Tt,y.push(k.x,k.y,k.z),E.push(0,O,0),W.x=Tt*.5+.5,W.y=Y*.5*O+.5,T.push(W.x,W.y),R++}for(let pt=0;pt<l;pt++){const _t=X+pt,At=j+pt;N===!0?x.push(At,At+1,_t):x.push(At+1,At,_t),K+=3}_.addGroup(M,K,N===!0?1:2),M+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new B_(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yx extends B_{constructor(t=1,e=1,r=32,l=1,f=!1,h=0,p=Math.PI*2){super(0,t,e,r,l,f,h,p),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:r,heightSegments:l,openEnded:f,thetaStart:h,thetaLength:p}}static fromJSON(t){return new Yx(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class F_ extends fr{constructor(t=[],e=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:r,detail:l};const f=[],h=[];p(l),_(r),x(),this.setAttribute("position",new Bn(f,3)),this.setAttribute("normal",new Bn(f.slice(),3)),this.setAttribute("uv",new Bn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(H){const z=new I,N=new I,X=new I;for(let W=0;W<e.length;W+=3)T(e[W+0],z),T(e[W+1],N),T(e[W+2],X),g(z,N,X,H)}function g(H,z,N,X){const W=X+1,k=[];for(let K=0;K<=W;K++){k[K]=[];const F=H.clone().lerp(N,K/W),O=z.clone().lerp(N,K/W),j=W-K;for(let pt=0;pt<=j;pt++)pt===0&&K===W?k[K][pt]=F:k[K][pt]=F.clone().lerp(O,pt/j)}for(let K=0;K<W;K++)for(let F=0;F<2*(W-K)-1;F++){const O=Math.floor(F/2);F%2===0?(E(k[K][O+1]),E(k[K+1][O]),E(k[K][O])):(E(k[K][O+1]),E(k[K+1][O+1]),E(k[K+1][O]))}}function _(H){const z=new I;for(let N=0;N<f.length;N+=3)z.x=f[N+0],z.y=f[N+1],z.z=f[N+2],z.normalize().multiplyScalar(H),f[N+0]=z.x,f[N+1]=z.y,f[N+2]=z.z}function x(){const H=new I;for(let z=0;z<f.length;z+=3){H.x=f[z+0],H.y=f[z+1],H.z=f[z+2];const N=b(H)/2/Math.PI+.5,X=M(H)/Math.PI+.5;h.push(N,1-X)}R(),y()}function y(){for(let H=0;H<h.length;H+=6){const z=h[H+0],N=h[H+2],X=h[H+4],W=Math.max(z,N,X),k=Math.min(z,N,X);W>.9&&k<.1&&(z<.2&&(h[H+0]+=1),N<.2&&(h[H+2]+=1),X<.2&&(h[H+4]+=1))}}function E(H){f.push(H.x,H.y,H.z)}function T(H,z){const N=H*3;z.x=t[N+0],z.y=t[N+1],z.z=t[N+2]}function R(){const H=new I,z=new I,N=new I,X=new I,W=new St,k=new St,K=new St;for(let F=0,O=0;F<f.length;F+=9,O+=6){H.set(f[F+0],f[F+1],f[F+2]),z.set(f[F+3],f[F+4],f[F+5]),N.set(f[F+6],f[F+7],f[F+8]),W.set(h[O+0],h[O+1]),k.set(h[O+2],h[O+3]),K.set(h[O+4],h[O+5]),X.copy(H).add(z).add(N).divideScalar(3);const j=b(X);C(W,O+0,H,j),C(k,O+2,z,j),C(K,O+4,N,j)}}function C(H,z,N,X){X<0&&H.x===1&&(h[z]=H.x-1),N.x===0&&N.z===0&&(h[z]=X/2/Math.PI+.5)}function b(H){return Math.atan2(H.z,-H.x)}function M(H){return Math.atan2(-H.y,Math.sqrt(H.x*H.x+H.z*H.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new F_(t.vertices,t.indices,t.radius,t.details)}}class Zx extends F_{constructor(t=1,e=0){const r=(1+Math.sqrt(5))/2,l=1/r,f=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-r,0,-l,r,0,l,-r,0,l,r,-l,-r,0,-l,r,0,l,-r,0,l,r,0,-r,0,-l,r,0,-l,-r,0,l,r,0,l],h=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(f,h,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zx(t.radius,t.detail)}}class Kx extends F_{constructor(t=1,e=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kx(t.radius,t.detail)}}class H_ extends fr{constructor(t=1,e=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:l};const f=t/2,h=e/2,p=Math.floor(r),g=Math.floor(l),_=p+1,x=g+1,y=t/p,E=e/g,T=[],R=[],C=[],b=[];for(let M=0;M<x;M++){const H=M*E-h;for(let z=0;z<_;z++){const N=z*y-f;R.push(N,-H,0),C.push(0,0,1),b.push(z/p),b.push(1-M/g)}}for(let M=0;M<g;M++)for(let H=0;H<p;H++){const z=H+_*M,N=H+_*(M+1),X=H+1+_*(M+1),W=H+1+_*M;T.push(z,N,W),T.push(N,X,W)}this.setIndex(T),this.setAttribute("position",new Bn(R,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new H_(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qx extends fr{constructor(t=1,e=32,r=16,l=0,f=Math.PI*2,h=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:r,phiStart:l,phiLength:f,thetaStart:h,thetaLength:p},e=Math.max(3,Math.floor(e)),r=Math.max(2,Math.floor(r));const g=Math.min(h+p,Math.PI);let _=0;const x=[],y=new I,E=new I,T=[],R=[],C=[],b=[];for(let M=0;M<=r;M++){const H=[],z=M/r;let N=0;M===0&&h===0?N=.5/e:M===r&&g===Math.PI&&(N=-.5/e);for(let X=0;X<=e;X++){const W=X/e;y.x=-t*Math.cos(l+W*f)*Math.sin(h+z*p),y.y=t*Math.cos(h+z*p),y.z=t*Math.sin(l+W*f)*Math.sin(h+z*p),R.push(y.x,y.y,y.z),E.copy(y).normalize(),C.push(E.x,E.y,E.z),b.push(W+N,1-z),H.push(_++)}x.push(H)}for(let M=0;M<r;M++)for(let H=0;H<e;H++){const z=x[M][H+1],N=x[M][H],X=x[M+1][H],W=x[M+1][H+1];(M!==0||h>0)&&T.push(z,N,W),(M!==r-1||g<Math.PI)&&T.push(N,X,W)}this.setIndex(T),this.setAttribute("position",new Bn(R,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qx(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jx extends fr{constructor(t=1,e=.4,r=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:r,tubularSegments:l,arc:f},r=Math.floor(r),l=Math.floor(l);const h=[],p=[],g=[],_=[],x=new I,y=new I,E=new I;for(let T=0;T<=r;T++)for(let R=0;R<=l;R++){const C=R/l*f,b=T/r*Math.PI*2;y.x=(t+e*Math.cos(b))*Math.cos(C),y.y=(t+e*Math.cos(b))*Math.sin(C),y.z=e*Math.sin(b),p.push(y.x,y.y,y.z),x.x=t*Math.cos(C),x.y=t*Math.sin(C),E.subVectors(y,x).normalize(),g.push(E.x,E.y,E.z),_.push(R/l),_.push(T/r)}for(let T=1;T<=r;T++)for(let R=1;R<=l;R++){const C=(l+1)*T+R-1,b=(l+1)*(T-1)+R-1,M=(l+1)*(T-1)+R,H=(l+1)*T+R;h.push(C,b,H),h.push(b,M,H)}this.setIndex(h),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jx(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jx extends fr{constructor(t=1,e=.4,r=64,l=8,f=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:r,radialSegments:l,p:f,q:h},r=Math.floor(r),l=Math.floor(l);const p=[],g=[],_=[],x=[],y=new I,E=new I,T=new I,R=new I,C=new I,b=new I,M=new I;for(let z=0;z<=r;++z){const N=z/r*f*Math.PI*2;H(N,f,h,t,T),H(N+.01,f,h,t,R),b.subVectors(R,T),M.addVectors(R,T),C.crossVectors(b,M),M.crossVectors(C,b),C.normalize(),M.normalize();for(let X=0;X<=l;++X){const W=X/l*Math.PI*2,k=-e*Math.cos(W),K=e*Math.sin(W);y.x=T.x+(k*M.x+K*C.x),y.y=T.y+(k*M.y+K*C.y),y.z=T.z+(k*M.z+K*C.z),g.push(y.x,y.y,y.z),E.subVectors(y,T).normalize(),_.push(E.x,E.y,E.z),x.push(z/r),x.push(X/l)}}for(let z=1;z<=r;z++)for(let N=1;N<=l;N++){const X=(l+1)*(z-1)+(N-1),W=(l+1)*z+(N-1),k=(l+1)*z+N,K=(l+1)*(z-1)+N;p.push(X,W,K),p.push(W,k,K)}this.setIndex(p),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(x,2));function H(z,N,X,W,k){const K=Math.cos(z),F=Math.sin(z),O=X/N*z,j=Math.cos(O);k.x=W*(2+j)*.5*K,k.y=W*(2+j)*F*.5,k.z=W*Math.sin(O)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jx(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class hT extends fr{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],r=new Set,l=new I,f=new I;if(t.index!==null){const h=t.attributes.position,p=t.index;let g=t.groups;g.length===0&&(g=[{start:0,count:p.count,materialIndex:0}]);for(let _=0,x=g.length;_<x;++_){const y=g[_],E=y.start,T=y.count;for(let R=E,C=E+T;R<C;R+=3)for(let b=0;b<3;b++){const M=p.getX(R+b),H=p.getX(R+(b+1)%3);l.fromBufferAttribute(h,M),f.fromBufferAttribute(h,H),Wy(l,f,r)===!0&&(e.push(l.x,l.y,l.z),e.push(f.x,f.y,f.z))}}}else{const h=t.attributes.position;for(let p=0,g=h.count/3;p<g;p++)for(let _=0;_<3;_++){const x=3*p+_,y=3*p+(_+1)%3;l.fromBufferAttribute(h,x),f.fromBufferAttribute(h,y),Wy(l,f,r)===!0&&(e.push(l.x,l.y,l.z),e.push(f.x,f.y,f.z))}}this.setAttribute("position",new Bn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Wy(o,t,e){const r=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return e.has(r)===!0||e.has(l)===!0?!1:(e.add(r),e.add(l),!0)}class Ls extends fh{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$S,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dT extends fh{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pT extends fh{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ky={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class mT{constructor(t,e,r){const l=this;let f=!1,h=0,p=0,g;const _=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=r,this.itemStart=function(x){p++,f===!1&&l.onStart!==void 0&&l.onStart(x,h,p),f=!0},this.itemEnd=function(x){h++,l.onProgress!==void 0&&l.onProgress(x,h,p),h===p&&(f=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return g?g(x):x},this.setURLModifier=function(x){return g=x,this},this.addHandler=function(x,y){return _.push(x,y),this},this.removeHandler=function(x){const y=_.indexOf(x);return y!==-1&&_.splice(y,2),this},this.getHandler=function(x){for(let y=0,E=_.length;y<E;y+=2){const T=_[y],R=_[y+1];if(T.global&&(T.lastIndex=0),T.test(x))return R}return null}}}const gT=new mT;class $x{constructor(t){this.manager=t!==void 0?t:gT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const r=this;return new Promise(function(l,f){r.load(t,l,e,f)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}$x.DEFAULT_MATERIAL_NAME="__DEFAULT";class _T extends $x{constructor(t){super(t)}load(t,e,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const f=this,h=ky.get(t);if(h!==void 0)return f.manager.itemStart(t),setTimeout(function(){e&&e(h),f.manager.itemEnd(t)},0),h;const p=bp("img");function g(){x(),ky.add(t,this),e&&e(this),f.manager.itemEnd(t)}function _(y){x(),l&&l(y),f.manager.itemError(t),f.manager.itemEnd(t)}function x(){p.removeEventListener("load",g,!1),p.removeEventListener("error",_,!1)}return p.addEventListener("load",g,!1),p.addEventListener("error",_,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),f.manager.itemStart(t),p.src=t,p}}class Xy extends $x{constructor(t){super(t)}load(t,e,r,l){const f=new Ar,h=new _T(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(p){f.image=p,f.needsUpdate=!0,e!==void 0&&e(f)},r,l),f}}class vE extends cr{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vT extends vE{constructor(t,e,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mv=new Gn,qy=new I,Yy=new I;class xT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vx,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,r=this.matrix;qy.setFromMatrixPosition(t.matrixWorld),e.position.copy(qy),Yy.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yy),e.updateMatrixWorld(),Mv.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mv),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mv)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zy=new Gn,ap=new I,Tv=new I;class yT extends xT{constructor(){super(new ra(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new mn(2,1,1,1),new mn(0,1,1,1),new mn(3,1,1,1),new mn(1,1,1,1),new mn(3,0,1,1),new mn(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const r=this.camera,l=this.matrix,f=t.distance||r.far;f!==r.far&&(r.far=f,r.updateProjectionMatrix()),ap.setFromMatrixPosition(t.matrixWorld),r.position.copy(ap),Tv.copy(r.position),Tv.add(this._cubeDirections[e]),r.up.copy(this._cubeUps[e]),r.lookAt(Tv),r.updateMatrixWorld(),l.makeTranslation(-ap.x,-ap.y,-ap.z),Zy.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zy)}}class ty extends vE{constructor(t,e,r=0,l=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new yT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ST extends uE{constructor(t=-1,e=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-t,h=r+t,p=l+e,g=l-e;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,p-=x*this.view.offsetY,g=p-x*this.view.height}this.projectionMatrix.makeOrthographic(f,h,p,g,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ET extends fr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class MT extends ra{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Ex extends fE{constructor(t,e,r=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Ky=new Gn;class TT{constructor(t,e,r=0,l=1/0){this.ray=new rE(t,e),this.near=r,this.far=l,this.camera=null,this.layers=new Hx,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ky.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ky),this}intersectObject(t,e=!0,r=[]){return Mx(t,this,r,e),r.sort(Qy),r}intersectObjects(t,e=!0,r=[]){for(let l=0,f=t.length;l<f;l++)Mx(t[l],this,r,e);return r.sort(Qy),r}}function Qy(o,t){return o.distance-t.distance}function Mx(o,t,e,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,p=f.length;h<p;h++)Mx(f[h],t,e,!0)}}const jy=new I,m_=new I;class bT{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jy.subVectors(t,this.start),m_.subVectors(this.end,this.start);const r=m_.dot(m_);let f=m_.dot(jy)/r;return e&&(f=Xe(f,0,1)),f}closestPointToPoint(t,e,r){const l=this.closestPointToPointParameter(t,e);return this.delta(r).multiplyScalar(l).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Jy(o,t,e,r){const l=AT(r);switch(e){case qS:return o*t;case ZS:return o*t;case KS:return o*t*2;case QS:return o*t/l.components*l.byteLength;case Px:return o*t/l.components*l.byteLength;case jS:return o*t*2/l.components*l.byteLength;case zx:return o*t*2/l.components*l.byteLength;case YS:return o*t*3/l.components*l.byteLength;case Ka:return o*t*4/l.components*l.byteLength;case Bx:return o*t*4/l.components*l.byteLength;case T_:case b_:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case A_:case w_:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kv:case jv:return Math.max(o,16)*Math.max(t,8)/4;case Zv:case Qv:return Math.max(o,8)*Math.max(t,8)/2;case Jv:case $v:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case tx:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ex:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nx:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ix:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rx:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ax:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case sx:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ox:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case lx:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ux:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case cx:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case fx:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case hx:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case dx:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case px:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case R_:case mx:case gx:return Math.ceil(o/4)*Math.ceil(t/4)*16;case JS:case _x:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vx:case xx:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AT(o){switch(o){case wo:case WS:return{byteLength:1,components:1};case Mp:case kS:case Ap:return{byteLength:2,components:1};case Ox:case Ix:return{byteLength:2,components:4};case $u:case Nx:case Eo:return{byteLength:4,components:1};case XS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ux}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ux);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xE(){let o=null,t=!1,e=null,r=null;function l(f,h){e(f,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&e!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(f){e=f},setContext:function(f){o=f}}}function wT(o){const t=new WeakMap;function e(p,g){const _=p.array,x=p.usage,y=_.byteLength,E=o.createBuffer();o.bindBuffer(g,E),o.bufferData(g,_,x),p.onUploadCallback();let T;if(_ instanceof Float32Array)T=o.FLOAT;else if(_ instanceof Uint16Array)p.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=o.SHORT;else if(_ instanceof Uint32Array)T=o.UNSIGNED_INT;else if(_ instanceof Int32Array)T=o.INT;else if(_ instanceof Int8Array)T=o.BYTE;else if(_ instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:E,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,g,_){const x=g.array,y=g.updateRanges;if(o.bindBuffer(_,p),y.length===0)o.bufferSubData(_,0,x);else{y.sort((T,R)=>T.start-R.start);let E=0;for(let T=1;T<y.length;T++){const R=y[E],C=y[T];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++E,y[E]=C)}y.length=E+1;for(let T=0,R=y.length;T<R;T++){const C=y[T];o.bufferSubData(_,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const _=t.get(p);if(_===void 0)t.set(p,e(p,g));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,p,g),_.version=p.version}}return{get:l,remove:f,update:h}}var RT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ab=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:RT,alphahash_pars_fragment:CT,alphamap_fragment:DT,alphamap_pars_fragment:LT,alphatest_fragment:UT,alphatest_pars_fragment:NT,aomap_fragment:OT,aomap_pars_fragment:IT,batching_pars_vertex:PT,batching_vertex:zT,begin_vertex:BT,beginnormal_vertex:FT,bsdfs:HT,iridescence_fragment:GT,bumpmap_pars_fragment:VT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:qT,color_fragment:YT,color_pars_fragment:ZT,color_pars_vertex:KT,color_vertex:QT,common:jT,cube_uv_reflection_fragment:JT,defaultnormal_vertex:$T,displacementmap_pars_vertex:tb,displacementmap_vertex:eb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:rb,colorspace_pars_fragment:ab,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:yb,envmap_vertex:cb,fog_vertex:fb,fog_pars_vertex:hb,fog_fragment:db,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:xb,lights_toon_fragment:Sb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Tb,lights_physical_fragment:bb,lights_physical_pars_fragment:Ab,lights_fragment_begin:wb,lights_fragment_maps:Rb,lights_fragment_end:Cb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Nb,map_fragment:Ob,map_pars_fragment:Ib,map_particle_fragment:Pb,map_particle_pars_fragment:zb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Fb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:Wb,morphtarget_vertex:kb,normal_fragment_begin:Xb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:Kb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:tA,opaque_fragment:eA,packing:nA,premultiplied_alpha_fragment:iA,project_vertex:rA,dithering_fragment:aA,dithering_pars_fragment:sA,roughnessmap_fragment:oA,roughnessmap_pars_fragment:lA,shadowmap_pars_fragment:uA,shadowmap_pars_vertex:cA,shadowmap_vertex:fA,shadowmask_pars_fragment:hA,skinbase_vertex:dA,skinning_pars_vertex:pA,skinning_vertex:mA,skinnormal_vertex:gA,specularmap_fragment:_A,specularmap_pars_fragment:vA,tonemapping_fragment:xA,tonemapping_pars_fragment:yA,transmission_fragment:SA,transmission_pars_fragment:EA,uv_pars_fragment:MA,uv_pars_vertex:TA,uv_vertex:bA,worldpos_vertex:AA,background_vert:wA,background_frag:RA,backgroundCube_vert:CA,backgroundCube_frag:DA,cube_vert:LA,cube_frag:UA,depth_vert:NA,depth_frag:OA,distanceRGBA_vert:IA,distanceRGBA_frag:PA,equirect_vert:zA,equirect_frag:BA,linedashed_vert:FA,linedashed_frag:HA,meshbasic_vert:GA,meshbasic_frag:VA,meshlambert_vert:WA,meshlambert_frag:kA,meshmatcap_vert:XA,meshmatcap_frag:qA,meshnormal_vert:YA,meshnormal_frag:ZA,meshphong_vert:KA,meshphong_frag:QA,meshphysical_vert:jA,meshphysical_frag:JA,meshtoon_vert:$A,meshtoon_frag:tw,points_vert:ew,points_frag:nw,shadow_vert:iw,shadow_frag:rw,sprite_vert:aw,sprite_frag:sw},jt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Wr={basic:{uniforms:br([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:br([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:br([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:br([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:br([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new yt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:br([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:br([jt.points,jt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:br([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:br([jt.common,jt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:br([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:br([jt.sprite,jt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:br([jt.common,jt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:br([jt.lights,jt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Wr.physical={uniforms:br([Wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const g_={r:0,b:0,g:0},ku=new zs,ow=new Gn;function lw(o,t,e,r,l,f,h){const p=new yt(0);let g=f===!0?0:1,_,x,y=null,E=0,T=null;function R(z){let N=z.isScene===!0?z.background:null;return N&&N.isTexture&&(N=(z.backgroundBlurriness>0?e:t).get(N)),N}function C(z){let N=!1;const X=R(z);X===null?M(p,g):X&&X.isColor&&(M(X,1),N=!0);const W=o.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,h):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(z,N){const X=R(N);X&&(X.isCubeTexture||X.mapping===z_)?(x===void 0&&(x=new Ai(new ec(1,1,1),new Ro({name:"BackgroundCubeMaterial",uniforms:lh(Wr.backgroundCube.uniforms),vertexShader:Wr.backgroundCube.vertexShader,fragmentShader:Wr.backgroundCube.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(W,k,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),ku.copy(N.backgroundRotation),ku.x*=-1,ku.y*=-1,ku.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(ku.y*=-1,ku.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(ow.makeRotationFromEuler(ku)),x.material.toneMapped=vn.getTransfer(X.colorSpace)!==zn,(y!==X||E!==X.version||T!==o.toneMapping)&&(x.material.needsUpdate=!0,y=X,E=X.version,T=o.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(_===void 0&&(_=new Ai(new H_(2,2),new Ro({name:"BackgroundMaterial",uniforms:lh(Wr.background.uniforms),vertexShader:Wr.background.vertexShader,fragmentShader:Wr.background.fragmentShader,side:Rl,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=X,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.toneMapped=vn.getTransfer(X.colorSpace)!==zn,X.matrixAutoUpdate===!0&&X.updateMatrix(),_.material.uniforms.uvTransform.value.copy(X.matrix),(y!==X||E!==X.version||T!==o.toneMapping)&&(_.material.needsUpdate=!0,y=X,E=X.version,T=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null))}function M(z,N){z.getRGB(g_,lE(o)),r.buffers.color.setClear(g_.r,g_.g,g_.b,N,h)}function H(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return p},setClearColor:function(z,N=1){p.set(z),g=N,M(p,g)},getClearAlpha:function(){return g},setClearAlpha:function(z){g=z,M(p,g)},render:C,addToRenderList:b,dispose:H}}function uw(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=E(null);let f=l,h=!1;function p(O,j,pt,_t,At){let Tt=!1;const Y=y(_t,pt,j);f!==Y&&(f=Y,_(f.object)),Tt=T(O,_t,pt,At),Tt&&R(O,_t,pt,At),At!==null&&t.update(At,o.ELEMENT_ARRAY_BUFFER),(Tt||h)&&(h=!1,N(O,j,pt,_t),At!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(At).buffer))}function g(){return o.createVertexArray()}function _(O){return o.bindVertexArray(O)}function x(O){return o.deleteVertexArray(O)}function y(O,j,pt){const _t=pt.wireframe===!0;let At=r[O.id];At===void 0&&(At={},r[O.id]=At);let Tt=At[j.id];Tt===void 0&&(Tt={},At[j.id]=Tt);let Y=Tt[_t];return Y===void 0&&(Y=E(g()),Tt[_t]=Y),Y}function E(O){const j=[],pt=[],_t=[];for(let At=0;At<e;At++)j[At]=0,pt[At]=0,_t[At]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pt,attributeDivisors:_t,object:O,attributes:{},index:null}}function T(O,j,pt,_t){const At=f.attributes,Tt=j.attributes;let Y=0;const ot=pt.getAttributes();for(const it in ot)if(ot[it].location>=0){const V=At[it];let ut=Tt[it];if(ut===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(ut=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(ut=O.instanceColor)),V===void 0||V.attribute!==ut||ut&&V.data!==ut.data)return!0;Y++}return f.attributesNum!==Y||f.index!==_t}function R(O,j,pt,_t){const At={},Tt=j.attributes;let Y=0;const ot=pt.getAttributes();for(const it in ot)if(ot[it].location>=0){let V=Tt[it];V===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(V=O.instanceColor));const ut={};ut.attribute=V,V&&V.data&&(ut.data=V.data),At[it]=ut,Y++}f.attributes=At,f.attributesNum=Y,f.index=_t}function C(){const O=f.newAttributes;for(let j=0,pt=O.length;j<pt;j++)O[j]=0}function b(O){M(O,0)}function M(O,j){const pt=f.newAttributes,_t=f.enabledAttributes,At=f.attributeDivisors;pt[O]=1,_t[O]===0&&(o.enableVertexAttribArray(O),_t[O]=1),At[O]!==j&&(o.vertexAttribDivisor(O,j),At[O]=j)}function H(){const O=f.newAttributes,j=f.enabledAttributes;for(let pt=0,_t=j.length;pt<_t;pt++)j[pt]!==O[pt]&&(o.disableVertexAttribArray(pt),j[pt]=0)}function z(O,j,pt,_t,At,Tt,Y){Y===!0?o.vertexAttribIPointer(O,j,pt,At,Tt):o.vertexAttribPointer(O,j,pt,_t,At,Tt)}function N(O,j,pt,_t){C();const At=_t.attributes,Tt=pt.getAttributes(),Y=j.defaultAttributeValues;for(const ot in Tt){const it=Tt[ot];if(it.location>=0){let Wt=At[ot];if(Wt===void 0&&(ot==="instanceMatrix"&&O.instanceMatrix&&(Wt=O.instanceMatrix),ot==="instanceColor"&&O.instanceColor&&(Wt=O.instanceColor)),Wt!==void 0){const V=Wt.normalized,ut=Wt.itemSize,Ft=t.get(Wt);if(Ft===void 0)continue;const Vt=Ft.buffer,ct=Ft.type,Dt=Ft.bytesPerElement,Bt=ct===o.INT||ct===o.UNSIGNED_INT||Wt.gpuType===Nx;if(Wt.isInterleavedBufferAttribute){const qt=Wt.data,Kt=qt.stride,Le=Wt.offset;if(qt.isInstancedInterleavedBuffer){for(let Ee=0;Ee<it.locationSize;Ee++)M(it.location+Ee,qt.meshPerAttribute);O.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let Ee=0;Ee<it.locationSize;Ee++)b(it.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let Ee=0;Ee<it.locationSize;Ee++)z(it.location+Ee,ut/it.locationSize,ct,V,Kt*Dt,(Le+ut/it.locationSize*Ee)*Dt,Bt)}else{if(Wt.isInstancedBufferAttribute){for(let qt=0;qt<it.locationSize;qt++)M(it.location+qt,Wt.meshPerAttribute);O.isInstancedMesh!==!0&&_t._maxInstanceCount===void 0&&(_t._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let qt=0;qt<it.locationSize;qt++)b(it.location+qt);o.bindBuffer(o.ARRAY_BUFFER,Vt);for(let qt=0;qt<it.locationSize;qt++)z(it.location+qt,ut/it.locationSize,ct,V,ut*Dt,ut/it.locationSize*qt*Dt,Bt)}}else if(Y!==void 0){const V=Y[ot];if(V!==void 0)switch(V.length){case 2:o.vertexAttrib2fv(it.location,V);break;case 3:o.vertexAttrib3fv(it.location,V);break;case 4:o.vertexAttrib4fv(it.location,V);break;default:o.vertexAttrib1fv(it.location,V)}}}}H()}function X(){K();for(const O in r){const j=r[O];for(const pt in j){const _t=j[pt];for(const At in _t)x(_t[At].object),delete _t[At];delete j[pt]}delete r[O]}}function W(O){if(r[O.id]===void 0)return;const j=r[O.id];for(const pt in j){const _t=j[pt];for(const At in _t)x(_t[At].object),delete _t[At];delete j[pt]}delete r[O.id]}function k(O){for(const j in r){const pt=r[j];if(pt[O.id]===void 0)continue;const _t=pt[O.id];for(const At in _t)x(_t[At].object),delete _t[At];delete pt[O.id]}}function K(){F(),h=!0,f!==l&&(f=l,_(f.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:K,resetDefaultState:F,dispose:X,releaseStatesOfGeometry:W,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:b,disableUnusedAttributes:H}}function cw(o,t,e){let r;function l(_){r=_}function f(_,x){o.drawArrays(r,_,x),e.update(x,r,1)}function h(_,x,y){y!==0&&(o.drawArraysInstanced(r,_,x,y),e.update(x,r,y))}function p(_,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,x,0,y);let T=0;for(let R=0;R<y;R++)T+=x[R];e.update(T,r,1)}function g(_,x,y,E){if(y===0)return;const T=t.get("WEBGL_multi_draw");if(T===null)for(let R=0;R<_.length;R++)h(_[R],x[R],E[R]);else{T.multiDrawArraysInstancedWEBGL(r,_,0,x,0,E,0,y);let R=0;for(let C=0;C<y;C++)R+=x[C]*E[C];e.update(R,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function fw(o,t,e,r){let l;function f(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(k){return!(k!==Ka&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const K=k===Ap&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(k!==wo&&r.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Eo&&!K)}function g(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=e.precision!==void 0?e.precision:"highp";const x=g(_);x!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const y=e.logarithmicDepthBuffer===!0,E=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),H=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=R>0,W=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:_,logarithmicDepthBuffer:y,reverseDepthBuffer:E,maxTextures:T,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:H,maxVaryings:z,maxFragmentUniforms:N,vertexTextures:X,maxSamples:W}}function hw(o){const t=this;let e=null,r=0,l=!1,f=!1;const h=new Tl,p=new He,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,E){const T=y.length!==0||E||r!==0||l;return l=E,r=y.length,T},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(y,E){e=x(y,E,0)},this.setState=function(y,E,T){const R=y.clippingPlanes,C=y.clipIntersection,b=y.clipShadows,M=o.get(y);if(!l||R===null||R.length===0||f&&!b)f?x(null):_();else{const H=f?0:r,z=H*4;let N=M.clippingState||null;g.value=N,N=x(R,E,z,T);for(let X=0;X!==z;++X)N[X]=e[X];M.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=H}};function _(){g.value!==e&&(g.value=e,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(y,E,T,R){const C=y!==null?y.length:0;let b=null;if(C!==0){if(b=g.value,R!==!0||b===null){const M=T+C*4,H=E.matrixWorldInverse;p.getNormalMatrix(H),(b===null||b.length<M)&&(b=new Float32Array(M));for(let z=0,N=T;z!==C;++z,N+=4)h.copy(y[z]).applyMatrix4(H,p),h.normal.toArray(b,N),b[N+3]=h.constant}g.value=b,g.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function dw(o){let t=new WeakMap;function e(h,p){return p===kv?h.mapping=ih:p===Xv&&(h.mapping=rh),h}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===kv||p===Xv)if(t.has(h)){const g=t.get(h).texture;return e(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Y1(g.height);return _.fromEquirectangularTexture(o,h),t.set(h,_),h.addEventListener("dispose",l),e(_.texture,h.mapping)}else return null}}return h}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){t=new WeakMap}return{get:r,dispose:f}}const jf=4,$y=[.125,.215,.35,.446,.526,.582],Zu=20,bv=new ST,tS=new yt;let Av=null,wv=0,Rv=0,Cv=!1;const qu=(1+Math.sqrt(5))/2,Kf=1/qu,eS=[new I(-qu,Kf,0),new I(qu,Kf,0),new I(-Kf,0,qu),new I(Kf,0,qu),new I(0,qu,-Kf),new I(0,qu,Kf),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class nS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,l=100){Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Rv=this._renderer.getActiveMipmapLevel(),Cv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,r,l,f),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=aS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Av,wv,Rv),this._renderer.xr.enabled=Cv,t.scissorTest=!1,__(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ih||t.mapping===rh?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Rv=this._renderer.getActiveMipmapLevel(),Cv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:Is,minFilter:Is,generateMipmaps:!1,type:Ap,format:Ka,colorSpace:oh,depthBuffer:!1},l=iS(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iS(t,e,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pw(f)),this._blurMaterial=mw(f,t,e)}return l}_compileMaterial(t){const e=new Ai(this._lodPlanes[0],t);this._renderer.compile(e,bv)}_sceneToCubeUV(t,e,r,l){const p=new ra(90,1,e,r),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,E=x.toneMapping;x.getClearColor(tS),x.toneMapping=wl,x.autoClear=!1;const T=new Vr({name:"PMREM.Background",side:kr,depthWrite:!1,depthTest:!1}),R=new Ai(new ec,T);let C=!1;const b=t.background;b?b.isColor&&(T.color.copy(b),t.background=null,C=!0):(T.color.copy(tS),C=!0);for(let M=0;M<6;M++){const H=M%3;H===0?(p.up.set(0,g[M],0),p.lookAt(_[M],0,0)):H===1?(p.up.set(0,0,g[M]),p.lookAt(0,_[M],0)):(p.up.set(0,g[M],0),p.lookAt(0,0,_[M]));const z=this._cubeSize;__(l,H*z,M>2?z:0,z,z),x.setRenderTarget(l),C&&x.render(R,p),x.render(t,p)}R.geometry.dispose(),R.material.dispose(),x.toneMapping=E,x.autoClear=y,t.background=b}_textureToCubeUV(t,e){const r=this._renderer,l=t.mapping===ih||t.mapping===rh;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=aS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rS());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new Ai(this._lodPlanes[0],f),p=f.uniforms;p.envMap.value=t;const g=this._cubeSize;__(e,0,0,3*g,2*g),r.setRenderTarget(e),r.render(h,bv)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),p=eS[(l-f-1)%eS.length];this._blur(t,f-1,f,h,p)}e.autoClear=r}_blur(t,e,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,r,l,"latitudinal",f),this._halfBlur(h,t,r,r,l,"longitudinal",f)}_halfBlur(t,e,r,l,f,h,p){const g=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,y=new Ai(this._lodPlanes[l],_),E=_.uniforms,T=this._sizeLods[r]-1,R=isFinite(f)?Math.PI/(2*T):2*Math.PI/(2*Zu-1),C=f/R,b=isFinite(f)?1+Math.floor(x*C):Zu;b>Zu&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Zu}`);const M=[];let H=0;for(let k=0;k<Zu;++k){const K=k/C,F=Math.exp(-K*K/2);M.push(F),k===0?H+=F:k<b&&(H+=2*F)}for(let k=0;k<M.length;k++)M[k]=M[k]/H;E.envMap.value=t.texture,E.samples.value=b,E.weights.value=M,E.latitudinal.value=h==="latitudinal",p&&(E.poleAxis.value=p);const{_lodMax:z}=this;E.dTheta.value=R,E.mipInt.value=z-r;const N=this._sizeLods[l],X=3*N*(l>z-jf?l-z+jf:0),W=4*(this._cubeSize-N);__(e,X,W,3*N,2*N),g.setRenderTarget(e),g.render(y,bv)}}function pw(o){const t=[],e=[],r=[];let l=o;const f=o-jf+1+$y.length;for(let h=0;h<f;h++){const p=Math.pow(2,l);e.push(p);let g=1/p;h>o-jf?g=$y[h-o+jf-1]:h===0&&(g=0),r.push(g);const _=1/(p-2),x=-_,y=1+_,E=[x,x,y,x,y,y,x,x,y,y,x,y],T=6,R=6,C=3,b=2,M=1,H=new Float32Array(C*R*T),z=new Float32Array(b*R*T),N=new Float32Array(M*R*T);for(let W=0;W<T;W++){const k=W%3*2/3-1,K=W>2?0:-1,F=[k,K,0,k+2/3,K,0,k+2/3,K+1,0,k,K,0,k+2/3,K+1,0,k,K+1,0];H.set(F,C*R*W),z.set(E,b*R*W);const O=[W,W,W,W,W,W];N.set(O,M*R*W)}const X=new fr;X.setAttribute("position",new ja(H,C)),X.setAttribute("uv",new ja(z,b)),X.setAttribute("faceIndex",new ja(N,M)),t.push(X),l>jf&&l--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function iS(o,t,e){const r=new tc(o,t,e);return r.texture.mapping=z_,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function __(o,t,e,r,l){o.viewport.set(t,e,r,l),o.scissor.set(t,e,r,l)}function mw(o,t,e){const r=new Float32Array(Zu),l=new I(0,1,0);return new Ro({name:"SphericalGaussianBlur",defines:{n:Zu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ey(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Al,depthTest:!1,depthWrite:!1})}function rS(){return new Ro({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ey(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Al,depthTest:!1,depthWrite:!1})}function aS(){return new Ro({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ey(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Al,depthTest:!1,depthWrite:!1})}function ey(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gw(o){let t=new WeakMap,e=null;function r(p){if(p&&p.isTexture){const g=p.mapping,_=g===kv||g===Xv,x=g===ih||g===rh;if(_||x){let y=t.get(p);const E=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==E)return e===null&&(e=new nS(o)),y=_?e.fromEquirectangular(p,y):e.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),y.texture;if(y!==void 0)return y.texture;{const T=p.image;return _&&T&&T.height>0||x&&T&&l(T)?(e===null&&(e=new nS(o)),y=_?e.fromEquirectangular(p):e.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,t.set(p,y),p.addEventListener("dispose",f),y.texture):null}}}return p}function l(p){let g=0;const _=6;for(let x=0;x<_;x++)p[x]!==void 0&&g++;return g===_}function f(p){const g=p.target;g.removeEventListener("dispose",f);const _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:h}}function _w(o){const t={};function e(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const l=e(r);return l===null&&Qf("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function vw(o,t,e,r){const l={},f=new WeakMap;function h(y){const E=y.target;E.index!==null&&t.remove(E.index);for(const R in E.attributes)t.remove(E.attributes[R]);E.removeEventListener("dispose",h),delete l[E.id];const T=f.get(E);T&&(t.remove(T),f.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,e.memory.geometries--}function p(y,E){return l[E.id]===!0||(E.addEventListener("dispose",h),l[E.id]=!0,e.memory.geometries++),E}function g(y){const E=y.attributes;for(const T in E)t.update(E[T],o.ARRAY_BUFFER)}function _(y){const E=[],T=y.index,R=y.attributes.position;let C=0;if(T!==null){const H=T.array;C=T.version;for(let z=0,N=H.length;z<N;z+=3){const X=H[z+0],W=H[z+1],k=H[z+2];E.push(X,W,W,k,k,X)}}else if(R!==void 0){const H=R.array;C=R.version;for(let z=0,N=H.length/3-1;z<N;z+=3){const X=z+0,W=z+1,k=z+2;E.push(X,W,W,k,k,X)}}else return;const b=new(eE(E)?oE:sE)(E,1);b.version=C;const M=f.get(y);M&&t.remove(M),f.set(y,b)}function x(y){const E=f.get(y);if(E){const T=y.index;T!==null&&E.version<T.version&&_(y)}else _(y);return f.get(y)}return{get:p,update:g,getWireframeAttribute:x}}function xw(o,t,e){let r;function l(E){r=E}let f,h;function p(E){f=E.type,h=E.bytesPerElement}function g(E,T){o.drawElements(r,T,f,E*h),e.update(T,r,1)}function _(E,T,R){R!==0&&(o.drawElementsInstanced(r,T,f,E*h,R),e.update(T,r,R))}function x(E,T,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,T,0,f,E,0,R);let b=0;for(let M=0;M<R;M++)b+=T[M];e.update(b,r,1)}function y(E,T,R,C){if(R===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<E.length;M++)_(E[M]/h,T[M],C[M]);else{b.multiDrawElementsInstancedWEBGL(r,T,0,f,E,0,C,0,R);let M=0;for(let H=0;H<R;H++)M+=T[H]*C[H];e.update(M,r,1)}}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=_,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function yw(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,p){switch(e.calls++,h){case o.TRIANGLES:e.triangles+=p*(f/3);break;case o.LINES:e.lines+=p*(f/2);break;case o.LINE_STRIP:e.lines+=p*(f-1);break;case o.LINE_LOOP:e.lines+=p*f;break;case o.POINTS:e.points+=p*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:l,update:r}}function Sw(o,t,e){const r=new WeakMap,l=new mn;function f(h,p,g){const _=h.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=x!==void 0?x.length:0;let E=r.get(p);if(E===void 0||E.count!==y){let O=function(){K.dispose(),r.delete(p),p.removeEventListener("dispose",O)};var T=O;E!==void 0&&E.texture.dispose();const R=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],H=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let N=0;R===!0&&(N=1),C===!0&&(N=2),b===!0&&(N=3);let X=p.attributes.position.count*N,W=1;X>t.maxTextureSize&&(W=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const k=new Float32Array(X*W*4*y),K=new iE(k,X,W,y);K.type=Eo,K.needsUpdate=!0;const F=N*4;for(let j=0;j<y;j++){const pt=M[j],_t=H[j],At=z[j],Tt=X*W*4*j;for(let Y=0;Y<pt.count;Y++){const ot=Y*F;R===!0&&(l.fromBufferAttribute(pt,Y),k[Tt+ot+0]=l.x,k[Tt+ot+1]=l.y,k[Tt+ot+2]=l.z,k[Tt+ot+3]=0),C===!0&&(l.fromBufferAttribute(_t,Y),k[Tt+ot+4]=l.x,k[Tt+ot+5]=l.y,k[Tt+ot+6]=l.z,k[Tt+ot+7]=0),b===!0&&(l.fromBufferAttribute(At,Y),k[Tt+ot+8]=l.x,k[Tt+ot+9]=l.y,k[Tt+ot+10]=l.z,k[Tt+ot+11]=At.itemSize===4?l.w:1)}}E={count:y,texture:K,size:new St(X,W)},r.set(p,E),p.addEventListener("dispose",O)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,e);else{let R=0;for(let b=0;b<_.length;b++)R+=_[b];const C=p.morphTargetsRelative?1:1-R;g.getUniforms().setValue(o,"morphTargetBaseInfluence",C),g.getUniforms().setValue(o,"morphTargetInfluences",_)}g.getUniforms().setValue(o,"morphTargetsTexture",E.texture,e),g.getUniforms().setValue(o,"morphTargetsTextureSize",E.size)}return{update:f}}function Ew(o,t,e,r){let l=new WeakMap;function f(g){const _=r.render.frame,x=g.geometry,y=t.get(g,x);if(l.get(y)!==_&&(t.update(y),l.set(y,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",p)===!1&&g.addEventListener("dispose",p),l.get(g)!==_&&(e.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&e.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,_))),g.isSkinnedMesh){const E=g.skeleton;l.get(E)!==_&&(E.update(),l.set(E,_))}return y}function h(){l=new WeakMap}function p(g){const _=g.target;_.removeEventListener("dispose",p),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:f,dispose:h}}const yE=new Ar,sS=new dE(1,1),SE=new iE,EE=new L1,ME=new cE,oS=[],lS=[],uS=new Float32Array(16),cS=new Float32Array(9),fS=new Float32Array(4);function hh(o,t,e){const r=o[0];if(r<=0||r>0)return o;const l=t*e;let f=oS[l];if(f===void 0&&(f=new Float32Array(l),oS[l]=f),t!==0){r.toArray(f,0);for(let h=1,p=0;h!==t;++h)p+=e,o[h].toArray(f,p)}return f}function Ci(o,t){if(o.length!==t.length)return!1;for(let e=0,r=o.length;e<r;e++)if(o[e]!==t[e])return!1;return!0}function Di(o,t){for(let e=0,r=t.length;e<r;e++)o[e]=t[e]}function G_(o,t){let e=lS[t];e===void 0&&(e=new Int32Array(t),lS[t]=e);for(let r=0;r!==t;++r)e[r]=o.allocateTextureUnit();return e}function Mw(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Tw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ci(e,t))return;o.uniform2fv(this.addr,t),Di(e,t)}}function bw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ci(e,t))return;o.uniform3fv(this.addr,t),Di(e,t)}}function Aw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ci(e,t))return;o.uniform4fv(this.addr,t),Di(e,t)}}function ww(o,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ci(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Di(e,t)}else{if(Ci(e,r))return;fS.set(r),o.uniformMatrix2fv(this.addr,!1,fS),Di(e,r)}}function Rw(o,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ci(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Di(e,t)}else{if(Ci(e,r))return;cS.set(r),o.uniformMatrix3fv(this.addr,!1,cS),Di(e,r)}}function Cw(o,t){const e=this.cache,r=t.elements;if(r===void 0){if(Ci(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Di(e,t)}else{if(Ci(e,r))return;uS.set(r),o.uniformMatrix4fv(this.addr,!1,uS),Di(e,r)}}function Dw(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Lw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ci(e,t))return;o.uniform2iv(this.addr,t),Di(e,t)}}function Uw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ci(e,t))return;o.uniform3iv(this.addr,t),Di(e,t)}}function Nw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ci(e,t))return;o.uniform4iv(this.addr,t),Di(e,t)}}function Ow(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Iw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ci(e,t))return;o.uniform2uiv(this.addr,t),Di(e,t)}}function Pw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ci(e,t))return;o.uniform3uiv(this.addr,t),Di(e,t)}}function zw(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ci(e,t))return;o.uniform4uiv(this.addr,t),Di(e,t)}}function Bw(o,t,e){const r=this.cache,l=e.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(sS.compareFunction=tE,f=sS):f=yE,e.setTexture2D(t||f,l)}function Fw(o,t,e){const r=this.cache,l=e.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),e.setTexture3D(t||EE,l)}function Hw(o,t,e){const r=this.cache,l=e.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),e.setTextureCube(t||ME,l)}function Gw(o,t,e){const r=this.cache,l=e.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),e.setTexture2DArray(t||SE,l)}function Vw(o){switch(o){case 5126:return Mw;case 35664:return Tw;case 35665:return bw;case 35666:return Aw;case 35674:return ww;case 35675:return Rw;case 35676:return Cw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Uw;case 35669:case 35673:return Nw;case 5125:return Ow;case 36294:return Iw;case 36295:return Pw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Gw}}function Ww(o,t){o.uniform1fv(this.addr,t)}function kw(o,t){const e=hh(t,this.size,2);o.uniform2fv(this.addr,e)}function Xw(o,t){const e=hh(t,this.size,3);o.uniform3fv(this.addr,e)}function qw(o,t){const e=hh(t,this.size,4);o.uniform4fv(this.addr,e)}function Yw(o,t){const e=hh(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Zw(o,t){const e=hh(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Kw(o,t){const e=hh(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Qw(o,t){o.uniform1iv(this.addr,t)}function jw(o,t){o.uniform2iv(this.addr,t)}function Jw(o,t){o.uniform3iv(this.addr,t)}function $w(o,t){o.uniform4iv(this.addr,t)}function tR(o,t){o.uniform1uiv(this.addr,t)}function eR(o,t){o.uniform2uiv(this.addr,t)}function nR(o,t){o.uniform3uiv(this.addr,t)}function iR(o,t){o.uniform4uiv(this.addr,t)}function rR(o,t,e){const r=this.cache,l=t.length,f=G_(e,l);Ci(r,f)||(o.uniform1iv(this.addr,f),Di(r,f));for(let h=0;h!==l;++h)e.setTexture2D(t[h]||yE,f[h])}function aR(o,t,e){const r=this.cache,l=t.length,f=G_(e,l);Ci(r,f)||(o.uniform1iv(this.addr,f),Di(r,f));for(let h=0;h!==l;++h)e.setTexture3D(t[h]||EE,f[h])}function sR(o,t,e){const r=this.cache,l=t.length,f=G_(e,l);Ci(r,f)||(o.uniform1iv(this.addr,f),Di(r,f));for(let h=0;h!==l;++h)e.setTextureCube(t[h]||ME,f[h])}function oR(o,t,e){const r=this.cache,l=t.length,f=G_(e,l);Ci(r,f)||(o.uniform1iv(this.addr,f),Di(r,f));for(let h=0;h!==l;++h)e.setTexture2DArray(t[h]||SE,f[h])}function lR(o){switch(o){case 5126:return Ww;case 35664:return kw;case 35665:return Xw;case 35666:return qw;case 35674:return Yw;case 35675:return Zw;case 35676:return Kw;case 5124:case 35670:return Qw;case 35667:case 35671:return jw;case 35668:case 35672:return Jw;case 35669:case 35673:return $w;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}class uR{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=Vw(e.type)}}class cR{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lR(e.type)}}class fR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const p=l[f];p.setValue(t,e[p.id],r)}}}const Dv=/(\w+)(\])?(\[|\.)?/g;function hS(o,t){o.seq.push(t),o.map[t.id]=t}function hR(o,t,e){const r=o.name,l=r.length;for(Dv.lastIndex=0;;){const f=Dv.exec(r),h=Dv.lastIndex;let p=f[1];const g=f[2]==="]",_=f[3];if(g&&(p=p|0),_===void 0||_==="["&&h+2===l){hS(e,_===void 0?new uR(p,o,t):new cR(p,o,t));break}else{let y=e.map[p];y===void 0&&(y=new fR(p),hS(e,y)),e=y}}}class C_{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=t.getActiveUniform(e,l),h=t.getUniformLocation(e,f.name);hR(f,h,this)}}setValue(t,e,r,l){const f=this.map[e];f!==void 0&&f.setValue(t,r,l)}setOptional(t,e,r){const l=e[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,e,r,l){for(let f=0,h=e.length;f!==h;++f){const p=e[f],g=r[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,l)}}static seqWithValue(t,e){const r=[];for(let l=0,f=t.length;l!==f;++l){const h=t[l];h.id in e&&r.push(h)}return r}}function dS(o,t,e){const r=o.createShader(t);return o.shaderSource(r,e),o.compileShader(r),r}const dR=37297;let pR=0;function mR(o,t){const e=o.split(`
`),r=[],l=Math.max(t-6,0),f=Math.min(t+6,e.length);for(let h=l;h<f;h++){const p=h+1;r.push(`${p===t?">":" "} ${p}: ${e[h]}`)}return r.join(`
`)}const pS=new He;function gR(o){vn._getMatrix(pS,vn.workingColorSpace,o);const t=`mat3( ${pS.elements.map(e=>e.toFixed(4))} )`;switch(vn.getTransfer(o)){case D_:return[t,"LinearTransferOETF"];case zn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function mS(o,t,e){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const h=parseInt(f[1]);return e.toUpperCase()+`

`+l+`

`+mR(o.getShaderSource(t),h)}else return l}function _R(o,t){const e=gR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vR(o,t){let e;switch(t){case GM:e="Linear";break;case VM:e="Reinhard";break;case WM:e="Cineon";break;case kM:e="ACESFilmic";break;case qM:e="AgX";break;case YM:e="Neutral";break;case XM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const v_=new I;function xR(){vn.getLuminanceCoefficients(v_);const o=v_.x.toFixed(4),t=v_.y.toFixed(4),e=v_.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dp).join(`
`)}function SR(o){const t=[];for(const e in o){const r=o[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function ER(o,t){const e={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(t,l),h=f.name;let p=1;f.type===o.FLOAT_MAT2&&(p=2),f.type===o.FLOAT_MAT3&&(p=3),f.type===o.FLOAT_MAT4&&(p=4),e[h]={type:f.type,location:o.getAttribLocation(t,h),locationSize:p}}return e}function dp(o){return o!==""}function gS(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _S(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tx(o){return o.replace(MR,bR)}const TR=new Map;function bR(o,t){let e=ke[t];if(e===void 0){const r=TR.get(t);if(r!==void 0)e=ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Tx(e)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vS(o){return o.replace(AR,wR)}function wR(o,t,e,r){let l="";for(let f=parseInt(t);f<parseInt(e);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function xS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RR(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===HS?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===yM?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xo&&(t="SHADOWMAP_TYPE_VSM"),t}function CR(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ih:case rh:t="ENVMAP_TYPE_CUBE";break;case z_:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DR(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case rh:t="ENVMAP_MODE_REFRACTION";break}return t}function LR(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case GS:t="ENVMAP_BLENDING_MULTIPLY";break;case FM:t="ENVMAP_BLENDING_MIX";break;case HM:t="ENVMAP_BLENDING_ADD";break}return t}function UR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function NR(o,t,e,r){const l=o.getContext(),f=e.defines;let h=e.vertexShader,p=e.fragmentShader;const g=RR(e),_=CR(e),x=DR(e),y=LR(e),E=UR(e),T=yR(e),R=SR(f),C=l.createProgram();let b,M,H=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,R].filter(dp).join(`
`),b.length>0&&(b+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,R].filter(dp).join(`
`),M.length>0&&(M+=`
`)):(b=[xS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,R,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+x:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dp).join(`
`),M=[xS(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,R,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.envMap?"#define "+x:"",e.envMap?"#define "+y:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wl?"#define TONE_MAPPING":"",e.toneMapping!==wl?ke.tonemapping_pars_fragment:"",e.toneMapping!==wl?vR("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_R("linearToOutputTexel",e.outputColorSpace),xR(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dp).join(`
`)),h=Tx(h),h=gS(h,e),h=_S(h,e),p=Tx(p),p=gS(p,e),p=_S(p,e),h=vS(h),p=vS(p),e.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,b=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,M=["#define varying in",e.glslVersion===xy?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const z=H+b+h,N=H+M+p,X=dS(l,l.VERTEX_SHADER,z),W=dS(l,l.FRAGMENT_SHADER,N);l.attachShader(C,X),l.attachShader(C,W),e.index0AttributeName!==void 0?l.bindAttribLocation(C,0,e.index0AttributeName):e.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function k(j){if(o.debug.checkShaderErrors){const pt=l.getProgramInfoLog(C).trim(),_t=l.getShaderInfoLog(X).trim(),At=l.getShaderInfoLog(W).trim();let Tt=!0,Y=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,W);else{const ot=mS(l,X,"vertex"),it=mS(l,W,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+pt+`
`+ot+`
`+it)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(_t===""||At==="")&&(Y=!1);Y&&(j.diagnostics={runnable:Tt,programLog:pt,vertexShader:{log:_t,prefix:b},fragmentShader:{log:At,prefix:M}})}l.deleteShader(X),l.deleteShader(W),K=new C_(l,C),F=ER(l,C)}let K;this.getUniforms=function(){return K===void 0&&k(this),K};let F;this.getAttributes=function(){return F===void 0&&k(this),F};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=l.getProgramParameter(C,dR)),O},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pR++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=W,this}let OR=0;class IR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(e),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new PR(t),e.set(t,r)),r}}class PR{constructor(t){this.id=OR++,this.code=t,this.usedTimes=0}}function zR(o,t,e,r,l,f,h){const p=new Hx,g=new IR,_=new Set,x=[],y=l.logarithmicDepthBuffer,E=l.vertexTextures;let T=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(F){return _.add(F),F===0?"uv":`uv${F}`}function b(F,O,j,pt,_t){const At=pt.fog,Tt=_t.geometry,Y=F.isMeshStandardMaterial?pt.environment:null,ot=(F.isMeshStandardMaterial?e:t).get(F.envMap||Y),it=ot&&ot.mapping===z_?ot.image.height:null,Wt=R[F.type];F.precision!==null&&(T=l.getMaxPrecision(F.precision),T!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",T,"instead."));const V=Tt.morphAttributes.position||Tt.morphAttributes.normal||Tt.morphAttributes.color,ut=V!==void 0?V.length:0;let Ft=0;Tt.morphAttributes.position!==void 0&&(Ft=1),Tt.morphAttributes.normal!==void 0&&(Ft=2),Tt.morphAttributes.color!==void 0&&(Ft=3);let Vt,ct,Dt,Bt;if(Wt){const cn=Wr[Wt];Vt=cn.vertexShader,ct=cn.fragmentShader}else Vt=F.vertexShader,ct=F.fragmentShader,g.update(F),Dt=g.getVertexShaderID(F),Bt=g.getFragmentShaderID(F);const qt=o.getRenderTarget(),Kt=o.state.buffers.depth.getReversed(),Le=_t.isInstancedMesh===!0,Ee=_t.isBatchedMesh===!0,xn=!!F.map,gn=!!F.matcap,Pe=!!ot,Q=!!F.aoMap,vi=!!F.lightMap,Qe=!!F.bumpMap,ve=!!F.normalMap,de=!!F.displacementMap,Tn=!!F.emissiveMap,ce=!!F.metalnessMap,G=!!F.roughnessMap,U=F.anisotropy>0,dt=F.clearcoat>0,zt=F.dispersion>0,Ht=F.iridescence>0,Ct=F.sheen>0,te=F.transmission>0,Yt=U&&!!F.anisotropyMap,Zt=dt&&!!F.clearcoatMap,qe=dt&&!!F.clearcoatNormalMap,Xt=dt&&!!F.clearcoatRoughnessMap,le=Ht&&!!F.iridescenceMap,pe=Ht&&!!F.iridescenceThicknessMap,xe=Ct&&!!F.sheenColorMap,ee=Ct&&!!F.sheenRoughnessMap,Oe=!!F.specularMap,we=!!F.specularColorMap,bn=!!F.specularIntensityMap,et=te&&!!F.transmissionMap,$t=te&&!!F.thicknessMap,Et=!!F.gradientMap,Ut=!!F.alphaMap,ae=F.alphaTest>0,ne=!!F.alphaHash,Ue=!!F.extensions;let On=wl;F.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(On=o.toneMapping);const ei={shaderID:Wt,shaderType:F.type,shaderName:F.name,vertexShader:Vt,fragmentShader:ct,defines:F.defines,customVertexShaderID:Dt,customFragmentShaderID:Bt,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:T,batching:Ee,batchingColor:Ee&&_t._colorsTexture!==null,instancing:Le,instancingColor:Le&&_t.instanceColor!==null,instancingMorph:Le&&_t.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:qt===null?o.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:oh,alphaToCoverage:!!F.alphaToCoverage,map:xn,matcap:gn,envMap:Pe,envMapMode:Pe&&ot.mapping,envMapCubeUVHeight:it,aoMap:Q,lightMap:vi,bumpMap:Qe,normalMap:ve,displacementMap:E&&de,emissiveMap:Tn,normalMapObjectSpace:ve&&F.normalMapType===jM,normalMapTangentSpace:ve&&F.normalMapType===$S,metalnessMap:ce,roughnessMap:G,anisotropy:U,anisotropyMap:Yt,clearcoat:dt,clearcoatMap:Zt,clearcoatNormalMap:qe,clearcoatRoughnessMap:Xt,dispersion:zt,iridescence:Ht,iridescenceMap:le,iridescenceThicknessMap:pe,sheen:Ct,sheenColorMap:xe,sheenRoughnessMap:ee,specularMap:Oe,specularColorMap:we,specularIntensityMap:bn,transmission:te,transmissionMap:et,thicknessMap:$t,gradientMap:Et,opaque:F.transparent===!1&&F.blending===Jf&&F.alphaToCoverage===!1,alphaMap:Ut,alphaTest:ae,alphaHash:ne,combine:F.combine,mapUv:xn&&C(F.map.channel),aoMapUv:Q&&C(F.aoMap.channel),lightMapUv:vi&&C(F.lightMap.channel),bumpMapUv:Qe&&C(F.bumpMap.channel),normalMapUv:ve&&C(F.normalMap.channel),displacementMapUv:de&&C(F.displacementMap.channel),emissiveMapUv:Tn&&C(F.emissiveMap.channel),metalnessMapUv:ce&&C(F.metalnessMap.channel),roughnessMapUv:G&&C(F.roughnessMap.channel),anisotropyMapUv:Yt&&C(F.anisotropyMap.channel),clearcoatMapUv:Zt&&C(F.clearcoatMap.channel),clearcoatNormalMapUv:qe&&C(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(F.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&C(F.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&C(F.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&C(F.sheenColorMap.channel),sheenRoughnessMapUv:ee&&C(F.sheenRoughnessMap.channel),specularMapUv:Oe&&C(F.specularMap.channel),specularColorMapUv:we&&C(F.specularColorMap.channel),specularIntensityMapUv:bn&&C(F.specularIntensityMap.channel),transmissionMapUv:et&&C(F.transmissionMap.channel),thicknessMapUv:$t&&C(F.thicknessMap.channel),alphaMapUv:Ut&&C(F.alphaMap.channel),vertexTangents:!!Tt.attributes.tangent&&(ve||U),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!Tt.attributes.color&&Tt.attributes.color.itemSize===4,pointsUvs:_t.isPoints===!0&&!!Tt.attributes.uv&&(xn||Ut),fog:!!At,useFog:F.fog===!0,fogExp2:!!At&&At.isFogExp2,flatShading:F.flatShading===!0,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Kt,skinning:_t.isSkinnedMesh===!0,morphTargets:Tt.morphAttributes.position!==void 0,morphNormals:Tt.morphAttributes.normal!==void 0,morphColors:Tt.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ft,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:F.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:On,decodeVideoTexture:xn&&F.map.isVideoTexture===!0&&vn.getTransfer(F.map.colorSpace)===zn,decodeVideoTextureEmissive:Tn&&F.emissiveMap.isVideoTexture===!0&&vn.getTransfer(F.emissiveMap.colorSpace)===zn,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===yo,flipSided:F.side===kr,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:Ue&&F.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&F.extensions.multiDraw===!0||Ee)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return ei.vertexUv1s=_.has(1),ei.vertexUv2s=_.has(2),ei.vertexUv3s=_.has(3),_.clear(),ei}function M(F){const O=[];if(F.shaderID?O.push(F.shaderID):(O.push(F.customVertexShaderID),O.push(F.customFragmentShaderID)),F.defines!==void 0)for(const j in F.defines)O.push(j),O.push(F.defines[j]);return F.isRawShaderMaterial===!1&&(H(O,F),z(O,F),O.push(o.outputColorSpace)),O.push(F.customProgramCacheKey),O.join()}function H(F,O){F.push(O.precision),F.push(O.outputColorSpace),F.push(O.envMapMode),F.push(O.envMapCubeUVHeight),F.push(O.mapUv),F.push(O.alphaMapUv),F.push(O.lightMapUv),F.push(O.aoMapUv),F.push(O.bumpMapUv),F.push(O.normalMapUv),F.push(O.displacementMapUv),F.push(O.emissiveMapUv),F.push(O.metalnessMapUv),F.push(O.roughnessMapUv),F.push(O.anisotropyMapUv),F.push(O.clearcoatMapUv),F.push(O.clearcoatNormalMapUv),F.push(O.clearcoatRoughnessMapUv),F.push(O.iridescenceMapUv),F.push(O.iridescenceThicknessMapUv),F.push(O.sheenColorMapUv),F.push(O.sheenRoughnessMapUv),F.push(O.specularMapUv),F.push(O.specularColorMapUv),F.push(O.specularIntensityMapUv),F.push(O.transmissionMapUv),F.push(O.thicknessMapUv),F.push(O.combine),F.push(O.fogExp2),F.push(O.sizeAttenuation),F.push(O.morphTargetsCount),F.push(O.morphAttributeCount),F.push(O.numDirLights),F.push(O.numPointLights),F.push(O.numSpotLights),F.push(O.numSpotLightMaps),F.push(O.numHemiLights),F.push(O.numRectAreaLights),F.push(O.numDirLightShadows),F.push(O.numPointLightShadows),F.push(O.numSpotLightShadows),F.push(O.numSpotLightShadowsWithMaps),F.push(O.numLightProbes),F.push(O.shadowMapType),F.push(O.toneMapping),F.push(O.numClippingPlanes),F.push(O.numClipIntersection),F.push(O.depthPacking)}function z(F,O){p.disableAll(),O.supportsVertexTextures&&p.enable(0),O.instancing&&p.enable(1),O.instancingColor&&p.enable(2),O.instancingMorph&&p.enable(3),O.matcap&&p.enable(4),O.envMap&&p.enable(5),O.normalMapObjectSpace&&p.enable(6),O.normalMapTangentSpace&&p.enable(7),O.clearcoat&&p.enable(8),O.iridescence&&p.enable(9),O.alphaTest&&p.enable(10),O.vertexColors&&p.enable(11),O.vertexAlphas&&p.enable(12),O.vertexUv1s&&p.enable(13),O.vertexUv2s&&p.enable(14),O.vertexUv3s&&p.enable(15),O.vertexTangents&&p.enable(16),O.anisotropy&&p.enable(17),O.alphaHash&&p.enable(18),O.batching&&p.enable(19),O.dispersion&&p.enable(20),O.batchingColor&&p.enable(21),F.push(p.mask),p.disableAll(),O.fog&&p.enable(0),O.useFog&&p.enable(1),O.flatShading&&p.enable(2),O.logarithmicDepthBuffer&&p.enable(3),O.reverseDepthBuffer&&p.enable(4),O.skinning&&p.enable(5),O.morphTargets&&p.enable(6),O.morphNormals&&p.enable(7),O.morphColors&&p.enable(8),O.premultipliedAlpha&&p.enable(9),O.shadowMapEnabled&&p.enable(10),O.doubleSided&&p.enable(11),O.flipSided&&p.enable(12),O.useDepthPacking&&p.enable(13),O.dithering&&p.enable(14),O.transmission&&p.enable(15),O.sheen&&p.enable(16),O.opaque&&p.enable(17),O.pointsUvs&&p.enable(18),O.decodeVideoTexture&&p.enable(19),O.decodeVideoTextureEmissive&&p.enable(20),O.alphaToCoverage&&p.enable(21),F.push(p.mask)}function N(F){const O=R[F.type];let j;if(O){const pt=Wr[O];j=Gx.clone(pt.uniforms)}else j=F.uniforms;return j}function X(F,O){let j;for(let pt=0,_t=x.length;pt<_t;pt++){const At=x[pt];if(At.cacheKey===O){j=At,++j.usedTimes;break}}return j===void 0&&(j=new NR(o,O,F,f),x.push(j)),j}function W(F){if(--F.usedTimes===0){const O=x.indexOf(F);x[O]=x[x.length-1],x.pop(),F.destroy()}}function k(F){g.remove(F)}function K(){g.dispose()}return{getParameters:b,getProgramCacheKey:M,getUniforms:N,acquireProgram:X,releaseProgram:W,releaseShaderCache:k,programs:x,dispose:K}}function BR(){let o=new WeakMap;function t(h){return o.has(h)}function e(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function r(h){o.delete(h)}function l(h,p,g){o.get(h)[p]=g}function f(){o=new WeakMap}return{has:t,get:e,remove:r,update:l,dispose:f}}function FR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function SS(){const o=[];let t=0;const e=[],r=[],l=[];function f(){t=0,e.length=0,r.length=0,l.length=0}function h(y,E,T,R,C,b){let M=o[t];return M===void 0?(M={id:y.id,object:y,geometry:E,material:T,groupOrder:R,renderOrder:y.renderOrder,z:C,group:b},o[t]=M):(M.id=y.id,M.object=y,M.geometry=E,M.material=T,M.groupOrder=R,M.renderOrder=y.renderOrder,M.z=C,M.group=b),t++,M}function p(y,E,T,R,C,b){const M=h(y,E,T,R,C,b);T.transmission>0?r.push(M):T.transparent===!0?l.push(M):e.push(M)}function g(y,E,T,R,C,b){const M=h(y,E,T,R,C,b);T.transmission>0?r.unshift(M):T.transparent===!0?l.unshift(M):e.unshift(M)}function _(y,E){e.length>1&&e.sort(y||FR),r.length>1&&r.sort(E||yS),l.length>1&&l.sort(E||yS)}function x(){for(let y=t,E=o.length;y<E;y++){const T=o[y];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:e,transmissive:r,transparent:l,init:f,push:p,unshift:g,finish:x,sort:_}}function HR(){let o=new WeakMap;function t(r,l){const f=o.get(r);let h;return f===void 0?(h=new SS,o.set(r,[h])):l>=f.length?(h=new SS,f.push(h)):h=f[l],h}function e(){o=new WeakMap}return{get:t,dispose:e}}function GR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new yt};break;case"SpotLight":e={position:new I,direction:new I,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new I,halfWidth:new I,halfHeight:new I};break}return o[t.id]=e,e}}}function VR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let WR=0;function kR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function XR(o){const t=new GR,e=VR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new I);const l=new I,f=new Gn,h=new Gn;function p(_){let x=0,y=0,E=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let T=0,R=0,C=0,b=0,M=0,H=0,z=0,N=0,X=0,W=0,k=0;_.sort(kR);for(let F=0,O=_.length;F<O;F++){const j=_[F],pt=j.color,_t=j.intensity,At=j.distance,Tt=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=pt.r*_t,y+=pt.g*_t,E+=pt.b*_t;else if(j.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(j.sh.coefficients[Y],_t);k++}else if(j.isDirectionalLight){const Y=t.get(j);if(Y.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const ot=j.shadow,it=e.get(j);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,r.directionalShadow[T]=it,r.directionalShadowMap[T]=Tt,r.directionalShadowMatrix[T]=j.shadow.matrix,H++}r.directional[T]=Y,T++}else if(j.isSpotLight){const Y=t.get(j);Y.position.setFromMatrixPosition(j.matrixWorld),Y.color.copy(pt).multiplyScalar(_t),Y.distance=At,Y.coneCos=Math.cos(j.angle),Y.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Y.decay=j.decay,r.spot[C]=Y;const ot=j.shadow;if(j.map&&(r.spotLightMap[X]=j.map,X++,ot.updateMatrices(j),j.castShadow&&W++),r.spotLightMatrix[C]=ot.matrix,j.castShadow){const it=e.get(j);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,r.spotShadow[C]=it,r.spotShadowMap[C]=Tt,N++}C++}else if(j.isRectAreaLight){const Y=t.get(j);Y.color.copy(pt).multiplyScalar(_t),Y.halfWidth.set(j.width*.5,0,0),Y.halfHeight.set(0,j.height*.5,0),r.rectArea[b]=Y,b++}else if(j.isPointLight){const Y=t.get(j);if(Y.color.copy(j.color).multiplyScalar(j.intensity),Y.distance=j.distance,Y.decay=j.decay,j.castShadow){const ot=j.shadow,it=e.get(j);it.shadowIntensity=ot.intensity,it.shadowBias=ot.bias,it.shadowNormalBias=ot.normalBias,it.shadowRadius=ot.radius,it.shadowMapSize=ot.mapSize,it.shadowCameraNear=ot.camera.near,it.shadowCameraFar=ot.camera.far,r.pointShadow[R]=it,r.pointShadowMap[R]=Tt,r.pointShadowMatrix[R]=j.shadow.matrix,z++}r.point[R]=Y,R++}else if(j.isHemisphereLight){const Y=t.get(j);Y.skyColor.copy(j.color).multiplyScalar(_t),Y.groundColor.copy(j.groundColor).multiplyScalar(_t),r.hemi[M]=Y,M++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=jt.LTC_FLOAT_1,r.rectAreaLTC2=jt.LTC_FLOAT_2):(r.rectAreaLTC1=jt.LTC_HALF_1,r.rectAreaLTC2=jt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=E;const K=r.hash;(K.directionalLength!==T||K.pointLength!==R||K.spotLength!==C||K.rectAreaLength!==b||K.hemiLength!==M||K.numDirectionalShadows!==H||K.numPointShadows!==z||K.numSpotShadows!==N||K.numSpotMaps!==X||K.numLightProbes!==k)&&(r.directional.length=T,r.spot.length=C,r.rectArea.length=b,r.point.length=R,r.hemi.length=M,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=N+X-W,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=W,r.numLightProbes=k,K.directionalLength=T,K.pointLength=R,K.spotLength=C,K.rectAreaLength=b,K.hemiLength=M,K.numDirectionalShadows=H,K.numPointShadows=z,K.numSpotShadows=N,K.numSpotMaps=X,K.numLightProbes=k,r.version=WR++)}function g(_,x){let y=0,E=0,T=0,R=0,C=0;const b=x.matrixWorldInverse;for(let M=0,H=_.length;M<H;M++){const z=_[M];if(z.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),y++}else if(z.isSpotLight){const N=r.spot[T];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(b),N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(b),T++}else if(z.isRectAreaLight){const N=r.rectArea[R];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(b),h.identity(),f.copy(z.matrixWorld),f.premultiply(b),h.extractRotation(f),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),R++}else if(z.isPointLight){const N=r.point[E];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(b),E++}else if(z.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(b),C++}}}return{setup:p,setupView:g,state:r}}function ES(o){const t=new XR(o),e=[],r=[];function l(x){_.camera=x,e.length=0,r.length=0}function f(x){e.push(x)}function h(x){r.push(x)}function p(){t.setup(e)}function g(x){t.setupView(e,x)}const _={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:p,setupLightsView:g,pushLight:f,pushShadow:h}}function qR(o){let t=new WeakMap;function e(l,f=0){const h=t.get(l);let p;return h===void 0?(p=new ES(o),t.set(l,[p])):f>=h.length?(p=new ES(o),h.push(p)):p=h[f],p}function r(){t=new WeakMap}return{get:e,dispose:r}}const YR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KR(o,t,e){let r=new Vx;const l=new St,f=new St,h=new mn,p=new dT({depthPacking:QM}),g=new pT,_={},x=e.maxTextureSize,y={[Rl]:kr,[kr]:Rl,[yo]:yo},E=new Ro({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:YR,fragmentShader:ZR}),T=E.clone();T.defines.HORIZONTAL_PASS=1;const R=new fr;R.setAttribute("position",new ja(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ai(R,E),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=HS;let M=this.type;this.render=function(W,k,K){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||W.length===0)return;const F=o.getRenderTarget(),O=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),pt=o.state;pt.setBlending(Al),pt.buffers.color.setClear(1,1,1,1),pt.buffers.depth.setTest(!0),pt.setScissorTest(!1);const _t=M!==xo&&this.type===xo,At=M===xo&&this.type!==xo;for(let Tt=0,Y=W.length;Tt<Y;Tt++){const ot=W[Tt],it=ot.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;l.copy(it.mapSize);const Wt=it.getFrameExtents();if(l.multiply(Wt),f.copy(it.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(f.x=Math.floor(x/Wt.x),l.x=f.x*Wt.x,it.mapSize.x=f.x),l.y>x&&(f.y=Math.floor(x/Wt.y),l.y=f.y*Wt.y,it.mapSize.y=f.y)),it.map===null||_t===!0||At===!0){const ut=this.type!==xo?{minFilter:Qa,magFilter:Qa}:{};it.map!==null&&it.map.dispose(),it.map=new tc(l.x,l.y,ut),it.map.texture.name=ot.name+".shadowMap",it.camera.updateProjectionMatrix()}o.setRenderTarget(it.map),o.clear();const V=it.getViewportCount();for(let ut=0;ut<V;ut++){const Ft=it.getViewport(ut);h.set(f.x*Ft.x,f.y*Ft.y,f.x*Ft.z,f.y*Ft.w),pt.viewport(h),it.updateMatrices(ot,ut),r=it.getFrustum(),N(k,K,it.camera,ot,this.type)}it.isPointLightShadow!==!0&&this.type===xo&&H(it,K),it.needsUpdate=!1}M=this.type,b.needsUpdate=!1,o.setRenderTarget(F,O,j)};function H(W,k){const K=t.update(C);E.defines.VSM_SAMPLES!==W.blurSamples&&(E.defines.VSM_SAMPLES=W.blurSamples,T.defines.VSM_SAMPLES=W.blurSamples,E.needsUpdate=!0,T.needsUpdate=!0),W.mapPass===null&&(W.mapPass=new tc(l.x,l.y)),E.uniforms.shadow_pass.value=W.map.texture,E.uniforms.resolution.value=W.mapSize,E.uniforms.radius.value=W.radius,o.setRenderTarget(W.mapPass),o.clear(),o.renderBufferDirect(k,null,K,E,C,null),T.uniforms.shadow_pass.value=W.mapPass.texture,T.uniforms.resolution.value=W.mapSize,T.uniforms.radius.value=W.radius,o.setRenderTarget(W.map),o.clear(),o.renderBufferDirect(k,null,K,T,C,null)}function z(W,k,K,F){let O=null;const j=K.isPointLight===!0?W.customDistanceMaterial:W.customDepthMaterial;if(j!==void 0)O=j;else if(O=K.isPointLight===!0?g:p,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const pt=O.uuid,_t=k.uuid;let At=_[pt];At===void 0&&(At={},_[pt]=At);let Tt=At[_t];Tt===void 0&&(Tt=O.clone(),At[_t]=Tt,k.addEventListener("dispose",X)),O=Tt}if(O.visible=k.visible,O.wireframe=k.wireframe,F===xo?O.side=k.shadowSide!==null?k.shadowSide:k.side:O.side=k.shadowSide!==null?k.shadowSide:y[k.side],O.alphaMap=k.alphaMap,O.alphaTest=k.alphaTest,O.map=k.map,O.clipShadows=k.clipShadows,O.clippingPlanes=k.clippingPlanes,O.clipIntersection=k.clipIntersection,O.displacementMap=k.displacementMap,O.displacementScale=k.displacementScale,O.displacementBias=k.displacementBias,O.wireframeLinewidth=k.wireframeLinewidth,O.linewidth=k.linewidth,K.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const pt=o.properties.get(O);pt.light=K}return O}function N(W,k,K,F,O){if(W.visible===!1)return;if(W.layers.test(k.layers)&&(W.isMesh||W.isLine||W.isPoints)&&(W.castShadow||W.receiveShadow&&O===xo)&&(!W.frustumCulled||r.intersectsObject(W))){W.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,W.matrixWorld);const _t=t.update(W),At=W.material;if(Array.isArray(At)){const Tt=_t.groups;for(let Y=0,ot=Tt.length;Y<ot;Y++){const it=Tt[Y],Wt=At[it.materialIndex];if(Wt&&Wt.visible){const V=z(W,Wt,F,O);W.onBeforeShadow(o,W,k,K,_t,V,it),o.renderBufferDirect(K,null,_t,V,W,it),W.onAfterShadow(o,W,k,K,_t,V,it)}}}else if(At.visible){const Tt=z(W,At,F,O);W.onBeforeShadow(o,W,k,K,_t,Tt,null),o.renderBufferDirect(K,null,_t,Tt,W,null),W.onAfterShadow(o,W,k,K,_t,Tt,null)}}const pt=W.children;for(let _t=0,At=pt.length;_t<At;_t++)N(pt[_t],k,K,F,O)}function X(W){W.target.removeEventListener("dispose",X);for(const K in _){const F=_[K],O=W.target.uuid;O in F&&(F[O].dispose(),delete F[O])}}}const QR={[zv]:Bv,[Fv]:Vv,[Hv]:Wv,[nh]:Gv,[Bv]:zv,[Vv]:Fv,[Wv]:Hv,[Gv]:nh};function jR(o,t){function e(){let et=!1;const $t=new mn;let Et=null;const Ut=new mn(0,0,0,0);return{setMask:function(ae){Et!==ae&&!et&&(o.colorMask(ae,ae,ae,ae),Et=ae)},setLocked:function(ae){et=ae},setClear:function(ae,ne,Ue,On,ei){ei===!0&&(ae*=On,ne*=On,Ue*=On),$t.set(ae,ne,Ue,On),Ut.equals($t)===!1&&(o.clearColor(ae,ne,Ue,On),Ut.copy($t))},reset:function(){et=!1,Et=null,Ut.set(-1,0,0,0)}}}function r(){let et=!1,$t=!1,Et=null,Ut=null,ae=null;return{setReversed:function(ne){if($t!==ne){const Ue=t.get("EXT_clip_control");$t?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const On=ae;ae=null,this.setClear(On)}$t=ne},getReversed:function(){return $t},setTest:function(ne){ne?qt(o.DEPTH_TEST):Kt(o.DEPTH_TEST)},setMask:function(ne){Et!==ne&&!et&&(o.depthMask(ne),Et=ne)},setFunc:function(ne){if($t&&(ne=QR[ne]),Ut!==ne){switch(ne){case zv:o.depthFunc(o.NEVER);break;case Bv:o.depthFunc(o.ALWAYS);break;case Fv:o.depthFunc(o.LESS);break;case nh:o.depthFunc(o.LEQUAL);break;case Hv:o.depthFunc(o.EQUAL);break;case Gv:o.depthFunc(o.GEQUAL);break;case Vv:o.depthFunc(o.GREATER);break;case Wv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=ne}},setLocked:function(ne){et=ne},setClear:function(ne){ae!==ne&&($t&&(ne=1-ne),o.clearDepth(ne),ae=ne)},reset:function(){et=!1,Et=null,Ut=null,ae=null,$t=!1}}}function l(){let et=!1,$t=null,Et=null,Ut=null,ae=null,ne=null,Ue=null,On=null,ei=null;return{setTest:function(cn){et||(cn?qt(o.STENCIL_TEST):Kt(o.STENCIL_TEST))},setMask:function(cn){$t!==cn&&!et&&(o.stencilMask(cn),$t=cn)},setFunc:function(cn,hr,xi){(Et!==cn||Ut!==hr||ae!==xi)&&(o.stencilFunc(cn,hr,xi),Et=cn,Ut=hr,ae=xi)},setOp:function(cn,hr,xi){(ne!==cn||Ue!==hr||On!==xi)&&(o.stencilOp(cn,hr,xi),ne=cn,Ue=hr,On=xi)},setLocked:function(cn){et=cn},setClear:function(cn){ei!==cn&&(o.clearStencil(cn),ei=cn)},reset:function(){et=!1,$t=null,Et=null,Ut=null,ae=null,ne=null,Ue=null,On=null,ei=null}}}const f=new e,h=new r,p=new l,g=new WeakMap,_=new WeakMap;let x={},y={},E=new WeakMap,T=[],R=null,C=!1,b=null,M=null,H=null,z=null,N=null,X=null,W=null,k=new yt(0,0,0),K=0,F=!1,O=null,j=null,pt=null,_t=null,At=null;const Tt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ot=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(it)[1]),Y=ot>=1):it.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Y=ot>=2);let Wt=null,V={};const ut=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),Vt=new mn().fromArray(ut),ct=new mn().fromArray(Ft);function Dt(et,$t,Et,Ut){const ae=new Uint8Array(4),ne=o.createTexture();o.bindTexture(et,ne),o.texParameteri(et,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(et,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ue=0;Ue<Et;Ue++)et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?o.texImage3D($t,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,ae):o.texImage2D($t+Ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ae);return ne}const Bt={};Bt[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),Bt[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Bt[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),p.setClear(0),qt(o.DEPTH_TEST),h.setFunc(nh),Qe(!1),ve(py),qt(o.CULL_FACE),Q(Al);function qt(et){x[et]!==!0&&(o.enable(et),x[et]=!0)}function Kt(et){x[et]!==!1&&(o.disable(et),x[et]=!1)}function Le(et,$t){return y[et]!==$t?(o.bindFramebuffer(et,$t),y[et]=$t,et===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=$t),et===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=$t),!0):!1}function Ee(et,$t){let Et=T,Ut=!1;if(et){Et=E.get($t),Et===void 0&&(Et=[],E.set($t,Et));const ae=et.textures;if(Et.length!==ae.length||Et[0]!==o.COLOR_ATTACHMENT0){for(let ne=0,Ue=ae.length;ne<Ue;ne++)Et[ne]=o.COLOR_ATTACHMENT0+ne;Et.length=ae.length,Ut=!0}}else Et[0]!==o.BACK&&(Et[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(Et)}function xn(et){return R!==et?(o.useProgram(et),R=et,!0):!1}const gn={[Yu]:o.FUNC_ADD,[EM]:o.FUNC_SUBTRACT,[MM]:o.FUNC_REVERSE_SUBTRACT};gn[TM]=o.MIN,gn[bM]=o.MAX;const Pe={[AM]:o.ZERO,[wM]:o.ONE,[RM]:o.SRC_COLOR,[Iv]:o.SRC_ALPHA,[OM]:o.SRC_ALPHA_SATURATE,[UM]:o.DST_COLOR,[DM]:o.DST_ALPHA,[CM]:o.ONE_MINUS_SRC_COLOR,[Pv]:o.ONE_MINUS_SRC_ALPHA,[NM]:o.ONE_MINUS_DST_COLOR,[LM]:o.ONE_MINUS_DST_ALPHA,[IM]:o.CONSTANT_COLOR,[PM]:o.ONE_MINUS_CONSTANT_COLOR,[zM]:o.CONSTANT_ALPHA,[BM]:o.ONE_MINUS_CONSTANT_ALPHA};function Q(et,$t,Et,Ut,ae,ne,Ue,On,ei,cn){if(et===Al){C===!0&&(Kt(o.BLEND),C=!1);return}if(C===!1&&(qt(o.BLEND),C=!0),et!==SM){if(et!==b||cn!==F){if((M!==Yu||N!==Yu)&&(o.blendEquation(o.FUNC_ADD),M=Yu,N=Yu),cn)switch(et){case Jf:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case my:o.blendFunc(o.ONE,o.ONE);break;case gy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _y:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case Jf:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case my:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case gy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case _y:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}H=null,z=null,X=null,W=null,k.set(0,0,0),K=0,b=et,F=cn}return}ae=ae||$t,ne=ne||Et,Ue=Ue||Ut,($t!==M||ae!==N)&&(o.blendEquationSeparate(gn[$t],gn[ae]),M=$t,N=ae),(Et!==H||Ut!==z||ne!==X||Ue!==W)&&(o.blendFuncSeparate(Pe[Et],Pe[Ut],Pe[ne],Pe[Ue]),H=Et,z=Ut,X=ne,W=Ue),(On.equals(k)===!1||ei!==K)&&(o.blendColor(On.r,On.g,On.b,ei),k.copy(On),K=ei),b=et,F=!1}function vi(et,$t){et.side===yo?Kt(o.CULL_FACE):qt(o.CULL_FACE);let Et=et.side===kr;$t&&(Et=!Et),Qe(Et),et.blending===Jf&&et.transparent===!1?Q(Al):Q(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),h.setFunc(et.depthFunc),h.setTest(et.depthTest),h.setMask(et.depthWrite),f.setMask(et.colorWrite);const Ut=et.stencilWrite;p.setTest(Ut),Ut&&(p.setMask(et.stencilWriteMask),p.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),p.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),Tn(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?qt(o.SAMPLE_ALPHA_TO_COVERAGE):Kt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(et){O!==et&&(et?o.frontFace(o.CW):o.frontFace(o.CCW),O=et)}function ve(et){et!==vM?(qt(o.CULL_FACE),et!==j&&(et===py?o.cullFace(o.BACK):et===xM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Kt(o.CULL_FACE),j=et}function de(et){et!==pt&&(Y&&o.lineWidth(et),pt=et)}function Tn(et,$t,Et){et?(qt(o.POLYGON_OFFSET_FILL),(_t!==$t||At!==Et)&&(o.polygonOffset($t,Et),_t=$t,At=Et)):Kt(o.POLYGON_OFFSET_FILL)}function ce(et){et?qt(o.SCISSOR_TEST):Kt(o.SCISSOR_TEST)}function G(et){et===void 0&&(et=o.TEXTURE0+Tt-1),Wt!==et&&(o.activeTexture(et),Wt=et)}function U(et,$t,Et){Et===void 0&&(Wt===null?Et=o.TEXTURE0+Tt-1:Et=Wt);let Ut=V[Et];Ut===void 0&&(Ut={type:void 0,texture:void 0},V[Et]=Ut),(Ut.type!==et||Ut.texture!==$t)&&(Wt!==Et&&(o.activeTexture(Et),Wt=Et),o.bindTexture(et,$t||Bt[et]),Ut.type=et,Ut.texture=$t)}function dt(){const et=V[Wt];et!==void 0&&et.type!==void 0&&(o.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function zt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ht(){try{o.compressedTexImage3D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ct(){try{o.texSubImage2D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function qe(){try{o.texStorage2D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Xt(){try{o.texStorage3D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function le(){try{o.texImage2D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function xe(et){Vt.equals(et)===!1&&(o.scissor(et.x,et.y,et.z,et.w),Vt.copy(et))}function ee(et){ct.equals(et)===!1&&(o.viewport(et.x,et.y,et.z,et.w),ct.copy(et))}function Oe(et,$t){let Et=_.get($t);Et===void 0&&(Et=new WeakMap,_.set($t,Et));let Ut=Et.get(et);Ut===void 0&&(Ut=o.getUniformBlockIndex($t,et.name),Et.set(et,Ut))}function we(et,$t){const Ut=_.get($t).get(et);g.get($t)!==Ut&&(o.uniformBlockBinding($t,Ut,et.__bindingPointIndex),g.set($t,Ut))}function bn(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Wt=null,V={},y={},E=new WeakMap,T=[],R=null,C=!1,b=null,M=null,H=null,z=null,N=null,X=null,W=null,k=new yt(0,0,0),K=0,F=!1,O=null,j=null,pt=null,_t=null,At=null,Vt.set(0,0,o.canvas.width,o.canvas.height),ct.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),p.reset()}return{buffers:{color:f,depth:h,stencil:p},enable:qt,disable:Kt,bindFramebuffer:Le,drawBuffers:Ee,useProgram:xn,setBlending:Q,setMaterial:vi,setFlipSided:Qe,setCullFace:ve,setLineWidth:de,setPolygonOffset:Tn,setScissorTest:ce,activeTexture:G,bindTexture:U,unbindTexture:dt,compressedTexImage2D:zt,compressedTexImage3D:Ht,texImage2D:le,texImage3D:pe,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:qe,texStorage3D:Xt,texSubImage2D:Ct,texSubImage3D:te,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Zt,scissor:xe,viewport:ee,reset:bn}}function JR(o,t,e,r,l,f,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new St,x=new WeakMap;let y;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(G,U){return T?new OffscreenCanvas(G,U):bp("canvas")}function C(G,U,dt){let zt=1;const Ht=ce(G);if((Ht.width>dt||Ht.height>dt)&&(zt=dt/Math.max(Ht.width,Ht.height)),zt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const Ct=Math.floor(zt*Ht.width),te=Math.floor(zt*Ht.height);y===void 0&&(y=R(Ct,te));const Yt=U?R(Ct,te):y;return Yt.width=Ct,Yt.height=te,Yt.getContext("2d").drawImage(G,0,0,Ct,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ht.width+"x"+Ht.height+") to ("+Ct+"x"+te+")."),Yt}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ht.width+"x"+Ht.height+")."),G;return G}function b(G){return G.generateMipmaps}function M(G){o.generateMipmap(G)}function H(G){return G.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?o.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(G,U,dt,zt,Ht=!1){if(G!==null){if(o[G]!==void 0)return o[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let Ct=U;if(U===o.RED&&(dt===o.FLOAT&&(Ct=o.R32F),dt===o.HALF_FLOAT&&(Ct=o.R16F),dt===o.UNSIGNED_BYTE&&(Ct=o.R8)),U===o.RED_INTEGER&&(dt===o.UNSIGNED_BYTE&&(Ct=o.R8UI),dt===o.UNSIGNED_SHORT&&(Ct=o.R16UI),dt===o.UNSIGNED_INT&&(Ct=o.R32UI),dt===o.BYTE&&(Ct=o.R8I),dt===o.SHORT&&(Ct=o.R16I),dt===o.INT&&(Ct=o.R32I)),U===o.RG&&(dt===o.FLOAT&&(Ct=o.RG32F),dt===o.HALF_FLOAT&&(Ct=o.RG16F),dt===o.UNSIGNED_BYTE&&(Ct=o.RG8)),U===o.RG_INTEGER&&(dt===o.UNSIGNED_BYTE&&(Ct=o.RG8UI),dt===o.UNSIGNED_SHORT&&(Ct=o.RG16UI),dt===o.UNSIGNED_INT&&(Ct=o.RG32UI),dt===o.BYTE&&(Ct=o.RG8I),dt===o.SHORT&&(Ct=o.RG16I),dt===o.INT&&(Ct=o.RG32I)),U===o.RGB_INTEGER&&(dt===o.UNSIGNED_BYTE&&(Ct=o.RGB8UI),dt===o.UNSIGNED_SHORT&&(Ct=o.RGB16UI),dt===o.UNSIGNED_INT&&(Ct=o.RGB32UI),dt===o.BYTE&&(Ct=o.RGB8I),dt===o.SHORT&&(Ct=o.RGB16I),dt===o.INT&&(Ct=o.RGB32I)),U===o.RGBA_INTEGER&&(dt===o.UNSIGNED_BYTE&&(Ct=o.RGBA8UI),dt===o.UNSIGNED_SHORT&&(Ct=o.RGBA16UI),dt===o.UNSIGNED_INT&&(Ct=o.RGBA32UI),dt===o.BYTE&&(Ct=o.RGBA8I),dt===o.SHORT&&(Ct=o.RGBA16I),dt===o.INT&&(Ct=o.RGBA32I)),U===o.RGB&&dt===o.UNSIGNED_INT_5_9_9_9_REV&&(Ct=o.RGB9_E5),U===o.RGBA){const te=Ht?D_:vn.getTransfer(zt);dt===o.FLOAT&&(Ct=o.RGBA32F),dt===o.HALF_FLOAT&&(Ct=o.RGBA16F),dt===o.UNSIGNED_BYTE&&(Ct=te===zn?o.SRGB8_ALPHA8:o.RGBA8),dt===o.UNSIGNED_SHORT_4_4_4_4&&(Ct=o.RGBA4),dt===o.UNSIGNED_SHORT_5_5_5_1&&(Ct=o.RGB5_A1)}return(Ct===o.R16F||Ct===o.R32F||Ct===o.RG16F||Ct===o.RG32F||Ct===o.RGBA16F||Ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Ct}function N(G,U){let dt;return G?U===null||U===$u||U===ah?dt=o.DEPTH24_STENCIL8:U===Eo?dt=o.DEPTH32F_STENCIL8:U===Mp&&(dt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===$u||U===ah?dt=o.DEPTH_COMPONENT24:U===Eo?dt=o.DEPTH_COMPONENT32F:U===Mp&&(dt=o.DEPTH_COMPONENT16),dt}function X(G,U){return b(G)===!0||G.isFramebufferTexture&&G.minFilter!==Qa&&G.minFilter!==Is?Math.log2(Math.max(U.width,U.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?U.mipmaps.length:1}function W(G){const U=G.target;U.removeEventListener("dispose",W),K(U),U.isVideoTexture&&x.delete(U)}function k(G){const U=G.target;U.removeEventListener("dispose",k),O(U)}function K(G){const U=r.get(G);if(U.__webglInit===void 0)return;const dt=G.source,zt=E.get(dt);if(zt){const Ht=zt[U.__cacheKey];Ht.usedTimes--,Ht.usedTimes===0&&F(G),Object.keys(zt).length===0&&E.delete(dt)}r.remove(G)}function F(G){const U=r.get(G);o.deleteTexture(U.__webglTexture);const dt=G.source,zt=E.get(dt);delete zt[U.__cacheKey],h.memory.textures--}function O(G){const U=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let zt=0;zt<6;zt++){if(Array.isArray(U.__webglFramebuffer[zt]))for(let Ht=0;Ht<U.__webglFramebuffer[zt].length;Ht++)o.deleteFramebuffer(U.__webglFramebuffer[zt][Ht]);else o.deleteFramebuffer(U.__webglFramebuffer[zt]);U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer[zt])}else{if(Array.isArray(U.__webglFramebuffer))for(let zt=0;zt<U.__webglFramebuffer.length;zt++)o.deleteFramebuffer(U.__webglFramebuffer[zt]);else o.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&o.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&o.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let zt=0;zt<U.__webglColorRenderbuffer.length;zt++)U.__webglColorRenderbuffer[zt]&&o.deleteRenderbuffer(U.__webglColorRenderbuffer[zt]);U.__webglDepthRenderbuffer&&o.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const dt=G.textures;for(let zt=0,Ht=dt.length;zt<Ht;zt++){const Ct=r.get(dt[zt]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),h.memory.textures--),r.remove(dt[zt])}r.remove(G)}let j=0;function pt(){j=0}function _t(){const G=j;return G>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),j+=1,G}function At(G){const U=[];return U.push(G.wrapS),U.push(G.wrapT),U.push(G.wrapR||0),U.push(G.magFilter),U.push(G.minFilter),U.push(G.anisotropy),U.push(G.internalFormat),U.push(G.format),U.push(G.type),U.push(G.generateMipmaps),U.push(G.premultiplyAlpha),U.push(G.flipY),U.push(G.unpackAlignment),U.push(G.colorSpace),U.join()}function Tt(G,U){const dt=r.get(G);if(G.isVideoTexture&&de(G),G.isRenderTargetTexture===!1&&G.version>0&&dt.__version!==G.version){const zt=G.image;if(zt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(zt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(dt,G,U);return}}e.bindTexture(o.TEXTURE_2D,dt.__webglTexture,o.TEXTURE0+U)}function Y(G,U){const dt=r.get(G);if(G.version>0&&dt.__version!==G.version){ct(dt,G,U);return}e.bindTexture(o.TEXTURE_2D_ARRAY,dt.__webglTexture,o.TEXTURE0+U)}function ot(G,U){const dt=r.get(G);if(G.version>0&&dt.__version!==G.version){ct(dt,G,U);return}e.bindTexture(o.TEXTURE_3D,dt.__webglTexture,o.TEXTURE0+U)}function it(G,U){const dt=r.get(G);if(G.version>0&&dt.__version!==G.version){Dt(dt,G,U);return}e.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture,o.TEXTURE0+U)}const Wt={[qv]:o.REPEAT,[Ku]:o.CLAMP_TO_EDGE,[Yv]:o.MIRRORED_REPEAT},V={[Qa]:o.NEAREST,[ZM]:o.NEAREST_MIPMAP_NEAREST,[qg]:o.NEAREST_MIPMAP_LINEAR,[Is]:o.LINEAR,[j0]:o.LINEAR_MIPMAP_NEAREST,[Qu]:o.LINEAR_MIPMAP_LINEAR},ut={[JM]:o.NEVER,[r1]:o.ALWAYS,[$M]:o.LESS,[tE]:o.LEQUAL,[t1]:o.EQUAL,[i1]:o.GEQUAL,[e1]:o.GREATER,[n1]:o.NOTEQUAL};function Ft(G,U){if(U.type===Eo&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===Is||U.magFilter===j0||U.magFilter===qg||U.magFilter===Qu||U.minFilter===Is||U.minFilter===j0||U.minFilter===qg||U.minFilter===Qu)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(G,o.TEXTURE_WRAP_S,Wt[U.wrapS]),o.texParameteri(G,o.TEXTURE_WRAP_T,Wt[U.wrapT]),(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)&&o.texParameteri(G,o.TEXTURE_WRAP_R,Wt[U.wrapR]),o.texParameteri(G,o.TEXTURE_MAG_FILTER,V[U.magFilter]),o.texParameteri(G,o.TEXTURE_MIN_FILTER,V[U.minFilter]),U.compareFunction&&(o.texParameteri(G,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(G,o.TEXTURE_COMPARE_FUNC,ut[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===Qa||U.minFilter!==qg&&U.minFilter!==Qu||U.type===Eo&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||r.get(U).__currentAnisotropy){const dt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(G,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,l.getMaxAnisotropy())),r.get(U).__currentAnisotropy=U.anisotropy}}}function Vt(G,U){let dt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,U.addEventListener("dispose",W));const zt=U.source;let Ht=E.get(zt);Ht===void 0&&(Ht={},E.set(zt,Ht));const Ct=At(U);if(Ct!==G.__cacheKey){Ht[Ct]===void 0&&(Ht[Ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,dt=!0),Ht[Ct].usedTimes++;const te=Ht[G.__cacheKey];te!==void 0&&(Ht[G.__cacheKey].usedTimes--,te.usedTimes===0&&F(U)),G.__cacheKey=Ct,G.__webglTexture=Ht[Ct].texture}return dt}function ct(G,U,dt){let zt=o.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(zt=o.TEXTURE_2D_ARRAY),U.isData3DTexture&&(zt=o.TEXTURE_3D);const Ht=Vt(G,U),Ct=U.source;e.bindTexture(zt,G.__webglTexture,o.TEXTURE0+dt);const te=r.get(Ct);if(Ct.version!==te.__version||Ht===!0){e.activeTexture(o.TEXTURE0+dt);const Yt=vn.getPrimaries(vn.workingColorSpace),Zt=U.colorSpace===bl?null:vn.getPrimaries(U.colorSpace),qe=U.colorSpace===bl||Yt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,U.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,U.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Xt=C(U.image,!1,l.maxTextureSize);Xt=Tn(U,Xt);const le=f.convert(U.format,U.colorSpace),pe=f.convert(U.type);let xe=z(U.internalFormat,le,pe,U.colorSpace,U.isVideoTexture);Ft(zt,U);let ee;const Oe=U.mipmaps,we=U.isVideoTexture!==!0,bn=te.__version===void 0||Ht===!0,et=Ct.dataReady,$t=X(U,Xt);if(U.isDepthTexture)xe=N(U.format===sh,U.type),bn&&(we?e.texStorage2D(o.TEXTURE_2D,1,xe,Xt.width,Xt.height):e.texImage2D(o.TEXTURE_2D,0,xe,Xt.width,Xt.height,0,le,pe,null));else if(U.isDataTexture)if(Oe.length>0){we&&bn&&e.texStorage2D(o.TEXTURE_2D,$t,xe,Oe[0].width,Oe[0].height);for(let Et=0,Ut=Oe.length;Et<Ut;Et++)ee=Oe[Et],we?et&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,ee.width,ee.height,le,pe,ee.data):e.texImage2D(o.TEXTURE_2D,Et,xe,ee.width,ee.height,0,le,pe,ee.data);U.generateMipmaps=!1}else we?(bn&&e.texStorage2D(o.TEXTURE_2D,$t,xe,Xt.width,Xt.height),et&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Xt.width,Xt.height,le,pe,Xt.data)):e.texImage2D(o.TEXTURE_2D,0,xe,Xt.width,Xt.height,0,le,pe,Xt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){we&&bn&&e.texStorage3D(o.TEXTURE_2D_ARRAY,$t,xe,Oe[0].width,Oe[0].height,Xt.depth);for(let Et=0,Ut=Oe.length;Et<Ut;Et++)if(ee=Oe[Et],U.format!==Ka)if(le!==null)if(we){if(et)if(U.layerUpdates.size>0){const ae=Jy(ee.width,ee.height,U.format,U.type);for(const ne of U.layerUpdates){const Ue=ee.data.subarray(ne*ae/ee.data.BYTES_PER_ELEMENT,(ne+1)*ae/ee.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ne,ee.width,ee.height,1,le,Ue)}U.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,ee.width,ee.height,Xt.depth,le,ee.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,xe,ee.width,ee.height,Xt.depth,0,ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?et&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,ee.width,ee.height,Xt.depth,le,pe,ee.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Et,xe,ee.width,ee.height,Xt.depth,0,le,pe,ee.data)}else{we&&bn&&e.texStorage2D(o.TEXTURE_2D,$t,xe,Oe[0].width,Oe[0].height);for(let Et=0,Ut=Oe.length;Et<Ut;Et++)ee=Oe[Et],U.format!==Ka?le!==null?we?et&&e.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,ee.width,ee.height,le,ee.data):e.compressedTexImage2D(o.TEXTURE_2D,Et,xe,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?et&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,ee.width,ee.height,le,pe,ee.data):e.texImage2D(o.TEXTURE_2D,Et,xe,ee.width,ee.height,0,le,pe,ee.data)}else if(U.isDataArrayTexture)if(we){if(bn&&e.texStorage3D(o.TEXTURE_2D_ARRAY,$t,xe,Xt.width,Xt.height,Xt.depth),et)if(U.layerUpdates.size>0){const Et=Jy(Xt.width,Xt.height,U.format,U.type);for(const Ut of U.layerUpdates){const ae=Xt.data.subarray(Ut*Et/Xt.data.BYTES_PER_ELEMENT,(Ut+1)*Et/Xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,Xt.width,Xt.height,1,le,pe,ae)}U.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Xt.width,Xt.height,Xt.depth,le,pe,Xt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,xe,Xt.width,Xt.height,Xt.depth,0,le,pe,Xt.data);else if(U.isData3DTexture)we?(bn&&e.texStorage3D(o.TEXTURE_3D,$t,xe,Xt.width,Xt.height,Xt.depth),et&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Xt.width,Xt.height,Xt.depth,le,pe,Xt.data)):e.texImage3D(o.TEXTURE_3D,0,xe,Xt.width,Xt.height,Xt.depth,0,le,pe,Xt.data);else if(U.isFramebufferTexture){if(bn)if(we)e.texStorage2D(o.TEXTURE_2D,$t,xe,Xt.width,Xt.height);else{let Et=Xt.width,Ut=Xt.height;for(let ae=0;ae<$t;ae++)e.texImage2D(o.TEXTURE_2D,ae,xe,Et,Ut,0,le,pe,null),Et>>=1,Ut>>=1}}else if(Oe.length>0){if(we&&bn){const Et=ce(Oe[0]);e.texStorage2D(o.TEXTURE_2D,$t,xe,Et.width,Et.height)}for(let Et=0,Ut=Oe.length;Et<Ut;Et++)ee=Oe[Et],we?et&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,le,pe,ee):e.texImage2D(o.TEXTURE_2D,Et,xe,le,pe,ee);U.generateMipmaps=!1}else if(we){if(bn){const Et=ce(Xt);e.texStorage2D(o.TEXTURE_2D,$t,xe,Et.width,Et.height)}et&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,le,pe,Xt)}else e.texImage2D(o.TEXTURE_2D,0,xe,le,pe,Xt);b(U)&&M(zt),te.__version=Ct.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function Dt(G,U,dt){if(U.image.length!==6)return;const zt=Vt(G,U),Ht=U.source;e.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+dt);const Ct=r.get(Ht);if(Ht.version!==Ct.__version||zt===!0){e.activeTexture(o.TEXTURE0+dt);const te=vn.getPrimaries(vn.workingColorSpace),Yt=U.colorSpace===bl?null:vn.getPrimaries(U.colorSpace),Zt=U.colorSpace===bl||te===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,U.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,U.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const qe=U.isCompressedTexture||U.image[0].isCompressedTexture,Xt=U.image[0]&&U.image[0].isDataTexture,le=[];for(let Ut=0;Ut<6;Ut++)!qe&&!Xt?le[Ut]=C(U.image[Ut],!0,l.maxCubemapSize):le[Ut]=Xt?U.image[Ut].image:U.image[Ut],le[Ut]=Tn(U,le[Ut]);const pe=le[0],xe=f.convert(U.format,U.colorSpace),ee=f.convert(U.type),Oe=z(U.internalFormat,xe,ee,U.colorSpace),we=U.isVideoTexture!==!0,bn=Ct.__version===void 0||zt===!0,et=Ht.dataReady;let $t=X(U,pe);Ft(o.TEXTURE_CUBE_MAP,U);let Et;if(qe){we&&bn&&e.texStorage2D(o.TEXTURE_CUBE_MAP,$t,Oe,pe.width,pe.height);for(let Ut=0;Ut<6;Ut++){Et=le[Ut].mipmaps;for(let ae=0;ae<Et.length;ae++){const ne=Et[ae];U.format!==Ka?xe!==null?we?et&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,0,0,ne.width,ne.height,xe,ne.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,Oe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,0,0,ne.width,ne.height,xe,ee,ne.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,Oe,ne.width,ne.height,0,xe,ee,ne.data)}}}else{if(Et=U.mipmaps,we&&bn){Et.length>0&&$t++;const Ut=ce(le[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,$t,Oe,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(Xt){we?et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,le[Ut].width,le[Ut].height,xe,ee,le[Ut].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Oe,le[Ut].width,le[Ut].height,0,xe,ee,le[Ut].data);for(let ae=0;ae<Et.length;ae++){const Ue=Et[ae].image[Ut].image;we?et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,0,0,Ue.width,Ue.height,xe,ee,Ue.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,Oe,Ue.width,Ue.height,0,xe,ee,Ue.data)}}else{we?et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,xe,ee,le[Ut]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Oe,xe,ee,le[Ut]);for(let ae=0;ae<Et.length;ae++){const ne=Et[ae];we?et&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,0,0,xe,ee,ne.image[Ut]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,Oe,xe,ee,ne.image[Ut])}}}b(U)&&M(o.TEXTURE_CUBE_MAP),Ct.__version=Ht.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function Bt(G,U,dt,zt,Ht,Ct){const te=f.convert(dt.format,dt.colorSpace),Yt=f.convert(dt.type),Zt=z(dt.internalFormat,te,Yt,dt.colorSpace),qe=r.get(U),Xt=r.get(dt);if(Xt.__renderTarget=U,!qe.__hasExternalTextures){const le=Math.max(1,U.width>>Ct),pe=Math.max(1,U.height>>Ct);Ht===o.TEXTURE_3D||Ht===o.TEXTURE_2D_ARRAY?e.texImage3D(Ht,Ct,Zt,le,pe,U.depth,0,te,Yt,null):e.texImage2D(Ht,Ct,Zt,le,pe,0,te,Yt,null)}e.bindFramebuffer(o.FRAMEBUFFER,G),ve(U)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,zt,Ht,Xt.__webglTexture,0,Qe(U)):(Ht===o.TEXTURE_2D||Ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,zt,Ht,Xt.__webglTexture,Ct),e.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(G,U,dt){if(o.bindRenderbuffer(o.RENDERBUFFER,G),U.depthBuffer){const zt=U.depthTexture,Ht=zt&&zt.isDepthTexture?zt.type:null,Ct=N(U.stencilBuffer,Ht),te=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=Qe(U);ve(U)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Ct,U.width,U.height):dt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ct,U.width,U.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,G)}else{const zt=U.textures;for(let Ht=0;Ht<zt.length;Ht++){const Ct=zt[Ht],te=f.convert(Ct.format,Ct.colorSpace),Yt=f.convert(Ct.type),Zt=z(Ct.internalFormat,te,Yt,Ct.colorSpace),qe=Qe(U);dt&&ve(U)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Zt,U.width,U.height):ve(U)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qe,Zt,U.width,U.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,U.width,U.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(G,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,G),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const zt=r.get(U.depthTexture);zt.__renderTarget=U,(!zt.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),Tt(U.depthTexture,0);const Ht=zt.__webglTexture,Ct=Qe(U);if(U.depthTexture.format===$f)ve(U)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ht,0,Ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ht,0);else if(U.depthTexture.format===sh)ve(U)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ht,0,Ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ht,0);else throw new Error("Unknown depthTexture format")}function Le(G){const U=r.get(G),dt=G.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==G.depthTexture){const zt=G.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),zt){const Ht=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,zt.removeEventListener("dispose",Ht)};zt.addEventListener("dispose",Ht),U.__depthDisposeCallback=Ht}U.__boundDepthTexture=zt}if(G.depthTexture&&!U.__autoAllocateDepthBuffer){if(dt)throw new Error("target.depthTexture not supported in Cube render targets");Kt(U.__webglFramebuffer,G)}else if(dt){U.__webglDepthbuffer=[];for(let zt=0;zt<6;zt++)if(e.bindFramebuffer(o.FRAMEBUFFER,U.__webglFramebuffer[zt]),U.__webglDepthbuffer[zt]===void 0)U.__webglDepthbuffer[zt]=o.createRenderbuffer(),qt(U.__webglDepthbuffer[zt],G,!1);else{const Ht=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=U.__webglDepthbuffer[zt];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,Ct)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=o.createRenderbuffer(),qt(U.__webglDepthbuffer,G,!1);else{const zt=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=U.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,Ht)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ee(G,U,dt){const zt=r.get(G);U!==void 0&&Bt(zt.__webglFramebuffer,G,G.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),dt!==void 0&&Le(G)}function xn(G){const U=G.texture,dt=r.get(G),zt=r.get(U);G.addEventListener("dispose",k);const Ht=G.textures,Ct=G.isWebGLCubeRenderTarget===!0,te=Ht.length>1;if(te||(zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture()),zt.__version=U.version,h.memory.textures++),Ct){dt.__webglFramebuffer=[];for(let Yt=0;Yt<6;Yt++)if(U.mipmaps&&U.mipmaps.length>0){dt.__webglFramebuffer[Yt]=[];for(let Zt=0;Zt<U.mipmaps.length;Zt++)dt.__webglFramebuffer[Yt][Zt]=o.createFramebuffer()}else dt.__webglFramebuffer[Yt]=o.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){dt.__webglFramebuffer=[];for(let Yt=0;Yt<U.mipmaps.length;Yt++)dt.__webglFramebuffer[Yt]=o.createFramebuffer()}else dt.__webglFramebuffer=o.createFramebuffer();if(te)for(let Yt=0,Zt=Ht.length;Yt<Zt;Yt++){const qe=r.get(Ht[Yt]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),h.memory.textures++)}if(G.samples>0&&ve(G)===!1){dt.__webglMultisampledFramebuffer=o.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let Yt=0;Yt<Ht.length;Yt++){const Zt=Ht[Yt];dt.__webglColorRenderbuffer[Yt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,dt.__webglColorRenderbuffer[Yt]);const qe=f.convert(Zt.format,Zt.colorSpace),Xt=f.convert(Zt.type),le=z(Zt.internalFormat,qe,Xt,Zt.colorSpace,G.isXRRenderTarget===!0),pe=Qe(G);o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,le,G.width,G.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,dt.__webglColorRenderbuffer[Yt])}o.bindRenderbuffer(o.RENDERBUFFER,null),G.depthBuffer&&(dt.__webglDepthRenderbuffer=o.createRenderbuffer(),qt(dt.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(o.TEXTURE_CUBE_MAP,zt.__webglTexture),Ft(o.TEXTURE_CUBE_MAP,U);for(let Yt=0;Yt<6;Yt++)if(U.mipmaps&&U.mipmaps.length>0)for(let Zt=0;Zt<U.mipmaps.length;Zt++)Bt(dt.__webglFramebuffer[Yt][Zt],G,U,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,Zt);else Bt(dt.__webglFramebuffer[Yt],G,U,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0);b(U)&&M(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(te){for(let Yt=0,Zt=Ht.length;Yt<Zt;Yt++){const qe=Ht[Yt],Xt=r.get(qe);e.bindTexture(o.TEXTURE_2D,Xt.__webglTexture),Ft(o.TEXTURE_2D,qe),Bt(dt.__webglFramebuffer,G,qe,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,0),b(qe)&&M(o.TEXTURE_2D)}e.unbindTexture()}else{let Yt=o.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Yt=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Yt,zt.__webglTexture),Ft(Yt,U),U.mipmaps&&U.mipmaps.length>0)for(let Zt=0;Zt<U.mipmaps.length;Zt++)Bt(dt.__webglFramebuffer[Zt],G,U,o.COLOR_ATTACHMENT0,Yt,Zt);else Bt(dt.__webglFramebuffer,G,U,o.COLOR_ATTACHMENT0,Yt,0);b(U)&&M(Yt),e.unbindTexture()}G.depthBuffer&&Le(G)}function gn(G){const U=G.textures;for(let dt=0,zt=U.length;dt<zt;dt++){const Ht=U[dt];if(b(Ht)){const Ct=H(G),te=r.get(Ht).__webglTexture;e.bindTexture(Ct,te),M(Ct),e.unbindTexture()}}}const Pe=[],Q=[];function vi(G){if(G.samples>0){if(ve(G)===!1){const U=G.textures,dt=G.width,zt=G.height;let Ht=o.COLOR_BUFFER_BIT;const Ct=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=r.get(G),Yt=U.length>1;if(Yt)for(let Zt=0;Zt<U.length;Zt++)e.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,te.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Zt=0;Zt<U.length;Zt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Ht|=o.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Ht|=o.STENCIL_BUFFER_BIT)),Yt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,te.__webglColorRenderbuffer[Zt]);const qe=r.get(U[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,qe,0)}o.blitFramebuffer(0,0,dt,zt,0,0,dt,zt,Ht,o.NEAREST),g===!0&&(Pe.length=0,Q.length=0,Pe.push(o.COLOR_ATTACHMENT0+Zt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Pe.push(Ct),Q.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Q)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Yt)for(let Zt=0;Zt<U.length;Zt++){e.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,te.__webglColorRenderbuffer[Zt]);const qe=r.get(U[Zt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,te.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,qe,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&g){const U=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[U])}}}function Qe(G){return Math.min(l.maxSamples,G.samples)}function ve(G){const U=r.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function de(G){const U=h.render.frame;x.get(G)!==U&&(x.set(G,U),G.update())}function Tn(G,U){const dt=G.colorSpace,zt=G.format,Ht=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||dt!==oh&&dt!==bl&&(vn.getTransfer(dt)===zn?(zt!==Ka||Ht!==wo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",dt)),U}function ce(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(_.width=G.naturalWidth||G.width,_.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(_.width=G.displayWidth,_.height=G.displayHeight):(_.width=G.width,_.height=G.height),_}this.allocateTextureUnit=_t,this.resetTextureUnits=pt,this.setTexture2D=Tt,this.setTexture2DArray=Y,this.setTexture3D=ot,this.setTextureCube=it,this.rebindTextures=Ee,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=gn,this.updateMultisampleRenderTarget=vi,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=ve}function $R(o,t){function e(r,l=bl){let f;const h=vn.getTransfer(l);if(r===wo)return o.UNSIGNED_BYTE;if(r===Ox)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ix)return o.UNSIGNED_SHORT_5_5_5_1;if(r===XS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===WS)return o.BYTE;if(r===kS)return o.SHORT;if(r===Mp)return o.UNSIGNED_SHORT;if(r===Nx)return o.INT;if(r===$u)return o.UNSIGNED_INT;if(r===Eo)return o.FLOAT;if(r===Ap)return o.HALF_FLOAT;if(r===qS)return o.ALPHA;if(r===YS)return o.RGB;if(r===Ka)return o.RGBA;if(r===ZS)return o.LUMINANCE;if(r===KS)return o.LUMINANCE_ALPHA;if(r===$f)return o.DEPTH_COMPONENT;if(r===sh)return o.DEPTH_STENCIL;if(r===QS)return o.RED;if(r===Px)return o.RED_INTEGER;if(r===jS)return o.RG;if(r===zx)return o.RG_INTEGER;if(r===Bx)return o.RGBA_INTEGER;if(r===T_||r===b_||r===A_||r===w_)if(h===zn)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===T_)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===b_)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===A_)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===w_)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===T_)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===b_)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===A_)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===w_)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zv||r===Kv||r===Qv||r===jv)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Zv)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kv)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qv)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jv)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jv||r===$v||r===tx)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(r===Jv||r===$v)return h===zn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===tx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ex||r===nx||r===ix||r===rx||r===ax||r===sx||r===ox||r===lx||r===ux||r===cx||r===fx||r===hx||r===dx||r===px)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(r===ex)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ix)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ax)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ox)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ux)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dx)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===px)return h===zn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===R_||r===mx||r===gx)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(r===R_)return h===zn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mx)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gx)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===JS||r===_x||r===vx||r===xx)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(r===R_)return f.COMPRESSED_RED_RGTC1_EXT;if(r===_x)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vx)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xx)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ah?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:e}}const t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,r){if(this.texture===null){const l=new Ar,f=t.properties.get(l);f.__webglTexture=e.texture,(e.depthNear!==r.depthNear||e.depthFar!==r.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new Ro({vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ai(new H_(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends ch{constructor(t,e){super();const r=this;let l=null,f=1,h=null,p="local-floor",g=1,_=null,x=null,y=null,E=null,T=null,R=null;const C=new n2,b=e.getContextAttributes();let M=null,H=null;const z=[],N=[],X=new St;let W=null;const k=new ra;k.viewport=new mn;const K=new ra;K.viewport=new mn;const F=[k,K],O=new MT;let j=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let Dt=z[ct];return Dt===void 0&&(Dt=new _v,z[ct]=Dt),Dt.getTargetRaySpace()},this.getControllerGrip=function(ct){let Dt=z[ct];return Dt===void 0&&(Dt=new _v,z[ct]=Dt),Dt.getGripSpace()},this.getHand=function(ct){let Dt=z[ct];return Dt===void 0&&(Dt=new _v,z[ct]=Dt),Dt.getHandSpace()};function _t(ct){const Dt=N.indexOf(ct.inputSource);if(Dt===-1)return;const Bt=z[Dt];Bt!==void 0&&(Bt.update(ct.inputSource,ct.frame,_||h),Bt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function At(){l.removeEventListener("select",_t),l.removeEventListener("selectstart",_t),l.removeEventListener("selectend",_t),l.removeEventListener("squeeze",_t),l.removeEventListener("squeezestart",_t),l.removeEventListener("squeezeend",_t),l.removeEventListener("end",At),l.removeEventListener("inputsourceschange",Tt);for(let ct=0;ct<z.length;ct++){const Dt=N[ct];Dt!==null&&(N[ct]=null,z[ct].disconnect(Dt))}j=null,pt=null,C.reset(),t.setRenderTarget(M),T=null,E=null,y=null,l=null,H=null,Vt.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){f=ct,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){p=ct,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(ct){_=ct},this.getBaseLayer=function(){return E!==null?E:T},this.getBinding=function(){return y},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(ct){if(l=ct,l!==null){if(M=t.getRenderTarget(),l.addEventListener("select",_t),l.addEventListener("selectstart",_t),l.addEventListener("selectend",_t),l.addEventListener("squeeze",_t),l.addEventListener("squeezestart",_t),l.addEventListener("squeezeend",_t),l.addEventListener("end",At),l.addEventListener("inputsourceschange",Tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,qt=null,Kt=null;b.depth&&(Kt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=b.stencil?sh:$f,qt=b.stencil?ah:$u);const Le={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:f};y=new XRWebGLBinding(l,e),E=y.createProjectionLayer(Le),l.updateRenderState({layers:[E]}),t.setPixelRatio(1),t.setSize(E.textureWidth,E.textureHeight,!1),H=new tc(E.textureWidth,E.textureHeight,{format:Ka,type:wo,depthTexture:new dE(E.textureWidth,E.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}else{const Bt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(l,e,Bt),l.updateRenderState({baseLayer:T}),t.setPixelRatio(1),t.setSize(T.framebufferWidth,T.framebufferHeight,!1),H=new tc(T.framebufferWidth,T.framebufferHeight,{format:Ka,type:wo,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}H.isXRRenderTarget=!0,this.setFoveation(g),_=null,h=await l.requestReferenceSpace(p),Vt.setContext(l),Vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Tt(ct){for(let Dt=0;Dt<ct.removed.length;Dt++){const Bt=ct.removed[Dt],qt=N.indexOf(Bt);qt>=0&&(N[qt]=null,z[qt].disconnect(Bt))}for(let Dt=0;Dt<ct.added.length;Dt++){const Bt=ct.added[Dt];let qt=N.indexOf(Bt);if(qt===-1){for(let Le=0;Le<z.length;Le++)if(Le>=N.length){N.push(Bt),qt=Le;break}else if(N[Le]===null){N[Le]=Bt,qt=Le;break}if(qt===-1)break}const Kt=z[qt];Kt&&Kt.connect(Bt)}}const Y=new I,ot=new I;function it(ct,Dt,Bt){Y.setFromMatrixPosition(Dt.matrixWorld),ot.setFromMatrixPosition(Bt.matrixWorld);const qt=Y.distanceTo(ot),Kt=Dt.projectionMatrix.elements,Le=Bt.projectionMatrix.elements,Ee=Kt[14]/(Kt[10]-1),xn=Kt[14]/(Kt[10]+1),gn=(Kt[9]+1)/Kt[5],Pe=(Kt[9]-1)/Kt[5],Q=(Kt[8]-1)/Kt[0],vi=(Le[8]+1)/Le[0],Qe=Ee*Q,ve=Ee*vi,de=qt/(-Q+vi),Tn=de*-Q;if(Dt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Tn),ct.translateZ(de),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Kt[10]===-1)ct.projectionMatrix.copy(Dt.projectionMatrix),ct.projectionMatrixInverse.copy(Dt.projectionMatrixInverse);else{const ce=Ee+de,G=xn+de,U=Qe-Tn,dt=ve+(qt-Tn),zt=gn*xn/G*ce,Ht=Pe*xn/G*ce;ct.projectionMatrix.makePerspective(U,dt,zt,Ht,ce,G),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Wt(ct,Dt){Dt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(Dt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(l===null)return;let Dt=ct.near,Bt=ct.far;C.texture!==null&&(C.depthNear>0&&(Dt=C.depthNear),C.depthFar>0&&(Bt=C.depthFar)),O.near=K.near=k.near=Dt,O.far=K.far=k.far=Bt,(j!==O.near||pt!==O.far)&&(l.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,pt=O.far),k.layers.mask=ct.layers.mask|2,K.layers.mask=ct.layers.mask|4,O.layers.mask=k.layers.mask|K.layers.mask;const qt=ct.parent,Kt=O.cameras;Wt(O,qt);for(let Le=0;Le<Kt.length;Le++)Wt(Kt[Le],qt);Kt.length===2?it(O,k,K):O.projectionMatrix.copy(k.projectionMatrix),V(ct,O,qt)};function V(ct,Dt,Bt){Bt===null?ct.matrix.copy(Dt.matrixWorld):(ct.matrix.copy(Bt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(Dt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(Dt.projectionMatrix),ct.projectionMatrixInverse.copy(Dt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Tp*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(E===null&&T===null))return g},this.setFoveation=function(ct){g=ct,E!==null&&(E.fixedFoveation=ct),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=ct)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(O)};let ut=null;function Ft(ct,Dt){if(x=Dt.getViewerPose(_||h),R=Dt,x!==null){const Bt=x.views;T!==null&&(t.setRenderTargetFramebuffer(H,T.framebuffer),t.setRenderTarget(H));let qt=!1;Bt.length!==O.cameras.length&&(O.cameras.length=0,qt=!0);for(let Ee=0;Ee<Bt.length;Ee++){const xn=Bt[Ee];let gn=null;if(T!==null)gn=T.getViewport(xn);else{const Q=y.getViewSubImage(E,xn);gn=Q.viewport,Ee===0&&(t.setRenderTargetTextures(H,Q.colorTexture,E.ignoreDepthValues?void 0:Q.depthStencilTexture),t.setRenderTarget(H))}let Pe=F[Ee];Pe===void 0&&(Pe=new ra,Pe.layers.enable(Ee),Pe.viewport=new mn,F[Ee]=Pe),Pe.matrix.fromArray(xn.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(xn.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(gn.x,gn.y,gn.width,gn.height),Ee===0&&(O.matrix.copy(Pe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),qt===!0&&O.cameras.push(Pe)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const Ee=y.getDepthInformation(Bt[0]);Ee&&Ee.isValid&&Ee.texture&&C.init(t,Ee,l.renderState)}}for(let Bt=0;Bt<z.length;Bt++){const qt=N[Bt],Kt=z[Bt];qt!==null&&Kt!==void 0&&Kt.update(qt,Dt,_||h)}ut&&ut(ct,Dt),Dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Dt}),R=null}const Vt=new xE;Vt.setAnimationLoop(Ft),this.setAnimationLoop=function(ct){ut=ct},this.dispose=function(){}}}const Xu=new zs,r2=new Gn;function a2(o,t){function e(b,M){b.matrixAutoUpdate===!0&&b.updateMatrix(),M.value.copy(b.matrix)}function r(b,M){M.color.getRGB(b.fogColor.value,lE(o)),M.isFog?(b.fogNear.value=M.near,b.fogFar.value=M.far):M.isFogExp2&&(b.fogDensity.value=M.density)}function l(b,M,H,z,N){M.isMeshBasicMaterial||M.isMeshLambertMaterial?f(b,M):M.isMeshToonMaterial?(f(b,M),y(b,M)):M.isMeshPhongMaterial?(f(b,M),x(b,M)):M.isMeshStandardMaterial?(f(b,M),E(b,M),M.isMeshPhysicalMaterial&&T(b,M,N)):M.isMeshMatcapMaterial?(f(b,M),R(b,M)):M.isMeshDepthMaterial?f(b,M):M.isMeshDistanceMaterial?(f(b,M),C(b,M)):M.isMeshNormalMaterial?f(b,M):M.isLineBasicMaterial?(h(b,M),M.isLineDashedMaterial&&p(b,M)):M.isPointsMaterial?g(b,M,H,z):M.isSpriteMaterial?_(b,M):M.isShadowMaterial?(b.color.value.copy(M.color),b.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(b,M){b.opacity.value=M.opacity,M.color&&b.diffuse.value.copy(M.color),M.emissive&&b.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(b.map.value=M.map,e(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,e(M.alphaMap,b.alphaMapTransform)),M.bumpMap&&(b.bumpMap.value=M.bumpMap,e(M.bumpMap,b.bumpMapTransform),b.bumpScale.value=M.bumpScale,M.side===kr&&(b.bumpScale.value*=-1)),M.normalMap&&(b.normalMap.value=M.normalMap,e(M.normalMap,b.normalMapTransform),b.normalScale.value.copy(M.normalScale),M.side===kr&&b.normalScale.value.negate()),M.displacementMap&&(b.displacementMap.value=M.displacementMap,e(M.displacementMap,b.displacementMapTransform),b.displacementScale.value=M.displacementScale,b.displacementBias.value=M.displacementBias),M.emissiveMap&&(b.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,b.emissiveMapTransform)),M.specularMap&&(b.specularMap.value=M.specularMap,e(M.specularMap,b.specularMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest);const H=t.get(M),z=H.envMap,N=H.envMapRotation;z&&(b.envMap.value=z,Xu.copy(N),Xu.x*=-1,Xu.y*=-1,Xu.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Xu.y*=-1,Xu.z*=-1),b.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Xu)),b.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=M.reflectivity,b.ior.value=M.ior,b.refractionRatio.value=M.refractionRatio),M.lightMap&&(b.lightMap.value=M.lightMap,b.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,b.lightMapTransform)),M.aoMap&&(b.aoMap.value=M.aoMap,b.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,b.aoMapTransform))}function h(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,M.map&&(b.map.value=M.map,e(M.map,b.mapTransform))}function p(b,M){b.dashSize.value=M.dashSize,b.totalSize.value=M.dashSize+M.gapSize,b.scale.value=M.scale}function g(b,M,H,z){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.size.value=M.size*H,b.scale.value=z*.5,M.map&&(b.map.value=M.map,e(M.map,b.uvTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,e(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function _(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.rotation.value=M.rotation,M.map&&(b.map.value=M.map,e(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,e(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function x(b,M){b.specular.value.copy(M.specular),b.shininess.value=Math.max(M.shininess,1e-4)}function y(b,M){M.gradientMap&&(b.gradientMap.value=M.gradientMap)}function E(b,M){b.metalness.value=M.metalness,M.metalnessMap&&(b.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,b.metalnessMapTransform)),b.roughness.value=M.roughness,M.roughnessMap&&(b.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,b.roughnessMapTransform)),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)}function T(b,M,H){b.ior.value=M.ior,M.sheen>0&&(b.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),b.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(b.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,b.sheenColorMapTransform)),M.sheenRoughnessMap&&(b.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,b.sheenRoughnessMapTransform))),M.clearcoat>0&&(b.clearcoat.value=M.clearcoat,b.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(b.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,b.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(b.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===kr&&b.clearcoatNormalScale.value.negate())),M.dispersion>0&&(b.dispersion.value=M.dispersion),M.iridescence>0&&(b.iridescence.value=M.iridescence,b.iridescenceIOR.value=M.iridescenceIOR,b.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(b.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,b.iridescenceMapTransform)),M.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),M.transmission>0&&(b.transmission.value=M.transmission,b.transmissionSamplerMap.value=H.texture,b.transmissionSamplerSize.value.set(H.width,H.height),M.transmissionMap&&(b.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,b.transmissionMapTransform)),b.thickness.value=M.thickness,M.thicknessMap&&(b.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=M.attenuationDistance,b.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(b.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(b.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=M.specularIntensity,b.specularColor.value.copy(M.specularColor),M.specularColorMap&&(b.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,b.specularColorMapTransform)),M.specularIntensityMap&&(b.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,b.specularIntensityMapTransform))}function R(b,M){M.matcap&&(b.matcap.value=M.matcap)}function C(b,M){const H=t.get(M).light;b.referencePosition.value.setFromMatrixPosition(H.matrixWorld),b.nearDistance.value=H.shadow.camera.near,b.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function s2(o,t,e,r){let l={},f={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(H,z){const N=z.program;r.uniformBlockBinding(H,N)}function _(H,z){let N=l[H.id];N===void 0&&(R(H),N=x(H),l[H.id]=N,H.addEventListener("dispose",b));const X=z.program;r.updateUBOMapping(H,X);const W=t.render.frame;f[H.id]!==W&&(E(H),f[H.id]=W)}function x(H){const z=y();H.__bindingPointIndex=z;const N=o.createBuffer(),X=H.__size,W=H.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,W),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,N),N}function y(){for(let H=0;H<p;H++)if(h.indexOf(H)===-1)return h.push(H),H;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(H){const z=l[H.id],N=H.uniforms,X=H.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let W=0,k=N.length;W<k;W++){const K=Array.isArray(N[W])?N[W]:[N[W]];for(let F=0,O=K.length;F<O;F++){const j=K[F];if(T(j,W,F,X)===!0){const pt=j.__offset,_t=Array.isArray(j.value)?j.value:[j.value];let At=0;for(let Tt=0;Tt<_t.length;Tt++){const Y=_t[Tt],ot=C(Y);typeof Y=="number"||typeof Y=="boolean"?(j.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,pt+At,j.__data)):Y.isMatrix3?(j.__data[0]=Y.elements[0],j.__data[1]=Y.elements[1],j.__data[2]=Y.elements[2],j.__data[3]=0,j.__data[4]=Y.elements[3],j.__data[5]=Y.elements[4],j.__data[6]=Y.elements[5],j.__data[7]=0,j.__data[8]=Y.elements[6],j.__data[9]=Y.elements[7],j.__data[10]=Y.elements[8],j.__data[11]=0):(Y.toArray(j.__data,At),At+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,pt,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(H,z,N,X){const W=H.value,k=z+"_"+N;if(X[k]===void 0)return typeof W=="number"||typeof W=="boolean"?X[k]=W:X[k]=W.clone(),!0;{const K=X[k];if(typeof W=="number"||typeof W=="boolean"){if(K!==W)return X[k]=W,!0}else if(K.equals(W)===!1)return K.copy(W),!0}return!1}function R(H){const z=H.uniforms;let N=0;const X=16;for(let k=0,K=z.length;k<K;k++){const F=Array.isArray(z[k])?z[k]:[z[k]];for(let O=0,j=F.length;O<j;O++){const pt=F[O],_t=Array.isArray(pt.value)?pt.value:[pt.value];for(let At=0,Tt=_t.length;At<Tt;At++){const Y=_t[At],ot=C(Y),it=N%X,Wt=it%ot.boundary,V=it+Wt;N+=Wt,V!==0&&X-V<ot.storage&&(N+=X-V),pt.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),pt.__offset=N,N+=ot.storage}}}const W=N%X;return W>0&&(N+=X-W),H.__size=N,H.__cache={},this}function C(H){const z={boundary:0,storage:0};return typeof H=="number"||typeof H=="boolean"?(z.boundary=4,z.storage=4):H.isVector2?(z.boundary=8,z.storage=8):H.isVector3||H.isColor?(z.boundary=16,z.storage=12):H.isVector4?(z.boundary=16,z.storage=16):H.isMatrix3?(z.boundary=48,z.storage=48):H.isMatrix4?(z.boundary=64,z.storage=64):H.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",H),z}function b(H){const z=H.target;z.removeEventListener("dispose",b);const N=h.indexOf(z.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function M(){for(const H in l)o.deleteBuffer(l[H]);h=[],l={},f={}}return{bind:g,update:_,dispose:M}}class o2{constructor(t={}){const{canvas:e=E1(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:E=!1}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const R=new Uint32Array(4),C=new Int32Array(4);let b=null,M=null;const H=[],z=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ya,this.toneMapping=wl,this.toneMappingExposure=1;const N=this;let X=!1,W=0,k=0,K=null,F=-1,O=null;const j=new mn,pt=new mn;let _t=null;const At=new yt(0);let Tt=0,Y=e.width,ot=e.height,it=1,Wt=null,V=null;const ut=new mn(0,0,Y,ot),Ft=new mn(0,0,Y,ot);let Vt=!1;const ct=new Vx;let Dt=!1,Bt=!1;this.transmissionResolutionScale=1;const qt=new Gn,Kt=new Gn,Le=new I,Ee=new mn,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gn=!1;function Pe(){return K===null?it:1}let Q=r;function vi(P,nt){return e.getContext(P,nt)}try{const P={alpha:!0,depth:l,stencil:f,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ux}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",ne,!1),Q===null){const nt="webgl2";if(Q=vi(nt,P),Q===null)throw vi(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Qe,ve,de,Tn,ce,G,U,dt,zt,Ht,Ct,te,Yt,Zt,qe,Xt,le,pe,xe,ee,Oe,we,bn,et;function $t(){Qe=new _w(Q),Qe.init(),we=new $R(Q,Qe),ve=new fw(Q,Qe,t,we),de=new jR(Q,Qe),ve.reverseDepthBuffer&&E&&de.buffers.depth.setReversed(!0),Tn=new yw(Q),ce=new BR,G=new JR(Q,Qe,de,ce,ve,we,Tn),U=new dw(N),dt=new gw(N),zt=new wT(Q),bn=new uw(Q,zt),Ht=new vw(Q,zt,Tn,bn),Ct=new Ew(Q,Ht,zt,Tn),xe=new Sw(Q,ve,G),Xt=new hw(ce),te=new zR(N,U,dt,Qe,ve,bn,Xt),Yt=new a2(N,ce),Zt=new HR,qe=new qR(Qe),pe=new lw(N,U,dt,de,Ct,T,g),le=new KR(N,Ct,ve),et=new s2(Q,Tn,ve,de),ee=new cw(Q,Qe,Tn),Oe=new xw(Q,Qe,Tn),Tn.programs=te.programs,N.capabilities=ve,N.extensions=Qe,N.properties=ce,N.renderLists=Zt,N.shadowMap=le,N.state=de,N.info=Tn}$t();const Et=new i2(N,Q);this.xr=Et,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const P=Qe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Qe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(P){P!==void 0&&(it=P,this.setSize(Y,ot,!1))},this.getSize=function(P){return P.set(Y,ot)},this.setSize=function(P,nt,gt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,ot=nt,e.width=Math.floor(P*it),e.height=Math.floor(nt*it),gt===!0&&(e.style.width=P+"px",e.style.height=nt+"px"),this.setViewport(0,0,P,nt)},this.getDrawingBufferSize=function(P){return P.set(Y*it,ot*it).floor()},this.setDrawingBufferSize=function(P,nt,gt){Y=P,ot=nt,it=gt,e.width=Math.floor(P*gt),e.height=Math.floor(nt*gt),this.setViewport(0,0,P,nt)},this.getCurrentViewport=function(P){return P.copy(j)},this.getViewport=function(P){return P.copy(ut)},this.setViewport=function(P,nt,gt,vt){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,nt,gt,vt),de.viewport(j.copy(ut).multiplyScalar(it).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,nt,gt,vt){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,nt,gt,vt),de.scissor(pt.copy(Ft).multiplyScalar(it).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(P){de.setScissorTest(Vt=P)},this.setOpaqueSort=function(P){Wt=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(P=!0,nt=!0,gt=!0){let vt=0;if(P){let at=!1;if(K!==null){const kt=K.texture.format;at=kt===Bx||kt===zx||kt===Px}if(at){const kt=K.texture.type,Qt=kt===wo||kt===$u||kt===Mp||kt===ah||kt===Ox||kt===Ix,Jt=pe.getClearColor(),oe=pe.getClearAlpha(),be=Jt.r,ye=Jt.g,me=Jt.b;Qt?(R[0]=be,R[1]=ye,R[2]=me,R[3]=oe,Q.clearBufferuiv(Q.COLOR,0,R)):(C[0]=be,C[1]=ye,C[2]=me,C[3]=oe,Q.clearBufferiv(Q.COLOR,0,C))}else vt|=Q.COLOR_BUFFER_BIT}nt&&(vt|=Q.DEPTH_BUFFER_BIT),gt&&(vt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(vt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),pe.dispose(),Zt.dispose(),qe.dispose(),ce.dispose(),U.dispose(),dt.dispose(),Ct.dispose(),bn.dispose(),et.dispose(),te.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",ni),Et.removeEventListener("sessionend",wi),Li.stop()};function Ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const P=Tn.autoReset,nt=le.enabled,gt=le.autoUpdate,vt=le.needsUpdate,at=le.type;$t(),Tn.autoReset=P,le.enabled=nt,le.autoUpdate=gt,le.needsUpdate=vt,le.type=at}function ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ue(P){const nt=P.target;nt.removeEventListener("dispose",Ue),On(nt)}function On(P){ei(P),ce.remove(P)}function ei(P){const nt=ce.get(P).programs;nt!==void 0&&(nt.forEach(function(gt){te.releaseProgram(gt)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,nt,gt,vt,at,kt){nt===null&&(nt=xn);const Qt=at.isMesh&&at.matrixWorld.determinant()<0,Jt=ts(P,nt,gt,vt,at);de.setMaterial(vt,Qt);let oe=gt.index,be=1;if(vt.wireframe===!0){if(oe=Ht.getWireframeAttribute(gt),oe===void 0)return;be=2}const ye=gt.drawRange,me=gt.attributes.position;let Ye=ye.start*be,fn=(ye.start+ye.count)*be;kt!==null&&(Ye=Math.max(Ye,kt.start*be),fn=Math.min(fn,(kt.start+kt.count)*be)),oe!==null?(Ye=Math.max(Ye,0),fn=Math.min(fn,oe.count)):me!=null&&(Ye=Math.max(Ye,0),fn=Math.min(fn,me.count));const Vn=fn-Ye;if(Vn<0||Vn===1/0)return;bn.setup(at,vt,Jt,gt,oe);let je,Je=ee;if(oe!==null&&(je=zt.get(oe),Je=Oe,Je.setIndex(je)),at.isMesh)vt.wireframe===!0?(de.setLineWidth(vt.wireframeLinewidth*Pe()),Je.setMode(Q.LINES)):Je.setMode(Q.TRIANGLES);else if(at.isLine){let ge=vt.linewidth;ge===void 0&&(ge=1),de.setLineWidth(ge*Pe()),at.isLineSegments?Je.setMode(Q.LINES):at.isLineLoop?Je.setMode(Q.LINE_LOOP):Je.setMode(Q.LINE_STRIP)}else at.isPoints?Je.setMode(Q.POINTS):at.isSprite&&Je.setMode(Q.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Je.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Je.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const ge=at._multiDrawStarts,Qn=at._multiDrawCounts,rn=at._multiDrawCount,oi=oe?zt.get(oe).bytesPerElement:1,ba=ce.get(vt).currentProgram.getUniforms();for(let In=0;In<rn;In++)ba.setValue(Q,"_gl_DrawID",In),Je.render(ge[In]/oi,Qn[In])}else if(at.isInstancedMesh)Je.renderInstances(Ye,Vn,at.count);else if(gt.isInstancedBufferGeometry){const ge=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Qn=Math.min(gt.instanceCount,ge);Je.renderInstances(Ye,Vn,Qn)}else Je.render(Ye,Vn)};function cn(P,nt,gt){P.transparent===!0&&P.side===yo&&P.forceSinglePass===!1?(P.side=kr,P.needsUpdate=!0,$a(P,nt,gt),P.side=Rl,P.needsUpdate=!0,$a(P,nt,gt),P.side=yo):$a(P,nt,gt)}this.compile=function(P,nt,gt=null){gt===null&&(gt=P),M=qe.get(gt),M.init(nt),z.push(M),gt.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(M.pushLight(at),at.castShadow&&M.pushShadow(at))}),P!==gt&&P.traverseVisible(function(at){at.isLight&&at.layers.test(nt.layers)&&(M.pushLight(at),at.castShadow&&M.pushShadow(at))}),M.setupLights();const vt=new Set;return P.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const kt=at.material;if(kt)if(Array.isArray(kt))for(let Qt=0;Qt<kt.length;Qt++){const Jt=kt[Qt];cn(Jt,gt,at),vt.add(Jt)}else cn(kt,gt,at),vt.add(kt)}),z.pop(),M=null,vt},this.compileAsync=function(P,nt,gt=null){const vt=this.compile(P,nt,gt);return new Promise(at=>{function kt(){if(vt.forEach(function(Qt){ce.get(Qt).currentProgram.isReady()&&vt.delete(Qt)}),vt.size===0){at(P);return}setTimeout(kt,10)}Qe.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let hr=null;function xi(P){hr&&hr(P)}function ni(){Li.stop()}function wi(){Li.start()}const Li=new xE;Li.setAnimationLoop(xi),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(P){hr=P,Et.setAnimationLoop(P),P===null?Li.stop():Li.start()},Et.addEventListener("sessionstart",ni),Et.addEventListener("sessionend",wi),this.render=function(P,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(nt),nt=Et.getCamera()),P.isScene===!0&&P.onBeforeRender(N,P,nt,K),M=qe.get(P,z.length),M.init(nt),z.push(M),Kt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),ct.setFromProjectionMatrix(Kt),Bt=this.localClippingEnabled,Dt=Xt.init(this.clippingPlanes,Bt),b=Zt.get(P,H.length),b.init(),H.push(b),Et.enabled===!0&&Et.isPresenting===!0){const kt=N.xr.getDepthSensingMesh();kt!==null&&Hs(kt,nt,-1/0,N.sortObjects)}Hs(P,nt,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Wt,V),gn=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,gn&&pe.addToRenderList(b,P),this.info.render.frame++,Dt===!0&&Xt.beginShadows();const gt=M.state.shadowsArray;le.render(gt,P,nt),Dt===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const vt=b.opaque,at=b.transmissive;if(M.setupLights(),nt.isArrayCamera){const kt=nt.cameras;if(at.length>0)for(let Qt=0,Jt=kt.length;Qt<Jt;Qt++){const oe=kt[Qt];rc(vt,at,P,oe)}gn&&pe.render(P);for(let Qt=0,Jt=kt.length;Qt<Jt;Qt++){const oe=kt[Qt];ic(b,P,oe,oe.viewport)}}else at.length>0&&rc(vt,at,P,nt),gn&&pe.render(P),ic(b,P,nt);K!==null&&k===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),P.isScene===!0&&P.onAfterRender(N,P,nt),bn.resetDefaultState(),F=-1,O=null,z.pop(),z.length>0?(M=z[z.length-1],Dt===!0&&Xt.setGlobalState(N.clippingPlanes,M.state.camera)):M=null,H.pop(),H.length>0?b=H[H.length-1]:b=null};function Hs(P,nt,gt,vt){if(P.visible===!1)return;if(P.layers.test(nt.layers)){if(P.isGroup)gt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(nt);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ct.intersectsSprite(P)){vt&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Kt);const Qt=Ct.update(P),Jt=P.material;Jt.visible&&b.push(P,Qt,Jt,gt,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ct.intersectsObject(P))){const Qt=Ct.update(P),Jt=P.material;if(vt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),Ee.copy(Qt.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(Kt)),Array.isArray(Jt)){const oe=Qt.groups;for(let be=0,ye=oe.length;be<ye;be++){const me=oe[be],Ye=Jt[me.materialIndex];Ye&&Ye.visible&&b.push(P,Qt,Ye,gt,Ee.z,me)}}else Jt.visible&&b.push(P,Qt,Jt,gt,Ee.z,null)}}const kt=P.children;for(let Qt=0,Jt=kt.length;Qt<Jt;Qt++)Hs(kt[Qt],nt,gt,vt)}function ic(P,nt,gt,vt){const at=P.opaque,kt=P.transmissive,Qt=P.transparent;M.setupLightsView(gt),Dt===!0&&Xt.setGlobalState(N.clippingPlanes,gt),vt&&de.viewport(j.copy(vt)),at.length>0&&Gs(at,nt,gt),kt.length>0&&Gs(kt,nt,gt),Qt.length>0&&Gs(Qt,nt,gt),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function rc(P,nt,gt,vt){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[vt.id]===void 0&&(M.state.transmissionRenderTarget[vt.id]=new tc(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Ap:wo,minFilter:Qu,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vn.workingColorSpace}));const kt=M.state.transmissionRenderTarget[vt.id],Qt=vt.viewport||j;kt.setSize(Qt.z*N.transmissionResolutionScale,Qt.w*N.transmissionResolutionScale);const Jt=N.getRenderTarget();N.setRenderTarget(kt),N.getClearColor(At),Tt=N.getClearAlpha(),Tt<1&&N.setClearColor(16777215,.5),N.clear(),gn&&pe.render(gt);const oe=N.toneMapping;N.toneMapping=wl;const be=vt.viewport;if(vt.viewport!==void 0&&(vt.viewport=void 0),M.setupLightsView(vt),Dt===!0&&Xt.setGlobalState(N.clippingPlanes,vt),Gs(P,gt,vt),G.updateMultisampleRenderTarget(kt),G.updateRenderTargetMipmap(kt),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let me=0,Ye=nt.length;me<Ye;me++){const fn=nt[me],Vn=fn.object,je=fn.geometry,Je=fn.material,ge=fn.group;if(Je.side===yo&&Vn.layers.test(vt.layers)){const Qn=Je.side;Je.side=kr,Je.needsUpdate=!0,Ja(Vn,gt,vt,je,Je,ge),Je.side=Qn,Je.needsUpdate=!0,ye=!0}}ye===!0&&(G.updateMultisampleRenderTarget(kt),G.updateRenderTargetMipmap(kt))}N.setRenderTarget(Jt),N.setClearColor(At,Tt),be!==void 0&&(vt.viewport=be),N.toneMapping=oe}function Gs(P,nt,gt){const vt=nt.isScene===!0?nt.overrideMaterial:null;for(let at=0,kt=P.length;at<kt;at++){const Qt=P[at],Jt=Qt.object,oe=Qt.geometry,be=vt===null?Qt.material:vt,ye=Qt.group;Jt.layers.test(gt.layers)&&Ja(Jt,nt,gt,oe,be,ye)}}function Ja(P,nt,gt,vt,at,kt){P.onBeforeRender(N,nt,gt,vt,at,kt),P.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),at.onBeforeRender(N,nt,gt,vt,P,kt),at.transparent===!0&&at.side===yo&&at.forceSinglePass===!1?(at.side=kr,at.needsUpdate=!0,N.renderBufferDirect(gt,nt,vt,at,P,kt),at.side=Rl,at.needsUpdate=!0,N.renderBufferDirect(gt,nt,vt,at,P,kt),at.side=yo):N.renderBufferDirect(gt,nt,vt,at,P,kt),P.onAfterRender(N,nt,gt,vt,at,kt)}function $a(P,nt,gt){nt.isScene!==!0&&(nt=xn);const vt=ce.get(P),at=M.state.lights,kt=M.state.shadowsArray,Qt=at.state.version,Jt=te.getParameters(P,at.state,kt,nt,gt),oe=te.getProgramCacheKey(Jt);let be=vt.programs;vt.environment=P.isMeshStandardMaterial?nt.environment:null,vt.fog=nt.fog,vt.envMap=(P.isMeshStandardMaterial?dt:U).get(P.envMap||vt.environment),vt.envMapRotation=vt.environment!==null&&P.envMap===null?nt.environmentRotation:P.envMapRotation,be===void 0&&(P.addEventListener("dispose",Ue),be=new Map,vt.programs=be);let ye=be.get(oe);if(ye!==void 0){if(vt.currentProgram===ye&&vt.lightsStateVersion===Qt)return Ma(P,Jt),ye}else Jt.uniforms=te.getUniforms(P),P.onBeforeCompile(Jt,N),ye=te.acquireProgram(Jt,oe),be.set(oe,ye),vt.uniforms=Jt.uniforms;const me=vt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(me.clippingPlanes=Xt.uniform),Ma(P,Jt),vt.needsLights=ri(P),vt.lightsStateVersion=Qt,vt.needsLights&&(me.ambientLightColor.value=at.state.ambient,me.lightProbe.value=at.state.probe,me.directionalLights.value=at.state.directional,me.directionalLightShadows.value=at.state.directionalShadow,me.spotLights.value=at.state.spot,me.spotLightShadows.value=at.state.spotShadow,me.rectAreaLights.value=at.state.rectArea,me.ltc_1.value=at.state.rectAreaLTC1,me.ltc_2.value=at.state.rectAreaLTC2,me.pointLights.value=at.state.point,me.pointLightShadows.value=at.state.pointShadow,me.hemisphereLights.value=at.state.hemi,me.directionalShadowMap.value=at.state.directionalShadowMap,me.directionalShadowMatrix.value=at.state.directionalShadowMatrix,me.spotShadowMap.value=at.state.spotShadowMap,me.spotLightMatrix.value=at.state.spotLightMatrix,me.spotLightMap.value=at.state.spotLightMap,me.pointShadowMap.value=at.state.pointShadowMap,me.pointShadowMatrix.value=at.state.pointShadowMatrix),vt.currentProgram=ye,vt.uniformsList=null,ye}function Ea(P){if(P.uniformsList===null){const nt=P.currentProgram.getUniforms();P.uniformsList=C_.seqWithValue(nt.seq,P.uniforms)}return P.uniformsList}function Ma(P,nt){const gt=ce.get(P);gt.outputColorSpace=nt.outputColorSpace,gt.batching=nt.batching,gt.batchingColor=nt.batchingColor,gt.instancing=nt.instancing,gt.instancingColor=nt.instancingColor,gt.instancingMorph=nt.instancingMorph,gt.skinning=nt.skinning,gt.morphTargets=nt.morphTargets,gt.morphNormals=nt.morphNormals,gt.morphColors=nt.morphColors,gt.morphTargetsCount=nt.morphTargetsCount,gt.numClippingPlanes=nt.numClippingPlanes,gt.numIntersection=nt.numClipIntersection,gt.vertexAlphas=nt.vertexAlphas,gt.vertexTangents=nt.vertexTangents,gt.toneMapping=nt.toneMapping}function ts(P,nt,gt,vt,at){nt.isScene!==!0&&(nt=xn),G.resetTextureUnits();const kt=nt.fog,Qt=vt.isMeshStandardMaterial?nt.environment:null,Jt=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:oh,oe=(vt.isMeshStandardMaterial?dt:U).get(vt.envMap||Qt),be=vt.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ye=!!gt.attributes.tangent&&(!!vt.normalMap||vt.anisotropy>0),me=!!gt.morphAttributes.position,Ye=!!gt.morphAttributes.normal,fn=!!gt.morphAttributes.color;let Vn=wl;vt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Vn=N.toneMapping);const je=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Je=je!==void 0?je.length:0,ge=ce.get(vt),Qn=M.state.lights;if(Dt===!0&&(Bt===!0||P!==O)){const ui=P===O&&vt.id===F;Xt.setState(vt,P,ui)}let rn=!1;vt.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Qn.state.version||ge.outputColorSpace!==Jt||at.isBatchedMesh&&ge.batching===!1||!at.isBatchedMesh&&ge.batching===!0||at.isBatchedMesh&&ge.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&ge.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&ge.instancing===!1||!at.isInstancedMesh&&ge.instancing===!0||at.isSkinnedMesh&&ge.skinning===!1||!at.isSkinnedMesh&&ge.skinning===!0||at.isInstancedMesh&&ge.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&ge.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&ge.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&ge.instancingMorph===!1&&at.morphTexture!==null||ge.envMap!==oe||vt.fog===!0&&ge.fog!==kt||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Xt.numPlanes||ge.numIntersection!==Xt.numIntersection)||ge.vertexAlphas!==be||ge.vertexTangents!==ye||ge.morphTargets!==me||ge.morphNormals!==Ye||ge.morphColors!==fn||ge.toneMapping!==Vn||ge.morphTargetsCount!==Je)&&(rn=!0):(rn=!0,ge.__version=vt.version);let oi=ge.currentProgram;rn===!0&&(oi=$a(vt,nt,at));let ba=!1,In=!1,sa=!1;const An=oi.getUniforms(),yi=ge.uniforms;if(de.useProgram(oi.program)&&(ba=!0,In=!0,sa=!0),vt.id!==F&&(F=vt.id,In=!0),ba||O!==P){de.buffers.depth.getReversed()?(qt.copy(P.projectionMatrix),T1(qt),b1(qt),An.setValue(Q,"projectionMatrix",qt)):An.setValue(Q,"projectionMatrix",P.projectionMatrix),An.setValue(Q,"viewMatrix",P.matrixWorldInverse);const ci=An.map.cameraPosition;ci!==void 0&&ci.setValue(Q,Le.setFromMatrixPosition(P.matrixWorld)),ve.logarithmicDepthBuffer&&An.setValue(Q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(vt.isMeshPhongMaterial||vt.isMeshToonMaterial||vt.isMeshLambertMaterial||vt.isMeshBasicMaterial||vt.isMeshStandardMaterial||vt.isShaderMaterial)&&An.setValue(Q,"isOrthographic",P.isOrthographicCamera===!0),O!==P&&(O=P,In=!0,sa=!0)}if(at.isSkinnedMesh){An.setOptional(Q,at,"bindMatrix"),An.setOptional(Q,at,"bindMatrixInverse");const ui=at.skeleton;ui&&(ui.boneTexture===null&&ui.computeBoneTexture(),An.setValue(Q,"boneTexture",ui.boneTexture,G))}at.isBatchedMesh&&(An.setOptional(Q,at,"batchingTexture"),An.setValue(Q,"batchingTexture",at._matricesTexture,G),An.setOptional(Q,at,"batchingIdTexture"),An.setValue(Q,"batchingIdTexture",at._indirectTexture,G),An.setOptional(Q,at,"batchingColorTexture"),at._colorsTexture!==null&&An.setValue(Q,"batchingColorTexture",at._colorsTexture,G));const li=gt.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&xe.update(at,gt,oi),(In||ge.receiveShadow!==at.receiveShadow)&&(ge.receiveShadow=at.receiveShadow,An.setValue(Q,"receiveShadow",at.receiveShadow)),vt.isMeshGouraudMaterial&&vt.envMap!==null&&(yi.envMap.value=oe,yi.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),vt.isMeshStandardMaterial&&vt.envMap===null&&nt.environment!==null&&(yi.envMapIntensity.value=nt.environmentIntensity),In&&(An.setValue(Q,"toneMappingExposure",N.toneMappingExposure),ge.needsLights&&es(yi,sa),kt&&vt.fog===!0&&Yt.refreshFogUniforms(yi,kt),Yt.refreshMaterialUniforms(yi,vt,it,ot,M.state.transmissionRenderTarget[P.id]),C_.upload(Q,Ea(ge),yi,G)),vt.isShaderMaterial&&vt.uniformsNeedUpdate===!0&&(C_.upload(Q,Ea(ge),yi,G),vt.uniformsNeedUpdate=!1),vt.isSpriteMaterial&&An.setValue(Q,"center",at.center),An.setValue(Q,"modelViewMatrix",at.modelViewMatrix),An.setValue(Q,"normalMatrix",at.normalMatrix),An.setValue(Q,"modelMatrix",at.matrixWorld),vt.isShaderMaterial||vt.isRawShaderMaterial){const ui=vt.uniformsGroups;for(let ci=0,wr=ui.length;ci<wr;ci++){const Yi=ui[ci];et.update(Yi,oi),et.bind(Yi,oi)}}return oi}function es(P,nt){P.ambientLightColor.needsUpdate=nt,P.lightProbe.needsUpdate=nt,P.directionalLights.needsUpdate=nt,P.directionalLightShadows.needsUpdate=nt,P.pointLights.needsUpdate=nt,P.pointLightShadows.needsUpdate=nt,P.spotLights.needsUpdate=nt,P.spotLightShadows.needsUpdate=nt,P.rectAreaLights.needsUpdate=nt,P.hemisphereLights.needsUpdate=nt}function ri(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(P,nt,gt){ce.get(P.texture).__webglTexture=nt,ce.get(P.depthTexture).__webglTexture=gt;const vt=ce.get(P);vt.__hasExternalTextures=!0,vt.__autoAllocateDepthBuffer=gt===void 0,vt.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),vt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,nt){const gt=ce.get(P);gt.__webglFramebuffer=nt,gt.__useDefaultFramebuffer=nt===void 0};const ac=Q.createFramebuffer();this.setRenderTarget=function(P,nt=0,gt=0){K=P,W=nt,k=gt;let vt=!0,at=null,kt=!1,Qt=!1;if(P){const oe=ce.get(P);if(oe.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(Q.FRAMEBUFFER,null),vt=!1;else if(oe.__webglFramebuffer===void 0)G.setupRenderTarget(P);else if(oe.__hasExternalTextures)G.rebindTextures(P,ce.get(P.texture).__webglTexture,ce.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const me=P.depthTexture;if(oe.__boundDepthTexture!==me){if(me!==null&&ce.has(me)&&(P.width!==me.image.width||P.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(P)}}const be=P.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Qt=!0);const ye=ce.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ye[nt])?at=ye[nt][gt]:at=ye[nt],kt=!0):P.samples>0&&G.useMultisampledRTT(P)===!1?at=ce.get(P).__webglMultisampledFramebuffer:Array.isArray(ye)?at=ye[gt]:at=ye,j.copy(P.viewport),pt.copy(P.scissor),_t=P.scissorTest}else j.copy(ut).multiplyScalar(it).floor(),pt.copy(Ft).multiplyScalar(it).floor(),_t=Vt;if(gt!==0&&(at=ac),de.bindFramebuffer(Q.FRAMEBUFFER,at)&&vt&&de.drawBuffers(P,at),de.viewport(j),de.scissor(pt),de.setScissorTest(_t),kt){const oe=ce.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+nt,oe.__webglTexture,gt)}else if(Qt){const oe=ce.get(P.texture),be=nt;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,oe.__webglTexture,gt,be)}else if(P!==null&&gt!==0){const oe=ce.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,oe.__webglTexture,gt)}F=-1},this.readRenderTargetPixels=function(P,nt,gt,vt,at,kt,Qt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt){de.bindFramebuffer(Q.FRAMEBUFFER,Jt);try{const oe=P.texture,be=oe.format,ye=oe.type;if(!ve.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=P.width-vt&&gt>=0&&gt<=P.height-at&&Q.readPixels(nt,gt,vt,at,we.convert(be),we.convert(ye),kt)}finally{const oe=K!==null?ce.get(K).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(P,nt,gt,vt,at,kt,Qt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ce.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt){const oe=P.texture,be=oe.format,ye=oe.type;if(!ve.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(nt>=0&&nt<=P.width-vt&&gt>=0&&gt<=P.height-at){de.bindFramebuffer(Q.FRAMEBUFFER,Jt);const me=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,me),Q.bufferData(Q.PIXEL_PACK_BUFFER,kt.byteLength,Q.STREAM_READ),Q.readPixels(nt,gt,vt,at,we.convert(be),we.convert(ye),0);const Ye=K!==null?ce.get(K).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,Ye);const fn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await M1(Q,fn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,me),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,kt),Q.deleteBuffer(me),Q.deleteSync(fn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,nt=null,gt=0){P.isTexture!==!0&&(Qf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),nt=arguments[0]||null,P=arguments[1]);const vt=Math.pow(2,-gt),at=Math.floor(P.image.width*vt),kt=Math.floor(P.image.height*vt),Qt=nt!==null?nt.x:0,Jt=nt!==null?nt.y:0;G.setTexture2D(P,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,gt,0,0,Qt,Jt,at,kt),de.unbindTexture()};const sc=Q.createFramebuffer(),Ta=Q.createFramebuffer();this.copyTextureToTexture=function(P,nt,gt=null,vt=null,at=0,kt=null){P.isTexture!==!0&&(Qf("WebGLRenderer: copyTextureToTexture function signature has changed."),vt=arguments[0]||null,P=arguments[1],nt=arguments[2],kt=arguments[3]||0,gt=null),kt===null&&(at!==0?(Qf("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),kt=at,at=0):kt=0);let Qt,Jt,oe,be,ye,me,Ye,fn,Vn;const je=P.isCompressedTexture?P.mipmaps[kt]:P.image;if(gt!==null)Qt=gt.max.x-gt.min.x,Jt=gt.max.y-gt.min.y,oe=gt.isBox3?gt.max.z-gt.min.z:1,be=gt.min.x,ye=gt.min.y,me=gt.isBox3?gt.min.z:0;else{const li=Math.pow(2,-at);Qt=Math.floor(je.width*li),Jt=Math.floor(je.height*li),P.isDataArrayTexture?oe=je.depth:P.isData3DTexture?oe=Math.floor(je.depth*li):oe=1,be=0,ye=0,me=0}vt!==null?(Ye=vt.x,fn=vt.y,Vn=vt.z):(Ye=0,fn=0,Vn=0);const Je=we.convert(nt.format),ge=we.convert(nt.type);let Qn;nt.isData3DTexture?(G.setTexture3D(nt,0),Qn=Q.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(G.setTexture2DArray(nt,0),Qn=Q.TEXTURE_2D_ARRAY):(G.setTexture2D(nt,0),Qn=Q.TEXTURE_2D),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,nt.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,nt.unpackAlignment);const rn=Q.getParameter(Q.UNPACK_ROW_LENGTH),oi=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),ba=Q.getParameter(Q.UNPACK_SKIP_PIXELS),In=Q.getParameter(Q.UNPACK_SKIP_ROWS),sa=Q.getParameter(Q.UNPACK_SKIP_IMAGES);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,je.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,je.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,be),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ye),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,me);const An=P.isDataArrayTexture||P.isData3DTexture,yi=nt.isDataArrayTexture||nt.isData3DTexture;if(P.isDepthTexture){const li=ce.get(P),ui=ce.get(nt),ci=ce.get(li.__renderTarget),wr=ce.get(ui.__renderTarget);de.bindFramebuffer(Q.READ_FRAMEBUFFER,ci.__webglFramebuffer),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Yi=0;Yi<oe;Yi++)An&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(P).__webglTexture,at,me+Yi),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ce.get(nt).__webglTexture,kt,Vn+Yi)),Q.blitFramebuffer(be,ye,Qt,Jt,Ye,fn,Qt,Jt,Q.DEPTH_BUFFER_BIT,Q.NEAREST);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(at!==0||P.isRenderTargetTexture||ce.has(P)){const li=ce.get(P),ui=ce.get(nt);de.bindFramebuffer(Q.READ_FRAMEBUFFER,sc),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ta);for(let ci=0;ci<oe;ci++)An?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,li.__webglTexture,at,me+ci):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,li.__webglTexture,at),yi?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ui.__webglTexture,kt,Vn+ci):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ui.__webglTexture,kt),at!==0?Q.blitFramebuffer(be,ye,Qt,Jt,Ye,fn,Qt,Jt,Q.COLOR_BUFFER_BIT,Q.NEAREST):yi?Q.copyTexSubImage3D(Qn,kt,Ye,fn,Vn+ci,be,ye,Qt,Jt):Q.copyTexSubImage2D(Qn,kt,Ye,fn,be,ye,Qt,Jt);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else yi?P.isDataTexture||P.isData3DTexture?Q.texSubImage3D(Qn,kt,Ye,fn,Vn,Qt,Jt,oe,Je,ge,je.data):nt.isCompressedArrayTexture?Q.compressedTexSubImage3D(Qn,kt,Ye,fn,Vn,Qt,Jt,oe,Je,je.data):Q.texSubImage3D(Qn,kt,Ye,fn,Vn,Qt,Jt,oe,Je,ge,je):P.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,kt,Ye,fn,Qt,Jt,Je,ge,je.data):P.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,kt,Ye,fn,je.width,je.height,Je,je.data):Q.texSubImage2D(Q.TEXTURE_2D,kt,Ye,fn,Qt,Jt,Je,ge,je);Q.pixelStorei(Q.UNPACK_ROW_LENGTH,rn),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,oi),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,ba),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,In),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,sa),kt===0&&nt.generateMipmaps&&Q.generateMipmap(Qn),de.unbindTexture()},this.copyTextureToTexture3D=function(P,nt,gt=null,vt=null,at=0){return P.isTexture!==!0&&(Qf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),gt=arguments[0]||null,vt=arguments[1]||null,P=arguments[2],nt=arguments[3],at=arguments[4]||0),Qf('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,nt,gt,vt,at)},this.initRenderTarget=function(P){ce.get(P).__webglFramebuffer===void 0&&G.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?G.setTextureCube(P,0):P.isData3DTexture?G.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?G.setTexture2DArray(P,0):G.setTexture2D(P,0),de.unbindTexture()},this.resetState=function(){W=0,k=0,K=null,de.reset(),bn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=vn._getDrawingBufferColorSpace(t),e.unpackColorSpace=vn._getUnpackColorSpace()}}const Pt={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",DARK_BLUE:"#172038",YELLOW:"#de9e41",BOX:"#ad7757",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc",WOOD:"#341c27",GRAY:"#819796"};var To=(o=>(o.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",o.HOME_CONTAINER="HOME_CONTAINER",o.LEVEL_SELECTION_CONTAINER="LEVEL_SELECTION_CONTAINER",o))(To||{});const wt={TILE_SIZE:1,WIDTH:13,HEIGHT:20};class Fs{constructor(t){Rt(this,"mesh");Rt(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,r,l){}graphics(t,e,r,l){}kill(){this.isAlive=!1}beforeDeath(t,e,r){}}class Kn{constructor(t){Rt(this,"center");Rt(this,"_parts");this.center=t.center,this._parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this._parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}set parts(t){this._parts=t,this.updateParts()}get parts(){return this._parts}}const l2={createGrid(o,t){const e=[];for(let r=0;r<o;r++){e[r]=[];for(let l=0;l<t;l++){const f={actors:[],isWalkable:!0,isPlaceable:!0};e[r][l]=f}}return e}};class uh{constructor(t){Rt(this,"actorsGrid");Rt(this,"components",[]);Rt(this,"camera");Rt(this,"scene");Rt(this,"width");Rt(this,"height");Rt(this,"Render",()=>null);this.actorsGrid=uh.createActorsGrid(t.width,t.height),this.camera=t.camera??new ra,this.scene=t.scene??new K1,this.width=t.width,this.height=t.height}static createActorsGrid(t,e){return l2.createGrid(t,e)}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof Kn?t.mesh.parts.forEach(r=>this.scene.add(r.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof Kn?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((f,h)=>{f.forEach((p,g)=>{const _=new St(h,g);p.actors.forEach(x=>x.update(t,e,this,_.clone()))})}),this.components.forEach(f=>f.update(t,e,this)),this.actorsGrid.map((f,h)=>f.map((p,g)=>{const _=new St(h,g);p.actors.filter(E=>!E.isAlive).forEach(E=>{E.beforeDeath(t,this,_),E.mesh instanceof Kn?E.mesh.parts.forEach(T=>this.scene.remove(T.mesh)):this.scene.remove(E.mesh)});const y=p.actors.filter(E=>E.isAlive);p.actors=y}));const r=[],l=[];for(let f=0;f<this.components.length;f++){const h=this.components[f];h.isAlive?r.push(h):l.push(h)}l.forEach(f=>{f.mesh instanceof Kn?f.mesh.parts.forEach(h=>this.scene.remove(h.mesh)):this.scene.remove(f.mesh)}),this.components=r}graphics(t,e){this.actorsGrid.forEach((r,l)=>{r.forEach((f,h)=>{const p=new St(l,h);f.actors.forEach(g=>g.graphics(t,e,this,p.clone()))})}),this.components.forEach(r=>r.graphics(t,e,this))}provideProps(t){return{}}reset(){this.scene.clear(),this.actorsGrid=uh.createActorsGrid(this.width,this.height)}}var eh=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(x){x.preventDefault(),r(++o%t.children.length)},!1);function e(x){return t.appendChild(x.dom),x}function r(x){for(var y=0;y<t.children.length;y++)t.children[y].style.display=y===x?"block":"none";o=x}var l=(performance||Date).now(),f=l,h=0,p=e(new eh.Panel("FPS","#0ff","#002")),g=e(new eh.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var _=e(new eh.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:t,addPanel:e,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){h++;var x=(performance||Date).now();if(g.update(x-l,200),x>=f+1e3&&(p.update(h*1e3/(x-f),100),f=x,h=0,_)){var y=performance.memory;_.update(y.usedJSHeapSize/1048576,y.jsHeapSizeLimit/1048576)}return x},update:function(){l=this.end()},domElement:t,setMode:r}};eh.Panel=function(o,t,e){var r=1/0,l=0,f=Math.round,h=f(window.devicePixelRatio||1),p=80*h,g=48*h,_=3*h,x=2*h,y=3*h,E=15*h,T=74*h,R=30*h,C=document.createElement("canvas");C.width=p,C.height=g,C.style.cssText="width:80px;height:48px";var b=C.getContext("2d");return b.font="bold "+9*h+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=e,b.fillRect(0,0,p,g),b.fillStyle=t,b.fillText(o,_,x),b.fillRect(y,E,T,R),b.fillStyle=e,b.globalAlpha=.9,b.fillRect(y,E,T,R),{dom:C,update:function(M,H){r=Math.min(r,M),l=Math.max(l,M),b.fillStyle=e,b.globalAlpha=1,b.fillRect(0,0,p,E),b.fillStyle=t,b.fillText(f(M)+" "+o+" ("+f(r)+"-"+f(l)+")",_,x),b.drawImage(C,y+h,E,T-h,R,y,E,T-h,R),b.fillRect(y+T-h,E,h,R),b.fillStyle=e,b.globalAlpha=.9,b.fillRect(y+T-h,E,h,f((1-M/H)*R))}}};const u2="canvas",TE={getCanvas(){const o=document.getElementById("canvas");if(!o||!(o instanceof HTMLCanvasElement))throw new Error("Default canvas not found");return o.id=u2,o}};class c2{constructor(){Rt(this,"wasPressedMap",new Map);Rt(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const f2=new c2;class h2{constructor(){Rt(this,"position",{x:0,y:0});Rt(this,"wasClicked",!1);Rt(this,"wheelDelta",0);window.addEventListener("mousemove",t=>{const e=TE.getCanvas();this.position={x:t.clientX/e.clientWidth*2-1,y:-(t.clientY/e.clientHeight)*2+1}}),window.addEventListener("click",()=>{this.wasClicked=!0}),window.addEventListener("wheel",t=>{this.wheelDelta+=t.deltaY})}consumeClick(){const t=this.wasClicked;return this.wasClicked=!1,t}consumeWheel(){const t=this.wheelDelta;return this.wheelDelta=0,t}}const d2=new h2,p2={projectMousePosition(o){const{camera:t,mousePosition:e}=o,r=new I(0,0,0),l=new TT;l.setFromCamera(e.clone(),t);const f=new Tl(new I(0,1,0),0);return l.ray.intersectPlane(f,r),new St(r.x,r.z)}};class m2{constructor(t){Rt(this,"renderer");Rt(this,"keyboardHandler");Rt(this,"mouseHandler");Rt(this,"isGameOver",!1);Rt(this,"lastUpdate",Date.now());Rt(this,"lastGraphics",Date.now());Rt(this,"stats",new eh);Rt(this,"containers",new Map);Rt(this,"currentContainer");Rt(this,"triggerRender");Rt(this,"onResize",()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth*2,window.innerHeight*2),this.renderer.domElement.style.width=`${window.innerWidth}px`,this.renderer.domElement.style.height=`${window.innerHeight}px`});this.renderer=new o2({canvas:TE.getCanvas()}),this.renderer.setSize(800,800),document.body.appendChild(this.renderer.domElement),this.keyboardHandler=f2,this.mouseHandler=d2,this.stats=new eh,window.addEventListener("resize",this.onResize),window.requestAnimationFrame(this.onResize),this.triggerRender=t.triggerRender}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this);const e=()=>{this.triggerRender(),this.onResize()};e(),window.requestAnimationFrame(e)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=MS(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=MS(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function MS(o){return Math.max(0,Math.min(o,1e3))}class aa{constructor(t){Rt(this,"mesh");Rt(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,r){}graphics(t,e,r){}kill(){this.isAlive=!1}}const TS=new Dl,x_=new I;class bE extends ET{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new Bn(t,3)),this.setAttribute("uv",new Bn(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,r=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),r.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const r=new Ex(e,6,1);return this.setAttribute("instanceStart",new Ps(r,3,0)),this.setAttribute("instanceEnd",new Ps(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const r=new Ex(e,6,1);return this.setAttribute("instanceColorStart",new Ps(r,3,0)),this.setAttribute("instanceColorEnd",new Ps(r,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new hT(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dl);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),TS.setFromBufferAttribute(e),this.boundingBox.union(TS))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rp),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let l=0;for(let f=0,h=t.count;f<h;f++)x_.fromBufferAttribute(t,f),l=Math.max(l,r.distanceToSquared(x_)),x_.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(x_));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}jt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new St(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wr.line={uniforms:Gx.merge([jt.common,jt.fog,jt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ny extends Ro{constructor(t){super({type:"LineMaterial",uniforms:Gx.clone(Wr.line.uniforms),vertexShader:Wr.line.vertexShader,fragmentShader:Wr.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Lv=new mn,bS=new I,AS=new I,ki=new mn,Xi=new mn,Us=new mn,Uv=new I,Nv=new Gn,qi=new bT,wS=new I,y_=new Dl,S_=new Rp,Ns=new mn;let Os,ju;function RS(o,t,e){return Ns.set(0,0,-t,1).applyMatrix4(o.projectionMatrix),Ns.multiplyScalar(1/Ns.w),Ns.x=ju/e.width,Ns.y=ju/e.height,Ns.applyMatrix4(o.projectionMatrixInverse),Ns.multiplyScalar(1/Ns.w),Math.abs(Math.max(Ns.x,Ns.y))}function g2(o,t){const e=o.matrixWorld,r=o.geometry,l=r.attributes.instanceStart,f=r.attributes.instanceEnd,h=Math.min(r.instanceCount,l.count);for(let p=0,g=h;p<g;p++){qi.start.fromBufferAttribute(l,p),qi.end.fromBufferAttribute(f,p),qi.applyMatrix4(e);const _=new I,x=new I;Os.distanceSqToSegment(qi.start,qi.end,x,_),x.distanceTo(_)<ju*.5&&t.push({point:x,pointOnLine:_,distance:Os.origin.distanceTo(x),object:o,face:null,faceIndex:p,uv:null,uv1:null})}}function _2(o,t,e){const r=t.projectionMatrix,f=o.material.resolution,h=o.matrixWorld,p=o.geometry,g=p.attributes.instanceStart,_=p.attributes.instanceEnd,x=Math.min(p.instanceCount,g.count),y=-t.near;Os.at(1,Us),Us.w=1,Us.applyMatrix4(t.matrixWorldInverse),Us.applyMatrix4(r),Us.multiplyScalar(1/Us.w),Us.x*=f.x/2,Us.y*=f.y/2,Us.z=0,Uv.copy(Us),Nv.multiplyMatrices(t.matrixWorldInverse,h);for(let E=0,T=x;E<T;E++){if(ki.fromBufferAttribute(g,E),Xi.fromBufferAttribute(_,E),ki.w=1,Xi.w=1,ki.applyMatrix4(Nv),Xi.applyMatrix4(Nv),ki.z>y&&Xi.z>y)continue;if(ki.z>y){const z=ki.z-Xi.z,N=(ki.z-y)/z;ki.lerp(Xi,N)}else if(Xi.z>y){const z=Xi.z-ki.z,N=(Xi.z-y)/z;Xi.lerp(ki,N)}ki.applyMatrix4(r),Xi.applyMatrix4(r),ki.multiplyScalar(1/ki.w),Xi.multiplyScalar(1/Xi.w),ki.x*=f.x/2,ki.y*=f.y/2,Xi.x*=f.x/2,Xi.y*=f.y/2,qi.start.copy(ki),qi.start.z=0,qi.end.copy(Xi),qi.end.z=0;const C=qi.closestPointToPointParameter(Uv,!0);qi.at(C,wS);const b=S1.lerp(ki.z,Xi.z,C),M=b>=-1&&b<=1,H=Uv.distanceTo(wS)<ju*.5;if(M&&H){qi.start.fromBufferAttribute(g,E),qi.end.fromBufferAttribute(_,E),qi.start.applyMatrix4(h),qi.end.applyMatrix4(h);const z=new I,N=new I;Os.distanceSqToSegment(qi.start,qi.end,N,z),e.push({point:N,pointOnLine:z,distance:Os.origin.distanceTo(N),object:o,face:null,faceIndex:E,uv:null,uv1:null})}}}class v2 extends Ai{constructor(t=new bE,e=new ny({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,r=t.attributes.instanceEnd,l=new Float32Array(2*e.count);for(let h=0,p=0,g=e.count;h<g;h++,p+=2)bS.fromBufferAttribute(e,h),AS.fromBufferAttribute(r,h),l[p]=p===0?0:l[p-1],l[p+1]=l[p]+bS.distanceTo(AS);const f=new Ex(l,2,1);return t.setAttribute("instanceDistanceStart",new Ps(f,1,0)),t.setAttribute("instanceDistanceEnd",new Ps(f,1,1)),this}raycast(t,e){const r=this.material.worldUnits,l=t.camera;l===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const f=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Os=t.ray;const h=this.matrixWorld,p=this.geometry,g=this.material;ju=g.linewidth+f,p.boundingSphere===null&&p.computeBoundingSphere(),S_.copy(p.boundingSphere).applyMatrix4(h);let _;if(r)_=ju*.5;else{const y=Math.max(l.near,S_.distanceToPoint(Os.origin));_=RS(l,y,g.resolution)}if(S_.radius+=_,Os.intersectsSphere(S_)===!1)return;p.boundingBox===null&&p.computeBoundingBox(),y_.copy(p.boundingBox).applyMatrix4(h);let x;if(r)x=ju*.5;else{const y=Math.max(l.near,y_.distanceToPoint(Os.origin));x=RS(l,y,g.resolution)}y_.expandByScalar(x),Os.intersectsBox(y_)!==!1&&(r?g2(this,e):_2(this,l,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Lv),this.material.uniforms.resolution.value.set(Lv.z,Lv.w))}}class AE extends bE{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,r=new Float32Array(2*e);for(let l=0;l<e;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setPositions(r),this}setColors(t){const e=t.length-3,r=new Float32Array(2*e);for(let l=0;l<e;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setColors(r),this}setFromPoints(t){const e=t.length-1,r=new Float32Array(6*e);for(let l=0;l<e;l++)r[6*l]=t[l].x,r[6*l+1]=t[l].y,r[6*l+2]=t[l].z||0,r[6*l+3]=t[l+1].x,r[6*l+4]=t[l+1].y,r[6*l+5]=t[l+1].z||0;return super.setPositions(r),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class x2 extends v2{constructor(t=new AE,e=new ny({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const zi=4,se={createCube:o=>{const t=(o==null?void 0:o.size)??1,e=(o==null?void 0:o.color)??65280,r=new ec(t,t,t,zi,zi,zi),l={color:e},f=o!=null&&o.basicMaterial?new Vr(l):new Ls(l);return new Ai(r,f)},createBox:o=>{var _;const t=(o==null?void 0:o.width)??1,e=(o==null?void 0:o.height)??1,r=(o==null?void 0:o.depth)??1,l=(o==null?void 0:o.color)??new yt(Pt.RED),f=new ec(t,e,r,zi,zi,zi),h=!!(o!=null&&o.transparent),p={color:l,transparent:h,opacity:h?(_=o==null?void 0:o.transparent)==null?void 0:_.value:1},g=o!=null&&o.basicMaterial?new Vr(p):new Ls(p);return new Ai(f,g)},createCone:o=>{const t=(o==null?void 0:o.radius)??1,e=(o==null?void 0:o.height)??1,r=(o==null?void 0:o.color)??new yt(Pt.RED),l=new Yx(t,e,zi,zi),f={color:r},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(l,h)},createSphere:o=>{var p;const t=(o==null?void 0:o.radius)??1,e=(o==null?void 0:o.color)??new yt(Pt.RED),r=new Qx(t,zi,zi),l=!!(o!=null&&o.transparent),f={color:e,transparent:l,opacity:l?(p=o==null?void 0:o.transparent)==null?void 0:p.value:1},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(r,h)},createCylinder:o=>{const t=(o==null?void 0:o.radius)??1,e=(o==null?void 0:o.height)??1,r=(o==null?void 0:o.color)??new yt(Pt.RED),l=new B_(t,t,e,zi*2,zi),f={color:r},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(l,h)},createGem(o){const t=(o==null?void 0:o.size)??1,e=(o==null?void 0:o.color)??new yt(Pt.RED),r=new Kx(t,0),l={color:e},f=o!=null&&o.basicMaterial?new Vr(l):new Ls(l);return new Ai(r,f)},createTorus:o=>{const t=o.radius,e=o.radius/2,r=(o==null?void 0:o.color)??new yt(Pt.RED),l=new jx(t,e,zi*2,zi),f={color:r},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(l,h)},createTorusKnotBlob:o=>{const t=o.radius,e=o.radius/4,r=(o==null?void 0:o.color)??new yt(Pt.RED),l=new Jx(t,e,zi*16,zi,zi*6,zi*2),f={color:r},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(l,h)},createCapsule:o=>{const t=o.radius,e=o.height,r=(o==null?void 0:o.color)??new yt(Pt.RED),l=new qx(t,e,1,4),f={color:r},h=o!=null&&o.basicMaterial?new Vr(f):new Ls(f);return new Ai(l,h)},createDodecahedron:o=>{const t=o.radius,e=(o==null?void 0:o.color)??new yt(Pt.RED),r=new Zx(t,0),l={color:e},f=o!=null&&o.basicMaterial?new Vr(l):new Ls(l);return new Ai(r,f)},createLine(o){const t=(o==null?void 0:o.color)??new yt(Pt.RED),e=new ny({color:t,linewidth:wt.TILE_SIZE*4}),r=new AE().setFromPoints([o.pos1.clone(),o.pos2.clone()]);return new x2(r,e)}},xp=class xp extends aa{constructor(e){const r=(e==null?void 0:e.size)??1,l=wt.TILE_SIZE/32,f=se.createSphere({radius:l*r,color:(e==null?void 0:e.color)??new yt(Pt.LIGHT_GREEN),basicMaterial:!0,transparent:{value:1}});super({mesh:f});Rt(this,"ttl",0);Rt(this,"velocity");Rt(this,"gravity");Rt(this,"shouldFadeout");this.mesh.position.set(e.position.x,e.position.y,e.position.z);const h=(e==null?void 0:e.force)??1,p=.002;this.velocity=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(h*p),this.gravity=(e==null?void 0:e.gravity)??1e-5,this.shouldFadeout=!!e.shouldFadeout}update(e,r,l){super.update(e,r,l),this.velocity.y-=this.gravity*r,this.mesh.position.add(this.velocity.clone().multiplyScalar(r)),this.ttl+=r,this.shouldFadeout&&(this.mesh.material.opacity=1-this.ttl/xp.TTL),this.ttl>xp.TTL&&this.kill()}};Rt(xp,"TTL",800);let U_=xp;const bx={createExplosion(o,t,e){const{colors:r}=e,l=e.amount??10,f=Array.isArray(r)?r:[r];for(let h=0;h<l;h++){const p=new U_({position:t.clone(),color:f[Math.floor(Math.random()*f.length)],force:e.force,size:e.size});o.addComponent(p)}},createSingleSmokeParticle(o,t,e){const{colors:r}=e,l=Array.isArray(r)?r:[r],f=l[Math.floor(Math.random()*l.length)],h=new U_({position:t.clone(),color:f,force:e.force,size:e.size,gravity:e.gravity,shouldFadeout:!0});o.addComponent(h)}},yp=class yp extends Fs{constructor(e){const r=new ty(new yt(Pt.ORANGE),yp.INTENSITY),l=se.createTorusKnotBlob({radius:e.size/8,color:new yt(Pt.ORANGE),basicMaterial:!0}),f=new Kn({center:e.position,parts:[{mesh:se.createBox({width:e.size,height:e.size,depth:e.size,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,0,0)},{mesh:r,offset:new I(0,e.size/2+e.size/2,0)},{mesh:se.createCylinder({radius:e.size/4,height:e.size/16,color:new yt(Pt.WOOD)}),offset:new I(0,e.size/2+e.size/8,0)},{mesh:l,offset:new I(0,e.size/2+e.size/4,0)}]});super({mesh:f});Rt(this,"light");Rt(this,"flame");Rt(this,"PARTICLE_TIMEOUT",50);Rt(this,"particleTimeout",0);Rt(this,"position");Rt(this,"randomAngle",Math.random()*Math.PI*2);this.light=r,this.flame=l,this.position=e.position}update(e,r,l,f){super.update(e,r,l,f),this.light.intensity=yp.INTENSITY+Math.sin(this.randomAngle+Date.now()/200),this.flame.rotation.y+=.012*r,this.flame.rotation.z=Math.sin(Date.now()/1e3),this.flame.rotation.x=Math.sin(Date.now()/1e3),this.particleTimeout+=r;const h=Math.floor(this.particleTimeout/this.PARTICLE_TIMEOUT);this.particleTimeout=this.particleTimeout%this.PARTICLE_TIMEOUT;for(let p=0;p<h;p++)bx.createSingleSmokeParticle(l,this.position.clone().add(new I(0,wt.TILE_SIZE*2/3,0)),{colors:[new yt(Pt.ORANGE),new yt(Pt.YELLOW),new yt(Pt.VOID)],size:1,force:.2,gravity:-25e-7})}};Rt(yp,"INTENSITY",5);let Ax=yp;class y2 extends Fs{constructor(t){const e=new Kn({center:t.position,parts:[{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:new yt(Pt.DARK)}),offset:new I(0,-t.size*3/8,0)},{mesh:se.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new yt(Pt.WHITE)}),offset:new I(0,0,0)},{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:new yt(Pt.DARK)}),offset:new I(0,t.size*3/8,0)}]});super({mesh:e})}}class S2 extends Fs{constructor(t){const e=t.size/2,r=t.size,l=Math.random()*Math.PI*2,f=3+Math.floor(Math.random()*3),h=g=>{const _=t.size/4,x=g*(Math.PI*2/f)+l,y=new I(Math.cos(x),Math.random()-.5,Math.sin(x)).normalize(),E=e-_/2,T=y.multiplyScalar(E);return{mesh:se.createDodecahedron({radius:_,color:new yt(Pt.DARK_GREEN)}),offset:T.clone().add(new I(0,r,0))}},p=new Kn({center:t.position,parts:[{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,t.size*3/8,0)},{mesh:se.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new yt(Pt.DIRT)}),offset:new I(0,-t.size/8,0)},{mesh:se.createTorusKnotBlob({radius:e/3,color:new yt(Pt.WOOD)}),offset:new I(0,r/2,0)},{mesh:se.createDodecahedron({radius:e,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,r,0)},...Array.from({length:f},(g,_)=>h(_))]});super({mesh:p})}}class E2 extends Fs{constructor(t){const e=t.size*(.25+Math.random()*.25),r=t.size*(3/16+Math.random()*1/16),l=5+Math.floor(Math.random()*3),f=()=>{const p=new St(Math.random()-.5,Math.random()-.5).normalize(),g=new I(p.x*t.size/3,t.size/2+r/4,p.y*t.size/3);return(Math.random()>.25?"Peeble":"Fungi")==="Peeble"?{mesh:se.createDodecahedron({radius:r/2,color:new yt(Pt.GRAY)}),offset:g.clone()}:{mesh:se.createCone({radius:r/2,height:r/2,color:new yt(Pt.BOX)}),offset:g.clone()}},h=new Kn({center:t.position.clone(),parts:[{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,t.size*3/8,0)},{mesh:se.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new yt(Pt.DIRT)}),offset:new I(0,-t.size/8,0)},{mesh:se.createCapsule({radius:r,height:e,color:new yt(Pt.GRAY)}),offset:new I(0,t.size/2+e/2,0)},...Array.from({length:l},()=>f())]});super({mesh:h})}}const wE={createTreeComposite:o=>{const{height:t}=o;return new Kn({center:o.position,parts:[{mesh:se.createCylinder({radius:wt.TILE_SIZE/8,height:t,color:new yt(Pt.WOOD)}),offset:new I(0,0,0)},{mesh:se.createCone({radius:wt.TILE_SIZE/2,height:t-wt.TILE_SIZE/2,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,t*4/16,0)},{mesh:se.createCone({radius:wt.TILE_SIZE/2,height:t-1.5*wt.TILE_SIZE/2,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,t*6/16,0)},{mesh:se.createCone({radius:wt.TILE_SIZE/2,height:t-2*wt.TILE_SIZE/2,color:new yt(Pt.WHITE)}),offset:new I(0,t*8/16,0)},{mesh:se.createCone({radius:wt.TILE_SIZE/2,height:t-2.5*wt.TILE_SIZE/2,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,t*8/16,0)}]})}};class M2 extends aa{constructor(t){const e=new yt(Pt.DARK),r=new yt(Pt.WHITE),l=new Kn({center:t.position,parts:[{mesh:se.createBox({width:t.size,height:t.size/8,depth:t.size,color:e.clone()}),offset:new I(0,t.size*7/16,0)},{mesh:se.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:r.clone()}),offset:new I(t.size/2,0,t.size/2)},{mesh:se.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:r.clone()}),offset:new I(-t.size/2,0,t.size/2)},{mesh:se.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:r.clone()}),offset:new I(t.size/2,0,-t.size/2)},{mesh:se.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:r.clone()}),offset:new I(-t.size/2,0,-t.size/2)}]});super({mesh:l})}}class T2 extends aa{constructor(t){const e=()=>{const l=Math.floor(Math.random()*2)+2,f=Array.from({length:l},()=>se.createCone({radius:t.size/32,height:t.size/4,color:new yt(Pt.GREEN)})),h=2;f.forEach(_=>_.rotateOnAxis(new I(1,0,0),-Math.PI/(2*h)+Math.random()*Math.PI/h));const p=-t.size/2+Math.random()*t.size,g=-t.size/2+Math.random()*t.size;return f.map(_=>({mesh:_,offset:new I(p,t.size*19/32,g)}))},r=()=>{const l=se.createCone({radius:t.size/32,height:t.size/2,color:new yt(Pt.GREEN)}),f=se.createSphere({radius:t.size/32,color:Math.random()<.5?new yt(Pt.PINK):new yt(Pt.RED)}),h=-t.size/2+Math.random()*t.size,p=-t.size/2+Math.random()*t.size;return[{mesh:l,offset:new I(h,t.size*10/16,p)},{mesh:f,offset:new I(h,t.size*13/16,p)}]};super({mesh:new Kn({center:t.position,parts:[{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new yt(Pt.DARK_GREEN)}),offset:new I(0,t.size*3/8,0)},{mesh:se.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new yt(Pt.DIRT)}),offset:new I(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?r():[]]})})}}const O_=class O_ extends aa{constructor(){const e=new Kn({center:new I(0,0,0),parts:[]});super({mesh:e});Rt(this,"messages",[]);Rt(this,"shouldRenderNextFrame",!1);Rt(this,"addMessage",(e,r)=>{const l=r==null?void 0:r.id,f=(r==null?void 0:r.duration)??O_.DEFAULT_DURATION;this.messages.find(({id:g})=>g===l)&&(this.messages=this.messages.filter(({id:g})=>g!==l));const p=Date.now();this.messages.push({id:l??p.toString(),message:e,totalDuration:f,currentDuration:0}),this.shouldRenderNextFrame=!0})}update(e,r,l){super.update(e,r,l);let f=this.shouldRenderNextFrame;this.shouldRenderNextFrame=!1,this.messages=this.messages.filter(h=>{h.currentDuration+=r;const p=h.currentDuration>h.totalDuration;return f=f||p,!p}),f&&e.triggerRender()}};Rt(O_,"DEFAULT_DURATION",3e3);let N_=O_;class E_ extends aa{constructor(t){const e=wt.TILE_SIZE/2,r=wt.TILE_SIZE,l=e+Math.random()*r,f=se.createCone({radius:wt.TILE_SIZE*3,height:l,color:Math.random()<.5?new yt(Pt.WHITE):new yt(Pt.WHITE)});f.position.set(t.position.x,l/4,t.position.y),super({mesh:f})}}var Ov={},sp={},pp={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var b2=pp.exports,CS;function A2(){return CS||(CS=1,function(o,t){(function(){var e,r="4.17.21",l=200,f="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",h="Expected a function",p="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",_=500,x="__lodash_placeholder__",y=1,E=2,T=4,R=1,C=2,b=1,M=2,H=4,z=8,N=16,X=32,W=64,k=128,K=256,F=512,O=30,j="...",pt=800,_t=16,At=1,Tt=2,Y=3,ot=1/0,it=9007199254740991,Wt=17976931348623157e292,V=NaN,ut=4294967295,Ft=ut-1,Vt=ut>>>1,ct=[["ary",k],["bind",b],["bindKey",M],["curry",z],["curryRight",N],["flip",F],["partial",X],["partialRight",W],["rearg",K]],Dt="[object Arguments]",Bt="[object Array]",qt="[object AsyncFunction]",Kt="[object Boolean]",Le="[object Date]",Ee="[object DOMException]",xn="[object Error]",gn="[object Function]",Pe="[object GeneratorFunction]",Q="[object Map]",vi="[object Number]",Qe="[object Null]",ve="[object Object]",de="[object Promise]",Tn="[object Proxy]",ce="[object RegExp]",G="[object Set]",U="[object String]",dt="[object Symbol]",zt="[object Undefined]",Ht="[object WeakMap]",Ct="[object WeakSet]",te="[object ArrayBuffer]",Yt="[object DataView]",Zt="[object Float32Array]",qe="[object Float64Array]",Xt="[object Int8Array]",le="[object Int16Array]",pe="[object Int32Array]",xe="[object Uint8Array]",ee="[object Uint8ClampedArray]",Oe="[object Uint16Array]",we="[object Uint32Array]",bn=/\b__p \+= '';/g,et=/\b(__p \+=) '' \+/g,$t=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Et=/&(?:amp|lt|gt|quot|#39);/g,Ut=/[&<>"']/g,ae=RegExp(Et.source),ne=RegExp(Ut.source),Ue=/<%-([\s\S]+?)%>/g,On=/<%([\s\S]+?)%>/g,ei=/<%=([\s\S]+?)%>/g,cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hr=/^\w*$/,xi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ni=/[\\^$.*+?()[\]{}|]/g,wi=RegExp(ni.source),Li=/^\s+/,Hs=/\s/,ic=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,rc=/\{\n\/\* \[wrapped with (.+)\] \*/,Gs=/,? & /,Ja=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,$a=/[()=,{}\[\]\/\s]/,Ea=/\\(\\)?/g,Ma=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ts=/\w*$/,es=/^[-+]0x[0-9a-f]+$/i,ri=/^0b[01]+$/i,ac=/^\[object .+?Constructor\]$/,sc=/^0o[0-7]+$/i,Ta=/^(?:0|[1-9]\d*)$/,P=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nt=/($^)/,gt=/['\n\r\u2028\u2029\\]/g,vt="\\ud800-\\udfff",at="\\u0300-\\u036f",kt="\\ufe20-\\ufe2f",Qt="\\u20d0-\\u20ff",Jt=at+kt+Qt,oe="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",ye="\\xac\\xb1\\xd7\\xf7",me="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ye="\\u2000-\\u206f",fn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vn="A-Z\\xc0-\\xd6\\xd8-\\xde",je="\\ufe0e\\ufe0f",Je=ye+me+Ye+fn,ge="['’]",Qn="["+vt+"]",rn="["+Je+"]",oi="["+Jt+"]",ba="\\d+",In="["+oe+"]",sa="["+be+"]",An="[^"+vt+Je+ba+oe+be+Vn+"]",yi="\\ud83c[\\udffb-\\udfff]",li="(?:"+oi+"|"+yi+")",ui="[^"+vt+"]",ci="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="["+Vn+"]",ph="\\u200d",mh="(?:"+sa+"|"+An+")",gh="(?:"+Yi+"|"+An+")",Cp="(?:"+ge+"(?:d|ll|m|re|s|t|ve))?",Dp="(?:"+ge+"(?:D|LL|M|RE|S|T|VE))?",Ll=li+"?",oc="["+je+"]?",_h="(?:"+ph+"(?:"+[ui,ci,wr].join("|")+")"+oc+Ll+")*",Co="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Do="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vh=oc+Ll+_h,xh="(?:"+[In,ci,wr].join("|")+")"+vh,Lp="(?:"+[ui+oi+"?",oi,ci,wr,Qn].join("|")+")",Ul=RegExp(ge,"g"),Aa=RegExp(oi,"g"),Nl=RegExp(yi+"(?="+yi+")|"+Lp+vh,"g"),Ol=RegExp([Yi+"?"+sa+"+"+Cp+"(?="+[rn,Yi,"$"].join("|")+")",gh+"+"+Dp+"(?="+[rn,Yi+mh,"$"].join("|")+")",Yi+"?"+mh+"+"+Cp,Yi+"+"+Dp,Do,Co,ba,xh].join("|"),"g"),ns=RegExp("["+ph+vt+Jt+je+"]"),yh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lc=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Up=-1,wn={};wn[Zt]=wn[qe]=wn[Xt]=wn[le]=wn[pe]=wn[xe]=wn[ee]=wn[Oe]=wn[we]=!0,wn[Dt]=wn[Bt]=wn[te]=wn[Kt]=wn[Yt]=wn[Le]=wn[xn]=wn[gn]=wn[Q]=wn[vi]=wn[ve]=wn[ce]=wn[G]=wn[U]=wn[Ht]=!1;var yn={};yn[Dt]=yn[Bt]=yn[te]=yn[Yt]=yn[Kt]=yn[Le]=yn[Zt]=yn[qe]=yn[Xt]=yn[le]=yn[pe]=yn[Q]=yn[vi]=yn[ve]=yn[ce]=yn[G]=yn[U]=yn[dt]=yn[xe]=yn[ee]=yn[Oe]=yn[we]=!0,yn[xn]=yn[gn]=yn[Ht]=!1;var Np={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Zi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vs={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},uc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Il=parseFloat,V_=parseInt,cc=typeof Xg=="object"&&Xg&&Xg.Object===Object&&Xg,Sh=typeof self=="object"&&self&&self.Object===Object&&self,ii=cc||Sh||Function("return this")(),Lo=t&&!t.nodeType&&t,is=Lo&&!0&&o&&!o.nodeType&&o,Op=is&&is.exports===Lo,Eh=Op&&cc.process,Rr=function(){try{var tt=is&&is.require&&is.require("util").types;return tt||Eh&&Eh.binding&&Eh.binding("util")}catch{}}(),fc=Rr&&Rr.isArrayBuffer,Ip=Rr&&Rr.isDate,Pp=Rr&&Rr.isMap,zp=Rr&&Rr.isRegExp,Bp=Rr&&Rr.isSet,Fp=Rr&&Rr.isTypedArray;function Ki(tt,Mt,xt){switch(xt.length){case 0:return tt.call(Mt);case 1:return tt.call(Mt,xt[0]);case 2:return tt.call(Mt,xt[0],xt[1]);case 3:return tt.call(Mt,xt[0],xt[1],xt[2])}return tt.apply(Mt,xt)}function W_(tt,Mt,xt,ie){for(var Ae=-1,sn=tt==null?0:tt.length;++Ae<sn;){var ai=tt[Ae];Mt(ie,ai,xt(ai),tt)}return ie}function Cr(tt,Mt){for(var xt=-1,ie=tt==null?0:tt.length;++xt<ie&&Mt(tt[xt],xt,tt)!==!1;);return tt}function k_(tt,Mt){for(var xt=tt==null?0:tt.length;xt--&&Mt(tt[xt],xt,tt)!==!1;);return tt}function Hp(tt,Mt){for(var xt=-1,ie=tt==null?0:tt.length;++xt<ie;)if(!Mt(tt[xt],xt,tt))return!1;return!0}function oa(tt,Mt){for(var xt=-1,ie=tt==null?0:tt.length,Ae=0,sn=[];++xt<ie;){var ai=tt[xt];Mt(ai,xt,tt)&&(sn[Ae++]=ai)}return sn}function hc(tt,Mt){var xt=tt==null?0:tt.length;return!!xt&&Uo(tt,Mt,0)>-1}function Mh(tt,Mt,xt){for(var ie=-1,Ae=tt==null?0:tt.length;++ie<Ae;)if(xt(Mt,tt[ie]))return!0;return!1}function Wn(tt,Mt){for(var xt=-1,ie=tt==null?0:tt.length,Ae=Array(ie);++xt<ie;)Ae[xt]=Mt(tt[xt],xt,tt);return Ae}function wa(tt,Mt){for(var xt=-1,ie=Mt.length,Ae=tt.length;++xt<ie;)tt[Ae+xt]=Mt[xt];return tt}function Th(tt,Mt,xt,ie){var Ae=-1,sn=tt==null?0:tt.length;for(ie&&sn&&(xt=tt[++Ae]);++Ae<sn;)xt=Mt(xt,tt[Ae],Ae,tt);return xt}function X_(tt,Mt,xt,ie){var Ae=tt==null?0:tt.length;for(ie&&Ae&&(xt=tt[--Ae]);Ae--;)xt=Mt(xt,tt[Ae],Ae,tt);return xt}function bh(tt,Mt){for(var xt=-1,ie=tt==null?0:tt.length;++xt<ie;)if(Mt(tt[xt],xt,tt))return!0;return!1}var q_=pc("length");function Y_(tt){return tt.split("")}function Z_(tt){return tt.match(Ja)||[]}function Gp(tt,Mt,xt){var ie;return xt(tt,function(Ae,sn,ai){if(Mt(Ae,sn,ai))return ie=sn,!1}),ie}function dc(tt,Mt,xt,ie){for(var Ae=tt.length,sn=xt+(ie?1:-1);ie?sn--:++sn<Ae;)if(Mt(tt[sn],sn,tt))return sn;return-1}function Uo(tt,Mt,xt){return Mt===Mt?J_(tt,Mt,xt):dc(tt,No,xt)}function Ah(tt,Mt,xt,ie){for(var Ae=xt-1,sn=tt.length;++Ae<sn;)if(ie(tt[Ae],Mt))return Ae;return-1}function No(tt){return tt!==tt}function Vp(tt,Mt){var xt=tt==null?0:tt.length;return xt?gc(tt,Mt)/xt:V}function pc(tt){return function(Mt){return Mt==null?e:Mt[tt]}}function mc(tt){return function(Mt){return tt==null?e:tt[Mt]}}function wh(tt,Mt,xt,ie,Ae){return Ae(tt,function(sn,ai,on){xt=ie?(ie=!1,sn):Mt(xt,sn,ai,on)}),xt}function Wp(tt,Mt){var xt=tt.length;for(tt.sort(Mt);xt--;)tt[xt]=tt[xt].value;return tt}function gc(tt,Mt){for(var xt,ie=-1,Ae=tt.length;++ie<Ae;){var sn=Mt(tt[ie]);sn!==e&&(xt=xt===e?sn:xt+sn)}return xt}function rs(tt,Mt){for(var xt=-1,ie=Array(tt);++xt<tt;)ie[xt]=Mt(xt);return ie}function K_(tt,Mt){return Wn(Mt,function(xt){return[xt,tt[xt]]})}function kp(tt){return tt&&tt.slice(0,Ch(tt)+1).replace(Li,"")}function dr(tt){return function(Mt){return tt(Mt)}}function _c(tt,Mt){return Wn(Mt,function(xt){return tt[xt]})}function Oo(tt,Mt){return tt.has(Mt)}function Io(tt,Mt){for(var xt=-1,ie=tt.length;++xt<ie&&Uo(Mt,tt[xt],0)>-1;);return xt}function Po(tt,Mt){for(var xt=tt.length;xt--&&Uo(Mt,tt[xt],0)>-1;);return xt}function Q_(tt,Mt){for(var xt=tt.length,ie=0;xt--;)tt[xt]===Mt&&++ie;return ie}var vc=mc(Np),Xp=mc(Zi);function qp(tt){return"\\"+uc[tt]}function Rh(tt,Mt){return tt==null?e:tt[Mt]}function as(tt){return ns.test(tt)}function Yp(tt){return yh.test(tt)}function Zp(tt){for(var Mt,xt=[];!(Mt=tt.next()).done;)xt.push(Mt.value);return xt}function xc(tt){var Mt=-1,xt=Array(tt.size);return tt.forEach(function(ie,Ae){xt[++Mt]=[Ae,ie]}),xt}function Kp(tt,Mt){return function(xt){return tt(Mt(xt))}}function ss(tt,Mt){for(var xt=-1,ie=tt.length,Ae=0,sn=[];++xt<ie;){var ai=tt[xt];(ai===Mt||ai===x)&&(tt[xt]=x,sn[Ae++]=xt)}return sn}function yc(tt){var Mt=-1,xt=Array(tt.size);return tt.forEach(function(ie){xt[++Mt]=ie}),xt}function j_(tt){var Mt=-1,xt=Array(tt.size);return tt.forEach(function(ie){xt[++Mt]=[ie,ie]}),xt}function J_(tt,Mt,xt){for(var ie=xt-1,Ae=tt.length;++ie<Ae;)if(tt[ie]===Mt)return ie;return-1}function pr(tt,Mt,xt){for(var ie=xt+1;ie--;)if(tt[ie]===Mt)return ie;return ie}function la(tt){return as(tt)?jp(tt):q_(tt)}function Dr(tt){return as(tt)?Dh(tt):Y_(tt)}function Ch(tt){for(var Mt=tt.length;Mt--&&Hs.test(tt.charAt(Mt)););return Mt}var Qp=mc(Vs);function jp(tt){for(var Mt=Nl.lastIndex=0;Nl.test(tt);)++Mt;return Mt}function Dh(tt){return tt.match(Nl)||[]}function $_(tt){return tt.match(Ol)||[]}var zo=function tt(Mt){Mt=Mt==null?ii:os.defaults(ii.Object(),Mt,os.pick(ii,lc));var xt=Mt.Array,ie=Mt.Date,Ae=Mt.Error,sn=Mt.Function,ai=Mt.Math,on=Mt.Object,Sc=Mt.RegExp,Jp=Mt.String,mr=Mt.TypeError,Ec=xt.prototype,t0=sn.prototype,Bo=on.prototype,Pl=Mt["__core-js_shared__"],zl=t0.toString,hn=Bo.hasOwnProperty,Xr=0,Lh=function(){var s=/[^.]+$/.exec(Pl&&Pl.keys&&Pl.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Bi=Bo.toString,Lr=zl.call(on),Fo=ii._,Uh=Sc("^"+zl.call(hn).replace(ni,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ws=Op?Mt.Buffer:e,qr=Mt.Symbol,Ho=Mt.Uint8Array,ks=Ws?Ws.allocUnsafe:e,Bl=Kp(on.getPrototypeOf,on),Fl=on.create,Xs=Bo.propertyIsEnumerable,Mc=Ec.splice,Qi=qr?qr.isConcatSpreadable:e,qs=qr?qr.iterator:e,Fi=qr?qr.toStringTag:e,Hl=function(){try{var s=gs(on,"defineProperty");return s({},"",{}),s}catch{}}(),Tc=Mt.clearTimeout!==ii.clearTimeout&&Mt.clearTimeout,Ys=ie&&ie.now!==ii.Date.now&&ie.now,Nh=Mt.setTimeout!==ii.setTimeout&&Mt.setTimeout,Go=ai.ceil,Ra=ai.floor,ls=on.getOwnPropertySymbols,bc=Ws?Ws.isBuffer:e,Gl=Mt.isFinite,Ur=Ec.join,Nr=Kp(on.keys,on),Fn=ai.max,kn=ai.min,Ca=ie.now,Zs=Mt.parseInt,Oh=ai.random,Ih=Ec.reverse,Vl=gs(Mt,"DataView"),fi=gs(Mt,"Map"),Xn=gs(Mt,"Promise"),$e=gs(Mt,"Set"),Yr=gs(Mt,"WeakMap"),ji=gs(on,"create"),Vo=Yr&&new Yr,Or={},$p=Ba(Vl),tm=Ba(fi),Wl=Ba(Xn),kl=Ba($e),em=Ba(Yr),us=qr?qr.prototype:e,Ks=us?us.valueOf:e,cs=us?us.toString:e;function D(s){if(Zn(s)&&!De(s)&&!(s instanceof Ge)){if(s instanceof Ji)return s;if(hn.call(s,"__wrapped__"))return di(s)}return new Ji(s)}var gr=function(){function s(){}return function(u){if(!Yn(u))return{};if(Fl)return Fl(u);s.prototype=u;var m=new s;return s.prototype=e,m}}();function Ir(){}function Ji(s,u){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!u,this.__index__=0,this.__values__=e}D.templateSettings={escape:Ue,evaluate:On,interpolate:ei,variable:"",imports:{_:D}},D.prototype=Ir.prototype,D.prototype.constructor=D,Ji.prototype=gr(Ir.prototype),Ji.prototype.constructor=Ji;function Ge(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ut,this.__views__=[]}function Xl(){var s=new Ge(this.__wrapped__);return s.__actions__=hi(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=hi(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=hi(this.__views__),s}function Ac(){if(this.__filtered__){var s=new Ge(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function Qs(){var s=this.__wrapped__.value(),u=this.__dir__,m=De(s),S=u<0,w=m?s.length:0,B=Om(0,w,this.__views__),q=B.start,J=B.end,st=J-q,Nt=S?J:q-1,It=this.__iteratees__,Gt=It.length,re=0,fe=kn(st,this.__takeCount__);if(!m||!S&&w==st&&fe==st)return ym(s,this.__actions__);var Re=[];t:for(;st--&&re<fe;){Nt+=u;for(var We=-1,Ce=s[Nt];++We<Gt;){var nn=It[We],un=nn.iteratee,ta=nn.type,Mr=un(Ce);if(ta==Tt)Ce=Mr;else if(!Mr){if(ta==At)continue t;break t}}Re[re++]=Ce}return Re}Ge.prototype=gr(Ir.prototype),Ge.prototype.constructor=Ge;function jn(s){var u=-1,m=s==null?0:s.length;for(this.clear();++u<m;){var S=s[u];this.set(S[0],S[1])}}function wc(){this.__data__=ji?ji(null):{},this.size=0}function nm(s){var u=this.has(s)&&delete this.__data__[s];return this.size-=u?1:0,u}function e0(s){var u=this.__data__;if(ji){var m=u[s];return m===g?e:m}return hn.call(u,s)?u[s]:e}function n0(s){var u=this.__data__;return ji?u[s]!==e:hn.call(u,s)}function i0(s,u){var m=this.__data__;return this.size+=this.has(s)?0:1,m[s]=ji&&u===e?g:u,this}jn.prototype.clear=wc,jn.prototype.delete=nm,jn.prototype.get=e0,jn.prototype.has=n0,jn.prototype.set=i0;function Dn(s){var u=-1,m=s==null?0:s.length;for(this.clear();++u<m;){var S=s[u];this.set(S[0],S[1])}}function Ph(){this.__data__=[],this.size=0}function ql(s){var u=this.__data__,m=Xo(u,s);if(m<0)return!1;var S=u.length-1;return m==S?u.pop():Mc.call(u,m,1),--this.size,!0}function Yl(s){var u=this.__data__,m=Xo(u,s);return m<0?e:u[m][1]}function zh(s){return Xo(this.__data__,s)>-1}function Wo(s,u){var m=this.__data__,S=Xo(m,s);return S<0?(++this.size,m.push([s,u])):m[S][1]=u,this}Dn.prototype.clear=Ph,Dn.prototype.delete=ql,Dn.prototype.get=Yl,Dn.prototype.has=zh,Dn.prototype.set=Wo;function $i(s){var u=-1,m=s==null?0:s.length;for(this.clear();++u<m;){var S=s[u];this.set(S[0],S[1])}}function r0(){this.size=0,this.__data__={hash:new jn,map:new(fi||Dn),string:new jn}}function im(s){var u=jo(this,s).delete(s);return this.size-=u?1:0,u}function a0(s){return jo(this,s).get(s)}function rm(s){return jo(this,s).has(s)}function js(s,u){var m=jo(this,s),S=m.size;return m.set(s,u),this.size+=m.size==S?0:1,this}$i.prototype.clear=r0,$i.prototype.delete=im,$i.prototype.get=a0,$i.prototype.has=rm,$i.prototype.set=js;function Da(s){var u=-1,m=s==null?0:s.length;for(this.__data__=new $i;++u<m;)this.add(s[u])}function Rc(s){return this.__data__.set(s,g),this}function am(s){return this.__data__.has(s)}Da.prototype.add=Da.prototype.push=Rc,Da.prototype.has=am;function Hi(s){var u=this.__data__=new Dn(s);this.size=u.size}function sm(){this.__data__=new Dn,this.size=0}function Cc(s){var u=this.__data__,m=u.delete(s);return this.size=u.size,m}function Bh(s){return this.__data__.get(s)}function om(s){return this.__data__.has(s)}function Dc(s,u){var m=this.__data__;if(m instanceof Dn){var S=m.__data__;if(!fi||S.length<l-1)return S.push([s,u]),this.size=++m.size,this;m=this.__data__=new $i(S)}return m.set(s,u),this.size=m.size,this}Hi.prototype.clear=sm,Hi.prototype.delete=Cc,Hi.prototype.get=Bh,Hi.prototype.has=om,Hi.prototype.set=Dc;function Fh(s,u){var m=De(s),S=!m&&Va(s),w=!m&&!S&&As(s),B=!m&&!S&&!w&&fl(s),q=m||S||w||B,J=q?rs(s.length,Jp):[],st=J.length;for(var Nt in s)(u||hn.call(s,Nt))&&!(q&&(Nt=="length"||w&&(Nt=="offset"||Nt=="parent")||B&&(Nt=="buffer"||Nt=="byteLength"||Nt=="byteOffset")||jr(Nt,st)))&&J.push(Nt);return J}function ko(s){var u=s.length;return u?s[Hc(0,u-1)]:e}function lm(s,u){return yu(hi(s),Kr(u,0,s.length))}function um(s){return yu(hi(s))}function ua(s,u,m){(m!==e&&!sr(s[u],m)||m===e&&!(u in s))&&Zr(s,u,m)}function Js(s,u,m){var S=s[u];(!(hn.call(s,u)&&sr(S,m))||m===e&&!(u in s))&&Zr(s,u,m)}function Xo(s,u){for(var m=s.length;m--;)if(sr(s[m][0],u))return m;return-1}function fs(s,u,m,S){return Ua(s,function(w,B,q){u(S,w,m(w),q)}),S}function La(s,u){return s&&nr(u,gi(u),s)}function Zl(s,u){return s&&nr(u,Mi(u),s)}function Zr(s,u,m){u=="__proto__"&&Hl?Hl(s,u,{configurable:!0,enumerable:!0,value:m,writable:!0}):s[u]=m}function Kl(s,u){for(var m=-1,S=u.length,w=xt(S),B=s==null;++m<S;)w[m]=B?e:Ou(s,u[m]);return w}function Kr(s,u,m){return s===s&&(m!==e&&(s=s<=m?s:m),u!==e&&(s=s>=u?s:u)),s}function Ui(s,u,m,S,w,B){var q,J=u&y,st=u&E,Nt=u&T;if(m&&(q=w?m(s,S,w,B):m(s)),q!==e)return q;if(!Yn(s))return s;var It=De(s);if(It){if(q=fd(s),!J)return hi(s,q)}else{var Gt=Ei(s),re=Gt==gn||Gt==Pe;if(As(s))return id(s,J);if(Gt==ve||Gt==Dt||re&&!w){if(q=st||re?{}:hd(s),!J)return st?lu(s,Zl(q,s)):qc(s,La(q,s))}else{if(!yn[Gt])return w?s:{};q=dd(s,Gt,J)}}B||(B=new Hi);var fe=B.get(s);if(fe)return fe;B.set(s,q),Ag(s)?s.forEach(function(Ce){q.add(Ui(Ce,u,m,Ce,s,B))}):vf(s)&&s.forEach(function(Ce,nn){q.set(nn,Ui(Ce,u,m,nn,s,B))});var Re=Nt?st?Qc:Kc:st?Mi:gi,We=It?e:Re(s);return Cr(We||s,function(Ce,nn){We&&(nn=Ce,Ce=s[nn]),Js(q,nn,Ui(Ce,u,m,nn,s,B))}),q}function cm(s){var u=gi(s);return function(m){return Hh(m,s,u)}}function Hh(s,u,m){var S=m.length;if(s==null)return!S;for(s=on(s);S--;){var w=m[S],B=u[w],q=s[w];if(q===e&&!(w in s)||!B(q))return!1}return!0}function $s(s,u,m){if(typeof s!="function")throw new mr(h);return $o(function(){s.apply(e,m)},u)}function hs(s,u,m,S){var w=-1,B=hc,q=!0,J=s.length,st=[],Nt=u.length;if(!J)return st;m&&(u=Wn(u,dr(m))),S?(B=Mh,q=!1):u.length>=l&&(B=Oo,q=!1,u=new Da(u));t:for(;++w<J;){var It=s[w],Gt=m==null?It:m(It);if(It=S||It!==0?It:0,q&&Gt===Gt){for(var re=Nt;re--;)if(u[re]===Gt)continue t;st.push(It)}else B(u,Gt,S)||st.push(It)}return st}var Ua=od(Ni),Lc=od(Yo,!0);function Gh(s,u){var m=!0;return Ua(s,function(S,w,B){return m=!!u(S,w,B),m}),m}function Qr(s,u,m){for(var S=-1,w=s.length;++S<w;){var B=s[S],q=u(B);if(q!=null&&(J===e?q===q&&!Wi(q):m(q,J)))var J=q,st=B}return st}function ze(s,u,m,S){var w=s.length;for(m=Ne(m),m<0&&(m=-m>w?0:w+m),S=S===e||S>w?w:Ne(S),S<0&&(S+=w),S=m>S?0:va(S);m<S;)s[m++]=u;return s}function Sn(s,u){var m=[];return Ua(s,function(S,w,B){u(S,w,B)&&m.push(S)}),m}function tn(s,u,m,S,w){var B=-1,q=s.length;for(m||(m=Pa),w||(w=[]);++B<q;){var J=s[B];u>0&&m(J)?u>1?tn(J,u-1,m,S,w):wa(w,J):S||(w[w.length]=J)}return w}var qo=so(),to=so(!0);function Ni(s,u){return s&&qo(s,u,gi)}function Yo(s,u){return s&&to(s,u,gi)}function ds(s,u){return oa(u,function(m){return Jr(s[m])})}function Pr(s,u){u=Oa(u,s);for(var m=0,S=u.length;s!=null&&m<S;)s=s[_n(u[m++])];return m&&m==S?s:e}function fm(s,u,m){var S=u(s);return De(s)?S:wa(S,m(s))}function en(s){return s==null?s===e?zt:Qe:Fi&&Fi in on(s)?Nm(s):Fm(s)}function Ql(s,u){return s>u}function Vh(s,u){return s!=null&&hn.call(s,u)}function hm(s,u){return s!=null&&u in on(s)}function dm(s,u,m){return s>=kn(u,m)&&s<Fn(u,m)}function Wh(s,u,m){for(var S=m?Mh:hc,w=s[0].length,B=s.length,q=B,J=xt(B),st=1/0,Nt=[];q--;){var It=s[q];q&&u&&(It=Wn(It,dr(u))),st=kn(It.length,st),J[q]=!m&&(u||w>=120&&It.length>=120)?new Da(q&&It):e}It=s[0];var Gt=-1,re=J[0];t:for(;++Gt<w&&Nt.length<st;){var fe=It[Gt],Re=u?u(fe):fe;if(fe=m||fe!==0?fe:0,!(re?Oo(re,Re):S(Nt,Re,m))){for(q=B;--q;){var We=J[q];if(!(We?Oo(We,Re):S(s[q],Re,m)))continue t}re&&re.push(Re),Nt.push(fe)}}return Nt}function kh(s,u,m,S){return Ni(s,function(w,B,q){u(S,m(w),B,q)}),S}function eo(s,u,m){u=Oa(u,s),s=Jo(s,u);var S=s==null?s:s[_n(Oi(u))];return S==null?e:Ki(S,s,m)}function Uc(s){return Zn(s)&&en(s)==Dt}function tr(s){return Zn(s)&&en(s)==te}function si(s){return Zn(s)&&en(s)==Le}function no(s,u,m,S,w){return s===u?!0:s==null||u==null||!Zn(s)&&!Zn(u)?s!==s&&u!==u:jl(s,u,m,S,no,w)}function jl(s,u,m,S,w,B){var q=De(s),J=De(u),st=q?Bt:Ei(s),Nt=J?Bt:Ei(u);st=st==Dt?ve:st,Nt=Nt==Dt?ve:Nt;var It=st==ve,Gt=Nt==ve,re=st==Nt;if(re&&As(s)){if(!As(u))return!1;q=!0,It=!1}if(re&&!It)return B||(B=new Hi),q||fl(s)?Lm(s,u,m,S,w,B):Um(s,u,st,m,S,w,B);if(!(m&R)){var fe=It&&hn.call(s,"__wrapped__"),Re=Gt&&hn.call(u,"__wrapped__");if(fe||Re){var We=fe?s.value():s,Ce=Re?u.value():u;return B||(B=new Hi),w(We,Ce,m,S,B)}}return re?(B||(B=new Hi),Si(s,u,m,S,w,B)):!1}function Nc(s){return Zn(s)&&Ei(s)==Q}function Jl(s,u,m,S){var w=m.length,B=w,q=!S;if(s==null)return!B;for(s=on(s);w--;){var J=m[w];if(q&&J[2]?J[1]!==s[J[0]]:!(J[0]in s))return!1}for(;++w<B;){J=m[w];var st=J[0],Nt=s[st],It=J[1];if(q&&J[2]){if(Nt===e&&!(st in s))return!1}else{var Gt=new Hi;if(S)var re=S(Nt,It,st,s,u,Gt);if(!(re===e?no(It,Nt,R|C,S,Gt):re))return!1}}return!0}function ca(s){if(!Yn(s)||nf(s))return!1;var u=Jr(s)?Uh:ac;return u.test(Ba(s))}function Oc(s){return Zn(s)&&en(s)==ce}function Xh(s){return Zn(s)&&Ei(s)==G}function qh(s){return Zn(s)&&fo(s.length)&&!!wn[en(s)]}function Yh(s){return typeof s=="function"?s:s==null?ht:typeof s=="object"?De(s)?zc(s[0],s[1]):Kh(s):ln(s)}function Ic(s){if(!Ln(s))return Nr(s);var u=[];for(var m in on(s))hn.call(s,m)&&m!="constructor"&&u.push(m);return u}function pm(s){if(!Yn(s))return _s(s);var u=Ln(s),m=[];for(var S in s)S=="constructor"&&(u||!hn.call(s,S))||m.push(S);return m}function Pc(s,u){return s<u}function Zh(s,u){var m=-1,S=pi(s)?xt(s.length):[];return Ua(s,function(w,B,q){S[++m]=u(w,B,q)}),S}function Kh(s){var u=Jc(s);return u.length==1&&u[0][2]?zm(u[0][0],u[0][1]):function(m){return m===s||Jl(m,s,u)}}function zc(s,u){return tf(s)&&Pm(u)?zm(_n(s),u):function(m){var S=Ou(m,s);return S===e&&S===u?ml(m,s):no(u,S,R|C)}}function $l(s,u,m,S,w){s!==u&&qo(u,function(B,q){if(w||(w=new Hi),Yn(B))s0(s,u,q,m,$l,S,w);else{var J=S?S(rf(s,q),B,q+"",s,u,w):e;J===e&&(J=B),ua(s,q,J)}},Mi)}function s0(s,u,m,S,w,B,q){var J=rf(s,m),st=rf(u,m),Nt=q.get(st);if(Nt){ua(s,m,Nt);return}var It=B?B(J,st,m+"",s,u,q):e,Gt=It===e;if(Gt){var re=De(st),fe=!re&&As(st),Re=!re&&!fe&&fl(st);It=st,re||fe||Re?De(J)?It=J:ti(J)?It=hi(J):fe?(Gt=!1,It=id(st,!0)):Re?(Gt=!1,It=ad(st,!0)):It=[]:Hr(st)||Va(st)?(It=J,Va(J)?It=Cg(J):(!Yn(J)||Jr(J))&&(It=hd(st))):Gt=!1}Gt&&(q.set(st,It),w(It,st,S,B,q),q.delete(st)),ua(s,m,It)}function Qh(s,u){var m=s.length;if(m)return u+=u<0?m:0,jr(u,m)?s[u]:e}function jh(s,u,m){u.length?u=Wn(u,function(B){return De(B)?function(q){return Pr(q,B.length===1?B[0]:B)}:B}):u=[ht];var S=-1;u=Wn(u,dr(_e()));var w=Zh(s,function(B,q,J){var st=Wn(u,function(Nt){return Nt(B)});return{criteria:st,index:++S,value:B}});return Wp(w,function(B,q){return Tm(B,q,m)})}function mm(s,u){return Bc(s,u,function(m,S){return ml(s,S)})}function Bc(s,u,m){for(var S=-1,w=u.length,B={};++S<w;){var q=u[S],J=Pr(s,q);m(J,q)&&Ko(B,Oa(q,s),J)}return B}function gm(s){return function(u){return Pr(u,s)}}function Fc(s,u,m,S){var w=S?Ah:Uo,B=-1,q=u.length,J=s;for(s===u&&(u=hi(u)),m&&(J=Wn(s,dr(m)));++B<q;)for(var st=0,Nt=u[B],It=m?m(Nt):Nt;(st=w(J,It,st,S))>-1;)J!==s&&Mc.call(J,st,1),Mc.call(s,st,1);return s}function Jh(s,u){for(var m=s?u.length:0,S=m-1;m--;){var w=u[m];if(m==S||w!==B){var B=w;jr(w)?Mc.call(s,w,1):iu(s,w)}}return s}function Hc(s,u){return s+Ra(Oh()*(u-s+1))}function _m(s,u,m,S){for(var w=-1,B=Fn(Go((u-s)/(m||1)),0),q=xt(B);B--;)q[S?B:++w]=s,s+=m;return q}function $h(s,u){var m="";if(!s||u<1||u>it)return m;do u%2&&(m+=s),u=Ra(u/2),u&&(s+=s);while(u);return m}function Ie(s,u){return vu(pd(s,u,ht),s+"")}function Zo(s){return ko(_l(s))}function Gc(s,u){var m=_l(s);return yu(m,Kr(u,0,m.length))}function Ko(s,u,m,S){if(!Yn(s))return s;u=Oa(u,s);for(var w=-1,B=u.length,q=B-1,J=s;J!=null&&++w<B;){var st=_n(u[w]),Nt=m;if(st==="__proto__"||st==="constructor"||st==="prototype")return s;if(w!=q){var It=J[st];Nt=S?S(It,st,J):e,Nt===e&&(Nt=Yn(It)?It:jr(u[w+1])?[]:{})}Js(J,st,Nt),J=J[st]}return s}var tu=Vo?function(s,u){return Vo.set(s,u),s}:ht,eu=Hl?function(s,u){return Hl(s,"toString",{configurable:!0,enumerable:!1,value:ft(u),writable:!0})}:ht;function vm(s){return yu(_l(s))}function _r(s,u,m){var S=-1,w=s.length;u<0&&(u=-u>w?0:w+u),m=m>w?w:m,m<0&&(m+=w),w=u>m?0:m-u>>>0,u>>>=0;for(var B=xt(w);++S<w;)B[S]=s[S+u];return B}function xm(s,u){var m;return Ua(s,function(S,w,B){return m=u(S,w,B),!m}),!!m}function nu(s,u,m){var S=0,w=s==null?S:s.length;if(typeof u=="number"&&u===u&&w<=Vt){for(;S<w;){var B=S+w>>>1,q=s[B];q!==null&&!Wi(q)&&(m?q<=u:q<u)?S=B+1:w=B}return w}return Vc(s,u,ht,m)}function Vc(s,u,m,S){var w=0,B=s==null?0:s.length;if(B===0)return 0;u=m(u);for(var q=u!==u,J=u===null,st=Wi(u),Nt=u===e;w<B;){var It=Ra((w+B)/2),Gt=m(s[It]),re=Gt!==e,fe=Gt===null,Re=Gt===Gt,We=Wi(Gt);if(q)var Ce=S||Re;else Nt?Ce=Re&&(S||re):J?Ce=Re&&re&&(S||!fe):st?Ce=Re&&re&&!fe&&(S||!We):fe||We?Ce=!1:Ce=S?Gt<=u:Gt<u;Ce?w=It+1:B=It}return kn(B,Ft)}function td(s,u){for(var m=-1,S=s.length,w=0,B=[];++m<S;){var q=s[m],J=u?u(q):q;if(!m||!sr(J,st)){var st=J;B[w++]=q===0?0:q}}return B}function Wc(s){return typeof s=="number"?s:Wi(s)?V:+s}function er(s){if(typeof s=="string")return s;if(De(s))return Wn(s,er)+"";if(Wi(s))return cs?cs.call(s):"";var u=s+"";return u=="0"&&1/s==-1/0?"-0":u}function Na(s,u,m){var S=-1,w=hc,B=s.length,q=!0,J=[],st=J;if(m)q=!1,w=Mh;else if(B>=l){var Nt=u?null:Cm(s);if(Nt)return yc(Nt);q=!1,w=Oo,st=new Da}else st=u?[]:J;t:for(;++S<B;){var It=s[S],Gt=u?u(It):It;if(It=m||It!==0?It:0,q&&Gt===Gt){for(var re=st.length;re--;)if(st[re]===Gt)continue t;u&&st.push(Gt),J.push(It)}else w(st,Gt,m)||(st!==J&&st.push(Gt),J.push(It))}return J}function iu(s,u){return u=Oa(u,s),s=Jo(s,u),s==null||delete s[_n(Oi(u))]}function ed(s,u,m,S){return Ko(s,u,m(Pr(s,u)),S)}function ru(s,u,m,S){for(var w=s.length,B=S?w:-1;(S?B--:++B<w)&&u(s[B],B,s););return m?_r(s,S?0:B,S?B+1:w):_r(s,S?B+1:0,S?w:B)}function ym(s,u){var m=s;return m instanceof Ge&&(m=m.value()),Th(u,function(S,w){return w.func.apply(w.thisArg,wa([S],w.args))},m)}function au(s,u,m){var S=s.length;if(S<2)return S?Na(s[0]):[];for(var w=-1,B=xt(S);++w<S;)for(var q=s[w],J=-1;++J<S;)J!=w&&(B[w]=hs(B[w]||q,s[J],u,m));return Na(tn(B,1),u,m)}function nd(s,u,m){for(var S=-1,w=s.length,B=u.length,q={};++S<w;){var J=S<B?u[S]:e;m(q,s[S],J)}return q}function kc(s){return ti(s)?s:[]}function su(s){return typeof s=="function"?s:ht}function Oa(s,u){return De(s)?s:tf(s,u)?[s]:pa(dn(s))}var Sm=Ie;function ps(s,u,m){var S=s.length;return m=m===e?S:m,!u&&m>=S?s:_r(s,u,m)}var Em=Tc||function(s){return ii.clearTimeout(s)};function id(s,u){if(u)return s.slice();var m=s.length,S=ks?ks(m):new s.constructor(m);return s.copy(S),S}function io(s){var u=new s.constructor(s.byteLength);return new Ho(u).set(new Ho(s)),u}function rd(s,u){var m=u?io(s.buffer):s.buffer;return new s.constructor(m,s.byteOffset,s.byteLength)}function Xc(s){var u=new s.constructor(s.source,ts.exec(s));return u.lastIndex=s.lastIndex,u}function Mm(s){return Ks?on(Ks.call(s)):{}}function ad(s,u){var m=u?io(s.buffer):s.buffer;return new s.constructor(m,s.byteOffset,s.length)}function ou(s,u){if(s!==u){var m=s!==e,S=s===null,w=s===s,B=Wi(s),q=u!==e,J=u===null,st=u===u,Nt=Wi(u);if(!J&&!Nt&&!B&&s>u||B&&q&&st&&!J&&!Nt||S&&q&&st||!m&&st||!w)return 1;if(!S&&!B&&!Nt&&s<u||Nt&&m&&w&&!S&&!B||J&&m&&w||!q&&w||!st)return-1}return 0}function Tm(s,u,m){for(var S=-1,w=s.criteria,B=u.criteria,q=w.length,J=m.length;++S<q;){var st=ou(w[S],B[S]);if(st){if(S>=J)return st;var Nt=m[S];return st*(Nt=="desc"?-1:1)}}return s.index-u.index}function sd(s,u,m,S){for(var w=-1,B=s.length,q=m.length,J=-1,st=u.length,Nt=Fn(B-q,0),It=xt(st+Nt),Gt=!S;++J<st;)It[J]=u[J];for(;++w<q;)(Gt||w<B)&&(It[m[w]]=s[w]);for(;Nt--;)It[J++]=s[w++];return It}function bm(s,u,m,S){for(var w=-1,B=s.length,q=-1,J=m.length,st=-1,Nt=u.length,It=Fn(B-J,0),Gt=xt(It+Nt),re=!S;++w<It;)Gt[w]=s[w];for(var fe=w;++st<Nt;)Gt[fe+st]=u[st];for(;++q<J;)(re||w<B)&&(Gt[fe+m[q]]=s[w++]);return Gt}function hi(s,u){var m=-1,S=s.length;for(u||(u=xt(S));++m<S;)u[m]=s[m];return u}function nr(s,u,m,S){var w=!m;m||(m={});for(var B=-1,q=u.length;++B<q;){var J=u[B],st=S?S(m[J],s[J],J,m,s):e;st===e&&(st=s[J]),w?Zr(m,J,st):Js(m,J,st)}return m}function qc(s,u){return nr(s,pu(s),u)}function lu(s,u){return nr(s,$c(s),u)}function ro(s,u){return function(m,S){var w=De(m)?W_:fs,B=u?u():{};return w(m,s,_e(S,2),B)}}function ao(s){return Ie(function(u,m){var S=-1,w=m.length,B=w>1?m[w-1]:e,q=w>2?m[2]:e;for(B=s.length>3&&typeof B=="function"?(w--,B):e,q&&Vi(m[0],m[1],q)&&(B=w<3?e:B,w=1),u=on(u);++S<w;){var J=m[S];J&&s(u,J,S,B)}return u})}function od(s,u){return function(m,S){if(m==null)return m;if(!pi(m))return s(m,S);for(var w=m.length,B=u?w:-1,q=on(m);(u?B--:++B<w)&&S(q[B],B,q)!==!1;);return m}}function so(s){return function(u,m,S){for(var w=-1,B=on(u),q=S(u),J=q.length;J--;){var st=q[s?J:++w];if(m(B[st],st,B)===!1)break}return u}}function Am(s,u,m){var S=u&b,w=zr(s);function B(){var q=this&&this!==ii&&this instanceof B?w:s;return q.apply(S?m:this,arguments)}return B}function vr(s){return function(u){u=dn(u);var m=as(u)?Dr(u):e,S=m?m[0]:u.charAt(0),w=m?ps(m,1).join(""):u.slice(1);return S[s]()+w}}function Gi(s){return function(u){return Th(d(Wa(u).replace(Ul,"")),s,"")}}function zr(s){return function(){var u=arguments;switch(u.length){case 0:return new s;case 1:return new s(u[0]);case 2:return new s(u[0],u[1]);case 3:return new s(u[0],u[1],u[2]);case 4:return new s(u[0],u[1],u[2],u[3]);case 5:return new s(u[0],u[1],u[2],u[3],u[4]);case 6:return new s(u[0],u[1],u[2],u[3],u[4],u[5]);case 7:return new s(u[0],u[1],u[2],u[3],u[4],u[5],u[6])}var m=gr(s.prototype),S=s.apply(m,u);return Yn(S)?S:m}}function wm(s,u,m){var S=zr(s);function w(){for(var B=arguments.length,q=xt(B),J=B,st=lo(w);J--;)q[J]=arguments[J];var Nt=B<3&&q[0]!==st&&q[B-1]!==st?[]:ss(q,st);if(B-=Nt.length,B<m)return ld(s,u,Jn,w.placeholder,e,q,Nt,e,e,m-B);var It=this&&this!==ii&&this instanceof w?S:s;return Ki(It,this,q)}return w}function Ia(s){return function(u,m,S){var w=on(u);if(!pi(u)){var B=_e(m,3);u=gi(u),m=function(J){return B(w[J],J,w)}}var q=s(u,m,S);return q>-1?w[B?u[q]:q]:e}}function fa(s){return Hn(function(u){var m=u.length,S=m,w=Ji.prototype.thru;for(s&&u.reverse();S--;){var B=u[S];if(typeof B!="function")throw new mr(h);if(w&&!q&&du(B)=="wrapper")var q=new Ji([],!0)}for(S=q?S:m;++S<m;){B=u[S];var J=du(B),st=J=="wrapper"?jc(B):e;st&&ef(st[0])&&st[1]==(k|z|X|K)&&!st[4].length&&st[9]==1?q=q[du(st[0])].apply(q,st[3]):q=B.length==1&&ef(B)?q[J]():q.thru(B)}return function(){var Nt=arguments,It=Nt[0];if(q&&Nt.length==1&&De(It))return q.plant(It).value();for(var Gt=0,re=m?u[Gt].apply(this,Nt):It;++Gt<m;)re=u[Gt].call(this,re);return re}})}function Jn(s,u,m,S,w,B,q,J,st,Nt){var It=u&k,Gt=u&b,re=u&M,fe=u&(z|N),Re=u&F,We=re?e:zr(s);function Ce(){for(var nn=arguments.length,un=xt(nn),ta=nn;ta--;)un[ta]=arguments[ta];if(fe)var Mr=lo(Ce),ea=Q_(un,Mr);if(S&&(un=sd(un,S,w,fe)),B&&(un=bm(un,B,q,fe)),nn-=ea,fe&&nn<Nt){var _i=ss(un,Mr);return ld(s,u,Jn,Ce.placeholder,m,un,_i,J,st,Nt-nn)}var ka=Gt?m:this,ho=re?ka[s]:s;return nn=un.length,J?un=da(un,J):Re&&nn>1&&un.reverse(),It&&st<nn&&(un.length=st),this&&this!==ii&&this instanceof Ce&&(ho=We||zr(ho)),ho.apply(ka,un)}return Ce}function uu(s,u){return function(m,S){return kh(m,s,u(S),{})}}function Qo(s,u){return function(m,S){var w;if(m===e&&S===e)return u;if(m!==e&&(w=m),S!==e){if(w===e)return S;typeof m=="string"||typeof S=="string"?(m=er(m),S=er(S)):(m=Wc(m),S=Wc(S)),w=s(m,S)}return w}}function cu(s){return Hn(function(u){return u=Wn(u,dr(_e())),Ie(function(m){var S=this;return s(u,function(w){return Ki(w,S,m)})})})}function fu(s,u){u=u===e?" ":er(u);var m=u.length;if(m<2)return m?$h(u,s):u;var S=$h(u,Go(s/la(u)));return as(u)?ps(Dr(S),0,s).join(""):S.slice(0,s)}function Rm(s,u,m,S){var w=u&b,B=zr(s);function q(){for(var J=-1,st=arguments.length,Nt=-1,It=S.length,Gt=xt(It+st),re=this&&this!==ii&&this instanceof q?B:s;++Nt<It;)Gt[Nt]=S[Nt];for(;st--;)Gt[Nt++]=arguments[++J];return Ki(re,w?m:this,Gt)}return q}function ms(s){return function(u,m,S){return S&&typeof S!="number"&&Vi(u,m,S)&&(m=S=e),u=_a(u),m===e?(m=u,u=0):m=_a(m),S=S===e?u<m?1:-1:_a(S),_m(u,m,S,s)}}function oo(s){return function(u,m){return typeof u=="string"&&typeof m=="string"||(u=Gr(u),m=Gr(m)),s(u,m)}}function ld(s,u,m,S,w,B,q,J,st,Nt){var It=u&z,Gt=It?q:e,re=It?e:q,fe=It?B:e,Re=It?e:B;u|=It?X:W,u&=~(It?W:X),u&H||(u&=-4);var We=[s,u,w,fe,Gt,Re,re,J,st,Nt],Ce=m.apply(e,We);return ef(s)&&af(Ce,We),Ce.placeholder=S,sf(Ce,s,u)}function Yc(s){var u=ai[s];return function(m,S){if(m=Gr(m),S=S==null?0:kn(Ne(S),292),S&&Gl(m)){var w=(dn(m)+"e").split("e"),B=u(w[0]+"e"+(+w[1]+S));return w=(dn(B)+"e").split("e"),+(w[0]+"e"+(+w[1]-S))}return u(m)}}var Cm=$e&&1/yc(new $e([,-0]))[1]==ot?function(s){return new $e(s)}:ue;function hu(s){return function(u){var m=Ei(u);return m==Q?xc(u):m==G?j_(u):K_(u,s(u))}}function ha(s,u,m,S,w,B,q,J){var st=u&M;if(!st&&typeof s!="function")throw new mr(h);var Nt=S?S.length:0;if(Nt||(u&=-97,S=w=e),q=q===e?q:Fn(Ne(q),0),J=J===e?J:Ne(J),Nt-=w?w.length:0,u&W){var It=S,Gt=w;S=w=e}var re=st?e:jc(s),fe=[s,u,m,S,w,It,Gt,B,q,J];if(re&&_u(fe,re),s=fe[0],u=fe[1],m=fe[2],S=fe[3],w=fe[4],J=fe[9]=fe[9]===e?st?0:s.length:Fn(fe[9]-Nt,0),!J&&u&(z|N)&&(u&=-25),!u||u==b)var Re=Am(s,u,m);else u==z||u==N?Re=wm(s,u,J):(u==X||u==(b|X))&&!w.length?Re=Rm(s,u,m,S):Re=Jn.apply(e,fe);var We=re?tu:af;return sf(We(Re,fe),s,u)}function Zc(s,u,m,S){return s===e||sr(s,Bo[m])&&!hn.call(S,m)?u:s}function ud(s,u,m,S,w,B){return Yn(s)&&Yn(u)&&(B.set(u,s),$l(s,u,e,ud,B),B.delete(u)),s}function Dm(s){return Hr(s)?e:s}function Lm(s,u,m,S,w,B){var q=m&R,J=s.length,st=u.length;if(J!=st&&!(q&&st>J))return!1;var Nt=B.get(s),It=B.get(u);if(Nt&&It)return Nt==u&&It==s;var Gt=-1,re=!0,fe=m&C?new Da:e;for(B.set(s,u),B.set(u,s);++Gt<J;){var Re=s[Gt],We=u[Gt];if(S)var Ce=q?S(We,Re,Gt,u,s,B):S(Re,We,Gt,s,u,B);if(Ce!==e){if(Ce)continue;re=!1;break}if(fe){if(!bh(u,function(nn,un){if(!Oo(fe,un)&&(Re===nn||w(Re,nn,m,S,B)))return fe.push(un)})){re=!1;break}}else if(!(Re===We||w(Re,We,m,S,B))){re=!1;break}}return B.delete(s),B.delete(u),re}function Um(s,u,m,S,w,B,q){switch(m){case Yt:if(s.byteLength!=u.byteLength||s.byteOffset!=u.byteOffset)return!1;s=s.buffer,u=u.buffer;case te:return!(s.byteLength!=u.byteLength||!B(new Ho(s),new Ho(u)));case Kt:case Le:case vi:return sr(+s,+u);case xn:return s.name==u.name&&s.message==u.message;case ce:case U:return s==u+"";case Q:var J=xc;case G:var st=S&R;if(J||(J=yc),s.size!=u.size&&!st)return!1;var Nt=q.get(s);if(Nt)return Nt==u;S|=C,q.set(s,u);var It=Lm(J(s),J(u),S,w,B,q);return q.delete(s),It;case dt:if(Ks)return Ks.call(s)==Ks.call(u)}return!1}function Si(s,u,m,S,w,B){var q=m&R,J=Kc(s),st=J.length,Nt=Kc(u),It=Nt.length;if(st!=It&&!q)return!1;for(var Gt=st;Gt--;){var re=J[Gt];if(!(q?re in u:hn.call(u,re)))return!1}var fe=B.get(s),Re=B.get(u);if(fe&&Re)return fe==u&&Re==s;var We=!0;B.set(s,u),B.set(u,s);for(var Ce=q;++Gt<st;){re=J[Gt];var nn=s[re],un=u[re];if(S)var ta=q?S(un,nn,re,u,s,B):S(nn,un,re,s,u,B);if(!(ta===e?nn===un||w(nn,un,m,S,B):ta)){We=!1;break}Ce||(Ce=re=="constructor")}if(We&&!Ce){var Mr=s.constructor,ea=u.constructor;Mr!=ea&&"constructor"in s&&"constructor"in u&&!(typeof Mr=="function"&&Mr instanceof Mr&&typeof ea=="function"&&ea instanceof ea)&&(We=!1)}return B.delete(s),B.delete(u),We}function Hn(s){return vu(pd(s,e,rr),s+"")}function Kc(s){return fm(s,gi,pu)}function Qc(s){return fm(s,Mi,$c)}var jc=Vo?function(s){return Vo.get(s)}:ue;function du(s){for(var u=s.name+"",m=Or[u],S=hn.call(Or,u)?m.length:0;S--;){var w=m[S],B=w.func;if(B==null||B==s)return w.name}return u}function lo(s){var u=hn.call(D,"placeholder")?D:s;return u.placeholder}function _e(){var s=D.iteratee||Me;return s=s===Me?Yh:s,arguments.length?s(arguments[0],arguments[1]):s}function jo(s,u){var m=s.__data__;return za(u)?m[typeof u=="string"?"string":"hash"]:m.map}function Jc(s){for(var u=gi(s),m=u.length;m--;){var S=u[m],w=s[S];u[m]=[S,w,Pm(w)]}return u}function gs(s,u){var m=Rh(s,u);return ca(m)?m:e}function Nm(s){var u=hn.call(s,Fi),m=s[Fi];try{s[Fi]=e;var S=!0}catch{}var w=Bi.call(s);return S&&(u?s[Fi]=m:delete s[Fi]),w}var pu=ls?function(s){return s==null?[]:(s=on(s),oa(ls(s),function(u){return Xs.call(s,u)}))}:W0,$c=ls?function(s){for(var u=[];s;)wa(u,pu(s)),s=Bl(s);return u}:W0,Ei=en;(Vl&&Ei(new Vl(new ArrayBuffer(1)))!=Yt||fi&&Ei(new fi)!=Q||Xn&&Ei(Xn.resolve())!=de||$e&&Ei(new $e)!=G||Yr&&Ei(new Yr)!=Ht)&&(Ei=function(s){var u=en(s),m=u==ve?s.constructor:e,S=m?Ba(m):"";if(S)switch(S){case $p:return Yt;case tm:return Q;case Wl:return de;case kl:return G;case em:return Ht}return u});function Om(s,u,m){for(var S=-1,w=m.length;++S<w;){var B=m[S],q=B.size;switch(B.type){case"drop":s+=q;break;case"dropRight":u-=q;break;case"take":u=kn(u,s+q);break;case"takeRight":s=Fn(s,u-q);break}}return{start:s,end:u}}function cd(s){var u=s.match(rc);return u?u[1].split(Gs):[]}function mu(s,u,m){u=Oa(u,s);for(var S=-1,w=u.length,B=!1;++S<w;){var q=_n(u[S]);if(!(B=s!=null&&m(s,q)))break;s=s[q]}return B||++S!=w?B:(w=s==null?0:s.length,!!w&&fo(w)&&jr(q,w)&&(De(s)||Va(s)))}function fd(s){var u=s.length,m=new s.constructor(u);return u&&typeof s[0]=="string"&&hn.call(s,"index")&&(m.index=s.index,m.input=s.input),m}function hd(s){return typeof s.constructor=="function"&&!Ln(s)?gr(Bl(s)):{}}function dd(s,u,m){var S=s.constructor;switch(u){case te:return io(s);case Kt:case Le:return new S(+s);case Yt:return rd(s,m);case Zt:case qe:case Xt:case le:case pe:case xe:case ee:case Oe:case we:return ad(s,m);case Q:return new S;case vi:case U:return new S(s);case ce:return Xc(s);case G:return new S;case dt:return Mm(s)}}function Im(s,u){var m=u.length;if(!m)return s;var S=m-1;return u[S]=(m>1?"& ":"")+u[S],u=u.join(m>2?", ":" "),s.replace(ic,`{
/* [wrapped with `+u+`] */
`)}function Pa(s){return De(s)||Va(s)||!!(Qi&&s&&s[Qi])}function jr(s,u){var m=typeof s;return u=u??it,!!u&&(m=="number"||m!="symbol"&&Ta.test(s))&&s>-1&&s%1==0&&s<u}function Vi(s,u,m){if(!Yn(m))return!1;var S=typeof u;return(S=="number"?pi(m)&&jr(u,m.length):S=="string"&&u in m)?sr(m[u],s):!1}function tf(s,u){if(De(s))return!1;var m=typeof s;return m=="number"||m=="symbol"||m=="boolean"||s==null||Wi(s)?!0:hr.test(s)||!cn.test(s)||u!=null&&s in on(u)}function za(s){var u=typeof s;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?s!=="__proto__":s===null}function ef(s){var u=du(s),m=D[u];if(typeof m!="function"||!(u in Ge.prototype))return!1;if(s===m)return!0;var S=jc(m);return!!S&&s===S[0]}function nf(s){return!!Lh&&Lh in s}var gu=Pl?Jr:k0;function Ln(s){var u=s&&s.constructor,m=typeof u=="function"&&u.prototype||Bo;return s===m}function Pm(s){return s===s&&!Yn(s)}function zm(s,u){return function(m){return m==null?!1:m[s]===u&&(u!==e||s in on(m))}}function Bm(s){var u=Ru(s,function(S){return m.size===_&&m.clear(),S}),m=u.cache;return u}function _u(s,u){var m=s[1],S=u[1],w=m|S,B=w<(b|M|k),q=S==k&&m==z||S==k&&m==K&&s[7].length<=u[8]||S==(k|K)&&u[7].length<=u[8]&&m==z;if(!(B||q))return s;S&b&&(s[2]=u[2],w|=m&b?0:H);var J=u[3];if(J){var st=s[3];s[3]=st?sd(st,J,u[4]):J,s[4]=st?ss(s[3],x):u[4]}return J=u[5],J&&(st=s[5],s[5]=st?bm(st,J,u[6]):J,s[6]=st?ss(s[5],x):u[6]),J=u[7],J&&(s[7]=J),S&k&&(s[8]=s[8]==null?u[8]:kn(s[8],u[8])),s[9]==null&&(s[9]=u[9]),s[0]=u[0],s[1]=w,s}function _s(s){var u=[];if(s!=null)for(var m in on(s))u.push(m);return u}function Fm(s){return Bi.call(s)}function pd(s,u,m){return u=Fn(u===e?s.length-1:u,0),function(){for(var S=arguments,w=-1,B=Fn(S.length-u,0),q=xt(B);++w<B;)q[w]=S[u+w];w=-1;for(var J=xt(u+1);++w<u;)J[w]=S[w];return J[u]=m(q),Ki(s,this,J)}}function Jo(s,u){return u.length<2?s:Pr(s,_r(u,0,-1))}function da(s,u){for(var m=s.length,S=kn(u.length,m),w=hi(s);S--;){var B=u[S];s[S]=jr(B,m)?w[B]:e}return s}function rf(s,u){if(!(u==="constructor"&&typeof s[u]=="function")&&u!="__proto__")return s[u]}var af=xu(tu),$o=Nh||function(s,u){return ii.setTimeout(s,u)},vu=xu(eu);function sf(s,u,m){var S=u+"";return vu(s,Im(S,Hm(cd(S),m)))}function xu(s){var u=0,m=0;return function(){var S=Ca(),w=_t-(S-m);if(m=S,w>0){if(++u>=pt)return arguments[0]}else u=0;return s.apply(e,arguments)}}function yu(s,u){var m=-1,S=s.length,w=S-1;for(u=u===e?S:u;++m<u;){var B=Hc(m,w),q=s[B];s[B]=s[m],s[m]=q}return s.length=u,s}var pa=Bm(function(s){var u=[];return s.charCodeAt(0)===46&&u.push(""),s.replace(xi,function(m,S,w,B){u.push(w?B.replace(Ea,"$1"):S||m)}),u});function _n(s){if(typeof s=="string"||Wi(s))return s;var u=s+"";return u=="0"&&1/s==-1/0?"-0":u}function Ba(s){if(s!=null){try{return zl.call(s)}catch{}try{return s+""}catch{}}return""}function Hm(s,u){return Cr(ct,function(m){var S="_."+m[0];u&m[1]&&!hc(s,S)&&s.push(S)}),s.sort()}function di(s){if(s instanceof Ge)return s.clone();var u=new Ji(s.__wrapped__,s.__chain__);return u.__actions__=hi(s.__actions__),u.__index__=s.__index__,u.__values__=s.__values__,u}function o0(s,u,m){(m?Vi(s,u,m):u===e)?u=1:u=Fn(Ne(u),0);var S=s==null?0:s.length;if(!S||u<1)return[];for(var w=0,B=0,q=xt(Go(S/u));w<S;)q[B++]=_r(s,w,w+=u);return q}function Gm(s){for(var u=-1,m=s==null?0:s.length,S=0,w=[];++u<m;){var B=s[u];B&&(w[S++]=B)}return w}function Vm(){var s=arguments.length;if(!s)return[];for(var u=xt(s-1),m=arguments[0],S=s;S--;)u[S-1]=arguments[S];return wa(De(m)?hi(m):[m],tn(u,1))}var qn=Ie(function(s,u){return ti(s)?hs(s,tn(u,1,ti,!0)):[]}),ir=Ie(function(s,u){var m=Oi(u);return ti(m)&&(m=e),ti(s)?hs(s,tn(u,1,ti,!0),_e(m,2)):[]}),Fa=Ie(function(s,u){var m=Oi(u);return ti(m)&&(m=e),ti(s)?hs(s,tn(u,1,ti,!0),e,m):[]});function Wm(s,u,m){var S=s==null?0:s.length;return S?(u=m||u===e?1:Ne(u),_r(s,u<0?0:u,S)):[]}function km(s,u,m){var S=s==null?0:s.length;return S?(u=m||u===e?1:Ne(u),u=S-u,_r(s,0,u<0?0:u)):[]}function l0(s,u){return s&&s.length?ru(s,_e(u,3),!0,!0):[]}function md(s,u){return s&&s.length?ru(s,_e(u,3),!0):[]}function xr(s,u,m,S){var w=s==null?0:s.length;return w?(m&&typeof m!="number"&&Vi(s,u,m)&&(m=0,S=w),ze(s,u,m,S)):[]}function Br(s,u,m){var S=s==null?0:s.length;if(!S)return-1;var w=m==null?0:Ne(m);return w<0&&(w=Fn(S+w,0)),dc(s,_e(u,3),w)}function gd(s,u,m){var S=s==null?0:s.length;if(!S)return-1;var w=S-1;return m!==e&&(w=Ne(m),w=m<0?Fn(S+w,0):kn(w,S-1)),dc(s,_e(u,3),w,!0)}function rr(s){var u=s==null?0:s.length;return u?tn(s,1):[]}function Xm(s){var u=s==null?0:s.length;return u?tn(s,ot):[]}function vs(s,u){var m=s==null?0:s.length;return m?(u=u===e?1:Ne(u),tn(s,u)):[]}function uo(s){for(var u=-1,m=s==null?0:s.length,S={};++u<m;){var w=s[u];S[w[0]]=w[1]}return S}function Ha(s){return s&&s.length?s[0]:e}function _d(s,u,m){var S=s==null?0:s.length;if(!S)return-1;var w=m==null?0:Ne(m);return w<0&&(w=Fn(S+w,0)),Uo(s,u,w)}function vd(s){var u=s==null?0:s.length;return u?_r(s,0,-1):[]}var ma=Ie(function(s){var u=Wn(s,kc);return u.length&&u[0]===s[0]?Wh(u):[]}),qm=Ie(function(s){var u=Oi(s),m=Wn(s,kc);return u===Oi(m)?u=e:m.pop(),m.length&&m[0]===s[0]?Wh(m,_e(u,2)):[]}),tl=Ie(function(s){var u=Oi(s),m=Wn(s,kc);return u=typeof u=="function"?u:e,u&&m.pop(),m.length&&m[0]===s[0]?Wh(m,e,u):[]});function Su(s,u){return s==null?"":Ur.call(s,u)}function Oi(s){var u=s==null?0:s.length;return u?s[u-1]:e}function el(s,u,m){var S=s==null?0:s.length;if(!S)return-1;var w=S;return m!==e&&(w=Ne(m),w=w<0?Fn(S+w,0):kn(w,S-1)),u===u?pr(s,u,w):dc(s,No,w,!0)}function Ym(s,u){return s&&s.length?Qh(s,Ne(u)):e}var Zm=Ie(nl);function nl(s,u){return s&&s.length&&u&&u.length?Fc(s,u):s}function Km(s,u,m){return s&&s.length&&u&&u.length?Fc(s,u,_e(m,2)):s}function of(s,u,m){return s&&s.length&&u&&u.length?Fc(s,u,e,m):s}var Qm=Hn(function(s,u){var m=s==null?0:s.length,S=Kl(s,u);return Jh(s,Wn(u,function(w){return jr(w,m)?+w:w}).sort(ou)),S});function u0(s,u){var m=[];if(!(s&&s.length))return m;var S=-1,w=[],B=s.length;for(u=_e(u,3);++S<B;){var q=s[S];u(q,S,s)&&(m.push(q),w.push(S))}return Jh(s,w),m}function xd(s){return s==null?s:Ih.call(s)}function En(s,u,m){var S=s==null?0:s.length;return S?(m&&typeof m!="number"&&Vi(s,u,m)?(u=0,m=S):(u=u==null?0:Ne(u),m=m===e?S:Ne(m)),_r(s,u,m)):[]}function Pn(s,u){return nu(s,u)}function Ze(s,u,m){return Vc(s,u,_e(m,2))}function an(s,u){var m=s==null?0:s.length;if(m){var S=nu(s,u);if(S<m&&sr(s[S],u))return S}return-1}function Mn(s,u){return nu(s,u,!0)}function yr(s,u,m){return Vc(s,u,_e(m,2),!0)}function xs(s,u){var m=s==null?0:s.length;if(m){var S=nu(s,u,!0)-1;if(sr(s[S],u))return S}return-1}function il(s){return s&&s.length?td(s):[]}function yd(s,u){return s&&s.length?td(s,_e(u,2)):[]}function Ga(s){var u=s==null?0:s.length;return u?_r(s,1,u):[]}function $n(s,u,m){return s&&s.length?(u=m||u===e?1:Ne(u),_r(s,0,u<0?0:u)):[]}function ys(s,u,m){var S=s==null?0:s.length;return S?(u=m||u===e?1:Ne(u),u=S-u,_r(s,u<0?0:u,S)):[]}function co(s,u){return s&&s.length?ru(s,_e(u,3),!1,!0):[]}function Sd(s,u){return s&&s.length?ru(s,_e(u,3)):[]}var Fr=Ie(function(s){return Na(tn(s,1,ti,!0))}),rl=Ie(function(s){var u=Oi(s);return ti(u)&&(u=e),Na(tn(s,1,ti,!0),_e(u,2))}),Eu=Ie(function(s){var u=Oi(s);return u=typeof u=="function"?u:e,Na(tn(s,1,ti,!0),e,u)});function ar(s){return s&&s.length?Na(s):[]}function Ed(s,u){return s&&s.length?Na(s,_e(u,2)):[]}function Md(s,u){return u=typeof u=="function"?u:e,s&&s.length?Na(s,e,u):[]}function al(s){if(!(s&&s.length))return[];var u=0;return s=oa(s,function(m){if(ti(m))return u=Fn(m.length,u),!0}),rs(u,function(m){return Wn(s,pc(m))})}function Mu(s,u){if(!(s&&s.length))return[];var m=al(s);return u==null?m:Wn(m,function(S){return Ki(u,e,S)})}var Ss=Ie(function(s,u){return ti(s)?hs(s,u):[]}),Ri=Ie(function(s){return au(oa(s,ti))}),Es=Ie(function(s){var u=Oi(s);return ti(u)&&(u=e),au(oa(s,ti),_e(u,2))}),sl=Ie(function(s){var u=Oi(s);return u=typeof u=="function"?u:e,au(oa(s,ti),e,u)}),ol=Ie(al);function Td(s,u){return nd(s||[],u||[],Js)}function bd(s,u){return nd(s||[],u||[],Ko)}var jm=Ie(function(s){var u=s.length,m=u>1?s[u-1]:e;return m=typeof m=="function"?(s.pop(),m):e,Mu(s,m)});function ll(s){var u=D(s);return u.__chain__=!0,u}function Ad(s,u){return u(s),s}function Ii(s,u){return u(s)}var Jm=Hn(function(s){var u=s.length,m=u?s[0]:0,S=this.__wrapped__,w=function(B){return Kl(B,s)};return u>1||this.__actions__.length||!(S instanceof Ge)||!jr(m)?this.thru(w):(S=S.slice(m,+m+(u?1:0)),S.__actions__.push({func:Ii,args:[w],thisArg:e}),new Ji(S,this.__chain__).thru(function(B){return u&&!B.length&&B.push(e),B}))});function Sr(){return ll(this)}function $m(){return new Ji(this.value(),this.__chain__)}function tg(){this.__values__===e&&(this.__values__=Er(this.value()));var s=this.__index__>=this.__values__.length,u=s?e:this.__values__[this.__index__++];return{done:s,value:u}}function c0(){return this}function Ms(s){for(var u,m=this;m instanceof Ir;){var S=di(m);S.__index__=0,S.__values__=e,u?w.__wrapped__=S:u=S;var w=S;m=m.__wrapped__}return w.__wrapped__=s,u}function lf(){var s=this.__wrapped__;if(s instanceof Ge){var u=s;return this.__actions__.length&&(u=new Ge(this)),u=u.reverse(),u.__actions__.push({func:Ii,args:[xd],thisArg:e}),new Ji(u,this.__chain__)}return this.thru(xd)}function wd(){return ym(this.__wrapped__,this.__actions__)}var ul=ro(function(s,u,m){hn.call(s,m)?++s[m]:Zr(s,m,1)});function eg(s,u,m){var S=De(s)?Hp:Gh;return m&&Vi(s,u,m)&&(u=e),S(s,_e(u,3))}function ng(s,u){var m=De(s)?oa:Sn;return m(s,_e(u,3))}var ig=Ia(Br),Rd=Ia(gd);function Cd(s,u){return tn(Tu(s,u),1)}function f0(s,u){return tn(Tu(s,u),ot)}function h0(s,u,m){return m=m===e?1:Ne(m),tn(Tu(s,u),m)}function rg(s,u){var m=De(s)?Cr:Ua;return m(s,_e(u,3))}function Dd(s,u){var m=De(s)?k_:Lc;return m(s,_e(u,3))}var ag=ro(function(s,u,m){hn.call(s,m)?s[m].push(u):Zr(s,m,[u])});function cl(s,u,m,S){s=pi(s)?s:_l(s),m=m&&!S?Ne(m):0;var w=s.length;return m<0&&(m=Fn(w+m,0)),yf(s)?m<=w&&s.indexOf(u,m)>-1:!!w&&Uo(s,u,m)>-1}var uf=Ie(function(s,u,m){var S=-1,w=typeof u=="function",B=pi(s)?xt(s.length):[];return Ua(s,function(q){B[++S]=w?Ki(u,q,m):eo(q,u,m)}),B}),sg=ro(function(s,u,m){Zr(s,m,u)});function Tu(s,u){var m=De(s)?Wn:Zh;return m(s,_e(u,3))}function og(s,u,m,S){return s==null?[]:(De(u)||(u=u==null?[]:[u]),m=S?e:m,De(m)||(m=m==null?[]:[m]),jh(s,u,m))}var lg=ro(function(s,u,m){s[m?0:1].push(u)},function(){return[[],[]]});function ug(s,u,m){var S=De(s)?Th:wh,w=arguments.length<3;return S(s,_e(u,4),m,w,Ua)}function cg(s,u,m){var S=De(s)?X_:wh,w=arguments.length<3;return S(s,_e(u,4),m,w,Lc)}function cf(s,u){var m=De(s)?oa:Sn;return m(s,Cu(_e(u,3)))}function fg(s){var u=De(s)?ko:Zo;return u(s)}function hg(s,u,m){(m?Vi(s,u,m):u===e)?u=1:u=Ne(u);var S=De(s)?lm:Gc;return S(s,u)}function Un(s){var u=De(s)?um:vm;return u(s)}function Ld(s){if(s==null)return 0;if(pi(s))return yf(s)?la(s):s.length;var u=Ei(s);return u==Q||u==G?s.size:Ic(s).length}function d0(s,u,m){var S=De(s)?bh:xm;return m&&Vi(s,u,m)&&(u=e),S(s,_e(u,3))}var dg=Ie(function(s,u){if(s==null)return[];var m=u.length;return m>1&&Vi(s,u[0],u[1])?u=[]:m>2&&Vi(u[0],u[1],u[2])&&(u=[u[0]]),jh(s,tn(u,1),[])}),ff=Ys||function(){return ii.Date.now()};function p0(s,u){if(typeof u!="function")throw new mr(h);return s=Ne(s),function(){if(--s<1)return u.apply(this,arguments)}}function pg(s,u,m){return u=m?e:u,u=s&&u==null?s.length:u,ha(s,k,e,e,e,e,u)}function bu(s,u){var m;if(typeof u!="function")throw new mr(h);return s=Ne(s),function(){return--s>0&&(m=u.apply(this,arguments)),s<=1&&(u=e),m}}var Ts=Ie(function(s,u,m){var S=b;if(m.length){var w=ss(m,lo(Ts));S|=X}return ha(s,S,u,m,w)}),hf=Ie(function(s,u,m){var S=b|M;if(m.length){var w=ss(m,lo(hf));S|=X}return ha(u,S,s,m,w)});function Au(s,u,m){u=m?e:u;var S=ha(s,z,e,e,e,e,e,u);return S.placeholder=Au.placeholder,S}function df(s,u,m){u=m?e:u;var S=ha(s,N,e,e,e,e,e,u);return S.placeholder=df.placeholder,S}function bs(s,u,m){var S,w,B,q,J,st,Nt=0,It=!1,Gt=!1,re=!0;if(typeof s!="function")throw new mr(h);u=Gr(u)||0,Yn(m)&&(It=!!m.leading,Gt="maxWait"in m,B=Gt?Fn(Gr(m.maxWait)||0,u):B,re="trailing"in m?!!m.trailing:re);function fe(_i){var ka=S,ho=w;return S=w=e,Nt=_i,q=s.apply(ho,ka),q}function Re(_i){return Nt=_i,J=$o(nn,u),It?fe(_i):q}function We(_i){var ka=_i-st,ho=_i-Nt,iy=u-ka;return Gt?kn(iy,B-ho):iy}function Ce(_i){var ka=_i-st,ho=_i-Nt;return st===e||ka>=u||ka<0||Gt&&ho>=B}function nn(){var _i=ff();if(Ce(_i))return un(_i);J=$o(nn,We(_i))}function un(_i){return J=e,re&&S?fe(_i):(S=w=e,q)}function ta(){J!==e&&Em(J),Nt=0,S=st=w=J=e}function Mr(){return J===e?q:un(ff())}function ea(){var _i=ff(),ka=Ce(_i);if(S=arguments,w=this,st=_i,ka){if(J===e)return Re(st);if(Gt)return Em(J),J=$o(nn,u),fe(st)}return J===e&&(J=$o(nn,u)),q}return ea.cancel=ta,ea.flush=Mr,ea}var ga=Ie(function(s,u){return $s(s,1,u)}),wu=Ie(function(s,u,m){return $s(s,Gr(u)||0,m)});function m0(s){return ha(s,F)}function Ru(s,u){if(typeof s!="function"||u!=null&&typeof u!="function")throw new mr(h);var m=function(){var S=arguments,w=u?u.apply(this,S):S[0],B=m.cache;if(B.has(w))return B.get(w);var q=s.apply(this,S);return m.cache=B.set(w,q)||B,q};return m.cache=new(Ru.Cache||$i),m}Ru.Cache=$i;function Cu(s){if(typeof s!="function")throw new mr(h);return function(){var u=arguments;switch(u.length){case 0:return!s.call(this);case 1:return!s.call(this,u[0]);case 2:return!s.call(this,u[0],u[1]);case 3:return!s.call(this,u[0],u[1],u[2])}return!s.apply(this,u)}}function mg(s){return bu(2,s)}var gg=Sm(function(s,u){u=u.length==1&&De(u[0])?Wn(u[0],dr(_e())):Wn(tn(u,1),dr(_e()));var m=u.length;return Ie(function(S){for(var w=-1,B=kn(S.length,m);++w<B;)S[w]=u[w].call(this,S[w]);return Ki(s,this,S)})}),Ud=Ie(function(s,u){var m=ss(u,lo(Ud));return ha(s,X,e,u,m)}),pf=Ie(function(s,u){var m=ss(u,lo(pf));return ha(s,W,e,u,m)}),_g=Hn(function(s,u){return ha(s,K,e,e,e,u)});function vg(s,u){if(typeof s!="function")throw new mr(h);return u=u===e?u:Ne(u),Ie(s,u)}function g0(s,u){if(typeof s!="function")throw new mr(h);return u=u==null?0:Fn(Ne(u),0),Ie(function(m){var S=m[u],w=ps(m,0,u);return S&&wa(w,S),Ki(s,this,w)})}function Nd(s,u,m){var S=!0,w=!0;if(typeof s!="function")throw new mr(h);return Yn(m)&&(S="leading"in m?!!m.leading:S,w="trailing"in m?!!m.trailing:w),bs(s,u,{leading:S,maxWait:u,trailing:w})}function Od(s){return pg(s,1)}function _0(s,u){return Ud(su(u),s)}function v0(){if(!arguments.length)return[];var s=arguments[0];return De(s)?s:[s]}function Du(s){return Ui(s,T)}function x0(s,u){return u=typeof u=="function"?u:e,Ui(s,T,u)}function xg(s){return Ui(s,y|T)}function Ke(s,u){return u=typeof u=="function"?u:e,Ui(s,y|T,u)}function Id(s,u){return u==null||Hh(s,u,gi(u))}function sr(s,u){return s===u||s!==s&&u!==u}var Pd=oo(Ql),yg=oo(function(s,u){return s>=u}),Va=Uc(function(){return arguments}())?Uc:function(s){return Zn(s)&&hn.call(s,"callee")&&!Xs.call(s,"callee")},De=xt.isArray,mf=fc?dr(fc):tr;function pi(s){return s!=null&&fo(s.length)&&!Jr(s)}function ti(s){return Zn(s)&&pi(s)}function y0(s){return s===!0||s===!1||Zn(s)&&en(s)==Kt}var As=bc||k0,Sg=Ip?dr(Ip):si;function Eg(s){return Zn(s)&&s.nodeType===1&&!Hr(s)}function gf(s){if(s==null)return!0;if(pi(s)&&(De(s)||typeof s=="string"||typeof s.splice=="function"||As(s)||fl(s)||Va(s)))return!s.length;var u=Ei(s);if(u==Q||u==G)return!s.size;if(Ln(s))return!Ic(s).length;for(var m in s)if(hn.call(s,m))return!1;return!0}function Rn(s,u){return no(s,u)}function zd(s,u,m){m=typeof m=="function"?m:e;var S=m?m(s,u):e;return S===e?no(s,u,e,m):!!S}function mi(s){if(!Zn(s))return!1;var u=en(s);return u==xn||u==Ee||typeof s.message=="string"&&typeof s.name=="string"&&!Hr(s)}function S0(s){return typeof s=="number"&&Gl(s)}function Jr(s){if(!Yn(s))return!1;var u=en(s);return u==gn||u==Pe||u==qt||u==Tn}function _f(s){return typeof s=="number"&&s==Ne(s)}function fo(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=it}function Yn(s){var u=typeof s;return s!=null&&(u=="object"||u=="function")}function Zn(s){return s!=null&&typeof s=="object"}var vf=Pp?dr(Pp):Nc;function Bd(s,u){return s===u||Jl(s,u,Jc(u))}function E0(s,u,m){return m=typeof m=="function"?m:e,Jl(s,u,Jc(u),m)}function Mg(s){return bg(s)&&s!=+s}function M0(s){if(gu(s))throw new Ae(f);return ca(s)}function Tg(s){return s===null}function T0(s){return s==null}function bg(s){return typeof s=="number"||Zn(s)&&en(s)==vi}function Hr(s){if(!Zn(s)||en(s)!=ve)return!1;var u=Bl(s);if(u===null)return!0;var m=hn.call(u,"constructor")&&u.constructor;return typeof m=="function"&&m instanceof m&&zl.call(m)==Lr}var xf=zp?dr(zp):Oc;function Fd(s){return _f(s)&&s>=-9007199254740991&&s<=it}var Ag=Bp?dr(Bp):Xh;function yf(s){return typeof s=="string"||!De(s)&&Zn(s)&&en(s)==U}function Wi(s){return typeof s=="symbol"||Zn(s)&&en(s)==dt}var fl=Fp?dr(Fp):qh;function $r(s){return s===e}function Hd(s){return Zn(s)&&Ei(s)==Ht}function wg(s){return Zn(s)&&en(s)==Ct}var Rg=oo(Pc),Lu=oo(function(s,u){return s<=u});function Er(s){if(!s)return[];if(pi(s))return yf(s)?Dr(s):hi(s);if(qs&&s[qs])return Zp(s[qs]());var u=Ei(s),m=u==Q?xc:u==G?yc:_l;return m(s)}function _a(s){if(!s)return s===0?s:0;if(s=Gr(s),s===ot||s===-1/0){var u=s<0?-1:1;return u*Wt}return s===s?s:0}function Ne(s){var u=_a(s),m=u%1;return u===u?m?u-m:u:0}function va(s){return s?Kr(Ne(s),0,ut):0}function Gr(s){if(typeof s=="number")return s;if(Wi(s))return V;if(Yn(s)){var u=typeof s.valueOf=="function"?s.valueOf():s;s=Yn(u)?u+"":u}if(typeof s!="string")return s===0?s:+s;s=kp(s);var m=ri.test(s);return m||sc.test(s)?V_(s.slice(2),m?2:8):es.test(s)?V:+s}function Cg(s){return nr(s,Mi(s))}function hl(s){return s?Kr(Ne(s),-9007199254740991,it):s===0?s:0}function dn(s){return s==null?"":er(s)}var b0=ao(function(s,u){if(Ln(u)||pi(u)){nr(u,gi(u),s);return}for(var m in u)hn.call(u,m)&&Js(s,m,u[m])}),Dg=ao(function(s,u){nr(u,Mi(u),s)}),Sf=ao(function(s,u,m,S){nr(u,Mi(u),s,S)}),A0=ao(function(s,u,m,S){nr(u,gi(u),s,S)}),w0=Hn(Kl);function R0(s,u){var m=gr(s);return u==null?m:La(m,u)}var C0=Ie(function(s,u){s=on(s);var m=-1,S=u.length,w=S>2?u[2]:e;for(w&&Vi(u[0],u[1],w)&&(S=1);++m<S;)for(var B=u[m],q=Mi(B),J=-1,st=q.length;++J<st;){var Nt=q[J],It=s[Nt];(It===e||sr(It,Bo[Nt])&&!hn.call(s,Nt))&&(s[Nt]=B[Nt])}return s}),Lg=Ie(function(s){return s.push(e,ud),Ki(Iu,e,s)});function dl(s,u){return Gp(s,_e(u,3),Ni)}function Uu(s,u){return Gp(s,_e(u,3),Yo)}function Ug(s,u){return s==null?s:qo(s,_e(u,3),Mi)}function D0(s,u){return s==null?s:to(s,_e(u,3),Mi)}function pl(s,u){return s&&Ni(s,_e(u,3))}function Nu(s,u){return s&&Yo(s,_e(u,3))}function Ng(s){return s==null?[]:ds(s,gi(s))}function Ef(s){return s==null?[]:ds(s,Mi(s))}function Ou(s,u,m){var S=s==null?e:Pr(s,u);return S===e?m:S}function Gd(s,u){return s!=null&&mu(s,u,Vh)}function ml(s,u){return s!=null&&mu(s,u,hm)}var Og=uu(function(s,u,m){u!=null&&typeof u.toString!="function"&&(u=Bi.call(u)),s[u]=m},ft(ht)),Ig=uu(function(s,u,m){u!=null&&typeof u.toString!="function"&&(u=Bi.call(u)),hn.call(s,u)?s[u].push(m):s[u]=[m]},_e),L0=Ie(eo);function gi(s){return pi(s)?Fh(s):Ic(s)}function Mi(s){return pi(s)?Fh(s,!0):pm(s)}function U0(s,u){var m={};return u=_e(u,3),Ni(s,function(S,w,B){Zr(m,u(S,w,B),S)}),m}function N0(s,u){var m={};return u=_e(u,3),Ni(s,function(S,w,B){Zr(m,w,u(S,w,B))}),m}var O0=ao(function(s,u,m){$l(s,u,m)}),Iu=ao(function(s,u,m,S){$l(s,u,m,S)}),Mf=Hn(function(s,u){var m={};if(s==null)return m;var S=!1;u=Wn(u,function(B){return B=Oa(B,s),S||(S=B.length>1),B}),nr(s,Qc(s),m),S&&(m=Ui(m,y|E|T,Dm));for(var w=u.length;w--;)iu(m,u[w]);return m});function Vd(s,u){return gl(s,Cu(_e(u)))}var I0=Hn(function(s,u){return s==null?{}:mm(s,u)});function gl(s,u){if(s==null)return{};var m=Wn(Qc(s),function(S){return[S]});return u=_e(u),Bc(s,m,function(S,w){return u(S,w[0])})}function P0(s,u,m){u=Oa(u,s);var S=-1,w=u.length;for(w||(w=1,s=e);++S<w;){var B=s==null?e:s[_n(u[S])];B===e&&(S=w,B=m),s=Jr(B)?B.call(s):B}return s}function Pg(s,u,m){return s==null?s:Ko(s,u,m)}function zg(s,u,m,S){return S=typeof S=="function"?S:e,s==null?s:Ko(s,u,m,S)}var Wd=hu(gi),kd=hu(Mi);function Xd(s,u,m){var S=De(s),w=S||As(s)||fl(s);if(u=_e(u,4),m==null){var B=s&&s.constructor;w?m=S?new B:[]:Yn(s)?m=Jr(B)?gr(Bl(s)):{}:m={}}return(w?Cr:Ni)(s,function(q,J,st){return u(m,q,J,st)}),m}function Bg(s,u){return s==null?!0:iu(s,u)}function Tf(s,u,m){return s==null?s:ed(s,u,su(m))}function z0(s,u,m,S){return S=typeof S=="function"?S:e,s==null?s:ed(s,u,su(m),S)}function _l(s){return s==null?[]:_c(s,gi(s))}function qd(s){return s==null?[]:_c(s,Mi(s))}function Yd(s,u,m){return m===e&&(m=u,u=e),m!==e&&(m=Gr(m),m=m===m?m:0),u!==e&&(u=Gr(u),u=u===u?u:0),Kr(Gr(s),u,m)}function bf(s,u,m){return u=_a(u),m===e?(m=u,u=0):m=_a(m),s=Gr(s),dm(s,u,m)}function Zd(s,u,m){if(m&&typeof m!="boolean"&&Vi(s,u,m)&&(u=m=e),m===e&&(typeof u=="boolean"?(m=u,u=e):typeof s=="boolean"&&(m=s,s=e)),s===e&&u===e?(s=0,u=1):(s=_a(s),u===e?(u=s,s=0):u=_a(u)),s>u){var S=s;s=u,u=S}if(m||s%1||u%1){var w=Oh();return kn(s+w*(u-s+Il("1e-"+((w+"").length-1))),u)}return Hc(s,u)}var Fg=Gi(function(s,u,m){return u=u.toLowerCase(),s+(m?Af(u):u)});function Af(s){return c(dn(s).toLowerCase())}function Wa(s){return s=dn(s),s&&s.replace(P,vc).replace(Aa,"")}function ws(s,u,m){s=dn(s),u=er(u);var S=s.length;m=m===e?S:Kr(Ne(m),0,S);var w=m;return m-=u.length,m>=0&&s.slice(m,w)==u}function Rs(s){return s=dn(s),s&&ne.test(s)?s.replace(Ut,Xp):s}function Pu(s){return s=dn(s),s&&wi.test(s)?s.replace(ni,"\\$&"):s}var zu=Gi(function(s,u,m){return s+(m?"-":"")+u.toLowerCase()}),Cs=Gi(function(s,u,m){return s+(m?" ":"")+u.toLowerCase()}),B0=vr("toLowerCase");function Hg(s,u,m){s=dn(s),u=Ne(u);var S=u?la(s):0;if(!u||S>=u)return s;var w=(u-S)/2;return fu(Ra(w),m)+s+fu(Go(w),m)}function Bu(s,u,m){s=dn(s),u=Ne(u);var S=u?la(s):0;return u&&S<u?s+fu(u-S,m):s}function F0(s,u,m){s=dn(s),u=Ne(u);var S=u?la(s):0;return u&&S<u?fu(u-S,m)+s:s}function Gg(s,u,m){return m||u==null?u=0:u&&(u=+u),Zs(dn(s).replace(Li,""),u||0)}function wf(s,u,m){return(m?Vi(s,u,m):u===e)?u=1:u=Ne(u),$h(dn(s),u)}function Vg(){var s=arguments,u=dn(s[0]);return s.length<3?u:u.replace(s[1],s[2])}var H0=Gi(function(s,u,m){return s+(m?"_":"")+u.toLowerCase()});function Rf(s,u,m){return m&&typeof m!="number"&&Vi(s,u,m)&&(u=m=e),m=m===e?ut:m>>>0,m?(s=dn(s),s&&(typeof u=="string"||u!=null&&!xf(u))&&(u=er(u),!u&&as(s))?ps(Dr(s),0,m):s.split(u,m)):[]}var Cf=Gi(function(s,u,m){return s+(m?" ":"")+c(u)});function Wg(s,u,m){return s=dn(s),m=m==null?0:Kr(Ne(m),0,s.length),u=er(u),s.slice(m,m+u.length)==u}function Fu(s,u,m){var S=D.templateSettings;m&&Vi(s,u,m)&&(u=e),s=dn(s),u=Sf({},u,S,Zc);var w=Sf({},u.imports,S.imports,Zc),B=gi(w),q=_c(w,B),J,st,Nt=0,It=u.interpolate||nt,Gt="__p += '",re=Sc((u.escape||nt).source+"|"+It.source+"|"+(It===ei?Ma:nt).source+"|"+(u.evaluate||nt).source+"|$","g"),fe="//# sourceURL="+(hn.call(u,"sourceURL")?(u.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Up+"]")+`
`;s.replace(re,function(Ce,nn,un,ta,Mr,ea){return un||(un=ta),Gt+=s.slice(Nt,ea).replace(gt,qp),nn&&(J=!0,Gt+=`' +
__e(`+nn+`) +
'`),Mr&&(st=!0,Gt+=`';
`+Mr+`;
__p += '`),un&&(Gt+=`' +
((__t = (`+un+`)) == null ? '' : __t) +
'`),Nt=ea+Ce.length,Ce}),Gt+=`';
`;var Re=hn.call(u,"variable")&&u.variable;if(!Re)Gt=`with (obj) {
`+Gt+`
}
`;else if($a.test(Re))throw new Ae(p);Gt=(st?Gt.replace(bn,""):Gt).replace(et,"$1").replace($t,"$1;"),Gt="function("+(Re||"obj")+`) {
`+(Re?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(J?", __e = _.escape":"")+(st?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Gt+`return __p
}`;var We=v(function(){return sn(B,fe+"return "+Gt).apply(e,q)});if(We.source=Gt,mi(We))throw We;return We}function Kd(s){return dn(s).toLowerCase()}function Df(s){return dn(s).toUpperCase()}function kg(s,u,m){if(s=dn(s),s&&(m||u===e))return kp(s);if(!s||!(u=er(u)))return s;var S=Dr(s),w=Dr(u),B=Io(S,w),q=Po(S,w)+1;return ps(S,B,q).join("")}function G0(s,u,m){if(s=dn(s),s&&(m||u===e))return s.slice(0,Ch(s)+1);if(!s||!(u=er(u)))return s;var S=Dr(s),w=Po(S,Dr(u))+1;return ps(S,0,w).join("")}function Lf(s,u,m){if(s=dn(s),s&&(m||u===e))return s.replace(Li,"");if(!s||!(u=er(u)))return s;var S=Dr(s),w=Io(S,Dr(u));return ps(S,w).join("")}function n(s,u){var m=O,S=j;if(Yn(u)){var w="separator"in u?u.separator:w;m="length"in u?Ne(u.length):m,S="omission"in u?er(u.omission):S}s=dn(s);var B=s.length;if(as(s)){var q=Dr(s);B=q.length}if(m>=B)return s;var J=m-la(S);if(J<1)return S;var st=q?ps(q,0,J).join(""):s.slice(0,J);if(w===e)return st+S;if(q&&(J+=st.length-J),xf(w)){if(s.slice(J).search(w)){var Nt,It=st;for(w.global||(w=Sc(w.source,dn(ts.exec(w))+"g")),w.lastIndex=0;Nt=w.exec(It);)var Gt=Nt.index;st=st.slice(0,Gt===e?J:Gt)}}else if(s.indexOf(er(w),J)!=J){var re=st.lastIndexOf(w);re>-1&&(st=st.slice(0,re))}return st+S}function i(s){return s=dn(s),s&&ae.test(s)?s.replace(Et,Qp):s}var a=Gi(function(s,u,m){return s+(m?" ":"")+u.toUpperCase()}),c=vr("toUpperCase");function d(s,u,m){return s=dn(s),u=m?e:u,u===e?Yp(s)?$_(s):Z_(s):s.match(u)||[]}var v=Ie(function(s,u){try{return Ki(s,e,u)}catch(m){return mi(m)?m:new Ae(m)}}),A=Hn(function(s,u){return Cr(u,function(m){m=_n(m),Zr(s,m,Ts(s[m],s))}),s});function L(s){var u=s==null?0:s.length,m=_e();return s=u?Wn(s,function(S){if(typeof S[1]!="function")throw new mr(h);return[m(S[0]),S[1]]}):[],Ie(function(S){for(var w=-1;++w<u;){var B=s[w];if(Ki(B[0],this,S))return Ki(B[1],this,S)}})}function Z(s){return cm(Ui(s,y))}function ft(s){return function(){return s}}function bt(s,u){return s==null||s!==s?u:s}var Ot=fa(),mt=fa(!0);function ht(s){return s}function Me(s){return Yh(typeof s=="function"?s:Ui(s,y))}function Se(s){return Kh(Ui(s,y))}function Cn(s,u){return zc(s,Ui(u,y))}var rt=Ie(function(s,u){return function(m){return eo(m,s,u)}}),$=Ie(function(s,u){return function(m){return eo(s,m,u)}});function lt(s,u,m){var S=gi(u),w=ds(u,S);m==null&&!(Yn(u)&&(w.length||!S.length))&&(m=u,u=s,s=this,w=ds(u,gi(u)));var B=!(Yn(m)&&"chain"in m)||!!m.chain,q=Jr(s);return Cr(w,function(J){var st=u[J];s[J]=st,q&&(s.prototype[J]=function(){var Nt=this.__chain__;if(B||Nt){var It=s(this.__wrapped__),Gt=It.__actions__=hi(this.__actions__);return Gt.push({func:st,args:arguments,thisArg:s}),It.__chain__=Nt,It}return st.apply(s,wa([this.value()],arguments))})}),s}function Lt(){return ii._===this&&(ii._=Fo),this}function ue(){}function Ve(s){return s=Ne(s),Ie(function(u){return Qh(u,s)})}var he=cu(Wn),Te=cu(Hp),Ti=cu(bh);function ln(s){return tf(s)?pc(_n(s)):gm(s)}function Ds(s){return function(u){return s==null?e:Pr(s,u)}}var V0=ms(),PE=ms(!0);function W0(){return[]}function k0(){return!1}function zE(){return{}}function BE(){return""}function FE(){return!0}function HE(s,u){if(s=Ne(s),s<1||s>it)return[];var m=ut,S=kn(s,ut);u=_e(u),s-=ut;for(var w=rs(S,u);++m<s;)u(m);return w}function GE(s){return De(s)?Wn(s,_n):Wi(s)?[s]:hi(pa(dn(s)))}function VE(s){var u=++Xr;return dn(s)+u}var WE=Qo(function(s,u){return s+u},0),kE=Yc("ceil"),XE=Qo(function(s,u){return s/u},1),qE=Yc("floor");function YE(s){return s&&s.length?Qr(s,ht,Ql):e}function ZE(s,u){return s&&s.length?Qr(s,_e(u,2),Ql):e}function KE(s){return Vp(s,ht)}function QE(s,u){return Vp(s,_e(u,2))}function jE(s){return s&&s.length?Qr(s,ht,Pc):e}function JE(s,u){return s&&s.length?Qr(s,_e(u,2),Pc):e}var $E=Qo(function(s,u){return s*u},1),tM=Yc("round"),eM=Qo(function(s,u){return s-u},0);function nM(s){return s&&s.length?gc(s,ht):0}function iM(s,u){return s&&s.length?gc(s,_e(u,2)):0}return D.after=p0,D.ary=pg,D.assign=b0,D.assignIn=Dg,D.assignInWith=Sf,D.assignWith=A0,D.at=w0,D.before=bu,D.bind=Ts,D.bindAll=A,D.bindKey=hf,D.castArray=v0,D.chain=ll,D.chunk=o0,D.compact=Gm,D.concat=Vm,D.cond=L,D.conforms=Z,D.constant=ft,D.countBy=ul,D.create=R0,D.curry=Au,D.curryRight=df,D.debounce=bs,D.defaults=C0,D.defaultsDeep=Lg,D.defer=ga,D.delay=wu,D.difference=qn,D.differenceBy=ir,D.differenceWith=Fa,D.drop=Wm,D.dropRight=km,D.dropRightWhile=l0,D.dropWhile=md,D.fill=xr,D.filter=ng,D.flatMap=Cd,D.flatMapDeep=f0,D.flatMapDepth=h0,D.flatten=rr,D.flattenDeep=Xm,D.flattenDepth=vs,D.flip=m0,D.flow=Ot,D.flowRight=mt,D.fromPairs=uo,D.functions=Ng,D.functionsIn=Ef,D.groupBy=ag,D.initial=vd,D.intersection=ma,D.intersectionBy=qm,D.intersectionWith=tl,D.invert=Og,D.invertBy=Ig,D.invokeMap=uf,D.iteratee=Me,D.keyBy=sg,D.keys=gi,D.keysIn=Mi,D.map=Tu,D.mapKeys=U0,D.mapValues=N0,D.matches=Se,D.matchesProperty=Cn,D.memoize=Ru,D.merge=O0,D.mergeWith=Iu,D.method=rt,D.methodOf=$,D.mixin=lt,D.negate=Cu,D.nthArg=Ve,D.omit=Mf,D.omitBy=Vd,D.once=mg,D.orderBy=og,D.over=he,D.overArgs=gg,D.overEvery=Te,D.overSome=Ti,D.partial=Ud,D.partialRight=pf,D.partition=lg,D.pick=I0,D.pickBy=gl,D.property=ln,D.propertyOf=Ds,D.pull=Zm,D.pullAll=nl,D.pullAllBy=Km,D.pullAllWith=of,D.pullAt=Qm,D.range=V0,D.rangeRight=PE,D.rearg=_g,D.reject=cf,D.remove=u0,D.rest=vg,D.reverse=xd,D.sampleSize=hg,D.set=Pg,D.setWith=zg,D.shuffle=Un,D.slice=En,D.sortBy=dg,D.sortedUniq=il,D.sortedUniqBy=yd,D.split=Rf,D.spread=g0,D.tail=Ga,D.take=$n,D.takeRight=ys,D.takeRightWhile=co,D.takeWhile=Sd,D.tap=Ad,D.throttle=Nd,D.thru=Ii,D.toArray=Er,D.toPairs=Wd,D.toPairsIn=kd,D.toPath=GE,D.toPlainObject=Cg,D.transform=Xd,D.unary=Od,D.union=Fr,D.unionBy=rl,D.unionWith=Eu,D.uniq=ar,D.uniqBy=Ed,D.uniqWith=Md,D.unset=Bg,D.unzip=al,D.unzipWith=Mu,D.update=Tf,D.updateWith=z0,D.values=_l,D.valuesIn=qd,D.without=Ss,D.words=d,D.wrap=_0,D.xor=Ri,D.xorBy=Es,D.xorWith=sl,D.zip=ol,D.zipObject=Td,D.zipObjectDeep=bd,D.zipWith=jm,D.entries=Wd,D.entriesIn=kd,D.extend=Dg,D.extendWith=Sf,lt(D,D),D.add=WE,D.attempt=v,D.camelCase=Fg,D.capitalize=Af,D.ceil=kE,D.clamp=Yd,D.clone=Du,D.cloneDeep=xg,D.cloneDeepWith=Ke,D.cloneWith=x0,D.conformsTo=Id,D.deburr=Wa,D.defaultTo=bt,D.divide=XE,D.endsWith=ws,D.eq=sr,D.escape=Rs,D.escapeRegExp=Pu,D.every=eg,D.find=ig,D.findIndex=Br,D.findKey=dl,D.findLast=Rd,D.findLastIndex=gd,D.findLastKey=Uu,D.floor=qE,D.forEach=rg,D.forEachRight=Dd,D.forIn=Ug,D.forInRight=D0,D.forOwn=pl,D.forOwnRight=Nu,D.get=Ou,D.gt=Pd,D.gte=yg,D.has=Gd,D.hasIn=ml,D.head=Ha,D.identity=ht,D.includes=cl,D.indexOf=_d,D.inRange=bf,D.invoke=L0,D.isArguments=Va,D.isArray=De,D.isArrayBuffer=mf,D.isArrayLike=pi,D.isArrayLikeObject=ti,D.isBoolean=y0,D.isBuffer=As,D.isDate=Sg,D.isElement=Eg,D.isEmpty=gf,D.isEqual=Rn,D.isEqualWith=zd,D.isError=mi,D.isFinite=S0,D.isFunction=Jr,D.isInteger=_f,D.isLength=fo,D.isMap=vf,D.isMatch=Bd,D.isMatchWith=E0,D.isNaN=Mg,D.isNative=M0,D.isNil=T0,D.isNull=Tg,D.isNumber=bg,D.isObject=Yn,D.isObjectLike=Zn,D.isPlainObject=Hr,D.isRegExp=xf,D.isSafeInteger=Fd,D.isSet=Ag,D.isString=yf,D.isSymbol=Wi,D.isTypedArray=fl,D.isUndefined=$r,D.isWeakMap=Hd,D.isWeakSet=wg,D.join=Su,D.kebabCase=zu,D.last=Oi,D.lastIndexOf=el,D.lowerCase=Cs,D.lowerFirst=B0,D.lt=Rg,D.lte=Lu,D.max=YE,D.maxBy=ZE,D.mean=KE,D.meanBy=QE,D.min=jE,D.minBy=JE,D.stubArray=W0,D.stubFalse=k0,D.stubObject=zE,D.stubString=BE,D.stubTrue=FE,D.multiply=$E,D.nth=Ym,D.noConflict=Lt,D.noop=ue,D.now=ff,D.pad=Hg,D.padEnd=Bu,D.padStart=F0,D.parseInt=Gg,D.random=Zd,D.reduce=ug,D.reduceRight=cg,D.repeat=wf,D.replace=Vg,D.result=P0,D.round=tM,D.runInContext=tt,D.sample=fg,D.size=Ld,D.snakeCase=H0,D.some=d0,D.sortedIndex=Pn,D.sortedIndexBy=Ze,D.sortedIndexOf=an,D.sortedLastIndex=Mn,D.sortedLastIndexBy=yr,D.sortedLastIndexOf=xs,D.startCase=Cf,D.startsWith=Wg,D.subtract=eM,D.sum=nM,D.sumBy=iM,D.template=Fu,D.times=HE,D.toFinite=_a,D.toInteger=Ne,D.toLength=va,D.toLower=Kd,D.toNumber=Gr,D.toSafeInteger=hl,D.toString=dn,D.toUpper=Df,D.trim=kg,D.trimEnd=G0,D.trimStart=Lf,D.truncate=n,D.unescape=i,D.uniqueId=VE,D.upperCase=a,D.upperFirst=c,D.each=rg,D.eachRight=Dd,D.first=Ha,lt(D,function(){var s={};return Ni(D,function(u,m){hn.call(D.prototype,m)||(s[m]=u)}),s}(),{chain:!1}),D.VERSION=r,Cr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){D[s].placeholder=D}),Cr(["drop","take"],function(s,u){Ge.prototype[s]=function(m){m=m===e?1:Fn(Ne(m),0);var S=this.__filtered__&&!u?new Ge(this):this.clone();return S.__filtered__?S.__takeCount__=kn(m,S.__takeCount__):S.__views__.push({size:kn(m,ut),type:s+(S.__dir__<0?"Right":"")}),S},Ge.prototype[s+"Right"]=function(m){return this.reverse()[s](m).reverse()}}),Cr(["filter","map","takeWhile"],function(s,u){var m=u+1,S=m==At||m==Y;Ge.prototype[s]=function(w){var B=this.clone();return B.__iteratees__.push({iteratee:_e(w,3),type:m}),B.__filtered__=B.__filtered__||S,B}}),Cr(["head","last"],function(s,u){var m="take"+(u?"Right":"");Ge.prototype[s]=function(){return this[m](1).value()[0]}}),Cr(["initial","tail"],function(s,u){var m="drop"+(u?"":"Right");Ge.prototype[s]=function(){return this.__filtered__?new Ge(this):this[m](1)}}),Ge.prototype.compact=function(){return this.filter(ht)},Ge.prototype.find=function(s){return this.filter(s).head()},Ge.prototype.findLast=function(s){return this.reverse().find(s)},Ge.prototype.invokeMap=Ie(function(s,u){return typeof s=="function"?new Ge(this):this.map(function(m){return eo(m,s,u)})}),Ge.prototype.reject=function(s){return this.filter(Cu(_e(s)))},Ge.prototype.slice=function(s,u){s=Ne(s);var m=this;return m.__filtered__&&(s>0||u<0)?new Ge(m):(s<0?m=m.takeRight(-s):s&&(m=m.drop(s)),u!==e&&(u=Ne(u),m=u<0?m.dropRight(-u):m.take(u-s)),m)},Ge.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Ge.prototype.toArray=function(){return this.take(ut)},Ni(Ge.prototype,function(s,u){var m=/^(?:filter|find|map|reject)|While$/.test(u),S=/^(?:head|last)$/.test(u),w=D[S?"take"+(u=="last"?"Right":""):u],B=S||/^find/.test(u);w&&(D.prototype[u]=function(){var q=this.__wrapped__,J=S?[1]:arguments,st=q instanceof Ge,Nt=J[0],It=st||De(q),Gt=function(nn){var un=w.apply(D,wa([nn],J));return S&&re?un[0]:un};It&&m&&typeof Nt=="function"&&Nt.length!=1&&(st=It=!1);var re=this.__chain__,fe=!!this.__actions__.length,Re=B&&!re,We=st&&!fe;if(!B&&It){q=We?q:new Ge(this);var Ce=s.apply(q,J);return Ce.__actions__.push({func:Ii,args:[Gt],thisArg:e}),new Ji(Ce,re)}return Re&&We?s.apply(this,J):(Ce=this.thru(Gt),Re?S?Ce.value()[0]:Ce.value():Ce)})}),Cr(["pop","push","shift","sort","splice","unshift"],function(s){var u=Ec[s],m=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",S=/^(?:pop|shift)$/.test(s);D.prototype[s]=function(){var w=arguments;if(S&&!this.__chain__){var B=this.value();return u.apply(De(B)?B:[],w)}return this[m](function(q){return u.apply(De(q)?q:[],w)})}}),Ni(Ge.prototype,function(s,u){var m=D[u];if(m){var S=m.name+"";hn.call(Or,S)||(Or[S]=[]),Or[S].push({name:u,func:m})}}),Or[Jn(e,M).name]=[{name:"wrapper",func:e}],Ge.prototype.clone=Xl,Ge.prototype.reverse=Ac,Ge.prototype.value=Qs,D.prototype.at=Jm,D.prototype.chain=Sr,D.prototype.commit=$m,D.prototype.next=tg,D.prototype.plant=Ms,D.prototype.reverse=lf,D.prototype.toJSON=D.prototype.valueOf=D.prototype.value=wd,D.prototype.first=D.prototype.head,qs&&(D.prototype[qs]=c0),D},os=zo();is?((is.exports=os)._=os,Lo._=os):ii._=os}).call(b2)}(pp,pp.exports)),pp.exports}var op={},DS;function w2(){if(DS)return op;DS=1,Object.defineProperty(op,"__esModule",{value:!0}),op.backtrace=void 0;function o(t,e,r){const l=[];let f=r?t:t.getParent();for(;f.getParent();)l.push([f.position.x,f.position.y]),f=f.getParent();return e&&l.push([f.position.x,f.position.y]),l.reverse()}return op.backtrace=o,op}var lp={},LS;function R2(){if(LS)return lp;LS=1,Object.defineProperty(lp,"__esModule",{value:!0}),lp.calculateHeuristic=void 0;function o(t,e,r,l){const f=Math.abs(r.x-e.x),h=Math.abs(r.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(f+h)*l;case"Euclidean":return Math.sqrt(f*f+h*h)*l;case"Chebyshev":return Math.max(f,h)*l;case"Octile":return(f+h-.58*Math.min(f,h))*l}}return lp.calculateHeuristic=o,lp}var up={},cp={},US;function C2(){if(US)return cp;US=1,Object.defineProperty(cp,"__esModule",{value:!0}),cp.Node=void 0;class o{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return cp.Node=o,cp}var NS;function RE(){if(NS)return up;NS=1,Object.defineProperty(up,"__esModule",{value:!0}),up.Grid=void 0;const o=C2();class t{constructor(r){r.width&&r.height?(this.width=r.width,this.height=r.height,this.numberOfFields=this.width*this.height):r.matrix&&(this.width=r.matrix[0].length,this.height=r.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(r.matrix||void 0,this.width,this.height,r.densityOfObstacles||0)}buildGridWithNodes(r,l,f,h){const p=[];let g=0;for(let _=0;_<f;_++){p[_]=[];for(let x=0;x<l;x++)p[_][x]=new o.Node({id:g,position:{x,y:_}}),g++}if(r===void 0){for(let _=0;_<f;_++)for(let x=0;x<l;x++)Math.floor(Math.random()*10)+1>10-h?p[_][x].setIsWalkable(!1):p[_][x].setIsWalkable(!0);return p}for(let _=0;_<f;_++)for(let x=0;x<l;x++)p[_][x].setIsWalkable(!r[_][x]);return p}getNodeAt(r){return this.gridNodes[r.y][r.x]}isWalkableAt(r){return this.gridNodes[r.y][r.x].getIsWalkable()}isOnTheGrid(r){return r.x>=0&&r.x<this.width&&r.y>=0&&r.y<this.height}getSurroundingNodes(r,l){const f=[],h=r.x-1,p=r.x+1,g=r.y-1,_=r.y+1;for(let x=g;x<=_;x++)for(let y=h;y<=p;y++)(y!==r.x||x!==r.y)&&this.isOnTheGrid({x:y,y:x})&&this.isWalkableAt({x:y,y:x})&&(l||y==r.x||x==r.y)&&f.push(this.getNodeAt({x:y,y:x}));return f}setGrid(r){this.gridNodes=r}resetGrid(){for(let r=0;r<this.gridNodes.length;r++)for(let l=0;l<this.gridNodes[r].length;l++)this.gridNodes[r][l].setIsOnClosedList(!1),this.gridNodes[r][l].setIsOnOpenList(!1),this.gridNodes[r][l].setParent(void 0),this.gridNodes[r][l].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const r=[];let l=0;for(let f=0;f<this.height;f++){r[f]=[];for(let h=0;h<this.width;h++)r[f][h]=new o.Node({id:l,position:{x:h,y:f},walkable:this.gridNodes[f][h].getIsWalkable()}),l++}return r}}return up.Grid=t,up}var OS;function D2(){if(OS)return sp;OS=1,Object.defineProperty(sp,"__esModule",{value:!0}),sp.AStarFinder=void 0;const o=A2(),t=w2(),e=R2(),r=RE();class l{constructor(h){this.grid=new r.Grid({width:h.grid.width,height:h.grid.height,matrix:h.grid.matrix||void 0,densityOfObstacles:h.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=h.diagonalAllowed!==void 0?h.diagonalAllowed:!0,this.heuristic=h.heuristic?h.heuristic:"Manhattan",this.includeStartNode=h.includeStartNode!==void 0?h.includeStartNode:!0,this.includeEndNode=h.includeEndNode!==void 0?h.includeEndNode:!0,this.allowPathAsCloseAsPossible=h.allowPathAsCloseAsPossible||!1,this.weight=h.weight||1}findPath(h,p){this.closedList=[],this.openList=[],this.grid.resetGrid();const g=this.grid.getNodeAt(h),_=this.grid.getNodeAt(p);if(!this.grid.isWalkableAt(p)||!this.grid.isWalkableAt(h))return[];g.setIsOnOpenList(!0),this.openList.push(g);for(let x=0;x<this.grid.height;x++)for(let y=0;y<this.grid.width;y++){let E=this.grid.getNodeAt({x:y,y:x});this.grid.isWalkableAt({x:y,y:x})?E.setHValue((0,e.calculateHeuristic)(this.heuristic,E.position,_.position,this.weight)):(E.setFGHValuesToZero(),E.setIsOnClosedList(!0),this.closedList.push(E))}for(;this.openList.length!==0;){const x=(0,o.minBy)(this.openList,E=>E.getFValue());if(x.setIsOnOpenList(!1),(0,o.remove)(this.openList,x),x.setIsOnClosedList(!0),this.closedList.push(x),x===_)return(0,t.backtrace)(_,this.includeStartNode,this.includeEndNode);const y=this.grid.getSurroundingNodes(x.position,this.diagonalAllowed);for(let E in y){const T=y[E];if(T.getIsOnClosedList())continue;const R=x.getGValue()+(T.position.x!==x.position.x||T.position.y==x.position.y?this.weight:this.weight*1.41421);(!T.getIsOnOpenList()||R<T.getGValue())&&(T.setGValue(R),T.setParent(x),T.getIsOnOpenList()?T.setParent(x):(T.setIsOnOpenList(!0),this.openList.push(T)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(h){this.heuristic=h}setWeight(h){this.weight=h}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return sp.AStarFinder=l,sp}var IS;function L2(){return IS||(IS=1,function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.Grid=o.AStarFinder=void 0;var t=D2();Object.defineProperty(o,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=RE();Object.defineProperty(o,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(Ov)),Ov}var CE=L2();class DE{constructor(t){Rt(this,"currentHealth");Rt(this,"fullHealth");Rt(this,"offset");Rt(this,"red");Rt(this,"green");Rt(this,"widthFactor");Rt(this,"heightFactor");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new Hy(new Sx({map:new Xy().load("./textures/red.png")})),this.green=new Hy(new Sx({map:new Xy().load("./textures/green.png")})),this.widthFactor=t.widthFactor??1,this.heightFactor=t.heightFactor??1,this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const r=this.widthFactor*1,l=this.heightFactor*.12;this.red.scale.set(r,l,l),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(r*Math.max(this.currentHealth/this.fullHealth,0),l,l),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}class dh extends Fs{constructor(e){super(e);Rt(this,"battleSide");Rt(this,"pos");Rt(this,"radius");Rt(this,"hb");Rt(this,"fullHealth");Rt(this,"health");Rt(this,"objective");Rt(this,"healthBarOffset",new I(0,wt.TILE_SIZE*.65,0));Rt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new yt(Pt.RED),new yt(Pt.DARK)]});Rt(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new yt(Pt.RED),new yt(Pt.ORANGE),new yt(Pt.YELLOW),new yt(Pt.WHITE)],amount:30,force:3,size:.8});Rt(this,"SPEED",1);Rt(this,"multiplier");this.battleSide=e.battleSide,this.pos=e.pos,this.radius=e.radius,this.fullHealth=e.health,this.health=e.health,this.objective=e.objective,this.hb=new DE({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:this.healthBarOffset,heightFactor:.5,widthFactor:.6}),this.multiplier=e.multiplier}afterSpawn(e,r){super.afterSpawn(e,r),this.hb.start(e)}beforeDeath(e,r,l){super.beforeDeath(e,r,l),this.hb.end(r),bx.createExplosion(r,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(e,r,l,f){super.update(e,r,l,f);const h=.01;if(this.pos.distanceTo(this.objective.position.clone())<h)this.objective.health-=this.multiplier,this.kill(),bx.createExplosion(l,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(f)<h){this.pos=f;const p=So.createSimpleGrid(l.actorsGrid),_=new CE.AStarFinder({grid:{matrix:p},diagonalAllowed:!0}).findPath(f,this.objective.position.clone());if(_.length>1){const x=new St(_[1][0],_[1][1]);l.actorsGrid[f.x][f.y].actors=l.actorsGrid[f.x][f.y].actors.filter(y=>y!==this),l.actorsGrid[x.x][x.y].actors.push(this)}}else{const p=.0012*this.SPEED,g=r*p,_=f.clone().sub(this.pos).normalize(),x=this.pos.distanceTo(f);this.pos.add(_.clone().multiplyScalar(Math.min(g,x)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new I(this.pos.x,this.mesh.position.y,this.pos.y)}}class U2 extends dh{constructor(e){const r=wt.TILE_SIZE/5,l=wt.TILE_SIZE*.75,f=new I(e.pos.x,l/2,e.pos.y),h=new Kn({center:f,parts:[{mesh:se.createGem({size:r,color:new yt(Pt.METAL)}),offset:new I(0,l/3,0)},{mesh:se.createTorus({radius:r,color:new yt(Pt.BLUE)}),offset:new I(0,0,0)},{mesh:se.createSphere({radius:r/2,color:new yt(Pt.DARK)}),offset:new I(0,-.75/3,0)}]});super({mesh:h,battleSide:nc.ENEMY,pos:e.pos,radius:r,health:3,objective:e.objective,multiplier:e.multiplier});Rt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new yt(Pt.BLUE),new yt(Pt.DARK_GREEN)],amount:50,size:.5,force:2});Rt(this,"SPEED",1.5)}update(e,r,l,f){super.update(e,r,l,f),this.mesh.parts.forEach((h,p)=>{const g=p%2?-1:1;h.mesh.rotation.y+=r/200*g,p===2&&(h.mesh.rotation.x+=r/100*g,h.mesh.rotation.z+=r/50*g)})}}class N2 extends dh{constructor(e){const r=wt.TILE_SIZE/4,l=wt.TILE_SIZE,f=new I(e.pos.x,wt.TILE_SIZE/2,e.pos.y),h=new Kn({center:f,parts:[{mesh:se.createGem({size:r,color:new yt(Pt.METAL)}),offset:new I(0,l/3,0)},{mesh:se.createTorus({radius:r,color:new yt(Pt.LIGHT_GREEN)}),offset:new I(0,0,0)},{mesh:se.createSphere({radius:r/2,color:new yt(Pt.DARK)}),offset:new I(0,-1/3,0)}]});super({mesh:h,battleSide:nc.ENEMY,pos:e.pos,radius:r,health:5,objective:e.objective,multiplier:e.multiplier});Rt(this,"SPEED",.9);Rt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new yt(Pt.LIGHT_GREEN),new yt(Pt.GREEN),new yt(Pt.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(e,r,l){super.beforeDeath(e,r,l),r.addActor(new U2({pos:l,objective:this.objective,multiplier:this.multiplier}),l)}update(e,r,l,f){super.update(e,r,l,f),this.mesh.parts.forEach((h,p)=>{const g=p%2?-1:1;h.mesh.rotation.y+=r/200*g,p===2&&(h.mesh.rotation.x+=r/100*g,h.mesh.rotation.z+=r/50*g)})}}class O2 extends dh{constructor(e){const r=wt.TILE_SIZE/3,l=wt.TILE_SIZE,f=new I(e.pos.x,l/2,e.pos.y),h=new Kn({center:f,parts:[{mesh:se.createTorusKnotBlob({radius:r,color:new yt(Pt.YELLOW)}),offset:new I(0,0,0)},{mesh:se.createTorusKnotBlob({radius:r*2/3,color:new yt(Pt.ORANGE)}),offset:new I(0,0,0)}]});super({mesh:h,battleSide:nc.ENEMY,pos:e.pos,radius:r,health:10,objective:e.objective,multiplier:e.multiplier});Rt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new yt(Pt.YELLOW),new yt(Pt.DARK)],amount:60,size:.8,force:3});Rt(this,"SPEED",.7)}update(e,r,l,f){super.update(e,r,l,f),this.mesh.parts.forEach((h,p)=>{const g=p%2?-1:1;h.mesh.rotation.y+=r/100*g,p===1&&(h.mesh.rotation.x+=r/200*g,h.mesh.rotation.z+=r/100*g)})}}class I2 extends dh{constructor(t){const e=wt.TILE_SIZE/4,r=wt.TILE_SIZE,l=new I(t.pos.x,wt.TILE_SIZE/2,t.pos.y),f=new Kn({center:l,parts:[{mesh:se.createGem({size:e,color:new yt(Pt.WHITE)}),offset:new I(0,0,0)},{mesh:se.createSphere({radius:e,color:new yt(Pt.DARK)}),offset:new I(0,-1/3,0)},{mesh:se.createSphere({radius:e,color:new yt(Pt.RED)}),offset:new I(0,r/3,0)}]});super({mesh:f,battleSide:nc.ENEMY,pos:t.pos,radius:e,health:5,objective:t.objective,multiplier:t.multiplier})}update(t,e,r,l){super.update(t,e,r,l),this.mesh.parts.forEach((f,h)=>{const p=h%2?-1:1;f.mesh.rotation.y+=e/500*p,f.mesh.rotation.z+=e/200*p,f.mesh.rotation.x+=e/100*p})}}const Sp=class Sp extends Fs{constructor(e){const r=wt.TILE_SIZE,l=new Kn({center:new I(e.position.x,r/2,e.position.y),parts:[{mesh:se.createBox({color:new yt(Pt.DARK),depth:wt.TILE_SIZE,height:r,width:wt.TILE_SIZE}),offset:new I(0,-1,0)},{mesh:new ty(new yt(Pt.RED),5),offset:new I(0,-1/8,0)}]});super({mesh:l});Rt(this,"spawnTimeout",0);Rt(this,"multiplier");Rt(this,"position");this.multiplier=e.multiplier,this.position=e.position}update(e,r,l,f){if(super.update(e,r,l,f),!(l instanceof Cl))throw new Error("Spawner can only be used in a BattleFieldContainer");const h=this.spawnTimeout+r,p=Math.floor(h/Sp.SPAWN_TIMEOUT);for(let g=0;g<p;g++){const _={pos:f,objective:l.headQuarters,multiplier:this.multiplier},x=Math.random();Math.random()<.33?l.addActor(new I2(_),f):x<.66?l.addActor(new O2(_),f):l.addActor(new N2(_),f)}this.spawnTimeout=h%Sp.SPAWN_TIMEOUT}};Rt(Sp,"SPAWN_TIMEOUT",3e3);let wx=Sp;const So={createSimpleGrid:o=>{var f;const t=[];for(let h=0;h<o.length;h++){const p=[];for(let g=0;g<o[h].length;g++)p.push(o[h][g].isWalkable?0:1);t.push(p)}const e=t.length,r=((f=t[0])==null?void 0:f.length)??0;return Array.from({length:r},(h,p)=>Array.from({length:e},(g,_)=>t[_][p]))},getBoundedUncheckedNeighbors:(o,t,e)=>[new St(o+1,t+1),new St(o+1,t),new St(o+1,t-1),new St(o,t+1),new St(o,t-1),new St(o-1,t+1),new St(o-1,t),new St(o-1,t-1)].filter(l=>{var p;const{x:f,y:h}=l;return 0<=f&&f<e.length&&0<=h&&h<(((p=e[0])==null?void 0:p.length)??0)}),getPositionHash(o){return`${o.x},${o.y}`},findClosestEnemy:o=>{const{grid:t,origin:e,myBattleSide:r,range:l,objective:f}=o,h=Math.max(1,l),p=new Set,g=[e.clone()];p.add(So.getPositionHash(e));let _=0;const x=[];for(;_<g.length;){if(_>t.length*t[0].length*2)return null;const T=g[_];_++;const R=So.getBoundedUncheckedNeighbors(T.x,T.y,t);for(const C of R){if(!t[C.x][C.y].isWalkable)continue;const b=t[C.x][C.y].actors.find(M=>M instanceof dh&&M.battleSide!==r);b?x.push({pos:T,enemy:b}):!p.has(So.getPositionHash(C))&&C.distanceTo(e)<=h&&(g.push(C),p.add(So.getPositionHash(C)))}}if(x.length===0)return null;let y=x[0];return x.forEach(E=>{E.pos.distanceTo(f)<y.pos.distanceTo(f)&&(y=E)}),y},checkIfSpawnersCanWalkToHeadquarters:(o,t,e,r)=>{const l=[];let f=!0;for(const h of t){const p=So.createSimpleGrid(o);r&&(p[r.y][r.x]=1);const _=new CE.AStarFinder({grid:{matrix:p},diagonalAllowed:!0}).findPath(h.position,e.position);_.length===0&&(f=!1),l.push(_)}return{canWalk:f,paths:l}}};class PS extends aa{constructor(){const e=new Kn({center:new I(0,0,0),parts:[]});super({mesh:e});Rt(this,"pathSubSegments",[])}onPathChangeEvent(e){const{grid:r,headquarters:l,scene:f,spawners:h}=e;this.pathSubSegments.forEach(g=>f.remove(g)),this.pathSubSegments=[];const{paths:p}=So.checkIfSpawnersCanWalkToHeadquarters(r,h,l);for(const g of p)for(let _=1;_<g.length;_++){const[x,y]=g[_-1],[E,T]=g[_],R=se.createLine({pos1:new I(x,0,y),pos2:new I(E,0,T),color:new yt(Pt.LIGHT_GREEN)});this.pathSubSegments.push(R),f.add(R)}}}class P2 extends aa{constructor(t){const{linePosition:e,height:r,width:l}=t,f=new I(l/2-wt.TILE_SIZE/2,0,e-wt.TILE_SIZE/2),h=r-f.z-wt.TILE_SIZE/2,p=new Kn({center:f,parts:[{mesh:se.createBox({width:l,height:wt.TILE_SIZE/16,depth:wt.TILE_SIZE/16,color:new yt(Pt.RED),transparent:{value:.5}}),offset:new I(0,0,0)},{mesh:se.createBox({width:l,height:wt.TILE_SIZE/16,depth:wt.TILE_SIZE/16,color:new yt(Pt.RED),transparent:{value:.5}}),offset:new I(0,0,h)},{mesh:se.createBox({width:wt.TILE_SIZE/16,height:wt.TILE_SIZE/16,depth:h,color:new yt(Pt.RED),transparent:{value:.5}}),offset:new I(-l/2,0,h/2)},{mesh:se.createBox({width:wt.TILE_SIZE/16,height:wt.TILE_SIZE/16,depth:h,color:new yt(Pt.RED),transparent:{value:.5}}),offset:new I(l/2,0,h/2)},{mesh:se.createBox({width:l,height:wt.TILE_SIZE/16,depth:h,basicMaterial:!0,color:new yt(Pt.RED),transparent:{value:.1}}),offset:new I(0,0,(r-f.z)/2-wt.TILE_SIZE/4)}]});super({mesh:p})}}class z2 extends aa{constructor(t){const e=se.createSphere({radius:wt.TILE_SIZE/32,color:new yt(Pt.WHITE),basicMaterial:!0});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}class M_ extends aa{constructor(t){const e=wt.TILE_SIZE*2.5,r=wE.createTreeComposite({position:new I(t.position.x,e/2+(Math.random()-.5),t.position.y),height:e});super({mesh:r})}}class B2 extends aa{constructor(t){const e=new Kn({center:t.position,parts:[{mesh:se.createBox({width:t.width,height:wt.TILE_SIZE*.8,depth:t.height,color:new yt(Pt.BLUE),transparent:{value:.5}}),offset:new I(0,0,0)},{mesh:se.createBox({width:t.width,height:wt.TILE_SIZE,depth:t.height,color:new yt(Pt.DIRT)}),offset:new I(0,-.8,0)}]});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}var pn=(o=>(o.BR="Bridge",o.BF="Bonfire",o.BSH="Bush",o.GRS="Grass",o.HQ="HeadQuarters",o.RV="River",o.RN="Ruin",o.SPW="Spawner",o.STN="Stone",o.TR="Tree",o.WTR="Water",o))(pn||{});const Rx={createHorizontalLine(o){const{x1:t,x2:e,y:r}=o,l=[];for(let f=t;f<=e;f++)l.push(new St(f,r));return l},createVerticalLine(o){const{y1:t,y2:e,x:r}=o,l=[];for(let f=t;f<=e;f++)l.push(new St(r,f));return l}},F2=o=>[...Rx.createHorizontalLine({x1:0,x2:wt.WIDTH-1,y:o}).map(t=>({type:pn.RV,position:t})).filter(({position:t})=>!(2<=t.x&&t.x<=10&&!(5<=t.x&&t.x<=7))),...Rx.createHorizontalLine({x1:2,x2:10,y:o}).map(t=>({type:pn.BR,position:t}))],H2={name:"Learning the Basics",difficultyMultiplier:1,tiles:[{type:pn.HQ,position:new St(Math.floor(wt.WIDTH/2),1)},{type:pn.SPW,position:new St(1,18)},{type:pn.SPW,position:new St(11,18)},...Rx.createVerticalLine({y1:8,y2:12,x:0}).map(o=>F2(o.y)).flat(),{type:pn.BF,position:new St(2,14)},{type:pn.BF,position:new St(11,15)},{type:pn.BF,position:new St(7,18)},{type:pn.TR,position:new St(1,13)},{type:pn.TR,position:new St(0,14)},{type:pn.TR,position:new St(0,16)},{type:pn.TR,position:new St(7,13)},{type:pn.TR,position:new St(12,13)},{type:pn.TR,position:new St(12,16)},{type:pn.STN,position:new St(0,15)},{type:pn.STN,position:new St(3,19)},{type:pn.STN,position:new St(12,17)},{type:pn.STN,position:new St(12,14)},{type:pn.BSH,position:new St(4,19)},{type:pn.BSH,position:new St(6,13)},{type:pn.BSH,position:new St(10,17)}],zones:{type:"enabled",line:13}},fp={name:"In Progress",difficultyMultiplier:1,tiles:[{type:pn.HQ,position:new St(Math.floor(wt.WIDTH/2),1)},{type:pn.SPW,position:new St(1,18)},{type:pn.SPW,position:new St(11,18)}],zones:{type:"disabled"}},LE=[H2,fp,fp,fp,fp,fp],zS={buildLevel:o=>{const t=[],e=[];for(let r=0;r<o.width;r++)for(let l=0;l<o.height;l++){const f=o.level.tiles.find(h=>h.position.x===r&&h.position.y===l);if(f===void 0)t.push({type:"component",component:new T2({position:new I(r*o.tileSize,-o.tileSize/2,l*o.tileSize),size:o.tileSize,color:new yt(Pt.DARK_GREEN)})});else{const h=new St(f.position.x*o.tileSize,f.position.y*o.tileSize),p=new I(r*o.tileSize,-o.tileSize/2,l*o.tileSize);switch(f.type){case pn.HQ:{o.headQuarters.position=h,t.push({type:"actor",actor:o.headQuarters,position:h,static:!1});break}case pn.SPW:{const g=new wx({position:h,multiplier:o.level.difficultyMultiplier});t.push({type:"actor",actor:g,position:h,static:!1}),e.push(g);break}case pn.RV:{t.push({type:"static",position:h});break}case pn.BR:{t.push({type:"component",component:new M2({position:p,size:o.tileSize})});break}case pn.BF:{t.push({type:"actor",actor:new Ax({position:p,size:o.tileSize}),position:h,static:!0});break}case pn.TR:{t.push({type:"actor",actor:new G2({position:p,size:o.tileSize}),position:h,static:!0});break}case pn.STN:{t.push({type:"actor",actor:new E2({position:p,size:o.tileSize}),position:h,static:!0});break}case pn.BSH:{t.push({type:"actor",actor:new S2({position:p,size:o.tileSize}),position:h,static:!0});break}}}}return{worldBuilderCommands:t,spawners:e}},inlineUpdateLevelGridsPlaceableStatus:o=>{const{container:t,grid:e,levelDefinition:r,height:l,width:f}=o;if(r.zones.type==="disabled")return;const h=new P2({linePosition:r.zones.line*wt.TILE_SIZE,height:l,width:f});for(let p=0;p<e.length;p++)for(let g=0;g<e[p].length;g++){const _=g>=r.zones.line;e[p][g].isPlaceable=_,g===r.zones.line&&t.addComponent(h)}}};class G2 extends Fs{constructor(t){const e=wt.TILE_SIZE*2,r=wE.createTreeComposite({position:t.position.clone().add(new I(0,e*.75,0)),height:e});r.parts=[...r.parts,{mesh:se.createBox({width:t.size,height:t.size/4,depth:t.size,color:new yt(Pt.DARK_GREEN)}),offset:new I(0,-(t.size*9)/8,0)},{mesh:se.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new yt(Pt.DIRT)}),offset:new I(0,-(t.size*12)/8,0)}],super({mesh:r})}}const I_=class I_ extends aa{constructor({position:e,color:r,sizeFactor:l}){const f=wt.TILE_SIZE/72*l,h=se.createSphere({radius:f,color:r===void 0?new yt(Pt.WHITE):r,basicMaterial:!0});h.position.set(e.x,e.y,e.z);super({mesh:h});Rt(this,"lifeTime",0);Rt(this,"position");Rt(this,"velocity");this.position=e,this.velocity=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(wt.TILE_SIZE*5e-5)}update(e,r,l){super.update(e,r,l),this.velocity.y-=5e-6*r,this.position=this.position.add(this.velocity.clone().multiplyScalar(r)),this.lifeTime+=r,this.lifeTime>I_.TOTAL_LIFE_TIME&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Rt(I_,"TOTAL_LIFE_TIME",1e3);let Cx=I_;const Ep=class Ep extends aa{constructor(e){const r=wt.TILE_SIZE/48*e.bulletConfig.sizeFactor;super({mesh:se.createSphere({radius:r,color:e.bulletConfig.color===void 0?new yt(Pt.WHITE):e.bulletConfig.color,basicMaterial:!0})});Rt(this,"battleSide");Rt(this,"position");Rt(this,"radius");Rt(this,"direction");Rt(this,"bulletConfig");Rt(this,"particleTimeout",0);Rt(this,"hasDamaged",new Set);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=r,this.bulletConfig=e.bulletConfig}update(e,r,l){var C,b;super.update(e,r,l);const h=.07*r*this.bulletConfig.speedFactor,p=this.direction.clone().normalize(),g=this.position.clone().add(new I(p.x*h,0,p.y*h)),_=wt.TILE_SIZE/4,x=this.position.distanceTo(g),y=Math.max(1,Math.floor(x/_));for(let M=0;M<y;M++){const H=this.position.clone().add(new I(p.x*_,0,p.y*_)),z=[new St(H.x-_,H.z-_),new St(H.x-_,H.z),new St(H.x-_,H.z+_),new St(H.x,H.z-_),new St(H.x,H.z),new St(H.x,H.z+_),new St(H.x+_,H.z-_),new St(H.x+_,H.z),new St(H.x+_,H.z+_)].map(N=>new St(Math.floor(N.x),Math.floor(N.y)));for(const N of z){const X=(C=l.actorsGrid[N.x])==null?void 0:C[N.y];if(X){for(const W of X.actors)if(W instanceof dh&&W.battleSide!==this.battleSide&&W.pos.distanceTo(new St(this.position.x,this.position.z))<this.radius+W.radius&&!this.hasDamaged.has(W)){W.health-=this.bulletConfig.damage,this.hasDamaged.add(W);break}}}}this.position.set(g.x,this.position.y,g.z);const E=l.actorsGrid.length,T=((b=l.actorsGrid[0])==null?void 0:b.length)??0;-E<=this.position.x&&this.position.x<2*E&&-T<=this.position.z&&this.position.z<2*T||this.kill(),this.particleTimeout+=r,this.particleTimeout>Ep.PARTICLE_TIMEOUT&&(l.addComponent(new Cx({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%Ep.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Rt(Ep,"PARTICLE_TIMEOUT",30);let Dx=Ep;class UE extends Fs{constructor(e){super(e);Rt(this,"position");Rt(this,"bulletConfig");Rt(this,"SHOOT_TIMEOUT",1e3);Rt(this,"shootTimeout",0);Rt(this,"range",5);Rt(this,"objective");this.position=e.position,this.bulletConfig=e.bulletConfig,this.objective=e.objective}update(e,r,l,f){super.update(e,r,l,f);const h=this.shootTimeout+r;if(this.shootTimeout=h%this.SHOOT_TIMEOUT,h>=this.SHOOT_TIMEOUT){const g=So.findClosestEnemy({grid:l.actorsGrid,origin:this.position.clone(),myBattleSide:nc.ALLY,range:this.range,objective:this.objective.position.clone()}),_=g?new St(g.enemy.mesh.position.x-this.position.x,g.enemy.mesh.position.z-this.position.y).normalize():null;if(_!==null){const x=new Dx({battleSide:nc.ALLY,direction:_,position:new I(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});l.addComponent(x)}}}}class V2 extends UE{constructor(e){const r=new I(e.position.x,wt.TILE_SIZE,e.position.y),l=se.createGem({size:wt.TILE_SIZE/4,color:new yt(Pt.WHITE)}),f=new Kn({center:r,parts:[{mesh:se.createBox({width:wt.TILE_SIZE,height:wt.TILE_SIZE/2,depth:wt.TILE_SIZE,color:new yt(Pt.DARK)}),offset:new I(0,-1*3/4,0)},{mesh:se.createBox({width:wt.TILE_SIZE*3/4,height:wt.TILE_SIZE,depth:wt.TILE_SIZE*3/4,color:new yt(Pt.METAL)}),offset:new I(0,0,0)},{mesh:se.createBox({width:wt.TILE_SIZE,height:wt.TILE_SIZE/2,depth:wt.TILE_SIZE,color:new yt(Pt.DARK)}),offset:new I(0,wt.TILE_SIZE*3/4,0)},{mesh:l,offset:new I(0,wt.TILE_SIZE*3/2,0)}]});super({mesh:f,position:e.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:e.objective});Rt(this,"gem");this.gem=l}update(e,r,l,f){super.update(e,r,l,f),this.gem.rotateX(r/1e3),this.gem.rotateZ(r/500)}}class W2 extends UE{constructor(e){const r=new I(e.position.x,wt.TILE_SIZE,e.position.y),l=se.createGem({size:wt.TILE_SIZE/4,color:new yt(Pt.YELLOW)}),f=new Kn({center:r,parts:[{mesh:se.createBox({width:wt.TILE_SIZE,height:wt.TILE_SIZE/2,depth:wt.TILE_SIZE,color:new yt(Pt.RED)}),offset:new I(0,-1*3/4,0)},{mesh:se.createBox({width:wt.TILE_SIZE*3/4,height:wt.TILE_SIZE,depth:wt.TILE_SIZE*3/4,color:new yt(Pt.DARK)}),offset:new I(0,0,0)},{mesh:se.createBox({width:wt.TILE_SIZE,height:wt.TILE_SIZE/2,depth:wt.TILE_SIZE,color:new yt(Pt.RED)}),offset:new I(0,wt.TILE_SIZE*3/4,0)},{mesh:l,offset:new I(0,wt.TILE_SIZE*3/2,0)}]});super({mesh:f,position:e.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new yt(Pt.YELLOW),trailSizeFactor:1.2},objective:e.objective});Rt(this,"gem");Rt(this,"SHOOT_TIMEOUT",2e3);this.gem=l}update(e,r,l,f){super.update(e,r,l,f),this.gem.rotateX(r/500),this.gem.rotateZ(r/250)}}class k2 extends Fs{constructor(e){const r=h=>se.createBox({width:h==="horizontal"?wt.TILE_SIZE:wt.TILE_SIZE/16,height:wt.TILE_SIZE/16,depth:h==="vertical"?wt.TILE_SIZE:wt.TILE_SIZE/16,color:new yt(Pt.RED)}),l=new I(e.pos.x,wt.TILE_SIZE/16,e.pos.y),f=new Kn({center:l,parts:[{mesh:r("vertical"),offset:new I(wt.TILE_SIZE*15/32,0,0)},{mesh:r("vertical"),offset:new I(-15/32,0,0)},{mesh:r("horizontal"),offset:new I(0,0,wt.TILE_SIZE*15/32)},{mesh:r("horizontal"),offset:new I(0,0,-15/32)}]});super({mesh:f});Rt(this,"pos");Rt(this,"greenMaterial",new Vr({color:new yt(Pt.LIGHT_GREEN)}));Rt(this,"redMaterial",new Vr({color:new yt(Pt.RED)}));Rt(this,"RENDER_TIMEOUT",50);Rt(this,"renderTimeout",0);Rt(this,"addMessage");Rt(this,"notifyPathChangeEvent");this.pos=e.pos,this.addMessage=e.addMessage,this.notifyPathChangeEvent=e.notifyPathChangeEvent}update(e,r,l,f){if(super.update(e,r,l,f),!(l instanceof Cl))throw new Error("Cursor can only be used in a BattleFieldContainer");let h=0;e.keyboardHandler.wasPressed("ArrowUp")?h=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(h=1);let p=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?p=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(p=1),p!==0||h!==0){const x=f.clone().add(new St(p,h));this.attemptToMove({container:l,newPos:x,currentPos:f})}const{canPlace:g,feedback:_}=this.checkCanPlace({container:l});g||(_.isPlaceable&&this.addMessage("Enemy territory is off-limits! Try again on our side.",{id:"enemy-territory"}),_.itBlocksAvailablePath&&this.addMessage("The enemies need a way through — you can't block every path!",{id:"only-available-path"})),e.keyboardHandler.wasPressed("z")?this.addDefense({container:l,type:"simple"}):e.keyboardHandler.wasPressed("x")?this.addDefense({container:l,type:"rocket"}):e.keyboardHandler.wasPressed("c")&&this.addDefense({container:l,type:"box"})}attemptToMove(e){var p;const{container:r,newPos:l,currentPos:f}=e,h=f??this.pos;!(0<=l.x&&l.x<r.actorsGrid.length)||!(0<=l.y&&l.y<(((p=r.actorsGrid[0])==null?void 0:p.length)??0))||(this.pos=l,r.actorsGrid[h.x][h.y].actors=r.actorsGrid[h.x][h.y].actors.filter(g=>g!==this),r.actorsGrid[this.pos.x][this.pos.y].actors.push(this))}graphics(e,r,l){if(!(l instanceof Cl))throw new Error("Cursor can only be used in a BattleFieldContainer");const f=1-Math.exp(-.005*r);this.mesh.position=new I(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*f,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*f),l.camera.position.set(this.mesh.position.x+wt.TILE_SIZE*3,this.mesh.position.y+wt.TILE_SIZE*8,this.mesh.position.z+wt.TILE_SIZE*12),l.camera.lookAt(this.mesh.position);const{canPlace:h}=this.checkCanPlace({container:l});h?this.mesh.parts.forEach(y=>y.mesh.material=this.greenMaterial):this.mesh.parts.forEach(y=>y.mesh.material=this.redMaterial),this.renderTimeout+=r,this.renderTimeout>this.RENDER_TIMEOUT&&e.triggerRender(),this.renderTimeout=this.renderTimeout%this.RENDER_TIMEOUT;const p=.8,g=1.2,_=3e-4,x=e.mouseHandler.consumeWheel();x!==0&&(l.camera.zoom=Math.max(p,Math.min(l.camera.zoom+-x*_,g)),l.camera.updateProjectionMatrix())}addDefense(e){const{container:r,type:l}=e,{canPlace:f}=this.checkCanPlace({container:r});if(!f)return;let h;switch(l){case"simple":h=new V2({position:this.pos.clone(),objective:r.headQuarters});break;case"rocket":h=new W2({position:this.pos.clone(),objective:r.headQuarters});break;case"box":h=new y2({position:new I(this.pos.x,wt.TILE_SIZE/2,this.pos.y),size:wt.TILE_SIZE});break}r.addActor(h,this.pos.clone()),r.actorsGrid[this.pos.x][this.pos.y].isWalkable=!1,this.notifyPathChangeEvent()}checkCanPlace(e){const{container:r}=e,{isPlaceable:l,isWalkable:f}=r.actorsGrid[this.pos.x][this.pos.y],h=r.actorsGrid[this.pos.x][this.pos.y].actors.find(x=>x!==this)===void 0,{canWalk:p}=So.checkIfSpawnersCanWalkToHeadquarters(r.actorsGrid,r.spawners,r.headQuarters,this.pos.clone()),g=!p;return{canPlace:!l&&f&&h&&!g,feedback:{isPlaceable:l,isWalkable:f,isNotOccupied:h,itBlocksAvailablePath:g}}}}class BS extends Fs{constructor({health:e}){const r=wt.TILE_SIZE/2,l=wt.TILE_SIZE*2,f=wt.TILE_SIZE/2,h=new St(0,0),p=new I(h.x,wt.TILE_SIZE,h.y),g=se.createGem({size:l/4,color:new yt(Pt.LIGHT_GREEN),basicMaterial:!0}),_=new Kn({center:p,parts:[{mesh:se.createBox({color:new yt(Pt.DARK),depth:f,height:l/4,width:r}),offset:new I(0,-2*3/8,0)},{mesh:g,offset:new I(0,l*2/8,0)},{mesh:new ty(new yt(Pt.LIGHT_GREEN),20),offset:new I(0,l*2/8,0)},{mesh:se.createBox({color:new yt(Pt.LIGHT_GREEN),depth:wt.TILE_SIZE,height:wt.TILE_SIZE,width:wt.TILE_SIZE}),offset:new I(0,-1*3/2,0)}]});super({mesh:_});Rt(this,"gem");Rt(this,"hb");Rt(this,"fullHealth");Rt(this,"health");Rt(this,"position");this.gem=g,this.position=h,this.health=e,this.fullHealth=e,this.hb=new DE({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new I(0,l/2+wt.TILE_SIZE/2,0)})}afterSpawn(e,r){super.afterSpawn(e,r),this.hb.start(e)}beforeDeath(e,r,l){super.beforeDeath(e,r,l),this.hb.end(r)}update(e,r,l,f){super.update(e,r,l,f),this.gem.rotateX(r/1e3),this.gem.rotateY(r/1900),this.gem.rotateZ(r/500),this.position=f,this.hb.update(this.health,this.mesh.position.clone())}graphics(e,r,l,f){super.graphics(e,r,l,f),this.mesh.position=new I(this.position.x,this.mesh.position.y,this.position.y)}}const FS=2e3;class X2 extends aa{constructor(){const t=new Kn({center:new I(0,FS,0),parts:[{mesh:se.createBox({color:new yt(Pt.BLUE),depth:wt.TILE_SIZE,height:wt.TILE_SIZE/8,width:wt.TILE_SIZE,basicMaterial:!0}),offset:new I(0,0,0)}]});super({mesh:t})}update(t,e,r){if(super.update(t,e,r),!(r instanceof Cl))throw new Error("Cursor can only be used in a BattleFieldContainer");const l=p2.projectMousePosition({camera:r.camera,mousePosition:new St(t.mouseHandler.position.x,t.mouseHandler.position.y)}),f=new St(Math.floor(l.x+wt.TILE_SIZE/2),Math.floor(l.y+wt.TILE_SIZE/2));let h=!0;0<=f.x&&f.x<=wt.WIDTH-1&&0<=f.y&&f.y<=wt.HEIGHT-1||(h=!1),this.mesh.position=new I(f.x*wt.TILE_SIZE,h?0:FS,f.y*wt.TILE_SIZE),t.mouseHandler.consumeClick()&&h&&r.cursor.attemptToMove({container:r,newPos:f})}}function NE(o){var t,e,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var l=o.length;for(t=0;t<l;t++)o[t]&&(e=NE(o[t]))&&(r&&(r+=" "),r+=e)}else for(e in o)o[e]&&(r&&(r+=" "),r+=e);return r}function OE(){for(var o,t,e=0,r="",l=arguments.length;e<l;e++)(o=arguments[e])&&(t=NE(o))&&(r&&(r+=" "),r+=t);return r}function Ju({children:o,className:t,onClick:e,type:r,variation:l="none"}){const f=r==="primary"?Pt.DARK_GREEN:Pt.DARK_BLUE;return Fe.jsx("button",{onClick:h=>{h.stopPropagation(),e()},style:{backgroundColor:f},className:OE("border-none text-center inline-block cursor-pointer rounded-lg text-base select-none z-50 fill-white no-underline",l==="none"?"py-3 px-8":l==="padded"?"px-4 py-8":"p-4",t),children:o})}function q2({addDefense:o,defense:t}){return Fe.jsxs(Ju,{onClick:()=>o(t.type),type:"secondary",className:"w-20 h-20 !text-3xl !flex items-center justify-center relative",variation:"padded",children:[t.label,Fe.jsx("kbd",{className:"kbd text-sm absolute -top-1 -right-2",children:t.kbd})]})}function IE(o){return Fe.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:OE("size-6",o.className),children:Fe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})})}function Y2({addDefense:o,messageQueue:t,defenses:e,goToLevelSelection:r}){const[l,f]=hp.useState(!1);return Fe.jsxs(Fe.Fragment,{children:[!l&&Fe.jsxs(Fe.Fragment,{children:[Fe.jsxs("div",{className:"block absolute bottom-2.5 right-2.5 rounded-xl p-2 opacity-90",style:{backgroundColor:Pt.DARK_GREEN},children:[Fe.jsx("h1",{className:"block text-center text-2xl font-bold",children:"🛡️ 3D Tower Defense"}),Fe.jsx("a",{className:"block text-end link",href:"https://github.com/saacostam",target:"_blank",children:"by saacostam"})]}),Fe.jsx(Ju,{className:"absolute top-2.5 left-2.5",onClick:()=>f(!0),type:"secondary",variation:"square",children:Fe.jsx(IE,{})}),Fe.jsx("div",{className:"absolute top-2.5 left-1/2 transform -translate-x-1/2",children:t.map(h=>Fe.jsx("div",{className:"rounded-xl text-center text-sm p-2 opacity-90 mb-2.5 select-none",style:{backgroundColor:Pt.RED},children:h},h))}),Fe.jsx("div",{className:"absolute bottom-2.5 left-2.5 flex gap-2.5",children:e.map(h=>Fe.jsx(q2,{addDefense:o,defense:h},h.type))})]}),l&&Fe.jsxs("div",{className:"min-w-24 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8",style:{backgroundColor:Pt.VOID},children:[Fe.jsx("h2",{className:"text-2xl font-bold",children:"Are you sure you want to exit the game?"}),Fe.jsx("p",{className:"mt-4 mb-8",children:"You will lose all progress and be redirected to the level selection."}),Fe.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[Fe.jsx(Ju,{onClick:r,type:"secondary",children:"Confirm"}),Fe.jsx(Ju,{onClick:()=>f(!1),type:"primary",children:"Cancel"})]})]})]})}const P_=class P_ extends uh{constructor(){super({width:wt.WIDTH,height:wt.HEIGHT});Rt(this,"headQuarters");Rt(this,"spawners",[]);Rt(this,"messageQueue");Rt(this,"pathIndicator");Rt(this,"level",0);Rt(this,"levels",LE);Rt(this,"cursor");Rt(this,"Render",Y2);Rt(this,"notifyPathChangeEvent",()=>this.pathIndicator.onPathChangeEvent({grid:this.actorsGrid,headquarters:this.headQuarters,scene:this.scene,spawners:this.spawners}));this.headQuarters=new BS({health:30}),this.messageQueue=new N_,this.pathIndicator=new PS}setLevel(e){this.reset(),this.level=Math.max(0,Math.min(e,this.levels.length-1)),this.onStart()}onStart(){var _;const e=this.actorsGrid.length,r=((_=this.actorsGrid[0])==null?void 0:_.length)??0;this.scene.background=new yt(Pt.VOID),this.scene.add(new vT(new yt(Pt.WHITE),new yt(Pt.DARK_GREEN),1)),this.headQuarters=new BS({health:30}),this.messageQueue=new N_,this.pathIndicator=new PS;const l=this.levels[this.level],{worldBuilderCommands:f,spawners:h}=zS.buildLevel({width:e,height:r,tileSize:P_.TILE_SIZE,level:l,headQuarters:this.headQuarters});f.forEach(x=>{if(x.type==="component")this.addComponent(x.component);else if(x.type==="actor")this.addActor(x.actor,x.position),x.static&&(this.actorsGrid[x.position.x][x.position.y].isWalkable=!1);else if(x.type==="static")this.actorsGrid[x.position.x][x.position.y].isWalkable=!1;else throw new Error(`Unknown command type: ${x==null?void 0:x.type}`)}),this.spawners=h,zS.inlineUpdateLevelGridsPlaceableStatus({container:this,grid:this.actorsGrid,levelDefinition:l,height:r,width:e});const p=new St(Math.floor(e/2),Math.floor(r/4));this.cursor=new k2({pos:p,addMessage:this.messageQueue.addMessage,notifyPathChangeEvent:this.notifyPathChangeEvent}),this.addActor(this.cursor,p),this.addComponent(this.messageQueue),this.addComponent(new X2),this.createSceneryStars({width:e,height:r}).forEach(x=>this.addComponent(x)),this.createSceneryMountains({width:e,height:r}).forEach(x=>this.addComponent(x)),this.createSceneryTrees({width:e,height:r}).forEach(x=>this.addComponent(x));const g=new B2({width:e*1.6,height:r*1.6,position:new I(e/2,-1/2,r/2)});this.addComponent(g),this.notifyPathChangeEvent()}update(e,r){super.update(e,r)}createSceneryStars(e){const{width:r,height:l}=e,f=200,h=[],p=new I(r/2,0,l/2);for(let g=0;g<f;g++){const y=wt.TILE_SIZE*8*(4+Math.floor(Math.random()*4)),E=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),T=new I(p.x+E.x*y,p.z+E.z*y,p.y+E.y*y);h.push(new z2({position:T}))}return h}createSceneryMountains(e){const{width:r,height:l}=e,f=[],h=r*1.5,p=l*1.5;for(let g=0;g<h;g++){const _=new E_({position:new St(g-h/8,-p*3/16)});f.push(_)}for(let g=0;g<h;g++){const _=new E_({position:new St(g-h/8,p*7/8)});f.push(_)}for(let g=0;g<p;g++){const _=new E_({position:new St(-h*2/8,g-p/8)});f.push(_)}for(let g=0;g<p;g++){const _=new E_({position:new St(h*7/8,g-p/16)});f.push(_)}return f}createSceneryTrees(e){const{width:r,height:l}=e,f=[],h=r*1.5,p=l*1.5;for(let g=0;g<h;g++){const _=new M_({position:new St(g-h/8,-p*3/16+(Math.random()-.5)*wt.TILE_SIZE)});f.push(_)}for(let g=0;g<h;g++){const _=new M_({position:new St(g-h/8,p*7/8+(Math.random()-.5)*wt.TILE_SIZE)});f.push(_)}for(let g=0;g<p;g++){const _=new M_({position:new St(-h*2/8+(Math.random()-.5)*wt.TILE_SIZE,g-p/8)});f.push(_)}for(let g=0;g<p;g++){const _=new M_({position:new St(h*7/8+(Math.random()-.5)*wt.TILE_SIZE,g-p/16)});f.push(_)}return f}provideProps(e){return{addDefense:r=>this.cursor.addDefense({type:r,container:e.currentContainer}),defenses:[{label:"🚀",type:"simple",kbd:"Z"},{label:"🧨",type:"rocket",kbd:"X"},{label:"📦",type:"box",kbd:"C"}],goToLevelSelection:()=>e.setContainer(To.LEVEL_SELECTION_CONTAINER),messageQueue:this.messageQueue.messages.map(({message:r})=>r)}}};Rt(P_,"TILE_SIZE",1);let Cl=P_;var nc=(o=>(o.ALLY="ally",o.ENEMY="enemy",o))(nc||{});function Z2({goToNext:o}){return Fe.jsx("div",{className:"w-full h-full flex justify-center items-center",style:{backgroundColor:Pt.VOID},children:Fe.jsxs("div",{className:"flex flex-col items-center",children:[Fe.jsx("h1",{className:"mb-5 text-3xl font-bold",children:"3D Tower Defense"}),Fe.jsx(Ju,{type:"primary",onClick:o,children:Fe.jsx("span",{className:"text-2xl",children:"Start"})})]})})}class K2 extends uh{constructor(){super({width:wt.WIDTH,height:wt.HEIGHT});Rt(this,"Render",Z2)}provideProps(e){return{goToNext:()=>e.setContainer(To.LEVEL_SELECTION_CONTAINER)}}}function Q2({levels:o,goToLevel:t,goToHome:e}){return Fe.jsxs("div",{className:"w-full h-full flex items-center justify-center p-2.5",style:{backgroundColor:Pt.VOID},children:[Fe.jsxs("div",{className:"flex flex-col items-center",children:[Fe.jsx("h1",{className:"mb-5 text-3xl font-bold",children:"Choose a Level"}),Fe.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5",children:o.map((r,l)=>Fe.jsx(Ju,{type:"primary",onClick:()=>t(l),children:Fe.jsxs("div",{className:"flex flex-col",children:[Fe.jsx("div",{className:"text-2xl font-bold",children:l+1}),Fe.jsx("div",{className:"text-base mt-1",children:r.name})]})},l))})]}),Fe.jsx(Ju,{onClick:e,type:"secondary",className:"absolute top-2.5 left-2.5",variation:"square",children:Fe.jsx(IE,{})})]})}class j2 extends uh{constructor(){super({width:wt.WIDTH,height:wt.HEIGHT});Rt(this,"Render",Q2)}provideProps(e){return{levels:LE,goToLevel:r=>{if(e.setContainer(To.BATTLEFIELD_CONTAINER),!(e.currentContainer instanceof Cl))throw new Error("Something went wrong whilst switching containers");e.currentContainer.setLevel(r)},goToHome:()=>e.setContainer(To.HOME_CONTAINER)}}}const J2=()=>{var l;const[o,t]=hp.useState(!1),e=hp.useCallback(()=>t(f=>!f),[]),r=hp.useRef(null);return hp.useEffect(()=>{r.current||(r.current=new m2({triggerRender:e}),r.current.addContainer(To.HOME_CONTAINER,new K2),r.current.addContainer(To.LEVEL_SELECTION_CONTAINER,new j2),r.current.addContainer(To.BATTLEFIELD_CONTAINER,new Cl),r.current.setContainer(To.BATTLEFIELD_CONTAINER),r.current.start())},[e]),((l=r.current)==null?void 0:l.currentContainer)&&Fe.jsx(r.current.currentContainer.Render,{...r.current.currentContainer.provideProps(r.current)})},$2=_M.createRoot(document.getElementById("root"));$2.render(Fe.jsx(J2,{}));
