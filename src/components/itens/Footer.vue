<template>

    <div>
        <Patrocinadores></Patrocinadores>
        <Rodape></Rodape>
    </div>

</template>

<script>
    import {defineAsyncComponent} from "vue";

    const Rodape = defineAsyncComponent(() => import("../content/Rodape"));
    const Patrocinadores = defineAsyncComponent(() => import("../content/SponsorList"));

    export default {
        name: "BlocoRodape",
        components: {Patrocinadores, Rodape}
    }
</script>

<style scoped>

</style>
