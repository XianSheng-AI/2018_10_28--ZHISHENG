<template>
    <div>
      <router-link to="./comment">评论</router-link>
      <router-link to="./like">点赞</router-link>
      <router-link to="./focus">关注</router-link>
      <router-link to="./collect">收藏</router-link>
      <router-link to="./share">分享</router-link>
      <router-link to="./contribute">投稿</router-link>
      <router-link to="./settingMsg">信息设置</router-link>
      <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "index",
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" scoped>

</style>
