<template>
  <div class="shadow-card">
    <div class="shadow-card_title" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bg-card',
  // 这里是结合业务，判断是否添加左边框,   和是否fixed
  props: {

  }
}
</script>

<style lang="scss">
.shadow-card {
  // box-shadow: 0 1px 3px rgba(26, 26, 26, 0.05);
  // border-radius: 2px;
  // overflow: hidden;
  // &.isfixed {
  //   position: fixed;
  //   top: 60px;
  //   width: 100%;
  // }
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  /deep/ .ant-anchor-wrapper {
    margin-left: 0;
  }
  .shadow-card_title {
    padding: 10px 10px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    &.header {
      border-left: 2px solid #e8e8e8;
    }
  }
}
</style>