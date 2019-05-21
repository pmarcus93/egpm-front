<template>
    <div class="midia">
        <div class="container">
            <div class="row">
                <Secao titulo="#EGPM na mídia"
                       descricao="Saiba mais sobre o EGPM!"></Secao>
                <div class="col-xl-6 col-sm-12">
                    <div class="d-flex justify-content-center">
                        <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/wW9VDhyh2C0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 titulo-depoimentos mt-5 text-center">O QUE ELES ACHARAM DO EGPM</div>

                <Depoimento
                        depoimento="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she"
                        autor="@fulanobbeltrano">
                </Depoimento>

                <Depoimento
                        depoimento="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she"
                        autor="@fulanobbeltrano">
                </Depoimento>

                <Depoimento
                        depoimento="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she"
                        autor="@fulanobbeltrano">
                </Depoimento>

            </div>
        </div>
    </div>

</template>

<script>
    import Secao from "../itens/Secao";
    import Depoimento from "../itens/Depoimento";

    export default {
        name: 'Midia',
        components: {Depoimento, Secao}
    }
</script>

<style>

    .midia {
        background: whitesmoke;
        padding-top: 5%;
        padding-bottom: 5%;
        color: #545457;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .video {
            margin-top: 30px;
            border: none;
            -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
            box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        }

        .titulo-depoimentos {
            font-size: 2em;
            font-family: Archive;

        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {
        .video {
            border: none;
            -webkit-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
            box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
        }

        .titulo-depoimentos {
            font-size: 2.5em;
            font-family: Archive;

        }
    }


</style>

