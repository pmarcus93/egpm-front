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

<style scoped lang="scss">

    h1, h3 {
        color: $color-primary;
    }

    h1 {
        font-family: $font-archive;
        font-size: 3em;

        @include sm {
            font-size: 5em;
        }
    }

</style>
