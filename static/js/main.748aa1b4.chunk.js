(this["webpackJsonpreact-cyworld"]=this["webpackJsonpreact-cyworld"]||[]).push([[0],{147:function(e,t,a){e.exports=a(258)},152:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=(a(152),a(153),a(14)),c=Object(n.createContext)(null),s=a(262),u=a(266),d=a(263),m=a(271),p=a(272),g=a(273),E=a(274),b=a(275),y={LOGIN:"login",HOMEPAGE:"homepage",PRIVACY:"privacy"},v=a(269),h=a(55),f=a(19);var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"orange",fontSize:"2em"}},"Edit your own title later!"),l.a.createElement("a",{href:"/#",style:{color:"grey",fontSize:"12px",position:"absolute",right:"2%",bottom:"1%"}},"https://osmotically.github.io/react-cyworld/"))};var w=function(){return l.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",bottom:"0"}},l.a.createElement("span",{style:{marginRight:"4px"}},"TODAY"),l.a.createElement("span",{style:{marginRight:"4px",color:"red"}},0),"| TOTAL ".concat(9999))},O=a(119);var k=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),s=c[0],u=c[1];return Object(n.useEffect)((function(){r(!0),""===s&&FB.api("/me/picture","get",{height:"320",redirect:"false"},(function(e){var t;u(String(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url))})),r(!1)}),[s]),a?l.a.createElement(O.a,null):l.a.createElement("img",{alt:"profile_pic",src:s})},S=a(270);var I=function(){return l.a.createElement("div",{style:{border:"1px solid #cbcbcb",borderRadius:"8px",backgroundColor:"white",padding:"4px 20px",marginBottom:"4px"}},l.a.createElement("span",{style:{marginRight:"8px",color:"#229ed0",fontWeight:"bold"}},"TODAY IS.."),l.a.createElement(S.a,null),"\ucd5c\uace0\uc5d0\uc694")};var j=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(i.a)(o,2),s=c[0],u=c[1];return Object(n.useEffect)((function(){r(!0),null===s&&FB.api("/me","get",{fields:"birthday,gender, email, name"},(function(e){u(e)})),r(!1)}),[s]),a?l.a.createElement(O.a,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{marginBottom:"2px"}},l.a.createElement("span",{style:{color:"blue",fontWeight:"bold",marginRight:"4px"}},null===s||void 0===s?void 0:s.name),l.a.createElement("span",{style:{color:"grey",fontSize:"small"}},"(".concat("male"===(null===s||void 0===s?void 0:s.gender)?"\u2642":"\u2640",") ").concat(null===s||void 0===s?void 0:s.birthday)," ")),l.a.createElement("p",{style:{color:"orange",fontSize:"small"}},null===s||void 0===s?void 0:s.email))},C=a(261);var R=function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(k,null),l.a.createElement(C.a,{style:{marginTop:"12px",marginBottom:"4px"},dashed:!0}),l.a.createElement(I,null),l.a.createElement(j,null))},P=a(265),A=a(264),B=a(268);var F=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],u=c[1];function d(e){switch(e){case"status":return"magenta";case"link":return"blue";case"photo":return"gold";case"video":return"purple";default:return"cyan"}}return Object(n.useEffect)((function(){r(!0),0===s.length&&FB.api("/me/posts","get",{fields:"message, type",limit:"10"},(function(e){var t;u(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])})),r(!1)}),[s]),l.a.createElement(P.a,{size:"small",title:"Updated news"},l.a.createElement(A.b,{size:"small",loading:a,bordered:!0,dataSource:s,renderItem:function(e){return l.a.createElement(A.b.Item,{key:null===e||void 0===e?void 0:e.id},l.a.createElement(B.a,{color:String(d(null===e||void 0===e?void 0:e.type))},null===e||void 0===e?void 0:e.type),null===e||void 0===e?void 0:e.message)}}))};var L=function(){return null===Object(n.useContext)(c)?l.a.createElement(v.a,{message:"Sign In",description:"Please sign in to see your FB information in the homepage.",type:"error",showIcon:!0}):l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"#4ab5d6",padding:"24px"}},l.a.createElement("div",{style:{border:"1px dashed white",borderRadius:"16px",backgroundColor:"#4ab5d6",padding:"4px"}},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"white",padding:"20px 10px"}},l.a.createElement(h.a,{gutter:16},l.a.createElement(f.a,{span:6},l.a.createElement(w,null)),l.a.createElement(f.a,{span:18},l.a.createElement(x,null))),l.a.createElement(h.a,{gutter:16},l.a.createElement(f.a,{span:6},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"#e6eeee",padding:"15px 10px"}},l.a.createElement("div",{style:{border:"1px solid white",borderRadius:"8px",backgroundColor:"white",padding:"10px 20px",minHeight:"700px"}},l.a.createElement(R,null)))),l.a.createElement(f.a,{span:18},l.a.createElement("div",{style:{border:"1px solid",borderRadius:"8px",backgroundColor:"white",padding:"10px 20px",minHeight:"732px"}},l.a.createElement(F,null)))))))},z=a(267),H=a(140),Y=a.n(H);var G=function(e){return null!==e.userInfo?l.a.createElement(z.a,{type:"dashed",onClick:function(){e.setUserInfo(null)}},"Log Out"):l.a.createElement(Y.a,{appId:"2600949710193273",autoLoad:!1,size:"small",fields:"name,picture",scope:"public_profile,user_posts",textButton:"Continue with Facebook",callback:function(t){e.setUserInfo(t)}})};var T=function(){return l.a.createElement(P.a,{title:"Privacy Policy"},l.a.createElement(v.a,{style:{marginBottom:"8px"},message:"Warning",description:"React Cyworld is READ ONLY site. It does not collect any of your information.",type:"warning",showIcon:!0}),l.a.createElement("ul",null,l.a.createElement("li",null,"React Cyworld is an open source website. You can check Typescript based ReactJS codebase on this",l.a.createElement("a",{href:"https://github.com/osmotically/react-cyworld/tree/master",target:"_blank",style:{marginLeft:"4px"}},"github link"),"."),l.a.createElement("li",null,"This website reads your information via FB GraphAPI; however, it does not have any ability (nor storage) to store your personal information."),l.a.createElement("li",null,"You can think of this mini-homepage as a FB skin.")))},N=s.a.Content,M=s.a.Footer,U=s.a.Sider;var W=function(){var e,t,a,r=new URLSearchParams(window.location.search),o=Object(n.useState)(!1),v=Object(i.a)(o,2),h=v[0],f=v[1],x=Object(n.useState)(null!==(e=r.get("menu"))&&void 0!==e?e:y.HOMEPAGE),w=Object(i.a)(x,2),O=w[0],k=w[1],S=Object(n.useState)(null),I=Object(i.a)(S,2),j=I[0],C=I[1],R=l.a.createElement(c.Provider,{value:j},l.a.createElement(L,null));return O===y.LOGIN?R=l.a.createElement(G,{userInfo:j,setUserInfo:C}):O===y.PRIVACY&&(R=l.a.createElement(T,null)),l.a.createElement(s.a,{style:{minHeight:"100vh"}},l.a.createElement(U,{collapsible:!0,collapsed:h,onCollapse:f},l.a.createElement(u.a,{theme:"dark",onClick:function(e){k(e.key),r.set("menu",e.key),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(r))},defaultSelectedKeys:[O],mode:"inline"},l.a.createElement("div",{style:{margin:"16px"}},null===j?l.a.createElement(d.a,{icon:l.a.createElement(m.a,null),style:{margin:"0 8px"}}):l.a.createElement(d.a,{src:String(null===j||void 0===j||null===(t=j.picture)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.url),style:{margin:"0 8px"}}),!h&&"".concat(null===j?"Please sign in":null===j||void 0===j?void 0:j.name)),l.a.createElement(u.a.Item,{key:y.HOMEPAGE,icon:l.a.createElement(p.a,null)},"Mini Homepage"),l.a.createElement(u.a.Item,{key:y.PRIVACY,icon:l.a.createElement(g.a,null)},"Privacy Policy"),l.a.createElement(u.a.Item,{key:y.LOGIN,icon:null===j?l.a.createElement(E.a,null):l.a.createElement(b.a,null)},"Sign ".concat(null===j?"In":"Out")))),l.a.createElement(s.a,{className:"site-layout"},l.a.createElement(N,{style:{backgroundColor:"#737373",backgroundSize:"20px 20px",backgroundImage:"linear-gradient(to right, #8b9192 1px, transparent 1px), linear-gradient(to bottom, #8b9192 1px, transparent 1px)"}},l.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},R)),l.a.createElement(M,{style:{textAlign:"center"}},"Created by Osmotically")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.748aa1b4.chunk.js.map