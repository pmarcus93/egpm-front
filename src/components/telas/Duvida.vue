<template>
    <div class="container duvida">
        <div class="row no-gutters">

            <div class="col-12">
                <h1 class="my-4 titulo-secao text-center">Dúvidas</h1>
                <p class="mt-3 subtitulo text-center">As dúvidas mais frequentes, respondidas aqui! <br>

                <div class="accordion my-5" id="accordionExample">
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
                                 anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemDuvida from "../itens/ItemDuvida";

    export default {
        name: "Duvida",
        components: {ItemDuvida}
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
