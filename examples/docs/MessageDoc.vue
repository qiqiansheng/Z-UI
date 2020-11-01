<template>
  <div>
    <demo :component='MessageDemo' title="基础用法 " description='Message基础用法 (传入一个配置对象 , 配置属性见下表)' :code='code0' codetype='language-javascript'/>
    <demo :component='MessageDemo1' title="指定类型" description='传入一个具有 type 属性的对象指定 Message 的类型' :code='code1' codetype='language-javascript'/>
    <demo :component='MessageDemo2' title="停留时间" description='传入一个具有 duration 属性的对象指定 Message 停留的时间' :code='code2' codetype='language-javascript'/>
    <attribution :data="data"/>
  </div>
</template>

<script>
import demo from '../components/demo'
import attribution from '../components/attribution';
import MessageDemo from '../components/MessageDemo'
import MessageDemo1 from '../components/MessageDemo1'
import MessageDemo2 from '../components/MessageDemo2'

export default {
  components:{
    demo,
    attribution,
    MessageDemo,
    MessageDemo1,
    MessageDemo2
  },
  data() {
    return {
      MessageDemo,
      MessageDemo1,
      MessageDemo2,
      code0:`<z-button @click="show">默认提示</z-button>

export default {
  methods: {
    show(){
      this.$message()
    }
  },
}
     `,
      code1:`<z-button @click="showInfo">默认提示</z-button>
<z-button @click="showSuccess">成功提示</z-button>
<z-button @click="showWarning">警告提示</z-button>
<z-button @click="showError">错误提示</z-button>
      
export default {
  methods: {
    showInfo(){
      this.$message()
    },
    showSuccess(){
      this.$message({type:'success',message:'成功啦！'})
    },
    showWarning(){
      this.$message({type:'warning',message:'警告哦~'})
    },
    showError(){
      this.$message({type:'error',message:'出错了……'})
    },
  },
}`,
      code2:`<z-button class='buttonDemo' @click="showInfo">停留1秒</z-button>
<z-button class='buttonDemo' @click="showSuccess">停留2秒</z-button>
<z-button class='buttonDemo' @click="showWarning">停留3秒</z-button>

export default {
  methods: {
    showInfo(){
      this.$message({duration:1000,message:'我停留了1秒'})
    },
    showSuccess(){
      this.$message({duration:2000,message:'我停留了2秒'})
    },
    showWarning(){
      this.$message({duration:3000,message:'我停留了3秒'})
    }
  },
}`,
      data:[
        {
          params: 'type',
          desc: '类型',
          type: 'String',
          select: 'info , success , warning , error',
          default: 'info',
        },
        {
          params: 'message',
          desc: '提示文字',
          type: 'String',
          select: '',
          default: '这是一条提示',
        },
        {
          params: 'duration',
          desc: '停留时间',
          type: 'Number',
          select: '',
          default: '3000 ms',
        }
      ]
    }
  },
}
</script>