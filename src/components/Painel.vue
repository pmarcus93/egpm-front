<template>
    <div class="container-fluid p-0">
        <div class="row barra-topo">
            <div class="col-md-3">
                <div class="text-center">
                    <img class="col-10 logo" src="../assets/logoegpm3.png">
                </div>
            </div>
            <div class="col-md-9  my-auto">
                <div class="d-inline "><i class="fa fa-arrow-left fa-2x"></i></div>
                <div class="d-inline float-right my-auto mr-4"><i class=" mr-2 fa fa-user fa-2x"></i> Administrador
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-md-3 menu p-0">

                <ItemMenuPainel
                        titulo="Campeonatos"
                        icone="gamepad"
                        route="campeonatos"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Dúvidas"
                        icone="comments"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Comentários"
                        icone="quote-left"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Sobre"
                        icone="user"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Datas"
                        icone="clock"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Patrocinadores"
                        icone="hand-holding-usd"
                        route="patrocinadores"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Social"
                        icone="share"
                ></ItemMenuPainel>

                <ItemMenuPainel
                        titulo="Ícones"
                        icone="share"
                ></ItemMenuPainel>

            </div>

            <div class="col-9 view-info">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    import EgpmApi from "@/services/EgpmApi.js";
    import ItemMenuPainel from "./Painel/ItemMenuPainel";

    export default {
        name: "Painel",
        components: {ItemMenuPainel},
        mounted() {
            this.credenciais.st_token = localStorage.getItem('st_token');
            this.credenciais.id_usuario = localStorage.getItem('id_usuario');
            this.verificaLogin();
        },
        methods: {
            verificaLogin: function () {
                var self = this;
                EgpmApi.verificaLogin(self.credenciais, result => {
                    if (!result.data.status) {
                        this.$router.push({
                            name: 'login',
                        })
                    }
                })
            }
        },
        data() {
            return {
                credenciais: {
                    id_usuario: null,
                    st_token: null
                },
                options: {},
            }
        }
    }
</script>

<style scoped>

    .menu {
        background: #343957;
        height: calc(100vh - 60px);
        font-family: Roboto;

    }

    .view-info {
        height: calc(100vh - 60px);
        overflow-y: scroll;
    }

    .barra-topo {
        color: #343957;
        background: #fff;
        height: 60px;
        -webkit-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        z-index: 2;
        position: relative;
    }

    .logo {
        height: 45px;
        width: auto;
        margin-top: 7.5px !important;
    }


</style>