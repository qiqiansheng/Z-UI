<template>
  <div>
    <button
      ref="button"
      :disabled='disabled'
      :class="[type,{'round':round,'disabled':disabled}]"
      @mousedown="colorChange(type)"
      @mouseup="colorResume(type)"
      @click='_click'
    >
      <slot>click me!</slot>
    </button>   
  </div>
</template>


<script>
export default {
  name: "z-button",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "",
    },
    // 圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    colorChange(type) {
      switch (type) {
        case '':
          this.$refs.button.style.borderColor = 'rgb(58,142,230)'
          break;
        case "primary":
          this.$refs.button.style.backgroundColor = "rgb(58,142,230)";
          break;
        case "success":
          this.$refs.button.style.backgroundColor = "rgb(93,175,52)";
          break;
        case "danger":
          this.$refs.button.style.backgroundColor = "rgb(221,97,97)";
          break;
        case "info":
          this.$refs.button.style.backgroundColor = "rgb(130,132,138)";
          break;
        case "warning":
          this.$refs.button.style.backgroundColor = "rgb(207,146,54)";
          break;
      }
    },
    colorResume(type) {
      switch (type) {
        case '':
          this.$refs.button.style.borderColor = 'rgb(220, 223, 230)'
          break;
        case "primary":
          this.$refs.button.style.backgroundColor = "rgb(64, 158, 255)";
          break;
        case "success":
          this.$refs.button.style.backgroundColor = "rgb(103, 194, 58)";
          break;
        case "danger":
          this.$refs.button.style.backgroundColor = "rgb(245, 108, 108)";
          break;
        case "info":
          this.$refs.button.style.backgroundColor = "rgb(144, 147, 153)";
          break;
        case "warning":
          this.$refs.button.style.backgroundColor = "rgb(235,181,99)";
          break;
      }
    },
    _click(){
      this.$emit('click')
    }
  },
};
</script>


<style lang='scss' scoped>
/* 按钮基础样式 */
div {
  --text-color: white;
  display: inline-block;
}
button {
  background-color: white;
  border: 1px solid rgb(220, 223, 230);
  padding: 0.7em 1.5em;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: rgb(236, 245, 255);
    color: rgb(64, 158, 255);
    border-color: rgb(198, 226, 255);
  }
}

/* 不同按钮的样式 */
.primary {
  background-color: rgb(64, 158, 255);
  color: var(--text-color);
  &:hover {
    background-color: rgb(87, 171, 255);
    color: var(--text-color);
  }
}

.success {
  background-color: rgb(103, 194, 58);
  color: var(--text-color);
  &:hover {
    background-color: rgb(133, 206, 97);
    color: var(--text-color);
  }
}

.danger {
  background-color: rgb(245, 108, 108);
  color: var(--text-color);
  &:hover {
    background-color: rgb(247, 137, 137);
    color: var(--text-color);
  }
}

.info {
  background-color: rgb(144, 147, 153);
  color: var(--text-color);
  &:hover {
    background-color: rgb(166,169,173);
    color: var(--text-color);
  }
}

.warning {
  background-color: rgb(230,162,60);
  color: var(--text-color);
  &:hover {
    background-color: rgb(235,181,99);
    color: var(--text-color);
  }
}

.round{
  border-radius: 20px;
}
.disabled{
  cursor: not-allowed;
}
</style>