(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5299:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return R},default:function(){return O}});var i=n(5893),t=n(9008),o=n(336),s=n(9227),l=n(980),a=n(9345),c=n(8017),d=n(4096),u=n(5618),x=n(8482),m=n(4115),h=n(9444),j=n(6618),p=n(8532),f=n(7294),g=(0,f.createContext)(null);function b(e){var r=e.children,n=e.githubData;return(0,i.jsx)(g.Provider,{value:_(n),children:r})}function _(e){var r=e.name;return{avatar:e.avatar_url,name:r,description:e.bio}}var v=n(674),k=n.n(v),C=n(8456),S=n.n(C),w=n(3133);function z(){var e=function(){var e=(0,f.useContext)(g);if(null==e)throw new TypeError("Context not found, expected GithubProvider upwards!");return e}(),r=e.name,n=e.avatar,t=e.description;return(0,i.jsxs)(c.xu,{shadow:"base",children:[(0,i.jsxs)(c.xu,{height:"18rem",children:[(0,i.jsx)(c.xu,{backgroundColor:"blue.300",height:"60%",p:10}),(0,i.jsx)(d.k,{margin:"-100px 0",children:(0,i.jsx)(u.s7,{width:"200",height:"200",isLoaded:""!==n,rounded:"full",margin:"0 auto",children:(0,i.jsx)(x.E,{src:n,alt:"Profile foto",padding:1,width:200,rounded:"full"})})})]}),(0,i.jsxs)(c.xu,{textAlign:"center",m:1,children:[(0,i.jsx)(o.X,{as:"h2",size:"md",children:(0,i.jsx)(u.N2,{isLoaded:""!==r,noOfLines:1,margin:4,children:r})}),(0,i.jsx)(m.x,{size:"sm",color:"gray.500",children:k().job_title}),(0,i.jsx)(c.xu,{margin:"1rem 0.5rem",children:(0,i.jsx)(u.N2,{isLoaded:""!==t,noOfLines:3,margin:4,children:t})}),(0,i.jsx)(c.xu,{margin:"1.5rem 0.5rem",children:(0,i.jsx)(h.r,{border:"1px solid",p:"5px 10px",margin:"1rem 0",borderRadius:"md",color:"tomato",href:k().resume_url,target:"_blank",children:"Download resume"})})]}),(0,i.jsx)(c.xu,{backgroundColor:"tomato",p:"1"})]})}function y(){return(0,i.jsx)(X,{backgroundColor:"blue.300",title:"Cover Letter",display:{sm:"none",md:"inherit"},children:k().cover_letter.split("\n").map((function(e){return(0,i.jsx)(c.xu,{margin:"0.5rem 0",fontSize:"0.9rem",children:(0,i.jsx)(S(),{children:e})},e)}))})}function E(){var e=(0,l.useColorModeValue)("gray.500","gray.200");return(0,i.jsxs)(X,{backgroundColor:"green.300",title:"Relevant Experiences",children:[k().relevant_experiences.map((function(r){return(0,i.jsxs)(c.xu,{m:"2rem 0 1rem",fontSize:"0.9rem",children:[(0,i.jsx)(o.X,{as:"h4",fontSize:"1rem",children:r.job_title}),(0,i.jsxs)(m.x,{color:e,fontSize:"0.8rem",mb:"0.5rem",children:[r.company,", ",r.dates_employed]}),(0,i.jsx)(m.x,{children:r.description}),(0,i.jsx)(c.xu,{children:r.tech_stack.map((function(e){return(0,i.jsx)(m.x,{as:"span",color:"blue.300",marginRight:"0.5rem",_hover:{color:"teal.500",cursor:"pointer"},children:"#".concat(e," ")},e)}))})]},r.company)})),(0,i.jsx)(c.xu,{m:"2rem 0 1rem",textAlign:"center",fontSize:"0.8rem",children:(0,i.jsxs)(h.r,{border:"1px solid",p:"5px 10px",borderRadius:"md",color:"blue.300",href:k().social.linkedin,target:"_blank",children:["See more experiences ",(0,i.jsx)(w.nI,{})]})})]})}function N(){var e=(0,l.useColorModeValue)("gray.500","gray.200");return(0,i.jsx)(X,{backgroundColor:"pink.200",title:"Education",children:k().education.map((function(r){return(0,i.jsxs)(c.xu,{margin:"1rem 0",fontSize:"0.9rem",children:[(0,i.jsx)(o.X,{as:"h4",fontSize:"1rem",children:r.institution}),(0,i.jsx)(m.x,{color:e,fontSize:"0.8rem",mb:"0.5rem",children:r.period}),(0,i.jsx)(m.x,{children:r.field_of_study})]},r.institution)}))})}function P(){return(0,i.jsx)(X,{backgroundColor:"blue.600",title:"Skills",children:Object.entries(k().skills).map((function(e){var r=(0,s.Z)(e,2),n=r[0],t=r[1];return(0,i.jsxs)(c.xu,{fontSize:"0.9rem",children:[(0,i.jsx)(o.X,{as:"h4",fontSize:"1rem",children:n}),(0,i.jsx)(a.r,{m:4,templateColumns:"repeat(3, 1fr)",gap:2,children:t.map((function(e){return(0,i.jsx)(a.P,{title:"".concat(e.name," - ").concat(e.rate,"/5"),children:(0,i.jsx)(j.u,{hasArrow:!0,label:e.name,"aria-label":e.name,children:(0,i.jsxs)(a.r,{templateColumns:"30px auto",children:[(0,i.jsx)(x.E,{src:e.icon,width:"20px",height:"20px",alt:e.name}),(0,i.jsx)(p.E,{mt:2,size:"xs",rounded:"full",colorScheme:"purple",backgroundColor:"gray.300",value:parseInt(e.rate)/5*100})]})})},e.name)}))})]},n)}))})}function X(e){var r=e.children,n=e.display,t=e.backgroundColor,s=e.title;return(0,i.jsx)(c.xu,{shadow:"base",display:n,children:(0,i.jsxs)(c.xu,{p:2,fontSize:"1rem",borderBottomColor:t,borderBottomWidth:"0.5rem",children:[(0,i.jsx)(o.X,{as:"h3",size:"md",marginBottom:"1rem",children:s}),(0,i.jsx)(c.xu,{children:r})]})})}var L=function(){return(0,i.jsxs)(a.r,{templateColumns:"1fr 2fr",gap:4,children:[(0,i.jsx)(a.P,{colSpan:{md:1,base:2},children:(0,i.jsxs)(a.r,{gap:"1rem",children:[(0,i.jsx)(z,{}),(0,i.jsx)(P,{})]})}),(0,i.jsx)(a.P,{colSpan:{md:1,base:2},children:(0,i.jsxs)(a.r,{gap:"1rem",children:[(0,i.jsx)(y,{}),(0,i.jsx)(E,{}),(0,i.jsx)(N,{})]})})]})},R=!0;function O(e){var r=e.github;return(0,i.jsxs)(b,{githubData:r,children:[(0,i.jsx)(t.default,{children:(0,i.jsx)("title",{children:"Resume - Marco Ant\xf4nio"})}),(0,i.jsxs)("main",{children:[(0,i.jsx)(o.X,{marginBottom:2,children:" Resume "}),(0,i.jsx)(L,{})]})]})}},5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5299)}])}},function(e){e.O(0,[774,330,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);