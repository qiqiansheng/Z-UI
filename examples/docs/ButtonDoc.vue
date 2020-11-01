<template>
  <div class="Button">
    <demo :component='ButtonDemo' title="基础用法" description='添加 type 属性设置不同种类Button' :code='code0' codetype='language-html'/>
    <demo :component='ButtonDemo1' title="圆角" description='添加 round 属性设置圆角按钮' :code='code1' codetype='language-html'/>
    <demo :component='ButtonDemo2' title="禁用" description='添加 disabled 属性设置按钮禁用' :code='code2' codetype='language-html'/>
    <attribution :data="data"/>
  </div>
</template>

<script>
import demo from '../components/demo'
import attribution from '../components/attribution';
import ButtonDemo from '../components/ButtonDemo'
import ButtonDemo1 from '../components/ButtonDemo1'
import ButtonDemo2 from '../components/ButtonDemo2'

export default {
  components:{
    demo,
    ButtonDemo,
    ButtonDemo1,
    ButtonDemo2,
    attribution
  },
  data() {
    return {
      code0:`
<z-button type='normal'>默认按钮</z-button>
<z-button type='primary'>主要按钮</z-button>
<z-button type='success'>成功按钮</z-button>
<z-button type='danger'>危险按钮</z-button>
<z-button type='info'>提示按钮</z-button>
<z-button type='warning'>警告按钮</z-button>
     `,
      code1:`
<z-button round>默认按钮</z-button>
<z-button type='primary' round>主要按钮</z-button>
<z-button type='success' round>成功按钮</z-button>
<z-button type='danger' round>危险按钮</z-button>
<z-button type='info' round>提示按钮</z-button>
<z-button type='warning' round>警告按钮</z-button>
      `,
      code2:`
<z-button disabled>默认按钮</z-button>
<z-button type='primary' disabled>主要按钮</z-button>
<z-button type='success' disabled>成功按钮</z-button>
<z-button type='danger' disabled>危险按钮</z-button>
<z-button type='info' disabled>提示按钮</z-button>
<z-button type='warning' disabled>警告按钮</z-button>
      `,
      ButtonDemo,
      ButtonDemo1,
      ButtonDemo2,
      data:[
        {
          params: 'type',
          desc: '类型',
          type: 'String',
          select: 'normal , primary , success , danger , info , warning',
          default: 'normal',
        },
        {
          params: 'round',
          desc: '圆角',
          type: 'Boolean',
          select: 'true , false',
          default: 'false',
        },
        {
          params: 'disabled',
          desc: '禁用',
          type: 'Boolean',
          select: 'true , false',
          default: 'false',
        },
      ]
    }
  },
}
</script>