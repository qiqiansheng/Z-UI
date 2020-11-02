<template>
  <div>
    <z-button type='normal' class="buttonDemo">默认按钮</z-button>
    <z-button type='primary' class="buttonDemo">主要按钮</z-button>
    <z-button type='success' class="buttonDemo">成功按钮</z-button>
    <z-button type='danger' class="buttonDemo">危险按钮</z-button>
    <z-button type='info' class="buttonDemo">提示按钮</z-button>
    <z-button type='warning' class="buttonDemo">警告按钮</z-button>
  </div>
</template>

<script>
import {zButton} from '../../package'
export default {
  
}
</script>

<style lang="scss" scoped>
.buttonDemo{
  margin-right: 1em;
  margin-bottom: 1em;

}
</style>