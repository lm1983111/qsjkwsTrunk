<template>
    <div class="header">
      <header class="header-wrap">
        <div class="container clearfix">
          <div class="logo"></div>
          <div class="nav-div">
            <router-link to="/home"><span data-title="HOME">首页</span></router-link>
            <router-link to="/news"><span data-title="NEWS">新闻动态</span></router-link>
            <router-link to="/products"><span data-title="PRODUCTS">产品中心</span></router-link>
            <router-link to="/recruit"><span data-title="RECRUIT">招贤纳士</span></router-link>
            <router-link to="/about"><span data-title="ABOUT">关于我们</span></router-link>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
  import $ from 'jquery'
  $(window).scroll(function(event){
    let scrTop = $(window).scrollTop();
    if(scrTop>=50){
      $('.header').addClass('mini')
    }else{
      $('.header').removeClass('mini')
    }
  });
  export default {
  }
</script>

<style scoped>
  .header{
    height: 84px;
    position: fixed;
    z-index: 99;
    width: 100%;
    background: #fff;
    transition: all .6s cubic-bezier(.215,.61,.355,1) 0s;
    border-bottom: #f0f0f0 1px solid;
  }
  .header-wrap{
    padding: 20px 5px 0 5px;
    height: auto;
    transition: all .6s cubic-bezier(.215,.61,.355,1) 0s;
    background: #fff;
  }
  .mini .header-wrap{
    padding: 10px 5px 0 5px;
    height: 54px;
  }
  .header.mini{
    height: 64px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
  }
  .mini .header-wrap{

  }
  .header-wrap .logo{
    display: block;
    height: 40px;
    width: 120px;
    float: left;
    background-image: url("../../images/chinasunhealth_logo.png");
    background-size: 120px 40px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .nav-div{
    margin-left: 30px;
    float: right;
    height: 64px;
  }
  .mini .nav-div{
    height: 54px;
  }
  .nav-div a{
    height: 44px;
    line-height: 44px;
    min-width: 50px;
    text-align: center;
    display: inline-block;
    float: left;
    text-decoration: none;
    color: #666;
    margin-left: 50px;
    font-size: 16px;
    overflow: hidden;
    transition: all .3s ease-out 0s;
  }
  .nav-div a:hover, .nav-div > a:hover > span:after{
    color: red;
  }
  .router-link-active{
    color: red !important;
  }
  .nav-div > a > span{
    display: inline-block;
    position: relative;
    transition: all ease-out .3s;
  }
  .nav-div > a > span:after{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    content: attr(data-title);
    transform: translateY(100%);
    color: #333;
  }
  .nav-div > a:hover > span{
    transform: translateY(-100%)
  }
  .nav-div > a.router-link-active:hover > span{
    transform: translateY(0)
  }
  /*.nav-div > a.router-link-active:hover > span:after{
    color: red;
  }*/
  .nav-div > a:nth-child(3){
    width: 94px;
    margin-left: 40px;
    margin-right: -10px;
  }

</style>
