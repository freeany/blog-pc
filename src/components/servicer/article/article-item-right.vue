<template>
  <div class="isfixed">
    <bg-card>
      <template slot="header">
        <span class="header-title">目录</span>
      </template>
      <!-- <div style="height:10px"></div> -->
      <div class="catelog">
        <!-- 锚点的数据应该根据外界传递过来 -->
        <a-anchor :get-current-anchor="getCurrentAnchor" :target-offset="targetOffset">
          <a-anchor-link
            style="font-size: 18px"
            v-for="item in anchorList"
            :key="item.href"
            :href="item.href"
            :title="item.title"
          />
        </a-anchor>
      </div>
    </bg-card>
  </div>
</template>

<script>
import Anchor from 'ant-design-vue/lib/anchor/Anchor';
import AnchorLink from 'ant-design-vue/lib/anchor/AnchorLink';
import 'ant-design-vue/lib/anchor/style/css'; // 或者 ant-design-vue/lib/button/style/css 加载 css 文件
import bgCard from '@/components/common/card/index'

export default {
  name: 'articleItemLeft',
  components: {
    [Anchor.name]: Anchor,
    [AnchorLink.name]: AnchorLink,
    bgCard
  },
  props: {
    anchorList: {
      type: Array,
      default () {
        return []
      }
    },
    rightCurrent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      targetOffset: undefined,
    }
  },
  mounted () {
    this.targetOffset = window.innerHeight / 2;
  },
  methods: {
    getCurrentAnchor () {
      return this.anchorList[this.rightCurrent].href
    }
  }
}
</script>

<style lang="scss" scoped>
// .article-catelog {
//   position: fixed;
//   top: 60px;
// }
.isfixed {
  position: fixed;
  top: 60px;
  max-width: 325px;
  width: 28%;
}
.header-title {
  font-weight: 700;
  font-size: 16px;
}

@media (max-width: 768px) {
  .isfixed {
    // position: static;
    // width: auto;
    // max-width: 100%;
    display: none;
  }
}
</style>