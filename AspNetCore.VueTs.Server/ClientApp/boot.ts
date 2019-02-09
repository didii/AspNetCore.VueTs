import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Counter from './components/Counter.vue';
import FetchData from './components/FetchData.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/fetchdata', component: FetchData }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(App)
});