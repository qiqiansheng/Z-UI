<template>
  <div class="root">
    <slot></slot>
    <div :class="['tooltip', place]">
      {{ content }}
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-tooltip",
  props: {
    content: {
      type: String,
      default: "提示文字",
    },
    place: {
      type: String,
      default: "top",
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  font-size: 12px;
  position: relative;
  display: inline-block;
  &:hover .tooltip {
    display: block;
  }
  .tooltip {
    background-color: rgb(48, 49, 51);
    white-space: nowrap;
    padding: 0.7em 1em;
    border-radius: 4px;
    color: white;
    display: none;
    position: absolute;
    z-index: 9999;
    .arrow {
      width: 0;
      height: 0;
      display: inline-block;
      border: 5px solid transparent;
      position: absolute;
    }
  }
  .top {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY(-1em);
    .arrow {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: rgb(48, 49, 51);
    }
  }
  .bottom {
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(1em);
    .arrow {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: rgb(48, 49, 51);
    }
  }
  .left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%) translateX(-1em);
    .arrow {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-left-color: rgb(48, 49, 51);
    }
  }
  .right {
    top: 50%;
    left: 100%;
    transform: translateY(-50%) translateX(1em);
    .arrow {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-right-color: rgb(48, 49, 51);
    }
  }
}
</style>