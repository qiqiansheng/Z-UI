<template>
  <div id="root">
    <input v-if="type !== 'textarea'" :type="type" :placeholder="placeholder" @input="valueChange" ref="input"/>
    <textarea v-if="type === 'textarea'" :placeholder="placeholder"></textarea>
    <span v-if="clearable && inputValue && type!=='textarea'" @click="clearValue">×</span>
  </div>
</template>

<script>
export default {
  name: "z-input",
  props:{
    placeholder:{
      type:String,
      default:'请输入内容'
    },
    type:{
      type:String,
      default:'text'
    },
    clearable:{
      type:Boolean,
      default:false
    },
  },
  data() {
    return {
      inputValue:''
    }
  },
  methods: {
    valueChange(e){
      this.$emit('input',e.target.value)
      this.inputValue = e.target.value
    },
    clearValue(){
      this.$emit('input','')
      this.$refs.input.value = ''
      this.inputValue = ''
    }
  },
};
</script>

<style lang="scss" scoped>
#root {
  position: relative;
  display: inline-block;
  span{
    font-size: 12px;
    display: inline-flex;
    color: rgb(204,208,214);
    border: 1px solid rgb(204,208,214);
    width: 12px;
    height: 12px;
    line-height: 1em;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    padding-bottom: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1em;
    cursor: pointer;
    &:hover{
      color: rgb(144,147,153);
      border-color: rgb(144,147,153);
    }
  }
  input,textarea{
    font-size: 14px;
    padding: .7em 1em;
    padding-right: 2em;
    outline: none;
    border: 1px solid rgb(220,223,230);
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      border-color: rgb(192,196,204);
    }
    &:focus{
      border-color: rgb(64,158,255);
    }
    &::placeholder{
      color: rgb(192,196,204);
    }
  }
}
</style>