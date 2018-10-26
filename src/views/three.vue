<template>
    <div>
      <h1>我是第三页</h1>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/second">第二页</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "three"
    }
</script>

<style scoped>

</style>
