<template>
  <div class="com-login">
    <div class="img">
      <img src="@/assets/images/loginbg.jpg" alt="" />
    </div>
    <div class="login">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录" name="first">
          <el-input
            placeholder="邮箱/手机号码/小米ID"
            v-model.trim="user"
            clearable
          >
          </el-input>
          <el-input
            placeholder="密码"
            v-model.trim="password"
            show-password
          ></el-input>
          <el-button type="text" @click="login">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <el-input
            placeholder="邮箱/手机号码/小米ID"
            v-model.trim="myUser"
            clearable
          >
          </el-input>
          <el-input
            placeholder="密码"
            v-model.trim="myPassword"
            show-password
          ></el-input>
          <el-button type="text" @click="register">注册</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      activeName: "first",
      user: "",
      password: "",
      myUser: "",
      myPassword: "",
    };
  },
  methods: {
    register() {
      if (this.myUser !== "" && this.myPassword !== "") {
        localStorage.setItem("myuser", this.myUser);
        localStorage.setItem("mypassword", this.myPassword);
        alert("注册成功！");
        this.$router.push("/");
        // console.log("注册成功", localStorage.myuser);
      } else {
        alert("注册失败！");
      }
    },
    login() {
      if (
        this.user === localStorage.myuser &&
        this.password === localStorage.mypassword
      ) {
        alert("登录成功！");
        this.$router.push("/");
      } else {
        alert("登录失败！");
      }
    },
  },
};
</script>

<style lang='less' scoped>
html,
body,
div {
  margin: 0;
  padding: 0;
}
.com-login {
  position: relative;
  .img {
    width: 380px;
    height: 760px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .login {
    position: absolute;
    left: 600px;
    top: 100px;
    width: 400px;
    height: 300px;
    margin: 100px auto;
    padding: 50px;
    box-shadow: 1px 1px 4px;
    /deep/ .el-tabs__item.is-active {
      color: #ff5c00;
    }
    /deep/ .el-tabs__item:hover {
      color: #ff5c00;
    }
    /deep/ .el-tabs__item {
      font-size: 22px;
    }
    /deep/ .el-tabs__active-bar {
      background-color: #ff5c00;
    }
    /deep/ .el-input__inner {
      height: 60px;
      margin: 10px 0;
    }
    /deep/ .el-button {
      width: 400px;
      height: 60px;
      color: #fff;
      font-size: 18px;
      background-color: #ffcba9;
    }
    /deep/ .el-button:focus,
    .el-button:hover {
      color: #fff;
    }
  }
}
</style>