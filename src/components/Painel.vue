<template>
    <div class="container-fluid p-0">
        <div class="row mx-0">

            <div class="col-md-3 menu p-0">

                <div class="nome-adm p-2"><i class="fa fa-user mr-2 ml-5"></i>{{usuario.st_nome}}</div>

                <ItemMenuPainel v-for="(item) in menu"
                                :titulo="item.titulo"
                                :icone="item.icone"
                                :route="item.route"
                                :action="item.action"
                ></ItemMenuPainel>

            </div>

            <div class="col-9 view-info">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
    import EgpmApi from "@/services/EgpmApi";
    import UsuarioApi from "@/services/UsuarioApi";
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
                        UsuarioApi.get(this.credenciais.id_usuario, result => {
                            this.usuario = result.data;
                        })
                    }
                })
            },
            logout: function () {
                EgpmApi.logout(this.credenciais, result => {
                    this.$router.push({
                        name: 'login',
                    })
                })
            },
            actionpainel: function (acao) {

                if (acao === 'usuario') {
                    this.$router.push({
                        path: '/painel/usuario/editar/' + localStorage.getItem("id_usuario"),
                    })
                }

                if (acao === "sair") {
                    this.logout();
                }
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
                        titulo: "Usuário",
                        icone: "cog",
                        action: "usuario"
                    },
                    {
                        titulo: "Jogos",
                        icone: "gamepad",
                        route: "jogos",
                    },
                    {
                        titulo: "Dúvidas",
                        icone: "comments",
                        route: "duvidas"
                    },

                    {
                        titulo: "Comentários",
                        icone: "quote-left",
                        route: "comentarios"
                    },

                    {
                        titulo: "Patrocinadores",
                        icone: "hand-holding-usd",
                        route: "patrocinadores",
                    },

                    {
                        titulo: "Mensagem",
                        icone: "handshake",
                        route: "apoios",
                    },

                    {
                        titulo: "Seções",
                        icone: "columns",
                        route: "secoes",
                    },

                    {
                        titulo: "Geral",
                        icone: "box-open",
                        route: "geral",
                    },

                    {
                        titulo: "Imagens",
                        icone: "images",
                        route: "imagens",
                    },

                    {
                        titulo: "Sair",
                        icone: "sign-in-alt",
                        action: "sair"
                    }

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .menu {
        background: #343957;
        height: calc(100vh - 62px);
        overflow-y: auto;
    }

    .view-info {
        height: calc(100vh - 62px);
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
        color: white;
        background: #434970;

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