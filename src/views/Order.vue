<template>
  <div class="com-order">
    <MyTop></MyTop>
    <div class="top">
      <h1>
        <router-link to="/">
          <img src="../assets/images/logo-mi.png" title="小米官网" />
        </router-link>
        我的订单
      </h1>
    </div>
    <div class="order-empty">
      <div class="left"></div>
      <div class="right">
        <h2>您的订单还是空的！</h2>
        <p v-if="!$store.state.user.myuser">登录后再去购物吧</p>
        <p v-else>快去购物吧</p>
        <span v-if="!$store.state.user.myuser">
          <router-link to="/login" class="btnLeft">立即登录</router-link>
          <router-link to="/goods" class="btnRight">马上去购物</router-link>
        </span>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/MyFooter";
import MyTop from "@/components/MyTop";
export default {
  name: "Order",
  components: {
    Footer,
    MyTop,
  },
};
</script>

<style lang='less' scoped>
.com-order {
  .top {
    display: flex;
    padding: 20px 160px;
    border-bottom: 2px solid red;
    h1 {
      flex: 1;
      font-weight: 400;
      img {
        width: 50px;
        height: 50px;
        vertical-align: middle;
        margin-right: 50px;
      }
    }
    .loginLink {
      flex: 1;
      line-height: 50px;
      text-decoration: none;
      color: #757575;
      &:hover {
        color: #ff5c00;
      }
      &:nth-child(1) {
        &::after {
          content: "|";
          margin: 0 5px;
          color: #757575;
        }
      }
    }
  }
  .order-empty {
    display: flex;
    margin: 0 auto;
    height: 500px;
    background-color: #f5f5f5;
    .left {
      flex: 1;
      background: url("../assets/images/cart-empty.png") no-repeat 320px 100px;
    }
    .right {
      flex: 1;
      padding: 180px 0 0;
      h2 {
        font-size: 36px;
        color: #b0b0b0;
      }
      p {
        color: #b0b0b0;
        font-size: 20px;
      }
      .btnLeft {
        display: inline-block;
        width: 172px;
        height: 50px;
        margin: 25px 10px 0 0;
        background-color: #ff6700;
        border: 1px solid #ff6700;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        color: #fff;
      }
      .btnRight {
        display: inline-block;
        width: 170px;
        height: 50px;
        border: 1px solid #ff6700;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        color: #ff6700;
      }
    }
  }
}
</style>