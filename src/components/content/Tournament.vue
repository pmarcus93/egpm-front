<template>
    <SecaoTextoDireita
            classimage="bgcampeonatos"
            titulo="JOGOS"
            :descricao="secao.st_texto"
            rota="/campeonatos"
            textobotao="Lista de Campeonatos"
            colorborder="yellow"
            type="parallax">
    </SecaoTextoDireita>
</template>

<script>
    import SecaoTextoDireita from "../itens/SecaoTextoDireita";
    import SecaoApi from  "@/services/SecaoApi";

    export default {
        name: "Tournament",
        components: {SecaoTextoDireita},
        created() {
            SecaoApi.getSecao(2, result => {
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