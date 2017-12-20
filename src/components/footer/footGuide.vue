<template>
  <div class="footer">
    <div class="container">
      <div class="left-con">
        <ul class="link-div">
          <li><router-link to="/news">新闻动态</router-link></li>
          <li><router-link to="/products">产品中心</router-link></li>
          <li><router-link to="/recruit">招贤纳士</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
        <div class="footer-other">
          <p class="fs14">湖南千山慢病健康管理有限公司</p>
          <p class="fs12">地址：湖南长沙经济技术开发区人民东路与东七路十字交汇处</p>
          <p class="fs12">Copyright © 2016,chinasunhealth Co., Ltd. All rights reserved.</p>
          <p class="fs12">备案号： 湘ICP备15017469号-4</p>
        </div>
      </div>
      <div class="right-con">
        <div class="telephone">
          <p class="fs14">服务电话</p>
          <p class="fs14">24小时全国服务热线</p>
          <p class="fs-telephone">400-160-0123</p>
        </div>
        <div class="qr-code">
          <span class="img"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .left-con{
      width: 50%;
    }
    .right-con{
      width: 50%;
    }
    .left-con, .right-con{
      float: left;
    }
  }
  .link-div{
    margin-bottom: 50px;
  }
  .link-div li{
    display: inline-block;
    width: 24%;
  }
  .link-div li a{
    text-decoration: none;
    color: #666;
    text-align: left;
    font-size: 12px;
  }
  .qr-code, .telephone{
    float: right;
  }
  .right-con .telephone{
    margin-left: 180px;
  }
  .qr-code .img{
    display: inline-block;
    height: 90px;
    width: 75px;
    background-image: url("../../images/qrcode_gzh.png");
    background-repeat: no-repeat;
  }
  .fs-telephone{
    font-size: 25px;
  }
  .telephone p{
    margin-top: 0;
  }
  .footer{
    padding: 40px 0;
  }
  .footer:after, .footer:before{
    content: '';
    display: block;
  }
  .footer:after, .footer:before{
    clear: both;
  }
</style>
