(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8280],{5935:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/publish",function(){return n(34870)}])},28717:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});class r{static toParams(e){let t="";for(let n in e)e.hasOwnProperty(n)&&(t+="".concat(n,"=").concat(e[n],"&"));return t.substring(0,t.length-1)}static toFormData(e){let t=new FormData;for(let n in e)e.hasOwnProperty(n)&&t.append(n,e[n]);return t}}},72355:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(24933),s=n(28717);class a{request(e,t,n,s){let a={...this.config,url:e,method:t,data:n,headers:s},i=r.Z.create();return i.interceptors.response.use(this.responseInterceptor,this.errorInterceptor),i.request(a)}get(e,t){return this.request("".concat(e,"?").concat(s.Z.toParams(t)),"get")}post(e,t,n){return this.request(e,"post",t,n)}responseInterceptor(e){switch(e.status){case 200:case 201:return e.data;default:return console.log(e),Promise.reject(e)}}errorInterceptor(e){let t={message:"服务器错误",...e.response.data};return Promise.reject(t)}constructor(e){this.config={},this.config.baseURL="https://web-evo-server.bulv.life/",e&&(this.config.baseURL=e)}}},40460:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(11527),s=n(85152),a=n.n(s);function i(e){let t="WebEvolution";return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:e.title||t}),(0,r.jsx)("meta",{name:"description",content:e.description||t+" 是一个帮助web开发者成长的社区。我们以技术文章为核心的产品形态，为开发者提供纯粹、高质的技术文章。"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"}),(0,r.jsx)("meta",{name:"baidu-site-verification",content:"code-yx2HQhygQo"}),(0,r.jsx)("meta",{name:"msvalidate.01",content:"AB78A0C987D3AEA34B969889512FF33E"}),(0,r.jsx)("meta",{name:"google-site-verification",content:"4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY"}),(0,r.jsx)("meta",{name:"baidu_union_verify",content:"50312ad0c63983b3fe6c2e2a6e10c386"})]})}n(50959)},85343:function(e,t,n){"use strict";var r=n(11527),s=n(50959),a=n(68564);n(18509);var i=n(11053),o=n(42673),c=n.n(o),l=n(72494),u=n(70009),h=n(35653),d=n(24933),f=n(72355),v=n(28717),p=n(47461),m=n(29916),g=n(31973),w=n(57928);let x=()=>({editorEffect(e){e.editor.getInputField().addEventListener("onpaste",e=>{e.preventDefault()})}});t.Z=e=>{let[t,n]=(0,s.useState)(e.value||""),[o,b]=(0,s.useState)(e.title||""),j=[(0,l.Z)(),(0,u.Z)(),x()],Z=!!e.id,{enqueueSnackbar:_}=(0,p.Ds)(),E=async e=>{let t=[];try{if(e.length>1)throw Error("一次只能上传一张图片");let n=e[0].name;if(-1!==n.indexOf(" "))throw Error("文件名不允许包含空格");let r=new f.Z("https://web-evo-server.bulv.life/"),s=await r.get("/ali/oss/policy",{}),{dir:a}=s,i=v.Z.toFormData({key:a.length?"".concat(a,"/").concat(e[0].name):e[0].name,...s,file:e[0]}),{filepath:o}=await r.post(s.host,i,{"Content-Type":"multipart/form-data"});return t.push({url:o,alt:"",title:""}),t}catch(e){throw _(e.message,{variant:"error"}),new DOMException(e.message)}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:c().actions,children:[(0,r.jsx)(m.Z,{sx:{flex:1},mr:2,children:(0,r.jsx)(g.Z,{label:"标题",size:"small",fullWidth:!0,value:o,onChange:e=>{let{target:{value:t}}=e;return b(t)}})}),(0,r.jsx)(w.Z,{variant:"outlined",sx:{mr:2},onClick:()=>{h.Z.write(JSON.stringify({title:o,mark_content:t})).then(()=>_("内容已复制到剪贴板",{variant:"success"}))},children:"复制到剪贴板"}),(0,r.jsx)(w.Z,{variant:"outlined",onClick:Z?()=>{let n="".concat("https://web-evo-server.bulv.life/").concat("blogs"),r={_id:e.id,title:o,markContent:t};d.Z.put(n,r).then(()=>_("文章修改成功",{variant:"success"})).catch(e=>_(e.message,{variant:"error"}))}:()=>{let e="".concat("https://web-evo-server.bulv.life/").concat("blogs");d.Z.post(e,{title:o,markContent:t}).then(()=>_("文章发布成功",{variant:"success"})).catch(e=>_(e.message,{variant:"error"}))},children:Z?"保存修改":"发布"})]}),(0,r.jsx)(a.M,{value:t,plugins:j,locale:i,onChange:e=>n(e),uploadImages:E})]})}},34870:function(e,t,n){"use strict";n.r(t);var r=n(11527);n(50959);var s=n(85343),a=n(40460);t.default=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{title:"发布文章"}),(0,r.jsx)(s.Z,{})]})},42673:function(e){e.exports={actions:"editor_actions__cQ2zk"}}},function(e){e.O(0,[6090,4933,2941,809,1091,9774,2888,179],function(){return e(e.s=5935)}),_N_E=e.O()}]);