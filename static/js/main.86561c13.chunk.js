(window["webpackJsonpchemistry-lab-app"]=window["webpackJsonpchemistry-lab-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),m=(t(43),t(6)),u=function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement(m.b,{to:"/"},"Home"),l.a.createElement("br",null),l.a.createElement(m.b,{to:"/courses"},"Courses")))},o=function(){return l.a.createElement("header",null,l.a.createElement(u,null))},i=t(15),s=t(18),E=t.n(s),p=t(8),d=t.n(p),h=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h1",null,"Barnard Organic Chemistry Laboratory"),l.a.createElement("p",null,"Welcome Text goes here. Lorem Impsum dolor amet kickstarter before"),l.a.createElement("h4",null,"For Fall 2019 Students"),l.a.createElement("p",null,"View this week's experiment, your lab manual, and other course information"))},f=t(37),x=t.n(f),y=t(19),g=t.n(y),b=t(20),v=t.n(b),w=(t(51),function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(x.a,null,l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(v.a,{src:"holder.js/171x180",rounded:!0})),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(v.a,{src:"holder.js/171x180",rounded:!0})),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(v.a,{src:"holder.js/171x180",rounded:!0})),l.a.createElement(g.a,{xs:6,md:3},l.a.createElement(v.a,{src:"holder.js/171x180",rounded:!0}))))}),k=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h4",null,"Video Tutorials"),l.a.createElement("p",null,"Learn lab techniques and more"))},I=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(E.a,{variant:"primary",href:"#",block:!0},"See All Video Tutorials"))},D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(I,null))},S={courses:[{id:1,name:"Spectroscopy",instructor:"Smith"},{id:2,name:"Organic Chemistry",instructor:"Williams"}],all:function(){return this.courses},get:function(e){return this.courses.find((function(a){return a.id===e}))}},C={experiments:[{experimentID:1,courseID:1,week:1,name:"Spectroscopy Experiment 1",chemicals:"water"},{experimentID:2,courseID:1,week:2,name:"Spectroscopy Experiment 2",chemicals:"helium"},{experimentID:3,courseID:1,week:3,name:"Spectroscopy Experiment 3",chemicals:"acetone"},{experimentID:4,courseID:2,week:1,name:"Organic Chemistry Experiment 1",chemicals:"chem 1"},{experimentID:5,courseID:2,week:2,name:"Organic Chemistry Experiment 2",chemicals:"chem 2"},{experimentID:6,courseID:2,week:3,name:"Organic Chemistry Experiment 3",chemicals:"chem 3"}],all:function(e){return this.experiments},filtered:function(e){return this.experiments.filter((function(a){return a.courseID===e}))},get:function(e,a){return this.experiments.find((function(t){return t.week===a&&t.courseID===e}))}},T=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,S.all().map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(m.b,{to:"/courses/".concat(e.id)},e.name))}))))},N=function(e){var a=parseInt(e.match.params.id,10);return l.a.createElement("div",null,l.a.createElement("ul",null,C.filtered(a).map((function(e){return l.a.createElement("li",{key:e.experimentID},l.a.createElement(m.b,{to:"experiments/".concat(e.week)},e.name))}))))},B=t(4),K=t.n(B),H=t(1),L=t.n(H),q=function(){return l.a.createElement(K.a,null,l.a.createElement(L.a,null,l.a.createElement(K.a.Toggle,{as:L.a.Header,eventKey:"0"},"Experiment Schedule"),l.a.createElement(K.a.Collapse,{eventKey:"0"},l.a.createElement(L.a.Body,null,l.a.createElement("ul",null,l.a.createElement("li",null,"09/13: Extracting .... "),l.a.createElement("li",null,"09/20: Microscope testing ..."),l.a.createElement("li",null,"09/27: Synthesizing stuff"),l.a.createElement("li",null,"10/04: Ions and bonds ..."))))))},W=function(){return l.a.createElement(K.a,null,l.a.createElement(L.a,null,l.a.createElement(K.a.Toggle,{as:L.a.Header,eventKey:"0"},"Lab Notebooks and Reports"),l.a.createElement(K.a.Collapse,{eventKey:"0"},l.a.createElement(L.a.Body,null,l.a.createElement("p",null," Lab notebooks and reports ...... ")))))},j=function(){return l.a.createElement(K.a,null,l.a.createElement(L.a,null,l.a.createElement(K.a.Toggle,{as:L.a.Header,eventKey:"0"},"Lab Regulations"),l.a.createElement(K.a.Collapse,{eventKey:"0"},l.a.createElement(L.a.Body,null,l.a.createElement("p",null,"Lab regulations ....."),l.a.createElement("li",null,"Regulation 1..."),l.a.createElement("li",null,"Regulation 2 ...."),l.a.createElement("li",null,"Regulation 3...")))))},O=function(e){var a=S.get(parseInt(e.match.params.id,10));if(!a)return l.a.createElement("div",null,"Sorry, course not found.");var t=a.id;return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h3",null,a.name," "),l.a.createElement("h4",null,"Instructor: ",a.instructor),l.a.createElement("p",null," Welcome to ",a.name,"! "),l.a.createElement(q,null),l.a.createElement(W,null),l.a.createElement(j,null),l.a.createElement("br",null),l.a.createElement(m.b,{to:"".concat(t,"/experiments")},"Experiments"))},R=function(){return l.a.createElement(K.a,null,l.a.createElement(L.a,null,l.a.createElement(K.a.Toggle,{as:L.a.Header,eventKey:"0"},"Chemicals"),l.a.createElement(K.a.Collapse,{eventKey:"0"},l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Subtitle,{className:"mb-2"},"Acetone"),l.a.createElement(L.a.Text,null,"Highly flammable liquid and vapor. Causes mild skin irritation."),l.a.createElement("hr",null),l.a.createElement(L.a.Subtitle,{className:"mb-2"},"Methanol"),l.a.createElement(L.a.Text,null,"Highly flammable liquid and vapor. Toxic if swallowed."),l.a.createElement("hr",null),l.a.createElement(L.a.Subtitle,{className:"mb-2"},"Diethyl ether"),l.a.createElement(L.a.Text,null,"Highly flammable liquid and vapor. Serious eye injury.")))))},F=function(){return l.a.createElement(K.a,null,l.a.createElement(L.a,null,l.a.createElement(K.a.Toggle,{as:L.a.Header,eventKey:"0"},"Theoretical Background"),l.a.createElement(K.a.Collapse,{eventKey:"0"},l.a.createElement(L.a.Body,null,l.a.createElement(L.a.Subtitle,{className:"mb-2"},"Introduction"),l.a.createElement(L.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"," ")))))},V=function(e){var a=parseInt(e.match.params.id,10),t=parseInt(e.match.params.week,10),n=C.get(a,t);return n?l.a.createElement("div",null,l.a.createElement("h3",null,"Week ",n.week,": ",n.name," "),l.a.createElement("h4",null,"Chemicals: ",n.chemicals),l.a.createElement(R,null),l.a.createElement(F,null),l.a.createElement(m.b,{to:"/"},"Back")):l.a.createElement("div",null,"Sorry, experiment not found.")},A=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/courses",component:T}),l.a.createElement(i.a,{exact:!0,path:"/courses/:id",component:O}),l.a.createElement(i.a,{exact:!0,path:"/courses/:id/experiments",component:N}),l.a.createElement(i.a,{exact:!0,path:"/courses/:id/experiments/:week",component:V}))},J=function(){return l.a.createElement("main",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:D}),l.a.createElement(i.a,{path:"/courses",component:A})))},M=(t(68),function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(o,null),l.a.createElement(J,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(m.a,null,l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.86561c13.chunk.js.map