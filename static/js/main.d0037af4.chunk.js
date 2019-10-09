(window["webpackJsonpchemistry-lab-app"]=window["webpackJsonpchemistry-lab-app"]||[]).push([[0],{43:function(e,a,t){e.exports=t(81)},48:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t.n(r),m=(t(48),t(7)),i=t(15),o=t.n(i),u=function(){return l.a.createElement(o.a,{justify:!0,fill:!0,variant:"tabs"},l.a.createElement(o.a.Item,null,l.a.createElement(o.a.Link,null,l.a.createElement(m.b,{to:"/"},"Home"))),l.a.createElement(o.a.Item,null,l.a.createElement(o.a.Link,null,l.a.createElement(m.b,{to:"/courses"},"Courses"))),l.a.createElement(o.a.Item,null,l.a.createElement(o.a.Link,null,l.a.createElement(m.b,{to:"/"},"Videos"))),l.a.createElement(o.a.Item,null,l.a.createElement(o.a.Link,null,l.a.createElement(m.b,{to:"/"},"Safety"))))},s=function(){return l.a.createElement("header",null,l.a.createElement(u,null))},E=t(16),p=t(10),d=t.n(p),f=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h1",null,"Barnard Organic Chemistry Laboratory"),l.a.createElement("p",null,"Welcome Text goes here. Lorem Impsum dolor amet kickstarter before"),l.a.createElement("h4",null,"For Fall 2019 Students"),l.a.createElement("p",null,"View this week's experiment, your lab manual, and other course information"))},g=t(41),h=t.n(g),y=t(21),I=t.n(y),x=t(19),b=t.n(x),v={height:"10rem",width:"10rem"},k=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(h.a,null,l.a.createElement(I.a,{xs:6,md:3},l.a.createElement(b.a,{style:v,src:"/../beakers.jpg",rounded:!0})),l.a.createElement(I.a,{xs:6,md:3},l.a.createElement(b.a,{style:v,src:"/../molecule.jpg",rounded:!0})),l.a.createElement(I.a,{xs:6,md:3},l.a.createElement(b.a,{style:v,src:"/../beakers.jpg",rounded:!0})),l.a.createElement(I.a,{xs:6,md:3},l.a.createElement(b.a,{style:v,src:"/../molecule.jpg",rounded:!0}))))},_=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h4",null,"Video Tutorials"),l.a.createElement("p",null,"Learn lab techniques and more"))},D=t(42),S=t.n(D),w=function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(S.a,{variant:"primary",href:"#",block:!0},"See All Video Tutorials"))},H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(_,null),l.a.createElement(k,null),l.a.createElement(w,null))},C={courses:[{id:1,name:"Spectroscopy",instructor:"Smith"},{id:2,name:"Organic Chemistry",instructor:"Williams"}],all:function(){return this.courses},get:function(e){return this.courses.find((function(a){return a.id===e}))}},T={experiments:[{experimentID:1,courseID:1,week:1,name:"Spectroscopy Experiment 1",chemical_ids:[1,2]},{experimentID:2,courseID:1,week:2,name:"Spectroscopy Experiment 2",chemical_ids:[2,3]},{experimentID:3,courseID:1,week:3,name:"Spectroscopy Experiment 3",chemical_ids:[1,2]},{experimentID:4,courseID:2,week:1,name:"Organic Chemistry Experiment 1",chemical_ids:[1,2,3]},{experimentID:5,courseID:2,week:2,name:"Organic Chemistry Experiment 2",chemical_ids:[3]},{experimentID:6,courseID:2,week:3,name:"Organic Chemistry Experiment 3",chemical_ids:[1,3]}],all:function(e){return this.experiments},filtered:function(e){return this.experiments.filter((function(a){return a.courseID===e}))},get:function(e,a){return this.experiments.find((function(t){return t.week===a&&t.courseID===e}))}},L={chemicals:[{chemicalID:1,name:"Acetone",cas:"#67-64-1",safety_guideline:"Safety guidelines for acetone ... Highly flammable ..etc.. ",pictogram_ids:[2,5]},{chemicalID:2,name:"Diethyl ether",cas:"#60-29-7",safety_guideline:"... Highly flammable... corrosive..etc.",pictogram_ids:[3,7,9]},{chemicalID:3,name:"Trimyristin",cas:"#555-45-3",safety_guideline:null,pictogram_ids:[1,2,3]}],all:function(){return this.chemicals},get:function(e){return this.chemicals.find((function(a){return a.chemicalID===e}))},filtered:function(e){return this.chemicals.filter((function(a){return e.includes(a.chemicalID)}))}},G={pictograms:[{pictogramID:1,name:"Exploding bomb",filename:"GHS_01_Explosive.png"},{pictogramID:2,name:"Flame",filename:"GHS_02_Flammable.png"},{pictogramID:3,name:"Flame over circle",filename:"GHS_03_Oxidising.png"},{pictogramID:4,name:"Gas cylinder",filename:"GHS_04_Compressed.png"},{pictogramID:5,name:"Corrosion",filename:"GHS_05_Corrosion.png"},{pictogramID:5,name:"Skulls and crossbones",filename:"GHS_06_Skull.png"},{pictogramID:7,name:"Exclamation mark",filename:"GHS_07_Exclamation.png"},{pictogramID:8,name:"Health hazard",filename:"GHS_08_Health-Hazard.png"},{pictogramID:9,name:"Environment",filename:"GHS_09_Environment.png"}],all:function(){return this.pictograms},filtered:function(e){return this.pictograms.filter((function(a){return e.includes(a.pictogramID)}))},pictogramMap:function(e){var a=this.pictograms,t={};return e.forEach((function(e){var n=e.pictogram_ids,l=[];n.forEach((function(n){var r=a.find((function(e){return e.pictogramID==n}));l.push(r),t[e.chemicalID]=l}))})),t}},B=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,C.all().map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(m.b,{to:"/courses/".concat(e.id)},e.name))}))))},K=function(e){var a=parseInt(e.match.params.id,10);return l.a.createElement("div",null,l.a.createElement("ul",null,T.filtered(a).map((function(e){return l.a.createElement("li",{key:e.experimentID},l.a.createElement(m.b,{to:"experiments/".concat(e.week)},e.name))}))))},N=t(5),F=t.n(N),O=t(2),W=t.n(O),j=function(){return l.a.createElement(W.a,null,l.a.createElement(F.a.Toggle,{as:W.a.Header,eventKey:"0"},"Experiment Schedule"),l.a.createElement(F.a.Collapse,{eventKey:"0"},l.a.createElement(W.a.Body,null,l.a.createElement("ul",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"09/13: Extracting .... "),l.a.createElement("li",null,"09/20: Microscope testing ..."),l.a.createElement("li",null,"09/27: Synthesizing stuff"),l.a.createElement("li",null,"10/04: Ions and bonds ..."))))))},M=function(){return l.a.createElement(W.a,null,l.a.createElement(F.a.Toggle,{as:W.a.Header,eventKey:"1"},"Lab Notebooks and Reports"),l.a.createElement(F.a.Collapse,{eventKey:"1"},l.a.createElement(W.a.Body,null,l.a.createElement("p",null," Lab notebooks and reports ...... "))))},R=function(){return l.a.createElement(W.a,null,l.a.createElement(F.a.Toggle,{as:W.a.Header,eventKey:"2"},"Lab Regulations"),l.a.createElement(F.a.Collapse,{eventKey:"2"},l.a.createElement(W.a.Body,null,l.a.createElement("p",null,"Lab regulations ....."),l.a.createElement("li",null,"Regulation 1..."),l.a.createElement("li",null,"Regulation 2 ...."),l.a.createElement("li",null,"Regulation 3..."))))},V=function(e){var a=C.get(parseInt(e.match.params.id,10));if(!a)return l.a.createElement("div",null,"Sorry, course not found.");var t=a.id;return l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h3",null," ",a.name," "),l.a.createElement("h5",null,"Instructor: ",a.instructor),l.a.createElement("p",null," Welcome to ",a.name,"! "),l.a.createElement(F.a,null,l.a.createElement(j,null),l.a.createElement(M,null),l.a.createElement(R,null)),l.a.createElement("br",null),l.a.createElement(m.b,{to:"".concat(t,"/experiments")},"Experiments"))},q=function(){return l.a.createElement(W.a,null,l.a.createElement(F.a.Toggle,{as:W.a.Header,eventKey:"1"},"Theoretical Background"),l.a.createElement(F.a.Collapse,{eventKey:"1"},l.a.createElement(W.a.Body,null,l.a.createElement(W.a.Subtitle,{className:"mb-2"},"Introduction"),l.a.createElement(W.a.Text,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"," "))))},z={height:"3rem"},A=function(e){var a=e.chemicals,t=e._pictogramMap,n=a.map((function(e,a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a.Title,null," ",e.name," "),l.a.createElement(W.a.Subtitle,{className:"mb-2 text-muted"}," CAS ",e.cas," "),l.a.createElement(W.a.Text,null," ",e.safety_guideline," "),(n=e.chemicalID,t[n].map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a.Img,{variant:"buttom",src:"/../GHS-Pictograms/"+e.filename,style:z}))}))),l.a.createElement("hr",null));var n}));return l.a.createElement(W.a,null,l.a.createElement(F.a.Toggle,{as:W.a.Header,eventKey:"0"}," Chemicals "),l.a.createElement(F.a.Collapse,{eventKey:"0"},l.a.createElement(W.a.Body,null," ",n," ")))},J=function(e){var a=parseInt(e.match.params.id,10),t=parseInt(e.match.params.week,10),n=T.get(a,t),r=L.filtered(n.chemical_ids),c=G.pictogramMap(r);return n?l.a.createElement(d.a,{className:"p-3"},l.a.createElement("h3",null," Week ",n.week,": ",n.name," "),l.a.createElement(F.a,null,l.a.createElement(A,{chemicals:r,_pictogramMap:c}),l.a.createElement(q,null)),l.a.createElement(m.b,{to:"/"},"Back")):l.a.createElement("div",null,"Sorry, experiment not found.")},P=function(){return l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/courses",component:B}),l.a.createElement(E.a,{exact:!0,path:"/courses/:id",component:V}),l.a.createElement(E.a,{exact:!0,path:"/courses/:id/experiments",component:K}),l.a.createElement(E.a,{exact:!0,path:"/courses/:id/experiments/:week",component:J}))},U=function(){return l.a.createElement("main",null,l.a.createElement(E.c,null,l.a.createElement(E.a,{exact:!0,path:"/",component:H}),l.a.createElement(E.a,{path:"/courses",component:P})))},$=(t(80),function(){return l.a.createElement(d.a,{className:"p-3"},l.a.createElement(s,null),l.a.createElement(U,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(m.a,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d0037af4.chunk.js.map