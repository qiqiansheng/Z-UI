# 快速上手
本文介绍如何在你的 vue 项目中使用 zeal-ui。

### 引入 zeal-ui 
你可以完整引入整个 zeal , 也可以按需引入你所需要的组件。

>完整引入

在 vue 项目下的 main.js 中写入如下内容：
``` javascript
import Vue from 'vue';
import App from './App.vue';
import z from 'zeal-ui';

Vue.use(z);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

>按需引入
``` javascript
import Vue from 'vue';
import App from './App.vue';
import { Button,Input } from 'zeal-ui';

Vue.use(Button);
Vue.use(Input);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

>至此 , 你便可以在你的项目中使用 Zeal 提供的组件了