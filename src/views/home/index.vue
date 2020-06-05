<template>
  <div class="home">
    <layout>
      <template slot="art-lt">
        <!-- 内容 -->
        <div class="article-content">
          <!-- 首页面包屑 -->
          <my-breadcrumb>
            <a href="#" class="current-location">当前位置：</a>
            <a href="#">首页</a>
          </my-breadcrumb>
          <!-- 文章列表 -->
          <article-list></article-list>
        </div>
      </template>
      <template slot="art-rt">
        <home-right></home-right>
      </template>
    </layout>
    <!-- <div class="article-container">
      <div class="art-lt"></div>
      <div class="art-rt"></div>
    </div>-->
    <!-- footer底部 -->
    <footer>
      <siteFooter></siteFooter>
    </footer>
  </div>
</template>

<script>
import layout from '@/components/servicer/layout/index'
import articleList from '@/components/servicer/article/article-list'
import homeRight from '@/components/servicer/homeCard/index'
import siteFooter from '@/components/servicer/siteFooter/index'
export default {
  name: 'Home',
  components: {
    layout,
    articleList,
    homeRight,
    siteFooter
  }
}
</script>

<style lang="scss">
@import "./home.scss";
.home {
  width: 100%;
  height: 100%;
  // background-color: #f4f5f5; // 掘金
  // background-color: #666;
  // .article-container {
  //   padding: 10px 0;
  //   padding-top: 0;
  //   display: flex;
  //   justify-content: space-between;
  //   .art-lt {
  //     // height: 13.333333rem;
  //     flex: 7;
  //     background-color: #fff;
  //   }
  //   .art-rt {
  //     height: 100%;
  //     flex: 3;
  //     margin-left: 15px;
  //   }
  // }
}

// @media (max-width: 768px) {
//   .article-container {
//     flex-direction: column;
//   }
//   .art-rt {
//     margin-top: 50px;
//     margin-left: 0px;
//   }
// }
</style>