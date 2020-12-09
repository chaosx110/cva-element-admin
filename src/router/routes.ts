import type { RouteMetaCustomize, RouteRecordRawCustomize } from "vue-router";

import MainLayout from "/@/layout/MainLayout.vue";

export const DefaultRoute: Array<RouteRecordRawCustomize> = [
  // {
  //   path: "/redirect",
  //   component: MainLayout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: "/redirect/:path(.*)",
  //       component: () => import("/@/views/redirect"),
  //     },
  //   ],
  // },
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    hidden: true,
  },
  // {
  //   path: "/auth-redirect",
  //   component: () => import("/@/views/login/auth"),
  //   hidden: true,
  // },
  // {
  //   path: "/404",
  //   component: () => import("/@/views/error-page/404"),
  //   hidden: true,
  // },
  // {
  //   path: "/401",
  //   component: () => import("/@/views/error-page/401"),
  //   hidden: true,
  // },
  // {
  //   path: "/",
  //   component: MainLayout,
  //   redirect: "/dashboard",
  //   children: [
  //     {
  //       path: "dashboard",
  //       component: () => import("/@/views/dashboard/index"),
  //       name: "Dashboard",
  //       meta: {
  //         title: "Dashboard",
  //         icon: "dashboard",
  //         affix: true,
  //       } as RouteMetaCustomize,
  //     },
  //   ],
  // },
];

export const NotFoundRoute: RouteRecordRawCustomize = {
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  hidden: true,
};
