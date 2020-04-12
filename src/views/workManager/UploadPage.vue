<template>
  <div class="out-container">
    <div class="upload-container">
      <div class="top-categery">上传</div>
      <div class="main-content">
        <Form
          label-position="left"
          :label-width="100"
          :rules="submitRuler"
          ref="submitForm"
          :model="uploadInfo"
        >
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
                  <Option
                    v-for="item in classList"
                    :value="item.value"
                    :key="item.value"
                  >{{ item.name }}</Option>
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
        </Form>
        <div class="upload-box">
          <div class="upload-title">上传源文件：</div>
          <div class="z-upload">
            <Icon type="ios-cloud-upload" class="inputIcon" size="52" style="color: #3399ff"></Icon>
            <input type="file" ref="uploadFile" class="inputStyle" @change="beforeUpload" />
          </div>
        </div>
        <div class="upload-box">
          <div class="upload-title">上传封面图：</div>
          <div class="z-upload">
            <Icon type="ios-cloud-upload" class="inputIcon" size="52" style="color: #3399ff"></Icon>
            <input type="file" ref="uploadImg" class="inputStyle" @change="beforeUploadImg" />
          </div>
        </div>
        <Button type="primary" @click="submitData">提交</Button>
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
      files: [],
      classList: [
        {
          name: 'unity',
          value: 1
        },
        {
          name: '图片',
          value: 2
        },
        {
          name: '视频',
          value: 3
        },
        {
          name: '3d模型',
          value: 4
        }
      ],
      uploadInfo: {
        classType: '',
        fileName: '',
        fileDesrc: '',
        fileUrl: ''
      },
      submitRuler: {
        fileName: [
          { required: true, validator: fileNameCheck, trigger: 'blur' }
        ],
        classType: [
          {
            required: true,
            message: '请选择文件类型',
            trigger: 'blur',
            type: 'number'
          }
        ],
        fileDesrc: [
          { required: true, message: '请输入文件描述信息', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    /**
     * @method beforeUpload
     * @description 使用input上传，文件改变时拦截文件并上传
     */
    beforeUpload(file) {
      this.$loading.show();
      let formData = new FormData();
      formData.append('file', file.target.files[0]);
      this.$post('/upload/file', formData)
        .then(res => {
          this.$loading.hide();
          this.uploadInfo.fileUrl = res.url;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    beforeUploadImg(file) {
      let formData = new FormData();
      formData.append('file', file.target.files[0]);
      this.$post('/upload/img', formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * @method submitData
     * @description 上传参数以及文件
     */
    submitData() {
      let params = this.uploadInfo;
      params.userId = '123456';
      this.$refs['submitForm'].validate(valid => {
        if (valid) {
          if (this.uploadInfo.fileUrl != '') {
            this.$post('/upload/info', params)
              .then(res => {
                this.$Message.success('文件上传成功');
              })
              .catch(err => {
                console.log('文件上传有误');
              });
          } else {
            this.$Message.error('请选择上传文件');
          }
        } else {
          console.log('校验未通过');
        }
      });
    }
  }
};
</script>
<style lang="scss">
.out-container {
  width: 100vw;
  min-height: 100vh;
  background: rgba(240, 242, 245, 1);
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 14px;
  .upload-container {
    margin: 0 auto;
    width: 1036px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    overflow: hidden;
    .top-categery {
      width: 100%;
      height: 56px;
      border-bottom: 1px solid #00000021;
    }
    .main-content {
      width: 500px;
      margin: 45px auto;
      .upload-box {
        width: 70%;
        .upload-title {
          margin-bottom: 13px;
        }
        .tips {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          color: rgba(154, 154, 154, 1);
          line-height: 17px;
        }
      }
    }
  }
}
</style>
