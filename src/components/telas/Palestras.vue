<template>
    <SecaoTextoEsquerda
    titulo="PALESTRAS"
    :descricao="secao.st_texto"
    colorborder="#3255A5"
    classimage="bgpalestra"
    type="parallax">
    </SecaoTextoEsquerda>
</template>

<script>
    import SecaoTextoEsquerda from "../itens/SecaoTextoEsquerda";
    import EgpmApi from "@/services/EgpmApi";

    export default {
        name: "Palestras",
        components: {SecaoTextoEsquerda},
        created() {
            EgpmApi.getSecao(3, result => {
                this.secao = result.data;
            })
        },
        data() {
            return {
                secao: {
                    st_texto : "Carregando..."
                }
            }
        }
    }
</script>

<style scoped>

</style>