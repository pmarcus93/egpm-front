<template>
    <div class="row">
        <BarraTitulo
                titulo="USUÁRIOS"
                icon="check"
                texto-botao="Salvar"
                action="save"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados básicos:</h4>

                        <div class="form-group">
                            <label for="st_nome">Nome:</label>
                            <input id="st_nome" v-model="usuario.st_nome" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_login">Login:</label>
                            <input id="st_login" v-model="usuario.st_login" class="form-control">
                        </div>

                        <h4>Alteração de senha:</h4>

                        <div class="form-group">
                            <label for="st_senhaatual">Senha atual:</label>
                            <input id="st_senhaatual" v-model="usuario.st_senhaatual" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_senha">Nova Senha:</label>
                            <input id="st_senha" v-model="usuario.st_senha" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_senharepete">Repita a Nova Senha:</label>
                            <input id="st_senharepete" v-model="usuario.st_senharepete" class="form-control">
                        </div>

                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    import UsuarioApi from "@/services/UsuarioApi";
    import BarraTitulo from "./BarraTitulo";

    export default {
        name: "FormUsuarios",
        components: {BarraTitulo},
        created() {
            var usuariorota = {id_usuario: this.$route.params.id_usuario};
            if (this.$route.params.id_usuario) {
                UsuarioApi.get(usuariorota.id_usuario, resposta => {
                    var opts = {};
                    if (!resposta.data.id_usuario && !resposta.data.status) {
                        opts.title = 'Erro';
                        opts.text = resposta.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);
                        return;
                    }
                    this.usuario = resposta.data;
                })
            }
        },

        data: function () {
            return {
                usuario: {
                    st_nome: null,
                    st_login: null,
                    st_senha: null,
                    st_senhaatual: null,
                    st_senharepete: null
                }
            }
        },

        methods: {
            save: function () {

                var opts = {};

                if (this.usuario.st_senha !== this.usuario.st_senharepete) {
                    opts.title = 'Erro';
                    opts.text = "Senhas informadas não conferem.";
                    opts.type = 'error';
                    PNotify.alert(opts);
                    return;
                }

                UsuarioApi.post(this.usuario, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Usuário salvo com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'dashboard',
                        });
                        this.$parent.verificaLogin();

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
