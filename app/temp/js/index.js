!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}({0:function(t,n,e){var o;t.exports=function t(n,e,r){function i(c,a){if(!e[c]){if(!n[c]){var s="function"==typeof o&&o;if(!a&&s)return o(c,!0);if(u)return u(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var f=e[c]={exports:{}};n[c][0].call(f.exports,function(t){return i(n[c][1][t]||t)},f,f.exports,t,n,e,r)}return e[c].exports}for(var u="function"==typeof o&&o,c=0;c<r.length;c++)i(r[c]);return i}({1:[function(t,n,e){n.exports=function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},{}],2:[function(t,n,e){n.exports=function(t){var n=1.70158;return t*t*((n+1)*t-n)}},{}],3:[function(t,n,e){n.exports=function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1}},{}],4:[function(t,n,e){var o=t("./bounce-out");n.exports=function(t){return t<.5?.5*(1-o(1-2*t)):.5*o(2*t-1)+.5}},{"./bounce-out":6}],5:[function(t,n,e){var o=t("./bounce-out");n.exports=function(t){return 1-o(1-t)}},{"./bounce-out":6}],6:[function(t,n,e){n.exports=function(t){var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}},{}],7:[function(t,n,e){n.exports=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},{}],8:[function(t,n,e){n.exports=function(t){return 1-Math.sqrt(1-t*t)}},{}],9:[function(t,n,e){n.exports=function(t){return Math.sqrt(1- --t*t)}},{}],10:[function(t,n,e){n.exports=function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}},{}],11:[function(t,n,e){n.exports=function(t){return t*t*t}},{}],12:[function(t,n,e){n.exports=function(t){var n=t-1;return n*n*n+1}},{}],13:[function(t,n,e){n.exports=function(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}},{}],14:[function(t,n,e){n.exports=function(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}},{}],15:[function(t,n,e){n.exports=function(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}},{}],16:[function(t,n,e){n.exports=function(t){return 0===t||1===t?t:t<.5?.5*Math.pow(2,20*t-10):-.5*Math.pow(2,10-20*t)+1}},{}],17:[function(t,n,e){n.exports=function(t){return 0===t?t:Math.pow(2,10*(t-1))}},{}],18:[function(t,n,e){n.exports=function(t){return 1===t?t:1-Math.pow(2,-10*t)}},{}],19:[function(t,n,e){n.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,n,e){n.exports=function(t){return t}},{}],21:[function(t,n,e){n.exports=function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)}},{}],22:[function(t,n,e){n.exports=function(t){return t*t}},{}],23:[function(t,n,e){n.exports=function(t){return-t*(t-2)}},{}],24:[function(t,n,e){n.exports=function(t){return t<.5?8*Math.pow(t,4):-8*Math.pow(t-1,4)+1}},{}],25:[function(t,n,e){n.exports=function(t){return Math.pow(t,4)}},{}],26:[function(t,n,e){n.exports=function(t){return Math.pow(t-1,3)*(1-t)+1}},{}],27:[function(t,n,e){n.exports=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},{}],28:[function(t,n,e){n.exports=function(t){return t*t*t*t*t}},{}],29:[function(t,n,e){n.exports=function(t){return--t*t*t*t*t+1}},{}],30:[function(t,n,e){n.exports=function(t){return-.5*(Math.cos(Math.PI*t)-1)}},{}],31:[function(t,n,e){n.exports=function(t){var n=Math.cos(t*Math.PI*.5);return Math.abs(n)<1e-14?1:1-n}},{}],32:[function(t,n,e){n.exports=function(t){return Math.sin(t*Math.PI/2)}},{}],33:[function(t,n,e){n.exports=function(t,n){n||(n=[0,""]),t=String(t);var e=parseFloat(t,10);return n[0]=e,n[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",n}},{}],34:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=void 0;var o=i(t("parse-unit")),r=i(t("eases"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c,a,s=[],l="undefined"!=typeof window,f=function(){return(document.scrollingElement||document.documentElement).scrollTop},p=function(t){return!1===isNaN((0,o.default)(t)[0])},d=function(t){var n=(0,o.default)(t);return{value:n[0],unit:n[1]}},m=function(t){return null!==String(t).match(/^[a-z]+-[a-z]+$/)},v=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:f(),o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:window.innerHeight||window.outerHeight,r=n.getBoundingClientRect(),i=t.match(/^[a-z]+/)[0],u=t.match(/[a-z]+$/)[0],c=0;return"top"===u&&(c-=0),"middle"===u&&(c-=o/2),"bottom"===u&&(c-=o),"top"===i&&(c+=r.top+e),"middle"===i&&(c+=r.top+e+r.height/2),"bottom"===i&&(c+=r.top+e+r.height),"".concat(c,"px")},h=function(t){var n,e,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:f(),r=t.getData(),i=r.to.value-r.from.value,u=(o-r.from.value)/(i/100),c=Math.min(Math.max(u,0),100),a=(n=r.direct,e={global:document.documentElement,elem:r.elem,direct:r.direct},!0===n?e.elem:n instanceof HTMLElement==1?e.direct:e.global),s=Object.keys(r.props).reduce(function(t,n){var e=r.props[n],o=e.from.unit||e.to.unit,i=e.from.value-e.to.value,u=e.timing(c/100),a=e.from.value-i*u,s=Math.round(1e4*a)/1e4;return t[n]=s+o,t},{}),l=u<0||100<u;return 1==(0<=u&&u<=100)&&r.inside(t,u,s),!0===l&&r.outside(t,u,s),{elem:a,props:s}},b=function(t,n){Object.keys(n).forEach(function(e){return o=t,r={key:e,value:n[e]},void o.style.setProperty(r.key,r.value);var o,r})};e.create=function(t){var n=null,e=!1,o={isActive:function(){return e},getData:function(){return n},calculate:function(){n=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).inside&&(t.inside=function(){}),null==t.outside&&(t.outside=function(){}),null==t.direct&&(t.direct=!1),null==t.track&&(t.track=!0),null==t.props&&(t.props={}),null==t.from)throw new Error("Missing property `from`");if(null==t.to)throw new Error("Missing property `to`");if("function"!=typeof t.inside)throw new Error("Property `inside` must be undefined or a function");if("function"!=typeof t.outside)throw new Error("Property `outside` must be undefined or a function");if("boolean"!=typeof t.direct&&t.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(!0===t.direct&&null==t.elem)throw new Error("Property `elem` is required when `direct` is true");if("boolean"!=typeof t.track)throw new Error("Property `track` must be undefined or a boolean");if("object"!==u(t.props))throw new Error("Property `props` must be undefined or an object");if(null==t.elem){if(!1===p(t.from))throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(!1===p(t.to))throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else!0===m(t.from)&&(t.from=v(t.from,t.elem)),!0===m(t.to)&&(t.to=v(t.to,t.elem));return t.from=d(t.from),t.to=d(t.to),t.props=Object.keys(t.props).reduce(function(n,e){var o=Object.assign({},t.props[e]);if(!1===p(o.from))throw new Error("Property `from` of prop must be a absolute value");if(!1===p(o.to))throw new Error("Property `from` of prop must be a absolute value");if(o.from=d(o.from),o.to=d(o.to),null==o.timing&&(o.timing=r.default.linear),"string"!=typeof o.timing&&"function"!=typeof o.timing)throw new Error("Property `timing` of prop must be undefined, a string or a function");if("string"==typeof o.timing&&null==r.default[o.timing])throw new Error("Unknown timing for property `timing` of prop");return"string"==typeof o.timing&&(o.timing=r.default[o.timing]),n[e]=o,n},{}),t}(t)},update:function(){var t=h(o),n=t.elem,e=t.props;return b(n,e),e},start:function(){e=!0},stop:function(){e=!1},destroy:function(){s[i]=void 0}},i=s.push(o)-1;return o.calculate(),o},!0===l?(function t(n,e){var o=function(){requestAnimationFrame(function(){return t(n,e)})},r=s.filter(function(t){return null!=t&&t.isActive()});if(0===r.length)return o();var i=f();if(e===i)return o();e=i,r.map(function(t){return h(t,i)}).forEach(function(t){var n=t.elem,e=t.props;return b(n,e)}),o()}(),window.addEventListener("resize",(c=function(){s.filter(function(t){return null!=t&&t.getData().track}).forEach(function(t){t.calculate(),t.update()})},a=null,function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];clearTimeout(a),a=setTimeout(function(){return c.apply(void 0,n)},50)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)},6:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}e.r(n);var r=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.nav=document.getElementsByClassName("nav"),this.events()}var n,e,r;return n=t,(e=[{key:"events",value:function(){window.addEventListener("scroll",this.hiddenMenu.bind(this)),window.addEventListener("scroll",this.fixedMenu.bind(this))}},{key:"hiddenMenu",value:function(){document.body.scrollTop>150||document.documentElement.scrollTop>150?this.nav[0].classList.add("nav--is-hidden"):this.nav[0].classList.remove("nav--is-hidden")}},{key:"fixedMenu",value:function(){document.body.scrollTop>900||document.documentElement.scrollTop>900?this.nav[0].classList.add("nav--is-fixed"):this.nav[0].classList.remove("nav--is-fixed")}}])&&o(n.prototype,e),r&&o(n,r),t}();function i(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.backToTopButton=document.getElementsByClassName("back-to-top"),this.events()}var n,e,o;return n=t,(e=[{key:"events",value:function(){window.addEventListener("scroll",this.scrollFunction.bind(this))}},{key:"scrollFunction",value:function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?this.backToTopButton[0].classList.remove("back-to-top--hidden"):this.backToTopButton[0].classList.add("back-to-top--hidden")}}])&&i(n.prototype,e),o&&i(n,o),t}();function c(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.menuIcon=document.getElementsByClassName("menu__button"),this.modal=document.getElementsByClassName("modal"),this.events()}var n,e,o;return n=t,(e=[{key:"events",value:function(){var t=this;this.menuIcon[0].addEventListener("click",this.animateMenu.bind(this)),this.menuIcon[0].addEventListener("click",this.toggleModal.bind(this)),this.modal[0].addEventListener("click",function(n){n.target.classList.contains("modal__link")&&t.closeMenu()})}},{key:"animateMenu",value:function(){this.menuIcon[0].classList.toggle("open")}},{key:"toggleModal",value:function(){this.modal[0].classList.toggle("modal--is-open")}},{key:"closeMenu",value:function(){this.menuIcon[0].classList.remove("open"),this.modal[0].classList.remove("modal--is-open")}}])&&c(n.prototype,e),o&&c(n,o),t}(),s=e(0);new r,new u,new a;ScrollReveal().reveal(".hero",{delay:100,duration:1500}),ScrollReveal().reveal(".hero__content-box",{delay:1500,duration:2e3}),ScrollReveal().reveal(".hero__logo",{delay:2500,duration:1e3}),ScrollReveal().reveal(".scroll-reveal--up",{duration:1e3,distance:"50px",viewOffset:{bottom:200}}),ScrollReveal().reveal(".participate__list-item",{duration:1e3,distance:"50px",viewOffset:{bottom:200},interval:300,origin:"right"}),ScrollReveal().reveal(".sponsors__image",{delay:300,duration:1e3,distance:"50px",viewOffset:{bottom:200},interval:300});var l=s.create({elem:document.querySelector(".hero__image"),from:"middle-middle",to:"bottom-top",props:{"--translateY":{from:0,to:"".concat(300,"px")},"--scale":{from:1,to:1.25}}}),f=s.create({elem:document.querySelector(".hero__text-container"),from:"top-middle",to:"bottom-top",props:{"--movement":{from:"-50%",to:"0%"}}}),p=s.create({elem:document.querySelector(".hero__logo-container"),from:"bottom-bottom",to:"bottom-middle",props:{"--opacity":{from:.99,to:.01}}});l.start(),f.start(),p.start()}});