<template>
  <div class="article-item_footer">
    <span class="footer-item">
      <i class="iconfont icon-biaoqian"></i>
      <span style="color: #279c63">资源</span>
    </span>
    <span class="footer-item">
      <i class="iconfont icon-59"></i>
      <span>2个月前</span>
    </span>
    <span class="footer-item">
      <i class="iconfont icon-yuedu"></i>
      <span style="color: #279c63">10</span>
    </span>
    <span class="footer-item">
      <i class="iconfont icon-pinglun"></i>
      <span>494</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'articleItmeFooter'
}
</script>

<style lang="scss" scoped>
.article-item_footer {
  display: flex;
  color: #999;
  margin-top: 10px;
  .footer-item {
    margin-right: 8px;
    i {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>