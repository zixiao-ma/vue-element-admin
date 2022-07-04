import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/index.scss';
import installIcons from '@/icons';
import '@/permission'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App);
installIcons(app);
app.use(ElementPlus, {
  locale: zhCn
}).use(store).use(router).mount('#app');
