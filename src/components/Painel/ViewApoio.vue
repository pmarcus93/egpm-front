<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="CONTATOS SITE"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Empresa</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Analisado</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>
                    <tbody>

                    <ItemTrApoio v-for="(item) in apoios"
                                 :nome="item.st_nome"
                                 :empresa="item.st_empresa"
                                 :email="item.st_email"
                                 :telefone="item.st_telefone"
                                 :analisado="item.bl_analisado"
                                 :id="item.id_apoio"
                    >
                    </ItemTrApoio>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ApoioApi from "@/services/ApoioApi";
    import ItemTrApoio from "./ItemTrApoio";

    export default {
        name: "ViewApoio",
        components: {ItemTrApoio, BarraTitulo},
        created() {
            ApoioApi.getAll(result => {
                var opts = {};
                if (!result.data[0] && !result.data.status) {
                    opts.title = 'Erro';
                    opts.text = result.data.erro.message;
                    opts.type = 'error';
                    PNotify.alert(opts);
                    return;
                }
                this.apoios = result.data;
            })

        },
        data: function () {
            return {
                apoios: []
            }
        }
    }
</script>

<style scoped>

</style>