(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(111)),o={title:"Files"},l={unversionedId:"api/definitions/files",id:"api/definitions/files",isDocsHomePage:!1,title:"Files",description:"Files can be uploaded to configured buckets on servers.",source:"@site/docs/api/definitions/files.md",slug:"/api/definitions/files",permalink:"/sdk-js/api/definitions/files",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/definitions/files.md",version:"current",sidebar:"someSidebar",previous:{title:"CSV",permalink:"/sdk-js/api/definitions/csv"},next:{title:"Logs",permalink:"/sdk-js/api/definitions/logs"}},c=[{value:"POST /ms/api/availity/internal/core/vault/upload/v1/:bucketId",id:"post-msapiavailityinternalcorevaultuploadv1bucketid",children:[{value:"Headers",id:"headers",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Files can be uploaded to configured buckets on servers."),Object(i.b)("h2",{id:"post-msapiavailityinternalcorevaultuploadv1bucketid"},"POST /ms/api/availity/internal/core/vault/upload/v1/:bucketId"),Object(i.b)("p",null,"Upload a file to the specified bucketId"),Object(i.b)("h3",{id:"headers"},"Headers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"X-Availity-Customer-ID")," ",Object(i.b)("em",{parentName:"li"},"(required)")," - Organization customer id is used by the system to identify the owner of the PDF document.")),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The client must send the following ",Object(i.b)("inlineCode",{parentName:"p"},"reference")," or ",Object(i.b)("inlineCode",{parentName:"p"},"filedata")," identifying the file.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"reference")," ",Object(i.b)("em",{parentName:"li"},"(optional)")," \u2014 The reference location of a file already uploaded."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"filedata")," ",Object(i.b)("em",{parentName:"li"},"(optional)")," \u2014 The file to be uploaded.")),Object(i.b)("h3",{id:"example-request"},"Example Request"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl -i -X POST -H 'Content-Type: multipart/form-data' -H 'X-Availity-Customer-Id: 1194' -F reference='bucket://vaultfs/105094/296778f1-4cf8-4d9e-be7e-72772227a958' 'https://apps.availity.com/ms/api/availity/internal/core/vault/upload/v1/myBucketId'\n")),Object(i.b)("h3",{id:"example-response"},"Example Response"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "files": [\n      {\n        "filename": "myfile.png",\n        "attachmentName": "filedata",\n        "url": "/files/105094/296778f1-4cf8-4d9e-be7e-72772227a958",\n        "mimeType": "image/png",\n        "size": 12157,\n        "bucketId": "myBucketId",\n        "expiration": "2018-12-15T12:43:53.671+0000",\n        "reference": "bucket://vaultfs/105094/296778f1-4cf8-4d9e-be7e-72772227a958"\n      }\n    ]\n  }\n]\n')))}p.isMDXComponent=!0}}]);