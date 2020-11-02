<template>
  <div class="Doc">
    <navbar></navbar>
    <div class="main">
      <div :class="['slide',{'open': isMenuShow}]">
        <p>开始</p>
        <ul>
          <li><router-link @click.native="hideMenu" to="/Doc/InstallDoc">安装</router-link></li>
          <li><router-link @click.native="hideMenu" to="/Doc/QuickUseDoc">快速上手</router-link></li>
          <li><router-link @click.native="hideMenu" to="/Doc/UseRuleDoc">使用规则</router-link></li>
        </ul>
        <p>组件</p>
        <ul>
          <li><router-link @click.native="hideMenu" to="/Doc/ButtonDoc">Button 按钮</router-link></li>
          <li><router-link @click.native="hideMenu" to="/Doc/InputDoc">Input 输入框</router-link></li>
          <li><router-link @click.native="hideMenu" to="/Doc/TooltipDoc">Tooltip 提示</router-link></li>
          <li><router-link @click.native="hideMenu" to="/Doc/MessageDoc">Message 通知</router-link></li>
        </ul>
      </div>
      <div class="article" @click="closeMenu">
        <router-view class="routerView"></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isMenuShow:false
    };
  },
  methods: {
    hideMenu(){
      this.$eventBus.$emit('toggle')
    },
    closeMenu(){
      if(this.$eventBus.isMenuShow){
        this.$eventBus.$emit('toggle')
      }else{
        return
      }
    }
  },
  mounted() {
    this.$eventBus.$on('toggle',() => {
      this.$eventBus.isMenuShow = !this.$eventBus.isMenuShow
      this.isMenuShow = this.$eventBus.isMenuShow
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('toggle')
  },
};
</script>


<style lang="scss" scoped>
.Doc {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex: 1;
    overflow: hidden;
    .slide {
      width: 280px;
      border-right: 1px solid #eee;
      p {
        padding: 10px;
        font-size: 1em;
        font-weight: bold;
      }
      ul {
        a {
          display: block;
          padding: 0.7em 1.2em;
          color: rgb(68, 68, 68);
          font-size: 0.9em;
          &:active {
            color: rgb(68, 68, 68);
          }
        }
      }
    }
    .article {
      width: 100%;
      padding: 50px;
      overflow: scroll;
      overflow-x: hidden;
      box-shadow: inset 0 5px 5px rgb(247, 247, 247);
      .routerView {
        max-width: 800px;
      }
    }
  }
}

.router-link-active {
  background: linear-gradient(to right, rgb(209, 234, 255), rgb(168, 214, 253));
  border-right: 3px solid rgb(0, 116, 217);
}

@media (max-width: 900px) {
  .Doc {
    .slide {
      width: 280px;
      position: fixed;
      overflow-x: hidden;
      overflow-y: auto;
      top: 3.3em;
      left: 0;
      bottom: 0;
      z-index: 2;
      background-color: #f9f9f9;
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transform: translateX(-280px);
    }
    .main {
      .article {
        padding: 20px;
      }
    }
    .open {
      transform: translateX(0);
    }
  }
}
</style>