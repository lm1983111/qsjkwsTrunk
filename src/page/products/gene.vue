<template>
  <div class="products-item-page">
    <head-top></head-top>
    <div class="page-con-wrap">
      <div class="products-item-img-div">
        <img src="../../images/progene/pro_gene_02.jpg"/>
        <img src="../../images/progene/pro_gene_03.jpg"/>
        <img src="../../images/progene/pro_gene_04.jpg"/>
        <img src="../../images/progene/pro_gene_05.jpg"/>
        <img src="../../images/progene/pro_gene_06.jpg"/>
        <img src="../../images/progene/pro_gene_07.jpg"/>
        <img src="../../images/progene/pro_gene_08.jpg"/>
        <img src="../../images/progene/pro_gene_09.jpg"/>
      </div>
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
