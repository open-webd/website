(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1512:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8781)}])},1511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(2430),o=r(1778),a=r(2676),i=o._(r(5271)),s=n._(r(967)),l=n._(r(413)),d=r(5318),c=r(1661),u=r(7169);r(5992);let f=r(155),m=n._(r(9627)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/website/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,o,a,i){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:s,width:l,decoding:d,className:c,style:u,fetchPriority:f,placeholder:m,loading:p,unoptimized:b,fill:x,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,sizesInput:j,onLoad:k,onError:N,...S}=e;return(0,a.jsx)("img",{...S,...h(f),loading:p,width:l,height:s,decoding:d,"data-nimg":x?"fill":"1",className:c,style:u,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&g(e,m,v,w,y,b,j))},[r,m,v,w,y,N,b,j,t]),onLoad:e=>{g(e.currentTarget,m,v,w,y,b,j)},onError:e=>{_(!0),"empty"!==m&&y(!0),N&&N(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(u.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:l}=e,g=(0,i.useRef)(s);(0,i.useEffect)(()=>{g.current=s},[s]);let h=(0,i.useRef)(l);(0,i.useEffect)(()=>{h.current=l},[l]);let[v,w]=(0,i.useState)(!1),[y,_]=(0,i.useState)(!1),{props:j,meta:k}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:o,blurComplete:v,showAltText:y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...j,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),k.priority?(0,a.jsx)(x,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5318:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(5992);let n=r(188),o=r(1661);function a(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,d,{src:c,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:b,height:x,fill:v=!1,style:w,overrideSrc:y,onLoad:_,onLoadingComplete:j,placeholder:k="empty",blurDataURL:N,fetchPriority:S,layout:z,objectFit:C,objectPosition:P,lazyBoundary:E,lazyRoot:O,...I}=e,{imgConf:R,showAltText:M,blurComplete:D,defaultLoader:L}=t,A=R||o.imageConfigDefault;if("allSizes"in A)s=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);s={...A,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=I.loader||L;delete I.loader,delete I.srcSet;let B="__next_img_default"in F;if(B){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(z){"fill"===z&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!u&&(u=t)}let G="",T=i(b),V=i(x);if("object"==typeof(r=c)&&(a(r)||void 0!==r.src)){let e=a(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,N=N||e.blurDataURL,G=e.src,!v){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,W=!1),s.unoptimized&&(f=!0),B&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let U=i(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:P}:{},M?{}:{color:"transparent"},w),J=D||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:T,heightInt:V,blurWidth:l,blurHeight:d,blurDataURL:N||"",objectFit:q.objectFit})+'")':'url("'+k+'")',X=J?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Y=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:a,sizes:i,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,i),c=l.length-1;return{sizes:i||"w"!==d?i:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:s({config:t,src:r,quality:a,width:l[c]})}}({config:s,src:c,unoptimized:f,width:T,quality:U,sizes:u,loader:F});return{props:{...I,loading:W?"lazy":p,fetchPriority:S,width:T,height:V,decoding:"async",className:g,style:{...q,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:y||Y.src},meta:{unoptimized:f,priority:m,placeholder:k,fill:v}}}},188:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:a,objectFit:i}=e,s=n?40*n:t,l=o?40*o:r,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2423:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return s}});let n=r(2430),o=r(5318),a=r(1511),i=n._(r(9627));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/website/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},9627:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8781:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(2676),o=r(6349),a=r.n(o),i=r(1441),s=r.n(i);function l(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(a().className),children:[(0,n.jsxs)("div",{className:"z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,n.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by editing\xa0",(0,n.jsx)("code",{className:"font-mono font-bold",children:"src/pages/index.tsx"})]}),(0,n.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,n.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,n.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,n.jsx)(s(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,n.jsxs)("div",{className:"mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,n.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,n.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50 text-balance",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},6349:function(e){e.exports={style:{fontFamily:"'__Inter_24d9c7', '__Inter_Fallback_24d9c7'",fontStyle:"normal"},className:"__className_24d9c7"}},1441:function(e,t,r){e.exports=r(2423)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1512)}),_N_E=e.O()}]);