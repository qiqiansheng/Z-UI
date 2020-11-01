<template>
  <div class="quickUse">
    <h3>快速上手</h3>
    <h4>引入 zeal-ui</h4>
    <p>你可以完整引入整个 zeal , 也可以按需引入你所需要的组件。</p>
    <h4>完整引入</h4>
    <pre
      class="language-javascript"
    ><code class="language-javascript">// main.js
import Vue from 'vue';
import App from './App.vue';
import z from 'zeal-ui';

Vue.use(z);

new Vue({
  el: '#app',
  render: h => h(App)
});</code></pre>
    <h4>按需引入</h4>
    <pre
      class="language-javascript"
    ><code class="language-javascript">// main.js
import Vue from 'vue';
import App from './App.vue';
import { Button,Input,Message } from 'zeal-ui';

Vue.use(Button);
Vue.use(Input);
// Message 组件为一个函数,把它挂载Vue原型上,即可通过 this.$message 调用
Vue.prototype.$message = Message
new Vue({
  el: '#app',
  render: h => h(App)
});</code></pre>
  </div>
</template>

<script>
export default {
  mounted() {
     process.browser &&document.querySelectorAll("pre code").forEach(block => Prism.highlightElement(block));
  },
};
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