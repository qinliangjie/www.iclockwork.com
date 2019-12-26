<template>
  <div class="produce_">
    <div class="page-banner">
        <img src="../assets/pcImg/gamebanner.jpg" alt="">
    </div>
    <div class="producu_body">
      <div class="produce_title">精品游戏</div>
      <div class="produce_list">
          <div class="produce_list_item" 
               v-for="item in proList"
               :key="item.id">
            <img :src="item.logo" alt="">
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proList:[]
    };
  },
  mounted: function() {
     this.initGame('zh')
     
  },
  methods: {
    initGame(e){
      let datas = {
        lang:e
      }
      this.getHttp(this,datas,'/front/product',function(obj,data){
        obj.proList = data
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.page-banner{
    width: 100%;
    height: 0;
    padding-bottom: 32.4%;
    position: relative;
}
.page-banner img{
    width: 100%
}
.producu_body {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  min-height: 13.25rem;
  background:url(../assets/pcImg/pro_bg.jpg) repeat;

  .produce_title {
    width: 12rem;
    color: white;
    font-size: 0.36rem;
    position: absolute;
    top: 1.5rem;
    margin-left: -6rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .produce_title::after {
    content: "";
    display: block;
    margin-left: 5rem;
    margin-top: 0.1rem;
    width: 2rem;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(251, 140, 76, 0.3) 20%,
      rgba(251, 140, 76, 0.4) 30%,
      rgba(251, 140, 76, 0.5) 40%,
      rgba(251, 140, 76, 0.8) 50%,
      rgba(251, 140, 76, 0.5) 60%,
      rgba(251, 140, 76, 0.4) 70%,
      rgba(251, 140, 76, 0.3) 80%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .produce_list{
      display: flex;
      width: 12rem;
      margin:0 auto;
      margin-top: 3rem;
      flex-flow:row wrap;
      justify-content: space-between;
      .produce_list_item{
        width: 3.45rem;
        height:3.45rem;
        border-radius: .1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: all .5s ease;
        img{
          width: 100%;
          border-radius: .1rem
        }
      }
      .produce_list_item:hover{
        transform: scale(1.05)
      }
  }
  
}
</style>