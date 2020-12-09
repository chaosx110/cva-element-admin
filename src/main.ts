import { createApp } from "vue";

import 'normalize.css/normalize.css'

import router from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from "./App.vue";
import "./index.css";

// if (process.env.NODE_ENV === "development") {
//   import("../mock");
// }

// console.log(require.context('./store/modules', true, /\.js$/))
const app = createApp(App);
app.use(router);
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.mount("#app");
