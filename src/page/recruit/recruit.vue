<template>
  <div class="recruit-page">
    <head-top></head-top>
    <section class="common-banner"></section>
    <section class="news-crumbs">
      <p class="container crumbs-p">您的位置：首页 > <span class="red">招贤纳士</span></p>
    </section>
    <section class="category-nav clearfix">
      <ul class="container category-nav-ul">
        <li v-for="" v-on:click="getRecruitList('4')" class="cur">
          <span>全部</span>
        </li>
        <li v-for="" v-on:click="getRecruitList('4')" :class="">
          <span>技术类</span>
        </li>
      </ul>
    </section>
    <section class="recruit-list-section clearfix">
      <div class="container">
        <div class="recruit-header-nav clearfix">
          <div>职位</div>
          <div>岗位</div>
          <div>任职方式</div>
          <div>地点</div>
        </div>
        <div class="recruit-body">
          <dl class="recruit-dl cur">
            <dt class="recruit-dt clearfix">
              <div class="dt-cell">会计</div>
              <div class="dt-cell">文职类</div>
              <div class="dt-cell">全职</div>
              <div class="dt-cell">佛山</div>
              <div class="dt-close"></div>
            </dt>
            <dd class="recruit-dd">
              <div class="dd-cont-head clearfix">
                <div class="dd-cont-cell">职业类别：领导类</div>
                <div class="dd-cont-cell">学历要求：大专</div>
                <div class="dd-cont-cell">招聘人数：1人</div>
              </div>
              <div class="recruit-desc clearfix">
                <p>职位要求：</p>
              </div>
              <div class="apply-job">
                <a class="f18 red-btn" href="mailto:chnsun300216@126.com">申请该职位</a>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </section>
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
  @import "../../style/mixin";
  .recruit-list-section{
    margin-bottom: 200px;
  }
  .recruit-header-nav{
    border-bottom: 1px solid #ddd;
    padding: 0 25px;
  }
  .recruit-header-nav > div{
    float: left;
    width: 25%;
    height: 80px;
    line-height: 80px;
    color: #666;
    font-size: 16px;
  }
  .recruit-dl{
    border-bottom: 1px solid #ddd;
  }
  .recruit-dl.cur{
    border-bottom: none;
  }
  .recruit-dt{
    padding: 0 25px;
    position: relative;
    color: #333;
    font-size: 16px;
    height: 85px;
    line-height: 85px;
  }
  .recruit-dt .dt-cell{
    float: left;
    width: 25%;
  }
  .recruit-header-nav > div, .recruit-dt .dt-cell{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dt-close{
    position: absolute;
    top: 30px;
    right: 40px;
    width: 20px;
    height: 20px;
    display: none;
    background: url(../../images/close_btn.png) no-repeat;
    background-size:100% 100%;
  }
  .cur .dt-close{
    display: block;
  }
  .cur .recruit-dt{
    background-color: $red;
    color: white !important;
  }
  .recruit-dd{
    border-width:0 2px 2px 2px;
    border-color: $red;
    border-style: solid;
    padding: 50px 80px 60px 50px;
    color: #333;
    font-size: 16px;
  }
  .recruit-dd .dd-cont-cell{
    width: 30%;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
  }
  .recruit-desc{
    padding-top: 40px;
  }
  .recruit-desc p{
    padding-left: 15px;
    padding-right: 15px;
    color: #333;
  }
  .apply-job{
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 40px;
  }

</style>
