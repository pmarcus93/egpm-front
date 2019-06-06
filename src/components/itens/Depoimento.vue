<template>
    <div class="col-sm-12 col-xl-4 depoimento">
        <div class="col-12 texto-depoimento py-4 text-justify">{{depoimento}}</div>
        <div class="col-12 autor-depoimento py-4">{{autor}}</div>
    </div>
</template>

<script>
    export default {
        name: "Depoimento",
        props: ["autor", "depoimento"],
    }
</script>

<style scoped>

    .autor-depoimento {
        font-weight: bold;
    }

    .depoimento {
        transition: all linear .2s ;
    }

    .depoimento:hover {
        transform: scale(1.09);
        background: whitesmoke;
    }

    .texto-depoimento {
        border-bottom: 3px darkslategray solid;
    }

</style>
