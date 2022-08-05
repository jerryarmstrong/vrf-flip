"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[489],{489:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(7143),o=t.n(r),i=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n}(o()),c=a,s=t(4165),l=t(1413),u=t(5861),d=t(9439),p=t(5671),f=t(3144),h=t(7326),v=t(136),_=t(9388),w=t(4976),y=t(6315),m=t.n(y),b=function(e){(0,v.Z)(t,e);var n=(0,_.Z)(t);function t(e,r){var o,i,a;if((0,p.Z)(this,t),o=n.call(this),i=(0,h.Z)(o),o._handleMessage=function(e){if(o._injectedProvider&&e.source===window||e.origin===o._providerUrl.origin&&e.source===o._popup)if("connected"===e.data.method){var n=new w.nh(e.data.params.publicKey);o._publicKey&&o._publicKey.equals(n)||(o._publicKey&&!o._publicKey.equals(n)&&o._handleDisconnect(),o._publicKey=n,o._autoApprove=!!e.data.params.autoApprove,o.emit("connect",o._publicKey))}else if("disconnected"===e.data.method)o._handleDisconnect();else if((e.data.result||e.data.error)&&o._responsePromises.has(e.data.id)){var t=o._responsePromises.get(e.data.id),r=(0,d.Z)(t,2),i=r[0],a=r[1];e.data.result?i(e.data.result):a(new Error(e.data.error))}},o._handleConnect=function(){return o._handlerAdded||(o._handlerAdded=!0,window.addEventListener("message",o._handleMessage),window.addEventListener("beforeunload",o.disconnect)),o._injectedProvider?new Promise((function(e){o._sendRequest("connect",{}),e()})):(window.name="parent",o._popup=window.open(o._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){o.once("connect",e)})))},o._handleDisconnect=function(){o._handlerAdded&&(o._handlerAdded=!1,window.removeEventListener("message",o._handleMessage),window.removeEventListener("beforeunload",o.disconnect)),o._publicKey&&(o._publicKey=null,o.emit("disconnect")),o._responsePromises.forEach((function(e,n){var t=(0,d.Z)(e,2),r=(t[0],t[1]);o._responsePromises.delete(n),r("Wallet disconnected")}))},o._sendRequest=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n,t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("connect"===n||i.connected){e.next=2;break}throw new Error("Wallet not connected");case 2:return r=i._nextRequestId,++i._nextRequestId,e.abrupt("return",new Promise((function(e,o){i._responsePromises.set(r,[e,o]),i._injectedProvider?i._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:n,params:(0,l.Z)({network:i._network},t)}):(i._popup.postMessage({jsonrpc:"2.0",id:r,method:n,params:t},i._providerUrl.origin),i.autoApprove||i._popup.focus())})));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o.connect=function(){return o._popup&&o._popup.close(),o._handleConnect()},o.disconnect=(0,u.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i._injectedProvider){e.next=3;break}return e.next=3,i._sendRequest("disconnect",{});case 3:i._popup&&i._popup.close(),i._handleDisconnect();case 5:case"end":return e.stop()}}),e)}))),o.sign=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n,t){var r,o,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n instanceof Uint8Array){e.next=2;break}throw new Error("Data must be an instance of Uint8Array");case 2:return e.next=4,i._sendRequest("sign",{data:n,display:t});case 4:return r=e.sent,o=m().decode(r.signature),a=new w.nh(r.publicKey),e.abrupt("return",{signature:o,publicKey:a});case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o.signTransaction=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var t,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._sendRequest("signTransaction",{message:m().encode(n.serializeMessage())});case 2:return t=e.sent,r=m().decode(t.signature),o=new w.nh(t.publicKey),n.addSignature(o,r),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o.signAllTransactions=function(){var e=(0,u.Z)((0,s.Z)().mark((function e(n){var t,r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._sendRequest("signAllTransactions",{messages:n.map((function(e){return m().encode(e.serializeMessage())}))});case 2:return t=e.sent,r=t.signatures.map((function(e){return m().decode(e)})),o=new w.nh(t.publicKey),n=n.map((function(e,n){return e.addSignature(o,r[n]),e})),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),function(e){return"object"===typeof e&&null!==e}(a=e)&&function(e){return"function"===typeof e}(a.postMessage))o._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");o._providerUrl=new URL(e),o._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:r}).toString()}return o._network=r,o._publicKey=null,o._autoApprove=!1,o._popup=null,o._handlerAdded=!1,o._nextRequestId=1,o._responsePromises=new Map,o}return(0,f.Z)(t,[{key:"publicKey",get:function(){return this._publicKey}},{key:"connected",get:function(){return null!==this._publicKey}},{key:"autoApprove",get:function(){return this._autoApprove}}]),t}(o());var g=b,E=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),P=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},A=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},x=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return E(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return P(this,void 0,void 0,(function(){var e=this;return A(this,(function(n){switch(n.label){case 0:return this._instance=new g(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return P(this,void 0,void 0,(function(){return A(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return P(this,void 0,void 0,(function(){return A(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signTransaction(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signAllTransactions=function(e){return P(this,void 0,void 0,(function(){return A(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.signAllTransactions(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),P(this,void 0,void 0,(function(){var t;return A(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(c),I=t(2810),M=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)},k=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},T=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},O=function(e){function n(n,t){var r,o=this;return(o=e.call(this)||this)._publicKey=null,o._messageHandlers={},o.handleMessage=function(e){if(o._messageHandlers[e.id]){var n=o._messageHandlers[e.id],t=n.resolve,r=n.reject;delete o._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},o._sendMessage=function(e){if(!o.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,i,a=(0,I.Z)();o._messageHandlers[a]={resolve:n,reject:t},null===(i=null===(r=o._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:j({id:a},e)},"*")}))},o._iframe=n,o._publicKey=new w.nh(null===(r=null===t||void 0===t?void 0:t.toString)||void 0===r?void 0:r.call(t)),o}return M(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return k(this,void 0,void 0,(function(){return T(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return k(this,void 0,void 0,(function(){return T(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return k(this,void 0,void 0,(function(){var n,t,r,o;return T(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:m().encode(e.serializeMessage())}})];case 2:return n=i.sent(),t=n.publicKey,r=n.signature,e.addSignature(new w.nh(t),m().decode(r)),[2,e];case 3:throw o=i.sent(),console.log(o),new Error("Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){return k(this,void 0,void 0,(function(){var n,t,r,o;return T(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return m().encode(e.serializeMessage())}))}})];case 2:return n=i.sent(),t=n.publicKey,r=n.signatures,[2,e.map((function(e,n){return e.addSignature(new w.nh(t),m().decode(r[n])),e}))];case 3:throw o=i.sent(),console.log(o),new Error("Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),k(this,void 0,void 0,(function(){var t,r;return T(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return t=o.sent(),[2,Uint8Array.from(m().decode(t))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},n}(c),K=O,S=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),H=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},Z=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(c){i=[6,c],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},C=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},R=function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new x(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new K(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"collapse":return void r._collapseIframe();default:return}},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=C(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin)),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===t||void 0===t?void 0:t.network)&&(r._network=null===t||void 0===t?void 0:t.network),(null===t||void 0===t?void 0:t.provider)&&(r._provider=null===t||void 0===t?void 0:t.provider),r}return S(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return H(this,void 0,void 0,(function(){var e=this;return Z(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return H(this,void 0,void 0,(function(){return Z(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return H(this,void 0,void 0,(function(){return Z(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signTransaction(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signAllTransactions=function(e){return H(this,void 0,void 0,(function(){return Z(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signAllTransactions(e)];case 1:return[2,n.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),H(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),H(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){return void 0===e&&(e=10),H(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t){var r=null;function o(e){!function(){window.removeEventListener("message",a,!1),r&&(document.body.removeChild(r),r=null);i&&(clearTimeout(i),i=null)}(),t(e)}var i=setTimeout((function(){o(!1)}),1e3*e);function a(e){var n,t,r;"solflareDetectorToAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)&&o(!!(null===(r=null===(t=e.data)||void 0===t?void 0:t.data)||void 0===r?void 0:r.detected))}window.addEventListener("message",a,!1),(r=document.createElement("div")).className="solflare-wallet-detect-iframe",r.innerHTML="\n        <iframe src='".concat(n.DETECT_IFRAME_URL,"?timeout=").concat(e,"' style='position: fixed; top: -9999px; left: -9999px; width: 0; height: 0; pointer-events: none; border: none;'></iframe>\n      "),document.body.appendChild(r)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n.DETECT_IFRAME_URL="https://connect.solflare.com/detect",n}(o())}}]);
//# sourceMappingURL=489.a44732f3.chunk.js.map