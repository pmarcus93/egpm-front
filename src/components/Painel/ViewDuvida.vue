<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="DÚVIDAS"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/duvidas/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">

                <table class="table">
                    <thead>
                    <tr>
                        <th>Dúvida</th>
                        <th>Resposta</th>
                        <th>Ordem</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>

                    <tbody>

                    <ItemTrDuvida v-for="(item, indice) in duvidas"
                                      :nome="item.st_nome"
                                      :descricao="item.st_descricao"
                                      :id="item.id_jogo"
                                   >

                    </ItemTrDuvida>

                    </tbody>

                </table>

            </div>


        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ItemTrDuvida from "./ItemTrDuvida";
    import EgpmApi from "../../services/EgpmApi";

    export default {
        name: "ViewDuvida",
        components: {ItemTrDuvida, BarraTitulo},
        created() {
            var self = this;
            EgpmApi.getAllDuvidas(retorno => {
                self.duvidas = retorno.data;
            })

        },
        data: function () {
            return {
                duvidas: []
            }
        }
    }
</script>

<style scoped>

</style>