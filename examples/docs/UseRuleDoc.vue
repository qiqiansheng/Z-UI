<template>
  <div class="useRule">
    <h3>使用语法</h3>
    <h4>所有 Zeal 组件都必须以 "z-{tagname}" 格式调用</h4>
    <pre class="language-html"><code class="language-html">{{str}}
</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:`<!-- app.vue -->
<div id='app'>
  <z-button></z-button>
  <z-input></z-input>
  <z-tooltip></z-tooltip>
</div>`
    }
  },
  mounted() {
     process.browser &&document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  },
}
</script>

<style lang="scss" scoped>
h3,
h4 {
  padding: 0.8em 0;
}

p {
  padding: 0.8em 0;
}
</style>