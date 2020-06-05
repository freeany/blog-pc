<template>
  <!-- 基础卡片加带图卡片，通过数据决定是否显示带图卡片 -->
  <div class="article-item">
    <div class="article-main">
      <div class="item-container">
        <div class="main-left">
          <div class="article-item__title">
            <div class="title-tag" v-if="true">
              <!-- 这里规定article中的tag使用默认的size。28px -->
              <tag type="danger" size="mini">置顶</tag>
            </div>
            <div class="title-content" @click="articleItem">刚刚上线了我的个人博客，来转转吧！</div>
          </div>
          <div class="article-item__content">
            <span>以后会在该网站持续更新相关技术文章，其中包括原生JavaScript、Typescript；前端Vue、React、微信小程序；服务端Node.js；还有Linux相关文章，欢迎热爱学习的小伙伴常来转转。</span>
          </div>
        </div>
        <!-- 是否带图  -->
        <div class="main-right" v-if="showImg">
          <div class="article-img">
            <div>
              <img
                class="cover-img"
                src="https://lmkjs.com/api/uploads/article/cover/20200403/1585922412460-8p6sq94k9b9.jpg"
                alt="大明的博客-微信小程序工具函数库（持续更新）"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="article-item_footer">
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
      </div>-->
      <article-item-footer></article-item-footer>
    </div>
  </div>
</template>

<script>
import articleItemFooter from './article-item-footer'
export default {
  name: 'articleItem',
  components: {
    articleItemFooter
  },
  props: {
    showImg: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    articleItem () {
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="scss">
.article-item {
  // position: relative;
  padding: 15px;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  box-sizing: border-box;
  display: flex;
  // align-items: center;
  // height: 131px;
  .article-main {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    .item-container {
      display: flex;
      // margin-bottom: 5px;
      // padding-bottom: 15px;
      // padding-right: 20px;
      .main-left {
        flex: 7;
        height: 97px;
        padding-right: 20px;
        box-sizing: border-box;
        .article-item__title {
          display: flex;
          margin-bottom: 15px;
          .title-tag {
            // width: 100%;
            margin-right: 8px;
            vertical-align: top;
          }
          .title-content {
            flex: 9;
            font-size: 18px;
            color: #333;
            font-weight: 700;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
            // line-height: 28px;
          }
        }
        .article-item__content {
          color: #777;
          font-size: 14px;
          line-height: 1.5;
          cursor: pointer;
          // text-indent: 2em;
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      .main-right {
        flex: 3;
        .article-img {
          display: flex;
          height: 100%;
          box-sizing: border-box;
          cursor: pointer;
          div {
            height: 100%;
            img {
              width: 135px;
              height: 97px;
              vertical-align: top;
            }
          }
        }
      }
    }

    // .article-item_footer {
    //   display: flex;
    //   color: #999;
    //   margin-top: 10px;
    //   .footer-item {
    //     margin-right: 8px;
    //     i {
    //       vertical-align: middle;
    //     }
    //     span {
    //       vertical-align: middle;
    //       cursor: pointer;
    //     }
    //   }
    // }
  }
}

@media (max-width: 374px) {
  .main-right {
    display: none;
  }
}

// 对文章标题的字体有一定的要求
@media screen and (max-width: 321px) {
  .title-content {
    font-size: 12px !important;
  }
}
@media screen and (min-width: 321px) and (max-width: 400px) {
  .title-content {
    font-size: 14px !important;
  }
}
@media screen and (min-width: 400px) and (max-width: 1024px) {
  .title-content {
    font-size: 16px !important;
  }
}
</style>