<template>
    <div class="container duvida">
        <div class="row no-gutters">
            <div class="col-md-3 col-sm-12 my-auto">
                <section>
                    <h1 class="my-4 titulo-secao">Dúvidas</h1>
                    <p class="mt-3 subtitulo">As dúvidas mais frequentes respondidas.<br>
                        <router-link to='/duvidas'>
                            <button class="btn btn-light my-1">Outras dúvidas</button>
                        </router-link>
                    </p>
                </section>
            </div>

            <div class="col-md-3 col-sm-12 ">
                <ItemDuvida
                        duvida="Menores de idade podem participar do envento?"
                        resposta="Sim. Desde que tenham um responsável como acompanhamte."
                ></ItemDuvida>
            </div>

            <div class="col-md-3 col-sm-12 ">
                <ItemDuvida
                        background="#89FFC7"
                        duvida="Ingresso é válido para os 2 dias de evento?"
                        resposta="Sim. O ingresso é único e válida para participar durante todos os dias de evento."
                ></ItemDuvida>
            </div>

            <div class="col-md-3 col-sm-12 ">
                <ItemDuvida
                        duvida="Posso participar de mais de um campeonato?"
                        resposta="Sim. Desde que seja feita a inscrição previamente e que não haja conflitos de horários."
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

<style scoped>

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
        color: #545457;
    }

</style>