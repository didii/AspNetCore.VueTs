<template>
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a class='navbar-brand' href='#'>AspNetCore.VueTs</a>
        <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
        >
            <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav mr-auto'>
                <li class='nav-item'>
                    <router-link to='/' :exact='true' class="nav-link">
                        <span class='glyphicon glyphicon-home'></span> Home
                    </router-link>
                </li>
                <li class='nav-item'>
                    <router-link to='/counter' class="nav-link">
                        <span class='glyphicon glyphicon-education'></span> Counter
                    </router-link>
                </li>
                <li class='nav-item'>
                    <router-link to='/fetchdata' class="nav-link">
                        <span class='glyphicon glyphicon-th-list'></span> Fetch data
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavMenu extends Vue {

}
</script>
