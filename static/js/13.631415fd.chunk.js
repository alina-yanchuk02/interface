(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{163:function(e,a,t){},167:function(e,a,t){e.exports=t.p+"static/media/card1.51218abd.png"},168:function(e,a,t){e.exports=t.p+"static/media/card2.7aad48eb.png"},274:function(e,a,t){"use strict";t.r(a);var n=t(86),c=t(95),r=t(2),i=t.n(r),o=t(137),s=(t(163),t(96)),l=t(167),m=t.n(l),d=t(168),u=t.n(d),f=t(300),p=t(74),E=t(280);function g(e){var a=e.children,t=Object(r.useRef)(),c=Object(r.useState)(!1),s=Object(n.a)(c,2),l=s[0],m=s[1],d=Object(o.useSpring)(function(){return{xys:[0,0,1],config:{mass:10,tension:400,friction:40,precision:1e-5}}}),u=Object(n.a)(d,2),f=u[0],p=u[1];return i.a.createElement(o.animated.div,{ref:t,className:"cardWelcome",onMouseEnter:function(){return m(!0)},onMouseMove:function(e){var a=e.clientX,n=e.clientY,c=a-(t.current.offsetLeft-(window.scrollX||window.pageXOffset||document.body.scrollLeft)),r=[-(n-(t.current.offsetTop-(window.scrollY||window.pageYOffset||document.body.scrollTop))-t.current.clientHeight/2)/50,(c-t.current.clientWidth/2)/50,1.07];p({xys:r})},onMouseLeave:function(){m(!1),p({xys:[0,0,1]})},style:{zIndex:l?2:1,transform:f.xys.interpolate(function(e,a,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(a,"deg) scale(").concat(t,")")})}},a)}function b(e){var a=e.children;return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"hero-body"},a))}var O=[{image:m.a},{image:u.a}];a.default=function(){return i.a.createElement(c.a,{title:""},i.a.createElement(p.a,null,i.a.createElement("div",{style:{backgroundImage:"linear-gradient(#ffd639, white)",height:"100vh",width:"100%"}},i.a.createElement(s.a,{delay:"500"},i.a.createElement("p",{className:"headingWelcome"},"CONSEGUE DESCOBRIR A DIFEREN\xc7A ENTRE OS SEGUINTES DOIS T\xcdTULOS DE NOT\xcdCIAS?")),i.a.createElement(b,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},O.map(function(e,a){return i.a.createElement("div",{className:"column"},i.a.createElement(s.a,{delay:"2500"},i.a.createElement(g,{className:"cardWelcome"},i.a.createElement(f.a,{className:"boxWelcome"},i.a.createElement(E.a,{className:"welcomeImg",src:e.image})))))})))),i.a.createElement(s.a,{delay:"6200"},i.a.createElement("p",{className:"headingAnswer1"},"O primeiro referencia uma doen\xe7a mental num contexto adequado, sem a estigmatizar.")),i.a.createElement(s.a,{delay:"8500"},i.a.createElement(p.a,null,i.a.createElement("p",{className:"headingAnswer2"},"O segundo utiliza a mesma doen\xe7a como uma "),i.a.createElement("p",{className:"headingAnswer3"}," met\xe1fora."))))))}},87:function(e,a,t){"use strict";var n=t(92),c=t(1),r=t.n(c);Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},95:function(e,a,t){"use strict";var n=t(15),c=t(2),r=t.n(c),i=(t(87),t(17).a.create("page")),o=function(e){e.title,e.breadcrumbs;var a=e.tag,t=e.className,c=e.children,o=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),s=i.b("px-0",t);return r.a.createElement(a,Object.assign({style:{marginLeft:"95px"},className:s},o),c)};o.defaultProps={tag:"div",title:""},a.a=o},96:function(e,a,t){"use strict";var n,c,r=t(92),i=t(15),o=t(101),s=t(2),l=t.n(s),m=t(106),d=Object(m.b)(n||(n=Object(o.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),u=m.a.div(c||(c=Object(o.a)(["\n  @media (prefers-reduced-motion: no-preference) {\n    animation-name: ",";\n    animation-fill-mode: backwards;\n  }\n"])),d);a.a=function(e){var a=e.duration,t=void 0===a?400:a,n=e.delay,c=void 0===n?0:n,o=e.children,s=Object(i.a)(e,["duration","delay","children"]);return l.a.createElement(u,Object.assign({},s,{style:Object(r.a)({},s.style||{},{animationDuration:t+"ms",animationDelay:c+"ms"})}),o)}}}]);
//# sourceMappingURL=13.631415fd.chunk.js.map