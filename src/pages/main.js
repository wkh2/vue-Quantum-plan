import Vue from 'vue';
import axios from '../utils/ajax.js';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from '../route/router.js';
import Filter from '../utils/filter.js';
import '../assets/css/base.css';
import '../utils/flexible.js';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueD3 from 'vue-d3';
//import '../utils/jsPlumb.js';
Vue.use(VueD3);
Vue.use(Mint);
Vue.use(axios);
Vue.use(VueRouter);
Vue.use(VueResource);
Object.keys(Filter).forEach(function(k) {
    Vue.filter(k, Filter[k]);
});

const router = new VueRouter({
    // mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('app');