<template>
    <div id='app-root' class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <NavMenu />
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavMenu from './NavMenu.vue';

@Component({
    components: {
        NavMenu
    }
})
export default class App extends Vue {
    
}
</script>