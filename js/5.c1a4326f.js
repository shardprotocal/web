(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"27a6":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"waitlist"},[i("div",{staticClass:"main"},[i("div",{staticClass:"row main-row"},[i("div",{staticClass:"col-md-6 col-sm-12 field"},[i("div",{staticClass:"declaration"},[e._v("Build our own a new world.")])]),i("div",{staticClass:"col-md-6 col-sm-12 field form"},[i("div",{staticClass:"logo"},[e._v("Shard Protocol")]),i("div",{staticClass:"tab"},[i("p",[e._v("Game")]),i("p",{staticClass:"mid"},[e._v("NFT")]),i("p",[e._v("Metaverse")])]),i("h1",[e._v(e._s(e.waitlistHeading))]),i("div",{staticClass:"form-box"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 field"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 col-xs-12 field"},[i("q-input",{ref:"email",attrs:{outlined:"",dense:"","bg-color":"white",clearable:e.form.email&&e.clearable.email,"clear-icon":"close",placeholder:e.userNameTxt,autoComplete:"off","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.emailAddressRequired},e.checkFormEmail]},on:{blur:function(t){return e.showInputClear("username",!1)},focus:function(t){return e.showInputClear("username",!0)}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)])]),i("div",{staticClass:"col-10 field"},[i("div",{staticClass:"checkbox"},[i("q-checkbox",{attrs:{dense:"",color:"primary",label:e.$t("Yes, please send me the latest news about SHARD protocol.")},model:{value:e.form.is_subscribed,callback:function(t){e.$set(e.form,"is_subscribed",t)},expression:"form.is_subscribed"}})],1)])]),i("div",{staticClass:"submit"},[i("q-btn",{staticClass:"btn ",attrs:{color:"primary",label:e.$t("Join waitlist"),disable:e.isCheckFormEmail},on:{click:e.toWaitlist}})],1)]),i("form",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"form"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{name:"to_mail",type:"text"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),i("input",{attrs:{name:"to_name",type:"text"}}),i("input",{attrs:{name:"topic",type:"text"}}),i("input",{attrs:{name:"from_name",type:"text"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"link",type:"text"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),i("div",{staticClass:"success-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isSended,expression:"isSended"}],staticClass:"success"},[e._v("Sign up success! Check your mailbox")])])])])])])},n=[],a=i("ded3"),r=i.n(a),o=(i("99af"),i("b0c0"),i("2f62")),c=i("b178"),l=i("ec26"),u=(i("4ec3"),i("365c")),m=i("5464"),d=i("e91a"),f=i("f8c5"),p={name:"waitlist",components:{"link-btn":d["a"]},data:function(){return{form:{email:"",is_subscribed:!1},accept:!1,metaDescription:"",metaKeywords:"",clearable:{email:!1},isSended:!1,isCheckFormEmail:!0}},meta:function(){var e=this;return{title:this.waitlistHeading,titleTemplate:function(t){return"".concat(t," - ").concat(e.$i18n.t("Build our own a new world."))},meta:{description:{name:"description",content:this.metaDescription},keywords:{name:"keywords",content:this.metaKeywords},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}}},computed:{waitlistHeading:function(){return this.$i18n.t("Welcome to SHARDverse")},newCustomers:function(){return this.$i18n.t("newCustomers")},userNameTxt:function(){return this.$i18n.t("Email")},registeredCustomers:function(){return this.$i18n.t("registeredCustomers")},registerTips:function(){return this.$i18n.t("registerTips")},registerLinkText:function(){return this.$i18n.t("registerLinkText")},signinTips:function(){return this.$i18n.t("signinTips")},signinBtn:function(){return this.$i18n.t("Join waitlist")},forgetPWDLink:function(){return this.$i18n.t("forgetPWDLink")},emailAddressRequired:function(){return this.$i18n.t("Please enter a valid email address.")},emailErrorTips:function(){return this.$i18n.t("Please enter a valid email address. For example johndoe@domain.com.")},curPWDRequired:function(){return this.$i18n.t("curPWDRequired")},pwdErrorTips:function(){return this.$i18n.t("pwdErrorTips")},waitlistResponseError:function(){return this.$i18n.t("waitlistResponseError")},subscribeCheckbox:function(){return this.$i18n.t("Yes, please send me the latest news about SHARD protocol.")},uuid:function(){return Object(l["a"])()},message:function(){return"https://www.shard-protocol.com/#/bsc/"+this.form.email+"/"+this.uuid}},methods:r()(r()({},Object(o["b"])("site",["setHaswaitlistSuccess","setSession"])),{},{toWaitlist:function(){console.log("towaitlist",this.form,u["a"]),this.sendMail()},sendMail:function(){var e=this;f["a"].sendForm("gmail","template_862cpgh",this.$refs.form,"user_5tg0FET3j1oBVco0c6R7z").then((function(t){console.log("SUCCESS!",t.text);var i={email:e.form.email,token:e.uuid},s=u["a"].itemApi.addItem(i);s&&(e.isSended=!0)}),(function(e){console.log("FAILED...",e.text)}))},msgAlert:function(e){this.$q.notify({message:e,position:"center",timeout:"3000",classes:"notify"})},showInputClear:function(e,t){this.clearable[e]=t},checkFormEmail:function(e){return this.isCheckFormEmail=!(Object(m["a"])(e)||this.emailErrorTips),Object(m["a"])(e)||this.emailErrorTips}}),beforeRouteEnter:function(e,t,i){var s={name:t.name,params:t.params,query:t.query};t.name&&"waitlist"!==t.name&&"setPassword"!==t.name&&"register"!==t.name&&"forgetpwd"!==t.name&&c["a"].set("afterwaitlistToPage",JSON.stringify(s)),i()}},h=p,v=(i("9e83"),i("daba"),i("2877")),w=Object(v["a"])(h,s,n,!1,null,"b72f0f48",null);t["default"]=w.exports},"365c":function(e,t,i){"use strict";var s=i("c72e"),n=i.n(s),a={id:"78JDdXAjViimWf8mye5ek44E-gzGzoHsz",key:"71NlRY0SsGRPWcweLPB2nelf",server:"https://78jddxaj.lc-cn-n1-shared.com"};n.a.init({appId:a.id,appKey:a.key,serverURL:a.server}),window.AV=n.a;i("7db0");function r(e){throw console.log(e),e}var o={getCurrUser:function(){return n.a.User.current()},logOut:function(){return n.a.User.logOut()},getItemList:function(){return new n.a.Query("TestObject").find().catch(r)},addItem:function(e){var t,i=n.a.Object.extend("SHARD_Email"),s=new i;for(t in e)s.set(t,e[t]);return s.save().then((function(e){console.log("SHARD_Email已经创建",e)})).catch(r)},addBSC:function(e){var t,i=n.a.Object.extend("SHARD_BSC"),s=new i;for(t in e)s.set(t,e[t]);return s.save().then((function(e){console.log("SHARD_BSC已经创建",e)})).catch(r)}};t["a"]={itemApi:o}},"38e8":function(e,t,i){},"4ec3":function(e,t,i){"use strict";i("d3b7"),i("e6cf"),i("a748")},5464:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i("ac1f"),i("466d"),i("d81d"),i("5319");function s(e){var t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,i=e;return!!i.match(t)}},"7deb":function(e,t,i){},"9e83":function(e,t,i){"use strict";i("db33")},daba:function(e,t,i){"use strict";i("7deb")},db33:function(e,t,i){},e067:function(e,t,i){"use strict";i("38e8")},e91a:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["btn-"+e.btnColor,"link-btn-2",e.extraClass],on:{click:e.clickEvent}},[i("span",[e._v(e._s(e.buttonText))])])},n=[],a={props:{text:{type:String,default:""},color:{type:String,default:"accent"},disable:{type:Boolean,default:!1},extraClass:{type:String,default:""}},computed:{toViewText:function(){return this.$i18n.t("$common.$buttons.shopNow")},buttonText:function(){return this.text||this.toViewText},btnColor:function(){return this.disable?"disable":this.color?this.color:"primary"}},methods:{clickEvent:function(){if(this.disable)return!1;this.$emit("click")}}},r=a,o=(i("e067"),i("2877")),c=Object(o["a"])(r,s,n,!1,null,"eac9b07e",null);t["a"]=c.exports}}]);