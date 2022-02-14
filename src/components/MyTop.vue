<template>
  <div class="myTop">
    <router-link to="/cart" class="myLink">
      <i class="el-icon-shopping-cart-full"></i>
      购物车
    </router-link>
    <router-link to="/collect" class="myLink">我的收藏</router-link>
    <router-link to="/order" class="myLink">我的订单</router-link>
    <button class="myLink" @click="toLogin">注册</button>
    <button class="myLink" @click="toLogin">登录</button>
  </div>
</template>

<script>
export default {
  name: "MyTop",
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang='less' scoped>
.myTop {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 200px;
  height: 40px;
  background-color: #333333;
  .myLink {
    padding: 0 10px;
    line-height: 40px;
    text-decoration: none;
    color: #b0b0b0;
    &:hover {
      color: #fff;
    }
    &:nth-child(4) {
      font-size: 16px;
      background-color: #333333;
      border: 0;
      cursor: pointer;
    }
    &:nth-child(5) {
      font-size: 16px;
      background-color: #333333;
      border: 0;
      cursor: pointer;
      &::after {
        content: "|";
        margin-left: 20px;
        color: #b0b0b0;
      }
    }
    &:nth-child(1) {
      background-color: #424242;
    }
    &:nth-child(1):hover {
      background-color: #fff;
      color: #ff5c00;
    }
  }
}
</style>
