/* 
 Service Worker
 This is an automatically generated file, please edit only 
 after refering our official support documents
 Docs: https://progresshive.io/support/#/docs/
 Terms: https://progresshive.io/terms-of-use 
 */
'use strict';

if (!params) {
    var params = { firebase_url: 'https://luminous-torch-2375.firebaseio.com/', hashId: '<Your Hash ID>',
    defaultIcon: 'https://www.progresshive.io/resource/image/addToHome/launcher-icon-4x.png' };
}

importScripts("https://cdn.firebase.com/js/client/2.4.2/firebase.js");

importScripts("https://widely.global.ssl.fastly.net/api/1.0.1/psw-runtime.js");

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
runtime.options.cache.name = "full-cache";
runtime.router.get('/(.*)', runtime.networkFirst, {"cache":{"maxEntries":200,"name":"full-cache","maxAgeSeconds":604800}});
runtime.router.default = runtime.networkFirst;

