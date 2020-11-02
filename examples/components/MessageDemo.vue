<template>
  <div>
    <z-button @click="show">默认提示</z-button>
  </div>
</template>

<script>
import {zButton} from '../../package'
export default {
  methods: {
    show(){
      this.$message()
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