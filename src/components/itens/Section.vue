<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section>
                    <h2 class="text-center content-title">{{titulo}}</h2>
                    <p class="text-center">{{descricao}}</p>
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
