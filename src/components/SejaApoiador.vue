<template>
    <div>
        <FundoFixo
                sobreimagem="rgba(0,0,0,0)"></FundoFixo>

        <div class="animate">
            <div class="container">
                <div class="col-12">
                    <BannerMenor
                            titulo="Seja um apoiador"
                            descricao="Marque presença no maior evento de games da região! Preencha o formulário abaixo e entraremos em contato."
                    ></BannerMenor>
                </div>
            </div>

            <div class="container-fluid py-5">
                <div class="container">

                    <div class="row">
                        <div class="col-12 col-sm-10 col-lg-8 col-xl-6 mx-auto">

                            <form v-on:submit.prevent="submit">
                                <div class="form-group">
                                    <label for="st_nome">Nome:</label>
                                    <input id="st_nome" maxlength="25" v-model="apoio.st_nome" required type="text"
                                           class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="st_empresa">Empresa:</label>
                                    <input id="st_empresa" maxlength="25" v-model="apoio.st_empresa" required type="text"
                                           class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="st_email">Email:</label>
                                    <input id="st_email" maxlength="25" v-model="apoio.st_email" required type="email"
                                           class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="st_telefone">Telefone:</label>
                                    <input id="st_telefone" maxlength="11" v-model="apoio.st_telefone" required type="tel"
                                           class="form-control">
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary float-right"><i class="fa fa-paper-plane"></i> Enviar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <BlocoRodape></BlocoRodape>
        </div>
        <vue-recaptcha
                ref="recaptcha"
                @verify="onCaptchaVerified"
                @expired="onCaptchaExpired"
                size="invisible"
                sitekey="6Lf73qcUAAAAAJjQSVZEFcpseQNTGXCIhkNIEboT">
        </vue-recaptcha>
    </div>
</template>


<script>
    import FundoFixo from "./itens/FundoFixo";
    import BannerMenor from "./itens/BannerMenor";
    import ApoioApi from "@/services/ApoioApi";
    import BlocoRodape from "./itens/BlocoRodape";
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "SejaApoiador",
        components: {BlocoRodape, BannerMenor, FundoFixo, 'vue-recaptcha': VueRecaptcha},
        data() {
            return {
                apoio: {
                    st_nome: null,
                    st_empresa: null,
                    st_email: null,
                    st_telefone: null,
                    bl_analisado: 0
                },

            }
        },
        methods: {
            salvaapoio: function (recaptchaToken) {
                this.apoio.recaptchatoken = recaptchaToken;
                ApoioApi.post(this.apoio, result => {
                        var opts = {};

                        if (result.data.status) {
                            opts.title = 'Sucesso';
                            opts.text = "Mensagem enviada com sucesso.";
                            opts.type = 'success';
                            PNotify.alert(opts);
                            this.apoio = {};
                        } else {
                            opts.title = 'Erro';
                            opts.text = result.data.erro.message;
                            opts.type = 'error';
                            PNotify.alert(opts);
                        }
                    }
                )
            },
            onCaptchaExpired: function () {
                this.$refs.recaptcha.reset();
            },
            onCaptchaVerified: function (recaptchaToken) {
                const self = this;
                self.$refs.recaptcha.reset();
                this.salvaapoio(recaptchaToken);
            },
            submit: function () {
                this.$refs.recaptcha.execute();
            }
        }
    }
</script>

<style scoped lang="scss">
    .container-fluid {
        background: $light-text;
    }
</style>
