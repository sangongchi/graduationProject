(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78177bb4"],{"159b":function(t,e,i){var n=i("da84"),o=i("fdbc"),r=i("17c2"),a=i("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==r)try{a(u,"forEach",r)}catch(f){u.forEach=r}}},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,o=i("a640"),r=i("ae40"),a=o("forEach"),c=r("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,i){var n=i("d039"),o=i("b622"),r=i("2d00"),a=o("species");t.exports=function(t){return r>=51||!n((function(){var e=[],i=e.constructor={};return i[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,i){"use strict";var n=i("23e7"),o=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5694:function(t,e,i){},6422:function(t,e,i){"use strict";var n=i("5694"),o=i.n(n);o.a},"65f0":function(t,e,i){var n=i("861d"),o=i("e8b5"),r=i("b622"),a=r("species");t.exports=function(t,e){var i;return o(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[a],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"767c":function(t,e,i){"use strict";var n=i("d6a0"),o=i.n(n);o.a},"7fea":function(t,e,i){"use strict";var n=i("b721"),o=i.n(n);o.a},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var n=i("83ab"),o=i("d039"),r=i("5135"),a=Object.defineProperty,c=function(t){throw t};t.exports=function(t,e){e||(e={});var i=[][t],s=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return!!i&&!o((function(){if(s&&!n)return!0;var t={length:-1},e=function(e){s?a(t,e,{enumerable:!0,get:c}):t[e]=1};e(1),e(2147483646),e(4294967294),i.call(t,u,f)}))}},b721:function(t,e,i){},b727:function(t,e,i){var n=i("0366"),o=i("44ad"),r=i("7b0b"),a=i("50c4"),c=i("65f0"),s=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,m,p,h){for(var L,S,b=r(v),g=o(b),y=n(m,p,3),C=a(g.length),E=0,V=h||c,T=e?V(v,C):i?V(v,0):void 0;C>E;E++)if((d||E in g)&&(L=g[E],S=y(L,E,b),t))if(e)T[E]=S;else if(S)switch(t){case 3:return!0;case 5:return L;case 6:return E;case 2:s.call(T,L)}else if(f)return!1;return l?-1:u||f?f:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d521:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-page"},[i("div",{staticClass:"movie-container"},[i("VideoComponent",{attrs:{movieList:t.movieList}})],1)])},o=[],r=(i("d81d"),i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Image-container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"video-body"},t._l(t.movieList,(function(e){return i("div",{key:e.id,staticClass:"video-option",on:{mouseenter:function(i){return t.videController(e.id,1)},mouseleave:function(i){return t.videController(e.id,2)}}},[i("video",{staticClass:"video-js",attrs:{id:"myVideo"+e.id,controls:""}},[i("source",{attrs:{src:e.movieSrc,type:"video/mp4"}})])])})),0)])])}),a=[],c=(i("4160"),i("159b"),{name:"ImageContainer",data:function(){return{seletOptionArr:[{name:"精选作品",value:"0"},{name:"个人设计",value:"1"},{name:"未知名称",value:"2"},{name:"未知名字",value:"3"}],movieList:[]}},methods:{videoInit:function(){var t=this;this.movieList.forEach((function(e,i){t.$video("myVideo"+e.id,{controls:!0,autoplay:!1,preload:"auto"})}))},videController:function(t,e){},getVideoData:function(){var t=this;this.$post("/seeFile/VideoData",{}).then((function(e){t.movieList=[];var i=e.fileArr;i.map((function(e,i){var n={};n.movieTitle=e.fileName,n.movieDesr=e.fileDesr,n.movieSrc=e.fileSrc,n.id=(i+1).toString(),t.movieList.push(n)})),t.$nextTick((function(){t.videoInit()}))})).catch((function(t){console.log("数据请求错误"+t)}))}},mounted:function(){this.getVideoData()}}),s=c,u=(i("767c"),i("6422"),i("2877")),f=Object(u["a"])(s,r,a,!1,null,"a2f682e4",null),l=f.exports,d={name:"Movie",data:function(){return{movieList:[]}},components:{VideoComponent:l},methods:{getVideoData:function(){var t=this;this.$post("/seeFile/VideoData",{}).then((function(e){t.movieList=[];var i=e.fileArr;i.map((function(e,i){var n={};n.movieTitle=e.fileName,n.movieDesr=e.fileDesr,n.movieSrc=e.fileSrc,n.id=(i+1).toString(),t.movieList.push(n)}))})).catch((function(t){console.log("数据请求错误"+t)}))}},created:function(){this.getVideoData()}},v=d,m=(i("7fea"),Object(u["a"])(v,n,o,!1,null,"4feec019",null));e["default"]=m.exports},d6a0:function(t,e,i){},d81d:function(t,e,i){"use strict";var n=i("23e7"),o=i("b727").map,r=i("1dde"),a=i("ae40"),c=r("map"),s=a("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,i){var n=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-78177bb4.9621c51c.js.map