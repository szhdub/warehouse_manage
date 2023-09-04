import{g as e,p as l,a,e as t,d as o}from"./index.c283ea82.js";import{s as r,r as s,m as d,o as u,e as n,w as p,g as m,v as i,A as c,h as g,E as h,f,F as V,p as b,l as v,u as N,D as _,_ as w}from"./vendor.15027bbd.js";const y={class:"dialog-footer"},k=g("取消"),x=g("确定"),U={emits:["ok"],setup(a,{expose:t,emit:o}){const g=r(!1),f=s({storeName:"",storeNum:"",storeAddress:"",concat:"",phone:""}),V=s({storeName:[{required:!0,message:"请输入仓库名称",trigger:"blur"}],storeNum:[{validator:async(l,a,t)=>{if(""===a)return t(new Error("请输入仓库编号！"));return!!(await e(`/store/store-num-check?storeNum=${a}`)).data||t(new Error("仓库编号已存在！"))},trigger:"blur"}]}),b=()=>{for(let e in f)f[e]="";g.value=!1},v=r(),N=()=>{v.value.validate((e=>{e&&l("/store/store-add",f).then((e=>{o("ok"),h.success(e.message),g.value=!1}))}))};return t({open:()=>{g.value=!0}}),(e,l)=>{const a=d("el-input"),t=d("el-form-item"),o=d("el-form"),r=d("el-button"),s=d("el-dialog");return u(),n(s,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=e=>g.value=e),title:"添加仓库",width:"400px",onClose:b,"destroy-on-close":""},{footer:p((()=>[m("span",y,[i(r,{onClick:b},{default:p((()=>[k])),_:1}),i(r,{type:"primary",onClick:N},{default:p((()=>[x])),_:1})])])),default:p((()=>[i(o,{ref:v,model:c(f),rules:c(V),"label-position":"top"},{default:p((()=>[i(t,{label:"名称：",prop:"storeName"},{default:p((()=>[i(a,{modelValue:c(f).storeName,"onUpdate:modelValue":l[0]||(l[0]=e=>c(f).storeName=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"编号：",prop:"storeNum"},{default:p((()=>[i(a,{modelValue:c(f).storeNum,"onUpdate:modelValue":l[1]||(l[1]=e=>c(f).storeNum=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"地址：",prop:"storeAddress"},{default:p((()=>[i(a,{modelValue:c(f).storeAddress,"onUpdate:modelValue":l[2]||(l[2]=e=>c(f).storeAddress=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"联系人：",prop:"concat"},{default:p((()=>[i(a,{modelValue:c(f).concat,"onUpdate:modelValue":l[3]||(l[3]=e=>c(f).concat=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"电话：",prop:"phone"},{default:p((()=>[i(a,{modelValue:c(f).phone,"onUpdate:modelValue":l[4]||(l[4]=e=>c(f).phone=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}},C={class:"dialog-footer"},z=g("取消"),A=g("确定"),q={emits:["ok"],setup(e,{expose:l,emit:t}){const o=r(!1),g=s({storeName:"",storeNum:"",storeAddress:"",concat:"",phone:""}),f=s({storeName:[{required:!0,message:"请输入仓库名称",trigger:"blur"}]}),V=()=>{o.value=!1},b=r(),v=()=>{b.value.validate((e=>{e&&a("/store/store-update",g).then((e=>{t("ok"),h.success(e.message),o.value=!1}))}))};return l({open:e=>{o.value=!0;for(let l in e)g[l]=e[l]}}),(e,l)=>{const a=d("el-input"),t=d("el-form-item"),r=d("el-form"),s=d("el-button"),h=d("el-dialog");return u(),n(h,{modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=e=>o.value=e),title:"修改仓库",width:"400px",onClose:V,"destroy-on-close":""},{footer:p((()=>[m("span",C,[i(s,{onClick:V},{default:p((()=>[z])),_:1}),i(s,{type:"primary",onClick:v},{default:p((()=>[A])),_:1})])])),default:p((()=>[i(r,{ref:b,model:c(g),rules:c(f),"label-position":"right","label-width":"100px"},{default:p((()=>[i(t,{label:"编号：",prop:"storeNum"},{default:p((()=>[i(a,{modelValue:c(g).storeNum,"onUpdate:modelValue":l[0]||(l[0]=e=>c(g).storeNum=e),disabled:""},null,8,["modelValue"])])),_:1}),i(t,{label:"名称：",prop:"storeName"},{default:p((()=>[i(a,{modelValue:c(g).storeName,"onUpdate:modelValue":l[1]||(l[1]=e=>c(g).storeName=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"地址：",prop:"storeAddress"},{default:p((()=>[i(a,{modelValue:c(g).storeAddress,"onUpdate:modelValue":l[2]||(l[2]=e=>c(g).storeAddress=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"联系人：",prop:"concat"},{default:p((()=>[i(a,{modelValue:c(g).concat,"onUpdate:modelValue":l[3]||(l[3]=e=>c(g).concat=e)},null,8,["modelValue"])])),_:1}),i(t,{label:"电话：",prop:"phone"},{default:p((()=>[i(a,{modelValue:c(g).phone,"onUpdate:modelValue":l[4]||(l[4]=e=>c(g).phone=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])}}};b("data-v-268c1148");const I=m("svg",{t:"1646977561352",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3057",width:"200",height:"200"},[m("path",{d:"M986.304 871.424L747.328 630.4c-2.816-2.752-5.888-4.928-8.768-7.232 40.32-62.464 63.936-136.832 63.936-216.96 0-220.16-176.96-398.592-395.392-398.592C188.8 7.616 11.712 186.048 11.712 406.208s177.088 398.592 395.392 398.592a391.232 391.232 0 0 0 215.36-64.576c2.24 3.072 4.352 6.08 7.04 8.832l239.04 241.024a82.688 82.688 0 0 0 117.76 0 84.48 84.48 0 0 0 0-118.656m-579.2-192.512c-149.12 0-270.528-122.368-270.528-272.704 0-150.4 121.344-272.768 270.528-272.768 149.12 0 270.528 122.432 270.528 272.768 0 150.4-121.408 272.704-270.528 272.704","p-id":"3058"})],-1),H=g("  查  询 "),S=m("svg",{t:"1646977404025",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2197",width:"200",height:"200"},[m("path",{d:"M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z","p-id":"2198"})],-1),M=g("  添加仓库 "),j=m("svg",{t:"1647313957290",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2289",width:"200",height:"200"},[m("path",{d:"M395.9 406H288.5c-2.8 0-5.7-0.7-8.1-2.4-18.4-13.1-18.2-34.3-6.4-46.3l217.6-220.9c11.1-11.2 29.2-11.4 40.4-0.3l0.3 0.3 217.7 221c11.1 11.3 10.9 29.4-0.4 40.4-5.3 5.2-12.5 8.2-19.9 8.2H628.1v215.7c0 7.9-6.4 14.3-14.3 14.3H410.2c-7.9 0-14.3-6.4-14.3-14.3V406zM283.3 652.4v87.5c0 7.9 6.4 14.3 14.3 14.3h428.8c7.9 0 14.3-6.4 14.3-14.3v-87.5c0-7.9 6.4-14.3 14.3-14.3h142.9c7.9 0 14.3 6.4 14.3 14.3V914c0 7.9-6.4 14.3-14.3 14.3H126.1c-7.9 0-14.3-6.4-14.3-14.3V652.4c0-7.9 6.4-14.3 14.3-14.3H269c7.9 0 14.3 6.4 14.3 14.3z","p-id":"2290"})],-1),B=g("  导出数据 ");v();const D={setup(l){N();const a=s({storeName:"",storeAddress:"",concat:"",phone:"",pageSize:5,pageNum:1,totalNum:0}),n=r(),g=()=>{e("/store/store-page-list",a).then((e=>{n.value=e.data.resultList,a.totalNum=e.data.totalNum}))};g();const b=()=>{e("/store/exportTable",a).then((e=>{const l=e.data;t([{title:"仓库ID",key:"storeId"},{title:"仓库名称",key:"storeName"},{title:"仓库编号",key:"storeNum"},{title:"仓库地址",key:"storeAddress"},{title:"联系人",key:"concat"},{title:"电话",key:"phone"}],l,"仓库信息表")}))},v=r(),y=r(),k=e=>{a.pageSize=e,g()},x=e=>{a.pageNum=e,g()};return(e,l)=>{const t=d("el-input"),r=d("el-form-item"),s=d("el-icon"),N=d("el-button"),C=d("el-form"),z=d("el-table-column"),A=d("el-table"),D=d("el-pagination");return u(),f(V,null,[m("div",null,[i(C,{inline:"",class:"searchForm"},{default:p((()=>[i(r,null,{default:p((()=>[i(t,{modelValue:c(a).storeName,"onUpdate:modelValue":l[0]||(l[0]=e=>c(a).storeName=e),placeholder:"仓库名称",style:{width:"120px"},clearable:""},null,8,["modelValue"])])),_:1}),i(r,null,{default:p((()=>[i(t,{modelValue:c(a).storeAddress,"onUpdate:modelValue":l[1]||(l[1]=e=>c(a).storeAddress=e),placeholder:"仓库地址",style:{width:"120px"},clearable:""},null,8,["modelValue"])])),_:1}),i(r,null,{default:p((()=>[i(t,{modelValue:c(a).concat,"onUpdate:modelValue":l[2]||(l[2]=e=>c(a).concat=e),placeholder:"联系人",style:{width:"120px"},clearable:""},null,8,["modelValue"])])),_:1}),i(r,null,{default:p((()=>[i(t,{modelValue:c(a).phone,"onUpdate:modelValue":l[3]||(l[3]=e=>c(a).phone=e),placeholder:"电话",style:{width:"120px"},clearable:""},null,8,["modelValue"])])),_:1}),i(r,null,{default:p((()=>[i(N,{type:"primary",onClick:g},{default:p((()=>[i(s,null,{default:p((()=>[I])),_:1}),H])),_:1})])),_:1})])),_:1}),m("div",null,[i(N,{type:"primary",onClick:l[4]||(l[4]=e=>{v.value.open()})},{default:p((()=>[i(s,null,{default:p((()=>[S])),_:1}),M])),_:1}),i(N,{type:"warning",onClick:b},{default:p((()=>[i(s,null,{default:p((()=>[j])),_:1}),B])),_:1})])]),i(A,{data:n.value,style:{width:"100%","margin-top":"10px"},"table-layout":"auto",size:"large",border:"",stripe:""},{default:p((()=>[i(z,{type:"index",width:"50"}),i(z,{prop:"storeId",label:"仓库ID",sortable:""}),i(z,{prop:"storeName",label:"仓库名称",sortable:""}),i(z,{prop:"storeNum",label:"仓库编号",sortable:""}),i(z,{prop:"storeAddress",label:"仓库地址",sortable:""}),i(z,{prop:"concat",label:"联系人",sortable:""}),i(z,{prop:"phone",label:"电话",sortable:""}),i(z,{label:"操作"},{default:p((e=>[i(N,{type:"primary",title:"修改仓库",icon:c(_),circle:"",onClick:l=>{return a=e.row,void y.value.open(a);var a}},null,8,["icon","onClick"]),i(N,{type:"danger",title:"删除仓库",icon:c(w),circle:"",onClick:l=>{return a=e.row.storeId,void o(`/store/store-delete/${a}`).then((e=>{h.success(e.message),g()}));var a}},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data"]),i(D,{background:"",total:c(a).totalNum,"page-sizes":[5,10,15,20,25,30],"page-size":c(a).pageSize,"onUpdate:page-size":l[5]||(l[5]=e=>c(a).pageSize=e),currentPage:c(a).pageNum,"onUpdate:currentPage":l[6]||(l[6]=e=>c(a).pageNum=e),layout:"total, sizes, prev, pager, next, jumper",style:{"margin-top":"20px"},onSizeChange:k,onCurrentChange:x},null,8,["total","page-size","currentPage"]),i(U,{ref:v,onOk:g},null,512),i(q,{ref:y,onOk:g},null,512)],64)}},__scopeId:"data-v-268c1148"};export default D;