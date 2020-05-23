<template>
  <div class="out-container">
    <div class="upload-container">
      <div class="top-categery">上传</div>
      <div class="main-content">
        <Form label-position="left" :label-width="100" :rules="submitRuler" ref="submitForm" :model="uploadInfo">
          <Row>
            <Col span="24">
              <FormItem label="文件名称:" prop="fileName">
                <Input v-model="uploadInfo.fileName"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <FormItem label="文件分类:" prop="classType">
                <Select v-model="uploadInfo.classType">
                  <Option v-for="(item,index) in classList" :value="item.value" :key="item.name+index">{{ item.name }}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <FormItem label="文件描述:" prop="fileDesrc">
                <Input v-model="uploadInfo.fileDesrc"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row v-if="uploadInfo.classType == 2">
            <Col span="24" style="margin-bottom:20px;margin-left:100px">
              <RadioGroup v-model="imgType">
                <Radio label="精选图片"></Radio>
                <Radio label="设计图"></Radio>
                <Radio label="摄影图"></Radio>
              </RadioGroup>
            </Col>
          </Row>
        </Form>
        <div v-if="uploadInfo.classType != ''">
          <div class="upload-box" v-if="uploadInfo.classType != 2 && uploadInfo.classType != 3">
            <div class="upload-title">上传源文件：</div>
            <div class="z-upload">
              <Icon type="ios-cloud-upload" class="inputIcon" size="52" style="color: #3399ff"></Icon>
              <input type="file" ref="uploadFile" class="inputStyle" @change="beforeUpload" />
            </div>
            <div class="uploadBtn">{{ fileName }}<Button type="primary" v-if="fileName != ''" @click="deleteInfo('file')">删除</Button></div>
          </div>
          <div class="upload-box" v-if="uploadInfo.classType == 3">
            <div class="upload-title">上传视频源文件：</div>
            <div class="z-upload">
              <Icon type="ios-cloud-upload" class="inputIcon" size="52" style="color: #3399ff"></Icon>
              <input type="file" ref="uploadVideo" class="inputStyle" @change="beforeUploadVideo" />
            </div>
            <div class="uploadBtn">{{ videoName }} <Button type="primary" v-if="videoName != ''" @click="deleteInfo('video')">删除</Button></div>
          </div>
          <div class="upload-box" v-if="uploadInfo.classType == 2">
            <div class="upload-title">{{ uploadInfo.classType == 2 ? '上传图片文件：' : '上传封面图：' }}</div>
            <div class="z-upload">
              <Icon type="ios-cloud-upload" class="inputIcon" size="52" style="color: #3399ff"></Icon>
              <input type="file" ref="uploadImg" class="inputStyle" @change="beforeUploadImg" />
            </div>
            <div class="uploadBtn">{{ imgName }}<Button type="primary" v-if="imgName != ''" @click="deleteInfo('img')">删除</Button></div>
          </div>
        </div>
        <Button class="submitBtn" type="primary" @click="submitHandler">提交</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UploadFile',
  data() {
    const fileNameCheck = (rule, value, callback) => {
      if (value !== '') {
        callback();
      } else {
        callback(new Error('请输入文件名称'));
      }
    };
    return {
      imgType: '',
      classList: [
        {
          name: 'unity',
          value: 1,
        },
        {
          name: '图片',
          value: 2,
        },
        {
          name: '视频',
          value: 3,
        },
      ],
      uploadInfo: {
        classType: '',
        fileName: '',
        fileDesrc: '',
        fileSrc: '',
      },
      submitRuler: {
        fileName: [{ required: true, validator: fileNameCheck, trigger: 'blur' }],
        classType: [
          {
            required: true,
            message: '请选择文件类型',
            trigger: 'change',
            type: 'number',
          },
        ],
        fileDesrc: [{ required: true, message: '请输入文件描述信息', trigger: 'blur' }],
      },
      fileSrc: '',
      fileName: '',
      videoSrc: '',
      videoName: '',
      imgSrc: '',
      imgName: '',
    };
  },
  methods: {
    deleteInfo(data) {
      if (data == 'img') {
        this.imgName = '';
        this.imgSrc = '';
      } else if (data == 'file') {
        this.fileName = '';
        this.fileSrc = '';
      } else if (data == 'video') {
        this.videoName = '';
        this.videoSrc = '';
      }
    },
    /**
     * @method beforeUpload
     * @description 使用input上传，文件改变时拦截文件并上传
     */
    beforeUpload(file) {
      this.$loading.show();
      let formData = new FormData();
      formData.append('file', file.target.files[0]);
      this.$post('/upload/file', formData)
        .then((res) => {
          this.$loading.hide();
          this.fileSrc = res.url;
          this.fileName = res.originalname;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    beforeUploadVideo(file) {
      this.$refs['submitForm'].validate((valid) => {
        if (valid) {
          this.$loading.show();
          let formData = new FormData();
          formData.append('file', file.target.files[0]);
          this.$post('/upload/video', formData)
            .then((res) => {
              this.$loading.hide();
              this.videoSrc = res.url;
              this.videoName = res.originalname;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$Message.error('请填写所有必填项');
        }
      });
    },
    beforeUploadImg(file) {
      let formData = new FormData();
      formData.append('file', file.target.files[0]);
      this.$post('/upload/img', formData)
        .then((res) => {
          this.imgSrc = res.url;
          this.imgName = res.originalname;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitHandler() {
      let params = this.uploadInfo;
      params.userId = '123456';
      params.fileSrc = this.fileSrc;
      params.imgSrc = this.imgSrc;
      params.originalname = this.fileName;
      if (this.uploadInfo.classType == 3) {
        params.fileSrc = this.videoSrc;
        params.originalname = this.videoName;
      } else if (this.uploadInfo.classType == 2) {
        params.originalname = this.imgName;
        params.fileSrc = this.imgSrc;
        if (this.imgType == '精选图片') {
          params.imgType = 0;
        } else if (this.imgType == '设计图') {
          params.imgType = 1;
        } else {
          params.imgType = 2;
        }
      }
      console.log(params);
      this.$refs['submitForm'].validate((valid) => {
        if (valid) {
          if (this.uploadInfo.classType == 2 && this.imgName == '') {
            this.$Message.error('请上传图片文件');
          } else if (this.uploadInfo.classType == 3 && this.videoName == '') {
            this.$Message.error('请上传视频文件');
          } else if (params.fileSrc == '') {
            this.$Message.error('请上传文件');
          } else {
            this.$post('/upload/upfile', params)
              .then((res) => {
                this.$Message.success('文件上传成功');
              })
              .catch((err) => {
                this.$Message.error('服务器异常');
              });
          }
        } else {
          this.$Message.error('请按要求上传');
        }
      });
    },
  },
};
</script>
<style lang="scss">
.out-container {
  width: 100%;
  background: rgba(240, 242, 245, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 14px;
  .upload-container {
    margin: 0 auto;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    overflow: hidden;
    .top-categery {
      width: 100%;
      height: 56px;
      border-bottom: 1px solid #00000021;
      line-height: 56px;
      font-size: 24px;
      text-align: center;
    }
    .main-content {
      width: 500px;
      margin: 45px auto;
      position: relative;
      .upload-box {
        width: 70%;
        position: relative;
        .upload-title {
          margin-bottom: 13px;
        }
        .tips {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: rgba(154, 154, 154, 1);
          line-height: 17px;
        }
        .uploadBtn {
          line-height: 30px;
          margin: 10px 0;
          .ivu-btn {
            float: right;
          }
        }
      }
      .submitBtn {
        position: absolute;
        left: 50%;
      }
    }
  }
}
</style>
