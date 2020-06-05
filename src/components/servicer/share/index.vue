<template>
  <div class="article-fixed">
    <div class="pannel">
      <div class="like pannel-btn"></div>
      <div class="like pannel-btn"></div>
      <div class="like pannel-btn"></div>
      <div class="like pannel-btn"></div>
      <div class="like pannel-btn"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.article-fixed {
  position: fixed;
  top: 45%;
  transform: translateY(-50%);
  // left: 100px;
  .pannel {
    display: flex;
    flex-direction: column;
    .pannel-btn {
      position: relative;
      margin-bottom: 20px;
      width: 40px;
      height: 40px;
      background-color: #fff;
      background-position: 50%;
      background-repeat: no-repeat;
      border-radius: 50%;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
      cursor: pointer;
      &.like {
        background-position: 53% 46%;
        background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/zan.b4bb964.svg);
      }
    }
  }
}

@media (max-width: 768px) {
  .article-fixed {
    display: none;
  }
}
</style>