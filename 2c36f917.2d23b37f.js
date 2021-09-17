(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,i,n){"use strict";n.d(i,"a",(function(){return d})),n.d(i,"b",(function(){return m}));var t=n(0),r=n.n(t);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var i=r.a.useContext(p),n=i;return e&&(n="function"==typeof e?e(i):s(s({},i),e)),n},d=function(e){var i=l(e.components);return r.a.createElement(p.Provider,{value:i},e.children)},b={inlineCode:"code",wrapper:function(e){var i=e.children;return r.a.createElement(r.a.Fragment,{},i)}},u=r.a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=t,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(m,s(s({ref:i},p),{},{components:n})):r.a.createElement(m,s({ref:i},p))}));function m(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in i)hasOwnProperty.call(i,c)&&(s[c]=i[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return o})),n.d(i,"metadata",(function(){return s})),n.d(i,"toc",(function(){return c})),n.d(i,"default",(function(){return l}));var t=n(3),r=n(7),a=(n(0),n(111)),o={title:"Authorizations"},s={unversionedId:"api/authorizations",id:"api/authorizations",isDocsHomePage:!1,title:"Authorizations",description:"A package providing a base authorizations class to help check which permissions a user has.",source:"@site/docs/api/authorizations.md",slug:"/api/authorizations",permalink:"/sdk-js/api/authorizations",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/authorizations.md",version:"current",sidebar:"someSidebar",previous:{title:"Users",permalink:"/sdk-js/api/definitions/users"},next:{title:"Downloads",permalink:"/sdk-js/api/downloads"}},c=[{value:"Install",id:"install",children:[{value:"NPM",id:"npm",children:[]},{value:"Yarn",id:"yarn",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Methods",id:"methods",children:[{value:"isAuthorized",id:"isauthorized",children:[]},{value:"<code>isAnyAuthorized</code>",id:"isanyauthorized",children:[]},{value:"<code>getPermission</code>",id:"getpermission",children:[]},{value:"<code>getPermissions</code>",id:"getpermissions",children:[]},{value:"<code>getOrganizations</code>",id:"getorganizations",children:[]},{value:"<code>getPayers</code>",id:"getpayers",children:[]}]}],p={toc:c};function l(e){var i=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A package providing a base authorizations class to help check which permissions a user has."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@availity/authorizations-core"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@availity/authorizations-core.svg?style=for-the-badge",alt:"Version"}))),Object(a.b)("h2",{id:"install"},"Install"),Object(a.b)("h3",{id:"npm"},"NPM"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm install @availity/authorizations-core @availity/api-axios @availity/api-core\n")),Object(a.b)("h3",{id:"yarn"},"Yarn"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @availity/authorizations-core @availity/api-axios @availity/api-core\n")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AvAuthorizations")," requires ",Object(a.b)("inlineCode",{parentName:"p"},"AvPermissions"),", ",Object(a.b)("inlineCode",{parentName:"p"},"AvRegions"),", and a Promise lib.\n",Object(a.b)("inlineCode",{parentName:"p"},"AvPermissions")," and ",Object(a.b)("inlineCode",{parentName:"p"},"AvRegions")," can be found in ",Object(a.b)("a",{parentName:"p",href:"/api/definitions/"},"Api-Core")," but can be any objects that have ",Object(a.b)("inlineCode",{parentName:"p"},"getPermissions()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"getCurrentRegion()")," promises respectively."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"new AvAuthorizations(AvPermissions, AvRegions, promise);\n")),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("p",null,"For all methods, if no region is passed in, defaults to current region."),Object(a.b)("h3",{id:"isauthorized"},"isAuthorized"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isAuthorized(permissionId, region)")," resolves to true or false if the current user has access to this permissionId in this region."),Object(a.b)("h3",{id:"isanyauthorized"},Object(a.b)("inlineCode",{parentName:"h3"},"isAnyAuthorized")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"isAnyAuthorized(permissionIds, region)")," resolves to true or false if the current user has access to any of these permissionIds in this region."),Object(a.b)("h3",{id:"getpermission"},Object(a.b)("inlineCode",{parentName:"h3"},"getPermission")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getPermission(permissionId, region)")," resolves to the permission object for this permissionId in this region."),Object(a.b)("h3",{id:"getpermissions"},Object(a.b)("inlineCode",{parentName:"h3"},"getPermissions")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getPermissions(permissionIds, region)")," resolves to an array of permission objects for these permissionIds in this region."),Object(a.b)("h3",{id:"getorganizations"},Object(a.b)("inlineCode",{parentName:"h3"},"getOrganizations")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getOrganizations(permissionId, region)")," resolves to the organizations array for this permissionId, will be empty if not authorized"),Object(a.b)("h3",{id:"getpayers"},Object(a.b)("inlineCode",{parentName:"h3"},"getPayers")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"getPayers(permissionId, organizationId, region)")," will check permissionId for an organization with ",Object(a.b)("inlineCode",{parentName:"p"},"organizationId")," and resolve to its ",Object(a.b)("inlineCode",{parentName:"p"},"resources")," or an empty array."))}l.isMDXComponent=!0}}]);