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
    import SecaoApi from "@/services/SecaoApi";

    export default {
        name: "FreePlay",
        components: {SecaoTextoDireita},
        created() {
            SecaoApi.getSecao(4, result => {
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
