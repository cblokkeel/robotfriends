(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(3),o=n.n(a),i=(n(13),n(4)),h=n(5),l=n(7),b=n(6),j=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c),alt:"robot"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)(s.a.Fragment,{children:t})},u=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"100vh"},children:e.children})},f=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},m=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).searchBoxChange=function(t){return e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Robotfriends"}),Object(r.jsx)(f,{searchChange:this.searchBoxChange}),Object(r.jsx)(u,{children:Object(r.jsx)(d,{robots:c})})]})}}]),n}(s.a.Component));n(15);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9a28cb6.chunk.js.map