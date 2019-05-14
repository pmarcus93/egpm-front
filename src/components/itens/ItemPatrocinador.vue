<template>
    <div class="col-4 col-sm-4 col-md-2 my-auto">
        <div class="row">
            <div class="col-12 logoParceiro">
                <img :src="imagem">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemPatrocinador",
        props: ["imagem"]
    }
</script>

<style scoped>

    .logoParceiro {
        transition: linear all .2s;
    }

    .logoParceiro:hover {
        transform: scale(1.1);
    }

    .logoParceiro img {
        width: 100%;
    }

</style>