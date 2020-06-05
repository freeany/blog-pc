<template>
  <div class="userinfo">
    <bg-card>
      <div class="author-info">
        <div class="avatar-box">
          <img src="https://www.lmkjs.com/static/images/avatar-daming.jpg" alt />
        </div>
        <div class="info-box">
          <div class="info-name">123</div>
          <div class="info-job">
            <i class="iconfont icon-role"></i>
            <span>Javascript开发者</span>
          </div>
          <div class="info-like">
            <i class="iconfont icon-yixianshi-"></i>
            <span>Vue / React / Node</span>
          </div>
        </div>
      </div>
    </bg-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.userinfo {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-self: center;
  flex-direction: column;
  padding: 10px 15px;
  box-sizing: border-box;
  // box-shadow: 0 1px 3px rgba(26, 26, 26, 0.05);
  // border-radius: 2px;
  // overflow: hidden;
  .author-info {
    padding: 20px 0;

    .avatar-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: block;
      }
    }
    .info-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      .info-name {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 18px;
      }
      .info-job {
        margin-bottom: 10px;
      }
    }
  }
}
</style>