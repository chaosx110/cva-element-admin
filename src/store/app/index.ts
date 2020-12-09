import { InjectionKey } from "vue";
import { createStore, useStore as useVuexStore, Store } from "vuex";
import Cookies from "js-cookie";

import { IAppState } from "./types";
import getters from "./getters";
import mutations from "./mutations";

export const key: InjectionKey<Store<IAppState>> = Symbol("AppStore");

const initialState: IAppState = {
  token: Cookies.get("token"),
  device: Cookies.get("device"),
  size: Cookies.get("size") || "small",
  routes: [],
  permission_routes: []
};

export const store = createStore<IAppState>({
  state: initialState,
  getters,
  mutations,
});

export function useAppStore() {
  return useVuexStore(key);
}
