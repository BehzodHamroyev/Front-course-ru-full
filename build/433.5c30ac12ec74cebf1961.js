"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[433],{1781:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var r=n(5893),a=n(4611),i=n(5443),o=n(7294),s=n(4790),c=n(9250),l=n(4809);const u={comment:"zo5NFi5H"};var d=n(71),f=n(1138),m=n(3048),h=n(8046);const v="xIHByGcu",p="dsH_3Oqu",x="Ks7Kyp_K",b="dw82WMzO";var y=(0,o.memo)((function(e){var t=e.className,n=e.comment;return e.isLoading?(0,r.jsxs)("div",{className:(0,a.A)(v,{},[t,"V0iZ1Un3"]),children:[(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)(f.O,{width:30,height:30,border:"50%"}),(0,r.jsx)(f.O,{height:16,width:100,className:b})]}),(0,r.jsx)(f.O,{className:x,width:"100%",height:50})]}):n?(0,r.jsxs)("div",{className:(0,a.A)(v,{},[t]),children:[(0,r.jsxs)(m.F,{to:"".concat(h.h3.profile).concat(n.user.id),className:p,children:[n.user.avatar?(0,r.jsx)(d.q,{size:30,src:n.user.avatar}):null,(0,r.jsx)(l.xv,{className:b,title:n.user.username})]}),(0,r.jsx)(l.xv,{className:x,text:n.text})]}):null})),g=(0,o.memo)((function(e){var t=e.className,n=e.isLoading,o=e.comments,s=(0,i.$)().t;return n?(0,r.jsxs)("div",{className:(0,a.A)(u.CommentList,{},[t]),children:[(0,r.jsx)(y,{isLoading:!0}),(0,r.jsx)(y,{isLoading:!0}),(0,r.jsx)(y,{isLoading:!0})]}):(0,r.jsx)("div",{className:(0,a.A)(u.CommentList,{},[t]),children:(null==o?void 0:o.length)?o.map((function(e){return(0,r.jsx)(y,{isLoading:n,className:u.comment,comment:e},e.id)})):(0,r.jsx)(l.xv,{text:s("Комментарии отсутствуют")})})})),w=n(1150),j=n(7007),N=n(2276),L=(0,o.lazy)((function(){return new Promise((function(e){setTimeout((function(){return e(n.e(102).then(n.bind(n,102)))}),1500)}))})),k=n(314),S=n(7168),C=n(3574),A=n(3101),D=(0,S.hg)("articleDetails/fetchCommentsByArticleId",(function(e,t){return n=void 0,r=void 0,i=function(){var n,r,a;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(i){switch(i.label){case 0:if(n=t.extra,r=t.rejectWithValue,!e)return[2,r("error")];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,n.api.get("/comments",{params:{articleId:e,_expand:"user"}})];case 2:if(!(a=i.sent()).data)throw new Error;return[2,a.data];case 3:return i.sent(),[2,r("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}c((i=i.apply(n,r||[])).next())}));var n,r,a,i})),I=(0,S.hg)("articleDetails/addCommentForArticle",(function(e,t){return n=void 0,r=void 0,i=function(){var n,r,a,i,o,s,c;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(l){switch(l.label){case 0:if(n=t.extra,r=t.dispatch,a=t.rejectWithValue,i=t.getState,o=(0,C.m5)(i()),s=(0,A.wq)(i()),!o||!e||!s)return[2,a("no data")];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,n.api.post("/comments",{articleId:s.id,userId:o.id,text:e})];case 2:if(!(c=l.sent()).data)throw new Error;return r(D(s.id)),[2,c.data];case 3:return l.sent(),[2,a("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}c((i=i.apply(n,r||[])).next())}));var n,r,a,i}));const P="adu8fSDx",E="foyEsCeG";var z=(0,S.HF)({selectId:function(e){return e.id}}),O=z.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||z.getInitialState()})),T=(0,S.oM)({name:"articleDetailsCommentsSlice",initialState:z.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:function(e){e.addCase(D.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(D.fulfilled,(function(e,t){e.isLoading=!1,z.setAll(e,t.payload)})).addCase(D.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,_=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.comments)||void 0===n?void 0:n.isLoading},H=(0,S.hg)("articleDetailsPage/fetchArticleRecommendations",(function(e,t){return n=void 0,r=void 0,i=function(){var e,n,r;return function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(a){switch(a.label){case 0:e=t.extra,n=t.rejectWithValue,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.api.get("/articles",{params:{_limit:4}})];case 2:if(!(r=a.sent()).data)throw new Error;return[2,r.data];case 3:return a.sent(),[2,n("error")];case 4:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{c(i.next(e))}catch(e){t(e)}}function s(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}c((i=i.apply(n,r||[])).next())}));var n,r,a,i})),q=(0,S.HF)({selectId:function(e){return e.id}}),F=q.getSelectors((function(e){var t;return(null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||q.getInitialState()})),U=(0,S.oM)({name:"articleDetailsPageRecommendationsSlice",initialState:q.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:function(e){e.addCase(H.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(H.fulfilled,(function(e,t){e.isLoading=!1,q.setAll(e,t.payload)})).addCase(H.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload}))}}).reducer,G=function(e){var t,n;return null===(n=null===(t=e.articleDetailsPage)||void 0===t?void 0:t.recommendations)||void 0===n?void 0:n.isLoading},W=(0,n(5173).UY)({recommendations:U,comments:T}),R=n(9161),V=(0,n(573).P1)(s.wq,C.m5,(function(e,t){return!(!e||!t)&&e.user.id===t.id}));var K=(0,o.memo)((function(e){var t=e.className,n=(0,i.$)().t,s=(0,c.s0)(),l=(0,j.v9)(V),u=(0,j.v9)(A.wq),d=(0,o.useCallback)((function(){s(h.h3.articles)}),[s]),f=(0,o.useCallback)((function(){s("".concat(h.h3.article_details).concat(null==u?void 0:u.id,"/edit"))}),[null==u?void 0:u.id,s]);return(0,r.jsxs)("div",{className:(0,a.A)("PF3DYqSS",{},[t]),children:[(0,r.jsx)(R.zx,{theme:R.bn.OUTLINE,onClick:d,children:n("Назад к списку")}),l&&(0,r.jsx)(R.zx,{className:"XdnP3e6a",theme:R.bn.OUTLINE,onClick:f,children:n("Редактировать")})]})})),M={articleDetailsPage:W},$=function(e){var t=e.className,n=(0,i.$)("article-details").t,u=(0,c.UO)().id,d=(0,j.I0)(),f=(0,j.v9)(O.selectAll),m=(0,j.v9)(F.selectAll),h=(0,j.v9)(_),v=(0,j.v9)(G),p=(0,o.useCallback)((function(e){d(I(e))}),[d]);return(0,N.Q)((function(){d(D(u)),d(H())})),u?(0,r.jsx)(w.W,{reducers:M,removeAfterUnmount:!0,children:(0,r.jsxs)(k.T,{className:(0,a.A)(P,{},[t]),children:[(0,r.jsx)(K,{}),(0,r.jsx)(s.D0,{id:u}),(0,r.jsx)(l.xv,{size:l.yH.L,className:E,title:n("Рекомендуем")}),(0,r.jsx)(s.wD,{articles:m,isLoading:v,className:"NwQlSikL",target:"_blank"}),(0,r.jsx)(l.xv,{size:l.yH.L,className:E,title:n("Комментарии")}),(0,r.jsx)(L,{onSendComment:p}),(0,r.jsx)(g,{isLoading:h,comments:f})]})}):(0,r.jsx)(k.T,{className:(0,a.A)(P,{},[t]),children:n("Статья не найдена")})};const B=(0,o.memo)($)}}]);