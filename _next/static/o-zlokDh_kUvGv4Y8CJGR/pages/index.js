(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return z})),n.d(e,"default",(function(){return I}));var r=n("q1tI"),c=n.n(r),a=n("pVnL"),o=n.n(a),i=n("lSNA"),l=n.n(i),s=n("cDf5"),u=n.n(s),f=n("J4zp"),d=n.n(f),p=n("TSYQ"),m=n.n(p),h=n("H84U"),v=Object(r.createContext)({}),b=n("CWQg"),x=["xxl","xl","lg","md","sm","xs"],y={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},g=new Map,w=-1,O={},j={matchHandlers:{},dispatch:function(t){return O=t,g.forEach((function(t){return t(O)})),g.size>=1},subscribe:function(t){return g.size||this.register(),w+=1,g.set(w,t),t(O),w},unsubscribe:function(t){g.delete(t),g.size||this.unregister()},unregister:function(){var t=this;Object.keys(y).forEach((function(e){var n=y[e],r=t.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),g.clear()},register:function(){var t=this;Object.keys(y).forEach((function(e){var n=y[e],r=function(n){var r=n.matches;t.dispatch(o()(o()({},O),l()({},e,r)))},c=window.matchMedia(n);c.addListener(r),t.matchHandlers[n]={mql:c,listener:r},r(c)}))}},E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n},N=(Object(b.a)("top","middle","bottom","stretch"),Object(b.a)("start","end","center","space-around","space-between"),r.forwardRef((function(t,e){var n=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),c=d()(n,2),a=c[0],i=c[1],s=r.useRef();s.current=t.gutter,r.useEffect((function(){var t=j.subscribe((function(t){var e=s.current||0;(!Array.isArray(e)&&"object"===u()(e)||Array.isArray(e)&&("object"===u()(e[0])||"object"===u()(e[1])))&&i(t)}));return function(){j.unsubscribe(t)}}),[]);var f=function(n){var c,i=n.getPrefixCls,s=n.direction,f=t.prefixCls,d=t.justify,p=t.align,h=t.className,b=t.style,y=t.children,g=E(t,["prefixCls","justify","align","className","style","children"]),w=i("row",f),O=function(){var e=[0,0],n=t.gutter,r=void 0===n?0:n;return(Array.isArray(r)?r:[r,0]).forEach((function(t,n){if("object"===u()(t))for(var r=0;r<x.length;r++){var c=x[r];if(a[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),j=m()(w,(c={},l()(c,"".concat(w,"-").concat(d),d),l()(c,"".concat(w,"-").concat(p),p),l()(c,"".concat(w,"-rtl"),"rtl"===s),c),h),N=o()(o()(o()({},O[0]>0?{marginLeft:O[0]/-2,marginRight:O[0]/-2}:{}),O[1]>0?{marginTop:O[1]/-2,marginBottom:O[1]/2}:{}),b),C=o()({},g);return delete C.gutter,r.createElement(v.Provider,{value:{gutter:O}},r.createElement("div",o()({},C,{className:j,style:N,ref:e}),y))};return r.createElement(h.a,null,f)})));N.displayName="Row";var C=N,P=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n};var R=r.forwardRef((function(t,e){var n=function(n){var c,a=n.getPrefixCls,i=n.direction,s=t.prefixCls,f=t.span,d=t.order,p=t.offset,h=t.push,b=t.pull,x=t.className,y=t.children,g=t.flex,w=t.style,O=P(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=a("col",s),E={};["xs","sm","md","lg","xl","xxl"].forEach((function(e){var n,r={},c=t[e];"number"===typeof c?r.span=c:"object"===u()(c)&&(r=c||{}),delete O[e],E=o()(o()({},E),(n={},l()(n,"".concat(j,"-").concat(e,"-").concat(r.span),void 0!==r.span),l()(n,"".concat(j,"-").concat(e,"-order-").concat(r.order),r.order||0===r.order),l()(n,"".concat(j,"-").concat(e,"-offset-").concat(r.offset),r.offset||0===r.offset),l()(n,"".concat(j,"-").concat(e,"-push-").concat(r.push),r.push||0===r.push),l()(n,"".concat(j,"-").concat(e,"-pull-").concat(r.pull),r.pull||0===r.pull),l()(n,"".concat(j,"-rtl"),"rtl"===i),n))}));var N=m()(j,(c={},l()(c,"".concat(j,"-").concat(f),void 0!==f),l()(c,"".concat(j,"-order-").concat(d),d),l()(c,"".concat(j,"-offset-").concat(p),p),l()(c,"".concat(j,"-push-").concat(h),h),l()(c,"".concat(j,"-pull-").concat(b),b),c),x,E);return(r.createElement(v.Consumer,null,(function(t){var n=t.gutter,c=o()({},w);return n&&(c=o()(o()(o()({},n[0]>0?{paddingLeft:n[0]/2,paddingRight:n[0]/2}:{}),n[1]>0?{paddingTop:n[1]/2,paddingBottom:n[1]/2}:{}),c)),g&&(c.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(g)),r.createElement("div",o()({},O,{style:c,className:N,ref:e}),y)})))};return(r.createElement(h.a,null,n))}));R.displayName="Col";var S=R,_=n("uBBh"),k=n("lSTW"),A=c.a.createElement;function B(){return A(_.h,null,k.a.socialNetworks.map((function(t){var e=t.icon,n=t.href;return A("a",{key:e,href:n,target:"blank"},A(_.e,{"data-testid":"icon",icon:e,viewBox:"0 0 32 32"}))})))}var L=c.a.createElement;function T(){return L(_.f,{"data-testid":"home"},L("div",null,L("h1",{"data-testid":"title"},"Hi, I'm a Code Craftsman."),L(B,null),L(C,{gutter:16},L(S,{span:12,md:8},L(_.b,null,"Projects")),L(S,{span:12,md:8},L(_.b,null,"Recipes")),L(S,{span:24,md:8},L(_.b,null,"Resume")))))}var H=c.a.createElement,z=!0;function I(){return H(T,null)}}},[["/EDR",1,2,3,0,4]]]);