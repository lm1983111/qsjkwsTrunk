<template>
  <div class="news-detail-page">
    <head-top></head-top>
    <div class="page-con-wrap">
      <div class="container data-loading">
        <div class="news-detail-header">
          <div class="news-detail-title">{{newsDetail.title}}</div>
          <div>发布时间：<span>{{newsDetail.createTime | converTime}}</span></div>
        </div>
        <div v-html="newsDetail.content"></div>
      </div>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import footGuide from '../../components/footer/footGuide'
  import {baseUrl} from "../../config/env";
  import {formatDate} from "../../plugins/util1";

  export default {
    components: {
      headTop,
      footGuide
    },
    data(){
      return{
        newsDetail: ''
      }
    },
    mounted(){
      this.initData()
    },
    methods:{
      initData(){
        this.$http.jsonp(baseUrl+'officialWebsite/newsDetail',{params:{id:this.$route.params.id}}).then(res => {
          this.newsDetail = res.body.news
          console.log(this.newsDetail.content)
          console.log(typeof (this.newsDetail.content))
        })
      }
    },
    filters: {
      converTime(time){
        let date = new Date(time);
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin";
  .news-detail-header{
    text-align: center;
    margin-top: 75px;
    margin-bottom: 65px;
  }
  .news-detail-title{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .data-loading{
    min-height: 300px;
  }
</style>
