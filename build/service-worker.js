"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/zelda-song-generator/index.html","726adcbe54b7934ab49f38afb8dcafb6"],["/zelda-song-generator/static/css/main.510840fc.css","9c792f44973c76a5156d716fd83cf482"],["/zelda-song-generator/static/js/main.69e71aa2.js","24f97fd0d44c21d214bc752a4a15d159"],["/zelda-song-generator/static/media/drums.73f37039.webp","73f370399c9e3a6f41f69d1846c0339c"],["/zelda-song-generator/static/media/flute.50345e0c.webp","50345e0ca115cd65c1c625a2832d6ef4"],["/zelda-song-generator/static/media/flute.923168d1.png","923168d1fb929433673e8fd6b4439ffe"],["/zelda-song-generator/static/media/frog.01d9974c.png","01d9974c0af56fcd41d5d7e5508ad18e"],["/zelda-song-generator/static/media/frog.bb3a2a8f.webp","bb3a2a8f4a7142b1593cbad1cfb16ff1"],["/zelda-song-generator/static/media/guitar.120c08fc.webp","120c08fc3aff01b7353bd72e812385ab"],["/zelda-song-generator/static/media/harp.1ee89980.webp","1ee899804e2bc15d1892abc5b609cc3e"],["/zelda-song-generator/static/media/harp.e3c4b850.png","e3c4b850f6004ff9b3845f9df352f1e7"],["/zelda-song-generator/static/media/hey-listen.67d09678.mp3","67d096780ff3dedfceba80ba3583471d"],["/zelda-song-generator/static/media/impa.1d9952d9.webp","1d9952d999d8390c3171554fe244659a"],["/zelda-song-generator/static/media/impa.6d9ce615.png","6d9ce61564bb70d2570ece307f7b845b"],["/zelda-song-generator/static/media/malon.a32caee9.webp","a32caee9d22308d413d94b23c3c9b08a"],["/zelda-song-generator/static/media/malon.f9de45eb.png","f9de45eb569bd91dce4db400feae2783"],["/zelda-song-generator/static/media/music_box.917a6ac8.webp","917a6ac873f01450d6bf1a8620539e9a"],["/zelda-song-generator/static/media/ocarina.341f2172.png","341f21727d9a5001e723d9a0833f5478"],["/zelda-song-generator/static/media/ocarina.35cb8280.webp","35cb82804972a88011a3ed7537044780"],["/zelda-song-generator/static/media/pipes.314e56f6.png","314e56f6df3143560810dce305550494"],["/zelda-song-generator/static/media/pipes.d93d0b8e.webp","d93d0b8e48f3be703e755a6bf44c4782"],["/zelda-song-generator/static/media/seamless-wood-texture.3f268298.webp","3f2682984ffd052d35a8a69b68bf66f6"],["/zelda-song-generator/static/media/seamless-wood-texture.79c6bfd5.jpg","79c6bfd5030662f508ed9367c34f2a4e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/zelda-song-generator/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});