(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1142),r=a(13);function i(e){var t=n.arc().outerRadius(e.radius).innerRadius(e.radius-e.thickness)(e.data);return r.createElement("path",{d:t,style:{fill:e.fill}})}t.default=function(e){var t=e.height,a=e.padding,l=void 0===a?[0,0,0,0]:a,s=e.width,d=s-l[1]-l[3],u=t-l[0]-l[2],c=Math.min(d,u),o=Math.floor(c/2),f=n.pie().sort(null).value((function(e){return e.value}));void 0!==e.padAngle&&f.padAngle(e.padAngle);var h=f(e.data).map((function(t,a){return r.createElement(i,{data:t,fill:e.data[a].fill,key:a,radius:o,thickness:e.thickness})}));return r.createElement("svg",{className:"donut-chart",height:t,width:s},r.createElement("g",{transform:"translate("+l[3]+", "+l[0]+")"},r.createElement("g",{transform:"translate("+o+", "+o+")"},h)))}}}]);
//# sourceMappingURL=399.1587976628633.chunk.js.map