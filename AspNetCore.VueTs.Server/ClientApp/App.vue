<template>
    <div id="app-root">
        <NavMenu />
    <div id='app-root' class="container">
        <router-view></router-view>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavMenu from '@/components/NavMenu.vue';

@Component({
    components: {
        NavMenu
    }
})
export default class App extends Vue {
    
}
</script>