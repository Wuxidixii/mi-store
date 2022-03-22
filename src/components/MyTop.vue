<template>
  <div>
    <div class="myTop">
      <router-link to="/cart" class="myLink">
        <i class="el-icon-shopping-cart-full"></i>
        购物车
      </router-link>
      <router-link to="/collect" class="myLink">我的收藏</router-link>
      <router-link to="/order" class="myLink">我的订单</router-link>
      <span class="myLogin" v-if="!$store.state.user.myuser">
        <button @click="toLogin">登录</button>
        <button @click="toLogin">注册</button>
      </span>
      <span class="isLogin" v-else>
        <el-popover placement="top" width="160" v-model="visible">
          <p>确定退出登录吗？</p>
          <div style="text-align: right; margin: 10px 0 0">
            <el-button size="mini" type="text" @click="visible = false"
              >取消</el-button
            >
            <el-button type="primary" size="mini" @click="lagout"
              >确定</el-button
            >
          </div>
          <el-button slot="reference">
            欢迎 {{ $store.state.user.myuser }}
          </el-button>
        </el-popover>
      </span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ff6700"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/goods">全部商品</el-menu-item>
      <div class="so">
        <el-input placeholder="请输入搜索内容" v-model="search">
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchClick"
          ></el-button>
        </el-input>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MyTop",
  data() {
    return {
      activeIndex: this.$route.path, // 头部导航栏选中的标签
      search: "", // 搜索条件
      visible: false, // 是否退出登录
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    searchClick() {
      if (this.search != "") {
        // 跳转到全部商品页面,并传递搜索条件
        this.$router.push({ path: "/goods" });
        this.search = "";
      }
    },
    lagout() {
      this.$store.commit("setUser", "");
      this.$message({
        type: "success",
        message: "成功退出登录",
      });
    },
  },
};
</script>

<style lang='less' scoped>
.myTop {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 200px;
  margin-bottom: 20px;
  height: 40px;
  background-color: #333333;
  .myLink {
    padding: 0 10px;
    line-height: 40px;
    text-decoration: none;
    font-size: 14px;
    color: #b0b0b0;
    &:hover {
      color: #fff;
    }
    &:nth-child(1) {
      background-color: #424242;
    }
    &:nth-child(1):hover {
      background-color: #fff;
      color: #ff5c00;
    }
  }
  .myLogin {
    button {
      padding: 0 5px;
      line-height: 40px;
      text-decoration: none;
      color: #b0b0b0;
      font-size: 14px;
      background-color: #333333;
      border: 0;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      &:nth-child(1) {
        &::after {
          content: "|";
          margin-left: 10px;
          color: #b0b0b0;
        }
      }
    }
  }
  .isLogin {
    line-height: 40px;
    color: #b0b0b0;
    font-size: 14px;
    button {
      color: #b0b0b0;
      font-size: 14px;
      background-color: #333333;
      border: 0;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
    }
    .el-button {
      line-height: 0;
    }
  }
}
.el-menu-demo {
  width: 1200px;
  margin: 0 auto;
  .so {
    margin-top: 10px;
    width: 300px;
    float: right;
  }
}
</style>
