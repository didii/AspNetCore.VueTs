import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({name: 'CounterModule'})
export default class CounterModule extends VuexModule {
    public counter: number = 0;

    @Mutation
    public increment() {
        this.counter++;
    }
}