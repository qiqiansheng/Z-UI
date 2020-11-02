<template>
  <div class="Tooltip">
    <z-tooltip class='item'><z-button>提示</z-button></z-tooltip>
  </div>
</template>

<script>
import {zTooltip,zButton} from '../../package'
export default {
  
}
</script>

<style lang="scss" scoped>
.Tooltip{
  padding-left: 60px;
  padding-top: 30px;
}
.item{
  margin-right: .8em;
  margin-bottom: .8em;
}
</style>