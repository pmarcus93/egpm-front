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
    import SecaoApi from "@/services/SecaoApi";

    export default {
        name: "Talks",
        components: {SecaoTextoEsquerda},
        created() {
            SecaoApi.getSecao(3, result => {
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