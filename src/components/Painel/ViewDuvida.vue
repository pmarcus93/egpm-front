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

                    <ItemTrDuvida v-for="(item) in duvidas"
                                  :duvida="item.st_duvida"
                                  :resposta="item.st_resposta"
                                  :id="item.id_duvida"
                                  :ordem="item.nu_order"
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
    import DuvidaApi from "@/services/DuvidaApi";

    export default {
        name: "ViewDuvida",
        components: {ItemTrDuvida, BarraTitulo},
        created() {
            DuvidaApi.getAllDuvidas(retorno => {
                this.duvidas = retorno.data;
            })
        },
        data: function () {
            return {
                duvidas: [],
                duvida: {
                    id_duvida: null,
                    nu_order: null,
                    st_duvida: null,
                    st_resposta: null
                }
            }
        }
    }
</script>

<style scoped>

</style>