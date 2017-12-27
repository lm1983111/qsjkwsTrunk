<template>
  <div class="recruit-page">
    <head-top></head-top>
    <section class="common-banner"></section>
    <section class="news-crumbs">
      <p class="container crumbs-p">您的位置：
        <router-link to="/home">首页</router-link>
        > <span class="red">招贤纳士</span></p>
    </section>
    <section class="category-nav clearfix">
      <ul class="container category-nav-ul">
        <li v-on:click="setRecruitType(-1)" :class="{'cur': type == -1}">
          <span>全部</span>
        </li>
        <li v-for="item in recruitType" v-on:click="setRecruitType(item.id)" :class="{'cur': type == item.id}">
          <span>{{item.typeName}}</span>
        </li>
      </ul>
    </section>
    <section class="recruit-list-section clearfix">
      <div class="container">
        <div class="recruit-header-nav clearfix">
          <div>职位名称</div>
          <div>职位类别</div>
          <div>任职方式</div>
          <div>地点</div>
        </div>
        <div class="recruit-body">
          <dl class="recruit-dl" v-for="item in dataList">
            <dt class="recruit-dt clearfix">
              <div class="dt-cell">{{item.quarterName}}</div>
              <div class="dt-cell">{{item.recruitTypeStr}}</div>
              <div class="dt-cell">{{item.appointmentMethod}}</div>
              <div class="dt-cell">{{item.address}}</div>
              <div class="dt-close"></div>
            </dt>
            <dd class="recruit-dd">
              <div class="dd-cont-head clearfix">
                <div class="dd-cont-cell">学历要求：{{item.educationalRequirements}}</div>
                <div class="dd-cont-cell">招聘人数：{{item.number}}人</div>
              </div>
              <div class="recruit-desc clearfix">
                <div v-html="item.jobRequirements"></div>
              </div>
              <div class="apply-job">
                <a class="btn red-btn btn-size18" href="mailto:chnsun300216@126.com">申请该职位</a>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="pagination-section">
      <v-pagination :total-count = "totalCount" :page-num = "pageNum" @pagechange = 'pagechange'></v-pagination>
      <!--@pagechange是在子组件中定义的事件名称，触发父组件里的pagechange函数-->
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import $ from 'jquery'
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  import pagination from '../../components/common/pagination'
  import {baseUrl} from "../../config/env";

  //注册dl点击事件
  $(document).on('click','.recruit-dl',function(){
    var $this = $(this);
    if($this.hasClass('cur')){
      $this.removeClass('cur');
      $this.find('.recruit-dd').css({"display":"none"})
    }else{
      $this.addClass('cur');
      $this.find('.recruit-dd').css({"display":"block"})
    }
  });

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
        recruitType:[],
        dataList:[],
      }
    },
    mounted(){
      this.getRecruitType();
    },
    watch:{
      recruitType(){
        this.getRecruitList()
      }
    },
    methods:{
      getRecruitType(){
        this.$http.jsonp(baseUrl+'officialWebsite/allRecruitType',{jsonpcallback:''}).then(res => {
          if(res.body.recruitTypes.length > 0){
            this.recruitType = res.body.recruitTypes;
            this.type = -1
          }
        })
      },
      getRecruitList:function(){
        this.$http.jsonp(baseUrl+'officialWebsite/recruitList',{jsonpcallback:'',params:{pageNum:this.pageNum,pageSize:this.pageSize,recruitType:this.type}}).then(res => {
          this.dataList = res.body.dataList;
          this.totalCount = res.body.totalCount;
          this.pageNum = res.body.currentPage;
        })
      },
      setRecruitType(id){
        this.type = id;
        this.pageNum = 1;
        console.log('父组件下发给pagination的pageNum: ',this.pageNum)
        this.getRecruitList()
      },
      pagechange(pageNum){
        //pageNum就是子组件传过来的this.current
        console.log('pageNum : ',pageNum)
        this.pageNum = pageNum;
        //开始ajax请求..........
        this.getRecruitList()
      }
    },
    computed: {
    },
    filters:{
      changeTxt(val){
        // for(var i=0;i<this.recruitType.length;i++){
        //   if(this.recruitType[i].id===val){
        //     return  this.recruitType[i].typeName;
        //   }
        // }
      }
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
    cursor: pointer;
  }
  .dt-close:hover{
    opacity: .7;
    filter:Alpha(opacity=70)
  }
  .cur .dt-close{
    display: block;
  }
  .cur .recruit-dt{
    background-color: $red;
    color: white !important;
  }
  .recruit-dd{
    height: 0;
    display: none;
    border-width:0 2px 2px 2px;
    border-color: $red;
    border-style: solid;
    padding: 50px 80px 60px 50px;
    color: #333;
    font-size: 16px;
    transition: all 1s;
  }
  .cur .recruit-dd{
    height: auto;
    display: block;
  }
  .recruit-dd .dd-cont-cell{
    width: 30%;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
  }
  .recruit-desc{
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    color: #333 !important;
  }
  .recruit-desc p{
    padding-left: 15px;
    padding-right: 15px;
    color: #333 !important;
  }
  .apply-job{
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 40px;
  }
  .pagination-section{
    padding: 130px 0;
  }
</style>
