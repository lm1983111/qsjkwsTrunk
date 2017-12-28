<template>
  <nav>
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
        return Math.ceil(this.totalCount / this.pageSize);
      },
      grouplist: function(){
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup/2), center = this.current;

        if(len <= this.pagegroup){
          while (len--){
            temp.push({text: this.page - len, val: this.page - len});
          }
          return temp;
        }
        while (len--){
          temp.push(this.page - len);
        }

        //console.log('---------------------------------------------处理要显示的页码---------------------------------------------')
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);  //如果&&前面的true才执行&&后面的
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);

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
  @import "../../style/mixin";
  .pagination {
    overflow: hidden;
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    height: 50px;

    li {
      float: left;
      height: 40px;
      border-radius: 0;
      margin: 3px;
      color: #666;

      &
      :hover {
        background: $red;
        color: #fff;
        a {
          color: #fff;
        }

      }
      a {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        border-radius: 0;
        text-decoration: none
      }

    }
    .active {
      background: $red;

      a {
        color: #fff;
      }

    }
  }
</style>
