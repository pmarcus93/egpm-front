<template>
    <SecaoTextoDireita
            classimage="bgcampeonatos"
            titulo="JOGOS"
            descricao="Mortal Kombat 11, Just Dance 2020, Pro Evolution
            Soccer 2020, Street Fighter V e muitos outros. Confira!"
            rota="/campeonatos"
            textobotao="Lista de Campeonatos"
            colorborder="yellow"
            type="parallax">
    </SecaoTextoDireita>
</template>

<script>
    import SecaoTextoDireita from "../itens/SecaoTextoDireita";

    export default {
        name: "Campeonato",
        components: {SecaoTextoDireita}
    }
</script>

<style scoped>

</style>