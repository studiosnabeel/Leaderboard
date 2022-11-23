(()=>{"use strict";var n,r,e,t,o,i,a,s,c,l,p,d,f,u,g={426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,700&display=swap);"]),a.push([n.id,"* {\r\n  font-family: 'Lato', sans-serif;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: rgb(255, 73, 41);\r\n  background-color: rgb(35, 35, 35);\r\n}\r\n\r\n.body1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  padding: 30px;\r\n}\r\n\r\n.main-h1 {\r\n  font-size: 60px;\r\n  font-weight: 700;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 0 45px;\r\n}\r\n\r\n.refresh {\r\n  display: flex;\r\n  gap: 12px;\r\n  padding: 10px 0 36px 0;\r\n  margin: 20px 0 0 0;\r\n}\r\n\r\n.refresh-h2 {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  align-self: center;\r\n}\r\n\r\n.add-score {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 50px;\r\n  gap: 20px;\r\n}\r\n\r\n.refresh-btn {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  background-color: white;\r\n  width: 80px;\r\n  height: 30px;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-h2 {\r\n  font-size: 40px;\r\n  font-weight: 400;\r\n  align-self: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.score-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  border: 2px solid black;\r\n}\r\n\r\n.score-ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ndiv.score-section > div:nth-of-type(even) {\r\n  background-color: rgb(33, 130, 154);\r\n}\r\n\r\n.score-li {\r\n  list-style-type: none;\r\n  padding: 2px;\r\n  font-weight: 700;\r\n}\r\n\r\n.form-btn {\r\n  width: 80px;\r\n  height: 30px;\r\n  font-weight: 700;\r\n  background-color: white;\r\n  align-self: end;\r\n  cursor: pointer;\r\n}\r\n\r\n.input {\r\n  font-weight: 600;\r\n  padding: 3px;\r\n}\r\n\r\n.input::placeholder {\r\n  font-weight: 700;\r\n  background-color: white;\r\n  color: rgb(249, 71, 40);\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var f=e(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(u);else{var g=o(u,t);t.byIndex=s,r.splice(s,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},h={};function m(n){var r=h[n];if(void 0!==r)return r.exports;var e=h[n]={id:n,exports:{}};return g[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),m.nc=void 0,n=m(379),r=m.n(n),e=m(795),t=m.n(e),o=m(569),i=m.n(o),a=m(565),s=m.n(a),c=m(216),l=m.n(c),p=m(589),d=m.n(p),f=m(426),(u={}).styleTagTransform=d(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=l(),r()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();