(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-491b2cd2"],{"057f":function(t,e,c){var n=c("fc6a"),r=c("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?a(t):r(n(t))}},"4de4":function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").filter,i=c("1dde"),o=i("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function n(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function r(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,n)}return c}function i(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?r(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},"746f":function(t,e,c){var n=c("428f"),r=c("5135"),i=c("e538"),o=c("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});r(e,t)||o(e,t,{value:i.f(t)})}},a4d3:function(t,e,c){"use strict";var n=c("23e7"),r=c("da84"),i=c("d066"),o=c("c430"),a=c("83ab"),l=c("4930"),s=c("fdbf"),b=c("d039"),u=c("5135"),f=c("e8b5"),d=c("861d"),p=c("825a"),O=c("7b0b"),j=c("fc6a"),h=c("c04e"),y=c("5c6c"),m=c("7c73"),g=c("df75"),v=c("241c"),w=c("057f"),x=c("7418"),k=c("06cf"),P=c("9bf2"),S=c("d1e7"),C=c("9112"),$=c("6eeb"),_=c("5692"),N=c("f772"),D=c("d012"),G=c("90e3"),E=c("b622"),T=c("e538"),L=c("746f"),M=c("d44e"),I=c("69f3"),J=c("b727").forEach,z=N("hidden"),A="Symbol",F="prototype",q=E("toPrimitive"),Q=I.set,R=I.getterFor(A),U=Object[F],B=r.Symbol,V=i("JSON","stringify"),W=k.f,H=P.f,K=w.f,X=S.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),ct=_("wks"),nt=r.QObject,rt=!nt||!nt[F]||!nt[F].findChild,it=a&&b((function(){return 7!=m(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,c){var n=W(U,e);n&&delete U[e],H(t,e,c),n&&t!==U&&H(U,e,n)}:H,ot=function(t,e){var c=Y[t]=m(B[F]);return Q(c,{type:A,tag:t,description:e}),a||(c.description=e),c},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},lt=function(t,e,c){t===U&&lt(Z,e,c),p(t);var n=h(e,!0);return p(c),u(Y,n)?(c.enumerable?(u(t,z)&&t[z][n]&&(t[z][n]=!1),c=m(c,{enumerable:y(0,!1)})):(u(t,z)||H(t,z,y(1,{})),t[z][n]=!0),it(t,n,c)):H(t,n,c)},st=function(t,e){p(t);var c=j(e),n=g(c).concat(pt(c));return J(n,(function(e){a&&!ut.call(c,e)||lt(t,e,c[e])})),t},bt=function(t,e){return void 0===e?m(t):st(m(t),e)},ut=function(t){var e=h(t,!0),c=X.call(this,e);return!(this===U&&u(Y,e)&&!u(Z,e))&&(!(c||!u(this,e)||!u(Y,e)||u(this,z)&&this[z][e])||c)},ft=function(t,e){var c=j(t),n=h(e,!0);if(c!==U||!u(Y,n)||u(Z,n)){var r=W(c,n);return!r||!u(Y,n)||u(c,z)&&c[z][n]||(r.enumerable=!0),r}},dt=function(t){var e=K(j(t)),c=[];return J(e,(function(t){u(Y,t)||u(D,t)||c.push(t)})),c},pt=function(t){var e=t===U,c=K(e?Z:j(t)),n=[];return J(c,(function(t){!u(Y,t)||e&&!u(U,t)||n.push(Y[t])})),n};if(l||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=G(t),c=function(t){this===U&&c.call(Z,t),u(this,z)&&u(this[z],e)&&(this[z][e]=!1),it(this,e,y(1,t))};return a&&rt&&it(U,e,{configurable:!0,set:c}),ot(e,t)},$(B[F],"toString",(function(){return R(this).tag})),$(B,"withoutSetter",(function(t){return ot(G(t),t)})),S.f=ut,P.f=lt,k.f=ft,v.f=w.f=dt,x.f=pt,T.f=function(t){return ot(E(t),t)},a&&(H(B[F],"description",{configurable:!0,get:function(){return R(this).description}}),o||$(U,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:B}),J(g(ct),(function(t){L(t)})),n({target:A,stat:!0,forced:!l},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var c=B(e);return tt[e]=c,et[c]=e,c},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!a},{create:bt,defineProperty:lt,defineProperties:st,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:b((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(O(t))}}),V){var Ot=!l||b((function(){var t=B();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));n({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,c){var n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),r[1]=e,V.apply(null,r)}})}B[F][q]||C(B[F],q,B[F].valueOf),M(B,A),D[z]=!0},dbb4:function(t,e,c){var n=c("23e7"),r=c("83ab"),i=c("56ef"),o=c("fc6a"),a=c("06cf"),l=c("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,c,n=o(t),r=a.f,s=i(n),b={},u=0;while(s.length>u)c=r(n,e=s[u++]),void 0!==c&&l(b,e,c);return b}})},e439:function(t,e,c){var n=c("23e7"),r=c("d039"),i=c("fc6a"),o=c("06cf").f,a=c("83ab"),l=r((function(){o(1)})),s=!a||l;n({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},e538:function(t,e,c){var n=c("b622");e.f=n},ed28:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r=Object(n["g"])('<ul class="step-list wrap justify-content-center mb-8"><li class="text-center active" aria-current="true"><p class="mb-2">Step.01</p><h4><i class="bi bi-cart-fill"></i> 購物明細</h4></li><li class="text-center"><p class="mb-2">Step.02</p><h4><i class="bi bi-credit-card"></i> 訂單資訊</h4></li><li class="text-center"><p class="mb-2">Step.03</p><h4><i class="bi bi-check-circle"></i> 最後確認</h4></li></ul>',1),i={class:"cart-list mb-4 mb-md-6"},o=Object(n["i"])("h3",{class:"text-center mb-3"},"購物明細",-1),a={class:"text-end mb-3"},l=Object(n["i"])("hr",{class:"d-block d-sm-none"},null,-1),s={class:"cart-list-table"},b={class:"table"},u=Object(n["i"])("thead",null,[Object(n["i"])("tr",null,[Object(n["i"])("th"),Object(n["i"])("th",{class:""},"商品明細"),Object(n["i"])("th",null,"數量"),Object(n["i"])("th",{class:"text-end"},"單價"),Object(n["i"])("th",{class:"text-end"},"小計")])],-1),f={key:0},d=Object(n["i"])("td",{colspan:"5",class:"text-center py-6"},"無商品明細",-1),p=Object(n["i"])("i",{class:"bi bi-x-circle text-danger",style:{"font-size":"24px"}},null,-1),O={class:"wrap align-items-center"},j={"data-title":"數量",class:"td-before"},h=Object(n["i"])("i",{class:"bi bi-dash-circle",style:{"font-size":"24px"}},null,-1),y={class:"px-3"},m=Object(n["i"])("i",{class:"bi bi-plus-circle",style:{"font-size":"24px"}},null,-1),g={class:"text-start text-sm-end td-before","data-title":"單價"},v={class:"text-start text-sm-end td-before","data-title":"小計"},w={colspan:"5",class:"text-end"},x={class:"input-group"},k={colspan:"5",class:"text-end"},P={key:0},S={key:1,class:"display-10 fw-bold"},C={key:0},$={colspan:"5",class:"text-end text-danger"},_=Object(n["i"])("p",{class:"text-danger mb-2"},"已套用優惠卷",-1),N={class:"display-10 fw-bold"},D={colspan:"5",class:"next-btn text-end"},G=Object(n["i"])("i",{class:"bi bi-chevron-left"},null,-1),E=Object(n["h"])(" 繼續購物 "),T=Object(n["h"])(" 下一步 "),L=Object(n["i"])("i",{class:"bi bi-chevron-right"},null,-1),M=Object(n["i"])("section",{class:"cart-list-note bg-grayf8 mb-8 mb-md-12"},[Object(n["i"])("h3",{class:"display-9 fw-bold mb-2"},"訂購須知"),Object(n["i"])("ul",null,[Object(n["i"])("li",null,"本店只提供店內自取及宅配到府，宅配約 3~7 天送達。"),Object(n["i"])("li",null,"配送地點為台灣本島，離島目前尚無配送服務，敬請見諒。"),Object(n["i"])("li",null,"配合一例一休政策，週日無配送服務，週六下單者以禮拜一開始配送。"),Object(n["i"])("li",null,"國定假日及颱風假無配送服務。"),Object(n["i"])("li",null,"冷凍肉舖全館現貨，每日下午兩點前下單並完成付款（貨到付款適用），隔日到貨。"),Object(n["i"])("li",{class:"fw-bold"},"※ 樂齊生鮮保有最終修改、變更、活動解釋及取消本活動之權利。")])],-1);function I(t,e,c,I,J,z){var A=Object(n["D"])("router-link");return Object(n["w"])(),Object(n["e"])(n["a"],null,[r,Object(n["i"])("section",i,[o,Object(n["i"])("div",a,[Object(n["i"])("a",{href:"#",class:"btn btn-outline-primary",onClick:e[1]||(e[1]=Object(n["R"])((function(e){return z.removeCartAll(t.cartLength)}),["prevent"]))},"刪除全部")]),l,Object(n["i"])("div",s,[Object(n["i"])("table",b,[u,Object(n["i"])("tbody",null,[t.cart.carts?(Object(n["w"])(),Object(n["e"])(n["a"],{key:0},[t.cartLength<1?(Object(n["w"])(),Object(n["e"])("tr",f,[d])):Object(n["f"])("",!0),(Object(n["w"])(!0),Object(n["e"])(n["a"],null,Object(n["B"])(t.cart.carts,(function(e,c){return Object(n["w"])(),Object(n["e"])("tr",{key:c},[Object(n["i"])("td",null,[Object(n["i"])("a",{href:"#",onClick:Object(n["R"])((function(t){return z.removeCartItem(e.id)}),["prevent"])},[p],8,["onClick"])]),Object(n["i"])("td",null,[Object(n["i"])("div",O,[Object(n["i"])("img",{src:e.product.imageUrl,alt:e.product.title},null,8,["src","alt"]),Object(n["i"])("p",null,Object(n["G"])(e.product.title),1)])]),Object(n["i"])("td",j,[Object(n["i"])("button",{type:"button",class:"btn px-0 py-0",onClick:function(t){return z.minus(e)}},[h],8,["onClick"]),Object(n["i"])("span",y,Object(n["G"])(e.qty),1),Object(n["i"])("button",{type:"button",class:"btn px-0 py-0",onClick:function(t){return z.add(e)}},[m],8,["onClick"])]),Object(n["i"])("td",g,Object(n["G"])(t.$filters.currency(e.product.price)),1),Object(n["i"])("td",v,"NT $"+Object(n["G"])(t.$filters.currency(e.product.price*e.qty)),1)])})),128))],64)):Object(n["f"])("",!0)]),Object(n["i"])("tfoot",null,[Object(n["i"])("tr",null,[Object(n["i"])("td",w,[Object(n["i"])("div",x,[Object(n["Q"])(Object(n["i"])("input",{type:"text",class:"form-control",placeholder:"請輸入優惠卷","aria-label":"coupons-btn","aria-describedby":"coupons-btn","onUpdate:modelValue":e[2]||(e[2]=function(t){return J.coupon_code=t})},null,512),[[n["L"],J.coupon_code]]),Object(n["i"])("button",{class:"btn btn-outline-primary",type:"button",id:"coupons-btn",onClick:e[3]||(e[3]=function(){return z.addCoupon&&z.addCoupon.apply(z,arguments)})},"套用")])])]),Object(n["i"])("tr",null,[Object(n["i"])("td",k,[t.cart.final_total!==t.cart.total?(Object(n["w"])(),Object(n["e"])("del",P,"總金額 NT $"+Object(n["G"])(t.$filters.currency(t.cart.total)),1)):(Object(n["w"])(),Object(n["e"])("p",S,"總金額 NT $"+Object(n["G"])(t.$filters.currency(t.cart.total)),1))])]),t.cart.final_total!==t.cart.total?(Object(n["w"])(),Object(n["e"])("tr",C,[Object(n["i"])("td",$,[_,Object(n["i"])("p",N,"折扣後總金額 NT $"+Object(n["G"])(t.$filters.currency(t.cart.final_total)),1)])])):Object(n["f"])("",!0),Object(n["i"])("tr",null,[Object(n["i"])("td",D,[Object(n["i"])(A,{to:"/cart",class:"l-btn btn--secondary btn--md me-4"},{default:Object(n["P"])((function(){return[G,E]})),_:1}),t.cartLength>0?(Object(n["w"])(),Object(n["e"])(A,{key:0,to:"/orderForm",class:"l-btn btn--primary btn--md"},{default:Object(n["P"])((function(){return[T,L]})),_:1})):Object(n["f"])("",!0)])])])])])]),M],64)}var J=c("5530"),z=(c("99af"),c("5502")),A={data:function(){return{coupon_code:""}},methods:Object(J["a"])({addCoupon:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/coupon"),c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){e.data.success?(t.getCart(),t.coupon_code="",t.$swal({title:"已套用優惠卷",icon:"success"})):t.$swal({title:"找不到優惠卷",icon:"error"})}))},removeCartAll:function(t){var e=this;if(t<1)this.$swal({title:"已經全部刪除，請勿重複點擊",icon:"error"});else{var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("best777","/carts");this.$http.delete(c).then((function(t){e.getCart()}))}},removeCartItem:function(t){this.$store.dispatch("cartModules/removeCartItem",t)},minus:function(t){this.$store.dispatch("cartModules/minus",t)},add:function(t){this.$store.dispatch("cartModules/add",t)}},Object(z["b"])("cartModules",["getCart"])),computed:Object(J["a"])({},Object(z["c"])("cartModules",["cart","cartLength"])),created:function(){this.getCart()}};A.render=I;e["default"]=A}}]);
//# sourceMappingURL=chunk-491b2cd2.3719b084.js.map