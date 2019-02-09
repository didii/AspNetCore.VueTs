// This file tells our ts compiler what .vue files are
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}