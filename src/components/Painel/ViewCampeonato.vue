<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="CAMPEONATO"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/campeonatos/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">

                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Link</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>

                    <tbody>

                    <ItemTrCampeonato v-for="(item, indice) in campeonatos"
                    :nome="item.st_nome"
                    :descricao="item.st_descricao"
                    :id="item.id_jogo"
                    :imagem="item.st_imagem">

                    </ItemTrCampeonato>

                    </tbody>

                </table>

            </div>


        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import EgpmApi from "../../services/EgpmApi";
    import ItemTrCampeonato from "./ItemTrCampeonato";

    export default {
        name: "ViewCampeonato",
        components: {ItemTrCampeonato, BarraTitulo},
        created() {
            var self = this;
            EgpmApi.getAllCampeonatos(campeonatos => {
                self.campeonatos = campeonatos.data;
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