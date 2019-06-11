<template>
    <div class="localizacao">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 my-auto conteudo-texto">
                    <h1 class="mb-4 titulo-secao">#EGMP3</h1>
                    <h4>LOCAL</h4>
                    <p>
                        {{localizacao.st_local}} <br>
                        {{localizacao.st_endereco}} <br>
                    </p>

                    <h4>DATAS & HORÁRIOS</h4>
                    <p>
                        <span v-if="diahorario.data"
                              v-for="(item) in diahorario.data">{{item.st_diahorario}} <br></span>
                    </p>

                </div>
                <div class="col-sm-12 col-md-6 mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8677220905865!2d-44.61226498529925!3d-19.845549140813137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa73c0a76f18ba9%3A0x18a18e6f43c7f071!2sFaculdade+de+Par%C3%A1+de+Minas+-+FAPAM!5e0!3m2!1spt-BR!2sbr!4v1557353297848!5m2!1spt-BR!2sbr"
                            width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import LocalizacaoApi from "@/services/LocalizacaoApi";
    import DiaHorarioApi from "@/services/DiaHorarioApi";

    export default {
        name: "Localizacao",

        created() {
            LocalizacaoApi.getOne(1, result => {
                this.localizacao = result.data;
            });

            DiaHorarioApi.getAll(result => {
                this.diahorario.data = result.data;
            })
        },
        data() {
            return {
                localizacao: {
                    id_localizacao: "",
                    st_cep: "",
                    st_endereco: "",
                    st_local: "",
                    st_mapa: "",
                },
                diahorario: {
                    data: null
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .localizacao {
        background: $light-text;
        padding-top: 5%;
        padding-bottom: 5%;
        color: #545457;
    }

    .titulo-secao {
        text-align: center;
        font-family: $font-archive;
        font-size: 2.5rem;
        @include sm {
            font-size: 3rem;
        }
    }

    .conteudo-texto {
        text-align: justify;
        @include sm {
            text-align: left;
        }
    }

    .mapa {
        margin-top: 30px;
    }

</style>
