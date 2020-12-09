<template>
  <ul class="app-header-nav">
    <li>
      <el-avatar size="small" :src="squareUrl.value"></el-avatar>
    </li>
    <li>
      <el-dropdown>
        <span class="el-dropdown-link">
          姓名<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </li>
    <li>登出</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";
export default defineComponent({
  setup() {
    const squareUrl: Ref<string> = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    );
    const handleSelect = (value: string): void => {
      console.log(value);
    };
    return {
      squareUrl,
      handleSelect,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/styles/variables.scss";

ul.app-header-nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  height: 100%;
  li {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 15px;
    cursor: pointer;
    color: $--color-text-regular;
    font-size: 14px;
    &:hover {
      color: gray;
    }
  }
}
</style>
