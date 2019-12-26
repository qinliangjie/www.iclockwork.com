<template>
  <div class="main">
    <div class="main_Banner">
      <img src="../assets/pcImg/main_banner.jpg" alt="">
      <div class="know_more">
        <div class="more_btn">更多游戏</div>
      </div>
    </div>
    <div class="main_body">
      <img src="../assets/pcImg/main_bg.jpg" alt="">
      <div class="presentation">
          <div class="title">
            产品介绍
          </div>
          <div class="swiper_body">
            <swiper :options="swiperOption">
              <swiper-slide v-for="value in proList" :key="value.id">
                <img :src="value.logo" alt="" class="swiper_img">
                <div class="game_name">{{value.title}}</div>
              </swiper-slide>
              
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
          <div class="company_intrduce">
            <div class="company_title">
              公司简介
            </div>
            <div class="company_content">
              苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。总部位于苏州市工业园区，分别在香港、首尔、台北设立有分公司。发行区域涵盖东南亚、中国港澳台、北美等等。2015年，公司获得国内知名投资机构的投资，步入快速发展期。成为东南亚区域移动游戏发行领域的领军新锐。 
            </div>
            <div class="more_btn">更多详情</div>
            <div class="suzhou_company">
              <div class="bg_img"></div>
              <img src="../assets/pcImg/logo.png" alt="" >
            </div>
            <div class="taiwan_company">
              <div class="bg_img"></div>
              <img src="../assets/pcImg/logo.png" alt="" >
            </div>
            <div class="xianggang_company">
              <div class="bg_img"></div>
              <img src="../assets/pcImg/logo.png" alt="" >
            </div>
            <div class="shouer_company">
              <div class="bg_img"></div>
              <img src="../assets/pcImg/logo.png" alt="" >
            </div>
          </div>
          <div class="join_us">
            <div class="join_title">
              欢迎优秀的你加入
            </div>
            <div class="join_content">
              创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球app store, Googleplay商店成功发行过多款Top 10游戏。
            </div>
            <div class="more_btn">加入我们</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },
      proList:[]
    }
  },
  mounted:function(){
    this.markPost('zh')
  },
  methods:{
    markPost(e){
      let datas = {
        lang:e
      }
      let datasTwo = {
        lang:e,
        img:4
      }
      this.getHttp(this,datas,'/front/product',function(obj,data){
        obj.proList = data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main_Banner{
  width: 100%;
  height: 0;
  padding-bottom: 52.084%;
  position: relative;
}
.know_more{
  width: 12rem;
  position: absolute;
  left: 50%;
  margin-left: -6rem;
  bottom: 1rem;
  .more_btn{
    border:1px solid #F08200;
    width:1.44rem;
    height: .56rem;
    color: white;
    line-height: .56rem;
    font-size: .16rem;
    border-radius: .25rem;
    text-align: center;
    float: right;
    cursor: pointer;
  }
}
.main_body{
  position: relative;
  width: 100%;
  overflow-x: hidden;
  .title{
    width: 12rem;
    color: white;
    font-size: .36rem;
    position: absolute;
    top: 1.74rem;
    margin-left: -6rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .title::after{
    content: '';
    display: block;
    margin-left: 5rem;
    margin-top: .1rem;
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
            rgba(0, 0, 0, 0) 100%)
  }
  .swiper_body{
    width: 12rem;
    position: absolute;
    top: 4rem;
    left: 50%;
    margin-left: -6rem;
    padding:0 1rem;
    .swiper-slide{
      text-align: center
    }
    .swiper_img{
      width: 1.87rem;
      height: 1.87rem;
      border-radius: 1.87rem;
    }
    .game_name{
      width:100%;
      text-align: center;
      font-size: .16rem;
      color: white;
      margin-top: .2rem
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
      background-image: url(../assets/pcImg/prev.png);
      width: .5rem;
      height: .5rem;
      background-size: 100%;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
      background-image: url(../assets/pcImg/next.png);
      width: .5rem;
      height: .5rem;
      background-size: 100%;
    }
  }
  .company_intrduce{
    width: 12.57rem;
    height:5.57rem;
    position: absolute;
    top: 8.68rem;
    left: 50%;
    margin-left: -6.285rem;
    .company_title{
        width: 5rem;
        top: .5rem;
        color: white;
        font-size: .36rem;
        position: absolute;
        text-align: left;
        left: .5rem;
        letter-spacing: 0px;
    }
    .company_title::after{
        content: '';
        display: block;
        margin-left: -.3rem;
        margin-top: .1rem;
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
                rgba(0, 0, 0, 0) 100%)
    }
    .company_content{
      position: absolute;
      top:1.8rem;
      left: .5rem;
      width: 6.5rem;
      height: 1.18rem;
      font-family: PingFang-SC-Regular;
      font-size: .18rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: .3rem;
      letter-spacing: 0px;
      color: #ffffff;
    }
    .more_btn{
      border:1px solid #F08200;
      width:1.44rem;
      height: .56rem;
      color: white;
      line-height: .56rem;
      font-size: .16rem;
      border-radius: .25rem;
      text-align: center;
      position: absolute;
      left: .5rem;
      top: 4.5rem;
      cursor: pointer;
    }
    .suzhou_company{
      width: .59rem;
      height: .83rem;
      position: absolute;
      top: 1.85rem;
      left: 50%;
      margin-left: 2.5rem;
      img{
        position: absolute;
        top: 0
      }
      .bg_img{
        width: 1.6rem;
        height:1.6rem;
        position: absolute;
        left: -.5rem;
        top: -.3rem;
        border-radius: 1.6rem;
        background-image: radial-gradient(white 5%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0) 65%); 
      }
    }
    .shouer_company{
      width: .4rem;
      height: .54rem;
      position: absolute;
      top: 1rem;
      left: 50%;
      margin-left: 4.4rem;
      img{
        position: absolute;
        top: 0
      }
      .bg_img{
        width: 1.16rem;
        height:1.16rem;
        position: absolute;
        left: -.4rem;
        top: -.25rem;
        border-radius: 1.16rem;
        background-image: radial-gradient(white 5%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0) 65%); 
      }
    }
    .xianggang_company{
      width: .4rem;
      height: .54rem;
      position: absolute;
      top: 5.2rem;
      left: 50%;
      margin-left: 1.3rem;
      img{
        position: absolute;
        top: 0
      }
      .bg_img{
        width: 1.16rem;
        height:1.16rem;
        position: absolute;
        left: -.4rem;
        top: -.25rem;
        border-radius: 1.16rem;
        background-image: radial-gradient(white 5%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0) 65%); 
      }
    }
    .taiwan_company{
      width: .4rem;
      height: .54rem;
      position: absolute;
      top: 5rem;
      left: 50%;
      margin-left: 3rem;
      img{
        position: absolute;
        top: 0;
      }
      .bg_img{
        width: 1.16rem;
        height:1.16rem;
        position: absolute;
        left: -.4rem;
        top: -.25rem;
        border-radius: 1.16rem;
        background-image: radial-gradient(white 5%,rgba(255,255,255,0.3) 50%,rgba(255,255,255,0) 65%); 
      }
    }
  }
  .join_us{
    width: 12.57rem;
    height:5.57rem;
    position: absolute;
    top: 20.06rem;
    left: 50%;
    margin-left: -6.285rem;
    .join_title{
        width: 5rem;
        top: .5rem;
        color: white;
        font-size: .36rem;
        position: absolute;
        text-align: left;
        left: .5rem;
        letter-spacing: 0px;
    }
    .join_title::after{
        content: '';
        display: block;
        margin-left: -.3rem;
        margin-top: .1rem;
        width: 3.5rem;
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
                rgba(0, 0, 0, 0) 100%)
    }
    .join_content{
      position: absolute;
      top:1.8rem;
      left: .5rem;
      width: 6.5rem;
      height: 1.18rem;
      font-family: PingFang-SC-Regular;
      font-size: .18rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: .3rem;
      letter-spacing: 0px;
      color: #ffffff;
    }
    .more_btn{
      border:1px solid #F08200;
      width:1.44rem;
      height: .56rem;
      color: white;
      line-height: .56rem;
      font-size: .16rem;
      border-radius: .25rem;
      text-align: center;
      position: absolute;
      left: .5rem;
      top: 4.5rem;
      cursor: pointer;
    }
  }
}

</style>
