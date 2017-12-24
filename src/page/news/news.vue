<template>
  <div class="news-page">
    <head-top></head-top>
    <section class="common-banner"></section>
    <section class="news-crumbs">
      <p class="container crumbs-p">您的位置：首页 > <span class="red">新闻动态</span></p>
    </section>
    <section class="category-nav clearfix">
      <ul class="container category-nav-ul">
        <li v-for="item in newsType" v-on:click="setNewsType(item.id)" :class="{'cur': type == item.id}">
          <span>{{item.typeName}}</span>
        </li>
      </ul>
    </section>
    <section class="news-list-section clearfix">
      <ul class="news-item-wrap">
        <li class="news-item" v-for="item in dataList">
          <div class="container">
            <div class="left-date-wrap">
              <div class="big">07-20</div>
              <div class="small">2017</div>
            </div>
            <div class="center-news-div">
              <router-link :to="'/news/'+item.id" class="news-title" target="_blank">{{item.title}}</router-link>
              <p class="news-desc">{{item.descr}}</p>
            </div>
            <div class="right-control"></div>
          </div>
        </li>
        <!--<li class="news-item cur">
          <div class="container">
            <div class="left-date-wrap">
              <div class="big">07-20</div>
              <div class="small">2017</div>
            </div>
            <div class="center-news-div">
              <div class="news-title">“千山降压”商城上线 智能血压监测产品全球开售（图）</div>
              <p class="news-desc">红网长沙7月17日讯 今天上午，千山药机子公司千山健康公司“千山降压”商城上线。用户只需下载“千山降压”APP，登陆“降压商城”便可实现轻松购买千山智能血压监测套装、基因检测套装。</p>
            </div>
            <div class="right-control"></div>
          </div>
        </li>-->
      </ul>
    </section>
    <section class="pagination-section">
      <v-pagination :total-count = "totalCount" :page-num = "pageNum" @pagechange = 'pagechange'></v-pagination>
      <!--@pagechange是在子组件中定义的事件名称，触发父组件里的pagechange函数-->
    </section>
    <foot-guide></foot-guide>
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery'
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  import pagination from '../../components/common/pagination'
  import {baseUrl} from "../../config/env";


  export default {
    components: {
      headTop,
      footGuide,
      'v-pagination':pagination
    },
    data(){
      return{
        totalCount: null,
        pageSize: 10,
        pageNum: 1,
        type:null,
        newsType:[],
        dataList:[],
      }
    },
    mounted(){
      this.getNewsType();
    },
    watch:{
      newsType:function(){
        this.getNewsList()
      }
    },
    methods:{
      getNewsType:function(){
        this.$http.jsonp(baseUrl+'news/queryAllNewsType',{jsonpcallback:''}).then(res => {
          if(res.body.newsTypes.length > 0){
            this.newsType = res.body.newsTypes
            this.type = res.body.newsTypes[0].id
          }
        })
      },
      getNewsList:function(){
        this.$http.jsonp(baseUrl+'news/getNews',{jsonpcallback:'',params:{pageNum:this.pageNum,pageSize:this.pageSize,type:this.type}}).then(res => {
          this.dataList = res.body.dataList
          this.totalCount = res.body.totalCount;
          this.pageNum = res.body.currentPage;
        })
      },
      setNewsType:function(id){
        this.type = id;
        this.pageNum = 1;
        console.log('父组件下发给pagination的pageNum: ',this.pageNum)
        this.getNewsList()
      },
      pagechange:function(pageNum){
        //pageNum就是子组件传过来的this.current
        console.log('pageNum : ',pageNum)
        this.pageNum = pageNum;
        //开始ajax请求..........
        this.getNewsList()
      }
    },
    computed:{

    },
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";

  .news-item{
    background-color: white;
    padding: 30px 0;
    border-bottom: 1px solid #ddd;
  }
  .news-item:hover{
    background-color: $red;
    border-bottom-color: $red;
    color: white;
  }
  .left-date-wrap{
    width: 290px;
    float: left;
    text-align: right;
  }
  .right-control{
    width: 20px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -15px;
    background-image:url("../../images/arrow-right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }
  .center-news-div{
    padding: 7px 150px 0 340px;
  }
  .left-date-wrap .big{
    font-size: 50px;
    font-weight: normal;
    color: #999;
  }
  .left-date-wrap .small{
    font-size: 16px;
    font-weight: normal;
    color: #999;
  }
  .news-title{
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .news-item:hover .news-desc, .news-item:hover .left-date-wrap > div{
    color: white;
  }
</style>
