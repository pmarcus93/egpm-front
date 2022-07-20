<template>
    <SecaoTextoDireita
    titulo="FREE PLAY"
    classimage="bgfreeplay"
    :descricao="secao.st_texto"
    colorborder="#EA2A3A"
    type="static"
    ></SecaoTextoDireita>
</template>

<script>
    import SecaoTextoDireita from "../itens/SecaoTextoDireita";
    import {freePlayData} from "../../demodata/DemoData";

    export default {
        name: "FreePlay",
        components: {SecaoTextoDireita},
        data() {
            return {
                secao: freePlayData
            }
        }
    }
</script>

<style scoped>

</style>
