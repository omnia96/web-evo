if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const r=e=>s(e,n),d={module:{uri:n},exports:t,require:r};i[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"609d08846d149c2ebc85ce660ec8d7fb"},{url:"/_next/static/MiC2QHuRwXl_Hi5lo5J3I/_buildManifest.js",revision:"55be0aa284296524495de473ef6630d1"},{url:"/_next/static/MiC2QHuRwXl_Hi5lo5J3I/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1086-afd828f3de5d14e9.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1091-0f2e03c4998c2d01.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1350-2273da4bb50e2d54.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1368-f0e2cd306ffbe425.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1398-5b1d622b60476e76.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1609-7222d051f1eff93a.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1842-34cdb3135fb62c20.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/1bae116d-3986f4b1062e0cd6.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/2270-c3fa15187a92161a.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/3239-404063c5b2fbb29c.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/3501-c9da2c0a8968a556.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/3869-d8b1996b5ab40cc0.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/3931-feaaddd122a16210.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/41-29540d07c92c0267.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/4933-eedd410980dc4b2f.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/5803-4da15df0194c9aff.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/6521-7aaec4f8b42c7023.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/6668-3481de873ab0e5c3.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/667-ed374a15144c07ed.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/6925-599a01d4662282e0.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/7059-8656cf358c4cdd57.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/7303-d3c9365cf6259e02.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/744-c86386912c9a6198.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/7517-b81d4c7dcc904514.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/7694e0e6-db365cbc6ba243c6.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/9473-71c3c6e1125a4c6c.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/_not-found-29bc7fe1da5fbfef.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/about/page-d71342d5f7bfff97.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/blogs/page-dc69cfb7229a519d.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/contact/page-14e2687c95835b94.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/dashboard/layout-5da1e481e2c6da92.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/dashboard/page-1de3f336d1b6e0a4.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/layout-1d8cd7650fd0d34b.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/page-0a80d159d0081259.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/privacy-policy/page-eedb7e5aba34218a.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/projects/page-760d30933e6e8467.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/services/page-a60ee7d2bbbdf7c1.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/app/tools/markdown-to-pdf/page-dfd3bbb37c0ff2a3.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/bbb84a3c-c66dbd599d71774e.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/d3a2d874-556c42d4207418f0.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/framework-d5346d2bbca72ca6.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/main-1db19744534ce9d5.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/main-app-e3fb1ce769bacd57.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/40444-70c7360074c952ab.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/_app-da900b19ca218804.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/_error-32c4f56bc44e4ddb.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/blogs/%5Bid%5D-8ffcd682c58125bc.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/blogs/modify/%5Bid%5D-ddfa4701f1ef717a.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/blogs/publish-44391e887037c473.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/courses-6b974c0a6cb86163.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/courses/%5Bid%5D-44726d803f8d7e0d.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/docs-319d777bc936e8ad.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/docs/%5Bid%5D-5e78478408e0583e.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/portfolio-0321a3d69cbb6c44.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/search-c4f42df3dedd0ff3.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/pages/tools-e3fc683cfce99768.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f5767b0accf58f9f.js",revision:"MiC2QHuRwXl_Hi5lo5J3I"},{url:"/_next/static/css/16fac49ec50dac0f.css",revision:"16fac49ec50dac0f"},{url:"/_next/static/css/171acc410c66d408.css",revision:"171acc410c66d408"},{url:"/_next/static/css/6c200d4240647420.css",revision:"6c200d4240647420"},{url:"/_next/static/css/d49286a52ca51ef5.css",revision:"d49286a52ca51ef5"},{url:"/_next/static/css/d772e88d7cbf2af1.css",revision:"d772e88d7cbf2af1"},{url:"/_next/static/css/dc591582c27d0062.css",revision:"dc591582c27d0062"},{url:"/_next/static/css/fbb9d5fd8083942f.css",revision:"fbb9d5fd8083942f"},{url:"/_next/static/media/ali-red-envelope.a19dcfa6.jpg",revision:"a26c061c271cba29599a401b713f7ce3"},{url:"/_next/static/media/angular.d848aaec.svg",revision:"97a53cbfcdfd5b5d04540aafbb9c7d43"},{url:"/_next/static/media/ant-design.e83191e4.svg",revision:"f96f7694d449ce420ac40081f1a25e28"},{url:"/_next/static/media/arco-design.cd8b55e3.png",revision:"026cbd6b7a9bb736d1f250d058619003"},{url:"/_next/static/media/fluent-design.d32d1147.jpg",revision:"c3c139c1f2eeec81bd0f13ea89a0c51d"},{url:"/_next/static/media/material-design.289ad101.png",revision:"b84ecd55dacf438be1b44c21b2aae4f7"},{url:"/_next/static/media/nest.js.76342a08.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/_next/static/media/next.js.3f9181a3.png",revision:"30ca0bf83ce1907a388e089e10d6da2b"},{url:"/_next/static/media/nuxt.js.8259cac5.svg",revision:"b0f8a98a7817e0b9dd6f80d055954bd8"},{url:"/_next/static/media/semi-design.f1faf5ad.png",revision:"3fab72e546efa6190909bbcaef34fcd2"},{url:"/_next/static/media/tople-restaurant.86300ccc.png",revision:"391c6b34e04234ac38567ab5800d95a4"},{url:"/_next/static/media/undraw_analytics_re_dkf8.16faef60.svg",revision:"571e5228989f6754503722a80c477de3"},{url:"/_next/static/media/undraw_blog_post_re_fy5x.3cda16ea.svg",revision:"8741bc19bffccd597675291604c6e5d8"},{url:"/_next/static/media/undraw_contact_us_re_4qqt.4595ae9e.svg",revision:"0de10159413020111aac331bf7d7b599"},{url:"/_next/static/media/undraw_design_components_9vy6.c001a2e5.svg",revision:"bf2671750b1a44bf2ed669080f777653"},{url:"/_next/static/media/undraw_designer_re_5v95.65929b98.svg",revision:"deeeebb24da5e6ef81f322c62a0db960"},{url:"/_next/static/media/undraw_dev_productivity_re_fylf.cc791672.svg",revision:"0878026a9df8fb02d4a1aadc56edd602"},{url:"/_next/static/media/undraw_developer_activity_re_39tg.6e5e4455.svg",revision:"2aef87a4360db3f79669bfe9b12c166e"},{url:"/_next/static/media/undraw_empty_re_opql.c91519ba.svg",revision:"790973daeab4962c1624daab921e4dc0"},{url:"/_next/static/media/undraw_engineering_team_a7n2.c981b1c3.svg",revision:"ab255385e052458656712776fd7e3553"},{url:"/_next/static/media/undraw_maintenance_re_59vn.d6d0d183.svg",revision:"66b95d74c1fd5bb9a022c18f7bb92203"},{url:"/_next/static/media/undraw_next_js_-8-g5m.7d2e18ea.svg",revision:"1c8ab4bc263bbc9b107566beb3a90594"},{url:"/_next/static/media/undraw_nuxt_js_0fq9.fe528a07.svg",revision:"4dad7b2e98e785105ff597593cfb466c"},{url:"/_next/static/media/undraw_page_not_found_re_e9o6.4bd2f713.svg",revision:"f56ce81b2cad51feb7c8b1478d10e0cb"},{url:"/_next/static/media/undraw_proud_coder_re_exuy.979c0549.svg",revision:"264cddb56283816b70aec97c201a5786"},{url:"/_next/static/media/undraw_qa_engineers_dg-5-p.2a5b3be6.svg",revision:"97c82272b08ca93eb29107eda2dc6d1f"},{url:"/_next/static/media/undraw_react_y-7-wq.1ac05cd7.svg",revision:"50e0c9e7cfc74ca75adb53293eba002f"},{url:"/_next/static/media/undraw_services_re_hu5n.de083392.svg",revision:"8349626784bca50e3f9c06dedbaabd56"},{url:"/_next/static/media/undraw_software_engineer_re_tnjc.c251f4ed.svg",revision:"d471b92c41a37420f0433ef2a14f3618"},{url:"/_next/static/media/undraw_solution_mindset_re_57bf.1d3b96b8.svg",revision:"f221bd37f3f733ba2eeed9310082d5c1"},{url:"/_next/static/media/undraw_team_collaboration_re_ow29.5c81ef87.svg",revision:"4fff1cca67abb75938728db1340cf4ef"},{url:"/_next/static/media/undraw_teamwork_hpdk.ae05862c.svg",revision:"c80651496911d46cbb4634aa62af5566"},{url:"/_next/static/media/undraw_under_construction_-46-pa.78f7b58c.svg",revision:"54135d55a98cb3a77a8f8b52fcdbee1b"},{url:"/_next/static/media/uni.4a7f1e85.png",revision:"aaa661f96607623063c0a9c2bee45c69"},{url:"/_next/static/media/vue.4cf53b88.png",revision:"cf23526f451784ff137f161b8fe18d5a"},{url:"/ads.txt",revision:"70ee876b2bb58899fb5634ad5a59e031"},{url:"/codelabs/first-flutter-app.md",revision:"d13057c3dcd446ea5b9837206b9797f9"},{url:"/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"/favicon.png",revision:"dccf457c989915e9396922c0b11c4c83"},{url:"/googlec9753c531853faac.html",revision:"be33d1fbbf6462ba068c3d19b35ffc57"},{url:"/logo192.png",revision:"f4cab382093036c7c8ef08f9576ff03f"},{url:"/logo512.png",revision:"31a2ca9435c87bde268f416380b047a6"},{url:"/manifest.json",revision:"c8cb63aa2ec35a2cf541679070f33663"},{url:"/robots.txt",revision:"4a70bbd1367866872375843d7c0f3975"},{url:"/sitemap-0.xml",revision:"f7a54247d2e0798654482489b47a6a62"},{url:"/sitemap.xml",revision:"79602c8545597111a0d4f22a291db832"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
