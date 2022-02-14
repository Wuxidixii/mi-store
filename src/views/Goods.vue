<template>
  <div class="com-goods">
    <MyTop></MyTop>

    <div class="goods-main">
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
      <h1>商品列表内容</h1>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/MyFooter";
import MyTop from "@/components/MyTop";
export default {
  name: "Goods",
  components: {
    Footer,
    MyTop,
  },
};
</script>

<style lang='less' scoped>
.goods-main {
  width: 1200px;
  margin: 0 auto;
}
</style>