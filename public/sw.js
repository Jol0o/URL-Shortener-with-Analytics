if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let o={};const c=e=>i(e,r),d={module:{uri:r},exports:o,require:c};a[r]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KaX3sAZKSw0WsXkuhlorS/_buildManifest.js",revision:"76521f65684fa792fc3a85a3b8a1552d"},{url:"/_next/static/KaX3sAZKSw0WsXkuhlorS/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/280-24253c7cff2777b4.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/455-286886a336d25712.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/4bd1b696-b2a3dcb07fff6342.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/67-15ead887e90bacd1.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/72-3094a0a03b236719.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/735.6e9c7e96f28c50e2.js",revision:"6e9c7e96f28c50e2"},{url:"/_next/static/chunks/809.6f18c4a56313b3e8.js",revision:"6f18c4a56313b3e8"},{url:"/_next/static/chunks/921-d483471a2f4bc1a4.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/991.f696da47a01b5703.js",revision:"f696da47a01b5703"},{url:"/_next/static/chunks/app/_not-found/page-e93a760f159cfbec.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/api/push-subscription/route-70c4e7b76865d985.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/api/send-push/route-e3cfa8d76d3b4641.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/auth/signin/page-74e71b3a7782a5ea.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/chat/%5BconversationId%5D/page-5e2bebb5efde74e0.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/chat/layout-41a1d41fc12ed19d.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/chat/page-367bbcd9e44094d0.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/layout-6b3394d687779dda.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/app/page-d9de9e20845a583a.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/main-app-6b198d053706e64e.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/main-fea09d6ac4fc2afc.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-55c7ff92ccc3b04d.js",revision:"KaX3sAZKSw0WsXkuhlorS"},{url:"/_next/static/css/98a5219f89bd5560.css",revision:"98a5219f89bd5560"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/android/android-launchericon-144-144.png",revision:"2f55e290da942c270781fc9b0f7535d3"},{url:"/android/android-launchericon-192-192.png",revision:"cfe04c86c83650ebb8400bef938ab85f"},{url:"/android/android-launchericon-48-48.png",revision:"6d7df2d1f91c17626164e0f4bbcf0275"},{url:"/android/android-launchericon-512-512.png",revision:"94322f83a74af28f49ba78ef39706469"},{url:"/android/android-launchericon-72-72.png",revision:"cf6a54083618abb18f9c12d4a954f7c6"},{url:"/android/android-launchericon-96-96.png",revision:"46b66210acd01c700898dbba0228862d"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icontab.png",revision:"ea50bfe91857610937857e806d63999a"},{url:"/ios/100.png",revision:"dcb599082459d84ed378369d06c9a623"},{url:"/ios/1024.png",revision:"30999443728cb729d6281da8e4e6cfb7"},{url:"/ios/114.png",revision:"4bfb91cde8d3dc38a6da75d31d14b714"},{url:"/ios/120.png",revision:"7488099d0404f8b7536b1e4f8d573025"},{url:"/ios/128.png",revision:"b459858e8437d872d19d9a45d6ace3b0"},{url:"/ios/144.png",revision:"2f55e290da942c270781fc9b0f7535d3"},{url:"/ios/152.png",revision:"a154eac7085c430f0b7685562797662c"},{url:"/ios/16.png",revision:"845a46aac76dc090d4e90394871824b0"},{url:"/ios/167.png",revision:"811eb840c08a97336c5485632a99cae1"},{url:"/ios/180.png",revision:"e0b0eba7ef7192c7bd1c15ce4ffcb08f"},{url:"/ios/192.png",revision:"cfe04c86c83650ebb8400bef938ab85f"},{url:"/ios/20.png",revision:"7f926d61b33490d5d8cc869dfce3fa2a"},{url:"/ios/256.png",revision:"fcd947fba844205f5d7a9aa41dd2079b"},{url:"/ios/29.png",revision:"17676fbeb827ea9a4e2788392bfaa4fe"},{url:"/ios/32.png",revision:"2b72de75e427a9a5b4e257ba182c54e4"},{url:"/ios/40.png",revision:"d91e2d9f29ea6cc8e29e58d13f78f98c"},{url:"/ios/50.png",revision:"a0efbee5c2c89aca96e4959c3ae238a4"},{url:"/ios/512.png",revision:"94322f83a74af28f49ba78ef39706469"},{url:"/ios/57.png",revision:"deab0eed42e261f074e6a8f927af6078"},{url:"/ios/58.png",revision:"f4d9b17ec29bad23db9705a1b8e8acef"},{url:"/ios/60.png",revision:"e3d64df9be52b49cf9855d1be242ae14"},{url:"/ios/64.png",revision:"812e0202c15266d64ed7d2588de7d119"},{url:"/ios/72.png",revision:"cf6a54083618abb18f9c12d4a954f7c6"},{url:"/ios/76.png",revision:"da60257a908a71c88d8fe7a12ff058c7"},{url:"/ios/80.png",revision:"a770764a4ad465d0b539071cf1caf505"},{url:"/ios/87.png",revision:"5217873518d8f5deba55c1304d30c1c6"},{url:"/manifest.json",revision:"aa9c58869f35adba8a2dff274957af80"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"8e504a2a634130e59ade10acc5ce0d99"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"},{url:"/windows11/LargeTile.scale-100.png",revision:"3d5f98877bb90f2e6d96a71439e20257"},{url:"/windows11/LargeTile.scale-125.png",revision:"5504f400db412794473cb346382e9d25"},{url:"/windows11/LargeTile.scale-150.png",revision:"ebc7f5badfa1b5647230f8c07156b1e6"},{url:"/windows11/LargeTile.scale-200.png",revision:"256c5a4347a4ff09346c0928f9e6f4a8"},{url:"/windows11/LargeTile.scale-400.png",revision:"d8fac7ed6f31d494c6f05d4dd4bc389a"},{url:"/windows11/SmallTile.scale-100.png",revision:"4b371ddc730d33b1caf9500e502b29be"},{url:"/windows11/SmallTile.scale-125.png",revision:"d0a6c5c5facb8b4c4af97b4f14ffed5b"},{url:"/windows11/SmallTile.scale-150.png",revision:"44d1ae106c5f815697e104bd9017ab98"},{url:"/windows11/SmallTile.scale-200.png",revision:"505bff0abaff9ca2624e438119518eb0"},{url:"/windows11/SmallTile.scale-400.png",revision:"35366aec94a47e683d4a104f62ddd306"},{url:"/windows11/SplashScreen.scale-100.png",revision:"c2b28c633c5b7ba4452caa4555cadfa2"},{url:"/windows11/SplashScreen.scale-125.png",revision:"042bc1725fcf950ed2f7d89ad0b30143"},{url:"/windows11/SplashScreen.scale-150.png",revision:"9a168a246c7a984a55001b0170ce600b"},{url:"/windows11/SplashScreen.scale-200.png",revision:"7a46c5200a2828c9076da1312cff6edb"},{url:"/windows11/SplashScreen.scale-400.png",revision:"3eba1583a413f17b5ce3dea1a612fa47"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"a3c040c37b06d372a4213788d644f920"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"9d6fe686bb81d00d9d91c915a4e4bf32"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"403d4ab4e223b7ae87a43bfe19673b9d"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"1b206055f8f68af8c086397d9fed0ae5"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"4458173918fdddb77371a8f4920ead78"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"ab707e6bfc07f52f7d9085f063871a63"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ba6f1a6114a80a1b98857110f6eaf71c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"415c789399b49bb137a8ab393625291b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"181fe7452f0801df78d3c5621d24aed2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"bcab3fac9109fb4d5ca49a0b035751d3"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"e29c566fabe20f7f52e257394d813373"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"50728c21ded2951d1190da1cb37ef389"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"2f290626df1195508346cc9bb723c9af"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"335213902e3b0ed8c017cbc5d973edbb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"ec7a3d5e6d446659876727250476afb7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"1826bf46f2a7acbb4f0442171536d418"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"c6605ea5fb9ada98ef2e7272dc5b3c68"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"4aae6a37b86840fee48ea3736e18cd62"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"05189443433d5c44001c949063786582"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"c0d517487304525217449b64936666f5"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"ab707e6bfc07f52f7d9085f063871a63"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ba6f1a6114a80a1b98857110f6eaf71c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"415c789399b49bb137a8ab393625291b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"181fe7452f0801df78d3c5621d24aed2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"bcab3fac9109fb4d5ca49a0b035751d3"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"e29c566fabe20f7f52e257394d813373"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"50728c21ded2951d1190da1cb37ef389"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"2f290626df1195508346cc9bb723c9af"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"335213902e3b0ed8c017cbc5d973edbb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"ec7a3d5e6d446659876727250476afb7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"1826bf46f2a7acbb4f0442171536d418"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"c6605ea5fb9ada98ef2e7272dc5b3c68"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"4aae6a37b86840fee48ea3736e18cd62"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"05189443433d5c44001c949063786582"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"c0d517487304525217449b64936666f5"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"335213902e3b0ed8c017cbc5d973edbb"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"8f1c26c9b436c281c8a159da426fc1b7"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"04cb952d0e2b1fd8c4323a0c8d0fefff"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"8433b26a2dd92a42b57673c2a08964d8"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"a8d3bce31ffd683a5cc35fd30d5e15f0"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"ab707e6bfc07f52f7d9085f063871a63"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"ba6f1a6114a80a1b98857110f6eaf71c"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"415c789399b49bb137a8ab393625291b"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"181fe7452f0801df78d3c5621d24aed2"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"bcab3fac9109fb4d5ca49a0b035751d3"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"e29c566fabe20f7f52e257394d813373"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"50728c21ded2951d1190da1cb37ef389"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"2f290626df1195508346cc9bb723c9af"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"335213902e3b0ed8c017cbc5d973edbb"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"ec7a3d5e6d446659876727250476afb7"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"1826bf46f2a7acbb4f0442171536d418"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"c6605ea5fb9ada98ef2e7272dc5b3c68"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"4aae6a37b86840fee48ea3736e18cd62"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"05189443433d5c44001c949063786582"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"c0d517487304525217449b64936666f5"},{url:"/windows11/StoreLogo.scale-100.png",revision:"69ae8ce274df5537402337f449b4164e"},{url:"/windows11/StoreLogo.scale-125.png",revision:"94313fbae2bf682413d8b6b6f351d658"},{url:"/windows11/StoreLogo.scale-150.png",revision:"cfd48b7ba254f0d74ea469ed26116fc0"},{url:"/windows11/StoreLogo.scale-200.png",revision:"4bf9fc5776395957962314f4b9be63cd"},{url:"/windows11/StoreLogo.scale-400.png",revision:"cd64a3296f9b90f69155f637e786871b"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"442abc0a16fae88ffe95e4b573d1ec04"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"eed1d6a19341e4f3d2bc5a1b96caeec8"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"13f73df54c52aac2387b0087c5fc49b0"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"c2b28c633c5b7ba4452caa4555cadfa2"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"7a46c5200a2828c9076da1312cff6edb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var a=e.sameOrigin,i=e.url.pathname;return!(!a||i.startsWith("/api/auth/callback")||!i.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var a=e.request,i=e.url.pathname,s=e.sameOrigin;return"1"===a.headers.get("RSC")&&"1"===a.headers.get("Next-Router-Prefetch")&&s&&!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var a=e.request,i=e.url.pathname,s=e.sameOrigin;return"1"===a.headers.get("RSC")&&s&&!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var a=e.url.pathname;return e.sameOrigin&&!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
