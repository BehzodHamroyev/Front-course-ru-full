"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[947],{1947:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(5893),o=t(4611),a=t(2327),i=t(9161),c=t(6925),l=t(9704),u=t(7294),s=t(4809),d=t(1150),f=t(5461),v=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},p=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},h=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},y=function(e){var n;return null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error},m=t(6403),b=t(3372),g=t(7665),x=(0,m.hg)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,a=function(){var t,r,o,a,i;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(c){switch(c.label){case 0:t=n.extra,r=n.dispatch,o=n.rejectWithValue,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,t.api.post("/login",e)];case 2:if(!(a=c.sent()).data)throw new Error;return localStorage.setItem(g.z,JSON.stringify(a.data)),r(b.hI.setAuthData(a.data)),[2,a.data];case 3:return i=c.sent(),console.log(i),[2,o("error")];case 4:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{l(a.next(e))}catch(e){n(e)}}function c(e){try{l(a.throw(e))}catch(e){n(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}l((a=a.apply(t,r||[])).next())}));var t,r,o,a})),w=(0,m.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(x.fulfilled,(function(e){e.isLoading=!1})).addCase(x.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),j=w.actions,O=w.reducer;const N="PQPa1eB5";var k=function(){return k=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},k.apply(this,arguments)},P={loginForm:O};const C=(0,u.memo)((function(e){var n=e.className,t=e.onSuccess,m=(0,a.$)().t,b=(0,f.T)(),g=(0,l.v9)(v),w=(0,l.v9)(p),O=(0,l.v9)(h),C=(0,l.v9)(y),S=(0,u.useCallback)((function(e){b(j.setUsername(e))}),[b]),I=(0,u.useCallback)((function(e){b(j.setPassword(e))}),[b]),E=(0,u.useCallback)((function(){return e=void 0,n=void 0,o=function(){return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(e){switch(e.label){case 0:return[4,b(x({username:g,password:w}))];case 1:return"fulfilled"===e.sent().meta.requestStatus&&t(),[2]}}))},new((r=void 0)||(r=Promise))((function(t,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function c(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}l((o=o.apply(e,n||[])).next())}));var e,n,r,o}),[t,b,w,g]);return(0,r.jsx)(d.W,k({removeAfterUnmount:!0,reducers:P},{children:(0,r.jsxs)("div",k({className:(0,o.A)("xYNEfcE9",{},[n])},{children:[(0,r.jsx)(s.x,{title:m("Форма авторизации")},void 0),C&&(0,r.jsx)(s.x,{text:m("Вы ввели неверный логин или пароль"),theme:s.l.ERROR},void 0),(0,r.jsx)(c.I,{autofocus:!0,type:"text",className:N,placeholder:m("Введите username"),onChange:S,value:g},void 0),(0,r.jsx)(c.I,{type:"text",className:N,placeholder:m("Введите пароль"),onChange:I,value:w},void 0),(0,r.jsx)(i.zx,k({theme:i.bn.OUTLINE,className:"Ok_5amJo",onClick:E,disabled:O},{children:m("Войти")}),void 0)]}),void 0)}),void 0)}))},1150:(e,n,t)=>{t.d(n,{W:()=>i});var r=t(5893),o=t(7294),a=t(9704),i=function(e){var n=e.children,t=e.reducers,i=e.removeAfterUnmount,c=(0,a.oR)(),l=(0,a.I0)();return(0,o.useEffect)((function(){return Object.entries(t).forEach((function(e){var n=e[0],t=e[1];c.reducerManager.add(n,t),l({type:"@INIT ".concat(n," reducer")})})),function(){i&&Object.entries(t).forEach((function(e){var n=e[0];e[1],c.reducerManager.remove(n),l({type:"@DESTROY ".concat(n," reducer")})}))}}),[]),(0,r.jsx)(r.Fragment,{children:n},void 0)}},6925:(e,n,t)=>{t.d(n,{I:()=>c});var r=t(5893),o=t(4611),a=t(7294);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=(0,a.memo)((function(e){var n=e.className,t=e.value,c=e.onChange,l=e.type,u=void 0===l?"text":l,s=e.placeholder,d=e.autofocus,f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["className","value","onChange","type","placeholder","autofocus"]),v=(0,a.useRef)(null),p=(0,a.useState)(!1),h=p[0],y=p[1],m=(0,a.useState)(0),b=m[0],g=m[1];return(0,a.useEffect)((function(){var e;d&&(y(!0),null===(e=v.current)||void 0===e||e.focus())}),[d]),(0,r.jsxs)("div",i({className:(0,o.A)("LuFDUWoP",{},[n])},{children:[s&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(s,">")}),void 0),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:v,type:u,value:t,onChange:function(e){null==c||c(e.target.value),g(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSelect:function(e){var n;g((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},f),void 0),h&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*b,"px")}},void 0)]}),void 0)]}),void 0)}))},4809:(e,n,t)=>{t.d(n,{x:()=>u,l:()=>c});var r=t(5893),o=t(4611),a=t(7294);const i={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var c,l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(c||(c={}));var u=(0,a.memo)((function(e){var n,t=e.className,a=e.text,u=e.title,s=e.theme,d=void 0===s?c.PRIMARY:s;return(0,r.jsxs)("div",l({className:(0,o.A)(i.Text,(n={},n[i[d]]=!0,n),[t])},{children:[u&&(0,r.jsx)("p",l({className:i.title},{children:u}),void 0),a&&(0,r.jsx)("p",l({className:i.text},{children:a}),void 0)]}),void 0)}))},5461:(e,n,t)=>{t.d(n,{T:()=>o});var r=t(9704),o=function(){return(0,r.I0)()}}}]);