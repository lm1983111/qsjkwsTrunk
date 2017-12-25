<template>
  <div class="products-item-page">
    <head-top></head-top>
    <div class="products-item-img-div">
      <img src="../../images/prowatch/pro_watch_02.jpg"/>
      <img src="../../images/prowatch/pro_watch_03.jpg"/>
      <img src="../../images/prowatch/pro_watch_04.jpg"/>
      <img src="../../images/prowatch/pro_watch_05.jpg"/>
      <img src="../../images/prowatch/pro_watch_06.jpg"/>
      <img src="../../images/prowatch/pro_watch_07.jpg"/>
      <img src="../../images/prowatch/pro_watch_08.jpg"/>
      <img src="../../images/prowatch/pro_watch_09.jpg"/>
      <img src="../../images/prowatch/pro_watch_10.jpg"/>
      <img src="../../images/prowatch/pro_watch_11.jpg"/>
      <img src="../../images/prowatch/pro_watch_12.jpg"/>
      <img src="../../images/prowatch/pro_watch_13.jpg"/>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  export default {
    components: {
      headTop,
      footGuide
    }
  }
</script>

<style scoped lang="scss">
  .products-item-img-div img{
    display: block;
    width: 100%;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
