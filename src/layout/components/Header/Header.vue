<template>
  <div class="app-header">
    <span>
      <i class="el-icon-s-fold"></i>
    </span>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, createVNode, renderSlot } from 'vue'
export default defineComponent({
  setup(props, context) {

  }
})
</script>
<style lang="scss" scoped>
@import "src/styles/variables.scss";

.app-header {
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
  height: 100%;
  span {
    flex: 1;
    display: flex;
    justify-items: left;
    i {
      font-size: 18px;
      color: $--color-text-regular;
      &:hover {
        color: $--color-primary;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-items: right;
  }
}
</style>