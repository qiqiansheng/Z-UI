<template>
  <transition name="message">
    <div :class="['root',type]" v-if="visible">
      <i class="iconfont" v-if="type === 'success'">&#xe671;</i>
      <i class="iconfont" v-if="type === 'warning'">&#xe63d;</i>
      <i class="iconfont" v-if="type === 'info'">&#xe6bf;</i>
      <i class="iconfont" v-if="type === 'error'">&#xe663;</i>
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "z-message",
  data() {
    return {
      message: "这是一条提示",
      visible: false,
      type: "info",
    };
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont'; 
  src: url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.eot');
  src: url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.woff') format('woff'),
  url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2163030_w4qgzd0rzq.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.root {
  font-size: 14px;
  padding: 1em 1.5em;
  border-radius: 4px;
  width: 350px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.info {
  color: rgb(144, 147, 153);
  background-color: rgb(237, 242, 252);
}
.success {
  color: rgb(103,194,58);
  background-color: rgb(240,249,235);
}

.warning {
  color: rgb(230,162,60);
  background-color: rgb(253, 246, 236);
}
.error {
  color: rgb(245,108,108);
  background-color: rgb(254, 240, 240);
}
.message-enter-active {
  transition: all 0.7s ease;
}
.message-leave-active {
  transition: all 0.7s;
}
.message-enter,
.message-leave-to {
  top: -100px;
}
</style>