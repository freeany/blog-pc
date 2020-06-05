<template>
  <div class="content-breadcrumb">
    <div class="main-breadcrumb">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myBreadcrumb'
}
</script>

<style lang="scss" scoped>
.content-breadcrumb {
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  font-size: 14px;
  .main-breadcrumb {
    line-height: 22px;
    a {
      color: #999;
      font-size: 14px;
      cursor: text;
      vertical-align: middle;
    }
    .current-location {
      // margin-right: 3px;
    }
  }
}
</style>