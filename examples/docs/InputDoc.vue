<template>
  <div class="InputDoc">
    <demo :component='InputDemo' title="基础用法" description='Input基础用法' :code='code0'/>
    <demo :component='InputDemo1' title="可清除" description='添加 clearable 属性设置Input可清除' :code='code1'/>
    <demo :component='InputDemo2' title="基础用法" description='Input基础用法' :code='code2'/>

  </div>
</template>

<script>
import InputDemo from '../components/InputDemo'
import InputDemo1 from '../components/InputDemo1'
import InputDemo2 from '../components/InputDemo2'
import demo from '../components/demo'
import attribution from '../components/attribution';
export default {
  components:{
    demo,
    InputDemo,
    InputDemo1,
    InputDemo2
  },
  data() {
    return {
      code0:`<z-input></z-input>`,
      code1:`<z-input clearable></z-input>`,
      code2:`<z-input type='textarea'></z-input>`,
      InputDemo,
      InputDemo1,
      InputDemo2
    }
  },
}
</script>