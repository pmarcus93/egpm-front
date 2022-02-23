<template>

    <div>
        <Patrocinadores></Patrocinadores>
        <Rodape></Rodape>
    </div>

</template>

<script>
    const Rodape = () => import("../content/Rodape");
    const Patrocinadores = () => import("../content/SponsorList");

    export default {
        name: "BlocoRodape",
        components: {Patrocinadores, Rodape}
    }
</script>

<style scoped>

</style>
