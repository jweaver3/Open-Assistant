"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[9769],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),p=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},u="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(o,".").concat(c)]||u[c]||y[c]||r;return n?l.createElement(k,i(i({ref:e},d),{},{components:n})):l.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18631:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=n(87462),a=(n(67294),n(3905));const r={},i="Query Messages",s={type:"api",id:"query-messages",unversionedId:"query-messages",title:"Query Messages",description:"",slug:"/query-messages",frontMatter:{},api:{tags:["messages"],description:"Query messages.",operationId:"query_messages_api_v1_messages__get",parameters:[{required:!1,schema:{title:"Username",type:"string"},name:"username",in:"query"},{required:!1,schema:{title:"Api Client Id",type:"string"},name:"api_client_id",in:"query"},{required:!1,schema:{title:"Max Count",maximum:1e3,exclusiveMinimum:0,type:"integer",default:10},name:"max_count",in:"query"},{required:!1,schema:{title:"Start Date",type:"string",format:"date-time"},name:"start_date",in:"query"},{required:!1,schema:{title:"End Date",type:"string",format:"date-time"},name:"end_date",in:"query"},{required:!1,schema:{title:"Only Roots",type:"boolean",default:!1},name:"only_roots",in:"query"},{required:!1,schema:{title:"Desc",type:"boolean",default:!0},name:"desc",in:"query"},{required:!1,schema:{title:"Allow Deleted",type:"boolean",default:!1},name:"allow_deleted",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"Response Query Messages Api V1 Messages  Get",type:"array",items:{title:"Message",required:["text","is_assistant"],type:"object",properties:{id:{title:"Id",type:"string",format:"uuid"},frontend_message_id:{title:"Frontend Message Id",type:"string"},text:{title:"Text",type:"string"},is_assistant:{title:"Is Assistant",type:"boolean"},parent_id:{title:"Parent Id",type:"string",format:"uuid"},created_date:{title:"Created Date",type:"string",format:"date-time"}},description:"Represents a message in a conversation between the user and the assistant."}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{APIKeyQuery:[]},{APIKeyHeader:[]}],method:"get",path:"/api/v1/messages/",securitySchemes:{APIKeyQuery:{type:"apiKey",in:"query",name:"api_key"},APIKeyHeader:{type:"apiKey",in:"header",name:"X-API-Key"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Query Messages",description:{content:"Query messages.",type:"text/plain"},url:{path:["api","v1","messages",""],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"username",value:"<string>"},{description:{content:"",type:"text/plain"},key:"api_client_id",value:"<string>"},{description:{content:"",type:"text/plain"},key:"max_count",value:"10"},{description:{content:"",type:"text/plain"},key:"start_date",value:"<dateTime>"},{description:{content:"",type:"text/plain"},key:"end_date",value:"<dateTime>"},{description:{content:"",type:"text/plain"},key:"only_roots",value:"false"},{description:{content:"",type:"text/plain"},key:"desc",value:"true"},{description:{content:"",type:"text/plain"},key:"allow_deleted",value:"false"}],variable:[]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/query-messages",previous:{title:"Get Valid Lables",permalink:"/Open-Assistant/api/get-valid-lables"},next:{title:"Get Message",permalink:"/Open-Assistant/api/get-message"}},o=[],p={toc:o};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-messages"},"Query Messages"),(0,a.kt)("p",null,"Query messages."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"username"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Username"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"api_client_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Api Client Id"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"max_count"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Max Count"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Possible values:")," 0 < value \u2264 1000")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"start_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"end_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"only_roots"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Only Roots"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"desc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Desc"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"allow_deleted"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Allow Deleted"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Successful Response"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"frontend_message_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Frontend Message Id"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Text"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"is_assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Is Assistant"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"parent_id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uuid"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"created_date"),(0,a.kt)("span",{style:{opacity:"0.6"}}," date-time")))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"422")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Validation Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"detail"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"loc"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"msg"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}d.isMDXComponent=!0}}]);