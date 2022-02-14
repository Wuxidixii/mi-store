<template>
  <div>
    <MyTop></MyTop>
    <div class="homeMain"><h1>首页内容区域</h1></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/MyFooter";
import MyTop from "@/components/MyTop";
export default {
  name: "Home",
  components: {
    Footer,
    MyTop,
  },
};
</script>

<style>
</style>
