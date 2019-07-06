<template>

    <div>
        <Patrocinadores></Patrocinadores>
        <Rodape></Rodape>
    </div>

</template>

<script>
    import Rodape from "../telas/Rodape";
    import Patrocinadores from "../telas/SponsorList";
    export default {
        name: "BlocoRodape",
        components: {Patrocinadores, Rodape}
    }
</script>

<style scoped>

</style>