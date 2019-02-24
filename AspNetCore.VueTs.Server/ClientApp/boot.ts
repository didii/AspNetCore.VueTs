import '@/css/site.css';
import 'bootstrap';
import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/router';
import Store from '@/store';

new Vue({
    el: '#app-root',
    router: Router,
    store: Store,
    render: h => h(App)
});