<template>
  <div class="com-home">
    <MyTop></MyTop>

    <div class="home-main">
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="460px">
        <el-carousel-item v-for="item in bannerData" :key="item.id">
          <img style="height: 460px" :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/MyFooter";
import MyTop from "@/components/MyTop";

import { getImage } from "@/api/data";

export default {
  name: "Home",
  data() {
    return {
      bannerData: [],
    };
  },
  components: {
    Footer,
    MyTop,
  },
  created() {
    getImage().then(({ data: res }) => {
      this.bannerData = res.data.bannerData;
    });
  },
};
</script>

<style lang='less' scoped>
.home-main {
  width: 1200px;
  margin: 20px auto 0;
}
</style>
