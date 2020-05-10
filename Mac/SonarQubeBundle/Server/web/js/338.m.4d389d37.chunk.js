(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1103:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(2),o=n(310),a=n(316),s=n.n(a),i=n(5),l=n(617),c=n(304),u=n(373),m=n.n(u),d=n(315),p=n.n(d),h=n(350),f=n.n(h),b=n(818),g=n.n(b),k=n(390);class v extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,showConfirmation:!1},this.handleClick=()=>{this.state.showConfirmation?this.handleRevoke().then(()=>{this.mounted&&this.setState({showConfirmation:!1})}):this.setState({showConfirmation:!0})},this.handleRevoke=()=>(this.setState({loading:!0}),Object(l.c)({login:this.props.login,name:this.props.token.name}).then(()=>this.props.onRevokeToken(this.props.token),()=>{this.mounted&&this.setState({loading:!1})}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{deleteConfirmation:e,token:t}=this.props,{loading:n,showConfirmation:a}=this.state;return r.createElement("tr",null,r.createElement("td",null,r.createElement(p.a,{overlay:t.name},r.createElement("span",null,Object(k.limitComponentName)(t.name)))),r.createElement("td",{className:"nowrap"},r.createElement(g.a,{date:t.lastConnectionDate})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(f.a,{date:t.createdAt,long:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(s.a,{loading:n},r.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===e?r.createElement(m.a,{confirmButtonText:Object(i.translate)("users.tokens.revoke_token"),isDestructive:!0,modalBody:r.createElement(c.FormattedMessage,{defaultMessage:Object(i.translate)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:r.createElement("strong",null,t.name)}}),modalHeader:Object(i.translate)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},({onClick:e})=>r.createElement(o.Button,{className:"spacer-left button-red input-small",disabled:n,onClick:e,title:Object(i.translate)("users.tokens.revoke_token")},Object(i.translate)("users.tokens.revoke"))):r.createElement(o.Button,{className:"button-red input-small spacer-left",disabled:n,onClick:this.handleClick},a?Object(i.translate)("users.tokens.sure"):Object(i.translate)("users.tokens.revoke"))))}}var y=n(377),_=n(325);function E({token:e}){return r.createElement("div",{className:"panel panel-white big-spacer-top"},r.createElement(_.Alert,{variant:"warning"},Object(i.translateWithParameters)("users.tokens.new_token_created",e.name)),r.createElement(y.ClipboardButton,{copyValue:e.token}),r.createElement("code",{className:"big-spacer-left text-success"},e.token))}class O extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},this.fetchTokens=()=>{this.setState({loading:!0}),Object(l.b)(this.props.login).then(e=>{this.mounted&&this.setState({loading:!1,tokens:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.updateTokensCount=()=>{this.props.updateTokensCount&&this.props.updateTokensCount(this.props.login,this.state.tokens.length)},this.handleGenerateToken=e=>{e.preventDefault(),this.state.newTokenName.length>0&&(this.setState({generating:!0}),Object(l.a)({name:this.state.newTokenName,login:this.props.login}).then(e=>{this.mounted&&this.setState(t=>{const n=[...t.tokens,{name:e.name,createdAt:e.createdAt}];return{generating:!1,newToken:e,newTokenName:"",tokens:n}},this.updateTokensCount)},()=>{this.mounted&&this.setState({generating:!1})}))},this.handleRevokeToken=e=>{this.setState(t=>({tokens:t.tokens.filter(t=>t.name!==e.name)}),this.updateTokensCount)},this.handleNewTokenChange=e=>this.setState({newTokenName:e.currentTarget.value})}componentDidMount(){this.mounted=!0,this.fetchTokens()}componentWillUnmount(){this.mounted=!1}renderItems(){const{tokens:e}=this.state;return e.length<=0?r.createElement("tr",null,r.createElement("td",{className:"note",colSpan:3},Object(i.translate)("users.no_tokens"))):e.map(e=>r.createElement(v,{deleteConfirmation:this.props.deleteConfirmation,key:e.name,login:this.props.login,onRevokeToken:this.handleRevokeToken,token:e}))}render(){const{generating:e,loading:t,newToken:n,newTokenName:a,tokens:l}=this.state,c=r.createElement("tr",null,r.createElement("td",null,r.createElement("i",{className:"spinner"})));return r.createElement(r.Fragment,null,r.createElement("h3",{className:"spacer-bottom"},Object(i.translate)("users.generate_tokens")),r.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},r.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(i.translate)("users.enter_token_name"),required:!0,type:"text",value:a}),r.createElement(o.SubmitButton,{className:"js-generate-token",disabled:e||a.length<=0},Object(i.translate)("users.generate"))),n&&r.createElement(E,{token:n}),r.createElement("table",{className:"data zebra big-spacer-top"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(i.translate)("name")),r.createElement("th",null,Object(i.translate)("my_account.tokens_last_usage")),r.createElement("th",{className:"text-right"},Object(i.translate)("created")),r.createElement("th",null))),r.createElement("tbody",null,r.createElement(s.a,{customSpinner:c,loading:t&&l.length<=0},this.renderItems()))))}}},1921:function(e,t,n){"use strict";n.r(t),n.d(t,"Security",(function(){return f}));var r=n(2),o=n(328),a=n(317),s=n(5),i=n(319),l=n(310),c=n(325),u=n(435);class m extends r.Component{constructor(){super(...arguments),this.state={success:!1},this.handleSuccessfulChange=()=>{this.oldPassword.value="",this.password.value="",this.passwordConfirmation.value="",this.setState({success:!0,errors:void 0})},this.setErrors=e=>{this.setState({success:!1,errors:e})},this.handleChangePassword=e=>{e.preventDefault();const{user:t}=this.props,n=this.oldPassword.value,r=this.password.value;r!==this.passwordConfirmation.value?(this.password.focus(),this.setErrors([Object(s.translate)("user.password_doesnt_match_confirmation")])):Object(u.a)({login:t.login,password:r,previousPassword:n}).then(this.handleSuccessfulChange,()=>{})}}render(){const{success:e,errors:t}=this.state;return r.createElement("section",{className:"boxed-group"},r.createElement("h2",{className:"spacer-bottom"},Object(s.translate)("my_profile.password.title")),r.createElement("form",{className:"boxed-group-inner",onSubmit:this.handleChangePassword},e&&r.createElement(c.Alert,{variant:"success"},Object(s.translate)("my_profile.password.changed")),t&&t.map((e,t)=>r.createElement(c.Alert,{key:t,variant:"error"},e)),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"old_password"},Object(s.translate)("my_profile.password.old"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:e=>this.oldPassword=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password"},Object(s.translate)("my_profile.password.new"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:e=>this.password=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password_confirmation"},Object(s.translate)("my_profile.password.confirm"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:e=>this.passwordConfirmation=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement(l.SubmitButton,{id:"change-password"},Object(s.translate)("my_profile.password.submit")))))}}var d=n(411),p=n(1103);function h({login:e}){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(s.translate)("users.tokens")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},r.createElement(d.a,{message:Object(s.translate)("my_account.tokens_description")})),r.createElement(p.a,{deleteConfirmation:"modal",login:e})))}function f({user:e}){return r.createElement("div",{className:"account-body account-container"},r.createElement(o.a,{defer:!1,title:Object(s.translate)("my_account.security")}),r.createElement(h,{login:e.login}),e.local&&r.createElement(m,{user:e}))}t.default=Object(a.connect)(e=>({user:Object(i.getCurrentUser)(e)}))(f)},334:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(327),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,o=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return i.createElement(l.default,a({contentLabel:n,onRequestClose:r},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=c},348:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(304),s=n(28);t.formatterOption={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},t.default=function(e){var n=e.children,i=e.date;return o.createElement(a.FormattedDate,r({value:s.parseDate(i)},t.formatterOption),n)}},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(304),a=n(28);t.default=function(e){var t=e.children,n=e.date;return r.createElement(o.FormattedRelative,{value:a.parseDate(n)},t)}},373:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(344),c=n(374),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,o=(r.children,r.modalBody),c=r.modalHeader,u=r.modalHeaderDescription,m=s(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return i.createElement(l.default,a({header:c,headerDescription:u,onClose:n},m),o)},t}return o(t,e),t.prototype.render=function(){return i.createElement(c.default,{modal:this.renderConfirmModal},this.props.children)},t}(i.PureComponent);t.default=u},374:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(a.PureComponent);t.default=s},617:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(8),o=n(321);function a(e){return Object(r.getJSON)("/api/user_tokens/search",{login:e}).then(e=>e.userTokens,o.a)}function s(e){return Object(r.postJSON)("/api/user_tokens/generate",e).catch(o.a)}function i(e){return Object(r.post)("/api/user_tokens/revoke",e).catch(o.a)}},818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(728),o=n(2),a=n(5),s=n(315),i=n(363),l=n(348);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,c=e.date;return c?r.differenceInHours(Date.now(),c)<1?n(a.translate("less_than_1_hour_ago")):o.createElement(s.default,{overlay:o.createElement(l.default,{date:c})},o.createElement("span",null,o.createElement(i.default,{date:c},n))):n(a.translate("never"))}}}]);
//# sourceMappingURL=338.m.4d389d37.chunk.js.map