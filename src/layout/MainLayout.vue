<template>
  <el-container class="app-container">
    <el-main>
      <el-container>
        <el-header class="app-header">
          <Header>
            <HeaderNav />
          </Header>
        </el-header>
        <el-main class="app-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header";
import HeaderNav from "./components/Header/HeaderNav.vue";

export default defineComponent({
  components: {
    Header,
    HeaderNav,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.app-container {
  height: 100vh;
  width: 100%;
  .app-aside {
    width: 220px !important;
  }
  .app-header {
  }
  .app-main {
    height: calc(100vh - 60px);
  }
  > .el-main {
    padding: 0;
  }
}
</style>