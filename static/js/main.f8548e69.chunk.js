(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{21:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(14),r=a.n(s),i=(a(21),a(5)),l=a.n(i),o=a(15),u=a(3),d=a(0),j=function(e){var t=e.images,a=e.loading,c=Object(n.useState)(0),s=Object(u.a)(c,2),r=s[0],i=s[1],l=t.length;return!Array.isArray(t)||t.length<=0?null:a?Object(d.jsx)("h2",{children:"Loading..."}):Object(d.jsx)("div",{className:"container-fluid mb-3",children:Object(d.jsxs)("div",{id:"carouselExampleControls",class:"carousel slide","data-bs-ride":"carousel",children:[Object(d.jsx)("div",{class:"carousel-inner",children:t.map((function(e,t){return Object(d.jsx)("div",{className:t===r?"carousel-item active":"carousel-item",children:t===r&&Object(d.jsx)("img",{className:"d-block w-100",src:e.download_url,alt:"Third slide"},e.id)},t)}))}),Object(d.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev",onClick:function(){i(0===r?l-1:r-1)},children:[Object(d.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(d.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next",onClick:function(){i(r===l-1?0:r+1)},children:[Object(d.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})},b=function(e){for(var t=e.imagesPerPage,a=e.totalImages,n=e.paginate,c=[],s=1;s<=Math.ceil(a/t);s++)c.push(s);return Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{onClick:function(){return n(e)},href:"!#",className:"page-link",children:e})},e)}))})})},p=a(16),h=a.n(p),m=(a(42),a(43),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(u.a)(s,2),i=r[0],p=r[1],m=Object(n.useState)(1),O=Object(u.a)(m,2),x=O[0],g=O[1],f=Object(n.useState)(5),v=Object(u.a)(f,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,h.a.get("https://picsum.photos/v2/list");case 3:t=e.sent,c(t.data),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=x*v,C=N-v,k=a.slice(C,N);return Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)(j,{images:k,loading:i}),Object(d.jsx)("div",{class:"position-absolute mt-5 start-50 translate-middle",children:Object(d.jsx)(b,{imagesPerPage:v,totalImages:a.length,paginate:function(e){return g(e)}})})]})}),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.f8548e69.chunk.js.map