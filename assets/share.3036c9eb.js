import{d as D,r as o,l as k,o as _,q as g,b as m,e as u,am as h,w as r,c as E,ac as A,E as n,T as d,F as N,A as b,a9 as x,x as v,y as P}from"./vendor.1a6f765c.js";import{n as w,i as O}from"./index.80bc034a.js";const U={class:"list-page"},C=n("a",{href:"https://t.me/shabitt"},"\u4F5C\u8005",-1),T=n("a",{href:"https://shimily.notion.site/shimily/f90e8e28b55e423185f44c89c53c573c?v=b69a268a91c946ce9238f947100070a4"},"\u5730\u5740",-1),L=n("br",null,null,-1),S=v(" \u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u64CD\u4F5C\u9009\u62E9\u8BBE\u7F6E\u9ED8\u8BA4 "),M=n("br",null,null,-1),W=D({setup(Y){const c=o([]),i=o(),p=o(!1),y=()=>{p.value=!0,w.post("https://api.notion.com/v1/databases/f90e8e28b55e423185f44c89c53c573c/query").then(s=>{if(p.value=!1,i.value=s.data.results,i.value.length)for(let e in i.value[0].properties)c.value.push({title:e,key:e,ellipsis:{tooltip:{placement:"right"}},width:e==="\u94FE\u63A5"?600:void 0,render:a=>{const t=a.properties[e];switch(t.type){case"select":return d("div",{style:{color:a.properties[e].select.color}},t.select.name);case"created_time":return d(N,{time:new Date(t.created_time),type:"date",format:"MM-dd hh:mm"});case"rich_text":case"title":return d("div",{},{default:()=>t[t.type]&&t[t.type].length&&t[t.type].map(B=>B.plain_text)});default:return"--"}}});c.value.push({title:"\u64CD\u4F5C",key:"action",width:80,align:"right",render:e=>d(b,{type:"primary",onClick:()=>{F(e.properties.\u94FE\u63A5.rich_text[0].plain_text)}},{default:()=>"\u4FDD\u5B58"})})})},l=o(),f=()=>JSON.parse(window.localStorage.getItem("pikpakUploadFolder")||"{}"),F=s=>{let e={};if(!f().id)return window.$message.error("\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55"),!1;if(s.indexOf("PikPak://")===0){const a=s.substring(9).split("|");e={kind:"drive#file",parent_id:f().id,name:a[0],size:a[1],hash:a[2],upload_type:"UPLOAD_TYPE_RESUMABLE",objProvider:{provider:"UPLOAD_TYPE_UNKNOWN"}}}else e={kind:"drive#file",name:"",upload_type:"UPLOAD_TYPE_URL",url:{url:s},params:{from:"file"},folder_type:"DOWNLOAD"};O.post("https://api-drive.mypikpak.com/drive/v1/files",e).then(a=>{(a.data.upload_type==="UPLOAD_TYPE_UNKNOWN"||s.indexOf("PikPak://")===-1)&&window.$message.success("\u6DFB\u52A0\u6210\u529F")})};return k(()=>{l.value=f(),y()}),(s,e)=>(_(),g("div",U,[m(u(h),{title:"\u611F\u8C22@shabitt",type:"info",closable:""},{default:r(()=>[m(u(x),null,{default:r(()=>[C,T]),_:1})]),_:1}),L,!l.value||!l.value.id?(_(),E(u(h),{key:0,title:"\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55",type:"error"},{default:r(()=>[S]),_:1})):(_(),E(u(h),{key:1,title:"\u9ED8\u8BA4\u76EE\u5F55",type:"success"},{default:r(()=>[v(P(l.value.name),1)]),_:1})),M,m(u(A),{bordered:!1,size:"small",data:i.value,loading:p.value,columns:c.value},null,8,["data","loading","columns"])]))}});export{W as default};
