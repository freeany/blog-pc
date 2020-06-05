<template>
  <div class="online-tool">
    <bg-card>
      <template v-slot:header>
        <div class="tool-title">在线工具</div>
      </template>
    </bg-card>
    <div class="tool-content">
      <ul>
        <li>nodejs中文文档</li>
        <li>vue中文文档</li>
        <li>spring中文文档</li>
        <li>react中文文档</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'online-tool'
}
</script>

<style lang="scss">
.online-tool {
  padding: 10px 15px;
  background: #fff;
  box-sizing: border-box;
  .tool-title {
    font-weight: 700;
    font-size: 16px;
  }
  .tool-content {
    margin-top: 20px;
    ul {
      padding: 0;
      padding-left: 15px;
      margin: 0;
      list-style: none;
      font-size: 0;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      li {
        list-style: none;
        // flex: 1;
        width: 100%;
        height: 35px;
        line-height: 35px;
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