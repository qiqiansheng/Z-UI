<template>
  <div class="InputDoc">
    <demo :component='InputDemo' title="基础用法" description='Input基础用法' :code='code0' codetype='language-html'/>
    <demo :component='InputDemo1' title="可清空" description='添加 clearable 属性设置Input可清空' :code='code1' codetype='language-html'/>
    <demo :component='InputDemo2' title="文本域" description='设置 type 属性' :code='code2' codetype='language-html'/>
    <demo :component='InputDemo3' title="支持v-model" description='Input支持 v-model 双向绑定' :code='code3' codetype='language-html'/>
    <attribution :data='data'/>
  </div>
</template>

<script>
import InputDemo from '../components/InputDemo'
import InputDemo1 from '../components/InputDemo1'
import InputDemo2 from '../components/InputDemo2'
import InputDemo3 from '../components/InputDemo3'
import demo from '../components/demo'
import attribution from '../components/attribution';
export default {
  components:{
    demo,
    InputDemo,
    InputDemo1,
    InputDemo2,
    InputDemo3,
    attribution
  },
  data() {
    return {
      code0:`<z-input></z-input>`,
      code1:`<z-input clearable></z-input>`,
      code2:`<z-input type='textarea'></z-input>`,
      code3:`<z-input v-model="foo"></z-input>
<p>{{ foo }}</p>`,
      InputDemo,
      InputDemo1,
      InputDemo2,
      InputDemo3,
      data:[
        {
          params: 'type',
          desc: '类型',
          type: 'String',
          select: 'text , textarea',
          default: 'text',
        },
        {
          params: 'clearable',
          desc: '可清空',
          type: 'Boolean',
          select: 'true , false',
          default: 'false',
        }
      ]
    }
  },
}
</script>