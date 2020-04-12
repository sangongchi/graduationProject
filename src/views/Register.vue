<template>
  <div class="login-container">
    <div class="content">
      <div class="left-con">左边图片区域</div>
      <div class="right-con">
        <div class="title">个人作品管理系统</div>
        <div class="loginForm">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="userName" class="input-item">
              <Input type="text" v-model="formInline.userName" placeholder="请输入用户名"></Input>
            </FormItem>

            <FormItem prop="password" class="input-item">
              <Input type="text" v-model="formInline.password" placeholder="请输入密码"></Input>
            </FormItem>

            <FormItem class="input-item safeCode-item">
              <Input type="text" v-model="formInline.safeCode" placeholder="验证码"></Input>
              <div class="codeImg"></div>
            </FormItem>
            <Row>
              <Col span="12" align="center">
                <FormItem>
                  <Button type="primary" @click="goBack">返回登录</Button>
                </FormItem>
              </Col>
              <Col span="12" align="center">
                <FormItem>
                  <Button type="primary" @click="registerHandler()">注册</Button>
                </FormItem>
              </Col>
            </Row>
            <div class="forgetPass">忘记密码</div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        userName: '',
        password: '',
        safeCode: ''
      },
      ruleInline: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }
        ]
      }
    };
  },
  methods: {
    goBack() {
      history.go(-1);
    },
    registerHandler() {
      let params = {
        userName: this.formInline.userName,
        password: this.formInline.password
      };
      this.$post('/register', { params })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss">
.login-container {
  font-family: AdobeHeitiStd-Regular;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #6e68ee;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 960px;
    height: 430px;
    background-color: #ffffff;
    display: flex;
    .left-con {
      width: 50%;
      height: 100%;
      background-color: antiquewhite;
    }
    .right-con {
      width: 50%;
      height: 100%;
      .title {
        font-size: 26px;
        padding-top: 30px;
        padding-bottom: 30px;
        color: #333;
        text-align: center;
      }
      .loginForm {
        width: 60%;
        margin: 10px auto;
        .input-item {
          width: 100%;
        }
        .safeCode-item {
          position: relative;
          overflow: hidden;
          .codeImg {
            width: 60px;
            height: 80%;
            background-color: #6e68ee;
            position: absolute;
            right: 3px;
            top: 5px;
            border-radius: 5px;
          }
        }
        .forgetPass {
          text-align: right;
        }
      }
    }
  }
}
</style>
