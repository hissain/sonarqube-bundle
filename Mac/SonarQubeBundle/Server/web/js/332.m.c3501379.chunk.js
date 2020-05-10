(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(877),i=n.n(o),a=n(2),c=n(8),r=n(321);var s=n(337);function l(e){class t extends a.Component{constructor(){super(...arguments),this.mounted=!1,this.state={channels:[],globalTypes:[],loading:!0,notifications:[],perProjectTypes:[]},this.fetchNotifications=()=>{Object(c.getJSON)("/api/notifications/list").catch(r.a).then(e=>{this.mounted&&this.setState({channels:e.channels,globalTypes:e.globalTypes,loading:!1,notifications:e.notifications,perProjectTypes:e.perProjectTypes})},()=>{this.mounted&&this.setState({loading:!1})})},this.addNotificationToState=e=>{this.setState(t=>({notifications:i()([...t.notifications,e],this.areNotificationsEqual)}))},this.removeNotificationFromState=e=>{this.setState(t=>({notifications:t.notifications.filter(t=>!this.areNotificationsEqual(t,e))}))},this.addNotification=e=>{this.addNotificationToState(e),function(e){return Object(c.post)("/api/notifications/add",e).catch(r.a)}({channel:e.channel,project:e.project,type:e.type}).catch(()=>{this.removeNotificationFromState(e)})},this.removeNotification=e=>{this.removeNotificationFromState(e),function(e){return Object(c.post)("/api/notifications/remove",e).catch(r.a)}({channel:e.channel,project:e.project,type:e.type}).catch(()=>{this.addNotificationToState(e)})},this.areNotificationsEqual=(e,t)=>e.channel===t.channel&&e.type===t.type&&e.project===t.project}componentDidMount(){this.mounted=!0,this.fetchNotifications()}componentWillUnmount(){this.mounted=!1}render(){const{channels:t,globalTypes:n,loading:o,notifications:i,perProjectTypes:c}=this.state;return a.createElement(e,Object.assign({},this.props,{addNotification:this.addNotification,channels:t,globalTypes:n,loading:o,notifications:i,perProjectTypes:c,removeNotification:this.removeNotification}))}}return t.displayName=Object(s.a)(e,"withNotifications"),t}},1902:function(e,t,n){"use strict";n.r(t),n.d(t,"Notifications",(function(){return G}));var o=n(446),i=n.n(o),a=n(2),c=n(328),r=n(325),s=n(316),l=n.n(s),h=n(5),d=n(1107),u=n(22),p=n(814),f=n(317),m=n(342),b=n.n(m),g=n(319);class v extends a.PureComponent{constructor(){super(...arguments),this.handleCheckOptOut=e=>{this.props.setCurrentUserSetting({key:"notifications.optOut",value:e?"false":"true"})}}render(){return a.createElement("section",{className:"boxed-group"},a.createElement("h2",null,Object(h.translate)("my_profile.sonarcloud_feature_notifications.title")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("table",{className:"data zebra"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null),a.createElement("th",{className:"text-center"},a.createElement("h4",null,Object(h.translate)("activate"))))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,Object(h.translate)("my_profile.sonarcloud_feature_notifications.description")),a.createElement("td",{className:"text-center"},a.createElement(b.a,{checked:!this.props.notificationsOptOut,onCheck:this.handleCheckOptOut})))))))}}const y={setCurrentUserSetting:n(518).e};var j=Object(f.connect)(e=>({notificationsOptOut:"true"===Object(g.getCurrentUserSetting)(e,"notifications.optOut")}),y)(v);function E(e){return a.createElement(a.Fragment,null,a.createElement("section",{className:"boxed-group"},a.createElement("h2",null,Object(h.translate)("my_profile.overall_notifications.title")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("table",{className:"data zebra"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null),e.channels.map(e=>a.createElement("th",{className:"text-center",key:e},a.createElement("h4",null,Object(h.translate)("notification.channel",e)))))),a.createElement(p.a,{channels:e.channels,checkboxId:k,notifications:e.notifications,onAdd:e.addNotification,onRemove:e.removeNotification,types:e.types})))),Object(u.isSonarCloud)()&&a.createElement(j,null))}function k(e,t){return"global-notification-".concat(e,"-").concat(t)}var O=n(539),x=n.n(O),N=n(326),_=n.n(N),S=n(383),C=n.n(S),P=n(310),w=n(352),M=n.n(w),D=n(364),T=n.n(D),I=n(309),A=n(324),L=n(334),z=n.n(L),F=n(360);class q extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleKeyDown=e=>{switch(e.keyCode){case 13:e.preventDefault(),this.handleSelectHighlighted();break;case 38:e.preventDefault(),this.handleHighlightPrevious();break;case 40:e.preventDefault(),this.handleHighlightNext()}},this.getCurrentIndex=()=>{const{highlighted:e,suggestions:t}=this.state;return e&&t?t.findIndex(t=>t.project===e.project):-1},this.highlightIndex=e=>{const{suggestions:t}=this.state;t&&t.length>0&&(e<0?e=t.length-1:e>=t.length&&(e=0),this.setState({highlighted:t[e]}))},this.handleHighlightPrevious=()=>{this.highlightIndex(this.getCurrentIndex()-1)},this.handleHighlightNext=()=>{this.highlightIndex(this.getCurrentIndex()+1)},this.handleSelectHighlighted=()=>{const{highlighted:e,selectedProject:t}=this.state;void 0!==e&&(void 0!==t&&e.project===t.project?this.handleSubmit():this.handleSelect(e))},this.handleSearch=e=>{const{addedProjects:t}=this.props;return e.length<2?(this.setState({open:!1,query:e}),Promise.resolve([])):(this.setState({loading:!0,query:e}),Object(F.v)(e).then(e=>{if(this.mounted){let n=void 0;const o=e.results.find(e=>"TRK"===e.q);o&&o.items.length>0&&(n=o.items.filter(e=>!t.find(t=>t.project===e.key)).map(e=>({project:e.key,projectName:e.name}))),this.setState({loading:!1,open:!0,suggestions:n})}},()=>{this.mounted&&this.setState({loading:!1,open:!1})}))},this.handleSelect=e=>{this.setState({open:!1,query:e.projectName,selectedProject:e})},this.handleSubmit=()=>{const{selectedProject:e}=this.state;e&&this.props.onSubmit(e)},this.state={},this.handleSearch=T()(this.handleSearch,250)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{closeModal:e}=this.props,{highlighted:t,loading:n,query:o,open:i,selectedProject:c,suggestions:r}=this.state,s=Object(h.translate)("my_account.set_notifications_for.title");return a.createElement(z.a,{header:s,onClose:e,onSubmit:this.handleSubmit},({onCloseClick:e,onFormSubmit:l})=>a.createElement("form",{onSubmit:l},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,s)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field abs-width-400"},a.createElement("label",null,Object(h.translate)("my_account.set_notifications_for")),a.createElement(M.a,{autoFocus:!0,onChange:this.handleSearch,onKeyDown:this.handleKeyDown,placeholder:Object(h.translate)("search.placeholder"),value:o}),n&&a.createElement("i",{className:"spinner spacer-left"}),!n&&i&&a.createElement("div",{className:"position-relative"},a.createElement(A.DropdownOverlay,{className:"abs-width-400",noPadding:!0},r&&r.length>0?a.createElement("ul",{className:"notifications-add-project-search-results"},r.map(e=>a.createElement("li",{className:I({active:t&&t.project===e.project}),key:e.project,onClick:()=>this.handleSelect(e)},e.projectName))):a.createElement("div",{className:"notifications-add-project-no-search-results"},Object(h.translate)("no_results")))))),a.createElement("footer",{className:"modal-foot"},a.createElement("div",null,a.createElement(P.SubmitButton,{disabled:void 0===c},Object(h.translate)("add_verb")),a.createElement(P.ResetButtonLink,{onClick:e},Object(h.translate)("cancel"))))))}}var H=n(628),B=n.n(H);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){const{collapsed:t,project:n,channels:o}=e,[i,c]=a.useState(t);return a.createElement(B.a,{onClick:()=>c(!i),open:!i,title:a.createElement("h4",{className:"display-inline-block"},n.projectName)},a.createElement("table",{className:"data zebra notifications-table",key:n.project},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{"aria-label":Object(h.translate)("project")}),o.map(e=>a.createElement("th",{className:"text-center",key:e},a.createElement("h4",null,Object(h.translate)("notification.channel",e)))))),a.createElement(p.a,{channels:e.channels,checkboxId:(t,n)=>"project-notification-".concat(e.project.project,"-").concat(t,"-").concat(n),notifications:e.notifications,onAdd:({channel:t,type:n})=>{e.addNotification(U({},e.project,{channel:t,type:n}))},onRemove:({channel:t,type:n})=>{e.removeNotification(U({},e.project,{channel:t,type:n}))},project:!0,types:e.types})))}function W(e){return void 0!==e.project&&void 0!==e.projectName}class V extends a.PureComponent{constructor(){super(...arguments),this.state={addedProjects:[],search:"",showModal:!1},this.filterSearch=(e,t)=>e.projectName&&e.projectName.toLowerCase().includes(t),this.handleAddProject=e=>{this.setState(t=>({addedProjects:[...t.addedProjects,e]}))},this.handleSearch=(e="")=>{this.setState({search:e.toLowerCase()})},this.handleSubmit=e=>{e&&this.handleAddProject(e),this.closeModal()},this.closeModal=()=>{this.setState({showModal:!1})},this.openModal=()=>{this.setState({showModal:!0})},this.removeNotification=(e,t)=>{const n=t.find(t=>t.project===e.project);n&&this.handleAddProject(n),this.props.removeNotification(e)}}render(){const{notifications:e}=this.props,{addedProjects:t,search:n}=this.state,o=x()(e,e=>e.project).filter(W),i=C()(e,e=>e.project),c=x()([...t,...o],e=>e.project),r=_()(c,"projectName").filter(e=>this.filterSearch(e,n)),s=Object.keys(i).length>3;return a.createElement("section",{className:"boxed-group","data-test":"account__project-notifications"},a.createElement("div",{className:"boxed-group-inner"},a.createElement("div",{className:"page-actions"},a.createElement(P.Button,{onClick:this.openModal},a.createElement("span",{"data-test":"account__add-project-notification"},Object(h.translate)("my_profile.per_project_notifications.add")))),a.createElement("h2",null,Object(h.translate)("my_profile.per_project_notifications.title"))),this.state.showModal&&a.createElement(q,{addedProjects:c,closeModal:this.closeModal,onSubmit:this.handleSubmit}),a.createElement("div",{className:"boxed-group-inner"},0===c.length&&a.createElement("div",{className:"note"},Object(h.translate)("my_account.no_project_notifications")),c.length>0&&a.createElement("div",{className:"big-spacer-bottom"},a.createElement(M.a,{onChange:this.handleSearch,placeholder:Object(h.translate)("search.search_for_projects")})),r.map(e=>{const n=!t.find(t=>t.project===e.project)&&s;return a.createElement(J,{addNotification:this.props.addNotification,channels:this.props.channels,collapsed:n,key:e.project,notifications:i[e.project]||[],project:e,removeNotification:e=>this.removeNotification(e,c),types:this.props.types})})))}}function G(e){const{addNotification:t,channels:n,globalTypes:o,loading:s,notifications:d,perProjectTypes:u,removeNotification:p}=e,[f,m]=i()(d,e=>!e.project);return a.createElement("div",{className:"account-body account-container"},a.createElement(c.a,{defer:!1,title:Object(h.translate)("my_account.notifications")}),a.createElement(r.Alert,{variant:"info"},Object(h.translate)("notification.dispatcher.information")),a.createElement(l.a,{loading:s},d&&a.createElement(a.Fragment,null,a.createElement(E,{addNotification:t,channels:n,notifications:f,removeNotification:p,types:o}),a.createElement(V,{addNotification:t,channels:n,notifications:m,removeNotification:p,types:u}))))}t.default=Object(d.a)(G)},334:function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=n(327),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,o=e.onClose,i=(e.onSubmit,c(e,["children","header","onClose","onSubmit"]));return r.createElement(s.default,a({contentLabel:n,onRequestClose:o},i),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(r.Component);t.default=l},337:function(e,t,n){"use strict";function o(e,t){const n=e.displayName||e.name||"Component";return"".concat(t,"(").concat(n,")")}n.d(t,"a",(function(){return o}))},342:function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),c=n(2),r=n(316);n(367);var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,n=e.children,o=e.disabled,i=e.id,s=e.loading,l=e.right,h=e.thirdState,d=e.title,u=a("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":h,"icon-checkbox-disabled":o});return n?c.createElement("a",{"aria-checked":t,className:a("link-checkbox",this.props.className,{note:o,disabled:o}),href:"#",id:i,onClick:this.handleClick,role:"checkbox",title:d},l&&n,c.createElement(r.default,{loading:Boolean(s)},c.createElement("i",{className:u})),!l&&n):s?c.createElement(r.default,null):c.createElement("a",{"aria-checked":t,className:a(u,this.props.className),href:"#",id:i,onClick:this.handleClick,role:"checkbox",title:d})},t.defaultProps={thirdState:!1},t}(c.PureComponent);t.default=s},367:function(e,t,n){var o=n(311),i=n(368);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},c=(o(i,a),i.locals?i.locals:{});e.exports=c},368:function(e,t,n){(t=n(312)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#777;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""]),e.exports=t},383:function(e,t,n){var o=n(443),i=n(393),a=Object.prototype.hasOwnProperty,c=i((function(e,t,n){a.call(e,n)?e[n].push(t):o(e,n,[t])}));e.exports=c},404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(313);t.default=function(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,c=e.size;return o.createElement(i.default,{className:t,size:c},o.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:a}}))}},431:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),c=n(404),r=n(418);t.default=function(e){var t=e.open,n=i(e,["open"]);return t?a.createElement(c.default,o({},n)):a.createElement(r.default,o({},n))}},446:function(e,t,n){var o=n(393)((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));e.exports=o},628:function(e,t,n){"use strict";var o,i=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),c=n(2),r=n(431),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hoveringInner:!1},t.handleClick=function(){t.props.onClick(t.props.data)},t.onDetailEnter=function(){t.setState({hoveringInner:!0})},t.onDetailLeave=function(){t.setState({hoveringInner:!1})},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.open,o=e.renderHeader,i=e.title;return c.createElement("div",{className:a("boxed-group boxed-group-accordion",t,{"no-hover":this.state.hoveringInner})},c.createElement("div",{className:"boxed-group-header",onClick:this.handleClick,role:"listitem"},c.createElement("span",{className:"boxed-group-accordion-title"},c.createElement(r.default,{className:"little-spacer-right",open:n}),i),o&&o()),n&&c.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},this.props.children))},t}(c.PureComponent);t.default=s},814:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(2),i=n(342),a=n.n(i),c=n(5);class r extends o.PureComponent{isEnabled(e,t){return!!this.props.notifications.find(n=>n.type===e&&n.channel===t)}handleCheck(e,t,n){n?this.props.onAdd({type:e,channel:t}):this.props.onRemove({type:e,channel:t})}getDispatcherLabel(e){const t=["notification.dispatcher",e],n=[...t,"project"];return this.props.project&&Object(c.hasMessage)(...n)?Object(c.translate)(...n):Object(c.translate)(...t)}render(){const{channels:e,checkboxId:t,types:n}=this.props;return o.createElement("tbody",null,n.map(n=>o.createElement("tr",{key:n},o.createElement("td",null,this.getDispatcherLabel(n)),e.map(e=>o.createElement("td",{className:"text-center",key:e},o.createElement(a.a,{checked:this.isEnabled(n,e),id:t(n,e),onCheck:t=>this.handleCheck(n,e,t)}))))))}}},877:function(e,t,n){var o=n(803);e.exports=function(e,t){return t="function"==typeof t?t:void 0,e&&e.length?o(e,void 0,t):[]}}}]);
//# sourceMappingURL=332.m.c3501379.chunk.js.map