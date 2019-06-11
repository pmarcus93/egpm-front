<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-5">
        <a :href="link">
            <img class="img-fluid" :src="imagem" :title="'Logo da empresa ' + altimg">
        </a>
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

<style scoped lang="scss">

    img {
        max-height: 75px;
    }

</style>
