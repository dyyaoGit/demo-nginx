<template>
    <div>
      <h1>我是第二页</h1>

      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/three">第二页</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "second"
    }
</script>

<style scoped>

</style>
