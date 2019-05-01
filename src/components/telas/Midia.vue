<template>

    <div class="midia">
        <div class="container">
            <div class="row">
                <Secao titulo="#EGPM na mídia"
                descricao="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she"></Secao>
                <div class="col-xl-6 col-sm-12">
                    <div class="d-flex justify-content-center">
                    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/wW9VDhyh2C0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>

                </div>

            </div>

            <div class="row">
                <div class="col-12 titulo-depoimentos mt-5 text-center">O QUE ELES ACHARAM DO EGPM</div>
                <div class="col-sm-12 col-xl-4 depoimento">
                    <div class="col-12 texto-depoimento py-4 text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she</div>
                    <div class="col-12 autor-depoimento py-4">@fulanobbeltrano</div>
                </div>
                <div class="col-sm-12 col-xl-4 depoimento">
                    <div class="col-12 texto-depoimento py-4 text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she</div>
                    <div class="col-12 autor-depoimento py-4">@fulanobbeltrano</div>
                </div>
                <div class="col-sm-12 col-xl-4 depoimento">
                    <div class="col-12 texto-depoimento py-4 text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust ry's standard dummy text ever since the 1500s, whent was popularised in the 1960s with the release of Letr aset she</div>
                    <div class="col-12 autor-depoimento py-4">@fulanobbeltrano</div>
                </div>

            </div>

        </div>
    </div>

    <!--<div class="midia py-4">-->
        <!--<div class="container">-->
            <!--<div class="row">-->
                <!--<div class="col-12">-->
                    <!--<Secao titulo="#EGPM na mídia"></Secao>-->
                <!--</div>-->

                <!--<div class="col-12">-->
                    <!--<div class="d-flex justify-content-center">-->
                        <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/wW9VDhyh2C0"-->
                                <!--allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>-->
                    <!--</div>-->
                <!--</div>-->

            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
</template>

<script>
    import Secao from "../itens/Secao";

    export default {
        name: 'Midia',
        components: {Secao}
    }
</script>

<style>

    .midia {
        /*background: #2F55A6;*/
        /*color: white;*/
        padding-top: 10%;
        padding-bottom: 10%;
        color: #545457;
    }

    .video {
        border: none;
        -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
    }

    .titulo-depoimentos {
        font-size: 3em;
        font-family: Archive;

    }

    .texto-depoimento {
        border-bottom: 3px darkslategray solid;
    }

    .autor-depoimento {
        font-weight: bold;
    }

    .depoimento {
        transition: linear .2s all;
    }

    .depoimento:hover {
        transform: scale(1.09);
        background: whitesmoke;
    }

</style>

