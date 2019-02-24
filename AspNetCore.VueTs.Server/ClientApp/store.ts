import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

export interface IAppState { }

const options: StoreOptions<IAppState> = {
    strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store(options);
