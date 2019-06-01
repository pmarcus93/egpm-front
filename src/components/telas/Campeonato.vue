<template>
    <SecaoRight
            classimage="bgcampeonatos"
            titulo="CAMPEONATOS"
            descricao="Mortal Kombat 11, Just Dance 2020, Pro Evolution
            Soccer 2020, Street Fighter V e muitos outros. Confira!"
            rota="/campeonatos"
            textobotao="Lista de Campeonatos"
            colorborder="yellow"
            type="parallax">
    </SecaoRight>
</template>

<script>
    import SecaoRight from "../itens/SecaoTextoDireita";

    export default {
        name: "Campeonato",
        components: {SecaoRight}
    }
</script>

<style scoped>

</style>