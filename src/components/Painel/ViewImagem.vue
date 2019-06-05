<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="IMAGENS"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/imagens/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Link</th>
                        <th>Copiar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <!--<ItemTrCampeonato v-for="(item) in campeonatos"-->
                    <!--:nome="item.st_nome"-->
                    <!--:descricao="item.st_descricao"-->
                    <!--:id="item.id_jogo"-->
                    <!--:imagem="item.st_imagem">-->
                    <!--</ItemTrCampeonato>-->

                    <ItemTrImagem v-for="(imagem) in imagens"
                            :id="imagem.id_imagem"
                            :nome="imagem.st_nome"
                            :imagem="imagem.st_arquivo"
                    ></ItemTrImagem>


                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ItemTrImagem from "./ItemTrImagem";
    import EgpmApi from "@/services/EgpmApi";

    export default {
        name: "ViewImagem",
        components: {ItemTrImagem, BarraTitulo},
        data() {
            return {
                imagens: []
            }
        },
        created() {
            EgpmApi.getAllImagens(resposta => {
                this.imagens = resposta.data;
            })
        }
    }
</script>

<style scoped>

</style>