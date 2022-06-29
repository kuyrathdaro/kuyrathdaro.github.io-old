(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4651:function(e,n,t){"use strict";t.d(n,{Ee:function(){return h}});var a=t(2846),r=t(5031),s=t(7294),i=t(4697);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var o=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=s.forwardRef((function(e,n){var t=e.htmlWidth,a=e.htmlHeight,r=e.alt,i=l(e,o);return s.createElement("img",c({width:t,height:a,ref:n,alt:r},i))})),h=(0,a.Gp)((function(e,n){var t=e.fallbackSrc,o=e.fallback,h=e.src,x=e.srcSet,m=e.align,f=e.fit,p=e.loading,g=e.ignoreFallback,j=e.crossOrigin,b=l(e,u),y=null!=p||g||void 0===t&&void 0===o,N=function(e){var n=e.loading,t=e.src,a=e.srcSet,r=e.onLoad,c=e.onError,l=e.crossOrigin,o=e.sizes,u=e.ignoreFallback,d=(0,s.useState)("pending"),h=d[0],x=d[1];(0,s.useEffect)((function(){x(t?"loading":"pending")}),[t]);var m=(0,s.useRef)(),f=(0,s.useCallback)((function(){if(t){p();var e=new Image;e.src=t,l&&(e.crossOrigin=l),a&&(e.srcset=a),o&&(e.sizes=o),n&&(e.loading=n),e.onload=function(e){p(),x("loaded"),null==r||r(e)},e.onerror=function(e){p(),x("failed"),null==c||c(e)},m.current=e}}),[t,l,a,o,r,c,n]),p=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,i.a)((function(){if(!u)return"loading"===h&&f(),function(){p()}}),[h,f,u]),u?"loaded":h}(c({},e,{ignoreFallback:y})),_=c({ref:n,objectFit:f,objectPosition:m},y?b:(0,r.CE)(b,["onError","onLoad"]));return"loaded"!==N?o||s.createElement(a.m$.img,c({as:d,className:"chakra-image__placeholder",src:t},_)):s.createElement(a.m$.img,c({as:d,src:h,srcSet:x,crossOrigin:j,loading:p,className:"chakra-image"},_))}));r.Ts&&(h.displayName="Image")},5809:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(6563)}])},6563:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var a=t(5893),r=t(3338),s=t(8527),i=t(7294),c=t(9473),l=t(519),o=JSON.parse('[{"title":"Introduction to Capture the Flag (CTF)","thumbnail":"https://secudemy.com/wp-content/uploads/2020/04/Screenshot-2020-04-05-21.04.26-780x470.png","href":"https://secudemy.com/cycam1-ctf/"},{"title":"Burpsuite 101","thumbnail":"https://secudemy.com/wp-content/uploads/2020/06/cover-cycam08-780x470.jpg","href":"https://secudemy.com/cyber-youth-cambodia-08-burpsuite-101/"}]'),u=t(4651),d=function(e){var n=e.title,t=e.thumbnail,r=e.href,i=e.children;return(0,a.jsx)(s.xu,{w:"100%",textAlign:"center",children:(0,a.jsxs)(s.fG,{cursor:"pointer",children:[(0,a.jsx)(u.Ee,{src:t,alt:n,borderRadius:"12px",placeholder:"blur",loading:"lazy"}),(0,a.jsx)(s.AB,{href:r,target:"_blank",children:(0,a.jsx)(s.xv,{mt:2,children:n})}),(0,a.jsx)(s.xv,{fontSize:14,children:i})]})})},h=t(5556),x=t.n(h),m=function(){return(0,a.jsxs)("h1",{className:x().heading,children:[(0,a.jsx)("span",{className:x().text,children:"There\xa0"}),(0,a.jsx)("span",{className:x().text,children:"are\xa0"}),(0,a.jsx)("span",{className:x().text,children:"no\xa0"}),(0,a.jsx)("span",{className:x().text,children:"limits\xa0"}),(0,a.jsx)("span",{className:x().text,children:"to\xa0"}),(0,a.jsx)("span",{className:x().text,children:"what\xa0"}),(0,a.jsx)("span",{className:x().text,children:"you\xa0"}),(0,a.jsx)("span",{className:x().text,children:"can\xa0"}),(0,a.jsx)("span",{className:x().text,children:"accomplish,\xa0"}),(0,a.jsx)("span",{className:x().text,children:"except\xa0"}),(0,a.jsx)("span",{className:x().text,children:"the\xa0"}),(0,a.jsx)("span",{className:x().text,children:"limits\xa0"}),(0,a.jsx)("span",{className:x().text,children:"you\xa0"}),(0,a.jsx)("span",{className:x().text,children:"place\xa0"}),(0,a.jsx)("span",{className:x().text,children:"on\xa0"}),(0,a.jsx)("span",{className:x().text,children:"your\xa0"}),(0,a.jsx)("span",{className:x().text,children:"own\xa0"}),(0,a.jsx)("span",{className:x().text,children:"thinking.\xa0"})]})},f=function(){var e=(0,c.I0)();return(0,i.useEffect)((function(){e((0,l.yx)(".blog()"))})),(0,a.jsx)(r.Z,{title:"daro.blog",children:(0,a.jsxs)(s.W2,{maxWidth:"container.md",children:[(0,a.jsx)(s.M5,{mb:10,mt:10,children:(0,a.jsx)(s.X6,{children:"Welcome to my blog!"})}),(0,a.jsx)(s.M5,{mb:10,children:(0,a.jsx)(m,{})}),(0,a.jsx)(s.MI,{columns:[1,2,3],spacing:10,children:o.map((function(e,n){return(0,a.jsx)(d,{title:e.title,href:e.href,thumbnail:e.thumbnail},n)}))})]})})}},3338:function(e,n,t){"use strict";var a=t(5893),r=t(8150),s=t(9008),i={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};n.Z=function(e){var n=e.children,t=e.title;return(0,a.jsxs)(r.E.div,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},children:[t&&(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:t})}),n]})}},5556:function(e){e.exports={heading:"styles_heading__kVLbT",scale:"styles_scale__d8JeN",text:"styles_text__LF1BK","fade-in":"styles_fade-in__Jm0K6"}}},function(e){e.O(0,[774,888,179],(function(){return n=5809,e(e.s=n);var n}));var n=e.O();_N_E=n}]);