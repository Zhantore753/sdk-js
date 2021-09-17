(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),p=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(t),u=a,m=l["".concat(s,".").concat(u)]||l[u]||b[u]||r;return t?i.a.createElement(m,o(o({ref:n},d),{},{components:t})):i.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=t[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(111)),s={title:"Axios Resources"},o={unversionedId:"api/axios-resources",id:"api/axios-resources",isDocsHomePage:!1,title:"Axios Resources",description:"A package providing a base authorizations class to help check which permissions a user has.",source:"@site/docs/api/axios-resources.md",slug:"/api/axios-resources",permalink:"/sdk-js/api/axios-resources",editUrl:"https://github.com/availity/sdk-js/edit/master/docusaurus/docs/api/axios-resources.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/sdk-js/api/getting-started"},next:{title:"Codes",permalink:"/sdk-js/api/definitions/codes"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[{value:"<code>AvUser</code>",id:"avuser",children:[]},{value:"<code>AvRegions</code>",id:"avregions",children:[]},{value:"<code>AvPermissions</code>",id:"avpermissions",children:[]},{value:"<code>AvUserPermissions</code>",id:"avuserpermissions",children:[]},{value:"<code>AvSpaces</code>",id:"avspaces",children:[]},{value:"<code>AvOrganizations</code>",id:"avorganizations",children:[]},{value:"<code>AvProviders</code>",id:"avproviders",children:[]},{value:"<code>AvLogMessage</code>",id:"avlogmessage",children:[]},{value:"<code>AvPdfs</code>",id:"avpdfs",children:[]},{value:"<code>AvProxy</code>",id:"avproxy",children:[]},{value:"<code>AvFiles</code>",id:"avfiles",children:[]},{value:"<code>AvFilesDelivery</code>",id:"avfilesdelivery",children:[]},{value:"<code>AvSettings</code>",id:"avsettings",children:[]},{value:"<code>AvDisclaimers</code>",id:"avdisclaimers",children:[]},{value:"<code>AvSlotMachine</code>",id:"avslotmachine",children:[]}]}],d={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A package providing a base authorizations class to help check which permissions a user has."),Object(r.b)("h1",{id:"availity-apis"},"Availity API's"),Object(r.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avuser"},"AvUser")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avregions"},"AvRegions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avpermissions"},"AvPermissions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avuserpermissions"},"AvUserPermissions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avspaces"},"AvSpaces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avorganizations"},"AvOrganizations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avproviders"},"AvProviders")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avlogmessage"},"AvLogMessage")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avproxy"},"AvProxy")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avfiles"},"AvFiles")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avfilesdelivery"},"AvFilesDelivery")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#avsettings"},"AvSettings"))),Object(r.b)("p",null,"All axios resources will have the same basic exported class structure as below. For each resource, replace the ",Object(r.b)("inlineCode",{parentName:"p"},"class")," with the resource name as well as ",Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"options")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"export default class AvPermissions extends AvApi {\n  constructor({ http, promise, merge, config }) {\n    const options = {\n      path: 'api/sdk/platform',\n      name: 'permissions',\n      ...config,\n    };\n    super({\n      http,\n      promise,\n      merge,\n      config: options,\n    });\n  }\n")),Object(r.b)("h3",{id:"avuser"},Object(r.b)("inlineCode",{parentName:"h3"},"AvUser")),Object(r.b)("p",null,"Get information about current logged in user."),Object(r.b)("h4",{id:"exported-class"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"options")," as ",Object(r.b)("inlineCode",{parentName:"p"},"users")),Object(r.b)("h4",{id:"methods"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function me(config) {\n  return this.get('me', config).then((response) => response.data);\n}\n")),Object(r.b)("p",null,"Helper function that returns information about logged in user."),Object(r.b)("h3",{id:"avregions"},Object(r.b)("inlineCode",{parentName:"h3"},"AvRegions")),Object(r.b)("p",null,"Gets the logged in user's current selected region as well as the regions the user is associated with."),Object(r.b)("h4",{id:"exported-class-1"},"Exported Class"),Object(r.b)("p",null,"Add ",Object(r.b)("inlineCode",{parentName:"p"},"avUsers")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"constructor"),". Add ",Object(r.b)("inlineCode",{parentName:"p"},"sessionBust: false")," and ",Object(r.b)("inlineCode",{parentName:"p"},"pagebust: true")," to ",Object(r.b)("inlineCode",{parentName:"p"},"options"),". Include ",Object(r.b)("inlineCode",{parentName:"p"},"this.avUsers = avUsers")," before ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," closes. ",Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"options")," as ",Object(r.b)("inlineCode",{parentName:"p"},"regions"),"."),Object(r.b)("h4",{id:"methods-1"},"Methods"),Object(r.b)("h5",{id:"afterupdateresponse"},Object(r.b)("inlineCode",{parentName:"h5"},"afterUpdate(response)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function afterUpdate(response) {\n  this.setPageBust();\n  return response;\n}\n")),Object(r.b)("h5",{id:"getregionsconfig"},Object(r.b)("inlineCode",{parentName:"h5"},"getRegions(config)")),Object(r.b)("p",null,"Get regions for logged in user."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getRegions(config) {\n  if (!this.avUsers || !this.avUsers.me) {\n    throw new Error('avUsers must be defined');\n  }\n  return this.avUsers.me().then((user) => {\n    const queryConfig = this.addParams({ userId: user.id }, config);\n    return this.query(queryConfig);\n  });\n}\n")),Object(r.b)("h5",{id:"getcurrentregion"},Object(r.b)("inlineCode",{parentName:"h5"},"getCurrentRegion()")),Object(r.b)("p",null,"Returns just the current region for the logged in user."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getCurrentRegion() {\n  return this.query({\n    params: {\n      currentlySelected: true,\n    },\n  });\n}\n")),Object(r.b)("h3",{id:"avpermissions"},Object(r.b)("inlineCode",{parentName:"h3"},"AvPermissions")),Object(r.b)("p",null,"Get permissions belonging to the logged in user."),Object(r.b)("h4",{id:"exported-class-2"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"options")," as ",Object(r.b)("inlineCode",{parentName:"p"},"permissions")),Object(r.b)("h4",{id:"methods-2"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getPermissions(id, region) {\n  return this.query({\n    params: { id, region },\n  });\n}\n")),Object(r.b)("h3",{id:"avuserpermissions"},Object(r.b)("inlineCode",{parentName:"h3"},"AvUserPermissions")),Object(r.b)("p",null,"Get permissions as well as resources of the logged in user."),Object(r.b)("h4",{id:"exported-class-3"},"Exported Class"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import qs from 'qs';\nimport AvApi from '../api';\n\nexport default class AvUserPermissions extends AvApi {\n  constructor({ http, promise, merge, config }) {\n    const options = {\n      path: 'api/internal',\n      name: 'axi-user-permissions',\n      paramsSerializer: params =>\n        qs.stringify(params, { arrayFormat: 'repeat' }),\n      ...config,\n    };\n    super({\n      http,\n      promise,\n      merge,\n      config: options,\n    });\n  }\n")),Object(r.b)("h4",{id:"methods-3"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function afterQuery(response) {\n  return response && response.data && response.data.axiUserPermissions\n    ? response.data.axiUserPermissions\n    : [];\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getPermissions(permissionId, region) {\n  return this.query({\n    params: { permissionId, region },\n  });\n}\n")),Object(r.b)("h3",{id:"avspaces"},Object(r.b)("inlineCode",{parentName:"h3"},"AvSpaces")),Object(r.b)("p",null,"Get metadata for the various content types for the Spaces platform."),Object(r.b)("h4",{id:"exported-classes"},"Exported Classes"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," in ",Object(r.b)("inlineCode",{parentName:"p"},"options")," as ",Object(r.b)("inlineCode",{parentName:"p"},"spaces")),Object(r.b)("h4",{id:"methods-4"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function parseSpaceId(query) {\n  const pairs = query.substr(1).split('&');\n\n  let spaceId = '';\n\n  if (Array.isArray(pairs)) {\n    pairs.forEach((item) => {\n      const pair = item.split('=');\n      const key = pair[0];\n      if (key === 'spaceId') {\n        spaceId = pair[1] && decodeURIComponent(pair[1]);\n      }\n    });\n  }\n  return spaceId;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getSpaceName(spaceId) {\n  if (!spaceId) {\n    throw new Error('[spaceId] must be defined');\n  }\n  return this.get(spaceId).then((response) => response.data.name);\n}\n")),Object(r.b)("h3",{id:"avorganizations"},Object(r.b)("inlineCode",{parentName:"h3"},"AvOrganizations")),Object(r.b)("p",null,"Service that allows you to get logged=in user's active organizations."),Object(r.b)("h4",{id:"exported-class-4"},"Exported Class"),Object(r.b)("p",null,"Add ",Object(r.b)("inlineCode",{parentName:"p"},"avUsers")," into constructor. Add ",Object(r.b)("inlineCode",{parentName:"p"},"this.avUsers = avUsers")," before ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," closes."),Object(r.b)("h4",{id:"methods-5"},"Methods"),Object(r.b)("h5",{id:"queryorganizationsuser-config"},Object(r.b)("inlineCode",{parentName:"h5"},"queryOrganizations(user, config)")),Object(r.b)("p",null,"Returns organizations belonging to the ",Object(r.b)("inlineCode",{parentName:"p"},"user"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function queryOrganizations(user, config) {\n  const queryConfig = this.addParams({ userId: user.id }, config);\n  return this.query(queryConfig);\n}\n")),Object(r.b)("h5",{id:"getorganizationsconfig"},Object(r.b)("inlineCode",{parentName:"h5"},"getOrganizations(config)")),Object(r.b)("p",null,"Returns organizations belonging to the logged in user."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getOrganizations(config) {\n  if (config && config.params && config.params.userId) {\n    return this.query(config);\n  }\n\n  if (!this.avUsers || !this.avUsers.me) {\n    throw new Error('avUsers must be defined');\n  }\n\n  return this.avUsers\n    .me()\n    .then((user) => this.queryOrganizations(user, config));\n}\n")),Object(r.b)("h5",{id:"postgetdata-config-additionalpostgetargs"},Object(r.b)("inlineCode",{parentName:"h5"},"postGet(data, config, additionalPostGetArgs)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"async function postGet(data, config) {\n  if (additionalPostGetArgs) {\n    const { data: organizationsData } = await super.postGet(data, config);\n\n    return this.getFilteredOrganizations(\n      organizationsData,\n      additionalPostGetArgs,\n      data\n    );\n  }\n\n  return super.postGet(data, config);\n}\n")),Object(r.b)("h5",{id:"getfilteredorganizationsorganizationsdata-additionalpostgetargs-restqueryparams"},Object(r.b)("inlineCode",{parentName:"h5"},"getFilteredOrganizations(organizationsData, additionalPostGetArgs, restQueryParams)")),Object(r.b)("p",null,"Returns organizations belonging to the logged in user that also have specified ",Object(r.b)("inlineCode",{parentName:"p"},"resources"),". Meant to be called by ",Object(r.b)("inlineCode",{parentName:"p"},"AvOrganizationSelect"),", but can be called directly if you already have ",Object(r.b)("inlineCode",{parentName:"p"},"organizations")," data."),Object(r.b)("h5",{id:"please-note-that-pagination-will-not-occur-for-organizationsdata-when-getfilteredorganizations-is-called-directly-if-pagination-is-needed-use-avorganizationselect-with-the-resourceids-prop-or-postgetdata-config-additionalpostgetargs-where-additionalpostgetargs-is-an-object-containing-the-resourceids-prop"},"Please note that pagination will not occur for ",Object(r.b)("inlineCode",{parentName:"h5"},"organizationsData")," when ",Object(r.b)("inlineCode",{parentName:"h5"},"getFilteredOrganizations")," is called directly. If pagination is needed, use ",Object(r.b)("inlineCode",{parentName:"h5"},"AvOrganizationSelect")," with the ",Object(r.b)("inlineCode",{parentName:"h5"},"resourceIds")," prop or ",Object(r.b)("inlineCode",{parentName:"h5"},"postGet(data, config, additionalPostGetArgs)"),", where ",Object(r.b)("inlineCode",{parentName:"h5"},"additionalPostGetArgs")," is an object containing the ",Object(r.b)("inlineCode",{parentName:"h5"},"resourceIds")," prop."),Object(r.b)("p",null,"Arguments should be structured as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"organizationsData: {\n    organizations, // Array of organization objects\n    limit,\n    offset,\n    totalCount\n},\nadditionalPostGetArgs: {\n    resourceIds // string or array of strings\n},\ndata: {\n    permissionId,\n    region\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"async function getFilteredOrganizations(\n  organizationsData,\n  additionalPostGetArgs,\n  data\n) {\n  const { resourceIds } = additionalPostGetArgs;\n  const { permissionId, region } = data;\n  const {\n    organizations,\n    limit: orgLimit,\n    offset: orgOffset,\n    totalCount: totalOrgCount,\n  } = organizationsData;\n\n  if (typeof permissionId !== 'string' && !Array.isArray(permissionId)) {\n    throw new TypeError(\n      'permissionId must be either an array of ids or a string'\n    );\n  }\n  if (typeof resourceIds !== 'string' && !Array.isArray(resourceIds)) {\n    throw new TypeError(\n      'resourceIds must be either an array of ids or a string'\n    );\n  }\n\n  // resourceIds is passed as readOnly, convert so that we can use Array methods on it\n  const resourceIdsArray =\n    typeof resourceIds === 'string' ? [resourceIds] : resourceIds;\n\n  if (\n    region !== this.previousRegionId ||\n    !this.arePermissionsEqual(permissionId)\n  ) {\n    // avUserPermissions will return a list of user organizations that match given permission and region\n    // This call does not need to be paginated and\n    // we should not need to call it every time we paginate orgs if region and permissions are the same\n    // Limit is set to permissionId.length because that represents maximum results we can get back\n    const {\n      data: { axiUserPermissions: userPermissions },\n    } = await this.avUserPermissions.postGet({\n      permissionId,\n      region,\n      limit: permissionId.length,\n    });\n\n    if (userPermissions) {\n      this.userPermissions = userPermissions;\n      this.previousPermissionIds = permissionId;\n      this.previousRegionId = region;\n    } else {\n      throw new Error('avUserPermissions call failed');\n    }\n  }\n\n  // Reduce the userPermissions result into a collection of orgs that contain a valid resource\n  const authorizedOrgs = this.userPermissions.reduce(\n    (accum, userPermission) => {\n      userPermission.organizations.forEach((userOrg) => {\n        const isDuplicate = accum.some((item) => item.id === userOrg.id);\n        if (!isDuplicate) {\n          // If this org contains one of the passed in resourceIds, it is an authorized org\n          const match = userOrg.resources.some((userResource) => {\n            return resourceIdsArray.some(\n              (resource) => Number(resource) === Number(userResource.id)\n            );\n          });\n          if (match) {\n            accum.push({ id: userOrg.id });\n          }\n        }\n      });\n\n      return accum;\n    },\n    []\n  );\n\n  // avUserPermissions call doesn't return much useful organization data\n  // but we can match valid ids to useful data returned from avOrganizations\n  const authorizedFilteredOrgs = organizations.filter((org) =>\n    authorizedOrgs.some((authorizedOrg) => authorizedOrg.id === org.id)\n  );\n\n  // Transform back into data object that ResourceSelect can use and paginate\n  return {\n    data: {\n      authorizedFilteredOrgs,\n      totalCount: totalOrgCount,\n      limit: orgLimit,\n      offset: orgOffset,\n    },\n  };\n}\n\nfunction arePermissionsEqual(permissionId) {\n  if (typeof permissionId !== typeof this.previousPermissionIds) return false;\n\n  if (typeof permissionId === 'string')\n    return permissionId === this.previousPermissionIds;\n\n  if (\n    Array.isArray(permissionId) &&\n    Array.isArray(this.previousPermissionIds)\n  ) {\n    if (permissionId.length !== this.previousPermissionIds.length) return false;\n\n    // if lengths are equal, need a way to check if values are the same or not\n    // Sets won't allow duplicate values\n    // if size of Set is greater than length of original arrays\n    // then a different value was inserted and they are not equal\n    const idSet = new Set([...permissionId], [...this.previousPermissionIds]);\n    if (idSet.size !== permissionId.length) return false;\n\n    return true;\n  }\n\n  return false;\n}\n")),Object(r.b)("h3",{id:"avproviders"},Object(r.b)("inlineCode",{parentName:"h3"},"AvProviders")),Object(r.b)("p",null,"Get providers associated to the logged in user's organization."),Object(r.b)("h4",{id:"exported-classes-1"},"Exported Classes"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"path")," as ",Object(r.b)("inlineCode",{parentName:"p"},"api/internal"),". ",Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"providers")),Object(r.b)("h4",{id:"methods-6"},"Methods"),Object(r.b)("h5",{id:"getproviderscustomerid-config"},Object(r.b)("inlineCode",{parentName:"h5"},"getProviders(customerId, config)")),Object(r.b)("p",null,"Helper method that gets the providers for the ",Object(r.b)("inlineCode",{parentName:"p"},"customerId"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getProviders(customerId, config) {\n  const queryConfig = this.addParams({ customerId }, config);\n  return this.query(queryConfig);\n}\n")),Object(r.b)("h5",{id:"normalizeproviders"},Object(r.b)("inlineCode",{parentName:"h5"},"normalize(providers)")),Object(r.b)("p",null,"Helper method that adds ",Object(r.b)("inlineCode",{parentName:"p"},"name")," field to the ",Object(r.b)("inlineCode",{parentName:"p"},"providers")," collection. The name field is computed from other properies of the provider object."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function normalize(providers) {\n  const cloned = providers.slice();\n\n  cloned.forEach((provider) => {\n    provider.name = provider.businessName\n      ? provider.businessName\n      : `${provider.lastName}, ${provider.firstName}`;\n  });\n\n  return cloned;\n}\n")),Object(r.b)("h3",{id:"avlogmessage"},Object(r.b)("inlineCode",{parentName:"h3"},"AvLogMessage")),Object(r.b)("p",null,"Create a log message."),Object(r.b)("h4",{id:"exported-class-5"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"import flattenObject from '../flattenObject'")),Object(r.b)("p",null,"No ",Object(r.b)("inlineCode",{parentName:"p"},"path")," in the constructor. ",Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"log-messages")),Object(r.b)("h4",{id:"methods-7"},"Methods"),Object(r.b)("p",null,"All methods take a key value object. A key named 'level` determines the log level type in the logs."),Object(r.b)("h5",{id:"sendlevelentires"},Object(r.b)("inlineCode",{parentName:"h5"},"send(level,entires)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function send(level, entries) {\n  delete entries.level;\n  const payload = { level, entries };\n  const flattened = flattenObject(payload);\n  return Object.keys(flattened).reduce((accum, key) => {\n    accum.append(key, flattened[key]);\n    return accum;\n  }, new FormData());\n}\n")),Object(r.b)("h5",{id:"debugkeyvalue"},Object(r.b)("inlineCode",{parentName:"h5"},"debug(keyValue)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function debug(entries) {\n  return this.sendBeacon(this.send('debug', entries));\n}\n")),Object(r.b)("h5",{id:"infokeyvalue"},Object(r.b)("inlineCode",{parentName:"h5"},"info(keyValue)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function info(entries) {\n  return this.sendBeacon(this.send('info', entries));\n}\n")),Object(r.b)("h5",{id:"warnkeyvalue"},Object(r.b)("inlineCode",{parentName:"h5"},"warn(keyValue)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function warn(entries) {\n  return this.sendBeacon(this.send('warn', entries));\n}\n")),Object(r.b)("h5",{id:"errorkeyvalue"},Object(r.b)("inlineCode",{parentName:"h5"},"error(keyValue)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function error(entries) {\n  return this.sendBeacon(this.send('error', entries));\n}\n")),Object(r.b)("h3",{id:"avpdfs"},Object(r.b)("inlineCode",{parentName:"h3"},"AvPdfs")),Object(r.b)("h4",{id:"exported-class-6"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"path")," as ",Object(r.b)("inlineCode",{parentName:"p"},"api/utils"),". ",Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"pdfs"),"."),Object(r.b)("h4",{id:"methods-8"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function onPdf(response) {\n  window.location = response.data.links.pdf.href;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getPdf(data, config) {\n  if (!data.applicationId || !data.fileName || !data.html) {\n    throw new Error('[applicationId], [fileName] and [html] must be defined');\n  }\n\n  return this.post(data, config).then(this.onPdf);\n}\n")),Object(r.b)("h3",{id:"avproxy"},Object(r.b)("inlineCode",{parentName:"h3"},"AvProxy")),Object(r.b)("p",null,"Create API definitions for services that are proxied to a tenant's API gateway."),Object(r.b)("h4",{id:"exported-class-7"},"Exported Class"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import AvApi from '../api';\n\nexport default class AvProxy extends AvApi {\n  constructor({ http, promise, merge, config }) {\n    if (!config || !config.tenant) {\n      throw new Error('Must specify tenant name for Proxy');\n    }\n    const options = {\n      path: `api/v1/proxy/${config.tenant}`,\n      version: '',\n      ...config,\n    };\n    super({\n      http,\n      promise,\n      merge,\n      config: options,\n    });\n  }\n}\n")),Object(r.b)("h4",{id:"options"},"Options"),Object(r.b)("h5",{id:"tenant"},Object(r.b)("inlineCode",{parentName:"h5"},"tenant")),Object(r.b)("p",null,"The Spaces platform customer name which is used as part of the url for API's proxied to 3rd party API gateway."),Object(r.b)("h3",{id:"avfiles"},Object(r.b)("inlineCode",{parentName:"h3"},"AvFiles")),Object(r.b)("p",null,"Upload a file to a bucket in the vault"),Object(r.b)("h4",{id:"exported-class-8"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"core/vault/upload/v1"),". No ",Object(r.b)("inlineCode",{parentName:"p"},"path"),". ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," as ",Object(r.b)("inlineCode",{parentName:"p"},"{'Content-Type': undefined}")),Object(r.b)("h4",{id:"methods-9"},"Methods"),Object(r.b)("h4",{id:"uploadfiledata-config"},Object(r.b)("inlineCode",{parentName:"h4"},"uploadFile(data, config)")),Object(r.b)("p",null,"Method to upload a file. ",Object(r.b)("inlineCode",{parentName:"p"},"data")," contains FormData elements with a key of either ",Object(r.b)("inlineCode",{parentName:"p"},"reference")," (if pointed to an existing file) or ",Object(r.b)("inlineCode",{parentName:"p"},"filedata")," (if uploading a new file)\n",Object(r.b)("inlineCode",{parentName:"p"},"config")," should contain ",Object(r.b)("inlineCode",{parentName:"p"},"customerId"),", ",Object(r.b)("inlineCode",{parentName:"p"},"id")," (the bucketId), and ",Object(r.b)("inlineCode",{parentName:"p"},"clientId")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function uploadFile(data, config) {\n  if (!config.customerId || !config.clientId) {\n    throw new Error(\n      '[config.customerId] and [config.clientId] must be defined'\n    );\n  }\n  config = this.config(config);\n  config.headers['X-Availity-Customer-ID'] = config.customerId;\n  config.headers['X-Client-ID'] = config.clientId;\n\n  return this.create(data, config);\n}\n")),Object(r.b)("h3",{id:"avfilesdelivery"},Object(r.b)("inlineCode",{parentName:"h3"},"AvFilesDelivery")),Object(r.b)("p",null,"Upload a batch of files to a designated channel configured on the server."),Object(r.b)("h4",{id:"exported-class-9"},"Exported Class"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\nimport AvMicroservice from '../ms';\n\nexport default class AvFilesDelivery extends AvMicroservice {\n  constructor({ http, promise, merge, config }) {\n    const options = {\n      name: 'platform/file-upload-delivery/v1/batch/deliveries',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      polling: true,\n      pollingMethod: 'GET',\n      ...config,\n    };\n    super({\n      http,\n      promise,\n      merge,\n      config: options,\n    });\n  }\n")),Object(r.b)("h4",{id:"methods-10"},"Methods"),Object(r.b)("h4",{id:"uploadfilesdeliverydata-config"},Object(r.b)("inlineCode",{parentName:"h4"},"uploadFilesDelivery(data, config)")),Object(r.b)("p",null,"Method to upload a batch of file deliveries. ",Object(r.b)("inlineCode",{parentName:"p"},"data")," contains an array of ",Object(r.b)("inlineCode",{parentName:"p"},"deliveries"),". Provide the ",Object(r.b)("inlineCode",{parentName:"p"},"fileUri")," (reference field from AvFiles), ",Object(r.b)("inlineCode",{parentName:"p"},"deliveryChannel"),", and the required ",Object(r.b)("inlineCode",{parentName:"p"},"metadata")," for that channel."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function uploadFilesDelivery(data, config) {\n  if (!config.customerId || !config.clientId) {\n    throw new Error(\n      '[config.customerId] and [config.clientId] must be defined'\n    );\n  }\n  config = this.config(config);\n  config.headers['X-Availity-Customer-ID'] = config.customerId;\n  config.headers['X-Client-ID'] = config.clientId;\n\n  return this.create(data || {}, config);\n}\n")),Object(r.b)("p",null,"Example ",Object(r.b)("inlineCode",{parentName:"p"},"data"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"data = {\n  deliveries: [\n    {\n      fileURI: upload.references[0],\n      deliveryChannel: 'DEMO',\n      metadata: {\n        payerId: 'PAYERID',\n        requestId: '123',\n        patientLastName: 'lastName',\n        patientFirstName: 'firstName',\n      },\n    },\n  ],\n};\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"config")," should contain ",Object(r.b)("inlineCode",{parentName:"p"},"customerId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"clientId")),Object(r.b)("h4",{id:"example-response"},"Example Response"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123456", // batchId "status": "COMPLETE", // COMPLETE/INPROGRESS\n  "deliveries": [\n    {\n      "id": "56789", // deliveryId "deliveryBatchId": "123456",\n      "fileURI": "<fileUri>",\n      "deliveryChannel": "DEMO",\n      "deliveryStatus": "ERRORED", // INPROGRESS/REJECTED/ERRORED/DELIVERED\n      "errors": [{ "message": "error message", "subject": "subject of error" }],\n      "metadata": {\n        "payerId": "PAYERID",\n        "requestId": "123",\n        "patientLastName": "lastName",\n        "patientFirstName": "firstName"\n      }\n    }\n  ]\n}\n')),Object(r.b)("h4",{id:"getlocationresponse"},Object(r.b)("inlineCode",{parentName:"h4"},"getLocation(response)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getLocation(response) {\n  const baseUrl = super.getLocation(response.config);\n  return `${baseUrl}/${response.data.id}`;\n}\n")),Object(r.b)("h3",{id:"avsettings"},Object(r.b)("inlineCode",{parentName:"h3"},"AvSettings")),Object(r.b)("p",null,"Store and retrieve settings to be reused.\nUse ",Object(r.b)("inlineCode",{parentName:"p"},"query(params)")," with at least an ",Object(r.b)("inlineCode",{parentName:"p"},"applicationId")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"params")," object\nUse ",Object(r.b)("inlineCode",{parentName:"p"},"update(data)")," with at least an ",Object(r.b)("inlineCode",{parentName:"p"},"applicationId")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"scope")," object, and key/value pairs of data"),Object(r.b)("h4",{id:"exported-class-10"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"path")," as ",Object(r.b)("inlineCode",{parentName:"p"},"api/utils"),". ",Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"settings")," . Add ",Object(r.b)("inlineCode",{parentName:"p"},"sessionBust: false")," and ",Object(r.b)("inlineCode",{parentName:"p"},"pageBust: false")," to ",Object(r.b)("inlineCode",{parentName:"p"},"options"),". Add ",Object(r.b)("inlineCode",{parentName:"p"},"avUsers")," to ",Object(r.b)("inlineCode",{parentName:"p"},"constructor"),". Add ",Object(r.b)("inlineCode",{parentName:"p"},"this.avUsers = avUsers")," before ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," cloes."),Object(r.b)("h4",{id:"methods-11"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getApplication(applicationId, config) {\n  if (!applicationId) {\n    throw new Error('applicationId must be defined');\n  }\n  if (!this.avUsers || !this.avUsers.me) {\n    throw new Error('avUsers must be defined');\n  }\n\n  if (config && config.params && config.params.userId) {\n    const queryConfig = this.addParams({ applicationId }, config);\n    return this.query(queryConfig);\n  }\n\n  return this.avUsers.me().then((user) => {\n    const queryConfig = this.addParams(\n      { applicationId, userId: user.id },\n      config\n    );\n    return this.query(queryConfig);\n  });\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function setApplication(applicationId, data, config) {\n  if (!this.avUsers || !this.avUsers.me) {\n    throw new Error('avUsers must be defined');\n  }\n\n  if (typeof applicationId !== 'string' && typeof applicationId !== 'number') {\n    config = data;\n    data = applicationId;\n    applicationId = '';\n  }\n\n  if (!applicationId && (!data || !data.scope || !data.scope.applicationId)) {\n    throw new Error('applicationId must be defined');\n  }\n\n  if (data && data.scope && data.scope.userId) {\n    data.scope.applicationId = applicationId;\n    return this.update(data, config);\n  }\n\n  return this.avUsers.me().then((user) => {\n    data = data || {};\n    data.scope = data.scope || {};\n    data.scope.applicationId = applicationId;\n    data.scope.userId = user.id;\n    return this.update(data, config);\n  });\n}\n")),Object(r.b)("h3",{id:"avdisclaimers"},Object(r.b)("inlineCode",{parentName:"h3"},"AvDisclaimers")),Object(r.b)("p",null,"Get disclaimers for payer space"),Object(r.b)("h4",{id:"exported-class-11"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"/disclaimers")),Object(r.b)("h4",{id:"methods-12"},"Methods"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function getDisclaimers(id, config) {\n  const queryConfig = this.addParams({ id }, config);\n  return this.query(queryConfig);\n}\n")),Object(r.b)("h3",{id:"avslotmachine"},Object(r.b)("inlineCode",{parentName:"h3"},"AvSlotMachine")),Object(r.b)("p",null,"GraphQL Server containing different queries and mutation"),Object(r.b)("h4",{id:"exported-class-12"},"Exported Class"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"name")," as ",Object(r.b)("inlineCode",{parentName:"p"},"spc/slotmachine/graphql"),"."),Object(r.b)("h4",{id:"methods-13"},"Methods"),Object(r.b)("h4",{id:"querydata-string"},Object(r.b)("inlineCode",{parentName:"h4"},"query(data: string)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"function query(data, variables) {\n  return this.create({ query: data, variables });\n}\n")))}p.isMDXComponent=!0}}]);