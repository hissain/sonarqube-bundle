(window.webpackJsonp=window.webpackJsonp||[]).push([[384,383],{1444:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),o=n(662);t.default=function(e){var t=e.className,n=e.fill,r=e.size;return a.createElement(o.ThemedIcon,{className:t,size:r},(function(e){var t=e.theme;return a.createElement("path",{d:"M9 12.242v-1.484c0-.14-.11-.258-.25-.258h-1.5c-.14 0-.25.117-.25.258v1.484c0 .14.11.258.25.258h1.5c.14 0 .25-.117.25-.258zM8.984 9.32l.141-3.586a.189.189 0 0 0-.078-.148C9 5.546 8.93 5.5 8.859 5.5H7.141c-.07 0-.141.047-.188.086-.055.039-.078.117-.078.164l.133 3.57c0 .102.117.18.265.18H8.72c.14 0 .258-.078.265-.18zm-.109-7.297l6 11A1 1 0 0 1 14 14.5H2a1 1 0 0 1-.875-1.477l6-11a.994.994 0 0 1 1.75 0z",style:{fill:n||t.colors.warningIconColor}})}))}},2182:function(e,t,n){"use strict";n.r(t);var a,o=n(13),r=n(659),s=n(676),i=n.n(s),l=n(1444),c=n.n(l),u=n(665),p=n.n(u),m=n(37),d=n(900),f=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.keepLineBreaks=function(e){if(e.includes("\n")){var t=e.split("\n");return o.createElement(o.Fragment,null,t.map((function(e,n){return o.createElement(o.Fragment,{key:n},e,n<t.length-1&&o.createElement("br",null))})))}return e},n.state={loading:!t.warnings,warnings:t.warnings||[]},n}return f(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,!this.props.warnings&&this.props.taskId&&this.loadWarnings(this.props.taskId)},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.taskId,a=t.warnings;!a&&n&&e.taskId!==n?this.loadWarnings(n):a&&e.warnings!==a&&this.setState({warnings:a})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.loadWarnings=function(e){var t=this;this.setState({loading:!0}),Object(d.f)(e,["warnings"]).then((function(e){var n=e.warnings,a=void 0===n?[]:n;t.mounted&&t.setState({loading:!1,warnings:a})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.prototype.render=function(){var e=this,t=Object(m.translate)("warnings");return o.createElement(i.a,{contentLabel:t,onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement("div",{className:"modal-body modal-container js-analysis-warnings"},o.createElement(p.a,{loading:this.state.loading},this.state.warnings.map((function(t,n){return o.createElement("div",{className:"panel panel-vertical",key:n},o.createElement(c.a,{className:"pull-left spacer-right"}),o.createElement("div",{className:"overflow-hidden markdown"},e.keepLineBreaks(t)))})))),o.createElement("footer",{className:"modal-foot"},o.createElement(r.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(m.translate)("close"))))},t}(o.PureComponent);t.default=h}}]);
//# sourceMappingURL=384.1587976628633.chunk.js.map