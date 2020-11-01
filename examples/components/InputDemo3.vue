<template>
  <div>
    <z-input v-model="foo"></z-input>
    <p>{{ foo }}</p>
  </div>
</template>

<script>
import {zInput} from '../../package'
export default {
  data() {
    return {
      foo:''
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>