<template>
  <div class="register">
    <div class="box">
      <img class="loginContent" src="~assets/images/loginContent.png" alt />
      <img class="loginTitle" src="~assets/images/loginTitle.png" alt />
      <el-form ref="userFormRef" :model="userForm" label-width="80px">
        <h3>注册帐号</h3>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.companyName" placeholder="公司名称"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.username" placeholder="账户"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.password" placeholder="密码" type="password"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.pwd1" placeholder="确认密码" type="password"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="medium" round @click="register">注册</el-button>
        </el-form-item>
        <div class="loginSpan">
          <span>已有账号？</span>
          <span class="loginBtn" @click="login">立即登录</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from 'network/register'
import { LEASEID } from 'common/const'
import md5 from 'js-md5'

export default {
  data() {
    return {
      userForm: {
        companyName: '',
        username: '',
        password: '',
        pwd1: '',
        leaseId: LEASEID
      }
    }
  },
  methods: {
    async register() {
      for (var key in this.userForm) {
        if (!this.userForm[key]) {
          this.$message.error('必填项不能为空')
          return
        }
      }
      // 发送请求，进行注册
      this.userForm.password = md5(this.userForm.password)
      this.userForm.pwd1 = md5(this.userForm.pwd1)
      if (this.userForm.password !== this.userForm.pwd1) {
        this.$message.error('两次密码不能为空')
      }
      const res = await register(this.userForm)
      const { data, code } = res.data
      if (code == 0) {
        this.$router.push('/login')
      }
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scope>
.register {
  width: 100%;
  height: 100%;
  background-image: url('~assets/images/login_bg.jpg');
  position: relative;
  .box {
    width: 100%;
    height: 100%;
    .loginContent {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .loginTitle {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .el-form {
    text-align: center;
    position: absolute;
    top: 50%;
    right: 100px;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 460px;
    height: 560px;
    background: #e7ebfc;
    box-shadow: 10px 10px 40px 0px rgba(1, 8, 37, 0.1);
    border-radius: 36px;
    padding: 60px;
    .el-form-item__content {
      margin-left: 0 !important;
    }
    h3 {
      text-align: center;
      font-size: 26px;
      margin: 0;
      margin-bottom: 60px;
      color: #2c2a31;
    }
    .row {
      position: relative;
      width: 100%;
      // margin-top: 10px;
      height: 46px;
      line-height: 46px;
      border-bottom: 1px solid #b6b6c3;
      input {
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        background: transparent;
        font-size: 16px;
      }
    }
    .el-button {
      display: block;
      width: 100%;
      height: 60px;
      margin-top: 30px;
      background: #1989fa;
      border-radius: 32px;
      cursor: pointer;
      font-size: 18px;
    }
    .loginSpan {
      margin-top: 24px;
      font-size: 14px;
      color: #909399;
      text-align: center;
      .loginBtn {
        color: #1989fa;
        cursor: pointer;
      }
    }
  }
}
</style>
