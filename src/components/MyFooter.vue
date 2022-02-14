<template>
  <div class="com-footer">
    <!-- footer模块 -->
    <footer class="footer">
      <div class="w">
        <div class="mod_help">
          <dl>
            <dt>帮助中心</dt>
            <dd><a href="javascript:;">账户管理</a></dd>
            <dd><a href="javascript:;">购物指南</a></dd>
            <dd><a href="javascript:;">订单操作</a></dd>
          </dl>
          <dl>
            <dt>服务支持</dt>
            <dd><a href="javascript:;">售后政策</a></dd>
            <dd><a href="javascript:;">自助服务</a></dd>
            <dd><a href="javascript:;">相关下载</a></dd>
          </dl>
          <dl>
            <dt>线下门店</dt>
            <dd><a href="javascript:;">小米之家</a></dd>
            <dd><a href="javascript:;">服务网点</a></dd>
            <dd><a href="javascript:;">授权体验店/专区</a></dd>
          </dl>
          <dl>
            <dt>关于小米</dt>
            <dd><a href="javascript:;">了解小米</a></dd>
            <dd><a href="javascript:;">加入小米</a></dd>
            <dd><a href="javascript:;">投资者关系</a></dd>
            <dd><a href="javascript:;">企业社会责任</a></dd>
            <dd><a href="javascript:;">廉洁举报</a></dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd><a href="javascript:;">新浪微博</a></dd>
            <dd><a href="javascript:;">官方微信</a></dd>
            <dd><a href="javascript:;">联系我们</a></dd>
            <dd><a href="javascript:;">公益基金会</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="javascript:;">F 码通道</a></dd>
            <dd><a href="javascript:;">礼物码</a></dd>
            <dd><a href="javascript:;">防伪查询</a></dd>
          </dl>
          <dl>
            <dt>下载</dt>
            <dd>
              <img src="../assets/images/wx-img.png" alt="" />
              <p>小米商城APP</p>
            </dd>
          </dl>
        </div>
        <div class="mod_copyright">
          <div class="links">
            <a href="javascript:;">小米商城</a>
            <a href="javascript:;">MIUI</a>
            <a href="javascript:;">米家</a>
            <a href="javascript:;">米聊</a>
            <a href="javascript:;">多看</a>
            <a href="javascript:;">游戏</a>
            <a href="javascript:;">政企服务</a>
            <a href="javascript:;">小米天猫店</a>
            <a href="javascript:;">小米集团隐私政策</a>
            <a href="javascript:;">问题反馈</a>
            <a href="javascript:;">Select Location</a>
          </div>
          <div class="copyright">
            <p>
              © mi.com 京ICP证110507号 京ICP备10046444号
              京公网安备11010802020134号 京网文[2020]0276-042号
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
/* footer模块 */
.w {
  width: 1200px;
  margin: 0 auto;
}
a {
  color: #666;
  text-decoration: none;
}
.footer {
  height: 280px;
}
.mod_help {
  height: 188px;
  padding-top: 22px;
  padding-left: 50px;
  border-bottom: 1px solid #ccc;
}
.mod_help dl {
  float: left;
  width: 165px;
  height: 100%;
}
.mod_help dl:last-child {
  width: 150px;
  text-align: center;
}
.mod_help dl dt {
  margin-bottom: 12px;
  font-size: 16px;
  color: #333333;
}
.mod_help dl dd {
  margin-bottom: 5px;
}
.mod_help dl dd a {
  font-size: 12px;
}
.mod_help dl dd a:hover {
  color: #ff6700;
}
.mod_help dl dd img {
  width: 100px;
  height: 100px;
}
.mod_copyright {
  text-align: center;
  padding-top: 20px;
}
.links {
  margin-bottom: 15px;
}
.mod_copyright .links a {
  padding-left: 10px;
  font-size: 14px;
}
.mod_copyright .links a::after {
  content: "|";
  padding-left: 10px;
  color: #757575;
}
.mod_copyright .links a:hover {
  color: #ff6700;
}
.mod_copyright .links a:last-child::after {
  content: "";
}
.copyright {
  line-height: 20px;
  font-size: 12px;
}
</style>