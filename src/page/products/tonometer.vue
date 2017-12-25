<template>
  <div class="products-item-page">
    <head-top></head-top>
    <div class="products-item-img-div">
      <img src="../../images/protonometer/pro_tonometer_02.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_03.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_04.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_05.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_06.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_07.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_08.jpg"/>
      <img src="../../images/protonometer/pro_tonometer_09.jpg"/>
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
