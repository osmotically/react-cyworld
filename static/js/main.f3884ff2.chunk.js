(this["webpackJsonpreact-cyworld"]=this["webpackJsonpreact-cyworld"]||[]).push([[0],{13:function(e,t,a){e.exports={home:"Cyworld_home__tXItM",homeBlue:"Cyworld_homeBlue__3vx1O",homeDashWhite:"Cyworld_homeDashWhite__1pkxW",homeInnerBorder:"Cyworld_homeInnerBorder__2N6s-",homeLeftPanel:"Cyworld_homeLeftPanel__1URbF",homeLeftPanelInner:"Cyworld_homeLeftPanelInner__3IZ1z",homeLeftPanelDivider:"Cyworld_homeLeftPanelDivider__1xno7",homeLeftPanelIntroGender:"Cyworld_homeLeftPanelIntroGender__35C6i",homeRightPanel:"Cyworld_homeRightPanel__1_zQ6"}},148:function(e,t,a){e.exports=a(259)},153:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),i=(a(153),a(154),a(16)),c=Object(n.createContext)(null),m=a(262),s=a(266),u=a(263),d=a(274),p=a(275),E=a(276),h=a(277),g=a(278),y={LOGIN:"login",HOMEPAGE:"homepage",PRIVACY:"privacy"},v=a(269),f=a(56),b=a(20);var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"orange",fontSize:"2em"}},"Edit your own title later!"),l.a.createElement("a",{href:"/#",style:{color:"grey",fontSize:"12px",position:"absolute",right:"2%",bottom:"1%"}},"https://osmotically.github.io/react-cyworld/"))};var x=function(){return l.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",bottom:"5px"}},l.a.createElement("span",{style:{marginRight:"4px"}},"TODAY"),l.a.createElement("span",{style:{marginRight:"4px",color:"red"}},0),"| TOTAL ".concat(9999))},O=a(121);var I=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),m=c[0],s=c[1];return Object(n.useEffect)((function(){r(!0),""===m&&FB.api("/me/picture","get",{height:"320",redirect:"false"},(function(e){var t;s(String(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url))})),r(!1)}),[m]),a?l.a.createElement(O.a,null):l.a.createElement("img",{alt:"profile_pic",src:m,width:"250",height:"250"})},_=a(270);var P=function(){return l.a.createElement("div",{style:{border:"1px solid #cbcbcb",borderRadius:"8px",backgroundColor:"white",padding:"4px 20px",marginBottom:"4px"}},l.a.createElement("span",{style:{marginRight:"8px",color:"#229ed0",fontWeight:"bold"}},"TODAY IS.."),l.a.createElement(_.a,null),"\ucd5c\uace0\uc5d0\uc694")},S=a(13),k=a.n(S);var C=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(i.a)(o,2),m=c[0],s=c[1];return Object(n.useEffect)((function(){r(!0),null===m&&FB.api("/me","get",{fields:"birthday,gender, email, name"},(function(e){s(e)})),r(!1)}),[m]),a?l.a.createElement(O.a,null):l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",{style:{marginBottom:"2px"}},l.a.createElement("span",{style:{color:"#30447a",fontWeight:"bold",marginRight:"4px"}},null===m||void 0===m?void 0:m.name),l.a.createElement("span",{className:k.a.homeLeftPanelIntroGender},"male"===(null===m||void 0===m?void 0:m.gender)?"\u2642":"\u2640"),l.a.createElement("span",{style:{fontSize:"small"}}," ",null===m||void 0===m?void 0:m.birthday)),l.a.createElement("p",{style:{color:"#f86704",fontSize:"small"}},null===m||void 0===m?void 0:m.email))},j=a(271),L=a(272),B=a(273);var R=function(){return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{minHeight:"200px"}},"Add your description."),l.a.createElement("span",{style:{color:"#f86704",marginRight:"2px"}},l.a.createElement(j.a,null)),l.a.createElement("span",{style:{marginRight:"16px"}},"Edit"),l.a.createElement("span",{style:{color:"#f86704",marginRight:"2px"}},l.a.createElement(j.a,null)),l.a.createElement("span",null,"History"),l.a.createElement("span",{style:{color:"#969696",position:"absolute",right:"10%"}},l.a.createElement(L.a,null),l.a.createElement(B.a,null)))};var A=function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(I,null),l.a.createElement("div",{className:k.a.homeLeftPanelDivider,style:{marginTop:"12px",marginBottom:"12px"}}),l.a.createElement(P,null),l.a.createElement(R,null),l.a.createElement("div",{className:k.a.homeLeftPanelDivider,style:{marginBottom:"24px"}}),l.a.createElement(C,null))},N=a(265),D=a(264),F=a(268);var G=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),m=c[0],s=c[1];function u(e){switch(e){case"status":return"magenta";case"link":return"blue";case"photo":return"gold";case"video":return"purple";default:return"cyan"}}return Object(n.useEffect)((function(){r(!0),0===m.length&&FB.api("/me/posts","get",{fields:"message, type",limit:"10"},(function(e){var t;s(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])})),r(!1)}),[m]),l.a.createElement(N.a,{size:"small",title:"Updated news"},l.a.createElement(D.b,{size:"small",loading:a,bordered:!0,dataSource:m,renderItem:function(e){return l.a.createElement(D.b.Item,{key:null===e||void 0===e?void 0:e.id},l.a.createElement(F.a,{color:String(u(null===e||void 0===e?void 0:e.type))},null===e||void 0===e?void 0:e.type),null===e||void 0===e?void 0:e.message)}}))};var z=function(){return null===Object(n.useContext)(c)?l.a.createElement(v.a,{message:"Sign In",description:"Please sign in to see your FB information in the homepage.",type:"error",showIcon:!0}):l.a.createElement("div",{className:k.a.homeBlue},l.a.createElement("div",{className:k.a.homeDashWhite},l.a.createElement("div",{className:k.a.homeInnerBorder},l.a.createElement(f.a,{gutter:16},l.a.createElement(b.a,{span:6},l.a.createElement(x,null)),l.a.createElement(b.a,{span:18},l.a.createElement(w,null))),l.a.createElement(f.a,{gutter:16},l.a.createElement(b.a,{span:6},l.a.createElement("div",{className:k.a.homeLeftPanel},l.a.createElement("div",{className:k.a.homeLeftPanelInner},l.a.createElement(A,null)))),l.a.createElement(b.a,{span:18},l.a.createElement("div",{className:k.a.homeRightPanel},l.a.createElement(G,null)))))))},W=a(267),H=a(142),Y=a.n(H);var T=function(e){return null!==e.userInfo?l.a.createElement(W.a,{type:"dashed",onClick:function(){e.setUserInfo(null)}},"Log Out"):l.a.createElement(Y.a,{appId:"2600949710193273",autoLoad:!1,size:"small",fields:"name,picture",scope:"public_profile,user_posts",textButton:"Continue with Facebook",callback:function(t){e.setUserInfo(t)}})};var M=function(){return l.a.createElement(N.a,{title:"Privacy Policy"},l.a.createElement(v.a,{style:{marginBottom:"8px"},message:"Warning",description:"React Cyworld is READ ONLY site. It does not collect any of your information.",type:"warning",showIcon:!0}),l.a.createElement("ul",null,l.a.createElement("li",null,"React Cyworld is an open source website. You can check Typescript based ReactJS codebase on this",l.a.createElement("a",{href:"https://github.com/osmotically/react-cyworld/tree/master",rel:"noopener noreferrer",target:"_blank",style:{marginLeft:"4px"}},"github link"),"."),l.a.createElement("li",null,"This website reads your information via FB GraphAPI; however, it does not have any ability (nor storage) to store your personal information."),l.a.createElement("li",null,"You can think of this mini-homepage as a FB skin.")))},U=m.a.Content,J=m.a.Footer,V=m.a.Sider;var K=function(){var e,t,a,r=new URLSearchParams(window.location.search),o=Object(n.useState)(!1),v=Object(i.a)(o,2),f=v[0],b=v[1],w=Object(n.useState)(null!==(e=r.get("menu"))&&void 0!==e?e:y.HOMEPAGE),x=Object(i.a)(w,2),O=x[0],I=x[1],_=Object(n.useState)(null),P=Object(i.a)(_,2),S=P[0],C=P[1],j=l.a.createElement(c.Provider,{value:S},l.a.createElement(z,null));return O===y.LOGIN?j=l.a.createElement(T,{userInfo:S,setUserInfo:C}):O===y.PRIVACY&&(j=l.a.createElement(M,null)),l.a.createElement(m.a,{style:{minHeight:"100vh"}},l.a.createElement(V,{collapsible:!0,collapsed:f,onCollapse:b},l.a.createElement(s.a,{theme:"dark",onClick:function(e){I(e.key),r.set("menu",e.key),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(r))},defaultSelectedKeys:[O],mode:"inline"},l.a.createElement("div",{style:{margin:"16px"}},null===S?l.a.createElement(u.a,{icon:l.a.createElement(d.a,null),style:{margin:"0 8px"}}):l.a.createElement(u.a,{src:String(null===S||void 0===S||null===(t=S.picture)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.url),style:{margin:"0 8px"}}),!f&&"".concat(null===S?"Please sign in":null===S||void 0===S?void 0:S.name)),l.a.createElement(s.a.Item,{key:y.HOMEPAGE,icon:l.a.createElement(p.a,null)},"Mini Homepage"),l.a.createElement(s.a.Item,{key:y.PRIVACY,icon:l.a.createElement(E.a,null)},"Privacy Policy"),l.a.createElement(s.a.Item,{key:y.LOGIN,icon:null===S?l.a.createElement(h.a,null):l.a.createElement(g.a,null)},"Sign ".concat(null===S?"In":"Out")))),l.a.createElement(m.a,{className:"site-layout"},l.a.createElement(U,{className:k.a.home},l.a.createElement("div",{className:"site-layout-background",style:{padding:"24px",minHeight:"360px"}},j)),l.a.createElement(J,{style:{textAlign:"center"}},"Created by Osmotically")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.f3884ff2.chunk.js.map