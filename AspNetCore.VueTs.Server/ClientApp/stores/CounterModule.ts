import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '@/store';

@Module({dynamic: true, store, name: 'countermodule'})
export default class CounterModule extends VuexModule {
    public counter: number = 0;

    @Mutation
    public increment() {
        this.counter++;
    }
}