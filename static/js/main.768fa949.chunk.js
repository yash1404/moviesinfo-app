(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(16),s=a.n(r),i=(a(23),a(24),a(6)),o=a.n(i),j=a(17),u=a(7),l=(a(26),a(0));var d=function(e){var t=e.arrayofdata;return Object(l.jsx)("div",{className:"container ",children:Object(l.jsx)("div",{className:"row",children:t.map((function(e,t){var a=e.Poster,c=e.Title,n=e.Year,r=e.Type;return Object(l.jsxs)("div",{className:"col-lg-3  picturedata",children:[Object(l.jsx)("img",{src:a,alt:"posters of films"}),Object(l.jsx)("h4",{children:c}),Object(l.jsxs)("div",{className:"yearandtype",children:[Object(l.jsxs)("h6",{children:["Year:",n]}),Object(l.jsxs)("h6",{children:["Type:",r]})]})]},t)}))})})},h=a(18),p=a.n(h);a(46);var b=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),h=i[0],b=i[1],m=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://www.omdbapi.com/?s=".concat(a,"&apikey=").concat("d3e802cf"));case 3:t=e.sent,console.log(t.data.Search),b(t.data.Search),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("oops!! try with different movie name....");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsxs)("div",{className:"icon",children:[Object(l.jsx)("h1",{children:"React movie app"}),Object(l.jsx)("img",{src:"../../img/camera2.png"})]}),Object(l.jsxs)("form",{onSubmit:function(e){m(),e.preventDefault()},children:[Object(l.jsx)("input",{type:"text",placeholder:" enter movie name",className:"searchbar",value:a,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("input",{type:"submit",value:"search",className:"search"})]})]}),Object(l.jsx)(d,{arrayofdata:h})]})};var m=function(){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(b,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.768fa949.chunk.js.map