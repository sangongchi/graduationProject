<template>
  <div class="login-container">
    <div class="content">
      <div class="left-con">左边图片区域</div>
      <div class="right-con">
        <div class="title">个人作品管理系统</div>
        <div class="loginForm">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="100">
            <FormItem prop="userName" class="input-item" label="用户名：">
              <Input type="text" v-model="formInline.userName" placeholder="请输入用户名"></Input>
            </FormItem>

            <FormItem prop="password" class="input-item" label="密码：">
              <Input type="text" v-model="formInline.password" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem prop="repeatPassword" class="input-item" label="确认密码：">
              <Input type="text" v-model="formInline.repeatPassword" placeholder="请再次输入密码"></Input>
            </FormItem>
            <FormItem class="input-item safeCode-item" label="验证码：">
              <Input type="text" v-model="formInline.safeCode" placeholder="验证码"></Input>
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
        repeatPassword: '',
        safeCode: ''
      },
      ruleInline: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        repeatPassword: [
          {
            required: true,
            message: '此处不能为空',
            trigger: 'blur'
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
      this.$refs['formInline'].validate(valid => {
        if (valid) {
          if (this.formInline.password == this.formInline.repeatPassword) {
            this.$post('/user/register', { params })
              .then(res => {
                if (res.err == 0) {
                  this.$Message.success(res.message);
                } else {
                  this.$Message.destroy()
                  this.$Message.error(res.message);
                }
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            this.$Message.error('两次密码不一样，请重新输入');
          }
        }
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
        width: 80%;
        margin: 10px auto;
        .input-item {
          width: 100%;
        }
        .safeCode-item {
          position: relative;
          overflow: hidden;
        }
        .forgetPass {
          text-align: right;
        }
      }
    }
  }
}
</style>
