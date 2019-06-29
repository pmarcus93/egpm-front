<template>
    <div class="col-sm-12 col-xl-6 mt-5 mx-auto depoimento">
        <div class="avatar mx-auto">
            <picture>
                <source media="(min-width: 992px)" v-bind:srcset="imagens.lg.st_url">
                <source media="(min-width: 768px)" v-bind:srcset="imagens.md.st_url">
                <source media="(min-width: 576px)" v-bind:srcset="imagens.sm.st_url">
                <img v-bind:srcset="imagens.default.st_url">
            </picture>
        </div>
        <h1 class="col-12 pt-4"><p class="text-center"><b>{{autor}}</b></p></h1>
        <p class="col-12 text-justify">"{{depoimento}}"</p>
    </div>
</template>

<script>
    export default {
        name: "Depoimento",
        props: ["autor", "depoimento", "imagens"],
    }
</script>

<style scoped lang="scss">

    .avatar {
        height: 150px;
        width: 150px;

        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>
