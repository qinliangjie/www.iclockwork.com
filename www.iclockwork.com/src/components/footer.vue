<template>
  <div class="footer_wrap">
    <div class="footer">
      <img src="../assets/pcImg/icon.png" alt class="footerImg logoIc fl" />
      <div class="fl msg_list">
        <ul class="menu_list">
          <li class>
            <a href="javascript:;">
              <i class="c_line"></i>
              {{$t('m.footer.cu')}}
            </a>
          </li>
          <li class>
            <a href="javascript:;">
              <i class="s_line"></i>
              {{$t('m.footer.sa')}}
            </a>
          </li>
          <li class>
            <a href="javascript:;">
              <i class="s_line"></i>
              {{$t('m.footer.pp')}}
            </a>
          </li>
        </ul>
        <p class="footer_p">{{footer.text}}</p>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footer: {
        text:
          "健康游戏忠告：抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活"
      }
    };
  },
  mounted: function() {},
  methods: {}
};
</script>
<style scoped>
.footer_wrap {
  width: 100%;
  height: 2.1rem;
  background-color: #171920;
}
.line {
  height: 0.3rem;
  width: 1px;
  padding-top: 0.2rem;
  display: inline-block;
  margin-left: 0.1rem;
}
.line_dom {
  width: 100%;
  height: 100%;
  background-color: white;
}
.footer {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: #171920;
}
.footer .msg_list {
  margin-left: 0.2rem;
  text-align: left;
  position: relative;
  top: 0.4rem;
}
.menu_list {
  display: block;
  width: auto;
  list-style: none;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
}
.menu_list li {
  width: auto;
  display: block;
  float: left;
}
.menu_list li a {
  width: auto;
  display: block;
  float: left;
  height: 100px;
  padding: 0 10px;
  line-height: 100px;
  color: #a8a6a5;
  text-decoration: none;
  font-size: 16px;
  position: relative;
  text-align: center;
  -webkit-transition: font-weight 0.3s;
  transition: font-weight 0.3s;
}

.menu_list li a .c_line {
  display: none;
  height: 4px;
  width: 80px;
  background: #f08200;
  overflow: hidden;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: 30px;
  -webkit-transition: bottom 0.2s;
  transition: bottom 0.2s;
}
.menu_list li a .s_line {
  display: block;
  height: 13px;
  width: 1px;
  background: #fff;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -6.5px;
  opacity: 0.3;
  filter: alpha(opacity=30);
}
.menu_list .language_1 a.current {
  opacity: 1;
  filter: alpha(opacity=100);
  color: #f08200;
}
.menu_list .language_1 a:hover {
  font-weight: 400;
  opacity: 1;
  filter: alpha(opacity=100);
}
.menu_list .language_1 .simple {
  margin-left: 20px;
}
.menu_list .language_1 a {
  height: 20px;
  width: auto;
  font-size: 14px;
  line-height: 20px;
  margin-top: 40px;
  padding: 0 8px;
  opacity: 0.6;
  filter: alpha(opacity=60);
}

.footer .logoIc {
  margin-top: 0.5rem;
}
.footer .footer_p {
  font-size: 12px;
  color: #a8a6a5;
  margin-top: 1rem;
  float: left;
  margin-left: 10px;
}
</style>