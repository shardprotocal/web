(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"27a6":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"waitlist"},[i("div",{staticClass:"main"},[i("div",{staticClass:"row main-row"},[i("div",{staticClass:"col-md-6 col-sm-12 field"},[i("div",{staticClass:"declaration"},[t._v("Build our own a new world.")])]),i("div",{staticClass:"col-md-6 col-sm-12 field form"},[i("div",{staticClass:"logo"},[t._v("Shard Protocol")]),i("div",{staticClass:"tab"},[i("p",[t._v("Game")]),i("p",{staticClass:"mid"},[t._v("NFT")]),i("p",[t._v("Metaverse")])]),i("h1",[t._v(t._s(t.waitlistHeading))]),i("div",{staticClass:"form-box"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 field"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 col-xs-12 field"},[i("q-input",{ref:"email",attrs:{outlined:"",dense:"","bg-color":"white",clearable:t.form.email&&t.clearable.email,"clear-icon":"close",placeholder:t.userNameTxt,autoComplete:"off","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||t.emailAddressRequired},t.checkFormEmail]},on:{blur:function(e){return t.showInputClear("username",!1)},focus:function(e){return t.showInputClear("username",!0)}},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)])]),i("div",{staticClass:"col-10 field"},[i("div",{staticClass:"checkbox"},[i("q-checkbox",{attrs:{dense:"",color:"primary",label:t.$t("Yes, please send me the latest news about SHARD protocol.")},model:{value:t.form.is_subscribed,callback:function(e){t.$set(t.form,"is_subscribed",e)},expression:"form.is_subscribed"}})],1)])]),i("div",{staticClass:"submit"},[i("q-btn",{staticClass:"btn ",attrs:{color:"primary",label:t.$t("Join waitlist"),disable:t.isCheckFormEmail},on:{click:t.toWaitlist}})],1)]),i("div",{staticClass:"success-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSended,expression:"isSended"}],staticClass:"success"},[t._v("Sign up success! Check your mailbox")])])])])])])},n=[],a=i("ded3"),r=i.n(a),o=(i("99af"),i("b0c0"),i("2f62")),c=i("b178"),l=i("4ec3"),u=i("5464"),d=i("e91a"),m={name:"waitlist",components:{"link-btn":d["a"]},data:function(){return{form:{email:"",is_subscribed:!1},accept:!1,metaDescription:"",metaKeywords:"",clearable:{email:!1},isSended:!1,isCheckFormEmail:!0}},meta:function(){var t=this;return{title:this.waitlistHeading,titleTemplate:function(e){return"".concat(e," - ").concat(t.$i18n.t("Build our own a new world."))},meta:{description:{name:"description",content:this.metaDescription},keywords:{name:"keywords",content:this.metaKeywords},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}}},computed:{waitlistHeading:function(){return this.$i18n.t("Welcome to SHARDverse")},newCustomers:function(){return this.$i18n.t("newCustomers")},userNameTxt:function(){return this.$i18n.t("Email")},registeredCustomers:function(){return this.$i18n.t("registeredCustomers")},registerTips:function(){return this.$i18n.t("registerTips")},registerLinkText:function(){return this.$i18n.t("registerLinkText")},signinTips:function(){return this.$i18n.t("signinTips")},signinBtn:function(){return this.$i18n.t("Join waitlist")},forgetPWDLink:function(){return this.$i18n.t("forgetPWDLink")},emailAddressRequired:function(){return this.$i18n.t("Please enter a valid email address.")},emailErrorTips:function(){return this.$i18n.t("Please enter a valid email address. For example johndoe@domain.com.")},curPWDRequired:function(){return this.$i18n.t("curPWDRequired")},pwdErrorTips:function(){return this.$i18n.t("pwdErrorTips")},waitlistResponseError:function(){return this.$i18n.t("waitlistResponseError")},subscribeCheckbox:function(){return this.$i18n.t("Yes, please send me the latest news about SHARD protocol.")}},methods:r()(r()({},Object(o["b"])("site",["setHaswaitlistSuccess","setSession"])),{},{toWaitlist:function(){var t=this;this.isSended=!0,console.log("towaitlist",this.form);var e={email:this.form.email,user_password:this.form.user_password};Object(l["a"])(e).then((function(e){console.log("towaitlist",e),t.sessionId=e.content,t.setSession(e.content),t.waitlistSuccess()})).catch((function(e){if(console.log("towaitlist",e),"already waitlist"===e);else{var i=t.waitlistResponseError;t.msgAlert(i)}}))},msgAlert:function(t){this.$q.notify({message:t,position:"center",timeout:"3000",classes:"notify"})},showInputClear:function(t,e){this.clearable[t]=e},checkFormEmail:function(t){return this.isCheckFormEmail=!(Object(u["a"])(t)||this.emailErrorTips),Object(u["a"])(t)||this.emailErrorTips}}),beforeRouteEnter:function(t,e,i){var s={name:e.name,params:e.params,query:e.query};e.name&&"waitlist"!==e.name&&"setPassword"!==e.name&&"register"!==e.name&&"forgetpwd"!==e.name&&c["a"].set("afterwaitlistToPage",JSON.stringify(s)),i()}},f=m,h=(i("567d"),i("daba"),i("2877")),p=Object(h["a"])(f,s,n,!1,null,"4e5d0489",null);e["default"]=p.exports},"38e8":function(t,e,i){},"4ec3":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("d3b7"),i("e6cf");var s=i("a748");function n(t,e){return new Promise((function(i,n){s["axiosInstance"].post(t,JSON.stringify(e),{params:{}}).then((function(t){if(t.data&&t.data.data&&"1"===t.data.code)i(t.data.data);else if(t.data&&t.data.message)n(t.data.message);else{var e="error";n(e)}})).catch((function(t){n(t)}))}))}function a(t){var e="/hah_api/customer/login";return n(e,t)}},5464:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("ac1f"),i("466d"),i("d81d"),i("5319");function s(t){var e=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,i=t;return!!i.match(e)}},"567d":function(t,e,i){"use strict";i("9d60")},"7deb":function(t,e,i){},"9d60":function(t,e,i){},daba:function(t,e,i){"use strict";i("7deb")},e067:function(t,e,i){"use strict";i("38e8")},e91a:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["btn-"+t.btnColor,"link-btn-2",t.extraClass],on:{click:t.clickEvent}},[i("span",[t._v(t._s(t.buttonText))])])},n=[],a={props:{text:{type:String,default:""},color:{type:String,default:"accent"},disable:{type:Boolean,default:!1},extraClass:{type:String,default:""}},computed:{toViewText:function(){return this.$i18n.t("$common.$buttons.shopNow")},buttonText:function(){return this.text||this.toViewText},btnColor:function(){return this.disable?"disable":this.color?this.color:"primary"}},methods:{clickEvent:function(){if(this.disable)return!1;this.$emit("click")}}},r=a,o=(i("e067"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"eac9b07e",null);e["a"]=c.exports}}]);