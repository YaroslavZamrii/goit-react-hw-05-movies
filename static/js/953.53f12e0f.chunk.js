"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953,854],{854:function(e,n,t){t.r(n);var r=t(691),a=t(184);n.default=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"0 auto",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},953:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(861),a=t(439),s=t(757),i=t.n(s),c=t(854),o=t(791),u=t(689),l=t(87),f="MovieDetals_container__4Xarn",p="MovieDetals_poster__8I2wR",d="MovieDetals_information__2kybG",v="MovieDetals_cast-reviews-link__Gbg+s",h="MovieDetals_additional-info__wH98L",g="MovieDetals_section__pTvmd",m=t(184),x=function(e){var n,t,r=e.filmsIdDetails,a=(0,u.TH)(),s=(0,o.useRef)(null!==(n=null===(t=a.state)||void 0===t?void 0:t.form)&&void 0!==n?n:"/"),i=r.original_title,x=r.poster_path,w=r.vote_average,_=r.overview,j=r.genres,k=r.release_date,b="https://image.tmdb.org/t/p/w500".concat(x);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.rU,{to:s.current,className:v,children:"Go Back"}),(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("div",{className:p,children:(0,m.jsx)("img",{src:x?b:"https://www.tgv.com.my/assets/images/404/movie-poster.jpg",alt:i})}),(0,m.jsxs)("div",{className:d,children:[(0,m.jsxs)("h1",{children:[i," (",null===k||void 0===k?void 0:k.split("-")[0],")"]}),(0,m.jsxs)("p",{children:["Rating: ",w]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:_}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{children:j&&j.map((function(e){return(0,m.jsx)("li",{children:e.name},e.id)}))}),(0,m.jsxs)("section",{className:g,children:[(0,m.jsx)("p",{children:"Addtinional information"}),(0,m.jsxs)("ul",{className:h,children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",className:v,children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",className:v,children:"Reviews"})})]}),(0,m.jsx)(o.Suspense,{fallback:(0,m.jsx)(c.default,{}),children:(0,m.jsx)(u.j3,{})})]})]})]})]})},w=t(596),_=t(390),j={position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},k=function(){var e=(0,u.UO)().filmId,n=(0,o.useState)([]),t=(0,a.Z)(n,2),s=t[0],l=t[1],f=(0,o.useState)(null),p=(0,a.Z)(f,2),d=p[0],v=p[1],h=(0,o.useState)(!1),g=(0,a.Z)(h,2),k=g[0],b=g[1];return(0,o.useEffect)((function(){if(e){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,_.g2)(e);case 4:t=n.sent,l(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v(n.t0.message);case 11:return n.prev=11,b(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[e]),(0,o.useEffect)((function(){w.Am.error(d,j)}),[d]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{filmsIdDetails:s}),k&&(0,m.jsx)(c.default,{})]})}},390:function(e,n,t){t.d(n,{Df:function(){return u},g2:function(){return f},kh:function(){return d},n4:function(){return l},v1:function(){return p}});var r=t(861),a=t(757),s=t.n(a),i=t(243),c="https://api.themoviedb.org/3",o="9768baa5071faaf4c13ac6e91d2a589d",u=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/trending/movie/day?language=en-US&api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/search/movie?query=").concat(n,"&include_adult=false&language=en-US&api_key=").concat(o,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(n,"?language=en-US&api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(n,"/credits?language=en-US&api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=953.53f12e0f.chunk.js.map