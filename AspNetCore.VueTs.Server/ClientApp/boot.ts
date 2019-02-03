import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/Home.vue').default },
    { path: '/counter', component: require('./components/Counter.vue').default },
    { path: '/fetchdata', component: require('./components/FetchData.vue').default }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/App.vue').default)
});