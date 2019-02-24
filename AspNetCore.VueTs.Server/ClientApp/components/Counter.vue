<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count:
            <strong>{{ currentcount }}</strong>
        </p>

        <button @click='incrementCounter' class='btn btn-primary'>Increment</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CounterModule from '@/stores/CounterModule';

@Component
export default class Counter extends Vue {
    private module = getModule(CounterModule, this.$store);

    private get currentcount(): number {
        return this.module.counter;
    }

    private incrementCounter() {
        this.module.increment();
    }

}
</script>