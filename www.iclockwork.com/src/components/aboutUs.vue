<template>
  <div class="aboutUs_main">
    <div class="page-banner">
      <img src="../assets/pcImg/abouetbanner.jpg" alt />
    </div>
    <div class="aboutUs_body">
      <!-- 公司介绍 -->
      <div class="aboutUs_company_title">公司介绍</div>
      <div class="aboutUs_company_content">
        苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。总部位于苏州市工业园区，分别在香港、首尔、台北设立有分支机构。创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球app store, Googleplay商店成功发行过多款Top 10游戏。发行区域涵盖东南亚、中国港澳台、北美等等。2015年，公司获得国内知名投资机构的投资，步入快速发展期。成为东南亚区域移动游戏发行领域的领军新锐。
        <br />
        <br />苏州爱洛克信息技术有限公司在研发过程中，注重知识产权在企业竞争力中所起的重要作用。企业通过自主研发、产学研形式形成软件著作权29项，并在2016年被认定为国家高新技术企业和软件企业，2018年认定省隐形小巨人企业、瞪羚培育企业，同年，公司创始人邵珍荣获苏州工业园区领军人才的称号，2019年荣获国家文化出口重点企业资质。
      </div>
      <div class="sz_point point point-flicker">
        <p class="point_name">苏州</p>
      </div>
      <div class="xg_point point point-flicker">
        <p class="point_name">香港</p>
      </div>
      <div class="tw_point point point-flicker">
        <p class="point_name">台北</p>
      </div>
      <div class="hg_point point point-flicker">
        <p class="point_name">韩国</p>
      </div>
      <div class="dny_point point point-flicker">
        <p class="point_name">东南亚</p>
      </div>
      <div class="bm_point point point-flicker">
        <p class="point_name">北美</p>
      </div>
      <div class="aboutUs_pointExplain">
        <div class="headquarters">
          <div class="headquarters_"></div>
          <p>公司总部</p>
        </div>
        <div class="issuing">
          <div class="issuing_"></div>
          <p>发行公司</p>
        </div>
      </div>
      <!-- 公司历程 -->
      <div class="company_course_title">公司历程</div>
      <div class="company_line">
        <img src="../assets/pcImg/yearLine.png" alt />
      </div>
      <div class="company_game">
        <div class="xxzg game_list">
          <p>小小主公</p>
          <img src="../assets/pcImg/xxzg1.png" alt />
        </div>
        <div class="tfsgz game_list">
          <img src="../assets/pcImg/tfsgz.png" alt />
          <p>塔防三国志</p>
        </div>
        <div class="csxy game_list">
          <p>超神学院</p>
          <img src="../assets/pcImg/csxy.png" alt />
        </div>
        <div class="wpzpr game_list">
          <img src="../assets/pcImg/wpzpr.png" alt />
          <p>王牌制片人</p>
        </div>
        <div class="ldyxz game_list">
          <p>亂鬥英雄志</p>
          <img src="../assets/pcImg/ldyxz.png" alt />
        </div>
        <div class="tfsgzhw game_list">
          <img src="../assets/pcImg/tfsgz.png" alt />
          <p>塔防三國志韓文版</p>
        </div>
        <div class="xxzg2 game_list">
          <p>小小主公2</p>
          <img src="../assets/pcImg/xxzg2.png" alt />
        </div>
      </div>

      <!-- 团队建设 -->
      <div class="company_team_title">团队建设</div>
      <div class="company_team">
        <div class="company_list">
          <div class="list_item fl">
            <div class="showblock">年礼</div>
            <img src="../assets/pcImg/nianli.jpg" alt />
          </div>
          <div class="list_item fl">
            <div class="nh">
              <div class="showblock_small">年会节目</div>
              <img src="../assets/pcImg/nianhui.jpg" alt />
            </div>
            <div class="zhouyou">
              <div class="showblock_small">桌游社活动</div>
              <img src="../assets/pcImg/zhuoyou.jpg" alt />
            </div>
            
          </div>
          <div class="list_item fl">
            <div class="showblock">7周年庆</div>
            <img src="../assets/pcImg/zhounianqing.jpg" alt />
          </div>
          <div class="list_item fl">
            <div class="gyq">
              <div class="showblock_small">观影券</div>
              <img src="../assets/pcImg/guanyingquan.jpg" alt />
            </div>
            <div class="cj">
              <div class="showblock_small">公司场景</div>
              <img src="../assets/pcImg/changjing.jpg" alt />
            </div>
          </div>
          <div class="list_item fl">
            <div class="showblock">旅游</div>
            <img src="../assets/pcImg/lvyou.jpg" alt />
          </div>
          <div class="list_item fl">
            <div class="showblock">合照</div>
            <img src="../assets/pcImg/hezhao.jpg" alt />
          </div>
          <div class="list_item fl">
            <div class="showblock">英语课堂</div>
            <img src="../assets/pcImg/yinyuketang.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted: function() {},
  methods: {}
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
.aboutUs_body {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  height: 31.7rem;
  background: url(../assets/pcImg/new_bg.jpg) no-repeat;
  background-size: 100% 100%;
  .aboutUs_company_title {
    width: 12rem;
    color: white;
    font-size: 0.36rem;
    position: absolute;
    top: 1rem;
    margin-left: -6rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .aboutUs_company_title::after {
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
  .aboutUs_company_content {
    position: absolute;
    width: 11.12rem;
    left: 50%;
    top: 1.97rem;
    margin-left: -5.56rem;
    font-family: PingFang-SC-Medium;
    font-size: 0.16rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.21rem;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .sz_point {
    position: absolute;
    top: 5.2rem;
    left: 50%;
    margin-left: 4.3rem;
    color: white;
    font-size: 13px;
  }
  .tw_point {
    position: absolute;
    top: 5.65rem;
    left: 50%;
    margin-left: 4.4rem;
    color: white;
    font-size: 13px;
  }
  .hg_point {
    position: absolute;
    top: 5rem;
    left: 50%;
    margin-left: 4.64rem;
    color: white;
    font-size: 13px;
  }
  .xg_point {
    position: absolute;
    top: 5.6rem;
    left: 50%;
    margin-left: 4.1rem;
    color: white;
    font-size: 13px;
    p {
      margin-top: 0.16rem;
      margin-left: 0rem;
    }
  }
  .dny_point {
    position: absolute;
    top: 6.5rem;
    left: 50%;
    margin-left: 3.9rem;
    color: white;
    font-size: 13px;
  }
  .bm_point {
    position: absolute;
    top: 5rem;
    left: 50%;
    margin-left: -4.3rem;
    color: white;
    font-size: 13px;
  }
  .point_name {
    display: block;
    width: 0.4rem;
    margin-top: 0.05rem;
    margin-left: 0.2rem;
  }
  .aboutUs_pointExplain {
    position: absolute;
    width: 2rem;
    height: 1rem;
    top: 8rem;
    left: 50%;
    margin-left: -6rem;
    color: white;
    font-size: 16px;
    p {
      display: inline-block;
    }
    .headquarters,
    .issuing {
      margin-bottom: 0.1rem;
    }
    .headquarters_ {
      background-color: #f08200;
    }
    .issuing_ {
      background-color: #00ffff;
    }
    .headquarters_,
    .issuing_ {
      width: 0.2rem;
      height: 0.2rem;
      display: inline-block;
      vertical-align: bottom;
      margin-right: 0.1rem;
      border-radius: 0.2rem;
    }
  }

  .company_course_title {
    width: 12rem;
    color: white;
    font-size: 0.36rem;
    position: absolute;
    top: 11rem;
    margin-left: -6rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .company_course_title::after {
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
  .company_line {
    position: absolute;
    left: 50%;
    margin-left: -9.5rem;
    top: 15rem;
    width: 17.28rem;
    height: 0.89rem;
    img {
      width: 100%;
    }
  }
  .company_game {
    position: absolute;
    width: 16rem;
    height: 5.4rem;
    top: 13rem;
    left: 50%;
    margin-left: -8.85rem;
    color: white;
    font-size: 0.16rem;
    .xxzg {
      top: 0;
      left: 2.35rem;
    }
    .tfsgz {
      bottom: 0;
      left: 4.2rem;
    }
    .csxy {
      top: 0;
      left: 6.12rem;
    }
    .wpzpr {
      bottom: 0;
      left: 8rem;
    }
    .ldyxz {
      top: 0;
      left: 9.9rem;
    }
    .tfsgzhw {
      bottom: 0;
      left: 11.8rem;
    }
    .xxzg2 {
      top: 0;
      left: 13.67rem;
    }
    .game_list {
      width: 1.6rem;
      height: 2.1rem;
      position: absolute;
      text-align: center;
    }
    p {
      margin: 0.1rem 0;
    }
  }
  .company_team_title {
    width: 12rem;
    color: white;
    font-size: 0.36rem;
    position: absolute;
    top: 22rem;
    margin-left: -6rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .company_team_title::after {
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
  .company_team {
    position: absolute;
    width: 16.06rem;
    height: 7.05rem;
    left: 50%;
    margin-left: -8.03rem;
    top: 23.5rem;
    .company_list {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
      .list_item {
        overflow: hidden;
        position: relative;
        .showblock,.showblock_small {
          position: absolute;
          width: 100%;
          height: 100%;
          color: white;
          font-size: 22px;
          text-align: center;
          left: 0;
          top: -100%;
          transition: all 1s ease;
          background-color: #fca132af;
        }
      }
      .list_item:hover .showblock {
        top: 0;
      }
      .list_item:first-child {
        width: 3.64rem;
        height: 4.15rem;
        img {
          height: 4.15rem;
        }
        .showblock{
          line-height: 4.15rem
        }
      }
      .list_item:nth-child(2) {
        width: 4.5rem;
        height: 4.15rem;
        .nh{
          width: 100%;
          height: 2rem;
          position: relative;
          overflow: hidden;
          float: left;
        }
        .zhouyou{
          width: 100%;
          height: 2.14  rem;
          position: relative;
          overflow: hidden;
          float: left;
        }
        .nh:hover .showblock_small,.zhouyou:hover .showblock_small{
          top: 0;
        }
        .showblock_small{
          line-height: 2.02rem
        }
      }
      .list_item:nth-child(3) {
        width: 3.97rem;
        height: 4.15rem;
        .showblock{
          line-height: 4.15rem
        }
      }
      .list_item:nth-child(4) {
        width: 3.95rem;
        height: 4.15rem;
        .gyq {
          width: 100%;
          height: 2.14rem;
          position: relative;
          float: left;
          overflow: hidden;
        }
        .cj {
          width: 100%;
          height: 2.02rem;
          position: relative;
          float: left;
          overflow: hidden;
          
        }
        .gyq:hover .showblock_small,.cj:hover .showblock_small{
          top: 0;
        }
        .showblock_small{
          line-height: 2.02rem
        }
      }
      .list_item:nth-child(5) {
        width: 4.32rem;
        height: 2.9rem;
        .showblock{
          line-height: 2.9rem
        }
      }
      .list_item:nth-child(6) {
        width: 6.73rem;
        height: 2.9rem;
        .showblock{
          line-height: 2.9rem
        }
      }
      .list_item:nth-child(7) {
        width: 5rem;
        height: 2.9rem;
        .showblock{
          line-height: 2.9rem
        }
      }
    }
  }
}

.point {
  width: 0.14rem;
  height: 0.14rem;
  background-color: #00ffff;
  position: relative;
  border-radius: 50%;
}

/* 设置动画前颜色 */
.point-flicker:after {
  background-color: #00ffff69;
}

/* 设置动画后颜色 */
.point-flicker:before {
  background-color: #00ffff1e;
}
.sz_point.point {
  width: 0.14rem;
  height: 0.14rem;
  background-color: #f08200;
  position: relative;
  border-radius: 50%;
}

/* 设置动画前颜色 */
.sz_point.point-flicker:after {
  background-color: #f0840081;
}

/* 设置动画后颜色 */
.sz_point.point-flicker:before {
  background-color: #f0840044;
}
/* 设置动画 */
.point-flicker:before,
.point-flicker:after {
  content: "";
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -0.2rem;
  margin-top: -0.2rem;
  border-radius: 50%;
  animation: warn 1.5s ease-out 0s infinite;
}

/* @keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。 */
@keyframes warn {
  0% {
    transform: scale(0.3);
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>