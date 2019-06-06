<template>
    <div class="container-fluid p-0">
        <div class="row barra-topo">
            <div class="col-md-3">
                <div class="text-center">
                    <router-link to="/">
                        <img class="col-10 logo" src="../assets/logoegpm3.png" alt="Logo EGPM3">
                    </router-link>
                </div>
            </div>
            <div class="col-md-9  my-auto">
                <!--                <div class="d-inline "><i class="fa fa-arrow-left fa-2x"></i></div>-->
                <div class="d-inline float-right my-auto mr-4"><span class="nome-adm mx-4 px-4">{{usuario.st_nome}} </span>
                    <router-link :to="'/painel/usuario/editar/'+usuario.id_usuario"> <i class="clicavel mr-2 fa fa-cog fa-2x"></i> </router-link>
                    <i v-on:click="logout" class="clicavel mr-2 fa fa-sign-in-alt fa-2x"></i>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-md-3 menu p-0">

                <ItemMenuPainel v-for="(item) in menu"
                        :titulo="item.titulo"
                        :icone="item.icone"
                        :route="item.route"
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
                EgpmApi.verificaLogin(this.credenciais, result => {
                    if (!result.data.status) {
                        this.$router.push({
                            name: 'login',
                        })
                    } else {
                        EgpmApi.getUsuario(this.credenciais, result => {
                            this.usuario = result.data;
                        })
                    }
                })
            },
            logout: function () {
                EgpmApi.logout(this.credenciais, result => {
                    if (result.data.status) {
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
                usuario: {
                    id_usuario: null,
                    st_nome: null,
                    st_login: null
                },
                menu: [
                    {
                        titulo : "Campeonatos",
                        icone : "gamepad",
                        route : "campeonatos",
                    },

                    {
                        titulo : "Dúvidas",
                        icone : "comments",
                        route : "duvidas"
                    },

                    {
                        titulo : "Comentários",
                        icone : "quote-left",
                        route : "comentarios"
                    },

                    {
                        titulo : "Patrocinadores",
                        icone : "hand-holding-usd",
                        route : "patrocinadores",
                    },

                    {
                        titulo : "Mensagem",
                        icone : "handshake",
                        route : "apoios",
                    },

                    {
                        titulo : "Seções",
                        icone : "columns",
                        route : "secoes",
                    },

                    {
                        titulo : "Geral",
                        icone : "box-open",
                        route : "geral",
                    },

                    {
                        titulo : "Imagens",
                        icone : "images",
                        route : "imagens",
                    }

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .menu {
        background: #343957;
        height: calc(100vh - 50px);
    }

    .view-info {
        height: calc(100vh - 50px);
        overflow-y: scroll;
    }

    .barra-topo {
        color: #343957;
        background: #fff;
        height: 50px;
        -webkit-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        z-index: 2;
        position: relative;
    }

    .logo {
        height: 40px;
        width: auto;
        margin-top: 7.5px !important;
    }

    .nome-adm {
        font-size: 1.5em;
        border-right: 2px solid $color-primary-painel;
    }

    .clicavel {
        cursor: pointer;
        transition: all linear .2s;
        color: $color-primary-painel !important;
    }

    .clicavel:hover {
        opacity: .8;
        transform: scale(1.2);
    }


</style>