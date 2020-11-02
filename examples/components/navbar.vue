<template>
  <div class="navbar" :class="{'backGroundColor':backGroundColor}">
    <div ref="menuWrapper" class="menuWrapper" v-show="showMenuWrapper" @click="show">
      <img src="../../static/menuWrapper.png" alt="" />
    </div>
    <div class="logo" >
      <router-link to="/">Zeal</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenuWrapper: this.$route.path === "/" ? false : true,
      backGroundColor:this.$route.path === '/' ? false : true
    };
  },
  methods: {
    show(){
      this.$eventBus.$emit('toggle')
    }
  },
};
</script>


<style lang="scss" scoped>
.navbar {
  padding: 0.7em 6em;
  display: flex;
  width: 100%;
  z-index: 3;
  .menuWrapper {
    display: none;
    position: absolute;
    left: 1em;
    top: 1em;
    img {
      width: 1.4rem;
      height: 1.4rem;
      vertical-align: baseline;
    }
  }
  a {
    color: rgb(0, 116, 217);
    font-size: 1.5rem;
  }
}

.backGroundColor{
  background-color: #fff;
}

@media screen and (max-width: 900px) {
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    .menuWrapper {
      display: block;
    }
  }
}
</style>