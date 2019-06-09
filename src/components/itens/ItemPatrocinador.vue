<template>
    <div class="col-sm-12 col-md-2 mt-5">
        <div class="row">
            <div class="col-12 logoParceiro text-center">
                <a :href="link">
                    <img height="75" :src="imagem" :title="'Logo da empresa ' + altimg">
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

<style scoped lang="scss">

    .logoParceiro {
        @include sm {
            :hover {
                transform: scale(1.1);
                transition: linear all .2s;
            }
        }
    }

    .logoParceiro img {
    }

</style>