<template>
    <div>
      <head-top></head-top>
      <div>banner...</div>
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
        dataList: null
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
        this.$http.jsonp(baseUrl + 'banner/getBanner',{jsonpcallback:''}).then(data => {
          this.dataList = data.body.dataList
        })

      },
    }
  }
</script>

<style scoped>

</style>
