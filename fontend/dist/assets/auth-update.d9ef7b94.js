import{s as e,f as a,v as t,g as s,w as l,F as d,p as o,l as u,G as r,u as n,E as c,m as h,o as i,h as v}from"./vendor.15027bbd.js";import{g as p,a as f}from"./index.c283ea82.js";o("data-v-5db04266");const b=s("h2",null,"权限列表",-1),k={style:{"padding-bottom":"20px"}},m=v("确认修改"),g=v("取消");u();const y={setup(o){const u=r(),v=n(),y=function(){v.go(-1)},I={children:"childAuth",label:"authName",disabled:e=>0==e.authState},x=e([]);let _;p("/auth/auth-tree").then((e=>{x.value=e.data}));const C=e([]);_=u.query.roleId,p(`/role/role-auth?roleId=${_}`).then((e=>{C.value=e.data}));const j=e(),w=()=>{C.value=j.value.getCheckedKeys(!1),f("/role/auth-grant",{roleId:_,authIds:C.value}).then((e=>{c.success(e.message),v.go(-1)}))};return(e,o)=>{const u=h("el-divider"),r=h("el-button"),n=h("el-tree");return i(),a(d,null,[b,t(u),s("div",k,[t(r,{onClick:w},{default:l((()=>[m])),_:1}),t(r,{type:"primary",onClick:y},{default:l((()=>[g])),_:1})]),t(n,{ref:j,data:x.value,props:I,"node-key":"authId","default-checked-keys":C.value,"show-checkbox":""},null,8,["data","default-checked-keys"])],64)}},__scopeId:"data-v-5db04266"};export default y;