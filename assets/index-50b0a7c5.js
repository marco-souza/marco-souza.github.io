import{i as r,c as d,A as c,t as i}from"./index-16e2d4b5.js";import{p as m,f as p}from"./index-9ea804a3.js";const f=i('<div class="grid grid-cols-1 items-center text-center text-gray-200"><h1 class="text-3xl font-semibold text-left py-8">Blog'),g=i('<div class="grid gap-4 sm:grid-cols-[14rem_auto] text-left border-dashed border-y-1 border-gray-200 py-8 hover:underline"><p class="text-sm hidden sm:block font-light"></p><div><h2 class="font-semibold"></h2><h3 class="font-light text-sm py-2">'),x=()=>(()=>{const s=f();return s.firstChild,r(s,()=>m.sort((t,e)=>Date.parse(e.created_at)-Date.parse(t.created_at)).map(t=>d(c,{get href(){return t.url},get children(){const e=g(),l=e.firstChild,n=l.nextSibling,a=n.firstChild,o=a.nextSibling;return r(l,()=>p(Date.parse(t.created_at),Date.now())),r(a,()=>t.title),r(o,()=>t.summary),e}})),null),s})();export{x as Blog,x as default};
