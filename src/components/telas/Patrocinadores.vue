<template>
    <div class="patrocinadores py-4">
        <div class="container">
            <div class="row">
                <div class="col-12 py-2 mb-4 tipo-patrocinador center-mobile"><h4>REALIZAÇÃO</h4></div>
                <ItemPatrocinador :v-if="apoiadores[0]" v-for="(apoiador) in apoiadores"
                                  :imagem="apoiador.st_imagem"
                                  :link="apoiador.st_website"
                                  :altimg="apoiador.st_nome"
                ></ItemPatrocinador>
            </div>

            <div class="row my-5">
                <div class="col-12 py-2 mb-4 tipo-patrocinador">
                    <div class="row">
                        <div class="col-6 my-auto"><h4>APOIO</h4></div>
                    </div>
                </div>

                <ItemPatrocinador :v-if="patrocinadores[0]" v-for="(patrocinador) in patrocinadores"
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
        mounted() {
            PatrocinadorApi.getPatrocinadores(retorno => {
                this.patrocinadores = retorno.data;
            });

            PatrocinadorApi.getApoiadores(retorno => {
                this.apoiadores = retorno.data;
            })
        },
        data: function () {
            return {
                patrocinadores: [],
                apoiadores: []
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
        color: #545457;
    }

    .tipo-patrocinador {
        border-bottom: #afafb2 solid 2px;
    }

</style>