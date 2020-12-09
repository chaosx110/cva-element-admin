<template>
  <div>
    <el-scrollbar>
      <el-menu
        :collapse="isCollapsed"
        :default-active="activeMenu"
        :text-color="textColor"
        :unique-opened="false"
        :active-text-color="activeTextColor"
        :collapse-transition="false"
        mode="vertical"
        :router="true"
      >
        <sidebar-item v-for="route in permission_routes.value" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ComputedRef } from "vue";
import type { RouteRecordRawCustomize, RouteLocationNormalizedLoaded, Router } from "vue-router";

import SidebarItem from "./SidebarItem.vue";

import { useAppStore } from "/src/store/app";

export default defineComponent({
  components: { SidebarItem },
  setup(props) {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const router: Router = useRouter();
    const store = useAppStore();
    const permission_routes: ComputedRef<RouteRecordRawCustomize> = computed(() => store.getters.permission_routes)
    const activeMenu = computed(() => {
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    const isCollapsed = computed(() => {
      return true;
    })

    onMounted(() => {
      console.log(permission_routes)
    })

    return {
      activeMenu,
      isCollapsed,
    };
  },
});
</script>