<template>
  <div class="article">
    <div class="article-layout">
      <div class="article-layout__share">
        <articleShare></articleShare>
      </div>
      <div class="article-layout__content">
        <layout>
          <template slot="art-lt">
            <!-- 后期把传递数据过去，在breadcrumb组件内部进行循环 在这里写代码太冗余-->
            <breadcrumb>
              <a-breadcrumb class="breadcrumb-content">
                <a-breadcrumb-item class="breadcrumb-item">
                  <a class="item-link" href>首页</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item class="breadcrumb-item">
                  <a class="item-link" href>资源</a>
                </a-breadcrumb-item>
                <a-breadcrumb-item class="breadcrumb-item">
                  <a class="item-link" href>刚刚上线了个人博客来转转吧</a>
                </a-breadcrumb-item>
              </a-breadcrumb>
            </breadcrumb>

            <div class="article-content">
              <header class="article-content__header">
                <div class="article-content__title">刚刚上线了我的个人博客，来转转吧</div>
                <div class="article-content__footer">
                  <article-item-footer></article-item-footer>
                </div>
              </header>

              <div class="article-content__main">
                <div style="height: 500px;background: skyblue">
                  <a id="one" class="box main-position">一级</a>
                </div>
                <div style="height: 500px;background: #000">
                  <a id="two" class="box main-position">二级</a>
                </div>
                <div style="height: 500px;background: #666">
                  <a id="three" class="box main-position">三级</a>
                </div>
              </div>

              <div class="one-line"></div>
            </div>
          </template>
          <template slot="art-rt">
            <div class="article-catelog">
              <!-- <div style="height:10px"></div> -->
              <article-item-right :anchorList="anchorList" :rightCurrent="rightCurrent"></article-item-right>
            </div>
          </template>
        </layout>
      </div>
    </div>
    <footer>
      <siteFooter></siteFooter>
    </footer>
  </div>
</template>

<script>
import Breadcrumb from 'ant-design-vue/lib/breadcrumb';
import BreadcrumbItem from 'ant-design-vue/lib/breadcrumb/BreadcrumbItem';
import 'ant-design-vue/lib/breadcrumb/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件

// 自定义的组件
import layout from '@/components/servicer/layout/index'
import articleItemRight from '@/components/servicer/article/article-item-right'
import articleItemFooter from '@/components/servicer/article/article-item-footer'
import siteFooter from '@/components/servicer/siteFooter/index'
import articleShare from '@/components/servicer/share/index'

import { debounce } from '@/utils/utils/common'
export default {
  name: 'articleItem',
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem,
    layout,
    articleItemRight,
    articleItemFooter,
    siteFooter,
    articleShare
  },
  props: {
    breadArr: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      anchorList: [
        {
          href: '#one',
          title: 'one'
        },
        {
          href: '#two',
          title: 'two'
        },
        {
          href: '#three',
          title: 'three'
        }
      ],
      rightCurrent: 0
    }
  },
  created () {
  },
  mounted () {
    this.scroll()
  },
  methods: {
    scrollHandle () {
      // document.querySelector('#one')
      let box = document.querySelectorAll(".box")
      let arr = []
      let max = 0
      for (let i = 0; i < box.length; i++) {
        if (box[i].getBoundingClientRect() && box[i].getBoundingClientRect().top <= 10) {
          arr.push(i)
        }
      }
      if (arr.length === 0) {
        return
      }
      max = Math.max(...arr)
      this.rightCurrent = max
    },
    scroll () {
      window.addEventListener('scroll', debounce(this.scrollHandle))
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 100%;
  .article-layout {
    display: flex;
    .article-layout__share {
      width: 50px;
      margin-right: 10px;
      height: 100vh;
    }
    .article-layout__content {
      flex: 1;
    }
  }
  .breadcrumb-content {
    .breadcrumb-item {
      .item-link {
        color: #333;
        &:hover {
          color: $font;
        }
      }
      &:last-child {
        .item-link {
          color: #999;
        }
      }
    }
  }

  .article-content {
    background: pink;
    padding: 15px;
    position: relative;
    min-height: 90px;
    .article-content__header {
      margin-bottom: 20px;
    }

    .article-content__title {
      font-weight: 600;
      color: #333;
      font-size: 28px;
      line-height: 150%;
      text-align: center;
      margin-bottom: 10px;
    }
    .article-content__main {
      .main-position {
        padding-top: 60px;
      }
    }
    .article-content__footer {
      display: flex;
      justify-content: center;
    }
    .one-line {
      height: 1px;
      margin: 10px 0;
      border: 0;
      clear: both;
      background-color: #e6e6e6;
    }
    .article-catelog {
      width: 30%;
    }
  }
}
</style>