(function(e){function t(t){for(var o,s,u=t[0],a=t[1],l=t[2],c=0,d=[];c<u.length;c++)s=u[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"461a1e3c"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.src=s(e);var l=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"3b4d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("| "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("Footer"),n("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"footer py-3"},[n("p",[e._v("Created By Liy Hwong Jun @2020")])])])}],a={name:"footer"},l=a,c=(n("870e"),n("2877")),f=Object(c["a"])(l,s,u,!1,null,"093f9362",null),d=f.exports,p={components:{Footer:d}},m=p,v=(n("034f"),Object(c["a"])(m,r,i,!1,null,null,null)),h=v.exports,b=(n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},g=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",[n("b-input-group",{staticClass:"mt-3 w-50 mx-auto",attrs:{prepend:"ToDoList"}},[n("b-form-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addNew(t)}},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"primary"},on:{click:e.addNew}},[e._v("Add List")])],1)],1)],1),n("div",{staticClass:"box-center w-50 mx-auto my-3"},[n("b-list-group",e._l(e.items,(function(t,o){return n("b-list-group-item",{key:t.id,class:{finished:t.isfinished},on:{mouseover:function(n){return e.moveBtn(t)},mouseout:function(n){return e.leaveBtn(t)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"my-auto",class:{bgYellow:t.isBgyellow},on:{click:function(n){return e.toggleFinished(t)}}},[e._v(e._s(t.label))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"item.isShow"}],staticClass:"ml-auto"},[n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(n){return e.moveUp(o,t)}}},[e._v("Move Up")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(n){return e.moveDown(o,t)}}},[e._v("Move Down")]),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(n){return e.deleteBtn(o,t)}}},[e._v("Delete")])],1)])])})),1)],1)])},_=[],k=(n("a434"),n("f9e3"),n("2dd8"),"todo-vuejs"),x={fecth:function(){return JSON.parse(window.localStorage.getItem(k)||"[]")},save:function(e){window.localStorage.setItem(k,JSON.stringify(e))}},O={name:"HelloWorld",data:function(){return{title:"A simple todo-list",items:x.fecth(),newItem:"",msg:"Choose one",isShow:!1,isBlock:!0,isBgyellow:!1,leftPx:0,topPx:0}},watch:{items:{handler:function(e){x.save(e)},deep:!0}},methods:{toggleFinished:function(e){e.isfinished=!e.isfinished},show:function(e){e.cancelBubble=!0,this.isBlock=!1,this.topPx=e.clientY,this.leftPx=e.clientX},stop:function(e){e.isBlock=!0},moveBtn:function(e){e.isShow=!0},leaveBtn:function(e){e.isShow=!1},addNew:function(){""!=this.newItem&&this.items.push({label:this.newItem,isfinished:!1}),this.newItem=""},moveUp:function(e,t){this.items.splice(e-1,0,this.items[e]),this.items.splice(e+1,1),t.isShow=!1,0==e&&alert("you are highest on top")},moveDown:function(e,t){this.items.splice(e+2,0,this.items[e]),this.items.splice(e,1),t.isShow=!1,e==this.items.length-1&&alert("you are on lowest row")},deleteBtn:function(e){this.items.splice(e,1)}}},j=O,S=(n("eb2b"),Object(c["a"])(j,y,_,!1,null,"8952a89e",null)),C=S.exports,B={name:"Home",components:{HelloWorld:C}},P=B,E=Object(c["a"])(P,w,g,!1,null,null,null),I=E.exports;o["default"].use(b["a"]);var H=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=new b["a"]({routes:H}),M=A,N=n("5f5b"),T=n("b1e0");o["default"].use(N["a"]),o["default"].use(T["a"]),o["default"].config.productionTip=!1,new o["default"]({router:M,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},"870e":function(e,t,n){"use strict";var o=n("df2e"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},df2e:function(e,t,n){},eb2b:function(e,t,n){"use strict";var o=n("3b4d"),r=n.n(o);r.a}});
//# sourceMappingURL=app.3c866bb9.js.map