<template>
    <div class="col-sm-6 col-xl-6 mt-5 mx-auto depoimento">
        <div class="avatar mx-auto">
            <img :src="imagens.sm.st_url"
                 loading="lazy"
              alt="Foto do autor(a).">
        </div>
        <p class="col-12 pt-4 text-center"><b>{{autor}}</b></p>
        <p class="col-12 text-justify">"{{depoimento}}"</p>
    </div>
</template>

<script>
    export default {
        name: "Depoimento",
        props: ["autor", "depoimento", "imagens"],
    }
</script>

<style scoped lang="scss">

    .avatar {
        height: 150px;
        width: 150px;

        img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>
