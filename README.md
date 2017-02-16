# pwa-ecommerce
A demo eCommerce application converted into Progressive Web Application using widely 

Widely is a SAAS tool for creating proressive web Applications with no coding skills.
Once configured you can cutomize the PWA with minimal LOC and can check PWA analytics and send push notifications through Widely dashboard.

#Support
Angular 1
Multipage 

#Setup
* Signup/Login to [Widely](https://widely.io)
* Fill App Settings. 
* Update your HASHID in widelyInclude.js and service-worker.js
* Update your FCM Project no in manifest.json or replace with manifest.json generated in dashboard.

#Already Done  
* Download manifest.json and service-worker.js from Dashboard -> Plug and Play.
* Add both Files in root of website.
* Update your HashId in widelyInclude.js
* Call Manifest in head of html in all pages or if using templating in head component only.
* Copy Widely Js calling from dashboard -> Plug and Play and paste in end of body of HTML of all pages of if using templating then call in cutom component.


Thanks to [free-css](http://www.free-css.com/free-css-templates/page201/shopper) for bootstrap template
