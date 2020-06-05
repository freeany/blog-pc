<template>
  <div class="develop-doc">
    <bg-card>
      <template v-slot:header>
        <div class="doc-title">友情链接</div>
      </template>
    </bg-card>
    <div class="doc-content">
      <ul>
        <li>nodejs中文文档</li>
        <li>vue中文文档</li>
        <li>spring中文文档</li>
        <li>react中文文档</li>
        <li>掘金热门</li>
        <li>nodejs社区</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'develop-doc'
}
</script>

<style lang="scss">
.develop-doc {
  padding: 10px 15px;
  background: #fff;
  box-sizing: border-box;
  .doc-title {
    font-weight: 700;
    font-size: 16px;
  }
  .doc-content {
    margin-top: 20px;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-shrink: 0;
      li {
        list-style: none;
        // flex: 1;
        width: 49%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        text-align: center;
        color: #666;
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 5px;
        background-color: #f9f9f9;
      }
    }
  }
}
</style>