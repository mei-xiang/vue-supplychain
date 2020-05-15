<template>
  <div class="login">
    <div class="box">
      <img class="loginContent" src="~assets/images/loginContent.png" alt />
      <img class="loginTitle" src="~assets/images/loginTitle.png" alt />
      <el-form ref="userFormRef" :model="userForm" label-width="80px">
        <h3>帐号登录</h3>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.username" placeholder="用户名/邮箱/手机号码"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="row">
            <el-input v-model="userForm.password" placeholder="密码" type="password"></el-input>
          </div>
        </el-form-item>
        <div class="moreBtn">
          <a class="sign" @click="sign">立即注册</a>
          <a class="forget">忘记密码?</a>
        </div>
        <el-form-item>
          <el-button type="primary" size="medium" round @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from 'network/login'
import { LEASEID } from 'common/const'
import md5 from 'js-md5'

export default {
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      if (!this.userForm.username) return this.$message.error('账号不能为空')
      if (!this.userForm.password) return this.$message.error('密码不能为空')

      // 发送请求，存储token，进行跳转
      this.userForm.password = md5(this.userForm.password)
      const res = await login({ ...this.userForm, leaseId: LEASEID })
      const { data, code } = res.data
      if (code == 0) {
        localStorage.setItem('uuid', data[0].uuid)
        localStorage.setItem('companyId', data[0].companyId)
        this.$router.push('/enterprise')
      }
    },
    sign() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scope>
.login {
  width: 100vw;
  height: 100vh;
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
    height: 460px;
    background: #e7ebfc;
    box-shadow: 10px 10px 40px 0px rgba(1, 8, 37, 0.1);
    border-radius: 36px;
    padding: 60px;
    .el-form-item__content {
      margin-left: 0 !important;
    }
    .moreBtn {
      width: 100%;
      height: 30px;
      a {
        display: flex;
        line-height: 30px;
        font-size: 14px;
        cursor: pointer;
        &.sign {
          float: left;
          color: #1989fa;
        }
        &.forget {
          float: right;
          color: #b6b6c3;
        }
      }
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
  }
}
</style>
