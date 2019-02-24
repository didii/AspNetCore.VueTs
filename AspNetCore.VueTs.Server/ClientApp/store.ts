import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import CounterModule from '@/stores/CounterModule';

Vue.use(Vuex);

const options: StoreOptions<{}> = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        CounterModule,
    }
};

export default new Vuex.Store(options);
