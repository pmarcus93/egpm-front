<template>
    <div>
        <div class="row">
            <BarraTitulo
                    titulo="JOGO"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/jogos/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Campeonato</th>
                        <th>Link</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <ItemTrCampeonato v-for="(item) in campeonatos"
                                      :nome="item.st_nome"
                                      :descricao="item.st_descricao"
                                      :id="item.id_jogo"
                                      :imagem="item.imagens[0].st_arquivo"
                                      :iscampeonato="item.bl_campeonato"
                    ></ItemTrCampeonato>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import JogoApi from "@/services/JogoApi";
    import ItemTrCampeonato from "./ItemTrCampeonato";

    export default {
        name: "ViewCampeonato",
        components: {ItemTrCampeonato, BarraTitulo},
        methods: {
            limitaTamanhoDescricao: function () {
                for (let i = 0; i < this.campeonatos.length; i++) {
                    if (this.campeonatos[i].st_descricao && this.campeonatos[i].st_descricao.length > 100) {
                        this.campeonatos[i].st_descricao = this.campeonatos[i].st_descricao.substring(0, 100) + "...";
                    }
                }
            }
        },
        created() {
            var self = this;
            JogoApi.getAll(campeonatos => {

                for (let i = 0; i < campeonatos.data.length; i++) {
                    if (campeonatos.data[i].imagens[0] === undefined) {
                        campeonatos.data[i].imagens = [{st_arquivo: ""}];
                    }
                }

                self.campeonatos = campeonatos.data;
                this.limitaTamanhoDescricao();
            })

        },
        data: function () {
            return {
                campeonatos: []
            }
        }

    }
</script>

<style lang="scss" scoped>


</style>
