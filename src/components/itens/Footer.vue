<template>

    <div>
        <Patrocinadores></Patrocinadores>
        <Rodape></Rodape>
    </div>

</template>

<script>
    import Rodape from "../content/Rodape";
    import Patrocinadores from "../content/SponsorList";
    export default {
        name: "BlocoRodape",
        components: {Patrocinadores, Rodape}
    }
</script>

<style scoped>

</style>