<template>
    <div class="midia">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 my-auto">
                    <Secao titulo="#EGPM na mídia"
                           descricao=""></Secao>
                </div>
                <div class="col-lg-6">

                    <div class="d-flex justify-content-center">
                        <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/wW9VDhyh2C0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>

                </div>

            </div>

            <div class="row">
                <div class="col-12 titulo-depoimentos mt-5 text-center">O QUE ELES ACHARAM DO #EGPM</div>

                <Depoimento v-for="(item, indice) in comentarios" v-if="indice<3"
                        :depoimento="item.st_comentario"
                        :autor="item.st_autor">
                </Depoimento>

            </div>
        </div>
    </div>

</template>

<script>
    import Secao from "../itens/Secao";
    import Depoimento from "../itens/Depoimento";
    import ComentarioApi from "@/services/ComentarioApi";

    export default {
        name: 'Midia',
        components: {Depoimento, Secao},

        created() {
            ComentarioApi.getAllComentarios(retorno => {
                this.comentarios = retorno.data;
            })
        },

        data() {
            return {
                comentarios: []
            }
        }
    }
</script>

<style lang="scss">

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

