<template>
  <div class="article-list">
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
    <article-item :showImg="true"></article-item>
    <article-item :showImg="false"></article-item>
  </div>
</template>

<script>
import articleItem from './article-item'
export default {
  name: 'article-list',
  components: {
    articleItem
  }
}
</script>

<style lang="scss">
.article-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>