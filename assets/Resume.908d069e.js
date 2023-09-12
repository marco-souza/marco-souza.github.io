import{i as t,c as a,b,B as h,a as g,s as v,d as f,L as y,e as C,t as d}from"./index.4c4b66b1.js";import{l as N}from"./index.5e2e8610.js";import{p,a as S}from"./formatters.6fe1197c.js";const w=d('<div class="grid gap-4 sm:grid-cols-[1fr_2fr] text-gray-200"><div></div><div></div></div>'),k=d('<div class="shadown mb4 grid gap-1 bg-gray-900 inline-grid h-[inherit] gap-1 text-center border-bottom border-b-10 border-pink-500"><div class="text-gray-900 relative h-[16rem]"><div class="bg-blue-400 h-[60%] p-2"></div><img class="h-[180px] w-[180px] rounded-full mt-[-100px] border-gray-900 mxauto" alt="Profile logo"></div><div class="info grid gap-4 p4"><h2 class="text-2xl fw600"></h2><p></p></div></div>'),L=d('<p class="my1 mx0 text-sm"></p>'),E=d('<p class="my4"></p>'),R=d('<a class="text-pink-300 hover:text-pink-400"></a>'),j=d('<span class="px2"></span>'),B=d('<div class="grid gap-6 my4"><div class="text-center"></div></div>'),A=d('<div class="text-md grid gap-1"><h4 class="text-base fw500"></h4><p class="text-gray-300 text-sm fw100">, </p><p class="mt2 text-sm"></p><div></div></div>'),T=d('<span class="mr1 text-sm text-blue-300 hover:text-blue-200 hover:cursor-pointer"></span>'),H=d('<div class="my2 text-sm grid gap-1 mb6"><h4 class="text-base fw500"></h4><p class="fw200"><span class="text-gray-500"> - </span></p></div>'),I=d('<div class="my2 text-sm grid gap-1 "><h4 class="text-base fw500"></h4><div class="grid m4 grid-cols-6 gap-2"></div></div>'),M=d('<img class="w20px h20px">'),O=d('<div><h3 class="text-lg fw600 py2"></h3><div></div></div>'),{links:P,cover_letter:q,relevant_experiences:z,education:D,skills:F}=b,Y=()=>(()=>{const l=w.cloneNode(!0),r=l.firstChild,e=r.nextSibling;return t(r,a(G,{}),null),t(r,a(U,{}),null),t(e,a(J,{}),null),t(e,a(K,{}),null),t(e,a(Q,{}),null),l})(),G=()=>(()=>{const l=k.cloneNode(!0),r=l.firstChild,e=r.firstChild,n=e.nextSibling,o=r.nextSibling,s=o.firstChild,c=s.nextSibling;return t(s,()=>p.name),t(o,a(h,{class:"text-pink-400 mw100 mxauto",get to(){return b.resume_url},target:"blank",children:"Resume"}),null),g(i=>{const u=p.avatar_url,_=S(p.bio);return u!==i._v$&&v(n,"src",i._v$=u),_!==i._v$2&&(c.innerHTML=i._v$2=_),i},{_v$:void 0,_v$2:void 0}),l})(),J=()=>a($,{title:"Cover Letter",get children(){return q.split(`
`).map(l=>(()=>{const r=L.cloneNode(!0);return t(r,a(N,{components:{p:e=>(()=>{const n=E.cloneNode(!0);return f(n,e,!1,!1),n})(),a:e=>(()=>{const n=R.cloneNode(!0);return f(n,e,!1,!1),n})()},children:l})),r})())}}),K=()=>a($,{title:"Relevant Experiences",get children(){const l=B.cloneNode(!0),r=l.firstChild;return t(l,()=>z.map(e=>(()=>{const n=A.cloneNode(!0),o=n.firstChild,s=o.nextSibling,c=s.firstChild,i=s.nextSibling,u=i.nextSibling;return t(o,()=>e.job_title),t(s,()=>e.company,c),t(s,()=>e.dates_employed,null),t(i,()=>e.description),t(u,()=>e.tech_stack.map(_=>(()=>{const m=T.cloneNode(!0);return t(m,`#${_} `),m})())),n})()),r),t(r,a(h,{target:"blank",get to(){return P.linkedin},class:"mxauto text-xs inline-flex items-end py1 text-blue-400 hover:underline",get children(){return["See more experiences",(()=>{const e=j.cloneNode(!0);return t(e,a(y,{})),e})()]}})),l}}),Q=()=>a($,{title:"Education",get children(){return D.map(l=>(()=>{const r=H.cloneNode(!0),e=r.firstChild,n=e.nextSibling,o=n.firstChild,s=o.firstChild;return t(e,()=>l.institution),t(o,()=>l.period,s),t(n,()=>l.field_of_study,null),r})())}}),U=()=>a($,{title:"Skills",get children(){return Object.entries(F).map(([l,r])=>(()=>{const e=I.cloneNode(!0),n=e.firstChild,o=n.nextSibling;return t(n,l),t(o,()=>r.map(s=>(()=>{const c=M.cloneNode(!0);return g(i=>{const u=s.name+s.rate,_=s.icon,m=s.name,x=`${s.name} - ${Array(s.rate).fill("\u2606").join("")}`;return u!==i._v$3&&v(c,"data-tooltip-target",i._v$3=u),_!==i._v$4&&v(c,"src",i._v$4=_),m!==i._v$5&&v(c,"alt",i._v$5=m),x!==i._v$6&&v(c,"title",i._v$6=x),i},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),c})())),e})())}}),$=l=>(()=>{const r=O.cloneNode(!0),e=r.firstChild,n=e.nextSibling;return t(e,()=>l.title),t(n,()=>l.children),g(()=>C(r,`mb4 px4 py2 bg-gray-800 border-bottom border-b-10 border-blue-300 ${l.class}`)),r})();export{Y as Resume,Y as default};