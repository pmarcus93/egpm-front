<template>
    <div>

        <h3 class="titulo p-4"> <i class="fa fa-comments "></i> {{pergunta}}</h3>
        <div class="resposta pb-3">
            <p>
                {{resposta}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DuvidaBox",
        props: ['pergunta', 'resposta']
    }
</script>

<style scoped>
    .titulo {
        background: whitesmoke;
    }
</style>