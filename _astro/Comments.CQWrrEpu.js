import{j as o}from"./jsx-runtime.K1e75nIr.js";import{r as f}from"./index.NEDEFKed.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var T=F,O=H,R=Object.prototype.toString,b=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function F(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var r={},n=t||{},u=n.decode||K,l=0;l<e.length;){var i=e.indexOf("=",l);if(i===-1)break;var a=e.indexOf(";",l);if(a===-1)a=e.length;else if(a<i){l=e.lastIndexOf(";",i-1)+1;continue}var m=e.slice(l,i).trim();if(r[m]===void 0){var d=e.slice(i+1,a).trim();d.charCodeAt(0)===34&&(d=d.slice(1,-1)),r[m]=J(d,u)}l=a+1}return r}function H(e,t,r){var n=r||{},u=n.encode||z;if(typeof u!="function")throw new TypeError("option encode is invalid");if(!b.test(e))throw new TypeError("argument name is invalid");var l=u(t);if(l&&!b.test(l))throw new TypeError("argument val is invalid");var i=e+"="+l;if(n.maxAge!=null){var a=n.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(a)}if(n.domain){if(!b.test(n.domain))throw new TypeError("option domain is invalid");i+="; Domain="+n.domain}if(n.path){if(!b.test(n.path))throw new TypeError("option path is invalid");i+="; Path="+n.path}if(n.expires){var m=n.expires;if(!V(m)||isNaN(m.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+m.toUTCString()}if(n.httpOnly&&(i+="; HttpOnly"),n.secure&&(i+="; Secure"),n.partitioned&&(i+="; Partitioned"),n.priority){var d=typeof n.priority=="string"?n.priority.toLowerCase():n.priority;switch(d){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(n.sameSite){var y=typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite;switch(y){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function K(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function z(e){return encodeURIComponent(e)}function V(e){return R.call(e)==="[object Date]"||e instanceof Date}function J(e,t){try{return t(e)}catch{return e}}function q(){const e=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof e=="boolean"?e:typeof document=="object"&&typeof document.cookie=="string"}function Y(e){return typeof e=="string"?T(e):typeof e=="object"&&e!==null?e:{}}function k(e,t={}){const r=B(e);if(!t.doNotParse)try{return JSON.parse(r)}catch{}return e}function B(e){return e&&e[0]==="j"&&e[1]===":"?e.substr(2):e}class ${constructor(t,r={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const u=this.cookies;this.cookies=T(document.cookie),this._checkChanges(u)};const n=typeof document>"u"?"":document.cookie;this.cookies=Y(t||n),this.defaultSetOptions=r,this.HAS_DOCUMENT_COOKIE=q()}_emitChange(t){for(let r=0;r<this.changeListeners.length;++r)this.changeListeners[r](t)}_checkChanges(t){new Set(Object.keys(t).concat(Object.keys(this.cookies))).forEach(n=>{t[n]!==this.cookies[n]&&this._emitChange({name:n,value:k(this.cookies[n])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(t,r={}){return r.doNotUpdate||this.update(),k(this.cookies[t],r)}getAll(t={}){t.doNotUpdate||this.update();const r={};for(let n in this.cookies)r[n]=k(this.cookies[n],t);return r}set(t,r,n){n?n=Object.assign(Object.assign({},this.defaultSetOptions),n):n=this.defaultSetOptions;const u=typeof r=="string"?r:JSON.stringify(r);this.cookies=Object.assign(Object.assign({},this.cookies),{[t]:u}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=O(t,u,n)),this._emitChange({name:t,value:r,options:n})}remove(t,r){const n=r=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),r),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=O(t,"",n)),this._emitChange({name:t,value:void 0,options:r})}addChangeListener(t){this.changeListeners.push(t),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(t){const r=this.changeListeners.indexOf(t);r>=0&&this.changeListeners.splice(r,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const M=f.createContext(new $),{Provider:G,Consumer:me}=M;class W extends f.Component{constructor(t){super(t),t.cookies?this.cookies=t.cookies:this.cookies=new $(void 0,t.defaultSetOptions)}render(){return f.createElement(G,{value:this.cookies},this.props.children)}}var L={exports:{}},c={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E;function Q(){if(E)return c;E=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,u=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,w=e?Symbol.for("react.suspense"):60113,S=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,C=e?Symbol.for("react.lazy"):60116,x=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,j=e?Symbol.for("react.responder"):60118,I=e?Symbol.for("react.scope"):60119;function g(s){if(typeof s=="object"&&s!==null){var v=s.$$typeof;switch(v){case t:switch(s=s.type,s){case m:case d:case n:case l:case u:case w:return s;default:switch(s=s&&s.$$typeof,s){case a:case y:case C:case h:case i:return s;default:return v}}case r:return v}}}function _(s){return g(s)===d}return c.AsyncMode=m,c.ConcurrentMode=d,c.ContextConsumer=a,c.ContextProvider=i,c.Element=t,c.ForwardRef=y,c.Fragment=n,c.Lazy=C,c.Memo=h,c.Portal=r,c.Profiler=l,c.StrictMode=u,c.Suspense=w,c.isAsyncMode=function(s){return _(s)||g(s)===m},c.isConcurrentMode=_,c.isContextConsumer=function(s){return g(s)===a},c.isContextProvider=function(s){return g(s)===i},c.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===t},c.isForwardRef=function(s){return g(s)===y},c.isFragment=function(s){return g(s)===n},c.isLazy=function(s){return g(s)===C},c.isMemo=function(s){return g(s)===h},c.isPortal=function(s){return g(s)===r},c.isProfiler=function(s){return g(s)===l},c.isStrictMode=function(s){return g(s)===u},c.isSuspense=function(s){return g(s)===w},c.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===n||s===d||s===l||s===u||s===w||s===S||typeof s=="object"&&s!==null&&(s.$$typeof===C||s.$$typeof===h||s.$$typeof===i||s.$$typeof===a||s.$$typeof===y||s.$$typeof===p||s.$$typeof===j||s.$$typeof===I||s.$$typeof===x)},c.typeOf=g,c}L.exports=Q();var X=L.exports,P=X,Z={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ee={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},A={};A[P.ForwardRef]=Z;A[P.Memo]=ee;function te(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function ne(e){const t=f.useContext(M);if(!t)throw new Error("Missing <CookiesProvider>");const[r,n]=f.useState(()=>t.getAll({doNotUpdate:!0}));te()&&f.useLayoutEffect(()=>{function a(){const m=t.getAll({doNotUpdate:!0});se(e||null,m,r)&&n(m)}return t.addChangeListener(a),()=>{t.removeChangeListener(a)}},[t,r]);const u=f.useMemo(()=>t.set.bind(t),[t]),l=f.useMemo(()=>t.remove.bind(t),[t]),i=f.useMemo(()=>t.update.bind(t),[t]);return[r,u,l,i]}function se(e,t,r){if(!e)return!0;for(let n of e)if(t[n]!==r[n])return!0;return!1}function D(e){const[t,r]=f.useState(""),[n,u]=f.useState(""),[l,i]=f.useState(""),[a,m]=f.useState(""),[d,y]=f.useState(!0),[w,S]=f.useState(!0),[h,C,x]=ne(["author","mail","url"]);return f.useEffect(()=>{h.author&&(r(h.author),S(!1)),h.mail&&u(h.mail),h.url&&i(h.url)},[]),o.jsxs(o.Fragment,{children:[e.selected!==null&&o.jsxs("div",{className:"mt-4 flex justify-between",children:[o.jsxs("p",{className:"font-bold",children:[o.jsx("i",{className:"ri-reply-line"})," 回复 @",e.selected.author," ","的评论："]}),o.jsx("p",{children:o.jsx("span",{className:"link",onClick:()=>{e.setSelected(null)},children:"取消回复"})})]}),o.jsxs("p",{className:"mt-4 card card--in-content",children:[o.jsx("b",{children:"所有评论都将经过博主审核。"}),"请勿填写无意义邮箱或发表无关评论、广告等，否则会被视为垃圾评论。"]}),o.jsxs("form",{onSubmit:p=>{e.submitComment(t,n,l,a,d),m(""),p.preventDefault()},className:"mt-4 form",children:[o.jsx("input",{placeholder:"你的名字",type:"text",className:"form__input",required:!0,value:t,onChange:p=>{r(p.target.value)}}),o.jsx("input",{placeholder:"邮箱",type:"email",className:"form__input",required:!0,value:n,onChange:p=>{u(p.target.value)}}),o.jsx("input",{placeholder:"网址",type:"url",className:"form__input",value:l,onChange:p=>{i(p.target.value)}}),o.jsx("textarea",{rows:8,className:"sm:col-span-3 form__input",placeholder:"说点什么吧……",required:!0,value:a,onChange:p=>{m(p.target.value)}}),o.jsx("button",{type:"submit",className:"sm:col-span-3 form__button",disabled:e.sending,children:e.sending?"提交中……":"提交"})]}),w&&o.jsx("p",{className:"mt-4 text-secondary text-sm leading-normal",children:"提交评论即表明你同意本网站使用 Cookie，并允许本站在后台记录你的邮箱、IP 地址等必要信息。这些信息不会被透露给其他用户。（提交一次评论后，本提示将不再展示）"})]})}const re={getFullDate:e=>{e=new Date(e);const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),u=e.getHours().toString().padStart(2,"0"),l=e.getMinutes().toString().padStart(2,"0");return`${t} 年 ${r} 月 ${n} 日 ${u}:${l}`},getMonthDay:e=>{e=new Date(e);const t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${r}`}};function U(e){return o.jsxs("div",{className:"my-4",children:[o.jsxs("div",{className:"flex items-center",children:[o.jsx("img",{src:e.comment.avatar,className:"rounded-full w-12 mr-2"}),o.jsxs("div",{className:"m-2",children:[e.comment.url?o.jsx("a",{href:e.comment.url,className:"link",target:"_blank",children:o.jsx("h4",{children:e.comment.author})}):o.jsx("h4",{children:e.comment.author}),o.jsxs("p",{className:"mt-1",children:[o.jsx("span",{className:"text-secondary",children:re.getFullDate(e.comment.created)}),e.comment.status==="approved"?o.jsxs("span",{className:"link ml-2",onClick:()=>{e.setSelected(e.comment)},children:[o.jsx("i",{className:"ri-reply-line"})," 回复"]}):o.jsxs("span",{className:"ml-2",children:[o.jsx("i",{className:"ri-admin-line"})," 待审核"]})]})]})]}),o.jsx("p",{className:"mt-2 break-all whitespace-pre-wrap",children:e.comment.text}),e.comment===e.selected&&o.jsx(D,{selected:e.selected,setSelected:e.setSelected,submitComment:e.submitComment,sending:e.sending}),o.jsx("div",{className:"ml-8",children:e.comment.children.map(t=>o.jsx(U,{selected:e.selected,comment:t,setSelected:e.setSelected,submitComment:e.submitComment,sending:e.sending},t.id))})]})}const oe=async e=>{const t=new URL(`articles/${e}`,"https://api.skywt.cn/");return(await(await fetch(t)).json()).data},ie=async(e,t)=>{const r=new URL("articles","https://api.skywt.cn/");return r.search=new URLSearchParams({page:e.toString(),pageSize:t.toString()}).toString(),(await(await fetch(r)).json()).data},ae=async e=>{const t=new URL("comments","https://api.skywt.cn/");return t.search=new URLSearchParams({articleId:e.toString()}).toString(),(await(await fetch(t,{method:"GET",credentials:"include"})).json()).data},ce=async(e,t,r,n,u,l,i)=>{const a=new URL("comments","https://api.skywt.cn/"),d=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({author:e,mail:t,url:r,text:n,receiveMail:u,articleId:l,parentId:i})});if(d.ok===!1)throw Error("HTTP Error "+d.status+" "+d.statusText);return(await d.json()).data},N={getArticle:oe,getArticles:ie,getComments:ae,postComment:ce};function de(e){const[t,r]=f.useState([]),[n,u]=f.useState(!1),[l,i]=f.useState(0),[a,m]=f.useState(null),[d,y]=f.useState(!1);async function w(S,h,C,x,p){if(d!==!0){y(!0);try{const j=await N.postComment(S,h,C,x,p,e.articleId,a===null?null:a.id);a!==null?a.children.push(j):t.push(j),r([...t]),y(!1),m(null)}catch{console.log("Error: ",n),alert("抱歉，评论发送失败。"),y(!1)}}}return f.useEffect(()=>{function S(h){let C=0;return h.forEach(x=>{C++,C+=S(x.children)}),C}N.getComments(e.articleId).then(h=>{r(h),i(S(h))}).catch(h=>{console.log("Error: ",h),u(!0)})},[]),o.jsxs(W,{defaultSetOptions:{path:"/",maxAge:2592e3,sameSite:"lax",domain:".skywt.cn"},children:[n?o.jsxs("section",{className:"page__section",children:[o.jsxs("h2",{children:[o.jsx("i",{className:"ri-discuss-line"})," 评论"]}),o.jsx("p",{className:"card card--in-content my-4",children:"🚧 抱歉，获取评论失败。"})]}):o.jsxs("section",{className:"page__section",children:[o.jsxs("h2",{children:[o.jsx("i",{className:"ri-discuss-line"}),l>0?" 共 "+l+" 条评论":" 暂无评论"]}),t.map(S=>o.jsx(U,{comment:S,selected:a,setSelected:m,submitComment:w,sending:d},S.id))]}),o.jsx("hr",{className:"page__divide page__divide--between-sections"}),o.jsxs("section",{className:"page__section",children:[o.jsxs("h2",{children:[o.jsx("i",{className:"ri-discuss-line"})," 发表新的评论"]}),a===null?o.jsx(D,{selected:a,setSelected:m,submitComment:w,sending:d}):o.jsx("div",{className:"mt-4",children:o.jsx("span",{className:"link underline",onClick:()=>{m(null)},children:"取消评论回复"})})]})]})}export{de as default};