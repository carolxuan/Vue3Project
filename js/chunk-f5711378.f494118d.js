(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5711378"],{"057f":function(t,e,r){var c=r("fc6a"),n=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):n(c(t))}},"4de4":function(t,e,r){"use strict";var c=r("23e7"),n=r("b727").filter,i=r("1dde"),o=i("filter");c({target:"Array",proto:!0,forced:!o},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5895:function(t,e,r){"use strict";r.r(e);r("b0c0");var c=r("7a23"),n=Object(c["g"])('<ul class="step-list wrap justify-content-center mb-8"><li class="text-center"><p class="mb-2">Step.01</p><h4><i class="bi bi-cart-fill"></i> 購物明細</h4></li><li class="text-center"><p class="mb-2">Step.02</p><h4><i class="bi bi-credit-card"></i> 訂單資訊</h4></li><li class="text-center active" aria-current="true"><p class="mb-2">Step.03</p><h4><i class="bi bi-check-circle"></i> 最後確認</h4></li></ul>',1),i={class:"checkout mb-6"},o={class:"table align-middle mb-5"},s=Object(c["i"])("thead",null,[Object(c["i"])("th",{width:"30%"},"品名"),Object(c["i"])("th",{width:"15%"},"數量"),Object(c["i"])("th",{width:"25%",class:"text-end"},"單價"),Object(c["i"])("th",{width:"25%",class:"text-end"},"小計")],-1),a={class:"text-end"},u={class:"text-end"},l=Object(c["i"])("td",null,null,-1),b=Object(c["i"])("td",{colspan:"2",class:"text-end"},"總金額",-1),f={class:"text-end"},d={class:"card-border mb-5"},O=Object(c["i"])("div",{class:"card-border-title mb-3"},[Object(c["i"])("h3",{class:"h5"},"訂購人資訊")],-1),p=Object(c["i"])("td",{class:"td-css"},"姓名",-1),j=Object(c["i"])("td",{class:"td-css"},"Email",-1),h=Object(c["i"])("td",{class:"td-css"},"聯絡電話",-1),y=Object(c["i"])("td",{class:"td-css"},"地址",-1),g=Object(c["i"])("td",{class:"td-css"},"備註",-1),m={key:0},v={key:1},w=Object(c["i"])("td",{class:"td-css"},"訂單狀態",-1),S={key:0},P={key:1,class:"text-danger"},x={key:0,class:"text-end"},k=Object(c["i"])("button",{class:"l-btn btn--primary btn--lg"},[Object(c["h"])("確認，送出訂單 "),Object(c["i"])("i",{class:"bi bi-chevron-right"})],-1);function G(t,e,r,G,$,E){return Object(c["w"])(),Object(c["e"])(c["a"],null,[n,Object(c["i"])("section",i,[Object(c["i"])("form",{onSubmit:e[1]||(e[1]=Object(c["R"])((function(){return E.payOrder&&E.payOrder.apply(E,arguments)}),["prevent"]))},[Object(c["i"])("table",o,[s,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["B"])($.order.products,(function(e){return Object(c["w"])(),Object(c["e"])("tr",{key:e.id},[Object(c["i"])("td",null,Object(c["G"])(e.product.title),1),Object(c["i"])("td",null,Object(c["G"])(e.qty)+" "+Object(c["G"])(e.product.unit),1),Object(c["i"])("td",a,"NT $"+Object(c["G"])(t.$filters.currency(e.product.price)),1),Object(c["i"])("td",u,"NT $"+Object(c["G"])(t.$filters.currency(e.product.price*e.qty)),1)])})),128))]),Object(c["i"])("tfoot",null,[Object(c["i"])("tr",null,[l,b,Object(c["i"])("td",f,"NT $"+Object(c["G"])(t.$filters.currency($.order.total)),1)])])]),Object(c["i"])("div",d,[O,Object(c["i"])("table",null,[Object(c["i"])("tbody",null,[Object(c["i"])("tr",null,[p,Object(c["i"])("td",null,Object(c["G"])($.order.user.name),1)]),Object(c["i"])("tr",null,[j,Object(c["i"])("td",null,Object(c["G"])($.order.user.email),1)]),Object(c["i"])("tr",null,[h,Object(c["i"])("td",null,Object(c["G"])($.order.user.tel),1)]),Object(c["i"])("tr",null,[y,Object(c["i"])("td",null,Object(c["G"])($.order.user.address),1)]),Object(c["i"])("tr",null,[g,$.order.message?(Object(c["w"])(),Object(c["e"])("td",m,Object(c["G"])($.order.message),1)):(Object(c["w"])(),Object(c["e"])("td",v,"無"))]),Object(c["i"])("tr",null,[w,Object(c["i"])("td",null,[$.order.is_paid?(Object(c["w"])(),Object(c["e"])("span",P,"訂單成立")):(Object(c["w"])(),Object(c["e"])("span",S,"尚未完成訂單"))])])])])]),!1===$.order.is_paid?(Object(c["w"])(),Object(c["e"])("div",x,[k])):Object(c["f"])("",!0)],32)])],64)}var $=r("5530"),E=(r("99af"),r("5502")),N={data:function(){return{order:{user:{}},orderId:""}},methods:Object($["a"])({getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order,history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(t){history.pushState(null,null,document.URL)}),!1))}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){e.data.success&&(t.getOrder(),t.$swal({title:"感謝您的訂購",text:"即將回到首頁",icon:"success",toast:!1,position:"center",timerProgressBar:!0,timer:2e3}),setTimeout((function(){t.$router.push("/")}),2500),history.pushState(null,null,document.URL),window.addEventListener("popstate",(function(t){history.pushState(null,null,document.URL)}),!1))}))}},Object(E["b"])("cartModules",["getCart"])),computed:Object($["a"])({},Object(E["c"])("cartModules",["cart"])),created:function(){this.orderId=this.$route.params.orderId,this.getCart(),this.getOrder()}};N.render=G;e["default"]=N},"746f":function(t,e,r){var c=r("428f"),n=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=c.Symbol||(c.Symbol={});n(e,t)||o(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),a=r("4930"),u=r("fdbf"),l=r("d039"),b=r("5135"),f=r("e8b5"),d=r("861d"),O=r("825a"),p=r("7b0b"),j=r("fc6a"),h=r("c04e"),y=r("5c6c"),g=r("7c73"),m=r("df75"),v=r("241c"),w=r("057f"),S=r("7418"),P=r("06cf"),x=r("9bf2"),k=r("d1e7"),G=r("9112"),$=r("6eeb"),E=r("5692"),N=r("f772"),D=r("d012"),I=r("90e3"),L=r("b622"),T=r("e538"),R=r("746f"),J=r("d44e"),U=r("69f3"),C=r("b727").forEach,F=N("hidden"),q="Symbol",B="prototype",M=L("toPrimitive"),_=U.set,A=U.getterFor(q),Q=Object[B],W=n.Symbol,z=i("JSON","stringify"),H=P.f,K=x.f,V=w.f,X=k.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),ct=n.QObject,nt=!ct||!ct[B]||!ct[B].findChild,it=s&&l((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var c=H(Q,e);c&&delete Q[e],K(t,e,r),c&&t!==Q&&K(Q,e,c)}:K,ot=function(t,e){var r=Y[t]=g(W[B]);return _(r,{type:q,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},at=function(t,e,r){t===Q&&at(Z,e,r),O(t);var c=h(e,!0);return O(r),b(Y,c)?(r.enumerable?(b(t,F)&&t[F][c]&&(t[F][c]=!1),r=g(r,{enumerable:y(0,!1)})):(b(t,F)||K(t,F,y(1,{})),t[F][c]=!0),it(t,c,r)):K(t,c,r)},ut=function(t,e){O(t);var r=j(e),c=m(r).concat(Ot(r));return C(c,(function(e){s&&!bt.call(r,e)||at(t,e,r[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},bt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===Q&&b(Y,e)&&!b(Z,e))&&(!(r||!b(this,e)||!b(Y,e)||b(this,F)&&this[F][e])||r)},ft=function(t,e){var r=j(t),c=h(e,!0);if(r!==Q||!b(Y,c)||b(Z,c)){var n=H(r,c);return!n||!b(Y,c)||b(r,F)&&r[F][c]||(n.enumerable=!0),n}},dt=function(t){var e=V(j(t)),r=[];return C(e,(function(t){b(Y,t)||b(D,t)||r.push(t)})),r},Ot=function(t){var e=t===Q,r=V(e?Z:j(t)),c=[];return C(r,(function(t){!b(Y,t)||e&&!b(Q,t)||c.push(Y[t])})),c};if(a||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===Q&&r.call(Z,t),b(this,F)&&b(this[F],e)&&(this[F][e]=!1),it(this,e,y(1,t))};return s&&nt&&it(Q,e,{configurable:!0,set:r}),ot(e,t)},$(W[B],"toString",(function(){return A(this).tag})),$(W,"withoutSetter",(function(t){return ot(I(t),t)})),k.f=bt,x.f=at,P.f=ft,v.f=w.f=dt,S.f=Ot,T.f=function(t){return ot(L(t),t)},s&&(K(W[B],"description",{configurable:!0,get:function(){return A(this).description}}),o||$(Q,"propertyIsEnumerable",bt,{unsafe:!0}))),c({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),C(m(rt),(function(t){R(t)})),c({target:q,stat:!0,forced:!a},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),c({target:"Object",stat:!0,forced:!a,sham:!s},{create:lt,defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:ft}),c({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt,getOwnPropertySymbols:Ot}),c({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),z){var pt=!a||l((function(){var t=W();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));c({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var c,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(c=e,(d(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof c&&(e=c.call(this,t,e)),!st(e))return e}),n[1]=e,z.apply(null,n)}})}W[B][M]||G(W[B],M,W[B].valueOf),J(W,q),D[F]=!0},b0c0:function(t,e,r){var c=r("83ab"),n=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,a="name";c&&!(a in i)&&n(i,a,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},dbb4:function(t,e,r){var c=r("23e7"),n=r("83ab"),i=r("56ef"),o=r("fc6a"),s=r("06cf"),a=r("8418");c({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,c=o(t),n=s.f,u=i(c),l={},b=0;while(u.length>b)r=n(c,e=u[b++]),void 0!==r&&a(l,e,r);return l}})},e439:function(t,e,r){var c=r("23e7"),n=r("d039"),i=r("fc6a"),o=r("06cf").f,s=r("83ab"),a=n((function(){o(1)})),u=!s||a;c({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,r){var c=r("b622");e.f=c}}]);
//# sourceMappingURL=chunk-f5711378.f494118d.js.map