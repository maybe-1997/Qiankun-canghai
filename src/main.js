import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'
import './public-path'
import store from './store'
import globalRegister from 'qiankun-common'

Vue.config.productionTip = false
Vue.use(Router)

let instance = null;

function render (props = {}) {
  const { container, routerBase } = props;
  const router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : 'http://localhost:7002',
    mode: 'history',
    routes
  });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#vue-canghai') : '#vue-canghai');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  console.log('[vue] props from main framework', props);
  globalRegister(store, props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}