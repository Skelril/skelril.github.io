(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,n,t){e.exports=t(122)},141:function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest;for(var a in o.open(n.method||"get",e,!0),n.headers)o.setRequestHeader(a,n.headers[a]);function u(){var e,n=[],t=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,a,u){n.push(a=a.toLowerCase()),t.push([a,u]),r[a]=(e=r[a])?e+","+u:u}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==n.credentials,o.onload=function(){t(u())},o.onerror=r,o.send(n.body||null)})}},227:function(e,n,t){__NEXT_REGISTER_PAGE("/voip/current-users",function(){return e.exports=t(243),{page:e.exports.default}})},228:function(e,n,t){e.exports=window.fetch||(window.fetch=t(141).default||t(141))},243:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(14),u=t(15),s=t(16),i=t(116),c=t.n(i);t(228);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n,t,r,o,a,u){try{var s=e[a](u),i=s.value}catch(e){return void t(e)}s.done?n(i):Promise.resolve(i).then(r,o)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y=function(e){function n(){var e,t,r,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var u=arguments.length,s=new Array(u),i=0;i<u;i++)s[i]=arguments[i];return r=this,a=(e=h(n)).call.apply(e,[this].concat(s)),t=!a||"object"!==l(a)&&"function"!=typeof a?d(r):a,b(d(d(t)),"getChannelIndent",function(e){return 0===e?0:40}),b(d(d(t)),"getUserIndent",function(e){return 40}),b(d(d(t)),"renderChannelName",function(e,n){return 0===n?null:o.a.createElement("span",{className:"font-weight-bold"},o.a.createElement("span",{className:"oi oi-people pr-2",title:"icon name","aria-hidden":"true"}),e.name)}),b(d(d(t)),"renderChannelUsers",function(e,n){var r=[];return e.users.forEach(function(e){var a={marginLeft:t.getUserIndent(n)+"px"};r.push(o.a.createElement("div",{style:a},o.a.createElement("span",{className:"oi oi-person pr-2",title:"icon name","aria-hidden":"true"}),e))}),r}),b(d(d(t)),"renderSubChannels",function(e,n){var r=[];return e.channels.forEach(function(e){r.push(t.renderChannel(e,n+1))}),r}),b(d(d(t)),"renderChannel",function(e,n){var r={marginLeft:t.getChannelIndent(n)+"px"};return o.a.createElement("div",{className:"mt-1",style:r},t.renderChannelName(e,n),t.renderChannelUsers(e,n),t.renderSubChannels(e,n))}),t}var t,r,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,o.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){var e,n=(e=c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return setTimeout(e,1e3)});case 2:this.setState(function(e){return{rootChannel:{name:"Root",users:["Dark_Arc"],channels:[{name:"Game Lobby 1",users:["Cow_Fu","Dangerous_Dan"],channels:[{name:"Sub Lobby 1",users:["Rambo"],channels:[]}]}]}}});case 3:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var a=e.apply(n,t);function u(e){f(a,r,o,u,s,"next",e)}function s(e){f(a,r,o,u,s,"throw",e)}u(void 0)})});return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e;return e=this.state?this.renderChannel(this.state.rootChannel,0):o.a.createElement("div",{class:"d-flex justify-content-center mt-5"},o.a.createElement("div",{class:"spinner-border",role:"status"},o.a.createElement("span",{class:"sr-only"},"Loading..."))),o.a.createElement("div",null,e)}}])&&p(t.prototype,r),a&&p(t,a),n}();n.default=function(){return o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement("title",null,"Packet Loss Gaming - VoIP Current Users")),o.a.createElement(u.a,null),o.a.createElement(s.a,null,o.a.createElement("h1",null,"VoIP Current Users"),o.a.createElement(y,null)))}}},[[227,1,0]]]);