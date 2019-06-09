<template>
    <div class="container duvida">
        <div class="row no-gutters">

            <div class="col-12">
                <h1 class="mt-4 titulo-secao text-center">FAQ</h1>
                <h2 class="mt-2 subtitulo text-center">Respostas para as dúvidas mais frequentes</h2>

                <!-- TODO: Lucas, acho que aqui você pode definir classes/ids dinâmicos para gerar os cards. -->
                <div id="accordionExample" class="my-5">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Menores de idade podem participar do evento?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                Podem, desde que acompanhados de um responsável adulto.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Duvida",
        components: {}
    }
</script>

<style lang="scss" scoped>

    .card-header {
        background-color: $rainbow-green;
        font-family: $font-archive;
        button {
            color: $light-text;
        }
    }

    .duvida {
        color: $color-title;
    }
    
    .secao-duvidas {
        display: flex;
        align-self: center;
    }

    .subtitulo {
        @include sm {
            text-align: center;
        }
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 3em;
        text-align: center;
    }

</style>
