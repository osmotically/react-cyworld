(this["webpackJsonpreact-cyworld"]=this["webpackJsonpreact-cyworld"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),r=n.n(o),i=(n(10),n(1)),c=(n(11),Object(a.createContext)(null));var u=function(){var e,t,n=Object(a.useState)([]),o=Object(i.a)(n,2),r=o[0],u=o[1],s=Object(a.useContext)(c);if(null===s)return l.a.createElement("div",null,"Please Log In First!");0===r.length&&FB.api("/me/posts","get",{fields:"message",limit:"10"},(function(e){var t;u(null!==(t=null===e||void 0===e?void 0:e.data)&&void 0!==t?t:[])}));var d=r.map((function(e){return l.a.createElement("div",{key:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.message)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:String(null===s||void 0===s||null===(e=s.picture)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.url),alt:"profile_image"}),null===s||void 0===s?void 0:s.name,d)},s=n(4),d=n.n(s);var m=function(e){return null!==e.userInfo?l.a.createElement("button",{onClick:function(){e.setUserInfo(null)}},"Log Out"):l.a.createElement(d.a,{appId:"2600949710193273",autoLoad:!1,size:"small",fields:"name,picture",scope:"public_profile,user_posts",callback:function(t){e.setUserInfo(t)}})};var v=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(m,{userInfo:n,setUserInfo:o}),l.a.createElement(c.Provider,{value:n},l.a.createElement(u,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.c320ad10.chunk.js.map