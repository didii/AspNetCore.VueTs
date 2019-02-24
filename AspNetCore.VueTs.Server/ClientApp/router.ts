import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Counter from './components/Counter.vue';
import FetchData from './components/FetchData.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/fetchdata', component: FetchData }
];

export default new VueRouter({ mode: 'history', routes: routes });