<template>
    <div class="header">
      <header id="header_top">
        <div class="header-wrap container">
          <div class="logo"></div>
          <div class="nav-div">
            <router-link to="/home">首页</router-link>
            <router-link to="/news">新闻动态</router-link>
            <router-link to="/products">产品中心</router-link>
            <router-link to="/recruit">招贤纳士</router-link>
            <router-link to="/about">关于我们</router-link>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  .header-wrap{
    height: 85px;
  }
  .header-wrap .logo{
    position: relative;
    display: inline-block;
    float: left;
    height: 40px;
    width: 120px;
    top: 22px;
    left: 0;
    background-image: url("../../images/chinasunhealth_logo.png");
    background-repeat: no-repeat;
  }
  .nav-div{
    padding-left: 200px;
    height: 85px;
    float: right;
  }
  .nav-div a{
    height: 85px;
    line-height: 85px;
    display: inline-block;
    text-decoration: none;
    color: #666;
    margin-left: 55px;
    font-size: 16px;
  }
  .nav-div a:hover{
    color: red;
  }
  .router-link-active{
    color: red !important;
  }
</style>
