<template>
  <div class="study-chat">
    <bg-card>
      <template v-slot:header>
        <div class="chat-title">开发文档</div>
      </template>
    </bg-card>
    <div class="chat-content">
      <ul>
        <li>
          <i class="iconfont icon-qq"></i>
          <span class="content-dec">nodejs中文文档</span>
          <span class="erweima">
            <i class="iconfont icon-erweima"></i>
          </span>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          <span class="content-dec">vue中文文档</span>
          <span class="erweima">
            <i class="iconfont icon-erweima"></i>
          </span>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          <span class="content-dec">spring中文文档</span>
          <span class="erweima">
            <i class="iconfont icon-erweima"></i>
          </span>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          <span class="content-dec">react中文文档</span>
          <span class="erweima">
            <i class="iconfont icon-erweima"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'studyChat'
}
</script>

<style lang="scss">
.study-chat {
  padding: 10px 15px;
  background: #fff;
  box-sizing: border-box;
  .chat-title {
    font-weight: 700;
    font-size: 16px;
  }
  .chat-content {
    margin-top: 20px;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 0;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      justify-content: flex-start;
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
        .content-dec {
          margin-left: 5px;
        }
        .erweima {
          float: right;
        }
      }
    }
  }
}
</style>