<template>
  <div class="products-page">
    <head-top></head-top>
    <div class="page-con-wrap">
      <section class="common-banner"></section>
      <section class="news-crumbs">
        <p class="container crumbs-p">您的位置：
          <router-link to="/home">首页</router-link>
          > <span class="red">产品中心</span></p>
      </section>
      <section class="category-nav clearfix">
        <ul class="container category-nav-ul">
          <li class="cur">
            <span>全部</span>
          </li>
        </ul>
      </section>
      <section class="products-list-section clearfix">
        <div class="container">
          <router-link to="/products/tonometer" class="products-item" target="_blank">
            <div class="products-img">
              <img src="../../images/products01.jpg"/>
            </div>
            <div class="products-block">
              <div class="products-info">
                <div class="title">智能动态血压计</div>
                <div class="spec">型号：<span>BPM07</span></div>
              </div>
              <div class="products-arrow"></div>
            </div>
          </router-link>
          <router-link to="products/watch" class="products-item" target="_blank">
            <div class="products-img">
              <img src="../../images/products02.jpg"/>
            </div>
            <div class="products-block">
              <div class="products-info">
                <div class="title">智能动态血压计</div>
                <div class="spec">型号：<span>BPM07</span></div>
              </div>
              <div class="products-arrow"></div>
            </div>
          </router-link>
          <router-link to="products/gene" class="products-item" target="_blank">
            <div class="products-img">
              <img src="../../images/products03.jpg"/>
            </div>
            <div class="products-block">
              <div class="products-info">
                <div class="title">智能动态血压计</div>
                <div class="spec">型号：<span>BPM07</span></div>
              </div>
              <div class="products-arrow"></div>
            </div>
          </router-link>
        </div>
      </section>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  import tonometer from '../../page/products/tonometer'
  export default {
    components: {
      headTop,
      footGuide,
      tonometer
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin.scss";
  .products-item{
    position: relative;
    width: 30%;
    margin: 0 3% 3% 0;
    display: inline-block;
    cursor: pointer;
  }
  .products-img{
    width: 100%;
    overflow: hidden;
  }
  .products-item .products-img img{
    transition: all .6s;
  }
  .products-item:hover .products-img img{
    transform: scale(1.2);
  }
  .products-img img{
    width: 100%;
  }
  .products-block{
    background-color: white;
    position: relative;
    transition: all .3s;
  }
  .products-item:hover .products-block{
    color: white;
    background-color: $red;
  }
  .products-info{
    padding: 20px 60px 20px 25px;
  }
  .products-info .title{
    font-size: 16px;
    margin-bottom: 12px;
  }
  .products-arrow{
    width: 20px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 4%;
    margin-top: -15px;
    background-image:url("../../images/arrow-right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
</style>
