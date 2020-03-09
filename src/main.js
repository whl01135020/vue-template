// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
import echarts from 'echarts';

import $ from 'jquery'

import './style/common.less'
import './assets/font-awesome/css/font-awesome.min.css'
// import 'iview/dist/styles/iview.css';



Vue.config.productionTip = false

window.echarts = echarts;

Vue.prototype.echarts = echarts;

// Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
