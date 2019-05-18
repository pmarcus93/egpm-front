<template>
    <div class="col-12 text-center py-4">
        <h1 class="py-3">{{erro}}</h1>
        <h3>{{subtitulo}}<br>
            {{descricao}}</h3>
    </div>
</template>

<script>
    export default {
        name: "ItemErro",
        props: [
            'erro',
            'subtitulo',
            'descricao'
        ]
    }
</script>

<style scoped>
    h1 {
        font-family: Archive;
        font-size: 5em;
    }

    h1, h3 {
        color: yellow;
    }

</style>