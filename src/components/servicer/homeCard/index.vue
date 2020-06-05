<template>
  <div class="home-right">
    <!-- 用户信息组件 -->
    <user-info></user-info>
    <developDoc style="margin-top: 20px"></developDoc>
    <onlineTool style="margin-top: 20px"></onlineTool>
    <studychat style="margin-top: 20px"></studychat>
    <cloudProductor style="margin-top: 20px"></cloudProductor>
    <links style="margin-top: 20px"></links>
  </div>
</template>

<script>
import userInfo from '@/components/servicer/homeCard/userInfo/userInfo'
import developDoc from '@/components/servicer/homeCard/developDoc/index'
import onlineTool from '@/components/servicer/homeCard/onlineTool/index'
import studychat from '@/components/servicer/homeCard/studychat/index'
import cloudProductor from '@/components/servicer/homeCard/cloudProductor/index'
import links from '@/components/servicer/homeCard/links/index'
export default {
  name: 'homeRight',
  components: {
    userInfo,
    developDoc,
    onlineTool,
    studychat,
    cloudProductor,
    links
  }
}
</script>

<style lang="scss">
</style>