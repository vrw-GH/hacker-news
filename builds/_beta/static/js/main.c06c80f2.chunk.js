(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(16),s=r.n(c),o=r(3),i=r(0);function u(e){var t=e.projectName;return document.title=t,Object(i.jsxs)("h2",{align:"center",children:[" ","- \u269f \u2003 \u26e6 \u2003",Object(i.jsx)("u",{children:t})," \u2003 \u26e5 \u2003 \u269e -"]})}var l=function(e){var t=e.setPageNr,r=e.setSearchQry;return Object(i.jsxs)("form",{style:{textAlign:"center"},onSubmit:function(e){e.preventDefault(),e.target[0].value?(r(e.target[0].value),t((function(e){return[1-e[1],e[1]]})),console.log(e.target[0].value)):alert("Please enter something to search for!")},children:[Object(i.jsx)("input",{type:"text",autoFocus:!0,placeholder:"enter a query here"}),"\xa0",Object(i.jsx)("button",{children:"Search"})]})},j=r(17),d=function(e){var t=e.loading,r=e.dataArray,n=e.totPosts,a=e.searchQry,c=0;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"Loading",style:{margin:"auto",textAlign:"center",width:"90%"},children:t?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("small",{className:"tiny",children:"Loading Data: "}),Object(i.jsx)(j.a,{fill:"white",borderradius:8,count:35})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("small",{children:["Found ",n," total posts",a?' for "'.concat(a,'"'):" ( - not searched - )"]}),Object(i.jsx)("ol",{children:r.map((function(e){return Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.title}),Object(i.jsx)("br",{}),Object(i.jsx)("small",{children:Object(i.jsxs)("i",{children:["by ",e.author]})})]},c++)}))})]})})})},b=function(e){var t=e.totPages,r=e.pageNr,a=e.setPageNr,c=Object(n.useState)(r[0]+r[1]),s=Object(o.a)(c,2),u=s[0],l=s[1],j=Object(n.createRef)(),d=Object(n.createRef)(),b=function(e){"ArrowLeft"===e.code&&h(!1),"ArrowRight"===e.code&&h(!0),"Home"===e.code&&(a((function(e){return[0+e[1],e[1]]})),l(1))};Object(n.useEffect)((function(){return document.addEventListener("keydown",b),function(){return document.removeEventListener("keydown",b)}}),[]);var h=function(e){e?(console.log("test2",e,r[0],t),r[0]<t-r[1]&&(a((function(e){return[e[0]+1,e[1]]})),l((function(e){return e+1})),console.log("true",e,r[0],t))):r[0]>=r[1]&&(a((function(e){return[e[0]-1,e[1]]})),l((function(e){return e-1})),console.log("false",e,r[0],t))},g=function(e){e.preventDefault(),a((function(t){return r=[Number(e.target.value)-t[1],t[1]]})),l((function(e){return r[0]+r[1]}))};return Object(i.jsxs)("div",{style:{margin:"auto",textAlign:"center",width:"90%"},children:[Object(i.jsxs)("form",{style:{textAlign:"center"},children:[Object(i.jsxs)("small",{children:["Page: ",u," of ",t]}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{id:"pgRange",style:{width:t>40?"80%":"40%"},type:"range",min:"1",step:"1",max:t,defaultValue:u,onPointerUp:function(e){return g(e)},onKeyUp:function(e){return g(e)},onChange:function(e){l(Number(e.target.value)),e.target.focus()}})]}),Object(i.jsx)("button",{id:"prev",ref:j,onClick:function(){return h(!1)},children:"Prev <<"}),Object(i.jsx)("button",{id:"next",ref:d,onClick:function(){return h(!0)},children:" >> Next"})]})},h=function(e){var t=e.loading,r=e.dataArray,n=e.totPages,a=e.pageNr,c=e.setPageNr,s=e.setSearchQry,o=e.totPosts,u=e.searchQry;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{setPageNr:c,setSearchQry:s}),Object.keys(r).length>0?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{totPages:n,pageNr:a,setPageNr:c}),Object(i.jsx)("br",{}),Object(i.jsx)(d,{loading:t,dataArray:r,totPosts:o,searchQry:u})]}):Object(i.jsxs)("p",{style:{textAlign:"center"},children:[" ","... No search results returned ..."," "]})]})},g=r(18),f=r(7),O=r.n(f),x=r(19),p=r.n(x),m=function(e){var t=e.clientUrl,r=(e.dataArray,e.setDataArray),n=e.setLoading,a=e.setTotPages,c=e.setTotPosts,s=null,o=function(){var e=Object(g.a)(O.a.mark((function e(){var o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,p.a.get("".concat(t));case 4:if((o=e.sent).status){e.next=9;break}throw Error("Couldnt get data.");case 9:r(o.data.hits),a(o.data.nbPages),c(o.data.nbHits);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),s=e.t0,alert("".concat(e.t0.message," :( ... click ok to retry "));case 18:n(!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();!s&&o()},y=(r(44),function(){var e=Object(n.useState)(["Await data..."]),t=Object(o.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),l=s[0],j=s[1],d=Object(n.useState)(0),b=Object(o.a)(d,2),g=b[0],f=b[1],O=Object(n.useState)(0),x=Object(o.a)(O,2),p=x[0],y=x[1],v=Object(n.useState)([0,1]),P=Object(o.a)(v,2),w=P[0],N=P[1],A=Object(n.useState)(!1),k=Object(o.a)(A,2),S=k[0],Q=k[1],E="https://hn.algolia.com/api/v1/search?query=".concat(l,"&tags=story&").concat("hitsPerPage=20","&page=").concat(w[0]);return Object(n.useEffect)((function(){m({clientUrl:E,dataArray:r,setDataArray:a,setLoading:Q,setTotPages:f,setTotPosts:y})}),[E,l,w[0]]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{projectName:"My Hacker News"}),void 0===r?Object(i.jsx)("div",{children:"... this is my REACT boilerplate ..."}):Object(i.jsx)(h,{loading:S,dataArray:r,totPages:g,pageNr:w,setPageNr:N,setSearchQry:j,totPosts:p,searchQry:l})]})}),v=document.getElementById("root");window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),v)}},[[45,1,2]]]);
//# sourceMappingURL=main.c06c80f2.chunk.js.map