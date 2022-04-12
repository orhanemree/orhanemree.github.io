import{o as i,c as l,a as j,b as o,F as p,r as u,t as d,d as m,e as g,f as h,g as k,p as P,h as S}from"./vendor.573a29d9.js";const F=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function c(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=c(s);fetch(s.href,t)}};F();var I="/assets/profile.76d1955f.png",v="/assets/github.6e74fc01.svg",f="/assets/twitter.61c2deb3.svg",b="/assets/gmail.99f1651b.svg",x="/assets/hashnode.9bab0956.svg",_=(a,r)=>{const c=a.__vccOpts||a;for(const[n,s]of r)c[n]=s;return c};const L={name:"Hero"},H={class:"h-screen p-8 flex items-center justify-center shrink-0"},N=j('<div class="flex items-center justify-center sm:gap-6 gap-3 flex-col"><div class="w-100"><img class="sm:mb-8 mb-5 sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]" src="'+I+'" alt="Orhan Emre Dikicigil"><div class="flex items-center justify-center gap-6"><a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://github.com/orhanemree"><img class="w-full" src="'+v+'" alt="github"></a><a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://twitter.com/orhanemredkcgl"><img class="w-full" src="'+f+'" alt="twitter"></a><a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="mailto:orhanemre.dev@gmail.com"><img class="w-full" src="'+b+'" alt="gmail"></a><a class="transition opacity-70 hover:opacity-100 sm:w-8 w-6" href="https://hashnode.com/@orhanemre"><img class="w-full" src="'+x+'" alt="hashnode"></a></div></div><div class="w-auto text-center"><div class="sm:text-2xl text-lg sm:mb-8 mb-5"> Hi I am Orhan Emre. I love programming and I want to be a big programmer. I think I can call myself a self-taught developer. I design UI / UXs, write codes and create contents. You can contact me with my social accounts. </div><a class="transition px-8 py-2 rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-black" href="https://blog.orhanemre.me/">Visit my Blog</a></div></div>',1),T=[N];function V(a,r,c,n,s,t){return i(),l("header",H,T)}var O=_(L,[["render",V]]),A="/assets/css3.dfc5522c.svg",E="/assets/expressjs.5b932a7c.svg",B="/assets/figma.cfd71a16.svg",M="/assets/firebase.c3c79915.svg",C="/assets/flask.0fc75342.svg",U="/assets/html5.50a706ca.svg",D="/assets/inkscape.95474ac4.svg",z="/assets/javascript.2d597d6a.svg",G="/assets/mongodb.ae099277.svg",q="/assets/nodejs.c8cb52e6.svg",J="/assets/python.b0734390.svg",K="/assets/sass.88bafcef.svg",R="/assets/tailwindcss.cf7e5dfd.svg",X="/assets/vuejs.0d5a0f9e.svg";const Y={name:"Technologies",data(){return{technologies:["HTML 5","CSS 3","SASS","TailwindCSS","JavaScript","Vue.js","Node.js","Express.js","MongoDB","Firebase","Figma","Inkscape","Python","Flask"]}},methods:{getPath(a){return a=a.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"").replace("-","").replace(".","").toLowerCase(),new URL({"/src/assets/icons/css3.svg":A,"/src/assets/icons/expressjs.svg":E,"/src/assets/icons/figma.svg":B,"/src/assets/icons/firebase.svg":M,"/src/assets/icons/flask.svg":C,"/src/assets/icons/github.svg":v,"/src/assets/icons/gmail.svg":b,"/src/assets/icons/hashnode.svg":x,"/src/assets/icons/html5.svg":U,"/src/assets/icons/inkscape.svg":D,"/src/assets/icons/javascript.svg":z,"/src/assets/icons/mongodb.svg":G,"/src/assets/icons/nodejs.svg":q,"/src/assets/icons/python.svg":J,"/src/assets/icons/sass.svg":K,"/src/assets/icons/tailwindcss.svg":R,"/src/assets/icons/twitter.svg":f,"/src/assets/icons/vuejs.svg":X}[`/src/assets/icons/${a}.svg`],self.location)}}},Z={class:"h-screen p-15%"},Q=o("h1",{class:"text-center sm:text-4xl text-2xl"},"Technologies I Use",-1),W=o("hr",{class:"mt-4 mb-10 w-9/12 mx-auto"},null,-1),ss={class:"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6"},es=["src","alt"],ts={class:"sm:text-xl text-md"};function os(a,r,c,n,s,t){return i(),l("div",Z,[Q,W,o("ul",ss,[(i(!0),l(p,null,u(s.technologies,e=>(i(),l("li",{class:"flex gap-2 items-center justify-start shrink-0 break-normal font-medium",key:e},[o("img",{class:"sm:w-10 w-8",src:t.getPath(e),alt:e},null,8,es),o("span",ts,d(e),1)]))),128))])])}var as=_(Y,[["render",os]]);const rs={name:"Projects",data(){return{projects:[]}},mounted(){this.fetchProjects()},methods:{fetchProjects(){this.axios.get("https://api.github.com/users/orhanemree/repos").then(a=>{a.data.forEach(r=>{r.topics.includes("project")&&this.projects.push(r)})})}}},cs={class:"p-15% pb-0"},ns=o("h1",{class:"text-center sm:text-4xl text-2xl"},"My Projects",-1),is=o("hr",{class:"mt-4 mb-10 w-9/12 mx-auto"},null,-1),ls={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"},_s=["href"],ds={class:"text-2xl mb-10 capitalize"},gs={class:"text-blue mb-10 break-all text-sm"},hs={class:"mb-16"},ms=["href"];function ps(a,r,c,n,s,t){return i(),l("div",cs,[ns,is,o("ul",ls,[(i(!0),l(p,null,u(s.projects,e=>(i(),l("li",{class:"relative p-4 bg-gray text-center rounded",key:e},[o("a",{href:`${e.homepage?e.homepage:e.html_url}`},[o("div",ds,d(e.name.replaceAll("-"," ")),1),o("div",gs,d(e.html_url),1),o("div",hs,d(e.description),1)],8,_s),o("a",{class:"absolute bottom-4 block py-1 px-5 left-1/2 translate-x-1/-2 bg-transparent transition rounded hover:bg-blue hover:text-gray text-sm",href:`${e.html_url}`},"View on GitHub",8,ms)]))),128))])])}var us=_(rs,[["render",ps]]);const vs={name:"Footer"},fs={class:"my-8 text-center"},bs=m(" Made with "),xs=o("span",{class:"text-blue"},"Vue",-1),$s=m(" open source on "),ws=o("a",{class:"text-blue underline",href:"https://github.com/orhanemree/orhanemree.github.io"},"GitHub",-1),ys=m(". "),js=[bs,xs,$s,ws,ys];function ks(a,r,c,n,s,t){return i(),l("footer",fs,js)}var Ps=_(vs,[["render",ks]]);const Ss={components:{Hero:O,Technologies:as,Projects:us,Footer:Ps}};function Fs(a,r,c,n,s,t){const e=g("Hero"),$=g("Technologies"),w=g("Projects"),y=g("Footer");return i(),l("div",null,[h(e),h($),h(w),h(y)])}var Is=_(Ss,[["render",Fs]]);k(Is).use(P,S).mount("#app");