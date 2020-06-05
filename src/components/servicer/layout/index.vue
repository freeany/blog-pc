<template>
  <div class="layout-container">
    <div class="art-lt">
      <slot name="art-lt"></slot>
    </div>
    <div class="art-rt">
      <slot name="art-rt"></slot>
    </div>
  </div>
</template>

<script>
/* 
  页面主体的布局，(不包含navbar)
  页面主题 左侧和右侧布局容器，内容往里塞就好了
  之所以抽离出来不在layout中定义，为了程序的可扩展性，不可能每个页面都是这种布局
*/
export default {
  name: 'myLayout'
}
</script>

<style lang="scss" scoped>
.layout-container {
  padding: 10px 0;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  .art-lt {
    // height: 13.333333rem;
    flex: 7;
    background-color: #fff;
  }
  .art-rt {
    height: 100%;
    flex: 3;
    margin-left: 15px;
  }
}

@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }
  .art-rt {
    margin-top: 50px;
    margin-left: 0px;
  }
}
</style>