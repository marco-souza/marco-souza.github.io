(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5423:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3282)}])},3282:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return Y},default:function(){return q}});var a=n(5893),r=n(9008),i=n(8527),o=n(1664);function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function s(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(t,e){u(2,arguments);var n=s(t),a=s(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function l(t,e){u(2,arguments);var n=s(t),a=s(e),r=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return 12*r+i}function h(t){u(1,arguments);var e=s(t);return e.setHours(23,59,59,999),e}function c(t){u(1,arguments);var e=s(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function f(t){u(1,arguments);var e=s(t);return h(e).getTime()===c(e).getTime()}function m(t,e){u(2,arguments);var n,a=s(t),r=s(e),i=d(a,r),o=Math.abs(l(a,r));if(o<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);var h=d(a,r)===-i;f(s(t))&&1===o&&1===d(t,r)&&(h=!1),n=i*(o-Number(h))}return 0===n?0:n}function g(t,e){return u(2,arguments),s(t).getTime()-s(e).getTime()}var v={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function b(t){return t?v[t]:v.trunc}function p(t,e,n){u(2,arguments);var a=g(t,e)/1e3;return b(null===n||void 0===n?void 0:n.roundingMethod)(a)}var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},w=function(t,e,n){var a,r=y[t];return a="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function M(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var x={date:M({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:M({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:M({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function S(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r.width?String(r.width):i;a=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=r.width?String(r.width):t.defaultWidth;a=t.values[s]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function j(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,u=i[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?P(s,(function(t){return t.test(u)})):W(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var l=e.slice(u.length);return{value:o,rest:l}}}function W(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function P(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var T,k={code:"en-US",formatDistance:w,formatLong:x,formatRelative:function(t,e,n,a){return D[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:S({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:S({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:S({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:S({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:S({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(T.matchPattern);if(!n)return null;var a=n[0],r=t.match(T.parsePattern);if(!r)return null;var i=T.valueCallback?T.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(a.length);return{value:i,rest:o}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function X(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}function C(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var N=1440,A=43200;var F="#e5e7eb";function _(t){var e=t.posts;return(0,a.jsx)(i.Kq,{borderTop:"1px solid ".concat(F),children:e.map((function(t){return(0,a.jsx)(E,{post:t},t.path)}))})}function E(t){var e=t.post,n=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};u(2,arguments);var a=n.locale||k;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var r=d(t,e);if(isNaN(r))throw new RangeError("Invalid time value");var i,o,l=X(n);l.addSuffix=Boolean(n.addSuffix),l.comparison=r,r>0?(i=s(e),o=s(t)):(i=s(t),o=s(e));var h,c=p(o,i),f=(C(o)-C(i))/1e3,g=Math.round((c-f)/60);if(g<2)return n.includeSeconds?c<5?a.formatDistance("lessThanXSeconds",5,l):c<10?a.formatDistance("lessThanXSeconds",10,l):c<20?a.formatDistance("lessThanXSeconds",20,l):c<40?a.formatDistance("halfAMinute",null,l):c<60?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",1,l):0===g?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",g,l);if(g<45)return a.formatDistance("xMinutes",g,l);if(g<90)return a.formatDistance("aboutXHours",1,l);if(g<N){var v=Math.round(g/60);return a.formatDistance("aboutXHours",v,l)}if(g<2520)return a.formatDistance("xDays",1,l);if(g<A){var b=Math.round(g/N);return a.formatDistance("xDays",b,l)}if(g<86400)return h=Math.round(g/A),a.formatDistance("aboutXMonths",h,l);if((h=m(o,i))<12){var y=Math.round(g/A);return a.formatDistance("xMonths",y,l)}var w=h%12,M=Math.floor(h/12);return w<3?a.formatDistance("aboutXYears",M,l):w<9?a.formatDistance("overXYears",M,l):a.formatDistance("almostXYears",M+1,l)}(new Date(e.createdAt),new Date,{addSuffix:!0});return(0,a.jsx)(o.default,{href:e.path,passHref:!0,children:(0,a.jsx)(i.rU,{children:(0,a.jsxs)(i.xu,{py:"4rem",borderBottom:"1px solid ".concat(F),d:"grid",gridTemplateColumns:"1fr 2fr",children:[(0,a.jsx)(i.xv,{color:"gray.400",children:n}),(0,a.jsxs)(i.xu,{children:[(0,a.jsx)(i.X6,{variant:"h2",size:"lg",pb:"1rem",children:e.meta.title}),(0,a.jsx)(i.xv,{fontSize:"sm",children:e.meta.description})]})]})})})}var Y=!0;function q(t){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Blog | Marco Ant\xf4nio"})}),(0,a.jsxs)("main",{children:[(0,a.jsxs)(i.X6,{py:10,children:["Blog",(0,a.jsxs)(i.xv,{fontSize:"xs",color:"gray.300",children:[t.files.length," ",t.files.length>1?"posts":"post"]})]}),(0,a.jsx)(_,{posts:t.files})]})]})}}},function(t){t.O(0,[774,888,179],(function(){return e=5423,t(t.s=e);var e}));var e=t.O();_N_E=e}]);