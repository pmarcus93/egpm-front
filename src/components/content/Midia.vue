<template>
    <div>
        <div class="container py-5">
            <div class="row">
                <div class="col-12 my-auto">
                    <Secao titulo="#EGPM na mídia"
                           descricao=""></Secao>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center">
                      <iframe
                          width="560"
                          height="315"
                          :src="'https://www.youtube.com/embed/' + secao.st_video + '&autoplay=1'"
                          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                          span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                          <a href=https://www.youtube.com/embed/qBsfiDiZjV4?autoplay=1><img src=https://img.youtube.com/vi/qBsfiDiZjV4/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          title="Vídeo do Youtube"
                      ></iframe>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center">
                      <iframe
                          width="560"
                          height="315"
                          :src="'https://www.youtube.com/embed/fEv7AFqWGiM&autoplay=1'"
                          srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                          span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                          <a href=https://www.youtube.com/embed/fEv7AFqWGiM?autoplay=1><img src=https://img.youtube.com/vi/fEv7AFqWGiM/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          title="Vídeo do Youtube"
                      ></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid depoimentos py-5">
            <div class="container">
                <div class="row">
                    <Secao
                            titulo="O que estão falando do #EGPM?"
                    ></Secao>

                    <div></div>
                    <Depoimento v-for="(item) in comentarios"
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
    import Secao from "../itens/Section";
    import Depoimento from "../itens/Testimonial";
    import ComentarioApi from "@/services/ComentarioApi";
    import SecaoApi from "@/services/SecaoApi";

    export default {
        name: 'Midia',
        components: {Depoimento, Secao},

        created() {
            ComentarioApi.getAllComentarios(retorno => {
                this.comentarios = retorno.data.data;
            });

            SecaoApi.getSecao("na-midia", result => {
                this.secao = result.data.data;
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

    .video {
        margin-top: 30px;
        border: none;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
    }

</style>

