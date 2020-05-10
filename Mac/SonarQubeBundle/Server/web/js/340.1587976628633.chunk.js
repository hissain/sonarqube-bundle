(window.webpackJsonp=window.webpackJsonp||[]).push([[340,29,387],{2100:function(e,t,n){"use strict";n.r(t),t.default="This organization is subscribed to a paid plan, allowing private projects. Its private projects, members, Quality Profiles and Quality Gates are visible to members only.\n\n---\n\nSee also: [Organization Visibility](/organizations/organization-visibility/)\n"},2255:function(e,t,n){"use strict";n.r(t),n.d(t,"OrganizationPage",(function(){return I}));var a=n(13),r=n(677),o=n(666),i=n(680),s=n(766),c=n(764),l=n(668),u=n(1148),m=n.n(u),p=n(681),g=n(675),f=n.n(g),d=n(663),v=n(673),b=n.n(v),h=n(664),y=n.n(h),E=n(679),O=n.n(E),z=n(37),k=n(685),j=n(1047),_=n(1217),N=n(762);function x(e){var t,n,r,o=e.currentUser,i=e.organization,s=e.organizations.filter((function(e){return e.key!==i.key})),c=i.actions&&i.actions.admin;return i.alm?(t=Object(N.g)(i.alm.key),n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(z.translateWithParameters)("organization.bound_to_x",Object(z.translate)(t))),a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement("a",{href:i.alm.url,rel:"noopener noreferrer",target:"_blank"},Object(z.translateWithParameters)("organization.see_on_x",Object(z.translate)(t)))),r=Object(k.getBaseUrl)()+"/images/sonarcloud/"+t+".svg"):Object(N.c)(o)&&(t=Object(N.b)(o)||"",n=a.createElement(a.Fragment,null,a.createElement("p",null,Object(z.translateWithParameters)("organization.not_bound_to_x",Object(z.translate)(t))),c&&a.createElement(a.Fragment,null,a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement(d.Link,{to:"/organizations/"+i.key+"/edit"},Object(z.translate)("organization.go_to_settings_to_bind")))),r=Object(k.getBaseUrl)()+"/images/sonarcloud/"+t+"-unbound.svg"),a.createElement("header",{className:"navbar-context-header"},a.createElement(j.a,{organization:i}),s.length?a.createElement(b.a,{className:"display-inline-block",overlay:a.createElement("ul",{className:"menu"},f()(s,(function(e){return e.name.toLowerCase()})).map((function(e){return a.createElement(_.a,{key:e.key,organization:e})})))},a.createElement("a",{className:"display-inline-flex-center spacer-left link-base-color link-no-underline",href:"#"},i.name,a.createElement(O.a,{className:"little-spacer-left"}))):a.createElement("span",{className:"spacer-left"},i.name),t&&a.createElement(y.a,{mouseLeaveDelay:.25,overlay:n},a.createElement("img",{alt:Object(z.translate)(t),className:"text-middle spacer-left",height:16,src:r,width:16})),null!=i.description&&a.createElement("div",{className:"navbar-context-description"},a.createElement("p",{className:"text-limited text-top",title:i.description},i.description)))}var C=n(1042),L=n.n(C),w=n(852),P=n(669),U=n(658),S=["edit","groups","permissions","permission_templates","projects_management","webhooks"];function M(e){var t=e.location,n=e.organization,r=n.adminPages,o=void 0===r?[]:r,i=o.map((function(e){return"extension/"+e.key})).concat(S).some((function(e){return t.pathname.endsWith("organizations/"+n.key+"/"+e)}));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/edit"},Object(z.translate)("organization.settings"))),o.map((function(e){return a.createElement("li",{key:e.key},a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))})),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/groups"},Object(z.translate)("user_groups.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permissions"},Object(z.translate)("permissions.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/permission_templates"},Object(z.translate)("permission_templates"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/projects_management"},Object(z.translate)("projects_management"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/webhooks"},Object(z.translate)("webhooks.page")))),tagName:"li"},a.createElement("a",{className:U("dropdown-toggle",{active:i}),href:"#",id:"organization-navigation-admin"},Object(z.translate)("layout.settings"),a.createElement(O.a,{className:"little-spacer-left"})))}function W(e){var t=e.location,n=e.organization,r=n.pages||[];if(0===r.length)return null;var o=r.some((function(e){return t.pathname==="/organizations/"+n.key+"/extension/"+e.key}));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},r.map((function(e){return a.createElement("li",{key:e.key},a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+n.key+"/extension/"+e.key},e.name))}))),tagName:"li"},a.createElement("a",{className:U("dropdown-toggle",{active:o}),href:"#",id:"organization-navigation-more"},Object(z.translate)("more"),a.createElement(O.a,{className:"little-spacer-left"})))}var D=Object(o.connect)((function(e){return{currentUser:Object(l.getCurrentUser)(e),userOrganizations:Object(l.getMyOrganizations)(e)}}))((function(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations,i=Object(w.a)(t,r,o),s=r.actions,c=void 0===s?{}:s;return a.createElement(L.a,{className:"navbar-context-tabs"},a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/projects"},Object(z.translate)("projects.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:{pathname:"/organizations/"+r.key+"/issues",query:{resolved:"false"}}},Object(z.translate)("issues.page"))),i&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/quality_profiles"},Object(z.translate)("quality_profiles.page"))),a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/rules"},Object(z.translate)("coding_rules.page"))),i&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:Object(P.w)(r.key)},Object(z.translate)("quality_gates.page"))),Object(w.b)(t,r,o)&&a.createElement("li",null,a.createElement(d.Link,{activeClassName:"active",to:"/organizations/"+r.key+"/members"},Object(z.translate)("organization.members.page"))),a.createElement(W,{location:n,organization:r}),c.admin&&a.createElement(M,{location:n,organization:r}))})),T=n(904),A=n(696),B=n(125);function q(e){var t=e.currentUser,r=e.organization,o=e.userOrganizations,i=Object(B.isSonarCloud)();return a.createElement("div",{className:"navbar-context-meta"},null!=r.url&&a.createElement("a",{className:"spacer-right text-limited",href:r.url,rel:"nofollow",title:r.url},r.url),i&&Object(w.c)(r)&&Object(w.a)(t,r,o)&&a.createElement(A.a,{className:"spacer-right",doc:Promise.resolve().then(n.bind(null,2100))},a.createElement("div",{className:"badge"},Object(z.translate)("organization.paid_plan.badge"))),a.createElement("div",{className:"text-muted"},a.createElement("strong",null,Object(z.translate)("organization.key"),":")," ",r.key),i&&a.createElement("div",{className:"navbar-context-meta-secondary"},a.createElement(T.a,{currentPage:{type:"ORGANIZATION",organization:r.key}})))}function F(e){var t=e.currentUser,n=e.location,r=e.organization,o=e.userOrganizations;return a.createElement(m.a,{height:p.rawSizes.contextNavHeightRaw,id:"context-navigation"},a.createElement("div",{className:"navbar-context-justified"},a.createElement(x,{currentUser:t,organization:r,organizations:o}),a.createElement(q,{currentUser:t,organization:r,userOrganizations:o})),a.createElement(D,{location:n,organization:r}))}var K,R=(K=function(e,t){return(K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}K(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.updateOrganization=function(e){t.setState({loading:!0}),t.props.fetchOrganization(e).then(t.stopLoading,t.stopLoading)},t}return R(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.updateOrganization(this.props.params.organizationKey)},t.prototype.componentWillReceiveProps=function(e){e.params.organizationKey!==this.props.params.organizationKey&&this.updateOrganization(e.params.organizationKey)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.organization;return e&&e.actions&&null!=e.actions.admin?a.createElement("div",null,a.createElement(r.a,{defaultTitle:e.name,defer:!1,titleTemplate:"%s - "+e.name}),a.createElement(i.a,{suggestions:"organization_space"}),a.createElement(F,{currentUser:this.props.currentUser,location:this.props.location,organization:e,userOrganizations:this.props.userOrganizations}),this.props.children):this.state.loading?null:a.createElement(s.default,{withContainer:!1})},t}(a.PureComponent),H={fetchOrganization:c.f};t.default=Object(o.connect)((function(e,t){return{currentUser:Object(l.getCurrentUser)(e),organization:Object(l.getOrganizationByKey)(e,t.params.organizationKey),userOrganizations:Object(l.getMyOrganizations)(e)}}),H)(I)},671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(658),r=n(13),o=n(717),i=n(684);n(686);var s=n(664);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return r.createElement(n,{className:a("help-tooltip",e.className)},r.createElement(s.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(i.ThemeConsumer,null,(function(e){return r.createElement(o.default,{fill:e.colors.gray71,size:12})})))))}},680:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(13),o=n(705),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function s(e){var t=e.suggestions;return r.createElement(o.a.Consumer,null,(function(e){var n=e.addSuggestions,a=e.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:a,suggestions:t})}))}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},686:function(e,t,n){var a=n(660),r=n(687);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},687:function(e,t,n){(t=n(661)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},696:function(e,t,n){"use strict";var a,r=n(13),o=n(671),i=n.n(o),s=n(672),c=n(719),l=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object(s.lazyLoadComponent)((function(){return Promise.all([n.e(11),n.e(10),n.e(15),n.e(14),n.e(9),n.e(6),n.e(16)]).then(n.bind(null,825))}),"DocMarkdownBlock"),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then((function(t){var n=t.default;e.mounted&&e.setState({content:n})}),(function(){}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return this.state.content?r.createElement(i.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(u,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},t}(r.PureComponent);t.a=m},719:function(e,t,n){"use strict";function a(e){for(var t,n,a=0;a<e.length;a++){if("---"===e[a].trim()){if(void 0!==t){n=a;break}t=a}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function r(e){for(var t={},n=0;n<e.length;n++){var a=e[n].split(":").map((function(e){return e.trim()}));2===a.length&&(t[a[0]]=a[1])}return t}function o(e,t){for(var n="\x3c!-- "+t+" --\x3e",a="\x3c!-- /"+t+" --\x3e",r=e,o=r.indexOf(n),i=r.indexOf(a);-1!==o&&-1!==i;)o<i?r=r.substring(0,o)+r.substring(i+a.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'+r.substring(i,o+n.length)+'"')),r=r.substring(0,i)+r.substring(i+a.length,o)+r.substring(o+n.length)),o=r.indexOf(n),i=r.indexOf(a);return r}e.exports={getFrontMatter:function(e){var t=e.split("\n"),n=a(t);return n?r(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){var t=e.split("\n"),n=a(t);if(n){var o=r(t.slice(n.firstLine+1,n.lastLine)),i=t.slice(n.lastLine+1).join("\n");return{frontmatter:o,content:i}}return{frontmatter:{},content:e}},filterContent:function(e){var t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",a=n(125),r=a.isSonarCloud,i=a.getInstance,s=o(e.replace(/{instance}/gi,i()),"static");return(r()?o(s,"sonarqube"):o(s,"sonarcloud")).replace(new RegExp("^"+t+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+t,"g"),"")}}},752:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(13),r=n(827),o=n.n(r),i=n(681),s=n(847);function c(e){var t=e.children;return a.createElement("div",{className:"global-container"},a.createElement("div",{className:"page-wrapper",id:"container"},a.createElement(o.a,{className:"navbar-global",height:i.rawSizes.globalNavHeightRaw}),t),a.createElement(s.a,null))}},762:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return u}));var a=n(682);function r(e,t){return t.endsWith("/")||(t+="/"),c(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function o(e){return Object(a.b)(e)&&e.externalProvider?u(e.externalProvider):void 0}function i(e){return Object(a.b)(e)&&(s(e.externalProvider)||c(e.externalProvider))}function s(e){return!!e&&e.startsWith("bitbucket")}function c(e){return"github"===e}function l(e){return"microsoft"===e}function u(e){return s(e)?"bitbucket":e}},766:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(13),r=n(677),o=n(663),i=n(37),s=n(752);function c(e){var t=e.withContainer,n=void 0===t||t?s.default:a.Fragment;return a.createElement(n,null,a.createElement(r.a,{defaultTitle:Object(i.translate)("404_not_found"),defer:!1}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("h2",{className:"big-spacer-bottom"},Object(i.translate)("page_not_found")),a.createElement("p",{className:"spacer-bottom"},Object(i.translate)("address_mistyped_or_page_moved")),a.createElement("p",null,a.createElement(o.Link,{to:"/"},Object(i.translate)("go_back_to_homepage"))))))}},852:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(682);function r(e){return Boolean(e&&"PAID"===e.subscription)}function o(e,t,n){return!r(t)||i(e,t,n)}function i(e,t,n){return Boolean(t&&Object(a.b)(e)&&(t.actions&&t.actions.admin||n.some((function(e){return e.key===t.key}))))}},904:function(e,t,n){"use strict";var a,r=n(658),o=n(13),i=n(666),s=n(659),c=n(664),l=n.n(c),u=n(905),m=n.n(u),p=n(37),g=n(682),f=n(668),d=n(866),v=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.setHomePage(t.props.currentPage)},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.currentUser;if(!Object(g.b)(n))return null;var a,i,c=n.homepage,u=void 0!==c&&(i=t,(a=c).type===i.type&&a.branch===i.branch&&a.component===i.component&&a.organization===i.organization),f=u?Object(p.translate)("homepage.current"):Object(p.translate)("homepage.check");return o.createElement(l.a,{overlay:f},u?o.createElement("span",{"aria-label":f,className:r("display-inline-block",this.props.className)},o.createElement(m.a,{filled:u})):o.createElement(s.ButtonLink,{"aria-label":f,className:r("link-no-underline","set-homepage-link",this.props.className),onClick:this.handleClick},o.createElement(m.a,{filled:u})))},t}(o.PureComponent),h={setHomePage:d.f};t.a=Object(i.connect)((function(e){return{currentUser:Object(f.getCurrentUser)(e)}}),h)(b)},905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(658),r=n(13),o=n(684),i=n(662);t.default=function(e){var t=e.className,n=e.fill,s=e.filled,c=void 0!==s&&s,l=e.size;return r.createElement(o.ThemeConsumer,null,(function(e){return r.createElement(i.default,{className:a(t,"icon-outline",{"is-filled":c}),size:l,style:{color:n||e.colors.orange}},r.createElement("g",{transform:"matrix(0.870918,0,0,0.870918,0.978227,0.978227)"},r.createElement("path",{d:"M15.9,7.8L8.2,0.1C8.1,0 7.9,0 7.8,0.1L0.1,7.8C0,7.9 0,8.1 0.1,8.2C0.2,8.3 0.2,8.3 0.3,8.3L2.2,8.3L2.2,15.8C2.2,15.9 2.2,15.9 2.3,16C2.3,16 2.4,16.1 2.5,16.1L6.2,16.1C6.3,16.1 6.5,16 6.5,15.8L6.5,10.5L9.7,10.5L9.7,15.8C9.7,15.9 9.8,16.1 10,16.1L13.7,16.1C13.8,16.1 14,16 14,15.8L14,8.2L15.9,8.2C16,8.2 16,8.2 16.1,8.1C16,8 16.1,7.9 15.9,7.8Z"})))}))}}}]);
//# sourceMappingURL=340.1587976628633.chunk.js.map