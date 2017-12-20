<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .red{
    color: #ea1b23;
  }
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    color: #333;
    font-size: 14px;
  }
  @media (min-width: 992px){
    .container {
      width: 970px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      position: relative;
    }
  }
  @media (min-width: 1200px){
    .container {
      width: 1170px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      position: relative;
    }
  }


  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .fs12{
    font-size: 12px;
  }
  .fs14{
    font-size: 14px;
  }
  p{
    line-height: 1.5;
    color: #999;
  }
</style>
