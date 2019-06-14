<template>
    <div>
        <FundoFixo
                imagem="https://lh3.googleusercontent.com/Uz5M0FOZIlrbBeWyXSnGOpLjoHnlbX1z6hDANfygYVx5CZwYvPfxAzIDKhNf0KeA0lswisNZMv2qk2ndZQqGj-_QtQxSGhe390IsEYn2UiB_jVVzFRHb4YHR2gmGqo29y_vnl4t1B4377s2Mt_dCIK3uf2s4jlKunz5Z7XW49qVMDBLG8rTkcHoh4qqPE4NJZjAMLt50q1O-qlP9eIX4czoRSViBJRWosbO0_nuF-ZK61G9FFlbbl7c8ju8LehHwNF82T9w6MZVMNEU2zTW0vtXAR5TXIndBaCsvQqLUPZok5j0P0FvNDKnVjnBc1AbQGoPpAaIDkmOw0LPZcnEq9yBctn1c7DlPWlPcc69xnSceBjaNQsdLXVbpwU4f6I1Sd4-5JbwCAcSwCC-fgatTrv9m3tJJ2QUIT9odt7HCH9WQFt7kAvAYckCoeI23s5i9vaCU4weYHLvmrSojbf8wPdtQa8MsC8kEHJMC43oJwLxx5jhHvg5jpZZDNhadmjW1Aj0L2WGGlaDBUyUEM1LEvhBPSKGuYfYZnAwW2sNdszceXCvKM88dbY-jqecw_F2quFgcckj1yySFjUxUSCQFlJP5YJ2992FN1p_aklsbco41Resy0sfRG5ZbUCQvFXUT5pxAvZG98LAQUmVP9K2iv031HwVgILpB=w1043-h695-no"
                sobreimagem="rgba(0,0,0,0.1)"
        >
        </FundoFixo>

        <div class="col-xl-4 col-md-8 col-sm-12 mx-auto vh-100 align-items-center d-flex">
            <div class="box-login">
                <form v-on:submit.prevent="submit">
                    <div>
                        <img class="col-12" src="../assets/images/logoegpm3.png"
                             alt="Logo EGPM (Encontro Gamer Pará de Minas) 3ª Edição">
                    </div>
                    <div class="form-group mt-5">
                        <label for="st_login" class="label-login">Usuário:</label>
                        <input v-model="usuario.st_login" id="st_login" class="form-control">

                        <label for="st_senha" class="label-login mt-4 ">Senha:</label>
                        <input v-model="usuario.st_senha" id="st_senha" type="password" class="form-control">

                        <vue-recaptcha
                                ref="recaptcha"
                                @verify="onCaptchaVerified"
                                @expired="onCaptchaExpired"
                                size="invisible"
                                sitekey="6Lf73qcUAAAAAJjQSVZEFcpseQNTGXCIhkNIEboT">
                        </vue-recaptcha>

                        <button class="btn-primary btn form-control mt-4">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import FundoFixo from "./itens/FundoFixo";
    import EgpmApi from "@/services/EgpmApi";
    import LoginApi from "@/services/LoginApi";
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "Login",
        components: {FundoFixo, VueRecaptcha},
        created() {
            localStorage.clear();
        },
        data() {
            return {
                usuario: {
                    st_login: '',
                    st_senha: '',
                    bl_statuslogin: false
                },
                credenciais: {
                    id_usuario: null,
                    st_token: null
                }
            }
        },
        methods: {
            login: function (recaptchaToken) {
                this.usuario.recaptchatoken = recaptchaToken;
                LoginApi.postLogin(this.usuario, result => {

                    var opts = {};
                    if (!result.data.status) {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);
                    }

                    this.usuario.bl_statuslogin = result.data.status;
                    this.credenciais = result.data.data;
                    localStorage.setItem('st_token', result.data.data.st_token);
                    localStorage.setItem('id_usuario', result.data.data.id_usuario);

                    if (this.usuario.bl_statuslogin) {
                        this.$router.push({
                            name: 'painel',
                        })
                    }

                })
            },

            verificaLogin: function () {
                var self = this;
                LoginApi.verificaLogin(self.credenciais, result => {
                    self.usuario.bl_statuslogin = result.data.status;

                    if (self.usuario.bl_statuslogin) {
                        this.$router.push({
                            name: 'painel',
                        })
                    }
                })
            },
            onCaptchaExpired: function () {
                this.$refs.recaptcha.reset();
            },

            onCaptchaVerified: function (recaptchaToken) {
                const self = this;
                self.$refs.recaptcha.reset();
                this.login(recaptchaToken);

            },

            submit: function () {
                this.$refs.recaptcha.execute();
            },
        },

    }
</script>

<style lang="scss" scoped>
    .label-login {
        font-size: 1.2em;
        font-weight: bold;
        color: $color-title;
    }

    .box-login {
        background: white;
        border-radius: 20px;
        padding: 30px 10px;
        -webkit-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
        box-shadow: 0 0 19px 0 rgba(0, 0, 0, 0.75);
    }
</style>
