(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0e9928a"],{"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"left-con"}),s("div",{staticClass:"right-con"},[s("div",{staticClass:"title"},[e._v("个人作品管理系统")]),s("div",{staticClass:"loginForm"},[s("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,"label-width":100}},[s("FormItem",{staticClass:"input-item",attrs:{prop:"userName",label:"用户名："}},[s("Input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.formInline.userName,callback:function(r){e.$set(e.formInline,"userName",r)},expression:"formInline.userName"}})],1),s("FormItem",{staticClass:"input-item",attrs:{prop:"password",label:"密码："}},[s("Input",{attrs:{type:"text",placeholder:"请输入密码"},model:{value:e.formInline.password,callback:function(r){e.$set(e.formInline,"password",r)},expression:"formInline.password"}})],1),s("FormItem",{staticClass:"input-item",attrs:{prop:"repeatPassword",label:"确认密码："}},[s("Input",{attrs:{type:"text",placeholder:"请再次输入密码"},model:{value:e.formInline.repeatPassword,callback:function(r){e.$set(e.formInline,"repeatPassword",r)},expression:"formInline.repeatPassword"}})],1),s("Row",[s("Col",{attrs:{span:"12",align:"center"}},[s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:e.goBack}},[e._v("返回登录")])],1)],1),s("Col",{attrs:{span:"12",align:"center"}},[s("FormItem",[s("Button",{attrs:{type:"primary"},on:{click:function(r){return e.registerHandler()}}},[e._v("注册")])],1)],1)],1)],1)],1)])])])},a=[],n={data:function(){return{formInline:{userName:"",password:"",repeatPassword:"",safeCode:""},ruleInline:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],repeatPassword:[{required:!0,message:"此处不能为空",trigger:"blur"}]}}},methods:{goBack:function(){history.go(-1)},registerHandler:function(){var e=this,r={userName:this.formInline.userName,password:this.formInline.password};this.$refs["formInline"].validate((function(s){s&&(e.formInline.password==e.formInline.repeatPassword?e.$post("/user/register",{params:r}).then((function(r){0==r.err?e.$Message.success(r.message):(e.$Message.destroy(),e.$Message.error(r.message))})).catch((function(e){console.log(e)})):e.$Message.error("两次密码不一样，请重新输入"))}))}}},o=n,i=(s("a894"),s("2877")),l=Object(i["a"])(o,t,a,!1,null,null,null);r["default"]=l.exports},a894:function(e,r,s){"use strict";var t=s("db38"),a=s.n(t);a.a},db38:function(e,r,s){}}]);
//# sourceMappingURL=chunk-a0e9928a.123af6a8.js.map