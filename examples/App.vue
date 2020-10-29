<template>
  <div id="app">
    <z-button>默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <br />
    <br />
    <z-tooltip place="left" content="Left 提示"
      ><z-button>左提示</z-button
    ></z-tooltip>
    <z-tooltip content="Top 提示"><z-button>上提示</z-button></z-tooltip>
    <z-tooltip place="bottom" content="Bottom 提示"
      ><z-button>下提示</z-button
    ></z-tooltip>
    <z-tooltip place="right" content="Right 提示"
      ><z-button>右提示</z-button
    ></z-tooltip>
    <br />
    <br />
    <div>{{aaa}}</div>
    <z-input clearable v-model="aaa"></z-input>
    <br />
    <br />
    <z-button @click="showSuccess">成功</z-button>
    <z-button @click="showWarning">警告</z-button>
    <z-button @click="showInfo">消息</z-button>
    <z-button @click="showError">错误</z-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      aaa:''
    }
  },
  methods: {
    showSuccess(){
      this.$message({message:'成功啦',type:'success'})
    },
    showWarning(){
      this.$message({message:'警告哦~',type:'warning'})
    },
    showInfo(){
      this.$message({message:'提示哈~',type:'info'})
    },
    showError(){
      this.$message({message:'出错了……',type:'error'})
    },
  },
};
</script>
<style>
#app {
  padding: 50px;
}
</style>
