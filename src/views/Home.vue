<template>
  <div class="com-home">
    <MyTop></MyTop>

    <div class="home-main">
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="460px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img style="height: 460px" src="../assets/images/banner1.jpg" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/MyFooter";
import MyTop from "@/components/MyTop";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Footer,
    MyTop,
  },
};
</script>

<style lang='less' scoped>
.home-main {
  width: 1200px;
  margin: 20px auto 0;
}
</style>
