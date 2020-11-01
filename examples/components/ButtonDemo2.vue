<template>
  <div>
    <z-button class="buttonDemo" disabled>默认按钮</z-button>
    <z-button type='primary' class="buttonDemo" disabled>主要按钮</z-button>
    <z-button type='success' class="buttonDemo" disabled>成功按钮</z-button>
    <z-button type='danger' class="buttonDemo" disabled>危险按钮</z-button>
    <z-button type='info' class="buttonDemo" disabled>提示按钮</z-button>
    <z-button type='warning' class="buttonDemo" disabled>警告按钮</z-button>
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