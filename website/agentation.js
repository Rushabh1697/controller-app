(()=>{var V5=Object.create;var n1=Object.defineProperty;var G5=Object.getOwnPropertyDescriptor;var W5=Object.getOwnPropertyNames;var Z5=Object.getPrototypeOf,K5=Object.prototype.hasOwnProperty;var F5=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(l){throw n=[l],l}};var wl=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var J5=(e,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of W5(t))!K5.call(e,o)&&o!==n&&n1(e,o,{get:()=>t[o],enumerable:!(l=G5(t,o))||l.enumerable});return e};var kt=(e,t,n)=>(n=e!=null?V5(Z5(e)):{},J5(t||!e||!e.__esModule?n1(n,"default",{value:e,enumerable:!0}):n,e));var m1=wl(Ee=>{"use strict";var od=Symbol.for("react.transitional.element"),P5=Symbol.for("react.portal"),e2=Symbol.for("react.fragment"),t2=Symbol.for("react.strict_mode"),n2=Symbol.for("react.profiler"),l2=Symbol.for("react.consumer"),o2=Symbol.for("react.context"),a2=Symbol.for("react.forward_ref"),i2=Symbol.for("react.suspense"),r2=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),s2=Symbol.for("react.activity"),c2=Symbol.for("react.view_transition"),l1=Symbol.iterator;function u2(e){return e===null||typeof e!="object"?null:(e=l1&&e[l1]||e["@@iterator"],typeof e=="function"?e:null)}var s1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c1=Object.assign,u1={};function Ja(e,t,n){this.props=e,this.context=t,this.refs=u1,this.updater=n||s1}Ja.prototype.isReactComponent={};Ja.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ja.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function d1(){}d1.prototype=Ja.prototype;function ad(e,t,n){this.props=e,this.context=t,this.refs=u1,this.updater=n||s1}var id=ad.prototype=new d1;id.constructor=ad;c1(id,Ja.prototype);id.isPureReactComponent=!0;var o1=Array.isArray;function ld(){}var Mt={H:null,A:null,T:null,S:null},_1=Object.prototype.hasOwnProperty;function rd(e,t,n){var l=n.ref;return{$$typeof:od,type:e,key:t,ref:l!==void 0?l:null,props:n}}function d2(e,t){return rd(e.type,t,e.props)}function sd(e){return typeof e=="object"&&e!==null&&e.$$typeof===od}function _2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var a1=/\/+/g;function nd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_2(""+e.key):t.toString(36)}function f2(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ld,ld):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Fa(e,t,n,l,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case od:case P5:i=!0;break;case r1:return i=e._init,Fa(i(e._payload),t,n,l,o)}}if(i)return o=o(e),i=l===""?"."+nd(e,0):l,o1(o)?(n="",i!=null&&(n=i.replace(a1,"$&/")+"/"),Fa(o,t,n,"",function(m){return m})):o!=null&&(sd(o)&&(o=d2(o,n+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(a1,"$&/")+"/")+i)),t.push(o)),1;i=0;var r=l===""?".":l+":";if(o1(e))for(var s=0;s<e.length;s++)l=e[s],a=r+nd(l,s),i+=Fa(l,t,n,a,o);else if(s=u2(e),typeof s=="function")for(e=s.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+nd(l,s++),i+=Fa(l,t,n,a,o);else if(a==="object"){if(typeof e.then=="function")return Fa(f2(e),t,n,l,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function Hs(e,t,n){if(e==null)return e;var l=[],o=0;return Fa(e,l,"","",function(a){return t.call(n,a,o++)}),l}function h2(e){if(e._status===-1){var t=e._result,n=t();n.then(function(l){(e._status===0||e._status===-1)&&(e._status=1,e._result=l,n.status===void 0&&(n.status="fulfilled",n.value=l))},function(l){(e._status===0||e._status===-1)&&(e._status=2,e._result=l,n.status===void 0&&(n.status="rejected",n.reason=l))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var i1=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function f1(e){var t=Mt.T,n={};n.types=t!==null?t.types:null,Mt.T=n;try{var l=e(),o=Mt.S;o!==null&&o(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(ld,i1)}catch(a){i1(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Mt.T=t}}function h1(e){var t=Mt.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else f1(h1.bind(null,e))}var m2={map:Hs,forEach:function(e,t,n){Hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hs(e,function(){t++}),t},toArray:function(e){return Hs(e,function(t){return t})||[]},only:function(e){if(!sd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ee.Activity=s2;Ee.Children=m2;Ee.Component=Ja;Ee.Fragment=e2;Ee.Profiler=n2;Ee.PureComponent=ad;Ee.StrictMode=t2;Ee.Suspense=i2;Ee.ViewTransition=c2;Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;Ee.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Mt.H.useMemoCache(e)}};Ee.addTransitionType=h1;Ee.cache=function(e){return function(){return e.apply(null,arguments)}};Ee.cacheSignal=function(){return null};Ee.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=c1({},e.props),o=e.key;if(t!=null)for(a in t.key!==void 0&&(o=""+t.key),t)!_1.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(l[a]=t[a]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var i=Array(a),r=0;r<a;r++)i[r]=arguments[r+2];l.children=i}return rd(e.type,o,l)};Ee.createContext=function(e){return e={$$typeof:o2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:l2,_context:e},e};Ee.createElement=function(e,t,n){var l,o={},a=null;if(t!=null)for(l in t.key!==void 0&&(a=""+t.key),t)_1.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(o[l]=t[l]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var r=Array(i),s=0;s<i;s++)r[s]=arguments[s+2];o.children=r}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)o[l]===void 0&&(o[l]=i[l]);return rd(e,a,o)};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(e){return{$$typeof:a2,render:e}};Ee.isValidElement=sd;Ee.lazy=function(e){return{$$typeof:r1,_payload:{_status:-1,_result:e},_init:h2}};Ee.memo=function(e,t){return{$$typeof:r2,type:e,compare:t===void 0?null:t}};Ee.startTransition=f1;Ee.unstable_useCacheRefresh=function(){return Mt.H.useCacheRefresh()};Ee.use=function(e){return Mt.H.use(e)};Ee.useActionState=function(e,t,n){return Mt.H.useActionState(e,t,n)};Ee.useCallback=function(e,t){return Mt.H.useCallback(e,t)};Ee.useContext=function(e){return Mt.H.useContext(e)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(e,t){return Mt.H.useDeferredValue(e,t)};Ee.useEffect=function(e,t){return Mt.H.useEffect(e,t)};Ee.useEffectEvent=function(e){return Mt.H.useEffectEvent(e)};Ee.useId=function(){return Mt.H.useId()};Ee.useImperativeHandle=function(e,t,n){return Mt.H.useImperativeHandle(e,t,n)};Ee.useInsertionEffect=function(e,t){return Mt.H.useInsertionEffect(e,t)};Ee.useLayoutEffect=function(e,t){return Mt.H.useLayoutEffect(e,t)};Ee.useMemo=function(e,t){return Mt.H.useMemo(e,t)};Ee.useOptimistic=function(e,t){return Mt.H.useOptimistic(e,t)};Ee.useReducer=function(e,t,n){return Mt.H.useReducer(e,t,n)};Ee.useRef=function(e){return Mt.H.useRef(e)};Ee.useState=function(e){return Mt.H.useState(e)};Ee.useSyncExternalStore=function(e,t,n){return Mt.H.useSyncExternalStore(e,t,n)};Ee.useTransition=function(){return Mt.H.useTransition()};Ee.version="19.3.0"});var ol=wl((J6,g1)=>{"use strict";g1.exports=m1()});var M1=wl(Dt=>{"use strict";function _d(e,t){var n=e.length;e.push(t);e:for(;0<n;){var l=n-1>>>1,o=e[l];if(0<$s(o,t))e[l]=t,e[n]=o,n=l;else break e}}function Hl(e){return e.length===0?null:e[0]}function Ys(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var l=0,o=e.length,a=o>>>1;l<a;){var i=2*(l+1)-1,r=e[i],s=i+1,m=e[s];if(0>$s(r,n))s<o&&0>$s(m,r)?(e[l]=m,e[s]=n,l=s):(e[l]=r,e[i]=n,l=i);else if(s<o&&0>$s(m,n))e[l]=m,e[s]=n,l=s;else break e}}return t}function $s(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Dt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(y1=performance,Dt.unstable_now=function(){return y1.now()}):(cd=Date,p1=cd.now(),Dt.unstable_now=function(){return cd.now()-p1});var y1,cd,p1,oo=[],Mo=[],g2=1,al=null,pn=3,fd=!1,hr=!1,mr=!1,hd=!1,v1=typeof setTimeout=="function"?setTimeout:null,w1=typeof clearTimeout=="function"?clearTimeout:null,b1=typeof setImmediate<"u"?setImmediate:null;function Us(e){for(var t=Hl(Mo);t!==null;){if(t.callback===null)Ys(Mo);else if(t.startTime<=e)Ys(Mo),t.sortIndex=t.expirationTime,_d(oo,t);else break;t=Hl(Mo)}}function md(e){if(mr=!1,Us(e),!hr)if(Hl(oo)!==null)hr=!0,ei||(ei=!0,Pa());else{var t=Hl(Mo);t!==null&&gd(md,t.startTime-e)}}var ei=!1,gr=-1,S1=5,C1=-1;function k1(){return hd?!0:!(Dt.unstable_now()-C1<S1)}function ud(){if(hd=!1,ei){var e=Dt.unstable_now();C1=e;var t=!0;try{e:{hr=!1,mr&&(mr=!1,w1(gr),gr=-1),fd=!0;var n=pn;try{t:{for(Us(e),al=Hl(oo);al!==null&&!(al.expirationTime>e&&k1());){var l=al.callback;if(typeof l=="function"){al.callback=null,pn=al.priorityLevel;var o=l(al.expirationTime<=e);if(e=Dt.unstable_now(),typeof o=="function"){al.callback=o,Us(e),t=!0;break t}al===Hl(oo)&&Ys(oo),Us(e)}else Ys(oo);al=Hl(oo)}if(al!==null)t=!0;else{var a=Hl(Mo);a!==null&&gd(md,a.startTime-e),t=!1}}break e}finally{al=null,pn=n,fd=!1}t=void 0}}finally{t?Pa():ei=!1}}}var Pa;typeof b1=="function"?Pa=function(){b1(ud)}:typeof MessageChannel<"u"?(dd=new MessageChannel,x1=dd.port2,dd.port1.onmessage=ud,Pa=function(){x1.postMessage(null)}):Pa=function(){v1(ud,0)};var dd,x1;function gd(e,t){gr=v1(function(){e(Dt.unstable_now())},t)}Dt.unstable_IdlePriority=5;Dt.unstable_ImmediatePriority=1;Dt.unstable_LowPriority=4;Dt.unstable_NormalPriority=3;Dt.unstable_Profiling=null;Dt.unstable_UserBlockingPriority=2;Dt.unstable_cancelCallback=function(e){e.callback=null};Dt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S1=0<e?Math.floor(1e3/e):5};Dt.unstable_getCurrentPriorityLevel=function(){return pn};Dt.unstable_next=function(e){switch(pn){case 1:case 2:case 3:var t=3;break;default:t=pn}var n=pn;pn=t;try{return e()}finally{pn=n}};Dt.unstable_requestPaint=function(){hd=!0};Dt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=pn;pn=e;try{return t()}finally{pn=n}};Dt.unstable_scheduleCallback=function(e,t,n){var l=Dt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?l+n:l):n=l,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:g2++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>l?(e.sortIndex=n,_d(Mo,e),Hl(oo)===null&&e===Hl(Mo)&&(mr?(w1(gr),gr=-1):mr=!0,gd(md,n-l))):(e.sortIndex=o,_d(oo,e),hr||fd||(hr=!0,ei||(ei=!0,Pa()))),e};Dt.unstable_shouldYield=k1;Dt.unstable_wrapCallback=function(e){var t=pn;return function(){var n=pn;pn=t;try{return e.apply(this,arguments)}finally{pn=n}}}});var T1=wl((ew,E1)=>{"use strict";E1.exports=M1()});var z1=wl(bn=>{"use strict";var y2=ol();function D1(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Eo(){}var wn={d:{f:Eo,r:function(){throw Error(D1(522))},D:Eo,C:Eo,L:Eo,m:Eo,X:Eo,S:Eo,M:Eo},p:0,findDOMNode:null},p2=Symbol.for("react.portal"),b2=Symbol.for("react.recoverable"),N1=Symbol.for("react.optimistic_key");function x2(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p2,key:l==null?null:l===N1?N1:""+l,children:e,containerInfo:t,implementation:n}}var yr=y2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function js(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wn;bn.browser=function(e){return{$$typeof:b2,_reason:e}};bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(D1(299));return x2(e,t,null,n)};bn.flushSync=function(e){var t=yr.T,n=wn.p;try{if(yr.T=null,wn.p=2,e)return e()}finally{yr.T=t,wn.p=n,wn.d.f()}};bn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,wn.d.C(e,t))};bn.prefetchDNS=function(e){typeof e=="string"&&wn.d.D(e)};bn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,l=js(n,t.crossOrigin),o=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:o,fetchPriority:a}):n==="script"&&wn.d.X(e,{crossOrigin:l,integrity:o,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};bn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=js(t.as,t.crossOrigin);wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&wn.d.M(e)};bn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,l=js(n,t.crossOrigin);wn.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};bn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=js(t.as,t.crossOrigin);wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else wn.d.m(e)};bn.requestFormReset=function(e){wn.d.r(e)};bn.unstable_batchedUpdates=function(e,t){return e(t)};bn.useFormState=function(e,t,n){return yr.H.useFormState(e,t,n)};bn.useFormStatus=function(){return yr.H.useHostTransitionStatus()};bn.version="19.3.0"});var Is=wl((nw,A1)=>{"use strict";function O1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O1)}catch(e){console.error(e)}}O1(),A1.exports=z1()});var bp=wl(Su=>{"use strict";var nn=T1(),pm=ol(),v2=Is();function L(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function xm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vm(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R1(e){if(os(e)!==e)throw Error(L(188))}function w2(e){var t=e.alternate;if(!t){if(t=os(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return R1(o),e;if(a===l)return R1(o),t;a=a.sibling}throw Error(L(188))}if(n.return!==l.return)n=o,l=a;else{for(var i=!1,r=o.child;r;){if(r===n){i=!0,n=o,l=a;break}if(r===l){i=!0,l=o,n=a;break}r=r.sibling}if(!i){for(r=a.child;r;){if(r===n){i=!0,n=a,l=o;break}if(r===l){i=!0,l=a,n=o;break}r=r.sibling}if(!i)throw Error(L(189))}}if(n.alternate!==l)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function wm(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=wm(e),t!==null)return t;e=e.sibling}return null}function $n(e,t,n,l,o,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,l,o,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&$n(e.child,t,n,l,o,a))return!0;e=e.sibling}return!1}function Oa(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function L1(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Sm(e){var t=[null,null],n=Oa(e);return n===null||Cm(t,e,n.child,{foundSelf:!1}),t}function Cm(e,t,n,l){for(;n!==null;){if(n===t)l.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(l.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Cm(e,t,n.child,l))return!0;n=n.sibling}return!1}function tn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(L(559))}}var ri=null,Wd=null;function S2(e,t,n){return e===n?!0:e===t?(ri=e,!0):!1}function C2(e,t,n){return e===n?(Wd=e,!1):e===t?(Wd!==null&&(ri=e),!0):!1}function B1(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Zd(e,t,n){for(var l=0,o=e;o;o=n(o))l++;o=0;for(var a=t;a;a=n(a))o++;for(;0<l-o;)e=n(e),l--;for(;0<o-l;)t=n(t),o--;for(;l--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var vt=Object.assign,k2=Symbol.for("react.element"),Xs=Symbol.for("react.transitional.element"),Cr=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),Mm=Symbol.for("react.consumer"),Xl=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),zo=Symbol.for("react.lazy"),Pd=Symbol.for("react.activity"),M2=Symbol.for("react.legacy_hidden"),E2=Symbol.for("react.memo_cache_sentinel"),e_=Symbol.for("react.view_transition"),T2=Symbol.for("react.recoverable"),H1=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=H1&&e[H1]||e["@@iterator"],typeof e=="function"?e:null)}var N2=Symbol.for("react.client.reference");function t_(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case si:return"Fragment";case Kd:return"Profiler";case km:return"StrictMode";case Fd:return"Suspense";case Jd:return"SuspenseList";case Pd:return"Activity";case e_:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Cr:return"Portal";case Xl:return e.displayName||"Context";case Mm:return(e._context.displayName||"Context")+".Consumer";case af:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rf:return t=e.displayName||null,t!==null?t:t_(e.type)||"Memo";case zo:t=e._payload,e=e._init;try{return t_(e(t))}catch{}}return null}var kr=Array.isArray,we=pm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=v2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ba={pending:!1,data:null,method:null,action:null},n_=[],ci=-1;function Kl(e){return{current:e}}function fn(e){0>ci||(e.current=n_[ci],n_[ci]=null,ci--)}function Nt(e,t){ci++,n_[ci]=e.current,e.current=t}var Gl=Kl(null),Ir=Kl(null),Yo=Kl(null),Nc=Kl(null);function Dc(e,t){switch(Nt(Yo,t),Nt(Ir,e),Nt(Gl,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Fh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Fh(t),e=Wy(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fn(Gl),Nt(Gl,e)}function Ni(){fn(Gl),fn(Ir),fn(Yo)}function l_(e){var t=e.memoizedState;t!==null&&(Ui._currentValue=t.memoizedState,Nt(Nc,e)),t=Gl.current;var n=Wy(t,e.type);t!==n&&(Nt(Ir,e),Nt(Gl,n))}function zc(e){Ir.current===e&&(fn(Gl),fn(Ir)),Nc.current===e&&(fn(Nc),Ui._currentValue=ba)}var yd,$1;function No(e){if(yd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yd=t&&t[1]||"",$1=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yd+e+$1}var pd=!1;function bd(e,t){if(!e||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(C){var d=C}Reflect.construct(e,[],x)}else{try{x.call()}catch(C){d=C}x=!1;try{var b=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),x=!0,new e}finally{x&&(b!==void 0?Object.defineProperty(e.prototype,"props",b):delete e.prototype.props)}}}else{try{throw Error()}catch(C){d=C}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(C){if(C&&d&&typeof C.stack=="string")return[C.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),i=a[0],r=a[1];if(i&&r){var s=i.split(`
`),m=r.split(`
`);for(o=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;o<m.length&&!m[o].includes("DetermineComponentFrameRoot");)o++;if(l===s.length||o===m.length)for(l=s.length-1,o=m.length-1;1<=l&&0<=o&&s[l]!==m[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==m[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==m[o]){var _=`
`+s[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=o);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?No(n):""}function D2(e,t){switch(e.tag){case 26:case 27:case 5:return No(e.type);case 16:return No("Lazy");case 13:return e.child!==t&&t!==null?No("Suspense Fallback"):No("Suspense");case 19:return No("SuspenseList");case 0:case 15:return bd(e.type,!1);case 11:return bd(e.type.render,!1);case 1:return bd(e.type,!0);case 31:return No("Activity");case 30:return No("ViewTransition");default:return""}}function U1(e){try{var t="",n=null;do t+=D2(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var o_=Object.prototype.hasOwnProperty,sf=nn.unstable_scheduleCallback,xd=nn.unstable_cancelCallback,z2=nn.unstable_shouldYield,O2=nn.unstable_requestPaint,Vn=nn.unstable_now,A2=nn.unstable_getCurrentPriorityLevel,Em=nn.unstable_ImmediatePriority,Tm=nn.unstable_UserBlockingPriority,Oc=nn.unstable_NormalPriority,R2=nn.unstable_LowPriority,Nm=nn.unstable_IdlePriority,L2=nn.log,B2=nn.unstable_setDisableYieldValue,as=null,Gn=null;function Ro(e){if(typeof L2=="function"&&B2(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(as,e)}catch{}}var Wn=Math.clz32?Math.clz32:U2,H2=Math.log,$2=Math.LN2;function U2(e){return e>>>=0,e===0?32:31-(H2(e)/$2|0)|0}var qs=256,Qs=262144,Vs=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ou(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~a,l!==0?o=ha(l):(i&=r,i!==0?o=ha(i):n||(n=r&~e,n!==0&&(o=ha(n))))):(r=l&~a,r!==0?o=ha(r):i!==0?o=ha(i):n||(n=l&~e,n!==0&&(o=ha(n)))),o===0?0:t!==0&&t!==o&&(t&a)===0&&(a=o&-o,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:o}function is(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Dm(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-Wn(n),o=1<<l;t|=e[l],n&=~o}return t}function Y2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(){var e=Vs;return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),e}function vd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rs(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j2(e,t,n,l,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(n=i&~n;0<n;){var _=31-Wn(n),x=1<<_;r[_]=0,s[_]=-1;var d=m[_];if(d!==null)for(m[_]=null,_=0;_<d.length;_++){var b=d[_];b!==null&&(b.lane&=-536870913)}n&=~x}l!==0&&Om(e,l,0),a!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=a&~(i&~t))}function Om(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Wn(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Am(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Wn(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function Rm(e,t){var n=t&-t;return n=(n&42)!==0?1:cf(n),(n&(e.suspendedLanes|t))!==0?0:n}function cf(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function uf(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lm(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:gp(e.type))}function Y1(e,t){var n=at.p;try{return at.p=e,t()}finally{at.p=n}}var po=Math.random().toString(36).slice(2),dn="__reactFiber$"+po,Un="__reactProps$"+po,Ii="__reactContainer$"+po,j1="__reactEvents$"+po,I2="__reactListeners$"+po,X2="__reactHandles$"+po,I1="__reactResources$"+po,ss="__reactMarker$"+po,Ac="__reactLoad$"+po;function au(e){delete e[dn],delete e[Un],delete e[I2],delete e[X2]}function ya(e){var t;if(t=e[dn])return t;for(var n=e.parentNode;n;){if(t=n[Ii]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=am(e);e!==null;){if(n=e[dn])return n;e=am(e)}return t}e=n,n=e.parentNode}return null}function Xi(e){if(e=e[dn]||e[Ii]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(L(33))}function bi(e){var t=e[I1];return t||(t=e[I1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[ss]=!0}function Bm(e){e[Ac]=void 0}var Hm=new Set,$m={};function Aa(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for($m[e]=t,e=0;e<t.length;e++)Hm.add(t[e])}var q2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),X1={},q1={};function Q2(e){return o_.call(q1,e)?!0:o_.call(X1,e)?!1:q2.test(e)?q1[e]=!0:(X1[e]=!0,!1)}var et=!1;function Q1(){var e=et;return et=!1,e}function uc(e,t,n){if(Q2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Gs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ao(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,l)}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V2(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,a=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function a_(e){if(!e._valueTracker){var t=Um(e)?"checked":"value";e._valueTracker=V2(e,t,""+e[t])}}function Ym(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Um(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}var G2=/[\n"\\]/g;function ul(e){return e.replace(G2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function i_(e,t,n,l,o,a,i,r){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+In(t)):e.value!==""+In(t)&&(e.value=""+In(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?i==="number"&&e.value==t?wd(e,In(e.value)):wd(e,In(t)):n!=null?wd(e,In(n)):l!=null&&e.removeAttribute("value"),o==null&&a!=null&&(e.defaultChecked=!!a),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+In(r):e.removeAttribute("name")}function jm(e,t,n,l,o,a,i,r){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){a_(e);return}n=n!=null?""+In(n):"",t=t!=null?""+In(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),a_(e)}function wd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function xi(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Im(e,t,n){if(t!=null&&(t=""+In(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+In(n):""}function Xm(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(L(92));if(kr(l)){if(1<l.length)throw Error(L(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=In(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),a_(e)}function zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var W2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function V1(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||W2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qm(e,t,n){if(t!=null&&typeof t!="object")throw Error(L(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",et=!0);for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&(V1(e,o,l),et=!0)}else for(var a in t)t.hasOwnProperty(a)&&V1(e,a,t[a])}function df(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dc(e){return K2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ql(){}var r_=null;function _f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ui=null,vi=null;function G1(e){var t=Xi(e);if(t&&(e=t.stateNode)){var n=e[Un]||null;e:switch(e=t.stateNode,t.type){case"input":if(i_(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ul(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[Un]||null;if(!o)throw Error(L(90));i_(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Ym(l)}break e;case"textarea":Im(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xi(e,!!n.multiple,t,!1)}}}var Sd=!1;function Qm(e,t,n){if(Sd)return e(t,n);Sd=!0;try{var l=e(t);return l}finally{if(Sd=!1,(ui!==null||vi!==null)&&(bu(),ui&&(t=ui,e=vi,vi=ui=null,G1(t),e)))for(t=0;t<e.length;t++)G1(e[t])}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Un]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var _o=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s_=!1;if(_o)try{ti={},Object.defineProperty(ti,"passive",{get:function(){s_=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{s_=!1}var ti,Lo=null,ff=null,_c=null;function Vm(){if(_c)return _c;var e,t=ff,n=t.length,l,o="value"in Lo?Lo.value:Lo.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(l=1;l<=i&&t[n-l]===o[a-l];l++);return _c=o.slice(e,1<l?1-l:void 0)}function fc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ws(){return!0}function W1(){return!1}function Mn(e){function t(n,l,o,a,i){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(a):a[r]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ws:W1,this.isPropagationStopped=W1,this}return vt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Mn(ta),cs=vt({},ta,{view:0,detail:0}),F2=Mn(cs),Cd,kd,br,ru=vt({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Cd=e.screenX-br.screenX,kd=e.screenY-br.screenY):kd=Cd=0,br=e),Cd)},movementY:function(e){return"movementY"in e?e.movementY:kd}}),Z1=Mn(ru),J2=vt({},ru,{dataTransfer:0}),P2=Mn(J2),eb=vt({},cs,{relatedTarget:0}),Md=Mn(eb),tb=vt({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),nb=Mn(tb),lb=vt({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ob=Mn(lb),ab=vt({},ta,{data:0}),K1=Mn(ab),ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sb[e])?!!t[e]:!1}function hf(){return cb}var ub=vt({},cs,{key:function(e){if(e.key){var t=ib[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(e){return e.type==="keypress"?fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),db=Mn(ub),_b=vt({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F1=Mn(_b),fb=vt({},ta,{submitter:0}),hb=Mn(fb),mb=vt({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),gb=Mn(mb),yb=vt({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=Mn(yb),bb=vt({},ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=Mn(bb),vb=vt({},ta,{newState:0,oldState:0,source:0}),wb=Mn(vb),Sb=[9,13,27,32],mf=_o&&"CompositionEvent"in window,Nr=null;_o&&"documentMode"in document&&(Nr=document.documentMode);var Cb=_o&&"TextEvent"in window&&!Nr,Gm=_o&&(!mf||Nr&&8<Nr&&11>=Nr),J1=" ",P1=!1;function Wm(e,t){switch(e){case"keyup":return Sb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function kb(e,t){switch(e){case"compositionend":return Zm(t);case"keypress":return t.which!==32?null:(P1=!0,J1);case"textInput":return e=t.data,e===J1&&P1?null:e;default:return null}}function Mb(e,t){if(di)return e==="compositionend"||!mf&&Wm(e,t)?(e=Vm(),_c=ff=Lo=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gm&&t.locale!=="ko"?null:t.data;default:return null}}var Eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eb[e.type]:t==="textarea"}function Km(e,t,n,l){ui?vi?vi.push(l):vi=[l]:ui=l,t=tu(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Dr=null,qr=null;function Tb(e){Qy(e,0)}function su(e){var t=Mr(e);if(Ym(t))return e}function th(e,t){if(e==="change")return t}var Fm=!1;_o&&(_o?(Ks="oninput"in document,Ks||(Ed=document.createElement("div"),Ed.setAttribute("oninput","return;"),Ks=typeof Ed.oninput=="function"),Zs=Ks):Zs=!1,Fm=Zs&&(!document.documentMode||9<document.documentMode));var Zs,Ks,Ed;function nh(){Dr&&(Dr.detachEvent("onpropertychange",Jm),qr=Dr=null)}function Jm(e){if(e.propertyName==="value"&&su(qr)){var t=[];Km(t,qr,e,_f(e)),Qm(Tb,t)}}function Nb(e,t,n){e==="focusin"?(nh(),Dr=t,qr=n,Dr.attachEvent("onpropertychange",Jm)):e==="focusout"&&nh()}function Db(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(qr)}function zb(e,t){if(e==="click")return su(t)}function Ob(e,t){if(e==="input"||e==="change")return su(t)}function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kn=typeof Object.is=="function"?Object.is:Ab;function Qr(e,t){if(Kn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!o_.call(t,o)||!Kn(e[o],t[o]))return!1}return!0}function c_(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oh(e,t){var n=lh(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lh(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=c_(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=c_(e.document)}return t}function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rb=_o&&"documentMode"in document&&11>=document.documentMode,_i=null,u_=null,zr=null,d_=!1;function ah(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;d_||_i==null||_i!==c_(l)||(l=_i,"selectionStart"in l&&gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zr&&Qr(zr,l)||(zr=l,l=tu(u_,"onSelect"),0<l.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=_i)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionrun:_a("Transition","TransitionRun"),transitionstart:_a("Transition","TransitionStart"),transitioncancel:_a("Transition","TransitionCancel"),transitionend:_a("Transition","TransitionEnd")},Td={},tg={};_o&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Ra(e){if(Td[e])return Td[e];if(!fi[e])return e;var t=fi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tg)return Td[e]=t[n];return e}var ng=Ra("animationend"),lg=Ra("animationiteration"),og=Ra("animationstart"),Lb=Ra("transitionrun"),Bb=Ra("transitionstart"),Hb=Ra("transitioncancel"),ag=Ra("transitionend"),ig=new Map,__="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");__.push("scrollEnd");function Tl(e,t){ig.set(e,t),Aa(t,[e])}var $b=0;function fo(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=El.identifierPrefix;var n=$b++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function ih(e){if(e==null||typeof e=="string")return e;var t=null,n=Ti;if(n!==null)for(var l=0;l<n.length;l++){var o=e[n[l]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function bo(e,t){return e=ih(e),t=ih(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Rc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},rl=[],hi=0,yf=0;function cu(){for(var e=hi,t=yf=hi=0;t<e;){var n=rl[t];rl[t++]=null;var l=rl[t];rl[t++]=null;var o=rl[t];rl[t++]=null;var a=rl[t];if(rl[t++]=null,l!==null&&o!==null){var i=l.pending;i===null?o.next=o:(o.next=i.next,i.next=o),l.pending=o}a!==0&&rg(n,o,a)}}function uu(e,t,n,l){rl[hi++]=e,rl[hi++]=t,rl[hi++]=n,rl[hi++]=l,yf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pf(e,t,n,l){return uu(e,t,n,l),Lc(e)}function La(e,t){return uu(e,null,null,t),Lc(e)}function rg(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,a=e.return;a!==null;)a.childLanes|=n,l=a.alternate,l!==null&&(l.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(o=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,o&&t!==null&&(o=31-Wn(n),e=a.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),a):null}function Lc(e){if(50<jr)throw jr=0,Sc=null,Error(L(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function Ub(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,t,n,l){return new Ub(e,t,n,l)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function co(e,t){var n=e.alternate;return n===null?(n=Bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function sg(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hc(e,t,n,l,o,a){var i=0;if(l=e,typeof l=="function")bf(l)&&(i=1);else if(typeof l=="string")i=dv(e,n,Gl.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(l){case Pd:return e=Bn(31,n,t,o),e.elementType=Pd,e.lanes=a,e;case si:return xa(n.children,o,a,t);case km:i=8,o|=24;break;case Kd:return e=Bn(12,n,t,o|2),e.elementType=Kd,e.lanes=a,e;case Fd:return e=Bn(13,n,t,o),e.elementType=Fd,e.lanes=a,e;case Jd:return e=Bn(19,n,t,o),e.elementType=Jd,e.lanes=a,e;case M2:case e_:return e=o|32,e=Bn(30,n,t,e),e.elementType=e_,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case Xl:i=10;break e;case Mm:i=9;break e;case af:i=11;break e;case rf:i=14;break e;case zo:i=16,l=null;break e}i=29,n=Error(L(130,e===null?"null":typeof e,"")),l=null}return t=Bn(i,n,t,o),t.elementType=e,t.type=l,t.lanes=a,t}function xa(e,t,n,l){return e=Bn(7,e,l,t),e.lanes=n,e}function Nd(e,t,n){return e=Bn(6,e,null,t),e.lanes=n,e}function cg(e){var t=Bn(18,null,null,0);return t.stateNode=e,t}function Dd(e,t,n){return t=Bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rh=new WeakMap;function dl(e,t){if(typeof e=="object"&&e!==null){var n=rh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:U1(t)},rh.set(e,t),t)}return{value:e,source:t,stack:U1(t)}}var gi=[],yi=0,Bc=null,Vr=0,sl=[],cl=0,Ko=null,Ql=1,Vl="";function ro(e,t){gi[yi++]=Vr,gi[yi++]=Bc,Bc=e,Vr=t}function ug(e,t,n){sl[cl++]=Ql,sl[cl++]=Vl,sl[cl++]=Ko,Ko=e;var l=Ql;e=Vl;var o=32-Wn(l)-1;l&=~(1<<o),n+=1;var a=32-Wn(t)+o;if(30<a){var i=o-o%5;a=(l&(1<<i)-1).toString(32),l>>=i,o-=i,Ql=1<<32-Wn(t)+o|n<<o|l,Vl=a+e}else Ql=1<<a|n<<o|l,Vl=e}function du(e){e.return!==null&&(ro(e,1),ug(e,1,0))}function xf(e){for(;e===Bc;)Bc=gi[--yi],gi[yi]=null,Vr=gi[--yi],gi[yi]=null;for(;e===Ko;)Ko=sl[--cl],sl[cl]=null,Vl=sl[--cl],sl[cl]=null,Ql=sl[--cl],sl[cl]=null}function dg(e,t){sl[cl++]=Ql,sl[cl++]=Vl,sl[cl++]=Ko,Ql=t.id,Vl=t.overflow,Ko=e}var sn=null,Tt=null,He=!1,jo=null,_l=!1,f_=Error(L(519));function Fo(e){var t=Error(L(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gr(dl(t,e)),f_}function sh(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[dn]=e,t[Un]=l,n){case"dialog":Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":case"embed":Ie("load",t);break;case"video":case"audio":for(n=0;n<Fr.length;n++)Ie(Fr[n],t);break;case"source":Ie("error",t);break;case"img":case"image":case"link":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"input":Ie("invalid",t),jm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ie("invalid",t);break;case"textarea":Ie("invalid",t),Xm(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Gy(t.textContent,n)?(l.popover!=null&&(Ie("beforetoggle",t),Ie("toggle",t)),l.onScroll!=null&&Ie("scroll",t),l.onScrollEnd!=null&&Ie("scrollend",t),l.onClick!=null&&(t.onclick=ql),t=!0):t=!1,t||Fo(e,!0)}function Hc(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:_l=!1;return;case 27:case 3:_l=!0;return;default:sn=sn.return}}function ni(e){if(e!==sn)return!1;if(!He)return Hc(e),He=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||F_(e.type,e.memoizedProps)),n=!n),n&&Tt&&Fo(e),Hc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));Tt=om(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));Tt=om(e)}else t===27?(t=Tt,na(e.type)?(e=tf,tf=null,Tt=e):Tt=t):Tt=sn?fl(e.stateNode.nextSibling):null;return!0}function Ca(){Tt=sn=null,He=!1}function zd(){var e=jo;return e!==null&&(Rn===null?Rn=e:Rn.push.apply(Rn,e),jo=null),e}function Gr(e){jo===null?jo=[e]:jo.push(e)}var h_=Kl(null),Ba=null,so=null;function Bo(e,t,n){Nt(h_,t._currentValue),t._currentValue=n}function uo(e){e._currentValue=h_.current,fn(h_)}function mc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function m_(e,t,n,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){var i=o.child;a=a.firstContext;e:for(;a!==null;){var r=a;a=o;for(var s=0;s<t.length;s++)if(r.context===t[s]){a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),mc(a.return,n,e),l||(i=null);break e}a=r.next}}else if(o.tag===18){if(i=o.return,i===null)throw Error(L(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),mc(i,n,e),i=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),mc(o.return,n,e),i=o.child,i=i!==null?i.sibling:null):i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}}function ka(e,t,n,l){e=null;for(var o=t,a=!1;o!==null;){if(!a){if((o.flags&524288)!==0)a=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var i=o.alternate;if(i===null)throw Error(L(387));if(i=i.memoizedProps,i!==null){var r=o.type;Kn(o.pendingProps.value,i.value)||(e!==null?e.push(r):e=[r])}}else if(o===Nc.current){if(i=o.alternate,i===null)throw Error(L(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Ui):e=[Ui])}o=o.return}return e!==null&&m_(t,e,n,l),t.flags|=262144,e!==null}function $c(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Ba=e,so=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _n(e){return _g(Ba,e)}function Fs(e,t){return Ba===null&&Ma(e),_g(e,t)}function _g(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},so===null){if(e===null)throw Error(L(308));so=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else so=so.next=t;return n}var Yb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jb=nn.unstable_scheduleCallback,Ib=nn.unstable_NormalPriority,Kt={$$typeof:Xl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new Yb,data:new Map,refCount:0}}function us(e){e.refCount--,e.refCount===0&&jb(Ib,function(){e.controller.abort()})}function ch(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var l=t[e];n.indexOf(l)===-1&&n.push(l)}}}var Er=null;function Xb(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Or=null,g_=0,Ea=0,wi=null;function qb(e,t){if(Or===null){var n=Or=[];g_=0,Ea=Zf(),wi={status:"pending",value:void 0,then:function(l){n.push(l)}}}return g_++,t.then(uh,uh),t}function uh(){if(--g_===0&&(Er=null,Or!==null)){wi!==null&&(wi.status="fulfilled");var e=Or;Or=null,Ea=0,wi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qb(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var dh=we.S;we.S=function(e,t){if(Dy=Vn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&qb(e,t),Er!==null)for(var n=Bi;n!==null;)ch(n,Er),n=n.next;if(n=e.types,n!==null){for(var l=Bi;l!==null;)ch(l,n),l=l.next;if(Ea!==0){l=Er,l===null&&(l=Er=[]);for(var o=0;o<n.length;o++){var a=n[o];l.indexOf(a)===-1&&l.push(a)}}}dh!==null&&dh(e,t)};var va=Kl(null);function wf(){var e=va.current;return e!==null?e:xt.pooledCache}function gc(e,t){t===null?Nt(va,va.current):Nt(va,t.pool)}function fg(){var e=wf();return e===null?null:{parent:Kt._currentValue,pool:e}}var qi=Error(L(460)),Sf=Error(L(474)),_u=Error(L(542)),Uc={then:function(){}};function _h(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ql,ql),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e===void 0&&!("reason"in t)?Error(L(600)):e;default:if(typeof t.status=="string")t.then(ql,ql);else{if(e=xt,e!==null&&100<e.shellSuspendCounter)throw Error(L(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hh(e),e}throw wa=t,qi}}function ma(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(wa=n,qi):n}}var wa=null;function fh(){if(wa===null)throw Error(L(459));var e=wa;return wa=null,e}function hh(e){if(e===qi||e===_u)throw Error(L(483))}var Si=null,Wr=0;function Js(e){var t=Wr;return Wr+=1,Si===null&&(Si=[]),hg(Si,e,t)}function To(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ps(e,t){throw t.$$typeof===k2?Error(L(525)):(e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mg(e){function t(h,y){if(e){var v=h.deletions;v===null?(h.deletions=[y],h.flags|=16):v.push(y)}}function n(h,y){if(!e)return null;for(;y!==null;)t(h,y),y=y.sibling;return null}function l(h){for(var y=new Map;h!==null;)h.key===null?y.set(h.index,h):y.set(h.key,h),h=h.sibling;return y}function o(h,y){return h=co(h,y),h.index=0,h.sibling=null,h}function a(h,y,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<y?(h.flags|=2,y):v):(h.flags|=134217730,y)):(h.flags|=1048576,y)}function i(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function r(h,y,v,M){return y===null||y.tag!==6?(y=Nd(v,h.mode,M),y.return=h,y):(y=o(y,v),y.return=h,y)}function s(h,y,v,M){var I=v.type;return I===si?(h=_(h,y,v.props.children,M,v.key),To(h,v),h):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zo&&ma(I)===y.type)?(y=o(y,v.props),To(y,v),y.return=h,y):(y=hc(v.type,v.key,v.props,null,h.mode,M),To(y,v),y.return=h,y)}function m(h,y,v,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=Dd(v,h.mode,M),y.return=h,y):(y=o(y,v.children||[]),y.return=h,y)}function _(h,y,v,M,I){return y===null||y.tag!==7?(y=xa(v,h.mode,M,I),y.return=h,y):(y=o(y,v),y.return=h,y)}function x(h,y,v){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Nd(""+y,h.mode,v),y.return=h,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xs:return v=hc(y.type,y.key,y.props,null,h.mode,v),To(v,y),v.return=h,v;case Cr:return y=Dd(y,h.mode,v),y.return=h,y;case zo:return y=ma(y),x(h,y,v)}if(kr(y)||pr(y))return y=xa(y,h.mode,v,null),y.return=h,y;if(typeof y.then=="function")return x(h,Js(y),v);if(y.$$typeof===Xl)return x(h,Fs(h,y),v);Ps(h,y)}return null}function d(h,y,v,M){var I=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return I!==null?null:r(h,y,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:return v.key===I?s(h,y,v,M):null;case Cr:return v.key===I?m(h,y,v,M):null;case zo:return v=ma(v),d(h,y,v,M)}if(kr(v)||pr(v))return I!==null?null:_(h,y,v,M,null);if(typeof v.then=="function")return d(h,y,Js(v),M);if(v.$$typeof===Xl)return d(h,y,Fs(h,v),M);Ps(h,v)}return null}function b(h,y,v,M,I){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return h=h.get(v)||null,r(y,h,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xs:return h=h.get(M.key===null?v:M.key)||null,s(y,h,M,I);case Cr:return h=h.get(M.key===null?v:M.key)||null,m(y,h,M,I);case zo:return M=ma(M),b(h,y,v,M,I)}if(kr(M)||pr(M))return h=h.get(v)||null,_(y,h,M,I,null);if(typeof M.then=="function")return b(h,y,v,Js(M),I);if(M.$$typeof===Xl)return b(h,y,v,Fs(y,M),I);Ps(y,M)}return null}function C(h,y,v,M){for(var I=null,ne=null,B=y,Z=y=0,fe=null;B!==null&&Z<v.length;Z++){B.index>Z?(fe=B,B=null):fe=B.sibling;var K=d(h,B,v[Z],M);if(K===null){B===null&&(B=fe);break}e&&B&&K.alternate===null&&t(h,B),y=a(K,y,Z),ne===null?I=K:ne.sibling=K,ne=K,B=fe}if(Z===v.length)return n(h,B),He&&ro(h,Z),I;if(B===null){for(;Z<v.length;Z++)B=x(h,v[Z],M),B!==null&&(y=a(B,y,Z),ne===null?I=B:ne.sibling=B,ne=B);return He&&ro(h,Z),I}for(B=l(B);Z<v.length;Z++)fe=b(B,h,Z,v[Z],M),fe!==null&&(e&&(K=fe.alternate,K!==null&&B.delete(K.key===null?Z:K.key)),y=a(fe,y,Z),ne===null?I=fe:ne.sibling=fe,ne=fe);return e&&B.forEach(function(he){return t(h,he)}),He&&ro(h,Z),I}function D(h,y,v,M){if(v==null)throw Error(L(151));for(var I=null,ne=null,B=y,Z=y=0,fe=null,K=v.next();B!==null&&!K.done;Z++,K=v.next()){B.index>Z?(fe=B,B=null):fe=B.sibling;var he=d(h,B,K.value,M);if(he===null){B===null&&(B=fe);break}e&&B&&he.alternate===null&&t(h,B),y=a(he,y,Z),ne===null?I=he:ne.sibling=he,ne=he,B=fe}if(K.done)return n(h,B),He&&ro(h,Z),I;if(B===null){for(;!K.done;Z++,K=v.next())K=x(h,K.value,M),K!==null&&(y=a(K,y,Z),ne===null?I=K:ne.sibling=K,ne=K);return He&&ro(h,Z),I}for(B=l(B);!K.done;Z++,K=v.next())K=b(B,h,Z,K.value,M),K!==null&&(e&&(fe=K.alternate,fe!==null&&B.delete(fe.key===null?Z:fe.key)),y=a(K,y,Z),ne===null?I=K:ne.sibling=K,ne=K);return e&&B.forEach(function(tt){return t(h,tt)}),He&&ro(h,Z),I}function T(h,y,v,M){if(typeof v=="object"&&v!==null&&v.type===si&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:e:{for(var I=v.key;y!==null;){if(y.key===I){if(I=v.type,I===si){if(y.tag===7){n(h,y.sibling),M=o(y,v.props.children),To(M,v),M.return=h,h=M;break e}}else if(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===zo&&ma(I)===y.type){n(h,y.sibling),M=o(y,v.props),To(M,v),M.return=h,h=M;break e}n(h,y);break}else t(h,y);y=y.sibling}v.type===si?(M=xa(v.props.children,h.mode,M,v.key),To(M,v),M.return=h,h=M):(M=hc(v.type,v.key,v.props,null,h.mode,M),To(M,v),M.return=h,h=M)}return i(h);case Cr:e:{for(I=v.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(h,y.sibling),M=o(y,v.children||[]),M.return=h,h=M;break e}else{n(h,y);break}else t(h,y);y=y.sibling}M=Dd(v,h.mode,M),M.return=h,h=M}return i(h);case zo:return v=ma(v),T(h,y,v,M)}if(kr(v))return C(h,y,v,M);if(pr(v)){if(I=pr(v),typeof I!="function")throw Error(L(150));return v=I.call(v),D(h,y,v,M)}if(typeof v.then=="function")return T(h,y,Js(v),M);if(v.$$typeof===Xl)return T(h,y,Fs(h,v),M);Ps(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,y!==null&&y.tag===6?(n(h,y.sibling),M=o(y,v),M.return=h,h=M):(n(h,y),M=Nd(v,h.mode,M),M.return=h,h=M),i(h)):n(h,y)}return function(h,y,v,M){try{Wr=0;var I=T(h,y,v,M);return Si=null,I}catch(B){if(B===qi||B===_u)throw B;var ne=Bn(29,B,null,h.mode);return ne.lanes=M,ne.return=h,ne}}}var Ta=mg(!0),gg=mg(!1),Oo=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function y_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Io(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xo(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ot&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Lc(e),rg(e,null,n),t}return uu(e,l,t,n),Lc(e)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Am(e,n)}}function Od(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var p_=!1;function Rr(){if(p_){var e=wi;if(e!==null)throw e}}function Lr(e,t,n,l){p_=!1;var o=e.updateQueue;Oo=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var s=r,m=s.next;s.next=null,i===null?a=m:i.next=m,i=s;var _=e.alternate;_!==null&&(_=_.updateQueue,r=_.lastBaseUpdate,r!==i&&(r===null?_.firstBaseUpdate=m:r.next=m,_.lastBaseUpdate=s))}if(a!==null){var x=o.baseState;i=0,_=m=s=null,r=a;do{var d=r.lane&-536870913,b=d!==r.lane;if(b?(Ve&d)===d:(l&d)===d){d!==0&&d===Ea&&(p_=!0),_!==null&&(_=_.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var C=e,D=r;d=t;var T=n;switch(D.tag){case 1:if(C=D.payload,typeof C=="function"){x=C.call(T,x,d);break e}x=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=D.payload,d=typeof C=="function"?C.call(T,x,d):C,d==null)break e;x=vt({},x,d);break e;case 2:Oo=!0}}d=r.callback,d!==null&&(e.flags|=64,b&&(e.flags|=8192),b=o.callbacks,b===null?o.callbacks=[d]:b.push(d))}else b={lane:d,tag:r.tag,payload:r.payload,callback:r.callback,next:null},_===null?(m=_=b,s=x):_=_.next=b,i|=d;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;b=r,r=b.next,b.next=null,o.lastBaseUpdate=b,o.shared.pending=null}}while(!0);_===null&&(s=x),o.baseState=s,o.firstBaseUpdate=m,o.lastBaseUpdate=_,a===null&&(o.shared.lanes=0),ea|=i,e.lanes=i,e.memoizedState=x}}function yg(e,t){if(typeof e!="function")throw Error(L(191,e));e.call(t)}function pg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yg(n[e],t)}var Jo=Kl(null),Yc=Kl(0);function mh(e,t){e=yo,Nt(Yc,e),Nt(Jo,t),yo=e|t.baseLanes}function b_(){Nt(Yc,yo),Nt(Jo,Jo.current)}function kf(){yo=Yc.current,fn(Jo),fn(Yc)}var gn=Kl(null),xn=null;function qo(e){var t=e.alternate;Nt(hn,hn.current&1),Nt(gn,e),xn===null&&(t===null||Jo.current!==null||t.memoizedState!==null)&&(xn=e)}function x_(e){Nt(hn,hn.current),Nt(gn,e),xn===null&&(xn=e)}function bg(e){e.tag===22?(Nt(hn,hn.current),Nt(gn,e),xn===null&&(xn=e)):Qo()}function Qo(){Nt(hn,hn.current),Nt(gn,gn.current)}function Xn(e){fn(gn),xn===e&&(xn=null),fn(hn)}var hn=Kl(0);function Zr(e,t){Nt(gn,gn.current),Nt(hn,t)}function Mf(e){fn(hn),fn(gn),xn===e&&(xn=null)}function jc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ef(n)||Pf(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,Ae=null,pt=null,Zt=null,Ic=!1,Ci=!1,Na=!1,Xc=0,Kr=0,ki=null,Vb=0;function Yt(){throw Error(L(321))}function Ef(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function Tf(e,t,n,l,o,a){return ho=a,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,we.H=e===null||e.memoizedState===null?Kg:Fg,Na=!1,a=n(l,o),Na=!1,Ci&&(a=vg(t,n,l,o)),xg(e),a}function xg(e){we.H=qc;var t=pt!==null&&pt.next!==null;if(ho=0,Zt=pt=Ae=null,Ic=!1,Kr=0,ki=null,t)throw Error(L(300));e===null||Ft||(e=e.dependencies,e!==null&&$c(e)&&(Ft=!0))}function vg(e,t,n,l){Ae=e;var o=0;do{if(Ci&&(ki=null),Kr=0,Ci=!1,25<=o)throw Error(L(301));if(o+=1,Zt=pt=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}we.H=ex,a=t(n,l)}while(Ci);return a}function Gb(){var e=we.H,t=e.useState()[0];return t=typeof t.then=="function"?ds(t):t,e=e.useState()[0],(pt!==null?pt.memoizedState:null)!==e&&(Ae.flags|=1024),t}function Nf(){var e=Xc!==0;return Xc=0,e}function Df(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zf(e){if(Ic){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ic=!1}ho=0,Zt=pt=Ae=null,Ci=!1,Kr=Xc=0,ki=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ae.memoizedState=Zt=e:Zt=Zt.next=e,Zt}function Qt(){if(pt===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=Zt===null?Ae.memoizedState:Zt.next;if(t!==null)Zt=t,pt=e;else{if(e===null)throw Ae.alternate===null?Error(L(467)):Error(L(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Zt===null?Ae.memoizedState=Zt=e:Zt=Zt.next=e}return Zt}function fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ds(e){var t=Kr;return Kr+=1,ki===null&&(ki=[]),e=hg(ki,e,t),t=Ae,(Zt===null?t.memoizedState:Zt.next)===null&&(t=t.alternate,we.H=t===null||t.memoizedState===null?Kg:Fg),e}function hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ds(e);if(e.$$typeof===T2)return;if(e.$$typeof===Xl)return _n(e)}throw Error(L(438,String(e)))}function Of(e){var t=null,n=Ae.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fu(),Ae.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=E2;return t.index++,n}function mo(e,t){return typeof t=="function"?t(e):t}function yc(e){var t=Qt();return Af(t,pt,e)}function Af(e,t,n){var l=e.queue;if(l===null)throw Error(L(311));l.lastRenderedReducer=n;var o=e.baseQueue,a=l.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}t.baseQueue=o=a,l.pending=null}if(a=e.baseState,o===null)e.memoizedState=a;else{t=o.next;var r=i=null,s=null,m=t,_=!1;do{var x=m.lane&-536870913;if(x!==m.lane?(Ve&x)===x:(ho&x)===x){var d=m.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),x===Ea&&(_=!0);else if((ho&d)===d){m=m.next,d===Ea&&(_=!0);continue}else x={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(r=s=x,i=a):s=s.next=x,Ae.lanes|=d,ea|=d;x=m.action,Na&&n(a,x),a=m.hasEagerState?m.eagerState:n(a,x)}else d={lane:x,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(r=s=d,i=a):s=s.next=d,Ae.lanes|=x,ea|=x;m=m.next}while(m!==null&&m!==t);if(s===null?i=a:s.next=r,!Kn(a,e.memoizedState)&&(Ft=!0,_&&(n=wi,n!==null)))throw n;e.memoizedState=a,e.baseState=i,e.baseQueue=s,l.lastRenderedState=a}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ad(e){var t=Qt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var l=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Kn(a,t.memoizedState)||(Ft=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function wg(e,t,n){var l=Ae,o=Qt(),a=He;if(a){if(n===void 0)throw Error(L(407));n=n()}else n=t();var i=!Kn((pt||o).memoizedState,n);if(i&&(o.memoizedState=n,Ft=!0),o=o.queue,Rf(kg.bind(null,l,o,e),[e]),e=o.getSnapshot!==t||i||Zt!==null&&(Zt.memoizedState.tag&1)!==0,Oi(e?9:8,{destroy:void 0},Cg.bind(null,l,o,n,t),null),e){if(l.flags|=2048,xt===null)throw Error(L(349));a||(ho&127)!==0||Sg(l,t,n)}return n}function Sg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t=fu(),Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cg(e,t,n,l){t.value=n,t.getSnapshot=l,Mg(t)&&Eg(e)}function kg(e,t,n){return n(function(){Mg(t)&&Eg(e)})}function Mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch{return!0}}function Eg(e){var t=La(e,2);t!==null&&Hn(t,e,2)}function v_(e){var t=kn();if(typeof e=="function"){var n=e;if(e=n(),Na){Ro(!0);try{n()}finally{Ro(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:e},t}function Tg(e,t,n,l){return e.baseState=n,Af(e,pt,typeof l=="function"?l:mo)}function Wb(e,t,n,l,o){if(gu(e))throw Error(L(485));if(e=t.action,e!==null){var a={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};we.T!==null?n(!0):a.isTransition=!1,l(a),n=t.pending,n===null?(a.next=t.pending=a,Ng(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ng(e,t){var n=t.action,l=t.payload,o=e.state;if(t.isTransition){var a=we.T,i={};i.types=a!==null?a.types:null,we.T=i;try{var r=n(o,l),s=we.S;s!==null&&s(i,r),gh(e,t,r)}catch(m){w_(e,t,m)}finally{a!==null&&i.types!==null&&(a.types=i.types),we.T=a}}else try{a=n(o,l),gh(e,t,a)}catch(m){w_(e,t,m)}}function gh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){yh(e,t,l)},function(l){return w_(e,t,l)}):yh(e,t,n)}function yh(e,t,n){t.status="fulfilled",t.value=n,Dg(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ng(e,n)))}function w_(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Dg(t),t=t.next;while(t!==l)}e.action=null}function Dg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zg(e,t){return t}function ph(e,t){if(He){var n=xt.formState;if(n!==null){e:{var l=Ae;if(He){if(Tt){t:{for(var o=Tt,a=_l;o.nodeType!==8;){if(!a){o=null;break t}if(o=fl(o.nextSibling),o===null){o=null;break t}}a=o.data,o=a==="F!"||a==="F"?o:null}if(o){Tt=fl(o.nextSibling),l=o.data==="F!";break e}}Fo(l)}l=!1}l&&(t=n[0])}}return n=kn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:t},n.queue=l,n=Gg.bind(null,Ae,l),l.dispatch=n,l=v_(!1),a=$f.bind(null,Ae,!1,l.queue),l=kn(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=Wb.bind(null,Ae,o,a,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function bh(e){var t=Qt();return Og(t,pt,e)}function Og(e,t,n){if(t=Af(e,t,zg)[0],e=yc(mo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ds(t)}catch(i){throw i===qi?_u:i}else l=t;t=Qt();var o=t.queue,a=o.dispatch;return n!==t.memoizedState&&(Ae.flags|=2048,Oi(9,{destroy:void 0},Zb.bind(null,o,n),null)),[l,a,e]}function Zb(e,t){e.action=t}function xh(e){var t=Qt(),n=pt;if(n!==null)return Og(t,n,e);Qt(),t=t.memoizedState,n=Qt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Oi(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Ae.updateQueue,t===null&&(t=fu(),Ae.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Ag(){return Qt().memoizedState}function pc(e,t,n,l){var o=kn();Ae.flags|=e,o.memoizedState=Oi(1|t,{destroy:void 0},n,l===void 0?null:l)}function mu(e,t,n,l){var o=Qt();l=l===void 0?null:l;var a=o.memoizedState.inst;pt!==null&&l!==null&&Ef(l,pt.memoizedState.deps)?o.memoizedState=Oi(t,a,n,l):(Ae.flags|=e,o.memoizedState=Oi(1|t,a,n,l))}function vh(e,t){pc(8390656,8,e,t)}function Rf(e,t){mu(2048,8,e,t)}function Kb(e){Ae.flags|=4;var t=Ae.updateQueue;if(t===null)t=fu(),Ae.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rg(e){var t=Qt().memoizedState;return Kb({ref:t,nextImpl:e}),function(){if((ot&2)!==0)throw Error(L(440));return t.impl.apply(void 0,arguments)}}function Lg(e,t){return mu(4,2,e,t)}function Bg(e,t){return mu(4,4,e,t)}function Hg(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $g(e,t,n){n=n!=null?n.concat([e]):null,mu(4,4,Hg.bind(null,t,e),n)}function Lf(){}function Ug(e,t){var n=Qt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Ef(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Yg(e,t){var n=Qt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Ef(t,l[1]))return l[0];if(l=e(),Na){Ro(!0);try{e()}finally{Ro(!1)}}return n.memoizedState=[l,t],l}function Bf(e,t,n){return n===void 0||(ho&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Oy(),Ae.lanes|=e,ea|=e,n)}function jg(e,t,n,l){return Kn(n,t)?n:Jo.current!==null?(e=Bf(e,n,l),Kn(e,t)||(Ft=!0),e):(ho&106)===0||(ho&1073741824)!==0&&(Ve&261930)===0?(Ft=!0,e.memoizedState=n):(e=Oy(),Ae.lanes|=e,ea|=e,t)}function Ig(e,t,n,l,o){var a=at.p;at.p=a!==0&&8>a?a:8;var i=we.T,r={};r.types=i!==null?i.types:null,we.T=r,$f(e,!1,t,n);try{var s=o(),m=we.S;if(m!==null&&m(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var _=Qb(s,l);Br(e,t,_,Zn(e))}else Br(e,t,l,Zn(e))}catch(x){Br(e,t,{then:function(){},status:"rejected",reason:x},Zn())}finally{at.p=a,i!==null&&r.types!==null&&(i.types=r.types),we.T=i}}function Fb(){}function S_(e,t,n,l){if(e.tag!==5)throw Error(L(476));var o=Xg(e).queue;Ig(e,o,t,ba,n===null?Fb:function(){return qg(e),n(l)})}function Xg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ba,baseState:ba,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:ba},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qg(e){var t=Xg(e);t.next===null&&(t=e.alternate.memoizedState),Br(e,t.next.queue,{},Zn())}function Hf(){return _n(Ui)}function Qg(){return Qt().memoizedState}function Vg(){return Qt().memoizedState}function Jb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Zn();e=Io(n);var l=Xo(t,e,n);l!==null&&(Hn(l,t,n),Ar(l,t,n)),t={cache:vf()},e.payload=t;return}t=t.return}}function Pb(e,t,n){var l=Zn();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gu(e)?Wg(t,n):(n=pf(e,t,n,l),n!==null&&(Hn(n,e,l),Zg(n,t,l)))}function Gg(e,t,n){var l=Zn();Br(e,t,n,l)}function Br(e,t,n,l){var o={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gu(e))Wg(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,r=a(i,n);if(o.hasEagerState=!0,o.eagerState=r,Kn(r,i))return uu(e,t,o,0),xt===null&&cu(),!1}catch{}if(n=pf(e,t,o,l),n!==null)return Hn(n,e,l),Zg(n,t,l),!0}return!1}function $f(e,t,n,l){if(l={lane:2,revertLane:Zf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},gu(e)){if(t)throw Error(L(479))}else t=pf(e,n,l,2),t!==null&&Hn(t,e,2)}function gu(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Wg(e,t){Ci=Ic=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zg(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Am(e,n)}}var qc={readContext:_n,use:hu,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useLayoutEffect:Yt,useInsertionEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useSyncExternalStore:Yt,useId:Yt,useHostTransitionStatus:Yt,useFormState:Yt,useActionState:Yt,useOptimistic:Yt,useMemoCache:Yt,useCacheRefresh:Yt,useEffectEvent:Yt},Kg={readContext:_n,use:hu,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:vh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,pc(4194308,4,Hg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pc(4194308,4,e,t)},useInsertionEffect:function(e,t){pc(4,2,e,t)},useMemo:function(e,t){var n=kn();t=t===void 0?null:t;var l=e();if(Na){Ro(!0);try{e()}finally{Ro(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=kn();if(n!==void 0){var o=n(t);if(Na){Ro(!0);try{n(t)}finally{Ro(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Pb.bind(null,Ae,e),[l.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:function(e){e=v_(e);var t=e.queue,n=Gg.bind(null,Ae,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lf,useDeferredValue:function(e,t){var n=kn();return Bf(n,e,t)},useTransition:function(){var e=v_(!1);return e=Ig.bind(null,Ae,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Ae,o=kn();if(He){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),xt===null)throw Error(L(349));(Ve&127)!==0||Sg(l,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,vh(kg.bind(null,l,a,e),[e]),l.flags|=2048,Oi(9,{destroy:void 0},Cg.bind(null,l,a,n,t),null),n},useId:function(){var e=kn(),t=xt.identifierPrefix;if(He){var n=Vl,l=Ql;n=(l&~(1<<32-Wn(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Xc++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hf,useFormState:ph,useActionState:ph,useOptimistic:function(e){var t=kn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$f.bind(null,Ae,!0,n),n.dispatch=t,[e,t]},useMemoCache:Of,useCacheRefresh:function(){return kn().memoizedState=Jb.bind(null,Ae)},useEffectEvent:function(e){var t=kn(),n={impl:e};return t.memoizedState=n,function(){if((ot&2)!==0)throw Error(L(440));return n.impl.apply(void 0,arguments)}}},Fg={readContext:_n,use:hu,useCallback:Ug,useContext:_n,useEffect:Rf,useImperativeHandle:$g,useInsertionEffect:Lg,useLayoutEffect:Bg,useMemo:Yg,useReducer:yc,useRef:Ag,useState:function(){return yc(mo)},useDebugValue:Lf,useDeferredValue:function(e,t){var n=Qt();return jg(n,pt.memoizedState,e,t)},useTransition:function(){var e=yc(mo)[0],t=Qt().memoizedState;return[typeof e=="boolean"?e:ds(e),t]},useSyncExternalStore:wg,useId:Qg,useHostTransitionStatus:Hf,useFormState:bh,useActionState:bh,useOptimistic:function(e,t){var n=Qt();return Tg(n,pt,e,t)},useMemoCache:Of,useCacheRefresh:Vg,useEffectEvent:Rg},ex={readContext:_n,use:hu,useCallback:Ug,useContext:_n,useEffect:Rf,useImperativeHandle:$g,useInsertionEffect:Lg,useLayoutEffect:Bg,useMemo:Yg,useReducer:Ad,useRef:Ag,useState:function(){return Ad(mo)},useDebugValue:Lf,useDeferredValue:function(e,t){var n=Qt();return pt===null?Bf(n,e,t):jg(n,pt.memoizedState,e,t)},useTransition:function(){var e=Ad(mo)[0],t=Qt().memoizedState;return[typeof e=="boolean"?e:ds(e),t]},useSyncExternalStore:wg,useId:Qg,useHostTransitionStatus:Hf,useFormState:xh,useActionState:xh,useOptimistic:function(e,t){var n=Qt();return pt!==null?Tg(n,pt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Of,useCacheRefresh:Vg,useEffectEvent:Rg};function Rd(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:vt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var C_={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Zn(),o=Io(l);o.payload=t,n!=null&&(o.callback=n),t=Xo(e,o,l),t!==null&&(Hn(t,e,l),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Zn(),o=Io(l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Xo(e,o,l),t!==null&&(Hn(t,e,l),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zn(),l=Io(n);l.tag=2,t!=null&&(l.callback=t),t=Xo(e,l,n),t!==null&&(Hn(t,e,n),Ar(t,e,n))}};function wh(e,t,n,l,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,i):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,l)||!Qr(o,a):!0}function Sh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&C_.enqueueReplaceState(t,t.state,null)}function Da(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=vt({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Jg(e){Rc(e)}function Pg(e){console.error(e)}function ey(e){Rc(e)}function Qc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ch(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function k_(e,t,n){return n=Io(n),n.tag=3,n.payload={element:null},n.callback=function(){Qc(e,t)},n}function ty(e){return e=Io(e),e.tag=3,e}function ny(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var a=l.value;e.payload=function(){return o(a)},e.callback=function(){Ch(t,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Ch(t,n,l),typeof o!="function"&&(Vo===null?Vo=new Set([this]):Vo.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function tx(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&ka(t,n,o,!0),n=gn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return xn===null?Pc():n.alternate===null&&jt===0&&(jt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===Uc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),jd(e,l,o)),!1;case 22:return n.flags|=65536,l===Uc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),jd(e,l,o)),!1}throw Error(L(435,n.tag))}return jd(e,l,o),Pc(),!1}if(He)return t=gn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==f_&&(e=Error(L(422),{cause:l}),Gr(dl(e,n)))):(l!==f_&&(t=Error(L(423),{cause:l}),Gr(dl(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=dl(l,n),o=k_(e.stateNode,l,o),Od(e,o),jt!==4&&(jt=2)),!1;var a=Error(L(520),{cause:l});if(a=dl(a,n),Yr===null?Yr=[a]:Yr.push(a),jt!==4&&(jt=2),t===null)return!0;l=dl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=k_(n.stateNode,l,e),Od(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vo===null||!Vo.has(a))))return n.flags|=65536,o&=-o,n.lanes|=o,o=ty(o),ny(o,e,n,l),Od(n,o),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Uf=Error(L(461)),Ft=!1;function en(e,t,n,l){t.child=e===null?gg(t,null,n,l):Ta(t,e.child,n,l)}function kh(e,t,n,l,o){n=n.render;var a=t.ref;if("ref"in l){var i={};for(var r in l)r!=="ref"&&(i[r]=l[r])}else i=l;return Ma(t),l=Tf(e,t,n,i,a,o),r=Nf(),e!==null&&!Ft?(Df(e,t,o),go(e,t,o)):(He&&r&&du(t),t.flags|=1,en(e,t,l,o),t.child)}function Mh(e,t,n,l,o){if(e===null){var a=n.type;return typeof a=="function"&&!bf(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ly(e,t,a,l,o)):(e=hc(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jf(e,o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(i,l)&&e.ref===t.ref)return go(e,t,o)}return t.flags|=1,e=co(a,l),e.ref=t.ref,e.return=t,t.child=e}function ly(e,t,n,l,o){if(e!==null){var a=e.memoizedProps;if(Qr(a,l)&&e.ref===t.ref)if(Ft=!1,t.pendingProps=l=a,jf(e,o))(e.flags&131072)!==0&&(Ft=!0);else return t.lanes=e.lanes,go(e,t,o)}return M_(e,t,n,l,o)}function oy(e,t,n,l){var o=l.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~a}else l=0,t.child=null;return Eh(e,t,a,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gc(t,a!==null?a.cachePool:null),a!==null?mh(t,a):b_(),bg(t);else return l=t.lanes=536870912,Eh(e,t,a!==null?a.baseLanes|n:n,n,l)}else a!==null?(gc(t,a.cachePool),mh(t,a),Qo(),t.memoizedState=null):(e!==null&&gc(t,null),b_(),Qo());return en(e,t,o,n),t.child}function Hr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Eh(e,t,n,l,o){var a=wf();return a=a===null?null:{parent:Kt._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&gc(t,null),b_(),bg(t),e!==null&&ka(e,t,l,!0),t.childLanes=o,null}function bc(e,t){return t=yu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Th(e,t,n){return Ta(t,e.child,null,n),e=bc(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function nx(e,t,n){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(l.mode==="hidden")return e=bc(t,l),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Hr(null,e);if(x_(t),(e=Tt)?(e=op(e,_l),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ko!==null?{id:Ql,overflow:Vl}:null,retryLane:536870912,hydrationErrors:null},n=cg(e),n.return=t,t.child=n,sn=t,Tt=null)):e=null,e===null)throw Fo(t);return t.lanes=536870912,null}return bc(t,l)}var a=e.memoizedState;if(a!==null){var i=a.dehydrated;if(x_(t),o)if(t.flags&256)t.flags&=-257,t=Th(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(L(558));else if(Ft||ka(e,t,n,!1),o=(n&e.childLanes)!==0,Ft||o){if(Jo.current===null){if(l=xt,l!==null&&(i=Rm(l,n),i!==0&&i!==a.retryLane))throw a.retryLane=i,La(e,i),Hn(l,e,i),Uf;Pc()}t=Th(e,t,n)}else e=a.treeContext,Tt=fl(i.nextSibling),sn=t,He=!0,jo=null,_l=!1,e!==null&&dg(t,e),t=bc(t,l),t.flags|=134221824;return t}return e=co(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function oi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(L(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function M_(e,t,n,l,o){return Ma(t),n=Tf(e,t,n,l,void 0,o),l=Nf(),e!==null&&!Ft?(Df(e,t,o),go(e,t,o)):(He&&l&&du(t),t.flags|=1,en(e,t,n,o),t.child)}function Nh(e,t,n,l,o,a){return Ma(t),t.updateQueue=null,n=vg(t,l,n,o),xg(e),l=Nf(),e!==null&&!Ft?(Df(e,t,a),go(e,t,a)):(He&&l&&du(t),t.flags|=1,en(e,t,n,a),t.child)}function Dh(e,t,n,l,o){if(Ma(t),t.stateNode===null){var a=mi,i=n.contextType;typeof i=="object"&&i!==null&&(a=_n(i)),a=new n(l,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=C_,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=l,a.state=t.memoizedState,a.refs={},Cf(t),i=n.contextType,a.context=typeof i=="object"&&i!==null?_n(i):mi,a.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Rd(t,n,i,l),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(i=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&C_.enqueueReplaceState(a,a.state,null),Lr(t,l,a,o),Rr(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){a=t.stateNode;var r=t.memoizedProps,s=Da(n,r);a.props=s;var m=a.context,_=n.contextType;i=mi,typeof _=="object"&&_!==null&&(i=_n(_));var x=n.getDerivedStateFromProps;_=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,_||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r||m!==i)&&Sh(t,a,l,i),Oo=!1;var d=t.memoizedState;a.state=d,Lr(t,l,a,o),Rr(),m=t.memoizedState,r||d!==m||Oo?(typeof x=="function"&&(Rd(t,n,x,l),m=t.memoizedState),(s=Oo||wh(t,n,s,l,d,m,i))?(_||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=m),a.props=l,a.state=m,a.context=i,l=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,y_(e,t),i=t.memoizedProps,_=Da(n,i),a.props=_,x=t.pendingProps,d=a.context,m=n.contextType,s=mi,typeof m=="object"&&m!==null&&(s=_n(m)),r=n.getDerivedStateFromProps,(m=typeof r=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==x||d!==s)&&Sh(t,a,l,s),Oo=!1,d=t.memoizedState,a.state=d,Lr(t,l,a,o),Rr();var b=t.memoizedState;i!==x||d!==b||Oo||e!==null&&e.dependencies!==null&&$c(e.dependencies)?(typeof r=="function"&&(Rd(t,n,r,l),b=t.memoizedState),(_=Oo||wh(t,n,_,l,d,b,s)||e!==null&&e.dependencies!==null&&$c(e.dependencies))?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,b,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,b,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=b),a.props=l,a.state=b,a.context=s,l=_):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),l=!1)}return a=l,oi(e,t),l=(t.flags&128)!==0,a||l?(a=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&l?(t.child=Ta(t,e.child,null,o),t.child=Ta(t,null,n,o)):en(e,t,n,o),t.memoizedState=a.state,e=t.child):e=go(e,t,o),e}function zh(e,t,n,l){return Ca(),t.flags|=256,en(e,t,n,l),t.child}var E_={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function T_(e){return{baseLanes:e,cachePool:fg()}}function N_(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Qn),e}function ay(e,t,n){var l=t.pendingProps,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),i&&(o=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(o?qo(t):Qo(),(e=Tt)?(e=op(e,_l),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ko!==null?{id:Ql,overflow:Vl}:null,retryLane:536870912,hydrationErrors:null},n=cg(e),n.return=t,t.child=n,sn=t,Tt=null)):e=null,e===null)throw Fo(t);return Pf(e)?t.lanes=32:t.lanes=536870912,null}return a=l.children,l=l.fallback,o?(Qo(),o=t.mode,a=yu({mode:"hidden",children:a},o),l=xa(l,o,n,null),a.return=t,l.return=t,a.sibling=l,t.child=a,l=t.child,l.memoizedState=T_(n),l.childLanes=N_(e,i,n),t.memoizedState=E_,Hr(null,l)):(qo(t),Yf(t,a))}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(s!==null)return lx(e,t,a,i,l,s,r,n)}return o?(Qo(),o=l.fallback,a=t.mode,r=e.child,s=r.sibling,l=co(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&1206910976,s!==null?o=co(s,o):(o=xa(o,a,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Hr(null,l),l=t.child,o=e.child.memoizedState,o===null?o=T_(n):(a=o.cachePool,a!==null?(r=Kt._currentValue,a=a.parent!==r?{parent:r,pool:r}:a):a=fg(),o={baseLanes:o.baseLanes|n,cachePool:a}),l.memoizedState=o,l.childLanes=N_(e,i,n),t.memoizedState=E_,Hr(e.child,l)):(qo(t),n=e.child,e=n.sibling,n=co(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function Yf(e,t){return t=yu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yu(e,t){return e=Bn(22,e,null,t),e.lanes=0,e}function ec(e,t,n){return Ta(t,e.child,null,n),e=Yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lx(e,t,n,l,o,a,i,r){if(n)return t.flags&256?(qo(t),t.flags&=-257,ec(e,t,r)):t.memoizedState!==null?(Qo(),t.child=e.child,t.flags|=128,null):(Qo(),a=o.fallback,i=t.mode,o=yu({mode:"visible",children:o.children},i),a=xa(a,i,r,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,Ta(t,e.child,null,r),o=t.child,o.memoizedState=T_(r),o.childLanes=N_(e,l,r),t.memoizedState=E_,Hr(null,o));if(qo(t),Pf(a)){if(l=a.nextSibling&&a.nextSibling.dataset,l)var s=l.dgst;return l=s,l!==""&&(o=Error(L(419)),o.stack="",o.digest=l,Gr({value:o,source:null,stack:null})),ec(e,t,r)}if(Ft||ka(e,t,r,!1),l=(r&e.childLanes)!==0,Ft||l){if(Jo.current!==null)return ec(e,t,r);if(l=xt,l!==null&&(o=Rm(l,r),o!==0&&o!==i.retryLane))throw i.retryLane=o,La(e,o),Hn(l,e,o),Uf;return ef(a)||Pc(),ec(e,t,r)}return ef(a)?(t.flags|=192,t.child=e.child,null):(e=i.treeContext,Tt=fl(a.nextSibling),sn=t,He=!0,jo=null,_l=!1,e!==null&&dg(t,e),t=Yf(t,o.children),t.flags|=134221824,t)}function Oh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),mc(e.return,t,n)}function Ah(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&jc(n)===null&&(t=e),e=e.sibling}return t}function tc(e,t,n,l,o,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o,treeForkCount:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=n,i.tailMode=o,i.treeForkCount=a)}function Ld(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function D_(e,t,n){var l=t.pendingProps,o=l.revealOrder,a=l.tail;l=l.children;var i=hn.current;if(t.flags&128)return Zr(t,i),null;var r=(i&2)!==0;if(r?(i=i&1|2,t.flags|=128):i&=1,Zr(t,i),o==="backwards"&&e!==null?(Ld(e),en(e,t,l,n),Ld(e)):en(e,t,l,n),l=He?Vr:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":n=Ah(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null,Ld(t)),tc(t,!0,o,null,a,l);break;case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&jc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}tc(t,!0,n,null,a,l);break;case"together":tc(t,!1,null,null,void 0,l);break;case"independent":t.memoizedState=null;break;default:n=Ah(t.child),n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),tc(t,!1,o,n,a,l)}return t.child}function Rh(e,t,n){var l=t.pendingProps;return Bo(t,t.type,l.value),en(e,t,l.children,n),t.child}function go(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ka(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=co(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=co(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$c(e)))}function ox(e,t,n){switch(t.tag){case 3:Dc(t,t.stateNode.containerInfo),Bo(t,Kt,e.memoizedState.cache),Ca();break;case 27:case 5:l_(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:Bo(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,x_(t),null;break;case 13:var l=t.memoizedState;if(l!==null){if(l.dehydrated!==null)return qo(t),t.flags|=128,null;l=ka(e,t,n,!1);var o=t.child.childLanes;return l||(n&o)!==0?ay(e,t,n):(qo(t),e=go(e,t,n),e!==null?e.sibling:null)}qo(t);break;case 19:if(t.flags&128)return D_(e,t,n);if(o=(e.flags&128)!==0,l=(n&t.childLanes)!==0,l||(ka(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return D_(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Zr(t,hn.current),l)break;return null;case 22:return t.lanes=0,oy(e,t,n,t.pendingProps);case 24:Bo(t,Kt,e.memoizedState.cache)}return go(e,t,n)}function iy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ft=!0;else{if(!jf(e,n)&&(t.flags&128)===0)return Ft=!1,ox(e,t,n);Ft=(e.flags&131072)!==0}else Ft=!1,He&&(t.flags&1048576)!==0&&ug(t,Vr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ma(t.elementType),t.type=e,typeof e=="function")bf(e)?(l=Da(e,l),t.tag=1,t=Dh(null,t,e,l,n)):(t.tag=0,t=M_(null,t,e,l,n));else{if(e!=null){var o=e.$$typeof;if(o===af){t.tag=11,t=kh(null,t,e,l,n);break e}else if(o===rf){t.tag=14,t=Mh(null,t,e,l,n);break e}else if(o===Xl){t.tag=10,t.type=e,t=Rh(null,t,n);break e}}throw t=t_(e)||e,Error(L(306,t,""))}}return t;case 0:return M_(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=Da(l,t.pendingProps),Dh(e,t,l,o,n);case 3:e:{if(Dc(t,t.stateNode.containerInfo),e===null)throw Error(L(387));l=t.pendingProps;var a=t.memoizedState;o=a.element,y_(e,t),Lr(t,l,null,n);var i=t.memoizedState;if(l=i.cache,Bo(t,Kt,l),l!==a.cache&&m_(t,[Kt],n,!0),Rr(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=zh(e,t,l,n);break e}else if(l!==o){o=dl(Error(L(424)),t),Gr(o),t=zh(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Tt=fl(e.firstChild),sn=t,He=!0,jo=null,_l=!0,n=gg(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Ca(),l===o){t=go(e,t,n);break e}en(e,t,l,n)}t=t.child}return t;case 26:return oi(e,t),e===null?(n=rm(t.type,null,t.pendingProps,null))?t.memoizedState=n:He||(t.stateNode=Zy(t.type,t.pendingProps,Yo.current,t)):t.memoizedState=rm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return l_(t),e===null&&He&&(l=t.stateNode=ap(t.type,t.pendingProps,Yo.current),sn=t,_l=!0,o=Tt,na(t.type)?(tf=o,Tt=fl(l.firstChild)):Tt=o),en(e,t,t.pendingProps.children,n),oi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((o=l=Tt)&&(l=Kx(l,t.type,t.pendingProps,_l),l!==null?(t.stateNode=l,sn=t,Tt=fl(l.firstChild),_l=!1,o=!0):o=!1),o||Fo(t)),l_(t),o=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,F_(o,a)?l=null:i!==null&&F_(o,i)&&(t.flags|=32),t.memoizedState!==null&&(o=Tf(e,t,Gb,null,null,n),Ui._currentValue=o),oi(e,t),en(e,t,l,n),t.child;case 6:return e===null&&He&&((e=n=Tt)&&(n=Fx(n,t.pendingProps,_l),n!==null?(t.stateNode=n,sn=t,Tt=null,e=!0):e=!1),e||Fo(t)),null;case 13:return ay(e,t,n);case 4:return Dc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ta(t,null,l,n):en(e,t,l,n),t.child;case 11:return kh(e,t,t.type,t.pendingProps,n);case 7:return l=t.pendingProps,oi(e,t),en(e,t,l,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return Rh(e,t,n);case 9:return o=t.type._context,l=t.pendingProps.children,Ma(t),o=_n(o),l=l(o),t.flags|=1,en(e,t,l,n),t.child;case 14:return Mh(e,t,t.type,t.pendingProps,n);case 15:return ly(e,t,t.type,t.pendingProps,n);case 19:return D_(e,t,n);case 31:return nx(e,t,n);case 22:return oy(e,t,n,t.pendingProps);case 24:return Ma(t),l=_n(Kt),e===null?(o=wf(),o===null&&(o=xt,a=vf(),o.pooledCache=a,a.refCount++,a!==null&&(o.pooledCacheLanes|=n),o=a),t.memoizedState={parent:l,cache:o},Cf(t),Bo(t,Kt,o)):((e.lanes&n)!==0&&(y_(e,t),Lr(t,null,null,n),Rr()),o=e.memoizedState,a=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Bo(t,Kt,l)):(l=a.cache,Bo(t,Kt,l),l!==o.cache&&m_(t,[Kt],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),l=t.pendingProps,l.name!=null&&l.name!=="auto"?t.flags|=e===null?18882560:18874368:He&&du(t),e!==null&&e.memoizedProps.name!==l.name?t.flags|=4194816:oi(e,t),en(e,t,l.children,n),t.child;case 29:throw t.pendingProps}throw Error(L(156,t.tag))}function io(e){e.flags|=4}function Bd(e,t,n,l,o){var a;if((a=(e.mode&32)!==0)&&(a=n===null?um(t,l):um(t,l)&&(l.src!==n.src||l.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Ly())e.flags|=8192;else throw wa=Uc,Sf}else e.flags&=-16777217}function Lh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cp(t))if(Ly())e.flags|=8192;else throw wa=Uc,Sf}function nc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zm():536870912,e.lanes|=t,Ai|=t)}function xr(e,t){if(!He)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&1206910976,l|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function ax(e,t,n){var l=t.pendingProps;switch(xf(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return Et(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),uo(Kt),Ni(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ni(t)?io(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zd())),Et(t),null;case 26:var o=t.type,a=t.memoizedState;return e===null?(io(t),a!==null?(Et(t),Lh(t,a)):(Et(t),Bd(t,o,null,l,n))):a?a!==e.memoizedState?(io(t),Et(t),Lh(t,a)):(Et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&io(t),Et(t),Bd(t,o,e,l,n)),null;case 27:if(zc(t),n=Yo.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&io(t);else{if(!l){if(t.stateNode===null)throw Error(L(166));return Et(t),t.subtreeFlags&=-33554433,null}e=Gl.current,ni(t)?sh(t,e):(e=ap(o,l,n),t.stateNode=e,io(t))}return Et(t),t.subtreeFlags&=-33554433,null;case 5:if(zc(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&io(t);else{if(!l){if(t.stateNode===null)throw Error(L(166));return Et(t),t.subtreeFlags&=-33554433,null}if(a=Gl.current,ni(t))sh(t,a);else{var i=Pr(Yo.current);switch(a){case 1:a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":a=i.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":a=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":a=i.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?i.createElement(o,{is:l.is}):i.createElement(o)}}a[dn]=t,a[Un]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)a.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=a;e:switch(mn(a,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&io(t)}}return Et(t),t.subtreeFlags&=-33554433,Bd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&io(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(L(166));if(e=Yo.current,ni(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=sn,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[dn]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Gy(e.nodeValue,n)),e||Fo(t,!0)}else e=Pr(e).createTextNode(l),e[dn]=t,t.stateNode=e}return Et(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ni(t),n!==null){if(e===null){if(!l)throw Error(L(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(557));e[dn]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Et(t),e=!1}else n=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if((t.flags&128)!==0)throw Error(L(558))}return Et(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ni(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[dn]=t}else Ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Et(t),o=!1}else o=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==o&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),nc(t,t.updateQueue),Et(t),null);case 4:return Ni(),e===null&&Kf(t.stateNode.containerInfo),t.flags|=67108864,Et(t),null;case 10:return uo(t.type),Et(t),null;case 19:if(Mf(t),l=t.memoizedState,l===null)return Et(t),null;if(o=(t.flags&128)!==0,a=l.rendering,a===null)if(o)xr(l,!1);else{if(jt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=jc(e),a!==null){for(t.flags|=128,xr(l,!1),e=a.updateQueue,t.updateQueue=e,nc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)sg(n,e),n=n.sibling;return Zr(t,hn.current&1|2),He&&ro(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Vn()>Fc&&(t.flags|=128,o=!0,xr(l,!1),t.lanes=4194304)}else{if(!o)if(e=jc(a),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,nc(t,e),xr(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!a.alternate&&!He)return Et(t),null}else 2*Vn()-l.renderingStartTime>Fc&&n!==536870912&&(t.flags|=128,o=!0,xr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(e=l.last,e!==null?e.sibling=a:t.child=a,l.last=a)}if(l.tail!==null){e=l.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Vn(),e.sibling=null,a=hn.current,a=o?a&1|2:a&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!n||He?Zr(t,a):(n=a,Nt(gn,t),Nt(hn,n),xn===null&&(xn=t)),He&&ro(t,l.treeForkCount),e}return Et(t),null;case 22:case 23:return Xn(t),kf(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),n=t.updateQueue,n!==null&&nc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&fn(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),uo(Kt),Et(t),null;case 25:return null;case 30:return t.flags|=33554432,Et(t),null}throw Error(L(156,t.tag))}function ix(e,t){switch(xf(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(Kt),Ni(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zc(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error(L(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Mf(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ni(),null;case 10:return uo(t.type),null;case 22:case 23:return Xn(t),kf(),e!==null&&fn(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return uo(Kt),null;case 25:return null;default:return null}}function ry(e,t){switch(xf(t),t.tag){case 3:uo(Kt),Ni();break;case 26:case 27:case 5:zc(t);break;case 4:Ni();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:Mf(t);break;case 10:uo(t.type);break;case 22:case 23:Xn(t),kf(),e!==null&&fn(va);break;case 24:uo(Kt)}}function _s(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var a=n.create,i=n.inst;l=a(),i.destroy=l}n=n.next}while(n!==o)}}catch(r){ht(t,t.return,r)}}function Po(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var a=o.next;l=a;do{if((l.tag&e)===e){var i=l.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,o=t;var s=n,m=r;try{m()}catch(_){ht(o,s,_)}}}l=l.next}while(l!==a)}}catch(_){ht(t,t.return,_)}}function sy(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pg(t,n)}catch(l){ht(e,e.return,l)}}}function cy(e,t,n){n.props=Da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ht(e,t,l)}}function jl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:var o=e.stateNode,a=fo(e.memoizedProps,o);(o.ref===null||o.ref.name!==a)&&(o.ref=Py(a)),l=o.ref;break;case 7:if(e.stateNode===null){var i=new Fn(e);$n(e.child,!1,Wx,i,void 0,void 0),e.stateNode=i}l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){ht(e,t,r)}}function un(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(o){ht(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){ht(e,t,o)}else n.current=null}function Vc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)lp(e.stateNode,t[n])}function Bh(e){for(var t=e.return;t!==null&&(Xf(t)&&lp(e.stateNode,t.stateNode),!If(t));)t=t.return}function $r(e){for(var t=e.return;t!==null&&(Xf(t)&&Zx(e.stateNode,t.stateNode),!If(t));)t=t.return}function If(e){return e.tag===5||e.tag===3||e.tag===27}function Xf(e){return e&&e.tag===7&&e.stateNode!==null}function z_(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){ht(e,e.return,o)}}function Hd(e,t,n){try{var l=e.stateNode;Dx(l,e.type,n,t),l[Un]=t}catch(o){ht(e,e.return,o)}}function uy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function O_(e,t,n,l){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(o,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(o),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ql)),Vc(e,l),et=!0;else if(o!==4&&(o===27&&(Vc(e,l),l=null,na(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(O_(e,t,n,l),e=e.sibling;e!==null;)O_(e,t,n,l),e=e.sibling}function Gc(e,t,n,l){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?n.insertBefore(o,t):n.appendChild(o),Vc(e,l),et=!0;else if(o!==4&&(o===27&&(Vc(e,l),l=null,na(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Gc(e,t,n,l),e=e.sibling;e!==null;)Gc(e,t,n,l),e=e.sibling}function dy(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);mn(t,l,n),t[dn]=e,t[Un]=n}catch(a){ht(e,e.return,a)}}var Wc=!1,qn=null;function Hh(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Wc=!0)}var Il=null;function $h(){var e=Il;return Il=null,e}var Ln=0;function Qi(e,t,n,l,o){return Ln=0,_y(e.child,t,n,l,o)}function _y(e,t,n,l,o){for(var a=!1;e!==null;){if(e.tag===5){var i=e.stateNode;if(l!==null){var r=J_(i);l.push(r),r.view&&(a=!0)}else a||J_(i).view&&(a=!0);Wc=!0,Ky(i,Ln===0?t:t+"_"+Ln,n),Ln++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||_y(e.child,t,n,l,o)&&(a=!0));e=e.sibling}return a}function Zl(e,t){for(;e!==null;)e.tag===5?Fy(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Zl(e.child,t)),e=e.sibling}function xc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(xc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(L(544));var n=t.name;t=bo(t.default,t.share),t!=="none"&&(Qi(e,n,t,null,!1)||Zl(e.child,!1))}e=e.sibling}}function A_(e,t){if(e.tag===30){var n=e.stateNode,l=e.memoizedProps,o=fo(l,n),a=bo(l.default,n.paired?l.share:l.enter);a!=="none"?Qi(e,o,a,null,!1)?(xc(e),n.paired||t||Ri(e,l.onEnter)):Zl(e.child,!1):xc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)A_(e,t),e=e.sibling;else xc(e)}function R_(e){if(qn!==null&&qn.size!==0){var t=qn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,l=n.name;if(l!=null&&l!=="auto"){var o=t.get(l);if(o!==void 0){var a=bo(n.default,n.share);if(a!=="none"&&(Qi(e,l,a,null,!1)?(a=e.stateNode,o.paired=a,a.paired=o,Ri(e,n.onShare)):Zl(e.child,!1)),t.delete(l),t.size===0)break}}}R_(e)}e=e.sibling}}}function L_(e){if(e.tag===30){var t=e.memoizedProps,n=fo(t,e.stateNode),l=qn!==null?qn.get(n):void 0,o=bo(t.default,l!==void 0?t.share:t.exit);o!=="none"&&(Qi(e,n,o,null,!1)?l!==void 0?(o=e.stateNode,l.paired=o,o.paired=l,qn.delete(n),Ri(e,t.onShare)):Ri(e,t.onExit):Zl(e.child,!1)),qn!==null&&R_(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)L_(e),e=e.sibling;else qn!==null&&R_(e)}function fy(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=fo(t,e.stateNode);t=bo(t.default,t.update),e.flags&=-5,t!=="none"&&Qi(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&fy(e);e=e.sibling}}function B_(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Zl(e.child,!1))}B_(e)}e=e.sibling}}function vc(e){if(e.tag===30)e.stateNode.paired=null,Zl(e.child,!1),B_(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)vc(e),e=e.sibling;else B_(e)}function hy(e){for(e=e.child;e!==null;)e.tag===30?Zl(e.child,!1):(e.subtreeFlags&33554432)!==0&&hy(e),e=e.sibling}function qf(e,t,n,l,o,a,i){for(var r=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(a!==null&&Ln<a.length){var m=a[Ln],_=J_(s);(m.view||_.view)&&(r=!0);var x;if(x=(e.flags&4)===0)if(_.clip)x=!0;else{x=m.rect;var d=_.rect;x=x.y!==d.y||x.x!==d.x||x.height!==d.height||x.width!==d.width}x&&(e.flags|=4),_.abs?_=!m.abs:(m=m.rect,_=_.rect,_=m.height!==_.height||m.width!==_.width),_&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Ky(s,Ln===0?n:n+"_"+Ln,o),r&&(e.flags&4)!==0||(Il===null&&(Il=[]),Il.push(s,Ln===0?l:l+"_"+Ln,t.memoizedProps)),Ln++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&i?e.flags|=t.flags&32:qf(e,t.child,n,l,o,a,i)&&(r=!0));t=t.sibling}return r}function my(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,l=e.stateNode,o=fo(n,l),a=bo(n.default,n.update);if(t){l=l.clones;var i=l===null?null:l.map(Bx)}else i=e.memoizedState,e.memoizedState=null;l=e;var r=e.child;Ln=0,o=qf(l,r,o,o,a,i,!1),(e.flags&4)!==0&&o&&(t||Ri(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&my(e,t);e=e.sibling}}var on=!1,ct=!1,$l=!1,Ud=!1,Uh=typeof WeakSet=="function"?WeakSet:Set,an=null,Ul=!1,Tr=!1,Zc=!1,H_=!1;function rx(e,t,n){if(e=e.containerInfo,Z_=Yi,e=eg(e),gf(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var a=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var r=0,s=-1,m=-1,_=0,x=0,d=e,b=null;t:for(;;){for(var C;d!==l||a!==0&&d.nodeType!==3||(s=r+a),d!==i||o!==0&&d.nodeType!==3||(m=r+o),d.nodeType===3&&(r+=d.nodeValue.length),(C=d.firstChild)!==null;)b=d,d=C;for(;;){if(d===e)break t;if(b===l&&++_===a&&(s=r),b===i&&++x===o&&(m=r),(C=d.nextSibling)!==null)break;d=b,b=d.parentNode}d=C}l=s===-1||m===-1?null:{start:s,end:m}}else l=null}l=l||{start:0,end:0}}else l=null;for(K_={focusedElem:e,selectionRange:l},Yi=!1,n=(n&335544064)===n,an=t,t=n?9270:1024;an!==null;){if(e=an,n&&(l=e.deletions,l!==null))for(a=0;a<l.length;a++)n&&L_(l[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&Hh(e),lc(n);else{if(e.tag===22){if(l=e.alternate,e.memoizedState!==null){l!==null&&l.memoizedState===null&&n&&L_(l),lc(n);continue}else if(l!==null&&l.memoizedState!==null){n&&Hh(e),lc(n);continue}}l=e.child,(e.subtreeFlags&t)!==0&&l!==null?(l.return=e,an=l):(n&&fy(e),lc(n))}}qn=null}function lc(e){for(;an!==null;){var t=an,n=e,l=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&l!==null){n=void 0,o=l.memoizedProps,l=l.memoizedState;var a=t.stateNode;try{var i=Da(t.type,o);n=a.getSnapshotBeforeUpdate(i,l),a.__reactInternalSnapshotBeforeUpdate=n}catch(r){ht(t,t.return,r)}}break;case 3:if((o&1024)!==0){if(l=t.stateNode.containerInfo,n=l.nodeType,n===9)P_(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":P_(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&l!==null&&(n=fo(l.memoizedProps,l.stateNode),o=t.memoizedProps,o=bo(o.default,o.update),o!=="none"&&Qi(l,n,o,l.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(L(163))}if(l=t.sibling,l!==null){l.return=t.return,an=l;break}an=t.return}}function gy(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Yl(e,n),l&4&&_s(5,n);break;case 1:if(Yl(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){ht(n,n.return,i)}else{var o=Da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ht(n,n.return,i)}}l&64&&sy(n),l&512&&jl(n,n.return);break;case 3:if(Yl(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pg(e,t)}catch(i){ht(n,n.return,i)}}break;case 27:t===null&&l&4&&dy(n);case 26:case 5:Yl(e,n),t===null&&l&4&&z_(n),l&512&&jl(n,n.return);break;case 12:Yl(e,n);break;case 31:Yl(e,n),l&4&&xy(e,n);break;case 13:Yl(e,n),l&4&&vy(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=bx.bind(null,n),Jx(e,n))));break;case 22:if(l=n.memoizedState!==null||on,!l){var a=t!==null&&t.memoizedState!==null||ct;t=on,o=ct,on=l,(ct=a)&&!o?(l=2,(n.subtreeFlags&8772)!==0&&(l|=1),Cl(e,n,l)):Yl(e,n),on=t,ct=o}break;case 30:Yl(e,n),l&512&&jl(n,n.return);break;case 7:l&512&&jl(n,n.return);default:Yl(e,n)}}function $_(e,t){for(e=e.child;e!==null;)yy(e,t),e=e.sibling}function yy(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var l=n.style;typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"}else{var o=e.stateNode,a=e.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null;o.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(s){ht(e,e.return,s)}U_(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,et=!0}catch(s){ht(e,e.return,s)}break;case 18:try{var r=e.stateNode;t?tm(r,!0):tm(e.stateNode,!1)}catch(s){ht(e,e.return,s)}break;case 22:case 23:e.memoizedState===null&&$_(e,t);break;default:$_(e,t)}}function U_(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,l=t;switch(n.tag){case 4:yy(n,l);break e;case 22:n.memoizedState===null&&U_(n,l);break e;default:U_(n,l)}}e=e.sibling}}function py(e){var t=e.alternate;t!==null&&(e.alternate=null,py(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&au(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var zt=null,An=!1;function Sl(e,t,n){for(n=n.child;n!==null;)by(e,t,n),n=n.sibling}function by(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 26:ct||un(n,t),Sl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!ct&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||un(n,t),$r(n);var l=zt,o=An;na(n.type)&&(zt=n.stateNode,An=!1),Sl(e,t,n),ip(n.stateNode,n.type,n.memoizedProps),zt=l,An=o;break;case 5:ct||un(n,t),$r(n);case 6:if(n.tag===6&&$r(n),l=zt,o=An,zt=null,Sl(e,t,n),zt=l,An=o,zt!==null)if(An)try{(zt.nodeType===9?zt.body:zt.nodeName==="HTML"?zt.ownerDocument.body:zt).removeChild(n.stateNode),et=!0}catch(a){ht(n,t,a)}else try{zt.removeChild(n.stateNode),et=!0}catch(a){ht(n,t,a)}break;case 18:zt!==null&&(An?(e=zt,em(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ji(e)):em(zt,n.stateNode));break;case 4:l=zt,o=An,zt=n.stateNode.containerInfo,An=!0,Sl(e,t,n),zt=l,An=o;break;case 0:case 11:case 14:case 15:Po(2,n,t),ct||Po(4,n,t),Sl(e,t,n);break;case 1:ct||(un(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&cy(n,t,l)),Sl(e,t,n);break;case 21:Sl(e,t,n);break;case 22:ct=(l=ct)||n.memoizedState!==null,Sl(e,t,n),ct=l;break;case 30:un(n,t),Sl(e,t,n);break;case 7:ct||un(n,t),Sl(e,t,n);break;default:Sl(e,t,n)}}function xy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ji(e)}catch(n){ht(t,t.return,n)}}}function vy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ji(e)}catch(n){ht(t,t.return,n)}}function sx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uh),t;default:throw Error(L(435,e.tag))}}function oc(e,t){var n=sx(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var o=xx.bind(null,e,l);l.then(o,o)}})}function Sn(e,t,n){var l=t.deletions;if(l!==null)for(var o=0;o<l.length;o++){var a=l[o],i=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 27:if(na(s.type)){zt=s.stateNode,An=!1;break e}break;case 5:zt=s.stateNode,An=!1;break e;case 3:case 4:zt=s.stateNode.containerInfo,An=!0;break e}s=s.return}if(zt===null)throw Error(L(160));by(i,r,a),zt=null,An=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wy(t,e,n),t=t.sibling}var kl=null;function wy(e,t,n){var l=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var a=0;a<l.length;a++){var i=l[a];i.ref.impl=i.nextImpl}Sn(t,e,n),Cn(e),o&4&&(Po(3,e,e.return),_s(3,e),Po(5,e,e.return));break;case 1:Sn(t,e,n),Cn(e),o&512&&(ct||l===null||un(l,l.return)),o&64&&on&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=kl,Sn(t,e,n),Cn(e),o&512&&(ct||l===null||un(l,l.return)),o&4)if(o=l!==null?l.memoizedState:null,n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null)if(on)e.stateNode=Zy(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,o=a.ownerDocument||a;t:switch(t){case"title":l=o.getElementsByTagName("title")[0],(!l||l[ss]||l[dn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=o.createElement(t),o.head.insertBefore(l,o.querySelector("head > title"))),mn(l,t,n),l[dn]=e,rn(l),t=l;break e;case"link":if(a=cm("link","href",o).get(t+(n.href||""))){for(i=0;i<a.length;i++)if(l=a[i],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(i,1);break t}}l=o.createElement(t),mn(l,t,n),o.head.appendChild(l);break;case"meta":if(a=cm("meta","content",o).get(t+(n.content||""))){for(i=0;i<a.length;i++)if(l=a[i],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(i,1);break t}}l=o.createElement(t),mn(l,t,n),o.head.appendChild(l);break;default:throw Error(L(468,t))}l[dn]=e,rn(l),t=l}e.stateNode=t}else on||nf(a,e.type,e.stateNode);else e.stateNode=sm(a,n,e.memoizedProps);else o!==n?(o===null?(t=l.stateNode,t===null||ct||t.parentNode.removeChild(t)):o.count--,n===null?on||nf(a,e.type,e.stateNode):sm(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Hd(e,e.memoizedProps,l.memoizedProps);break;case 27:Sn(t,e,n),Cn(e),o&512&&(ct||l===null||un(l,l.return)),l!==null&&o&4&&Hd(e,e.memoizedProps,l.memoizedProps);break;case 5:if(a=$l,$l=!1,Sn(t,e,n),$l=a,Cn(e),o&512&&(ct||l===null||un(l,l.return)),e.flags&32){t=e.stateNode;try{zi(t,""),et=!0}catch(_){ht(e,e.return,_)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,Hd(e,t,l!==null?l.memoizedProps:t)),o&1024&&(Ud=!0);break;case 6:if(Sn(t,e,n),Cn(e),o&4){if(e.stateNode===null)throw Error(L(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,et=!0}catch(_){ht(e,e.return,_)}}break;case 3:if(et=!1,kc=null,a=kl,kl=es(t.containerInfo),Sn(t,e,n),kl=a,Cn(e),o&4&&l!==null&&l.memoizedState.isDehydrated)try{ji(t.containerInfo)}catch(_){ht(e,e.return,_)}Ud&&(Ud=!1,Sy(e)),et=!1;break;case 4:o=$l,$l=on,l=Q1(),a=kl,kl=es(e.stateNode.containerInfo),Sn(t,e,n),Cn(e),kl=a,et&&Tr&&(Zc=!0),et=l,$l=o;break;case 12:Sn(t,e,n),Cn(e);break;case 31:Sn(t,e,n),Cn(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oc(e,t)));break;case 13:Sn(t,e,n),Cn(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pu=Vn()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oc(e,t)));break;case 22:a=e.memoizedState!==null,i=l!==null&&l.memoizedState!==null;var r=on,s=ct,m=$l;on=r||a,$l=m||a,ct=s||i,Sn(t,e,n),ct=s,$l=m,on=r,Cn(e),o&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||l===null||i||on||ct||(t=i||ct,n=on,l=ct,on=a||on,ct=t,Do(e,2),on=n,ct=l),!a&&$l||$_(e,a)),o&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,oc(e,n))));break;case 19:Sn(t,e,n),Cn(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,oc(e,t)));break;case 30:o&512&&(ct||l===null||un(l,l.return)),o=Q1(),a=Tr,i=(n&335544064)===n,r=e.memoizedProps,Tr=i&&bo(r.default,r.update)!=="none",Sn(t,e,n),Cn(e),i&&l!==null&&et&&(e.flags|=4),Tr=a,et=o;break;case 21:break;case 7:o&512&&(ct||l===null||un(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);default:Sn(t,e,n),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(uy(l)){n=l;break}l=l.return}l=null;for(var o=e.return;o!==null;){if(Xf(o)){var a=o.stateNode;l===null?l=[a]:l.push(a)}if(If(o))break;o=o.return}var i=l;if(n==null)throw Error(L(160));switch(n.tag){case 27:var r=n.stateNode,s=$d(e);Gc(e,s,r,i);break;case 5:var m=n.stateNode;n.flags&32&&(zi(m,""),n.flags&=-33);var _=$d(e);Gc(e,_,m,i);break;case 3:case 4:var x=n.stateNode.containerInfo,d=$d(e);O_(e,d,x,i);break;default:throw Error(L(161))}}catch(b){ht(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sy(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Yi=!0,t.reset(),Yi=!1),e=e.sibling}}function li(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Cy(t,e),t=t.sibling;else my(t,!1)}function Cy(e,t){var n=e.alternate;if(n===null)A_(e,!1);else switch(e.tag){case 3:if(H_=Ul=!1,$h(),li(t,e),!Ul&&!Zc){if(e=Il,e!==null)for(var l=0;l<e.length;l+=3){n=e[l];var o=e[l+1];Fy(n,e[l+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),H_=!0}Il=null;break;case 5:li(t,e);break;case 4:l=Ul,Ul=!1,li(t,e),Ul&&(Zc=!0),Ul=l;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?A_(e,!1):li(t,e));break;case 30:l=Ul,o=$h(),Ul=!1,li(t,e),Ul&&(e.flags|=4);var a=e.memoizedProps,i=e.stateNode;t=fo(a,i),i=fo(n.memoizedProps,i);var r=bo(a.default,a.update);r==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ln=0,t=qf(e,n,t,i,r,a,!0),Ln!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Ri(e,e.memoizedProps.onUpdate),Il=o):o!==null&&(o.push.apply(o,Il),Il=o),Ul=(e.flags&32)!==0?!0:l;break;default:li(t,e)}}function Yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gy(e,t.alternate,t),t=t.sibling}function Do(e,t){for(e=e.child;e!==null;){var n=e,l=t;switch(n.tag){case 0:case 11:case 14:case 15:Po(4,n,n.return),Do(n,l);break;case 1:un(n,n.return);var o=n.stateNode;typeof o.componentWillUnmount=="function"&&cy(n,n.return,o),Do(n,l);break;case 27:(l&2)!==0&&ip(n.stateNode,n.type,n.memoizedProps);case 5:un(n,n.return),n.tag!==5&&n.tag!==27||$r(n),Do(n,l);break;case 6:$r(n);break;case 26:un(n,n.return),o=n.stateNode,n.memoizedState!==null||o===null||ct||o.parentNode.removeChild(o),Do(n,l);break;case 22:n.memoizedState===null&&Do(n,l);break;case 30:un(n,n.return),Do(n,l);break;case 7:un(n,n.return);default:Do(n,l)}e=e.sibling}}function Cl(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var l=t.alternate,o=e,a=t,i=a.flags,r=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Cl(o,a,n),_s(4,a);break;case 1:if(Cl(o,a,n),l=a,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(_){ht(l,l.return,_)}if(l=a,o=l.updateQueue,o!==null){var s=l.stateNode;try{var m=o.shared.hiddenCallbacks;if(m!==null)for(o.shared.hiddenCallbacks=null,o=0;o<m.length;o++)yg(m[o],s)}catch(_){ht(l,l.return,_)}}r&&i&64&&sy(a),jl(a,a.return);break;case 27:(n&2)!==0&&dy(a);case 5:a.tag!==5&&a.tag!==27||Bh(a),Cl(o,a,n),r&&l===null&&i&4&&z_(a),jl(a,a.return);break;case 6:Bh(a);break;case 26:s=a.stateNode,a.memoizedState!==null||s===null||on||nf(es(s.ownerDocument),a.type,s),Cl(o,a,n),r&&l===null&&i&4&&z_(a),jl(a,a.return);break;case 12:Cl(o,a,n);break;case 31:Cl(o,a,n),r&&i&4&&xy(o,a);break;case 13:Cl(o,a,n),r&&i&4&&vy(o,a);break;case 22:a.memoizedState===null&&Cl(o,a,n),jl(a,a.return);break;case 30:Cl(o,a,n),jl(a,a.return);break;case 7:jl(a,a.return);default:Cl(o,a,n)}t=t.sibling}}function Qf(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&us(n))}function Vf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&us(e))}function il(e,t,n,l){var o=(n&335544064)===n;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)ky(e,t,n,l),t=t.sibling;else o&&hy(t)}function ky(e,t,n,l){var o=(n&335544064)===n;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&vc(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:il(e,t,n,l),a&2048&&_s(9,t);break;case 1:il(e,t,n,l);break;case 3:il(e,t,n,l),o&&H_&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&us(a)));break;case 12:if(a&2048){il(e,t,n,l),a=t.stateNode;try{var i=t.memoizedProps,r=i.id,s=i.onPostCommit;typeof s=="function"&&s(r,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(m){ht(t,t.return,m)}}else il(e,t,n,l);break;case 31:il(e,t,n,l);break;case 13:il(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?(o&&r!==null&&r.memoizedState===null&&vc(r),i._visibility&2?il(e,t,n,l):Ur(e,t)):(o&&r!==null&&r.memoizedState!==null&&vc(t),i._visibility&2?il(e,t,n,l):(i._visibility|=2,ai(e,t,n,l,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Qf(r,t);break;case 24:il(e,t,n,l),a&2048&&Vf(t.alternate,t);break;case 30:o&&(a=t.alternate,a!==null&&(Zl(a.child,!0),Zl(t.child,!0))),il(e,t,n,l);break;default:il(e,t,n,l)}}function ai(e,t,n,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,i=t,r=n,s=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:ai(a,i,r,s,o),_s(8,i);break;case 23:break;case 22:var _=i.stateNode;i.memoizedState!==null?_._visibility&2?ai(a,i,r,s,o):Ur(a,i):(_._visibility|=2,ai(a,i,r,s,o)),o&&m&2048&&Qf(i.alternate,i);break;case 24:ai(a,i,r,s,o),o&&m&2048&&Vf(i.alternate,i);break;default:ai(a,i,r,s,o)}t=t.sibling}}function Ur(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:Ur(n,l),o&2048&&Qf(l.alternate,l);break;case 24:Ur(n,l),o&2048&&Vf(l.alternate,l);break;default:Ur(n,l)}t=t.sibling}}var ga=8192;function fa(e,t,n){if(e.subtreeFlags&ga)for(e=e.child;e!==null;)My(e,t,n),e=e.sibling}function My(e,t,n){switch(e.tag){case 26:fa(e,t,n),e.flags&ga&&(e.memoizedState!==null?_v(n,kl,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&dm(n,e)));break;case 5:fa(e,t,n),e.flags&ga&&(e=e.stateNode,(t&335544128)===t&&dm(n,e));break;case 3:case 4:var l=kl;kl=es(e.stateNode.containerInfo),fa(e,t,n),kl=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ga,ga=16777216,fa(e,t,n),ga=l):fa(e,t,n));break;case 30:if((e.flags&ga)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")){var o=e.stateNode;o.paired=null,qn===null&&(qn=new Map),qn.set(l,o)}fa(e,t,n);break;default:fa(e,t,n)}}function Ey(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];an=l,Ny(l,e)}Ey(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ty(e),e=e.sibling}function Ty(e){switch(e.tag){case 0:case 11:case 15:vr(e),e.flags&2048&&Po(9,e,e.return);break;case 3:vr(e);break;case 12:vr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wc(e)):vr(e);break;default:vr(e)}}function wc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];an=l,Ny(l,e)}Ey(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Po(8,t,t.return),wc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,wc(t));break;default:wc(t)}e=e.sibling}}function Ny(e,t){for(;an!==null;){var n=an;switch(n.tag){case 0:case 11:case 15:Po(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:us(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,an=l;else e:for(n=e;an!==null;){l=an;var o=l.sibling,a=l.return;if(py(l),l===n){an=null;break e}if(o!==null){o.return=a,an=o;break e}an=a}}}var cx={getCacheForType:function(e){var t=_n(Kt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _n(Kt).controller.signal}},ux=typeof WeakMap=="function"?WeakMap:Map,ot=0,xt=null,Xe=null,Ve=0,_t=0,jn=null,Ho=!1,Vi=!1,Gf=!1,yo=0,jt=0,ea=0,Sa=0,Kc=0,Qn=0,Ai=0,Yr=null,Rn=null,Y_=!1,pu=0,Dy=0,Fc=1/0,Jc=null,Vo=null,Lt=0,El=null,za=null,Wl=0,j_=0,I_=null,zy=null,Mi=null,Ei=null,Ti=null,jr=0,Sc=null;function Zn(){return(ot&2)!==0&&Ve!==0?Ve&-Ve:we.T!==null?Zf():Lm()}function Oy(){if(Qn===0)if((Ve&536870912)===0||He){var e=Qs;Qs<<=1,(Qs&3932160)===0&&(Qs=262144),Qn=e}else Qn=536870912;return e=gn.current,e!==null&&(e.flags|=32),Qn}function Ri(e,t){if(t!=null){var n=e.stateNode,l=n.ref;l===null&&(l=n.ref=Py(fo(e.memoizedProps,n))),Ei===null&&(Ei=[]),Ei.push(t.bind(null,l))}}function Hn(e,t,n){(e===xt&&(_t===2||_t===9)||e.cancelPendingCommit!==null)&&(Li(e,0),$o(e,Ve,Qn,!1)),rs(e,n),((ot&2)===0||e!==xt)&&(e===xt&&((ot&2)===0&&(Sa|=n),jt===4&&$o(e,Ve,Qn,!1)),Fl(e))}function Ay(e,t,n){if((ot&6)!==0)throw Error(L(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||is(e,t),o=l?fx(e,t):Yd(e,t,!0),a=l;do{if(o===0){Vi&&!l&&$o(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!dx(n)){o=Yd(e,t,!1),a=!1;continue}if(o===2){if(a=t,e.errorRecoveryDisabledLanes&a)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var r=e;o=Yr;var s=r.current.memoizedState.isDehydrated;if(s&&(Li(r,i).flags|=256),i=Yd(r,i,!1),i!==2&&i!==6){if(Gf&&!s){r.errorRecoveryDisabledLanes|=a,Sa|=a,o=4;break e}a=Rn,Rn=o,a!==null&&(Rn===null?Rn=a:Rn.push.apply(Rn,a))}o=i}if(a=!1,o!==2)continue}}if(o===1){Li(e,0),$o(e,t,0,!0);break}e:{switch(l=e,a=o,a){case 0:case 1:throw Error(L(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:$o(l,t,Qn,!Ho);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(L(329))}if((t&62914560)===t&&(o=pu+300-Vn(),10<o)){if($o(l,t,Qn,!Ho),ou(l,0,!0)!==0)break e;Wl=t,l.timeoutHandle=Ff(Yh.bind(null,l,n,Rn,Jc,Y_,t,Qn,Sa,Ai,Ho,a,"Throttled",-0,0),o);break e}Yh(l,n,Rn,Jc,Y_,t,Qn,Sa,Ai,Ho,a,null,-0,0)}}break}while(!0);Fl(e)}function Yh(e,t,n,l,o,a,i,r,s,m,_,x,d,b){e.timeoutHandle=-1;var C=t.subtreeFlags,D=(a&335544064)===a;if(x=null,(D||C&8192||(C&16785408)===16785408)&&(x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ql},qn=null,My(t,a,x),D&&(C=x,D=e.containerInfo,D=(D.nodeType===9?D:D.ownerDocument).__reactViewTransition,D!=null&&(C.count++,C.waitingForViewTransition=!0,C=ts.bind(C),D.finished.then(C,C))),C=(a&62914560)===a?pu-Vn():(a&4194048)===a?Dy-Vn():0,C=fv(x,C),C!==null)){Wl=a,e.cancelPendingCommit=C(Ih.bind(null,e,t,a,n,l,o,i,r,s,m,_,x,null,d,b)),$o(e,a,i,!m);return}Ih(e,t,a,n,l,o,i,r,s,m,_,x)}function dx(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],a=o.getSnapshot;o=o.value;try{if(!Kn(a(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $o(e,t,n,l){t=Dm(e,t),t&=~Kc,t&=~Sa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var a=31-Wn(o),i=1<<a;l[a]=-1,o&=~i}n!==0&&Om(e,n,t)}function bu(){return(ot&6)===0?(fs(0,!1),!1):!0}function Wf(){if(Xe!==null){if(_t===0)var e=Xe.return;else e=Xe,so=Ba=null,zf(e),Si=null,Wr=0,e=Xe;for(;e!==null;)ry(e.alternate,e),e=e.return;Xe=null}}function Li(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Ax(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wl=0,Wf(),xt=e,Xe=n=co(e.current,null),Ve=t,_t=0,jn=null,Ho=!1,Vi=is(e,t),Gf=!1,Ai=Qn=Kc=Sa=ea=jt=0,Rn=Yr=null,Y_=!1,yo=Dm(e,t),cu(),n}function Ry(e,t){Ae=null,we.H=qc,t===qi||t===_u?(t=fh(),_t=3):t===Sf?(t=fh(),_t=4):_t=t===Uf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jn=t,Xe===null&&(jt=1,Qc(e,dl(t,e.current)))}function Ly(){var e=gn.current;return e===null?!0:(Ve&4194048)===Ve?xn===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===xn:!1}function By(){var e=we.H;return we.H=qc,e===null?qc:e}function Hy(){var e=we.A;return we.A=cx,e}function Pc(){jt=4,Ho||(Ve&4194048)!==Ve&&gn.current!==null||(Vi=!0),(ea&134217727)===0&&(Sa&134217727)===0||xt===null||$o(xt,Ve,Qn,!1)}function Yd(e,t,n){var l=ot;ot|=2;var o=By(),a=Hy();(xt!==e||Ve!==t)&&(Jc=null,Li(e,t)),t=!1;var i=jt;e:do try{if(_t!==0&&Xe!==null){var r=Xe,s=jn;switch(_t){case 8:Wf(),i=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(t=!0);var m=_t;if(_t=0,jn=null,pi(e,r,s,m),n&&Vi){i=0;break e}break;default:m=_t,_t=0,jn=null,pi(e,r,s,m)}}_x(),i=jt;break}catch(_){Ry(e,_)}while(!0);return t&&e.shellSuspendCounter++,so=Ba=null,ot=l,we.H=o,we.A=a,Xe===null&&(xt=null,Ve=0,cu()),i}function _x(){for(;Xe!==null;)$y(Xe)}function fx(e,t){var n=ot;ot|=2;var l=By(),o=Hy();xt!==e||Ve!==t?(Jc=null,Fc=Vn()+500,Li(e,t)):Vi=is(e,t);e:do try{if(_t!==0&&Xe!==null){t=Xe;var a=jn;t:switch(_t){case 1:_t=0,jn=null,pi(e,t,a,1);break;case 2:case 9:if(_h(a)){_t=0,jn=null,jh(t);break}t=function(){_t!==2&&_t!==9||xt!==e||(_t=7),Fl(e)},a.then(t,t);break e;case 3:_t=7;break e;case 4:_t=5;break e;case 7:_h(a)?(_t=0,jn=null,jh(t)):(_t=0,jn=null,pi(e,t,a,7));break;case 5:var i=null;switch(Xe.tag){case 26:i=Xe.memoizedState;case 5:case 27:var r=Xe;if(i?cp(i):r.stateNode.complete){_t=0,jn=null;var s=r.sibling;if(s!==null)Xe=s;else{var m=r.return;m!==null?(Xe=m,xu(m)):Xe=null}break t}}_t=0,jn=null,pi(e,t,a,5);break;case 6:_t=0,jn=null,pi(e,t,a,6);break;case 8:Wf(),jt=6;break e;default:throw Error(L(462))}}hx();break}catch(_){Ry(e,_)}while(!0);return so=Ba=null,we.H=l,we.A=o,ot=n,Xe!==null?0:(xt=null,Ve=0,cu(),jt)}function hx(){for(;Xe!==null&&!z2();)$y(Xe)}function $y(e){var t=iy(e.alternate,e,yo);e.memoizedProps=e.pendingProps,t===null?xu(e):Xe=t}function jh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Nh(n,t,t.pendingProps,t.type,void 0,Ve);break;case 11:t=Nh(n,t,t.pendingProps,t.type.render,t.ref,Ve);break;case 5:zf(t);var l=t;l===sn&&(He?(Hc(l),l.tag===5&&l.stateNode!=null&&(Tt=l.stateNode)):(Hc(l),He=!0));default:ry(n,t),t=Xe=sg(t,yo),t=iy(n,t,yo)}e.memoizedProps=e.pendingProps,t===null?xu(e):Xe=t}function pi(e,t,n,l){so=Ba=null,zf(t),Si=null,Wr=0;var o=t.return;try{if(tx(e,o,t,n,Ve)){jt=1,Qc(e,dl(n,e.current)),Xe=null;return}}catch(a){if(o!==null)throw Xe=o,a;jt=1,Qc(e,dl(n,e.current)),Xe=null;return}t.flags&32768?(He||l===1?e=!0:Vi||(Ve&536870912)!==0?e=!1:(Ho=e=!0,(l===2||l===9||l===3||l===6)&&(l=gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Uy(t,e)):xu(t)}function xu(e){var t=e;do{if((t.flags&32768)!==0){Uy(t,Ho);return}e=t.return;var n=ax(t.alternate,t,yo);if(n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);jt===0&&(jt=5)}function Uy(e,t){do{var n=ix(e.alternate,e);if(n!==null){n.flags&=32767,Xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xe=e;return}Xe=e=n}while(e!==null);jt=6,Xe=null}function Ih(e,t,n,l,o,a,i,r,s,m,_,x){e.cancelPendingCommit=null;do vu();while(Lt!==0);if((ot&6)!==0)throw Error(L(327));if(t!==null){if(t===e.current)throw Error(L(177));e===xt&&(Xe=xt=null,Ve=0),za=t,El=e,Wl=n,I_=o,zy=l,mx(e,t,n,i,r,s,x)}}function mx(e,t,n,l,o,a,i){var r=t.lanes|t.childLanes;if(j_=r,r|=yf,j2(e,n,r,l,o,a),Ei=null,(n&335544064)===n?(Ti=Xb(e),l=10262):(Ti=null,l=10256),(t.subtreeFlags&l)!==0||(t.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,vx(Oc,function(){return V_(),null})):(e.callbackNode=null,e.callbackPriority=0),Wc=!1,l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=we.T,we.T=null,o=at.p,at.p=2,a=ot,ot|=4;try{rx(e,t,n)}finally{ot=a,at.p=o,we.T=l}}Lt=1,Wc?Mi=Ux(i,e.containerInfo,Ti,X_,q_,yx,Q_,V_,gx,null,null):(X_(),q_(),Q_())}function gx(e){if(Lt!==0){var t=El.onRecoverableError;t(e,{componentStack:null})}}function yx(){Lt===3&&(Lt=0,Cy(za,El),Lt=4)}function X_(){if(Lt===1){Lt=0;var e=El,t=za,n=Wl,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=we.T,we.T=null;var o=at.p;at.p=2;var a=ot;ot|=4;try{Tr=Zc=!1,wy(t,e,n),n=K_;var i=eg(e.containerInfo),r=n.focusedElem,s=n.selectionRange;if(i!==r&&r&&r.ownerDocument&&Pm(r.ownerDocument.documentElement,r)){if(s!==null&&gf(r)){var m=s.start,_=s.end;if(_===void 0&&(_=m),"selectionStart"in r)r.selectionStart=m,r.selectionEnd=Math.min(_,r.value.length);else{var x=r.ownerDocument||document,d=x&&x.defaultView||window;if(d.getSelection){var b=d.getSelection(),C=r.textContent.length,D=Math.min(s.start,C),T=s.end===void 0?D:Math.min(s.end,C);!b.extend&&D>T&&(i=T,T=D,D=i);var h=oh(r,D),y=oh(r,T);if(h&&y&&(b.rangeCount!==1||b.anchorNode!==h.node||b.anchorOffset!==h.offset||b.focusNode!==y.node||b.focusOffset!==y.offset)){var v=x.createRange();v.setStart(h.node,h.offset),b.removeAllRanges(),D>T?(b.addRange(v),b.extend(y.node,y.offset)):(v.setEnd(y.node,y.offset),b.addRange(v))}}}}for(x=[],b=r;b=b.parentNode;)b.nodeType===1&&x.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<x.length;r++){var M=x[r];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Yi=!!Z_,K_=Z_=null}finally{ot=a,at.p=o,we.T=l}}e.current=t,Lt=2}}function q_(){if(Lt===2){Lt=0;var e=El,t=za,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=we.T,we.T=null;var l=at.p;at.p=2;var o=ot;ot|=4;try{gy(e,t.alternate,t)}finally{ot=o,at.p=l,we.T=n}}Lt=3}}function Q_(){if(Lt===4||Lt===3){Lt=0;var e=Mi;Mi=null,O2();var t=El,n=za,l=Wl,o=zy,a=(l&335544064)===l?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Lt=5:(Lt=0,za=El=null,Yy(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Vo=null),uf(l),n=n.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(as,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=we.T,a=at.p,at.p=2,we.T=null;try{for(var i=t.onRecoverableError,r=0;r<o.length;r++){var s=o[r];i(s.value,{componentStack:s.stack})}}finally{we.T=n,at.p=a}}if(o=Ei,i=Ti,Ti=null,o!==null&&(Ei=null,i===null&&(i=[]),e!==null))for(s=0;s<o.length;s++)n=(0,o[s])(i),n!==void 0&&e.finished.finally(n);(Wl&3)!==0&&vu(),Fl(t),a=t.pendingLanes,(l&261930)!==0&&(a&42)!==0?t===Sc?jr++:(jr=0,Sc=t):(jr=0,Sc=null),fs(0,!1)}}function Yy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,us(t)))}function vu(){return Mi!==null&&(Mi.skipTransition(),Mi=null),X_(),q_(),Q_(),V_()}function V_(){if(Lt!==5)return!1;var e=El,t=j_;j_=0;var n=uf(Wl),l=we.T,o=at.p;try{at.p=32>n?32:n,we.T=null,n=I_,I_=null;var a=El,i=Wl;if(Lt=0,za=El=null,Wl=0,(ot&6)!==0)throw Error(L(331));var r=ot;if(ot|=4,Ty(a.current),ky(a,a.current,i,n),ot=r,fs(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(as,a)}catch{}return!0}finally{at.p=o,we.T=l,Yy(e,t)}}function Xh(e,t,n){t=dl(n,t),t=k_(e.stateNode,t,2),e=Xo(e,t,2),e!==null&&(rs(e,2),Fl(e))}function ht(e,t,n){if(e.tag===3)Xh(e,e,n);else for(;t!==null;){if(t.tag===3){Xh(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vo===null||!Vo.has(l))){e=dl(n,e),n=ty(2),l=Xo(t,n,2),l!==null&&(ny(n,l,t,e),rs(l,2),Fl(l));break}}t=t.return}}function jd(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new ux;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(Gf=!0,o.add(n),e=px.bind(null,e,t,n),t.then(e,e))}function px(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xt===e&&(Ve&n)===n&&((jt===4||jt===3&&(Ve&62914560)===Ve&&300>Vn()-pu)&&(ot&2)===0?Li(e,0):Kc|=n,Ai===Ve&&(Ai=0)),Fl(e)}function jy(e,t){t===0&&(t=zm()),e=La(e,t),e!==null&&(rs(e,t),Fl(e))}function bx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jy(e,n)}function xx(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(L(314))}l!==null&&l.delete(t),jy(e,n)}function vx(e,t){return sf(e,t)}var Bi=null,ii=null,G_=!1,eu=!1,Id=!1,Uo=0;function Fl(e){e!==ii&&e.next===null&&(ii===null?Bi=ii=e:ii=ii.next=e),eu=!0,G_||(G_=!0,Sx())}function fs(e,t){if(!Id&&eu){Id=!0;do for(var n=!1,l=Bi;l!==null;){if(!t)if(e!==0){var o=l.pendingLanes;if(o===0)var a=0;else{var i=l.suspendedLanes,r=l.pingedLanes;a=(1<<31-Wn(42|e)+1)-1,a&=o&~(i&~r),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,qh(l,a))}else a=Ve,a=ou(l,l===xt?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||is(l,a)||(n=!0,qh(l,a));l=l.next}while(n);Id=!1}}function wx(){Iy()}function Iy(){eu=G_=!1;var e=0;Uo!==0&&Ox()&&(e=Uo);for(var t=Vn(),n=null,l=Bi;l!==null;){var o=l.next,a=Xy(l,t);a===0?(l.next=null,n===null?Bi=o:n.next=o,o===null&&(ii=n)):(n=l,(e!==0||(a&3)!==0)&&(eu=!0)),l=o}Lt!==0&&Lt!==5||fs(e,!1),Uo!==0&&(Uo=0)}function Xy(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var i=31-Wn(a),r=1<<i,s=o[i];s===-1?((r&n)===0||(r&l)!==0)&&(o[i]=Y2(r,t)):s<=t&&(e.expiredLanes|=r),a&=~r}if(t=xt,n=Ve,n=ou(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(_t===2||_t===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&xd(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||is(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&xd(l),uf(n)){case 2:case 8:n=Tm;break;case 32:n=Oc;break;case 268435456:n=Nm;break;default:n=Oc}return l=qy.bind(null,e),n=sf(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&xd(l),e.callbackPriority=2,e.callbackNode=null,2}function qy(e,t){if(Lt!==0&&Lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vu()&&e.callbackNode!==n)return null;var l=Ve;return l=ou(e,e===xt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ay(e,l,t),Xy(e,Vn()),e.callbackNode!=null&&e.callbackNode===n?qy.bind(null,e):null)}function qh(e,t){if(vu())return null;Ay(e,t,!0)}function Sx(){Rx(function(){(ot&6)!==0?sf(Em,wx):Iy()})}function Zf(){if(Uo===0){var e=Ea;e===0&&(e=qs,qs<<=1,(qs&261888)===0&&(qs=256)),Uo=e}return Uo}function Qh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dc(e)}function Cx(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var a=Qh((o[Un]||null).action),i=l.submitter;i&&(t=(t=i[Un]||null)?Qh(t.formAction):i.getAttribute("formAction"),t!==null&&(a=t,i=null));var r=new iu("action","action",null,l,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Uo!==0){var s=new FormData(o,i);S_(n,{pending:!0,data:s,method:o.method,action:a},null,s)}}else typeof a=="function"&&(r.preventDefault(),s=new FormData(o,i),S_(n,{pending:!0,data:s,method:o.method,action:a},a,s))},currentTarget:o}]})}}for(ac=0;ac<__.length;ac++)ic=__[ac],Vh=ic.toLowerCase(),Gh=ic[0].toUpperCase()+ic.slice(1),Tl(Vh,"on"+Gh);var ic,Vh,Gh,ac;Tl(ng,"onAnimationEnd");Tl(lg,"onAnimationIteration");Tl(og,"onAnimationStart");Tl("dblclick","onDoubleClick");Tl("focusin","onFocus");Tl("focusout","onBlur");Tl(Lb,"onTransitionRun");Tl(Bb,"onTransitionStart");Tl(Hb,"onTransitionCancel");Tl(ag,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fr));function Qy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var i=l.length-1;0<=i;i--){var r=l[i],s=r.instance,m=r.currentTarget;if(r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=m;try{a(o)}catch(_){Rc(_)}o.currentTarget=null,a=s}else for(i=0;i<l.length;i++){if(r=l[i],s=r.instance,m=r.currentTarget,r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=m;try{a(o)}catch(_){Rc(_)}o.currentTarget=null,a=s}}}}function Ie(e,t){var n=t[j1];n===void 0&&(n=t[j1]=new Set);var l=e+"__bubble";n.has(l)||(Vy(t,e,2,!1),n.add(l))}function Xd(e,t,n){var l=0;t&&(l|=4),Vy(n,e,l,t)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[rc]){e[rc]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(kx.has(n)||Xd(n,!1,e),Xd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rc]||(t[rc]=!0,Xd("selectionchange",!1,t))}}function Vy(e,t,n,l){switch(gp(t)){case 2:var o=yv;break;case 8:o=pv;break;default:o=l0}n=o.bind(null,t,n,e),o=void 0,!s_||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qd(e,t,n,l,o){var a=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var r=l.stateNode.containerInfo;if(r===o)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===o)return;i=i.return}for(;r!==null;){if(i=ya(r),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=a=i;continue e}r=r.parentNode}}l=l.return}Qm(function(){var m=a,_=_f(n),x=[];e:{var d=ig.get(e);if(d!==void 0){var b=iu,C=e;switch(e){case"keypress":if(fc(n)===0)break e;case"keydown":case"keyup":b=db;break;case"focusin":C="focus",b=Md;break;case"focusout":C="blur",b=Md;break;case"beforeblur":case"afterblur":b=Md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=P2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=gb;break;case ng:case lg:case og:b=nb;break;case ag:b=pb;break;case"scroll":case"scrollend":b=F2;break;case"wheel":b=xb;break;case"copy":case"cut":case"paste":b=ob;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=F1;break;case"submit":b=hb;break;case"toggle":case"beforetoggle":b=wb}var D=(t&4)!==0,T=!D&&(e==="scroll"||e==="scrollend"),h=D?d!==null?d+"Capture":null:d;D=[];for(var y=m,v;y!==null;){var M=y;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||h===null||(M=Xr(y,h),M!=null&&D.push(Jr(y,M,v))),T)break;y=y.return}0<D.length&&(d=new b(d,C,null,n,_),x.push({event:d,listeners:D}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",b&&n!==r_&&(C=n.relatedTarget||n.fromElement)&&(ya(C)||C[Ii]))break e;(d||b)&&(C=_.window===_?_:(b=_.ownerDocument)?b.defaultView||b.parentWindow:window,d?(b=n.relatedTarget||n.toElement,d=m,b=b?ya(b):null,b!==null&&(T=os(b),D=b.tag,b!==T||D!==5&&D!==27&&D!==6)&&(b=null)):(d=null,b=m),d!==b&&(D=Z1,M="onMouseLeave",h="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(D=F1,M="onPointerLeave",h="onPointerEnter",y="pointer"),T=d==null?C:Mr(d),v=b==null?C:Mr(b),C=new D(M,y+"leave",d,n,_),C.target=T,C.relatedTarget=v,M=null,ya(_)===m&&(D=new D(h,y+"enter",b,n,_),D.target=v,D.relatedTarget=T,M=D),T=M,D=d&&b?Zd(d,b,Mx):null,d!==null&&Wh(x,C,d,D,!1),b!==null&&T!==null&&Wh(x,T,b,D,!0)))}e:{if(d=m?Mr(m):window,b=d.nodeName&&d.nodeName.toLowerCase(),b==="select"||b==="input"&&d.type==="file")var I=th;else if(eh(d))if(Fm)I=Ob;else{I=Db;var ne=Nb}else b=d.nodeName,!b||b.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?m&&df(m.elementType)&&(I=th):I=zb;if(I&&(I=I(e,m))){Km(x,I,n,_);break e}ne&&ne(e,d,m)}switch(ne=m?Mr(m):window,e){case"focusin":(eh(ne)||ne.contentEditable==="true")&&(_i=ne,u_=m,zr=null);break;case"focusout":zr=u_=_i=null;break;case"mousedown":d_=!0;break;case"contextmenu":case"mouseup":case"dragend":d_=!1,ah(x,n,_);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":ah(x,n,_)}var B;if(mf)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else di?Wm(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Gm&&n.locale!=="ko"&&(di||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&di&&(B=Vm()):(Lo=_,ff="value"in Lo?Lo.value:Lo.textContent,di=!0)),ne=tu(m,Z),0<ne.length&&(Z=new K1(Z,e,null,n,_),x.push({event:Z,listeners:ne}),B?Z.data=B:(B=Zm(n),B!==null&&(Z.data=B)))),(B=Cb?kb(e,n):Mb(e,n))&&(Z=tu(m,"onBeforeInput"),0<Z.length&&(ne=new K1("onBeforeInput","beforeinput",null,n,_),x.push({event:ne,listeners:Z}),ne.data=B)),Cx(x,e,m,n,_)}Qy(x,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tu(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,a=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||a===null||(o=Xr(e,n),o!=null&&l.unshift(Jr(e,o,a)),o=Xr(e,t),o!=null&&l.push(Jr(e,o,a))),e.tag===3)return l;e=e.return}return[]}function Mx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wh(e,t,n,l,o){for(var a=t._reactName,i=[];n!==null&&n!==l;){var r=n,s=r.alternate,m=r.stateNode;if(r=r.tag,s!==null&&s===l)break;r!==5&&r!==26&&r!==27||m===null||(s=m,o?(m=Xr(n,a),m!=null&&i.unshift(Jr(n,m,s))):o||(m=Xr(n,a),m!=null&&i.push(Jr(n,m,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function Zh(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Tx,"")}function Gy(e,t){return t=Zh(t),Zh(e)===t}function ft(e,t,n,l,o,a){switch(n){case"children":if(typeof l=="string")t==="body"||t==="textarea"&&l===""||zi(e,l);else if(typeof l=="number"||typeof l=="bigint")t!=="body"&&zi(e,""+l);else return;break;case"className":Gs(e,"class",l);break;case"tabIndex":Gs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Gs(e,n,l);break;case"style":qm(e,l,a);return;case"data":if(t!=="object"){Gs(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=dc(l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",o.name,o,null),ft(e,t,"formEncType",o.formEncType,o,null),ft(e,t,"formMethod",o.formMethod,o,null),ft(e,t,"formTarget",o.formTarget,o,null)):(ft(e,t,"encType",o.encType,o,null),ft(e,t,"method",o.method,o,null),ft(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=dc(l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=ql);return;case"onScroll":l!=null&&Ie("scroll",e);return;case"onScrollEnd":l!=null&&Ie("scrollend",e);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(L(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(L(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=dc(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),uc(e,"popover",l);break;case"xlinkActuate":ao(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ao(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ao(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ao(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ao(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ao(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ao(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ao(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ao(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":uc(e,"is",l);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Z2.get(n)||n,uc(e,n,l);else return}et=!0}function W_(e,t,n,l,o,a){switch(n){case"style":qm(e,l,a);return;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(L(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(L(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof l=="string")zi(e,l);else if(typeof l=="number"||typeof l=="bigint")zi(e,""+l);else return;break;case"onScroll":l!=null&&Ie("scroll",e);return;case"onScrollEnd":l!=null&&Ie("scrollend",e);return;case"onClick":l!=null&&(e.onclick=ql);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!$m.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),a=n.slice(2,o?n.length-7:void 0),t=e[Un]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,o),typeof l=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,l,o);break e}et=!0,n in e?e[n]=l:l===!0?e.setAttribute(n,""):uc(e,n,l)}return}et=!0}function mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var l=!1,o=!1,a;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i!=null)switch(a){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:ft(e,t,a,i,n,null)}}o&&ft(e,t,"srcSet",n.srcSet,n,null),l&&ft(e,t,"src",n.src,n,null);return;case"input":Ie("invalid",e);var r=a=i=o=null,s=null,m=null;for(l in n)if(n.hasOwnProperty(l)){var _=n[l];if(_!=null)switch(l){case"name":o=_;break;case"type":i=_;break;case"checked":s=_;break;case"defaultChecked":m=_;break;case"value":a=_;break;case"defaultValue":r=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(L(137,t));break;default:ft(e,t,l,_,n,null)}}jm(e,a,r,s,m,i,o,!1);return;case"select":Ie("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:ft(e,t,o,r,n,null)}t=a,n=i,e.multiple=!!l,t!=null?xi(e,!!l,t,!1):n!=null&&xi(e,!!l,n,!0);return;case"textarea":Ie("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":o=r;break;case"children":a=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(L(91));break;default:ft(e,t,i,r,n,null)}Xm(e,l,o,a);return;case"option":for(s in n)n.hasOwnProperty(s)&&(l=n[s],l!=null)&&(s==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":ft(e,t,s,l,n,null));return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(l=0;l<Fr.length;l++)Ie(Fr[l],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(l=n[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(L(137,t));default:ft(e,t,m,l,n,null)}return;default:if(df(t)){for(_ in n)n.hasOwnProperty(_)&&(l=n[_],l!==void 0&&W_(e,t,_,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&ft(e,t,r,l,n,null))}var Nx={};function Dx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,a=null,i=null,r=null,s=null,m=null,_=null;for(b in n){var x=n[b];if(n.hasOwnProperty(b)&&x!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":s=x;default:l.hasOwnProperty(b)||ft(e,t,b,null,l,x)}}for(var d in l){var b=l[d];if(x=n[d],l.hasOwnProperty(d)&&(b!=null||x!=null))switch(d){case"type":b!==x&&(et=!0),a=b;break;case"name":b!==x&&(et=!0),o=b;break;case"checked":b!==x&&(et=!0),m=b;break;case"defaultChecked":b!==x&&(et=!0),_=b;break;case"value":b!==x&&(et=!0),i=b;break;case"defaultValue":b!==x&&(et=!0),r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(L(137,t));break;default:b!==x&&ft(e,t,d,b,l,x)}}i_(e,i,r,s,m,_,a,o);return;case"select":b=i=r=d=null;for(a in n)if(s=n[a],n.hasOwnProperty(a)&&s!=null)switch(a){case"value":break;case"multiple":b=s;default:l.hasOwnProperty(a)||ft(e,t,a,null,l,s)}for(o in l)if(a=l[o],s=n[o],l.hasOwnProperty(o)&&(a!=null||s!=null))switch(o){case"value":a!==s&&(et=!0),d=a;break;case"defaultValue":a!==s&&(et=!0),r=a;break;case"multiple":a!==s&&(et=!0),i=a;default:a!==s&&ft(e,t,o,a,l,s)}t=r,n=i,l=b,d!=null?xi(e,!!n,d,!1):!!l!=!!n&&(t!=null?xi(e,!!n,t,!0):xi(e,!!n,n?[]:"",!1));return;case"textarea":b=d=null;for(r in n)if(o=n[r],n.hasOwnProperty(r)&&o!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ft(e,t,r,null,l,o)}for(i in l)if(o=l[i],a=n[i],l.hasOwnProperty(i)&&(o!=null||a!=null))switch(i){case"value":o!==a&&(et=!0),d=o;break;case"defaultValue":o!==a&&(et=!0),b=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(L(91));break;default:o!==a&&ft(e,t,i,o,l,a)}Im(e,d,b);return;case"option":for(var C in n)d=n[C],n.hasOwnProperty(C)&&d!=null&&!l.hasOwnProperty(C)&&(C==="selected"?e.selected=!1:ft(e,t,C,null,l,d));for(s in l)d=l[s],b=n[s],l.hasOwnProperty(s)&&d!==b&&(d!=null||b!=null)&&(s==="selected"?(d!==b&&(et=!0),e.selected=d&&typeof d!="function"&&typeof d!="symbol"):ft(e,t,s,d,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in n)d=n[D],n.hasOwnProperty(D)&&d!=null&&!l.hasOwnProperty(D)&&ft(e,t,D,null,l,d);for(m in l)if(d=l[m],b=n[m],l.hasOwnProperty(m)&&d!==b&&(d!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(L(137,t));break;default:ft(e,t,m,d,l,b)}return;default:if(df(t)){for(var T in n)d=n[T],n.hasOwnProperty(T)&&d!==void 0&&!l.hasOwnProperty(T)&&W_(e,t,T,void 0,l,d);for(_ in l)d=l[_],b=n[_],!l.hasOwnProperty(_)||d===b||d===void 0&&b===void 0||W_(e,t,_,d,l,b);return}}for(var h in n)d=n[h],n.hasOwnProperty(h)&&d!=null&&!l.hasOwnProperty(h)&&ft(e,t,h,null,l,d);for(x in l)d=l[x],b=n[x],!l.hasOwnProperty(x)||d===b||d==null&&b==null||ft(e,t,x,d,l,b)}function Kh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var o=n[l],a=o.transferSize,i=o.initiatorType,r=o.duration;if(a&&r&&Kh(i)){for(i=0,r=o.responseEnd,l+=1;l<n.length;l++){var s=n[l],m=s.startTime;if(m>r)break;var _=s.transferSize,x=s.initiatorType;_&&Kh(x)&&(s=s.responseEnd,i+=_*(s<r?1:(r-m)/(s-m)))}if(--l,t+=8*(a+i)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Z_=null,K_=null;function Pr(e){return e.nodeType===9?e:e.ownerDocument}function Fh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zy(e,t,n,l){return n=Pr(n).createElement(e),n[dn]=l,n[Un]=t,mn(n,e,t),rn(n),n}function F_(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qd=null;function Ox(){var e=window.event;return e&&e.type==="popstate"?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,Ph=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ff,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(e){return Jh.resolve(null).then(e).catch(Lx)}:Ff;function Lx(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function em(e,t){var n=t,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(o),ji(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Gd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Gd(n);for(var a=n.firstChild;a;){var i=a.nextSibling,r=a.nodeName;a[ss]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=i}}else n==="body"&&Gd(e.ownerDocument.body);n=o}while(n);ji(t)}function tm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Ky(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var l=1;else for(var o=l=0;o<t.length;o++){var a=t[o];0<a.width&&0<a.height&&l++}l===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Fy(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Jy(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function J_(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Jy(t,n,e)}function Bx(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Jy(t,n,e)}function Hx(e){return e.documentElement.clientHeight}function $x(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Ux(e,t,n,l,o,a,i,r,s){var m=t.nodeType===9?t:t.ownerDocument;try{var _=m.startViewTransition({update:function(){var d=m.defaultView,b=d.navigation&&d.navigation.transition,C=m.fonts.status;l();var D=[];if(C==="loaded"&&(Hx(m),m.fonts.status==="loading"&&D.push(m.fonts.ready)),C=D.length,e!==null)for(var T=e.suspenseyImages,h=0,y=0;y<T.length;y++){var v=T[y];if(!v.complete){var M=v.getBoundingClientRect();if(0<M.bottom&&0<M.right&&M.top<d.innerHeight&&M.left<d.innerWidth){if(h+=up(v),h>Mc){D.length=C;break}v=new Promise($x.bind(v)),D.push(v)}}}if(0<D.length)return d=Promise.race([Promise.all(D),new Promise(function(I){return setTimeout(I,500)})]).then(o,o),(b?Promise.allSettled([b.finished,d]):d).then(a,a);if(o(),b)return b.finished.then(a,a);a()},types:n});m.__reactViewTransition=_;var x=[];return _.ready.then(function(){for(var d=m.documentElement.getAnimations({subtree:!0}),b=0;b<d.length;b++){var C=d[b],D=C.effect,T=D.pseudoElement;if(T!=null&&T.startsWith("::view-transition")){x.push(C),C=D.getKeyframes();for(var h=T=void 0,y=!0,v=0;v<C.length;v++){var M=C[v],I=M.width;if(T===void 0)T=I;else if(T!==I){y=!1;break}if(I=M.height,h===void 0)h=I;else if(h!==I){y=!1;break}delete M.width,delete M.height,M.transform==="none"&&delete M.transform}y&&T!==void 0&&h!==void 0&&(D.setKeyframes(C),y=getComputedStyle(D.target,D.pseudoElement),y.width!==T||y.height!==h)&&(y=C[0],y.width=T,y.height=h,y=C[C.length-1],y.width=T,y.height=h,D.setKeyframes(C))}}i()},function(d){m.__reactViewTransition===_&&(m.__reactViewTransition=null);try{typeof d=="object"&&d!==null&&d.name==="InvalidStateError"&&(d.message==="View transition was skipped because document visibility state is hidden."||d.message==="Skipping view transition because document visibility state has become hidden."||d.message==="Skipping view transition because viewport size changed."||d.message==="Transition was aborted because of invalid state")&&(d=null),d!==null&&s(d)}finally{l(),o(),i()}}),_.finished.finally(function(){for(var d=0;d<x.length;d++)x[d].cancel();m.__reactViewTransition===_&&(m.__reactViewTransition=null),r()}),_}catch{return l(),o(),i(),null}}function pa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}pa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:vt({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};pa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),l=[],o=0;o<n.length;o++){var a=n[o].effect;a!==null&&a.target===e&&a.pseudoElement===t&&l.push(n[o])}return l};pa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Py(e){return{name:e,group:new pa("group",e),imagePair:new pa("image-pair",e),old:new pa("old",e),new:new pa("new",e)}}function Fn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fn.prototype.addEventListener=function(e,t,n){var l=null,o=null;if(!(n!=null&&typeof n!="boolean"&&(l=n.signal||null,l!==null&&l.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(ep(a,e,t,n)===-1){var i=this,r=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(r=function(s){i.removeEventListener(e,t,n),typeof t=="function"?t.call(this,s):t.handleEvent(s)}),l!==null&&(o=i.removeEventListener.bind(i,e,t,n),l.addEventListener("abort",o,{once:!0}),o=l.removeEventListener.bind(l,"abort",o)),l=Hi(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:r,cleanup:o}),$n(this._fragmentFiber.child,!1,Yx,e,r,l)}this._eventListeners=a}};function Yx(e,t,n,l){return tn(e).addEventListener(t,n,l),!1}Fn.prototype.removeEventListener=function(e,t,n){var l=this._eventListeners;if(l!==null&&(t=ep(l,e,t,n),t!==-1)){var o=l[t];n=o.attachedListener;var a=o.cleanup;o=Hi(o.optionsOrUseCapture),$n(this._fragmentFiber.child,!1,jx,e,n,o),l.splice(t,1),a!==null&&a()}};function jx(e,t,n,l){return tn(e).removeEventListener(t,n,l),!1}function Hi(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function nm(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function ep(e,t,n,l){if(e.length===0)return-1;l=nm(l);for(var o=0;o<e.length;o++){var a=e[o];if(a.type===t&&a.listener===n&&nm(a.optionsOrUseCapture)===l)return o}return-1}Fn.prototype.dispatchEvent=function(e){var t=Oa(this._fragmentFiber);if(t===null)return!0;t=tn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var l=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var o=0;o<n.length;o++){var a=n[o];l.addEventListener(a.type,a.attachedListener,Hi(a.optionsOrUseCapture))}if(t.appendChild(l),e=l.dispatchEvent(e),n)for(o=0;o<n.length;o++)a=n[o],l.removeEventListener(a.type,a.attachedListener,Hi(a.optionsOrUseCapture));return t.removeChild(l),e}return t.dispatchEvent(e)};Fn.prototype.focus=function(e){$n(this._fragmentFiber.child,!0,tp,e,void 0,void 0)};function tp(e,t){return e.tag===6?!1:(e=tn(e),Px(e,t))}Fn.prototype.focusLast=function(e){var t=[];$n(this._fragmentFiber.child,!0,Jf,t,void 0,void 0);for(var n=t.length-1;0<=n&&!tp(t[n],e);n--);};function Jf(e,t){return t.push(e),!1}Fn.prototype.blur=function(){var e=Oa(this._fragmentFiber);e!==null&&(e=tn(e),e=Pr(e).activeElement,e!==null&&$n(this._fragmentFiber.child,!1,Ix,e,void 0,void 0))};function Ix(e,t){return e.tag===6?!1:(e=tn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),$n(this._fragmentFiber.child,!1,Xx,e,void 0,void 0)};function Xx(e,t){return e.tag===6||(e=tn(e),t.observe(e)),!1}Fn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),$n(this._fragmentFiber.child,!1,qx,e,void 0,void 0);for(var n=t=0;n<Ml.length;n++){var l=Ml[n];l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):Ml[t++]=l}Ml.length=t}};function qx(e,t){return e.tag===6||(e=tn(e),t.unobserve(e)),!1}var Ml=[],Vd=!1;function Qx(e,t,n){Ml.push({fragmentInstance:e,observer:t,instance:n}),Vd||(Vd=!0,ev(function(){Vd=!1;var l=Ml;Ml=[];for(var o=0;o<l.length;o++){var a=l[o];a.observer.unobserve(a.instance)}}))}Fn.prototype.getClientRects=function(){var e=[];return $n(this._fragmentFiber.child,!1,Vx,e,void 0,void 0),e};function Vx(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=tn(e),t.push.apply(t,e.getClientRects());return!1}Fn.prototype.getRootNode=function(e){var t=Oa(this._fragmentFiber);return t===null?this:tn(t).getRootNode(e)};Fn.prototype.compareDocumentPosition=function(e){var t=Oa(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];$n(this._fragmentFiber.child,!1,Jf,n,void 0,void 0);var l=tn(t);if(n.length===0){if(n=l,L1(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var o=l=n.compareDocumentPosition(e);return n===e?o=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Sm(t)[1],n===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=tn(n).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=tn(n[0]),o=tn(n[n.length-1]);var a=L1(this._fragmentFiber)?t.parentElement:l;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;l=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=t.compareDocumentPosition(e),r=o.compareDocumentPosition(e),s=i&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=l&&a&&i&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,t=l&&t===e||a&&o===e||s||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&t===e||!a&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Gx(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Gx(e,t,n,l,o){var a=ya(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break e}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=o.ownerDocument,o===a||o===a.documentElement||o===a.body;e:{for(a=t,t=Oa(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break e}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Zd(n,a,B1),t===null?t=!1:($n(t,!0,S2,a,n),a=ri,ri=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===l)&&(t=Zd(l,a,B1),t===null?t=!1:($n(t,!0,C2,a,l),a=ri,Wd=ri=null,t=a!==null)),t):!1}function lm(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(L(566));var t=[];$n(this._fragmentFiber.child,!1,Jf,t,void 0,void 0);var n=e!==!1;if(t.length===0){var l=Sm(this._fragmentFiber);if(l=n?l[1]||l[0]||Oa(this._fragmentFiber):l[0]||l[1],l===null)return;if(l.tag===6){e=tn(l),lm(e,n);return}if(l=tn(l),l.nodeType!==9){if(l.nodeType===11){n="host"in l?l.host:null,n!==null&&n.scrollIntoView(e);return}l.scrollIntoView(e)}}for(l=n?t.length-1:0;l!==(n?-1:t.length);){var o=t[l];o.tag===6?(o=tn(o),lm(o,n)):tn(o).scrollIntoView(e),l+=n?-1:1}};function Wx(e,t){return e=tn(e),np(e,t),!1}function np(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function lp(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l];e.addEventListener(o.type,o.attachedListener,Hi(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var i=0,r=0;r<Ml.length;r++){var s=Ml[r];(s.fragmentInstance!==t||s.observer!==a||s.instance!==e)&&(Ml[i++]=s)}Ml.length=i,a.observe(e)}),np(e,t))}function Zx(e,t){var n=t._eventListeners;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l];e.removeEventListener(o.type,o.attachedListener,Hi(o.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?Qx(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function P_(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":P_(n),au(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Kx(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ss])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=fl(e.nextSibling),e===null)break}return null}function Fx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fl(e.nextSibling),e===null))return null;return e}function op(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fl(e.nextSibling),e===null))return null;return e}function ef(e){return e.data==="$?"||e.data==="$~"}function Pf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jx(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function fl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var tf=null;function om(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fl(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function am(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Px(e,t){function n(){l=!0}if(e.ownerDocument.activeElement===e)return!0;var l=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return l}function ev(e){Ph(function(){Ph(function(t){return e(t)})})}function ap(e,t,n){switch(t=Pr(n),e){case"html":if(e=t.documentElement,!e)throw Error(L(452));return e;case"head":if(e=t.head,!e)throw Error(L(453));return e;case"body":if(e=t.body,!e)throw Error(L(454));return e;default:throw Error(L(451))}}function ip(e,t,n){for(var l in n){var o=n[l];n.hasOwnProperty(l)&&o!=null&&ft(e,t,l,null,Nx,o)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ql&&(e.onclick=null),au(e)}function Gd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);au(e)}var hl=new Map,im=new Set;function es(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xo=at.d;at.d={f:tv,r:nv,D:lv,C:ov,L:av,m:iv,X:sv,S:rv,M:cv};function tv(){var e=xo.f(),t=bu();return e||t}function nv(e){var t=Xi(e);t!==null&&t.tag===5&&t.type==="form"?qg(t):xo.r(e)}var Gi=typeof document>"u"?null:document;function rp(e,t,n){var l=Gi;if(l&&typeof t=="string"&&t){var o=ul(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),im.has(o)||(im.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),mn(t,"link",e),rn(t),l.head.appendChild(t)))}}function lv(e){xo.D(e),rp("dns-prefetch",e,null)}function ov(e,t){xo.C(e,t),rp("preconnect",e,t)}function av(e,t,n){xo.L(e,t,n);var l=Gi;if(l&&e&&t){var o='link[rel="preload"][as="'+ul(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ul(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ul(n.imageSizes)+'"]')):o+='[href="'+ul(e)+'"]';var a=o;switch(t){case"style":a=$i(e);break;case"script":a=Wi(e)}if(!(hl.has(a)||(e=vt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hl.set(a,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(hs(a))||t==="script"&&l.querySelector(ms(a))))){var i=l.createElement("link");mn(i,"link",e),t==="style"&&(i[Ac]=!0,i.onload=i.onerror=function(){Bm(i)}),rn(i),l.head.appendChild(i)}}}function iv(e,t){xo.m(e,t);var n=Gi;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ul(l)+'"][href="'+ul(e)+'"]',a=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Wi(e)}if(!hl.has(a)&&(e=vt({rel:"modulepreload",href:e},t),hl.set(a,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ms(a)))return}l=n.createElement("link"),mn(l,"link",e),rn(l),n.head.appendChild(l)}}}function rv(e,t,n){xo.S(e,t,n);var l=Gi;if(l&&e){var o=bi(l).hoistableStyles,a=$i(e);t=t||"default";var i=o.get(a);if(!i){var r={loading:0,preload:null};if(i=l.querySelector(hs(a)))r.loading=5;else{e=vt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hl.get(a))&&e0(e,n);var s=i=l.createElement("link");rn(s),mn(s,"link",e),s._p=new Promise(function(m,_){s.onload=m,s.onerror=_}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Cc(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:r},o.set(a,i)}}}function sv(e,t){xo.X(e,t);var n=Gi;if(n&&e){var l=bi(n).hoistableScripts,o=Wi(e),a=l.get(o);a||(a=n.querySelector(ms(o)),a||(e=vt({src:e,async:!0},t),(t=hl.get(o))&&t0(e,t),a=n.createElement("script"),rn(a),mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function cv(e,t){xo.M(e,t);var n=Gi;if(n&&e){var l=bi(n).hoistableScripts,o=Wi(e),a=l.get(o);a||(a=n.querySelector(ms(o)),a||(e=vt({src:e,async:!0,type:"module"},t),(t=hl.get(o))&&t0(e,t),a=n.createElement("script"),rn(a),mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function rm(e,t,n,l){var o=(o=Yo.current)?es(o):null;if(!o)throw Error(L(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=$i(n.href),t=bi(o).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$i(n.href);var a=bi(o).hoistableStyles,i=a.get(e);if(i||(o=o.ownerDocument||o,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,i),(a=o.querySelector(hs(e)))?a._p||(i.instance=a,i.state.loading=5):(a=hl.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hl.set(e,a)),uv(o,e,a,i.state))),t&&l===null)throw Error(L(528,""));return i}if(t&&l!==null)throw Error(L(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Wi(n),t=bi(o).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(L(444,e))}}function $i(e){return'href="'+ul(e)+'"'}function hs(e){return'link[rel="stylesheet"]['+e+"]"}function sp(e){return vt({},e,{"data-precedence":e.precedence,precedence:null})}function uv(e,t,n,l){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ac]!==!0){l.loading=1;return}}else t=e.createElement("link"),t[Ac]=!0,t.onload=t.onerror=Bm.bind(null,t),mn(t,"link",n),rn(t),e.head.appendChild(t);l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2})}function Wi(e){return'[src="'+ul(e)+'"]'}function ms(e){return"script[async]"+e}function sm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ul(n.href)+'"]');if(l)return t.instance=l,rn(l),l;var o=vt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),rn(l),mn(l,"style",o),Cc(l,n.precedence,e),t.instance=l;case"stylesheet":o=$i(n.href);var a=e.querySelector(hs(o));if(a)return t.state.loading|=4,t.instance=a,rn(a),a;l=sp(n),(o=hl.get(o))&&e0(l,o),a=(e.ownerDocument||e).createElement("link"),rn(a);var i=a;return i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),mn(a,"link",l),t.state.loading|=4,Cc(a,n.precedence,e),t.instance=a;case"script":return a=Wi(n.src),(o=e.querySelector(ms(a)))?(t.instance=o,rn(o),o):(l=n,(o=hl.get(a))&&(l=vt({},n),t0(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),rn(o),mn(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(L(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Cc(l,n.precedence,e));return t.instance}function Cc(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,a=o,i=0;i<l.length;i++){var r=l[i];if(r.dataset.precedence===t)a=r;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function e0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function t0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var kc=null;function cm(e,t,n){if(kc===null){var l=new Map,o=kc=new Map;o.set(n,l)}else o=kc,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[ss]||a[dn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(t)||"";i=e+i;var r=l.get(i);r?r.push(a):l.set(i,[a])}}return l}function nf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function dv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function um(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function cp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function up(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function dm(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=up(t),e.suspenseyImages.push(t)),e=hv.bind(e),t.decode().then(e,e))}function _v(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=$i(l.href),a=t.querySelector(hs(o));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ts.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,rn(a);return}a=t.ownerDocument||t,l=sp(l),(o=hl.get(o))&&e0(l,o),a=a.createElement("link"),rn(a);var i=a;i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),mn(a,"link",l),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ts.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Mc=0;function fv(e,t){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Mc===0&&(Mc=62500*zx());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Mc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function dp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ec(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ts(){this.count--,dp(this)}function hv(){this.imgCount--,dp(this)}var nu=null;function Ec(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nu=new Map,t.forEach(mv,e),nu=null,ts.call(e))}function mv(e,t){if(!(t.state.loading&4)){var n=nu.get(e);if(n)var l=n.get(null);else{n=new Map,nu.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}o=t.instance,i=o.getAttribute("data-precedence"),a=n.get(i)||l,a===l&&n.set(null,o),n.set(i,o),this.count++,l=ts.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),a?a.parentNode.insertBefore(o,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Ui={$$typeof:Xl,Provider:null,Consumer:null,_currentValue:ba,_currentValue2:ba,_threadCount:0};function gv(e,t,n,l,o,a,i,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.hiddenUpdates=vd(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function _p(e,t,n,l,o,a,i,r,s,m,_,x){return e=new gv(e,t,n,i,s,m,_,x,r),t=1,a===!0&&(t|=24),a=Bn(3,null,null,t),e.current=a,a.stateNode=e,t=vf(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:l,isDehydrated:n,cache:t},Cf(a),e}function fp(e){return e?(e=mi,e):mi}function hp(e,t,n,l,o,a){o=fp(o),l.context===null?l.context=o:l.pendingContext=o,l=Io(t),l.payload={element:n},a=a===void 0?null:a,a!==null&&(l.callback=a),n=Xo(e,l,t),n!==null&&(Hn(n,e,t),Ar(n,e,t))}function _m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function n0(e,t){_m(e,t),(e=e.alternate)&&_m(e,t)}function mp(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&Hn(t,e,67108864),n0(e,67108864)}}function fm(e){if(e.tag===13||e.tag===31){var t=Zn();t=cf(t);var n=La(e,t);n!==null&&Hn(n,e,t),n0(e,t)}}var Yi=!0;function yv(e,t,n,l){var o=we.T;we.T=null;var a=at.p;try{at.p=2,l0(e,t,n,l)}finally{at.p=a,we.T=o}}function pv(e,t,n,l){var o=we.T;we.T=null;var a=at.p;try{at.p=8,l0(e,t,n,l)}finally{at.p=a,we.T=o}}function l0(e,t,n,l){if(Yi){var o=lf(l);if(o===null)qd(e,t,l,lu,n),hm(e,l);else if(xv(o,e,t,n,l))l.stopPropagation();else if(hm(e,l),t&4&&-1<bv.indexOf(e)){for(;o!==null;){var a=Xi(o);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=ha(a.pendingLanes);if(i!==0){var r=a;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var s=1<<31-Wn(i);r.entanglements[1]|=s,i&=~s}Fl(a),(ot&6)===0&&(Fc=Vn()+500,fs(0,!1))}}break;case 31:case 13:r=La(a,2),r!==null&&Hn(r,a,2),bu(),n0(a,2)}if(a=lf(l),a===null&&qd(e,t,l,lu,n),a===o)break;o=a}o!==null&&l.stopPropagation()}else qd(e,t,l,null,n)}}function lf(e){return e=_f(e),o0(e)}var lu=null;function o0(e){if(lu=null,e=ya(e),e!==null){var t=os(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=xm(t),e!==null)return e;e=null}else if(n===31){if(e=vm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lu=e,null}function gp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A2()){case Em:return 2;case Tm:return 8;case Oc:case R2:return 32;case Nm:return 268435456;default:return 32}default:return 32}}var of=!1,Go=null,Wo=null,Zo=null,ns=new Map,ls=new Map,Ao=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hm(e,t){switch(e){case"focusin":case"focusout":Go=null;break;case"dragenter":case"dragleave":Wo=null;break;case"mouseover":case"mouseout":Zo=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(t.pointerId)}}function wr(e,t,n,l,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Xi(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xv(e,t,n,l,o){switch(t){case"focusin":return Go=wr(Go,e,t,n,l,o),!0;case"dragenter":return Wo=wr(Wo,e,t,n,l,o),!0;case"mouseover":return Zo=wr(Zo,e,t,n,l,o),!0;case"pointerover":var a=o.pointerId;return ns.set(a,wr(ns.get(a)||null,e,t,n,l,o)),!0;case"gotpointercapture":return a=o.pointerId,ls.set(a,wr(ls.get(a)||null,e,t,n,l,o)),!0}return!1}function yp(e){var t=ya(e.target);if(t!==null){var n=os(t);if(n!==null){if(t=n.tag,t===13){if(t=xm(n),t!==null){e.blockedOn=t,Y1(e.priority,function(){fm(n)});return}}else if(t===31){if(t=vm(n),t!==null){e.blockedOn=t,Y1(e.priority,function(){fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);r_=l,n.target.dispatchEvent(l),r_=null}else return t=Xi(n),t!==null&&mp(t),e.blockedOn=n,!1;t.shift()}return!0}function mm(e,t,n){Tc(e)&&n.delete(t)}function vv(){of=!1,Go!==null&&Tc(Go)&&(Go=null),Wo!==null&&Tc(Wo)&&(Wo=null),Zo!==null&&Tc(Zo)&&(Zo=null),ns.forEach(mm),ls.forEach(mm)}function sc(e,t){e.blockedOn===t&&(e.blockedOn=null,of||(of=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,vv)))}var cc=null;function gm(e){cc!==e&&(cc=e,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(o0(l||n)===null)continue;break}var a=Xi(n);a!==null&&(e.splice(t,3),t-=3,S_(a,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function ji(e){function t(s){return sc(s,e)}Go!==null&&sc(Go,e),Wo!==null&&sc(Wo,e),Zo!==null&&sc(Zo,e),ns.forEach(t),ls.forEach(t);for(var n=0;n<Ao.length;n++){var l=Ao[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ao.length&&(n=Ao[0],n.blockedOn===null);)yp(n),n.blockedOn===null&&Ao.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],a=n[l+1],i=o[Un]||null;if(typeof a=="function")i||gm(n);else if(i){var r=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[Un]||null)r=i.formAction;else if(o0(o)!==null)continue}else r=i.action;typeof r=="function"?n[l+1]=r:(n.splice(l,3),l-=3),gm(n)}}}function pp(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(i){return o=i})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function a0(e){this._internalRoot=e}wu.prototype.render=a0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));var n=t.current,l=Zn();hp(n,l,e,t,null,null)};wu.prototype.unmount=a0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hp(e.current,2,null,e,null,null),bu(),t[Ii]=null}};function wu(e){this._internalRoot=e}wu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ao.length&&t!==0&&t<Ao[n].priority;n++);Ao.splice(n,0,e),n===0&&yp(e)}};var ym=pm.version;if(ym!=="19.3.0")throw Error(L(527,ym,"19.3.0"));at.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=w2(t),e=e!==null?wm(e):null,e=e===null?null:e.stateNode,e};var wv={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:we,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Sr.isDisabled&&Sr.supportsFiber))try{as=Sr.inject(wv),Gn=Sr}catch{}var Sr;Su.createRoot=function(e,t){if(!bm(e))throw Error(L(299));var n=!1,l="",o=Jg,a=Pg,i=ey;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_p(e,1,!1,null,null,n,l,null,o,a,i,pp),e[Ii]=t.current,Kf(e),new a0(t)};Su.hydrateRoot=function(e,t,n){if(!bm(e))throw Error(L(299));var l=!1,o="",a=Jg,i=Pg,r=ey,s=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(s=n.formState)),t=_p(e,1,!0,t,n??null,l,o,s,a,i,r,pp),t.context=fp(null),n=t.current,l=Zn(),l=cf(l),o=Io(l),o.callback=null,Xo(n,o,l),n=l,t.current.lanes=n,rs(t,n),Fl(t),e[Ii]=t.current,Kf(e),new wu(t)};Su.version="19.3.0"});var wp=wl((ow,vp)=>{"use strict";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(e){console.error(e)}}xp(),vp.exports=bp()});var Cp=wl(Cu=>{"use strict";var Sv=Symbol.for("react.transitional.element"),Cv=Symbol.for("react.fragment");function Sp(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var o in t)o!=="key"&&(n[o]=t[o])}else n=t;return t=n.ref,{$$typeof:Sv,type:e,key:l,ref:t!==void 0?t:null,props:n}}Cu.Fragment=Cv;Cu.jsx=Sp;Cu.jsxs=Sp});var En=wl((iw,kp)=>{"use strict";kp.exports=Cp()});function Qv(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:t=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[r0]||(e[r0]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[r0]}function Gv(e){return e?Pp.some(t=>!!e.closest?.(`[${t}]`)):!1}function Wv(){if(typeof document>"u"||Ue.frozen)return;Ue.frozen=!0,Ue.frozenTimeoutQueue=[],Ue.frozenRAFQueue=[];let e=document.getElementById(p0);e||(e=document.createElement("style"),e.id=p0),e.textContent=`
    *${i0},
    *${i0}::before,
    *${i0}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Ue.pausedAnimations=[];try{document.getAnimations().forEach(t=>{if(t.playState!=="running")return;let n=t.effect?.target;Gv(n)||(t.pause(),Ue.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function Mp(){if(typeof document>"u"||!Ue.frozen)return;Ue.frozen=!1;let e=Ue.frozenTimeoutQueue;Ue.frozenTimeoutQueue=[];for(let n of e)Ue.origSetTimeout(()=>{if(Ue.frozen){Ue.frozenTimeoutQueue.push(n);return}try{n()}catch(l){console.warn("[agentation] Error replaying queued timeout:",l)}},0);let t=Ue.frozenRAFQueue;Ue.frozenRAFQueue=[];for(let n of t)Ue.origRAF(l=>{if(Ue.frozen){Ue.frozenRAFQueue.push(n);return}n(l)});for(let n of Ue.pausedAnimations)try{n.play()}catch(l){console.warn("[agentation] Error resuming animation:",l)}Ue.pausedAnimations=[],document.getElementById(p0)?.remove(),document.querySelectorAll("video").forEach(n=>{n.dataset.wasPaused==="false"&&(n.play().catch(()=>{}),delete n.dataset.wasPaused)})}function s0(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus()}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}function $({w:e,h:t=3,strong:n}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function mt({w:e,h:t,radius:n=3,style:l}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function Nn({size:e}){return(0,u.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Jv({width:e,height:t}){let n=Math.max(8,t*.2);return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,u.jsx)(mt,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,u.jsx)($,{w:e*.06}),(0,u.jsx)($,{w:e*.07}),(0,u.jsx)($,{w:e*.05}),(0,u.jsx)($,{w:e*.06})]}),(0,u.jsx)(mt,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Pv({width:e,height:t,text:n}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,u.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,u.jsx)($,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,u.jsx)($,{w:e*.6}),(0,u.jsx)($,{w:e*.4}),(0,u.jsx)(mt,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function e4({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,u.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,u.jsx)($,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(mt,{w:10,h:10,radius:2}),(0,u.jsx)($,{w:e*(.4+o*17%30/100)})]},o))]})}function t4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,u.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)($,{w:"60%",h:3,strong:!0}),(0,u.jsx)($,{w:"80%",h:2}),(0,u.jsx)($,{w:"70%",h:2}),(0,u.jsx)($,{w:"60%",h:2})]},o))})}function n4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)($,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)($,{w:"90%"}),(0,u.jsx)($,{w:"70%"}),(0,u.jsx)($,{w:"80%"})]}),(0,u.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,u.jsx)(mt,{w:70,h:26,radius:4}),(0,u.jsx)(mt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function l4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)($,{w:"70%",h:4,strong:!0}),(0,u.jsx)($,{w:"95%",h:2}),(0,u.jsx)($,{w:"85%",h:2}),(0,u.jsx)($,{w:"50%",h:2})]})]})}function o4({width:e,height:t,text:n}){if(n)return(0,u.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let l=Math.max(2,Math.floor(t/18));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,u.jsx)($,{w:e*.6,h:5,strong:!0}),Array.from({length:l},(o,a)=>(0,u.jsx)($,{w:`${70+a*13%25}%`,h:2},a))]})}function a4({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function i4({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),l=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(o,a)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)($,{w:"70%",h:3,strong:!0})},a))}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,r)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)($,{w:`${50+(a*7+r*13)%40}%`,h:2})},r))},a))]})}function r4({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,u.jsx)(Nn,{size:8}),(0,u.jsx)($,{w:`${55+o*17%35}%`,h:2})]},o))})}function s4({width:e,height:t,text:n}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,u.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,u.jsx)($,{w:Math.max(20,e*.5),h:3,strong:!0})})}function c4({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,u.jsx)($,{w:Math.min(80,e*.3),h:2}),(0,u.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,u.jsx)($,{w:"40%",h:2})})]})}function u4({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)($,{w:60+o*17%30,h:2}),(0,u.jsx)(mt,{w:"100%",h:28,radius:4})]},o)),(0,u.jsx)(mt,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function d4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"8px 12px",borderBottom:o===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,u.jsx)($,{w:60,h:3,strong:o===0})},o))}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)($,{w:"80%",h:2}),(0,u.jsx)($,{w:"65%",h:2}),(0,u.jsx)($,{w:"75%",h:2})]})]})}function _4({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,u.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,u.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function f4({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)($,{w:Math.max(16,e*.5),h:2,strong:!0})})}function h4({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)($,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,u.jsx)($,{w:e*.35})]})}function m4({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,u.jsx)($,{w:e*.3,h:4,strong:!0}),(0,u.jsx)($,{w:e*.7}),(0,u.jsx)($,{w:e*.5}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,u.jsx)(mt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(mt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(mt,{w:"33%",h:"100%",radius:4})]})]})}function g4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)(mt,{w:"100%",h:"100%",radius:4},a))})}function y4({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,u.jsx)($,{w:e*.5,h:3,strong:!0})}),(0,u.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:o===0?"var(--agd-fill)":"transparent"},children:(0,u.jsx)($,{w:`${50+o*17%35}%`,h:2,strong:o===0})},o))})]})}function p4({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function b4({width:e,height:t}){let n=Math.min(t/2,20);return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,u.jsx)(Nn,{size:Math.min(14,t*.4)}),(0,u.jsx)($,{w:"50%",h:2})]})}function x4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Nn,{size:Math.min(20,t*.5)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:"60%",h:3,strong:!0}),(0,u.jsx)($,{w:"80%",h:2})]}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function v4({width:e,height:t}){return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,u.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function w4({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),l=e/(n*2);return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,a)=>{let i=30+(a*37+17)%55;return(0,u.jsx)(mt,{w:l,h:`${i}%`,radius:2},a)})})}function S4({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(mt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function C4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)($,{w:"60%",h:2})}),(0,u.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function k4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o>0&&(0,u.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,u.jsx)($,{w:40+o*13%20,h:2,strong:o===n-1})]},o))})}function M4({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),l=Math.min(28,t*.8);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(o,a)=>(0,u.jsx)(mt,{w:l,h:l,radius:4,style:a===1?{background:"var(--agd-bar)"}:void 0},a))})}function E4({width:e}){return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,u.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function T4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsx)($,{w:`${40+o*17%25}%`,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function N4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(mt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,u.jsx)(Nn,{size:5}),(0,u.jsx)(Nn,{size:5}),(0,u.jsx)(Nn,{size:5})]})]})}function D4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,u.jsx)($,{w:e*.4,h:3,strong:!0}),(0,u.jsx)($,{w:e*.3,h:6,strong:!0}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,l)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,u.jsx)(Nn,{size:5}),(0,u.jsx)($,{w:`${50+l*17%35}%`,h:2})]},l))}),(0,u.jsx)(mt,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function z4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,u.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)($,{w:"90%",h:2}),(0,u.jsx)($,{w:"75%",h:2}),(0,u.jsx)($,{w:"60%",h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(Nn,{size:20}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,u.jsx)($,{w:60,h:3,strong:!0}),(0,u.jsx)($,{w:40,h:2})]})]})]})}function O4({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)($,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,u.jsx)($,{w:e*.35}),(0,u.jsx)(mt,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function A4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,u.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:"40%",h:3,strong:!0}),(0,u.jsx)($,{w:"70%",h:2})]})]})}function R4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,u.jsx)($,{w:e*.4,h:3,strong:!0}),(0,u.jsx)(mt,{w:60,h:Math.min(24,t*.6),radius:4})]})}function L4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)($,{w:e*.5,h:2}),(0,u.jsx)($,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,u.jsx)($,{w:e*.3,h:2})]})}function B4({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),l=Math.min(12,t*.35);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,u.jsx)("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:a===0?"var(--agd-bar)":"transparent",flexShrink:0}}),a<n-1&&(0,u.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},a))})}function H4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,u.jsx)($,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,u.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function $4({width:e,height:t}){let l=Math.min(t*.7,e/7.5);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(o,a)=>(0,u.jsx)("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:(0,u.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:a<3?"var(--agd-bar)":"none"})},a))})}function U4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,u.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,u.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,u.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,u.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,u.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,u.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,u.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Y4({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,u.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,u.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,u.jsx)(Nn,{size:8}),o<n-1&&(0,u.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},o))}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:`${35+o*13%25}%`,h:3,strong:!0}),(0,u.jsx)($,{w:`${50+o*17%30}%`,h:2})]},o))})]})}function j4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,u.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,u.jsx)($,{w:e*.4,h:2}),(0,u.jsx)($,{w:e*.25,h:2})]})}function I4({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,u.jsx)(Nn,{size:6}),(0,u.jsx)(Nn,{size:6}),(0,u.jsx)(Nn,{size:6})]}),Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:o>0&&o<n-1?12:0},children:(0,u.jsx)($,{w:`${25+o*23%50}%`,h:2,strong:o===0})},o))]})}function X4({width:e,height:t}){let o=Math.min((e-16)/7,(t-40)/6);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)($,{w:e*.3,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o*.6},children:(0,u.jsx)($,{w:o*.5,h:2})},`h${i}`)),Array.from({length:35},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o},children:(0,u.jsx)("div",{style:{width:o*.6,height:o*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function q4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Nn,{size:Math.min(32,t*.55)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:"50%",h:3,strong:!0}),(0,u.jsx)($,{w:"75%",h:2})]}),(0,u.jsx)($,{w:30,h:2})]})}function Q4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)($,{w:"65%",h:4,strong:!0}),(0,u.jsx)($,{w:"40%",h:3}),(0,u.jsx)("div",{style:{flex:1}}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)($,{w:"30%",h:5,strong:!0}),(0,u.jsx)(mt,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function V4({width:e,height:t}){let n=Math.min(48,t*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)(Nn,{size:n}),(0,u.jsx)($,{w:e*.45,h:4,strong:!0}),(0,u.jsx)($,{w:e*.3,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)($,{w:20,h:3,strong:!0}),(0,u.jsx)($,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)($,{w:20,h:3,strong:!0}),(0,u.jsx)($,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)($,{w:20,h:3,strong:!0}),(0,u.jsx)($,{w:28,h:2})]})]})]})}function G4({width:e,height:t}){let n=Math.max(e*.6,80),l=Math.max(3,Math.floor(t/40));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,u.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,u.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,u.jsx)($,{w:n*.4,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{padding:"6px 0"},children:(0,u.jsx)($,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))]})]})}function W4({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)($,{w:"70%",h:3,strong:!0}),(0,u.jsx)($,{w:"90%",h:2}),(0,u.jsx)($,{w:"60%",h:2})]}),(0,u.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Z4({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,u.jsx)(mt,{w:n,h:n,radius:n*.25}),(0,u.jsx)($,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function K4({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,u.jsx)($,{w:e*(.3+o*13%25/100),h:3,strong:!0})]}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function F4({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,u.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},a))})}function J4({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function P4({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function e3({width:e,height:t}){let n=Math.max(2,t*.12),l=Math.min(t*.35,10),o=e*.55;return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,u.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,u.jsx)("div",{style:{width:o,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,u.jsx)("div",{style:{position:"absolute",left:o-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function t3({width:e,height:t}){let n=Math.min(36,t*.15),l=7,o=4,a=Math.min((e-16)/l,(t-n-40)/(o+1));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,u.jsx)($,{w:"40%",h:2}),(0,u.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,u.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)($,{w:e*.25,h:2,strong:!0}),(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*o},(i,r)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:(0,u.jsx)("div",{style:{width:a*.5,height:a*.5,borderRadius:"50%",background:r===10?"var(--agd-bar)":"transparent"},children:(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:r===10?1:.25}})})})},r))})]})]})}function n3({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,u.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function l3({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,u.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,u.jsx)($,{w:"60%",h:2,strong:!0}),(0,u.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function o3({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,u.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function a3({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,u.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function i3({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),l=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,u.jsx)(mt,{w:n,h:n,radius:n*.25}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)($,{w:`${40+a*13%20}%`,h:3,strong:!0}),(0,u.jsx)($,{w:`${60+a*17%25}%`,h:2})]})]},a))})}function r3({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.min(36,t*.25);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,u.jsx)($,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,u.jsx)(Nn,{size:l}),(0,u.jsx)($,{w:e*.12,h:3,strong:!0}),(0,u.jsx)($,{w:e*.08,h:2})]},a))})]})}function s3({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,u.jsx)($,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,u.jsx)($,{w:e*.35,h:2}),(0,u.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:Math.min(60,e*.2),h:2}),(0,u.jsx)(mt,{w:"100%",h:Math.min(32,t*.1),radius:4})]},o))}),(0,u.jsx)(mt,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,u.jsx)($,{w:e*.4,h:2})]})}function c3({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,u.jsx)($,{w:e*.4,h:4,strong:!0}),(0,u.jsx)($,{w:e*.6,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:50,h:2}),(0,u.jsx)(mt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:40,h:2}),(0,u.jsx)(mt,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)($,{w:50,h:2}),(0,u.jsx)(mt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,u.jsx)($,{w:60,h:2}),(0,u.jsx)(mt,{w:"100%",h:"100%",radius:4})]}),(0,u.jsx)(mt,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function d3({type:e,width:t,height:n,text:l}){let o=u3[e];return o?(0,u.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,u.jsx)(o,{width:t,height:n,text:l})}):(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}function Tp(e,t,n,l,o){let a=1/0,i=1/0,r=e.x,s=e.x+e.width,m=e.x+e.width/2,_=e.y,x=e.y+e.height,d=e.y+e.height/2,b=!l,C=b?[r,s,m]:[...l.left?[r]:[],...l.right?[s]:[]],D=b?[_,x,d]:[...l.top?[_]:[],...l.bottom?[x]:[]],T=[];for(let he of t)n.has(he.id)||T.push(he);o&&T.push(...o);for(let he of T){let tt=he.x,gt=he.x+he.width,Re=he.x+he.width/2,qe=he.y,Te=he.y+he.height,Pe=he.y+he.height/2;for(let V of C)for(let ge of[tt,gt,Re]){let Ze=ge-V;Math.abs(Ze)<ku&&Math.abs(Ze)<Math.abs(a)&&(a=Ze)}for(let V of D)for(let ge of[qe,Te,Pe]){let Ze=ge-V;Math.abs(Ze)<ku&&Math.abs(Ze)<Math.abs(i)&&(i=Ze)}}let h=Math.abs(a)<ku?a:0,y=Math.abs(i)<ku?i:0,v=[],M=new Set,I=r+h,ne=s+h,B=m+h,Z=_+y,fe=x+y,K=d+y;for(let he of T){let tt=he.x,gt=he.x+he.width,Re=he.x+he.width/2,qe=he.y,Te=he.y+he.height,Pe=he.y+he.height/2;for(let V of[tt,Re,gt])for(let ge of[I,B,ne])if(Math.abs(ge-V)<.5){let Ze=`x:${Math.round(V)}`;M.has(Ze)||(M.add(Ze),v.push({axis:"x",pos:V}))}for(let V of[qe,Pe,Te])for(let ge of[Z,K,fe])if(Math.abs(ge-V)<.5){let Ze=`y:${Math.round(V)}`;M.has(Ze)||(M.add(Ze),v.push({axis:"y",pos:V}))}}return{dx:h,dy:y,guides:v}}function Np(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function h3({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:l,isDarkMode:o,exiting:a,onInteractionChange:i,className:r,passthrough:s,extraSnapRects:m,onSelectionChange:_,deselectSignal:x,onDragMove:d,onDragEnd:b,clearSignal:C,wireframe:D}){let[T,h]=(0,Je.useState)(new Set),[y,v]=(0,Je.useState)(null),[M,I]=(0,Je.useState)(null),[ne,B]=(0,Je.useState)(null),[Z,fe]=(0,Je.useState)([]),[K,he]=(0,Je.useState)(null),[tt,gt]=(0,Je.useState)(!1),Re=(0,Je.useRef)(!1),[qe,Te]=(0,Je.useState)(new Set),Pe=(0,Je.useRef)(new Map),V=(0,Je.useRef)(null),ge=(0,Je.useRef)(null),Ze=(0,Je.useRef)(e);Ze.current=e;let $t=(0,Je.useRef)(_);$t.current=_;let Dn=(0,Je.useRef)(d);Dn.current=d;let vn=(0,Je.useRef)(b);vn.current=b;let vo=(0,Je.useRef)(x);(0,Je.useEffect)(()=>{x!==vo.current&&(vo.current=x,h(new Set))},[x]);let Pn=(0,Je.useRef)(C);(0,Je.useEffect)(()=>{if(C!==void 0&&C!==Pn.current){Pn.current=C;let q=new Set(Ze.current.map(ue=>ue.id));q.size>0&&(Te(q),h(new Set),ge.current=null,_e(()=>{t([]),Te(new Set)},180))}},[C,t]),(0,Je.useEffect)(()=>{let q=ue=>{let pe=ue.target;if(!(pe.tagName==="INPUT"||pe.tagName==="TEXTAREA"||pe.isContentEditable)){if((ue.key==="Backspace"||ue.key==="Delete")&&T.size>0){ue.preventDefault();let be=new Set(T);Te(be),h(new Set),_e(()=>{t(Ze.current.filter(nt=>!be.has(nt.id))),Te(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ue.key)&&T.size>0){ue.preventDefault();let be=ue.shiftKey?20:1,nt=ue.key==="ArrowLeft"?-be:ue.key==="ArrowRight"?be:0,rt=ue.key==="ArrowUp"?-be:ue.key==="ArrowDown"?be:0;t(e.map(Ke=>T.has(Ke.id)?{...Ke,x:Math.max(0,Ke.x+nt),y:Math.max(0,Ke.y+rt)}:Ke));return}if(ue.key==="Escape"){n?l(null):T.size>0&&h(new Set);return}}};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[T,n,e,t,l]);let wo=(0,Je.useCallback)(q=>{if(q.button!==0||s||q.target.closest(`.${A.placement}`))return;q.preventDefault(),q.stopPropagation();let pe=window.scrollY,Oe=q.clientX,be=q.clientY;if(n){ge.current="place",i?.(!0);let nt=!1,rt=Oe,Ke=be,Ye=E=>{rt=E.clientX,Ke=E.clientY;let z=Math.abs(rt-Oe),H=Math.abs(Ke-be);if((z>5||H>5)&&(nt=!0),nt){let U=Math.min(Oe,rt),J=Math.min(be,Ke),oe=Math.abs(rt-Oe),X=Math.abs(Ke-be);v({x:U,y:J,w:oe,h:X}),B({x:E.clientX+12,y:E.clientY+12,text:`${Math.round(oe)} \xD7 ${Math.round(X)}`})}},me=E=>{window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",me),v(null),B(null),ge.current=null,i?.(!1);let z=P[n],H,U,J,oe;nt?(H=Math.min(Oe,rt),U=Math.min(be,Ke)+pe,J=Math.max(Zi,Math.abs(rt-Oe)),oe=Math.max(Zi,Math.abs(Ke-be))):(J=z.width,oe=z.height,H=Oe-J/2,U=be+pe-oe/2),H=Math.max(0,H),U=Math.max(0,U);let X={id:Np(),type:n,x:H,y:U,width:J,height:oe,scrollY:pe,timestamp:Date.now()},ae=[...e,X];t(ae),h(new Set([X.id])),l(null)};window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",me)}else{q.shiftKey||h(new Set),ge.current="select";let nt=!1,rt=Ye=>{let me=Math.abs(Ye.clientX-Oe),E=Math.abs(Ye.clientY-be);if((me>4||E>4)&&(nt=!0),nt){let z=Math.min(Oe,Ye.clientX),H=Math.min(be,Ye.clientY);I({x:z,y:H,w:Math.abs(Ye.clientX-Oe),h:Math.abs(Ye.clientY-be)})}},Ke=Ye=>{if(window.removeEventListener("mousemove",rt),window.removeEventListener("mouseup",Ke),ge.current=null,nt){let me=Math.min(Oe,Ye.clientX),E=Math.min(be,Ye.clientY)+pe,z=Math.abs(Ye.clientX-Oe),H=Math.abs(Ye.clientY-be),U=new Set(q.shiftKey?T:new Set);for(let J of e){let oe=J.y-pe;J.x+J.width>me&&J.x<me+z&&J.y+J.height>E&&J.y<E+H&&U.add(J.id)}h(U)}I(null)};window.addEventListener("mousemove",rt),window.addEventListener("mouseup",Ke)}},[n,s,e,t,T]),ml=(0,Je.useCallback)((q,ue)=>{if(q.button!==0)return;let pe=q.target;if(pe.closest(`.${A.handle}`)||pe.closest(`.${A.deleteButton}`))return;q.preventDefault(),q.stopPropagation();let Oe;q.shiftKey?(Oe=new Set(T),Oe.has(ue)?Oe.delete(ue):Oe.add(ue)):T.has(ue)?Oe=new Set(T):Oe=new Set([ue]),h(Oe),(Oe.size!==T.size||[...Oe].some(ae=>!T.has(ae)))&&$t.current?.(Oe,q.shiftKey);let nt=window.scrollY,rt=q.clientX,Ke=q.clientY,Ye=new Map;for(let ae of e)Oe.has(ae.id)&&Ye.set(ae.id,{x:ae.x,y:ae.y});ge.current="move",i?.(!0);let me=!1,E=!1,z=e,H=0,U=0,J=new Map;for(let ae of e)Ye.has(ae.id)&&J.set(ae.id,{w:ae.width,h:ae.height});let oe=ae=>{let ke=ae.clientX-rt,Qe=ae.clientY-Ke;if((Math.abs(ke)>2||Math.abs(Qe)>2)&&(me=!0),!me)return;if(ae.altKey&&!E){E=!0;let xe=[];for(let Ct of e)Ye.has(Ct.id)&&xe.push({...Ct,id:Np(),timestamp:Date.now()});z=[...e,...xe]}let lt=1/0,ie=1/0,st=-1/0,Be=-1/0;for(let[xe,Ct]of Ye){let ln=J.get(xe);ln&&(lt=Math.min(lt,Ct.x+ke),ie=Math.min(ie,Ct.y+Qe),st=Math.max(st,Ct.x+ke+ln.w),Be=Math.max(Be,Ct.y+Qe+ln.h))}let Ne={x:lt,y:ie,width:st-lt,height:Be-ie},{dx:re,dy:ut,guides:Ge}=Tp(Ne,z,new Set(Ye.keys()),void 0,m);fe(Ge);let De=ke+re,Fe=Qe+ut;H=De,U=Fe,t(z.map(xe=>{let Ct=Ye.get(xe.id);return Ct?{...xe,x:Math.max(0,Ct.x+De),y:Math.max(0,Ct.y+Fe)}:xe})),Dn.current?.(De,Fe)},X=()=>{window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",X),ge.current=null,i?.(!1),fe([]),vn.current?.(H,U,me)};window.addEventListener("mousemove",oe),window.addEventListener("mouseup",X)},[T,e,t,i]),eo=(0,Je.useCallback)((q,ue,pe)=>{q.preventDefault(),q.stopPropagation();let Oe=e.find(U=>U.id===ue);if(!Oe)return;h(new Set([ue])),ge.current="resize",i?.(!0);let be=q.clientX,nt=q.clientY,rt=Oe.width,Ke=Oe.height,Ye=Oe.x,me=Oe.y,E={left:pe.includes("w"),right:pe.includes("e"),top:pe.includes("n"),bottom:pe.includes("s")},z=U=>{let J=U.clientX-be,oe=U.clientY-nt,X=rt,ae=Ke,ke=Ye,Qe=me;pe.includes("e")&&(X=Math.max(Zi,rt+J)),pe.includes("w")&&(X=Math.max(Zi,rt-J),ke=Ye+rt-X),pe.includes("s")&&(ae=Math.max(Zi,Ke+oe)),pe.includes("n")&&(ae=Math.max(Zi,Ke-oe),Qe=me+Ke-ae);let lt={x:ke,y:Qe,width:X,height:ae},{dx:ie,dy:st,guides:Be}=Tp(lt,Ze.current,new Set([ue]),E,m);fe(Be),ie!==0&&(E.right?X+=ie:E.left&&(ke+=ie,X-=ie)),st!==0&&(E.bottom?ae+=st:E.top&&(Qe+=st,ae-=st)),t(Ze.current.map(Ne=>Ne.id===ue?{...Ne,x:ke,y:Qe,width:X,height:ae}:Ne)),B({x:U.clientX+12,y:U.clientY+12,text:`${Math.round(X)} \xD7 ${Math.round(ae)}`})},H=()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mouseup",H),B(null),ge.current=null,i?.(!1),fe([])};window.addEventListener("mousemove",z),window.addEventListener("mouseup",H)},[e,t,i]),So=(0,Je.useCallback)(q=>{ge.current=null,Te(ue=>{let pe=new Set(ue);return pe.add(q),pe}),h(ue=>{let pe=new Set(ue);return pe.delete(q),pe}),_e(()=>{t(Ze.current.filter(ue=>ue.id!==q)),Te(ue=>{let pe=new Set(ue);return pe.delete(q),pe})},180)},[t]),oa=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Yn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},gl=(0,Je.useCallback)(q=>{let ue=e.find(pe=>pe.id===q);ue&&(Re.current=!!ue.text,he(q),gt(!1))},[e]),zn=(0,Je.useCallback)(()=>{K&&(gt(!0),_e(()=>{he(null),gt(!1)},150))},[K]);(0,Je.useEffect)(()=>{a&&K&&zn()},[a]);let Dl=(0,Je.useCallback)(q=>{K&&(t(e.map(ue=>ue.id===K?{...ue,text:q.trim()||void 0}:ue)),zn())},[K,e,t,zn]),zl=typeof window<"u"?window.scrollY:0,Xa=["nw","ne","se","sw"],yl=D?"#f97316":"#3c82f7",Le=[{dir:"n",cls:A.edgeN,arrow:(0,St.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,St.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:yl})})},{dir:"e",cls:A.edgeE,arrow:(0,St.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,St.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:yl})})},{dir:"s",cls:A.edgeS,arrow:(0,St.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,St.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:yl})})},{dir:"w",cls:A.edgeW,arrow:(0,St.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,St.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:yl})})}];return(0,St.jsxs)(St.Fragment,{children:[(0,St.jsx)("div",{ref:V,className:`${A.overlay} ${o?"":A.light} ${n?A.placing:""} ${s?A.passthrough:""} ${a?A.overlayExiting:""} ${D?A.wireframe:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,onMouseDown:wo,children:e.map(q=>{let ue=T.has(q.id),pe=Nl[q.type]?.label||q.type,Oe=q.y-zl;return(0,St.jsxs)("div",{"data-design-placement":q.id,className:`${A.placement} ${ue?A.selected:""} ${qe.has(q.id)?A.exiting:""}`,style:{left:q.x,top:Oe,width:q.width,height:q.height,position:"fixed"},onMouseDown:be=>ml(be,q.id),onDoubleClick:()=>gl(q.id),children:[(0,St.jsx)("span",{className:A.placementLabel,children:pe}),(0,St.jsx)("span",{className:`${A.placementAnnotation} ${q.text?A.annotationVisible:""}`,children:(q.text&&Pe.current.set(q.id,q.text),q.text||Pe.current.get(q.id)||"")}),(0,St.jsx)("div",{className:A.placementContent,children:(0,St.jsx)(d3,{type:q.type,width:q.width,height:q.height,text:q.text})}),(0,St.jsx)("div",{className:A.deleteButton,onMouseDown:be=>be.stopPropagation(),onClick:()=>So(q.id),children:"\u2715"}),Xa.map(be=>(0,St.jsx)("div",{className:`${A.handle} ${A[`handle${be.charAt(0).toUpperCase()}${be.slice(1)}`]}`,onMouseDown:nt=>eo(nt,q.id,be)},be)),Le.map(({dir:be,cls:nt,arrow:rt})=>(0,St.jsx)("div",{className:`${A.edgeHandle} ${nt}`,onMouseDown:Ke=>eo(Ke,q.id,be),children:rt},be))]},q.id)})}),K&&(()=>{let q=e.find(me=>me.id===K);if(!q)return null;let ue=q.y-zl,pe=q.x+q.width/2,Oe=ue-8,be=ue+q.height+8,nt=Oe>200,rt=be<window.innerHeight-100,Ke=Math.max(160,Math.min(window.innerWidth-160,pe)),Ye;return nt?Ye={left:Ke,bottom:window.innerHeight-Oe}:rt?Ye={left:Ke,top:be}:Ye={left:Ke,top:Math.max(80,window.innerHeight/2-80)},(0,St.jsx)(Hu,{element:Nl[q.type]?.label||q.type,placeholder:Yn[q.type]||"Label or content text",initialValue:q.text??"",submitLabel:Re.current?"Save":"Set",onSubmit:Dl,onCancel:zn,onDelete:Re.current?()=>{Dl("")}:void 0,isExiting:tt,lightMode:!o,style:Ye})})(),y&&(0,St.jsx)("div",{className:A.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),M&&(0,St.jsx)("div",{className:A.selectBox,style:{left:M.x,top:M.y,width:M.w,height:M.h},"data-feedback-toolbar":!0}),ne&&(0,St.jsx)("div",{className:A.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),Z.map((q,ue)=>(0,St.jsx)("div",{className:A.guideLine,style:q.axis==="x"?{position:"fixed",left:q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:q.pos-zl,right:0,height:1},"data-feedback-toolbar":!0},`${q.axis}-${q.pos}-${ue}`))]})}function m3(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?A.fadeTop:""} ${n?A.fadeBottom:""}`}function g3({type:e}){switch(e){case"navigation":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:g,opacity:".4"}),(0,c.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:g,opacity:".25"})]});case"header":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:g,opacity:".35"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:g,opacity:".15"})]});case"hero":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:g,opacity:".35"}),(0,c.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:g,strokeWidth:O})]});case"section":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:g,opacity:".15"})]});case"sidebar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:g,opacity:".15"})]});case"footer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:g,opacity:".2"})]});case"modal":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:g,strokeWidth:O})]});case"divider":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:g,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:g,opacity:".04"}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:g,opacity:".12"})]});case"text":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:g,opacity:".12"})]});case"image":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"})]});case"video":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:g,strokeWidth:O,fill:g,opacity:".15"})]});case"table":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:g,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:g,strokeWidth:O})]});case"list":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:g,opacity:".2"})]});case"chart":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:g,opacity:".2"})]});case"accordion":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:g,strokeWidth:O})]});case"carousel":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:g,strokeWidth:O,opacity:".35"}),(0,c.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:g,strokeWidth:O,opacity:".35"}),(0,c.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:g,opacity:".35"}),(0,c.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:g,opacity:".15"}),(0,c.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:g,opacity:".15"})]});case"button":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"})]});case"input":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:g,opacity:".12"})]});case"search":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"form":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:g,strokeWidth:O})]});case"tabs":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:g,strokeWidth:O})]});case"dropdown":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:g,strokeWidth:O,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:g,opacity:".3"})]});case"avatar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:g,strokeWidth:O})]});case"badge":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"})]});case"breadcrumb":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:g,strokeWidth:O,opacity:".2"}),(0,c.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("path",{d:"M14 7l1 1-1 1",stroke:g,strokeWidth:O,opacity:".2"}),(0,c.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:g,opacity:".15"})]});case"pagination":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:g,opacity:".15",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:g,strokeWidth:O})]});case"progress":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:g,opacity:".2"})]});case"toast":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".12"})]});case"tooltip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:g,strokeWidth:O})]});case"pricing":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:g,opacity:".1"}),(0,c.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:g,opacity:".1"}),(0,c.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:g,opacity:".2"})]});case"testimonial":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:g,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:g,strokeWidth:O,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:g,opacity:".15"})]});case"cta":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:g,strokeWidth:O})]});case"alert":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:g,strokeWidth:"0.6",opacity:".5"}),(0,c.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:g,opacity:".5"}),(0,c.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:g,opacity:".2"})]});case"banner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:g,strokeWidth:O})]});case"stat":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"stepper":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:g,opacity:".2",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:g,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:g,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:g,strokeWidth:O})]});case"tag":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:g,strokeWidth:O,opacity:".2"}),(0,c.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:g,strokeWidth:O,opacity:".2"})]});case"rating":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:g,opacity:".25"}),(0,c.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:g,strokeWidth:O,opacity:".25"})]});case"map":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:g,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:g,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:g,opacity:".15",stroke:g,strokeWidth:O})]});case"timeline":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:g,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:g,opacity:".2",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:g,opacity:".15"})]});case"fileUpload":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:g,strokeWidth:O,strokeDasharray:"2 1"}),(0,c.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:g,opacity:".15"})]});case"codeBlock":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:g,opacity:".12"})]});case"calendar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:g,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:g,opacity:".2"})]});case"notification":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:g,strokeWidth:O,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:g,opacity:".25"})]});case"productCard":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:g,opacity:".04"}),(0,c.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:g,strokeWidth:O})]});case"profile":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"})]});case"drawer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:g,strokeWidth:O,opacity:".15"})]});case"popover":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:g,strokeWidth:O})]});case"logo":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:g,strokeWidth:O,opacity:".3"}),(0,c.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:g,opacity:".12"})]});case"faq":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:g,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:g,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:g,opacity:".12"})]});case"gallery":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:g,strokeWidth:O})]});case"checkbox":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:g,strokeWidth:O,opacity:".35"})]});case"radio":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:g,strokeWidth:O}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:g,opacity:".3"})]});case"slider":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:g,strokeWidth:O})]});case"datePicker":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:g,strokeWidth:O,strokeDasharray:"2 1",opacity:".3"}),(0,c.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:g,opacity:".3"}),(0,c.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:g,opacity:".2"})]});case"skeleton":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:g,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:g,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:g,opacity:".08"})]});case"chip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:g,opacity:".08",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:g,strokeWidth:O,opacity:".2"}),(0,c.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:g,strokeWidth:O,opacity:".2"}),(0,c.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:g,strokeWidth:O,opacity:".25"})]});case"icon":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:g,strokeWidth:O,opacity:".3"})});case"spinner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:g,strokeWidth:O,opacity:".12"}),(0,c.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:g,strokeWidth:O,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:g,strokeWidth:O,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:g,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:g,opacity:".12"})]});case"team":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:g,strokeWidth:O,opacity:".5"}),(0,c.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:g,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:g,opacity:".1"})]});case"login":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:g,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:g,opacity:".2"})]});case"contact":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:g,opacity:".2"}),(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:g,strokeWidth:O}),(0,c.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:g,opacity:".2"})]});default:return null}}function y3({activeType:e,onSelect:t,onDragStart:n,scrollRef:l,fadeClass:o,blankCanvas:a}){return(0,c.jsx)("div",{ref:l,className:`${A.placeScroll} ${o||""}`,children:t5.map(i=>(0,c.jsxs)("div",{className:A.paletteSection,children:[(0,c.jsx)("div",{className:A.paletteSectionTitle,children:i.section}),i.items.map(r=>(0,c.jsxs)("div",{className:`${A.paletteItem} ${e===r.type?A.active:""} ${a?A.wireframe:""}`,onClick:()=>t(r.type),onMouseDown:s=>{s.button===0&&n(r.type,s)},children:[(0,c.jsx)("div",{className:A.paletteItemIcon,children:(0,c.jsx)(g3,{type:r.type})}),(0,c.jsx)("span",{className:A.paletteItemLabel,children:r.label})]},r.type))]},i.section))})}function p3({value:e,suffix:t}){let[n,l]=(0,Ht.useState)(null),[o,a]=(0,Ht.useState)(t),[i,r]=(0,Ht.useState)("up"),s=(0,Ht.useRef)(e),m=(0,Ht.useRef)(t),_=(0,Ht.useRef)(),x=n!==null&&o!==t;return(0,Ht.useEffect)(()=>{if(e!==s.current){if(e===0){s.current=e,m.current=t,l(null);return}r(e>s.current?"up":"down"),l(s.current),a(m.current),s.current=e,m.current=t,clearTimeout(_.current),_.current=_e(()=>l(null),250)}else m.current=t},[e,t]),n===null?(0,c.jsxs)(c.Fragment,{children:[e,t?` ${t}`:""]}):x?(0,c.jsxs)("span",{className:A.rollingWrap,children:[(0,c.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,c.jsxs)("span",{className:`${A.rollingNum} ${i==="up"?A.exitUp:A.exitDown}`,children:[n," ",o]},`o${n}-${e}`),(0,c.jsxs)("span",{className:`${A.rollingNum} ${i==="up"?A.enterUp:A.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:A.rollingWrap,children:[(0,c.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,c.jsx)("span",{className:`${A.rollingNum} ${i==="up"?A.exitUp:A.exitDown}`,children:n},`o${n}-${e}`),(0,c.jsx)("span",{className:`${A.rollingNum} ${i==="up"?A.enterUp:A.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function b3({activeType:e,onSelect:t,isDarkMode:n,sectionCount:l,onDetectSections:o,visible:a,onExited:i,placementCount:r,onClearPlacements:s,onDragStart:m,blankCanvas:_,onBlankCanvasChange:x,wireframePurpose:d,onWireframePurposeChange:b,Tooltip:C}){let[D,T]=(0,Ht.useState)(!1),[h,y]=(0,Ht.useState)("exit"),[v,M]=(0,Ht.useState)(!1),[I,ne]=(0,Ht.useState)(!0),B=(0,Ht.useRef)(0),Z=(0,Ht.useRef)(""),fe=(0,Ht.useRef)(0),K=(0,Ht.useRef)(),he=(0,Ht.useRef)(null),[tt,gt]=(0,Ht.useState)("");(0,Ht.useEffect)(()=>(a?(T(!0),clearTimeout(K.current),cancelAnimationFrame(fe.current),fe.current=Ji(()=>{fe.current=Ji(()=>{y("enter")})})):(cancelAnimationFrame(fe.current),y("exit"),clearTimeout(K.current),K.current=_e(()=>{T(!1),i?.()},200)),()=>cancelAnimationFrame(fe.current)),[a]);let Re=r>0||l>0,qe=r+l;if(qe>0&&(B.current=qe,Z.current=_?qe===1?"Component":"Components":qe===1?"Change":"Changes"),(0,Ht.useEffect)(()=>{if(Re)v?ne(!1):(ne(!0),M(!0),Ji(()=>{Ji(()=>{ne(!1)})}));else{ne(!0);let Pe=_e(()=>M(!1),300);return()=>clearTimeout(Pe)}},[Re]),(0,Ht.useEffect)(()=>{if(!D)return;let Pe=he.current;if(!Pe)return;let V=()=>gt(m3(Pe));V(),Pe.addEventListener("scroll",V,{passive:!0});let ge=new ResizeObserver(V);return ge.observe(Pe),()=>{Pe.removeEventListener("scroll",V),ge.disconnect()}},[D]),!D)return null;let Te=[];return r>0&&Te.push("placed"),l>0&&Te.push("captured"),(0,c.jsxs)("div",{className:`${A.palette} ${A[h]} ${n?"":A.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Pe=>Pe.stopPropagation(),onMouseDown:Pe=>Pe.stopPropagation(),onTransitionEnd:Pe=>{Pe.target===Pe.currentTarget&&(a||(clearTimeout(K.current),T(!1),y("exit"),i?.()))},children:[(0,c.jsxs)("div",{className:A.paletteHeader,children:[(0,c.jsx)("div",{className:A.paletteHeaderTitle,children:"Layout Mode"}),(0,c.jsxs)("div",{className:A.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,c.jsx)("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,c.jsxs)("div",{className:`${A.canvasToggle} ${_?A.active:""}`,onClick:()=>x(!_),children:[(0,c.jsx)("span",{className:A.canvasToggleIcon,children:(0,c.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,c.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,c.jsx)("span",{className:A.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,c.jsx)("div",{className:`${A.wireframePurposeWrap} ${_?"":A.collapsed}`,children:(0,c.jsx)("div",{className:A.wireframePurposeInner,children:(0,c.jsx)("textarea",{className:A.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:d,onChange:Pe=>b(Pe.target.value),rows:2})})}),(0,c.jsx)(y3,{activeType:e,onSelect:t,onDragStart:m,scrollRef:he,fadeClass:tt,blankCanvas:_}),v&&(0,c.jsx)("div",{className:`${A.paletteFooterWrap} ${I?A.footerHidden:""}`,children:(0,c.jsx)("div",{className:A.paletteFooterInner,children:(0,c.jsx)("div",{className:A.paletteFooterInnerContent,children:(0,c.jsxs)("div",{className:A.paletteFooter,children:[(0,c.jsx)("span",{className:A.paletteFooterCount,children:(0,c.jsx)(p3,{value:B.current,suffix:Z.current})}),(0,c.jsx)("button",{className:A.paletteFooterClear,onClick:s,children:"Clear"})]})})})})]})}function nr(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function Tn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=nr(n)}return null}function x3(e,t=4){let n=[],l=e,o=0;for(;l&&o<t;){let a=l.tagName.toLowerCase();if(a==="html"||a==="body")break;let i=a;if(l.id)i=`#${l.id}`;else if(l.className&&typeof l.className=="string"){let s=l.className.split(/\s+/).find(m=>m.length>2&&!m.match(/^[a-z]{1,2}$/)&&!m.match(/[A-Z0-9]{5,}/));s&&(i=`.${s.split("_")[0]}`)}let r=nr(l);!l.parentElement&&r&&(i=`\u27E8shadow\u27E9 ${i}`),n.unshift(i),l=r,o++}return n.join(" > ")}function Pi(e){let t=x3(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(n)){let l=Tn(e,"svg");if(l){let o=nr(l);if(o instanceof HTMLElement)return{name:`graphic in ${Pi(o).name}`,path:t}}return{name:"graphic element",path:t}}if(n==="svg"){let l=nr(e);if(l?.tagName.toLowerCase()==="button"){let o=l.textContent?.trim();return{name:o?`icon in "${o}" button`:"button icon",path:t}}return{name:"icon",path:t}}if(n==="button"){let l=e.textContent?.trim(),o=e.getAttribute("aria-label");return o?{name:`button [${o}]`,path:t}:{name:l?`button "${l.slice(0,25)}"`:"button",path:t}}if(n==="a"){let l=e.textContent?.trim(),o=e.getAttribute("href");return l?{name:`link "${l.slice(0,25)}"`,path:t}:o?{name:`link to ${o.slice(0,30)}`,path:t}:{name:"link",path:t}}if(n==="input"){let l=e.getAttribute("type")||"text",o=e.getAttribute("placeholder"),a=e.getAttribute("name");return o?{name:`input "${o}"`,path:t}:a?{name:`input [${a}]`,path:t}:{name:`${l} input`,path:t}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){let l=e.textContent?.trim();return{name:l?`${n} "${l.slice(0,35)}"`:n,path:t}}if(n==="p"){let l=e.textContent?.trim();return l?{name:`paragraph: "${l.slice(0,40)}${l.length>40?"...":""}"`,path:t}:{name:"paragraph",path:t}}if(n==="span"||n==="label"){let l=e.textContent?.trim();return l&&l.length<40?{name:`"${l}"`,path:t}:{name:n,path:t}}if(n==="li"){let l=e.textContent?.trim();return l&&l.length<40?{name:`list item: "${l.slice(0,35)}"`,path:t}:{name:"list item",path:t}}if(n==="blockquote")return{name:"blockquote",path:t};if(n==="code"){let l=e.textContent?.trim();return l&&l.length<30?{name:`code: \`${l}\``,path:t}:{name:"code",path:t}}if(n==="pre")return{name:"code block",path:t};if(n==="img"){let l=e.getAttribute("alt");return{name:l?`image "${l.slice(0,30)}"`:"image",path:t}}if(n==="video")return{name:"video",path:t};if(["div","section","article","nav","header","footer","aside","main"].includes(n)){let l=e.className,o=e.getAttribute("role"),a=e.getAttribute("aria-label");if(a)return{name:`${n} [${a}]`,path:t};if(o)return{name:`${o}`,path:t};if(typeof l=="string"&&l){let i=l.split(/[\s_-]+/).map(r=>r.replace(/[A-Z0-9]{5,}.*$/,"")).filter(r=>r.length>2&&!/^[a-z]{1,2}$/.test(r)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:t}}return{name:n==="div"?"container":n,path:t}}return{name:n,path:t}}function gs(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let l=e.previousElementSibling;if(l){let a=l.textContent?.trim();a&&a.length<50&&t.unshift(`[before: "${a.slice(0,40)}"]`)}let o=e.nextElementSibling;if(o){let a=o.textContent?.trim();a&&a.length<50&&t.push(`[after: "${a.slice(0,40)}"]`)}return t.join(" ")}function Mu(e){let t=nr(e);if(!t)return"";let o=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(_=>_!==e&&_ instanceof HTMLElement);if(o.length===0)return"";let a=o.slice(0,4).map(_=>{let x=_.tagName.toLowerCase(),d=_.className,b="";if(typeof d=="string"&&d){let C=d.split(/\s+/).map(D=>D.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(D=>D.length>2&&!/^[a-z]{1,2}$/.test(D));C&&(b=`.${C}`)}if(x==="button"||x==="a"){let C=_.textContent?.trim().slice(0,15);if(C)return`${x}${b} "${C}"`}return`${x}${b}`}),r=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let _=t.className.split(/\s+/).map(x=>x.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x));_&&(r=`.${_}`)}let s=t.children.length,m=s>a.length+1?` (${s} total in ${r})`:"";return a.join(", ")+m}function ys(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(l=>l.length>0).map(l=>{let o=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return o?o[1]:l}).filter((l,o,a)=>a.indexOf(l)===o).join(", ")}function Eu(e){if(typeof window>"u")return{};let t=window.getComputedStyle(e),n={},l=e.tagName.toLowerCase(),o;v3.has(l)?o=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&e.getAttribute("role")==="button"?o=["backgroundColor","color","padding","borderRadius","fontSize"]:w3.has(l)?o=["backgroundColor","color","padding","borderRadius","fontSize"]:S3.has(l)?o=["width","height","objectFit","borderRadius"]:C3.has(l)?o=["display","padding","margin","gap","backgroundColor"]:o=["color","fontSize","margin","padding","backgroundColor"];for(let a of o){let i=a.replace(/([A-Z])/g,"-$1").toLowerCase(),r=t.getPropertyValue(i);r&&!n5.has(r)&&(n[a]=r)}return n}function Tu(e){if(typeof window>"u")return"";let t=window.getComputedStyle(e),n=[];for(let l of k3){let o=l.replace(/([A-Z])/g,"-$1").toLowerCase(),a=t.getPropertyValue(o);a&&!n5.has(a)&&n.push(`${o}: ${a}`)}return n.join("; ")}function M3(e){if(!e)return;let t={},n=e.split(";").map(l=>l.trim()).filter(Boolean);for(let l of n){let o=l.indexOf(":");if(o>0){let a=l.slice(0,o).trim(),i=l.slice(o+1).trim();a&&i&&(t[a]=i)}}return Object.keys(t).length>0?t:void 0}function Nu(e){let t=[],n=e.getAttribute("role"),l=e.getAttribute("aria-label"),o=e.getAttribute("aria-describedby"),a=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),l&&t.push(`aria-label="${l}"`),o&&t.push(`aria-describedby="${o}"`),a&&t.push(`tabindex=${a}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function Du(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let l=n.tagName.toLowerCase(),o=l;if(n.id)o=`${l}#${n.id}`;else if(n.className&&typeof n.className=="string"){let i=n.className.split(/\s+/).map(r=>r.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(r=>r.length>2);i&&(o=`${l}.${i}`)}let a=nr(n);!n.parentElement&&a&&(o=`\u27E8shadow\u27E9 ${o}`),t.unshift(o),n=a}return t.join(" > ")}function l5(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Ia(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let o=e.className.split(/\s+/).filter(a=>a.length>0).find(a=>a.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(a)&&!/^[a-z]{1,2}$/.test(a));if(o){let a=`${t}.${CSS.escape(o)}`;if(document.querySelectorAll(a).length===1)return a}}let n=e.parentElement;if(n){let o=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Ia(n)} > ${t}:nth-child(${o})`}return t}function $u(e){let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let l=e.getAttribute("role");if(l&&x0[l])return x0[l];if(Dp[t])return Dp[t];let o=e.querySelector("h1, h2, h3, h4, h5, h6");if(o){let i=o.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}let{name:a}=Pi(e);return a.charAt(0).toUpperCase()+a.slice(1)}function o5(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function a5(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function D3(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let l=[];return n.forEach((o,a)=>{if(!(o instanceof HTMLElement))return;let i=o.tagName.toLowerCase();if(T3.has(i)||o.hasAttribute("data-feedback-toolbar")||o.closest("[data-feedback-toolbar]"))return;let r=window.getComputedStyle(o);if(r.display==="none"||r.visibility==="hidden")return;let s=o.getBoundingClientRect();if(s.height<N3)return;let m=E3.has(i),_=o.getAttribute("role")&&x0[o.getAttribute("role")],x=i==="div"&&s.height>=60;if(!m&&!_&&!x)return;let d=window.scrollY,b=l5(o),C={x:s.x,y:b?s.y:s.y+d,width:s.width,height:s.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:$u(o),tagName:i,selector:Ia(o),role:o.getAttribute("role"),className:o5(o),textSnippet:a5(o),originalRect:C,currentRect:{...C},originalIndex:a,isFixed:b})}),l}function z3(e){let t=window.scrollY,n=e.getBoundingClientRect(),l=l5(e),o={x:n.x,y:l?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,i=0;return a&&(i=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:$u(e),tagName:e.tagName.toLowerCase(),selector:Ia(e),role:e.getAttribute("role"),className:o5(e),textSnippet:a5(e),originalRect:o,currentRect:{...o},originalIndex:i,isFixed:l}}function Rp(e,t,n,l){let o=1/0,a=1/0,i=e.x,r=e.x+e.width,s=e.x+e.width/2,m=e.y,_=e.y+e.height,x=e.y+e.height/2,d=[];for(let B of t)n.has(B.id)||d.push(B.currentRect);l&&d.push(...l);for(let B of d){let Z=B.x,fe=B.x+B.width,K=B.x+B.width/2,he=B.y,tt=B.y+B.height,gt=B.y+B.height/2;for(let Re of[i,r,s])for(let qe of[Z,fe,K]){let Te=qe-Re;Math.abs(Te)<Ou&&Math.abs(Te)<Math.abs(o)&&(o=Te)}for(let Re of[m,_,x])for(let qe of[he,tt,gt]){let Te=qe-Re;Math.abs(Te)<Ou&&Math.abs(Te)<Math.abs(a)&&(a=Te)}}let b=Math.abs(o)<Ou?o:0,C=Math.abs(a)<Ou?a:0,D=[],T=new Set,h=i+b,y=r+b,v=s+b,M=m+C,I=_+C,ne=x+C;for(let B of d){let Z=B.x,fe=B.x+B.width,K=B.x+B.width/2,he=B.y,tt=B.y+B.height,gt=B.y+B.height/2;for(let Re of[Z,K,fe])for(let qe of[h,v,y])if(Math.abs(qe-Re)<.5){let Te=`x:${Math.round(Re)}`;T.has(Te)||(T.add(Te),D.push({axis:"x",pos:Re}))}for(let Re of[he,gt,tt])for(let qe of[M,ne,I])if(Math.abs(qe-Re)<.5){let Te=`y:${Math.round(Re)}`;T.has(Te)||(T.add(Te),D.push({axis:"y",pos:Re}))}}return{dx:b,dy:C,guides:D}}function Lp(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(O3.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=Ap&&n.height>=Ap)return t;t=t.parentElement}return null}function A3({rearrangeState:e,onChange:t,isDarkMode:n,exiting:l,className:o,blankCanvas:a,extraSnapRects:i,onSelectionChange:r,deselectSignal:s,onDragMove:m,onDragEnd:_,clearSignal:x}){let{sections:d}=e,b=(0,Se.useRef)(e);b.current=e;let[C,D]=(0,Se.useState)(new Set),[T,h]=(0,Se.useState)(!1),y=(0,Se.useRef)(x);(0,Se.useEffect)(()=>{x!==void 0&&x!==y.current&&(y.current=x,d.length>0&&h(!0))},[x,d.length]);let v=(0,Se.useRef)(s);(0,Se.useEffect)(()=>{s!==v.current&&(v.current=s,D(new Set))},[s]);let[M,I]=(0,Se.useState)(null),[ne,B]=(0,Se.useState)(!1),Z=(0,Se.useRef)(!1),fe=(0,Se.useCallback)(E=>{let z=d.find(H=>H.id===E);z&&(Z.current=!!z.note,I(E),B(!1))},[d]),K=(0,Se.useCallback)(()=>{M&&(B(!0),_e(()=>{I(null),B(!1)},150))},[M]),he=(0,Se.useCallback)(E=>{M&&(t({...e,sections:d.map(z=>z.id===M?{...z,note:E.trim()||void 0}:z)}),K())},[M,d,e,t,K]);(0,Se.useEffect)(()=>{l&&M&&K()},[l]);let[tt,gt]=(0,Se.useState)(new Set),Re=(0,Se.useRef)(new Map),[qe,Te]=(0,Se.useState)(null),[Pe,V]=(0,Se.useState)(null),[ge,Ze]=(0,Se.useState)([]),[$t,Dn]=(0,Se.useState)(0),vn=(0,Se.useRef)(null),vo=(0,Se.useRef)(new Set),Pn=(0,Se.useRef)(new Map),[wo,ml]=(0,Se.useState)(new Map),[eo,So]=(0,Se.useState)(new Map),oa=(0,Se.useRef)(new Set),Yn=(0,Se.useRef)(new Map),gl=(0,Se.useRef)(r);gl.current=r;let zn=(0,Se.useRef)(m);zn.current=m;let Dl=(0,Se.useRef)(_);Dl.current=_,(0,Se.useEffect)(()=>{a&&D(new Set)},[a]);let[zl,Xa]=(0,Se.useState)(()=>!e.sections.some(E=>{let z=E.originalRect,H=E.currentRect;return Math.abs(z.x-H.x)>1||Math.abs(z.y-H.y)>1||Math.abs(z.width-H.width)>1||Math.abs(z.height-H.height)>1}));(0,Se.useEffect)(()=>{if(!zl){let E=_e(()=>Xa(!0),380);return()=>clearTimeout(E)}},[]);let yl=(0,Se.useRef)(new Set);(0,Se.useEffect)(()=>{yl.current=new Set(d.map(E=>E.selector))},[d]),(0,Se.useEffect)(()=>{let E=()=>Dn(window.scrollY);return E(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[]),(0,Se.useEffect)(()=>{let E=z=>{if(vn.current){Te(null);return}let H=document.elementFromPoint(z.clientX,z.clientY);if(!H){Te(null);return}if(H.closest("[data-feedback-toolbar]")){Te(null);return}if(H.closest("[data-design-placement]")){Te(null);return}if(H.closest("[data-annotation-popup]")){Te(null);return}let U=Lp(H);if(!U){Te(null);return}for(let oe of yl.current)try{let X=document.querySelector(oe);if(X&&(X===U||U.contains(X))){Te(null);return}}catch{}let J=U.getBoundingClientRect();Te({x:J.x,y:J.y,w:J.width,h:J.height})};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[d]),(0,Se.useEffect)(()=>{let E=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=E}},[]),(0,Se.useEffect)(()=>{let E=z=>{if(vn.current||z.button!==0)return;let H=z.target;if(!H||H.closest("[data-feedback-toolbar]")||H.closest("[data-design-placement]")||H.closest("[data-annotation-popup]"))return;let U=Lp(H),J=!1;if(U)for(let X of yl.current)try{let ae=document.querySelector(X);if(ae&&(ae===U||U.contains(ae))){J=!0;break}}catch{}let oe=!!(z.shiftKey||z.metaKey||z.ctrlKey);if(U&&!J){z.preventDefault(),z.stopPropagation();let X=z3(U),ae=[...d,X],ke=[...e.originalOrder,X.id];t({...e,sections:ae,originalOrder:ke});let Qe=new Set([X.id]);D(Qe),gl.current?.(Qe,oe),Te(null);let lt=z.clientX,ie=z.clientY,st={x:X.currentRect.x,y:X.currentRect.y},Be=X.originalRect,Ne=!1,re=0,ut=0;vn.current="move";let Ge=Fe=>{let xe=Fe.clientX-lt,Ct=Fe.clientY-ie;if(!Ne&&(Math.abs(xe)>2||Math.abs(Ct)>2)&&(Ne=!0),!Ne)return;let ln={x:st.x+xe,y:st.y+Ct,width:X.currentRect.width,height:X.currentRect.height},el=Rp(ln,ae,new Set([X.id]),i);Ze(el.guides);let Ol=xe+el.dx,On=Ct+el.dy;re=Ol,ut=On;let to=document.querySelector(`[data-rearrange-section="${X.id}"]`);to&&(to.style.transform=`translate(${Ol}px, ${On}px)`),ml(new Map([[X.id,{x:st.x+Ol,y:st.y+On,width:X.currentRect.width,height:X.currentRect.height}]])),zn.current?.(Ol,On)},De=()=>{window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",De),vn.current=null,Ze([]),ml(new Map);let Fe=document.querySelector(`[data-rearrange-section="${X.id}"]`);Fe&&(Fe.style.transform=""),Ne&&t({...e,sections:ae.map(xe=>xe.id===X.id?{...xe,currentRect:{...xe.currentRect,x:Math.max(0,st.x+re),y:Math.max(0,st.y+ut)}}:xe),originalOrder:ke}),Dl.current?.(re,ut,Ne)};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",De)}else if(J&&U){z.preventDefault();for(let X of d)try{let ae=document.querySelector(X.selector);if(ae&&ae===U){let ke=new Set([X.id]);D(ke),gl.current?.(ke,oe);return}}catch{}oe||(D(new Set),gl.current?.(new Set,!1))}else oe||(D(new Set),gl.current?.(new Set,!1))};return document.addEventListener("mousedown",E,!0),()=>document.removeEventListener("mousedown",E,!0)},[d,e,t]),(0,Se.useEffect)(()=>{let E=z=>{let H=z.target;if(!(H.tagName==="INPUT"||H.tagName==="TEXTAREA"||H.isContentEditable)){if((z.key==="Backspace"||z.key==="Delete")&&C.size>0){z.preventDefault();let U=new Set(C);gt(J=>{let oe=new Set(J);for(let X of U)oe.add(X);return oe}),D(new Set),_e(()=>{let J=b.current;t({...J,sections:J.sections.filter(oe=>!U.has(oe.id)),originalOrder:J.originalOrder.filter(oe=>!U.has(oe))}),gt(oe=>{let X=new Set(oe);for(let ae of U)X.delete(ae);return X})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(z.key)&&C.size>0){z.preventDefault();let U=z.shiftKey?20:1,J=z.key==="ArrowLeft"?-U:z.key==="ArrowRight"?U:0,oe=z.key==="ArrowUp"?-U:z.key==="ArrowDown"?U:0;t({...e,sections:d.map(X=>C.has(X.id)?{...X,currentRect:{...X.currentRect,x:Math.max(0,X.currentRect.x+J),y:Math.max(0,X.currentRect.y+oe)}}:X)});return}z.key==="Escape"&&C.size>0&&D(new Set)}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[C,d,e,t]);let Le=(0,Se.useCallback)((E,z)=>{if(E.button!==0)return;let H=E.target;if(H.closest(`.${A.handle}`)||H.closest(`.${A.deleteButton}`))return;E.preventDefault(),E.stopPropagation();let U;E.shiftKey||E.metaKey||E.ctrlKey?(U=new Set(C),U.has(z)?U.delete(z):U.add(z)):C.has(z)?U=new Set(C):U=new Set([z]),D(U),(U.size!==C.size||[...U].some(Ne=>!C.has(Ne)))&&gl.current?.(U,!!(E.shiftKey||E.metaKey||E.ctrlKey));let oe=E.clientX,X=E.clientY,ae=new Map;for(let Ne of d)U.has(Ne.id)&&ae.set(Ne.id,{x:Ne.currentRect.x,y:Ne.currentRect.y});vn.current="move";let ke=!1,Qe=0,lt=0,ie=new Map;for(let Ne of d)if(U.has(Ne.id)){let re=document.querySelector(`[data-rearrange-section="${Ne.id}"]`);ie.set(Ne.id,{outlineEl:re,curW:Ne.currentRect.width,curH:Ne.currentRect.height})}let st=Ne=>{let re=Ne.clientX-oe,ut=Ne.clientY-X;if(re===0&&ut===0)return;ke=!0;let Ge=1/0,De=1/0,Fe=-1/0,xe=-1/0;for(let[On,{curW:to,curH:ks}]of ie){let It=ae.get(On);if(!It)continue;let no=It.x+re,Ms=It.y+ut;Ge=Math.min(Ge,no),De=Math.min(De,Ms),Fe=Math.max(Fe,no+to),xe=Math.max(xe,Ms+ks)}let Ct=Rp({x:Ge,y:De,width:Fe-Ge,height:xe-De},d,U,i),ln=re+Ct.dx,el=ut+Ct.dy;Qe=ln,lt=el,Ze(Ct.guides);for(let[,{outlineEl:On}]of ie)On&&(On.style.transform=`translate(${ln}px, ${el}px)`);let Ol=new Map;for(let[On,{curW:to,curH:ks}]of ie){let It=ae.get(On);if(It){let no={x:Math.max(0,It.x+ln),y:Math.max(0,It.y+el),width:to,height:ks};Ol.set(On,no)}}ml(Ol),zn.current?.(ln,el)},Be=Ne=>{window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",Be),vn.current=null,Ze([]),ml(new Map);for(let[,{outlineEl:re}]of ie)re&&(re.style.transform="");if(ke){let re=Ne.clientX-oe,ut=Ne.clientY-X;if(Math.abs(re)<5&&Math.abs(ut)<5)t({...e,sections:d.map(Ge=>{let De=ae.get(Ge.id);return De?{...Ge,currentRect:{...Ge.currentRect,x:De.x,y:De.y}}:Ge})});else{t({...e,sections:d.map(Ge=>{let De=ae.get(Ge.id);return De?{...Ge,currentRect:{...Ge.currentRect,x:Math.max(0,De.x+Qe),y:Math.max(0,De.y+lt)}}:Ge})}),Dl.current?.(Qe,lt,!0);return}}Dl.current?.(0,0,!1)};window.addEventListener("mousemove",st),window.addEventListener("mouseup",Be)},[C,d,e,t]),q=(0,Se.useCallback)((E,z,H)=>{E.preventDefault(),E.stopPropagation();let U=d.find(Be=>Be.id===z);if(!U)return;D(new Set([z])),vn.current="resize";let J=E.clientX,oe=E.clientY,X={...U.currentRect},ae=U.originalRect,ke=X.width/X.height,Qe={...X},lt=document.querySelector(`[data-rearrange-section="${z}"]`),ie=Be=>{let Ne=Be.clientX-J,re=Be.clientY-oe,ut=X.x,Ge=X.y,De=X.width,Fe=X.height;if(H.includes("e")&&(De=Math.max(zu,X.width+Ne)),H.includes("w")&&(De=Math.max(zu,X.width-Ne),ut=X.x+X.width-De),H.includes("s")&&(Fe=Math.max(zu,X.height+re)),H.includes("n")&&(Fe=Math.max(zu,X.height-re),Ge=X.y+X.height-Fe),Be.shiftKey)if(H.length===2){let Ct=Math.abs(De-X.width),ln=Math.abs(Fe-X.height);Ct>ln?Fe=De/ke:De=Fe*ke,H.includes("w")&&(ut=X.x+X.width-De),H.includes("n")&&(Ge=X.y+X.height-Fe)}else H==="e"||H==="w"?Fe=De/ke:De=Fe*ke,H==="w"&&(ut=X.x+X.width-De),H==="n"&&(Ge=X.y+X.height-Fe);Qe={x:ut,y:Ge,width:De,height:Fe},lt&&(lt.style.left=`${ut}px`,lt.style.top=`${Ge-$t}px`,lt.style.width=`${De}px`,lt.style.height=`${Fe}px`),V({x:Be.clientX+12,y:Be.clientY+12,text:`${Math.round(De)} \xD7 ${Math.round(Fe)}`}),ml(new Map([[z,Qe]]))},st=()=>{window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",st),V(null),vn.current=null,ml(new Map),t({...e,sections:d.map(Be=>Be.id===z?{...Be,currentRect:Qe}:Be)})};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",st)},[d,e,t,$t]),ue=(0,Se.useCallback)(E=>{gt(z=>{let H=new Set(z);return H.add(E),H}),D(z=>{let H=new Set(z);return H.delete(E),H}),_e(()=>{let z=b.current;t({...z,sections:z.sections.filter(H=>H.id!==E),originalOrder:z.originalOrder.filter(H=>H!==E)}),gt(H=>{let U=new Set(H);return U.delete(E),U})},180)},[t]),pe=E=>{let z=E.originalRect,H=E.currentRect;return Math.abs(z.x-H.x)>1||Math.abs(z.y-H.y)>1||Math.abs(z.width-H.width)>1||Math.abs(z.height-H.height)>1},Oe=E=>{let z=E.originalRect,H=E.currentRect;return Math.abs(z.x-H.x)>1||Math.abs(z.y-H.y)>1},be=E=>{let z=E.originalRect,H=E.currentRect;return Math.abs(z.width-H.width)>1||Math.abs(z.height-H.height)>1};for(let E of d)Pn.current.has(E.id)||(Oe(E)?Pn.current.set(E.id,"move"):be(E)&&Pn.current.set(E.id,"resize"));for(let E of Pn.current.keys())d.some(z=>z.id===E)||Pn.current.delete(E);let nt=d.filter(E=>{try{if(tt.has(E.id)||C.has(E.id))return!0;let z=document.querySelector(E.selector);if(!z)return!1;let H=z.getBoundingClientRect(),U=E.originalRect;return Math.abs(H.width-U.width)+Math.abs(H.height-U.height)<200}catch{return!1}}),rt=nt.filter(E=>pe(E)),Ke=nt.filter(E=>!pe(E)),Ye=new Set(rt.map(E=>E.id));for(let E of vo.current)Ye.has(E)||vo.current.delete(E);let me=[...Ye].sort().join(",");for(let E of rt)Yn.current.set(E.id,{currentRect:E.currentRect,originalRect:E.originalRect,isFixed:E.isFixed});return(0,Se.useEffect)(()=>{let E=oa.current;oa.current=Ye;let z=new Map;for(let H of E)if(!Ye.has(H)){if(!d.some(J=>J.id===H))continue;let U=Yn.current.get(H);U&&(z.set(H,{orig:U.originalRect,target:U.currentRect,isFixed:U.isFixed}),Yn.current.delete(H))}if(z.size>0){So(U=>{let J=new Map(U);for(let[oe,X]of z)J.set(oe,X);return J});let H=_e(()=>{So(U=>{let J=new Map(U);for(let oe of z.keys())J.delete(oe);return J})},250);return()=>clearTimeout(H)}},[me,d]),(0,We.jsxs)(We.Fragment,{children:[(0,We.jsxs)("div",{className:`${A.rearrangeOverlay} ${n?"":A.light} ${l?A.overlayExiting:""}${o?` ${o}`:""}`,"data-feedback-toolbar":!0,children:[qe&&(0,We.jsx)("div",{className:A.hoverHighlight,style:{left:qe.x,top:qe.y,width:qe.w,height:qe.h}}),Ke.map(E=>{let z=E.currentRect,H=E.isFixed?z.y:z.y-$t,U=zp,J=C.has(E.id);return(0,We.jsxs)("div",{"data-rearrange-section":E.id,className:`${A.sectionOutline} ${J?A.selected:""} ${T||l||tt.has(E.id)?A.exiting:""}`,style:{left:z.x,top:H,width:z.width,height:z.height,borderColor:U.border,backgroundColor:U.bg,...zl?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:oe=>Le(oe,E.id),onDoubleClick:()=>fe(E.id),children:[(0,We.jsx)("span",{className:A.sectionLabel,style:{backgroundColor:U.pill},children:E.label}),(0,We.jsx)("span",{className:`${A.sectionAnnotation} ${E.note?A.annotationVisible:""}`,children:(E.note&&Re.current.set(E.id,E.note),E.note||Re.current.get(E.id)||"")}),(0,We.jsxs)("span",{className:A.sectionDimensions,children:[Math.round(z.width)," \xD7 ",Math.round(z.height)]}),(0,We.jsx)("div",{className:A.deleteButton,onMouseDown:oe=>oe.stopPropagation(),onClick:()=>ue(E.id),children:"\u2715"}),Op.map(oe=>(0,We.jsx)("div",{className:`${A.handle} ${A[`handle${oe.charAt(0).toUpperCase()}${oe.slice(1)}`]}`,onMouseDown:X=>q(X,E.id,oe)},oe))]},E.id)}),rt.map(E=>{let z=E.currentRect,H=E.isFixed?z.y:z.y-$t,U=C.has(E.id),J=Oe(E),oe=be(E);if(a&&!U)return null;let ae=!vo.current.has(E.id);return ae&&vo.current.add(E.id),(0,We.jsxs)("div",{"data-rearrange-section":E.id,className:`${A.ghostOutline} ${U?A.selected:""} ${T||l||tt.has(E.id)?A.exiting:""}`,style:{left:z.x,top:H,width:z.width,height:z.height,...zl?{}:{opacity:0,animation:"none",transition:"none"},...ae?{}:{animation:"none"}},onMouseDown:ke=>Le(ke,E.id),onDoubleClick:()=>fe(E.id),children:[(0,We.jsx)("span",{className:A.sectionLabel,style:{backgroundColor:zp.pill},children:E.label}),(0,We.jsx)("span",{className:`${A.sectionAnnotation} ${E.note?A.annotationVisible:""}`,children:(E.note&&Re.current.set(E.id,E.note),E.note||Re.current.get(E.id)||"")}),(0,We.jsxs)("span",{className:A.sectionDimensions,children:[Math.round(z.width)," \xD7 ",Math.round(z.height)]}),(0,We.jsx)("div",{className:A.deleteButton,onMouseDown:ke=>ke.stopPropagation(),onClick:()=>ue(E.id),children:"\u2715"}),Op.map(ke=>(0,We.jsx)("div",{className:`${A.handle} ${A[`handle${ke.charAt(0).toUpperCase()}${ke.slice(1)}`]}`,onMouseDown:Qe=>q(Qe,E.id,ke)},ke)),(0,We.jsx)("span",{className:A.ghostBadge,children:(()=>{let ke=Pn.current.get(E.id);if(J&&oe){let[Qe,lt]=ke==="resize"?["Resize","Move"]:["Move","Resize"];return(0,We.jsxs)(We.Fragment,{children:["Suggested ",Qe," ",(0,We.jsxs)("span",{className:A.ghostBadgeExtra,children:["& ",lt]})]})}return`Suggested ${oe?"Resize":"Move"}`})()})]},E.id)})]}),!a&&(()=>{let E=[];for(let z of rt){let H=wo.get(z.id);E.push({id:z.id,orig:z.originalRect,target:H||z.currentRect,isFixed:z.isFixed,isSelected:C.has(z.id),isExiting:tt.has(z.id)})}for(let[z,H]of wo)if(!E.some(U=>U.id===z)){let U=d.find(J=>J.id===z);U&&E.push({id:z,orig:U.originalRect,target:H,isFixed:U.isFixed,isSelected:C.has(z)})}for(let[z,H]of eo)E.some(U=>U.id===z)||E.push({id:z,orig:H.orig,target:H.target,isFixed:H.isFixed,isSelected:!1,isExiting:!0});return E.length===0?null:(0,We.jsxs)("svg",{className:`${A.connectorSvg} ${T||l?A.connectorExiting:""}`,children:[E.map(({id:z,orig:H,target:U,isFixed:J,isSelected:oe,isExiting:X})=>{let ae=H.x+H.width/2,ke=(J?H.y:H.y-$t)+H.height/2,Qe=U.x+U.width/2,lt=(J?U.y:U.y-$t)+U.height/2,ie=Qe-ae,st=lt-ke,Be=Math.sqrt(ie*ie+st*st);if(Be<2)return null;let Ne=Math.min(1,Be/40),re=Math.min(Be*.3,60),ut=Be>0?-st/Be:0,Ge=Be>0?ie/Be:0,De=(ae+Qe)/2+ut*re,Fe=(ke+lt)/2+Ge*re,xe=wo.has(z),Ct=xe||oe?1:.4,ln=xe||oe?1:.5;return(0,We.jsxs)("g",{className:X?A.connectorExiting:"",children:[(0,We.jsx)("path",{className:A.connectorLine,d:`M ${ae} ${ke} Q ${De} ${Fe} ${Qe} ${lt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ct*Ne}),(0,We.jsx)("circle",{className:A.connectorDot,cx:ae,cy:ke,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ln*Ne,filter:"url(#connDotShadow)"}),(0,We.jsx)("circle",{className:A.connectorDot,cx:Qe,cy:lt,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:ln*Ne,filter:"url(#connDotShadow)"})]},`conn-${z}`)}),(0,We.jsx)("defs",{children:(0,We.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,We.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),M&&(()=>{let E=d.find(lt=>lt.id===M);if(!E)return null;let z=E.currentRect,H=E.isFixed?z.y:z.y-$t,U=z.x+z.width/2,J=H-8,oe=H+z.height+8,X=J>200,ae=oe<window.innerHeight-100,ke=Math.max(160,Math.min(window.innerWidth-160,U)),Qe;return X?Qe={left:ke,bottom:window.innerHeight-J}:ae?Qe={left:ke,top:oe}:Qe={left:ke,top:Math.max(80,window.innerHeight/2-80)},(0,We.jsx)(Hu,{element:E.label,placeholder:"Add a note about this section",initialValue:E.note??"",submitLabel:Z.current?"Save":"Set",onSubmit:he,onCancel:K,onDelete:Z.current?()=>{he("")}:void 0,isExiting:ne,lightMode:!n,style:Qe})})(),Pe&&(0,We.jsx)("div",{className:A.sizeIndicator,style:{left:Pe.x,top:Pe.y},"data-feedback-toolbar":!0,children:Pe.text}),ge.map((E,z)=>(0,We.jsx)("div",{className:A.guideLine,style:E.axis==="x"?{position:"fixed",left:E.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:E.pos-$t,width:"100vw",height:1}},`${E.axis}-${E.pos}-${z}`))]})}function R3(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),l=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let o of l){if(!(o instanceof HTMLElement)||v0.has(o.tagName.toLowerCase())||o.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(o);if(a.display==="none"||a.visibility==="hidden")continue;let i=o.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:$u(o),selector:Ia(o),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let r of Array.from(o.children)){if(!(r instanceof HTMLElement)||v0.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")continue;let m=r.getBoundingClientRect();m.height<10||m.width<10||t.push({label:$u(r),selector:Ia(r),top:m.top,bottom:m.bottom,left:m.left,right:m.right,area:m.width*m.height})}}}return t}function L3(e){let t=window.scrollY;return e.map(({label:n,selector:l,rect:o})=>{let a=o.y-t;return{label:n,selector:l,top:a,bottom:a+o.height,left:o.x,right:o.x+o.width,area:o.width*o.height}})}function B3(e){let t=window.scrollY,n=e.y-t,l=e.x;return{top:n,bottom:n+e.height,left:l,right:l+e.width,area:e.width*e.height}}function w0(e,t){let n=t?L3(t):R3(),l=B3(e),o=null,a=null,i=null,r=null,s=null;for(let C of n){if(Math.abs(C.left-l.left)<2&&Math.abs(C.top-l.top)<2&&Math.abs(C.right-C.left-e.width)<2&&Math.abs(C.bottom-C.top-e.height)<2)continue;C.left<=l.left+2&&C.right>=l.right-2&&C.top<=l.top+2&&C.bottom>=l.bottom-2&&C.area>l.area*1.5&&(!s||C.area<s._area)&&(s={label:C.label,selector:C.selector,_area:C.area});let D=l.right>C.left+5&&l.left<C.right-5,T=l.bottom>C.top+5&&l.top<C.bottom-5;if(D&&C.bottom<=l.top+5){let h=Math.round(l.top-C.bottom);(!o||h<o._dist)&&(o={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h})}if(D&&C.top>=l.bottom-5){let h=Math.round(C.top-l.bottom);(!a||h<a._dist)&&(a={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h})}if(T&&C.right<=l.left+5){let h=Math.round(l.left-C.right);(!i||h<i._dist)&&(i={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h})}if(T&&C.left>=l.right-5){let h=Math.round(C.left-l.right);(!r||h<r._dist)&&(r={label:C.label,selector:C.selector,gap:Math.max(0,h),_dist:h})}}let m=window.innerWidth,_=window.innerHeight,x=$3(e,m),d=C=>C?{label:C.label,selector:C.selector,gap:C.gap}:null,b=H3(l,e,m,_,s?{label:s.label,selector:s.selector,_area:s._area}:null,n);return{above:d(o),below:d(a),left:d(i),right:d(r),alignment:x,containedIn:s?{label:s.label,selector:s.selector}:null,outOfBounds:b}}function H3(e,t,n,l,o,a){let i={},r=!1,s=[];if(e.left<-2&&s.push("left"),e.right>n+2&&s.push("right"),e.top<-2&&s.push("top"),e.bottom>l+2&&s.push("bottom"),s.length>0&&(i.viewport=s,r=!0),o){let m=a.find(_=>_.label===o.label&&_.selector===o.selector&&Math.abs(_.area-o._area)<10);if(m){let _=[];e.left<m.left-2&&_.push("left"),e.right>m.right+2&&_.push("right"),e.top<m.top-2&&_.push("top"),e.bottom>m.bottom+2&&_.push("bottom"),_.length>0&&(i.container={label:o.label,edges:_},r=!0)}}return r?i:null}function $3(e,t){if(e.width/t>.85)return"full-width";let l=e.x+e.width/2,o=t/2,a=l-o,i=t*.08;return Math.abs(a)<i?"center":a<0?"left":"right"}function i5(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function r5(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let l=i5(e.alignment);return e.containedIn?n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${e.containedIn.label}\``):n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function U3(e,t,n){let l=[];e.above&&l.push(`below \`${e.above.label}\``),e.below&&l.push(`above \`${e.below.label}\``),e.left&&l.push(`right of \`${e.left.label}\``),e.right&&l.push(`left of \`${e.right.label}\``),e.containedIn&&l.push(`inside \`${e.containedIn.label}\``),l.push(i5(e.alignment)),e.outOfBounds?.viewport&&l.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),e.outOfBounds?.container&&l.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let o=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${o}: ${l.join(", ")}`}function Hp(e){if(e.length<2)return[];let t=[],n=new Set;for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.y-e[a].rect.y)<Bp&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,m)=>s.rect.x-m.rect.x);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.x-(a[s].rect.x+a[s].rect.width)));let r=Math.round(a.reduce((s,m)=>s+m.rect.y,0)/a.length);t.push({labels:a.map(s=>s.label),type:"row",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,m)=>s+m,0)/i.length):0}),o.forEach(s=>n.add(s))}}for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.x-e[a].rect.x)<Bp&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,m)=>s.rect.y-m.rect.y);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.y-(a[s].rect.y+a[s].rect.height)));let r=Math.round(a.reduce((s,m)=>s+m.rect.x,0)/a.length);t.push({labels:a.map(s=>s.label),type:"column",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,m)=>s+m,0)/i.length):0}),o.forEach(s=>n.add(s))}}return t}function Y3(e){if(e.length<2)return[];let t=Hp(e.map(i=>({label:i.label,rect:i.originalRect}))),n=Hp(e.map(i=>({label:i.label,rect:i.currentRect}))),l=[],o=new Set;for(let i of t){let r=new Set(i.labels),s=null,m=0;for(let _ of n){let x=_.labels.filter(d=>r.has(d)).length;x>=2&&x>m&&(s=_,m=x)}if(s){let _=s.labels.filter(d=>r.has(d)),x=_.join(", ");if(s.type!==i.type){let d=i.type==="row"?"y":"x",b=s.type==="row"?"y":"x";l.push(`**${x}**: ${i.type} (${d}\u2248${i.sharedEdge}, ${i.avgGap}px gaps) \u2192 ${s.type} (${b}\u2248${s.sharedEdge}, ${s.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-s.sharedEdge)>20||Math.abs(i.avgGap-s.avgGap)>5){let d=i.type==="row"?"y":"x",b=Math.abs(i.sharedEdge-s.sharedEdge)>20?` ${d}: ${i.sharedEdge} \u2192 ${s.sharedEdge}`:"",C=Math.abs(i.avgGap-s.avgGap)>5?` gaps: ${i.avgGap}px \u2192 ${s.avgGap}px`:"";l.push(`**${x}**: ${i.type} shifted \u2014${b}${C}`)}_.forEach(d=>o.add(d))}else{let _=i.labels.join(", "),x=i.type==="row"?"y":"x";l.push(`**${_}**: ${i.type} (${x}\u2248${i.sharedEdge}) dissolved`),i.labels.forEach(d=>o.add(d))}}for(let i of n){if(i.labels.every(m=>o.has(m))||i.labels.filter(m=>!o.has(m)).length<2)continue;if(!t.some(m=>m.labels.filter(x=>i.labels.includes(x)).length>=2)){let m=i.type==="row"?"y":"x";l.push(`**${i.labels.join(", ")}**: new ${i.type} (${m}\u2248${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach(_=>o.add(_))}}let a=e.filter(i=>!o.has(i.label));if(a.length>=2){let i={};for(let r of a){let s=Math.round(r.currentRect.x/5)*5;(i[s]??(i[s]=[])).push(r.label)}for(let[r,s]of Object.entries(i))s.length>=2&&l.push(`**${s.join(", ")}**: shared left edge at x\u2248${r}`)}return l}function s5(e){if(typeof document>"u")return{viewport:e,contentArea:null};let t=[],n=new Set,l=r=>{n.has(r)||r instanceof HTMLElement&&(r.hasAttribute("data-feedback-toolbar")||v0.has(r.tagName.toLowerCase())||(n.add(r),t.push(r)))},o=document.querySelector("main");o&&l(o);let a=document.querySelector("[role='main']");a&&l(a);for(let r of Array.from(document.body.children))if(l(r),r.children){for(let s of Array.from(r.children))if(l(s),s.children)for(let m of Array.from(s.children))l(m)}let i=null;for(let r of t){let s=r.getBoundingClientRect();if(s.height<50)continue;let m=getComputedStyle(r);if(m.maxWidth&&m.maxWidth!=="none"&&m.maxWidth!=="0px"){(!i||s.width<i.rect.width)&&(i={el:r,rect:s});continue}!i&&s.width<e.width-20&&s.width>100&&(i={el:r,rect:s})}if(i){let{el:r,rect:s}=i;return{viewport:e,contentArea:{width:Math.round(s.width),left:Math.round(s.left),right:Math.round(s.right),centerX:Math.round(s.left+s.width/2),selector:Ia(r)}}}return{viewport:e,contentArea:null}}function j3(e){if(typeof document>"u")return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),l={parentDisplay:n.display,parentSelector:Ia(t.parentElement)};return n.display.includes("flex")&&(l.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(l.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(l.gap=n.gap),l}function c5(e,t){let n=t.contentArea,l=n?n.width:t.viewport.width,o=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-o),r=Math.round(o+l-(e.x+e.width)),s=(e.width/l*100).toFixed(1),m=e.x+e.width/2,_=Math.abs(m-a)<20,x=e.width/l>.95,d=[];return x?d.push("`width: 100%` of container"):d.push(`left \`${i}px\` in container, right \`${r}px\`, width \`${s}%\` (\`${Math.round(e.width)}px\`)`),_&&!x&&d.push("centered \u2014 `margin-inline: auto`"),d.join(" \u2014 ")}function u5(e){let{viewport:t,contentArea:n}=e,l=`### Reference Frame
`;if(l+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let o=n;l+=`- Content area: \`${o.width}px\` wide, left edge at \`x=${o.left}\`, right at \`x=${o.right}\` (\`${o.selector}\`)
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${o.left}\` \u2192 use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${o.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${o.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else l+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return l+=`
`,l}function I3(e){let t=j3(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function $p(e,t,n,l="standard"){if(e.length===0)return"";let o=[...e].sort((T,h)=>Math.abs(T.y-h.y)<20?T.x-h.x:T.y-h.y),a="";if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,l==="compact")return a+=`### Components
`,o.forEach((T,h)=>{let y=Nl[T.type]?.label||T.type;a+=`${h+1}. **${y}** \u2014 \`${Math.round(T.width)}\xD7${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}),a;let i=s5(t);a+=u5(i),a+=`### Components
`,o.forEach((T,h)=>{let y=Nl[T.type]?.label||T.type,v={x:T.x,y:T.y,width:T.width,height:T.height};a+=`${h+1}. **${y}** \u2014 \`${Math.round(T.width)}\xD7${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`;let M=w0(v),ne=r5(M,{includeLeftRight:l==="detailed"||l==="forensic"});for(let Z of ne)a+=`   - ${Z}
`;let B=c5(v,i);B&&(a+=`   - CSS: ${B}
`)}),a+=`
### Layout Analysis
`;let r=[];for(let T of o){let h=r.find(y=>Math.abs(y.y-T.y)<30);h?h.items.push(T):r.push({y:T.y,items:[T]})}if(r.sort((T,h)=>T.y-h.y),r.forEach((T,h)=>{T.items.sort((v,M)=>v.x-M.x);let y=T.items.map(v=>Nl[v.type]?.label||v.type);if(T.items.length===1){let M=T.items[0].width>t.width*.8;a+=`- Row ${h+1} (y\u2248${Math.round(T.y)}): ${y[0]}${M?" \u2014 full width":""}
`}else a+=`- Row ${h+1} (y\u2248${Math.round(T.y)}): ${y.join(" | ")} \u2014 ${T.items.length} items side by side
`}),l==="detailed"||l==="forensic"){a+=`
### Spacing & Gaps
`;for(let T=0;T<o.length-1;T++){let h=o[T],y=o[T+1],v=Nl[h.type]?.label||h.type,M=Nl[y.type]?.label||y.type,I=Math.round(y.y-(h.y+h.height)),ne=Math.round(y.x-(h.x+h.width));Math.abs(h.y-y.y)<30?a+=`- ${v} \u2192 ${M}: \`${ne}px\` horizontal gap
`:a+=`- ${v} \u2192 ${M}: \`${I}px\` vertical gap
`}if(l==="forensic"&&o.length>2){a+=`
### All Pairwise Gaps
`;for(let T=0;T<o.length;T++)for(let h=T+1;h<o.length;h++){let y=o[T],v=o[h],M=Nl[y.type]?.label||y.type,I=Nl[v.type]?.label||v.type,ne=Math.round(v.y-(y.y+y.height)),B=Math.round(v.x-(y.x+y.width));a+=`- ${M} \u2194 ${I}: h=\`${B}px\` v=\`${ne}px\`
`}}l==="forensic"&&(a+=`
### Z-Order (placement order)
`,e.forEach((T,h)=>{let y=Nl[T.type]?.label||T.type;a+=`${h}. ${y} at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`
`}))}a+=`
### Suggested Implementation
`;let s=o.some(T=>T.type==="navigation"),m=o.some(T=>T.type==="hero"),_=o.some(T=>T.type==="sidebar"),x=o.some(T=>T.type==="footer"),d=o.filter(T=>T.type==="card"),b=o.filter(T=>T.type==="form"),C=o.filter(T=>T.type==="table"),D=o.filter(T=>T.type==="modal");if(s&&(a+=`- Top navigation bar with logo + nav links + CTA
`),m&&(a+=`- Hero section with heading, subtext, and call-to-action
`),_&&(a+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),d.length>1?a+=`- ${d.length}-column card grid \u2014 use CSS Grid or Flexbox
`:d.length===1&&(a+=`- Card component with image + content area
`),b.length>0&&(a+=`- ${b.length} form${b.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),C.length>0&&(a+=`- Data table \u2014 consider sortable columns and pagination
`),D.length>0&&(a+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),x&&(a+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(a+=`
### CSS Suggestions
`,_){let T=o.find(h=>h.type==="sidebar");a+=`- \`display: grid; grid-template-columns: ${Math.round(T.width)}px 1fr;\`
`}if(d.length>1){let T=Math.round(d[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${d.length}, ${T}px); gap: 16px;\`
`}s&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Up(e,t="standard",n){let{sections:l}=e,o=[];for(let _ of l){let x=_.originalRect,d=_.currentRect,b=Math.abs(x.x-d.x)>1||Math.abs(x.y-d.y)>1,C=Math.abs(x.width-d.width)>1||Math.abs(x.height-d.height)>1;if(!b&&!C){t==="forensic"&&o.push({section:_,posMoved:!1,sizeChanged:!1});continue}o.push({section:_,posMoved:b,sizeChanged:C})}if(o.length===0||t!=="forensic"&&o.every(_=>!_.posMoved&&!_.sizeChanged))return"";let a=`## Suggested Layout Changes

`,i=n?n.width:typeof window<"u"?window.innerWidth:0,r=n?n.height:typeof window<"u"?window.innerHeight:0,s=s5({width:i,height:r});t!=="compact"&&(a+=u5(s)),t==="forensic"&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${l.length}

`);let m=_=>l.map(x=>({label:x.label,selector:x.selector,rect:_==="original"?x.originalRect:x.currentRect}));a+=`**Changes:**
`;for(let{section:_,posMoved:x,sizeChanged:d}of o){let b=_.originalRect,C=_.currentRect;if(!x&&!d){a+=`- ${_.label} \u2014 unchanged at (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}\xD7${Math.round(C.height)}px
`;continue}if(t==="compact"){x&&d?a+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)}) ${Math.round(C.width)}\xD7${Math.round(C.height)}px
`:x?a+=`- Suggested: move **${_.label}** to (${Math.round(C.x)}, ${Math.round(C.y)})
`:a+=`- Suggested: resize **${_.label}** to ${Math.round(C.width)}\xD7${Math.round(C.height)}px
`;continue}if(x&&d?a+=`- Suggested: move and resize **${_.label}**
`:x?a+=`- Suggested: move **${_.label}**
`:a+=`- Suggested: resize **${_.label}** from ${Math.round(b.width)}\xD7${Math.round(b.height)}px to ${Math.round(C.width)}\xD7${Math.round(C.height)}px
`,x){let T=w0(b,m("original")),h=w0(C,m("current")),y=d?{width:b.width,height:b.height}:void 0;a+=`  - Currently ${U3(T,{x:b.x,y:b.y},y)}
`;let v=d?{width:C.width,height:C.height}:void 0,M=`at (${Math.round(C.x)}, ${Math.round(C.y)})`,I=v?`, ${Math.round(v.width)}\xD7${Math.round(v.height)}px`:"",B=r5(h,{includeLeftRight:t==="detailed"||t==="forensic"});if(B.length>0){a+=`  - Suggested position ${M}${I}: ${B[0]}
`;for(let fe=1;fe<B.length;fe++)a+=`    ${B[fe]}
`}else a+=`  - Suggested position ${M}${I}
`;let Z=c5(C,s);Z&&(a+=`  - CSS: ${Z}
`)}let D=I3(_.selector);if(D&&(a+=`  - ${D}
`),a+=`  - Selector: \`${_.selector}\`
`,t==="detailed"||t==="forensic"){let T=_.className?`${_.tagName}.${_.className.split(" ")[0]}`:_.tagName;T!==_.selector&&(a+=`  - Element: \`${T}\`
`),_.role&&(a+=`  - Role: \`${_.role}\`
`),t==="forensic"&&_.textSnippet&&(a+=`  - Text: "${_.textSnippet}"
`)}t==="forensic"&&(a+=`  - Original rect: \`{ x: ${Math.round(b.x)}, y: ${Math.round(b.y)}, w: ${Math.round(b.width)}, h: ${Math.round(b.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`)}if(t!=="compact"){let _=o.filter(d=>d.posMoved).map(d=>({label:d.section.label,originalRect:d.section.originalRect,currentRect:d.section.currentRect})),x=Y3(_);if(x.length>0){a+=`
### Layout Summary
`;for(let d of x)a+=`- ${d}
`}}if(t!=="compact"&&l.length>1){a+=`
### All Sections (current positions)
`;let _=[...l].sort((x,d)=>Math.abs(x.currentRect.y-d.currentRect.y)<20?x.currentRect.x-d.currentRect.x:x.currentRect.y-d.currentRect.y);for(let x of _){let d=x.currentRect,b=Math.abs(d.x-x.originalRect.x)>1||Math.abs(d.y-x.originalRect.y)>1||Math.abs(d.width-x.originalRect.width)>1||Math.abs(d.height-x.originalRect.height)>1;a+=`- ${x.label}: \`${Math.round(d.width)}\xD7${Math.round(d.height)}px\` at \`(${Math.round(d.x)}, ${Math.round(d.y)})\`${b?" \u2190 suggested":""}
`}}return a}function Uu(e){return`${S0}${e}`}function c0(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(Uu(e));if(!t)return[];let n=JSON.parse(t),l=Date.now()-d5*24*60*60*1e3;return n.filter(o=>!o.timestamp||o.timestamp>l)}catch{return[]}}function _5(e,t){if(!(typeof window>"u"))try{localStorage.setItem(Uu(e),JSON.stringify(t))}catch{}}function X3(){let e=new Map;if(typeof window>"u")return e;try{let t=Date.now()-d5*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let l=localStorage.key(n);if(l?.startsWith(S0)){let o=l.slice(S0.length),a=localStorage.getItem(l);if(a){let r=JSON.parse(a).filter(s=>!s.timestamp||s.timestamp>t);r.length>0&&e.set(o,r)}}}}catch{}return e}function ps(e,t,n){let l=t.map(o=>({...o,_syncedTo:n}));_5(e,l)}function q3(e){if(typeof window>"u")return[];try{let t=localStorage.getItem(`${M0}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function Q3(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${M0}${e}`,JSON.stringify(t))}catch{}}function V3(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${M0}${e}`)}catch{}}function G3(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${E0}${e}`);return t?JSON.parse(t):null}catch{return null}}function W3(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${E0}${e}`,JSON.stringify(t))}catch{}}function Z3(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${E0}${e}`)}catch{}}function K3(e){if(typeof window>"u")return null;try{let t=localStorage.getItem(`${T0}${e}`);return t?JSON.parse(t):null}catch{return null}}function Yp(e,t){if(!(typeof window>"u"))try{localStorage.setItem(`${T0}${e}`,JSON.stringify(t))}catch{}}function Au(e){if(!(typeof window>"u"))try{localStorage.removeItem(`${T0}${e}`)}catch{}}function N0(e){return`${f5}${e}`}function F3(e){if(typeof window>"u")return null;try{return localStorage.getItem(N0(e))}catch{return null}}function u0(e,t){if(!(typeof window>"u"))try{localStorage.setItem(N0(e),t)}catch{}}function J3(e){if(!(typeof window>"u"))try{localStorage.removeItem(N0(e))}catch{}}function P3(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(C0)==="1"}catch{return!1}}function e6(e){if(!(typeof window>"u"))try{e?sessionStorage.setItem(C0,"1"):sessionStorage.removeItem(C0)}catch{}}async function d0(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function jp(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function Ki(e,t,n){let l=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function Ip(e,t,n){let l=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function la(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}function n6(e){let t=e?.mode??"filtered",n=Xp;if(e?.skipExact){let l=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Xp,...l])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...qp,...e.skipPatterns]:qp,userPatterns:e?.userPatterns??t6,filter:e?.filter}}function l6(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function o6(e,t=10){let n=new Set,l=e,o=0;for(;l&&o<t;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(a=>{if(a.length>1){let i=a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),l=l.parentElement,o++;return n}function a6(e,t){let n=l6(e);for(let l of t){if(l===n)return!0;let o=n.split("-").filter(i=>i.length>2),a=l.split("-").filter(i=>i.length>2);for(let i of o)for(let r of a)if(i===r||i.includes(r)||r.includes(i))return!0}return!1}function i6(e,t,n,l){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e))?!1:!!(l&&a6(e,l)||n.userPatterns.some(o=>o.test(e)));default:return!0}}function _0(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function s6(){if(Fi!==null)return Fi;if(typeof document>"u")return!1;if(document.body&&_0(document.body))return Fi=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&_0(n))return Fi=!0,!0}if(document.body){for(let t of document.body.children)if(_0(t))return Fi=!0,!0}return Fi=!1,!1}function c6(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function u6(e){let t=c6(e);return t?e[t]:null}function Ha(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function d6(e){let{tag:t,type:n,elementType:l}=e;if(t===it.HostComponent||t===it.HostText||t===it.HostHoistable||t===it.HostSingleton||t===it.Fragment||t===it.Mode||t===it.Profiler||t===it.DehydratedFragment||t===it.HostRoot||t===it.HostPortal||t===it.ScopeComponent||t===it.OffscreenComponent||t===it.LegacyHiddenComponent||t===it.CacheComponent||t===it.TracingMarkerComponent||t===it.Throw||t===it.ViewTransitionComponent||t===it.ActivityComponent)return null;if(t===it.ForwardRef){let o=l;if(o?.render){let a=Ha(o.render);if(a)return a}return o?.displayName?o.displayName:Ha(n)}if(t===it.MemoComponent||t===it.SimpleMemoComponent){let o=l;if(o?.type){let a=Ha(o.type);if(a)return a}return o?.displayName?o.displayName:Ha(n)}if(t===it.ContextProvider){let o=n;return o?._context?.displayName?`${o._context.displayName}.Provider`:null}if(t===it.ContextConsumer){let o=n;return o?.displayName?`${o.displayName}.Consumer`:null}if(t===it.LazyComponent){let o=l;return o?._status===1&&o._result?Ha(o._result):null}return t===it.SuspenseComponent||t===it.SuspenseListComponent?null:t===it.IncompleteClassComponent||t===it.IncompleteFunctionComponent||t===it.FunctionComponent||t===it.ClassComponent||t===it.IndeterminateComponent?Ha(n):null}function _6(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function f6(e,t){let n=n6(t),l=n.mode==="all";if(l){let s=bs.map.get(e);if(s!==void 0)return s}if(!s6()){let s={path:null,components:[]};return l&&bs.map.set(e,s),s}let o=n.mode==="smart"?o6(e):void 0,a=[];try{let s=u6(e),m=0;for(;s&&m<n.maxDepth&&a.length<n.maxComponents;){let _=d6(s);_&&!_6(_)&&i6(_,m,n,o)&&a.push(_),s=s.return,m++}}catch{let s={path:null,components:[]};return l&&bs.map.set(e,s),s}if(a.length===0){let s={path:null,components:[]};return l&&bs.map.set(e,s),s}let r={path:a.slice().reverse().map(s=>`<${s}>`).join(" "),components:a};return l&&bs.map.set(e,r),r}function h6(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(a=>a.startsWith("__reactFiber$"));if(n)return e[n]||null;let l=t.find(a=>a.startsWith("__reactInternalInstance$"));if(l)return e[l]||null;let o=t.find(a=>{if(!a.startsWith("__react"))return!1;let i=e[a];return i&&typeof i=="object"&&"_debugSource"in i});return o&&e[o]||null}function Ss(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function m6(e,t=50){let n=e,l=0;for(;n&&l<t;){if(n._debugSource)return{source:n._debugSource,componentName:Ss(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:Ss(n._debugOwner)};n=n.return,l++}return null}function g6(e){let t=e,n=0,l=50;for(;t&&n<l;){let o=t,a=["_debugSource","__source","_source","debugSource"];for(let i of a){let r=o[i];if(r&&typeof r=="object"&&"fileName"in r)return{source:r,componentName:Ss(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){let r=i.__source;if(r.fileName&&r.lineNumber)return{source:{fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber},componentName:Ss(t)}}}t=t.return,n++}return null}function y6(e){let t=e.tag,n=e.type,l=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&n.prototype?.isReactComponent)return null;if((t===xs.FunctionComponent||t===xs.IndeterminateComponent)&&typeof n=="function")return n;if(t===xs.ForwardRef&&l){let o=l.render;if(typeof o=="function")return o}if((t===xs.MemoComponent||t===xs.SimpleMemoComponent)&&l){let o=l.type;if(typeof o=="function")return o}return typeof n=="function"?n:null}function p6(){let e=h5.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:l=>{t.H=l}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let l=n.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:o=>{l.current=o}}}return null}function b6(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,o=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let a of t){let i=a.trim();if(!i||n.some(s=>s.test(i)))continue;let r=l.exec(i)||o.exec(i);if(r)return{fileName:r[1],line:parseInt(r[2],10),column:parseInt(r[3],10)}}return null}function x6(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function v6(e){let t=y6(e);if(!t)return null;if(Ru.has(t))return Ru.get(t);let n=p6();if(!n)return Ru.set(t,null),null;let l=n.get(),o=null;try{let a=new Proxy({},{get(){throw new Error("probe")}});n.set(a);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let r=b6(i.stack);r&&(o={fileName:x6(r.fileName),lineNumber:r.line,columnNumber:r.column,componentName:Ss(e)||void 0})}}}finally{n.set(l)}return Ru.set(t,o),o}function w6(e,t=15){let n=e,l=0;for(;n&&l<t;){let o=v6(n);if(o)return o;n=n.return,l++}return null}function k0(e){let t=h6(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=m6(t);if(n||(n=g6(t)),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let l=w6(t);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function S6(e,t="path"){let{fileName:n,lineNumber:l,columnNumber:o}=e,a=`${n}:${l}`;return o!==void 0&&(a+=`:${o}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${a}`:a}function C6(e,t=10){let n=e,l=0;for(;n&&l<t;){let o=k0(n);if(o.found)return o;n=n.parentElement,l++}return k0(e)}function Qp(e,t,n="standard"){if(e.length===0)return"";let l=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",o=`## Page Feedback: ${t}
`;return n==="forensic"?(o+=`
**Environment:**
`,o+=`- Viewport: ${l}
`,typeof window<"u"&&(o+=`- URL: ${window.location.href}
`,o+=`- User Agent: ${navigator.userAgent}
`,o+=`- Timestamp: ${new Date().toISOString()}
`,o+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),o+=`
---
`):n!=="compact"&&(o+=`**Viewport:** ${l}
`),o+=`
`,e.forEach((a,i)=>{n==="compact"?(o+=`${i+1}. **${a.element}**${a.sourceFile?` (${a.sourceFile})`:""}: ${a.comment}`,a.selectedText&&(o+=` (re: "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}")`),o+=`
`):n==="forensic"?(o+=`### ${i+1}. ${a.element}
`,a.isMultiSelect&&a.fullPath&&(o+=`*Forensic data shown for first element of selection*
`),a.fullPath&&(o+=`**Full DOM Path:** ${a.fullPath}
`),a.cssClasses&&(o+=`**CSS Classes:** ${a.cssClasses}
`),a.boundingBox&&(o+=`**Position:** x:${Math.round(a.boundingBox.x)}, y:${Math.round(a.boundingBox.y)} (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`),o+=`**Annotation at:** ${a.x.toFixed(1)}% from left, ${Math.round(a.y)}px from top
`,a.selectedText&&(o+=`**Selected text:** "${a.selectedText}"
`),a.nearbyText&&!a.selectedText&&(o+=`**Context:** ${a.nearbyText.slice(0,100)}
`),a.computedStyles&&(o+=`**Computed Styles:** ${a.computedStyles}
`),a.accessibility&&(o+=`**Accessibility:** ${a.accessibility}
`),a.nearbyElements&&(o+=`**Nearby Elements:** ${a.nearbyElements}
`),a.sourceFile&&(o+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(o+=`**React:** ${a.reactComponents}
`),o+=`**Feedback:** ${a.comment}

`):(o+=`### ${i+1}. ${a.element}
`,o+=`**Location:** ${a.elementPath}
`,a.sourceFile&&(o+=`**Source:** ${a.sourceFile}
`),a.reactComponents&&(o+=`**React:** ${a.reactComponents}
`),n==="detailed"&&(a.cssClasses&&(o+=`**Classes:** ${a.cssClasses}
`),a.boundingBox&&(o+=`**Position:** ${Math.round(a.boundingBox.x)}px, ${Math.round(a.boundingBox.y)}px (${Math.round(a.boundingBox.width)}\xD7${Math.round(a.boundingBox.height)}px)
`)),a.selectedText&&(o+=`**Selected text:** "${a.selectedText}"
`),n==="detailed"&&a.nearbyText&&!a.selectedText&&(o+=`**Context:** ${a.nearbyText.slice(0,100)}
`),o+=`**Feedback:** ${a.comment}

`)}),o.trim()}function Vp({annotation:e,globalIndex:t,layerIndex:n,layerSize:l,isExiting:o,isClearing:a,isAnimated:i,isHovered:r,isDeleting:s,isEditingAny:m,renumberFrom:_,markerClickBehavior:x,tooltipStyle:d,onHoverEnter:b,onHoverLeave:C,onClick:D,onContextMenu:T}){let h=(r||s)&&!m,y=h&&x==="delete",v=e.isMultiSelect,M=v?"var(--agentation-color-green)":"var(--agentation-color-accent)",I=o?Vt.exit:a?Vt.clearing:i?"":Vt.enter,ne=o?`${(l-1-n)*20}ms`:`${n*20}ms`;return(0,Jn.jsxs)("div",{className:`${Vt.marker} ${v?Vt.multiSelect:""} ${I} ${y?Vt.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:y?void 0:M,animationDelay:ne},onMouseEnter:()=>b(e),onMouseLeave:C,onClick:B=>{B.stopPropagation(),o||D(e)},onContextMenu:T?B=>{x==="delete"&&(B.preventDefault(),B.stopPropagation(),o||T(e))}:void 0,children:[h?y?(0,Jn.jsx)(Jp,{size:v?18:16}):(0,Jn.jsx)(jv,{size:16}):(0,Jn.jsx)("span",{className:_!==null&&t>=_?Vt.renumber:void 0,children:t+1}),r&&!m&&(0,Jn.jsxs)("div",{className:`${Vt.markerTooltip} ${Vt.enter}`,style:d,children:[(0,Jn.jsxs)("span",{className:Vt.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),(0,Jn.jsx)("span",{className:Vt.markerNote,children:e.comment})]})]})}function N6({x:e,y:t,isMultiSelect:n,isExiting:l}){return(0,Jn.jsx)("div",{className:`${Vt.marker} ${Vt.pending} ${n?Vt.multiSelect:""} ${l?Vt.exit:Vt.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:(0,Jn.jsx)(Nv,{size:12})})}function Gp({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,Jn.jsx)("div",{className:`${Vt.marker} ${t?Vt.fixed:""} ${Vt.hovered} ${n?Vt.multiSelect:""} ${Vt.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,Jn.jsx)(Jp,{size:n?12:10})})}function U6({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:l,isDevMode:o,connectionStatus:a,endpoint:i,isVisible:r,toolbarNearBottom:s,settingsPage:m,onSettingsPageChange:_,onHideToolbar:x}){return(0,F.jsx)("div",{className:`${te.settingsPanel} ${r?te.enter:te.exit}`,style:s?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:(0,F.jsxs)("div",{className:te.settingsPanelContainer,children:[(0,F.jsxs)("div",{className:`${te.settingsPage} ${m==="automations"?te.slideLeft:""}`,children:[(0,F.jsxs)("div",{className:te.settingsHeader,children:[(0,F.jsx)("a",{className:te.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:(0,F.jsx)("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),(0,F.jsxs)("p",{className:te.settingsVersion,children:["v","3.0.2"]}),(0,F.jsx)("button",{className:te.themeToggle,onClick:l,title:n?"Switch to light mode":"Switch to dark mode",children:(0,F.jsx)("span",{className:te.themeIconWrapper,children:(0,F.jsx)("span",{className:te.themeIcon,children:n?(0,F.jsx)(Uv,{size:20}):(0,F.jsx)(Yv,{size:20})},n?"sun":"moon")})})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("div",{className:te.settingsSection,children:[(0,F.jsxs)("div",{className:te.settingsRow,children:[(0,F.jsxs)("div",{className:te.settingsLabel,children:["Output Detail",(0,F.jsx)(Ya,{content:"Controls how much detail is included in the copied output"})]}),(0,F.jsxs)("button",{className:te.cycleButton,onClick:()=>{let b=(vs.findIndex(C=>C.value===e.outputDetail)+1)%vs.length;t({outputDetail:vs[b].value})},children:[(0,F.jsx)("span",{className:te.cycleButtonText,children:vs.find(d=>d.value===e.outputDetail)?.label},e.outputDetail),(0,F.jsx)("span",{className:te.cycleDots,children:vs.map(d=>(0,F.jsx)("span",{className:`${te.cycleDot} ${e.outputDetail===d.value?te.active:""}`},d.value))})]})]}),(0,F.jsxs)("div",{className:`${te.settingsRow} ${te.settingsRowMarginTop} ${o?"":te.settingsRowDisabled}`,children:[(0,F.jsxs)("div",{className:te.settingsLabel,children:["React Components",(0,F.jsx)(Ya,{content:o?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,F.jsx)(h0,{checked:o&&e.reactEnabled,onChange:d=>t({reactEnabled:d.target.checked}),disabled:!o})]}),(0,F.jsxs)("div",{className:`${te.settingsRow} ${te.settingsRowMarginTop}`,children:[(0,F.jsxs)("div",{className:te.settingsLabel,children:["Hide Until Restart",(0,F.jsx)(Ya,{content:"Hides the toolbar until you open a new tab"})]}),(0,F.jsx)(h0,{checked:!1,onChange:d=>{d.target.checked&&x()}})]})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("div",{className:te.settingsSection,children:[(0,F.jsx)("div",{className:`${te.settingsLabel} ${te.settingsLabelMarker}`,children:"Marker Color"}),(0,F.jsx)("div",{className:te.colorOptions,children:ws.map(d=>(0,F.jsx)("button",{className:`${te.colorOption} ${e.annotationColorId===d.id?te.selected:""}`,style:{"--swatch":d.srgb,"--swatch-p3":d.p3},onClick:()=>t({annotationColorId:d.id}),title:d.label,type:"button"},d.id))})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("div",{className:te.settingsSection,children:[(0,F.jsx)(Zp,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:d=>t({autoClearAfterCopy:d.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,F.jsx)(Zp,{className:te.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:d=>t({blockInteractions:d.target.checked})})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("button",{className:te.settingsNavLink,onClick:()=>_("automations"),children:[(0,F.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,F.jsxs)("span",{className:te.settingsNavLinkRight,children:[i&&a!=="disconnected"&&(0,F.jsx)("span",{className:`${te.mcpNavIndicator} ${te[a]}`}),(0,F.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,F.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,F.jsxs)("div",{className:`${te.settingsPage} ${te.automationsPage} ${m==="automations"?te.slideIn:""}`,children:[(0,F.jsxs)("button",{className:te.settingsBackButton,onClick:()=>_("main"),children:[(0,F.jsx)(Xv,{size:16}),(0,F.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("div",{className:te.settingsSection,children:[(0,F.jsxs)("div",{className:te.settingsRow,children:[(0,F.jsxs)("span",{className:te.automationHeader,children:["MCP Connection",(0,F.jsx)(Ya,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),i&&(0,F.jsx)("div",{className:`${te.mcpStatusDot} ${te[a]}`,title:a==="connected"?"Connected":a==="connecting"?"Connecting...":"Disconnected"})]}),(0,F.jsxs)("p",{className:te.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,F.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:te.learnMoreLink,children:"Learn more"})]})]}),(0,F.jsx)("div",{className:te.divider}),(0,F.jsxs)("div",{className:`${te.settingsSection} ${te.settingsSectionGrow}`,children:[(0,F.jsxs)("div",{className:te.settingsRow,children:[(0,F.jsxs)("span",{className:te.automationHeader,children:["Webhooks",(0,F.jsx)(Ya,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,F.jsxs)("div",{className:te.autoSendContainer,children:[(0,F.jsx)("label",{htmlFor:"agentation-auto-send",className:`${te.autoSendLabel} ${e.webhooksEnabled?te.active:""} ${e.webhookUrl?"":te.disabled}`,children:"Auto-Send"}),(0,F.jsx)(h0,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:d=>t({webhooksEnabled:d.target.checked}),disabled:!e.webhookUrl})]})]}),(0,F.jsx)("p",{className:te.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,F.jsx)("textarea",{className:te.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:d=>d.stopPropagation(),onChange:d=>t({webhookUrl:d.target.value})})]})]})]})})}function m0(e,t="filtered"){let{name:n,path:l}=Pi(e);if(t==="off")return{name:n,elementName:n,path:l,reactComponents:null};let o=f6(e,{mode:t});return{name:o.path?`${o.path} ${n}`:n,elementName:n,path:l,reactComponents:o.path}}function $a(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let l=n.shadowRoot.elementFromPoint(e,t);if(!l||l===n)break;n=l}return n}function y0(e){let t=e;for(;t&&t!==document.body;){let l=window.getComputedStyle(t).position;if(l==="fixed"||l==="sticky")return!0;t=t.parentElement}return!1}function Ua(e){return e.status!=="resolved"&&e.status!=="dismissed"}function Bu(e){let t=k0(e),n=t.found?t:C6(e);if(n.found&&n.source)return S6(n.source,"path")}function g5({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:l,onAnnotationDelete:o,onAnnotationUpdate:a,onAnnotationsClear:i,onCopy:r,onSubmit:s,copyToClipboard:m=!0,endpoint:_,sessionId:x,onSessionCreated:d,webhookUrl:b,className:C}={}){let[D,T]=(0,N.useState)(!1),[h,y]=(0,N.useState)([]),[v,M]=(0,N.useState)(!0),[I,ne]=(0,N.useState)(()=>P3()),[B,Z]=(0,N.useState)(!1),fe=(0,N.useRef)(null);(0,N.useEffect)(()=>{let f=w=>{let S=fe.current;S&&S.contains(w.target)&&w.stopPropagation()},p=["mousedown","click","pointerdown"];return p.forEach(w=>document.body.addEventListener(w,f)),()=>{p.forEach(w=>document.body.removeEventListener(w,f))}},[]);let[K,he]=(0,N.useState)(!1),[tt,gt]=(0,N.useState)(!1),[Re,qe]=(0,N.useState)(null),[Te,Pe]=(0,N.useState)({x:0,y:0}),[V,ge]=(0,N.useState)(null),[Ze,$t]=(0,N.useState)(!1),[Dn,vn]=(0,N.useState)("idle"),[vo,Pn]=(0,N.useState)(!1),[wo,ml]=(0,N.useState)(!1),[eo,So]=(0,N.useState)(null),[oa,Yn]=(0,N.useState)(null),[gl,zn]=(0,N.useState)([]),[Dl,zl]=(0,N.useState)(null),[Xa,yl]=(0,N.useState)(null),[Le,q]=(0,N.useState)(null),[ue,pe]=(0,N.useState)(null),[Oe,be]=(0,N.useState)([]),[nt,rt]=(0,N.useState)(0),[Ke,Ye]=(0,N.useState)(!1),[me,E]=(0,N.useState)(!1),[z,H]=(0,N.useState)(!1),[U,J]=(0,N.useState)(!1),[oe,X]=(0,N.useState)(!1),[ae,ke]=(0,N.useState)("main"),[Qe,lt]=(0,N.useState)(!1),[ie,st]=(0,N.useState)(!1),[Be,Ne]=(0,N.useState)(!1),[re,ut]=(0,N.useState)([]),[Ge,De]=(0,N.useState)(null),Fe=(0,N.useRef)(!1),[xe,Ct]=(0,N.useState)(!1),[ln,el]=(0,N.useState)(!1),[Ol,On]=(0,N.useState)(1),[to,ks]=(0,N.useState)("new-page"),[It,no]=(0,N.useState)(""),[Ms,v5]=(0,N.useState)(!1),[Ce,tl]=(0,N.useState)(null),Yu=(0,N.useRef)(!1),ju=(0,N.useRef)({rearrange:null,placements:[]}),aa=(0,N.useRef)({rearrange:null,placements:[]}),[w5,D0]=(0,N.useState)(0),[S5,C5]=(0,N.useState)(0),[k5,Iu]=(0,N.useState)(0),[M5,z0]=(0,N.useState)(0),lr=(0,N.useRef)(new Set),Es=(0,N.useRef)(new Set),pl=(0,N.useRef)(null),Ts=(0,N.useRef)(),O0=ie&&D&&!Be&&xe;(0,N.useEffect)(()=>{if(O0){el(!1);let f=Ji(()=>{el(!0)});return()=>cancelAnimationFrame(f)}else el(!1)},[O0]);let or=(0,N.useRef)(new Map),ar=(0,N.useRef)(new Map),ir=(0,N.useRef)(),[bl,Xu]=(0,N.useState)(!1),[nl,E5]=(0,N.useState)([]),T5=(0,N.useRef)(nl);T5.current=nl;let[A0,X6]=(0,N.useState)(null),qu=(0,N.useRef)(null),q6=(0,N.useRef)(!1),Q6=(0,N.useRef)([]),V6=(0,N.useRef)(0),G6=(0,N.useRef)(null),W6=(0,N.useRef)(null),Z6=(0,N.useRef)(1),[R0,L0]=(0,N.useState)(!1),qa=(0,N.useRef)(null),[Gt,Qa]=(0,N.useState)([]),Al=(0,N.useRef)({cmd:!1,shift:!1}),yn=()=>{lt(!0)},N5=()=>{lt(!1)},D5=()=>{R0||(qa.current=_e(()=>L0(!0),850))},z5=()=>{qa.current&&(clearTimeout(qa.current),qa.current=null),L0(!1),N5()};(0,N.useEffect)(()=>()=>{qa.current&&clearTimeout(qa.current)},[]);let[$e,O5]=(0,N.useState)(()=>{try{let f=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...g0,...f,annotationColorId:ws.find(p=>p.id===f.annotationColorId)?f.annotationColorId:g0.annotationColorId}}catch{return g0}}),[Rl,B0]=(0,N.useState)(!0),[H0,$0]=(0,N.useState)(!1),A5=()=>{fe.current?.classList.add(Y.disableTransitions),B0(f=>!f),Ji(()=>{fe.current?.classList.remove(Y.disableTransitions)})},U0=!1,ia=U0&&$e.reactEnabled?Y6[$e.outputDetail]:"off",[Jt,Qu]=(0,N.useState)(x??null),Y0=(0,N.useRef)(!1),[xl,ra]=(0,N.useState)(_?"connecting":"disconnected"),[At,Vu]=(0,N.useState)(null),[sa,j0]=(0,N.useState)(!1),[Va,I0]=(0,N.useState)(null),Gu=(0,N.useRef)(!1),[X0,rr]=(0,N.useState)(new Set),[q0,Ns]=(0,N.useState)(new Set),[sr,Ds]=(0,N.useState)(!1),[R5,Ga]=(0,N.useState)(!1),[lo,Q0]=(0,N.useState)(!1),Wa=(0,N.useRef)(null),Ll=(0,N.useRef)(null),cr=(0,N.useRef)(null),ur=(0,N.useRef)(null),zs=(0,N.useRef)(!1),V0=(0,N.useRef)(0),Os=(0,N.useRef)(null),G0=(0,N.useRef)(null),Wu=8,L5=50,W0=(0,N.useRef)(null),Z0=(0,N.useRef)(null),dr=(0,N.useRef)(null),ye=typeof window<"u"?window.location.pathname:"/";(0,N.useEffect)(()=>{if(U)X(!0);else{lt(!1),ke("main");let f=_e(()=>X(!1),0);return()=>clearTimeout(f)}},[U]);let Zu=D&&v&&!ie;(0,N.useEffect)(()=>{if(Zu){gt(!1),he(!0),rr(new Set);let f=_e(()=>{rr(p=>{let w=new Set(p);return h.forEach(S=>w.add(S.id)),w})},350);return()=>clearTimeout(f)}else if(K){gt(!0);let f=_e(()=>{he(!1),gt(!1)},250);return()=>clearTimeout(f)}},[Zu]),(0,N.useEffect)(()=>{E(!0),rt(window.scrollY);let f=c0(ye);y(f.filter(Ua)),Kp||($0(!0),Kp=!0,_e(()=>$0(!1),750));try{let p=localStorage.getItem("feedback-toolbar-theme");p!==null&&B0(p==="dark")}catch{}try{let p=localStorage.getItem("feedback-toolbar-position");if(p){let w=JSON.parse(p);typeof w.x=="number"&&typeof w.y=="number"&&Vu(w)}}catch{}},[ye]),(0,N.useEffect)(()=>{me&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify($e))},[$e,me]),(0,N.useEffect)(()=>{me&&localStorage.setItem("feedback-toolbar-theme",Rl?"dark":"light")},[Rl,me]);let K0=(0,N.useRef)(!1);(0,N.useEffect)(()=>{let f=K0.current;K0.current=sa,f&&!sa&&At&&me&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(At))},[sa,At,me]),(0,N.useEffect)(()=>{if(!_||!me||Y0.current)return;Y0.current=!0,ra("connecting"),(async()=>{try{let p=F3(ye),w=x||p,S=!1;if(w)try{let k=await jp(_,w);Qu(k.id),ra("connected"),u0(ye,k.id),S=!0;let R=c0(ye),Q=new Set(k.annotations.map(le=>le.id)),W=R.filter(le=>!Q.has(le.id));if(W.length>0){let se=`${typeof window<"u"?window.location.origin:""}${ye}`,Me=(await Promise.allSettled(W.map(de=>Ki(_,k.id,{...de,sessionId:k.id,url:se})))).map((de,ee)=>de.status==="fulfilled"?de.value:(console.warn("[Agentation] Failed to sync annotation:",de.reason),W[ee])),je=[...k.annotations,...Me];y(je.filter(Ua)),ps(ye,je.filter(Ua),k.id)}else y(k.annotations.filter(Ua)),ps(ye,k.annotations.filter(Ua),k.id)}catch(k){console.warn("[Agentation] Could not join session, creating new:",k),J3(ye)}if(!S){let k=typeof window<"u"?window.location.href:"/",R=await d0(_,k);Qu(R.id),ra("connected"),u0(ye,R.id),d?.(R.id);let Q=X3(),W=typeof window<"u"?window.location.origin:"",le=[];for(let[se,ce]of Q){let Me=ce.filter(ee=>!ee._syncedTo);if(Me.length===0)continue;let je=`${W}${se}`,de=se===ye;le.push((async()=>{try{let ee=de?R:await d0(_,je),Pt=(await Promise.allSettled(Me.map(dt=>Ki(_,ee.id,{...dt,sessionId:ee.id,url:je})))).map((dt,qt)=>dt.status==="fulfilled"?dt.value:(console.warn("[Agentation] Failed to sync annotation:",dt.reason),Me[qt])).filter(Ua);if(ps(se,Pt,ee.id),de){let dt=new Set(Me.map(qt=>qt.id));y(qt=>{let ve=qt.filter(ze=>!dt.has(ze.id));return[...Pt,...ve]})}}catch(ee){console.warn(`[Agentation] Failed to sync annotations for ${se}:`,ee)}})())}await Promise.allSettled(le)}}catch(p){ra("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",p)}})()},[_,x,me,d,ye]),(0,N.useEffect)(()=>{if(!_||!me)return;let f=async()=>{try{(await fetch(`${_}/health`)).ok?ra("connected"):ra("disconnected")}catch{ra("disconnected")}};f();let p=Vv(f,1e4);return()=>clearInterval(p)},[_,me]),(0,N.useEffect)(()=>{if(!_||!me||!Jt)return;let f=new EventSource(`${_}/sessions/${Jt}/events`),p=["resolved","dismissed"],w=S=>{try{let k=JSON.parse(S.data);if(p.includes(k.payload?.status)){let R=k.payload.id,Q=k.payload.kind;if(Q==="placement"){for(let[W,le]of or.current)if(le===R){or.current.delete(W),ut(se=>se.filter(ce=>ce.id!==W));break}}else if(Q==="rearrange"){for(let[W,le]of ar.current)if(le===R){ar.current.delete(W),tl(se=>{if(!se)return null;let ce=se.sections.filter(Me=>Me.id!==W);return ce.length===0?null:{...se,sections:ce}});break}}else Ns(W=>new Set(W).add(R)),_e(()=>{y(W=>W.filter(le=>le.id!==R)),Ns(W=>{let le=new Set(W);return le.delete(R),le})},150)}}catch{}};return f.addEventListener("annotation.updated",w),()=>{f.removeEventListener("annotation.updated",w),f.close()}},[_,me,Jt]),(0,N.useEffect)(()=>{if(!_||!me)return;let f=G0.current==="disconnected",p=xl==="connected";G0.current=xl,f&&p&&(async()=>{try{let S=c0(ye);if(S.length===0)return;let R=`${typeof window<"u"?window.location.origin:""}${ye}`,Q=Jt,W=[];if(Q)try{W=(await jp(_,Q)).annotations}catch{Q=null}Q||(Q=(await d0(_,R)).id,Qu(Q),u0(ye,Q));let le=new Set(W.map(ce=>ce.id)),se=S.filter(ce=>!le.has(ce.id));if(se.length>0){let Me=(await Promise.allSettled(se.map(ee=>Ki(_,Q,{...ee,sessionId:Q,url:R})))).map((ee,Xt)=>ee.status==="fulfilled"?ee.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",ee.reason),se[Xt])),de=[...W,...Me].filter(Ua);y(de),ps(ye,de,Q)}}catch(S){console.warn("[Agentation] Failed to sync on reconnect:",S)}})()},[xl,_,me,Jt,ye]);let B5=(0,N.useCallback)(()=>{B||(Z(!0),J(!1),T(!1),_e(()=>{e6(!0),ne(!0),Z(!1)},400))},[B]);(0,N.useEffect)(()=>{if(!n||!me||!e||e.length===0||h.length>0)return;let f=[];return f.push(_e(()=>{T(!0)},t-200)),e.forEach((p,w)=>{let S=t+w*300;f.push(_e(()=>{let k=document.querySelector(p.selector);if(!k)return;let R=k.getBoundingClientRect(),{name:Q,path:W}=Pi(k),le={id:`demo-${Date.now()}-${w}`,x:(R.left+R.width/2)/window.innerWidth*100,y:R.top+R.height/2+window.scrollY,comment:p.comment,element:Q,elementPath:W,timestamp:Date.now(),selectedText:p.selectedText,boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.width,height:R.height},nearbyText:gs(k),cssClasses:ys(k)};y(se=>[...se,le])},S))}),()=>{f.forEach(clearTimeout)}},[n,me,e,t]),(0,N.useEffect)(()=>{let f=()=>{rt(window.scrollY),Ye(!0),dr.current&&clearTimeout(dr.current),dr.current=_e(()=>{Ye(!1)},150)};return window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f),dr.current&&clearTimeout(dr.current)}},[]),(0,N.useEffect)(()=>{me&&h.length>0?Jt?ps(ye,h,Jt):_5(ye,h):me&&h.length===0&&localStorage.removeItem(Uu(ye))},[h,ye,me,Jt]),(0,N.useEffect)(()=>{if(me&&!Fe.current){Fe.current=!0;let f=q3(ye);f.length>0&&ut(f)}},[me,ye]),(0,N.useEffect)(()=>{me&&Fe.current&&!xe&&(re.length>0?Q3(ye,re):V3(ye))},[re,ye,me,xe]),(0,N.useEffect)(()=>{if(me&&!Yu.current){Yu.current=!0;let f=G3(ye);if(f){let p={...f,sections:f.sections.map(w=>({...w,currentRect:w.currentRect??{...w.originalRect}}))};tl(p)}}},[me,ye]),(0,N.useEffect)(()=>{me&&Yu.current&&!xe&&(Ce?W3(ye,Ce):Z3(ye))},[Ce,ye,me,xe]);let Ku=(0,N.useRef)(!1);(0,N.useEffect)(()=>{if(me&&!Ku.current){Ku.current=!0;let f=K3(ye);f&&(aa.current={rearrange:f.rearrange,placements:f.placements||[]},f.purpose&&no(f.purpose))}},[me,ye]),(0,N.useEffect)(()=>{if(!me||!Ku.current)return;let f=aa.current;xe?(Ce?.sections?.length??0)>0||re.length>0||It?Yp(ye,{rearrange:Ce,placements:re,purpose:It}):Au(ye):(f.rearrange?.sections?.length??0)>0||f.placements.length>0||It?Yp(ye,{rearrange:f.rearrange,placements:f.placements,purpose:It}):Au(ye)},[Ce,re,It,xe,ye,me]),(0,N.useEffect)(()=>{ie&&!Ce&&tl({sections:[],originalOrder:[],detectedAt:Date.now()})},[ie,Ce]),(0,N.useEffect)(()=>{if(!_||!Jt)return;let f=or.current,p=new Set(re.map(w=>w.id));for(let w of re){if(f.has(w.id))continue;f.set(w.id,"");let S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye;Ki(_,Jt,{id:w.id,x:w.x/window.innerWidth*100,y:w.y,comment:`Place ${w.type} at (${Math.round(w.x)}, ${Math.round(w.y)}), ${w.width}\xD7${w.height}px${w.text?` \u2014 "${w.text}"`:""}`,element:`[design:${w.type}]`,elementPath:"[placement]",timestamp:w.timestamp,url:S,intent:"change",severity:"important",kind:"placement",placement:{componentType:w.type,width:w.width,height:w.height,scrollY:w.scrollY,text:w.text}}).then(k=>{f.has(w.id)&&f.set(w.id,k.id)}).catch(k=>{console.warn("[Agentation] Failed to sync placement annotation:",k),f.delete(w.id)})}for(let[w,S]of f)p.has(w)||(f.delete(w),S&&la(_,S).catch(()=>{}))},[re,_,Jt,ye]),(0,N.useEffect)(()=>{if(!(!_||!Jt))return ir.current&&clearTimeout(ir.current),ir.current=_e(()=>{let f=ar.current;if(!Ce||Ce.sections.length===0){for(let[,S]of f)S&&la(_,S).catch(()=>{});f.clear();return}let p=new Set(Ce.sections.map(S=>S.id)),w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye;for(let S of Ce.sections){let k=S.originalRect,R=S.currentRect;if(!(Math.abs(k.x-R.x)>1||Math.abs(k.y-R.y)>1||Math.abs(k.width-R.width)>1||Math.abs(k.height-R.height)>1)){let le=f.get(S.id);le&&(f.delete(S.id),la(_,le).catch(()=>{}));continue}let W=f.get(S.id);W?Ip(_,W,{comment:`Move ${S.label} section (${S.tagName}) \u2014 from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}\xD7${Math.round(R.height)}`}).catch(le=>{console.warn("[Agentation] Failed to update rearrange annotation:",le)}):(f.set(S.id,""),Ki(_,Jt,{id:S.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Move ${S.label} section (${S.tagName}) \u2014 from (${Math.round(k.x)},${Math.round(k.y)}) ${Math.round(k.width)}\xD7${Math.round(k.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}\xD7${Math.round(R.height)}`,element:S.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:S.selector,label:S.label,tagName:S.tagName,originalRect:k,currentRect:R}}).then(le=>{f.has(S.id)&&f.set(S.id,le.id)}).catch(le=>{console.warn("[Agentation] Failed to sync rearrange annotation:",le),f.delete(S.id)}))}for(let[S,k]of f)p.has(S)||(f.delete(S),k&&la(_,k).catch(()=>{}))},300),()=>{ir.current&&clearTimeout(ir.current)}},[Ce,_,Jt,ye]);let Za=(0,N.useRef)(new Map);(0,N.useLayoutEffect)(()=>{let f=Ce?.sections??[],p=new Set;if((ie||Be)&&D)for(let w of f){p.add(w.id);try{let S=document.querySelector(w.selector);if(!S)continue;if(!Za.current.has(w.id)){let k={transform:S.style.transform,transformOrigin:S.style.transformOrigin,opacity:S.style.opacity,position:S.style.position,zIndex:S.style.zIndex,display:S.style.display},R=[],Q=S.parentElement;for(;Q&&Q!==document.body;){let le=getComputedStyle(Q);(le.overflow!=="visible"||le.overflowX!=="visible"||le.overflowY!=="visible")&&(R.push({el:Q,overflow:Q.style.overflow}),Q.style.overflow="visible"),Q=Q.parentElement}getComputedStyle(S).display==="inline"&&(S.style.display="inline-block"),Za.current.set(w.id,{el:S,origStyles:k,ancestors:R}),S.style.transformOrigin="top left",S.style.zIndex="9999"}}catch{}}for(let[w,S]of Za.current)if(!p.has(w)){let{el:k,origStyles:R,ancestors:Q}=S;k.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",k.style.transform=R.transform,k.style.transformOrigin=R.transformOrigin,k.style.opacity=R.opacity,k.style.position=R.position,k.style.zIndex=R.zIndex,Za.current.delete(w),_e(()=>{k.style.transition="",k.style.display=R.display;for(let W of Q)W.el.style.overflow=W.overflow},450)}},[Ce,ie,Be,D]),(0,N.useEffect)(()=>()=>{for(let[,f]of Za.current){let{el:p,origStyles:w,ancestors:S}=f;p.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",p.style.transform=w.transform,p.style.transformOrigin=w.transformOrigin,p.style.opacity=w.opacity,p.style.position=w.position,p.style.zIndex=w.zIndex,_e(()=>{p.style.transition="",p.style.display=w.display;for(let k of S)k.el.style.overflow=k.overflow},450)}Za.current.clear()},[]);let As=(0,N.useCallback)(()=>{Ne(!0),st(!1),De(null),clearTimeout(Ts.current),Ts.current=_e(()=>{Ne(!1)},300)},[]),F0=(0,N.useCallback)(()=>{ie&&(Ne(!0),st(!1),De(null),clearTimeout(Ts.current),Ts.current=_e(()=>{Ne(!1)},300)),T(!1)},[ie]),J0=(0,N.useCallback)(()=>{z||(Wv(),H(!0))},[z]),Rs=(0,N.useCallback)(()=>{z&&(Mp(),H(!1))},[z]),Fu=(0,N.useCallback)(()=>{z?Rs():J0()},[z,J0,Rs]),P0=(0,N.useCallback)(()=>{if(Gt.length===0)return;let f=Gt[0],p=f.element,w=Gt.length>1,S=Gt.map(k=>k.element.getBoundingClientRect());if(w){let k={left:Math.min(...S.map(ee=>ee.left)),top:Math.min(...S.map(ee=>ee.top)),right:Math.max(...S.map(ee=>ee.right)),bottom:Math.max(...S.map(ee=>ee.bottom))},R=Gt.slice(0,5).map(ee=>ee.name).join(", "),Q=Gt.length>5?` +${Gt.length-5} more`:"",W=S.map(ee=>({x:ee.left,y:ee.top+window.scrollY,width:ee.width,height:ee.height})),se=Gt[Gt.length-1].element,ce=S[S.length-1],Me=ce.left+ce.width/2,je=ce.top+ce.height/2,de=y0(se);ge({x:Me/window.innerWidth*100,y:de?je:je+window.scrollY,clientY:je,element:`${Gt.length} elements: ${R}${Q}`,elementPath:"multi-select",boundingBox:{x:k.left,y:k.top+window.scrollY,width:k.right-k.left,height:k.bottom-k.top},isMultiSelect:!0,isFixed:de,elementBoundingBoxes:W,multiSelectElements:Gt.map(ee=>ee.element),targetElement:se,fullPath:Du(p),accessibility:Nu(p),computedStyles:Tu(p),computedStylesObj:Eu(p),nearbyElements:Mu(p),cssClasses:ys(p),nearbyText:gs(p),sourceFile:Bu(p)})}else{let k=S[0],R=y0(p);ge({x:k.left/window.innerWidth*100,y:R?k.top:k.top+window.scrollY,clientY:k.top,element:f.name,elementPath:f.path,boundingBox:{x:k.left,y:R?k.top:k.top+window.scrollY,width:k.width,height:k.height},isFixed:R,fullPath:Du(p),accessibility:Nu(p),computedStyles:Tu(p),computedStylesObj:Eu(p),nearbyElements:Mu(p),cssClasses:ys(p),nearbyText:gs(p),reactComponents:f.reactComponents,sourceFile:Bu(p)})}Qa([]),qe(null)},[Gt]);(0,N.useEffect)(()=>{D||(ge(null),q(null),pe(null),be([]),qe(null),J(!1),Qa([]),Al.current={cmd:!1,shift:!1},z&&Rs())},[D,z,Rs]),(0,N.useEffect)(()=>()=>{Mp()},[]),(0,N.useEffect)(()=>{if(!D)return;let f=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),p=":not([data-agentation-root]):not([data-agentation-root] *)",w=document.createElement("style");return w.id="feedback-cursor-styles",w.textContent=`
      body ${p} {
        cursor: crosshair !important;
      }

      body :is(${f})${p} {
        cursor: text !important;
      }
    `,document.head.appendChild(w),()=>{let S=document.getElementById("feedback-cursor-styles");S&&S.remove()}},[D]),(0,N.useEffect)(()=>{if(A0!==null&&D)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[A0,D]),(0,N.useEffect)(()=>{if(!D||V||bl||ie)return;let f=p=>{let w=p.composedPath()[0]||p.target;if(Tn(w,"[data-feedback-toolbar]")){qe(null);return}let S=$a(p.clientX,p.clientY);if(!S||Tn(S,"[data-feedback-toolbar]")){qe(null);return}let{name:k,elementName:R,path:Q,reactComponents:W}=m0(S,ia),le=S.getBoundingClientRect();qe({element:k,elementName:R,elementPath:Q,rect:le,reactComponents:W}),Pe({x:p.clientX,y:p.clientY})};return document.addEventListener("mousemove",f),()=>document.removeEventListener("mousemove",f)},[D,V,bl,ie,ia,nl]);let Ls=(0,N.useCallback)(f=>{if(q(f),So(null),Yn(null),zn([]),f.elementBoundingBoxes?.length){let p=[];for(let w of f.elementBoundingBoxes){let S=w.x+w.width/2,k=w.y+w.height/2-window.scrollY,R=$a(S,k);R&&p.push(R)}be(p),pe(null)}else if(f.boundingBox){let p=f.boundingBox,w=p.x+p.width/2,S=f.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,k=$a(w,S);if(k){let R=k.getBoundingClientRect(),Q=R.width/p.width,W=R.height/p.height;Q<.5||W<.5?pe(null):pe(k)}else pe(null);be([])}else pe(null),be([])},[]);(0,N.useEffect)(()=>{if(!D||bl||ie)return;let f=p=>{if(zs.current){zs.current=!1;return}let w=p.composedPath()[0]||p.target;if(Tn(w,"[data-feedback-toolbar]")||Tn(w,"[data-annotation-popup]")||Tn(w,"[data-annotation-marker]"))return;if(p.metaKey&&p.shiftKey&&!V&&!Le){p.preventDefault(),p.stopPropagation();let yt=$a(p.clientX,p.clientY);if(!yt)return;let Pt=yt.getBoundingClientRect(),{name:dt,path:qt,reactComponents:ve}=m0(yt,ia),ze=Gt.findIndex(Rt=>Rt.element===yt);ze>=0?Qa(Rt=>Rt.filter((Ut,vl)=>vl!==ze)):Qa(Rt=>[...Rt,{element:yt,rect:Pt,name:dt,path:qt,reactComponents:ve??void 0}]);return}let S=Tn(w,"button, a, input, select, textarea, [role='button'], [onclick]");if($e.blockInteractions&&S&&(p.preventDefault(),p.stopPropagation()),V){if(S&&!$e.blockInteractions)return;p.preventDefault(),W0.current?.shake();return}if(Le){if(S&&!$e.blockInteractions)return;p.preventDefault(),Z0.current?.shake();return}p.preventDefault();let k=$a(p.clientX,p.clientY);if(!k)return;let{name:R,path:Q,reactComponents:W}=m0(k,ia),le=k.getBoundingClientRect(),se=p.clientX/window.innerWidth*100,ce=y0(k),Me=ce?p.clientY:p.clientY+window.scrollY,je=window.getSelection(),de;je&&je.toString().trim().length>0&&(de=je.toString().trim().slice(0,500));let ee=Eu(k),Xt=Tu(k);ge({x:se,y:Me,clientY:p.clientY,element:R,elementPath:Q,selectedText:de,boundingBox:{x:le.left,y:ce?le.top:le.top+window.scrollY,width:le.width,height:le.height},nearbyText:gs(k),cssClasses:ys(k),isFixed:ce,fullPath:Du(k),accessibility:Nu(k),computedStyles:Xt,computedStylesObj:ee,nearbyElements:Mu(k),reactComponents:W??void 0,sourceFile:Bu(k),targetElement:k}),qe(null)};return document.addEventListener("click",f,!0),()=>document.removeEventListener("click",f,!0)},[D,bl,ie,V,Le,$e.blockInteractions,ia,Gt]),(0,N.useEffect)(()=>{if(!D)return;let f=S=>{S.key==="Meta"&&(Al.current.cmd=!0),S.key==="Shift"&&(Al.current.shift=!0)},p=S=>{let k=Al.current.cmd&&Al.current.shift;S.key==="Meta"&&(Al.current.cmd=!1),S.key==="Shift"&&(Al.current.shift=!1);let R=Al.current.cmd&&Al.current.shift;k&&!R&&Gt.length>0&&P0()},w=()=>{Al.current={cmd:!1,shift:!1},Qa([])};return document.addEventListener("keydown",f),document.addEventListener("keyup",p),window.addEventListener("blur",w),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",p),window.removeEventListener("blur",w)}},[D,Gt,P0]),(0,N.useEffect)(()=>{if(!D||V||bl||ie)return;let f=p=>{let w=p.composedPath()[0]||p.target;Tn(w,"[data-feedback-toolbar]")||Tn(w,"[data-annotation-marker]")||Tn(w,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(w.tagName)||w.isContentEditable||(p.preventDefault(),Wa.current={x:p.clientX,y:p.clientY})};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[D,V,bl,ie]),(0,N.useEffect)(()=>{if(!D||V)return;let f=p=>{if(!Wa.current)return;let w=p.clientX-Wa.current.x,S=p.clientY-Wa.current.y,k=w*w+S*S,R=Wu*Wu;if(!lo&&k>=R&&(Ll.current=Wa.current,Q0(!0),p.preventDefault()),(lo||k>=R)&&Ll.current){if(cr.current){let ve=Math.min(Ll.current.x,p.clientX),ze=Math.min(Ll.current.y,p.clientY),Rt=Math.abs(p.clientX-Ll.current.x),Ut=Math.abs(p.clientY-Ll.current.y);cr.current.style.transform=`translate(${ve}px, ${ze}px)`,cr.current.style.width=`${Rt}px`,cr.current.style.height=`${Ut}px`}let Q=Date.now();if(Q-V0.current<L5)return;V0.current=Q;let W=Ll.current.x,le=Ll.current.y,se=Math.min(W,p.clientX),ce=Math.min(le,p.clientY),Me=Math.max(W,p.clientX),je=Math.max(le,p.clientY),de=(se+Me)/2,ee=(ce+je)/2,Xt=new Set,yt=[[se,ce],[Me,ce],[se,je],[Me,je],[de,ee],[de,ce],[de,je],[se,ee],[Me,ee]];for(let[ve,ze]of yt){let Rt=document.elementsFromPoint(ve,ze);for(let Ut of Rt)Ut instanceof HTMLElement&&Xt.add(Ut)}let Pt=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let ve of Pt)if(ve instanceof HTMLElement){let ze=ve.getBoundingClientRect(),Rt=ze.left+ze.width/2,Ut=ze.top+ze.height/2,vl=Rt>=se&&Rt<=Me&&Ut>=ce&&Ut<=je,ll=Math.min(ze.right,Me)-Math.max(ze.left,se),cn=Math.min(ze.bottom,je)-Math.max(ze.top,ce),fr=ll>0&&cn>0?ll*cn:0,ua=ze.width*ze.height,Co=ua>0?fr/ua:0;(vl||Co>.5)&&Xt.add(ve)}let dt=[],qt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let ve of Xt){if(Tn(ve,"[data-feedback-toolbar]")||Tn(ve,"[data-annotation-marker]"))continue;let ze=ve.getBoundingClientRect();if(!(ze.width>window.innerWidth*.8&&ze.height>window.innerHeight*.5)&&!(ze.width<10||ze.height<10)&&ze.left<Me&&ze.right>se&&ze.top<je&&ze.bottom>ce){let Rt=ve.tagName,Ut=qt.has(Rt);if(!Ut&&(Rt==="DIV"||Rt==="SPAN")){let vl=ve.textContent&&ve.textContent.trim().length>0,ll=ve.onclick!==null||ve.getAttribute("role")==="button"||ve.getAttribute("role")==="link"||ve.classList.contains("clickable")||ve.hasAttribute("data-clickable");(vl||ll)&&!ve.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ut=!0)}if(Ut){let vl=!1;for(let ll of dt)if(ll.left<=ze.left&&ll.right>=ze.right&&ll.top<=ze.top&&ll.bottom>=ze.bottom){vl=!0;break}vl||dt.push(ze)}}}if(ur.current){let ve=ur.current;for(;ve.children.length>dt.length;)ve.removeChild(ve.lastChild);dt.forEach((ze,Rt)=>{let Ut=ve.children[Rt];Ut||(Ut=document.createElement("div"),Ut.className=Y.selectedElementHighlight,ve.appendChild(Ut)),Ut.style.transform=`translate(${ze.left}px, ${ze.top}px)`,Ut.style.width=`${ze.width}px`,Ut.style.height=`${ze.height}px`})}}};return document.addEventListener("mousemove",f,{passive:!0}),()=>document.removeEventListener("mousemove",f)},[D,V,lo,Wu]),(0,N.useEffect)(()=>{if(!D)return;let f=p=>{let w=lo,S=Ll.current;if(lo&&S){zs.current=!0;let k=Math.min(S.x,p.clientX),R=Math.min(S.y,p.clientY),Q=Math.max(S.x,p.clientX),W=Math.max(S.y,p.clientY),le=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(de=>{if(!(de instanceof HTMLElement)||Tn(de,"[data-feedback-toolbar]")||Tn(de,"[data-annotation-marker]"))return;let ee=de.getBoundingClientRect();ee.width>window.innerWidth*.8&&ee.height>window.innerHeight*.5||ee.width<10||ee.height<10||ee.left<Q&&ee.right>k&&ee.top<W&&ee.bottom>R&&le.push({element:de,rect:ee})});let ce=le.filter(({element:de})=>!le.some(({element:ee})=>ee!==de&&de.contains(ee))),Me=p.clientX/window.innerWidth*100,je=p.clientY+window.scrollY;if(ce.length>0){let de=ce.reduce((qt,{rect:ve})=>({left:Math.min(qt.left,ve.left),top:Math.min(qt.top,ve.top),right:Math.max(qt.right,ve.right),bottom:Math.max(qt.bottom,ve.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ee=ce.slice(0,5).map(({element:qt})=>Pi(qt).name).join(", "),Xt=ce.length>5?` +${ce.length-5} more`:"",yt=ce[0].element,Pt=Eu(yt),dt=Tu(yt);ge({x:Me,y:je,clientY:p.clientY,element:`${ce.length} elements: ${ee}${Xt}`,elementPath:"multi-select",boundingBox:{x:de.left,y:de.top+window.scrollY,width:de.right-de.left,height:de.bottom-de.top},isMultiSelect:!0,fullPath:Du(yt),accessibility:Nu(yt),computedStyles:dt,computedStylesObj:Pt,nearbyElements:Mu(yt),cssClasses:ys(yt),nearbyText:gs(yt),sourceFile:Bu(yt)})}else{let de=Math.abs(Q-k),ee=Math.abs(W-R);de>20&&ee>20&&ge({x:Me,y:je,clientY:p.clientY,element:"Area selection",elementPath:`region at (${Math.round(k)}, ${Math.round(R)})`,boundingBox:{x:k,y:R+window.scrollY,width:de,height:ee},isMultiSelect:!0})}qe(null)}else w&&(zs.current=!0);Wa.current=null,Ll.current=null,Q0(!1),ur.current&&(ur.current.innerHTML="")};return document.addEventListener("mouseup",f),()=>document.removeEventListener("mouseup",f)},[D,lo]);let Bl=(0,N.useCallback)(async(f,p,w)=>{let S=$e.webhookUrl||b;if(!S||!$e.webhooksEnabled&&!w)return!1;try{return(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:f,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...p})})).ok}catch(k){return console.warn("[Agentation] Webhook failed:",k),!1}},[b,$e.webhookUrl,$e.webhooksEnabled]),H5=(0,N.useCallback)(f=>{if(!V)return;let p={id:Date.now().toString(),x:V.x,y:V.y,comment:f,element:V.element,elementPath:V.elementPath,timestamp:Date.now(),selectedText:V.selectedText,boundingBox:V.boundingBox,nearbyText:V.nearbyText,cssClasses:V.cssClasses,isMultiSelect:V.isMultiSelect,isFixed:V.isFixed,fullPath:V.fullPath,accessibility:V.accessibility,computedStyles:V.computedStyles,nearbyElements:V.nearbyElements,reactComponents:V.reactComponents,sourceFile:V.sourceFile,elementBoundingBoxes:V.elementBoundingBoxes,..._&&Jt?{sessionId:Jt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};y(w=>[...w,p]),Os.current=p.id,_e(()=>{Os.current=null},300),_e(()=>{rr(w=>new Set(w).add(p.id))},250),l?.(p),Bl("annotation.add",{annotation:p}),Ds(!0),_e(()=>{ge(null),Ds(!1)},150),window.getSelection()?.removeAllRanges(),_&&Jt&&Ki(_,Jt,p).then(w=>{w.id!==p.id&&(y(S=>S.map(k=>k.id===p.id?{...k,id:w.id}:k)),rr(S=>{let k=new Set(S);return k.delete(p.id),k.add(w.id),k}))}).catch(w=>{console.warn("[Agentation] Failed to sync annotation:",w)})},[V,l,Bl,_,Jt]),Ju=(0,N.useCallback)(()=>{Ds(!0),_e(()=>{ge(null),Ds(!1)},150)},[]),Pu=(0,N.useCallback)(f=>{let p=h.findIndex(S=>S.id===f),w=h[p];Le?.id===f&&(Ga(!0),_e(()=>{q(null),pe(null),be([]),Ga(!1)},150)),zl(f),Ns(S=>new Set(S).add(f)),w&&(o?.(w),Bl("annotation.delete",{annotation:w})),_&&la(_,f).catch(S=>{console.warn("[Agentation] Failed to delete annotation from server:",S)}),_e(()=>{y(S=>S.filter(k=>k.id!==f)),Ns(S=>{let k=new Set(S);return k.delete(f),k}),zl(null),p<h.length-1&&(yl(p),_e(()=>yl(null),200))},150)},[h,Le,o,Bl,_]),Bs=(0,N.useCallback)(f=>{if(!f){So(null),Yn(null),zn([]);return}if(So(f.id),f.elementBoundingBoxes?.length){let p=[];for(let w of f.elementBoundingBoxes){let S=w.x+w.width/2,k=w.y+w.height/2-window.scrollY,Q=document.elementsFromPoint(S,k).find(W=>!W.closest("[data-annotation-marker]")&&!W.closest("[data-agentation-root]"));Q&&p.push(Q)}zn(p),Yn(null)}else if(f.boundingBox){let p=f.boundingBox,w=p.x+p.width/2,S=f.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,k=$a(w,S);if(k){let R=k.getBoundingClientRect(),Q=R.width/p.width,W=R.height/p.height;Q<.5||W<.5?Yn(null):Yn(k)}else Yn(null);zn([])}else Yn(null),zn([])},[]),$5=(0,N.useCallback)(f=>{if(!Le)return;let p={...Le,comment:f};y(w=>w.map(S=>S.id===Le.id?p:S)),a?.(p),Bl("annotation.update",{annotation:p}),_&&Ip(_,Le.id,{comment:f}).catch(w=>{console.warn("[Agentation] Failed to update annotation on server:",w)}),Ga(!0),_e(()=>{q(null),pe(null),be([]),Ga(!1)},150)},[Le,a,Bl,_]),U5=(0,N.useCallback)(()=>{Ga(!0),_e(()=>{q(null),pe(null),be([]),Ga(!1)},150)},[]),ca=(0,N.useCallback)(()=>{let f=h.length,p=re.length>0||!!Ce;if(f===0&&nl.length===0&&!p)return;if(i?.(h),Bl("annotations.clear",{annotations:h}),_){Promise.all(h.map(k=>la(_,k.id).catch(R=>{console.warn("[Agentation] Failed to delete annotation from server:",R)})));for(let[,k]of or.current)k&&la(_,k).catch(()=>{});or.current.clear();for(let[,k]of ar.current)k&&la(_,k).catch(()=>{});ar.current.clear()}ml(!0),Pn(!0),E5([]);let w=qu.current;if(w){let k=w.getContext("2d");k&&k.clearRect(0,0,w.width,w.height)}(re.length>0||Ce)&&(Iu(k=>k+1),z0(k=>k+1),_e(()=>{ut([]),tl(null)},200)),xe&&Ct(!1),It&&no(""),aa.current={rearrange:null,placements:[]},Au(ye);let S=f*30+200;_e(()=>{y([]),rr(new Set),localStorage.removeItem(Uu(ye)),ml(!1)},S),_e(()=>Pn(!1),1500)},[ye,h,nl,re,Ce,xe,It,i,Bl,_]),ed=(0,N.useCallback)(async()=>{let f=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye,p=ie&&xe,w;if(p){if(re.length===0&&!Ce&&!It)return;w=""}else{if(w=Qp(h,f,$e.outputDetail),!w&&nl.length===0&&re.length===0&&!Ce)return;w||(w=`## Page Feedback: ${f}
`)}if(!p&&nl.length>0){let S=new Set;for(let W of h)W.drawingIndex!=null&&S.add(W.drawingIndex);let k=qu.current;k&&(k.style.visibility="hidden");let R=[],Q=window.scrollY;for(let W=0;W<nl.length;W++){if(S.has(W))continue;let le=nl[W];if(le.points.length<2)continue;let se=le.fixed?le.points:le.points.map(Wt=>({x:Wt.x,y:Wt.y-Q})),ce=1/0,Me=1/0,je=-1/0,de=-1/0;for(let Wt of se)ce=Math.min(ce,Wt.x),Me=Math.min(Me,Wt.y),je=Math.max(je,Wt.x),de=Math.max(de,Wt.y);let ee=je-ce,Xt=de-Me,yt=Math.hypot(ee,Xt),Pt=se[0],dt=se[se.length-1],qt=Math.hypot(dt.x-Pt.x,dt.y-Pt.y),ve,ze=qt<yt*.35,Rt=ee/Math.max(Xt,1);if(ze&&yt>20){let Wt=Math.max(ee,Xt)*.15,ko=0;for(let da of se){let I5=da.x-ce<Wt,X5=je-da.x<Wt,q5=da.y-Me<Wt,Q5=de-da.y<Wt;(I5||X5)&&(q5||Q5)&&ko++}ve=ko>se.length*.15?"box":"circle"}else Rt>3&&Xt<40?ve="underline":qt>yt*.5?ve="arrow":ve="drawing";let Ut=Math.min(10,se.length),vl=Math.max(1,Math.floor(se.length/Ut)),ll=new Set,cn=[],fr=[Pt];for(let Wt=vl;Wt<se.length-1;Wt+=vl)fr.push(se[Wt]);fr.push(dt);for(let Wt of fr){let ko=$a(Wt.x,Wt.y);if(!ko||ll.has(ko)||Tn(ko,"[data-feedback-toolbar]"))continue;ll.add(ko);let{name:da}=Pi(ko);cn.includes(da)||cn.push(da)}let ua=`${Math.round(ce)},${Math.round(Me)} \u2192 ${Math.round(je)},${Math.round(de)}`,Co;(ve==="circle"||ve==="box")&&cn.length>0?Co=`${ve==="box"?"Boxed":"Circled"} **${cn[0]}**${cn.length>1?` (and ${cn.slice(1).join(", ")})`:""} (region: ${ua})`:ve==="underline"&&cn.length>0?Co=`Underlined **${cn[0]}** (${ua})`:ve==="arrow"&&cn.length>=2?Co=`Arrow from **${cn[0]}** to **${cn[cn.length-1]}** (${Math.round(Pt.x)},${Math.round(Pt.y)} \u2192 ${Math.round(dt.x)},${Math.round(dt.y)})`:cn.length>0?Co=`${ve==="arrow"?"Arrow":"Drawing"} near **${cn.join("**, **")}** (region: ${ua})`:Co=`Drawing at ${ua}`,R.push(Co)}k&&(k.style.visibility=""),R.length>0&&(w+=`
**Drawings:**
`,R.forEach((W,le)=>{w+=`${le+1}. ${W}
`}))}if((re.length>0||p&&It)&&(w+=`
`+$p(re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xe,wireframePurpose:It||void 0},$e.outputDetail)),Ce){let S=Up(Ce,$e.outputDetail,{width:window.innerWidth,height:window.innerHeight});S&&(w+=`
`+S)}if(m)try{await navigator.clipboard.writeText(w)}catch{}r?.(w),$t(!0),_e(()=>$t(!1),2e3),$e.autoClearAfterCopy&&_e(()=>ca(),500)},[h,nl,re,Ce,xe,ie,to,It,ye,$e.outputDetail,ia,$e.autoClearAfterCopy,ca,m,r]),td=(0,N.useCallback)(async()=>{let f=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:ye,p=Qp(h,f,$e.outputDetail);if(!p&&re.length===0&&!Ce)return;if(p||(p=`## Page Feedback: ${f}
`),re.length>0&&(p+=`
`+$p(re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:xe,wireframePurpose:It||void 0},$e.outputDetail)),Ce){let S=Up(Ce,$e.outputDetail,{width:window.innerWidth,height:window.innerHeight});S&&(p+=`
`+S)}s&&s(p,h),vn("sending"),await new Promise(S=>_e(S,150));let w=await Bl("submit",{output:p,annotations:h},!0);vn(w?"sent":"failed"),_e(()=>vn("idle"),2500),w&&$e.autoClearAfterCopy&&_e(()=>ca(),500)},[s,Bl,h,re,Ce,xe,to,ye,$e.outputDetail,ia,$e.autoClearAfterCopy,ca]);(0,N.useEffect)(()=>{if(!Va)return;let f=10,p=S=>{let k=S.clientX-Va.x,R=S.clientY-Va.y,Q=Math.sqrt(k*k+R*R);if(!sa&&Q>f&&j0(!0),sa||Q>f){let W=Va.toolbarX+k,le=Va.toolbarY+R,se=20,ce=337,Me=44,de=ce-(D?xl==="connected"?297:257:44),ee=se-de,Xt=window.innerWidth-se-ce;W=Math.max(ee,Math.min(Xt,W)),le=Math.max(se,Math.min(window.innerHeight-Me-se,le)),Vu({x:W,y:le})}},w=()=>{sa&&(Gu.current=!0),j0(!1),I0(null)};return document.addEventListener("mousemove",p),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",w)}},[Va,sa,D,xl]);let Y5=(0,N.useCallback)(f=>{if(f.target.closest("button")||f.target.closest("[data-agentation-settings-panel]"))return;let p=f.currentTarget.parentElement;if(!p)return;let w=p.getBoundingClientRect(),S=At?.x??w.left,k=At?.y??w.top;I0({x:f.clientX,y:f.clientY,toolbarX:S,toolbarY:k})},[At]);if((0,N.useEffect)(()=>{if(!At)return;let f=()=>{let k=At.x,R=At.y,le=20-(337-(D?xl==="connected"?297:257:44)),se=window.innerWidth-20-337;k=Math.max(le,Math.min(se,k)),R=Math.max(20,Math.min(window.innerHeight-44-20,R)),(k!==At.x||R!==At.y)&&Vu({x:k,y:R})};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[At,D,xl]),(0,N.useEffect)(()=>{let f=p=>{let w=p.target,S=w.tagName==="INPUT"||w.tagName==="TEXTAREA"||w.isContentEditable;if(p.key==="Escape"){if(ie){Ge?De(null):As();return}if(bl){Xu(!1);return}if(Gt.length>0){Qa([]);return}V||D&&(yn(),T(!1))}if((p.metaKey||p.ctrlKey)&&p.shiftKey&&(p.key==="f"||p.key==="F")){p.preventDefault(),yn(),D?F0():T(!0);return}if(!(S||p.metaKey||p.ctrlKey)&&((p.key==="p"||p.key==="P")&&(p.preventDefault(),yn(),Fu()),(p.key==="l"||p.key==="L")&&(p.preventDefault(),yn(),bl&&Xu(!1),U&&J(!1),V&&Ju(),ie?As():st(!0)),(p.key==="h"||p.key==="H")&&h.length>0&&(p.preventDefault(),yn(),M(k=>!k)),(p.key==="c"||p.key==="C")&&(h.length>0||re.length>0||Ce)&&(p.preventDefault(),yn(),ed()),(p.key==="x"||p.key==="X")&&(h.length>0||re.length>0||Ce)&&(p.preventDefault(),yn(),ca(),re.length>0&&ut([]),Ce&&tl(null)),p.key==="s"||p.key==="S")){let k=Jl($e.webhookUrl)||Jl(b||"");h.length>0&&k&&Dn==="idle"&&(p.preventDefault(),yn(),td())}};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[D,bl,ie,Ge,re,Ce,V,h.length,$e.webhookUrl,b,Dn,td,Fu,ed,ca,Gt]),!me||I)return null;let _r=h.length>0,Ka=h.filter(f=>!q0.has(f.id)&&f.kind!=="placement"&&f.kind!=="rearrange"),j5=Ka.length>0,e1=h.filter(f=>q0.has(f.id)),t1=f=>{let R=f.x/100*window.innerWidth,Q=typeof f.y=="string"?parseFloat(f.y):f.y,W={};window.innerHeight-Q-22-10<80&&(W.top="auto",W.bottom="calc(100% + 10px)");let se=R-200/2,ce=10;if(se<ce){let Me=ce-se;W.left=`calc(50% + ${Me}px)`}else if(se+200>window.innerWidth-ce){let Me=se+200-(window.innerWidth-ce);W.left=`calc(50% - ${Me}px)`}return W};return(0,Fp.createPortal)((0,j.jsxs)("div",{ref:fe,style:{display:"contents"},"data-agentation-theme":Rl?"dark":"light","data-agentation-accent":$e.annotationColorId,"data-agentation-root":"",children:[(0,j.jsx)("div",{className:`${Y.toolbar}${C?` ${C}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:At?{left:At.x,top:At.y,right:"auto",bottom:"auto"}:void 0,children:(0,j.jsxs)("div",{className:`${Y.toolbarContainer} ${D?Y.expanded:Y.collapsed} ${H0?Y.entrance:""} ${B?Y.hiding:""} ${!$e.webhooksEnabled&&(Jl($e.webhookUrl)||Jl(b||""))?Y.serverConnected:""}`,onClick:D?void 0:f=>{if(Gu.current){Gu.current=!1,f.preventDefault();return}T(!0)},onMouseDown:Y5,role:D?void 0:"button",tabIndex:D?-1:0,title:D?void 0:"Start feedback mode",children:[(0,j.jsxs)("div",{className:`${Y.toggleContent} ${D?Y.hidden:Y.visible}`,children:[(0,j.jsx)(Dv,{size:24}),j5&&(0,j.jsx)("span",{className:`${Y.badge} ${D?Y.fadeOut:""} ${H0?Y.entrance:""}`,children:Ka.length})]}),(0,j.jsxs)("div",{className:`${Y.controlsContent} ${D?Y.visible:Y.hidden} ${At&&At.y<100?Y.tooltipBelow:""} ${Qe||U?Y.tooltipsHidden:""} ${R0?Y.tooltipsInSession:""}`,onMouseEnter:D5,onMouseLeave:z5,children:[(0,j.jsxs)("div",{className:`${Y.buttonWrapper} ${At&&At.x<120?Y.buttonWrapperAlignLeft:""}`,children:[(0,j.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),yn(),Fu()},"data-active":z,children:(0,j.jsx)(Lv,{size:24,isPaused:z})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:[z?"Resume animations":"Pause animations",(0,j.jsx)("span",{className:Y.shortcut,children:"P"})]})]}),(0,j.jsxs)("div",{className:Y.buttonWrapper,children:[(0,j.jsx)("button",{className:`${Y.controlButton} ${Rl?"":Y.light}`,onClick:f=>{f.stopPropagation(),yn(),bl&&Xu(!1),U&&J(!1),V&&Ju(),ie?As():st(!0)},"data-active":ie,style:ie&&xe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,j.jsx)(qv,{size:21})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:[ie?"Exit layout mode":"Layout mode",(0,j.jsx)("span",{className:Y.shortcut,children:"L"})]})]}),(0,j.jsxs)("div",{className:Y.buttonWrapper,children:[(0,j.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),yn(),M(!v)},disabled:!_r||ie,children:(0,j.jsx)(Rv,{size:24,isOpen:v})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:[v?"Hide markers":"Show markers",(0,j.jsx)("span",{className:Y.shortcut,children:"H"})]})]}),(0,j.jsxs)("div",{className:Y.buttonWrapper,children:[(0,j.jsx)("button",{className:`${Y.controlButton} ${Ze?Y.statusShowing:""}`,onClick:f=>{f.stopPropagation(),yn(),ed()},disabled:ie&&xe?re.length===0&&!Ce?.sections?.length:!_r&&nl.length===0&&re.length===0&&!Ce?.sections?.length,"data-active":Ze,children:(0,j.jsx)(Ov,{size:24,copied:Ze,tint:ie&&xe&&(re.length>0||Ce?.sections?.length)?"#f97316":void 0})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:[ie&&xe?"Copy layout":"Copy feedback",(0,j.jsx)("span",{className:Y.shortcut,children:"C"})]})]}),(0,j.jsxs)("div",{className:`${Y.buttonWrapper} ${Y.sendButtonWrapper} ${D&&!$e.webhooksEnabled&&(Jl($e.webhookUrl)||Jl(b||""))?Y.sendButtonVisible:""}`,children:[(0,j.jsxs)("button",{className:`${Y.controlButton} ${Dn==="sent"||Dn==="failed"?Y.statusShowing:""}`,onClick:f=>{f.stopPropagation(),yn(),td()},disabled:!_r||!Jl($e.webhookUrl)&&!Jl(b||"")||Dn==="sending","data-no-hover":Dn==="sent"||Dn==="failed",tabIndex:Jl($e.webhookUrl)||Jl(b||"")?0:-1,children:[(0,j.jsx)(Av,{size:24,state:Dn}),_r&&Dn==="idle"&&(0,j.jsx)("span",{className:Y.buttonBadge,children:h.length})]}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:["Send Annotations",(0,j.jsx)("span",{className:Y.shortcut,children:"S"})]})]}),(0,j.jsxs)("div",{className:Y.buttonWrapper,children:[(0,j.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),yn(),ca()},disabled:!_r&&nl.length===0&&re.length===0&&!Ce?.sections?.length,"data-danger":!0,children:(0,j.jsx)(Hv,{size:24})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:["Clear all",(0,j.jsx)("span",{className:Y.shortcut,children:"X"})]})]}),(0,j.jsxs)("div",{className:Y.buttonWrapper,children:[(0,j.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),yn(),ie&&As(),J(!U)},children:(0,j.jsx)(Bv,{size:24})}),_&&xl!=="disconnected"&&(0,j.jsx)("span",{className:`${Y.mcpIndicator} ${Y[xl]} ${U?Y.hidden:""}`,title:xl==="connected"?"MCP Connected":"MCP Connecting..."}),(0,j.jsx)("span",{className:Y.buttonTooltip,children:"Settings"})]}),(0,j.jsx)("div",{className:Y.divider}),(0,j.jsxs)("div",{className:`${Y.buttonWrapper} ${At&&typeof window<"u"&&At.x>window.innerWidth-120?Y.buttonWrapperAlignRight:""}`,children:[(0,j.jsx)("button",{className:Y.controlButton,onClick:f=>{f.stopPropagation(),yn(),F0()},children:(0,j.jsx)($v,{size:24})}),(0,j.jsxs)("span",{className:Y.buttonTooltip,children:["Exit",(0,j.jsx)("span",{className:Y.shortcut,children:"Esc"})]})]})]}),(0,j.jsx)(b3,{visible:ie&&D,activeType:Ge,onSelect:f=>{De(Ge===f?null:f)},isDarkMode:Rl,sectionCount:Ce?.sections.length??0,onDetectSections:()=>{let f=D3(),p=Ce?.sections??[],w=new Set(p.map(Q=>Q.selector)),S=f.filter(Q=>!w.has(Q.selector)),k=[...p,...S],R=[...Ce?.originalOrder??[],...S.map(Q=>Q.id)];tl({sections:k,originalOrder:R,detectedAt:Date.now()})},placementCount:re.length,onClearPlacements:()=>{Iu(f=>f+1),z0(f=>f+1),_e(()=>{tl({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:xe,onBlankCanvasChange:f=>{let p={sections:[],originalOrder:[],detectedAt:Date.now()};f?(ju.current={rearrange:Ce,placements:re},tl(aa.current.rearrange||p),ut(aa.current.placements),De(null)):(aa.current={rearrange:Ce,placements:re},tl(ju.current.rearrange||p),ut(ju.current.placements)),Ct(f)},wireframePurpose:It,onWireframePurposeChange:no,Tooltip:Ya,onDragStart:(f,p)=>{p.preventDefault();let w=P[f],S=null,k=!1,R=p.clientX,Q=p.clientY,le=p.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,se=Me=>{let je=Me.clientX-R,de=Me.clientY-Q;if(!k&&(Math.abs(je)>4||Math.abs(de)>4)&&(k=!0,S=document.createElement("div"),S.className=`${A.dragPreview}${xe?` ${A.dragPreviewWireframe}`:""}`,document.body.appendChild(S)),!S)return;let ee=Math.max(0,le-Me.clientY),Xt=Math.min(1,ee/180),yt=1-Math.pow(1-Xt,2),Pt=28,dt=20,qt=Math.min(140,w.width*.18),ve=Math.min(90,w.height*.18),ze=Pt+(qt-Pt)*yt,Rt=dt+(ve-dt)*yt;S.style.width=`${ze}px`,S.style.height=`${Rt}px`,S.style.left=`${Me.clientX-ze/2}px`,S.style.top=`${Me.clientY-Rt/2}px`,S.style.opacity=`${.5+.5*yt}`,S.textContent=yt>.25?f:""},ce=Me=>{if(window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",ce),S&&document.body.removeChild(S),k){let je=w.width,de=w.height,ee=window.scrollY,Xt=Math.max(0,Me.clientX-je/2),yt=Math.max(0,Me.clientY+ee-de/2),Pt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:f,x:Xt,y:yt,width:je,height:de,scrollY:ee,timestamp:Date.now()};ut(dt=>[...dt,Pt]),De(null),lr.current=new Set,D0(dt=>dt+1)}};window.addEventListener("mousemove",se),window.addEventListener("mouseup",ce)}}),(0,j.jsx)(U6,{settings:$e,onSettingsChange:f=>O5(p=>({...p,...f})),isDarkMode:Rl,onToggleTheme:A5,isDevMode:U0,connectionStatus:xl,endpoint:_,isVisible:oe,toolbarNearBottom:!!At&&At.y<230,settingsPage:ae,onSettingsPageChange:ke,onHideToolbar:B5})]})}),(ie||Be)&&(0,j.jsx)("div",{className:`${A.blankCanvas} ${ln?A.visible:""} ${Ms?A.gridActive:""}`,style:{"--canvas-opacity":Ol},"data-feedback-toolbar":!0}),ie&&xe&&ln&&(0,j.jsxs)("div",{className:A.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,j.jsxs)("div",{className:A.wireframeOpacityRow,children:[(0,j.jsx)("span",{className:A.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,j.jsx)("input",{type:"range",className:A.wireframeOpacitySlider,min:0,max:1,step:.01,value:Ol,onChange:f=>On(Number(f.target.value))})]}),(0,j.jsxs)("div",{className:A.wireframeNoticeTitleRow,children:[(0,j.jsx)("span",{className:A.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,j.jsx)("span",{className:A.wireframeNoticeDivider}),(0,j.jsx)("button",{className:A.wireframeStartOver,onClick:()=>{Iu(f=>f+1),tl({sections:[],originalOrder:[],detectedAt:Date.now()}),aa.current={rearrange:null,placements:[]},no(""),Au(ye)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,j.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(ie||Be)&&(0,j.jsx)(h3,{placements:re,onChange:ut,activeComponent:Be?null:Ge,onActiveComponentChange:De,isDarkMode:Rl,exiting:Be,onInteractionChange:v5,passthrough:!Ge,extraSnapRects:Ce?.sections.map(f=>f.currentRect),deselectSignal:w5,clearSignal:k5,wireframe:xe,onSelectionChange:(f,p)=>{lr.current=f,p||(Es.current=new Set,C5(w=>w+1))},onDragMove:(f,p)=>{let w=Es.current;if(!(!w.size||!Ce)){if(!pl.current){pl.current=new Map;for(let S of Ce.sections)w.has(S.id)&&pl.current.set(S.id,{x:S.currentRect.x,y:S.currentRect.y})}for(let S of Ce.sections){if(!w.has(S.id)||!pl.current.get(S.id))continue;let R=document.querySelector(`[data-rearrange-section="${S.id}"]`);R&&(R.style.transform=`translate(${f}px, ${p}px)`)}}},onDragEnd:(f,p,w)=>{let S=Es.current,k=pl.current;if(pl.current=null,!(!S.size||!Ce||!k)){for(let R of S){let Q=document.querySelector(`[data-rearrange-section="${R}"]`);Q&&(Q.style.transform="")}w&&tl(R=>R&&{...R,sections:R.sections.map(Q=>{let W=k.get(Q.id);return W?{...Q,currentRect:{...Q.currentRect,x:Math.max(0,W.x+f),y:Math.max(0,W.y+p)}}:Q})})}}}),(ie||Be)&&Ce&&(0,j.jsx)(A3,{rearrangeState:Ce,onChange:tl,isDarkMode:Rl,exiting:Be,blankCanvas:xe,extraSnapRects:re.map(f=>({x:f.x,y:f.y,width:f.width,height:f.height})),clearSignal:M5,deselectSignal:S5,onSelectionChange:(f,p)=>{Es.current=f,p||(lr.current=new Set,D0(w=>w+1))},onDragMove:(f,p)=>{let w=lr.current;if(w.size){if(!pl.current){pl.current=new Map;for(let S of re)w.has(S.id)&&pl.current.set(S.id,{x:S.x,y:S.y})}for(let S of w){let k=document.querySelector(`[data-design-placement="${S}"]`);k&&(k.style.transform=`translate(${f}px, ${p}px)`)}}},onDragEnd:(f,p,w)=>{let S=lr.current,k=pl.current;if(pl.current=null,!(!S.size||!k)){for(let R of S){let Q=document.querySelector(`[data-design-placement="${R}"]`);Q&&(Q.style.transform="")}w&&ut(R=>R.map(Q=>{let W=k.get(Q.id);return W?{...Q,x:Math.max(0,W.x+f),y:Math.max(0,W.y+p)}:Q}))}}}),(0,j.jsx)("canvas",{ref:qu,className:`${Y.drawCanvas} ${bl?Y.active:""}`,style:{opacity:Zu?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,j.jsxs)("div",{className:Y.markersLayer,"data-feedback-toolbar":!0,children:[K&&Ka.filter(f=>!f.isFixed).map((f,p,w)=>(0,j.jsx)(Vp,{annotation:f,globalIndex:Ka.findIndex(S=>S.id===f.id),layerIndex:p,layerSize:w.length,isExiting:tt,isClearing:wo,isAnimated:X0.has(f.id),isHovered:!tt&&eo===f.id,isDeleting:Dl===f.id,isEditingAny:!!Le,renumberFrom:Xa,markerClickBehavior:$e.markerClickBehavior,tooltipStyle:t1(f),onHoverEnter:S=>!tt&&S.id!==Os.current&&Bs(S),onHoverLeave:()=>Bs(null),onClick:S=>$e.markerClickBehavior==="delete"?Pu(S.id):Ls(S),onContextMenu:Ls},f.id)),K&&!tt&&e1.filter(f=>!f.isFixed).map(f=>(0,j.jsx)(Gp,{annotation:f},f.id))]}),(0,j.jsxs)("div",{className:Y.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[K&&Ka.filter(f=>f.isFixed).map((f,p,w)=>(0,j.jsx)(Vp,{annotation:f,globalIndex:Ka.findIndex(S=>S.id===f.id),layerIndex:p,layerSize:w.length,isExiting:tt,isClearing:wo,isAnimated:X0.has(f.id),isHovered:!tt&&eo===f.id,isDeleting:Dl===f.id,isEditingAny:!!Le,renumberFrom:Xa,markerClickBehavior:$e.markerClickBehavior,tooltipStyle:t1(f),onHoverEnter:S=>!tt&&S.id!==Os.current&&Bs(S),onHoverLeave:()=>Bs(null),onClick:S=>$e.markerClickBehavior==="delete"?Pu(S.id):Ls(S),onContextMenu:Ls},f.id)),K&&!tt&&e1.filter(f=>f.isFixed).map(f=>(0,j.jsx)(Gp,{annotation:f,fixed:!0},f.id))]}),D&&(0,j.jsxs)("div",{className:Y.overlay,"data-feedback-toolbar":!0,style:V||Le?{zIndex:99999}:void 0,children:[Re?.rect&&!V&&!Ke&&!lo&&(0,j.jsx)("div",{className:`${Y.hoverHighlight} ${Y.enter}`,style:{left:Re.rect.left,top:Re.rect.top,width:Re.rect.width,height:Re.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),Gt.filter(f=>document.contains(f.element)).map((f,p)=>{let w=f.element.getBoundingClientRect(),S=Gt.length>1;return(0,j.jsx)("div",{className:S?Y.multiSelectOutline:Y.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...S?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},p)}),eo&&!V&&(()=>{let f=h.find(k=>k.id===eo);if(!f?.boundingBox)return null;if(f.elementBoundingBoxes?.length)return gl.length>0?gl.filter(k=>document.contains(k)).map((k,R)=>{let Q=k.getBoundingClientRect();return(0,j.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:Q.left,top:Q.top,width:Q.width,height:Q.height}},`hover-outline-live-${R}`)}):f.elementBoundingBoxes.map((k,R)=>(0,j.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:k.x,top:k.y-nt,width:k.width,height:k.height}},`hover-outline-${R}`));let p=oa&&document.contains(oa)?oa.getBoundingClientRect():null,w=p?{x:p.left,y:p.top,width:p.width,height:p.height}:{x:f.boundingBox.x,y:f.isFixed?f.boundingBox.y:f.boundingBox.y-nt,width:f.boundingBox.width,height:f.boundingBox.height},S=f.isMultiSelect;return(0,j.jsx)("div",{className:`${S?Y.multiSelectOutline:Y.singleSelectOutline} ${Y.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...S?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Re&&!V&&!Ke&&!lo&&(0,j.jsxs)("div",{className:`${Y.hoverTooltip} ${Y.enter}`,style:{left:Math.max(8,Math.min(Te.x,window.innerWidth-100)),top:Math.max(Te.y-(Re.reactComponents?48:32),8)},children:[Re.reactComponents&&(0,j.jsx)("div",{className:Y.hoverReactPath,children:Re.reactComponents}),(0,j.jsx)("div",{className:Y.hoverElementName,children:Re.elementName})]}),V&&(0,j.jsxs)(j.Fragment,{children:[V.multiSelectElements?.length?V.multiSelectElements.filter(f=>document.contains(f)).map((f,p)=>{let w=f.getBoundingClientRect();return(0,j.jsx)("div",{className:`${Y.multiSelectOutline} ${sr?Y.exit:Y.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${p}`)}):V.targetElement&&document.contains(V.targetElement)?(()=>{let f=V.targetElement.getBoundingClientRect();return(0,j.jsx)("div",{className:`${Y.singleSelectOutline} ${sr?Y.exit:Y.enter}`,style:{left:f.left,top:f.top,width:f.width,height:f.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():V.boundingBox&&(0,j.jsx)("div",{className:`${V.isMultiSelect?Y.multiSelectOutline:Y.singleSelectOutline} ${sr?Y.exit:Y.enter}`,style:{left:V.boundingBox.x,top:V.boundingBox.y-nt,width:V.boundingBox.width,height:V.boundingBox.height,...V.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let f=V.x,p=V.isFixed?V.y:V.y-nt;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N6,{x:f,y:p,isMultiSelect:V.isMultiSelect,isExiting:sr}),(0,j.jsx)(Hu,{ref:W0,element:V.element,selectedText:V.selectedText,computedStyles:V.computedStylesObj,placeholder:V.element==="Area selection"?"What should change in this area?":V.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:H5,onCancel:Ju,isExiting:sr,lightMode:!Rl,accentColor:V.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,f/100*window.innerWidth)),...p>window.innerHeight-290?{bottom:window.innerHeight-p+20}:{top:p+20}}})]})})()]}),Le&&(0,j.jsxs)(j.Fragment,{children:[Le.elementBoundingBoxes?.length?Oe.length>0?Oe.filter(f=>document.contains(f)).map((f,p)=>{let w=f.getBoundingClientRect();return(0,j.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${p}`)}):Le.elementBoundingBoxes.map((f,p)=>(0,j.jsx)("div",{className:`${Y.multiSelectOutline} ${Y.enter}`,style:{left:f.x,top:f.y-nt,width:f.width,height:f.height}},`edit-multi-${p}`)):(()=>{let f=ue&&document.contains(ue)?ue.getBoundingClientRect():null,p=f?{x:f.left,y:f.top,width:f.width,height:f.height}:Le.boundingBox?{x:Le.boundingBox.x,y:Le.isFixed?Le.boundingBox.y:Le.boundingBox.y-nt,width:Le.boundingBox.width,height:Le.boundingBox.height}:null;return p?(0,j.jsx)("div",{className:`${Le.isMultiSelect?Y.multiSelectOutline:Y.singleSelectOutline} ${Y.enter}`,style:{left:p.x,top:p.y,width:p.width,height:p.height,...Le.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),(0,j.jsx)(Hu,{ref:Z0,element:Le.element,selectedText:Le.selectedText,computedStyles:M3(Le.computedStyles),placeholder:"Edit your feedback...",initialValue:Le.comment,submitLabel:"Save",onSubmit:$5,onCancel:U5,onDelete:()=>Pu(Le.id),isExiting:R5,lightMode:!Rl,accentColor:Le.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let f=Le.isFixed?Le.y:Le.y-nt;return{left:Math.max(160,Math.min(window.innerWidth-160,Le.x/100*window.innerWidth)),...f>window.innerHeight-290?{bottom:window.innerHeight-f+20}:{top:f+20}}})()})]}),lo&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{ref:cr,className:Y.dragSelection}),(0,j.jsx)("div",{ref:ur,className:Y.highlightsContainer})]})]})]}),document.body)}var N,Fp,Bt,G,Ot,Pl,e5,ja,b0,Je,u,St,Ht,c,Se,We,h5,Jn,Cs,m5,er,tr,F,j,kv,Mv,wt,Ev,Tv,bt,Nv,Dv,zv,Ov,Av,Rv,Lv,Bv,Hv,Jp,$v,Uv,Yv,jv,Iv,Xv,qv,Pp,i0,p0,r0,Ue,_e,Vv,Ji,Hu,Zv,Kv,Fv,Ep,Ya,P,t5,Nl,u3,_3,f3,A,Zi,ku,g,O,n5,v3,w3,S3,C3,k3,E3,x0,Dp,T3,N3,zp,Op,zu,Ap,Ou,O3,v0,Bp,S0,d5,M0,E0,T0,f5,C0,it,Xp,qp,t6,Fi,r6,bs,xs,Ru,k6,M6,Y,vs,E6,T6,Vt,D6,z6,f0,h0,O6,A6,Lu,R6,L6,B6,Wp,Zp,H6,$6,te,Kp,g0,Jl,Y6,ws,j6,y5=F5(()=>{"use client";N=kt(ol(),1),Fp=kt(Is(),1),Bt=kt(ol(),1),G=kt(En(),1),Ot=kt(En(),1),Pl=kt(ol(),1),e5=kt(Is(),1),ja=kt(En(),1),b0=kt(En(),1),Je=kt(ol(),1),u=kt(En(),1),St=kt(En(),1),Ht=kt(ol(),1),c=kt(En(),1),Se=kt(ol(),1),We=kt(En(),1),h5=kt(ol(),1),Jn=kt(En(),1),Cs=kt(En(),1),m5=kt(ol(),1),er=kt(En(),1),tr=kt(En(),1),F=kt(En(),1),j=kt(En(),1),kv=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Mv={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e)),e.textContent=kv}wt=Mv,Ev=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Tv={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");e||(e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e)),e.textContent=Ev}bt=Tv,Nv=({size:e=16})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,G.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Dv=({size:e=24,style:t={}})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t,children:[(0,G.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,G.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,G.jsx)("defs",{children:(0,G.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,G.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),zv=({size:e=20,...t})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,G.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,G.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ov=({size:e=24,copied:t=!1,tint:n})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,G.jsxs)("g",{className:`${bt.iconState} ${t?bt.hiddenScaled:bt.visibleScaled}`,children:[(0,G.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,G.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,G.jsxs)("g",{className:`${bt.iconState} ${t?bt.visibleScaled:bt.hiddenScaled}`,children:[(0,G.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Av=({size:e=24,state:t="idle"})=>{let n=t==="idle",l=t==="sent",o=t==="failed",a=t==="sending";return(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsx)("g",{className:`${bt.iconStateFast} ${n?bt.visibleScaled:a?bt.sending:bt.hiddenScaled}`,children:(0,G.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,G.jsxs)("g",{className:`${bt.iconStateFast} ${l?bt.visibleScaled:bt.hiddenScaled}`,children:[(0,G.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,G.jsxs)("g",{className:`${bt.iconStateFast} ${o?bt.visibleScaled:bt.hiddenScaled}`,children:[(0,G.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,G.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Rv=({size:e=24,isOpen:t=!0})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsxs)("g",{className:`${bt.iconFade} ${t?bt.visible:bt.hidden}`,children:[(0,G.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,G.jsxs)("g",{className:`${bt.iconFade} ${t?bt.hidden:bt.visible}`,children:[(0,G.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,G.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Lv=({size:e=24,isPaused:t=!1})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsxs)("g",{className:`${bt.iconFadeFast} ${t?bt.hidden:bt.visible}`,children:[(0,G.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,G.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,G.jsx)("path",{className:`${bt.iconFadeFast} ${t?bt.visible:bt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Bv=({size:e=16})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Hv=({size:e=16})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,G.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Jp=({size:e=16})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,G.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,G.jsx)("defs",{children:(0,G.jsx)("clipPath",{id:"clip0_2_53",children:(0,G.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),$v=({size:e=24})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,G.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Uv=({size:e=16})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,G.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,G.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Yv=({size:e=16})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,G.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),jv=({size:e=16})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,G.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Iv=({size:e=24})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,G.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Xv=({size:e=16})=>(0,G.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,G.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),qv=({size:e=24})=>(0,G.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,G.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,G.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,G.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Pp=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],i0=Pp.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),p0="feedback-freeze-styles",r0="__agentation_freeze";Ue=Qv();typeof window<"u"&&!Ue.installed&&(Ue.origSetTimeout=window.setTimeout.bind(window),Ue.origSetInterval=window.setInterval.bind(window),Ue.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e=="string"?Ue.origSetTimeout(e,t):Ue.origSetTimeout((...l)=>{Ue.frozen?Ue.frozenTimeoutQueue.push(()=>e(...l)):e(...l)},t,...n),window.setInterval=(e,t,...n)=>typeof e=="string"?Ue.origSetInterval(e,t):Ue.origSetInterval((...l)=>{Ue.frozen||e(...l)},t,...n),window.requestAnimationFrame=e=>Ue.origRAF(t=>{Ue.frozen?Ue.frozenRAFQueue.push(e):e(t)}),Ue.installed=!0);_e=Ue.origSetTimeout,Vv=Ue.origSetInterval,Ji=Ue.origRAF;Hu=(0,Bt.forwardRef)(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:m,style:_,accentColor:x="#3c82f7",isExiting:d=!1,lightMode:b=!1,computedStyles:C},D){let[T,h]=(0,Bt.useState)(a),[y,v]=(0,Bt.useState)(!1),[M,I]=(0,Bt.useState)("initial"),[ne,B]=(0,Bt.useState)(!1),[Z,fe]=(0,Bt.useState)(!1),K=(0,Bt.useRef)(null),he=(0,Bt.useRef)(null),tt=(0,Bt.useRef)(null),gt=(0,Bt.useRef)(null);(0,Bt.useEffect)(()=>{d&&M!=="exit"&&I("exit")},[d,M]),(0,Bt.useEffect)(()=>{_e(()=>{I("enter")},0);let ge=_e(()=>{I("entered")},200),Ze=_e(()=>{let $t=K.current;$t&&(s0($t),$t.selectionStart=$t.selectionEnd=$t.value.length,$t.scrollTop=$t.scrollHeight)},50);return()=>{clearTimeout(ge),clearTimeout(Ze),tt.current&&clearTimeout(tt.current),gt.current&&clearTimeout(gt.current)}},[]);let Re=(0,Bt.useCallback)(()=>{gt.current&&clearTimeout(gt.current),v(!0),gt.current=_e(()=>{v(!1),s0(K.current)},250)},[]);(0,Bt.useImperativeHandle)(D,()=>({shake:Re}),[Re]);let qe=(0,Bt.useCallback)(()=>{I("exit"),tt.current=_e(()=>{s()},150)},[s]),Te=(0,Bt.useCallback)(()=>{T.trim()&&r(T.trim())},[T,r]),Pe=(0,Bt.useCallback)(ge=>{ge.stopPropagation(),!ge.nativeEvent.isComposing&&(ge.key==="Enter"&&!ge.shiftKey&&(ge.preventDefault(),Te()),ge.key==="Escape"&&qe())},[Te,qe]),V=[wt.popup,b?wt.light:"",M==="enter"?wt.enter:"",M==="entered"?wt.entered:"",M==="exit"?wt.exit:"",y?wt.shake:""].filter(Boolean).join(" ");return(0,Ot.jsxs)("div",{ref:he,className:V,"data-annotation-popup":!0,style:_,onClick:ge=>ge.stopPropagation(),children:[(0,Ot.jsxs)("div",{className:wt.header,children:[C&&Object.keys(C).length>0?(0,Ot.jsxs)("button",{className:wt.headerToggle,onClick:()=>{let ge=Z;fe(!Z),ge&&_e(()=>s0(K.current),0)},type:"button",children:[(0,Ot.jsx)("svg",{className:`${wt.chevron} ${Z?wt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Ot.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,Ot.jsx)("span",{className:wt.element,children:t})]}):(0,Ot.jsx)("span",{className:wt.element,children:t}),n&&(0,Ot.jsx)("span",{className:wt.timestamp,children:n})]}),C&&Object.keys(C).length>0&&(0,Ot.jsx)("div",{className:`${wt.stylesWrapper} ${Z?wt.expanded:""}`,children:(0,Ot.jsx)("div",{className:wt.stylesInner,children:(0,Ot.jsx)("div",{className:wt.stylesBlock,children:Object.entries(C).map(([ge,Ze])=>(0,Ot.jsxs)("div",{className:wt.styleLine,children:[(0,Ot.jsx)("span",{className:wt.styleProperty,children:ge.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,Ot.jsx)("span",{className:wt.styleValue,children:Ze}),";"]},ge))})})}),l&&(0,Ot.jsxs)("div",{className:wt.quote,children:["\u201C",l.slice(0,80),l.length>80?"...":"","\u201D"]}),(0,Ot.jsx)("textarea",{ref:K,className:wt.textarea,style:{borderColor:ne?x:void 0},placeholder:o,value:T,onChange:ge=>h(ge.target.value),onFocus:()=>B(!0),onBlur:()=>B(!1),rows:2,onKeyDown:Pe}),(0,Ot.jsxs)("div",{className:wt.actions,children:[m&&(0,Ot.jsx)("div",{className:wt.deleteWrapper,children:(0,Ot.jsx)("button",{className:wt.deleteButton,onClick:m,type:"button",children:(0,Ot.jsx)(Iv,{size:22})})}),(0,Ot.jsx)("button",{className:wt.cancel,onClick:qe,children:"Cancel"}),(0,Ot.jsx)("button",{className:wt.submit,style:{backgroundColor:x,opacity:T.trim()?1:.4},onClick:Te,disabled:!T.trim(),children:i})]})]})}),Zv=({content:e,children:t,...n})=>{let[l,o]=(0,Pl.useState)(!1),[a,i]=(0,Pl.useState)(!1),[r,s]=(0,Pl.useState)({top:0,right:0}),m=(0,Pl.useRef)(null),_=(0,Pl.useRef)(null),x=(0,Pl.useRef)(null),d=()=>{if(m.current){let D=m.current.getBoundingClientRect();s({top:D.top+D.height/2,right:window.innerWidth-D.left+8})}},b=()=>{i(!0),x.current&&(clearTimeout(x.current),x.current=null),d(),_.current=_e(()=>{o(!0)},500)},C=()=>{_.current&&(clearTimeout(_.current),_.current=null),o(!1),x.current=_e(()=>{i(!1)},150)};return(0,Pl.useEffect)(()=>()=>{_.current&&clearTimeout(_.current),x.current&&clearTimeout(x.current)},[]),(0,ja.jsxs)(ja.Fragment,{children:[(0,ja.jsx)("span",{ref:m,onMouseEnter:b,onMouseLeave:C,...n,children:t}),a&&(0,e5.createPortal)((0,ja.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:r.top,right:r.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},Kv=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Fv={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e)),e.textContent=Kv}Ep=Fv,Ya=({content:e})=>(0,b0.jsx)(Zv,{className:Ep.tooltip,content:e,children:(0,b0.jsx)(zv,{className:Ep.tooltipIcon})}),P={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},t5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...P.navigation},{type:"header",label:"Header",...P.header},{type:"hero",label:"Hero",...P.hero},{type:"section",label:"Section",...P.section},{type:"sidebar",label:"Sidebar",...P.sidebar},{type:"footer",label:"Footer",...P.footer},{type:"modal",label:"Modal",...P.modal},{type:"banner",label:"Banner",...P.banner},{type:"drawer",label:"Drawer",...P.drawer},{type:"popover",label:"Popover",...P.popover},{type:"divider",label:"Divider",...P.divider}]},{section:"Content",items:[{type:"card",label:"Card",...P.card},{type:"text",label:"Text",...P.text},{type:"image",label:"Image",...P.image},{type:"video",label:"Video",...P.video},{type:"table",label:"Table",...P.table},{type:"grid",label:"Grid",...P.grid},{type:"list",label:"List",...P.list},{type:"chart",label:"Chart",...P.chart},{type:"codeBlock",label:"Code Block",...P.codeBlock},{type:"map",label:"Map",...P.map},{type:"timeline",label:"Timeline",...P.timeline},{type:"calendar",label:"Calendar",...P.calendar},{type:"accordion",label:"Accordion",...P.accordion},{type:"carousel",label:"Carousel",...P.carousel},{type:"logo",label:"Logo",...P.logo},{type:"faq",label:"FAQ",...P.faq},{type:"gallery",label:"Gallery",...P.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...P.button},{type:"input",label:"Input",...P.input},{type:"search",label:"Search",...P.search},{type:"form",label:"Form",...P.form},{type:"tabs",label:"Tabs",...P.tabs},{type:"dropdown",label:"Dropdown",...P.dropdown},{type:"toggle",label:"Toggle",...P.toggle},{type:"stepper",label:"Stepper",...P.stepper},{type:"rating",label:"Rating",...P.rating},{type:"fileUpload",label:"File Upload",...P.fileUpload},{type:"checkbox",label:"Checkbox",...P.checkbox},{type:"radio",label:"Radio",...P.radio},{type:"slider",label:"Slider",...P.slider},{type:"datePicker",label:"Date Picker",...P.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...P.avatar},{type:"badge",label:"Badge",...P.badge},{type:"tag",label:"Tag",...P.tag},{type:"breadcrumb",label:"Breadcrumb",...P.breadcrumb},{type:"pagination",label:"Pagination",...P.pagination},{type:"progress",label:"Progress",...P.progress},{type:"alert",label:"Alert",...P.alert},{type:"toast",label:"Toast",...P.toast},{type:"notification",label:"Notification",...P.notification},{type:"tooltip",label:"Tooltip",...P.tooltip},{type:"stat",label:"Stat",...P.stat},{type:"skeleton",label:"Skeleton",...P.skeleton},{type:"chip",label:"Chip",...P.chip},{type:"icon",label:"Icon",...P.icon},{type:"spinner",label:"Spinner",...P.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...P.pricing},{type:"testimonial",label:"Testimonial",...P.testimonial},{type:"cta",label:"CTA",...P.cta},{type:"productCard",label:"Product Card",...P.productCard},{type:"profile",label:"Profile",...P.profile},{type:"feature",label:"Feature",...P.feature},{type:"team",label:"Team",...P.team},{type:"login",label:"Login",...P.login},{type:"contact",label:"Contact",...P.contact}]}],Nl={};for(let e of t5)for(let t of e.items)Nl[t.type]=t;u3={navigation:Jv,hero:Pv,sidebar:e4,footer:t4,modal:n4,card:l4,text:o4,image:a4,table:i4,list:r4,button:s4,input:c4,form:u4,tabs:d4,avatar:_4,badge:f4,header:h4,section:m4,grid:g4,dropdown:y4,toggle:p4,search:b4,toast:x4,progress:v4,chart:w4,video:S4,tooltip:C4,breadcrumb:k4,pagination:M4,divider:E4,accordion:T4,carousel:N4,pricing:D4,testimonial:z4,cta:O4,alert:A4,banner:R4,stat:L4,stepper:B4,tag:H4,rating:$4,map:U4,timeline:Y4,fileUpload:j4,codeBlock:I4,calendar:X4,notification:q4,productCard:Q4,profile:V4,drawer:G4,popover:W4,logo:Z4,faq:K4,gallery:F4,checkbox:J4,radio:P4,slider:e3,datePicker:t3,skeleton:n3,chip:l3,icon:o3,spinner:a3,feature:i3,team:r3,login:s3,contact:c3};_3=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,f3={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e)),e.textContent=_3}A=f3,Zi=24,ku=5;g="currentColor",O="0.5";n5=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),v3=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),w3=new Set(["input","textarea","select"]),S3=new Set(["img","video","canvas","svg"]),C3=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);k3=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];E3=new Set(["nav","header","main","section","article","footer","aside"]),x0={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Dp={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},T3=new Set(["script","style","noscript","link","meta"]),N3=40;zp={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Op=["nw","n","ne","e","se","s","sw","w"],zu=24,Ap=16,Ou=5;O3=new Set(["script","style","noscript","link","meta","br","hr"]);v0=new Set(["script","style","noscript","link","meta","br","hr"]);Bp=15;S0="feedback-annotations-",d5=7;M0="agentation-design-";E0="agentation-rearrange-";T0="agentation-wireframe-";f5="agentation-session-";C0=`${f5}toolbar-hidden`;it={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Xp=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),qp=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],t6=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];Fi=null,r6=new WeakMap;bs={map:r6};xs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};Ru=new Map;k6=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,M6={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e)),e.textContent=k6}Y=M6,vs=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];E6=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,T6={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e)),e.textContent=E6}Vt=T6;D6=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,z6={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e)),e.textContent=D6}f0=z6,h0=({className:e="",...t})=>(0,Cs.jsxs)("div",{className:`${f0.switchContainer} ${e}`,children:[(0,Cs.jsx)("input",{className:f0.switchInput,type:"checkbox",...t}),(0,Cs.jsx)("div",{className:f0.switchThumb})]}),O6=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,A6={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e)),e.textContent=O6}Lu=A6,R6=({className:e="",...t})=>(0,er.jsxs)("div",{className:`${Lu.checkboxContainer} ${e}`,children:[(0,er.jsx)("input",{className:Lu.checkboxInput,type:"checkbox",...t}),(0,er.jsx)("svg",{className:Lu.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,er.jsx)("path",{className:Lu.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),L6=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,B6={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e)),e.textContent=L6}Wp=B6,Zp=({className:e="",label:t,tooltip:n,checked:l,onChange:o,...a})=>{let i=(0,m5.useId)();return(0,tr.jsxs)("div",{className:`${Wp.container} ${e}`,...a,children:[(0,tr.jsx)(R6,{id:i,onChange:o,checked:l}),(0,tr.jsx)("label",{className:Wp.label,htmlFor:i,children:t}),n&&(0,tr.jsx)(Ya,{content:n})]})},H6=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,$6={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");e||(e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e)),e.textContent=H6}te=$6;Kp=!1,g0={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Jl=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},Y6={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},ws=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],j6=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;let e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...ws.map(t=>`
      [data-agentation-accent="${t.id}"] {
        --agentation-color-accent: ${t.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${t.id}"] {
          --agentation-color-accent: ${t.p3};
        }
      }
    `),`:root {
      ${ws.map(t=>`--agentation-color-${t.id}: ${t.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${ws.map(t=>`--agentation-color-${t.id}: ${t.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};j6()});var I6=wl(()=>{var b5=kt(ol()),x5=kt(wp());y5();function p5(){let e=document.getElementById("agentation-root");e||(e=document.createElement("div"),e.id="agentation-root",document.body.appendChild(e));try{(0,x5.createRoot)(e).render(b5.default.createElement(g5,{copyToClipboard:!0})),console.log("[Agentation] Visual annotation toolbar initialized.")}catch(t){console.error("[Agentation] Failed to mount:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p5):p5()});I6();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
