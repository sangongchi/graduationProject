(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aeadd054"],{"1fbe":function(e,a,t){},b349:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"out-container"},[t("div",{staticClass:"upload-container"},[t("div",{staticClass:"top-categery"},[e._v("上传")]),t("div",{staticClass:"main-content"},[t("Form",{ref:"submitForm",attrs:{"label-position":"left","label-width":100,rules:e.submitRuler,model:e.uploadInfo}},[t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"文件名称:",prop:"fileName"}},[t("Input",{model:{value:e.uploadInfo.fileName,callback:function(a){e.$set(e.uploadInfo,"fileName",a)},expression:"uploadInfo.fileName"}})],1)],1)],1),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"文件分类:",prop:"classType"}},[t("Select",{model:{value:e.uploadInfo.classType,callback:function(a){e.$set(e.uploadInfo,"classType",a)},expression:"uploadInfo.classType"}},e._l(e.classList,(function(a,i){return t("Option",{key:a.name+i,attrs:{value:a.value}},[e._v(e._s(a.name))])})),1)],1)],1)],1),t("Row",[t("Col",{attrs:{span:"24"}},[t("FormItem",{attrs:{label:"文件描述:",prop:"fileDesrc"}},[t("Input",{model:{value:e.uploadInfo.fileDesrc,callback:function(a){e.$set(e.uploadInfo,"fileDesrc",a)},expression:"uploadInfo.fileDesrc"}})],1)],1)],1),2==e.uploadInfo.classType?t("Row",[t("Col",{staticStyle:{"margin-bottom":"20px","margin-left":"100px"},attrs:{span:"24"}},[t("RadioGroup",{model:{value:e.imgType,callback:function(a){e.imgType=a},expression:"imgType"}},[t("Radio",{attrs:{label:"精选图片"}}),t("Radio",{attrs:{label:"设计图"}}),t("Radio",{attrs:{label:"摄影图"}})],1)],1)],1):e._e()],1),""!=e.uploadInfo.classType?t("div",[2!=e.uploadInfo.classType&&3!=e.uploadInfo.classType?t("div",{staticClass:"upload-box"},[t("div",{staticClass:"upload-title"},[e._v("上传源文件：")]),t("div",{staticClass:"z-upload"},[t("Icon",{staticClass:"inputIcon",staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t("input",{ref:"uploadFile",staticClass:"inputStyle",attrs:{type:"file"},on:{change:e.beforeUpload}})],1),t("div",{staticClass:"uploadBtn"},[e._v(e._s(e.fileName)),""!=e.fileName?t("Button",{attrs:{type:"primary"},on:{click:function(a){return e.deleteInfo("file")}}},[e._v("删除")]):e._e()],1)]):e._e(),3==e.uploadInfo.classType?t("div",{staticClass:"upload-box"},[t("div",{staticClass:"upload-title"},[e._v("上传视频源文件：")]),t("div",{staticClass:"z-upload"},[t("Icon",{staticClass:"inputIcon",staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t("input",{ref:"uploadVideo",staticClass:"inputStyle",attrs:{type:"file"},on:{change:e.beforeUploadVideo}})],1),t("div",{staticClass:"uploadBtn"},[e._v(e._s(e.videoName)+" "),""!=e.videoName?t("Button",{attrs:{type:"primary"},on:{click:function(a){return e.deleteInfo("video")}}},[e._v("删除")]):e._e()],1)]):e._e(),2==e.uploadInfo.classType?t("div",{staticClass:"upload-box"},[t("div",{staticClass:"upload-title"},[e._v(e._s(2==e.uploadInfo.classType?"上传图片文件：":"上传封面图："))]),t("div",{staticClass:"z-upload"},[t("Icon",{staticClass:"inputIcon",staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t("input",{ref:"uploadImg",staticClass:"inputStyle",attrs:{type:"file"},on:{change:e.beforeUploadImg}})],1),t("div",{staticClass:"uploadBtn"},[e._v(e._s(e.imgName)),""!=e.imgName?t("Button",{attrs:{type:"primary"},on:{click:function(a){return e.deleteInfo("img")}}},[e._v("删除")]):e._e()],1)]):e._e()]):e._e(),t("Button",{staticClass:"submitBtn",attrs:{type:"primary"},on:{click:e.submitHandler}},[e._v("提交")])],1)])])},s=[],o={name:"UploadFile",data:function(){var e=function(e,a,t){""!==a?t():t(new Error("请输入文件名称"))};return{imgType:"",classList:[{name:"源文件",value:1},{name:"图片",value:2},{name:"视频",value:3}],uploadInfo:{classType:"",fileName:"",fileDesrc:"",fileSrc:""},submitRuler:{fileName:[{required:!0,validator:e,trigger:"blur"}],classType:[{required:!0,message:"请选择文件类型",trigger:"change",type:"number"}],fileDesrc:[{required:!0,message:"请输入文件描述信息",trigger:"blur"}]},fileSrc:"",fileName:"",videoSrc:"",videoName:"",imgSrc:"",imgName:""}},methods:{deleteInfo:function(e){"img"==e?(this.imgName="",this.imgSrc=""):"file"==e?(this.fileName="",this.fileSrc=""):"video"==e&&(this.videoName="",this.videoSrc="")},beforeUpload:function(e){var a=this;this.$loading.show();var t=new FormData;t.append("file",e.target.files[0]),this.$post("/upload/file",t).then((function(e){a.$loading.hide(),a.fileSrc=e.url,a.fileName=e.originalname})).catch((function(e){console.log(e)}))},beforeUploadVideo:function(e){var a=this;this.$refs["submitForm"].validate((function(t){if(t){a.$loading.show();var i=new FormData;i.append("file",e.target.files[0]),a.$post("/upload/video",i).then((function(e){a.$loading.hide(),a.videoSrc=e.url,a.videoName=e.originalname})).catch((function(e){console.log(e)}))}else a.$Message.error("请填写所有必填项")}))},beforeUploadImg:function(e){var a=this,t=new FormData;t.append("file",e.target.files[0]),this.$post("/upload/img",t).then((function(e){a.imgSrc=e.url,a.imgName=e.originalname})).catch((function(e){console.log(e)}))},submitHandler:function(){var e=this,a=this.uploadInfo;a.userId="123456",a.fileSrc=this.fileSrc,a.imgSrc=this.imgSrc,a.originalname=this.fileName,3==this.uploadInfo.classType?(a.fileSrc=this.videoSrc,a.originalname=this.videoName):2==this.uploadInfo.classType&&(a.originalname=this.imgName,a.fileSrc=this.imgSrc,"精选图片"==this.imgType?a.imgType=0:"设计图"==this.imgType?a.imgType=1:a.imgType=2),console.log(a),this.$refs["submitForm"].validate((function(t){t?2==e.uploadInfo.classType&&""==e.imgName?e.$Message.error("请上传图片文件"):3==e.uploadInfo.classType&&""==e.videoName?e.$Message.error("请上传视频文件"):""==a.fileSrc?e.$Message.error("请上传文件"):e.$post("/upload/upfile",a).then((function(a){e.$Message.success("文件上传成功")})).catch((function(a){e.$Message.error("服务器异常")})):e.$Message.error("请按要求上传")}))}}},l=o,n=(t("eb80"),t("2877")),r=Object(n["a"])(l,i,s,!1,null,null,null);a["default"]=r.exports},eb80:function(e,a,t){"use strict";var i=t("1fbe"),s=t.n(i);s.a}}]);
//# sourceMappingURL=chunk-aeadd054.ecdc2e3e.js.map