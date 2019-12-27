<template>
  <div class="recrutment_main">
    <div class="page-banner">
      <img src="../assets/pcImg/joinbanner.jpg" alt />
    </div>
    <div class="join_main">
      <div class="join_left fl">
        <div :class="activeList == '0'? 'join_type active': 'join_type'" @click="getJob('0',langs)">所有</div>
        <div :class="activeList == item.id? 'join_type active': 'join_type'"  @click="getJob(item.id,langs)" v-for="item in joinType" :key="item.id">{{item.jobname}}</div>
        <div class="tips">
          <p style="font-size:14px">Tips:</p>
          <p>
            简历投递方式： “姓名+投递岗位” 命名的个人简历投递到邮箱 hr@iclockwork.com
          </p>
        </div>
      </div>
      <div class="join_right fl">
        <div class="join_item" v-for="(item,index) in joinList" :key="item.id">
            <div class="title">
              {{item.name}} / {{item.education}}
            </div>
            <div :class="itemShow[index] ? 'contrle_ active': 'contrle_'" @click="changeShow(index)">

            </div>
            <div class="detail">
                <div class="responsibility">
                   <p>岗位职责：</p>
                   <p v-html="item.jobdes"></p>
                </div>
                <div class="require" v-show="itemShow[index]">
                   <p>岗位要求：</p>
                   <p v-html="item.require"></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      joinType: [],
      joinList: [],
      itemShow: [],
      activeList:0,
      langs:'zh'
    };
  },
  mounted: function() {
    this.init('zh');
    this.getJob(0,'zh');
  },
  methods: {
    init(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/jobtype',function(obj,data){
         obj.joinType = data;
      });
      
    },
    getJob(e,a){
      var datas = {
          lang:a,
          id:e
      }
      this.activeList = e;
      this.getHttp(this,datas,'/front/job',function(obj,data){
         obj.joinList = data;
         for(let i in data){
          obj.itemShow.push(false)
         }

      });
    },
    changeShow(e){
      let valuse = !this.itemShow[e];
      this.itemShow.splice(e,1,valuse)
    }
  }
};
</script>
<style lang="scss" scoped>
.page-banner {
  width: 100%;
  height: 0;
  padding-bottom: 32.38%;
  position: relative;
}
.page-banner img {
  width: 100%;
}
.join_main {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  height: 13.25rem;
  background-color: #161822;
  .join_left {
    height: 100%;
    width: 2.57rem;
    padding-top: 1.5rem;
    margin-left: 2rem;
    border: 1px solid;
    border-image: -webkit-linear-gradient(red, blue) 30 30;
    border-image: -moz-linear-gradient(red, blue) 30 30;
    border-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 10%,
        rgba(255, 255, 255, 0.3) 20%,
        rgba(255, 255, 255, 0.4) 30%,
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.4) 70%,
        rgba(255, 255, 255, 0.3) 80%,
        rgba(0, 0, 0, 0) 90%,
        rgba(0, 0, 0, 0) 100%
      )
      1 1;
    border-left: 0;
    border-top: 0;
    border-bottom: 0;
    .join_type {
      width: 1.45rem;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      color: white;
      font-size: 16px;
      margin-left: 0.56rem;
      box-sizing: border-box;
      margin-bottom: 0.6rem;
      cursor: pointer;
    }
    .join_type.active {
      border: 1px solid #f08200;
      border-radius: 0.28rem;
    }
    .tips{
      width: 2.8rem;
      padding:20px;
      color: white;
      font-size: 12px;
      margin-left: -.5rem;
      line-height: .25rem;
      background-image: linear-gradient(#faa605, #d46336);
      border-radius: .2rem
    }
  }
  .join_right {
    width: 9.5rem;
    height: 100%;
    margin-left: 1rem;
    margin-top: 1.5rem;
    height: 11.75rem;
      overflow-y: auto;
    .join_item{
      width: 9.2rem;
      background-color: #0c0e15;
      padding:.5rem .7rem;
      border-radius: .25rem;
      position: relative;
      margin-bottom: .6rem;
      
      .contrle_{
          position: absolute;
          width: .2rem;
          height: .2rem;
          background:url(../assets/pcImg/add.png) no-repeat;
          background-size: 100% 100%;
          top: .23rem;
          right: .38rem;
        }
      .contrle_.active{
        background:url(../assets/pcImg/sub.png) no-repeat;
        background-size: 100% 100%;
      }
      .title{
        color: white;
        font-size: 18px;
        margin-bottom: .25rem
      }
      .detail{
        width: 100%;
        font-size: 12px;
        color: #a8a6a5;
        line-height: 20px;
        .responsibility{
          width: 100%;
          margin-bottom: .4rem
        }
        .require{
          width: 100%
        }
        
      }
    }
  }
}

/* 针对缺省样式 (必须的) */
::-webkit-scrollbar {
    width: .04rem;
    height: 0px;
}

/* 滚动条的滑轨背景颜色 */
::-webkit-scrollbar-track {
    background-color: #161822;
    border-radius: .04rem;
}

/* 滑块颜色 */
::-webkit-scrollbar-thumb {
    background-color: #0c0e15;
    border-radius: .04rem;
}

/*内层轨道的颜色*/
::-webkit-scrollbar-track-piece {
    background-color: #161822;
    border-radius: .08rem;
}

/* 滑轨两头的监听按钮颜色 */
::-webkit-scrollbar-button {
    background-color: #161822;
    width: 0;
    height: 0;
}

/* 横向滚动条和纵向滚动条相交处尖角的颜色 */
::-webkit-scrollbar-corner {
    background-color: black;

}

</style>