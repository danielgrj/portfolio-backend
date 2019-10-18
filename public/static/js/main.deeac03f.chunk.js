(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{38:function(e,a,t){e.exports=t(71)},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),o=(t(43),t(9)),i=t(10),m=t(8),s=t(72);t(44);function u(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){r(!0)}),[]),l.a.createElement(s.a,{in:t,timeout:250,classNames:"section"},l.a.createElement("div",{className:"section-container home"},l.a.createElement("div",{className:"speach-container"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:"https://res.cloudinary.com/dsira9sgt/image/upload/v1571374617/Daniel%20Garcia/ava_i4outp.jpg",alt:"Daniel Garcia"})),l.a.createElement("div",{className:"text"},l.a.createElement("h1",null,"Daniel Garcia"),l.a.createElement("h2",null,"Full Stack Web Developer"),l.a.createElement("p",null,"I am passionate about using technology to improve every aspect of our life\u2019s. Continually looking to improve my skills and eager to help other improve theirs. Looking for a company that aims to create innovative and easy to use solutions for everyday problems."),l.a.createElement(o.b,{to:"/portfolio"},"View my projects")))))}var E=t(17),p=t(19);t(51);function v(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.c,{exact:!0,to:"/",activeClassName:"active"},"Home")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/portfolio",activeClassName:"active"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/contact",activeClassName:"active"},"Contact"))),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/danielgrj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E.a,{icon:p.a}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/danielgrj/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E.a,{icon:p.b})))))}var h=t(20),g=t.n(h),d=t(35),f=t(73),b=t(36),j=t.n(b).a.create({baseURL:"https://danielgarcia.xyz"}),y={sendMail:function(e){return j.post("mail",e)}};t(69);function w(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],E=Object(n.useState)(""),p=Object(m.a)(E,2),v=p[0],h=p[1],b=Object(n.useState)(void 0),j=Object(m.a)(b,2),w=j[0],N=j[1],O=Object(n.useState)(!1),k=Object(m.a)(O,2),S=k[0],x=k[1],_=Object(n.useState)(!1),C=Object(m.a)(_,2),D=C[0],M=C[1];Object(n.useEffect)((function(){x(!0)}),[]);var I=function(){var e=Object(d.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,y.sendMail({email:t,name:i,message:v});case 4:N("Your message was sent"),M(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),N("There was a problem with the server, please try again."),M(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(f.a,null,l.a.createElement(s.a,{in:S,timeout:250,classNames:"section"},l.a.createElement("div",{className:"section-container contact"},l.a.createElement("div",null,l.a.createElement("h2",null,"Contact me"),l.a.createElement("p",null,"If you want to get in touch with me, please fill the from below. I will get in contact as soon as I can.")),l.a.createElement("form",{onSubmit:I},l.a.createElement(s.a,{in:D,timeout:200,classNames:"notification"},l.a.createElement("div",null,w)),l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"name",onChange:function(e){u(e.target.value)},value:i})),l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"email",onChange:function(e){r(e.target.value)},value:t})),l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"10",onChange:function(e){h(e.target.value)},value:v}),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Submit"}))))))}t(70);function N(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){r(!0)}),[]),l.a.createElement(s.a,{in:t,timeout:250,classNames:"section"},l.a.createElement("div",{className:"section-container projects"},l.a.createElement("a",{className:"project-container",href:"https://danielgrj.github.io/ironEmblem/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/dsira9sgt/image/upload/v1571347287/Daniel%20Garcia/Screenshot_201_dhjjli.png",alt:"Ironemblem"})),l.a.createElement("h3",null,"Ironemblem"),l.a.createElement("div",null,l.a.createElement("p",null,"A tactical multiplayer game, heavily inspired in the classic Fire Emblem games. "),l.a.createElement("ul",null,l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Canvas")))),l.a.createElement("a",{className:"project-container",href:"https://dan-gis-raudo.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/dsira9sgt/image/upload/v1571347286/Daniel%20Garcia/Screenshot_202_ohwosc.png",alt:"raudo"})),l.a.createElement("h3",null,"Raudo"),l.a.createElement("div",null,l.a.createElement("p",null,"A webapp that lets you connect with the professionals you need in your everyday life."),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Handlebars"),l.a.createElement("li",null,"Bulma")))),l.a.createElement("a",{className:"project-container",href:"https://atldan-minerva.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:"https://res.cloudinary.com/dsira9sgt/image/upload/v1571347286/Daniel%20Garcia/Screenshot_203_yggrau.png",alt:"minerva"})),l.a.createElement("h3",null,"Minerva"),l.a.createElement("div",null,l.a.createElement("p",null,"Minerva is a quotes and references manager that aims to become a useful tool for humanistic research. "),l.a.createElement("ul",null,l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Draft.js"))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement((function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(v,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:u}),l.a.createElement(i.a,{exact:!0,path:"/contact",component:w}),l.a.createElement(i.a,{exact:!0,path:"/portfolio",component:N}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.deeac03f.chunk.js.map