<template>
    <div>
        <div class="col-md-3 menu vh-100">
            <div class="text-center">
                <img class="col-10 p-2" src="../assets/logoegpm3.png">
            </div>

            <div class="item-menu py-2">
                <span class="icon"><i class="fa fa-gamepad"></i> </span> <span class="text-nav"> Campeonatos</span>
            </div>

            <div class="item-menu py-2">
                <span class="icon"><i class="fa fa-gamepad"></i> </span> <span class="text-nav"> Dúvidas</span>
            </div>

            <div class="item-menu py-2">
                <span class="icon"><i class="fa fa-gamepad"></i> </span> <span class="text-nav"> Sobre</span>
            </div>

            <div class="item-menu py-2">
                <span class="icon"><i class="fa fa-gamepad"></i> </span> <span class="text-nav"> Comentários</span>
            </div>

        </div>
    </div>
</template>

<script>
    import EgpmApi from "@/services/EgpmApi.js";

    export default {
        name: "Painel",
        mounted() {
            this.credenciais.st_token = localStorage.getItem('st_token');
            this.credenciais.id_usuario = localStorage.getItem('id_usuario');
            this.verificaLogin();
        },
        methods: {
            verificaLogin: function () {
                var self = this;
                EgpmApi.verificaLogin(self.credenciais, result => {
                    if (!self.usuario.bl_statuslogin) {
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
                }
            }
        }
    }
</script>

<style scoped>
    .menu {
        background: whitesmoke;
    }

    .item-menu {
        font-size: 1.5em;
    }

    .item-menu {
        cursor: pointer;
    }

</style>