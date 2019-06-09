<template>
    <div class="pagina-duvidas">
        <FundoFixo
        ></FundoFixo>
        <div class="animate">
            <div class="container conteudo">
                <BannerMenor
                        titulo="Seja um apoiador"
                        descricao="Marque presença no maior encontro de games de Pará de Minas. Apoie o evento
                        e garanta a visibilidade da sua marca!"
                >
                </BannerMenor>

            </div>

            <div class="container apoie py-5 mb-5">
                <div class="row">

                    <div class="col-md-6 col-sm-12 my-auto">
                        <h2>Quero ser apoiador!</h2>
                        <p>Preencha o formulário de contato ao lado e entraremos em contato.</p>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <form v-on:submit.prevent="salvaapoio">
                            <div class="row">
                                <div class="form-group col-md-6 col-sm-12">
                                    <label for="st_nome">Nome:</label>
                                    <input id="st_nome" v-model="apoio.st_nome" required type="text"
                                           class="form-control">
                                </div>

                                <div class="form-group col-md-6 col-sm-12">
                                    <label for="st_empresa">Empresa:</label>
                                    <input id="st_empresa" v-model="apoio.st_empresa" required type="text"
                                           class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6 col-sm-12">
                                    <label for="st_email">Email:</label>
                                    <input id="st_email" v-model="apoio.st_email" required type="email"
                                           class="form-control">
                                </div>

                                <div class="form-group col-md-6 col-sm-12">
                                    <label for="st_telefone">Telefone:</label>
                                    <input id="st_telefone" v-model="apoio.st_telefone" required type="text"
                                           class="form-control">
                                </div>

                                <div class="form-group col-sm-12">
                                    <button class="btn btn-success float-right"><i class="fa fa-paper-plane"></i> Enviar
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <BlocoRodape></BlocoRodape>
        </div>
    </div>
</template>


<script>
    import FundoFixo from "./itens/FundoFixo";
    import BannerMenor from "./itens/BannerMenor";
    import ApoioApi from "@/services/ApoioApi";
    import BlocoRodape from "./itens/BlocoRodape";

    export default {
        name: "SejaApoiador",
        components: {BlocoRodape, BannerMenor, FundoFixo},
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
            salvaapoio: function () {
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
                })
            },
        }
    }
</script>

<style scoped>
    .apoie {
        background: whitesmoke;
    }
</style>