<template>
  <div>
    <demo :component='TooltipDemo' title="基础用法" description='Tooltip基础用法' :code='code0' codetype='language-html'/>
    <demo :component='TooltipDemo1' title="提示文字位置" description='添加 place 属性设置提示文字位置' :code='code1' codetype='language-html'/>
    <demo :component='TooltipDemo2' title="提示文字内容" description='添加 content 属性设置提示文字内容' :code='code2' codetype='language-html'/>
    <attribution :data='data'/>
  </div>
</template>

<script>
import demo from '../components/demo'
import attribution from '../components/attribution';
import TooltipDemo from '../components/TooltipDemo'
import TooltipDemo1 from '../components/TooltipDemo1'
import TooltipDemo2 from '../components/TooltipDemo2'

export default {
  components:{
    demo,
    attribution,
    TooltipDemo,
    TooltipDemo1,
    TooltipDemo2
  },
  data() {
    return {
      TooltipDemo,
      TooltipDemo1,
      TooltipDemo2,
      code0:`<z-tooltip class='item'>
  <z-button>提示</z-button>
</z-tooltip>`,
      code1:`<z-tooltip place='left'>
  <z-button>左提示</z-button>
</z-tooltip>
<z-tooltip place='top'>
  <z-button>上提示</z-button>
</z-tooltip>
<z-tooltip place='bottom'>
  <z-button>下提示</z-button>
</z-tooltip>
<z-tooltip place='right'>
  <z-button>右提示</z-button>
</z-tooltip>`,
      code2:`<z-tooltip place='left' content='左提示'>
  <z-button>左提示</z-button>
</z-tooltip>
<z-tooltip place='top' content='上提示'>
  <z-button>上提示</z-button>
</z-tooltip>
<z-tooltip place='bottom' content='下提示'>
  <z-button>下提示</z-button>
</z-tooltip>
<z-tooltip place='right' content='右提示'>
  <z-button>右提示</z-button>
</z-tooltip>`,
      data:[
        {
          params: 'place',
          desc: '提示文字位置',
          type: 'String',
          select: 'left , top , right , bottom',
          default: 'top',
        },
        {
          params: 'content',
          desc: '提示文字内容',
          type: 'String',
          select: '',
          default: '提示文字',
        },
      ]
    }
  },
}
</script>