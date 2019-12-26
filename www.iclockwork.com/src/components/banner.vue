<template>
  <transition>
    <div class="page-banner">
        <img :src="imgStr" alt="">
    </div>
  </transition>
</template>
<script>
export default {
  name: "Banner", // 这个是export出去的组件名，我定义为BackTop
  props:['imgStr'],
  data() {
    return {
    };
  },
  methods: {
   
  },
  mounted() {
  },
  beforeDestroy() {
    
  }
};
</script>
<style>
.page-banner{
    width: 100%;
    height: 0;
    padding-bottom: 32.4%;
    position: relative;
}
.page-banner img{
    width: 100%
}
</style>