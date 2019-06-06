<template>
    <div class="container duvida">
        <div class="row no-gutters">

            <div class="col-md-12 col-lg-3 d-flex">
                <div class="secao-duvidas">
                    <section>
                        <h1 class="my-4 titulo-secao">Dúvidas</h1>
                        <p class="mt-3 subtitulo">As dúvidas mais frequentes, respondidas aqui! <br>
                            <router-link to='/duvidas'>
                                <button class="btn btn-light my-1">Outras dúvidas</button>
                            </router-link>
                        </p>
                    </section>
                </div>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        color="#3BAC7A"
                        duvida="Menores de idade podem participar do envento?"
                        resposta="Sim. Desde que acompanhado por um responsável."
                ></ItemDuvida>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        color="#EA2A3A"
                        duvida="Ingresso é válido para os 2 dias de evento?"
                        resposta="Sim. O ingresso é único e válido para ambos os dias do evento."
                ></ItemDuvida>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        color="#3255A5"
                        duvida="Posso participar de mais de um campeonato?"
                        resposta="Sim. Desde que não haja conflito de horários."
                ></ItemDuvida>
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
