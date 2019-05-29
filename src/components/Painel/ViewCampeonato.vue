<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="CAMPEONATO"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/campeonatos/adicionar"
            >
            </BarraTitulo>


        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";

    export default {
        name: "ViewCampeonato",
        components: {BarraTitulo},

    }
</script>

<style lang="scss" scoped>


</style>