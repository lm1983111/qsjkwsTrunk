<template>
    <div>
      <head-top></head-top>
      <!--swiper-->
      <div class="home-flo1">
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
          <div class="flo-title center">千山健康慢病管理与服务平台</div>
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
          <div class="l-info">
            <div class="flo-title">关于我们</div>
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
          <div class="r-info">
            <div class="flo-title"> 高血压个体化治疗基因检测</div>
            <p>国内首家注册高血压个体化治疗基因检测芯片</p>
          </div>
          <div class="flo4-con">
            <div class="flo4-con-text">院士研发/专业权威</div>
          </div>
        </div>
      </div>

      <!--特色服务-->
      <div class="home-flo5">
        <div class="container">
          <div class="flo5-con">
            <div class="bx-wrapper">
              <div class="bx-viewport">
                <ul class="content_list clearfix" id="conUl">
                  <li data-block-id="20" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务0</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="2" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务2</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="3" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务3</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="5" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务5</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="7" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务7</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="8" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务8</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="11" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务11</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
                  <li data-block-id="12" class="item_block">
                    <div class="flo-lt-desc">
                      <div class="flo-title">特色服务12</div>
                      <p>为慢病患者提供专业、稳定、持续的慢病健康管理服务，造福慢病患者</p>
                    </div>
                    <div class="item_div_wrapper clearfix">
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
              <span class="bx-prev" id="preCtr"><i class="fa fa-angle-top"></i></span>
              <div class="bx-btn-ul-wrap">
              <ul class="bx-btn-ul" id="controlUl">
                <li data-block-id="20"><span>精准医疗</span></li>
                <li data-block-id="2"><span>健康管理</span></li>
                <li data-block-id="3"><span>数据监测</span></li>
                <li data-block-id="5"><span>其它项一</span></li>
                <li data-block-id="7"><span>其它项二</span></li>
                <li data-block-id="8"><span>其它项三</span></li>
                <li data-block-id="11"><span>其它项四</span></li>
                <li data-block-id="12"><span>其它项五</span></li>
              </ul>
              </div>
              <span class="bx-next" id="nextCtr"><i class="fa fa-angle-bottom"></i></span>
            </div>
          </div>
        </div>
      </div>

      <!--智能可穿戴设备-->
      <div class="home-flo6">
        <div class="container">
          <div class="r-info">
            <div class="flo-title">  智能可穿戴医疗设备</div>
            <p class="flo-desc">可以帮助高血压患者实现全天 24 小时血压监测和数据采集，清除监测盲点，帮助患者了解自身血压变化动态有助于患者实现精准服药与血压精准控制</p>
            <router-link to="/products/tonometer" class="btn red-btn btn-size18 mt45" target="_blank">MORE</router-link>
          </div>
          <div class="flo6-con">
            <div class="flo6-con-img">
              <img src="../../images/flo6_products.png"/>
            </div>
          </div>
        </div>
      </div>

      <!--千山智库-->
      <div class="home-flo7">
        <div class="container home-flo7-container">
          <div class="section-l-info">
            <div class="flo-title">  千山智库</div>
            <p class="flo-desc">以“院士团”“专家团”“博士团”为核心，为慢性病患者
              提供专业的健康管理服务，帮助患者回归健康、轻松生活。</p>
          </div>
        </div>
        <div class="swiper-all-wrap">
          <swiper :options="swiperOption2">
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar1.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar2.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar3.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar4.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar4.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar4.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="top-block">
                <img src="../../images/scholar4.jpg"/>
              </div>
              <div class="bottom-block">
                <div class="title">周宏灏</div>
                <div class="desc">中国工程院士</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>

      </div>
      <foot-guide></foot-guide>
    </div>
</template>

<script>
  import $ from 'jquery'
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
          /*breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }*/
        },
      }
    },
    components: {
      headTop,
      footGuide,
      swiper,
      swiperSlide,
    },
    mounted() {
      this.initData();
      //===============================特色服务===============================//
      var controlUl = $('#controlUl'),
        controlLiArr = $('#controlUl li'),
        blockId = controlLiArr.first().attr('data-block-id'), //默认全局变量blockId为控制按钮第一项的id...
        defaultShowNum = 3, //设置显示3块
        blockItemHeight = controlLiArr.outerHeight(); //单块高
      $(".bx-btn-ul-wrap").css({"height":blockItemHeight*defaultShowNum,"overflow":"hidden"});

      //blockId数组
      var idArr = [];
      for(let i = 0; i<controlLiArr.length; i++){
        var itemId = $(controlLiArr[i]).attr('data-block-id');
        idArr.push(itemId)
      }
      //根据blockId渲染ui
      function viewUi(id){
        //根据传入的blockId样式cur
        controlUl.find('li').removeClass('cur');
        controlUl.find('li[data-block-id='+id+']').addClass('cur');

        //根据传入的blockId得到它的位置indexNum，再计算偏移量
        var indexNum = idArr.indexOf(id)+1;
        var pianyi;
        var halfShowIAd = Math.ceil(defaultShowNum/2); //默认显示项半值加一
        if(indexNum <= halfShowIAd){ //如传入最前两项
          pianyi = 0;
        }
        else if(indexNum > (idArr.length - halfShowIAd)){ //如传入最后两项
          pianyi = -(idArr.length*blockItemHeight - defaultShowNum*blockItemHeight);
        }
        else{
          pianyi = -(indexNum*blockItemHeight - halfShowIAd*blockItemHeight);
        }
        controlUl.css({"transform":"translateY("+pianyi+"px)"});

        //渲染左侧大块
        var conUl = $('#conUl'),
          conLiArr = $('#conUl li'),
          bigBlockWidth = $('.bx-viewport').outerWidth(),
          bigPianyi = -(indexNum-1)*bigBlockWidth;

        conUl.css({"width":idArr.length*100+"%"})
        conUl.find('li').removeClass('cur');
        conUl.find('li[data-block-id='+id+']').addClass('cur');
        conUl.css({"transform":"translateX("+bigPianyi+"px)"});

      }
      viewUi(blockId);

      //点击li改变blockId
      $(document).on('click','#controlUl li',function(){
        blockId = $(this).attr('data-block-id');
        viewUi(blockId)
      });
      //点击上翻页
      $('#preCtr').on('click',function(){
        var curBlock = controlUl.find('.cur');
        if(curBlock.prevAll().length > 0){
          blockId = curBlock.prev().attr('data-block-id');
          viewUi(blockId);
        }
      });
      //点击下翻页
      $('#nextCtr').on('click',function(){
        var curBlock = controlUl.find('.cur');
        if(curBlock.nextAll().length > 0){
          blockId = curBlock.next().attr('data-block-id');
          viewUi(blockId);
        }
      });
      //===============================特色服务===============================//
    },
    watch: {
    },
    methods: {
      initData(){
        this.$http.jsonp(baseUrl + 'officialWebsite/picList',{jsonpcallback:''}).then(res => {
          if(res.body.advertisementList.length> 0){
            for(let i=0; i<res.body.advertisementList.length; i++){
              let datai = res.body.advertisementList[i];
              this.swiperSlides.push(datai.picUrl)
            }
          }
        })

      },
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";
  .home-flo1{
    width: 100%;
  }
  .home-flo1 .swiper-container{
    width: 100%;
  }
  .home-flo7{
    width: 100%;
    padding:80px 0 35px 0;
    height: 600px;
    background-image: url("../../images/flo7_bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .home-flo7-container{
    height: auto;
  }
  .home-flo1 .swiper-button-prev{
    background-image: url("../../images/left_arrow_homepage.png");
  }
  .home-flo1 .swiper-button-next{
    background-image: url("../../images/right_arrow_homepage.png");
  }
  .home-flo1 .swiper-button-prev, .home-flo1 .swiper-button-next{
    height: 29px;
    width: 17px;
    margin-top: -14px;
    background-size: 17px 29px;
    background-position: center center;
  }
  .home-flo7 .swiper-button-prev{
    background-image: url("../../images/left_arrow_homepage.png");
  }
  .home-flo7 .swiper-button-next{
    background-image: url("../../images/right_arrow_homepage.png");
  }
  .home-flo7 .swiper-button-prev.swiper-button-disabled{
    background-image: url("../../images/left_arrow_homepage_deep.png");
  }
  .home-flo7 .swiper-button-next.swiper-button-disabled{
    background-image: url("../../images/right_arrow_homepage_deep.png");
  }
  .home-flo7 .swiper-button-prev, .home-flo7 .swiper-button-next{
    height: 29px;
    width: 17px;
    margin-top: -14px;
    background-size: 17px 29px;
    background-position: center center;
  }

  .swiper-all-wrap{
    position: relative;
    width: 1370px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 100px;
    margin-top: 100px;
  }
  .swiper-all-wrap .swiper-button-prev, .swiper-all-wrap .swiper-button-next{
    height: 106px;
    width: 86px;
    margin-top: -53px;
    background-color: #eae9e9;
  }
  .swiper-all-wrap .swiper-button-prev:hover, .swiper-all-wrap .swiper-button-next:hover{
    background-color: $red;
  }
  .swiper-all-wrap .swiper-button-disabled:hover{
    background-color: transparent !important;
  }
  .swiper-all-wrap .swiper-slide{
    position: relative;
    display: block;
    background-color: white;
    align-items: center;
  }
  .swiper-slide .top-block{
    width: 100%;
    height: 70%;
    overflow: hidden;
  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-slide .bottom-block{
    padding: 12% 5%;
    height: 30%;
  }
  .swiper-slide .bottom-block .title{
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }
  .swiper-slide .bottom-block .desc{
    font-size: 12px;
    color: #999;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 600px;
  }
  .flo3-left{
    width: 370px;
    float: left;
    display: inline-block;
  }
  .home-flo3 .l-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 370px;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 600px;
  }
  .home-flo4 .r-info{
    position: absolute;
    top: 0;
    right: 0;
    width: 370px;
    text-align: right;
  }
  .flo4-con{
    height: 100%;
  }
  .flo4-con-text{
    position: absolute;
    top: 50%;
    left: 0;
    margin-top:-10px;
    width: 100%;
    text-align: center;
    font-size: 40px;
    color: #ea1b23;
    font-weight: normal;
    letter-spacing: 50px;
  }
  .home-flo5{
    width: 100%;
    background-image: url("../../images/flo5_bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 600px;
  }
  .flo5-con{
    position: absolute;
    top: 0;
    left: 0;
    width: 930px;
    z-index: 20;
  }
  .bx-wrapper{
    position: relative;
    max-width: 930px;
    margin: 0 auto;
  }
  .bx-viewport{
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 420px;
  }
  .content_list{
    position: relative;
    transition: all ease-out .3s;
  }
  .item_block{
    cursor: pointer;
    animation-delay: 0s;
    float: left;
    list-style: none;
    position: relative;
    width: 930px;
    visibility: visible;
    animation-name: fadeInUp;
  }
  .item_div_wrapper{
    margin-top: 25px;
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
    margin-top: 25px;
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
    position: absolute;
    right: 0;
    top: 0;
    width: 240px;
  }
  .fa-angle-top{
    display: inline-block;
    height: 17px;
    width: 29px;
    background-image: url("../../images/arrow_top_tese.png");
    background-repeat: no-repeat;
    background-size: 29px 17px;
    background-position: center;
    margin-top: 30px;
  }
  .fa-angle-bottom{
    display: inline-block;
    height: 17px;
    width: 29px;
    background-image: url("../../images/arrow_bottom_tese.png");
    background-repeat: no-repeat;
    background-size: 29px 17px;
    background-position: center;
    margin-top: 30px;
  }
  .btn-wrapper{

  }
  .bx-btn-ul-wrap{
    height: 240px;
    width: 100%;
    overflow: hidden;
  }
  .bx-btn-ul{
    height: 100%;
    width: 100%;
    padding: 0;
  }
  .bx-prev, .bx-next, .bx-btn-ul li{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    display: block;
    background: rgba(255,255,255,0.4);
    cursor: pointer;
    box-sizing:border-box;
  }
  .bx-prev:hover, .bx-next:hover{
    background-color: #ea1b23;
    opacity: 1;
  }
  .bx-btn-ul li{
    color: #666;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255,255,255,.3);
    font-size: 18px;
  }
  .bx-btn-ul li.cur{
    color: #333;
    background-color: white;
    opacity: 1;
    border: 1px solid #ddd;
  }
  .bx-btn-ul li:hover{
    color: #333;
  }
  .home-flo6{
    width: 100%;
    background-image: url("../../images/flo6_bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding:80px 0 100px 0;
    height: 600px;
  }
  .flo6-con{
    position: absolute;
    left: 50px;
    top: 20px;
  }
  .section-l-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 370px;
    text-align: left;
  }
  .home-flo6 .r-info{
    position: absolute;
    top: 0;
    right: 0;
    width: 370px;
    text-align: right;
  }
  .flo-desc{
    line-height: 1.5;
  }
  .flo-lt-desc .flo-title{
    margin-bottom: 10px;
  }

  /*vue-carousel*/
  #container {
    padding: 0 60px;
  }

  .VueCarousel-slide {
    position: relative;
    background: #42b983;
    color: #fff;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    min-height: 100px;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


</style>
