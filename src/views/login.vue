<template>
  <div :class="$style.login">
    <div :class="$style.main">
      <div :class="$style.form">
        <img :class="$style.logo" src="~/assets/images/logo-03.png"/>
        <h2 :class="$style.title">你好！欢迎登陆管理系统</h2>
        <p :class="$style.text">输入信息，让我们继续吧</p>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules">

          <el-form-item prop="name">
            <el-input
              placeholder="请输入名称"
              v-model="ruleForm.name"
              suffix-icon="el-icon-user" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
            placeholder="请输入密码"
            v-model="ruleForm.password"
            type="password"
            suffix-icon="el-icon-lock"/>
          </el-form-item>

          <el-form-item>
            <div :class="$style.foot">
              <el-checkbox v-model="checked">保持登录状态</el-checkbox>
              <b>忘记密码？</b>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button @click="login" :class="$style['login-btn']" type="primary">
              登陆
            </el-button>
          </el-form-item>
        </el-form>
        <p :class="$style.account">
          没有帐户？
          <router-link :to="{ path: '/register' }" :class="$style.link">
            创建
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import CryptoJS from 'crypto-js';
// import { login } from 'wrapper/ajax/users';

export default {
  computed: {
    rules() {
      return {
        name: [
          {
            required: true,
            message: '请输入名称',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      };
    },

  },
  data() {
    return {
      checked: '',
      ruleForm: {
        name: '',
        password: '',
      },
    };
  },
  created() {
    window.yangpanLoading.hide();
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          // const { name, password } = this.ruleForm;
          // login({
          //   name,
          //   password: CryptoJS.MD5(password).toString(),
          // }).then(((res) => {
          //   localStorage.setItem('userToken', res.data.token);
          //   this.$router.push({ path: '/' });
          // }));
        }
      });
    },
  },
};
</script>

<style lang="scss" module>
.login{
  .main {
    width: 100vw;
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
    justify-content: center;
    .form{
      width: 520px;
      background: white;
      padding: 3rem;
      :global(.el-input__inner){
        height: 50px;
        line-height: 50px;
      }
      .logo{
        width: 160px;
        padding-bottom: 20px;
      }
      .title{
        font-weight:800;
        color: #000000;
      }
      .text{
        line-height: 21px;
        font-size: 14px;
        padding-bottom: 30px;
        font-weight:300;
      }
      .foot {
        display: flex;
        justify-content: space-between;
      }
      .login-btn{
        width: 100%;
      }
      .account{
        text-align: center;
        .link{
          color: #409EFF;
        }
      }
    }
  }
}
</style>
