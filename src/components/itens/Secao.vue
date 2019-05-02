<template>


            <div class="col-6 my-auto">
                <section>
                    <h1 class="text-left mb-4 titulo-secao">{{titulo}}</h1>
                    <p class="mt-3 text-justify">{{descricao}}</p>
                </section>
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

<style>
    .titulo-secao {
        font-family: Archive;
        font-size: 3em;
    }


</style>