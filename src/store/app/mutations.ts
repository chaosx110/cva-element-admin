import { RouteRecordNormalized } from 'vue-router';
import { IAppState } from './types';
import * as types from './mutation-types';
export default {
  [types.TOGGLE_DEVICE]: (state: IAppState, device:string): void => {
    state.device = device;
  },
  [types.SET_SIZE]: (state: IAppState, size:string): void => {
    state.size = size;
  },
  [types.SET_ROUTES]: (state: IAppState, routes:Array<RouteRecordNormalized>): void => {
    state.routes = routes;
  },
  [types.SET_PERMISSION_ROUTES]: (state: IAppState, routes: Array<RouteRecordNormalized>): void => {
    state.permission_routes = routes;
  }
}