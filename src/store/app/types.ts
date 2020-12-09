import type { RouteRecordNormalized } from "vue-router";

export interface IAppState {
  token: string | undefined;
  device: string | undefined;
  size: string | undefined;
  routes: Array<RouteRecordNormalized>;
  permission_routes: Array<RouteRecordNormalized> | never;
}