<template>
  <div class="layout">
    <header class="layout-header">
      <div class="header-nav">
        <div class="nav-main wap-box">
          <div class="main-log">
            <a href="/">123456</a>
          </div>
          <div class="main-content">
            <ul class="clearfix">
              <li>
                <a href="#">首页</a>
              </li>
              <li>
                <a href="#">Vue</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
              <li>
                <a href="#">Nodejs</a>
              </li>
            </ul>
          </div>
          <div class="showNav">
            <div class="show" @click="showNav">
              <span>
                <i class="iconfont icon-caidan"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- 是为了顶替被fixed的nav -->
    <div style="height: 50px;margin-bottom: 10px"></div>
    <div class="layout-container main-box wap-box">
      <router-view></router-view>
    </div>

    <!-- meun-mask -->
    <div class="showMaskMeun" v-show="isShowMask">
      <meun-mask v-clickOutside="isShowMask"></meun-mask>
    </div>

    <!-- 箭头 到顶部的箭头-->
    <div class="layout-arrow" @click="goTop">
      <i class="iconfont icon-jiantouarrow503"></i>
    </div>
  </div>
</template>

<script>
import meunMask from '@/components/servicer/menuMask/index'

export default {
  name: 'layout',
  components: {
    meunMask
  },
  data () {
    return {
      isShowMask: false
    }
  },
  methods: {
    showNav () {
      this.isShowMask = true
      document.body.style.overflow = 'hidden'
      document.body.style['touch-action'] = 'none'
    },
    // 回到顶部
    goTop () {
      var scrollTop = document.body.scrollTop
      document.body.style.transition = 'all 1s ease-in-out'
      window.scrollTo(0, 0)
      setTimeout(function () { document.body.style.transition = 'none' }, 1000)
    }
  },
  directives: {
    clickOutside: {
      bind (el, binding, vnode) {
        el.clickHandler = function (e) {
          if (vnode.context['isShowMask']) {
            if (e.target.contains(el)) {
              vnode.context[binding.expression] = false
              document.body.style.overflow = 'auto'
              document.body.style['touch-action'] = 'auto'
            } else {
              vnode.context[binding.expression] = true
            }
          }
        }
        document.addEventListener('click', el.clickHandler)
      },
      unbind (el) {
        document.removeEventListener('click', el.clickHandler)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  // height: 100%;
  background-image: url("~@/static/img/bgrepeat.png");
  .layout-header {
    background-color: #fff;
    height: 50px;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #fff;
    box-shadow: 0 1px 5px #e9e9e9;
    z-index: 11;
    .header-nav {
      .nav-main {
        height: 50px;
        margin: 0 auto;
        font-size: 0;
        .main-log {
          float: left;
          height: 100%;
          a {
            display: block;
            color: #333;
            line-height: 50px;
            font-size: 20px;
            height: 100%;
          }
        }
        .main-content {
          float: right;
          ul {
            li {
              float: left;
              a {
                display: block;
                color: #333;
                line-height: 50px;
                font-size: 16px;
                height: 100%;
                padding: 0 20px;
                &:hover {
                  color: $font;
                }
              }
              &:first-child {
                a {
                  color: $font;
                }
              }
            }
          }
        }
        .showNav {
          float: right;
          font-size: 14px;
          height: 100%;
          width: 32px;
          line-height: 50px;
          display: flex;
          align-items: center;
          .show {
            height: 32px;
            width: 32px;
            padding: 2.4px 0;
            font-size: 16px;
            border-radius: 2px;
            color: #fff;
            background-color: #1890ff;
            border-color: #1890ff;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
            -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              line-height: 1;
              pointer-events: none;
            }
          }
        }
      }
    }
  }
}

// 箭头
.layout-arrow {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: "tnum";
  font-feature-settings: "tnum";
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border: 1px solid #666;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  i {
    font-size: 20px;
  }
}

// nav媒体查询
@media (max-width: 1024px) {
  .main-content {
    display: none !important;
  }
  .showNav {
    display: flex !important;
  }
}
@media (min-width: 1024px) {
  .main-content {
    display: block !important;
  }
  .showNav {
    display: none !important;
  }
}
</style>