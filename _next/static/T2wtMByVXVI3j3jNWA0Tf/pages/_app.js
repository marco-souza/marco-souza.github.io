(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=c(n("q1tI")),a=c(n("Xuae")),o=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var l=d[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],s=r[l]||new Set;s.has(f)?o=!1:(s.add(f),r[l]=s)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,a.default)();function m(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:s,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=a},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("qXWd"),o=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),s=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){u(l,i);var c=f(l);function l(e){var o;return r(this,l),o=c.call(this,e),s&&(t.add(a(o)),n(a(o))),o}return o(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component))}},gqNJ:function(e,t,n){},hUgY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n("Ol7k"),a=n("8Kt/"),o=n.n(a),u=n("nOHt"),i=n("q1tI"),c=n.n(i),l=n("lSTW"),f=n("YFqc"),d=n.n(f),s=n("uBBh"),p=c.a.createElement;function m(e){var t=e.children,n=Object(u.useRouter)();return p(c.a.Fragment,null,p(s.d,{"data-testid":"content"},p(s.a,{style:{margin:"16px 0"}},p(s.a.Item,null,p(d.a,{href:"/"},p("a",{href:"/"},"home"))),n.pathname.split("/").filter((function(e){return e})).map((function(e){return p(s.a.Item,{key:e},p(d.a,{href:"/".concat(e)},p("a",{href:"/".concat(e)},e)))}))),p(s.c,null,t)))}var v=c.a.createElement,h=r.a.Footer;function y(){return v(c.a.Fragment,null,v(h,{"data-testid":"footer"}))}var w=n("gf6R"),g=c.a.createElement;function _(){var e=Object(u.useRouter)().pathname.slice(1).replace(/^\w/,(function(e){return e.toUpperCase()}));return g(s.f,null,g("div",{className:"logo","data-testid":"logo"},e),g("div",{className:"right","data-testid":"social"},g(w.a,{header:!0})))}n("gqNJ");var C=c.a.createElement;function S(e){var t=e.Component,n=e.pageProps,a=Object(u.useRouter)();return C(c.a.Fragment,null,C(o.a,null,C("meta",{charSet:"utf-8"}),C("title",null,l.a.title)),"/"!==a.pathname?C(r.a,{"data-testid":"layout"},C(_,null),C(m,null,C(t,n)),C(y,null)):C(t,n))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),u=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[[0,0,1,4,5,2,3]]]);