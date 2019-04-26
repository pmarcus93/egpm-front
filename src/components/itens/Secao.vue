<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section class="my-4">
                    <h1 class="text-center">{{titulo}}</h1>
                    <p>{{descricao}}</p>
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

<style>

</style>