<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section>
                    <h1 class="text-center mb-4">{{titulo}}</h1>
                    <p class="mt-3">{{descricao}}</p>
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