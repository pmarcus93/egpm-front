<template>
    <div class="patrocinadores">
        <div class="container">
            <div class="row">
                <div class="col-12 py-2 mb-4 tipo-patrocinador center-mobile"><h4>REALIZAÇÃO:</h4></div>
                <ItemPatrocinador
                        imagem="http://fapam.edu.br/escolheportal/img/fapam.png"
                ></ItemPatrocinador>
            </div>

            <div class="row my-3">
                <div class="col-12 py-2 mb-4 tipo-patrocinador">
                    <div class="row">
                        <div class="col-6 my-auto"><h4>APOIO:</h4></div>
                        <div class="col-6 my-auto">
                            <router-link to="/apoie">
                                <button class="btn btn-success float-right">SEJA UM APOIADOR</button>
                            </router-link>
                        </div>
                    </div>
                </div>

                <ItemPatrocinador v-for="(patrocinador) in patrocinadores"
                                  :imagem="patrocinador.st_imagem"
                                  :link="patrocinador.st_website"
                                  :altimg="patrocinador.st_nome"
                ></ItemPatrocinador>

            </div>
        </div>
    </div>
</template>

<script>
    import ItemPatrocinador from "../itens/ItemPatrocinador";
    import PatrocinadorApi from "@/services/PatrocinadorApi"

    export default {
        name: "Patrocinadores",
        components: {ItemPatrocinador},
        created() {
            PatrocinadorApi.getAllPatrocinadores(retorno => {
                this.patrocinadores = retorno.data;
            })
        },
        data: function () {
            return {
                patrocinadores: {
                    id_patrocinador: null,
                    st_email: null,
                    st_imagem: null,
                    st_nome: null,
                    st_website: null
                }
            }
        }
    }
</script>

<style scoped>

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .center-mobile {
            text-align: center;
        }
    }

    .patrocinadores {
        background: white;
        padding-top: 5%;
        padding-bottom: 5%;
        color: #545457;
    }

    .tipo-patrocinador {
        border-bottom: #afafb2 solid 2px;
    }

</style>