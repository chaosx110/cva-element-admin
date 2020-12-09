import { RouteRecordRaw, RouteMeta } from "vue-router"

declare module "vue-router" {
  export interface RouteRecordRawCustomize extends RouteRecordRaw {
    // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
    hidden?: boolean; // default false

    // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
    // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
    // 若你想不管路由下面的 children 声明的个数都显示你的根路由
    // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
    alwaysShow?: boolean; // default true

    children?:Array<RouteRecordRawCustomize> | never;

    [s:string]:any;
  }

  export interface RouteMetaCustomize extends RouteMeta {
    title?: string;
    icon?: string;
    noCache?: boolean;
    breadcrumb?: boolean;
    affix?: boolean;
    activeMenu?: string;
    roles?:string[];
  }

}