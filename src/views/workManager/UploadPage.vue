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
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p class="tips">Click or drag files here to upload</p>
            </div>
          </Upload>
        </div>
        <div class="upload-box">
          <div class="upload-title">上传封面图：</div>
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p class="tips">
                将文件拖动到此处，或者 点击上传
                <br />支持PNG/JPG格式，不超过10M
              </p>
            </div>
          </Upload>
        </div>
      </div>
      <Button type="primary" @click="submitFun">submit</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UploadFile',
  data() {
    const fileNameCheck=(rule,value,callback)=>{
      if(value!==''){
        callback()
      }else{
        callback(new Error('请输入文件名称'))
      }
    }
    return {
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
        fileDesrc: ''
      },
      submitRuler:[
        
      ]
    };
  },
  methods: {
    submitFun(){
      console.log(this.uploadInfo)
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
