(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(t,e,r){t.exports=r(485)},485:function(t,e,r){"use strict";r.r(e);var n=r(101),o=r(70),a=r(0),i=r.n(a),u=r(98),c=r.n(u),l=r(139),s=r(176),h=r(51),f=r(179),p=r(180),g=r(181),d=r(75),v=r(23),y=r(240),m=r(63),w=r(137),b=r.n(w),j=r(49);function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),u=new S(o||[]);return n(i,"_invoke",{value:j(t,r,u)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function f(){}function p(){}function g(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&r.call(y,a)&&(d=y);var m=g.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,u){var c=s(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,u)})}u(c.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=E(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,n(m,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:p,configurable:!0}),p.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(m),c(m,u,"Generator"),c(m,a,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var E={name:"custom-templates",Tab:function(t){return i.a.createElement(h.SectionTab,Object.assign({name:"Templates"},t),i.a.createElement(b.a,null))},Panel:Object(v.observer)(function(t){var e=t.store,r=Object(m.useInfiniteAPI)({getAPI:function(t){var e=t.page;return"templates/page".concat(e,".json")}}),o=r.data,a=r.isLoading;return i.a.createElement("div",{style:{height:"100%"}},i.a.createElement(j.ImagesGrid,{shadowEnabled:!1,images:null===o||void 0===o?void 0:o.map(function(t){return t.items}).flat(),getPreview:function(t){return"/templates/".concat(t.preview)},isLoading:a,onSelect:function(){var t=Object(n.a)(x().mark(function t(r){var n,o;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/templates/".concat(r.json));case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.loadJSON(o);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),rowsNumber:2}))})};r(481),r(482),r(483);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),u=new S(o||[]);return n(i,"_invoke",{value:j(t,r,u)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function f(){}function p(){}function g(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&r.call(y,a)&&(d=y);var m=g.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,u){var c=s(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,u)})}u(c.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,n(m,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:p,configurable:!0}),p.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(m),c(m,u,"Generator"),c(m,a,function(){return this}),c(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,"PhotosPanel",function(){return S}),r.d(e,"App",function(){return k});var O=Object(g.createStore)({key:"nFA5H9elEytDyPyvKL7T",showCredit:!0});O.addPage();var S=Object(v.observer)(function(t){var e=t.store,r=i.a.useState([]),a=Object(o.a)(r,2),u=a[0],c=a[1];function l(){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(L().mark(function t(){return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c([]),t.next=3,new Promise(function(t){return setTimeout(t,3e3)});case 3:c([{url:"./fam.svg"},{url:"./fam-logo.png"},{url:"./fam-logo-HD-2-white.png"},{url:"./fam-logo-HD-2-gray.png"},{url:"./1.png"},{url:"./2.png"},{url:"./fam-icon.png"},{url:"./fam-luxe-black.png"},{url:"./round-fam-red.png"},{url:"./round-fam-black.png"},{url:"./fam-icon-blue.png"},{url:"./DXB-logo.png"},{url:"./DXB-logo.svg"},{url:"./WhatsApp-blue.jpg"},{url:"./WhatsApp-blue.jpg"},{url:"./google-reviews_v2.png"},{url:"./5100.png"},{url:"./bluewaters-bay-307637-120630.jpg"},{url:"./burj-binghatti-213320-094939.jpg"},{url:"./canal-front-residences-101761-131115.jpg"},{url:"./cavalli-estates-726179-163448.jpg"},{url:"./chic-tower-by-de-grisogono-710693-124633.jpg"},{url:"./damac-lagoons-282947-101439.jpg"},{url:"./dorchester-collection-dubai-317253-111336.jpg"},{url:"./elie-saab-a-vie-at-the-fields-581498-194609.jpg"},{url:"./elitz-by-danube-221156-151229.jpg"},{url:"./emaar-beachfront-344331-110509.jpg"},{url:"./gemz-by-danube-581716-113004.jpg"},{url:"./injazaat-residence-344307-152919.jpg"},{url:"./jumeirah-living-business-bay-160826-121954.jpg"},{url:"./mudon-al-ranim-121547-114204.jpg"},{url:"./one-zaabeel-104416-124251.jpg"},{url:"./port-de-la-mer-344521-130225.jpg"},{url:"./safa-one-239169-120116.jpg"},{url:"./six-senses-331261-115044.jpg"},{url:"./sobha-marina-205521-135344.jpg"},{url:"./st-regis-the-residences-240244-114023.jpg"},{url:"./the-palm-gateway-273948-154359.jpg"},{url:"./the-s-tower-269612-105905.jpg"},{url:"./tilal-al-ghaf-344333-113415.jpg"},{url:"./w-residences-downtown-dubai-527448-133851.jpg"},{url:"./akoya-oxygen-dubai-201210.jpeg"},{url:"./al-barsha-dubai-205676.jpg"},{url:"./bluewaters-island-dubai-205370.jpg"},{url:"./business-bay-dubai-1.jpg"},{url:"./dubai-creek-harbour-emaar-205365.jpg"},{url:"./dubai-hills-estate-205364.jpg"},{url:"./dubai-marina-205361.jpg"},{url:"./port-de-la-mer-344521-130225.jpg"},{url:"./palm-jumeirah-dubai-205369.jpg"},{url:"./jumeirah-bay-island-dubai-205793.jpg"},{url:"./jumeirah-golf-estates-dubai-205784.jpg"},{url:"./meraas-19.png"},{url:"./dubai-properties-1.png"},{url:"./emaar-properties-2.png"},{url:"./sobha-group-7.png"},{url:"./nakheel-4.png"}]);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}return i.a.useEffect(function(){l()},[]),i.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},i.a.createElement(y.T,{leftIcon:"search",placeholder:"Search...",onChange:function(t){l()},style:{marginBottom:"20px"}}),i.a.createElement(j.ImagesGrid,{images:u,getPreview:function(t){return t.url},onSelect:function(){var t=Object(n.a)(L().mark(function t(r,n){var o,a,i;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.getImageSize)(r.url);case 2:o=t.sent,a=o.width,i=o.height,e.activePage.addElement({type:"image",src:r.url,width:a,height:i,x:n?n.x:e.width/2-a/2,y:n?n.y:e.height/2-i/2});case 6:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),rowsNumber:2,isLoading:!u.length,loadMore:!1}))}),_=[{name:"photos",Tab:function(t){return i.a.createElement(h.SectionTab,Object.assign({name:"Photos"},t),i.a.createElement(b.a,null))},Panel:S},E,h.TextSection,h.ElementsSection,h.UploadSection,h.BackgroundSection,h.SizeSection],k=function(){return i.a.createElement(l.PolotnoContainer,{className:"polotno-app-container"},i.a.createElement(l.SidePanelWrap,null,i.a.createElement(h.SidePanel,{store:O,sections:_,defaultSection:"photos"})),i.a.createElement(l.WorkspaceWrap,null,i.a.createElement(f.Toolbar,{store:O,downloadButtonEnabled:!0}),i.a.createElement(s.Workspace,{store:O}),i.a.createElement(p.ZoomButtons,{store:O})))};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(k,null))}},[[256,1,2]]]);
//# sourceMappingURL=main.527b434a.chunk.js.map