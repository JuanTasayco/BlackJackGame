(()=>{"use strict";function e(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n=function(){function r(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.baraja=[]}var n,a,o;return n=r,(a=[{key:"crearBaraja",value:function(){for(var r=["C","D","H","S"],t=2;t<=10;t++){var n,a=e(r);try{for(a.s();!(n=a.n()).done;){var o=n.value;this.baraja.push(t+o)}}catch(e){a.e(e)}finally{a.f()}}for(var i=0,c=["J","Q","K","A"];i<c.length;i++){var u,l=c[i],f=e(r);try{for(f.s();!(u=f.n()).done;){var s=u.value;this.baraja.push(l+s)}}catch(e){f.e(e)}finally{f.f()}}return _.shuffle(this.baraja)}},{key:"mostrarBaraja",value:function(){console.log(_.shuffle(this.baraja))}}])&&t(n.prototype,a),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),r}(),a=document.querySelector(".btn-give"),o=document.querySelector(".btn-stop"),i=document.querySelector(".btn-restart"),c=document.querySelectorAll("b"),u=document.querySelectorAll(".divcartas"),l=0,f=0,s=function(e){return[],e=(new n).crearBaraja(),l=0,f=0,u.forEach((function(e){return e.innerHTML=""})),c.forEach((function(e){return e.innerText=0})),e},d=s(),y=s(),v=document.querySelector(".container-cards"),p=function(e,r,t){var n,a,o=function(e){return e.pop()}(e);return r+=(a=(n=o).slice(0,n.length-1),isNaN(a)?"A"===a?11:10:1*a),c[t].innerText=r,function(e,r){var t=document.createElement("IMG");t.src="./assets/".concat(e,".png"),v.children[r].appendChild(t),t.classList.add("player1__card"),t.classList.add("img-fluid")}(o,t),r},h=function(){for(var e=0;e<21;)e+=f=p(y,f,1)},m=function(e){a.disabled=e,o.disabled=e};a.addEventListener("click",(function(e){(l=p(d,l,0))>21&&(h(),m(!0),setTimeout((function(){f<21?alert("Perdiste"):alert("Empatan")}),100))})),o.addEventListener("click",(function(){h(),m(!0),setTimeout((function(){f>l&&f<=21?alert("La computadora gana"):f==l?alert("Empatan"):alert("La computadora pierde")}),100)})),i.addEventListener("click",(function(){d=s(),y=s(),m(!1)}))})();