<template>
  <div class="wrap">
    <div class="left">
      <div class="header">模拟 window scroll</div>
      <table-component></table-component>
    </div>
    <div class="right">
      <div class="header">
        element scroll
      </div>
      <div class="content">
        <table-component></table-component>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from './components/index.vue'
export default {
  name: 'APP',

  components: {
    TableComponent
  },

  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    height: 100%;
    display: flex;
  }

  .left, .right  {
    display: inline-block;
    width: 50%;
    height: 100%;
  }

  .header {
    text-align: center;
    font-size: 24px;
  }

  .left {
    overflow: scroll;

    .header {
      height: 200px;
      line-height: 200px;
      background-color: yellow;
    }
  }

  .right {
    .header {
      background: darkseagreen;
      height: 100px;
      line-height: 100px;
    }

    .content {
      height: calc(100% - 100px);
      overflow: scroll;
    }
  }
</style>
