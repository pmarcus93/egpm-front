<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section>
                    <h1 class="titulo-secao text-center">{{titulo}}</h1>
                    <p class="text-justify">{{descricao}}</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Secao',
        props: [
            'titulo', 'descricao'
        ]
    }
</script>

<style scoped lang="scss">

    .titulo-secao {
        font-family: $font-archive;
        font-size: 2rem;
        @include sm {
            font-size: 2.5rem;
        }
    }

</style>
