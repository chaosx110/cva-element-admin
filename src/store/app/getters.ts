import { IAppState } from "./types";

export default {
  token: (state:IAppState) => state.token,
  device: (state:IAppState) => state.device,
  size: (state:IAppState) => state.size,
  permission_routes: (state: IAppState) => state.permission_routes
}