<template>
  <div class="cloud-productor">
    <bg-card>
      <template v-slot:header>
        <div class="productor-title">云产品推荐</div>
      </template>
    </bg-card>
    <div class="productor-content">
      <img src="https://www.lmkjs.com/static/images/ali/265X68.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cloud-production'
}
</script>

<style lang="scss">
.cloud-productor {
  padding: 10px 15px;
  background: #fff;
  box-sizing: border-box;
  .productor-title {
    font-weight: 700;
    font-size: 16px;
  }
  .productor-content {
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>