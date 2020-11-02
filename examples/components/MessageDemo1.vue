<template>
  <div>
    <z-button class='buttonDemo' @click="showInfo">默认提示</z-button>
    <z-button class='buttonDemo' @click="showSuccess">成功提示</z-button>
    <z-button class='buttonDemo' @click="showWarning">警告提示</z-button>
    <z-button class='buttonDemo' @click="showError">错误提示</z-button>
  </div>
</template>

<script>
import {zButton} from '../../package'
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
}
</script>

<style lang="scss" scoped>
.buttonDemo{
  margin-right: 1em;
  margin-bottom: 1em;
}
</style>