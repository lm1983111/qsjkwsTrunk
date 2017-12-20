<template>
  <div>
    <head-top></head-top>
    <div class="new-header"></div>
    <div class="news-crumbs">
      <p class="container crumbs-p">您的位置：首页 > <span class="red">新闻动态</span></p>
    </div>
    <div class="router-div">
      <div class="container menu-wrap">
        <a href="javascript: void(0)" v-on:click="getNewsList('2')" :class="">全部</a>
        <a href="javascript: void(0)">公司新闻</a>
        <a href="javascript: void(0)">行业新闻</a>
        <a href="javascript: void(0)">媒体关注</a>
      </div>
    </div>
    <div class="news-list-con">
      <div></div>
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
    },
    methods:{
      getNewsList:function(id){
        alert(id)
      }
    }
  }
</script>

<style scoped>
  .new-header{
    display: block;
    height: 260px;
    width: 100%;
    background-image: url("../../images/news_banner.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .news-crumbs{
    width: 100%;
    height: 85px;
    border-bottom: 1px solid #ddd;
  }
  .crumbs-p{
    position: relative;
    top: 30px;
  }
  .menu-wrap a{
    text-decoration: none;
    height: 70px;
    line-height: 70px;
    cursor: pointer;
    margin-right: 40px;
    color: #666;
  }
</style>
