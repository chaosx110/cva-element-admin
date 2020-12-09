import NProgress from "nprogress";
import { createRouter, createWebHashHistory, START_LOCATION } from "vue-router";
import type { RouteRecordRaw, RouterOptions } from "vue-router";
import getPageTitle from "/src/utils/get-page-title";
import { DefaultRoute, NotFoundRoute } from "./routes";

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...DefaultRoute, NotFoundRoute] as Array<RouteRecordRaw>,
  scrollBehavior: () => ({ y: 0 }),
} as RouterOptions);

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta && to.meta.title);
  if (from === START_LOCATION) {
    next();
  } else {
    next();
  }
  return false;
});

router.afterEach((to, from, failure) => {
  NProgress.done();
  if (!failure) {
    // 进行正确的才做
  }
});

router.onError((error) => {
  console.log(error);
});

export default router;
