(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"3e5b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navbar"),n("Main"),n("PostComponent",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("COVID-19 Risk Assessment Tool")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{href:"#"}},[t._v("Dashboard")]),n("b-nav-item",{attrs:{href:"#"}},[t._v("Today's Assessment Data")]),n("b-nav-item",{attrs:{href:"#"}},[t._v("About")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" User ")]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Settings")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},i=[],c={name:"Navbar"},l=c,u=n("2877"),d=Object(u["a"])(l,s,i,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("br"),n("h2",[t._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("Say Something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post!")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-contineer"},t._l(t.posts,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r},on:{dblclick:function(n){return t.deletePost(e._id)}}},[t._v(" "+t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},v=[],b=(n("96cf"),n("1da1")),g=(n("d81d"),n("d3b7"),n("5530")),m=n("d4ec"),h=n("bee2"),_=n("bc3a"),x=n.n(_),w="api/posts/",y=function(){function t(){Object(m["a"])(this,t)}return Object(h["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){x.a.get(w).then((function(e){var n=e.data;t(n.map((function(t){return Object(g["a"])(Object(g["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t){return x.a.post(w,{text:t})}},{key:"deletePost",value:function(t){return x.a.delete("".concat(w).concat(t))}}]),t}(),O=y,P={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createPost:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.insertPost(t.text);case 2:return e.next=4,O.getPosts();case 4:t.posts=e.sent;case 5:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,O.deletePost(t);case 2:return n.next=4,O.getPosts();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},j=P,k=(n("f0be"),Object(u["a"])(j,f,v,!1,null,"cedeff74",null)),C=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("pre",[n("b",[t._v("COVID-19 Risk Assessment Tool ")]),t._v(" |  Created for CS467 at Oregon State University, Fall 2020")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1)],1)},T=[],A={name:"Footer"},R=A,D=Object(u["a"])(R,S,T,!1,null,null,null),M=D.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("br"),r("h2",[t._v("Data as of: "+t._s((new Date).toLocaleDateString()))]),r("img",{attrs:{src:n("80c2"),width:800,"padding-bottom":25}})]),r("div",[r("br"),r("h2",[t._v("Your Risk Assessment")]),r("br"),r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"bg-variant":"light",title:"Risk Status","img-alt":"Image","img-top":""},scopedSlots:t._u([{key:"footer",fn:function(){return[r("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])]},proxy:!0}])},[r("b-card-text",[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")])],1),r("b-card",{attrs:{"bg-variant":"light",title:"Title","img-alt":"Image","img-top":""},scopedSlots:t._u([{key:"footer",fn:function(){return[r("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])]},proxy:!0}])},[r("b-card-text",[t._v(" This card has supporting text below as a natural lead-in to additional content. ")])],1),r("b-card",{attrs:{"bg-variant":"light",title:"Title","img-alt":"Image","img-top":""},scopedSlots:t._u([{key:"footer",fn:function(){return[r("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])]},proxy:!0}])},[r("b-card-text",[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. ")])],1)],1),r("br"),r("button",{staticClass:"btn btn-secondary btn-lg",attrs:{type:"button"}},[t._v("Button Example")]),r("br")],1)])},$=[],F={name:"Main"},I=F,L=Object(u["a"])(I,E,$,!1,null,null,null),N=L.exports,V={name:"App",components:{PostComponent:C,Navbar:p,Footer:M,Main:N}},Y=V,J=(n("034f"),Object(u["a"])(Y,a,o,!1,null,null,null)),U=J.exports,q=n("5f5b"),B=n("b1e0");n("f9e3"),n("2dd8"),n("3e5b");r["default"].use(q["a"]),r["default"].use(B["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(U)}}).$mount("#app")},"80c2":function(t,e,n){t.exports=n.p+"img/graph.a5d96472.svg"},"85ec":function(t,e,n){},d5ec:function(t,e,n){},f0be:function(t,e,n){"use strict";var r=n("d5ec"),a=n.n(r);a.a}});
//# sourceMappingURL=app.85f4a259.js.map