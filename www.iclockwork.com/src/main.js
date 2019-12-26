import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import {getCookie} from './assets/js/cookie'
import axios from 'axios'
import VueAwesomSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Banner from '@/components/banner'
import './assets/css/index.css'

import { isRegExp } from 'util'
Vue.use(VueAwesomSwiper)
Vue.config.productionTip = false


/* axios配置 */
//axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

var querystring = require('querystring');

var baseUrl = "http://testadmin.www.iclockwork.com" //接口前缀地址
/* 
 * 封装ajax
 * obj : 全局this
 * data : ajax传入后台data数据
 * address : ajax接口地址
 * fn : 成功返回方法  带参数  obj,data  obj : this data : response
 * */
Vue.prototype.postHttp = function(obj,data,address,fn){
  obj.$axios.post(baseUrl+address,querystring.stringify(data)).then(response => {
      fn(obj,response.data);
      
    },response => {
      
    })
}
Vue.prototype.getHttp = function(obj,data,address,fn){
    obj.$axios.get(baseUrl+address,{params: data}).then(function(response){
      fn(obj,response.data)
    }).catch(function (response){
      console.log(response);
    });
}

// 格式化时间
Vue.prototype.format = function(fmt,date){
  let ret;
  let opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
  }
  return fmt;
}

var s = '';
if(getCookie('lang')){
    s=getCookie('lang')
}else{
    s='zh'
}
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale:s,
  messages:{
    'zh':require('./assets/lang/zh'),
    'en':require('./assets/lang/en'),
    'hg':require('./assets/lang/hg')
  }
})
Banner.install = function(Vue){
  Vue.component(Banner.name,Banner)
}
Vue.use(Banner)
new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
