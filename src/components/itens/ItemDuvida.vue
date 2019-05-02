<template>

    <div class="col-12 py-4 item-duvida">

            <div class="col-12 text-center my-4"><i class="fa fa-comments fa-3x"></i></div>
            <div class="col-12 duvida ">{{duvida}}</div>
            <div class="col-12 resposta  my-4">{{resposta}}</div>

    </div>

</template>

<script>
    export default {
        name: "ItemDuvida",
        props: ["duvida", "resposta"],
    }
</script>

<style scoped>
    .duvida {
        font-size: 1.5em;
        font-weight: bold;
    }

    .item-duvida {
        background: #c0ffce;
    }
</style>