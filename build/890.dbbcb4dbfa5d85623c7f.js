"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[890],{8890:(e,r,n)=>{n.r(r),n.d(r,{default:()=>P});var t=n(5893),o=n(4611),a=n(2327),i=n(1150),c=n(6403),l=(0,c.hg)("profile/fetchProfileData",(function(e,r){return n=void 0,t=void 0,a=function(){var e,n,t;return function(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],t=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(o){switch(o.label){case 0:e=r.extra,n=r.rejectWithValue,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,e.api.get("/profile")];case 2:return[2,o.sent().data];case 3:return t=o.sent(),console.log(t),[2,n("error")];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,c)}l((a=a.apply(n,t||[])).next())}));var n,t,o,a})),u=(0,c.oM)({name:"profile",initialState:{readonly:!0,isLoading:!1,error:void 0,data:void 0},reducers:{},extraReducers:function(e){e.addCase(l.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(l.fulfilled,(function(e,r){e.isLoading=!1,e.data=r.payload})).addCase(l.rejected,(function(e,r){e.isLoading=!1,e.error=r.payload}))}}),s=(u.actions,u.reducer),d=n(9704),f=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.data},v=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.isLoading},p=function(e){var r;return null===(r=e.profile)||void 0===r?void 0:r.error},h=n(4809),y=n(9161),m=n(6925);const j="ZTyX8_n9";var x=function(){return x=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},x.apply(this,arguments)},b=function(e){var r=e.className,n=(0,a.$)("profile").t,i=(0,d.v9)(f);return(0,d.v9)(v),(0,d.v9)(p),(0,t.jsxs)("div",x({className:(0,o.A)("wW9jgKKD",{},[r])},{children:[(0,t.jsxs)("div",x({className:"nP7J5SWY"},{children:[(0,t.jsx)(h.x,{title:n("Профиль")},void 0),(0,t.jsx)(y.zx,x({className:"LGXZAu9G",theme:y.bn.OUTLINE},{children:n("Редактировать")}),void 0)]}),void 0),(0,t.jsxs)("div",x({className:"mem1neCT"},{children:[(0,t.jsx)(m.I,{value:null==i?void 0:i.first,placeholder:n("Ваше имя"),className:j},void 0),(0,t.jsx)(m.I,{value:null==i?void 0:i.lastname,placeholder:n("Ваша фамилия"),className:j},void 0)]}),void 0)]}),void 0)},g=n(7294),O=n(5461),N=function(){return N=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},N.apply(this,arguments)},w={profile:s};const P=function(e){var r=e.className,n=((0,a.$)().t,(0,O.T)());return(0,g.useEffect)((function(){n(l())}),[n]),(0,t.jsx)(i.W,N({reducers:w,removeAfterUnmount:!0},{children:(0,t.jsx)("div",N({className:(0,o.A)("",{},[r])},{children:(0,t.jsx)(b,{},void 0)}),void 0)}),void 0)}},1150:(e,r,n)=>{n.d(r,{W:()=>i});var t=n(5893),o=n(7294),a=n(9704),i=function(e){var r=e.children,n=e.reducers,i=e.removeAfterUnmount,c=(0,a.oR)(),l=(0,a.I0)();return(0,o.useEffect)((function(){return Object.entries(n).forEach((function(e){var r=e[0],n=e[1];c.reducerManager.add(r,n),l({type:"@INIT ".concat(r," reducer")})})),function(){i&&Object.entries(n).forEach((function(e){var r=e[0];e[1],c.reducerManager.remove(r),l({type:"@DESTROY ".concat(r," reducer")})}))}}),[]),(0,t.jsx)(t.Fragment,{children:r},void 0)}},6925:(e,r,n)=>{n.d(r,{I:()=>c});var t=n(5893),o=n(4611),a=n(7294);var i=function(){return i=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},i.apply(this,arguments)},c=(0,a.memo)((function(e){var r=e.className,n=e.value,c=e.onChange,l=e.type,u=void 0===l?"text":l,s=e.placeholder,d=e.autofocus,f=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n}(e,["className","value","onChange","type","placeholder","autofocus"]),v=(0,a.useRef)(null),p=(0,a.useState)(!1),h=p[0],y=p[1],m=(0,a.useState)(0),j=m[0],x=m[1];return(0,a.useEffect)((function(){var e;d&&(y(!0),null===(e=v.current)||void 0===e||e.focus())}),[d]),(0,t.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[r])},{children:[s&&(0,t.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(s,">")}),void 0),(0,t.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,t.jsx)("input",i({ref:v,type:u,value:n,onChange:function(e){null==c||c(e.target.value),x(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var r;x((null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.selectionStart)||0)}},f),void 0),h&&(0,t.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*j,"px")}},void 0)]}),void 0)]}),void 0)}))},4809:(e,r,n)=>{n.d(r,{x:()=>u,l:()=>c});var t=n(5893),o=n(4611),a=n(7294);const i={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var c,l=function(){return l=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},l.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(c||(c={}));var u=(0,a.memo)((function(e){var r,n=e.className,a=e.text,u=e.title,s=e.theme,d=void 0===s?c.PRIMARY:s;return(0,t.jsxs)("div",l({className:(0,o.A)(i.Text,(r={},r[i[d]]=!0,r),[n])},{children:[u&&(0,t.jsx)("p",l({className:i.title},{children:u}),void 0),a&&(0,t.jsx)("p",l({className:i.text},{children:a}),void 0)]}),void 0)}))},5461:(e,r,n)=>{n.d(r,{T:()=>o});var t=n(9704),o=function(){return(0,t.I0)()}}}]);