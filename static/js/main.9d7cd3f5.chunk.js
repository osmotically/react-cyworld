(this["webpackJsonpreact-cyworld"]=this["webpackJsonpreact-cyworld"]||[]).push([[0],{156:function(e,t,a){e.exports=a(271)},161:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),i=(a(161),a(162),a(12)),c=Object(n.createContext)(null),s=a(274),m=a(279),u=a(275),d=a(290),h=a(291),v=a(292),E=a(293),g=a(294),p={LOGIN:"login",HOMEPAGE:"homepage",PRIVACY:"privacy"},y=a(283),b=a(63),f=a(27);var P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{color:"orange",fontSize:"2em"}},"Edit your own title later!"),l.a.createElement("a",{href:"/#",style:{color:"grey",fontSize:"12px",position:"absolute",right:"2%",bottom:"1%"}},"https://osmotically.github.io/react-cyworld/"))};var w=function(){return l.a.createElement("div",{style:{textAlign:"center",width:"100%",position:"absolute",bottom:"5px"}},l.a.createElement("span",{style:{marginRight:"4px"}},"TODAY"),l.a.createElement("span",{style:{marginRight:"4px",color:"red"}},0),"| TOTAL ".concat(9999))},O=a(131);var _=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),c=Object(i.a)(r,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){o(!0),""===s&&FB.api("/me/picture","get",{height:"320",redirect:"false"},(function(e){var t;m(String(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url))})),o(!1)}),[s]),a?l.a.createElement(O.a,null):l.a.createElement("img",{alt:"profile_pic",src:s,width:"250",height:"250"})},R=a(284);var x=function(){return l.a.createElement("div",{style:{border:"1px solid #cbcbcb",borderRadius:"8px",backgroundColor:"white",padding:"4px 20px",marginBottom:"4px"}},l.a.createElement("span",{style:{marginRight:"8px",color:"#229ed0",fontWeight:"bold"}},"TODAY IS.."),l.a.createElement(R.a,null),"\ucd5c\uace0\uc5d0\uc694")},C=a(8),I=a.n(C);var S=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(null),c=Object(i.a)(r,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){o(!0),null===s&&FB.api("/me","get",{fields:"birthday,gender, email, name"},(function(e){m(e)})),o(!1)}),[s]),a?l.a.createElement(O.a,null):l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",{style:{marginBottom:"2px"}},l.a.createElement("span",{style:{color:"#30447a",fontWeight:"bold",marginRight:"4px"}},null===s||void 0===s?void 0:s.name),l.a.createElement("span",{className:I.a.homeLeftPanelIntroGender},"male"===(null===s||void 0===s?void 0:s.gender)?"\u2642":"\u2640"),l.a.createElement("span",{style:{fontSize:"small"}}," ",null===s||void 0===s?void 0:s.birthday)),l.a.createElement("p",{style:{color:"#f86704",fontSize:"small"}},null===s||void 0===s?void 0:s.email))},j=a(278),T=a(280),k=a(277),L=a(285),N=a(286),B=a(287);var D=function(){var e,t,a,o=Object(n.useState)(!1),r=Object(i.a)(o,2),c=r[0],s=r[1],m=Object(n.useState)(!1),u=Object(i.a)(m,2),d=u[0],h=u[1],v=Object(n.useState)([{description:"Edit your description",savedTime:1592194086}]),E=Object(i.a)(v,2),g=E[0],p=E[1],y=Object(n.useState)(null!==(e=null===g||void 0===g||null===(t=g[0])||void 0===t?void 0:t.description)&&void 0!==e?e:""),b=Object(i.a)(y,2),f=b[0],P=b[1];return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{minHeight:"200px"}},null===g||void 0===g||null===(a=g[0])||void 0===a?void 0:a.description),l.a.createElement("span",{style:{color:"#f86704",marginRight:"2px"}},l.a.createElement(L.a,null)),l.a.createElement("button",{style:{color:"black",marginRight:"16px",border:"none",background:"transparent"},onClick:function(){return s(!0)}},"Edit"),l.a.createElement("span",{style:{color:"#f86704",marginRight:"2px"}},l.a.createElement(L.a,null)),l.a.createElement("button",{style:{color:"black",border:"none",background:"transparent"},onClick:function(){return h(!0)}},"History"),l.a.createElement("span",{style:{color:"#969696",position:"absolute",right:"10%"}},l.a.createElement(N.a,null),l.a.createElement(B.a,null)),l.a.createElement(j.a,{title:"Edit your description",visible:c,onOk:function(){var e=Math.round((new Date).getTime()/1e3),t=[{description:f,savedTime:e}].concat(g);p(t),s(!1)},onCancel:function(){return s(!1)}},l.a.createElement(T.a.TextArea,{value:f,onChange:function(e){P(e.target.value)},autoSize:{minRows:4,maxRows:6}})),l.a.createElement(j.a,{title:"Description History",visible:d,onOk:function(){return h(!1)},onCancel:function(){return h(!1)}},l.a.createElement(k.b,{size:"small",dataSource:g,renderItem:function(e){return l.a.createElement(k.b.Item,null,l.a.createElement("span",{style:{marginRight:"12px"}},e.description),l.a.createElement("span",{style:{color:"grey"}},new Date(1e3*e.savedTime).toISOString()))}})))},A=a(69),F=a(288),G=a(289),z={DIRECT:"direct",CLUB:"club"};var H=function(){var e=Object(n.useState)(z.DIRECT),t=Object(i.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(m.a,{onClick:function(e){return o(e.key)},selectedKeys:[a],mode:"horizontal"},l.a.createElement(m.a.Item,{key:z.DIRECT,icon:l.a.createElement(F.a,null)},"Direct"),l.a.createElement(m.a.Item,{key:z.CLUB,icon:l.a.createElement(G.a,null)},"Club")),l.a.createElement(A.a,{style:{width:"100%"},defaultValue:""},l.a.createElement(A.a.Option,{value:""},"\u2605\uc77c\ucd0c \ud30c\ub3c4\ud0c0\uae30"),l.a.createElement(A.a.Option,{value:"1"},"Friend 1"),l.a.createElement(A.a.Option,{value:"2"},"Friend 1")))};var W=function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(_,null),l.a.createElement("div",{className:I.a.homeLeftPanelDivider,style:{marginTop:"12px",marginBottom:"12px"}}),l.a.createElement(x,null),l.a.createElement(D,null),l.a.createElement("div",{className:I.a.homeLeftPanelDivider,style:{marginBottom:"24px"}}),l.a.createElement(S,null),l.a.createElement(H,null))},Y=a(282),M=a(281),U=function(e){switch(e){case"status":return"magenta";case"link":return"blue";case"photo":return"gold";case"video":return"purple";default:return"cyan"}};var J=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),c=Object(i.a)(r,2),s=c[0],m=c[1];Object(n.useEffect)((function(){o(!0),0===s.length&&FB.api("/me/posts","get",{fields:"message, type",limit:"4"},(function(e){var t;m(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])})),o(!1)}),[s]);var u=s.map((function(e){return l.a.createElement("li",{style:{marginBottom:"5px"}},l.a.createElement(Y.a,{className:I.a.homeRightPanelPostsListTag,color:String(U(null===e||void 0===e?void 0:e.type))},null===e||void 0===e?void 0:e.type),null===e||void 0===e?void 0:e.message)}));return l.a.createElement("div",{style:{width:"50%"}},l.a.createElement("span",{className:I.a.homeRightPanelPostsTitle},"Updated news"),l.a.createElement("span",{className:I.a.homeRightPanelPostsSubtitle},"TODAY HISTORY"),l.a.createElement("div",{className:I.a.homeRightPanelPostsDivider}),a?l.a.createElement(M.a,null):l.a.createElement("ul",{className:I.a.homeRightPanelPostsList},u))};var V=function(){var e,t,a,o,r,c,s=Object(n.useState)(!0),m=Object(i.a)(s,2),u=m[0],d=m[1],h=Object(n.useState)([]),v=Object(i.a)(h,2),E=v[0],g=v[1];Object(n.useEffect)((function(){d(!0),0===E.length&&FB.api("/me/posts","get",{fields:"updated_time, type"},(function(e){var t;g(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])})),d(!1)}),[E]);var p=(new Date).getTime(),y={};E.forEach((function(e){var t,a,n,l,o,r,i=null!==(t=null===e||void 0===e?void 0:e.type)&&void 0!==t?t:"N/A",c=new Date(null!==(a=null===e||void 0===e?void 0:e.updated_time)&&void 0!==a?a:0).getTime(),s=p-6048e5<c,m=null!==(n=null===y||void 0===y||null===(l=y[i])||void 0===l?void 0:l.new)&&void 0!==n?n:0,u=null!==(o=null===y||void 0===y||null===(r=y[i])||void 0===r?void 0:r.total)&&void 0!==o?o:0;y[i]={new:s?m+1:m,total:u+1}}));var b=Object.keys(y).map((function(e){return l.a.createElement("td",{className:I.a.homeRightPanelTableTd},l.a.createElement("span",{className:I.a.homeRightPanelTableFont},l.a.createElement(Y.a,{className:I.a.homeRightPanelPostsListTag,color:String(U(e))},e),"".concat(y[e].new,"/").concat(y[e].total)))})),f=l.a.createElement("td",{className:I.a.homeRightPanelTableTd});return l.a.createElement("table",{className:I.a.homeRightPanelTable},l.a.createElement("tr",null,u?l.a.createElement(O.a,{size:"small"}):null!==(e=null===b||void 0===b?void 0:b[0])&&void 0!==e?e:f,null!==(t=null===b||void 0===b?void 0:b[1])&&void 0!==t?t:f),l.a.createElement("tr",null,null!==(a=null===b||void 0===b?void 0:b[2])&&void 0!==a?a:f,null!==(o=null===b||void 0===b?void 0:b[3])&&void 0!==o?o:f),l.a.createElement("tr",null,null!==(r=null===b||void 0===b?void 0:b[4])&&void 0!==r?r:f,null!==(c=null===b||void 0===b?void 0:b[5])&&void 0!==c?c:f))};var q=function(){return null===Object(n.useContext)(c)?l.a.createElement(y.a,{message:"Sign In",description:"Please sign in to see your FB information in the homepage.",type:"error",showIcon:!0}):l.a.createElement("div",{className:I.a.homeBlue},l.a.createElement("div",{className:I.a.homeDashWhite},l.a.createElement("div",{className:I.a.homeInnerBorder},l.a.createElement(b.a,{gutter:16},l.a.createElement(f.a,{span:6},l.a.createElement(w,null)),l.a.createElement(f.a,{span:18},l.a.createElement(P,null))),l.a.createElement(b.a,{gutter:16},l.a.createElement(f.a,{span:6},l.a.createElement("div",{className:I.a.homeLeftPanel},l.a.createElement("div",{className:I.a.homeLeftPanelInner},l.a.createElement(W,null)))),l.a.createElement(f.a,{span:18},l.a.createElement("div",{className:I.a.homeRightPanel},l.a.createElement("div",{className:I.a.homeRightPanelInner},l.a.createElement(J,null),l.a.createElement(V,null))))))))},K=a(47),Q=a(149),X=a.n(Q);var Z=Object(n.memo)((function(e){return null!==e.userInfo?l.a.createElement(K.a,{type:"dashed",onClick:function(){e.setUserInfo(null),FB.logout()}},"Log Out"):l.a.createElement(X.a,{appId:"2600949710193273",autoLoad:!1,size:"small",fields:"name,picture",scope:"public_profile,user_posts",textButton:"Continue with Facebook",callback:function(t){console.log(t),e.setUserInfo(t)}})})),$=a(276);var ee=function(){return l.a.createElement($.a,{title:"Privacy Policy"},l.a.createElement(y.a,{style:{marginBottom:"8px"},message:"Warning",description:"React Cyworld is READ ONLY site. It does not collect any of your information.",type:"warning",showIcon:!0}),l.a.createElement("ul",null,l.a.createElement("li",null,"React Cyworld is an open source website. You can check Typescript based ReactJS codebase on this",l.a.createElement("a",{href:"https://github.com/osmotically/react-cyworld/tree/master",rel:"noopener noreferrer",target:"_blank",style:{marginLeft:"4px"}},"github link"),"."),l.a.createElement("li",null,"This website reads your information via FB GraphAPI; however, it does not have any ability (nor storage) to store your personal information."),l.a.createElement("li",null,"You can think of this mini-homepage as a FB skin.")))},te=s.a.Content,ae=s.a.Footer,ne=s.a.Sider;var le=function(){var e,t,a,o=new URLSearchParams(window.location.search),r=Object(n.useState)(!1),y=Object(i.a)(r,2),b=y[0],f=y[1],P=Object(n.useState)(null!==(e=o.get("menu"))&&void 0!==e?e:p.HOMEPAGE),w=Object(i.a)(P,2),O=w[0],_=w[1],R=Object(n.useState)(null),x=Object(i.a)(R,2),C=x[0],S=x[1],j=l.a.createElement(c.Provider,{value:C},l.a.createElement(q,null));return O===p.LOGIN?j=l.a.createElement(Z,{userInfo:C,setUserInfo:S}):O===p.PRIVACY&&(j=l.a.createElement(ee,null)),l.a.createElement(s.a,{style:{minHeight:"100vh"}},l.a.createElement(ne,{collapsible:!0,collapsed:b,onCollapse:f},l.a.createElement(m.a,{theme:"dark",onClick:function(e){_(e.key),o.set("menu",e.key),window.history.replaceState({},"","".concat(window.location.pathname,"?").concat(o))},defaultSelectedKeys:[O],mode:"inline"},l.a.createElement("div",{style:{margin:"16px"}},null===C?l.a.createElement(u.a,{icon:l.a.createElement(d.a,null),style:{margin:"0 8px"}}):l.a.createElement(u.a,{src:String(null===C||void 0===C||null===(t=C.picture)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.url),style:{margin:"0 8px"}}),!b&&"".concat(null===C?"Please sign in":null===C||void 0===C?void 0:C.name)),l.a.createElement(m.a.Item,{key:p.HOMEPAGE,icon:l.a.createElement(h.a,null)},"Mini Homepage"),l.a.createElement(m.a.Item,{key:p.PRIVACY,icon:l.a.createElement(v.a,null)},"Privacy Policy"),l.a.createElement(m.a.Item,{key:p.LOGIN,icon:null===C?l.a.createElement(E.a,null):l.a.createElement(g.a,null)},"Sign ".concat(null===C?"In":"Out")))),l.a.createElement(s.a,{className:"site-layout"},l.a.createElement(te,{className:I.a.home},l.a.createElement("div",{className:"site-layout-background",style:{padding:"24px",minHeight:"360px"}},j)),l.a.createElement(ae,{style:{textAlign:"center"}},"Created by Osmotically")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={home:"Cyworld_home__tXItM",homeBlue:"Cyworld_homeBlue__3vx1O",homeDashWhite:"Cyworld_homeDashWhite__1pkxW",homeInnerBorder:"Cyworld_homeInnerBorder__2N6s-",homeLeftPanel:"Cyworld_homeLeftPanel__1URbF",homeLeftPanelInner:"Cyworld_homeLeftPanelInner__3IZ1z",homeLeftPanelDivider:"Cyworld_homeLeftPanelDivider__1xno7",homeLeftPanelIntroGender:"Cyworld_homeLeftPanelIntroGender__35C6i",homeRightPanel:"Cyworld_homeRightPanel__1_zQ6",homeRightPanelInner:"Cyworld_homeRightPanelInner__GxsWS",homeRightPanelPostsTitle:"Cyworld_homeRightPanelPostsTitle__1MCiv",homeRightPanelPostsSubtitle:"Cyworld_homeRightPanelPostsSubtitle__1bNvb",homeRightPanelPostsDivider:"Cyworld_homeRightPanelPostsDivider__15Mqi",homeRightPanelPostsList:"Cyworld_homeRightPanelPostsList__9xteO",homeRightPanelPostsListTag:"Cyworld_homeRightPanelPostsListTag__2Rd2p",homeRightPanelTable:"Cyworld_homeRightPanelTable__28tqG",homeRightPanelTableTd:"Cyworld_homeRightPanelTableTd__3B_kH",homeRightPanelTableFont:"Cyworld_homeRightPanelTableFont__DeJL5"}}},[[156,1,2]]]);
//# sourceMappingURL=main.9d7cd3f5.chunk.js.map