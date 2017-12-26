<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "style/mixin";
  @import "style/normalize.css";
  @import "style/common";
  .common-banner{
    display: block;
    height: 260px;
    width: 100%;
    background-position: center;
    background-size:100% 100%;
    background-repeat: no-repeat;
  }
  .news-page .common-banner{
    background-image: url("./images/news_page_banner.jpg");
  }
  .products-page .common-banner{
    background-image: url("./images/products_banner.jpg");
  }
  .recruit-page .common-banner{
    background-image: url("./images/recruit_banner.jpg");
  }
  .about-page .common-banner{
    background-image: url("./images/about_banner.jpg");
  }
  .news-crumbs{
    width: 100%;
    height: 85px;
  }
  .crumbs-p{
    position: relative;
    top: 30px;
  }
</style>
