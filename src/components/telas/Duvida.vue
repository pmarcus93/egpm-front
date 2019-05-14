<template>
    <div class="container"
         data-animation
         data-animation-from=" transform: translateY(250px)"
         data-animation-to="transform: translateY(0)">
        <div class="row no-gutters">
            <div class="col-md-3 col-sm-12 my-auto">
                <section>
                    <h1 class="text-left my-4 titulo-secao">Dúvidas</h1>
                    <p class="mt-3 ">As dúvidas mais frequentes respondidas.<br>
                        <a href="#">Outras dúvidas</a></p>
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
    .titulo-secao {
        font-family: Archive;
        font-size: 3em;
    }
</style>