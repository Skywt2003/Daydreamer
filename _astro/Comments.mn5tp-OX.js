import{r as E}from"./index.LFf77hJu.js";var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ue(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var f=function n(){return this instanceof n?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};f.prototype=i.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var x=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(f,n,x.get?x:{enumerable:!0,get:function(){return e[n]}})}),f}var X={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=E,de=Symbol.for("react.element"),he=Symbol.for("react.fragment"),me=Object.prototype.hasOwnProperty,pe=fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ye={key:!0,ref:!0,__self:!0,__source:!0};function Z(e,i,f){var n,x={},p=null,g=null;f!==void 0&&(p=""+f),i.key!==void 0&&(p=""+i.key),i.ref!==void 0&&(g=i.ref);for(n in i)me.call(i,n)&&!ye.hasOwnProperty(n)&&(x[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps,i)x[n]===void 0&&(x[n]=i[n]);return{$$typeof:de,type:e,key:p,ref:g,props:x,_owner:pe.current}}K.Fragment=he;K.jsx=Z;K.jsxs=Z;X.exports=K;var h=X.exports;/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ee=ge,J=_e,ve=Object.prototype.toString,q=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function ge(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var f={},n=i||{},x=n.decode||xe,p=0;p<e.length;){var g=e.indexOf("=",p);if(g===-1)break;var b=e.indexOf(";",p);if(b===-1)b=e.length;else if(b<g){p=e.lastIndexOf(";",g-1)+1;continue}var j=e.slice(p,g).trim();if(f[j]===void 0){var o=e.slice(g+1,b).trim();o.charCodeAt(0)===34&&(o=o.slice(1,-1)),f[j]=be(o,x)}p=b+1}return f}function _e(e,i,f){var n=f||{},x=n.encode||Se;if(typeof x!="function")throw new TypeError("option encode is invalid");if(!q.test(e))throw new TypeError("argument name is invalid");var p=x(i);if(p&&!q.test(p))throw new TypeError("argument val is invalid");var g=e+"="+p;if(n.maxAge!=null){var b=n.maxAge-0;if(isNaN(b)||!isFinite(b))throw new TypeError("option maxAge is invalid");g+="; Max-Age="+Math.floor(b)}if(n.domain){if(!q.test(n.domain))throw new TypeError("option domain is invalid");g+="; Domain="+n.domain}if(n.path){if(!q.test(n.path))throw new TypeError("option path is invalid");g+="; Path="+n.path}if(n.expires){var j=n.expires;if(!we(j)||isNaN(j.valueOf()))throw new TypeError("option expires is invalid");g+="; Expires="+j.toUTCString()}if(n.httpOnly&&(g+="; HttpOnly"),n.secure&&(g+="; Secure"),n.partitioned&&(g+="; Partitioned"),n.priority){var o=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(o){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var N=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(N){case!0:g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"strict":g+="; SameSite=Strict";break;case"none":g+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return g}function xe(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Se(e){return encodeURIComponent(e)}function we(e){return ve.call(e)==="[object Date]"||e instanceof Date}function be(e,i){try{return i(e)}catch{return e}}function Ce(){const e=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof e=="boolean"?e:typeof document=="object"&&typeof document.cookie=="string"}function je(e){return typeof e=="string"?ee(e):typeof e=="object"&&e!==null?e:{}}function V(e,i={}){const f=ke(e);if(!i.doNotParse)try{return JSON.parse(f)}catch{}return e}function ke(e){return e&&e[0]==="j"&&e[1]===":"?e.substr(2):e}class te{constructor(i,f={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const x=this.cookies;this.cookies=ee(document.cookie),this._checkChanges(x)};const n=typeof document>"u"?"":document.cookie;this.cookies=je(i||n),this.defaultSetOptions=f,this.HAS_DOCUMENT_COOKIE=Ce()}_emitChange(i){for(let f=0;f<this.changeListeners.length;++f)this.changeListeners[f](i)}_checkChanges(i){new Set(Object.keys(i).concat(Object.keys(this.cookies))).forEach(n=>{i[n]!==this.cookies[n]&&this._emitChange({name:n,value:V(this.cookies[n])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(i,f={}){return f.doNotUpdate||this.update(),V(this.cookies[i],f)}getAll(i={}){i.doNotUpdate||this.update();const f={};for(let n in this.cookies)f[n]=V(this.cookies[n],i);return f}set(i,f,n){n?n=Object.assign(Object.assign({},this.defaultSetOptions),n):n=this.defaultSetOptions;const x=typeof f=="string"?f:JSON.stringify(f);this.cookies=Object.assign(Object.assign({},this.cookies),{[i]:x}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=J(i,x,n)),this._emitChange({name:i,value:f,options:n})}remove(i,f){const n=f=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),f),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[i],this.HAS_DOCUMENT_COOKIE&&(document.cookie=J(i,"",n)),this._emitChange({name:i,value:void 0,options:f})}addChangeListener(i){this.changeListeners.push(i),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(i){const f=this.changeListeners.indexOf(i);f>=0&&this.changeListeners.splice(f,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const re=E.createContext(new te),{Provider:Oe,Consumer:We}=re;class Ee extends E.Component{constructor(i){super(i),i.cookies?this.cookies=i.cookies:this.cookies=new te(void 0,i.defaultSetOptions)}render(){return E.createElement(Oe,{value:this.cookies},this.props.children)}}var ne={exports:{}},k={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y;function Ne(){if(Y)return k;Y=1;var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,f=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,x=e?Symbol.for("react.strict_mode"):60108,p=e?Symbol.for("react.profiler"):60114,g=e?Symbol.for("react.provider"):60109,b=e?Symbol.for("react.context"):60110,j=e?Symbol.for("react.async_mode"):60111,o=e?Symbol.for("react.concurrent_mode"):60111,N=e?Symbol.for("react.forward_ref"):60112,S=e?Symbol.for("react.suspense"):60113,w=e?Symbol.for("react.suspense_list"):60120,C=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,T=e?Symbol.for("react.responder"):60118,r=e?Symbol.for("react.scope"):60119;function s(t){if(typeof t=="object"&&t!==null){var _=t.$$typeof;switch(_){case i:switch(t=t.type,t){case j:case o:case n:case p:case x:case S:return t;default:switch(t=t&&t.$$typeof,t){case b:case N:case y:case C:case g:return t;default:return _}}case f:return _}}}function d(t){return s(t)===o}return k.AsyncMode=j,k.ConcurrentMode=o,k.ContextConsumer=b,k.ContextProvider=g,k.Element=i,k.ForwardRef=N,k.Fragment=n,k.Lazy=y,k.Memo=C,k.Portal=f,k.Profiler=p,k.StrictMode=x,k.Suspense=S,k.isAsyncMode=function(t){return d(t)||s(t)===j},k.isConcurrentMode=d,k.isContextConsumer=function(t){return s(t)===b},k.isContextProvider=function(t){return s(t)===g},k.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===i},k.isForwardRef=function(t){return s(t)===N},k.isFragment=function(t){return s(t)===n},k.isLazy=function(t){return s(t)===y},k.isMemo=function(t){return s(t)===C},k.isPortal=function(t){return s(t)===f},k.isProfiler=function(t){return s(t)===p},k.isStrictMode=function(t){return s(t)===x},k.isSuspense=function(t){return s(t)===S},k.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===n||t===o||t===p||t===x||t===S||t===w||typeof t=="object"&&t!==null&&(t.$$typeof===y||t.$$typeof===C||t.$$typeof===g||t.$$typeof===b||t.$$typeof===N||t.$$typeof===v||t.$$typeof===T||t.$$typeof===r||t.$$typeof===m)},k.typeOf=s,k}ne.exports=Ne();var Te=ne.exports,oe=Te,Re={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ie={};ie[oe.ForwardRef]=Re;ie[oe.Memo]=Be;function $e(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function Pe(e){const i=E.useContext(re);if(!i)throw new Error("Missing <CookiesProvider>");const[f,n]=E.useState(()=>i.getAll({doNotUpdate:!0}));$e()&&E.useLayoutEffect(()=>{function b(){const j=i.getAll({doNotUpdate:!0});Me(e||null,j,f)&&n(j)}return i.addChangeListener(b),()=>{i.removeChangeListener(b)}},[i,f]);const x=E.useMemo(()=>i.set.bind(i),[i]),p=E.useMemo(()=>i.remove.bind(i),[i]),g=E.useMemo(()=>i.update.bind(i),[i]);return[f,x,p,g]}function Me(e,i,f){if(!e)return!0;for(let n of e)if(i[n]!==f[n])return!0;return!1}function se(e){const[i,f]=E.useState(""),[n,x]=E.useState(""),[p,g]=E.useState(""),[b,j]=E.useState(""),[o,N]=E.useState(!0),[S,w,C]=Pe(["author","email","url","6b3ebcda94b5d7402440f389500dd314__typecho_remember_author","6b3ebcda94b5d7402440f389500dd314__typecho_remember_mail"]);return E.useEffect(()=>{S.author&&(f(S.author),N(!1)),S.email&&x(S.email),S.url&&g(S.url)},[]),h.jsxs(h.Fragment,{children:[e.selected.coid!==0&&h.jsxs("div",{className:"mt-4 flex justify-between",children:[h.jsxs("p",{className:"primary-color font-bold",children:[h.jsx("i",{className:"ri-reply-line"})," 回复 @",e.selected.author," ","的评论："]}),h.jsx("p",{children:h.jsx("span",{className:"link",onClick:()=>e.clearReply(),children:"取消回复"})})]}),h.jsxs("p",{className:"mt-4 primary-color card p-2",children:[h.jsx("i",{className:"ri-information-line"})," ",h.jsx("b",{children:"所有评论都将经过博主审核。"}),"请勿填写无意义邮箱或发表无关评论、广告等，否则会被视为垃圾评论。",h.jsx("br",{}),"评论提交组件是最近刚写的，如果遇到 bug 欢迎向博主反馈～"]}),h.jsxs("form",{onSubmit:y=>{w("author",i),w("email",n),w("url",p),w("6b3ebcda94b5d7402440f389500dd314__typecho_remember_author",i),w("6b3ebcda94b5d7402440f389500dd314__typecho_remember_mail",n),e.handleSubmit(i,n,p,b),j(""),y.preventDefault()},className:"mt-4 grid gap-4 grid-cols-1 sm:grid-cols-3 relative",children:[h.jsx("input",{placeholder:"你的名字",type:"text",required:!0,value:i,onChange:y=>{f(y.target.value)}}),h.jsx("input",{placeholder:"邮箱",type:"email",required:!0,value:n,onChange:y=>{x(y.target.value)}}),h.jsx("input",{placeholder:"网址",type:"url",value:p,onChange:y=>{g(y.target.value)}}),h.jsx("textarea",{rows:8,className:"sm:col-span-3",placeholder:"说点什么吧……",required:!0,value:b,onChange:y=>{j(y.target.value)}}),h.jsx("button",{type:"submit",className:"sm:col-span-3",disabled:e.sending,children:e.sending?"提交中……":"提交"})]}),o&&h.jsxs("p",{className:"mt-4 secondary-color text-sm leading-normal",children:["提交评论即表明你同意本网站使用 Cookie，并允许本站在后台记录你的邮箱、IP 地址等必要信息。",h.jsx("br",{}),"（提交一次评论后，本提示将不再展示）"]})]})}function ae(e){function i(f){const n=new Date(f*1e3),x=n.getFullYear(),p=n.getMonth()+1,g=n.getDate(),b=n.getHours().toString().padStart(2,"0"),j=n.getMinutes().toString().padStart(2,"0");return`${x} 年 ${p} 月 ${g} 日 ${b}:${j}`}return h.jsxs("div",{className:"primary-color my-4",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("img",{src:"https://gravatar.com/avatar/"+e.comment.mailHash,className:"rounded-full w-12 mr-2"}),h.jsxs("div",{className:"m-2",children:[e.comment.url?h.jsx("a",{href:e.comment.url,className:"link",target:"_blank",children:h.jsx("h4",{children:e.comment.author})}):h.jsx("h4",{children:e.comment.author}),h.jsxs("p",{className:"mt-1",children:[h.jsx("span",{className:"secondary-color",children:i(e.comment.created)}),e.comment.status==="approved"?h.jsxs("span",{className:"link ml-2 primary-color",onClick:()=>{e.handleReply(e.comment.coid,e.comment.author)},children:[h.jsx("i",{className:"ri-reply-line"})," 回复"]}):h.jsxs("span",{className:"ml-2 primary-color",children:[h.jsx("i",{className:"ri-admin-line"})," 待审核"]})]})]})]}),h.jsx("p",{className:"mt-2 break-all",children:e.comment.text}),e.comment.coid===e.selected.coid&&h.jsx(se,{selected:e.selected,clearReply:()=>{e.handleReply(0,"")},handleSubmit:e.handleSubmit,sending:e.sending}),h.jsx("div",{className:"ml-8",children:e.comment.children.map(f=>h.jsx(ae,{selected:e.selected,comment:f,handleReply:e.handleReply,handleSubmit:e.handleSubmit,sending:e.sending},f.coid))})]})}var ce={exports:{}};function Le(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var G={exports:{}};const De={},Ae=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),Ie=ue(Ae);var Q;function He(){return Q||(Q=1,function(e,i){(function(f,n){e.exports=n()})(L,function(){var f=f||function(n,x){var p;if(typeof window<"u"&&window.crypto&&(p=window.crypto),typeof self<"u"&&self.crypto&&(p=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(p=globalThis.crypto),!p&&typeof window<"u"&&window.msCrypto&&(p=window.msCrypto),!p&&typeof L<"u"&&L.crypto&&(p=L.crypto),!p&&typeof Le=="function")try{p=Ie}catch{}var g=function(){if(p){if(typeof p.getRandomValues=="function")try{return p.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof p.randomBytes=="function")try{return p.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},b=Object.create||function(){function r(){}return function(s){var d;return r.prototype=s,d=new r,r.prototype=null,d}}(),j={},o=j.lib={},N=o.Base=function(){return{extend:function(r){var s=b(this);return r&&s.mixIn(r),(!s.hasOwnProperty("init")||this.init===s.init)&&(s.init=function(){s.$super.init.apply(this,arguments)}),s.init.prototype=s,s.$super=this,s},create:function(){var r=this.extend();return r.init.apply(r,arguments),r},init:function(){},mixIn:function(r){for(var s in r)r.hasOwnProperty(s)&&(this[s]=r[s]);r.hasOwnProperty("toString")&&(this.toString=r.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),S=o.WordArray=N.extend({init:function(r,s){r=this.words=r||[],s!=x?this.sigBytes=s:this.sigBytes=r.length*4},toString:function(r){return(r||C).stringify(this)},concat:function(r){var s=this.words,d=r.words,t=this.sigBytes,_=r.sigBytes;if(this.clamp(),t%4)for(var O=0;O<_;O++){var B=d[O>>>2]>>>24-O%4*8&255;s[t+O>>>2]|=B<<24-(t+O)%4*8}else for(var R=0;R<_;R+=4)s[t+R>>>2]=d[R>>>2];return this.sigBytes+=_,this},clamp:function(){var r=this.words,s=this.sigBytes;r[s>>>2]&=4294967295<<32-s%4*8,r.length=n.ceil(s/4)},clone:function(){var r=N.clone.call(this);return r.words=this.words.slice(0),r},random:function(r){for(var s=[],d=0;d<r;d+=4)s.push(g());return new S.init(s,r)}}),w=j.enc={},C=w.Hex={stringify:function(r){for(var s=r.words,d=r.sigBytes,t=[],_=0;_<d;_++){var O=s[_>>>2]>>>24-_%4*8&255;t.push((O>>>4).toString(16)),t.push((O&15).toString(16))}return t.join("")},parse:function(r){for(var s=r.length,d=[],t=0;t<s;t+=2)d[t>>>3]|=parseInt(r.substr(t,2),16)<<24-t%8*4;return new S.init(d,s/2)}},y=w.Latin1={stringify:function(r){for(var s=r.words,d=r.sigBytes,t=[],_=0;_<d;_++){var O=s[_>>>2]>>>24-_%4*8&255;t.push(String.fromCharCode(O))}return t.join("")},parse:function(r){for(var s=r.length,d=[],t=0;t<s;t++)d[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new S.init(d,s)}},m=w.Utf8={stringify:function(r){try{return decodeURIComponent(escape(y.stringify(r)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(r){return y.parse(unescape(encodeURIComponent(r)))}},v=o.BufferedBlockAlgorithm=N.extend({reset:function(){this._data=new S.init,this._nDataBytes=0},_append:function(r){typeof r=="string"&&(r=m.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes},_process:function(r){var s,d=this._data,t=d.words,_=d.sigBytes,O=this.blockSize,B=O*4,R=_/B;r?R=n.ceil(R):R=n.max((R|0)-this._minBufferSize,0);var $=R*O,M=n.min($*4,_);if($){for(var P=0;P<$;P+=O)this._doProcessBlock(t,P);s=t.splice(0,$),d.sigBytes-=M}return new S.init(s,M)},clone:function(){var r=N.clone.call(this);return r._data=this._data.clone(),r},_minBufferSize:0});o.Hasher=v.extend({cfg:N.extend(),init:function(r){this.cfg=this.cfg.extend(r),this.reset()},reset:function(){v.reset.call(this),this._doReset()},update:function(r){return this._append(r),this._process(),this},finalize:function(r){r&&this._append(r);var s=this._doFinalize();return s},blockSize:16,_createHelper:function(r){return function(s,d){return new r.init(d).finalize(s)}},_createHmacHelper:function(r){return function(s,d){return new T.HMAC.init(r,d).finalize(s)}}});var T=j.algo={};return j}(Math);return f})}(G)),G.exports}(function(e,i){(function(f,n){e.exports=n(He())})(L,function(f){return function(n){var x=f,p=x.lib,g=p.WordArray,b=p.Hasher,j=x.algo,o=[];(function(){for(var m=0;m<64;m++)o[m]=n.abs(n.sin(m+1))*4294967296|0})();var N=j.MD5=b.extend({_doReset:function(){this._hash=new g.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(m,v){for(var T=0;T<16;T++){var r=v+T,s=m[r];m[r]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360}var d=this._hash.words,t=m[v+0],_=m[v+1],O=m[v+2],B=m[v+3],R=m[v+4],$=m[v+5],M=m[v+6],P=m[v+7],D=m[v+8],A=m[v+9],I=m[v+10],H=m[v+11],U=m[v+12],F=m[v+13],z=m[v+14],W=m[v+15],a=d[0],c=d[1],l=d[2],u=d[3];a=S(a,c,l,u,t,7,o[0]),u=S(u,a,c,l,_,12,o[1]),l=S(l,u,a,c,O,17,o[2]),c=S(c,l,u,a,B,22,o[3]),a=S(a,c,l,u,R,7,o[4]),u=S(u,a,c,l,$,12,o[5]),l=S(l,u,a,c,M,17,o[6]),c=S(c,l,u,a,P,22,o[7]),a=S(a,c,l,u,D,7,o[8]),u=S(u,a,c,l,A,12,o[9]),l=S(l,u,a,c,I,17,o[10]),c=S(c,l,u,a,H,22,o[11]),a=S(a,c,l,u,U,7,o[12]),u=S(u,a,c,l,F,12,o[13]),l=S(l,u,a,c,z,17,o[14]),c=S(c,l,u,a,W,22,o[15]),a=w(a,c,l,u,_,5,o[16]),u=w(u,a,c,l,M,9,o[17]),l=w(l,u,a,c,H,14,o[18]),c=w(c,l,u,a,t,20,o[19]),a=w(a,c,l,u,$,5,o[20]),u=w(u,a,c,l,I,9,o[21]),l=w(l,u,a,c,W,14,o[22]),c=w(c,l,u,a,R,20,o[23]),a=w(a,c,l,u,A,5,o[24]),u=w(u,a,c,l,z,9,o[25]),l=w(l,u,a,c,B,14,o[26]),c=w(c,l,u,a,D,20,o[27]),a=w(a,c,l,u,F,5,o[28]),u=w(u,a,c,l,O,9,o[29]),l=w(l,u,a,c,P,14,o[30]),c=w(c,l,u,a,U,20,o[31]),a=C(a,c,l,u,$,4,o[32]),u=C(u,a,c,l,D,11,o[33]),l=C(l,u,a,c,H,16,o[34]),c=C(c,l,u,a,z,23,o[35]),a=C(a,c,l,u,_,4,o[36]),u=C(u,a,c,l,R,11,o[37]),l=C(l,u,a,c,P,16,o[38]),c=C(c,l,u,a,I,23,o[39]),a=C(a,c,l,u,F,4,o[40]),u=C(u,a,c,l,t,11,o[41]),l=C(l,u,a,c,B,16,o[42]),c=C(c,l,u,a,M,23,o[43]),a=C(a,c,l,u,A,4,o[44]),u=C(u,a,c,l,U,11,o[45]),l=C(l,u,a,c,W,16,o[46]),c=C(c,l,u,a,O,23,o[47]),a=y(a,c,l,u,t,6,o[48]),u=y(u,a,c,l,P,10,o[49]),l=y(l,u,a,c,z,15,o[50]),c=y(c,l,u,a,$,21,o[51]),a=y(a,c,l,u,U,6,o[52]),u=y(u,a,c,l,B,10,o[53]),l=y(l,u,a,c,I,15,o[54]),c=y(c,l,u,a,_,21,o[55]),a=y(a,c,l,u,D,6,o[56]),u=y(u,a,c,l,W,10,o[57]),l=y(l,u,a,c,M,15,o[58]),c=y(c,l,u,a,F,21,o[59]),a=y(a,c,l,u,R,6,o[60]),u=y(u,a,c,l,H,10,o[61]),l=y(l,u,a,c,O,15,o[62]),c=y(c,l,u,a,A,21,o[63]),d[0]=d[0]+a|0,d[1]=d[1]+c|0,d[2]=d[2]+l|0,d[3]=d[3]+u|0},_doFinalize:function(){var m=this._data,v=m.words,T=this._nDataBytes*8,r=m.sigBytes*8;v[r>>>5]|=128<<24-r%32;var s=n.floor(T/4294967296),d=T;v[(r+64>>>9<<4)+15]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,v[(r+64>>>9<<4)+14]=(d<<8|d>>>24)&16711935|(d<<24|d>>>8)&4278255360,m.sigBytes=(v.length+1)*4,this._process();for(var t=this._hash,_=t.words,O=0;O<4;O++){var B=_[O];_[O]=(B<<8|B>>>24)&16711935|(B<<24|B>>>8)&4278255360}return t},clone:function(){var m=b.clone.call(this);return m._hash=this._hash.clone(),m}});function S(m,v,T,r,s,d,t){var _=m+(v&T|~v&r)+s+t;return(_<<d|_>>>32-d)+v}function w(m,v,T,r,s,d,t){var _=m+(v&r|T&~r)+s+t;return(_<<d|_>>>32-d)+v}function C(m,v,T,r,s,d,t){var _=m+(v^T^r)+s+t;return(_<<d|_>>>32-d)+v}function y(m,v,T,r,s,d,t){var _=m+(T^(v|~r))+s+t;return(_<<d|_>>>32-d)+v}x.MD5=b._createHelper(N),x.HmacMD5=b._createHmacHelper(N)}(Math),f.MD5})})(ce);var Ue=ce.exports;const Fe=le(Ue);function qe(e){const[i,f]=E.useState([]),[n,x]=E.useState(!1),[p,g]=E.useState(0),[b,j]=E.useState({coid:0,author:""}),[o,N]=E.useState(!1);function S(w,C,y,m){if(o===!0)return;N(!0);const v=new URL("https://blog.skywt.cn/api/comment"),T={slug:e.slug,text:m,author:w,mail:C,url:y,token:""};b.coid!==0&&(T.parent=b.coid),fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}).then(r=>{if(r.ok===!1)throw Error("HTTP Error "+r.status+" "+r.statusText);return r.json()}).then(r=>{const s={coid:Math.floor(Math.random()*1e4)+1e4,parent:b.coid,cid:-1,created:Math.floor(Date.now()/1e3),author:w,url:y,text:m,status:"wating",mailHash:Fe(C).toString(),children:[]};f([...i,s]),N(!1),j({coid:0,author:""})}).catch(r=>{console.log("Error: ",r),alert("抱歉，评论发送失败。"),N(!1)})}return E.useEffect(()=>{function w(y){let m=0;return y.forEach(v=>{m++,m+=w(v.children)}),m}const C=new URL("https://blog.skywt.cn/api/comments");C.search=new URLSearchParams({page:"1",pageSize:"100",order:"asc",slug:e.slug}).toString(),fetch(C,{method:"GET",credentials:"include"}).then(y=>y.json()).then(y=>{f(y.data.dataSet),g(w(y.data.dataSet))}).catch(y=>{console.log("Error: ",y),x(!0)})},[]),h.jsxs(Ee,{defaultSetOptions:{path:"/",maxAge:2592e3,sameSite:"lax"},children:[n?h.jsxs(h.Fragment,{children:[h.jsxs("h2",{children:[h.jsx("i",{className:"ri-discuss-line"})," 评论"]}),h.jsxs("p",{className:"primary-color card my-4 p-2",children:["🚧 抱歉，获取评论失败。请前往",h.jsx("a",{href:e.permalink,className:"link underline",children:"原博客的这篇文章"}),"底部评论区查看评论。"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("h2",{children:[h.jsx("i",{className:"ri-discuss-line"}),p>0?" 共 "+p+" 条评论":" 暂无评论"]}),i.map(w=>h.jsx(ae,{comment:w,selected:b,handleReply:(C,y)=>{j({coid:C,author:y})},handleSubmit:S,sending:o},w.coid))]}),h.jsx("hr",{className:"my-8"}),h.jsxs("h2",{children:[h.jsx("i",{className:"ri-discuss-line"})," 发表新的评论"]}),b.coid===0?h.jsx(se,{selected:b,clearReply:()=>{j({coid:0,author:""})},handleSubmit:S,sending:o}):h.jsx("div",{className:"mt-4",children:h.jsx("span",{className:"link underline primary-color",onClick:()=>{j({coid:0,author:""})},children:"取消评论回复"})})]})}export{qe as default};
