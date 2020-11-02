<template>
  <div class="fold-code" >
    <div class="demo-wrapper">
      <component :is="component" class="componentWrapper"></component>
    </div>
    <div class="per-wrapper">
      <transition name="code">
        <div class="per-content" :style="{'height':height+'px'}">
          <pre ref="codePer" :class="codetype"><code :class="codetype">{{code}}</code></pre>
        </div>
      </transition>
      <div class="demo-block-control" @click="toggle">
          <span class="show-world">{{ showCode === true ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'code-preview',
  props: {
    component: {
      type: Object
    },
    code:{
      type:String
    },
    codetype:{
      type:String
    }
  },
  data() {
    return {
      showCode:false,
      height:0
    }
  },
  methods: {
    toggle() {
      this.showCode = !this.showCode
      if(this.height){
        this.height = 0
      }else{
        this.height = this.$refs.codePer.clientHeight
      }
    }
  },
  mounted() {
     process.browser &&document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  }
}
</script>

<style lang="scss" scoped>
.demo-wrapper {
  padding: 24px;
}

.fold-code {
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
  }
}

.per-wrapper {
  .per-content {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    height: 0;
    transition: all .2s;
  }

  .demo-block-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    text-align: center;
    left: 0;
    &:hover {
      color: #aca8ff;
      background-color: #f9fafc;
    }
    .show-world {
      position: absolute;
      font-size: 14px;
      line-height: 44px;
      transition: all 0.3s;
      transform: translateX(-30px);
    }
  }
}
</style>