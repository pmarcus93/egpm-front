<template>
    <div class="animate">
        <div class="row">

            <BarraTitulo
                    titulo="PATROCINADORES"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/patrocinadores/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Tipo</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <ItemTrPatrocinador v-for="(item) in patrocinadores"
                                        :nome="item.st_nome"
                                        :email="item.st_email"
                                        :id="item.id_patrocinador"
                                        :imagem="item.st_imagem"
                                        :tipo="item.id_tipo">
                    </ItemTrPatrocinador>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import PatrocinadorApi from "@/services/PatrocinadorApi";
    import ItemTrPatrocinador from "./ItemTrPatrocinador";

    export default {
        name: "ViewPatrocinador",
        components: {ItemTrPatrocinador, BarraTitulo},
        created() {
            PatrocinadorApi.getAll(retorno => {
                this.patrocinadores = retorno.data;
            })

        },
        data: function () {
            return {
                patrocinadores: [],
                patrocinador: {
                    id_patrocinador: null,
                    st_email: null,
                    st_imagem: null,
                    st_nome: null,
                    st_website: null,
                    id_tipo: null
                }
            }
        }
    }
</script>

<style scoped>

</style>