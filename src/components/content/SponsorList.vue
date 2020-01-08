<template>
    <div class="patrocinadores py-4">
        <div class="container">

            <div v-if="realizadores.length > 0" class="row" :v-if="realizadores[0]">
                <div class="col-12 py-2 tipo-patrocinador">
                    <h4>Realização</h4>
                </div>

                <Sponsor v-for="(realizador) in realizadores"
                         :imagem="realizador.st_imagem"
                         :link="realizador.st_website"
                         :altimg="realizador.st_nome">
                </Sponsor>
            </div>

            <div v-if="patrocinadores.length > 0" class="row my-5">
                <div class="col-12 py-2 mb-4 tipo-patrocinador">
                    <div class="row">
                        <div class="col-12 my-auto">
                            <h4>Patrocínio</h4>
                        </div>
                    </div>
                </div>

                <Sponsor v-for="(patrocinador) in patrocinadores"
                         :imagem="patrocinador.st_imagem"
                         :link="patrocinador.st_website"
                         :altimg="patrocinador.st_nome">
                </Sponsor>
            </div>

            <div v-if="apoiadores.length > 0" class="row my-5">
                <div class="col-12 py-2 mb-4 tipo-patrocinador">
                    <div class="row">
                        <div class="col-12 my-auto">
                            <h4>Apoio</h4>
                        </div>
                    </div>
                </div>

                <Sponsor v-for="(apoiador) in apoiadores"
                         :imagem="apoiador.st_imagem"
                         :link="apoiador.st_website"
                         :altimg="apoiador.st_nome">
                </Sponsor>
            </div>

        </div>
    </div>
</template>

<script>
    import Sponsor from "../itens/Sponsor";
    import PatrocinadorApi from "@/services/PatrocinadorApi"

    export default {
        name: "Patrocinadores",
        components: {Sponsor},
        mounted() {
            PatrocinadorApi.getPatrocinadores(retorno => {
                this.patrocinadores = retorno.data.data;
            });

            PatrocinadorApi.getApoiadores(retorno => {
                this.apoiadores = retorno.data.data;
            });

            PatrocinadorApi.getRealizadores(retorno => {
                this.realizadores = retorno.data.data;
            });
        },
        data: function () {
            return {
                patrocinadores: [],
                apoiadores: [],
                realizadores: [],
            }
        }
    }
</script>

<style scoped lang="scss">

    h4 {
        text-transform: uppercase;
        text-align: center;
        @include sm {
            text-align: left;
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
