<template>
    <div>
      <head-top></head-top>
      <!--swiper-->
      <div class="home-flo1 home-banner">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in swiperSlides">
            <img :src="slide"/>
          </swiper-slide>
          <!-- Add Pagination -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- Add Pagination -->
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </div>

      <!--千山健康慢病管理与服务平台-->
      <div class="home-flo2">
        <div class="container">
          <h2 class="flo-title center">千山健康慢病管理与服务平台</h2>
          <p class="center">千山健康慢病管理与服务平台</p>
          <div class="home-flo2-con">
            <div class="flo2-item">
              <div>
                <img src="../../images/flo2_gene.png"/>
              </div>
              <div>
                <p class="flo-title2">高血压个体化基因检测</p>
                <p class="">精准精准定位高血压用药种类，帮助患者选对药，用准药。</p>
              </div>
            </div>
            <div class="flo2-item">
              <div>
                <img src="../../images/flo2_watch.png"/>
              </div>
              <div>
                <p class="flo-title2">高血压个体化基因检测</p>
                <p class="">精准精准定位高血压用药种类，帮助患者选对药，用准药。</p>
              </div>
            </div>
            <div class="flo2-item">
              <div>
                <img src="../../images/flo2_doctor.png"/>
              </div>
              <div>
                <p class="flo-title2">高血压个体化基因检测</p>
                <p class="">精准精准定位高血压用药种类，帮助患者选对药，用准药。</p>
              </div>
            </div>
            <div class="flo2-item">
              <div>
                <img src="../../images/flo2_data.png"/>
              </div>
              <div>
                <p class="flo-title2">高血压个体化基因检测</p>
                <p class="">精准精准定位高血压用药种类，帮助患者选对药，用准药。</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!--关于我们-->
      <div class="home-flo3">
        <div class="container">
          <div class="flo3-left">
            <h2 class="flo-title">关于我们</h2>
            <p class="">湖南千山慢病健康管理有限公司 ( 简称“千山健康” ) 是上市公司千山药机 ( 股票代码：300216 ) 控股子公司，公司旗下的千山慢病精准管理与服务中心项目计划总投资50亿元，投资建设期四年，项目建成后，可形成每年为 300 万名慢病患者提供服务的能力。
              公司致力于高血压等慢性病防治与健康管理服务，开发的“千山降压”APP，依托周宏灏院士研发的个体化用药基因检测技术和国内领先的智能血压计等可穿戴设备，能实现对高血压病人的精准用药指导、动态血压监测和健康智能管理。</p>
          </div>
          <div class="flo3-right-img-wrap">
            <div><img src="../../images/chnsun_factory.jpg"/></div>
            <p class="">千山慢病精准管理与服务中心</p>
          </div>
          <div class="flo3-right-squire">
          </div>
        </div>
      </div>

      <!--院士研发-->
      <div class="home-flo4">
        <div class="container">
          <div class="flo4-nav">
            <h2 class="flo-title"> 高血压个体化治疗基因检测</h2>
            <p>国内首家注册高血压个体化治疗基因检测芯片</p>
          </div>
          <div class="flo4-con">
            <h2 class="flo4-con-text"> 院士研发/专业权威</h2>
          </div>
        </div>
      </div>

      <!--特色服务-->
      <div class="home-flo5">
        <div class="container">
          <div class="flo5-con">
            <div class="bx-wrapper">
              <div class="bx-viewport">
                <ul class="content_list">
                  <li class="item_block">
                    <h2 class="flo-title">特色服务</h2>
                    <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    <div class="item_div_wrapper">
                      <div class="item_img">
                        <img src="../../images/flo5_item1.jpg"/>
                      </div>
                      <div class="item_wrapper">
                        <div class="item_info">
                          <p class="flo-title2">精准医疗</p>
                          <p style="margin-top:70px">专业医疗团队对患者进行科学评估，提供精准治疗解决方案</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flo5-btn">
            <div class="btn-wrapper">
              <a class="bx-prev" href=""><i class="fa fa-angle-left">上</i></a>
              <ul class="bx-btn-ul">
                <li><a>精准医疗</a></li>
                <li><a class="cur">健康管理</a></li>
                <li><a>数据监测</a></li>
                <li><a>其它选项</a></li>
                <li><a>其它的的</a></li>
              </ul>
              <a class="bx-next" href=""><i class="fa fa-angle-right">下</i></a>
            </div>
          </div>
        </div>
      </div>

      <!--千山智库-->
      <div class="chnsun-scholar">
        <swiper :options="swiperOption2" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="../../images/scholar1.jpg"/>
            <!--<div class="scholar-portrait" style="background-image: url('../../images/scholar1.jpg')"></div>-->
            <!--<h2>周宏灏</h2>
            <p>中国工程院院士</p>-->
          </swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <foot-guide></foot-guide>
    </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  import {baseUrl} from "../../config/env";
  import '../../style/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data() {
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        swiperSlides: [],
        swiperOption2: {
          slidesPerView: 4,
          spaceBetween: 25,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }
        },
      }
    },
    components: {
      headTop,
      footGuide,
      swiper,
      swiperSlide
    },
    mounted() {
      this.initData()
    },
    methods: {
      initData(){
        this.$http.jsonp(baseUrl + 'banner/getBanner',{jsonpcallback:''}).then(res => {
          if(res.body.dataList.length> 0){
            for(let i=0; i<res.body.dataList.length; i++){
              let datai = res.body.dataList[i];
              this.swiperSlides.push(datai.picUrl)
            }
          }
        })

      },
    }
  }
</script>

<style scoped>
  .home-banner .swiper-container {
    height: 515px;
    width: 100%;
  }
  @media (min-width: 1200px){
    .chnsun-scholar .swiper-container{
      width: 1170px;
      height: 400px;
    }
  }
  .chnsun-scholar .swiper-slide {
    text-align: left;
    font-size: 18px;
    background-color: #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .scholar-portrait{
    height: 290px;
    width: 280px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .home-flo2{
    width: 100%;
    background-color: #fff;
    padding:80px 0 100px 0;
  }
  .flo2-item{
    display: inline-block;
    width: 23%;
    margin: 0 1% 1% 0;
    text-align: center;
  }
  .flo2-item img{
    max-width: 100%;
  }
  .flo-title{
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 15px;
  }
  .flo-title2{
    font-size: 18px;
    font-weight: normal;
    color: #333;
  }
  .center{
    text-align: center;
  }
  @media screen and (max-width: 800px){
    .flo2-item {
      width: 45%;
    }
  }
  .home-flo3{
    width: 100%;
    background-image: url("../../images/flo3_bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 400px;
  }
  .flo3-left{
    width: 370px;
    float: left;
    display: inline-block;
  }
  .flo3-right-img-wrap{
    width: 645px;
    height: 290px;
    position: absolute;
    right: 100px;
    top: 70px;
    z-index: 20;
  }
  .flo3-right-img-wrap p{
    text-align: right;
    color: white;
  }
  .flo3-right-img-wrap img{
    max-width: 100%;
  }
  .flo3-right-squire{
    width: 450px;
    height: 400px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    float: right;
    background-color: #ea1b23;
  }
  [class^="home-flo"]:after, [class*=" home-flo"]:after, [class^="home-flo"]:after, [class*=" home-flo"]:before{
    content: '';
    display: block;
  }
  [class^="home-flo"]:after, [class*=" home-flo"]:after{
    clear: both;
  }
  .home-flo4{
    width: 100%;
    background-image: url("../../images/flo4_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 420px;
  }
  .flo4-nav{
    position: absolute;
    top: 0;
    right: 0;
  }
  .flo4-con{
    text-align: center;
  }
  .flo4-con-text{
    position: relative;
    font-size: 40px;
    color: #ea1b23;
    font-weight: normal;
    letter-spacing: 50px;
    top: 190px;
  }
  .home-flo5{
    width: 100%;
    background-image: url("../../images/flo5_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 420px;
  }
  .flo5-con{
    width: 1025px;
    float: left;
  }
  .bx-wrapper{
    position: relative;
    max-width: 1025px;
    margin: 0 auto;
  }
  .bx-viewport{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 420px;
  }
  .content_list{
    width: 715%;
    position: relative;
    transition-duration: 0s;
    transform: translate3d(0px, 0px, 0px);
  }
  .item_block{
    cursor: pointer;
    animation-delay: 0s;
    float: left;
    list-style: none;
    position: relative;
    width: 1025px;
    visibility: visible;
    animation-name: fadeInUp;
  }
  .item_div_wrapper{
    margin-top: 35px;
  }
  .item_img{
    width: 450px;
    float: left;
    margin: 0;
    position: relative;
  }
  .item_img img{
    max-width: 100%;
    display: block;
  }
  .item_wrapper{
    width: 390px;
    float: left;
    margin-left: 40px;
    margin-top: 30px;
  }
  .item_info{
    position: relative;
  }
  .item_info:after{
    content: '';
    width: 30px;
    height: 1px;
    background-color: #aaa;
    position: absolute;
    top: 15px;
    left: -40px;
    z-index: 3;
  }
  .flo5-btn{
    width: 240px;
    position: absolute;
    right: 0;
    top: 80px;
  }
  .btn-wrapper{

  }
  .bx-btn-ul{
    height: 240px;
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
  .bx-prev, .bx-next, .bx-btn-ul li a{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    display: block;
    background: rgba(255,255,255,.4);
    cursor: pointer;
    box-sizing:border-box;
  }
  .bx-prev:hover, .bx-next:hover{
    background-color: #ea1b23;
    opacity: 1;
  }
  .bx-btn-ul li a{
    color: #333;
    border-bottom: 1px solid transparent;
    font-size: 20px;
  }
  .bx-btn-ul li a.cur{
    background-color: white;
    opacity: 1;
    border: 1px solid #ddd;
  }
</style>
