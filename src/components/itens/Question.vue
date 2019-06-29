<template>

    <div class="col-md-4 mt-3">
        <div class="card border-dark">
            <div class="card-body text-dark">
                <h5 class="card-title font-weight-bold">{{duvida}}</h5>
                <p class="card-text">{{resposta}}</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ItemDuvida",
        props: ["duvida", "resposta", "id_duvida"],
    }
</script>

<style scoped lang="scss">

    .card {
        height: 100%;
    }

</style>
