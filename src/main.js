import Vue from 'vue';
import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Card,
  List,
  Tooltip,
  Button,
} from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
const components = [
  Layout,
  Menu,
  Icon,
  Layout.Sider,
  Layout.Content,
  Layout.Footer,
  Row,
  Col,
  Card,
  List,
  List.Item,
  List.Item.Meta,
  Tooltip,
  Button,
];
components.map((component) => Vue.use(component));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
