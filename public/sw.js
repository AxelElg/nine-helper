if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-7797d470"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/a6q8--Lfamq3cnKFKleWB/_buildManifest.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/a6q8--Lfamq3cnKFKleWB/_ssgManifest.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/5efdfdc69604def7b9f54eeeffe89edbecb06cc4.94c69c6dadce3a10b148.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/cb1608f2.95a90a273289b0d94af8.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/commons.7af247b43e14ac66e88e.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/framework.37f4a736348214b3ca94.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/main-5d65634af8082bc37652.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/pages/_app-01fd2e71193e45c09c7c.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/pages/_error-5d1b254cd2949f6e6354.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/pages/index-fcfc103b48bc933237b2.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/pages/letters/%5Bpid%5D-2f0cae3d5f2226acdc81.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/polyfills-250f16924c392849df26.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"a6q8--Lfamq3cnKFKleWB"},{url:"/_next/static/css/32eac3dd178889fc9469.css",revision:"a6q8--Lfamq3cnKFKleWB"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
