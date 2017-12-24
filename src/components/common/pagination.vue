<template>
  <nav>
    <!--<ul class="pagination">
      <li><a href="javascript:;" @click="setCurrent(current-1)"> << </a></li>
      <li><a href="javascript:;" @click="setCurrent(1)">首页</a></li>

      <li v-for="p in grouplist"><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>

      <li><a href="javascript:;" @click="setCurrent(page)">尾页</a></li>
      <li><a href="javascript:;" @click="setCurrent(current+1)"> >> </a></li>
    </ul>-->
    <ul class="pagination">
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> « </a></li>
      <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>
      <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>
      <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> »</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data(){
      return{
        current: this.pageNum, //初始化current为父组件下发的pageNum
      }
    },
    mounted(){
      console.log('当前current。。。。。: ',this.current)
    },
    //通过props方法接收父组件下发过来的数据
    props: {
      totalCount: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pageNum: {
        type: Number,
        default: 1
      },
      pagegroup: {
        type: Number,
        default: 5,
        /*coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }*/
      }
    },
    watch: {
      pageNum:function(){
        this.current = this.pageNum
      }
    },
    computed: {
      page: function(){ //总页数
        console.log("this.totalCountthis.totalCountthis.totalCount",this.totalCount)
        console.log("this.pageSize",this.pageSize)
        return Math.ceil(this.totalCount / this.pageSize);
      },
      grouplist: function(){
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup/2), center = this.current;
        console.log('lenlenlenlenlen:', len)
        console.log('this.pagegroup:', this.pagegroup)
        console.log('count:', count)
        console.log('this.current即center:', this.current)
        console.log('temp:', temp)
        if(len <= this.pagegroup){
          console.log('页组数大于当前新闻总页数。。。')
          while (len--){
            console.log('0000')
            temp.push({text: this.page - len, val: this.page - len});
          }
          return temp;
        }
        console.log('<=---temp:', temp)
        while (len--){
          temp.push(this.page - len);
        }
        console.log('---temp:', temp)

        console.log('---------------------------------------------处理要显示的页码---------------------------------------------')
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);  //如果&&前面的true才执行&&后面的
        (this.current > this.page - count) && ( center = this.page - count);
        console.log('center====',center)
        temp = temp.splice(center - count - 1, this.pagegroup);
        console.log('temptemptemp:',temp)

        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        console.log('list:',list)
        return list;
      }
    },
    methods: {
      setCurrent:function(idx){
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          //通过emit方法将数据this.current上传给父组件
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .pagination {
    overflow: hidden;
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    height: 50px;

    li {
      float: left;
      height: 30px;
      border-radius: 5px;
      margin: 3px;
      color: #666;

      &
      :hover {
        background: #000;

        a {
          color: #fff;
        }

      }
      a {
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        border-radius: 5px;
        text-decoration: none
      }

    }
    .active {
      background: #000;

      a {
        color: #fff;
      }

    }
  }
</style>
