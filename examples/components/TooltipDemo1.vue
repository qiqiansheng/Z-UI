<template>
  <div class="Tooltip">
    <z-tooltip class='item' place='left'><z-button>左提示</z-button></z-tooltip>
    <z-tooltip class='item' place='top'><z-button>上提示</z-button></z-tooltip>
    <z-tooltip class='item' place='bottom'><z-button>下提示</z-button></z-tooltip>
    <z-tooltip class='item' place='right'><z-button>右提示</z-button></z-tooltip>
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