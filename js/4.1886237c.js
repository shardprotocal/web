(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"160d":function(t,e,s){"use strict";s("f7ea")},"25b5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"waitlist"},[s("div",{staticClass:"main"},[s("div",{staticClass:"out-link"},[s("a",{staticClass:"external link-tw",attrs:{href:"https://twitter.com/shardprotocol"}},[t._v("https://twitter.com/shardprotocol")]),s("a",{staticClass:"external link-t",attrs:{href:"https://t.me/shardprotocol"}},[t._v("https://t.me/shardprotocol")])]),s("div",{staticClass:"row main-row"},[s("div",{staticClass:"col-md-6 col-sm-12 field"},[s("div",{staticClass:"declaration"},[t._v("Build our own a new world.")])]),s("div",{staticClass:"col-md-6 col-sm-12 field form"},[s("div",{staticClass:"logo"},[t._v("Shard Protocol")]),s("div",{staticClass:"tab"},[s("p",[t._v("Game")]),s("p",{staticClass:"mid"},[t._v("NFT")]),s("p",[t._v("Metaverse")])]),s("h1",[t._v(t._s(t.waitlistHeading))]),s("div",{staticClass:"email-info"},[s("p",{staticClass:"title"},[t._v("your mail address:")]),s("p",{staticClass:"email"},[t._v(t._s(this.email))])]),s("div",{staticClass:"email-info"},[s("p",{staticClass:"title"},[t._v("your BSC address:")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSended,expression:"!isSended"}],staticClass:"form-box"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 field"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-xs-12 field"},[s("q-input",{ref:"bsc",attrs:{outlined:"",dense:"","bg-color":"white",clearable:t.form.bsc&&t.clearable.bsc,"clear-icon":"close",placeholder:t.userNameTxt,autoComplete:"off","lazy-rules":"",rules:[function(t){return null!==t&&""!==t}]},on:{blur:function(e){return t.showInputClear("username",!1)},focus:function(e){return t.showInputClear("username",!0)}},model:{value:t.form.bsc,callback:function(e){t.$set(t.form,"bsc",e)},expression:"form.bsc"}})],1)])])]),s("div",{staticClass:"submit"},[s("q-btn",{staticClass:"btn ",attrs:{color:"primary",label:t.$t("Join waitlist"),disable:0===t.form.bsc.length},on:{click:t.toWaitlist}})],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isSended,expression:"isSended"}],staticClass:"success-box"},[s("q-input",{attrs:{filled:"",type:"textarea",disable:"",readonly:""},model:{value:t.form.bsc,callback:function(e){t.$set(t.form,"bsc",e)},expression:"form.bsc"}})],1)])])])])},n=[],r=s("ded3"),a=s.n(r),o=(s("99af"),s("b0c0"),s("2f62")),c=s("b178"),l=(s("4ec3"),s("365c")),u=s("5464"),d=s("e91a"),m={"0x5c8fe8B4d98eb12C577AB10f2F4c4630AbBD0114":!0},f={name:"waitlist",components:{"link-btn":d["a"]},data:function(){return{form:{bsc:"",token:""},accept:!1,metaDescription:"",metaKeywords:"",clearable:{email:!1},isSended:!1,email:""}},meta:function(){var t=this;return{title:this.waitlistHeading,titleTemplate:function(e){return"".concat(e," - ").concat(t.$i18n.t("Build our own a new world."))},meta:{description:{name:"description",content:this.metaDescription},keywords:{name:"keywords",content:this.metaKeywords},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}}},computed:{waitlistHeading:function(){return this.$i18n.t("Welcome to SHARDverse.")},newCustomers:function(){return this.$i18n.t("newCustomers")},userNameTxt:function(){return this.$i18n.t("Enter your BSC address:")},registeredCustomers:function(){return this.$i18n.t("registeredCustomers")},registerTips:function(){return this.$i18n.t("registerTips")},registerLinkText:function(){return this.$i18n.t("registerLinkText")},signinTips:function(){return this.$i18n.t("signinTips")},signinBtn:function(){return this.$i18n.t("Join waitlist")},forgetPWDLink:function(){return this.$i18n.t("forgetPWDLink")},emailAddressRequired:function(){return this.$i18n.t("Please enter a valid email address.")},emailErrorTips:function(){return this.$i18n.t("Please enter a valid email address. For example johndoe@domain.com.")},curPWDRequired:function(){return this.$i18n.t("curPWDRequired")},pwdErrorTips:function(){return this.$i18n.t("pwdErrorTips")},waitlistResponseError:function(){return this.$i18n.t("waitlistResponseError")},subscribeCheckbox:function(){return this.$i18n.t("Yes, please send me the latest news about SHARD protocol.")}},methods:a()(a()({},Object(o["b"])("site",["setHaswaitlistSuccess","setSession"])),{},{toWaitlist:function(){console.log("towaitlist",this.form,l["a"]);var t={email:this.email,token:this.form.token,bsc:this.form.bsc};if(m[this.form.bsc])this.isSended=!0;else{var e=l["a"].itemApi.addBSC(t);e&&(this.isSended=!0)}},msgAlert:function(t){this.$q.notify({message:t,position:"center",timeout:"3000",classes:"notify"})},showInputClear:function(t,e){this.clearable[t]=e},checkFormEmail:function(t){return this.isCheckFormEmail=!(Object(u["a"])(t)||this.emailErrorTips),Object(u["a"])(t)||this.emailErrorTips}}),created:function(){console.log("created",this.$route.params),this.$route.params.e?(this.email=this.$route.params.e,this.form.token=this.$route.params.b):this.$router.push({name:"register"})},beforeRouteEnter:function(t,e,s){var i={name:e.name,params:e.params,query:e.query};e.name&&"waitlist"!==e.name&&"setPassword"!==e.name&&"register"!==e.name&&"forgetpwd"!==e.name&&c["a"].set("afterwaitlistToPage",JSON.stringify(i)),s()}},h=f,p=(s("160d"),s("c846"),s("2877")),w=Object(p["a"])(h,i,n,!1,null,"75e421c5",null);e["default"]=w.exports},"2e60":function(t,e,s){},"365c":function(t,e,s){"use strict";var i=s("c72e"),n=s.n(i),r={id:"78JDdXAjViimWf8mye5ek44E-gzGzoHsz",key:"71NlRY0SsGRPWcweLPB2nelf",server:"https://78jddxaj.lc-cn-n1-shared.com"};n.a.init({appId:r.id,appKey:r.key,serverURL:r.server}),window.AV=n.a;s("7db0");function a(t){throw console.log(t),t}var o={getCurrUser:function(){return n.a.User.current()},logOut:function(){return n.a.User.logOut()},getItemList:function(){return new n.a.Query("TestObject").find().catch(a)},addItem:function(t){var e,s=n.a.Object.extend("SHARD_Email"),i=new s;for(e in t)i.set(e,t[e]);return i.save().then((function(t){console.log("SHARD_Email已经创建",t)})).catch(a)},addBSC:function(t){var e,s=n.a.Object.extend("SHARD_BSC_nw"),i=new s;for(e in t)i.set(e,t[e]);return i.save().then((function(t){console.log("SHARD_BSC已经创建",t)})).catch(a)}};e["a"]={itemApi:o}},"38e8":function(t,e,s){},"4ec3":function(t,e,s){"use strict";s("d3b7"),s("e6cf"),s("a748")},5464:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s("ac1f"),s("466d"),s("d81d"),s("5319");function i(t){var e=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,s=t;return!!s.match(e)}},c846:function(t,e,s){"use strict";s("2e60")},e067:function(t,e,s){"use strict";s("38e8")},e91a:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["btn-"+t.btnColor,"link-btn-2",t.extraClass],on:{click:t.clickEvent}},[s("span",[t._v(t._s(t.buttonText))])])},n=[],r={props:{text:{type:String,default:""},color:{type:String,default:"accent"},disable:{type:Boolean,default:!1},extraClass:{type:String,default:""}},computed:{toViewText:function(){return this.$i18n.t("$common.$buttons.shopNow")},buttonText:function(){return this.text||this.toViewText},btnColor:function(){return this.disable?"disable":this.color?this.color:"primary"}},methods:{clickEvent:function(){if(this.disable)return!1;this.$emit("click")}}},a=r,o=(s("e067"),s("2877")),c=Object(o["a"])(a,i,n,!1,null,"eac9b07e",null);e["a"]=c.exports},f7ea:function(t,e,s){}}]);