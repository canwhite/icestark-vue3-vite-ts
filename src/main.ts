import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from '@/router/index';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist'
const vue = createApp(App as any);
const pinia = createPinia()
//持久化处理
pinia.use(piniaPluginPersist)
vue.use(router);
vue.use(pinia);
// @ts-ignore
vue.use(ElementPlus);

vue.mount('#app');
