<template>
  <div>
    <z-button class='buttonDemo' @click="showInfo">停留1秒</z-button>
    <z-button class='buttonDemo' @click="showSuccess">停留2秒</z-button>
    <z-button class='buttonDemo' @click="showWarning">停留3秒</z-button>
  </div>
</template>

<script>
import {zButton} from '../../package'
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
}
</script>

<style lang="scss" scoped>
.buttonDemo{
  margin-right: 1em;
  margin-bottom: 1em;
}
</style>