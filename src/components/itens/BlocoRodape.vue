<template>

    <div>
        <Patrocinadores></Patrocinadores>
        <Rainbow></Rainbow>
        <Rodape></Rodape>
    </div>

</template>

<script>
    import Rodape from "../telas/Rodape";
    import Rainbow from "./Rainbow";
    import Patrocinadores from "../telas/Patrocinadores";
    export default {
        name: "BlocoRodape",
        components: {Patrocinadores, Rainbow, Rodape}
    }
</script>

<style scoped>

</style>