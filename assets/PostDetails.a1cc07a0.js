import{u as m,i as r,a as p,s as d,c as f,d as n,t as s}from"./index.1db9e006.js";import{f as u,g as x}from"./index.04a5f38e.js";import{l as _}from"./index.0b01c803.js";const h=s('<h1 class="text-center text-2xl py8">Oops, nothing here</h1>'),$=s('<p class="text-center text-md fw200">The post "<!>" does not exists</p>'),g=s('<div class="py8"><h1 class="text-3xl fw600"></h1><p class="fw200 text-xs pt-4"></p><a class="fw200 text-sm  hover:underline" target="_blank"></a></div>'),b=s('<p class="my4"></p>'),w=s('<img class="object-fill h100 w-100% shadow-md shadow-dark-100">'),N=s('<a target="_blank" class="text-pink-300 hover:text-pink-400"></a>'),v=s('<div class="grid grid-cols-1 text-left items-center text-center text-gray-200"><a class="hover:underline text-gray-400 text-sm mt8" href="/blog">&lt; back</a></div>'),D=()=>{const o=m().filename,l=x(o),i=l==null?[h.cloneNode(!0),(()=>{const e=$.cloneNode(!0),t=e.firstChild,a=t.nextSibling;return a.nextSibling,r(e,o,a),e})()]:[(()=>{const e=g.cloneNode(!0),t=e.firstChild,a=t.nextSibling,c=a.nextSibling;return r(t,()=>l.title),r(a,()=>u(Date.parse(l.created_at),Date.now())),r(c,()=>l.author),p(()=>d(c,"href",l.author_url)),e})(),f(_,{components:{p:e=>(()=>{const t=b.cloneNode(!0);return n(t,e,!1,!1),t})(),img:e=>(()=>{const t=w.cloneNode(!0);return n(t,e,!1,!1),t})(),a:e=>(()=>{const t=N.cloneNode(!0);return n(t,e,!1,!1),t})()},get children(){return l.content}})];return(()=>{const e=v.cloneNode(!0);return e.firstChild,r(e,i,null),e})()};export{D as Home,D as default};
