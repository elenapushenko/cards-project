(this["webpackJsonpcards-project"]=this["webpackJsonpcards-project"]||[]).push([[0],{26:function(n,e,t){n.exports=t(38)},31:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),l=(t(31),t(4)),c=t(1),u=t(5);function d(){var n=Object(l.a)(["\n    input {\n      font-family: 'Poiret One', cursive;\n      font-size: 20px;\n      font-weight: bold;\n      outline: none;\n      margin: 5px;\n      padding: 5px;\n      border: 2px solid #015668;\n      border-bottom-width: 4px;\n      background: rgba(255,255,255,1);\n    }\n  \n"]);return d=function(){return n},n}var f=u.a.div(d()),s=function(){return a.a.createElement(f,null,a.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"}))};function m(){var n=Object(l.a)(["\n  text-decoration: none;\n  outline: none;\n  display: inline-block;\n  margin: 5px;\n  padding: 5px 15px;\n  overflow: hidden;\n  border: 2px solid;\n  border-bottom-width: 4px;\n  font-family: 'Poiret One', cursive;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 2px;\n  color: #015668;\n  background: rgba(255,255,255,1);\n  transition: color .3s, background .5s;\n  :hover {\n      cursor: pointer;\n      animation: stripes 1s infinite linear;\n      background: linear-gradient(45deg, #fff1cf 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, \n                  #fff1cf 50%, #fff1cf 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1));\n      background-size: 10px 10px;\n      color: #015668;\n  }\n  @keyframes stripes {\n      0% {background-position: 0 0;}\n      100% {background-position: 50px 0;}\n  }\n"]);return m=function(){return n},n}var p=u.a.div(m()),g=function(){return a.a.createElement(p,null,"Click Me!")};function b(){var n=Object(l.a)(["\n  width: 50%;\n  text-align: center;\n  margin: 0 auto;\n  font-family: 'Poiret One', cursive;\n  font-weight: bold;\n  font-size: 30px;\n  letter-spacing: 2px;\n  color: #263f44;\n"]);return b=function(){return n},n}var v=u.a.div(b()),h=function(){return a.a.createElement(v,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum ipsa itaque iusto laudantium nisi quae quaerat veniam, vitae? Deserunt fuga itaque laudantium optio provident vitae? Animi cumque repellat temporibus?")},E=function(){return a.a.createElement("div",null,a.a.createElement(s,null),a.a.createElement(s,null),a.a.createElement(g,null))},x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{path:"/input",render:function(){return a.a.createElement(s,null)}}),a.a.createElement(c.a,{path:"/button",render:function(){return a.a.createElement(g,null)}}),a.a.createElement(c.a,{path:"/text",render:function(){return a.a.createElement(h,null)}}),a.a.createElement(c.a,{path:"/login",render:function(){return a.a.createElement(E,null)}}))},w=t(9);function k(){var n=Object(l.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: #263f44;\n  display:flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-bottom: 50px;\n  span {\n    padding-right: 50px;\n    a {\n      font-family: 'Great Vibes', cursive;\n      font-size: 40px;\n      text-decoration: none;\n      color: #fff1cf;\n      :hover {\n        color: #ffd369;\n      }\n    }\n    :hover {\n    cursor: pointer;\n    }\n  }\n"]);return k=function(){return n},n}var j=u.a.div(k()),O=function(){return a.a.createElement(j,null,a.a.createElement("span",null,a.a.createElement(w.b,{to:"/button"},"button")),a.a.createElement("span",null,a.a.createElement(w.b,{to:"/input"},"input")),a.a.createElement("span",null,a.a.createElement(w.b,{to:"/text"},"text")),a.a.createElement("span",null,a.a.createElement(w.b,{to:"/login"},"Log in")))},y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null),a.a.createElement(x,null))},R=t(25),q=t(7),P=t(24),z={},B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z;arguments.length>1&&arguments[1];return n},C={},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;arguments.length>1&&arguments[1];return n},J={},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;arguments.length>1&&arguments[1];return n},M={},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;arguments.length>1&&arguments[1];return n},A={},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;arguments.length>1&&arguments[1];return n},G=Object(q.c)({loginReducer:B,registrationReducer:F,recoveryPassReducer:L,newPassReducer:W,profileReducer:D}),I=Object(q.c)({authReducer:G}),S=Object(q.d)(I,Object(q.a)(P.a));function V(){var n=Object(l.a)(["\n  text-align: center;\n"]);return V=function(){return n},n}var $=u.a.div(V()),H=function(){return a.a.createElement($,null,a.a.createElement(w.a,null,a.a.createElement(R.a,{store:S},a.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.eac274a6.chunk.js.map