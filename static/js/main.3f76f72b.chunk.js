(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=(n(9),n(1)),s={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],r=0;r<e.length;r++)for(var c=0,o=n.length;c<o;c++){var u=n[c].concat(e[r]),i=s.sum(u);i<=t&&(n.push(u),a.push(i))}return a[s.random(0,a.length-1)]}},i=s,l=function(e){return r.a.createElement(r.a.Fragment,null,i.range(1,e.count).map((function(e){return r.a.createElement("div",{key:e,className:"star"})})))},m={available:"lightgray",used:"lightgreen",wrong:"lightCoral",candidate:"deepskyblue"},d=function(e){return r.a.createElement("button",{className:"number",style:{backgroundColor:m[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},f=function(e){return r.a.createElement("div",{className:"game-done"},r.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"Nice!!"),r.a.createElement("button",{onClick:e.onClick},"Play Again"))},g=function(e){var t=function(){var e=Object(a.useState)(i.random(1,9)),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(i.range(1,9)),o=Object(u.a)(c,2),s=o[0],l=o[1],m=Object(a.useState)([]),d=Object(u.a)(m,2),f=d[0],g=d[1],v=Object(a.useState)(10),h=Object(u.a)(v,2),b=h[0],E=h[1];Object(a.useEffect)((function(){if(b>0&&s.length>0){var e=setTimeout((function(){return E(b-1)}),1e3);return function(){return clearTimeout(e)}}}));return{stars:n,availableNums:s,candidateNums:f,secondsLeft:b,setGameState:function(e){if(i.sum(e)!==n)g(e);else{var t=s.filter((function(t){return!e.includes(t)}));r(i.randomSumIn(t,9)),l(t),g([])}}}}(),n=t.stars,c=t.availableNums,o=t.candidateNums,s=t.secondsLeft,m=t.setGameState,g=i.sum(o)>n,v=0===c.length?"won":0===s?"lost":"active",h=function(e){return c.includes(e)?o.includes(e)?g?"wrong":"candidate":"available":"used"},b=function(e,t){if("used"!==t&&0!==s){var n="available"===t?o.concat(e):o.filter((function(t){return t!==e}));m(n)}};return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"help"},"pick 1 or more numbers that matches the number of stars"),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left"},"active"!==v?r.a.createElement(f,{onClick:e.startNewGame,gameStatus:v}):r.a.createElement(l,{count:n})),r.a.createElement("div",{className:"right"},i.range(1,9).map((function(e){return r.a.createElement(d,{key:e,status:h(e),number:e,onClick:b})})))),r.a.createElement("div",{className:"timer"},"Time remaining: ",s))},v=(n(10),function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(g,{key:n,startNewGame:function(){return c(n+1)}})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.3f76f72b.chunk.js.map