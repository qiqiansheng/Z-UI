<template>
  <div>
    <z-button class="buttonDemo" round>默认按钮</z-button>
    <z-button type='primary' class="buttonDemo" round>主要按钮</z-button>
    <z-button type='success' class="buttonDemo" round>成功按钮</z-button>
    <z-button type='danger' class="buttonDemo" round>危险按钮</z-button>
    <z-button type='info' class="buttonDemo" round>提示按钮</z-button>
    <z-button type='warning' class="buttonDemo" round>警告按钮</z-button>
  </div>
</template>

<script>
import zButton from '../../package'
export default {
  
}
</script>

<style lang="scss" scoped>
.buttonDemo{
  margin-right: 1em;
}
</style>