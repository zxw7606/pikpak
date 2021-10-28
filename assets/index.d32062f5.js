var ie=Object.defineProperty;var U=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,J=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&q(e,o,t[o]);if(U)for(var o of U(t))ue.call(t,o)&&q(e,o,t[o]);return e};import{d as F,u as ce,r as v,a as W,o as g,c as K,w as d,b as l,e as a,N as de,f as pe,z as me,g as ve,h as fe,i as ge,j as he,k as _e,l as ke,m as we,n as ye,p as xe,q as _,s as Ne,t as $e,v as be,x as k,y as L,A as Ce,B as Ee,C as b,D as Fe,E as w,F as Le,G as Ae,H as A,L as Be,I as G,J as De,K as Pe,M as Ie,O as Te,P as Se,Q as Oe,R as Me,S as Re,T as Y,U as ze,V as Ve,W as je,X as He,Y as Ue,Z as qe,_ as Je}from"./vendor.1df33794.js";const We=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};We();const Ke=F({setup(e){return window.$message=ce(),(t,o)=>null}}),Ge=F({setup(e){const t=v({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"}});return(o,n)=>{const s=W("router-view");return g(),K(a(fe),{locale:a(me),"date-locale":a(ve),"theme-overrides":t.value},{default:d(()=>[l(a(pe),null,{default:d(()=>[l(a(de),null,{default:d(()=>[l(Ke),l(s)]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),Ye="modulepreload",Z={},Ze="/pikpak/",C=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Ze}${n}`,n in Z)return;Z[n]=!0;const s=n.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Ye,s||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),s)return new Promise((y,f)=>{u.addEventListener("load",y),u.addEventListener("error",f)})})).then(()=>t())};var Xe="/pikpak/assets/logo1.08eb9157.png";const p=ge.create({});p.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return(!t||!t.access_token)&&E.push("/login"),e.headers={Authorization:t.token_type+" "+t.access_token},((o=e.url)==null?void 0:o.indexOf("https://pikpak.kaixuan.workers.dev"))===-1&&(e.url="https://pikpak.kaixuan.workers.dev/"+e.url),e});let N=!1;p.interceptors.response.use(e=>e,e=>{const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const n=window.localStorage.getItem("pikpakLoginData"),s=n?JSON.parse(n):{};return s.username&&s.password&&!N?(console.log("wait",o.url),N=!0,p.post("https://user.mypikpak.com/v1/auth/signin",J({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},s)).then(r=>(r.data&&r.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(r.data)),N=!1,p(o))).catch(()=>(E.push("/login"),!1))):s.username&&s.password&&N?new Promise((r,u)=>{const y=setInterval(()=>{N||(clearInterval(y),r(p(o)))},100)}):(E.push("/login"),!1);case 400:window.$message.error(t.data.error_description||"\u51FA\u9519\u4E86")}return console.log(o.url,111),Promise.reject(e)});const X=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let n=Math.floor(o/10);return e=e/Math.pow(2,10*n),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[n]};const Qe=w("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[w("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),w("div",{class:"logo-box__text"},"PikPak")],-1),et={key:0,class:"content-bottom"},tt=k("\u4F1A\u5458\u7801"),ot={class:"bottom-user-info"},st={key:0,src:Xe,class:"user-info-avatar"},at={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},nt={class:"user-info-name"},rt={key:0},it=k(" \u4F1A\u5458\u65F6\u95F4 "),lt={class:"action"},ut=k(" \u9000\u51FA\u767B\u5F55 "),ct=k("\u6DFB\u52A0"),dt=F({setup(e){const t=v(!1),o=i=>()=>Y(A,null,{default:()=>Y(i)}),n=he(),s=_e(),r=v([{label:"\u6587\u4EF6",key:"list",icon:o(je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(ze)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ve)}]),u=v(),y=()=>{p.get("https://user.mypikpak.com/v1/user/me").then(i=>{u.value=i.data}).catch(i=>{console.log(i)})},f=v(),D=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/about").then(i=>{f.value=i.data}).catch(i=>{console.log(i)})},h=v(),Q=()=>{p.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(i=>{var c;h.value=(c=i.data)==null?void 0:c.data})},ee=(i,c)=>{console.log(c),n.push("/"+c.key)};ke(()=>{y(),D(),Q()});const $=v(),x=v(!1),te=()=>{p.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:$.value}).then(i=>{window.$message.success("\u5151\u6362\u6210\u529F"),D()}).catch(i=>{console.log(i)}).finally(()=>{x.value=!1})},P=v(!1),oe=i=>{P.value=i<800,t.value||(t.value=i<800)};we(s,()=>{P.value&&(t.value=!0)});const se=ye(),ae=()=>{se.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{p.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(i=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),n.push("/login")}).catch(i=>{console.log(i)})}})};return(i,c)=>{const ne=W("router-view"),re=xe("resize");return g(),_(Re,null,[Ne(l(a(G),{"has-sider":"",onResize:oe},{default:d(()=>[l(a($e),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:c[1]||(c[1]=m=>t.value=!0),onExpand:c[2]||(c[2]=m=>t.value=!1),bordered:""},{default:d(()=>{var m,I,T,S,O,M,R,z,V,j,H;return[Qe,l(a(be),{options:r.value,value:String(a(s).name),"onUpdate:value":ee},null,8,["options","value"]),t.value?b("",!0):(g(),_("div",et,[k(L(a(X)((m=f.value)==null?void 0:m.quota.usage))+" / "+L(a(X)((I=f.value)==null?void 0:I.quota.limit))+" ",1),l(a(Ce),{type:"primary",onClick:c[0]||(c[0]=vt=>x.value=!0)},{default:d(()=>[tt]),_:1}),((T=f.value)==null?void 0:T.quota)?(g(),K(a(Ee),{key:0,type:"line",percentage:Number((((S=f.value)==null?void 0:S.quota.usage)/((O=f.value)==null?void 0:O.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((M=h.value)==null?void 0:M.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0)])),t.value?b("",!0):(g(),_("div",{key:1,class:Fe(["sider-bottom",{vip:((R=h.value)==null?void 0:R.status)==="ok"}])},[w("div",ot,[((z=h.value)==null?void 0:z.status)==="ok"?(g(),_("img",st)):(g(),_("img",at)),w("div",nt,[k(L((V=u.value)==null?void 0:V.name)+" ",1),((j=h.value)==null?void 0:j.status)==="ok"&&((H=h.value)==null?void 0:H.expire)?(g(),_("div",rt,[it,l(a(Le),{to:new Date().getTime(),time:new Date(h.value.expire).getTime(),type:"relative"},null,8,["to","time"])])):b("",!0)]),w("div",lt,[l(a(Ae),null,{trigger:d(()=>[l(a(A),{onClick:ae},{default:d(()=>[l(a(Be))]),_:1})]),default:d(()=>[ut]),_:1})])])],2))]}),_:1},8,["collapsed"]),l(a(G),null,{default:d(()=>[l(a(De),{style:{height:"100vh"}},{default:d(()=>[l(a(Pe),{style:{"max-height":"100vh"}},{default:d(()=>[l(ne)]),_:1})]),_:1})]),_:1})]),_:1},512),[[re]]),l(a(Me),{show:x.value,"onUpdate:show":c[5]||(c[5]=m=>x.value=m)},{default:d(()=>[l(a(Ie),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":d(()=>[l(a(A),{onClick:c[3]||(c[3]=m=>x.value=!1)},{default:d(()=>[l(a(Te))]),_:1})]),action:d(()=>[l(a(Se),{block:!0,type:"primary",disabled:!$.value,onClick:te},{default:d(()=>[ct]),_:1},8,["disabled"])]),default:d(()=>[l(a(Oe),{placeholder:"\u4F1A\u5458\u7801",value:$.value,"onUpdate:value":c[4]||(c[4]=m=>$.value=m)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),pt=[{path:"/",name:"home",component:dt,redirect:"/list",children:[{path:"list/:id?",name:"list",component:()=>C(()=>import("./list.e5c2533c.js"),["assets/list.e5c2533c.js","assets/list.86f421a8.css","assets/vendor.1df33794.js"])},{path:"trash",name:"trash",component:()=>C(()=>import("./trash.da5261e0.js"),["assets/trash.da5261e0.js","assets/trash.99a3677d.css","assets/vendor.1df33794.js"])},{path:"setting",name:"setting",component:()=>C(()=>import("./setting.578b7884.js"),["assets/setting.578b7884.js","assets/setting.f947579c.css","assets/vendor.1df33794.js"])}]},{path:"/login",name:"login",component:()=>C(()=>import("./login.a595b5d0.js"),["assets/login.a595b5d0.js","assets/login.4934f30b.css","assets/vendor.1df33794.js"])}],mt=He({history:Ue(),routes:pt});var E=mt;const B=qe(Ge);B.directive("resize",{mounted(e,t,o){e.$$erd=Je({strategy:"scroll"}),e.$$erd.listenTo({},e,n=>{let s=n.offsetWidth,r=n.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});B.config.globalProperties.$http=p;B.use(E).mount("#app");export{X as b,p as i};
