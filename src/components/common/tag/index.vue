<template>
  <span
    class="bg-tag"
    :class="{['bg-tag--'+type] : type, ['bg-tag--'+size]: size, 'is-hit': hit}"
    :style="{'backgroundColor': this.color}"
  >
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'tag',
  props: {
    type: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: 'medium'
    },
    hit: {
      type: Boolean,
      default: false
    }
  },
  // render (h) {
  //   const { type, size, hit } = this
  //   const classes = [
  //     type ? `bg-tag--${type}` : '',
  //     size ? `bg-tag--${size}` : '',
  //     hit && 'is-hit'
  //   ]
  //   const tagEl = (
  //     <div>
  //       <span
  //         class={classes}
  //         style={{ backgroundColor: this.color }}>
  //         {this.$slots.default}
  //       </span>
  //     </div>
  //   )
  //   return h(tagEl)
  // }
}
</script>

<style lang="scss" scoped>
.bg-tag {
  background-color: #ecf5ff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
.bg-tag.bg-tag--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
.bg-tag.bg-tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
.bg-tag.bg-tag--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.bg-tag.bg-tag--danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
.bg-tag--medium {
  height: 28px;
  line-height: 26px;
}
.bg-tag--small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
}
.bg-tag--mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
.bg-tag.is-hit {
  border-color: #409eff;
}
</style>