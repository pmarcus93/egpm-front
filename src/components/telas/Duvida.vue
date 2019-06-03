<template>
    <div class="container duvida">
        <div class="row">

            <div class="col-md-12 col-lg-3">
                <section class="">
                    <h1 class="my-4 titulo-secao">Dúvidas</h1>
                    <p class="mt-3 subtitulo">As dúvidas mais frequentes respondidas.<br>
                        <router-link to='/duvidas'>
                            <button class="btn btn-light my-1">Outras dúvidas</button>
                        </router-link>
                    </p>
                </section>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        background="#89FFC7"
                        duvida="Menores de idade podem participar do envento?"
                        resposta="Sim. Desde que acompanhado por um responsável."
                ></ItemDuvida>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        background="#EA2A3A"
                        duvida="Ingresso é válido para os 2 dias de evento?"
                        resposta="Sim. O ingresso é único e válido para ambos os dias do evento."
                ></ItemDuvida>
            </div>

            <div class="col-md-12 col-lg-3">
                <ItemDuvida
                        background="#FCD047"
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

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 3em;
            text-align: center;
        }

        .subtitulo {
            text-align: center;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 3em;
        }
    }

    .duvida {
        color: $color-title;
    }

</style>
