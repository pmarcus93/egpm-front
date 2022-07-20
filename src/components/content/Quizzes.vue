<template>
    <SecaoTextoEsquerda
    titulo="QUIZZES"
    :descricao="secao.st_texto"
    colorborder="#3255A5"
    classimage="bgpalestra"
    type="parallax">
    </SecaoTextoEsquerda>
</template>

<script>
    import SecaoTextoEsquerda from "../itens/SecaoTextoEsquerda";
    import {quizzesData} from "../../demodata/DemoData";

    export default {
        name: "Talks",
        components: {SecaoTextoEsquerda},
        data() {
            return {
                secao: quizzesData
            }
        }
    }
</script>

<style scoped>

</style>
