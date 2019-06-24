<template>
    <div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 my-auto">
                    <Secao titulo="#EGPM na mídia"
                           descricao=""></Secao>
                </div>
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <iframe class="video" width="560" height="315" :src="secao.st_link"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid depoimentos py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 titulo-depoimentos text-center">O QUE ELES ACHARAM DO #EGPM</div>
                    <Depoimento v-for="(item, indice) in comentarios" v-if="indice<3"
                                v-bind:depoimento="item.st_comentario"
                                v-bind:autor="item.st_autor"
                                v-bind:imagens="item.imagens"
                    >
                    </Depoimento>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import Secao from "../itens/Secao";
    import Depoimento from "../itens/Depoimento";
    import ComentarioApi from "@/services/ComentarioApi";
    import SecaoApi from "@/services/SecaoApi";

    export default {
        name: 'Midia',
        components: {Depoimento, Secao},

        created() {
            ComentarioApi.getAllComentarios(retorno => {
                this.comentarios = retorno.data;
            });

            SecaoApi.getSecao(5, result => {
                this.secao = result.data;
            })
        },

        data() {
            return {
                comentarios: [],
                secao: {
                    st_link: ""
                }
            }
        }
    }
</script>

<style lang="scss">

    .depoimentos {
        background: $bg-light;
    }

    .midia {
        background: $bg-light;
        color: $color-title;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .video {
        margin-top: 30px;
        border: none;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
    }

    .titulo-depoimentos {
        font-size: 2em;
        font-family: $font-archive;

        @include sm {
            font-size: 2.5em;
        }
    }

</style>

