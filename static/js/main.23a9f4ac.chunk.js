(this.webpackJsonpdragndrop=this.webpackJsonpdragndrop||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(4),c=n.n(o),s=(n(9),n(3)),i=(n(10),n(0));var u=function(){var e=Object(r.useState)([{name:"Damir",status:"start"}]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),c=Object(s.a)(o,2),u=c[0],d=c[1],l={start:[],inProgress:[],done:[]};n.forEach((function(e){l[e.status].push(Object(i.jsx)("div",{onDragStart:function(t){return g(t,e.name)},draggable:!0,className:u?"item hide":"item",children:e.name}))}));var g=function(e,t){setTimeout((function(){d(!0)})),e.dataTransfer.setData("id",t),e.target.style.background="yellow"},f=function(e){e.preventDefault()},j=function(e,t){var r=e.dataTransfer.getData("id"),o=n.filter((function(e){return e.name===r&&(e.status=t),e}));e.target.style.border="",a(o),d(!1)},b=function(e){e.target.style.border="2px solid purple",e.target.style.borderRadius="20px"},h=function(e){e.target.style.border="",e.target.style.background=""};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-header start",children:" Start"}),Object(i.jsx)("div",{className:"col-header progress",children:"In Progress"}),Object(i.jsx)("div",{className:"col-header done",children:"Done"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{onDragLeave:function(e){return h(e)},onDragEnter:function(e){return b(e)},onDrop:function(e){return j(e,"start")},onDragOver:function(e){return f(e)},className:"placeholder",children:l.start}),Object(i.jsx)("div",{onDragLeave:function(e){return h(e)},onDragEnter:function(e){return b(e)},onDrop:function(e){return j(e,"inProgress")},onDragOver:function(e){return f(e)},className:"placeholder",children:l.inProgress}),Object(i.jsx)("div",{onDragLeave:function(e){return h(e)},onDragEnter:function(e){return b(e)},onDrop:function(e){return j(e,"done")},onDragOver:function(e){return f(e)},className:"placeholder",children:l.done})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.23a9f4ac.chunk.js.map