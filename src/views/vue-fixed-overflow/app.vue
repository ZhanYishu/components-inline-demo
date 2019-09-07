<template>
  <div>
    <div style="height: 200px; background-color: darkseagreen"></div>
    <div v-fixed-overflow class="content">
      vue-fixed-overflow
    </div>
    <div style="height: 1200px; background-color: yellow"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
  .content {
    padding: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 36px;
    color: black;
    background-color: lightsteelblue;
    font-weight: bold;
  }
</style>
