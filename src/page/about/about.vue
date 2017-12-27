<template>
  <div class="about-page">
    <head-top></head-top>
    <section class="common-banner"></section>
    <section class="news-crumbs">
      <p class="container crumbs-p">您的位置：
        <router-link to="/home">首页</router-link>
        > <span class="red">关于我们</span></p>
    </section>
    <div class="container">
      <div class="about-con">
        <section class="about-section1">
          <div class="title-wrap">
            <div class="flo-title">关于我们</div>
            <p>About we</p>
          </div>
          <p class="mb25">湖南千山慢病健康管理有限公司由上市公司湖南千山制药机械股份有限公司（股票代码：300216）投资，成立于2015年12月，注册资金1.723亿元，位于长沙经济技术开发区盼盼路9号，致力于高血压等慢性病防治与健康管理服务。千山健康开发的“千山降压”app，依托周宏灏院士研发的个体化用药基因检测技术和国内领先的智能血压计等可穿戴设备，能实现对高血压病人的精准用药指导、动态血压监测和健康智能管理。</p>
          <div>
            <div class="about-company-section-img">
              <img src="../../images/about_company_img.jpg"/>
            </div>
            <div class="about-company-section">
              <p>公司旗下千山慢病精准管理与服务中心项目位于长沙经开区人民东路与东七路交汇处，占地365亩，计划总投资50亿元，投资建设期四年。一期工程投资17亿元，总建筑面积19.76万平方米，计划于2017年上半年完成。项目建成后，可形成每年为 300 万名慢病患者提供服务的能力。
                母公司湖南千山制药机械股份有限公司成立于2002年，注册资本3.61亿元，2011年5月在深交所创业板上市。公司设有博士后科研工作站，是国家认定企业技术中心、国家火炬计划重点高新技术企业和国内主要注射剂生产设备供应商，拥有1200多项专利技术，特别是以中南大学周宏灏院士领衔的高血压基因检测、高血压实时监控技术处国内领先，国际先进水平。</p>
            </div>
          </div>
        </section>
        <section class="about-section2">
          <div class="title-wrap">
            <div class="flo-title">关于梦想</div>
            <p>About dreams</p>
          </div>
          <p>2010年中国因高血压死亡共计204.3万例。2012年，每4个成人中就有1个是高血压患者。2016年，我国高血压患者超3亿，每年新增高血压病例超1800万……基层慢病管理工作普遍落后，无法满足老百姓日益增长的慢病管理需求，我们的梦想，是让人们远离病痛，让世界更加美好。
          </p>
        </section>
        <section class="about-section3">
          <div class="title-wrap">
            <div class="flo-title">经营宗旨</div>
            <p>Business purposes</p>
          </div>
          <p>专注健康产业、追求卓越品质、创造幸福生活
          </p>
        </section>
        <section class="about-section4">
          <div class="title-wrap">
            <div class="flo-title">价值观</div>
            <p>Values</p>
          </div>
          <p>省身厚德、立业兴道
          </p>
        </section>
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

<style scoped>
  .about-con{
    margin-top: 30px;
  }
  .about-section1, .about-section2, .about-section3, .about-section4{
    margin-bottom: 50px;
  }
  .title-wrap{
    margin-bottom: 20px;
  }
  .title-wrap .flo-title{
    font-size: 22px;
    font-weight: normal;
  }
  .about-company-section-img{
    position: relative;
    float: left;
  }
  .about-company-section{
    padding-left: 600px;
    min-height: 260px;
    padding-top: 25px;
    padding-bottom: 110px;
    border-bottom: 1px solid #ddd;
  }

</style>
