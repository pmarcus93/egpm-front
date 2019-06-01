<template>
    <div class="col-4 col-sm-4 col-md-2 my-auto">
        <div class="row">
            <div class="col-12 logoParceiro">
                <a :href="link">
                    <img :src="imagem" :title="'Logo da empresa ' + altimg">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemPatrocinador",
        props: [
            "imagem",
            "link",
            "altimg"
        ]
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