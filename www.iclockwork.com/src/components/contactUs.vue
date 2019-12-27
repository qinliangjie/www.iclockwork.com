<template>
  <div class="contactUs_main">
    <img src="../assets/pcImg/contect_bg.jpg" alt />
    <div class="contactUs_body">
      <div class="contactUs_title">联系我们</div>
      <div class="text_box">
        <div class="address">国内地址：</div>
        <div class="address_item">{{address}}</div>
        <div class="email">企业邮箱：</div>
        <div class="email_item">{{email}}</div>
        <div class="contect">联系方式:</div>
        <div class="telphone">电话：{{tellphone}}</div>
      </div>
      <div id="map">
              
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email:'',
      tellphone:'',
      address:'',
      companyName:''
    };
  },
  mounted: function() {
    this.markPost('zh');
    var map = new BMap.Map("map");          // 创建地图实例  
    var point = new BMap.Point(120.744358,31.263728);  // 创建点坐标  
    var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);  
        map.centerAndZoom(point, 17); 
    var opts = { 
            offset:{
                  width:0,
                  height:-30
                  },
            width:100,
            height:50,    // 信息窗口高度
            title : "苏州爱洛克信息技术有限公司" 
        };              // 初始化地图，设置中心点坐标和地图级别  
    var infoWindow = new BMap.InfoWindow("地址：苏州市工业园区若水路388号苏州纳米技术国家大学科技园E幢303室", opts);
        map.openInfoWindow(infoWindow,point);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
  },
  methods: {
    markPost(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/relation',function(obj,data){
         obj.email = data.email;
         obj.tellphone = data.phone;
         obj.address = data.address;
         obj.companyName = data.name
      });
      
    }
  }
};
</script>
<style lang="scss" scoped>
.contactUs_main {
  width: 100%;
}
.contactUs_body {
  position: absolute;
  width: 4rem;
  height: 5rem;
  left: 50%;
  margin-left: -6.5rem;
  top: 3rem;
  .contactUs_title {
    width: 4rem;
    color: white;
    font-size: 0.36rem;
    position: absolute;
    top: 1rem;
    margin-left: -2rem;
    text-align: center;
    left: 50%;
    letter-spacing: 0px;
  }
  .contactUs_title::after {
    content: "";
    display: block;
    margin-left: 1rem;
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
  .text_box{
    margin-top: 2rem;
    width: 5rem;
    height: 4rem;
    color: #a8a6a5;
    font-size: 13px;
    padding-left: 1.2rem;
    line-height: .2rem;
    .address_item,.email_item,.telphone{
      margin-bottom: .2rem;
      color: white
    }
  }
  #map{
    position: absolute;
    width: 6.5rem;
    height: 4rem;
    top: 1rem;
    margin-left: 3rem;
    left: 50%;
    font-size: 13px;
    border-radius: .25rem
  }
  
}
</style>