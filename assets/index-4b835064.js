import{i as r,c as d,g as c,t as i}from"./index-6fa69dc8.js";import{p as m,f as g}from"./index-aefa1402.js";const p=i('<div class="grid grid-cols-1 items-center text-center text-gray-200"><h1 class="text-3xl font-semibold text-left py-8">Blog'),f=i('<div class="grid gap-4 sm:grid-cols-[14rem_auto] text-left border-dashed border-y-1 border-gray-200 py-8 hover:underline"><p class="text-sm hidden sm:block font-light"></p><div><h2 class="font-semibold"></h2><h3 class="font-light text-sm py-2">'),x=()=>(()=>{const s=p();return s.firstChild,r(s,()=>m.sort((t,e)=>Date.parse(e.created_at)-Date.parse(t.created_at)).map(t=>d(c,{get href(){return t.url},get children(){const e=f(),l=e.firstChild,n=l.nextSibling,a=n.firstChild,o=a.nextSibling;return r(l,()=>g(Date.parse(t.created_at),Date.now())),r(a,()=>t.title),r(o,()=>t.summary),e}})),null),s})();export{x as Blog,x as default};
