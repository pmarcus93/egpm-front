<template>
    <SecaoTextoDireita
            classimage="bgcampeonatos"
            titulo="JOGOS"
            :descricao="secao.st_texto"
            rota="/games"
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
            SecaoApi.getSecao("campeonatos", result => {
                this.secao = result.data.data;
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
