if(!self.define){let e,n={};const s=(s,t)=>(s=new URL(s+".js",t).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let i={};const r=e=>s(e,c),o={module:{uri:c},exports:i,require:r};n[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-80ca14c3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ce59f8181c78082be6c81c87c2310d73"},{url:"/_next/static/NnCPdNwhDC_oNtOrronYb/_buildManifest.js",revision:"ff8e6ecb5605eb8527ea91ec77c402b7"},{url:"/_next/static/NnCPdNwhDC_oNtOrronYb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1086-7371e5e568d6aaa5.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/1091-af77766b9db6e729.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/1398-14f3e166cc75fa07.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/1439-c3c973e5425d3588.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/1618-854ec6e82f36c8d6.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/1659-d6030b2476b447b8.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/2022-4711252f35742782.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/2941-d8f1be3114f15fa4.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/3239-700b549a9990d335.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/3501-e5740b3655c8a51b.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/3869-ccc704b92424246f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/3e060625-1742f286b0b2ea26.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/41-a42e2bbd14b7b3fd.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/4177-2192f1cb991ad026.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/4933-eedd410980dc4b2f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/5297-de7e9e033144f38f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/5803-ebfcd4f01b5a32a3.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/6521-7aaec4f8b42c7023.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/6668-4c764ed3dc113719.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/7059-029935b17c88cf8f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/7303-209198b38577150f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/7694e0e6-db365cbc6ba243c6.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/8031-fc9dca6eb25457b8.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/809-124ff33835d599aa.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/9673-812e5fde19e3870c.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/9911-ceb2bb19b9034113.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/_not-found-114c68a4ee60ec88.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/about/page-8d5b9308c5e5b946.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/blogs/page-3311b0d050f6b541.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/contact/page-46595b250d2f13fe.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/dashboard/layout-51af0c420f4e141d.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/dashboard/page-5ecedccdabd2ee01.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/layout-ff15e67b27ff426e.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/page-622359385e50b8b6.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/privacy-policy/page-4bfa1c1425cdaa21.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/projects/page-d82c465e1c360f4c.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/services/page-a0cdbd7e8b1ab0e0.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/app/tools/markdown-to-pdf/page-3d2fc059aac1f374.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/bbb84a3c-c66dbd599d71774e.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/d3a2d874-556c42d4207418f0.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/framework-d5346d2bbca72ca6.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/main-80fec850017e3837.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/main-app-84b150e7bc568eef.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/40444-63f7092f953e2b4e.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/_app-318524aff1b41eed.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/_error-04a4e44eec505f4f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/blogs/%5Bid%5D-8a75332a231b7223.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/blogs/modify/%5Bid%5D-03fc1eca91f49580.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/blogs/publish-8d98b91a5d038772.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/courses-a99d81a22cb7edc5.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/courses/%5Bid%5D-783bc45b12641ddc.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/docs-d7d3e1eeb37c5515.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/docs/%5Bid%5D-eb1519bb331beb51.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/portfolio-fc20a4f532f891ce.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/search-58475da56911c43b.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/pages/tools-20b8a54b64bc7169.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f5767b0accf58f9f.js",revision:"NnCPdNwhDC_oNtOrronYb"},{url:"/_next/static/css/16fac49ec50dac0f.css",revision:"16fac49ec50dac0f"},{url:"/_next/static/css/171acc410c66d408.css",revision:"171acc410c66d408"},{url:"/_next/static/css/6c200d4240647420.css",revision:"6c200d4240647420"},{url:"/_next/static/css/d49286a52ca51ef5.css",revision:"d49286a52ca51ef5"},{url:"/_next/static/css/d772e88d7cbf2af1.css",revision:"d772e88d7cbf2af1"},{url:"/_next/static/css/dc591582c27d0062.css",revision:"dc591582c27d0062"},{url:"/_next/static/css/fbb9d5fd8083942f.css",revision:"fbb9d5fd8083942f"},{url:"/_next/static/media/ali-red-envelope.a19dcfa6.jpg",revision:"a26c061c271cba29599a401b713f7ce3"},{url:"/_next/static/media/angular.d848aaec.svg",revision:"97a53cbfcdfd5b5d04540aafbb9c7d43"},{url:"/_next/static/media/ant-design.e83191e4.svg",revision:"f96f7694d449ce420ac40081f1a25e28"},{url:"/_next/static/media/arco-design.cd8b55e3.png",revision:"026cbd6b7a9bb736d1f250d058619003"},{url:"/_next/static/media/fluent-design.d32d1147.jpg",revision:"c3c139c1f2eeec81bd0f13ea89a0c51d"},{url:"/_next/static/media/material-design.289ad101.png",revision:"b84ecd55dacf438be1b44c21b2aae4f7"},{url:"/_next/static/media/nest.js.76342a08.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/_next/static/media/next.js.3f9181a3.png",revision:"30ca0bf83ce1907a388e089e10d6da2b"},{url:"/_next/static/media/nuxt.js.8259cac5.svg",revision:"b0f8a98a7817e0b9dd6f80d055954bd8"},{url:"/_next/static/media/semi-design.f1faf5ad.png",revision:"3fab72e546efa6190909bbcaef34fcd2"},{url:"/_next/static/media/tople-restaurant.86300ccc.png",revision:"391c6b34e04234ac38567ab5800d95a4"},{url:"/_next/static/media/undraw_analytics_re_dkf8.16faef60.svg",revision:"571e5228989f6754503722a80c477de3"},{url:"/_next/static/media/undraw_blog_post_re_fy5x.3cda16ea.svg",revision:"8741bc19bffccd597675291604c6e5d8"},{url:"/_next/static/media/undraw_contact_us_re_4qqt.4595ae9e.svg",revision:"0de10159413020111aac331bf7d7b599"},{url:"/_next/static/media/undraw_design_components_9vy6.c001a2e5.svg",revision:"bf2671750b1a44bf2ed669080f777653"},{url:"/_next/static/media/undraw_designer_re_5v95.65929b98.svg",revision:"deeeebb24da5e6ef81f322c62a0db960"},{url:"/_next/static/media/undraw_dev_productivity_re_fylf.cc791672.svg",revision:"0878026a9df8fb02d4a1aadc56edd602"},{url:"/_next/static/media/undraw_developer_activity_re_39tg.6e5e4455.svg",revision:"2aef87a4360db3f79669bfe9b12c166e"},{url:"/_next/static/media/undraw_empty_re_opql.c91519ba.svg",revision:"790973daeab4962c1624daab921e4dc0"},{url:"/_next/static/media/undraw_engineering_team_a7n2.c981b1c3.svg",revision:"ab255385e052458656712776fd7e3553"},{url:"/_next/static/media/undraw_maintenance_re_59vn.d6d0d183.svg",revision:"66b95d74c1fd5bb9a022c18f7bb92203"},{url:"/_next/static/media/undraw_next_js_-8-g5m.7d2e18ea.svg",revision:"1c8ab4bc263bbc9b107566beb3a90594"},{url:"/_next/static/media/undraw_nuxt_js_0fq9.fe528a07.svg",revision:"4dad7b2e98e785105ff597593cfb466c"},{url:"/_next/static/media/undraw_page_not_found_re_e9o6.4bd2f713.svg",revision:"f56ce81b2cad51feb7c8b1478d10e0cb"},{url:"/_next/static/media/undraw_proud_coder_re_exuy.979c0549.svg",revision:"264cddb56283816b70aec97c201a5786"},{url:"/_next/static/media/undraw_qa_engineers_dg-5-p.2a5b3be6.svg",revision:"97c82272b08ca93eb29107eda2dc6d1f"},{url:"/_next/static/media/undraw_react_y-7-wq.1ac05cd7.svg",revision:"50e0c9e7cfc74ca75adb53293eba002f"},{url:"/_next/static/media/undraw_services_re_hu5n.de083392.svg",revision:"8349626784bca50e3f9c06dedbaabd56"},{url:"/_next/static/media/undraw_software_engineer_re_tnjc.c251f4ed.svg",revision:"d471b92c41a37420f0433ef2a14f3618"},{url:"/_next/static/media/undraw_solution_mindset_re_57bf.1d3b96b8.svg",revision:"f221bd37f3f733ba2eeed9310082d5c1"},{url:"/_next/static/media/undraw_team_collaboration_re_ow29.5c81ef87.svg",revision:"4fff1cca67abb75938728db1340cf4ef"},{url:"/_next/static/media/undraw_teamwork_hpdk.ae05862c.svg",revision:"c80651496911d46cbb4634aa62af5566"},{url:"/_next/static/media/undraw_under_construction_-46-pa.78f7b58c.svg",revision:"54135d55a98cb3a77a8f8b52fcdbee1b"},{url:"/_next/static/media/uni.4a7f1e85.png",revision:"aaa661f96607623063c0a9c2bee45c69"},{url:"/_next/static/media/vue.4cf53b88.png",revision:"cf23526f451784ff137f161b8fe18d5a"},{url:"/ads.txt",revision:"70ee876b2bb58899fb5634ad5a59e031"},{url:"/codelabs/first-flutter-app.md",revision:"d13057c3dcd446ea5b9837206b9797f9"},{url:"/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"/favicon.png",revision:"dccf457c989915e9396922c0b11c4c83"},{url:"/googlec9753c531853faac.html",revision:"be33d1fbbf6462ba068c3d19b35ffc57"},{url:"/logo192.png",revision:"f4cab382093036c7c8ef08f9576ff03f"},{url:"/logo512.png",revision:"31a2ca9435c87bde268f416380b047a6"},{url:"/manifest.json",revision:"c8cb63aa2ec35a2cf541679070f33663"},{url:"/robots.txt",revision:"4a70bbd1367866872375843d7c0f3975"},{url:"/sitemap-0.xml",revision:"72dfc66e3eb070826395bc1d886506d8"},{url:"/sitemap.xml",revision:"79602c8545597111a0d4f22a291db832"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:t})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
