(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),u=n(0),b=function(e){var t=e.id,n=e.name,r=e.email;return Object(u.jsxs)("div",{className:"tc bg-light-green o-100 dib br3 ma2 pd3 grow bw-2 shadow-5",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"sufiyan"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(b,{id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email},n)}))})},d=function(e){var t=e.SearchChange;return Object(u.jsx)("input",{className:"bg-lightest-blue pa3 b--light-green bw2",type:"search",placeholder:"Search Robots",onChange:t})},f=(n(14),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",borderTop:"3px solid green",height:"800px",marginTop:"10px"},children:e.children})}),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"ooooops, Theres something wrong"}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({SearchField:t.target.value})},e.state={robots:[],SearchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.SearchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:Object(u.jsx)("strong",{children:"RoboFriends"})}),Object(u.jsx)(d,{SearchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(g,{children:Object(u.jsx)(j,{robots:r})})})]}):Object(u.jsx)("h2",{children:"loading"})}}]),n}(c.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};n(15);s.a.render(Object(u.jsx)(p,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.3a97027a.chunk.js.map