(this["webpackJsonpreact-cyworld"]=this["webpackJsonpreact-cyworld"]||[]).push([[0],{139:function(e,t,a){e.exports=a(244)},144:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=(a(144),a(145),a(16)),c=Object(n.createContext)(null),s=a(248),d=a(252),u=a(249),m=a(256),p=a(257),g=a(258),b=a(259),E=a(255),v=a(51),y=a(15);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"orange",fontSize:"2em"}},"Edit your own title later!"),l.a.createElement("a",{style:{color:"grey",fontSize:"12px",position:"absolute",right:"2%",bottom:"1%"}},"https://osmotically.github.io/react-cyworld/"))};var h=function(){return l.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",bottom:"0"}},l.a.createElement("span",{style:{marginRight:"4px"}},"TODAY"),l.a.createElement("span",{style:{marginRight:"4px",color:"red"}},0),"| TOTAL ".concat(9999))},x=a(251);var k=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(i.a)(o,2),s=c[0],d=c[1];return Object(n.useEffect)((function(){r(!0),null===s&&FB.api("/me","get",{fields:"birthday,gender, email, name"},(function(e){console.log(e),d(e)})),r(!1)}),[s]),l.a.createElement(x.a,{size:"small",title:"Self Intro",loading:a},l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{marginBottom:"2px"}},l.a.createElement("span",{style:{color:"blue",fontWeight:"bold",marginRight:"4px"}},null===s||void 0===s?void 0:s.name),l.a.createElement("span",{style:{color:"grey",fontSize:"small"}},"(".concat("male"===(null===s||void 0===s?void 0:s.gender)?"\u2642":"\u2640",") ").concat(null===s||void 0===s?void 0:s.birthday)," ")),l.a.createElement("p",{style:{color:"orange",fontSize:"small"}},null===s||void 0===s?void 0:s.email)))},O=a(250),w=a(254);var S=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],d=c[1];function u(e){switch(e){case"status":return"magenta";case"link":return"blue";case"photo":return"gold";case"video":return"purple";default:return"cyan"}}return Object(n.useEffect)((function(){r(!0),0===s.length&&FB.api("/me/posts","get",{fields:"message, type",limit:"10"},(function(e){var t;d(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])})),r(!1)}),[s]),l.a.createElement(x.a,{size:"small",title:"Updated news"},l.a.createElement(O.b,{size:"small",loading:a,bordered:!0,dataSource:s,renderItem:function(e){return l.a.createElement(O.b.Item,{key:null===e||void 0===e?void 0:e.id},l.a.createElement(w.a,{color:String(u(null===e||void 0===e?void 0:e.type))},null===e||void 0===e?void 0:e.type),null===e||void 0===e?void 0:e.message)}}))};var j=function(){return null===Object(n.useContext)(c)?l.a.createElement(E.a,{message:"Sign In",description:"Please sign in to see your FB information in the homepage.",type:"error",showIcon:!0}):l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"#4ab5d6",padding:"24px"}},l.a.createElement("div",{style:{border:"1px dashed white",borderRadius:"16px",backgroundColor:"#4ab5d6",padding:"4px"}},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"white",padding:"20px 10px"}},l.a.createElement(v.a,{gutter:16},l.a.createElement(y.a,{span:6},l.a.createElement(h,null)),l.a.createElement(y.a,{span:18},l.a.createElement(f,null))),l.a.createElement(v.a,{gutter:16},l.a.createElement(y.a,{span:6},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"#e6eeee",padding:"15px 10px"}},l.a.createElement("div",{style:{border:"1px solid white",borderRadius:"8px",backgroundColor:"white",padding:"10px 20px",minHeight:"700px"}},l.a.createElement(k,null)))),l.a.createElement(y.a,{span:18},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"white",padding:"10px 20px",minHeight:"732px"}},l.a.createElement(S,null)))))))},I=a(253),C=a(133),z=a.n(C);var R=function(e){return null!==e.userInfo?l.a.createElement(I.a,{type:"dashed",onClick:function(){e.setUserInfo(null)}},"Log Out"):l.a.createElement(z.a,{appId:"2600949710193273",autoLoad:!1,size:"small",fields:"name,picture",scope:"public_profile,user_posts",callback:function(t){e.setUserInfo(t)}})},B=s.a.Content,F=s.a.Footer,H=s.a.Sider;var A=function(){var e,t,a=Object(n.useState)(!1),r=Object(i.a)(a,2),o=r[0],E=r[1],v=Object(n.useState)("homepage"),y=Object(i.a)(v,2),f=y[0],h=y[1],x=Object(n.useState)(null),k=Object(i.a)(x,2),O=k[0],w=k[1],S=l.a.createElement(c.Provider,{value:O},l.a.createElement(j,null));return"login"===f&&(S=l.a.createElement(R,{userInfo:O,setUserInfo:w})),l.a.createElement(s.a,{style:{minHeight:"100vh"}},l.a.createElement(H,{collapsible:!0,collapsed:o,onCollapse:E},l.a.createElement(d.a,{theme:"dark",onClick:function(e){return h(e.key)},defaultSelectedKeys:["homepage"],mode:"inline"},l.a.createElement("div",{style:{margin:"16px"}},null===O?l.a.createElement(u.a,{icon:l.a.createElement(m.a,null),style:{margin:"0 8px"}}):l.a.createElement(u.a,{src:String(null===O||void 0===O||null===(e=O.picture)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url),style:{margin:"0 8px"}}),!o&&"".concat(null===O?"Please sign in":null===O||void 0===O?void 0:O.name)),l.a.createElement(d.a.Item,{key:"homepage",icon:l.a.createElement(p.a,null)},"Mini Homepage"),l.a.createElement(d.a.Item,{key:"login",icon:null===O?l.a.createElement(g.a,null):l.a.createElement(b.a,null)},"Sign ".concat(null===O?"In":"Out")))),l.a.createElement(s.a,{className:"site-layout"},l.a.createElement(B,{style:{backgroundColor:"#737373",backgroundSize:"20px 20px",backgroundImage:"linear-gradient(to right, #8b9192 1px, transparent 1px), linear-gradient(to bottom, #8b9192 1px, transparent 1px)"}},l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},S)),l.a.createElement(F,{style:{textAlign:"center"}},"Created by Osmotically")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[139,1,2]]]);
//# sourceMappingURL=main.cb82fc51.chunk.js.map