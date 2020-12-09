<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChildren(item.children, item) && (!onlyOneChild.children || onlyOneChild.onShowingChildren) && !item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title>
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import path from 'path';
import { defineComponent, computed, ref } from "vue"
import { RouteRecordRawCustomize} from "vue-router"

import Item from "./Item";
import AppLink from "./Link.vue";

import { isExternal } from "/src/utils/validate";

import type { Ref, PropType } from "vue"

type ISidebarItem = PropType<RouteRecordRawCustomize>

export interface ISidebarItemProps {
  basePath: string;
  isNest: boolean;
  route: RouteRecordRawCustomize;
}

export default defineComponent({
  name: "SidebarItem",
  components: {
    AppLink,
    Item,
  },
  props: {
    item: {
      type: Object as ISidebarItem,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  setup(props, ctx) {
    const onlyOneChild: Ref<RouteRecordRawCustomize | null> = ref(null);
    const hasOneShowingChildren = (children: Array<RouteRecordRawCustomize> = [], parent: RouteRecordCustomization): boolean => {
      const showingChildren = children.filter(item => {
        if(item.hidden) {
          return false;
        } else {
          onlyOneChild.value = item;
          return true;
        }
      })

      if(showingChildren.length === 1) {
        return true;
      }

      // 当此目录下没有设置菜单时，直接使用父菜单作为叶子节点
      if(showingChildren.length === 0) {
        onlyOneChild.value = {
          ...parent,
          path: "",
          noShowingChildren: false
        }
        return true;
      }

      return false;

    }

    const resolvePath = (routePath:string):string => {
      if(isExternal(routePath)) {
        return routePath;
      }
      if(isExternal(props.basePath)) {
        return props.basePath;
      }
      return path.resolve(props.basePath, routePath);
    }

    return {
      onlyOneChild,
      hasOneShowingChildren,
      resolvePath
    }
  },
})
</script>