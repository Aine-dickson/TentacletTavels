<template>
    <section class="app-container h-screen grid">
        <div class="header h-full">
            <app_header/>
        </div>
        <div class="main h-full overflow-y-auto">
            <app_main/>
        </div>
    </section>
</template>

<script>

    import app_main from './includes/app_main.vue';
    import app_header from './includes/app_header.vue';

    export default {
        components: {
            app_header,
            app_main
        },
        setup(){

        }
    }

</script>

<style>
.app-container{
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;
    grid-template-areas: "header" "main";
}
.header{
    grid-area: header;
}
.main{
    grid-area: main;
}
</style>