(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cba5ec6a"],{"057f":function(t,r,e){var n=e("fc6a"),i=e("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(r){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"06da":function(t,r,e){},"0b42":function(t,r,e){var n=e("861d"),i=e("e8b5"),o=e("b622"),c=o("species");t.exports=function(t){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),void 0===r?Array:r}},"1dde":function(t,r,e){var n=e("d039"),i=e("b622"),o=e("2d00"),c=i("species");t.exports=function(t){return o>=51||!n((function(){var r=[],e=r.constructor={};return e[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"3c82":function(t,r,e){"use strict";e("6803")},"3d2a":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"startPage container-fluid bg-theme"},[e("div",{staticClass:"gameArea"},[e("Scoreboard"),e("div",{staticClass:"board"},t._l(9,(function(r,n){return e("div",{key:n,staticClass:"grid",on:{click:function(r){return t.turn(n)}}},[e("div",{class:0==t.grids[n].status?"":1==t.grids[n].status?"circle":"cross"})])})),0)],1)])])},i=[];function o(t){if(Array.isArray(t))return t}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function c(t,r){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,i,o=[],c=!0,a=!1;try{for(e=e.call(t);!(c=(n=e.next()).done);c=!0)if(o.push(n.value),r&&o.length===r)break}catch(s){a=!0,i=s}finally{try{c||null==e["return"]||e["return"]()}finally{if(a)throw i}}return o}}e("fb6a"),e("b0c0"),e("a630");function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function s(t,r){if(t){if("string"===typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,r){return o(t)||c(t,r)||s(t,r)||u()}e("4de4"),e("a9e3");var l=e("feac"),d={components:{Scoreboard:l["a"]},data:function(){return{winCombin:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],grids:[{index:0,status:0},{index:1,status:0},{index:2,status:0},{index:3,status:0},{index:4,status:0},{index:5,status:0},{index:6,status:0},{index:7,status:0},{index:8,status:0}],clickTimes:0,winRecord:{circleWin:0,crossWin:0}}},watch:{clickTimes:function(){9==this.clickTimes&&this.$router.push("/result/Draw")}},methods:{turn:function(t){0===this.grids[t].status&&(this.grids[t].status=this.$store.state.player,this.winCheck(),this.$store.commit("CHANGE"),this.clickTimes+=1)},winCheck:function(){var t=this;this.winCombin.filter((function(r){var e=f(r,3),n=e[0],i=e[1],o=e[2];console.log(n,i,o);var c=t.grids[n].status+t.grids[i].status+t.grids[o].status;3==c?t.gotoWin("/result/circlewin","circleWin"):-3==c?t.gotoWin("/result/crosswin","crossWin"):console.log("nowin")}))},gotoWin:function(t,r){console.log(this.winRecord[r]),this.winRecord[r]+=1,localStorage.setItem(r,JSON.stringify(this.winRecord[r])),this.$router.push(t)},getWinTimes:function(){console.log("12345"),this.winRecord.circleWin=Number(localStorage.getItem("circleWin"))||0,this.winRecord.crossWin=Number(localStorage.getItem("crossWin"))||0}},created:function(){console.log("created壞了ㄇ"),this.getWinTimes()}},b=d,v=(e("3c82"),e("2877")),p=Object(v["a"])(b,n,i,!1,null,"02625c50",null);r["default"]=p.exports},"428f":function(t,r,e){var n=e("da84");t.exports=n},"4de4":function(t,r,e){"use strict";var n=e("23e7"),i=e("b727").filter,o=e("1dde"),c=o("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,r,e){"use strict";var n=e("0366"),i=e("7b0b"),o=e("9bdd"),c=e("e95a"),a=e("50c4"),s=e("8418"),u=e("35a1");t.exports=function(t){var r,e,f,l,d,b,v=i(t),p="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,y=void 0!==g,m=u(v),w=0;if(y&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(r=a(v.length),e=new p(r);r>w;w++)b=y?g(v[w],w):v[w],s(e,w,b);else for(l=m.call(v),d=l.next,e=new p;!(f=d.call(l)).done;w++)b=y?o(l,g,[f.value,w],!0):f.value,s(e,w,b);return e.length=w,e}},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,e){var n=e("1d80"),i=e("577e"),o=e("5899"),c="["+o+"]",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),u=function(t){return function(r){var e=i(n(r));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(t,r,e){var n=e("0b42");t.exports=function(t,r){return new(n(t))(0===r?0:r)}},6803:function(t,r,e){},7156:function(t,r,e){var n=e("861d"),i=e("d2bb");t.exports=function(t,r,e){var o,c;return i&&"function"==typeof(o=r.constructor)&&o!==e&&n(c=o.prototype)&&c!==e.prototype&&i(t,c),t}},"746f":function(t,r,e){var n=e("428f"),i=e("5135"),o=e("e538"),c=e("9bf2").f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});i(r,t)||c(r,t,{value:o.f(t)})}},8418:function(t,r,e){"use strict";var n=e("a04b"),i=e("9bf2"),o=e("5c6c");t.exports=function(t,r,e){var c=n(r);c in t?i.f(t,c,o(0,e)):t[c]=e}},"9bdd":function(t,r,e){var n=e("825a"),i=e("2a62");t.exports=function(t,r,e,o){try{return o?r(n(e)[0],e[1]):r(e)}catch(c){throw i(t),c}}},a4d3:function(t,r,e){"use strict";var n=e("23e7"),i=e("da84"),o=e("d066"),c=e("c430"),a=e("83ab"),s=e("4930"),u=e("d039"),f=e("5135"),l=e("e8b5"),d=e("861d"),b=e("d9b5"),v=e("825a"),p=e("7b0b"),h=e("fc6a"),g=e("a04b"),y=e("577e"),m=e("5c6c"),w=e("7c73"),S=e("df75"),x=e("241c"),A=e("057f"),N=e("7418"),C=e("06cf"),I=e("9bf2"),O=e("d1e7"),E=e("9112"),k=e("6eeb"),_=e("5692"),R=e("f772"),T=e("d012"),W=e("90e3"),j=e("b622"),$=e("e538"),P=e("746f"),F=e("d44e"),U=e("69f3"),M=e("b727").forEach,J=R("hidden"),G="Symbol",V="prototype",Y=j("toPrimitive"),L=U.set,X=U.getterFor(G),B=Object[V],D=i.Symbol,H=o("JSON","stringify"),Q=C.f,q=I.f,z=A.f,K=O.f,Z=_("symbols"),tt=_("op-symbols"),rt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),nt=_("wks"),it=i.QObject,ot=!it||!it[V]||!it[V].findChild,ct=a&&u((function(){return 7!=w(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Q(B,r);n&&delete B[r],q(t,r,e),n&&t!==B&&q(B,r,n)}:q,at=function(t,r){var e=Z[t]=w(D[V]);return L(e,{type:G,tag:t,description:r}),a||(e.description=r),e},st=function(t,r,e){t===B&&st(tt,r,e),v(t);var n=g(r);return v(e),f(Z,n)?(e.enumerable?(f(t,J)&&t[J][n]&&(t[J][n]=!1),e=w(e,{enumerable:m(0,!1)})):(f(t,J)||q(t,J,m(1,{})),t[J][n]=!0),ct(t,n,e)):q(t,n,e)},ut=function(t,r){v(t);var e=h(r),n=S(e).concat(vt(e));return M(n,(function(r){a&&!lt.call(e,r)||st(t,r,e[r])})),t},ft=function(t,r){return void 0===r?w(t):ut(w(t),r)},lt=function(t){var r=g(t),e=K.call(this,r);return!(this===B&&f(Z,r)&&!f(tt,r))&&(!(e||!f(this,r)||!f(Z,r)||f(this,J)&&this[J][r])||e)},dt=function(t,r){var e=h(t),n=g(r);if(e!==B||!f(Z,n)||f(tt,n)){var i=Q(e,n);return!i||!f(Z,n)||f(e,J)&&e[J][n]||(i.enumerable=!0),i}},bt=function(t){var r=z(h(t)),e=[];return M(r,(function(t){f(Z,t)||f(T,t)||e.push(t)})),e},vt=function(t){var r=t===B,e=z(r?tt:h(t)),n=[];return M(e,(function(t){!f(Z,t)||r&&!f(B,t)||n.push(Z[t])})),n};if(s||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,r=W(t),e=function(t){this===B&&e.call(tt,t),f(this,J)&&f(this[J],r)&&(this[J][r]=!1),ct(this,r,m(1,t))};return a&&ot&&ct(B,r,{configurable:!0,set:e}),at(r,t)},k(D[V],"toString",(function(){return X(this).tag})),k(D,"withoutSetter",(function(t){return at(W(t),t)})),O.f=lt,I.f=st,C.f=dt,x.f=A.f=bt,N.f=vt,$.f=function(t){return at(j(t),t)},a&&(q(D[V],"description",{configurable:!0,get:function(){return X(this).description}}),c||k(B,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:D}),M(S(nt),(function(t){P(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var r=y(t);if(f(rt,r))return rt[r];var e=D(r);return rt[r]=e,et[e]=r,e},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:u((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(p(t))}}),H){var pt=!s||u((function(){var t=D();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,r,e){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=r,(d(r)||void 0!==t)&&!b(t))return l(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!b(r))return r}),i[1]=r,H.apply(null,i)}})}D[V][Y]||E(D[V],Y,D[V].valueOf),F(D,G),T[J]=!0},a630:function(t,r,e){var n=e("23e7"),i=e("4df4"),o=e("1c7e"),c=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:i})},a9e3:function(t,r,e){"use strict";var n=e("83ab"),i=e("da84"),o=e("94ca"),c=e("6eeb"),a=e("5135"),s=e("c6b6"),u=e("7156"),f=e("d9b5"),l=e("c04e"),d=e("d039"),b=e("7c73"),v=e("241c").f,p=e("06cf").f,h=e("9bf2").f,g=e("58a8").trim,y="Number",m=i[y],w=m.prototype,S=s(b(w))==y,x=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var r,e,n,i,o,c,a,s,u=l(t,"number");if("string"==typeof u&&u.length>2)if(u=g(u),r=u.charCodeAt(0),43===r||45===r){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===r){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),c=o.length,a=0;a<c;a++)if(s=o.charCodeAt(a),s<48||s>i)return NaN;return parseInt(o,n)}return+u};if(o(y,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var A,N=function(t){var r=arguments.length<1?0:t,e=this;return e instanceof N&&(S?d((function(){w.valueOf.call(e)})):s(e)!=y)?u(new m(x(r)),e,N):x(r)},C=n?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;C.length>I;I++)a(m,A=C[I])&&!a(N,A)&&h(N,A,p(m,A));N.prototype=w,w.constructor=N,c(i,y,N)}},b0c0:function(t,r,e){var n=e("83ab"),i=e("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,r,e){var n=e("0366"),i=e("44ad"),o=e("7b0b"),c=e("50c4"),a=e("65f0"),s=[].push,u=function(t){var r=1==t,e=2==t,u=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(v,p,h,g){for(var y,m,w=o(v),S=i(w),x=n(p,h,3),A=c(S.length),N=0,C=g||a,I=r?C(v,A):e||d?C(v,0):void 0;A>N;N++)if((b||N in S)&&(y=S[N],m=x(y,N,w),t))if(r)I[N]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return N;case 2:s.call(I,y)}else switch(t){case 4:return!1;case 7:s.call(I,y)}return l?-1:u||f?f:I}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},d28b:function(t,r,e){var n=e("746f");n("iterator")},dc35:function(t,r,e){"use strict";e("06da")},e01a:function(t,r,e){"use strict";var n=e("23e7"),i=e("83ab"),o=e("da84"),c=e("5135"),a=e("861d"),s=e("9bf2").f,u=e("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[r]=!0),r};u(d,f);var b=d.prototype=f.prototype;b.constructor=d;var v=b.toString,p="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,r=v.call(t);if(c(l,t))return"";var e=p?r.slice(7,-1):r.replace(h,"$1");return""===e?void 0:e}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,e){var n=e("b622");r.f=n},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,r,e){"use strict";var n=e("23e7"),i=e("861d"),o=e("e8b5"),c=e("23cb"),a=e("50c4"),s=e("fc6a"),u=e("8418"),f=e("b622"),l=e("1dde"),d=l("slice"),b=f("species"),v=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var e,n,f,l=s(this),d=a(l.length),h=c(t,d),g=c(void 0===r?d:r,d);if(o(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[b],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return v.call(l,h,g);for(n=new(void 0===e?Array:e)(p(g-h,0)),f=0;h<g;h++,f++)h in l&&u(n,f,l[h]);return n.length=f,n}})},feac:function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"scoreBoard d-flex align-items-end"},[e("div",{staticClass:"player br-left text-white",class:1==this.$store.state.player?"bg-pinkRed":"bg-black"},[t._v("O")]),e("div",{staticClass:"score Roboto-Condensed border-right-0"},[t._v(t._s(t.circleScore))]),e("div",{staticClass:"vs text-white bg-black"},[t._v("vs")]),e("div",{staticClass:"score Roboto-Condensed border-left-0"},[t._v(t._s(t.crossScore))]),e("div",{staticClass:"player text-white bg-black br-right",class:-1==this.$store.state.player?"bg-pinkRed":"bg-black"},[t._v("X")])]),e("div",{staticClass:"d-flex  mt-2 w-100"},[1===this.$store.state.player?e("p",{staticClass:"Roboto-Condensed text-white"},[t._v("YOUR TURN!")]):e("p",{staticClass:"Roboto-Condensed text-white ms-auto"},[t._v("YOUR TURN!")])])])},i=[],o=(e("a9e3"),{data:function(){return{circleScore:0,crossScore:0}},methods:{getWinTimes:function(){console.log("12345"),this.circleScore=Number(localStorage.getItem("circleWin"))||0,this.crossScore=Number(localStorage.getItem("crossWin"))||0}},created:function(){this.getWinTimes()}}),c=o,a=(e("dc35"),e("2877")),s=Object(a["a"])(c,n,i,!1,null,"55254f01",null);r["a"]=s.exports}}]);
//# sourceMappingURL=chunk-cba5ec6a.419e72de.js.map