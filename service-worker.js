/* 
 Service Worker
 This is an automatically generated file, please edit only 
 after refering our official support documents
 Docs: https://widely.io/support/#/docs/
 Terms: https://widely.io/terms-of-use     
 */
'use strict';

if (!params) {              
    var params = {
        firebase_url: 'https://progresshive.firebaseio.com/', hashId: '<YOUR HASHID>',
        defaultIcon: 'https://www.progresshive.io/resource/image/addToHome/launcher-icon-4x.png'
    };
}

importScripts("https://cdn.firebase.com/js/client/2.4.2/firebase.js");

importScripts("https://widely.global.ssl.fastly.net/api/1.0.3/psw-runtime.js");

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {                           
        self.skipWaiting();   
    }
});
runtime.precache(['/']);
runtime.options.cache.name = "all-cache";

runtime.router.get('/(.*)', runtime.networkFirst, { "cache": { "maxEntries": 200, "name": "all-cache", "maxAgeSeconds": 1209600} });
runtime.router.default = runtime.networkFirst;

