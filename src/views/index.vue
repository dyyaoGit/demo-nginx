<template>
    <div>
      <h1>我是第一页</h1>

      <ul>
        <li><router-link to="/second">第二页</router-link></li>
        <li><router-link to="/three">第三页</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
