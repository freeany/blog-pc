<template>
  <div class="menu-mask">
    <div class="mask-content">
      <bg-card>
        <template v-slot:header>
          <div class="mask-title">文章分类</div>
        </template>
        <div class="mask-body">
          <ul>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">首页</a>
            </li>
          </ul>
        </div>
      </bg-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'meunMask'
}
</script>

<style lang="scss" scoped>
.menu-mask {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.45);
  .mask-content {
    width: 200px;
    padding: 10px 15px;
    background: #fff;
    box-sizing: border-box;
    height: 100%;
    .mask-title {
      font-weight: 700;
      font-size: 16px;
    }
    .mask-body {
      padding: 19px;
      overflow: auto;
      font-size: 14px;
      line-height: 1.5715;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          line-height: 50px;
          a {
            padding: 0 10px;
            height: 45px;
            line-height: 45px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>