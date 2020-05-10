(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,i=e.size;return a.createElement(r.default,{className:t,size:i},a.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:l}}))}},1744:function(e,t,n){var a=n(311),r=n(1745);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},1745:function(e,t,n){(t=n(312)(!1)).push([e.i,".marketplace-editions{display:flex;flex-direction:row;margin-left:-8px;margin-right:-8px}.marketplace-edition{position:relative;flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:8px;margin-right:8px;max-width:50%}.marketplace-edition .markdown img{width:16px}.marketplace-edition .markdown h3{font-size:14px;margin-top:0}.marketplace-edition-badge{position:absolute;right:-1px;top:16px;padding:4px 8px;border-radius:2px 0 0 2px;height:inherit;line-height:inherit}.marketplace-edition-action{display:flex;align-items:baseline;justify-content:space-between}.marketplace-plugin-table{table-layout:fixed;width:100%}.marketplace-plugin-license{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),e.exports=t},1874:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(317),l=n(727),i=n(319),s=n(539),o=n.n(s),c=n(326),u=n.n(c),p=n(328),d=n(5),m=n(615),g=n(331),h=n(362),b=n(553),f=n(810),E=n(323);const v=Object(E.lazyLoadComponent)(()=>Promise.all([n.e(10),n.e(9),n.e(14),n.e(13),n.e(8),n.e(5),n.e(26)]).then(n.bind(null,463)),"DocMarkdownBlock");function k({edition:e,ncloc:t,serverId:n,currentEdition:r}){return a.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===e.key&&a.createElement(v,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Data Center Edition\n\n*Designed for High Availability and Scalability*\n\nEnterprise Edition functionality plus:\n\n* Component redundancy\n* Data resiliency\n* Horizontal scalability\n"}),"developer"===e.key&&a.createElement(v,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Developer Edition\n\n*Built for Developers by Developers*\n\nCommunity Edition functionality plus:\n\n* Branch analysis\n* Pull Request Decoration\n* Injection flaw detection\n* SonarLint notifications\n* Additional language analysis: C, C++, Obj-C, PS/SQL, ABAP, TSQL & Swift\n"}),"enterprise"===e.key&&a.createElement(v,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Enterprise Edition\n\n*Designed to Meet Enterprise Requirements*\n\nDeveloper Edition functionality plus:\n\n* Portfolio management\n* OWASP/SANS security reports\n* Executive reporting\n* Project transfer\n* Compute Engine parallel processing\n* Additional language analysis: Apex, COBOL, PL/I, RPG & VB6\n"}),a.createElement("div",{className:"marketplace-edition-action spacer-top"},a.createElement("a",{href:Object(f.e)(e,{ncloc:t,serverId:n,sourceEdition:r}),rel:"noopener noreferrer",target:"_blank"},Object(d.translate)("marketplace.request_free_trial"))))}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class j extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchData=()=>{Object(b.b)().then(e=>{this.mounted&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchData()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e}=this.props,{serverId:t,ncloc:n}=this.state,r=Object(f.a)(e);return r.length<=0?null:a.createElement("div",{className:"spacer-bottom marketplace-editions"},r.map(r=>a.createElement(k,{currentEdition:e,edition:r,key:r.key,ncloc:n,serverId:t})))}}function x({total:e}){return a.createElement("footer",{className:"spacer-top note text-center"},Object(d.translateWithParameters)("x_show",e))}function P({currentEdition:e}){return a.createElement("header",{className:"page-header",id:"marketplace-header"},a.createElement("h1",{className:"page-title"},Object(d.translate)("marketplace.page")),e&&a.createElement("h3",{className:"page-description"},Object(d.translate)("marketplace.page.you_are_running",e)),a.createElement("p",{className:"page-description"},"datacenter"===e?Object(d.translate)("marketplace.page.description_best_edition"):Object(d.translate)("marketplace.page.description")))}var N=n(310),_=n(324),w=n.n(_),C=n(1743),S=n.n(C),A=n(315),D=n.n(A),U=n(350),M=n.n(U);function z({release:e,update:t}){return a.createElement("li",{className:"big-spacer-bottom"},a.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==t.status&&t.status?a.createElement(D.a,{overlay:Object(d.translate)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},e.version)):a.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},e.version),a.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},a.createElement(M.a,{date:e.date})),e.changeLogUrl&&a.createElement("a",{className:"js-plugin-changelog-link",href:e.changeLogUrl,target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("marketplace.release_notes"))),a.createElement("div",{className:"js-plugin-changelog-description"},e.description))}function q({release:e,update:t}){return a.createElement("div",{className:"abs-width-300"},a.createElement("h6",null,Object(d.translate)("changelog")),a.createElement("ul",{className:"js-plugin-changelog-list"},t.previousUpdates&&t.previousUpdates.map(e=>e.release?a.createElement(z,{key:e.release.version,release:e.release,update:e}):null),a.createElement(z,{release:e,update:t})))}function B({release:e,update:t}){return a.createElement(w.a,{className:"display-inline-block little-spacer-left",overlay:a.createElement(q,{release:e,update:t})},a.createElement(N.ButtonLink,{className:"js-changelog"},a.createElement(S.a,null)))}var L=e=>a.createElement("td",{className:"text-top width-25 big-spacer-right"},a.createElement("div",null,a.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&a.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),a.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description)),T=n(304);function Q({license:e}){return e?a.createElement(D.a,{overlay:e},a.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},a.createElement(T.FormattedMessage,{defaultMessage:Object(d.translate)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:a.createElement("span",{className:"js-plugin-license"},e)}}))):null}function I({plugin:e}){return e.organizationName?a.createElement("li",{className:"little-spacer-bottom"},a.createElement(T.FormattedMessage,{defaultMessage:Object(d.translate)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:e.organizationUrl?a.createElement("a",{className:"js-plugin-organization",href:e.organizationUrl,target:"_blank",rel:"noopener noreferrer"},e.organizationName):a.createElement("span",{className:"js-plugin-organization"},e.organizationName)}})):null}var J=n(342),F=n.n(J),R=n(462),W=n.n(R),V=n(503),H=n.n(V),G=n(432);const Y=["license"];function K(e){return void 0!==e.release}function X(e){return function(e){return void 0!==e.version}(e)&&void 0!==e.updatedAt}const Z=H()(e=>({filter:Object(G.parseAsString)(e.filter)||"all",search:Object(G.parseAsString)(e.search)})),$=H()(e=>Object(G.cleanQuery)({filter:"all"===e.filter?void 0:Object(G.serializeString)(e.filter),search:e.search?Object(G.serializeString)(e.search):void 0}));class ee extends a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClick(this.props.update)}}render(){const{disabled:e,update:t}=this.props;return"COMPATIBLE"===t.status&&t.release?a.createElement(N.Button,{className:"js-update little-spacer-bottom",disabled:e,onClick:this.handleClick},Object(d.translateWithParameters)("marketplace.update_to_x",t.release.version)):null}}class te extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={acceptTerms:!1,loading:!1},this.doPluginAction=e=>{this.setState({loading:!0}),e({key:this.props.plugin.key}).then(()=>{this.props.refreshPending(),this.mounted&&this.setState({loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleInstall=()=>this.doPluginAction(m.g),this.handleUpdate=()=>this.doPluginAction(m.i),this.handleUninstall=()=>this.doPluginAction(m.h),this.handleTermsCheck=e=>this.setState({acceptTerms:e})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBundled(){const{plugin:e}=this.props;return a.createElement("div",{className:"js-actions"},K(e)&&a.createElement("div",null,a.createElement("p",{className:"little-spacer-bottom"},Object(d.translate)("marketplace.available_under_commercial_license")),a.createElement("a",{href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("marketplace.learn_more"))),X(e)&&a.createElement("p",null,a.createElement(W.a,{className:"little-spacer-right"}),Object(d.translate)("marketplace.installed")),X(e)&&e.updates&&e.updates.length>0&&a.createElement("div",{className:"spacer-top"},e.updates.map((e,t)=>a.createElement(ee,{disabled:this.state.loading,key:t,onClick:this.handleUpdate,update:e}))))}render(){const{plugin:e}=this.props;if(e.editionBundled)return this.renderBundled();const{loading:t}=this.state;return a.createElement("div",{className:"js-actions"},K(e)&&e.termsAndConditionsUrl&&a.createElement("p",{className:"little-spacer-bottom"},a.createElement(F.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+e.key,onCheck:this.handleTermsCheck},a.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+e.key},Object(d.translate)("marketplace.i_accept_the"))),a.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:e.termsAndConditionsUrl,target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("marketplace.terms_and_conditions"))),t&&a.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),X(e)&&a.createElement("div",{className:"display-inlin-block"},e.updates&&e.updates.map((e,n)=>a.createElement(ee,{disabled:t,key:n,onClick:this.handleUpdate,update:e})),a.createElement(N.Button,{className:"js-uninstall button-red little-spacer-left",disabled:t,onClick:this.handleUninstall},Object(d.translate)("marketplace.uninstall"))),K(e)&&a.createElement(N.Button,{className:"js-install",disabled:t||null!=e.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(d.translate)("marketplace.install")))}}function ne({plugin:e,refreshPending:t,status:n}){return a.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===n&&a.createElement("p",{className:"text-success"},Object(d.translate)("marketplace.install_pending")),"updating"===n&&a.createElement("p",{className:"text-success"},Object(d.translate)("marketplace.update_pending")),"removing"===n&&a.createElement("p",{className:"text-danger"},Object(d.translate)("marketplace.uninstall_pending")),null==n&&a.createElement(te,{plugin:e,refreshPending:t}))}function ae({plugin:e}){return e.homepageUrl||e.issueTrackerUrl?a.createElement("li",{className:"little-spacer-bottom"},a.createElement("ul",{className:"list-inline"},e.homepageUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-homepage",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("marketplace.homepage"))),e.issueTrackerUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-issues",href:e.issueTrackerUrl,target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("marketplace.issue_tracker"))))):null}function re({plugin:e,readOnly:t,refreshPending:n,status:r}){return a.createElement("tr",null,a.createElement(L,{plugin:e}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"display-flex-row little-spacer-bottom"},a.createElement("div",{className:"pull-left spacer-right"},a.createElement("span",{className:"badge badge-success"},e.release.version)),a.createElement("div",null,e.release.description,a.createElement(B,{release:e.release,update:e.update}),e.update.requires.length>0&&a.createElement("p",{className:"little-spacer-top"},a.createElement("strong",null,Object(d.translateWithParameters)("marketplace.installing_this_plugin_will_also_install_x",e.update.requires.map(e=>e.name).join(", ")))))))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(ae,{plugin:e}),a.createElement(Q,{license:e.license}),a.createElement(I,{plugin:e}))),!t&&a.createElement(ne,{plugin:e,refreshPending:n,status:r}))}class le extends a.PureComponent{constructor(){super(...arguments),this.state={changelogOpen:!1},this.handleChangelogClick=e=>{e.preventDefault(),e.stopPropagation(),this.toggleChangelog()},this.toggleChangelog=e=>{void 0!==e?this.setState({changelogOpen:e}):this.setState(e=>({changelogOpen:!e.changelogOpen}))}}render(){const{release:e,update:t}=this.props;return a.createElement("li",{className:"display-flex-row little-spacer-bottom",key:e.version},a.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===t.status?a.createElement("span",{className:"js-update-version badge badge-success"},e.version):a.createElement(D.a,{overlay:Object(d.translate)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-update-version badge badge-warning"},e.version))),a.createElement("div",null,e.description,a.createElement(B,{release:e,update:t})))}}function ie({updates:e}){return!e||e.length<=0?null:a.createElement("li",{className:"spacer-top"},a.createElement("strong",null,Object(d.translate)("marketplace.updates"),":"),a.createElement("ul",{className:"little-spacer-top"},e.map(e=>e.release?a.createElement(le,{key:e.release.version,release:e.release,update:e}):null)))}function se({plugin:e,readOnly:t,refreshPending:n,status:r}){return a.createElement("tr",null,a.createElement(L,{plugin:e}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"little-spacer-bottom"},a.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},e.version),Object(d.translate)("marketplace._installed")),a.createElement(ie,{updates:e.updates}))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(ae,{plugin:e}),a.createElement(Q,{license:e.license}),a.createElement(I,{plugin:e}))),!t&&a.createElement(ne,{plugin:e,refreshPending:n,status:r}))}class oe extends a.PureComponent{constructor(){super(...arguments),this.getPluginStatus=e=>{const{installing:t,updating:n,removing:a}=this.props.pending;return t.find(t=>t.key===e.key)?"installing":n.find(t=>t.key===e.key)?"updating":a.find(t=>t.key===e.key)?"removing":void 0},this.renderPlugin=e=>{const t=this.getPluginStatus(e);return X(e)?a.createElement(se,{plugin:e,readOnly:this.props.readOnly,refreshPending:this.props.refreshPending,status:t}):K(e)?a.createElement(re,{plugin:e,readOnly:this.props.readOnly,refreshPending:this.props.refreshPending,status:t}):null}}render(){return a.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},a.createElement("ul",null,this.props.plugins.map(e=>a.createElement("li",{className:"panel panel-vertical",key:e.key},a.createElement("table",{className:"marketplace-plugin-table"},a.createElement("tbody",null,this.renderPlugin(e)))))))}}var ce=n(448),ue=n.n(ce),pe=n(352),de=n.n(pe);class me extends a.PureComponent{constructor(){super(...arguments),this.handleSearch=e=>{this.props.updateQuery({search:e})},this.handleFilterChange=e=>this.props.updateQuery({filter:e})}render(){const{query:e,updateCenterActive:t}=this.props,n=[{label:Object(d.translate)("marketplace.all"),value:"all"},{label:Object(d.translate)("marketplace.installed"),value:"installed"},{disabled:!t,label:Object(d.translate)("marketplace.updates_only"),tooltip:t?void 0:Object(d.translate)("marketplace.not_activated"),value:"updates"}];return a.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},a.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},a.createElement(ue.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:n,value:e.filter})),a.createElement(de.a,{onChange:this.handleSearch,placeholder:Object(d.translate)("marketplace.search"),value:e.search}))}}n(1744);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class be extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loadingPlugins:!0,plugins:[]},this.fetchQueryPlugins=()=>{const e=Z(this.props.location.query);let t=this.fetchAllPlugins;"updates"===e.filter?t=m.f:"installed"===e.filter&&(t=m.c),this.setState({loadingPlugins:!0}),t().then(e=>{this.mounted&&this.setState({loadingPlugins:!1,plugins:u()(e,"name")})},this.stopLoadingPlugins)},this.fetchAllPlugins=()=>Promise.all([Object(m.d)(),Object(m.b)()]).then(([e,t])=>o()([...e,...t.plugins],"key"),this.stopLoadingPlugins),this.updateQuery=e=>{const t=$(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){he(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Z(this.props.location.query),{},e));this.props.router.push({pathname:this.props.location.pathname,query:t})},this.stopLoadingPlugins=()=>{this.mounted&&this.setState({loadingPlugins:!1})}}componentDidMount(){this.mounted=!0,this.fetchQueryPlugins()}componentDidUpdate(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e,standaloneMode:t,pendingPlugins:n}=this.props,{loadingPlugins:r,plugins:l}=this.state,i=Z(this.props.location.query),s=function(e,t){if(!t)return e.filter(e=>!Y.includes(e.key));const n=t.toLowerCase();return e.filter(e=>!Y.includes(e.key)&&(e.name.toLowerCase().includes(n)||(e.description||"").toLowerCase().includes(n)||(e.category||"").toLowerCase().includes(n)))}(l,i.search);return a.createElement("div",{className:"page page-limited",id:"marketplace-page"},a.createElement(g.a,{suggestions:"marketplace"}),a.createElement(p.a,{title:Object(d.translate)("marketplace.page")}),a.createElement(P,{currentEdition:e}),a.createElement(j,{currentEdition:e}),a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(d.translate)("marketplace.page.open_source_plugins"))),a.createElement(me,{query:i,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),r&&a.createElement("i",{className:"spinner"}),!r&&a.createElement(oe,{pending:n,plugins:s,readOnly:!t,refreshPending:this.props.fetchPendingPlugins}),!r&&a.createElement(x,{total:s.length}))}}var fe=Object(h.a)(be);t.default=Object(r.connect)(e=>{const t=Object(i.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(i.getAppState)(e).edition,standaloneMode:Object(i.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})(e=>a.createElement(l.a.Consumer,null,({fetchPendingPlugins:t,pendingPlugins:n})=>a.createElement(fe,Object.assign({fetchPendingPlugins:t,pendingPlugins:n},e))))},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(357);function l({suggestions:e}){return a.createElement(r.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>a.createElement(i,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class i extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},342:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(309),i=n(2),s=n(316);n(367);var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,n=e.children,a=e.disabled,r=e.id,o=e.loading,c=e.right,u=e.thirdState,p=e.title,d=l("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":u,"icon-checkbox-disabled":a});return n?i.createElement("a",{"aria-checked":t,className:l("link-checkbox",this.props.className,{note:a,disabled:a}),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p},c&&n,i.createElement(s.default,{loading:Boolean(o)},i.createElement("i",{className:d})),!c&&n):o?i.createElement(s.default,null):i.createElement("a",{"aria-checked":t,className:l(d,this.props.className),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p})},t.defaultProps={thirdState:!1},t}(i.PureComponent);t.default=o},350:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=n(304),i=n(28);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var n=e.children,s=e.date,o=e.long;return r.createElement(l.FormattedDate,a({value:i.parseDate(s)},o?t.longFormatterOption:t.formatterOption),n)}},354:function(e,t,n){var a=n(412);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},367:function(e,t,n){var a=n(311),r=n(368);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},368:function(e,t,n){(t=n(312)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#777;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""]),e.exports=t},382:function(e,t,n){var a=n(354);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},406:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,l=n+(a?1:-1);a?l--:++l<r;)if(t(e[l],l,e))return l;return-1}},448:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(309),i=n(2);n(492);var s=n(315),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderOption=function(e){var n=e.value===t.props.value,a=t.props.name+"__"+e.value;return i.createElement("li",{key:e.value.toString()},i.createElement("input",{checked:n,disabled:e.disabled,id:a,name:t.props.name,onChange:function(){return t.props.onCheck(e.value)},type:"radio"}),i.createElement(s.default,{overlay:e.tooltip||void 0},i.createElement("label",{htmlFor:a},e.label)))},t}return r(t,e),t.prototype.render=function(){return i.createElement("ul",{className:l("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(i.PureComponent);t.default=o},462:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(313);t.default=function(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,i=e.size;return a.createElement(r.default,{className:t,size:i},a.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:l}}))}},492:function(e,t,n){var a=n(311),r=n(493);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},493:function(e,t,n){(t=n(312)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer;font-weight:600}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""]),e.exports=t},553:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n(8),r=n(321);function l(e){return Object(a.getJSON)("/api/navigation/component",e).catch(r.a)}function i(){return Object(a.getJSON)("/api/navigation/marketplace").catch(r.a)}function s(){return Object(a.getJSON)("/api/navigation/settings").catch(r.a)}},615:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return k})),n.d(t,"a",(function(){return y}));var a=n(616),r=n.n(a),l=n(8),i=n(410),s=n(321);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return Object(l.getJSON)("/api/plugins/available").catch(s.a)}function d(){return Object(l.getJSON)("/api/plugins/pending").catch(s.a)}function m(e){if(!e)return[];return["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(t=>{const n=r()(e,e=>e.status===t);return n>-1?e[n]:void 0}).filter(i.isDefined)}function g(e,t){if(!t)return e;const n=t.indexOf(e);return c({},e,{previousUpdates:n>0?t.slice(0,n):[]})}function h(){return Object(l.getJSON)("/api/plugins/installed",{f:"category"}).then(({plugins:e})=>e,s.a)}function b(){return Promise.all([Object(l.getJSON)("/api/plugins/installed",{f:"category"}),Object(l.getJSON)("/api/plugins/updates")]).then(([e,t])=>e.plugins.map(e=>{const n=t.plugins.find(t=>t.key===e.key);return n?c({},n,{},e,{updates:m(n.updates).map(e=>g(e,n.updates))}):e})).catch(s.a)}function f(){return Promise.all([Object(l.getJSON)("/api/plugins/updates"),Object(l.getJSON)("/api/plugins/installed")]).then(([e,t])=>e.plugins.map(e=>{const n=m(e.updates).map(t=>g(t,e.updates)),a=t.plugins.find(t=>t.key===e.key);return a?c({},a,{},e,{updates:n}):c({},e,{updates:n})})).catch(s.a)}function E(e){return Object(l.post)("/api/plugins/install",e).catch(s.a)}function v(e){return Object(l.post)("/api/plugins/uninstall",e).catch(s.a)}function k(e){return Object(l.post)("/api/plugins/update",e).catch(s.a)}function y(){return Object(l.post)("/api/plugins/cancel_all").catch(s.a)}},616:function(e,t,n){var a=n(406),r=n(341),l=n(382),i=Math.max,s=Math.min;e.exports=function(e,t,n){var o=null==e?0:e.length;if(!o)return-1;var c=o-1;return void 0!==n&&(c=l(n),c=n<0?i(o+c,0):s(c,o-1)),a(e,r(t,3),c,!0)}},727:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l}));var a=n(2);const r={installing:[],removing:[],updating:[]},l="UP",i=a.createContext({fetchSystemStatus:()=>{},fetchPendingPlugins:()=>{},pendingPlugins:r,systemStatus:l});t.a=i}}]);
//# sourceMappingURL=322.m.6fae6d49.chunk.js.map