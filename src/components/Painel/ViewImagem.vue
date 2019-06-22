<template>
    <div>
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
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <ItemTrImagem v-for="(imagem) in imagens"
                            :id="imagem.id_imagem"
                            :nome="imagem.st_nome"
                            :imagem="imagem.st_url"
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
    import ImagemApi from "@/services/ImagemApi";

    export default {
        name: "ViewImagem",
        components: {ItemTrImagem, BarraTitulo},
        data() {
            return {
                imagens: []
            }
        },
        created() {
            ImagemApi.getAll(resposta => {
                this.imagens = resposta.data;
            })
        }
    }
</script>

<style scoped>

</style>
