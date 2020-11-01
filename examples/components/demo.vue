<template>
  <div class="demo-container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <!--展示代码的地方-->
    <code-preview ref="codePer" :component="component" :code='code' :codetype='codetype'></code-preview>
  </div>
</template>

<script>
import CodePreview from "./codePreview";

export default {
  name: "demo",
  components: {
    CodePreview,
  },
  props: {
    title: {
      type: String,
      default: "组件功能",
    },
    description: {
      type: String,
      default: "组件功能描述",
    },
    component: {
      type: Object,
    },
    code:{
      type:String
    },
    codetype:{
      type:String
    }
  },
};
</script>

<style lang="scss" scoped>
.demo-container {
  margin-bottom: 50px;
  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 20px;
    padding: 0.8em 0;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    padding: 0.8em 0;
  }
}
</style>